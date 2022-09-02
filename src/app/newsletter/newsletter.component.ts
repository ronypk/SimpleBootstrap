import { Component } from '@angular/core';
import { NEWSLETTER_TITLE } from '../data/site-data';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html'
})
export class NewsletterComponent {
  title = NEWSLETTER_TITLE;
}
