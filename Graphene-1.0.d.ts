
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Graphene-1.0
 */

import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

/**
 * Specify the order of the rotations on each axis.
 * 
 * The %GRAPHENE_EULER_ORDER_DEFAULT value is special, and is used
 * as an alias for one of the other orders.
 */
export enum EulerOrder {
    /**
     * Rotate in the default order; the
     *   default order is one of the following enumeration values
     */
    DEFAULT,
    /**
     * Rotate in the X, Y, and Z order. Deprecated in
     *   Graphene 1.10, it's an alias for %GRAPHENE_EULER_ORDER_SXYZ
     */
    XYZ,
    /**
     * Rotate in the Y, Z, and X order. Deprecated in
     *   Graphene 1.10, it's an alias for %GRAPHENE_EULER_ORDER_SYZX
     */
    YZX,
    /**
     * Rotate in the Z, X, and Y order. Deprecated in
     *   Graphene 1.10, it's an alias for %GRAPHENE_EULER_ORDER_SZXY
     */
    ZXY,
    /**
     * Rotate in the X, Z, and Y order. Deprecated in
     *   Graphene 1.10, it's an alias for %GRAPHENE_EULER_ORDER_SXZY
     */
    XZY,
    /**
     * Rotate in the Y, X, and Z order. Deprecated in
     *   Graphene 1.10, it's an alias for %GRAPHENE_EULER_ORDER_SYXZ
     */
    YXZ,
    /**
     * Rotate in the Z, Y, and X order. Deprecated in
     *   Graphene 1.10, it's an alias for %GRAPHENE_EULER_ORDER_SZYX
     */
    ZYX,
    /**
     * Defines a static rotation along the X, Y, and Z axes (Since: 1.10)
     */
    SXYZ,
    /**
     * Defines a static rotation along the X, Y, and X axes (Since: 1.10)
     */
    SXYX,
    /**
     * Defines a static rotation along the X, Z, and Y axes (Since: 1.10)
     */
    SXZY,
    /**
     * Defines a static rotation along the X, Z, and X axes (Since: 1.10)
     */
    SXZX,
    /**
     * Defines a static rotation along the Y, Z, and X axes (Since: 1.10)
     */
    SYZX,
    /**
     * Defines a static rotation along the Y, Z, and Y axes (Since: 1.10)
     */
    SYZY,
    /**
     * Defines a static rotation along the Y, X, and Z axes (Since: 1.10)
     */
    SYXZ,
    /**
     * Defines a static rotation along the Y, X, and Y axes (Since: 1.10)
     */
    SYXY,
    /**
     * Defines a static rotation along the Z, X, and Y axes (Since: 1.10)
     */
    SZXY,
    /**
     * Defines a static rotation along the Z, X, and Z axes (Since: 1.10)
     */
    SZXZ,
    /**
     * Defines a static rotation along the Z, Y, and X axes (Since: 1.10)
     */
    SZYX,
    /**
     * Defines a static rotation along the Z, Y, and Z axes (Since: 1.10)
     */
    SZYZ,
    /**
     * Defines a relative rotation along the Z, Y, and X axes (Since: 1.10)
     */
    RZYX,
    /**
     * Defines a relative rotation along the X, Y, and X axes (Since: 1.10)
     */
    RXYX,
    /**
     * Defines a relative rotation along the Y, Z, and X axes (Since: 1.10)
     */
    RYZX,
    /**
     * Defines a relative rotation along the X, Z, and X axes (Since: 1.10)
     */
    RXZX,
    /**
     * Defines a relative rotation along the X, Z, and Y axes (Since: 1.10)
     */
    RXZY,
    /**
     * Defines a relative rotation along the Y, Z, and Y axes (Since: 1.10)
     */
    RYZY,
    /**
     * Defines a relative rotation along the Z, X, and Y axes (Since: 1.10)
     */
    RZXY,
    /**
     * Defines a relative rotation along the Y, X, and Y axes (Since: 1.10)
     */
    RYXY,
    /**
     * Defines a relative rotation along the Y, X, and Z axes (Since: 1.10)
     */
    RYXZ,
    /**
     * Defines a relative rotation along the Z, X, and Z axes (Since: 1.10)
     */
    RZXZ,
    /**
     * Defines a relative rotation along the X, Y, and Z axes (Since: 1.10)
     */
    RXYZ,
    /**
     * Defines a relative rotation along the Z, Y, and Z axes (Since: 1.10)
     */
    RZYZ,
}
/**
 * The type of intersection.
 */
export enum RayIntersectionKind {
    /**
     * No intersection
     */
    NONE,
    /**
     * The ray is entering the intersected
     *   object
     */
    ENTER,
    /**
     * The ray is leaving the intersected
     *   object
     */
    LEAVE,
}
export const PI: number
export const PI_2: number
/**
 * Evaluates to the number of components of a #graphene_vec2_t.
 * 
 * This symbol is useful when declaring a C array of floating
 * point values to be used with graphene_vec2_init_from_float() and
 * graphene_vec2_to_float(), e.g.
 * 
 * |[
 *   float v[GRAPHENE_VEC2_LEN];
 * 
 *   // vec is defined elsewhere
 *   graphene_vec2_to_float (&vec, v);
 * 
 *   for (int i = 0; i < GRAPHENE_VEC2_LEN; i++)
 *     fprintf (stdout, "component %d: %g\n", i, v[i]);
 * ```
 * 
 */
export const VEC2_LEN: number
/**
 * Evaluates to the number of components of a #graphene_vec3_t.
 * 
 * This symbol is useful when declaring a C array of floating
 * point values to be used with graphene_vec3_init_from_float() and
 * graphene_vec3_to_float(), e.g.
 * 
 * |[
 *   float v[GRAPHENE_VEC3_LEN];
 * 
 *   // vec is defined elsewhere
 *   graphene_vec3_to_float (&vec, v);
 * 
 *   for (int i = 0; i < GRAPHENE_VEC2_LEN; i++)
 *     fprintf (stdout, "component %d: %g\n", i, v[i]);
 * ```
 * 
 */
export const VEC3_LEN: number
/**
 * Evaluates to the number of components of a #graphene_vec4_t.
 * 
 * This symbol is useful when declaring a C array of floating
 * point values to be used with graphene_vec4_init_from_float() and
 * graphene_vec4_to_float(), e.g.
 * 
 * |[
 *   float v[GRAPHENE_VEC4_LEN];
 * 
 *   // vec is defined elsewhere
 *   graphene_vec4_to_float (&vec, v);
 * 
 *   for (int i = 0; i < GRAPHENE_VEC4_LEN; i++)
 *     fprintf (stdout, "component %d: %g\n", i, v[i]);
 * ```
 * 
 */
export const VEC4_LEN: number
/**
 * A degenerate #graphene_box_t that can only be expanded.
 * 
 * The returned value is owned by Graphene and should not be modified or freed.
 */
export function boxEmpty(): Box
/**
 * A degenerate #graphene_box_t that cannot be expanded.
 * 
 * The returned value is owned by Graphene and should not be modified or freed.
 */
export function boxInfinite(): Box
/**
 * A #graphene_box_t with the minimum vertex set at (-1, -1, -1) and the
 * maximum vertex set at (0, 0, 0).
 * 
 * The returned value is owned by Graphene and should not be modified or freed.
 */
export function boxMinusOne(): Box
/**
 * A #graphene_box_t with the minimum vertex set at (0, 0, 0) and the
 * maximum vertex set at (1, 1, 1).
 * 
 * The returned value is owned by Graphene and should not be modified or freed.
 */
export function boxOne(): Box
/**
 * A #graphene_box_t with the minimum vertex set at (-1, -1, -1) and the
 * maximum vertex set at (1, 1, 1).
 * 
 * The returned value is owned by Graphene and should not be modified or freed.
 */
export function boxOneMinusOne(): Box
/**
 * A #graphene_box_t with both the minimum and maximum vertices set at (0, 0, 0).
 * 
 * The returned value is owned by Graphene and should not be modified or freed.
 */
export function boxZero(): Box
/**
 * Retrieves a constant point with all three coordinates set to 0.
 */
export function point3dZero(): Point3D
/**
 * Returns a point fixed at (0, 0).
 */
export function pointZero(): Point
/**
 * Allocates a new #graphene_rect_t.
 * 
 * The contents of the returned rectangle are undefined.
 */
export function rectAlloc(): Rect
/**
 * Returns a degenerate rectangle with origin fixed at (0, 0) and
 * a size of 0, 0.
 */
export function rectZero(): Rect
/**
 * A constant pointer to a zero #graphene_size_t, useful for
 * equality checks and interpolations.
 */
export function sizeZero(): Size
/**
 * Retrieves a constant vector with (1, 1) components.
 */
export function vec2One(): Vec2
/**
 * Retrieves a constant vector with (1, 0) components.
 */
export function vec2XAxis(): Vec2
/**
 * Retrieves a constant vector with (0, 1) components.
 */
export function vec2YAxis(): Vec2
/**
 * Retrieves a constant vector with (0, 0) components.
 */
export function vec2Zero(): Vec2
/**
 * Provides a constant pointer to a vector with three components,
 * all sets to 1.
 */
export function vec3One(): Vec3
/**
 * Provides a constant pointer to a vector with three components
 * with values set to (1, 0, 0).
 */
export function vec3XAxis(): Vec3
/**
 * Provides a constant pointer to a vector with three components
 * with values set to (0, 1, 0).
 */
export function vec3YAxis(): Vec3
/**
 * Provides a constant pointer to a vector with three components
 * with values set to (0, 0, 1).
 */
export function vec3ZAxis(): Vec3
/**
 * Provides a constant pointer to a vector with three components,
 * all sets to 0.
 */
export function vec3Zero(): Vec3
/**
 * Retrieves a pointer to a #graphene_vec4_t with all its
 * components set to 1.
 */
export function vec4One(): Vec4
/**
 * Retrieves a pointer to a #graphene_vec4_t with its
 * components set to (0, 0, 0, 1).
 */
export function vec4WAxis(): Vec4
/**
 * Retrieves a pointer to a #graphene_vec4_t with its
 * components set to (1, 0, 0, 0).
 */
export function vec4XAxis(): Vec4
/**
 * Retrieves a pointer to a #graphene_vec4_t with its
 * components set to (0, 1, 0, 0).
 */
export function vec4YAxis(): Vec4
/**
 * Retrieves a pointer to a #graphene_vec4_t with its
 * components set to (0, 0, 1, 0).
 */
export function vec4ZAxis(): Vec4
/**
 * Retrieves a pointer to a #graphene_vec4_t with all its
 * components set to 0.
 */
export function vec4Zero(): Vec4
export interface Box {

    // Owm methods of Graphene-1.0.Graphene.Box

    /**
     * Checks whether the #graphene_box_t `a` contains the given
     * #graphene_box_t `b`.
     * @param b a #graphene_box_t
     */
    containsBox(b: Box): boolean
    /**
     * Checks whether `box` contains the given `point`.
     * @param point the coordinates to check
     */
    containsPoint(point: Point3D): boolean
    /**
     * Checks whether the two given boxes are equal.
     * @param b a #graphene_box_t
     */
    equal(b: Box): boolean
    /**
     * Expands the dimensions of `box` to include the coordinates at `point`.
     * @param point the coordinates of the point to include
     */
    expand(point: Point3D): /* res */ Box
    /**
     * Expands the dimensions of `box` by the given `scalar` value.
     * 
     * If `scalar` is positive, the #graphene_box_t will grow; if `scalar` is
     * negative, the #graphene_box_t will shrink.
     * @param scalar a scalar value
     */
    expandScalar(scalar: number): /* res */ Box
    /**
     * Expands the dimensions of `box` to include the coordinates of the
     * given vector.
     * @param vec the coordinates of the point to include, as a #graphene_vec3_t
     */
    expandVec3(vec: Vec3): /* res */ Box
    /**
     * Frees the resources allocated by graphene_box_alloc().
     */
    free(): void
    /**
     * Computes the bounding #graphene_sphere_t capable of containing the given
     * #graphene_box_t.
     */
    getBoundingSphere(): /* sphere */ Sphere
    /**
     * Retrieves the coordinates of the center of a #graphene_box_t.
     */
    getCenter(): /* center */ Point3D
    /**
     * Retrieves the size of the `box` on the Z axis.
     */
    getDepth(): number
    /**
     * Retrieves the size of the `box` on the Y axis.
     */
    getHeight(): number
    /**
     * Retrieves the coordinates of the maximum point of the given
     * #graphene_box_t.
     */
    getMax(): /* max */ Point3D
    /**
     * Retrieves the coordinates of the minimum point of the given
     * #graphene_box_t.
     */
    getMin(): /* min */ Point3D
    /**
     * Retrieves the size of the box on all three axes, and stores
     * it into the given `size` vector.
     */
    getSize(): /* size */ Vec3
    /**
     * Computes the vertices of the given #graphene_box_t.
     */
    getVertices(): /* vertices */ Vec3[]
    /**
     * Retrieves the size of the `box` on the X axis.
     */
    getWidth(): number
    /**
     * Initializes the given #graphene_box_t with two vertices.
     * @param min the coordinates of the minimum vertex
     * @param max the coordinates of the maximum vertex
     */
    init(min: Point3D | null, max: Point3D | null): Box
    /**
     * Initializes the given #graphene_box_t with the vertices of
     * another #graphene_box_t.
     * @param src a #graphene_box_t
     */
    initFromBox(src: Box): Box
    /**
     * Initializes the given #graphene_box_t with the given array
     * of vertices.
     * 
     * If `n_points` is 0, the returned box is initialized with
     * graphene_box_empty().
     * @param points an array of #graphene_point3d_t
     */
    initFromPoints(points: Point3D[]): Box
    /**
     * Initializes the given #graphene_box_t with two vertices
     * stored inside #graphene_vec3_t.
     * @param min the coordinates of the minimum vertex
     * @param max the coordinates of the maximum vertex
     */
    initFromVec3(min: Vec3 | null, max: Vec3 | null): Box
    /**
     * Initializes the given #graphene_box_t with the given array
     * of vertices.
     * 
     * If `n_vectors` is 0, the returned box is initialized with
     * graphene_box_empty().
     * @param vectors an array of #graphene_vec3_t
     */
    initFromVectors(vectors: Vec3[]): Box
    /**
     * Intersects the two given #graphene_box_t.
     * 
     * If the two boxes do not intersect, `res` will contain a degenerate box
     * initialized with graphene_box_empty().
     * @param b a #graphene_box_t
     */
    intersection(b: Box): [ /* returnType */ boolean, /* res */ Box ]
    /**
     * Unions the two given #graphene_box_t.
     * @param b the box to union to `a`
     */
    union(b: Box): /* res */ Box
}

/**
 * A 3D box, described as the volume between a minimum and
 * a maximum vertices.
 * @record 
 */
export class Box {

    // Own properties of Graphene-1.0.Graphene.Box

    static name: string

    // Constructors of Graphene-1.0.Graphene.Box

    /**
     * Allocates a new #graphene_box_t.
     * 
     * The contents of the returned structure are undefined.
     * @constructor 
     */
    static alloc(): Box
    /**
     * A degenerate #graphene_box_t that can only be expanded.
     * 
     * The returned value is owned by Graphene and should not be modified or freed.
     */
    static empty(): Box
    /**
     * A degenerate #graphene_box_t that cannot be expanded.
     * 
     * The returned value is owned by Graphene and should not be modified or freed.
     */
    static infinite(): Box
    /**
     * A #graphene_box_t with the minimum vertex set at (-1, -1, -1) and the
     * maximum vertex set at (0, 0, 0).
     * 
     * The returned value is owned by Graphene and should not be modified or freed.
     */
    static minusOne(): Box
    /**
     * A #graphene_box_t with the minimum vertex set at (0, 0, 0) and the
     * maximum vertex set at (1, 1, 1).
     * 
     * The returned value is owned by Graphene and should not be modified or freed.
     */
    static one(): Box
    /**
     * A #graphene_box_t with the minimum vertex set at (-1, -1, -1) and the
     * maximum vertex set at (1, 1, 1).
     * 
     * The returned value is owned by Graphene and should not be modified or freed.
     */
    static oneMinusOne(): Box
    /**
     * A #graphene_box_t with both the minimum and maximum vertices set at (0, 0, 0).
     * 
     * The returned value is owned by Graphene and should not be modified or freed.
     */
    static zero(): Box
}

export interface Euler {

    // Owm methods of Graphene-1.0.Graphene.Euler

    /**
     * Checks if two #graphene_euler_t are equal.
     * @param b a #graphene_euler_t
     */
    equal(b: Euler): boolean
    /**
     * Frees the resources allocated by graphene_euler_alloc().
     */
    free(): void
    /**
     * Retrieves the first component of the Euler angle vector,
     * depending on the order of rotation.
     * 
     * See also: graphene_euler_get_x()
     */
    getAlpha(): number
    /**
     * Retrieves the second component of the Euler angle vector,
     * depending on the order of rotation.
     * 
     * See also: graphene_euler_get_y()
     */
    getBeta(): number
    /**
     * Retrieves the third component of the Euler angle vector,
     * depending on the order of rotation.
     * 
     * See also: graphene_euler_get_z()
     */
    getGamma(): number
    /**
     * Retrieves the order used to apply the rotations described in the
     * #graphene_euler_t structure, when converting to and from other
     * structures, like #graphene_quaternion_t and #graphene_matrix_t.
     * 
     * This function does not return the %GRAPHENE_EULER_ORDER_DEFAULT
     * enumeration value; it will return the effective order of rotation
     * instead.
     */
    getOrder(): EulerOrder
    /**
     * Retrieves the rotation angle on the X axis, in degrees.
     */
    getX(): number
    /**
     * Retrieves the rotation angle on the Y axis, in degrees.
     */
    getY(): number
    /**
     * Retrieves the rotation angle on the Z axis, in degrees.
     */
    getZ(): number
    /**
     * Initializes a #graphene_euler_t using the given angles.
     * 
     * The order of the rotations is %GRAPHENE_EULER_ORDER_DEFAULT.
     * @param x rotation angle on the X axis, in degrees
     * @param y rotation angle on the Y axis, in degrees
     * @param z rotation angle on the Z axis, in degrees
     */
    init(x: number, y: number, z: number): Euler
    /**
     * Initializes a #graphene_euler_t using the angles and order of
     * another #graphene_euler_t.
     * 
     * If the #graphene_euler_t `src` is %NULL, this function is equivalent
     * to calling graphene_euler_init() with all angles set to 0.
     * @param src a #graphene_euler_t
     */
    initFromEuler(src: Euler | null): Euler
    /**
     * Initializes a #graphene_euler_t using the given rotation matrix.
     * 
     * If the #graphene_matrix_t `m` is %NULL, the #graphene_euler_t will
     * be initialized with all angles set to 0.
     * @param m a rotation matrix
     * @param order the order used to apply the rotations
     */
    initFromMatrix(m: Matrix | null, order: EulerOrder): Euler
    /**
     * Initializes a #graphene_euler_t using the given normalized quaternion.
     * 
     * If the #graphene_quaternion_t `q` is %NULL, the #graphene_euler_t will
     * be initialized with all angles set to 0.
     * @param q a normalized #graphene_quaternion_t
     * @param order the order used to apply the rotations
     */
    initFromQuaternion(q: Quaternion | null, order: EulerOrder): Euler
    /**
     * Initializes a #graphene_euler_t using the given angles
     * and order of rotation.
     * @param x rotation angle on the X axis, in radians
     * @param y rotation angle on the Y axis, in radians
     * @param z rotation angle on the Z axis, in radians
     * @param order order of rotations
     */
    initFromRadians(x: number, y: number, z: number, order: EulerOrder): Euler
    /**
     * Initializes a #graphene_euler_t using the angles contained in a
     * #graphene_vec3_t.
     * 
     * If the #graphene_vec3_t `v` is %NULL, the #graphene_euler_t will be
     * initialized with all angles set to 0.
     * @param v a #graphene_vec3_t containing the rotation   angles in degrees
     * @param order the order used to apply the rotations
     */
    initFromVec3(v: Vec3 | null, order: EulerOrder): Euler
    /**
     * Initializes a #graphene_euler_t with the given angles and `order`.
     * @param x rotation angle on the X axis, in degrees
     * @param y rotation angle on the Y axis, in degrees
     * @param z rotation angle on the Z axis, in degrees
     * @param order the order used to apply the rotations
     */
    initWithOrder(x: number, y: number, z: number, order: EulerOrder): Euler
    /**
     * Reorders a #graphene_euler_t using `order`.
     * 
     * This function is equivalent to creating a #graphene_quaternion_t from the
     * given #graphene_euler_t, and then converting the quaternion into another
     * #graphene_euler_t.
     * @param order the new order
     */
    reorder(order: EulerOrder): /* res */ Euler
    /**
     * Converts a #graphene_euler_t into a transformation matrix expressing
     * the extrinsic composition of rotations described by the Euler angles.
     * 
     * The rotations are applied over the reference frame axes in the order
     * associated with the #graphene_euler_t; for instance, if the order
     * used to initialize `e` is %GRAPHENE_EULER_ORDER_XYZ:
     * 
     *  * the first rotation moves the body around the X axis with
     *    an angle ??
     *  * the second rotation moves the body around the Y axis with
     *    an angle of ??
     *  * the third rotation moves the body around the Z axis with
     *    an angle of ??
     * 
     * The rotation sign convention is right-handed, to preserve compatibility
     * between Euler-based, quaternion-based, and angle-axis-based rotations.
     */
    toMatrix(): /* res */ Matrix
    /**
     * Converts a #graphene_euler_t into a #graphene_quaternion_t.
     */
    toQuaternion(): /* res */ Quaternion
    /**
     * Retrieves the angles of a #graphene_euler_t and initializes a
     * #graphene_vec3_t with them.
     */
    toVec3(): /* res */ Vec3
}

/**
 * Describe a rotation using Euler angles.
 * 
 * The contents of the #graphene_euler_t structure are private
 * and should never be accessed directly.
 * @record 
 */
export class Euler {

    // Own properties of Graphene-1.0.Graphene.Euler

    static name: string

    // Constructors of Graphene-1.0.Graphene.Euler

    /**
     * Allocates a new #graphene_euler_t.
     * 
     * The contents of the returned structure are undefined.
     * @constructor 
     */
    static alloc(): Euler
}

export interface Frustum {

    // Owm methods of Graphene-1.0.Graphene.Frustum

    /**
     * Checks whether a point is inside the volume defined by the given
     * #graphene_frustum_t.
     * @param point a #graphene_point3d_t
     */
    containsPoint(point: Point3D): boolean
    /**
     * Checks whether the two given #graphene_frustum_t are equal.
     * @param b a #graphene_frustum_t
     */
    equal(b: Frustum): boolean
    /**
     * Frees the resources allocated by graphene_frustum_alloc().
     */
    free(): void
    /**
     * Retrieves the planes that define the given #graphene_frustum_t.
     */
    getPlanes(): /* planes */ Plane[]
    /**
     * Initializes the given #graphene_frustum_t using the provided
     * clipping planes.
     * @param p0 a clipping plane
     * @param p1 a clipping plane
     * @param p2 a clipping plane
     * @param p3 a clipping plane
     * @param p4 a clipping plane
     * @param p5 a clipping plane
     */
    init(p0: Plane, p1: Plane, p2: Plane, p3: Plane, p4: Plane, p5: Plane): Frustum
    /**
     * Initializes the given #graphene_frustum_t using the clipping
     * planes of another #graphene_frustum_t.
     * @param src a #graphene_frustum_t
     */
    initFromFrustum(src: Frustum): Frustum
    /**
     * Initializes a #graphene_frustum_t using the given `matrix`.
     * @param matrix a #graphene_matrix_t
     */
    initFromMatrix(matrix: Matrix): Frustum
    /**
     * Checks whether the given `box` intersects a plane of
     * a #graphene_frustum_t.
     * @param box a #graphene_box_t
     */
    intersectsBox(box: Box): boolean
    /**
     * Checks whether the given `sphere` intersects a plane of
     * a #graphene_frustum_t.
     * @param sphere a #graphene_sphere_t
     */
    intersectsSphere(sphere: Sphere): boolean
}

/**
 * A 3D volume delimited by 2D clip planes.
 * 
 * The contents of the `graphene_frustum_t` are private, and should not be
 * modified directly.
 * @record 
 */
export class Frustum {

    // Own properties of Graphene-1.0.Graphene.Frustum

    static name: string

    // Constructors of Graphene-1.0.Graphene.Frustum

    /**
     * Allocates a new #graphene_frustum_t structure.
     * 
     * The contents of the returned structure are undefined.
     * @constructor 
     */
    static alloc(): Frustum
}

export interface Matrix {

    // Owm methods of Graphene-1.0.Graphene.Matrix

    /**
     * Decomposes a transformation matrix into its component transformations.
     * 
     * The algorithm for decomposing a matrix is taken from the
     * [CSS3 Transforms specification](http://dev.w3.org/csswg/css-transforms/);
     * specifically, the decomposition code is based on the equivalent code
     * published in "Graphics Gems II", edited by Jim Arvo, and
     * [available online](http://web.archive.org/web/20150512160205/http://tog.acm.org/resources/GraphicsGems/gemsii/unmatrix.c).
     */
    decompose(): [ /* returnType */ boolean, /* translate */ Vec3, /* scale */ Vec3, /* rotate */ Quaternion, /* shear */ Vec3, /* perspective */ Vec4 ]
    /**
     * Computes the determinant of the given matrix.
     */
    determinant(): number
    /**
     * Checks whether the two given #graphene_matrix_t matrices are equal.
     * @param b a #graphene_matrix_t
     */
    equal(b: Matrix): boolean
    /**
     * Checks whether the two given #graphene_matrix_t matrices are
     * byte-by-byte equal.
     * 
     * While this function is faster than graphene_matrix_equal(), it
     * can also return false negatives, so it should be used in
     * conjuction with either graphene_matrix_equal() or
     * graphene_matrix_near(). For instance:
     * 
     * 
     * ```c
     *   if (graphene_matrix_equal_fast (a, b))
     *     {
     *       // matrices are definitely the same
     *     }
     *   else
     *     {
     *       if (graphene_matrix_equal (a, b))
     *         // matrices contain the same values within an epsilon of FLT_EPSILON
     *       else if (graphene_matrix_near (a, b, 0.0001))
     *         // matrices contain the same values within an epsilon of 0.0001
     *       else
     *         // matrices are not equal
     *     }
     * ```
     * 
     * @param b a #graphene_matrix_t
     */
    equalFast(b: Matrix): boolean
    /**
     * Frees the resources allocated by graphene_matrix_alloc().
     */
    free(): void
    /**
     * Retrieves the given row vector at `index_` inside a matrix.
     * @param index the index of the row vector, between 0 and 3
     */
    getRow(index: number): /* res */ Vec4
    /**
     * Retrieves the value at the given `row` and `col` index.
     * @param row the row index
     * @param col the column index
     */
    getValue(row: number, col: number): number
    /**
     * Retrieves the scaling factor on the X axis in `m`.
     */
    getXScale(): number
    /**
     * Retrieves the translation component on the X axis from `m`.
     */
    getXTranslation(): number
    /**
     * Retrieves the scaling factor on the Y axis in `m`.
     */
    getYScale(): number
    /**
     * Retrieves the translation component on the Y axis from `m`.
     */
    getYTranslation(): number
    /**
     * Retrieves the scaling factor on the Z axis in `m`.
     */
    getZScale(): number
    /**
     * Retrieves the translation component on the Z axis from `m`.
     */
    getZTranslation(): number
    /**
     * Initializes a #graphene_matrix_t from the values of an affine
     * transformation matrix.
     * 
     * The arguments map to the following matrix layout:
     * 
     * |[<!-- language="plain" -->
     *   ??? xx  yx ???   ???  a   b  0 ???
     *   ??? xy  yy ??? = ???  c   d  0 ???
     *   ??? x0  y0 ???   ??? tx  ty  1 ???
     * ```
     * 
     * 
     * This function can be used to convert between an affine matrix type
     * from other libraries and a #graphene_matrix_t.
     * @param xx the xx member
     * @param yx the yx member
     * @param xy the xy member
     * @param yy the yy member
     * @param x0 the x0 member
     * @param y0 the y0 member
     */
    initFrom2d(xx: number, yx: number, xy: number, yy: number, x0: number, y0: number): Matrix
    /**
     * Initializes a #graphene_matrix_t with the given array of floating
     * point values.
     * @param v an array of at least 16 floating   point values
     */
    initFromFloat(v: number[]): Matrix
    /**
     * Initializes a #graphene_matrix_t using the values of the
     * given matrix.
     * @param src a #graphene_matrix_t
     */
    initFromMatrix(src: Matrix): Matrix
    /**
     * Initializes a #graphene_matrix_t with the given four row
     * vectors.
     * @param v0 the first row vector
     * @param v1 the second row vector
     * @param v2 the third row vector
     * @param v3 the fourth row vector
     */
    initFromVec4(v0: Vec4, v1: Vec4, v2: Vec4, v3: Vec4): Matrix
    /**
     * Initializes a #graphene_matrix_t compatible with #graphene_frustum_t.
     * 
     * See also: graphene_frustum_init_from_matrix()
     * @param left distance of the left clipping plane
     * @param right distance of the right clipping plane
     * @param bottom distance of the bottom clipping plane
     * @param top distance of the top clipping plane
     * @param zNear distance of the near clipping plane
     * @param zFar distance of the far clipping plane
     */
    initFrustum(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): Matrix
    /**
     * Initializes a #graphene_matrix_t with the identity matrix.
     */
    initIdentity(): Matrix
    /**
     * Initializes a #graphene_matrix_t so that it positions the "camera"
     * at the given `eye` coordinates towards an object at the `center`
     * coordinates. The top of the camera is aligned to the direction
     * of the `up` vector.
     * 
     * Before the transform, the camera is assumed to be placed at the
     * origin, looking towards the negative Z axis, with the top side of
     * the camera facing in the direction of the Y axis and the right
     * side in the direction of the X axis.
     * 
     * In theory, one could use `m` to transform a model of such a camera
     * into world-space. However, it is more common to use the inverse of
     * `m` to transform another object from world coordinates to the view
     * coordinates of the camera. Typically you would then apply the
     * camera projection transform to get from view to screen
     * coordinates.
     * @param eye the vector describing the position to look from
     * @param center the vector describing the position to look at
     * @param up the vector describing the world's upward direction; usually,   this is the graphene_vec3_y_axis() vector
     */
    initLookAt(eye: Vec3, center: Vec3, up: Vec3): Matrix
    /**
     * Initializes a #graphene_matrix_t with an orthographic projection.
     * @param left the left edge of the clipping plane
     * @param right the right edge of the clipping plane
     * @param top the top edge of the clipping plane
     * @param bottom the bottom edge of the clipping plane
     * @param zNear the distance of the near clipping plane
     * @param zFar the distance of the far clipping plane
     */
    initOrtho(left: number, right: number, top: number, bottom: number, zNear: number, zFar: number): Matrix
    /**
     * Initializes a #graphene_matrix_t with a perspective projection.
     * @param fovy the field of view angle, in degrees
     * @param aspect the aspect value
     * @param zNear the near Z plane
     * @param zFar the far Z plane
     */
    initPerspective(fovy: number, aspect: number, zNear: number, zFar: number): Matrix
    /**
     * Initializes `m` to represent a rotation of `angle` degrees on
     * the axis represented by the `axis` vector.
     * @param angle the rotation angle, in degrees
     * @param axis the axis vector as a #graphene_vec3_t
     */
    initRotate(angle: number, axis: Vec3): Matrix
    /**
     * Initializes a #graphene_matrix_t with the given scaling factors.
     * @param x the scale factor on the X axis
     * @param y the scale factor on the Y axis
     * @param z the scale factor on the Z axis
     */
    initScale(x: number, y: number, z: number): Matrix
    /**
     * Initializes a #graphene_matrix_t with a skew transformation
     * with the given factors.
     * @param xSkew skew factor, in radians, on the X axis
     * @param ySkew skew factor, in radians, on the Y axis
     */
    initSkew(xSkew: number, ySkew: number): Matrix
    /**
     * Initializes a #graphene_matrix_t with a translation to the
     * given coordinates.
     * @param p the translation coordinates
     */
    initTranslate(p: Point3D): Matrix
    /**
     * Linearly interpolates the two given #graphene_matrix_t by
     * interpolating the decomposed transformations separately.
     * 
     * If either matrix cannot be reduced to their transformations
     * then the interpolation cannot be performed, and this function
     * will return an identity matrix.
     * @param b a #graphene_matrix_t
     * @param factor the linear interpolation factor
     */
    interpolate(b: Matrix, factor: number): /* res */ Matrix
    /**
     * Inverts the given matrix.
     */
    inverse(): [ /* returnType */ boolean, /* res */ Matrix ]
    /**
     * Checks whether the given #graphene_matrix_t is compatible with an
     * a 2D affine transformation matrix.
     */
    is2d(): boolean
    /**
     * Checks whether a #graphene_matrix_t has a visible back face.
     */
    isBackfaceVisible(): boolean
    /**
     * Checks whether the given #graphene_matrix_t is the identity matrix.
     */
    isIdentity(): boolean
    /**
     * Checks whether a matrix is singular.
     */
    isSingular(): boolean
    /**
     * Multiplies two #graphene_matrix_t.
     * 
     * Matrix multiplication is not commutative in general; the order of the factors matters.
     * The product of this multiplication is (`a` ?? `b)`
     * @param b a #graphene_matrix_t
     */
    multiply(b: Matrix): /* res */ Matrix
    /**
     * Compares the two given #graphene_matrix_t matrices and checks
     * whether their values are within the given `epsilon` of each
     * other.
     * @param b a #graphene_matrix_t
     * @param epsilon the threshold between the two matrices
     */
    near(b: Matrix, epsilon: number): boolean
    /**
     * Normalizes the given #graphene_matrix_t.
     */
    normalize(): /* res */ Matrix
    /**
     * Applies a perspective of `depth` to the matrix.
     * @param depth the depth of the perspective
     */
    perspective(depth: number): /* res */ Matrix
    /**
     * Prints the contents of a matrix to the standard error stream.
     * 
     * This function is only useful for debugging; there are no guarantees
     * made on the format of the output.
     */
    print(): void
    /**
     * Projects a #graphene_point_t using the matrix `m`.
     * @param p a #graphene_point_t
     */
    projectPoint(p: Point): /* res */ Point
    /**
     * Projects all corners of a #graphene_rect_t using the given matrix.
     * 
     * See also: graphene_matrix_project_point()
     * @param r a #graphene_rect_t
     */
    projectRect(r: Rect): /* res */ Quad
    /**
     * Projects a #graphene_rect_t using the given matrix.
     * 
     * The resulting rectangle is the axis aligned bounding rectangle capable
     * of fully containing the projected rectangle.
     * @param r a #graphene_rect_t
     */
    projectRectBounds(r: Rect): /* res */ Rect
    /**
     * Adds a rotation transformation to `m,` using the given `angle`
     * and `axis` vector.
     * 
     * This is the equivalent of calling graphene_matrix_init_rotate() and
     * then multiplying the matrix `m` with the rotation matrix.
     * @param angle the rotation angle, in degrees
     * @param axis the rotation axis, as a #graphene_vec3_t
     */
    rotate(angle: number, axis: Vec3): void
    /**
     * Adds a rotation transformation to `m,` using the given
     * #graphene_euler_t.
     * @param e a rotation described by a #graphene_euler_t
     */
    rotateEuler(e: Euler): void
    /**
     * Adds a rotation transformation to `m,` using the given
     * #graphene_quaternion_t.
     * 
     * This is the equivalent of calling graphene_quaternion_to_matrix() and
     * then multiplying `m` with the rotation matrix.
     * @param q a rotation described by a #graphene_quaternion_t
     */
    rotateQuaternion(q: Quaternion): void
    /**
     * Adds a rotation transformation around the X axis to `m,` using
     * the given `angle`.
     * 
     * See also: graphene_matrix_rotate()
     * @param angle the rotation angle, in degrees
     */
    rotateX(angle: number): void
    /**
     * Adds a rotation transformation around the Y axis to `m,` using
     * the given `angle`.
     * 
     * See also: graphene_matrix_rotate()
     * @param angle the rotation angle, in degrees
     */
    rotateY(angle: number): void
    /**
     * Adds a rotation transformation around the Z axis to `m,` using
     * the given `angle`.
     * 
     * See also: graphene_matrix_rotate()
     * @param angle the rotation angle, in degrees
     */
    rotateZ(angle: number): void
    /**
     * Adds a scaling transformation to `m,` using the three
     * given factors.
     * 
     * This is the equivalent of calling graphene_matrix_init_scale() and then
     * multiplying the matrix `m` with the scale matrix.
     * @param factorX scaling factor on the X axis
     * @param factorY scaling factor on the Y axis
     * @param factorZ scaling factor on the Z axis
     */
    scale(factorX: number, factorY: number, factorZ: number): void
    /**
     * Adds a skew of `factor` on the X and Y axis to the given matrix.
     * @param factor skew factor
     */
    skewXy(factor: number): void
    /**
     * Adds a skew of `factor` on the X and Z axis to the given matrix.
     * @param factor skew factor
     */
    skewXz(factor: number): void
    /**
     * Adds a skew of `factor` on the Y and Z axis to the given matrix.
     * @param factor skew factor
     */
    skewYz(factor: number): void
    /**
     * Converts a #graphene_matrix_t to an affine transformation
     * matrix, if the given matrix is compatible.
     * 
     * The returned values have the following layout:
     * 
     * |[<!-- language="plain" -->
     *   ??? xx  yx ???   ???  a   b  0 ???
     *   ??? xy  yy ??? = ???  c   d  0 ???
     *   ??? x0  y0 ???   ??? tx  ty  1 ???
     * ```
     * 
     * 
     * This function can be used to convert between a #graphene_matrix_t
     * and an affine matrix type from other libraries.
     */
    to2d(): [ /* returnType */ boolean, /* xx */ number, /* yx */ number, /* xy */ number, /* yy */ number, /* x0 */ number, /* y0 */ number ]
    /**
     * Converts a #graphene_matrix_t to an array of floating point
     * values.
     */
    toFloat(): /* v */ number[]
    /**
     * Transforms each corner of a #graphene_rect_t using the given matrix `m`.
     * 
     * The result is the axis aligned bounding rectangle containing the coplanar
     * quadrilateral.
     * 
     * See also: graphene_matrix_transform_point()
     * @param r a #graphene_rect_t
     */
    transformBounds(r: Rect): /* res */ Rect
    /**
     * Transforms the vertices of a #graphene_box_t using the given matrix `m`.
     * 
     * The result is the axis aligned bounding box containing the transformed
     * vertices.
     * @param b a #graphene_box_t
     */
    transformBox(b: Box): /* res */ Box
    /**
     * Transforms the given #graphene_point_t using the matrix `m`.
     * 
     * Unlike graphene_matrix_transform_vec3(), this function will take into
     * account the fourth row vector of the #graphene_matrix_t when computing
     * the dot product of each row vector of the matrix.
     * 
     * See also: graphene_simd4x4f_point3_mul()
     * @param p a #graphene_point_t
     */
    transformPoint(p: Point): /* res */ Point
    /**
     * Transforms the given #graphene_point3d_t using the matrix `m`.
     * 
     * Unlike graphene_matrix_transform_vec3(), this function will take into
     * account the fourth row vector of the #graphene_matrix_t when computing
     * the dot product of each row vector of the matrix.
     * 
     * See also: graphene_simd4x4f_point3_mul()
     * @param p a #graphene_point3d_t
     */
    transformPoint3d(p: Point3D): /* res */ Point3D
    /**
     * Transform a #graphene_ray_t using the given matrix `m`.
     * @param r a #graphene_ray_t
     */
    transformRay(r: Ray): /* res */ Ray
    /**
     * Transforms each corner of a #graphene_rect_t using the given matrix `m`.
     * 
     * The result is a coplanar quadrilateral.
     * 
     * See also: graphene_matrix_transform_point()
     * @param r a #graphene_rect_t
     */
    transformRect(r: Rect): /* res */ Quad
    /**
     * Transforms a #graphene_sphere_t using the given matrix `m`. The
     * result is the bounding sphere containing the transformed sphere.
     * @param s a #graphene_sphere_t
     */
    transformSphere(s: Sphere): /* res */ Sphere
    /**
     * Transforms the given #graphene_vec3_t using the matrix `m`.
     * 
     * This function will multiply the X, Y, and Z row vectors of the matrix `m`
     * with the corresponding components of the vector `v`. The W row vector will
     * be ignored.
     * 
     * See also: graphene_simd4x4f_vec3_mul()
     * @param v a #graphene_vec3_t
     */
    transformVec3(v: Vec3): /* res */ Vec3
    /**
     * Transforms the given #graphene_vec4_t using the matrix `m`.
     * 
     * See also: graphene_simd4x4f_vec4_mul()
     * @param v a #graphene_vec4_t
     */
    transformVec4(v: Vec4): /* res */ Vec4
    /**
     * Adds a translation transformation to `m` using the coordinates
     * of the given #graphene_point3d_t.
     * 
     * This is the equivalent of calling graphene_matrix_init_translate() and
     * then multiplying `m` with the translation matrix.
     * @param pos a #graphene_point3d_t
     */
    translate(pos: Point3D): void
    /**
     * Transposes the given matrix.
     */
    transpose(): /* res */ Matrix
    /**
     * Unprojects the given `point` using the `projection` matrix and
     * a `modelview` matrix.
     * @param modelview a #graphene_matrix_t for the modelview matrix; this is   the inverse of the modelview used when projecting the point
     * @param point a #graphene_point3d_t with the coordinates of the point
     */
    unprojectPoint3d(modelview: Matrix, point: Point3D): /* res */ Point3D
    /**
     * Undoes the transformation on the corners of a #graphene_rect_t using the
     * given matrix, within the given axis aligned rectangular `bounds`.
     * @param r a #graphene_rect_t
     * @param bounds the bounds of the transformation
     */
    untransformBounds(r: Rect, bounds: Rect): /* res */ Rect
    /**
     * Undoes the transformation of a #graphene_point_t using the
     * given matrix, within the given axis aligned rectangular `bounds`.
     * @param p a #graphene_point_t
     * @param bounds the bounds of the transformation
     */
    untransformPoint(p: Point, bounds: Rect): [ /* returnType */ boolean, /* res */ Point ]
}

/**
 * A structure capable of holding a 4x4 matrix.
 * 
 * The contents of the #graphene_matrix_t structure are private and
 * should never be accessed directly.
 * @record 
 */
export class Matrix {

    // Own properties of Graphene-1.0.Graphene.Matrix

    static name: string

    // Constructors of Graphene-1.0.Graphene.Matrix

    /**
     * Allocates a new #graphene_matrix_t.
     * @constructor 
     */
    static alloc(): Matrix
}

export interface Plane {

    // Owm methods of Graphene-1.0.Graphene.Plane

    /**
     * Computes the distance of `point` from a #graphene_plane_t.
     * @param point a #graphene_point3d_t
     */
    distance(point: Point3D): number
    /**
     * Checks whether the two given #graphene_plane_t are equal.
     * @param b a #graphene_plane_t
     */
    equal(b: Plane): boolean
    /**
     * Frees the resources allocated by graphene_plane_alloc().
     */
    free(): void
    /**
     * Retrieves the distance along the normal vector of the
     * given #graphene_plane_t from the origin.
     */
    getConstant(): number
    /**
     * Retrieves the normal vector pointing towards the origin of the
     * given #graphene_plane_t.
     */
    getNormal(): /* normal */ Vec3
    /**
     * Initializes the given #graphene_plane_t using the given `normal` vector
     * and `constant` values.
     * @param normal a unit length normal vector defining the plane   pointing towards the origin; if unset, we use the X axis by default
     * @param constant the distance from the origin to the plane along the   normal vector; the sign determines the half-space occupied by the   plane
     */
    init(normal: Vec3 | null, constant: number): Plane
    /**
     * Initializes the given #graphene_plane_t using the normal
     * vector and constant of another #graphene_plane_t.
     * @param src a #graphene_plane_t
     */
    initFromPlane(src: Plane): Plane
    /**
     * Initializes the given #graphene_plane_t using the given normal vector
     * and an arbitrary co-planar point.
     * @param normal a normal vector defining the plane pointing towards the origin
     * @param point a #graphene_point3d_t
     */
    initFromPoint(normal: Vec3, point: Point3D): Plane
    /**
     * Initializes the given #graphene_plane_t using the 3 provided co-planar
     * points.
     * 
     * The winding order is counter-clockwise, and determines which direction
     * the normal vector will point.
     * @param a a #graphene_point3d_t
     * @param b a #graphene_point3d_t
     * @param c a #graphene_point3d_t
     */
    initFromPoints(a: Point3D, b: Point3D, c: Point3D): Plane
    /**
     * Initializes the given #graphene_plane_t using the components of
     * the given #graphene_vec4_t vector.
     * @param src a #graphene_vec4_t containing the normal vector in its first   three components, and the distance in its fourth component
     */
    initFromVec4(src: Vec4): Plane
    /**
     * Negates the normal vector and constant of a #graphene_plane_t, effectively
     * mirroring the plane across the origin.
     */
    negate(): /* res */ Plane
    /**
     * Normalizes the vector of the given #graphene_plane_t,
     * and adjusts the constant accordingly.
     */
    normalize(): /* res */ Plane
    /**
     * Transforms a #graphene_plane_t `p` using the given `matrix`
     * and `normal_matrix`.
     * 
     * If `normal_matrix` is %NULL, a transformation matrix for the plane
     * normal will be computed from `matrix`. If you are transforming
     * multiple planes using the same `matrix` it's recommended to compute
     * the normal matrix beforehand to avoid incurring in the cost of
     * recomputing it every time.
     * @param matrix a #graphene_matrix_t
     * @param normalMatrix a #graphene_matrix_t
     */
    transform(matrix: Matrix, normalMatrix: Matrix | null): /* res */ Plane
}

/**
 * A 2D plane that extends infinitely in a 3D volume.
 * 
 * The contents of the `graphene_plane_t` are private, and should not be
 * modified directly.
 * @record 
 */
export class Plane {

    // Own properties of Graphene-1.0.Graphene.Plane

    static name: string

    // Constructors of Graphene-1.0.Graphene.Plane

    /**
     * Allocates a new #graphene_plane_t structure.
     * 
     * The contents of the returned structure are undefined.
     * @constructor 
     */
    static alloc(): Plane
}

export interface Point {

    // Own fields of Graphene-1.0.Graphene.Point

    /**
     * the X coordinate of the point
     * @field 
     */
    x: number
    /**
     * the Y coordinate of the point
     * @field 
     */
    y: number

    // Owm methods of Graphene-1.0.Graphene.Point

    /**
     * Computes the distance between `a` and `b`.
     * @param b a #graphene_point_t
     */
    distance(b: Point): [ /* returnType */ number, /* dX */ number, /* dY */ number ]
    /**
     * Checks if the two points `a` and `b` point to the same
     * coordinates.
     * 
     * This function accounts for floating point fluctuations; if
     * you want to control the fuzziness of the match, you can use
     * graphene_point_near() instead.
     * @param b a #graphene_point_t
     */
    equal(b: Point): boolean
    /**
     * Frees the resources allocated by graphene_point_alloc().
     */
    free(): void
    /**
     * Initializes `p` to the given `x` and `y` coordinates.
     * 
     * It's safe to call this function multiple times.
     * @param x the X coordinate
     * @param y the Y coordinate
     */
    init(x: number, y: number): Point
    /**
     * Initializes `p` with the same coordinates of `src`.
     * @param src the #graphene_point_t to use
     */
    initFromPoint(src: Point): Point
    /**
     * Initializes `p` with the coordinates inside the given #graphene_vec2_t.
     * @param src a #graphene_vec2_t
     */
    initFromVec2(src: Vec2): Point
    /**
     * Linearly interpolates the coordinates of `a` and `b` using the
     * given `factor`.
     * @param b a #graphene_point_t
     * @param factor the linear interpolation factor
     */
    interpolate(b: Point, factor: number): /* res */ Point
    /**
     * Checks whether the two points `a` and `b` are within
     * the threshold of `epsilon`.
     * @param b a #graphene_point_t
     * @param epsilon threshold between the two points
     */
    near(b: Point, epsilon: number): boolean
    /**
     * Stores the coordinates of the given #graphene_point_t into a
     * #graphene_vec2_t.
     */
    toVec2(): /* v */ Vec2
}

/**
 * A point with two coordinates.
 * @record 
 */
export class Point {

    // Own properties of Graphene-1.0.Graphene.Point

    static name: string

    // Constructors of Graphene-1.0.Graphene.Point

    /**
     * Allocates a new #graphene_point_t structure.
     * 
     * The coordinates of the returned point are (0, 0).
     * 
     * It's possible to chain this function with graphene_point_init()
     * or graphene_point_init_from_point(), e.g.:
     * 
     * 
     * ```c
     *   graphene_point_t *
     *   point_new (float x, float y)
     *   {
     *     return graphene_point_init (graphene_point_alloc (), x, y);
     *   }
     * 
     *   graphene_point_t *
     *   point_copy (const graphene_point_t *p)
     *   {
     *     return graphene_point_init_from_point (graphene_point_alloc (), p);
     *   }
     * ```
     * 
     * @constructor 
     */
    static alloc(): Point
    /**
     * Creates a new Point with the given values
     * @param x
     * @param y
     */
    static create(x: number, y: number): Point
    /**
     * Returns a point fixed at (0, 0).
     */
    static zero(): Point
}

export interface Point3D {

    // Own fields of Graphene-1.0.Graphene.Point3D

    /**
     * the X coordinate
     * @field 
     */
    x: number
    /**
     * the Y coordinate
     * @field 
     */
    y: number
    /**
     * the Z coordinate
     * @field 
     */
    z: number

    // Owm methods of Graphene-1.0.Graphene.Point3D

    /**
     * Computes the cross product of the two given #graphene_point3d_t.
     * @param b a #graphene_point3d_t
     */
    cross(b: Point3D): /* res */ Point3D
    /**
     * Computes the distance between the two given #graphene_point3d_t.
     * @param b a #graphene_point3d_t
     */
    distance(b: Point3D): [ /* returnType */ number, /* delta */ Vec3 ]
    /**
     * Computes the dot product of the two given #graphene_point3d_t.
     * @param b a #graphene_point3d_t
     */
    dot(b: Point3D): number
    /**
     * Checks whether two given points are equal.
     * @param b a #graphene_point3d_t
     */
    equal(b: Point3D): boolean
    /**
     * Frees the resources allocated via graphene_point3d_alloc().
     */
    free(): void
    /**
     * Initializes a #graphene_point3d_t with the given coordinates.
     * @param x the X coordinate of the point
     * @param y the Y coordinate of the point
     * @param z the Z coordinate of the point
     */
    init(x: number, y: number, z: number): Point3D
    /**
     * Initializes a #graphene_point3d_t using the coordinates of
     * another #graphene_point3d_t.
     * @param src a #graphene_point3d_t
     */
    initFromPoint(src: Point3D): Point3D
    /**
     * Initializes a #graphene_point3d_t using the components
     * of a #graphene_vec3_t.
     * @param v a #graphene_vec3_t
     */
    initFromVec3(v: Vec3): Point3D
    /**
     * Linearly interpolates each component of `a` and `b` using the
     * provided `factor,` and places the result in `res`.
     * @param b a #graphene_point3d_t
     * @param factor the interpolation factor
     */
    interpolate(b: Point3D, factor: number): /* res */ Point3D
    /**
     * Computes the length of the vector represented by the
     * coordinates of the given #graphene_point3d_t.
     */
    length(): number
    /**
     * Checks whether the two points are near each other, within
     * an `epsilon` factor.
     * @param b a #graphene_point3d_t
     * @param epsilon fuzzyness factor
     */
    near(b: Point3D, epsilon: number): boolean
    /**
     * Computes the normalization of the vector represented by the
     * coordinates of the given #graphene_point3d_t.
     */
    normalize(): /* res */ Point3D
    /**
     * Normalizes the coordinates of a #graphene_point3d_t using the
     * given viewport and clipping planes.
     * 
     * The coordinates of the resulting #graphene_point3d_t will be
     * in the [ -1, 1 ] range.
     * @param viewport a #graphene_rect_t representing a viewport
     * @param zNear the coordinate of the near clipping plane, or 0 for   the default near clipping plane
     * @param zFar the coordinate of the far clipping plane, or 1 for the   default far clipping plane
     */
    normalizeViewport(viewport: Rect, zNear: number, zFar: number): /* res */ Point3D
    /**
     * Scales the coordinates of the given #graphene_point3d_t by
     * the given `factor`.
     * @param factor the scaling factor
     */
    scale(factor: number): /* res */ Point3D
    /**
     * Stores the coordinates of a #graphene_point3d_t into a
     * #graphene_vec3_t.
     */
    toVec3(): /* v */ Vec3
}

/**
 * A point with three components: X, Y, and Z.
 * @record 
 */
export class Point3D {

    // Own properties of Graphene-1.0.Graphene.Point3D

    static name: string

    // Constructors of Graphene-1.0.Graphene.Point3D

    /**
     * Allocates a #graphene_point3d_t structure.
     * @constructor 
     */
    static alloc(): Point3D
    /**
     * Retrieves a constant point with all three coordinates set to 0.
     */
    static zero(): Point3D
}

export interface Quad {

    // Owm methods of Graphene-1.0.Graphene.Quad

    /**
     * Computes the bounding rectangle of `q` and places it into `r`.
     */
    bounds(): /* r */ Rect
    /**
     * Checks if the given #graphene_quad_t contains the given #graphene_point_t.
     * @param p a #graphene_point_t
     */
    contains(p: Point): boolean
    /**
     * Frees the resources allocated by graphene_quad_alloc()
     */
    free(): void
    /**
     * Retrieves the point of a #graphene_quad_t at the given index.
     * @param index the index of the point to retrieve
     */
    getPoint(index: number): Point
    /**
     * Initializes a #graphene_quad_t with the given points.
     * @param p1 the first point of the quadrilateral
     * @param p2 the second point of the quadrilateral
     * @param p3 the third point of the quadrilateral
     * @param p4 the fourth point of the quadrilateral
     */
    init(p1: Point, p2: Point, p3: Point, p4: Point): Quad
    /**
     * Initializes a #graphene_quad_t using an array of points.
     * @param points an array of 4 #graphene_point_t
     */
    initFromPoints(points: Point[]): Quad
    /**
     * Initializes a #graphene_quad_t using the four corners of the
     * given #graphene_rect_t.
     * @param r a #graphene_rect_t
     */
    initFromRect(r: Rect): Quad
}

/**
 * A 4 vertex quadrilateral, as represented by four #graphene_point_t.
 * 
 * The contents of a #graphene_quad_t are private and should never be
 * accessed directly.
 * @record 
 */
export class Quad {

    // Own properties of Graphene-1.0.Graphene.Quad

    static name: string

    // Constructors of Graphene-1.0.Graphene.Quad

    /**
     * Allocates a new #graphene_quad_t instance.
     * 
     * The contents of the returned instance are undefined.
     * @constructor 
     */
    static alloc(): Quad
}

export interface Quaternion {

    // Owm methods of Graphene-1.0.Graphene.Quaternion

    /**
     * Adds two #graphene_quaternion_t `a` and `b`.
     * @param b a #graphene_quaternion_t
     */
    add(b: Quaternion): /* res */ Quaternion
    /**
     * Computes the dot product of two #graphene_quaternion_t.
     * @param b a #graphene_quaternion_t
     */
    dot(b: Quaternion): number
    /**
     * Checks whether the given quaternions are equal.
     * @param b a #graphene_quaternion_t
     */
    equal(b: Quaternion): boolean
    /**
     * Releases the resources allocated by graphene_quaternion_alloc().
     */
    free(): void
    /**
     * Initializes a #graphene_quaternion_t using the given four values.
     * @param x the first component of the quaternion
     * @param y the second component of the quaternion
     * @param z the third component of the quaternion
     * @param w the fourth component of the quaternion
     */
    init(x: number, y: number, z: number, w: number): Quaternion
    /**
     * Initializes a #graphene_quaternion_t using an `angle` on a
     * specific `axis`.
     * @param angle the rotation on a given axis, in degrees
     * @param axis the axis of rotation, expressed as a vector
     */
    initFromAngleVec3(angle: number, axis: Vec3): Quaternion
    /**
     * Initializes a #graphene_quaternion_t using the values of
     * the [Euler angles](http://en.wikipedia.org/wiki/Euler_angles)
     * on each axis.
     * 
     * See also: graphene_quaternion_init_from_euler()
     * @param degX rotation angle on the X axis (yaw), in degrees
     * @param degY rotation angle on the Y axis (pitch), in degrees
     * @param degZ rotation angle on the Z axis (roll), in degrees
     */
    initFromAngles(degX: number, degY: number, degZ: number): Quaternion
    /**
     * Initializes a #graphene_quaternion_t using the given #graphene_euler_t.
     * @param e a #graphene_euler_t
     */
    initFromEuler(e: Euler): Quaternion
    /**
     * Initializes a #graphene_quaternion_t using the rotation components
     * of a transformation matrix.
     * @param m a #graphene_matrix_t
     */
    initFromMatrix(m: Matrix): Quaternion
    /**
     * Initializes a #graphene_quaternion_t with the values from `src`.
     * @param src a #graphene_quaternion_t
     */
    initFromQuaternion(src: Quaternion): Quaternion
    /**
     * Initializes a #graphene_quaternion_t using the values of
     * the [Euler angles](http://en.wikipedia.org/wiki/Euler_angles)
     * on each axis.
     * 
     * See also: graphene_quaternion_init_from_euler()
     * @param radX rotation angle on the X axis (yaw), in radians
     * @param radY rotation angle on the Y axis (pitch), in radians
     * @param radZ rotation angle on the Z axis (roll), in radians
     */
    initFromRadians(radX: number, radY: number, radZ: number): Quaternion
    /**
     * Initializes a #graphene_quaternion_t with the values from `src`.
     * @param src a #graphene_vec4_t
     */
    initFromVec4(src: Vec4): Quaternion
    /**
     * Initializes a #graphene_quaternion_t using the identity
     * transformation.
     */
    initIdentity(): Quaternion
    /**
     * Inverts a #graphene_quaternion_t, and returns the conjugate
     * quaternion of `q`.
     */
    invert(): /* res */ Quaternion
    /**
     * Multiplies two #graphene_quaternion_t `a` and `b`.
     * @param b a #graphene_quaternion_t
     */
    multiply(b: Quaternion): /* res */ Quaternion
    /**
     * Normalizes a #graphene_quaternion_t.
     */
    normalize(): /* res */ Quaternion
    /**
     * Scales all the elements of a #graphene_quaternion_t `q` using
     * the given scalar factor.
     * @param factor a scaling factor
     */
    scale(factor: number): /* res */ Quaternion
    /**
     * Interpolates between the two given quaternions using a spherical
     * linear interpolation, or [SLERP](http://en.wikipedia.org/wiki/Slerp),
     * using the given interpolation `factor`.
     * @param b a #graphene_quaternion_t
     * @param factor the linear interpolation factor
     */
    slerp(b: Quaternion, factor: number): /* res */ Quaternion
    /**
     * Converts a quaternion into an `angle,` `axis` pair.
     */
    toAngleVec3(): [ /* angle */ number, /* axis */ Vec3 ]
    /**
     * Converts a #graphene_quaternion_t to its corresponding rotations
     * on the [Euler angles](http://en.wikipedia.org/wiki/Euler_angles)
     * on each axis.
     */
    toAngles(): [ /* degX */ number, /* degY */ number, /* degZ */ number ]
    /**
     * Converts a quaternion into a transformation matrix expressing
     * the rotation defined by the #graphene_quaternion_t.
     */
    toMatrix(): /* m */ Matrix
    /**
     * Converts a #graphene_quaternion_t to its corresponding rotations
     * on the [Euler angles](http://en.wikipedia.org/wiki/Euler_angles)
     * on each axis.
     */
    toRadians(): [ /* radX */ number, /* radY */ number, /* radZ */ number ]
    /**
     * Copies the components of a #graphene_quaternion_t into a
     * #graphene_vec4_t.
     */
    toVec4(): /* res */ Vec4
}

/**
 * A quaternion.
 * 
 * The contents of the #graphene_quaternion_t structure are private
 * and should never be accessed directly.
 * @record 
 */
export class Quaternion {

    // Own properties of Graphene-1.0.Graphene.Quaternion

    static name: string

    // Constructors of Graphene-1.0.Graphene.Quaternion

    /**
     * Allocates a new #graphene_quaternion_t.
     * 
     * The contents of the returned value are undefined.
     * @constructor 
     */
    static alloc(): Quaternion
}

export interface Ray {

    // Owm methods of Graphene-1.0.Graphene.Ray

    /**
     * Checks whether the two given #graphene_ray_t are equal.
     * @param b a #graphene_ray_t
     */
    equal(b: Ray): boolean
    /**
     * Frees the resources allocated by graphene_ray_alloc().
     */
    free(): void
    /**
     * Computes the point on the given #graphene_ray_t that is closest to the
     * given point `p`.
     * @param p a #graphene_point3d_t
     */
    getClosestPointToPoint(p: Point3D): /* res */ Point3D
    /**
     * Retrieves the direction of the given #graphene_ray_t.
     */
    getDirection(): /* direction */ Vec3
    /**
     * Computes the distance of the origin of the given #graphene_ray_t from the
     * given plane.
     * 
     * If the ray does not intersect the plane, this function returns `INFINITY`.
     * @param p a #graphene_plane_t
     */
    getDistanceToPlane(p: Plane): number
    /**
     * Computes the distance of the closest approach between the
     * given #graphene_ray_t `r` and the point `p`.
     * 
     * The closest approach to a ray from a point is the distance
     * between the point and the projection of the point on the
     * ray itself.
     * @param p a #graphene_point3d_t
     */
    getDistanceToPoint(p: Point3D): number
    /**
     * Retrieves the origin of the given #graphene_ray_t.
     */
    getOrigin(): /* origin */ Point3D
    /**
     * Retrieves the coordinates of a point at the distance `t` along the
     * given #graphene_ray_t.
     * @param t the distance along the ray
     */
    getPositionAt(t: number): /* position */ Point3D
    /**
     * Initializes the given #graphene_ray_t using the given `origin`
     * and `direction` values.
     * @param origin the origin of the ray
     * @param direction the direction vector
     */
    init(origin: Point3D | null, direction: Vec3 | null): Ray
    /**
     * Initializes the given #graphene_ray_t using the origin and direction
     * values of another #graphene_ray_t.
     * @param src a #graphene_ray_t
     */
    initFromRay(src: Ray): Ray
    /**
     * Initializes the given #graphene_ray_t using the given vectors.
     * @param origin a #graphene_vec3_t
     * @param direction a #graphene_vec3_t
     */
    initFromVec3(origin: Vec3 | null, direction: Vec3 | null): Ray
    /**
     * Intersects the given #graphene_ray_t `r` with the given
     * #graphene_box_t `b`.
     * @param b a #graphene_box_t
     */
    intersectBox(b: Box): [ /* returnType */ RayIntersectionKind, /* tOut */ number ]
    /**
     * Intersects the given #graphene_ray_t `r` with the given
     * #graphene_sphere_t `s`.
     * @param s a #graphene_sphere_t
     */
    intersectSphere(s: Sphere): [ /* returnType */ RayIntersectionKind, /* tOut */ number ]
    /**
     * Intersects the given #graphene_ray_t `r` with the given
     * #graphene_triangle_t `t`.
     * @param t a #graphene_triangle_t
     */
    intersectTriangle(t: Triangle): [ /* returnType */ RayIntersectionKind, /* tOut */ number ]
    /**
     * Checks whether the given #graphene_ray_t `r` intersects the
     * given #graphene_box_t `b`.
     * 
     * See also: graphene_ray_intersect_box()
     * @param b a #graphene_box_t
     */
    intersectsBox(b: Box): boolean
    /**
     * Checks if the given #graphene_ray_t `r` intersects the
     * given #graphene_sphere_t `s`.
     * 
     * See also: graphene_ray_intersect_sphere()
     * @param s a #graphene_sphere_t
     */
    intersectsSphere(s: Sphere): boolean
    /**
     * Checks whether the given #graphene_ray_t `r` intersects the
     * given #graphene_triangle_t `b`.
     * 
     * See also: graphene_ray_intersect_triangle()
     * @param t a #graphene_triangle_t
     */
    intersectsTriangle(t: Triangle): boolean
}

/**
 * A ray emitted from an origin in a given direction.
 * 
 * The contents of the `graphene_ray_t` structure are private, and should not
 * be modified directly.
 * @record 
 */
export class Ray {

    // Own properties of Graphene-1.0.Graphene.Ray

    static name: string

    // Constructors of Graphene-1.0.Graphene.Ray

    /**
     * Allocates a new #graphene_ray_t structure.
     * 
     * The contents of the returned structure are undefined.
     * @constructor 
     */
    static alloc(): Ray
}

export interface Rect {

    // Own fields of Graphene-1.0.Graphene.Rect

    /**
     * the coordinates of the origin of the rectangle
     * @field 
     */
    origin: Point
    /**
     * the size of the rectangle
     * @field 
     */
    size: Size

    // Owm methods of Graphene-1.0.Graphene.Rect

    /**
     * Checks whether a #graphene_rect_t contains the given coordinates.
     * @param p a #graphene_point_t
     */
    containsPoint(p: Point): boolean
    /**
     * Checks whether a #graphene_rect_t fully contains the given
     * rectangle.
     * @param b a #graphene_rect_t
     */
    containsRect(b: Rect): boolean
    /**
     * Checks whether the two given rectangle are equal.
     * @param b a #graphene_rect_t
     */
    equal(b: Rect): boolean
    /**
     * Expands a #graphene_rect_t to contain the given #graphene_point_t.
     * @param p a #graphene_point_t
     */
    expand(p: Point): /* res */ Rect
    /**
     * Frees the resources allocated by graphene_rect_alloc().
     */
    free(): void
    /**
     * Compute the area of given normalized rectangle.
     */
    getArea(): number
    /**
     * Retrieves the coordinates of the bottom-left corner of the given rectangle.
     */
    getBottomLeft(): /* p */ Point
    /**
     * Retrieves the coordinates of the bottom-right corner of the given rectangle.
     */
    getBottomRight(): /* p */ Point
    /**
     * Retrieves the coordinates of the center of the given rectangle.
     */
    getCenter(): /* p */ Point
    /**
     * Retrieves the normalized height of the given rectangle.
     */
    getHeight(): number
    /**
     * Retrieves the coordinates of the top-left corner of the given rectangle.
     */
    getTopLeft(): /* p */ Point
    /**
     * Retrieves the coordinates of the top-right corner of the given rectangle.
     */
    getTopRight(): /* p */ Point
    /**
     * Computes the four vertices of a #graphene_rect_t.
     */
    getVertices(): /* vertices */ Vec2[]
    /**
     * Retrieves the normalized width of the given rectangle.
     */
    getWidth(): number
    /**
     * Retrieves the normalized X coordinate of the origin of the given
     * rectangle.
     */
    getX(): number
    /**
     * Retrieves the normalized Y coordinate of the origin of the given
     * rectangle.
     */
    getY(): number
    /**
     * Initializes the given #graphene_rect_t with the given values.
     * 
     * This function will implicitly normalize the #graphene_rect_t
     * before returning.
     * @param x the X coordinate of the `graphene_rect_t`.origin
     * @param y the Y coordinate of the `graphene_rect_t`.origin
     * @param width the width of the `graphene_rect_t`.size
     * @param height the height of the `graphene_rect_t`.size
     */
    init(x: number, y: number, width: number, height: number): Rect
    /**
     * Initializes `r` using the given `src` rectangle.
     * 
     * This function will implicitly normalize the #graphene_rect_t
     * before returning.
     * @param src a #graphene_rect_t
     */
    initFromRect(src: Rect): Rect
    /**
     * Changes the given rectangle to be smaller, or larger depending on the
     * given inset parameters.
     * 
     * To create an inset rectangle, use positive `d_x` or `d_y` values; to
     * create a larger, encompassing rectangle, use negative `d_x` or `d_y`
     * values.
     * 
     * The origin of the rectangle is offset by `d_x` and `d_y,` while the size
     * is adjusted by `(2 * `d_x,` 2 * `d_y)``. If `d_x` and `d_y` are positive
     * values, the size of the rectangle is decreased; if `d_x` and `d_y` are
     * negative values, the size of the rectangle is increased.
     * 
     * If the size of the resulting inset rectangle has a negative width or
     * height then the size will be set to zero.
     * @param dX the horizontal inset
     * @param dY the vertical inset
     */
    inset(dX: number, dY: number): Rect
    /**
     * Changes the given rectangle to be smaller, or larger depending on the
     * given inset parameters.
     * 
     * To create an inset rectangle, use positive `d_x` or `d_y` values; to
     * create a larger, encompassing rectangle, use negative `d_x` or `d_y`
     * values.
     * 
     * The origin of the rectangle is offset by `d_x` and `d_y,` while the size
     * is adjusted by `(2 * `d_x,` 2 * `d_y)``. If `d_x` and `d_y` are positive
     * values, the size of the rectangle is decreased; if `d_x` and `d_y` are
     * negative values, the size of the rectangle is increased.
     * 
     * If the size of the resulting inset rectangle has a negative width or
     * height then the size will be set to zero.
     * @param dX the horizontal inset
     * @param dY the vertical inset
     */
    insetR(dX: number, dY: number): /* res */ Rect
    /**
     * Linearly interpolates the origin and size of the two given
     * rectangles.
     * @param b a #graphene_rect_t
     * @param factor the linear interpolation factor
     */
    interpolate(b: Rect, factor: number): /* res */ Rect
    /**
     * Computes the intersection of the two given rectangles.
     * 
     * ![](rectangle-intersection.png)
     * 
     * The intersection in the image above is the blue outline.
     * 
     * If the two rectangles do not intersect, `res` will contain
     * a degenerate rectangle with origin in (0, 0) and a size of 0.
     * @param b a #graphene_rect_t
     */
    intersection(b: Rect): [ /* returnType */ boolean, /* res */ Rect ]
    /**
     * Normalizes the passed rectangle.
     * 
     * This function ensures that the size of the rectangle is made of
     * positive values, and that the origin is the top-left corner of
     * the rectangle.
     */
    normalize(): Rect
    /**
     * Normalizes the passed rectangle.
     * 
     * This function ensures that the size of the rectangle is made of
     * positive values, and that the origin is in the top-left corner
     * of the rectangle.
     */
    normalizeR(): /* res */ Rect
    /**
     * Offsets the origin by `d_x` and `d_y`.
     * 
     * The size of the rectangle is unchanged.
     * @param dX the horizontal offset
     * @param dY the vertical offset
     */
    offset(dX: number, dY: number): Rect
    /**
     * Offsets the origin of the given rectangle by `d_x` and `d_y`.
     * 
     * The size of the rectangle is left unchanged.
     * @param dX the horizontal offset
     * @param dY the vertical offset
     */
    offsetR(dX: number, dY: number): /* res */ Rect
    /**
     * Rounds the origin and size of the given rectangle to
     * their nearest integer values; the rounding is guaranteed
     * to be large enough to have an area bigger or equal to the
     * original rectangle, but might not fully contain its extents.
     * Use graphene_rect_round_extents() in case you need to round
     * to a rectangle that covers fully the original one.
     * 
     * This function is the equivalent of calling `floor` on
     * the coordinates of the origin, and `ceil` on the size.
     */
    round(): /* res */ Rect
    /**
     * Rounds the origin of the given rectangle to its nearest
     * integer value and and recompute the size so that the
     * rectangle is large enough to contain all the conrners
     * of the original rectangle.
     * 
     * This function is the equivalent of calling `floor` on
     * the coordinates of the origin, and recomputing the size
     * calling `ceil` on the bottom-right coordinates.
     * 
     * If you want to be sure that the rounded rectangle
     * completely covers the area that was covered by the
     * original rectangle ??? i.e. you want to cover the area
     * including all its corners ??? this function will make sure
     * that the size is recomputed taking into account the ceiling
     * of the coordinates of the bottom-right corner.
     * If the difference between the original coordinates and the
     * coordinates of the rounded rectangle is greater than the
     * difference between the original size and and the rounded
     * size, then the move of the origin would not be compensated
     * by a move in the anti-origin, leaving the corners of the
     * original rectangle outside the rounded one.
     */
    roundExtents(): /* res */ Rect
    /**
     * Rounds the origin and the size of the given rectangle to
     * their nearest integer values; the rounding is guaranteed
     * to be large enough to contain the original rectangle.
     */
    roundToPixel(): Rect
    /**
     * Scales the size and origin of a rectangle horizontaly by `s_h,`
     * and vertically by `s_v`. The result `res` is normalized.
     * @param sH horizontal scale factor
     * @param sV vertical scale factor
     */
    scale(sH: number, sV: number): /* res */ Rect
    /**
     * Computes the union of the two given rectangles.
     * 
     * ![](rectangle-union.png)
     * 
     * The union in the image above is the blue outline.
     * @param b a #graphene_rect_t
     */
    union(b: Rect): /* res */ Rect
}

/**
 * The location and size of a rectangle region.
 * 
 * The width and height of a #graphene_rect_t can be negative; for instance,
 * a #graphene_rect_t with an origin of [ 0, 0 ] and a size of [ 10, 10 ] is
 * equivalent to a #graphene_rect_t with an origin of [ 10, 10 ] and a size
 * of [ -10, -10 ].
 * 
 * Application code can normalize rectangles using graphene_rect_normalize();
 * this function will ensure that the width and height of a rectangle are
 * positive values. All functions taking a #graphene_rect_t as an argument
 * will internally operate on a normalized copy; all functions returning a
 * #graphene_rect_t will always return a normalized rectangle.
 * @record 
 */
export class Rect {

    // Own properties of Graphene-1.0.Graphene.Rect

    static name: string

    // Constructors of Graphene-1.0.Graphene.Rect

    /**
     * Creates a new Rect with the given values
     * @param x
     * @param y
     * @param width
     * @param height
     */
    static create(x: number, y: number, width: number, height: number): Rect
    /**
     * Allocates a new #graphene_rect_t.
     * 
     * The contents of the returned rectangle are undefined.
     */
    static alloc(): Rect
    /**
     * Returns a degenerate rectangle with origin fixed at (0, 0) and
     * a size of 0, 0.
     */
    static zero(): Rect
}

export interface Simd4F {
}

export class Simd4F {

    // Own properties of Graphene-1.0.Graphene.Simd4F

    static name: string
}

export interface Simd4X4F {
}

export class Simd4X4F {

    // Own properties of Graphene-1.0.Graphene.Simd4X4F

    static name: string
}

export interface Size {

    // Own fields of Graphene-1.0.Graphene.Size

    /**
     * the width
     * @field 
     */
    width: number
    /**
     * the height
     * @field 
     */
    height: number

    // Owm methods of Graphene-1.0.Graphene.Size

    /**
     * Checks whether the two give #graphene_size_t are equal.
     * @param b a #graphene_size_t
     */
    equal(b: Size): boolean
    /**
     * Frees the resources allocated by graphene_size_alloc().
     */
    free(): void
    /**
     * Initializes a #graphene_size_t using the given `width` and `height`.
     * @param width the width
     * @param height the height
     */
    init(width: number, height: number): Size
    /**
     * Initializes a #graphene_size_t using the width and height of
     * the given `src`.
     * @param src a #graphene_size_t
     */
    initFromSize(src: Size): Size
    /**
     * Linearly interpolates the two given #graphene_size_t using the given
     * interpolation `factor`.
     * @param b a #graphene_size_t
     * @param factor the linear interpolation factor
     */
    interpolate(b: Size, factor: number): /* res */ Size
    /**
     * Scales the components of a #graphene_size_t using the given `factor`.
     * @param factor the scaling factor
     */
    scale(factor: number): /* res */ Size
}

/**
 * A size.
 * @record 
 */
export class Size {

    // Own properties of Graphene-1.0.Graphene.Size

    static name: string

    // Constructors of Graphene-1.0.Graphene.Size

    /**
     * Allocates a new #graphene_size_t.
     * 
     * The contents of the returned value are undefined.
     * @constructor 
     */
    static alloc(): Size
    /**
     * Creates a new Size with the given values
     * @param width
     * @param height
     */
    static create(width: number, height: number): Size
    /**
     * A constant pointer to a zero #graphene_size_t, useful for
     * equality checks and interpolations.
     */
    static zero(): Size
}

export interface Sphere {

    // Owm methods of Graphene-1.0.Graphene.Sphere

    /**
     * Checks whether the given `point` is contained in the volume
     * of a #graphene_sphere_t.
     * @param point a #graphene_point3d_t
     */
    containsPoint(point: Point3D): boolean
    /**
     * Computes the distance of the given `point` from the surface of
     * a #graphene_sphere_t.
     * @param point a #graphene_point3d_t
     */
    distance(point: Point3D): number
    /**
     * Checks whether two #graphene_sphere_t are equal.
     * @param b a #graphene_sphere_t
     */
    equal(b: Sphere): boolean
    /**
     * Frees the resources allocated by graphene_sphere_alloc().
     */
    free(): void
    /**
     * Computes the bounding box capable of containing the
     * given #graphene_sphere_t.
     */
    getBoundingBox(): /* box */ Box
    /**
     * Retrieves the coordinates of the center of a #graphene_sphere_t.
     */
    getCenter(): /* center */ Point3D
    /**
     * Retrieves the radius of a #graphene_sphere_t.
     */
    getRadius(): number
    /**
     * Initializes the given #graphene_sphere_t with the given `center` and `radius`.
     * @param center the coordinates of the center of the sphere, or %NULL   for a center in (0, 0, 0)
     * @param radius the radius of the sphere
     */
    init(center: Point3D | null, radius: number): Sphere
    /**
     * Initializes the given #graphene_sphere_t using the given array
     * of 3D coordinates so that the sphere includes them.
     * 
     * The center of the sphere can either be specified, or will be center
     * of the 3D volume that encompasses all `points`.
     * @param points an array of #graphene_point3d_t
     * @param center the center of the sphere
     */
    initFromPoints(points: Point3D[], center: Point3D | null): Sphere
    /**
     * Initializes the given #graphene_sphere_t using the given array
     * of 3D coordinates so that the sphere includes them.
     * 
     * The center of the sphere can either be specified, or will be center
     * of the 3D volume that encompasses all `vectors`.
     * @param vectors an array of #graphene_vec3_t
     * @param center the center of the sphere
     */
    initFromVectors(vectors: Vec3[], center: Point3D | null): Sphere
    /**
     * Checks whether the sphere has a zero radius.
     */
    isEmpty(): boolean
    /**
     * Translates the center of the given #graphene_sphere_t using the `point`
     * coordinates as the delta of the translation.
     * @param point the coordinates of the translation
     */
    translate(point: Point3D): /* res */ Sphere
}

/**
 * A sphere, represented by its center and radius.
 * @record 
 */
export class Sphere {

    // Own properties of Graphene-1.0.Graphene.Sphere

    static name: string

    // Constructors of Graphene-1.0.Graphene.Sphere

    /**
     * Allocates a new #graphene_sphere_t.
     * 
     * The contents of the newly allocated structure are undefined.
     * @constructor 
     */
    static alloc(): Sphere
}

export interface Triangle {

    // Owm methods of Graphene-1.0.Graphene.Triangle

    /**
     * Checks whether the given triangle `t` contains the point `p`.
     * @param p a #graphene_point3d_t
     */
    containsPoint(p: Point3D): boolean
    /**
     * Checks whether the two given #graphene_triangle_t are equal.
     * @param b a #graphene_triangle_t
     */
    equal(b: Triangle): boolean
    /**
     * Frees the resources allocated by graphene_triangle_alloc().
     */
    free(): void
    /**
     * Computes the area of the given #graphene_triangle_t.
     */
    getArea(): number
    /**
     * Computes the [barycentric coordinates](http://en.wikipedia.org/wiki/Barycentric_coordinate_system)
     * of the given point `p`.
     * 
     * The point `p` must lie on the same plane as the triangle `t;` if the
     * point is not coplanar, the result of this function is undefined.
     * 
     * If we place the origin in the coordinates of the triangle's A point,
     * the barycentric coordinates are `u`, which is on the AC vector; and `v`
     * which is on the AB vector:
     * 
     * ![](triangle-barycentric.png)
     * 
     * The returned #graphene_vec2_t contains the following values, in order:
     * 
     *  - `res.x = u`
     *  - `res.y = v`
     * @param p a #graphene_point3d_t
     */
    getBarycoords(p: Point3D | null): [ /* returnType */ boolean, /* res */ Vec2 ]
    /**
     * Computes the bounding box of the given #graphene_triangle_t.
     */
    getBoundingBox(): /* res */ Box
    /**
     * Computes the coordinates of the midpoint of the given #graphene_triangle_t.
     * 
     * The midpoint G is the [centroid](https://en.wikipedia.org/wiki/Centroid#Triangle_centroid)
     * of the triangle, i.e. the intersection of its medians.
     */
    getMidpoint(): /* res */ Point3D
    /**
     * Computes the normal vector of the given #graphene_triangle_t.
     */
    getNormal(): /* res */ Vec3
    /**
     * Computes the plane based on the vertices of the given #graphene_triangle_t.
     */
    getPlane(): /* res */ Plane
    /**
     * Retrieves the three vertices of the given #graphene_triangle_t and returns
     * their coordinates as #graphene_point3d_t.
     */
    getPoints(): [ /* a */ Point3D, /* b */ Point3D, /* c */ Point3D ]
    /**
     * Computes the UV coordinates of the given point `p`.
     * 
     * The point `p` must lie on the same plane as the triangle `t;` if the point
     * is not coplanar, the result of this function is undefined. If `p` is %NULL,
     * the point will be set in (0, 0, 0).
     * 
     * The UV coordinates will be placed in the `res` vector:
     * 
     *  - `res.x = u`
     *  - `res.y = v`
     * 
     * See also: graphene_triangle_get_barycoords()
     * @param p a #graphene_point3d_t
     * @param uvA the UV coordinates of the first point
     * @param uvB the UV coordinates of the second point
     * @param uvC the UV coordinates of the third point
     */
    getUv(p: Point3D | null, uvA: Vec2, uvB: Vec2, uvC: Vec2): [ /* returnType */ boolean, /* res */ Vec2 ]
    /**
     * Retrieves the three vertices of the given #graphene_triangle_t.
     */
    getVertices(): [ /* a */ Vec3, /* b */ Vec3, /* c */ Vec3 ]
    /**
     * Initializes a #graphene_triangle_t using the three given arrays
     * of floating point values, each representing the coordinates of
     * a point in 3D space.
     * @param a an array of 3 floating point values
     * @param b an array of 3 floating point values
     * @param c an array of 3 floating point values
     */
    initFromFloat(a: number[], b: number[], c: number[]): Triangle
    /**
     * Initializes a #graphene_triangle_t using the three given 3D points.
     * @param a a #graphene_point3d_t
     * @param b a #graphene_point3d_t
     * @param c a #graphene_point3d_t
     */
    initFromPoint3d(a: Point3D | null, b: Point3D | null, c: Point3D | null): Triangle
    /**
     * Initializes a #graphene_triangle_t using the three given vectors.
     * @param a a #graphene_vec3_t
     * @param b a #graphene_vec3_t
     * @param c a #graphene_vec3_t
     */
    initFromVec3(a: Vec3 | null, b: Vec3 | null, c: Vec3 | null): Triangle
}

/**
 * A triangle.
 * @record 
 */
export class Triangle {

    // Own properties of Graphene-1.0.Graphene.Triangle

    static name: string

    // Constructors of Graphene-1.0.Graphene.Triangle

    /**
     * Allocates a new #graphene_triangle_t.
     * 
     * The contents of the returned structure are undefined.
     * @constructor 
     */
    static alloc(): Triangle
}

export interface Vec2 {

    // Owm methods of Graphene-1.0.Graphene.Vec2

    /**
     * Adds each component of the two passed vectors and places
     * each result into the components of `res`.
     * @param b a #graphene_vec2_t
     */
    add(b: Vec2): /* res */ Vec2
    /**
     * Divides each component of the first operand `a` by the corresponding
     * component of the second operand `b,` and places the results into the
     * vector `res`.
     * @param b a #graphene_vec2_t
     */
    divide(b: Vec2): /* res */ Vec2
    /**
     * Computes the dot product of the two given vectors.
     * @param b a #graphene_vec2_t
     */
    dot(b: Vec2): number
    /**
     * Checks whether the two given #graphene_vec2_t are equal.
     * @param v2 a #graphene_vec2_t
     */
    equal(v2: Vec2): boolean
    /**
     * Frees the resources allocated by `v`
     */
    free(): void
    /**
     * Retrieves the X component of the #graphene_vec2_t.
     */
    getX(): number
    /**
     * Retrieves the Y component of the #graphene_vec2_t.
     */
    getY(): number
    /**
     * Initializes a #graphene_vec2_t using the given values.
     * 
     * This function can be called multiple times.
     * @param x the X field of the vector
     * @param y the Y field of the vector
     */
    init(x: number, y: number): Vec2
    /**
     * Initializes `v` with the contents of the given array.
     * @param src an array of floating point values   with at least two elements
     */
    initFromFloat(src: number[]): Vec2
    /**
     * Copies the contents of `src` into `v`.
     * @param src a #graphene_vec2_t
     */
    initFromVec2(src: Vec2): Vec2
    /**
     * Linearly interpolates `v1` and `v2` using the given `factor`.
     * @param v2 a #graphene_vec2_t
     * @param factor the interpolation factor
     */
    interpolate(v2: Vec2, factor: number): /* res */ Vec2
    /**
     * Computes the length of the given vector.
     */
    length(): number
    /**
     * Compares the two given vectors and places the maximum
     * values of each component into `res`.
     * @param b a #graphene_vec2_t
     */
    max(b: Vec2): /* res */ Vec2
    /**
     * Compares the two given vectors and places the minimum
     * values of each component into `res`.
     * @param b a #graphene_vec2_t
     */
    min(b: Vec2): /* res */ Vec2
    /**
     * Multiplies each component of the two passed vectors and places
     * each result into the components of `res`.
     * @param b a #graphene_vec2_t
     */
    multiply(b: Vec2): /* res */ Vec2
    /**
     * Compares the two given #graphene_vec2_t vectors and checks
     * whether their values are within the given `epsilon`.
     * @param v2 a #graphene_vec2_t
     * @param epsilon the threshold between the two vectors
     */
    near(v2: Vec2, epsilon: number): boolean
    /**
     * Negates the given #graphene_vec2_t.
     */
    negate(): /* res */ Vec2
    /**
     * Computes the normalized vector for the given vector `v`.
     */
    normalize(): /* res */ Vec2
    /**
     * Multiplies all components of the given vector with the given scalar `factor`.
     * @param factor the scalar factor
     */
    scale(factor: number): /* res */ Vec2
    /**
     * Subtracts from each component of the first operand `a` the
     * corresponding component of the second operand `b` and places
     * each result into the components of `res`.
     * @param b a #graphene_vec2_t
     */
    subtract(b: Vec2): /* res */ Vec2
    /**
     * Stores the components of `v` into an array.
     */
    toFloat(): /* dest */ number[]
}

/**
 * A structure capable of holding a vector with two dimensions, x and y.
 * 
 * The contents of the #graphene_vec2_t structure are private and should
 * never be accessed directly.
 * @record 
 */
export class Vec2 {

    // Own properties of Graphene-1.0.Graphene.Vec2

    static name: string

    // Constructors of Graphene-1.0.Graphene.Vec2

    /**
     * Allocates a new #graphene_vec2_t structure.
     * 
     * The contents of the returned structure are undefined.
     * 
     * Use graphene_vec2_init() to initialize the vector.
     * @constructor 
     */
    static alloc(): Vec2
    /**
     * Retrieves a constant vector with (1, 1) components.
     */
    static one(): Vec2
    /**
     * Retrieves a constant vector with (1, 0) components.
     */
    static xAxis(): Vec2
    /**
     * Retrieves a constant vector with (0, 1) components.
     */
    static yAxis(): Vec2
    /**
     * Retrieves a constant vector with (0, 0) components.
     */
    static zero(): Vec2
}

export interface Vec3 {

    // Owm methods of Graphene-1.0.Graphene.Vec3

    /**
     * Adds each component of the two given vectors.
     * @param b a #graphene_vec3_t
     */
    add(b: Vec3): /* res */ Vec3
    /**
     * Computes the cross product of the two given vectors.
     * @param b a #graphene_vec3_t
     */
    cross(b: Vec3): /* res */ Vec3
    /**
     * Divides each component of the first operand `a` by the corresponding
     * component of the second operand `b,` and places the results into the
     * vector `res`.
     * @param b a #graphene_vec3_t
     */
    divide(b: Vec3): /* res */ Vec3
    /**
     * Computes the dot product of the two given vectors.
     * @param b a #graphene_vec3_t
     */
    dot(b: Vec3): number
    /**
     * Checks whether the two given #graphene_vec3_t are equal.
     * @param v2 a #graphene_vec3_t
     */
    equal(v2: Vec3): boolean
    /**
     * Frees the resources allocated by `v`
     */
    free(): void
    /**
     * Retrieves the first component of the given vector `v`.
     */
    getX(): number
    /**
     * Creates a #graphene_vec2_t that contains the first and second
     * components of the given #graphene_vec3_t.
     */
    getXy(): /* res */ Vec2
    /**
     * Creates a #graphene_vec3_t that contains the first two components of
     * the given #graphene_vec3_t, and the third component set to 0.
     */
    getXy0(): /* res */ Vec3
    /**
     * Converts a #graphene_vec3_t in a #graphene_vec4_t using 0.0
     * as the value for the fourth component of the resulting vector.
     */
    getXyz0(): /* res */ Vec4
    /**
     * Converts a #graphene_vec3_t in a #graphene_vec4_t using 1.0
     * as the value for the fourth component of the resulting vector.
     */
    getXyz1(): /* res */ Vec4
    /**
     * Converts a #graphene_vec3_t in a #graphene_vec4_t using `w` as
     * the value of the fourth component of the resulting vector.
     * @param w the value of the W component
     */
    getXyzw(w: number): /* res */ Vec4
    /**
     * Retrieves the second component of the given vector `v`.
     */
    getY(): number
    /**
     * Retrieves the third component of the given vector `v`.
     */
    getZ(): number
    /**
     * Initializes a #graphene_vec3_t using the given values.
     * 
     * This function can be called multiple times.
     * @param x the X field of the vector
     * @param y the Y field of the vector
     * @param z the Z field of the vector
     */
    init(x: number, y: number, z: number): Vec3
    /**
     * Initializes a #graphene_vec3_t with the values from an array.
     * @param src an array of 3 floating point values
     */
    initFromFloat(src: number[]): Vec3
    /**
     * Initializes a #graphene_vec3_t with the values of another
     * #graphene_vec3_t.
     * @param src a #graphene_vec3_t
     */
    initFromVec3(src: Vec3): Vec3
    /**
     * Linearly interpolates `v1` and `v2` using the given `factor`.
     * @param v2 a #graphene_vec3_t
     * @param factor the interpolation factor
     */
    interpolate(v2: Vec3, factor: number): /* res */ Vec3
    /**
     * Retrieves the length of the given vector `v`.
     */
    length(): number
    /**
     * Compares each component of the two given vectors and creates a
     * vector that contains the maximum values.
     * @param b a #graphene_vec3_t
     */
    max(b: Vec3): /* res */ Vec3
    /**
     * Compares each component of the two given vectors and creates a
     * vector that contains the minimum values.
     * @param b a #graphene_vec3_t
     */
    min(b: Vec3): /* res */ Vec3
    /**
     * Multiplies each component of the two given vectors.
     * @param b a #graphene_vec3_t
     */
    multiply(b: Vec3): /* res */ Vec3
    /**
     * Compares the two given #graphene_vec3_t vectors and checks
     * whether their values are within the given `epsilon`.
     * @param v2 a #graphene_vec3_t
     * @param epsilon the threshold between the two vectors
     */
    near(v2: Vec3, epsilon: number): boolean
    /**
     * Negates the given #graphene_vec3_t.
     */
    negate(): /* res */ Vec3
    /**
     * Normalizes the given #graphene_vec3_t.
     */
    normalize(): /* res */ Vec3
    /**
     * Multiplies all components of the given vector with the given scalar `factor`.
     * @param factor the scalar factor
     */
    scale(factor: number): /* res */ Vec3
    /**
     * Subtracts from each component of the first operand `a` the
     * corresponding component of the second operand `b` and places
     * each result into the components of `res`.
     * @param b a #graphene_vec3_t
     */
    subtract(b: Vec3): /* res */ Vec3
    /**
     * Copies the components of a #graphene_vec3_t into the given array.
     */
    toFloat(): /* dest */ number[]
}

/**
 * A structure capable of holding a vector with three dimensions: x, y, and z.
 * 
 * The contents of the #graphene_vec3_t structure are private and should
 * never be accessed directly.
 * @record 
 */
export class Vec3 {

    // Own properties of Graphene-1.0.Graphene.Vec3

    static name: string

    // Constructors of Graphene-1.0.Graphene.Vec3

    /**
     * Allocates a new #graphene_vec3_t structure.
     * 
     * The contents of the returned structure are undefined.
     * 
     * Use graphene_vec3_init() to initialize the vector.
     * @constructor 
     */
    static alloc(): Vec3
    /**
     * Provides a constant pointer to a vector with three components,
     * all sets to 1.
     */
    static one(): Vec3
    /**
     * Provides a constant pointer to a vector with three components
     * with values set to (1, 0, 0).
     */
    static xAxis(): Vec3
    /**
     * Provides a constant pointer to a vector with three components
     * with values set to (0, 1, 0).
     */
    static yAxis(): Vec3
    /**
     * Provides a constant pointer to a vector with three components
     * with values set to (0, 0, 1).
     */
    static zAxis(): Vec3
    /**
     * Provides a constant pointer to a vector with three components,
     * all sets to 0.
     */
    static zero(): Vec3
}

export interface Vec4 {

    // Owm methods of Graphene-1.0.Graphene.Vec4

    /**
     * Adds each component of the two given vectors.
     * @param b a #graphene_vec4_t
     */
    add(b: Vec4): /* res */ Vec4
    /**
     * Divides each component of the first operand `a` by the corresponding
     * component of the second operand `b,` and places the results into the
     * vector `res`.
     * @param b a #graphene_vec4_t
     */
    divide(b: Vec4): /* res */ Vec4
    /**
     * Computes the dot product of the two given vectors.
     * @param b a #graphene_vec4_t
     */
    dot(b: Vec4): number
    /**
     * Checks whether the two given #graphene_vec4_t are equal.
     * @param v2 a #graphene_vec4_t
     */
    equal(v2: Vec4): boolean
    /**
     * Frees the resources allocated by `v`
     */
    free(): void
    /**
     * Retrieves the value of the fourth component of the given #graphene_vec4_t.
     */
    getW(): number
    /**
     * Retrieves the value of the first component of the given #graphene_vec4_t.
     */
    getX(): number
    /**
     * Creates a #graphene_vec2_t that contains the first two components
     * of the given #graphene_vec4_t.
     */
    getXy(): /* res */ Vec2
    /**
     * Creates a #graphene_vec3_t that contains the first three components
     * of the given #graphene_vec4_t.
     */
    getXyz(): /* res */ Vec3
    /**
     * Retrieves the value of the second component of the given #graphene_vec4_t.
     */
    getY(): number
    /**
     * Retrieves the value of the third component of the given #graphene_vec4_t.
     */
    getZ(): number
    /**
     * Initializes a #graphene_vec4_t using the given values.
     * 
     * This function can be called multiple times.
     * @param x the X field of the vector
     * @param y the Y field of the vector
     * @param z the Z field of the vector
     * @param w the W field of the vector
     */
    init(x: number, y: number, z: number, w: number): Vec4
    /**
     * Initializes a #graphene_vec4_t with the values inside the given array.
     * @param src an array of four floating point values
     */
    initFromFloat(src: number[]): Vec4
    /**
     * Initializes a #graphene_vec4_t using the components of a
     * #graphene_vec2_t and the values of `z` and `w`.
     * @param src a #graphene_vec2_t
     * @param z the value for the third component of `v`
     * @param w the value for the fourth component of `v`
     */
    initFromVec2(src: Vec2, z: number, w: number): Vec4
    /**
     * Initializes a #graphene_vec4_t using the components of a
     * #graphene_vec3_t and the value of `w`.
     * @param src a #graphene_vec3_t
     * @param w the value for the fourth component of `v`
     */
    initFromVec3(src: Vec3, w: number): Vec4
    /**
     * Initializes a #graphene_vec4_t using the components of
     * another #graphene_vec4_t.
     * @param src a #graphene_vec4_t
     */
    initFromVec4(src: Vec4): Vec4
    /**
     * Linearly interpolates `v1` and `v2` using the given `factor`.
     * @param v2 a #graphene_vec4_t
     * @param factor the interpolation factor
     */
    interpolate(v2: Vec4, factor: number): /* res */ Vec4
    /**
     * Computes the length of the given #graphene_vec4_t.
     */
    length(): number
    /**
     * Compares each component of the two given vectors and creates a
     * vector that contains the maximum values.
     * @param b a #graphene_vec4_t
     */
    max(b: Vec4): /* res */ Vec4
    /**
     * Compares each component of the two given vectors and creates a
     * vector that contains the minimum values.
     * @param b a #graphene_vec4_t
     */
    min(b: Vec4): /* res */ Vec4
    /**
     * Multiplies each component of the two given vectors.
     * @param b a #graphene_vec4_t
     */
    multiply(b: Vec4): /* res */ Vec4
    /**
     * Compares the two given #graphene_vec4_t vectors and checks
     * whether their values are within the given `epsilon`.
     * @param v2 a #graphene_vec4_t
     * @param epsilon the threshold between the two vectors
     */
    near(v2: Vec4, epsilon: number): boolean
    /**
     * Negates the given #graphene_vec4_t.
     */
    negate(): /* res */ Vec4
    /**
     * Normalizes the given #graphene_vec4_t.
     */
    normalize(): /* res */ Vec4
    /**
     * Multiplies all components of the given vector with the given scalar `factor`.
     * @param factor the scalar factor
     */
    scale(factor: number): /* res */ Vec4
    /**
     * Subtracts from each component of the first operand `a` the
     * corresponding component of the second operand `b` and places
     * each result into the components of `res`.
     * @param b a #graphene_vec4_t
     */
    subtract(b: Vec4): /* res */ Vec4
    /**
     * Stores the components of the given #graphene_vec4_t into an array
     * of floating point values.
     */
    toFloat(): /* dest */ number[]
}

/**
 * A structure capable of holding a vector with four dimensions: x, y, z, and w.
 * 
 * The contents of the #graphene_vec4_t structure are private and should
 * never be accessed directly.
 * @record 
 */
export class Vec4 {

    // Own properties of Graphene-1.0.Graphene.Vec4

    static name: string

    // Constructors of Graphene-1.0.Graphene.Vec4

    /**
     * Allocates a new #graphene_vec4_t structure.
     * 
     * The contents of the returned structure are undefined.
     * 
     * Use graphene_vec4_init() to initialize the vector.
     * @constructor 
     */
    static alloc(): Vec4
    /**
     * Retrieves a pointer to a #graphene_vec4_t with all its
     * components set to 1.
     */
    static one(): Vec4
    /**
     * Retrieves a pointer to a #graphene_vec4_t with its
     * components set to (0, 0, 0, 1).
     */
    static wAxis(): Vec4
    /**
     * Retrieves a pointer to a #graphene_vec4_t with its
     * components set to (1, 0, 0, 0).
     */
    static xAxis(): Vec4
    /**
     * Retrieves a pointer to a #graphene_vec4_t with its
     * components set to (0, 1, 0, 0).
     */
    static yAxis(): Vec4
    /**
     * Retrieves a pointer to a #graphene_vec4_t with its
     * components set to (0, 0, 1, 0).
     */
    static zAxis(): Vec4
    /**
     * Retrieves a pointer to a #graphene_vec4_t with all its
     * components set to 0.
     */
    static zero(): Vec4
}
