import { Component } from '@angular/core';
import { CONTACT } from '../data/site-data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  content = CONTACT;
  model = { username: '', email: '', mobile: '', comment: '' };
  submitted = false;

  // static site: no backend, just acknowledge the submission
  submit() {
    this.submitted = true;
    this.model = { username: '', email: '', mobile: '', comment: '' };
  }
}
