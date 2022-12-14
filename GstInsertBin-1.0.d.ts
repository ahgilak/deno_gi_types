
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstInsertBin-1.0
 */

import type * as Gst from './Gst-1.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as GModule from './GModule-2.0.js';

/**
 * This is the prototype of callbacks to be called when the operation completes.
 * It could be called at any time, including as a re-entrant call while the
 * operation is requested.
 * @callback 
 * @param insertbin A #GstInsertBin
 * @param element The #GstElement on which the operation was performed
 * @param success %TRUE if the operation was successful
 */
export interface InsertBinCallback {
    (insertbin: InsertBin, element: Gst.Element, success: boolean): void
}
export module InsertBin {

    // Signal callback interfaces

    /**
     * Signal callback interface for `append`
     */
    export interface AppendSignalCallback {
        (callback: Gst.Element, userData: object | null, userData2: object | null): void
    }

    /**
     * Signal callback interface for `insert-after`
     */
    export interface InsertAfterSignalCallback {
        (sibling: Gst.Element, callback: Gst.Element, userData: object | null, userData2: object | null): void
    }

    /**
     * Signal callback interface for `insert-before`
     */
    export interface InsertBeforeSignalCallback {
        (sibling: Gst.Element, callback: Gst.Element, userData: object | null, userData2: object | null): void
    }

    /**
     * Signal callback interface for `prepend`
     */
    export interface PrependSignalCallback {
        (callback: Gst.Element, userData: object | null, userData2: object | null): void
    }

    /**
     * Signal callback interface for `remove`
     */
    export interface RemoveSignalCallback {
        (callback: Gst.Element, userData: object | null, userData2: object | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gst.ChildProxy.ConstructorProperties, Gst.Bin.ConstructorProperties {
    }

}

export interface InsertBin extends Gst.ChildProxy {

    // Conflicting properties

    object: any

    // Own fields of GstInsertBin-1.0.GstInsertBin.InsertBin

    parent: Gst.Bin & Gst.Object

    // Owm methods of GstInsertBin-1.0.GstInsertBin.InsertBin

    /**
     * This action signal adds the filter like element after any other element
     * in the bin.
     * 
     * Same as the #GstInsertBin::append signal.
     * @param element the #GstElement to add
     * @param callback the callback to call when the element has been  added or not, or %NULL
     */
    append(element: Gst.Element, callback: InsertBinCallback): void
    /**
     * This action signal adds the filter like element after the `sibling`
     * element in the bin.
     * 
     * Same as the #GstInsertBin::insert-after signal.
     * @param element the #GstElement to add
     * @param sibling the #GstElement to add `element` after
     * @param callback the callback to call when the element has been  added or not, or %NULL
     */
    insertAfter(element: Gst.Element, sibling: Gst.Element, callback: InsertBinCallback): void
    /**
     * This action signal adds the filter like element before the `sibling`
     * element in the bin.
     * 
     * Same as the #GstInsertBin::insert-before signal.
     * @param element the #GstElement to add
     * @param sibling the #GstElement to add `element` before
     * @param callback the callback to call when the element has been  added or not, or %NULL
     */
    insertBefore(element: Gst.Element, sibling: Gst.Element, callback: InsertBinCallback): void
    /**
     * This action signal adds the filter like element before any other element
     * in the bin.
     * 
     * Same as the #GstInsertBin::prepend signal.
     * @param element the #GstElement to add
     * @param callback the callback to call when the element has been  added or not, or %NULL
     */
    prepend(element: Gst.Element, callback: InsertBinCallback): void
    /**
     * This action signal removed the filter like element from the bin.
     * 
     * Same as the #GstInsertBin::remove signal.
     * @param element the #GstElement to remove
     * @param callback the callback to call when the element has been  removed or not, or %NULL
     */
    remove(element: Gst.Element, callback: InsertBinCallback): void

    // Overloads of remove

    /**
     * Removes the element from the bin, unparenting it as well.
     * Unparenting the element means that the element will be dereferenced,
     * so if the bin holds the only reference to the element, the element
     * will be freed in the process of removing it from the bin.  If you
     * want the element to still exist after removing, you need to call
     * gst_object_ref() before removing it from the bin.
     * 
     * If the element's pads are linked to other pads, the pads will be unlinked
     * before the element is removed from the bin.
     * @param element the #GstElement to remove
     */
    remove(element: Gst.Element): boolean

    // Conflicting methods

    /**
     * Gets a single property using the GstChildProxy mechanism.
     * You are responsible for freeing it by calling g_value_unset()
     * @param name name of the property
     */
    getProperty(name: string): /* value */ any

    // Overloads of getProperty

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Sets a single property using the GstChildProxy mechanism.
     * @param name name of the property to set
     * @param value new #GValue for the property
     */
    setProperty(name: string, value: any): void

    // Overloads of setProperty

    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty<T = any>(propertyName: string, value: T): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty<T = any>(propertyName: string, value: T): void
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

    // Own signals of GstInsertBin-1.0.GstInsertBin.InsertBin

    connect(sigName: "append", callback: InsertBin.AppendSignalCallback): number
    on(sigName: "append", callback: InsertBin.AppendSignalCallback): number
    once(sigName: "append", callback: InsertBin.AppendSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "append", userData: object | null, userData2: object | null, ...args: any[]): void
    connect(sigName: "insert-after", callback: InsertBin.InsertAfterSignalCallback): number
    on(sigName: "insert-after", callback: InsertBin.InsertAfterSignalCallback): number
    once(sigName: "insert-after", callback: InsertBin.InsertAfterSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "insert-after", callback: Gst.Element, userData: object | null, userData2: object | null, ...args: any[]): void
    connect(sigName: "insert-before", callback: InsertBin.InsertBeforeSignalCallback): number
    on(sigName: "insert-before", callback: InsertBin.InsertBeforeSignalCallback): number
    once(sigName: "insert-before", callback: InsertBin.InsertBeforeSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "insert-before", callback: Gst.Element, userData: object | null, userData2: object | null, ...args: any[]): void
    connect(sigName: "prepend", callback: InsertBin.PrependSignalCallback): number
    on(sigName: "prepend", callback: InsertBin.PrependSignalCallback): number
    once(sigName: "prepend", callback: InsertBin.PrependSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "prepend", userData: object | null, userData2: object | null, ...args: any[]): void
    connect(sigName: "remove", callback: InsertBin.RemoveSignalCallback): number
    on(sigName: "remove", callback: InsertBin.RemoveSignalCallback): number
    once(sigName: "remove", callback: InsertBin.RemoveSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "remove", userData: object | null, userData2: object | null, ...args: any[]): void

    // Class property signals of GstInsertBin-1.0.GstInsertBin.InsertBin

    connect(sigName: "notify::async-handling", callback: any): number
    on(sigName: "notify::async-handling", callback: any): number
    once(sigName: "notify::async-handling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::async-handling", ...args: any[]): void
    connect(sigName: "notify::message-forward", callback: any): number
    on(sigName: "notify::message-forward", callback: any): number
    once(sigName: "notify::message-forward", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::message-forward", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * This element is a #GstBin that has a single source and sink pad. It allows
 * the user (the application) to easily add and remove filter-like element
 * (that has a single source and sink pad), to the pipeline while it is running.
 * It features a fully asynchronous API inspired by GLib's GAsyncResult based
 * APIs.
 * 
 * Each operation (addition or removal) can take a callback, this callback
 * is guaranteed to be called. Unlike GIO, there is no guarantee about where
 * this callback will be called from, it could be called before the action
 * returns or it could be called later from another thread. The signature of
 * this callback GstInsertBinCallback().
 * @class 
 */
export class InsertBin extends Gst.Bin {

    // Own properties of GstInsertBin-1.0.GstInsertBin.InsertBin

    static name: string

    // Constructors of GstInsertBin-1.0.GstInsertBin.InsertBin

    constructor(config?: InsertBin.ConstructorProperties) 
    /**
     * Creates a new #GstInsertBin
     * @constructor 
     * @param name The name of the new #GstInsertBin element (or %NULL)
     */
    constructor(name: string | null) 
    /**
     * Creates a new #GstInsertBin
     * @constructor 
     * @param name The name of the new #GstInsertBin element (or %NULL)
     */
    static new(name: string | null): InsertBin
    _init(config?: InsertBin.ConstructorProperties): void
}

export interface InsertBinClass {

    // Own fields of GstInsertBin-1.0.GstInsertBin.InsertBinClass

    parentClass: Gst.BinClass
}

/**
 * The object class structure.
 * @record 
 */
export abstract class InsertBinClass {

    // Own properties of GstInsertBin-1.0.GstInsertBin.InsertBinClass

    static name: string
}

export interface InsertBinPrivate {
}

export class InsertBinPrivate {

    // Own properties of GstInsertBin-1.0.GstInsertBin.InsertBinPrivate

    static name: string
}
