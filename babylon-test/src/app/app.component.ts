import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BabylonService } from './babylon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(private babylonService: BabylonService) {}

  renderBabylon() {
    this.babylonService.runRenderLoop(this.rendererCanvas);
  }

  ngOnInit(): void {
    this.renderBabylon();
  }
}
