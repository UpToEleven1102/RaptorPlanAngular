import {Pipe} from '@angular/core';
import { PipeTransform } from '@angular/core/src/change_detection/pipe_transform';
import { ClassService } from '../services/class.service';

@Pipe({
    name: 'classObject'
})
export class ClassObjectPipe implements PipeTransform {
    constructor(private classService: ClassService) {}

    transform(code) {
        console.log(this.classService.getByClassCode(code));
        return this.classService.getByClassCode(code);
    }
}
