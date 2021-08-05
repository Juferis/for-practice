import { Injectable } from '@angular/core';

import { Menu } from './menu';
import { MENUS } from './mock-menus';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  getMenus(): Menu[] {
    return MENUS;
  }
}
