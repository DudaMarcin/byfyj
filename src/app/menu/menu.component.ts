import { Component, OnInit } from '@angular/core';
import { PotrawyService } from '../services/potrawy.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  tekscik: 'kuku na muniu';
  public potrawyData: Array<any>;
  public currentJogging: any;

  constructor(private potrawyService: PotrawyService) {
    this.potrawyService.get().subscribe((data: any) => this.potrawyData = data);
  }

  ngOnInit() {
  }

}
