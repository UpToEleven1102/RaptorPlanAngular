import {Pipe} from '@angular/core';
import { PipeTransform } from '@angular/core/src/change_detection/pipe_transform';

@Pipe({
    name: 'electivesPipe'
})
export class ElectivesPipe implements PipeTransform{
    electives = [];
    transform(classes) {
        classes.forEach(element => {
           element.attribute.forEach(e => {
               if (e === 'electives') {
                    this.electives.push(element);
               }
           });
        });
        return this.electives;
    }
}
