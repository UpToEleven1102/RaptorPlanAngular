import {Pipe} from '@angular/core';
import { PipeTransform } from '@angular/core/src/change_detection/pipe_transform';

@Pipe({ name : 'naturalScienceDistribution'})
export class NaturalScienceDistributionPipe implements PipeTransform{
    transform(classes) {
        let response = [];
        classes.forEach(element => {
            element.attribute.forEach(e => {
                if (e === 'natural_science_distribution') {
                    response.push(element);
                }
            });
        });
        return response;
    }
}
