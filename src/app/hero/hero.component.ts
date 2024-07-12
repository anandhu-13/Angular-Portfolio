import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  name:string="John Doe"

  profileTitle:string="Fullstack Developer"

  profilePicture:string="../../assets/images/Profile_pic.jpg"



}
