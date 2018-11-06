// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IIsoGameObject } from '../api/IIsoGameObject';
import { IIsoPhaserGameObject } from '../api/IIsoPhaserGameObject';
import { Cube } from '../internal/Cube';
import { Point3 } from '../internal/Point3';
import { Projector } from '../internal/Projector';
import { IsoObject } from './IsoObject';

export class IsoContainer extends Phaser.GameObjects.Container
  implements IIsoGameObject, IIsoPhaserGameObject {
  public static readonly ISO_CONTAINER: string = 'isoContainer';

  get isoX(): number {
    return this.__isoGameObject.isoX;
  }

  set isoX(value: number) {
    this.__isoGameObject.isoX = value;
  }

  get isoY(): number {
    return this.__isoGameObject.isoY;
  }

  set isoY(value: number) {
    this.__isoGameObject.isoY = value;
  }

  get isoZ(): number {
    return this.__isoGameObject.isoZ;
  }

  set isoZ(value: number) {
    this.__isoGameObject.isoZ = value;
  }

  get isoPosition(): Point3 {
    return this.__isoGameObject.isoPosition;
  }

  set isoPosition(value: Point3) {
    this.__isoGameObject.isoPosition = value;
  }

  get isoBounds(): Cube {
    return this.__isoGameObject.isoBounds;
  }

  get snap(): number {
    return this.__isoGameObject.snap;
  }

  get projector(): Projector {
    return this.__isoGameObject.projector;
  }

  constructor(
    scene: Phaser.Scene & { isoProjector?: Projector },
    x?: number,
    y?: number,
    z?: number,
    children?: Phaser.GameObjects.GameObject[],
  ) {
    super(scene, x, y, children);
    this.__isoGameObject = new IsoObject(scene.isoProjector, this, x, y, z);
  }
  private __isoGameObject: IsoObject;

  public setIsoX: (v: number) => this = (value: number) => {
    this.isoX = value;
    return this;
  };

  public setIsoY: (v: number) => this = (value: number) => {
    this.isoY = value;
    return this;
  };

  public setIsoZ: (v: number) => this = (value: number) => {
    this.isoZ = value;
    return this;
  };

  public setIsoPosition: (x?: number, y?: number, z?: number) => this = (
    x?: number,
    y?: number,
    z?: number,
  ) => {
    if (x === undefined) {
      x = 0;
    }
    if (y === undefined) {
      y = x;
    }
    if (z === undefined) {
      z = 0;
    }
    this.isoX = x;
    this.isoY = y;
    this.isoZ = z;
    return this;
  };
}
