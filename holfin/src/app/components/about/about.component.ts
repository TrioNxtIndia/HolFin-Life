import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  bannerImage: string = "assets/images/about.webp";
  missionImage: string = "assets/images/mission.svg";
  visionImage: string = "assets/images/vision.svg";
  
}
