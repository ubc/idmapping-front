import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PolymerModule  } from '@codebakery/origami';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { BulkSearchComponent } from './search/bulk-search.component';
import { SingleSearchComponent } from './search/single-search.component';
import { DefaultSearchComponent } from './search/default-search.component';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

import { LoginRoutes, AUTH_PROVIDERS } from './login';
import { SearchRoutes } from './search';
import {HttpClientModule} from '@angular/common/http';
import {JwtModule} from '@auth0/angular-jwt';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatInputModule, MatSelectModule, MatSnackBarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputFileComponent} from './fileinput/input-file.component';

const appRoutes: Routes = [
  ...LoginRoutes,
  ...SearchRoutes
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SearchComponent,
    BulkSearchComponent,
    SingleSearchComponent,
    DefaultSearchComponent,
    InputFileComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    PolymerModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        authScheme: 'JWT ',
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:8080']
      }
    })
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
