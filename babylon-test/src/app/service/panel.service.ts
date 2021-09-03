import { Injectable } from '@angular/core';
import * as BABYLON from 'babylonjs';
import * as GUI from 'babylonjs-gui';

@Injectable({
  providedIn: 'root',
})
export class PanelService {
  public createPanel(box: any, scene: any) {
    const plane = BABYLON.Mesh.CreatePlane('panel', 2, scene);
    plane.parent = box;
    plane.position.y = 4;
    plane.isVisible = false;

    const advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI('Ui');

    const rect1 = new GUI.Rectangle();
    advancedTexture.addControl(rect1);
    rect1.width = '100px';
    rect1.height = '50px';
    rect1.thickness = 2;
    rect1.transformCenterX = 0;
    rect1.transformCenterY = 1;
    rect1.color = 'black';
    rect1.background = 'white';
    rect1.alpha = 0.7;
    rect1.scaleX = 1;
    rect1.scaleY = 1;
    rect1.cornerRadius = 30;
    rect1.linkWithMesh(plane);
    // rect1.isVisible = true;

    const label = new GUI.TextBlock();
    label.text = 'hello?';
    label.fontSize = 14;
    rect1.addControl(label);
  }
  constructor() {}
}
