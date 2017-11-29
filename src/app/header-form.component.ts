import {Component, Inject, Input, OnInit} from '@angular/core';
import {universitiesListToken, majorsList, majorListToken} from '../services/providers.service';
import {ClassService} from '../services/class.service';
import {FormService} from '../services/form.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header-form',
    templateUrl: '../views/header-form.component.html',
    styleUrls: ['../views/header-form.component.css']
})
export class HeaderFormComponent implements OnInit {
    isCreatePathway: boolean;

    constructor(private formService: FormService,
        private classItemService: ClassService,
        private router: Router,
        @Inject(universitiesListToken) public universitiesList,
    @Inject(majorListToken) public majorsList) {}
    ngOnInit() {
        this.isCreatePathway = this.formService.isCreatePathway;
        // this.classItemService.getMajorsList().subscribe(majorsList => {
        //     this.majorsList = majorsList;
        // });
    }

    onSubmit(formValue) {
        this.formService.formvalue = formValue;
        this.router.navigate(['/dashboard']);
    }
}
