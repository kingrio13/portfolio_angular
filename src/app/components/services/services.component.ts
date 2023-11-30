import { Component, OnInit } from '@angular/core';

import { faWordpress, faShopify } from '@fortawesome/free-brands-svg-icons';
import { faCamera, faCode, faHardDrive, faStar } from '@fortawesome/free-solid-svg-icons'




@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {


  faWordpress = faWordpress;
  faShopify = faShopify;
  faHardDrive = faHardDrive;
  faCode = faCode;
  faCamera = faCamera;
  faStar = faStar;

  constructor() { }

  ngOnInit(): void {
  }

}
