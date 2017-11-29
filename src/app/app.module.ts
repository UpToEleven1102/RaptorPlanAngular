import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser' ;
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { ClassListComponent } from './class-list.component';
import { ClassItemComponent } from './class-item.component';
import {LandingComponent} from './landing.component';
import { ClassService } from '../services/class.service';
import {FormService} from '../services/form.service';
import { universitiesList, universitiesListToken, majorListToken, majorsList} from '../services/providers.service';
import { HeaderFormComponent } from './header-form.component';
import { routing } from './app.routing';

@NgModule({
  imports: [BrowserModule, routing, HttpModule, FormsModule],
  declarations: [AppComponent,
     DashboardComponent,
      ClassListComponent,
       ClassItemComponent,
        HeaderFormComponent,
          LandingComponent],
  providers: [ ClassService,
    FormService,
  {provide: universitiesListToken, useValue: universitiesList},
  {provide: majorListToken, useValue: majorsList}],
  bootstrap: [AppComponent]
})
export class AppModule {}
