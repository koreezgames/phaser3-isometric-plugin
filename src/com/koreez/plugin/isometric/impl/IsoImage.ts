// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IIsoGameObject } from '../api/IIsoGameObject';
import { IIsoPhaserGameObject } from '../api/IIsoPhaserGameObject';
import { Cube } from './Cube';
import { Point3 } from './Point3';
import { Projector } from './Projector';
import { IsoObject } from './IsoObject';

export class IsoImage extends Phaser.GameObjects.Image
  implements IIsoGameObject, IIsoPhaserGameObject {
  public static readonly ISO_IMAGE: string = 'isoImage';

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

  public setIsoText: (value: number) => {};

  constructor(
    scene: Phaser.Scene & { isoProjector?: Projector },
    x: number,
    y: number,
    z: number,
    texture: string,
    frame?: string | integer,
  ) {
    super(scene, x, y, texture, frame);
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

  public set2DPosition(x?: number, y?: number): this {
    this.__isoGameObject.set2DPosition(x, y);
    return this;
  }

  public setIsoPosition(point3: Point3): this {
    this.__isoGameObject.setIsoPosition(point3);
    return this;
  }
}
