// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { Point3 } from './Point3';

/**
 * @class Cube
 *
 * @classdesc
 * Creates a new Cube object with the bottom-back corner specified by the x, y and z parameters, with the specified breadth (widthX), depth (widthY) and height parameters. If you call this function without parameters, a Cube with x, y, z, breadth, depth and height properties set to 0 is created.
 */
export class Cube {
  /**
   * @name Cube#halfWidthX
   * @property {number} halfWidthX - Half of the widthX of the Cube.
   * @readonly
   */
  public get halfWidthX(): number {
    return Math.round(this.widthX * 0.5);
  }

  /**
   * @name Cube#halfWidthY
   * @property {number} halfWidthY - Half of the widthY of the Cube.
   * @readonly
   */
  public get halfWidthY(): number {
    return Math.round(this.widthY * 0.5);
  }

  /**
   * @name Cube#halfHeight
   * @property {number} halfHeight - Half of the height of the Cube.
   * @readonly
   */
  public get halfHeight(): number {
    return Math.round(this.height * 0.5);
  }

  /**
   * The z coordinate of the bottom of the Cube. Changing the bottom property of a Cube object has no effect on the x, y, widthX and widthY properties.
   * However it does affect the height property, whereas changing the z value does not affect the height property.
   * @name Cube#bottom
   * @property {number} bottom - The z coordinate of the bottom of the Cube.
   */
  public get bottom(): number {
    return this.z;
  }

  public set bottom(value: number) {
    this.height = value >= this.top ? 0 : this.top - value;
    this.z = value;
  }

  /**
   * The sum of the z and height properties. Changing the top property of a Cube object has no effect on the x, y, z, widthX and widthY properties, but does change the height property.
   * @name Cube#top
   * @property {number} top - The sum of the z and height properties.
   */
  public get top(): number {
    return this.z + this.height;
  }

  public set top(value: number) {
    this.height = value <= this.z ? 0 : value - this.z;
  }

  /**
   * The x coordinate of the back of the Cube. Changing the backX property of a Cube object has no effect on the y, z, widthY and height properties. However it does affect the widthX property, whereas changing the x value does not affect the width property.
   * @name Cube#backX
   * @property {number} backX - The x coordinate of the left of the Cube.
   */
  public get backX(): number {
    return this.x;
  }

  public set backX(value: number) {
    this.widthX = value >= this.frontX ? 0 : this.frontX - value;
    this.x = value;
  }

  /**
   * The y coordinate of the back of the Cube. Changing the backY property of a Cube object has no effect on the x, z, widthX and height properties. However it does affect the widthY property, whereas changing the y value does not affect the width property.
   * @name Cube#backY
   * @property {number} backY - The x coordinate of the left of the Cube.
   */
  public get backY(): number {
    return this.y;
  }

  public set backY(value: number) {
    this.widthY = value >= this.frontY ? 0 : this.frontY - value;
    this.y = value;
  }

  /**
   * The sum of the x and widthX properties. Changing the frontX property of a Cube object has no effect on the x, y, z, widthY and height properties, however it does affect the widthX property.
   * @name Cube#frontX
   * @property {number} frontX - The sum of the x and widthX properties.
   */
  public get frontX(): number {
    return this.x + this.widthX;
  }

  public set frontX(value: number) {
    this.widthX = value <= this.x ? 0 : value - this.x;
  }

  /**
   * The sum of the y and widthY properties. Changing the frontY property of a Cube object has no effect on the x, y, z, widthX and height properties, however it does affect the widthY property.
   * @name Cube#frontY
   * @property {number} frontY - The sum of the y and widthY properties.
   */
  public get frontY(): number {
    return this.y + this.widthY;
  }

  public set frontY(value: number) {
    this.widthY = value <= this.y ? 0 : value - this.y;
  }

  /**
   * The volume of the Cube derived from widthX * widthY * height.
   * @name Cube#volume
   * @property {number} volume - The volume of the Cube derived from widthX * widthY * height.
   * @readonly
   */
  public get volume(): number {
    return this.widthX * this.widthY * this.height;
  }

  /**
   * The x coordinate of the center of the Cube.
   * @name Cube#centerX
   * @property {number} centerX - The x coordinate of the center of the Cube.
   */
  public get centerX(): number {
    return this.x + this.halfWidthX;
  }

  public set centerX(value: number) {
    this.x = value - this.halfWidthX;
  }

  /**
   * The y coordinate of the center of the Cube.
   * @name Cube#centerY
   * @property {number} centerY - The y coordinate of the center of the Cube.
   */
  public get centerY(): number {
    return this.y + this.halfWidthY;
  }

  public set centerY(value: number) {
    this.y = value - this.halfWidthY;
  }

  /**
   * The z coordinate of the center of the Cube.
   * @name Cube#centerZ
   * @property {number} centerZ - The z coordinate of the center of the Cube.
   */
  public get centerZ(): number {
    return this.z + this.halfHeight;
  }

  public set centerZ(value: number) {
    this.z = value - this.halfHeight;
  }

  /**
   * A random value between the frontX and backX values (inclusive) of the Cube.
   *
   * @name Cube#randomX
   * @property {number} randomX - A random value between the frontX and backX values (inclusive) of the Cube.
   */
  public get randomX(): number {
    return this.x + Math.random() * this.widthX;
  }

  /**
   * A random value between the frontY and backY values (inclusive) of the Cube.
   *
   * @name Cube#randomY
   * @property {number} randomY - A random value between the frontY and backY values (inclusive) of the Cube.
   */
  public get randomY(): number {
    return this.y + Math.random() * this.widthY;
  }

  /**
   * A random value between the bottom and top values (inclusive) of the Cube.
   *
   * @name Cube#randomZ
   * @property {number} randomZ - A random value between the bottom and top values (inclusive) of the Cube.
   */
  public get randomZ(): number {
    return this.z + Math.random() * this.height;
  }

  /**
   * Determines whether or not this Cube object is empty. A Cube object is empty if its widthX, widthY or height is less than or equal to 0.
   * If set to true then all of the Cube properties are set to 0.
   * @name Cube#empty
   * @property {boolean} empty - Gets or sets the Cube's empty state.
   */
  public get empty(): boolean {
    return !this.widthX || !this.widthY || !this.height;
  }

  public set empty(value: boolean) {
    if (value === true) {
      this.setTo(0, 0, 0, 0, 0, 0);
    }
  }

  /**
   * The size of the Cube object, expressed as a Point3 object with the values of the widthX, widthY and height properties.
   * @method Cube.size
   * @param {Cube} a - The Cube object.
   * @param {Point3} [output] - Optional Point3 object. If given the values will be set into the object, otherwise a brand new Point3 object will be created and returned.
   * @return {Point3} The size of the Cube object
   */
  public static size(a: Cube, output: Point3): Point3 {
    if (typeof output === 'undefined' || output === null) {
      output = new Point3(a.widthX, a.widthY, a.height);
    } else {
      output.setTo(a.widthX, a.widthY, a.height);
    }

    return output;
  }

  /**
   * Returns a new Cube object with the same values for the x, y, z, widthX, widthY, and height properties as the original Cube object.
   * @method Cube.clone
   * @param {Cube} a - The Cube object.
   * @param {Cube} [output] - Optional Cube object. If given the values will be set into the object, otherwise a brand new Cube object will be created and returned.
   * @return {Cube}
   */
  public static clone(a: Cube, output: Cube): Cube {
    if (typeof output === 'undefined' || output === null) {
      output = new Cube(a.x, a.y, a.z, a.widthX, a.widthY, a.height);
    } else {
      output.setTo(a.x, a.y, a.z, a.widthX, a.widthY, a.height);
    }

    return output;
  }

  /**
   * Determines whether the specified coordinates are contained within the region defined by this Cube object.
   * @method Cube.contains
   * @param {Cube} a - The Cube object.
   * @param {number} x - The x coordinate of the point to test.
   * @param {number} y - The y coordinate of the point to test.
   * @param {number} z - The z coordinate of the point to test.
   * @return {boolean} A value of true if the Cube object contains the specified point; otherwise false.
   */
  public static contains(a: Cube, x: number, y: number, z: number): boolean {
    if (a.widthX <= 0 || a.widthY <= 0 || a.height <= 0) {
      return false;
    }

    return (
      x >= a.x &&
      x <= a.frontX &&
      y >= a.y &&
      y <= a.frontY &&
      z >= a.z &&
      z <= a.top
    );
  }

  /**
   * Determines whether the specified X and Y coordinates are contained within the region defined by this Cube object.
   * @method Cube.containsXY
   * @param {Cube} a - The Cube object.
   * @param {number} x - The x coordinate of the point to test.
   * @param {number} y - The y coordinate of the point to test.
   * @return {boolean} A value of true if the Cube object contains the specified point; otherwise false.
   */
  public static containsXY(a: Cube, x: number, y: number): boolean {
    if (a.widthX <= 0 || a.widthY <= 0) {
      return false;
    }

    return x >= a.x && x <= a.frontX && y >= a.y && y <= a.frontY;
  }

  /**
   * Determines whether the specified point is contained within the cubic region defined by this Cube object. This method is similar to the Cube.contains() method, except that it takes a Point3 object as a parameter.
   * @method Cube.containsPoint3
   * @param {Cube} a - The Cube object.
   * @param {Point3} point3 - The Point3 object being checked. Can be Point3 or any object with .x, .y and .z values.
   * @return {boolean} A value of true if the Cube object contains the specified point; otherwise false.
   */
  public static containsPoint3(a: Cube, point3: Point3): boolean {
    return Cube.contains(a, point3.x, point3.y, point3.z);
  }

  /**
   * Determines whether the first Cube object is fully contained within the second Cube object.
   * A Cube object is said to contain another if the second Cube object falls entirely within the boundaries of the first.
   * @method Cube.containsCube
   * @param {Cube} a - The first Cube object.
   * @param {Cube} b - The second Cube object.
   * @return {boolean} A value of true if the Cube object contains the specified point; otherwise false.
   */
  public static containsCube(a: Cube, b: Cube): boolean {
    //  If the given cube has a larger volume than this one then it can never contain it
    if (a.volume > b.volume) {
      return false;
    }

    return (
      a.x >= b.x &&
      a.y >= b.y &&
      a.z >= b.z &&
      a.frontX <= b.frontX &&
      a.frontY <= b.frontY &&
      a.top <= b.top
    );
  }

  /**
   * Determines whether the two Cubes intersect with each other.
   * This method checks the x, y, z, widthX, widthY, and height properties of the Cubes.
   * @method Cube.intersects
   * @param {Cube} a - The first Cube object.
   * @param {Cube} b - The second Cube object.
   * @return {boolean} A value of true if the specified object intersects with this Cube object; otherwise false.
   */
  public static intersects(a: Cube, b: Cube): boolean {
    if (
      a.widthX <= 0 ||
      a.widthY <= 0 ||
      a.height <= 0 ||
      b.widthX <= 0 ||
      b.widthY <= 0 ||
      b.height <= 0
    ) {
      return false;
    }
    return !(
      a.frontX < b.x ||
      a.frontY < b.y ||
      a.x > b.frontX ||
      a.y > b.frontY ||
      a.z > b.top ||
      a.top < b.z
    );
  }
  /**
   * @property {number} x - The x coordinate of the bottom-back corner of the Cube.
   */
  public x: number;

  /**
   * @property {number} y - The y coordinate of the bottom-back corner of the Cube.
   */
  public y: number;

  /**
   * @property {number} z - The z coordinate of the bottom-back corner of the Cube.
   */
  public z: number;

  /**
   * @property {number} widthX - The X axis width (breadth) of the Cube. This value should never be set to a negative.
   */
  public widthX: number;

  /**
   * @property {number} widthY - The Y axis width (depth) of the Cube. This value should never be set to a negative.
   */
  public widthY: number;

  /**
   * @property {number} height - The Z axis height of the Cube. This value should never be set to a negative.
   */
  public height: number;
  /**
   * @constructor
   * @param {number} x - The x coordinate of the bottom-back corner of the Cube.
   * @param {number} y - The y coordinate of the bottom-back corner of the Cube.
   * @param {number} z - The z coordinate of the bottom-back corner of the Cube.
   * @param {number} widthX - The X axis width (breadth) of the Cube. Should always be either zero or a positive value.
   * @param {number} widthY - The Y axis width (depth) of the Cube. Should always be either zero or a positive value.
   * @param {number} height - The Z axis height of the Cube. Should always be either zero or a positive value.
   */
  constructor(
    x: number = 0,
    y: number = 0,
    z: number = 0,
    widthX: number = 0,
    widthY: number = 0,
    height: number = 0,
  ) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.widthX = widthX;
    this.widthY = widthY;
    this.height = height;
    this.__corners = [
      new Point3(this.x, this.y, this.z),
      new Point3(this.x, this.y, this.z + this.height),
      new Point3(this.x, this.y + this.widthY, this.z),
      new Point3(this.x, this.y + this.widthY, this.z + this.height),
      new Point3(this.x + this.widthX, this.y, this.z),
      new Point3(this.x + this.widthX, this.y, this.z + this.height),
      new Point3(this.x + this.widthX, this.y + this.widthY, this.z),
      new Point3(
        this.x + this.widthX,
        this.y + this.widthY,
        this.z + this.height,
      ),
    ];
  }

  /**
   * @property {Array.<Point3>} _corners - The 8 corners of the Cube.
   * @private
   */
  private __corners: Point3[];

  /**
   * Sets the members of Cube to the specified values.
   * @method Cube#setTo
   * @param {number} x - The x coordinate of the bottom-back corner of the Cube.
   * @param {number} y - The y coordinate of the bottom-back corner of the Cube.
   * @param {number} z - The z coordinate of the bottom-back corner of the Cube.
   * @param {number} widthX - The X axis width (breadth) of the Cube. This value should never be set to a negative.
   * @param {number} widthY - The Y axis width (depth) of the Cube. This value should never be set to a negative.
   * @param {number} height - The Z axis height of the Cube. This value should never be set to a negative.
   * @return {Cube} This Cube object
   */
  public setTo(
    x: number,
    y: number,
    z: number,
    widthX: number,
    widthY: number,
    height: number,
  ): this {
    this.x = x;
    this.y = y;
    this.z = z;
    this.widthX = widthX;
    this.widthY = widthY;
    this.height = height;

    return this;
  }

  /**
   * Copies the x, y, z, widthX, widthY and height properties from any given object to this Cube.
   * @method Cube#copyFrom
   * @param {any} source - The object to copy from.
   * @return {Cube} This Cube object.
   */
  public copyFrom(source: any): this {
    this.setTo(
      source.x,
      source.y,
      source.z,
      source.widthX,
      source.widthY,
      source.height,
    );
    return this;
  }

  /**
   * Copies the x, y, z, widthX, widthY and height properties from this Cube to any given object.
   * @method Cube#copyTo
   * @param {any} dest - The object to copy to.
   * @return {Cube} This Cube object.
   */
  public copyTo(dest: any): this {
    dest.x = this.x;
    dest.y = this.y;
    dest.z = this.z;
    dest.widthX = this.widthX;
    dest.widthY = this.widthY;
    dest.height = this.height;
    return this;
  }

  /**
   * The size of the Cube object, expressed as a Point3 object with the values of the widthX, widthY and height properties.
   * @method Cube#size
   * @param {Point3} [output] - Optional Point3 object. If given the values will be set into the object, otherwise a brand new Point3 object will be created and returned.
   * @return {Point3} The size of the Cube object.
   */
  public size(output: Point3): Point3 {
    return Cube.size(this, output);
  }

  /**
   * Determines whether the specified coordinates are contained within the region defined by this Cube object.
   * @method Cube#contains
   * @param {number} x - The x coordinate of the point to test.
   * @param {number} y - The y coordinate of the point to test.
   * @param {number} z - The z coordinate of the point to test.
   * @return {boolean} A value of true if the Cube object contains the specified point; otherwise false.
   */
  public contains(x: number, y: number, z: number): boolean {
    return Cube.contains(this, x, y, z);
  }

  /**
   * Determines whether the specified X and Y coordinates are contained within the region defined by this Cube object.
   * @method Cube#containsXY
   * @param {number} x - The x coordinate of the point to test.
   * @param {number} y - The y coordinate of the point to test.
   * @return {boolean} A value of true if this Cube object contains the specified point; otherwise false.
   */
  public containsXY(x: number, y: number): boolean {
    return Cube.containsXY(this, x, y);
  }

  /**
   * Returns a new Cube object with the same values for the x, y, z, widthX, widthY and height properties as the original Cube object.
   * @method Cube#clone
   * @param {Cube} [output] - Optional Cube object. If given the values will be set into the object, otherwise a brand new Cube object will be created and returned.
   * @return {Cube}
   */
  public clone(output: Cube): Cube {
    return Cube.clone(this, output);
  }

  /**
   * Determines whether the two Cubes intersect with each other.
   * This method checks the x, y, z, widthX, widthY, and height properties of the Cubes.
   * @method Cube#intersects
   * @param {Cube} b - The second Cube object.
   * @return {boolean} A value of true if the specified object intersects with this Cube object; otherwise false.
   */
  public intersects(b: Cube): boolean {
    return Cube.intersects(this, b);
  }

  /**
   * Updates and returns an Array of eight Point3 objects containing the corners of this Cube.
   * @method Cube#getCorners
   * @return {Array.<Point3>} The corners of this Cube expressed as an Array of eight Point3 objects.
   */
  public getCorners(): Point3[] {
    this.__corners[0].setTo(this.x, this.y, this.z);
    this.__corners[1].setTo(this.x, this.y, this.z + this.height);
    this.__corners[2].setTo(this.x, this.y + this.widthY, this.z);
    this.__corners[3].setTo(this.x, this.y + this.widthY, this.z + this.height);
    this.__corners[4].setTo(this.x + this.widthX, this.y, this.z);
    this.__corners[5].setTo(this.x + this.widthX, this.y, this.z + this.height);
    this.__corners[6].setTo(this.x + this.widthX, this.y + this.widthY, this.z);
    this.__corners[7].setTo(
      this.x + this.widthX,
      this.y + this.widthY,
      this.z + this.height,
    );

    return this.__corners;
  }

  /**
   * Returns a string representation of this object.
   * @method Cube#toString
   * @return {string} A string representation of the instance.
   */
  public toString(): string {
    return `[{Cube (x=${this.x} y=${this.y} z=${this.z} widthX=${
      this.widthX
    } widthY=${this.widthY} height=${this.height} empty=${this.empty})}]`;
  }
}
