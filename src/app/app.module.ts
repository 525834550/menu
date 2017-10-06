import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewteamscheduleComponent } from './viewteamschedule/viewteamschedule.component';
import { ManageMyActivitiesComponent } from './manage-my-activities/manage-my-activities.component';
import { MyresourceRequestsComponent } from './myresource-requests/myresource-requests.component';
import { ReportsComponent } from './reports/reports.component';
import { AdministrationComponent } from './administration/administration.component';
import { ScenarioModelingComponent } from './scenario-modeling/scenario-modeling.component';
import { TimeEntryComponent } from './time-entry/time-entry.component';

import {RouterModule, Route} from '@angular//router';
@NgModule({
  declarations: [
    AppComponent,
    ViewteamscheduleComponent,
    ManageMyActivitiesComponent,
    MyresourceRequestsComponent,
    ReportsComponent,
    AdministrationComponent,
    ScenarioModelingComponent,
    TimeEntryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'viewteamschedule', component: ViewteamscheduleComponent },
      {path: 'ManageMyActivities', component: ManageMyActivitiesComponent },
      {path: 'MyresourceRequests', component: MyresourceRequestsComponent },
      {path: 'Reports', component: ReportsComponent },
      {path: 'administration', component: AdministrationComponent },
      {path: 'ScenarioModeling', component: ScenarioModelingComponent },
      {path: 'TimeEntry', component: TimeEntryComponent}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
