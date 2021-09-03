import { ElementRef, Injectable, NgZone } from '@angular/core';
import * as BABYLON from 'babylonjs';
import { ChangeHeightService } from './change-height.service';
import { PanelService } from './panel.service';

@Injectable({
  providedIn: 'root',
})
export class BabylonService {
  public canvas?: HTMLCanvasElement;
  public engine?: BABYLON.Engine;
  public scene?: BABYLON.Scene;
  public camera?: BABYLON.FreeCamera;

  /**
   * createScene 화면생성
   */

  public createScene(rendererCanvas: ElementRef<HTMLCanvasElement>) {
    const engine = (this.engine = new BABYLON.Engine(
      rendererCanvas.nativeElement,
      true
    ));

    const scene = (this.scene = new BABYLON.Scene(engine));
    scene.clearColor = new BABYLON.Color4(0.1, 0.1, 0.1, 0.5);

    const camera = (this.camera = new BABYLON.FreeCamera(
      'camera',
      BABYLON.Vector3.One(),
      scene
    ));
    camera.attachControl(true);

    const light = new BABYLON.HemisphericLight(
      'light',
      new BABYLON.Vector3(0, 50, 0),
      scene
    );
  }

  public createBox1() {
    const box = BABYLON.MeshBuilder.CreateBox('box', {
      size: 5,
      height: 5,
      width: 5,
    });
    box.position.x = 0;
    box.position.z = 20;
    return box;
  }
  public createBox2() {
    const box = BABYLON.MeshBuilder.CreateBox('box', {
      size: 5,
      height: 5,
      width: 5,
    });
    box.position.x = 0;
    box.position.z = 20;
    box.position.y = 5;
    return box;
  }

  // 높이 조절
  public changeHeight(box: any, value: number) {
    this.changeHeightService.changeHeight(box, value);
  }
  // 패널 생성
  public createPanel(box: any) {
    this.panelService.createPanel(box, this.scene);
  }

  runRenderLoop(rendererCanvas: ElementRef<HTMLCanvasElement>): void {
    this.ngZone.runOutsideAngular(() => {
      this.createScene(rendererCanvas);
      const renderLoopCallback = () => {
        this.scene?.render();
      };
      if (document.readyState !== 'loading') {
        this.engine?.runRenderLoop(renderLoopCallback);
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.engine?.runRenderLoop(renderLoopCallback);
        });
      }
      window.addEventListener('resize', () => {
        this.engine?.resize();
      });
    });
  }

  constructor(
    private ngZone: NgZone,
    private changeHeightService: ChangeHeightService,
    private panelService: PanelService
  ) {}
}
