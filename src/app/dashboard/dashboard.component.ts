import {Component, OnInit} from '@angular/core';
import {ValueContainerService} from '../../services/form.service';
import { AcademicTemplateService } from '../../services/academic-template.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    userInfo;
    isCreatePathway: boolean;
    majorTemplate;
    today;
    constructor(private valueContainerService: ValueContainerService, private academicTemplateService: AcademicTemplateService) {}
    ngOnInit() {
        this.today = Date.now();
        this.userInfo = this.valueContainerService.formvalue;
        this.isCreatePathway = this.valueContainerService.isCreatePathway;
        if (!this.isCreatePathway) {
        this.majorTemplate = this.academicTemplateService.get(this.valueContainerService.major);
        }
    }
}
