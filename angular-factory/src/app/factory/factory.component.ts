import { Component, OnInit } from '@angular/core';
import { Factory } from '../Factory';
import { FactoryService } from '../factory.service';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css'],
})
export class FactoryComponent implements OnInit {
  factorys: Factory[] = [];
  constructor(private factoryService: FactoryService) {}

  getFactory() {
    this.factorys = this.factoryService.getFactory();
  }

  ngOnInit(): void {
    // this.getFactory();
  }
}
