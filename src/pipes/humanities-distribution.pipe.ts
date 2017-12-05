import {Pipe} from '@angular/core';
import { PipeTransform } from '@angular/core/src/change_detection/pipe_transform';

@Pipe({name: 'humanitiesDistribution'})
export class HumanitiesDistributionPipe implements PipeTransform{
    transform(classes) {
        let response = [];
        classes.forEach(element => {
            element.attribute.forEach(e => {
                if (e === 'humanities_distribution') {
                    response.push(element);
                }
            });
        });
        return response;
    }
}
