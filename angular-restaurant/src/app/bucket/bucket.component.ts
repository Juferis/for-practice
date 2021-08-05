import { Component, OnInit } from '@angular/core';
import { BucketService } from '../bucket.service';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css'],
})
export class BucketComponent implements OnInit {
  constructor(public bucketService: BucketService) {}

  ngOnInit(): void {}
}
