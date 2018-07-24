import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  image1:string='https://www.inturn.co/sites/default/files/2016-11/Blog%20Smaller.png';
  constructor() { }

  ngOnInit() {
  }

}
