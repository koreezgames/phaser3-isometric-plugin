import { Point3 } from '../impl/Point3';

// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

export interface IIsoPhaserGameObject {
  setIsoX: <T>(v: number) => ThisType<T>;
  setIsoY: <T>(v: number) => ThisType<T>;
  setIsoZ: <T>(v: number) => ThisType<T>;
  setIsoPosition: <T>(point3: Point3) => ThisType<T>;
  set2DPosition: <T>(x?: number, y?: number) => ThisType<T>;
}
