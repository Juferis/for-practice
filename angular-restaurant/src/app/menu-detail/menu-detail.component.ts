import { Component, OnInit, Input } from '@angular/core';

import { Menu } from '../menu';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css'],
})
export class MenuDetailComponent implements OnInit {
  @Input() menu?: Menu; // 원리를 모르겠음(해결) -> 다른 컴포넌트로부터 데이터를 받아올 때 읽기 위헤 Input을 사용
  constructor() {}

  ngOnInit(): void {}
}
