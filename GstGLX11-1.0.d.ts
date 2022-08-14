
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstGLX11-1.0
 */

import type * as GstVideo from './GstVideo-1.0.js';
import type * as GstBase from './GstBase-1.0.js';
import type * as Gst from './Gst-1.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as GstGL from './GstGL-1.0.js';

export module GLDisplayX11 {

    // Constructor properties interface

    export interface ConstructorProperties extends GstGL.GLDisplay.ConstructorProperties {
    }

}

export interface GLDisplayX11 {

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

    // Class property signals of GstGLX11-1.0.GstGLX11.GLDisplayX11

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * the contents of a #GstGLDisplayX11 are private and should only be accessed
 * through the provided API
 * @class 
 */
export class GLDisplayX11 extends GstGL.GLDisplay {

    // Own properties of GstGLX11-1.0.GstGLX11.GLDisplayX11

    static name: string

    // Constructors of GstGLX11-1.0.GstGLX11.GLDisplayX11

    constructor(config?: GLDisplayX11.ConstructorProperties) 
    /**
     * Create a new #GstGLDisplayX11 from the x11 display name.  See `XOpenDisplay`()
     * for details on what is a valid name.
     * @constructor 
     * @param name a display name
     */
    constructor(name: string | null) 
    /**
     * Create a new #GstGLDisplayX11 from the x11 display name.  See `XOpenDisplay`()
     * for details on what is a valid name.
     * @constructor 
     * @param name a display name
     */
    static new(name: string | null): GLDisplayX11

    // Overloads of new

    static new(): GstGL.GLDisplay
    _init(config?: GLDisplayX11.ConstructorProperties): void
}

export interface GLDisplayX11Class {

    // Own fields of GstGLX11-1.0.GstGLX11.GLDisplayX11Class

    objectClass: GstGL.GLDisplayClass
    padding: object[]
}

export abstract class GLDisplayX11Class {

    // Own properties of GstGLX11-1.0.GstGLX11.GLDisplayX11Class

    static name: string
}
