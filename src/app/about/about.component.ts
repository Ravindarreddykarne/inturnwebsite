import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
image1:string='https://www.inturn.co/sites/default/files/styles/title_image/public/2016-11/About%20copy.png?itok=CzTvUDke';
image8:string='https://www.inturn.co/sites/default/files/paragraphs/R002-38_GIF5_Proposal_Lady_620X720.gif';
image9:string='https://www.inturn.co/sites/default/files/paragraphs/R002-38_GIF6_Laptop_Man_620x720-sfw.gif';
image10:string='./assets/images/home.PNG';
image11:string='./assets/images/blog4.PNG'
image12:string='./assets/images/blog5.PNG'
  constructor() { }

  ngOnInit() {
  }

}
