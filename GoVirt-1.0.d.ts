
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GoVirt-1.0
 */

import type * as Rest from './Rest-0.7.js';
import type * as Soup from './Soup-2.4.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

export enum ProxyError {
    PARSING_FAILED,
    ACTION_FAILED,
    FAULT,
}
export enum RestCallError {
    XML,
}
export enum VmDisplayType {
    SPICE,
    VNC,
}
export enum VmState {
    DOWN,
    UP,
    REBOOTING,
}
export function proxyErrorQuark(): GLib.Quark
export function restCallErrorQuark(): GLib.Quark
export module Proxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Rest.Proxy.ConstructorProperties {

        // Own constructor properties of GoVirt-1.0.GoVirt.Proxy

        admin?: boolean | null
        caCert?: object[] | null
    }

}

export interface Proxy {

    // Own properties of GoVirt-1.0.GoVirt.Proxy

    admin: boolean
    caCert: object[]

    // Own fields of GoVirt-1.0.GoVirt.Proxy

    parent: Rest.Proxy & GObject.Object
    priv: ProxyPrivate

    // Owm methods of GoVirt-1.0.GoVirt.Proxy

    fetchCaCertificate(): boolean
    fetchCaCertificateAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    fetchCaCertificateFinish(result: Gio.AsyncResult): Uint8Array
    fetchVms(): boolean
    fetchVmsAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    fetchVmsFinish(result: Gio.AsyncResult): Vm[]
    /**
     * Gets the list of remote VMs from the proxy object.
     * This method does not initiate any network activity, the remote VM list
     * must have been fetched with ovirt_proxy_fetch_vms() or
     * ovirt_proxy_fetch_vms_async() before calling this function.
     */
    getVms(): Vm[]
    /**
     * Looks up a virtual machine whose name is `name`. If it cannot be found,
     * NULL is returned. This method does not initiate any network activity,
     * the remote VM list must have been fetched with ovirt_proxy_fetch_vms()
     * or ovirt_proxy_fetch_vms_async() before calling this function.
     * @param vmName name of the virtual machine to lookup
     */
    lookupVm(vmName: string): Vm

    // Class property signals of GoVirt-1.0.GoVirt.Proxy

    connect(sigName: "notify::admin", callback: any): number
    on(sigName: "notify::admin", callback: any): number
    once(sigName: "notify::admin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::admin", ...args: any[]): void
    connect(sigName: "notify::ca-cert", callback: any): number
    on(sigName: "notify::ca-cert", callback: any): number
    once(sigName: "notify::ca-cert", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ca-cert", ...args: any[]): void
    connect(sigName: "notify::binding-required", callback: any): number
    on(sigName: "notify::binding-required", callback: any): number
    once(sigName: "notify::binding-required", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::binding-required", ...args: any[]): void
    connect(sigName: "notify::disable-cookies", callback: any): number
    on(sigName: "notify::disable-cookies", callback: any): number
    once(sigName: "notify::disable-cookies", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::disable-cookies", ...args: any[]): void
    connect(sigName: "notify::password", callback: any): number
    on(sigName: "notify::password", callback: any): number
    once(sigName: "notify::password", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::ssl-ca-file", callback: any): number
    on(sigName: "notify::ssl-ca-file", callback: any): number
    once(sigName: "notify::ssl-ca-file", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ssl-ca-file", ...args: any[]): void
    connect(sigName: "notify::ssl-strict", callback: any): number
    on(sigName: "notify::ssl-strict", callback: any): number
    once(sigName: "notify::ssl-strict", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ssl-strict", ...args: any[]): void
    connect(sigName: "notify::url-format", callback: any): number
    on(sigName: "notify::url-format", callback: any): number
    once(sigName: "notify::url-format", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::url-format", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: any): number
    on(sigName: "notify::user-agent", callback: any): number
    once(sigName: "notify::user-agent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: "notify::username", callback: any): number
    on(sigName: "notify::username", callback: any): number
    once(sigName: "notify::username", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Proxy extends Rest.Proxy {

    // Own properties of GoVirt-1.0.GoVirt.Proxy

    static name: string

    // Constructors of GoVirt-1.0.GoVirt.Proxy

    constructor(config?: Proxy.ConstructorProperties) 
    constructor(uri: string) 
    static new(uri: string): Proxy

    // Overloads of new

    /**
     * Create a new #RestProxy for the specified endpoint `url_format,` using the
     * "GET" method.
     * 
     * Set `binding_required` to %TRUE if the URL contains string formatting
     * operations (for example "http://foo.com/%<!-- -->s".  These must be expanded
     * using rest_proxy_bind() before invoking the proxy.
     * @constructor 
     * @param urlFormat the endpoint URL
     * @param bindingRequired whether the URL needs to be bound before calling
     */
    static new(urlFormat: string, bindingRequired: boolean): Rest.Proxy
    _init(config?: Proxy.ConstructorProperties): void
}

export module Vm {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GoVirt-1.0.GoVirt.Vm

        display?: VmDisplay | null
        href?: string | null
        name?: string | null
        state?: VmState | null
        uuid?: string | null
    }

}

export interface Vm {

    // Own properties of GoVirt-1.0.GoVirt.Vm

    display: VmDisplay
    href: string
    name: string
    state: VmState
    uuid: string

    // Own fields of GoVirt-1.0.GoVirt.Vm

    parent: GObject.Object
    priv: VmPrivate

    // Owm methods of GoVirt-1.0.GoVirt.Vm

    getTicket(proxy: Proxy): boolean
    getTicketAsync(proxy: Proxy, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getTicketFinish(result: Gio.AsyncResult): boolean
    start(proxy: Proxy): boolean
    startAsync(proxy: Proxy, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    startFinish(result: Gio.AsyncResult): boolean
    stop(proxy: Proxy): boolean
    stopAsync(proxy: Proxy, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    stopFinish(result: Gio.AsyncResult): boolean

    // Class property signals of GoVirt-1.0.GoVirt.Vm

    connect(sigName: "notify::display", callback: any): number
    on(sigName: "notify::display", callback: any): number
    once(sigName: "notify::display", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::href", callback: any): number
    on(sigName: "notify::href", callback: any): number
    once(sigName: "notify::href", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::href", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::uuid", callback: any): number
    on(sigName: "notify::uuid", callback: any): number
    once(sigName: "notify::uuid", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uuid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Vm extends GObject.Object {

    // Own properties of GoVirt-1.0.GoVirt.Vm

    static name: string

    // Constructors of GoVirt-1.0.GoVirt.Vm

    constructor(config?: Vm.ConstructorProperties) 
    constructor() 
    static new(): Vm
    _init(config?: Vm.ConstructorProperties): void
}

export module VmDisplay {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GoVirt-1.0.GoVirt.VmDisplay

        address?: string | null
        expiry?: number | null
        monitorCount?: number | null
        port?: number | null
        securePort?: number | null
        ticket?: string | null
        type?: VmDisplayType | null
    }

}

export interface VmDisplay {

    // Own properties of GoVirt-1.0.GoVirt.VmDisplay

    address: string
    expiry: number
    monitorCount: number
    port: number
    securePort: number
    ticket: string
    type: VmDisplayType

    // Own fields of GoVirt-1.0.GoVirt.VmDisplay

    parent: GObject.Object
    priv: VmDisplayPrivate

    // Class property signals of GoVirt-1.0.GoVirt.VmDisplay

    connect(sigName: "notify::address", callback: any): number
    on(sigName: "notify::address", callback: any): number
    once(sigName: "notify::address", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::address", ...args: any[]): void
    connect(sigName: "notify::expiry", callback: any): number
    on(sigName: "notify::expiry", callback: any): number
    once(sigName: "notify::expiry", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expiry", ...args: any[]): void
    connect(sigName: "notify::monitor-count", callback: any): number
    on(sigName: "notify::monitor-count", callback: any): number
    once(sigName: "notify::monitor-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::monitor-count", ...args: any[]): void
    connect(sigName: "notify::port", callback: any): number
    on(sigName: "notify::port", callback: any): number
    once(sigName: "notify::port", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::secure-port", callback: any): number
    on(sigName: "notify::secure-port", callback: any): number
    once(sigName: "notify::secure-port", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secure-port", ...args: any[]): void
    connect(sigName: "notify::ticket", callback: any): number
    on(sigName: "notify::ticket", callback: any): number
    once(sigName: "notify::ticket", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ticket", ...args: any[]): void
    connect(sigName: "notify::type", callback: any): number
    on(sigName: "notify::type", callback: any): number
    once(sigName: "notify::type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class VmDisplay extends GObject.Object {

    // Own properties of GoVirt-1.0.GoVirt.VmDisplay

    static name: string

    // Constructors of GoVirt-1.0.GoVirt.VmDisplay

    constructor(config?: VmDisplay.ConstructorProperties) 
    constructor() 
    static new(): VmDisplay
    _init(config?: VmDisplay.ConstructorProperties): void
}

export interface ProxyClass {

    // Own fields of GoVirt-1.0.GoVirt.ProxyClass

    parentClass: Rest.ProxyClass
}

export abstract class ProxyClass {

    // Own properties of GoVirt-1.0.GoVirt.ProxyClass

    static name: string
}

export interface ProxyPrivate {
}

export class ProxyPrivate {

    // Own properties of GoVirt-1.0.GoVirt.ProxyPrivate

    static name: string
}

export interface VmClass {

    // Own fields of GoVirt-1.0.GoVirt.VmClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class VmClass {

    // Own properties of GoVirt-1.0.GoVirt.VmClass

    static name: string
}

export interface VmDisplayClass {

    // Own fields of GoVirt-1.0.GoVirt.VmDisplayClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class VmDisplayClass {

    // Own properties of GoVirt-1.0.GoVirt.VmDisplayClass

    static name: string
}

export interface VmDisplayPrivate {
}

export class VmDisplayPrivate {

    // Own properties of GoVirt-1.0.GoVirt.VmDisplayPrivate

    static name: string
}

export interface VmPrivate {
}

export class VmPrivate {

    // Own properties of GoVirt-1.0.GoVirt.VmPrivate

    static name: string
}
