// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IIsoGameObject } from '../api/IIsoGameObject';
import { TPhaserIsoGameObject } from '../api/TPhaserIsoGameObject';
import { Cube } from './Cube';
import { Point3 } from './Point3';
import { Projector } from './Projector';

/** @internal
 */
export class IsoObject implements IIsoGameObject {
  /**
   * The axonometric position of the IsoContainer on the x axis. Increasing the x coordinate will move the object down and to the right on the screen.
   *
   * @name IsoSprite#isoX
   * @property {number} isoX - The axonometric position of the IsoSprite on the x axis.
   */
  get isoX(): number {
    return this.__isoPosition.x;
  }

  set isoX(value: number) {
    this.__isoPosition.x = value;
    this.__project();
    this.__resetIsoBounds();
  }
  /**
   * The axonometric position of the IsoSprite on the y axis. Increasing the y coordinate will move the object down and to the left on the screen.
   *
   * @name IsoSprite#isoY
   * @property {number} isoY - The axonometric position of the IsoSprite on the y axis.
   */
  get isoY(): number {
    return this.__isoPosition.y;
  }

  set isoY(value: number) {
    this.__isoPosition.y = value;
    this.__project();
    this.__resetIsoBounds();
  }

  /**
   * The axonometric position of the IsoSprite on the z axis. Increasing the z coordinate will move the object directly upwards on the screen.
   *
   * @name Phaser.Plugin.Isometric.IsoSprite#isoZ
   * @property {number} isoZ - The axonometric position of the IsoSprite on the z axis.
   */
  get isoZ(): number {
    return this.__isoPosition.z;
  }

  set isoZ(value: number) {
    this.__isoPosition.z = value;
    this.__project();
    this.__resetIsoBounds();
  }

  /**
   * A Point3 object representing the axonometric position of the IsoSprite.
   *
   * @name Phaser.Plugin.Isometric.IsoSprite#isoPosition
   * @property {Point3} isoPosition - The axonometric position of the IsoSprite.
   * @readonly
   */
  get isoPosition(): Point3 {
    return this.__isoPosition;
  }

  set isoPosition(value: Point3) {
    this.__isoPosition = value;
  }

  /**
   * A Cube object representing the derived boundsof the IsoSprite.
   *
   * @name Phaser.Plugin.Isometric.IsoSprite#isoBounds
   * @property {Point3} isoBounds - The derived 3D bounds of the IsoSprite.
   * @readonly
   */
  get isoBounds(): Cube {
    if (!this.__isoBounds) {
      this.__resetIsoBounds();
    }

    return this.__isoBounds;
  }
  /**
   * @property {number} snap - Snap this IsoSprite's position to the specified value; handy for keeping pixel art snapped to whole pixels.
   * @default
   */
  public snap: number;
  /**
   * @property {Projector} projector - Snap this IsoSprite's position to the specified value; handy for keeping pixel art snapped to whole pixels.
   * @default
   */
  public projector: Projector;

  /**
   * @constructor
   * @extends Phaser.GameObjects.Sprite
   * @param {Phaser.Scene} scene - A reference to the current scene.
   * @param {Projector} projector - A reference to the Projector.
   * @param {number} x - The x coordinate (in 3D space) to position the IsoSprite at.
   * @param {number} y - The y coordinate (in 3D space) to position the IsoSprite at.
   * @param {number} z - The z coordinate (in 3D space) to position the IsoSprite at.
   * @param {string} key - This is the image or texture used by the IsoSprite during rendering. It can be a string which is a reference to the Cache entry.
   * @param {string|number} frame - If this IsoSprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
   */
  constructor(
    projector: Projector,
    phaserIsoGameObject: TPhaserIsoGameObject,
    x?: number,
    y?: number,
    z?: number,
  ) {
    this.projector = projector;
    this.__phaserIsoGameObject = phaserIsoGameObject;
    this.__isoPosition = new Point3(x, y, z);
    this.snap = 0;
    this.__project();
    this.__isoBounds = this.__resetIsoBounds();
  }

  /**
   * @property {Point3} _isoPosition - Internal 3D position.
   * @private
   */
  private __isoPosition: Point3;
  /**
   * @property {Cube} _isoBounds - Internal derived 3D bounds.
   * @private
   */
  private __isoBounds: Cube;
  private __phaserIsoGameObject: TPhaserIsoGameObject;

  private __resetIsoBounds(): Cube {
    if (typeof this.__isoBounds === 'undefined') {
      this.__isoBounds = new Cube();
    }

    let asx: number = Math.abs(this.__phaserIsoGameObject.scaleX);
    let asy: number = Math.abs(this.__phaserIsoGameObject.scaleY);

    this.__isoBounds.widthX =
      Math.round(Math.abs(this.__phaserIsoGameObject.width) * 0.5) * asx;
    this.__isoBounds.widthY =
      Math.round(Math.abs(this.__phaserIsoGameObject.width) * 0.5) * asx;
    this.__isoBounds.height =
      Math.round(
        Math.abs(this.__phaserIsoGameObject.height) -
          Math.abs(this.__phaserIsoGameObject.width) * 0.5,
      ) * asy;

    this.__isoBounds.x =
      this.isoX +
      this.__isoBounds.widthX * -this.__phaserIsoGameObject.originX +
      this.__isoBounds.widthX * 0.5;
    this.__isoBounds.y =
      this.isoY +
      this.__isoBounds.widthY * this.__phaserIsoGameObject.originX -
      this.__isoBounds.widthY * 0.5;
    this.__isoBounds.z =
      this.isoZ -
      Math.abs(this.__phaserIsoGameObject.height) *
        (1 - this.__phaserIsoGameObject.originY) +
      Math.abs(this.__phaserIsoGameObject.width * 0.5);

    return this.__isoBounds;
  }

  /**
   * Internal function that performs the axonometric projection from 3D to 2D space.
   * @method Phaser.Plugin.Isometric.IsoSprite#_project
   * @memberof Phaser.Plugin.Isometric.IsoSprite
   * @private
   */
  private __project(): void {
    const { x, y } = this.projector.project(this.__isoPosition);

    this.__phaserIsoGameObject.x = x;
    this.__phaserIsoGameObject.y = y;
    this.__phaserIsoGameObject.depth =
      this.__isoPosition.x + this.__isoPosition.y + this.__isoPosition.z * 1.25;

    if (this.snap > 0) {
      this.__phaserIsoGameObject.x = Phaser.Math.Snap.To(
        this.__phaserIsoGameObject.x,
        this.snap,
      );
      this.__phaserIsoGameObject.y = Phaser.Math.Snap.To(
        this.__phaserIsoGameObject.y,
        this.snap,
      );
    }
  }
}
