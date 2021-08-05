import { Component, OnInit, Input } from '@angular/core';

import { Menu } from '../menu';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css'],
})
export class MenuDetailComponent implements OnInit {
  @Input() menu?: Menu; // 원리를 모르겠음
  constructor() {}

  ngOnInit(): void {}
}
