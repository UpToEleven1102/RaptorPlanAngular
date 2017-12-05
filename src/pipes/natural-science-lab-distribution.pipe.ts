import {Pipe} from '@angular/core';
import { PipeTransform } from '@angular/core/src/change_detection/pipe_transform';
import { forEach } from '@angular/router/src/utils/collection';

@Pipe({
    name : 'naturalScienceLabDistribution'
})
export class NaturalScienceLabDistribution implements PipeTransform{
    transform(classes){
        let response = [];
        classes.forEach(element => {
            element.attribute.forEach(e => {
                if (e === 'natural_science_lab_distribution') {
                    response.push(element);
                }
            });
        });

        return response;
    }
}
