import { Component } from '@angular/core';
import { SITE, NAV_LINKS } from '../data/site-data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  brand = SITE.brand;
  links = NAV_LINKS;
  activeTarget = NAV_LINKS[0].target;
  collapsed = true;
}
