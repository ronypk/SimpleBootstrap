import { Component, OnDestroy, OnInit } from '@angular/core';
import { TESTIMONIALS_HEADING, TESTIMONIAL_SLIDES } from '../data/site-data';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html'
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  heading = TESTIMONIALS_HEADING;
  slides = TESTIMONIAL_SLIDES;
  active = 0;
  private timer?: any;

  ngOnInit() { this.startAutoPlay(); }
  ngOnDestroy() { this.stopAutoPlay(); }

  go(index: number) {
    const n = this.slides.length;
    this.active = (index + n) % n;
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.timer = setInterval(() => this.go(this.active + 1), 5000);
  }

  stopAutoPlay() {
    if (this.timer) { clearInterval(this.timer); this.timer = undefined; }
  }

  manual(index: number, event?: Event) {
    if (event) { event.preventDefault(); }
    this.go(index);
    this.startAutoPlay();
  }
}
