import { Injectable } from '@angular/core';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root',
})
export class BucketService {
  bucket: Menu[] = [];
  alert: string[] = [];
  showAll: string[] = [];
  priceAll: number = 0;

  add(pick: Menu) {
    this.bucket.push(pick);
  }
  show(pick: string) {
    this.alert.push(pick);
  }

  clear() {
    location.reload();
    this.bucket = [];
    this.alert = [];
  }

  result() {
    for (let i = 0; i < this.bucket.length; i++) {
      this.showAll.push(`${this.bucket[i].name}`);
      this.priceAll += this.bucket[i].price;
    }
  }

  constructor() {}
}
