import {RouterConfig} from '@angular/router';
import {AuthGuard} from '../auth.guard';
import {SearchComponent} from './search.component';
import {BulkSearchComponent} from './bulk-search.component';
import {SingleSearchComponent} from './single-search.component';
import {DefaultSearchComponent} from './default-search.component';

export const SearchRoutes: RouterConfig = [
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'bulk', component: BulkSearchComponent },
      { path: 'single', component: SingleSearchComponent },
      { path: '', component: DefaultSearchComponent },
    ]
  }
];
