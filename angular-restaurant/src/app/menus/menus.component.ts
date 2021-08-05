import { Component, OnInit } from '@angular/core';

import { Menu } from '../menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css'],
})
export class MenusComponent implements OnInit {
  menus: Menu[] = [];
  constructor(private menuService: MenuService) {}

  selectedMenu?: Menu;
  onSelect(menu: Menu): void {
    this.selectedMenu = menu;
  }

  getMenus(): void {
    this.menuService.getMenus().subscribe((menus) => (this.menus = menus));
  }

  ngOnInit(): void {
    this.getMenus();
  }
}
