import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormService} from '../services/form.service';

@Component ({
    selector: 'app-landing',
    templateUrl: '../views/landing.component.html',
    styleUrls: ['../views/landing.component.css']
})
export class LandingComponent {
    constructor(private router: Router, private formService: FormService) {}
    directCreatePathway() {
        this.formService.isCreatePathway = true;
        this.router.navigate(['/surveyform']);
    }
    directCreateAcademicPlan() {
        this.formService.isCreatePathway = false;
        this.router.navigate(['/surveyform']);
    }
}
