import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ValueContainerService} from '../../services/form.service';

@Component ({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
})
export class LandingComponent {
    constructor(private router: Router, private formService: ValueContainerService) {}
    directCreatePathway() {
        this.formService.isCreatePathway = true;
        this.router.navigate(['/transfer']);
    }
    directCreateAcademicPlan() {
        this.formService.isCreatePathway = false;
        this.router.navigate(['/academicplan']);
    }
}
