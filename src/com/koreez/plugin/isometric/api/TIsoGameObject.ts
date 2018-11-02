// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IIsoGameObject } from './IIsoGameObject';
import { IIsoPhaserGameObject } from './IIsoPhaserGameObject';

export type TIsoGameObject = IIsoGameObject &
  IIsoPhaserGameObject &
  Phaser.GameObjects.GameObject;
