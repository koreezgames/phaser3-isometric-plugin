// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IsoImage } from '../impl/IsoImage';
import { GetValue } from './types';
import { handleSceneIsoProjector } from './handleSceneIsoProjector';

export function isoImageFactory(
  x: number,
  y: number,
  z: number,
  texture: string,
  frame?: string | integer,
): IsoImage {
  handleSceneIsoProjector(this.scene);

  return this.scene.add.existing(
    new IsoImage(this.scene, x, y, z, texture, frame),
  );
}

export function isoImageCreator(config: any, addToScene?: boolean): IsoImage {
  const getAdvancedValue: GetValue = Phaser.Utils.Objects.GetAdvancedValue;
  config = config || {};
  config.add = addToScene;
  const x: number = getAdvancedValue(config, 'x', 0);
  const y: number = getAdvancedValue(config, 'y', 0);
  const z: number = getAdvancedValue(config, 'z', 0);
  const key: any = getAdvancedValue(config, 'key', null);
  const frame: any = getAdvancedValue(config, 'frame', null);

  handleSceneIsoProjector(this.scene);

  const isoImage: IsoImage = new IsoImage(this.scene, x, y, z, key, frame);
  Phaser.GameObjects.BuildGameObject(this.scene, isoImage, config);
  return isoImage;
}
