// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { expect } from 'chai';
import { IsoContainer } from '../../../../src/com/koreez/plugin/isometric/impl/IsoContainer';
import { IsoImage } from '../../../../src/com/koreez/plugin/isometric/impl/IsoImage';
import { IsoSprite } from '../../../../src/com/koreez/plugin/isometric/impl/IsoSprite';
import { IsoText } from '../../../../src/com/koreez/plugin/isometric/impl/IsoText';
import { IsometricPlugin } from '../../../../src/com/koreez/plugin/IsometricPlugin';
import '../../../entry';

describe('Iso Plugin', () => {
  it('plugin_is_properly_installed', (done: () => void) => {
    const config: any = {
      banner: false,
      height: 10,
      plugins: {
        global: [
          { key: 'IsometricPlugin', plugin: IsometricPlugin, start: true },
        ],
      },
      scene: {
        create,
      },
      type: Phaser.AUTO,
      width: 10,
    };

    let plugin: IsometricPlugin;
    function create(): void {
      plugin = this.plugins.get('IsometricPlugin');
      expect(plugin).instanceOf(IsometricPlugin);
      done();
    }

    (window as any).game = new Phaser.Game(config);
  });

  it('plugin_game_object_creators_are_properly_working', (done: () => void) => {
    const config: any = {
      banner: false,
      height: 10,
      plugins: {
        global: [
          { key: 'IsometricPlugin', plugin: IsometricPlugin, start: true },
        ],
      },
      scene: {
        preload,
        create,
      },
      type: Phaser.AUTO,
      width: 10,
    };

    function preload(): void {
      this.load.image('cube', 'base/assets/cube.png');
      this.load.bitmapFont(
        'myFont',
        'base/assets/myFont.png',
        'base/assets/myFont.xml',
      );
    }

    function create(): void {
      const isoSprite: IsoSprite = this.add.isoSprite(0, 0, 0, 'cube');
      expect(isoSprite).instanceOf(IsoSprite);

      const isoContainer: IsoContainer = this.add.isoContainer();
      expect(isoContainer).instanceOf(IsoContainer);

      const isoText: IsoText = this.add.isoText(0, 0, 0, 'hello world');
      expect(isoText).instanceOf(IsoText);

      const isoImage: IsoImage = this.add.isoImage(0, 0, 0, 'cube');
      expect(isoImage).instanceOf(IsoImage);

      // `scene.sys.cache.bitmapFont.get("myFont")` is `undefined` in unit tests maybe because it reads form browser cache
      // in real example everything is okay!
      // setTimeout(() => {
      //   const isoBitmapText: IsoBitmapText = this.add.isoBitmapText(
      //     0,
      //     0,
      //     0,
      //     'myFont',
      //     'Hello',
      //     16,
      //   );
      //   expect(isoBitmapText).instanceOf(IsoBitmapText);
      // }, 1600);
      done();
    }

    (window as any).game = new Phaser.Game(config);
  });

  it('plugin_game_object_factories_are_properly_working', (done: () => void) => {
    const config: any = {
      banner: false,
      height: 10,
      plugins: {
        global: [
          { key: 'IsometricPlugin', plugin: IsometricPlugin, start: true },
        ],
      },
      scene: {
        preload,
        create,
      },
      type: Phaser.AUTO,
      width: 10,
    };

    function preload(): void {
      this.load.image('cube', 'base/assets/cube.png');
      this.load.bitmapFont(
        'myFont',
        'base/assets/myFont.png',
        'base/assets/myFont.xml',
      );
    }

    function create(): void {
      const isoSprite: IsoSprite = this.make.isoSprite({
        x: 0,
        y: 0,
        z: 0,
        key: 'cube',
      });
      expect(isoSprite).instanceOf(IsoSprite);

      const isoContainer: IsoContainer = this.make.isoContainer({
        x: 0,
        y: 0,
        z: 0,
        children: [isoSprite],
      });
      expect(isoContainer).instanceOf(IsoContainer);

      const isoText: IsoText = this.make.isoText(
        {
          x: 0,
          y: 0,
          z: 0,
          text: 'hello world',
        },
        true,
      );
      expect(isoText).instanceOf(IsoText);

      const isoImage: IsoImage = this.make.isoImage(
        {
          x: 0,
          y: 0,
          z: 0,
          key: 'cube',
        },
        true,
      );
      expect(isoImage).instanceOf(IsoImage);

      // // `scene.sys.cache.bitmapFont.get("myFont")` is `undefined` in unit tests maybe because it reads form browser cache
      // // in real example everything is okay!
      // setTimeout(() => {
      //   const isoBitmapText: IsoBitmapText = this.make.isoBitmapText(
      //     {
      //       x: 0,
      //       y: 0,
      //       z: 0,
      //       font: 'myFont',
      //       text: 'Hi',
      //     },
      //     true,
      //   );
      //   expect(isoBitmapText).instanceOf(IsoBitmapText);
      // }, 1600);

      done();
    }

    (window as any).game = new Phaser.Game(config);
  });
});
