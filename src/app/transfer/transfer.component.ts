import {Component, Inject} from '@angular/core';
import {ValueContainerService} from '../../services/form.service';
import {Router} from '@angular/router';
import {majorListToken, universitiesListToken} from '../../services/providers.service';


@Component ({
    selector: 'app-transfer',
    templateUrl: './transfer.component.html',
    styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
    constructor(@Inject(majorListToken) public majorsList,
                @Inject(universitiesListToken) public universitiesList,
            private formService: ValueContainerService, private router: Router) {}

    onSubmit(formValue) {
        this.formService.formvalue = formValue;
        this.formService.major = formValue.major;
        this.router.navigate(['/dashboard']);
    }
}
