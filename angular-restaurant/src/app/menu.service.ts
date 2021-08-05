import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Menu } from './menu';
import { MENUS } from './mock-menus';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  getMenus(): Observable<Menu[]> {
    const menus = of(MENUS);
    return menus;
  }
}
