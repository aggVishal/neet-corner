import { Component, OnInit } from '@angular/core';
import { faUserCheck, faUserGraduate, faLandmark, faChartLine, faPhone } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  faUserCheck = faUserCheck;
  faUserGraduate = faUserGraduate;
  faLandmark = faLandmark;
  faChartLine = faChartLine;
  faYoutube = faYoutube;
  faPhone = faPhone;

  constructor() { }

  ngOnInit(): void {
  }

}
