import {AuthGuard} from '../auth.guard';
import {SearchComponent} from './search.component';
export const SearchRoutes = [
  {path: '', redirectTo: '/search', pathMatch: 'full'},
  {path: 'search', component: SearchComponent, canActivate: [AuthGuard]}
];
