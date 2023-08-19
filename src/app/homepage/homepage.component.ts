import { Component } from '@angular/core';
import content from './content.json';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  para1:any = content.para1;
  para2:any = content.para2;
  para3:any = content.para3;
  para4:any = content.para4;
  para5:any = content.para5;
  benefits:any = content.benefits;

  img1:any=content.img1;

  telegram(){
    
  }


}
