// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IsoImage } from '../impl/IsoImage';

export interface IIsoImageCreator extends Phaser.GameObjects.GameObjectCreator {
  isoImage: (config: any, addToScene?: boolean) => IsoImage;
}
