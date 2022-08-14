
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstGLWayland-1.0
 */

import type * as GstVideo from './GstVideo-1.0.js';
import type * as GstBase from './GstBase-1.0.js';
import type * as Gst from './Gst-1.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as GstGL from './GstGL-1.0.js';

export module GLDisplayWayland {

    // Constructor properties interface

    export interface ConstructorProperties extends GstGL.GLDisplay.ConstructorProperties {
    }

}

export interface GLDisplayWayland {

    // Own fields of GstGLWayland-1.0.GstGLWayland.GLDisplayWayland

    parent: GstGL.GLDisplay & Gst.Object
    display: object
    registry: object
    compositor: object
    subcompositor: object
    shell: object

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object

    // Class property signals of GstGLWayland-1.0.GstGLWayland.GLDisplayWayland

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * the contents of a #GstGLDisplayWayland are private and should only be accessed
 * through the provided API
 * @class 
 */
export class GLDisplayWayland extends GstGL.GLDisplay {

    // Own properties of GstGLWayland-1.0.GstGLWayland.GLDisplayWayland

    static name: string

    // Constructors of GstGLWayland-1.0.GstGLWayland.GLDisplayWayland

    constructor(config?: GLDisplayWayland.ConstructorProperties) 
    /**
     * Create a new #GstGLDisplayWayland from the wayland display name.  See `wl_display_connect`()
     * for details on what is a valid name.
     * @constructor 
     * @param name a display name
     */
    constructor(name: string | null) 
    /**
     * Create a new #GstGLDisplayWayland from the wayland display name.  See `wl_display_connect`()
     * for details on what is a valid name.
     * @constructor 
     * @param name a display name
     */
    static new(name: string | null): GLDisplayWayland

    // Overloads of new

    static new(): GstGL.GLDisplay
    /**
     * Creates a new display connection from a wl_display Display.
     * @constructor 
     * @param display an existing, wayland display
     */
    static newWithDisplay(display: object | null): GLDisplayWayland
    _init(config?: GLDisplayWayland.ConstructorProperties): void
}

export interface GLDisplayWaylandClass {

    // Own fields of GstGLWayland-1.0.GstGLWayland.GLDisplayWaylandClass

    objectClass: GstGL.GLDisplayClass
    padding: object[]
}

export abstract class GLDisplayWaylandClass {

    // Own properties of GstGLWayland-1.0.GstGLWayland.GLDisplayWaylandClass

    static name: string
}
