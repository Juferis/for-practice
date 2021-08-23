import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as BABYLON from 'babylonjs';
// 아래 친구는 로더이다 ImportMesh를 사용하기 위함
import 'babylonjs-loaders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public canvas!: HTMLCanvasElement;
  public engine!: BABYLON.Engine;
  public scene!: BABYLON.Scene;
  public camera!: BABYLON.DeviceOrientationCamera;

  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(private ngZone: NgZone) {}

  // 화면 생성
  public createScene(): void {
    const engine = (this.engine = new BABYLON.Engine(
      this.rendererCanvas.nativeElement,
      true
    ));

    const scene = (this.scene = new BABYLON.Scene(engine));

    const camera = new BABYLON.DeviceOrientationCamera(
      'camera',
      new BABYLON.Vector3(0, 0, 0),
      scene
    );
    camera.setTarget(new BABYLON.Vector3(0, 0, 10));
    camera.attachControl(this.canvas, true);

    // const camera = (this.camera = new BABYLON.FreeCamera(
    //   'camera',
    //   new BABYLON.Vector3(0, 50, 0),
    //   scene
    // ));

    const light = new BABYLON.HemisphericLight(
      'light',
      new BABYLON.Vector3(0, 50, 0),
      scene
    );
    var ground = BABYLON.MeshBuilder.CreateGround(
      'ground',
      { width: 14, height: 38 },
      scene
    );
    ground.position.x = +0.3;
    ground.position.z = -1.4;
  }

  // @@이 친구를 잘 봐두자@@ 생성한 화면을 보여주기
  private runRenderLoop(): void {
    this.ngZone.runOutsideAngular(() => {
      this.createScene();
      const rendererLoopCallback = () => {
        this.scene.render();
      };

      if (document.readyState !== 'loading') {
        this.engine.runRenderLoop(rendererLoopCallback);
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.engine.runRenderLoop(rendererLoopCallback);
        });
      }

      window.addEventListener('resize', () => {
        this.engine.resize();
      });
    });
  }

  // 메쉬를 가져와 화면에 띄워주기
  public importMeshes1() {
    BABYLON.SceneLoader.ImportMesh(
      '',
      'assets/lib/',
      'shinwoo_level1.glb',
      this.scene,
      () => {
        this.scene.createDefaultCamera(true, true, true);
      }
    );
  }

  // public importMeshes2() {
  //   BABYLON.SceneLoader.ImportMesh(
  //     '',
  //     'assets/lib/',
  //     'shinwoo_level2.glb',
  //     this.scene,
  //     () => {
  //       this.scene.createDefaultCamera(true, true, true);
  //     }
  //   );
  // }
  async ngOnInit() {
    this.runRenderLoop();
    this.importMeshes1();
    // this.importMeshes2();
  }
}
