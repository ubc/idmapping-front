import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/mergeMap';
/// <reference path="../../../typings/main/ambient/papaparse/index.d.ts" />
/// <reference path="../../../typings/main/ambient/underscore/index.d.ts" />
import * as _ from 'underscore';
import * as Papa from 'papaparse';

let mapping_attrs = ['CWL', 'PUID', 'student_number'];

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
  moduleId: module.id,
  templateUrl: 'bulk-search.component.html',
  providers: [SearchService]
})
export class BulkSearchComponent implements OnInit {
  filesToParse: Array<File>;
  public listResult;
  public headers;
  public downloadDisabled = true;

  constructor(private _searchService: SearchService) {}

  onFileChanged(fileInput: any) {
    console.log(fileInput);
    this.filesToParse = <Array<File>> fileInput.target.inputElement.files;
  }

  search() {
    let obj = this;
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
        }
        if (!emailField) {
          if (result.data[0].hasOwnProperty('email')) {
            emailField = 'email';
          } else if (result.data[0].hasOwnProperty('Email')) {
            emailField = 'Email';
          }
        }

        if (!usernameField && !emailField) {
          throw new Error('File doesn\'t contain either username or email column!');
        }

        obj.headers = _.union(Object.keys(result.data[0]), mapping_attrs);
        obj.listResult = Observable.of(result.data);
        Observable.from(result.data)
          .filter(data => {
            let need_mapping = false;
            _.each(mapping_attrs, attr => {
              if (!data.hasOwnProperty(attr) || data[attr] === '') {
                data[attr] = 'Pending';
                need_mapping = true;
              }
            });
            return need_mapping;
          })
          .pluck(usernameField)
          .map(data => { return {'edx_username': data}; })
          .bufferCount(10)
          .mergeMap(data => this._searchService.search(data))
          .subscribe((data: Array<any>) => {
            console.log(data);
            _.each(data, item => {
              let row = _.find(result.data, {'username': item.edx_username});
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
            console.log('Error!');
          },
          () => {
            console.log('done');
            // clean up
            _.each(result.data, row => {
              _.each(mapping_attrs, attr => {
                if (row[attr] === 'Pending') {
                  row[attr] = '';
                }
              });
            });
            this.downloadDisabled = false;
          });
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
