
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GUPnPIgd-1.0
 */

import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

/**
 * Errors coming out of the GUPnPSimpleIGD object.
 */
export enum SimpleIgdError {
    /**
     * Error getting the external
     * address of the router
     */
    SIMPLE_IGD_ERROR_EXTERNAL_ADDRESS,
}
export module SimpleIgd {

    // Signal callback interfaces

    /**
     * Signal callback interface for `context-available`
     */
    export interface ContextAvailableSignalCallback {
        (context: GObject.Object): boolean
    }

    /**
     * Signal callback interface for `error-mapping-port`
     */
    export interface ErrorMappingPortSignalCallback {
        (error: GLib.Error, proto: string, externalPort: number, localIp: string, localPort: number, description: string): void
    }

    /**
     * Signal callback interface for `mapped-external-port`
     */
    export interface MappedExternalPortSignalCallback {
        (proto: string, externalIp: string, replacesExternalIp: string, externalPort: number, localIp: string, localPort: number, description: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SimpleIgd {

    // Own properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd

    readonly mainContext: object

    // Own fields of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd

    parent: GObject.Object

    // Owm methods of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd

    /**
     * This adds a port to the router's forwarding table. The mapping will
     * be automatically refreshed by this object until it is either
     * removed with gupnp_simple_igd_remove_port(),
     * gupnp_simple_igd_remove_port_local() or the object disapears.
     * 
     * If there is a problem, the #GUPnPSimpleIgd::error-mapping-port signal will
     * be emitted. If a router is found and a port is mapped correctly,
     * #GUPnPSimpleIgd::mapped-external-port will be emitted. These signals may
     * be emitted multiple times if there are multiple routers present.
     * @param protocol the protocol "UDP" or "TCP"
     * @param externalPort The port to try to open on the external device,   0 means to try a random port if the same port as the local port is already   taken
     * @param localIp The IP address to forward packets to (most likely the local ip address)
     * @param localPort The local port to forward packets to
     * @param leaseDuration The duration of the lease (it will be auto-renewed before it expires). This is in seconds.
     * @param description The description that will appear in the router's table
     */
    addPort(protocol: string, externalPort: number, localIp: string, localPort: number, leaseDuration: number, description: string): void
    /**
     * Removes all mappings and prevents other from being formed
     * Should only be called by the dispose function of subclasses
     */
    deleteAllMappings(): boolean
    /**
     * This tries to remove a port entry from the routers that was previously added
     * with gupnp_simple_igd_add_port(). There is no indicated of success or failure
     * it is a best effort mechanism. If it fails, the bindings will disapears after
     * the lease duration set when the port where added.
     * @param protocol the protocol "UDP" or "TCP" as given to  gupnp_simple_igd_add_port()
     * @param externalPort The port to try to open on the external device as given to  gupnp_simple_igd_add_port()
     */
    removePort(protocol: string, externalPort: number): void
    /**
     * This tries to remove a port entry from the routers that was previously added
     * with gupnp_simple_igd_add_port(). There is no indicated of success or failure
     * it is a best effort mechanism. If it fails, the bindings will disapears after
     * the lease duration set when the port where added.
     * @param protocol the protocol "UDP" or "TCP" as given to  gupnp_simple_igd_add_port()
     * @param localIp The local ip on the internal device as was to  gupnp_simple_igd_add_port()
     * @param localPort The port to try to open on the internal device as given to  gupnp_simple_igd_add_port()
     */
    removePortLocal(protocol: string, localIp: string, localPort: number): void

    // Own signals of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd

    connect(sigName: "context-available", callback: SimpleIgd.ContextAvailableSignalCallback): number
    on(sigName: "context-available", callback: SimpleIgd.ContextAvailableSignalCallback): number
    once(sigName: "context-available", callback: SimpleIgd.ContextAvailableSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "context-available", ...args: any[]): void
    connect(sigName: "error-mapping-port", callback: SimpleIgd.ErrorMappingPortSignalCallback): number
    on(sigName: "error-mapping-port", callback: SimpleIgd.ErrorMappingPortSignalCallback): number
    once(sigName: "error-mapping-port", callback: SimpleIgd.ErrorMappingPortSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "error-mapping-port", proto: string, externalPort: number, localIp: string, localPort: number, description: string, ...args: any[]): void
    connect(sigName: "mapped-external-port", callback: SimpleIgd.MappedExternalPortSignalCallback): number
    on(sigName: "mapped-external-port", callback: SimpleIgd.MappedExternalPortSignalCallback): number
    once(sigName: "mapped-external-port", callback: SimpleIgd.MappedExternalPortSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "mapped-external-port", externalIp: string, replacesExternalIp: string, externalPort: number, localIp: string, localPort: number, description: string, ...args: any[]): void

    // Class property signals of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd

    connect(sigName: "notify::main-context", callback: any): number
    on(sigName: "notify::main-context", callback: any): number
    once(sigName: "notify::main-context", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All members are private, access them using methods and properties
 * @class 
 */
export class SimpleIgd extends GObject.Object {

    // Own properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd

    static name: string

    // Constructors of GUPnPIgd-1.0.GUPnPIgd.SimpleIgd

    constructor(config?: SimpleIgd.ConstructorProperties) 
    /**
     * main context)
     * This creates a new #GUPnpSimpleIgd object using the special GMainContext
     * @constructor 
     */
    constructor() 
    /**
     * main context)
     * This creates a new #GUPnpSimpleIgd object using the special GMainContext
     * @constructor 
     */
    static new(): SimpleIgd
    _init(config?: SimpleIgd.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module SimpleIgdThread {

    // Constructor properties interface

    export interface ConstructorProperties extends SimpleIgd.ConstructorProperties {
    }

}

export interface SimpleIgdThread {

    // Own fields of GUPnPIgd-1.0.GUPnPIgd.SimpleIgdThread

    parent: SimpleIgd & GObject.Object

    // Class property signals of GUPnPIgd-1.0.GUPnPIgd.SimpleIgdThread

    connect(sigName: "notify::main-context", callback: any): number
    on(sigName: "notify::main-context", callback: any): number
    once(sigName: "notify::main-context", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All members are private, access them using methods and properties
 * @class 
 */
export class SimpleIgdThread extends SimpleIgd {

    // Own properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgdThread

    static name: string

    // Constructors of GUPnPIgd-1.0.GUPnPIgd.SimpleIgdThread

    constructor(config?: SimpleIgdThread.ConstructorProperties) 
    /**
     * Creates a new #GUPnPSimpleIgdThread
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GUPnPSimpleIgdThread
     * @constructor 
     */
    static new(): SimpleIgdThread

    // Overloads of new

    /**
     * main context)
     * This creates a new #GUPnpSimpleIgd object using the special GMainContext
     * @constructor 
     */
    static new(): SimpleIgd
    _init(config?: SimpleIgdThread.ConstructorProperties): void
}

export interface SimpleIgdClass {
}

export abstract class SimpleIgdClass {

    // Own properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgdClass

    static name: string
}

export interface SimpleIgdPrivate {
}

export class SimpleIgdPrivate {

    // Own properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgdPrivate

    static name: string
}

export interface SimpleIgdThreadClass {
}

/**
 * The Raw UDP component transmitter class
 * @record 
 */
export abstract class SimpleIgdThreadClass {

    // Own properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgdThreadClass

    static name: string
}

export interface SimpleIgdThreadPrivate {
}

export class SimpleIgdThreadPrivate {

    // Own properties of GUPnPIgd-1.0.GUPnPIgd.SimpleIgdThreadPrivate

    static name: string
}
