import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent { 
  @Input() tit:any; 
  name:string='nikku' 

  constructor()
{
  this.name=this.name
}
}




