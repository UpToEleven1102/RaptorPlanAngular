import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { TransferComponent } from './transfer/transfer.component';
import { AcademicPlanComponent } from './academic-plan/academic-plan.component';

const appRoute: Routes = ([
    {path: 'landing', component: LandingComponent},
    {path: 'transfer', component: TransferComponent},
    {path: 'academicplan', component: AcademicPlanComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '', pathMatch: 'full', redirectTo: 'landing'}
]);

export const routing = RouterModule.forRoot(appRoute);
