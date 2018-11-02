// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IsoContainer } from '../impl/IsoContainer';

export interface IIsoContainerCreator
  extends Phaser.GameObjects.GameObjectCreator {
  isoContainer: (config: any, addToScene?: boolean) => IsoContainer;
}
