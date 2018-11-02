// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IIsoImageFactory } from './IIsoImageFactory';
import { IIsoTextFactory } from './IIsoTextFactory';
import { IIsoBitmapTextFactory } from './IIsoBitmapTextFactory';
import { IIsoContainerFactory } from './IIsoContainerFactory';
import { IIsoSpriteFactory } from './IIsoSpriteFactory';

export type TIsoGameObjectFactory = IIsoImageFactory &
  IIsoTextFactory &
  IIsoBitmapTextFactory &
  IIsoContainerFactory &
  IIsoSpriteFactory;
