// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IsoBitmapText } from '../impl/IsoBitmapText';
import { GetValue, IsoBitmapTextConfig } from './types';
import { handleSceneIsoProjector } from './handleSceneIsoProjector';

export function isoBitmapTextFactory(
  x: number,
  y: number,
  z: number,
  font: string,
  text?: string | string[],
  size?: number,
  align?: integer,
): IsoBitmapText {
  handleSceneIsoProjector(this.scene);

  return this.scene.add.existing(
    new IsoBitmapText(this.scene, x, y, z, font, text, size, align),
  );
}

export function isoBitmapTextCreator(
  config: IsoBitmapTextConfig,
  addToScene?: boolean,
): IsoBitmapText {
  const getAdvancedValue: GetValue = Phaser.Utils.Objects.GetAdvancedValue;
  const getValue: GetValue = Phaser.Utils.Objects.GetValue;
  config = config || {};
  config.add = addToScene;
  const x: number = getAdvancedValue(config, 'x', 0);
  const y: number = getAdvancedValue(config, 'y', 0);
  const z: number = getAdvancedValue(config, 'z', 0);
  const font: string = getValue(config, 'font', '');
  const text: string = getValue(config, 'text', '');
  const size: number = getValue(config, 'size', false);
  const align: integer = getValue(config, 'align', 0);

  handleSceneIsoProjector(this.scene);

  const isoBitmapText: IsoBitmapText = new IsoBitmapText(
    this.scene,
    x,
    y,
    z,
    font,
    text,
    size,
    align,
  );

  Phaser.GameObjects.BuildGameObject(this.scene, isoBitmapText, config);
  return isoBitmapText;
}
