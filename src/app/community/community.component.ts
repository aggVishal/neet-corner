import { Component, OnInit } from '@angular/core';
import { faFacebookSquare, faInstagram, faYoutubeSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  faFacebookSquare = faFacebookSquare;
  faInstagram = faInstagram;
  faYoutubeSquare = faYoutubeSquare;
  faTwitterSquare = faTwitterSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
