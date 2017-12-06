import {Pipe} from '@angular/core';
import { PipeTransform } from '@angular/core/src/change_detection/pipe_transform';

@Pipe({ name: 'speechFoundation' })
export class SpeechFoundationPipe implements PipeTransform {
    transform(classes) {
        let response = [];
        classes.forEach(element => {
            element.attribute.forEach(e => {
                if (e === 'speech_foundation') {
                    response.push(element);
                }
            });
        });
        return response;
    }
}
