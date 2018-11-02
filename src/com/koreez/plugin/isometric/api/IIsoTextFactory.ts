// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IsoText } from '../impl/IsoText';

export interface IIsoTextFactory extends Phaser.GameObjects.GameObjectFactory {
  isoText: (
    x: number,
    y: number,
    z: number,
    text: string | string[],
    style: object,
  ) => IsoText;
}
