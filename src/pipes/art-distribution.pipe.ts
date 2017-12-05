import {Pipe} from '@angular/core';
import { PipeTransform } from '@angular/core/src/change_detection/pipe_transform';

@Pipe({name: 'artDistribution'})
export class ArtDistributionPipe implements PipeTransform{
    response = [];
    transform(classes) {
        classes.forEach(element => {
            element.attribute.forEach(e => {
                if ( e === 'art_distribution') {
                    this.response.push(element);
                }
            });
        });
        return this.response;
    }
}
