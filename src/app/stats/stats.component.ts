import { Component, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { STATS, STATS_HEADING } from '../data/site-data';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html'
})
export class StatsComponent implements AfterViewInit, OnDestroy {
  heading = STATS_HEADING;
  stats = STATS;
  displayed: number[] = STATS.map(() => 0);

  private readonly duration = 2000; // ms
  private observer?: IntersectionObserver;
  private frame?: number;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    if (typeof IntersectionObserver === 'undefined') {
      this.displayed = this.stats.map(s => s.value);
      return;
    }
    // start counting once the section scrolls into view
    this.observer = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) {
        this.observer!.disconnect();
        this.animate();
      }
    });
    this.observer.observe(this.host.nativeElement);
  }

  private animate() {
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - start) / this.duration, 1);
      this.displayed = this.stats.map(s => Math.round(s.value * t));
      if (t < 1) { this.frame = requestAnimationFrame(step); }
    };
    this.frame = requestAnimationFrame(step);
  }

  ngOnDestroy() {
    if (this.observer) { this.observer.disconnect(); }
    if (this.frame) { cancelAnimationFrame(this.frame); }
  }
}
