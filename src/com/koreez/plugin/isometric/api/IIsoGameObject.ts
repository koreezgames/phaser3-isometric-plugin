// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { Cube } from '../impl/Cube';
import { Projector } from '../impl/Projector';
import { Point3 } from '../impl/Point3';

export interface IIsoGameObject {
  isoX: number;
  isoY: number;
  isoZ: number;
  isoPosition: Point3;
  isoBounds: Cube;
  snap: number;
  projector: Projector;
}
