import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
image2:string='https://www.inturn.co/sites/default/files/Feature432/R002-14_Feature1_700X600.gif';
image3:string='https://www.inturn.co/sites/default/files/Feature449/R002-37_Feature6_700X600.gif';
image4:string='https://www.inturn.co/sites/default/files/Feature451/R002-37_Feature5_Board_700X600.gif';
image5:string='https://www.inturn.co/sites/default/files/Feature593/R002-37_Feature7_Negotiation.gif';
image6:string='https://www.inturn.co/sites/default/files/Feature433/R002-14_Feature2_700X600.gif';
image7:string='https://www.inturn.co/sites/default/files/Feature452/R002-37_Feature4_700X600.gif';
image8:string='http://www.inturn.co/sites/default/files/Feature450/R002-14_Feature3_700X600%20%281%29.gif';
  constructor() { }

  ngOnInit() {
  }

}
