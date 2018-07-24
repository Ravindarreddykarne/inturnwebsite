import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
image1:string='https://www.inturn.co/sites/default/files/styles/title_image/public/2016-12/3.png?itok=3UGlr988';
image2:string='https://www.inturn.co/sites/default/files/styles/title_image/public/2016-12/2.png?itok=YP5FZYJj';
image3:string='https://www.inturn.co/sites/default/files/styles/title_image/public/2016-12/1.png?itok=WBR--xA4';
image4:string='https://www.inturn.co/sites/default/files/styles/tile_gallery_width/public/2016-11/Desk2.jpg?itok=Bmb1tJ7R';
image5:string='./assets/images/career.PNG';
  constructor() { }

  ngOnInit() {
  }

}
