import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/mergeMap';
import * as _ from 'underscore';
import * as Papa from 'papaparse';
import {MatSnackBar} from '@angular/material';

let mapping_attrs = ['cwl', 'user_id', 'student_number'];

function download(content, filename, contentType) {
  if (!contentType) {
    contentType = 'application/octet-stream';
  }
  let a = document.createElement('a');
  let blob = new Blob([content], {'type': contentType});
  a.href = window.URL.createObjectURL(blob);
  // a.download = filename; // typescript doesn't like this, need to figure out a way to set file name
  a.click();
}

@Component({
  templateUrl: 'bulk-search.component.html',
  providers: [SearchService]
})
export class BulkSearchComponent implements OnInit {
  filesToParse: FileList;
  public listResult;
  public headers;
  public display_columns;
  public downloadDisabled = true;

  constructor(private _searchService: SearchService, private snackBar: MatSnackBar) {}

  onFileChanged(fileInput: any) {
    this.filesToParse = fileInput.currentTarget.files;
  }

  createFilteredObservable(source, searchBy, searchKey, bufferSize, completeFunc) {
    return Observable.from(source)
      .filter(data => {
        let need_mapping = false;
        _.each(mapping_attrs, attr => {
          if (!data.hasOwnProperty(attr) || data[attr] === '' || data[attr] === null) {
            data[attr] = 'Pending';
            need_mapping = true;
          }
        });
        return need_mapping;
      })
      .pluck(searchBy)
      .map(data => { let r = {}; r[searchKey] = data; return r; })
      .bufferCount(bufferSize)
      .mergeMap(data => this._searchService.search(data))
      .subscribe(
        (data: Array<any>) => {
          console.log(data);
          _.each(data, item => {
            let needle = {};
            needle[searchBy] = item[searchKey];
            let row = _.find(source, needle);
            if (row) {
              _.each(mapping_attrs, attr => {
                if (row[attr] === 'Pending') {
                  row[attr] = item[attr];
                }
              });
            }
          });
        },
        error => {
          this.snackBar.open('Mapping Failed. Please try again.', 'x');
        },
        completeFunc
      );
  }

  search() {
    let obj = this;
    // copy array by value as we need to modify display_columns
    this.display_columns = mapping_attrs.slice();
    // TODO: error handling
    Papa.parse(this.filesToParse[0], {
      header: true,
      skipEmptyLines: true,
      complete: result => {
        // console.log(result.data);
        let usernameField, emailField;
        if (!usernameField) {
          if (result.data[0].hasOwnProperty('username')) {
            usernameField = 'username';
          } else if (result.data[0].hasOwnProperty('Username')) {
            usernameField = 'Username';
          }
          this.display_columns.unshift(usernameField)
        }
        if (!emailField) {
          if (result.data[0].hasOwnProperty('email')) {
            emailField = 'email';
          } else if (result.data[0].hasOwnProperty('Email')) {
            emailField = 'Email';
          }
          this.display_columns.unshift(emailField)
        }

        if (!usernameField && !emailField) {
          throw new Error('File doesn\'t contain either username or email column!');
        }

        obj.headers = _.union(Object.keys(result.data[0]), mapping_attrs);
        obj.listResult = Observable.of(result.data);
        this.createFilteredObservable(result.data, usernameField, 'edx_username', 5, () => {
          this.createFilteredObservable(result.data, emailField, 'email', 20, () => {
            // clean up
            _.each(result.data, row => {
              _.each(mapping_attrs, attr => {
                if (row[attr] === 'Pending') {
                  row[attr] = '';
                }
              });
            });
            this.downloadDisabled = false;
            this.snackBar.open('Mapping Completed! The result can be downloaded by clicking "Download" button.', 'x');
          });
        })
      }
    });
  }

  Download() {
    console.log('Downloading Files');
    this.listResult.subscribe(data => {
      let csv = Papa.unparse(data);
      download(csv, 'filename.csv', 'text/csv');
    });
  }

  ngOnInit() {
  }
}
