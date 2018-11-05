// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IsoSprite } from '../impl/IsoSprite';
import { GetValue, IsoSpriteConfig } from './types';
import { handleSceneIsoProjector } from './handleSceneIsoProjector';

export function isoSpriteFactory(
  x: number,
  y: number,
  z: number,
  key: string,
  frame?: string | number,
): IsoSprite {
  handleSceneIsoProjector(this.scene);

  return this.scene.add.existing(
    new IsoSprite(this.scene, x, y, z, key, frame),
  );
}

export function isoSpriteCreator(
  config: IsoSpriteConfig,
  addToScene?: boolean,
): IsoSprite {
  const getAdvancedValue: GetValue = Phaser.Utils.Objects.GetAdvancedValue;
  config = config || {};
  config.add = addToScene;
  const x: number = getAdvancedValue(config, 'x', 0);
  const y: number = getAdvancedValue(config, 'y', 0);
  const z: number = getAdvancedValue(config, 'z', 0);
  const key: any = getAdvancedValue(config, 'key', null);
  const frame: any = getAdvancedValue(config, 'frame', null);
  handleSceneIsoProjector(this.scene);
  const isoSprite: IsoSprite = new IsoSprite(this.scene, x, y, z, key, frame);
  Phaser.GameObjects.BuildGameObject(this.scene, isoSprite, config);
  return isoSprite;
}
