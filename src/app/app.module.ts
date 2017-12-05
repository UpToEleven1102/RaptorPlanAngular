import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser' ;
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app-root/app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassItemComponent } from './class-item/class-item.component';
import {LandingComponent} from './landing/landing.component';
import { ClassService } from '../services/class.service';
import {ValueContainerService} from '../services/form.service';
import { universitiesList, universitiesListToken, majorListToken, majorsList} from '../services/providers.service';
import { routing } from './app.routing';
import { TransferComponent } from './transfer/transfer.component';
import { AcademicPlanComponent } from './academic-plan/academic-plan.component';
import { AcademicPlanTemplateComponent } from './academic-plan-template/academic-plan-template.component';
import { AcademicTemplateService } from '../services/academic-template.service';
import { MajorNamePipe } from '../pipes/major-name.pipe';
import { ClassObjectPipe } from '../pipes/class-object.pipe';
import { ElectivesPipe } from '../pipes/electives.pipe';
import { ArtDistributionPipe } from '../pipes/art-distribution.pipe';
import { BehavioralDistributionPipe } from '../pipes/behavioral-distribution.pipe';
import { NaturalScienceLabDistribution } from '../pipes/natural-science-lab-distribution.pipe';
import { NaturalScienceDistributionPipe } from '../pipes/natural-science-distribution.pipe';
import { HumanitiesDistributionPipe } from '../pipes/humanities-distribution.pipe';

@NgModule({
  imports: [BrowserModule, routing, HttpModule, FormsModule],
  declarations: [AppComponent,
     DashboardComponent,
      ClassListComponent,
       ClassItemComponent,
        AcademicPlanComponent,
        TransferComponent,
          LandingComponent,
          AcademicPlanTemplateComponent,
        MajorNamePipe,
      ClassObjectPipe,
      ElectivesPipe,
      BehavioralDistributionPipe,
      NaturalScienceLabDistribution,
      NaturalScienceDistributionPipe,
      HumanitiesDistributionPipe,
      ArtDistributionPipe],
  providers: [ ClassService,
    ValueContainerService,
    AcademicTemplateService,
  {provide: universitiesListToken, useValue: universitiesList},
  {provide: majorListToken, useValue: majorsList}],
  bootstrap: [AppComponent]
})
export class AppModule {}
