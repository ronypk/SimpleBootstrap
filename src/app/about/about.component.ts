import { Component } from '@angular/core';
import { ABOUT_ANGULAR } from '../data/site-data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  about = ABOUT_ANGULAR;
}
