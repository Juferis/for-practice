import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as BABYLON from 'babylonjs';
import * as GUI from 'babylonjs-gui';
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
  public camera!: BABYLON.FreeCamera;

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
    scene.clearColor = new BABYLON.Color4(0.1, 0.1, 0.1, 0.5);

    // sound
    // const sound = new BABYLON.Sound('', 'assets/sounds/NCS.mp3', scene, null, {
    //   loop: true,
    //   autoplay: true,
    // });

    const camera = (this.camera = new BABYLON.FreeCamera(
      'camera',
      new BABYLON.Vector3(0, 5, -10),
      scene
    ));
    camera.inputs.addMouseWheel();
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(true);

    const light = new BABYLON.HemisphericLight(
      'light',
      new BABYLON.Vector3(0, 50, 0),
      scene
    );
    const ground = BABYLON.MeshBuilder.CreateGround(
      'ground',
      { width: 25, height: 80 },
      scene
    );
    ground.position.z = -35.5;
    const groundMat = new BABYLON.StandardMaterial('groundMat', this.scene);
    groundMat.diffuseTexture = new BABYLON.Texture(
      'assets/lib/images-png-road-9.png',
      this.scene
    );
    ground.material = groundMat;
  }
  // @@ 이 친구를 잘 봐두자 생성한 화면을 보여주기 @@
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
  // 집 매쉬의 텍스처 설정
  window1 = new BABYLON.Vector4(0.5, 0.0, 0.75, 1.0); //뒷 면
  window2 = new BABYLON.Vector4(0.0, 0.0, 0.25, 1.0); //앞 면
  window3 = new BABYLON.Vector4(0.25, 0, 0.5, 1.0); // 오른쪽
  window4 = new BABYLON.Vector4(0.75, 0, 1.0, 1.0); //왼쪽
  faceUV = [this.window1, this.window2, this.window3, this.window4];

  // 집 몸체 생성
  public createBox() {
    const box = BABYLON.MeshBuilder.CreateBox('box', {
      size: 5,
      height: 5,
      depth: 5,
      faceUV: this.faceUV,
      wrap: true,
    });
    box.position.y = 2.5;
    const boxMat = new BABYLON.StandardMaterial('boxMaterial', this.scene);
    boxMat.diffuseTexture = new BABYLON.Texture(
      'assets/lib/cubehouse.png',
      this.scene
    );
    box.material = boxMat;

    return box;
  }

  // 지붕 생성
  public createRoof() {
    const roof = BABYLON.MeshBuilder.CreateCylinder('roof', {
      diameter: 7,
      height: 6,
      tessellation: 3,
    });
    roof.scaling.x = 0.75;
    roof.rotation.z = Math.PI / 2;
    roof.position.y = 6;

    const roofMat = new BABYLON.StandardMaterial('roofMat', this.scene);
    roofMat.diffuseTexture = new BABYLON.Texture(
      'https://assets.babylonjs.com/environments/roof.jpg',
      this.scene
    );
    roof.material = roofMat;

    return roof;
  }

  // 지붕과 몸체를 Merge해서 하나의 메쉬를 만든다
  public createHouse() {
    const house = BABYLON.Mesh.MergeMeshes(
      [this.createBox(), this.createRoof()],
      true,
      false,
      undefined,
      false,
      true
    );

    return house;
  }

  // 패널을 만든다
  public createPanel(house: any, i: number) {
    const plane = BABYLON.Mesh.CreatePlane('panel', 5, this.scene);
    plane.parent = house;
    plane.position.y = 10.5;
    plane.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL; // 패널이 카메라를 바라본다.
    const addText = GUI.AdvancedDynamicTexture.CreateForMesh(plane);
    const btn = GUI.Button.CreateSimpleButton('btn1', `House_${i}`);
    btn.width = 5;
    btn.height = 0.5;
    btn.color = 'white';
    btn.fontSize = 200;
    btn.background = 'green';
    btn.onPointerClickObservable.add(() => {
      alert(`this is House_${i}`);
    });
    addText.addControl(btn);
  }
  // 집들을 만들어준다
  public createHouses() {
    for (let i = 0; i < 10; i++) {
      let house = this.createHouse();
      house!.position.z = i * -8;
      house!.position.x = -15;
      this.createPanel(house, i);
    }
    for (let i = 0; i < 10; i++) {
      let house = this.createHouse();
      house!.position.z = i * -8;
      house!.position.x = 15;
    }
  }

  // 메쉬를 가져와 화면에 띄워주기
  // public importMeshes1() {
  //   BABYLON.SceneLoader.ImportMesh(
  //     '',
  //     'assets/lib/',
  //     'shinwoo_level1.glb',
  //     this.scene,
  //     () => {}
  //   );
  // }

  // public importMeshes2() {
  //   BABYLON.SceneLoader.ImportMesh(
  //     '',
  //     'assets/lib/',
  //     'shinwoo_level2.glb',
  //     this.scene,
  //     () => {}
  //   );
  // }
  async ngOnInit() {
    this.runRenderLoop();
    this.createHouses();
    // this.cteateCar();
    // this.importMeshes2();
    this.scene.createDefaultCamera(true, true, true);
  }
}
