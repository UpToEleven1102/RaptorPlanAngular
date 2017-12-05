import {Pipe} from '@angular/core';
import { PipeTransform } from '@angular/core/src/change_detection/pipe_transform';

@Pipe({name: 'behavioralDistribution'})
export class BehavioralDistributionPipe implements PipeTransform {
    
    transform(classes) {
        let response = [];
        classes.forEach(element => {
            element.attribute.forEach(e => {
                if (e === 'behavioral_distribution') {
                    response.push(element);
                }
            });
        });
        return response;
    }
}
