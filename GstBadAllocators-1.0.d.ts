
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstBadAllocators-1.0
 */

import type * as Gst from './Gst-1.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as GModule from './GModule-2.0.js';

export function isPhysMemory(mem: Gst.Memory): boolean
export function physMemoryGetPhysAddr(mem: Gst.Memory): number
export module PhysMemoryAllocator {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Allocator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface PhysMemoryAllocator extends Gst.Allocator {

    // Conflicting properties

    object: any

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

    // Own virtual methods of GstBadAllocators-1.0.GstBadAllocators.PhysMemoryAllocator

    getPhysAddr(mem: Gst.Memory): number

    // Class property signals of GstBadAllocators-1.0.GstBadAllocators.PhysMemoryAllocator

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PhysMemoryAllocator extends GObject.Object {

    // Own properties of GstBadAllocators-1.0.GstBadAllocators.PhysMemoryAllocator

    static name: string

    // Constructors of GstBadAllocators-1.0.GstBadAllocators.PhysMemoryAllocator

    constructor(config?: PhysMemoryAllocator.ConstructorProperties) 
    _init(config?: PhysMemoryAllocator.ConstructorProperties): void
}

export interface PhysMemoryAllocatorInterface {

    // Own fields of GstBadAllocators-1.0.GstBadAllocators.PhysMemoryAllocatorInterface

    parentIface: GObject.TypeInterface
    getPhysAddr: (allocator: PhysMemoryAllocator, mem: Gst.Memory) => number
}

/**
 * Marker interface for allocators with physical address backed memory
 * @record 
 */
export abstract class PhysMemoryAllocatorInterface {

    // Own properties of GstBadAllocators-1.0.GstBadAllocators.PhysMemoryAllocatorInterface

    static name: string
}
