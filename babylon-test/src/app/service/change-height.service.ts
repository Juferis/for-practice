import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChangeHeightService {
  public changeHeight(box: any, value: number) {
    box.position.y = value;
  }

  constructor() {}
}
