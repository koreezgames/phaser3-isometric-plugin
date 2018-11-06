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
  setIsoPosition: <T>(x?: number, y?: number, z?: number) => ThisType<T>;
}
