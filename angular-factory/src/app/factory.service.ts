import { Injectable } from '@angular/core';
import { factorys } from './mock-factory';
@Injectable({
  providedIn: 'root',
})
export class FactoryService {
  getFactory() {
    return factorys;
  }
  constructor() {}
}
