import {Component, OnInit} from '@angular/core';
import {FormService} from '../services/form.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: '../views/dashboard.component.html',
    styleUrls: ['../views/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    userInfo;
    isCreatePathway: boolean;
    constructor(private formService: FormService) {}
    ngOnInit() {
        this.isCreatePathway = this.formService.isCreatePathway;
        this.userInfo = this.formService.formvalue;
        console.log(this.userInfo);
    }
}
