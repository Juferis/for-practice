import { Component, OnInit } from '@angular/core';

import { Menu } from '../menu';
import { MENUS } from '../mock-menus';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css'],
})
export class MenusComponent implements OnInit {
  menus = MENUS;
  constructor() {}

  selectedMenu?: Menu;
  onSelect(menu: Menu): void {
    this.selectedMenu = menu;
  }

  ngOnInit(): void {}
}
