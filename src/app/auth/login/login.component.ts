import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public result = "";
  username: any;
  password: any;
  constructor() { }

  loginUser() {
    if (this.username != "admin" || this.password != "admin") {
      this.result = "Wrong username or password";
      // console.log("done");
    }
    else {
      this.result = "";
    }
  }

  ngOnInit(): void {
  }

}
