import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Menu } from './menu';
import { MENUS } from './mock-menus';
import { BucketService } from './bucket.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient, private bucketService: BucketService) {}

  private menusUrl = 'api/menus';

  getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.menusUrl);
  }
  pickMenu(pickOne?: Menu): Observable<Menu[]> {
    const pick = of(MENUS);
    if (pickOne) {
      const pick: Menu = pickOne;
      this.bucketService.add(pick);
    }
    this.bucketService.show(`고른 메뉴: ${pickOne?.name}`);
    return pick;
  }
}
