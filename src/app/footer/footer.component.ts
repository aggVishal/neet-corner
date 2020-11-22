import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faWhatsapp, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faPhone = faPhone;
  faYoutubeSquare=faYoutubeSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
