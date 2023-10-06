import { Component } from '@angular/core';

@Component({
  selector: 'app-useridentification',
  templateUrl: './useridentification.component.html',
  styleUrls: ['./useridentification.component.css']
})
export class UseridentificationComponent {
loggedIn: boolean = false;
username: string = " ";

isUserLoggedIn(): boolean{
  return this.loggedIn;
}

login(){
  this.loggedIn = true;
  this.username = "Jonh Wick"
}

loggout(){
  this.loggedIn = false;
  this.username = " ";
}

}
//aula dia 28/09