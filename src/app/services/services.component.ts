import { Component } from '@angular/core';
import { SERVICES, SERVICES_HEADING, SKILLS } from '../data/site-data';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent {
  heading = SERVICES_HEADING;
  skills = SKILLS;
  services = SERVICES;
}
