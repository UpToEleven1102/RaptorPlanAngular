import {Component, Input} from '@angular/core';

@Component ({
    selector: 'app-class',
    templateUrl: './class-item.component.html',
    styleUrls: ['./class-item.component.css']
})
export class ClassItemComponent {
    @Input() class_item;

}
