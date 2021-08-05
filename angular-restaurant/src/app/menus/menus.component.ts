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
  pickMenu?: Menu;
  onPick(pick: Menu): void {
    this.menuService.pickMenu(pick);
    this.pickMenu = pick;
  }

  getMenus(): void {
    this.menuService.getMenus().subscribe((menus) => (this.menus = menus));
  }
  pickMenus(): void {
    this.menuService.pickMenu().subscribe((pick) => (this.menus = pick));
  }

  ngOnInit(): void {
    this.getMenus();
  }
}
