
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GjsDBus-1.0
 */

import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

export module Implementation {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-method-call`
     */
    export interface HandleMethodCallSignalCallback {
        (object: string, p0: GLib.Variant, p1: Gio.DBusMethodInvocation): void
    }

    /**
     * Signal callback interface for `handle-property-get`
     */
    export interface HandlePropertyGetSignalCallback {
        (object: string): GLib.Variant
    }

    /**
     * Signal callback interface for `handle-property-set`
     */
    export interface HandlePropertySetSignalCallback {
        (object: string, p0: GLib.Variant): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {

        // Own constructor properties of GjsDBus-1.0.GjsDBus.Implementation

        gInterfaceInfo?: Gio.DBusInterfaceInfo | null
    }

}

export interface Implementation extends Gio.DBusInterface {

    // Own properties of GjsDBus-1.0.GjsDBus.Implementation

    readonly gInterfaceInfo: Gio.DBusInterfaceInfo

    // Own fields of GjsDBus-1.0.GjsDBus.Implementation

    parent: Gio.DBusInterfaceSkeleton
    priv: ImplementationPrivate

    // Owm methods of GjsDBus-1.0.GjsDBus.Implementation

    /**
     * Queue a PropertyChanged signal for emission, or update the one queued
     * adding `property`
     * @param property the name of the property that changed
     * @param newvalue the new value, or %NULL to just invalidate it
     */
    emitPropertyChanged(property: string, newvalue?: GLib.Variant | null): void
    /**
     * Emits a signal named `signal_name` from the object and interface represented
     * by `self`. This signal has no destination.
     * @param signalName the name of the signal
     * @param parameters signal parameters, or %NULL for none
     */
    emitSignal(signalName: string, parameters?: GLib.Variant | null): void

    // Conflicting methods

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     */
    getInfo(): Gio.DBusInterfaceInfo
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Overloads of getInfo

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Own signals of GjsDBus-1.0.GjsDBus.Implementation

    connect(sigName: "handle-method-call", callback: Implementation.HandleMethodCallSignalCallback): number
    on(sigName: "handle-method-call", callback: Implementation.HandleMethodCallSignalCallback): number
    once(sigName: "handle-method-call", callback: Implementation.HandleMethodCallSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "handle-method-call", p0: GLib.Variant, p1: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-property-get", callback: Implementation.HandlePropertyGetSignalCallback): number
    on(sigName: "handle-property-get", callback: Implementation.HandlePropertyGetSignalCallback): number
    once(sigName: "handle-property-get", callback: Implementation.HandlePropertyGetSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "handle-property-get", ...args: any[]): void
    connect(sigName: "handle-property-set", callback: Implementation.HandlePropertySetSignalCallback): number
    on(sigName: "handle-property-set", callback: Implementation.HandlePropertySetSignalCallback): number
    once(sigName: "handle-property-set", callback: Implementation.HandlePropertySetSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "handle-property-set", p0: GLib.Variant, ...args: any[]): void

    // Class property signals of GjsDBus-1.0.GjsDBus.Implementation

    connect(sigName: "notify::g-interface-info", callback: any): number
    on(sigName: "notify::g-interface-info", callback: any): number
    once(sigName: "notify::g-interface-info", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Implementation extends Gio.DBusInterfaceSkeleton {

    // Own properties of GjsDBus-1.0.GjsDBus.Implementation

    static name: string

    // Constructors of GjsDBus-1.0.GjsDBus.Implementation

    constructor(config?: Implementation.ConstructorProperties) 
    _init(config?: Implementation.ConstructorProperties): void
}

export interface ImplementationClass {

    // Own fields of GjsDBus-1.0.GjsDBus.ImplementationClass

    parentClass: Gio.DBusInterfaceSkeletonClass
}

export abstract class ImplementationClass {

    // Own properties of GjsDBus-1.0.GjsDBus.ImplementationClass

    static name: string
}

export interface ImplementationPrivate {
}

export class ImplementationPrivate {

    // Own properties of GjsDBus-1.0.GjsDBus.ImplementationPrivate

    static name: string
}
