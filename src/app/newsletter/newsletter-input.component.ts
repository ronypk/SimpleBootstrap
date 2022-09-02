import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter-input',
  template: `
    <div class="input-group mb-3">
      <input type="text" class="form-control news-letter" placeholder="Your Email" [(ngModel)]="email">
      <div class="input-group-append">
        <span class="input-group-text" style="cursor:pointer" (click)="subscribe()">{{ done ? 'Subscribed!' : 'Subcribe' }}</span>
      </div>
    </div>`
})
export class NewsletterInputComponent {
  email = '';
  done = false;

  subscribe() {
    if (!this.email.trim()) { return; }
    this.done = true;
    this.email = '';
    setTimeout(() => (this.done = false), 2500);
  }
}
