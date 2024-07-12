import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  aboutImageUrl:string="../../assets/images/Profile.jpg"

  user={

    name:"Jhone Doe",

    degree:"BCA",

    dob:"APRIL 2 1995",

    phone:"23456767",

    email:"JhonDoe@gmail.com",

    address:"123 abc stree 456 pin usa",

    freelance:"Available",

    experience:"5 years"

}

}
