/// <reference path="../definitions/phaser.d.ts" />

import 'phaser';
import { IsometricPlugin } from '../src/com/koreez/plugin/IsometricPlugin';

export default class Game extends Phaser.Game {
  public centerX: number;
  public centerY: number;
  constructor(config: GameConfig) {
    super(config);
  }
}

function preload(): void {
  console.log('preload');
  this.load.image('cube', 'static/assets/cube.png');
  this.load.bitmapFont(
    'myFont',
    'static/assets/myFont.png',
    'static/assets/myFont.xml',
  );
}

function create(): void {
  console.log('create');
  // We specify the x and y position, the width and height and the key for the image of the image.
  // It will be automatically scaled!

  this.isoCube = this.add.isoSprite(100, 0, 0, 'cube');
  this.isoBitmapText = this.add.isoBitmapText(0, 0, 0, 'myFont', 'Hello', 16);

  // this.cubeImage = this.add.image(0, 0, 'cube');

  // this.cubeImage.setScale(1.3);

  // this.isoContainer = this.add.isoContainer(-200, 0, 0);

  // this.isoContainer.add(this.isoCube);
  // this.classicContainer = this.add.container(0, 0);
  // this.classicContainer.add(this.isoCube);
}

function update(): void {
  console.log('update');
  // We specify the x and y position, the width and height and the key for the image of the image.
  // It will be automatically scaled!
  this.isoCube.isoY += 1;
  this.isoBitmapText.isoX += 1;
  // this.isoContainer.isoX += 0.5;
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    const config: any = {
      banner: false,
      height: 600,
      plugins: {
        global: [
          { key: 'IsometricPlugin', plugin: IsometricPlugin, start: true },
        ],
      },
      scene: {
        create,
        preload,
        update,
      },
      type: Phaser.AUTO,
      width: 800,
    };
    (window as any).game = new Game(config);
  }
};
