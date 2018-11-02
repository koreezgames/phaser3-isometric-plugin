// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IsoSprite } from '../impl/IsoSprite';

export interface IIsoSpriteFactory
  extends Phaser.GameObjects.GameObjectFactory {
  isoSprite: (
    x: number,
    y: number,
    z: number,
    key: string,
    frame?: string | number,
  ) => IsoSprite;
}
