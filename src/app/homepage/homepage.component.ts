import { Component, OnInit } from '@angular/core';
import {ResponsiveService} from '../responsive.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  isPhone;

  constructor(private _responsive: ResponsiveService) { }

  ngOnInit() {
    this.isPhone = this._responsive.isHandset$;
  }


  

}
