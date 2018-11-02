// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { Cube } from '../internal/Cube';
import { Projector } from '../internal/Projector';
import { Point3 } from '../internal/Point3';

export interface IIsoGameObject {
  isoX: number;
  isoY: number;
  isoZ: number;
  isoPosition: Point3;
  isoBounds: Cube;
  snap: number;
  projector: Projector;
}
