import {Component, Inject, Input, OnInit} from '@angular/core';
import {universitiesListToken, majorsList, majorListToken} from '../../services/providers.service';
import {ClassService} from '../../services/class.service';
import {ValueContainerService} from '../../services/form.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-academic-plan',
    templateUrl: './academic-plan.component.html',
    styleUrls: ['./academic-plan.component.css']
})
export class AcademicPlanComponent implements OnInit {
    isCreatePathway: boolean;

    constructor(private formService: ValueContainerService,
        private classItemService: ClassService,
        private router: Router,
        @Inject(majorListToken) public majorsList) {}
        ngOnInit() {
        this.isCreatePathway = this.formService.isCreatePathway;
        // this.classItemService.getMajorsList().subscribe(majorsList => {
        //     this.majorsList = majorsList;
        // });
    }

    onSubmit(formValue) {
        this.formService.formvalue = formValue;
        this.formService.major = formValue.major;
        this.router.navigate(['/dashboard']);
    }
}
