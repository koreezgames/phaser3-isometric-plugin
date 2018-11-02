// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IsoContainer } from '../impl/IsoContainer';

export interface IIsoContainerFactory
  extends Phaser.GameObjects.GameObjectFactory {
  isoContainer: (
    x?: number,
    y?: number,
    z?: number,
    children?: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[],
  ) => IsoContainer;
}
