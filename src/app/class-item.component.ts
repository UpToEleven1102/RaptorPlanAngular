import {Component, Input} from '@angular/core';

@Component ({
    selector: 'app-class',
    templateUrl: '../views/class-item.component.html',
    styleUrls: ['../views/class-item.component.css']
})
export class ClassItemComponent {
    @Input() class_item;

}
