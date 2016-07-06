import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  directives: [ROUTER_DIRECTIVES],
})
export class SearchComponent {
  public linkedTools = ['Edx', 'MyTool'];
  public functions = ['Individual Students', 'Grade/Enrolment'];
  public selectedTool;
  public selectedFunction;
  public listResult;
  public query = {};

  constructor(private router: Router) {}

  onFunctionSelected(func: string) {
    if (func === 'Individual Students') {
      console.log(func);
      this.router.navigate(['/search/single']);
    } else if (func === 'Grade/Enrolment') {
      this.router.navigate(['/search/bulk']);
    }
  }
}
