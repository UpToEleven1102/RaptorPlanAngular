declare let jsPDF;

import { Component, OnInit, Input } from '@angular/core';
import {ClassService} from '../../services/class.service';

@Component({
    selector: 'app-academic-plan-template',
    templateUrl: './academic-plan-template.component.html',
    styleUrls: ['./academic-plan-template.component.css']
})
export class AcademicPlanTemplateComponent implements OnInit {
    @Input() academicTemplate;
    classList;

    foundation;
    distribution;
    institutional;
    program;

    english_foundation;
    math_foundation;
    speech_foundation;

    art_distribution;
    behavioral_social_distribution;
    humanities_distribution;
    natural_science_lab_distribution;
    natural_science_distribution;

    major_program;
    electives_program;

    constructor(private classService: ClassService) {}

    ngOnInit() {
        this.classList = this.classService.getAll();
        this.academicTemplate = this.academicTemplate.value;
        for (const category in this.academicTemplate) {
            if (category === 'institutional') {
                this.institutional = this.academicTemplate[category];
            } else {
                switch (category) {
                    case 'foundation' : this.foundation = this.academicTemplate[category]; break;
                    case 'distribution' : this.distribution = this.academicTemplate[category]; break;
                    case 'program' : this.program = this.academicTemplate[category]; break;
                }
            }
        }
        if (this.foundation) {
            for (const subject in this.foundation) {
                if (subject === 'english_foundation') {
                    this.english_foundation = this.foundation[subject];
                } else if (subject === 'math_foundation') {
                    this.math_foundation = this.foundation[subject];
                } else if (subject === 'speech_foundation') {
                    this.speech_foundation = this.foundation[subject];
                }
            }
        }
        if (this.distribution) {
            for (const subject in this.distribution) {
                if (subject === 'art_distribution') {
                    this.art_distribution = this.distribution[subject];
                } else if (subject === 'behavioral_social_distribution') {
                    this.behavioral_social_distribution = this .distribution[subject];
                } else if (subject === 'humanities_distribution') {
                    this.humanities_distribution = this.distribution[subject];
                } else if (subject === 'natural_science_lab_distribution') {
                    this.natural_science_lab_distribution = this .distribution[subject];
                }else if (subject === 'natural_science_distribution') {
                    this.natural_science_distribution = this .distribution[subject];
                }
            }
        }
        if (this.program) {
            for (const subject in this.program) {
                if (subject === 'major') {
                    this.major_program = this.program[subject];
                } else if (subject === 'electives') {
                    this.electives_program = this.program[subject];
                }
            }
        }
    }

}
