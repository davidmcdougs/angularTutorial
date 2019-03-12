import { Component } from '@angular/core';
import { $ } from 'protractor';

//what would it take to be able to integrate state from an api into a component?
//I had trouble referencing Jquery inside this code, and native xml requests couldnt resolve due to origin header security?

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hall of Heroes';
  state = fetch();
}

const fetch = function(){
  return "static"
}




