import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard.component';
import { HeaderFormComponent } from './header-form.component';
import { LandingComponent } from './landing.component';

const appRoute: Routes = ([
    {path: 'landing', component: LandingComponent},
    {path: 'surveyform', component: HeaderFormComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '', pathMatch: 'full', redirectTo: 'landing'}
]);

export const routing = RouterModule.forRoot(appRoute);
