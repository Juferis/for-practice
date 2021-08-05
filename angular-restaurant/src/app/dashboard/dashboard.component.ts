import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  menus: Menu[] = [];
  constructor(private menuService: MenuService) {}

  getMenus(): void {
    this.menuService
      .getMenus()
      .subscribe((menus) => (this.menus = menus.slice(1, 5)));
  }
  ngOnInit(): void {
    this.getMenus();
  }
}
