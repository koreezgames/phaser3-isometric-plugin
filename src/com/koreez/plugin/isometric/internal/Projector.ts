// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { Point3 } from './Point3';

/**
 * @class Projector
 *
 * @classdesc
 * Creates a new Isometric Projector object, which has helpers for projecting x, y and z coordinates into axonometric x and y equivalents.
 */
export class Projector {
  //  Projection angles
  public static readonly CLASSIC: number = Math.atan(0.5);
  public static readonly ISOMETRIC: number = Math.PI / 6;
  public static readonly MILITARY: number = Math.PI / 4;

  /**
   * @name Projector#projectionAngle
   * @property {number} projectionAngle - The angle of axonometric projection.
   */
  set projectionAngle(angle: number) {
    if (angle === this.__projectionAngle) {
      return;
    }
    this.__projectionAngle = angle;
    this.__transform = [
      Math.cos(this.__projectionAngle),
      Math.sin(this.__projectionAngle),
    ];
  }

  get projectionAngle(): number {
    return this.__projectionAngle;
  }
  /**
   * @constructor
   * @param {Phaser.Scene} scene - The current scene object.
   * @param {number} projectionAngle - The angle of the axonometric projection in radians. Defaults to approx. 0.4636476 (Math.atan(0.5) which is suitable for 2:1 pixel art dimetric)
   */
  constructor(scene: Phaser.Scene, projectionAngle: number) {
    this.__scene = scene;

    this.__projectionAngle = 0;

    this.projectionAngle = projectionAngle || Projector.CLASSIC;

    this.__origin = new Phaser.Geom.Point(0.5, 0.5);
  }
  /**
   * @property {Phaser.Scene} scne - The current scene object.
   */
  private __scene: Phaser.Scene;
  /**
   * @property {Array<Number>} _transform - The pre-calculated axonometric transformation values.
   * @private
   */
  private __transform: number[];
  /**
   * @property {number} _projectionAngle - The cached angle of projection in radians.
   * @private
   */
  private __projectionAngle: number;
  /**
   * @property {Phaser.Geom.Point} origin - The x and y offset multipliers as a ratio of the game world size.
   * @default
   */
  private __origin: Phaser.Geom.Point;

  /**
   * Use axonometric projection to transform a 3D Point3 coordinate to a 2D Point coordinate. If given the coordinates will be set into the object, otherwise a brand new Point object will be created and returned.
   * @method Projector#project
   * @param {Point3} point3 - The Point3 to project from.
   * @param {Phaser.Geom.Point} out - The Point to project to.
   * @return {Phaser.Geom.Point} The transformed Point.
   */
  public project(
    point3: Point3,
    out: Phaser.Geom.Point = new Phaser.Geom.Point(),
  ): Phaser.Geom.Point {
    out.x = (point3.x - point3.y) * this.__transform[0];
    out.y = (point3.x + point3.y) * this.__transform[1] - point3.z;

    const { width, height } = this.__scene.sys.game.config;
    out.x += +width * this.__origin.x;
    out.y += +height * this.__origin.y;

    return out;
  }

  /**
   * Use axonometric projection to transform a 3D Point3 coordinate to a 2D Point coordinate, ignoring the z-axis. If given the coordinates will be set into the object, otherwise a brand new Point object will be created and returned.
   * @method Projector#projectXY
   * @param {Point3} point3 - The Point3 to project from.
   * @param {Phaser.Geom.Point} out - The Point to project to.
   * @return {Phaser.Geom.Point} The transformed Point.
   */
  public projectXY(
    point3: Point3,
    out: Phaser.Geom.Point = new Phaser.Geom.Point(),
  ): Phaser.Geom.Point {
    out.x = (point3.x - point3.y) * this.__transform[0];
    out.y = (point3.x + point3.y) * this.__transform[1];

    out.x += +this.__scene.game.config.width * this.__origin.x;
    out.y += +this.__scene.game.config.height * this.__origin.y;

    return out;
  }

  /**
   * Use reverse axonometric projection to transform a 2D Point coordinate to a 3D Point3 coordinate. If given the coordinates will be set into the object, otherwise a brand new Point3 object will be created and returned.
   * @method Projector#unproject
   * @param {Phaser.Geom.Point} point - The Point to project from.
   * @param {Point3} out - The Point3 to project to.
   * @param {number} [z] - Specified z-plane to project to.
   * @return {Point3} The transformed Point3.
   */
  public unproject(
    point: Phaser.Geom.Point,
    out: Point3 = new Point3(),
    z: number = 0,
  ): Point3 {
    const x: number =
      point.x - +this.__scene.game.config.width * this.__origin.x;
    const y: number =
      point.y - +this.__scene.game.config.height * this.__origin.y + z;

    out.x = x / (2 * this.__transform[0]) + y / (2 * this.__transform[1]);
    out.y = -(x / (2 * this.__transform[0])) + y / (2 * this.__transform[1]);
    out.z = z;

    return out;
  }
}
