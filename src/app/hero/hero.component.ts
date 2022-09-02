import { Component } from '@angular/core';
import { HERO } from '../data/site-data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  hero = HERO;
}
