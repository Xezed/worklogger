import { AuthHttp, AuthConfig } from 'angular2-jwt/angular2-jwt';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {Http, HttpModule, RequestOptions} from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { WorklogListComponent } from './worklog-list/worklog-list.component';
import { WorklogDetailComponent } from './worklog-detail/worklog-detail.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./guards/auth.guard";
import {EntriesService} from "./services/entries.service";
import {AppErrorHandler} from "./app-error-handler";

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    WorklogListComponent,
    WorklogDetailComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        { path: '', component: WorklogListComponent, canActivate: [AuthGuard]},
        { path: 'login', component: LoginComponent},
        { path: 'registration', component: RegistrationComponent},
      ]
    )
  ],
  providers: [
    AuthService,
    AuthGuard,
    EntriesService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
