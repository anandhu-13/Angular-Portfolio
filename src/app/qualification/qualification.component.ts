import { Component } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent {

  educations=[
    
    {name:"BCA",university:"CALICUT",year:"2010-2014",description:"Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam"},
    {name:"MCA",university:"CALICUT",year:"2014-2017",description:"Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam"},
    {name:"PHD",university:"CALICUT",year:"2017-2022",description:"Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam"},

  ]

  certifications=[

    {name:"PythonBeginnerCourse",company:"LUMINAR",grade:"GOOD",description:"Tempor eos dolore amet "},
    {name:"PythonAdvancedCourse",company:"LUMINAR",grade:"Excellent",description:"Tempor eos dolore amet "},
    {name:"ForntEndMaster",company:"LUMINAR",grade:"GOOD",description:"Tempor eos dolore amet "},
    {name:"BAckend",company:"LUMINAR",grade:"GOOD",description:"Tempor eos dolore amet "},

  ]

  



}
