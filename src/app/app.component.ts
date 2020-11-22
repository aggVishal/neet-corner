import { Component } from '@angular/core';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faPhone = faPhone;
  title = 'neet-corner';
}
