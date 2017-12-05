import {Pipe} from '@angular/core';
import { PipeTransform } from '@angular/core/src/change_detection/pipe_transform';

@Pipe({
    name: 'majorName'
})
export class MajorNamePipe implements PipeTransform {
    transform(value) {
        switch(value) {
            case 'CMSC': return {name: 'COMPUTER SCIENCE A.A: 107', credit: 60};
            case 'ENEE': return {name: 'ELECTRICAL ENGINEERING', credit: 60};
        }
    }
}
