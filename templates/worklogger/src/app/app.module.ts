import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WorklogListComponent } from './worklog-list/worklog-list.component';
import { WorklogDetailComponent } from './worklog-detail/worklog-detail.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    WorklogListComponent,
    WorklogDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [{ path: '', component: WorklogListComponent}]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
