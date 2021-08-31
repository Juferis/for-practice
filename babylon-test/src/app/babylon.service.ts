import { ElementRef, Injectable, NgZone, ViewChild } from '@angular/core';
import * as BABYLON from 'babylonjs';

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

    const light = new BABYLON.HemisphericLight(
      'light',
      new BABYLON.Vector3(0, 50, 0),
      scene
    );
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

  constructor(private ngZone: NgZone) {}
}
