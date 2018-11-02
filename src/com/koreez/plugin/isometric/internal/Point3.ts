// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

/**
 * @class Point3
 *
 * @classdesc
 * The Point3 object represents a location in a three-dimensional coordinate system,
 * where x and y represent the horizontal axes and z represents the vertical axis.
 * The following code creates a point at (0,0,0):
 * `var myPoint = new Point3();`
 *
 * Creates a new Point3 object. If you pass no parameters a Point3 is created set to (0, 0, 0).
 */
export class Point3 {
  /**
   * @property {number} x - The x value of the point.
   */
  public x: number;
  /**
   * @property {number} y - The y value of the point.
   */
  public y: number;
  /**
   * @property {number} z - The z value of the point.
   */
  public z: number;

  /**
   * @constructor
   * @param {number} [x=0] - The horizontal X position of this Point.
   * @param {number} [y=0] - The horizontal Y position of this Point.
   * @param {number} [z=0] - The vertical position of this Point.
   */
  constructor(x: number = 0, y: number = 0, z: number = 0) {
    /**
     * @property {number} x - The x value of the point.
     */
    this.x = x;

    /**
     * @property {number} y - The y value of the point.
     */
    this.y = y;

    /**
     * @property {number} z - The z value of the point.
     */
    this.z = z;
  }

  /**
   * Copies the x, y and z properties from any given object to this Point3.
   *
   * @method Point3#copyFrom
   * @param {any} source - The object to copy from.
   * @return {Point3} This Point3 object.
   */
  public copyFrom(source: any): Point3 {
    return this.setTo(source.x, source.y, source.z);
  }

  /**
   * Copies the x, y and z properties from this Point3 to any given object.
   *
   * @method Point3#copyTo
   * @param {any} dest - The object to copy to.
   * @return {Object} The dest object.
   */
  public copyTo(dest: any): object {
    dest.x = this.x;
    dest.y = this.y;
    dest.z = this.z;

    return dest;
  }

  /**
   * Determines whether the given object's x/y/z values are equal to this Point3 object.
   *
   * @method Point3#equals
   * @param {Point3|any} a - The object to compare with this Point3.
   * @return {boolean} A value of true if the x and y points are equal, otherwise false.
   */
  public equals(a: Point3 | any): boolean {
    return a.x === this.x && a.y === this.y && a.z === this.z;
  }

  /**
   * Sets the x, y and z values of this Point3 object to the given values.
   * If you omit the y and z value then the x value will be applied to all three, for example:
   * `Point3.setTo(2)` is the same as `Point3.setTo(2, 2, 2)`
   * If however you set both x and y, but no z, the z value will be set to 0.
   *
   * @method Point3#setTo
   * @param {number} x - The x value of this point.
   * @param {number} [y] - The y value of this point. If not given the x value will be used in its place.
   * @param {number} [z] - The z value of this point. If not given and the y value is also not given, the x value will be used in its place.
   * @return {Point3} This Point3 object. Useful for chaining method calls.
   */
  public setTo(x: number, y: number, z: number): this {
    this.x = x || 0;
    this.y = y || (y !== 0 ? this.x : 0);
    this.z = z || (typeof y === 'undefined' ? this.x : 0);
    return this;
  }

  /**
   * Adds the given x, y and z values to this Point3.
   *
   * @method Point3#add
   * @param {number} x - The value to add to Point3.x.
   * @param {number} y - The value to add to Point3.y.
   * @param {number} z - The value to add to Point3.z.
   * @return {Point3} This Point3 object. Useful for chaining method calls.
   */
  public add(x: number, y: number, z: number): this {
    this.x += x || 0;
    this.y += y || 0;
    this.z += z || 0;
    return this;
  }

  /**
   * Subtracts the given x, y and z values from this Point3.
   *
   * @method Point3#subtract
   * @param {number} x - The value to subtract from Point3.x.
   * @param {number} y - The value to subtract from Point3.y.
   * @param {number} z - The value to subtract from Point3.z.
   * @return {Point3} This Point3 object. Useful for chaining method calls.
   */
  public subtract(x: number, y: number, z: number): this {
    this.x -= x || 0;
    this.y -= y || 0;
    this.z -= z || 0;

    return this;
  }

  /**
   * Multiplies Point3.x, Point3.y and Point3.z by the given x and y values. Sometimes known as `Scale`.
   *
   * @method Point3#multiply
   * @param {number} x - The value to multiply Point3.x by.
   * @param {number} y - The value to multiply Point3.y by.
   * @param {number} z - The value to multiply Point3.z by.
   * @return {Point3} This Point3 object. Useful for chaining method calls.
   */
  public multiply(x: number, y: number, z: number): this {
    this.x *= x || 1;
    this.y *= y || 1;
    this.z *= z || 1;

    return this;
  }

  /**
   * Divides Point3.x, Point3.y and Point3.z by the given x, y and z values.
   *
   * @method Point3#divide
   * @param {number} x - The value to divide Point3.x by.
   * @param {number} y - The value to divide Point3.y by.
   * @param {number} z - The value to divide Point3.z by.
   * @return {Point3} This Point3 object. Useful for chaining method calls.
   */
  public divide(x: number, y: number, z: number): this {
    this.x /= x || 1;
    this.y /= y || 1;
    this.z /= z || 1;

    return this;
  }

  /**
   * Adds the coordinates of two points together to create a new point.
   *
   * @method Point3.add
   * @param {Point3} a - The first Point3 object.
   * @param {Point3} b - The second Point3 object.
   * @param {Point3} [out] - Optional Point3 to store the value in, if not supplied a new Point3 object will be created.
   * @return {Point3} The new Point3 object.
   */
  public static add(a: Point3, b: Point3, out: Point3 = new Point3()): Point3 {
    out.x = a.x + b.x;
    out.y = a.y + b.y;
    out.z = a.z + b.z;

    return out;
  }

  /**
   * Subtracts the coordinates of two points to create a new point.
   *
   * @method Point3.subtract
   * @param {Point3} a - The first Point3 object.
   * @param {Point3} b - The second Point3 object.
   * @param {Point3} [out] - Optional Point3 to store the value in, if not supplied a new Point3 object will be created.
   * @return {Point3} The new Point3 object.
   */
  public static subtract(
    a: Point3,
    b: Point3,
    out: Point3 = new Point3(),
  ): Point3 {
    out.x = a.x - b.x;
    out.y = a.y - b.y;
    out.z = a.z - b.z;

    return out;
  }

  /**
   * Multiplies the coordinates of two points to create a new point.
   *
   * @method Point3.multiply
   * @param {Point3} a - The first Point3 object.
   * @param {Point3} b - The second Point3 object.
   * @param {Point3} [out] - Optional Point3 to store the value in, if not supplied a new Point3 object will be created.
   * @return {Point3} The new Point3 object.
   */
  public static multiply(
    a: Point3,
    b: Point3,
    out: Point3 = new Point3(),
  ): Point3 {
    out.x = a.x * b.x;
    out.y = a.y * b.y;
    out.z = a.z * b.z;

    return out;
  }

  /**
   * Divides the coordinates of two points to create a new point.
   *
   * @method Point3.divide
   * @param {Point3} a - The first Point3 object.
   * @param {Point3} b - The second Point3 object.
   * @param {Point3} [out] - Optional Point3 to store the value in, if not supplied a new Point3 object3 will be created.
   * @return {Point3} The new Point3 object.
   */
  public static divide(
    a: Point3,
    b: Point3,
    out: Point3 = new Point3(),
  ): Point3 {
    out.x = a.x / b.x;
    out.y = a.y / b.y;
    out.z = a.z / b.z;

    return out;
  }

  /**
   * Determines whether the two given Point3 objects are equal. They are considered equal if they have the same x, y and z values.
   *
   * @method Point3.equals
   * @param {Point3} a - The first Point3 object.
   * @param {Point3} b - The second Point3 object.
   * @return {boolean} A value of true if the Points3 are equal, otherwise false.
   */
  public static equals(a: Point3, b: Point3): boolean {
    return a.x === b.x && a.y === b.y && a.z === b.z;
  }
}
