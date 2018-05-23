import { Component } from '@angular/core';
import {Hero} from "./hero";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  heroes = [new Hero(1, 'Windstorm'), new Hero(1, 'Bombasto'), new Hero(1, 'Magneta') , new Hero(1, 'Tornado')];
  myHero = this.heroes[0];

  images;

  constructor(){
    this.images = [
      {"url":"file:///C:/Users/haarnojaj/Pictures/avatar.png"},
      {"url":"file:///C:/Users/haarnojaj/Pictures/avatar.png"},
      {"url":"file:///C:/Users/haarnojaj/Pictures/avatar.png"},
      {"url":"file:///C:/Users/haarnojaj/Pictures/avatar.png"},
      {"url":"file:///C:/Users/haarnojaj/Pictures/avatar.png"},
      {"url":"file:///C:/Users/haarnojaj/Pictures/avatar.png"},
      {"url":"file:///C:/Users/haarnojaj/Pictures/avatar.png"},
      {"url":"file:///C:/Users/haarnojaj/Pictures/avatar.png"},
      {"url":"file:///C:/Users/haarnojaj/Pictures/avatar.png"},
      {"url":"file:///C:/Users/haarnojaj/Pictures/avatar.png"},
      {"url":"file:///C:/Users/haarnojaj/Pictures/avatar.png"},
      {"url":"file:///C:/Users/haarnojaj/Pictures/avatar.png"}
    ];
  }
}


