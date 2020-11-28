import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {

  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faPhone = faPhone;
  constructor() { }

  ngOnInit(): void {
  }

}
