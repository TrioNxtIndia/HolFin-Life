import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  bannerImage: string = "assets/images/services.webp";
  estate: string = "assets/images/estate.svg";
  health: string = "assets/images/health.svg";
  business: string = "assets/images/business.svg";
}
