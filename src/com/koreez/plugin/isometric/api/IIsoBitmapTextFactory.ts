// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IsoBitmapText } from '../impl/IsoBitmapText';

export interface IIsoBitmapTextFactory
  extends Phaser.GameObjects.GameObjectFactory {
  isoBitmapText: (
    x: number,
    y: number,
    z: number,
    font: string,
    text?: string | string[],
    size?: number,
    align?: integer,
  ) => IsoBitmapText;
}
