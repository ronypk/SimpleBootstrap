import { Component, HostListener } from '@angular/core';
import { FOOTER, SITE } from '../data/site-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  footer = FOOTER;
  copyright = SITE.copyright;
  showTop = false;

  @HostListener('window:scroll')
  onScroll() {
    const y = window.pageYOffset || document.documentElement.scrollTop || 0;
    this.showTop = y > 100;
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
