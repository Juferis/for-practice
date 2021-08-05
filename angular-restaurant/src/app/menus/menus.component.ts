import { Component, OnInit } from '@angular/core';

import { Menu } from '../menu';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css'],
})
export class MenusComponent implements OnInit {
  testMenu: Menu = {
    id: 1,
    name: 'Kimchi',
    price: 5000,
  };
  constructor() {}

  ngOnInit(): void {}
}
