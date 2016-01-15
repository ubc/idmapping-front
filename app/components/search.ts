import {Component} from 'angular2/core';
import {RouteConfig} from "angular2/router";

@Component({
  selector: 'my-app',
  templateUrl: './components/search.html'
})
export class SearchComponent {
  public linkedTools = ['Edx', 'MyTool'];
  public functions = ['Individual Students', 'Grade/Enrolment'];
  public selectedTool;
  public selectedFunction;
}
