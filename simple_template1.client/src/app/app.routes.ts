import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StartComponent } from '../features/components/start/start.component';
import { ForecastComponent } from '../features/components/forecast/forecast.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
  {
    path: 'start',
    component: StartComponent,
    title: 'Start Page',
  },
  {
    path: 'forecast',
    component: ForecastComponent,
    title: 'Forecast Page',
  },

  // Redirect all other routes to the start page, this is a catch all route that needs to be last in code
  // else routing will not work as expected
  {
    path: '**',
    redirectTo: 'start',
  },
  
];
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }