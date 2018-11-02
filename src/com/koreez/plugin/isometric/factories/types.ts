// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

type Z = { z?: number };

export type GetValue = (source: object, key: string, defaultValue: any) => any;

export type IsoBitmapTextConfig = BitmapTextConfig & Z;
export type IsoSpriteConfig = SpriteConfig & Z;
//To be continue ... IsoImageConfig, IsoContainerConfig, ....
