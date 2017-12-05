import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {ValueContainerService} from '../../services/form.service';
@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private formService: ValueContainerService) {}
  redirectTo(value) {
    if (value === '/') {
        this.router.navigate(['/']);
    } else if (value === 'pathway') {
      this.formService.isCreatePathway = true;
      this.router.navigate(['/transfer']);
    } else {
      this.formService.isCreatePathway = false;
      console.log(this.formService.isCreatePathway);
      this.router.navigate(['/academicplan']);
    }
  }
}
