import { Component } from '@angular/core';
import { PLANS, PRICING_TITLE } from '../data/site-data';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html'
})
export class PricingComponent {
  title = PRICING_TITLE;
  plans = PLANS;
}
