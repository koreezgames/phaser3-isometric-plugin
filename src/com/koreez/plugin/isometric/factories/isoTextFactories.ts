// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IsoText } from '../impl/IsoText';
import { GetValue } from './types';
import { handleSceneIsoProjector } from './handleSceneIsoProjector';

export function isoTextFactory(
  x: number,
  y: number,
  z: number,
  text: string | string[],
  style: object,
): IsoText {
  handleSceneIsoProjector(this.scene);
  return this.scene.add.existing(
    new IsoText(this.scene, this.scene.isoProjector, x, y, z, text, style),
  );
}

export function isoTextCreator(config: any, addToScene?: boolean): IsoText {
  const getAdvancedValue: GetValue = Phaser.Utils.Objects.GetAdvancedValue;
  config = config || {};
  config.add = addToScene;
  const x: number = getAdvancedValue(config, 'x', 0);
  const y: number = getAdvancedValue(config, 'y', 0);
  const z: number = getAdvancedValue(config, 'z', 0);
  const content: string | string[] = getAdvancedValue(config, 'text', '');
  const style: object = getAdvancedValue(config, 'style', null);
  handleSceneIsoProjector(this.scene);
  const isoText: IsoText = new IsoText(
    this.scene,
    this.scene.isoProjector,
    x,
    y,
    z,
    content,
    style,
  );
  Phaser.GameObjects.BuildGameObject(this.scene, isoText, config);
  return isoText;
}
