import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';
import { BabylonService } from './service/babylon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas!: ElementRef<HTMLCanvasElement>;

  box1: any;
  box2: any;

  constructor(private babylonService: BabylonService) {}

  renderBabylon() {
    this.babylonService.runRenderLoop(this.rendererCanvas);
  }

  rangeHandler(event: any) {
    const height = event.target.value;
    this.babylonService.changeHeight(this.box2, height);
  }

  async ngOnInit() {
    this.renderBabylon();
    const box1 = this.babylonService.createBox1();
    const box2 = this.babylonService.createBox2();
    this.box1 = box1;
    this.box2 = box2;
    this.babylonService.createPanel(box2);
  }
}
