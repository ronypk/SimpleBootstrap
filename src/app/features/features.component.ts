import { Component } from '@angular/core';
import { FEATURES } from '../data/site-data';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html'
})
export class FeaturesComponent {
  features = FEATURES;
}
