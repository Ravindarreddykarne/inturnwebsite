import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  image1:string='https://www.inturn.co/sites/default/files/title_single_image_color/R002-38_GIF1_Lady600X600.gif';
  image2:string='https://s-media-cache-ak0.pinimg.com/originals/6c/51/02/6c510253de205cda625ba91344c14a33.gif';
  image3:string='https://www.inturn.co/sites/default/files/title_single_image_color/R002-38_GIF2_Lady_Idea_600x600.gif';
  image4:string='https://www.inturn.co/sites/default/files/title_single_image_color/R002_Gif_Idea_Man_600x600.gif';
  image5:string='https://www.inturn.co/sites/default/files/title_single_image_color/R002-38_GIF3_Negotiating_700x700.gif';
  image6:string='https://www.inturn.co/sites/default/files/static%20content%20pg/R002-38_GIF4_Shaking_Hands_700x623.gif';
  image7:string='https://www.inturn.co/sites/default/files/styles/tile_gallery_width/public/2016-11/Group3.jpg?itok=mv5IXnYU';
  image8:string='https://www.inturn.co/sites/default/files/paragraphs/R002-38_GIF5_Proposal_Lady_620X720.gif';
  image9:string='https://www.inturn.co/sites/default/files/paragraphs/R002-38_GIF6_Laptop_Man_620x720-sfw.gif';
  image10:string='./assets/images/home.PNG'
  constructor() { }

  ngOnInit() {
  }

}
