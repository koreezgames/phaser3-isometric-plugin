// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IIsoImageCreator } from './IIsoImageCreator';
import { IIsoTextCreator } from './IIsoTextCreator';
import { IIsoBitmapTextCreator } from './IIsoBitmapTextCreator';
import { IIsoContainerCreator } from './IIsoContainerCreator';
import { IIsoSpriteCreator } from './IIsoSpriteCreator';

export type TIsoGameObjectCreator = IIsoImageCreator &
  IIsoTextCreator &
  IIsoBitmapTextCreator &
  IIsoContainerCreator &
  IIsoSpriteCreator;
