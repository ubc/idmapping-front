import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent {
  public linkedTools = ['Edx'];
  public functions = ['Individual Students', 'Grade/Enrolment'];
  public selectedTool = 'Edx';
  public selectedFunction;
  public listResult;
  public query = {};

  constructor(private router: Router) {}

  onFunctionSelected(func: string) {
    if (func === 'Individual Students') {
      this.router.navigate(['/search/single']);
    } else if (func === 'Grade/Enrolment') {
      this.router.navigate(['/search/bulk']);
    }
  }
}
