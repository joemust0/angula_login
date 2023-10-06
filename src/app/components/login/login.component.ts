import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router){}

  ngOnInit(): void {
      console.log()
  }

  onSubmit() {
    console.log("Ola!")
  }

}
