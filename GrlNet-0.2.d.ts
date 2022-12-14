
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GrlNet-0.2
 */

import type * as Soup from './Soup-2.4.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

/**
 * These constants identify all the available errors managed by
 * the web client.
 */
export enum WcError {
    /**
     * TBD
     */
    UNAVAILABLE,
    /**
     * Invalid URI or header
     */
    PROTOCOL_ERROR,
    /**
     * Required authentication
     */
    AUTHENTICATION_REQUIRED,
    /**
     * Request resource not found
     */
    NOT_FOUND,
    /**
     * The entry has been modified since is was
     * downloaded
     */
    CONFLICT,
    /**
     * TBD
     */
    FORBIDDEN,
    /**
     * Cannot connect to the server
     */
    NETWORK_ERROR,
    /**
     * Cannot connect to the proxy server
     */
    PROXY_ERROR,
    /**
     * The operation has been cancelled (see #GCancellable)
     */
    CANCELLED,
}
export module Wc {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GrlNet-0.2.GrlNet.Wc

        cache?: boolean | null
        cacheSize?: number | null
        loglevel?: number | null
        throttling?: number | null
        userAgent?: string | null
    }

}

export interface Wc {

    // Own properties of GrlNet-0.2.GrlNet.Wc

    cache: boolean
    cacheSize: number
    loglevel: number
    throttling: number
    userAgent: string

    // Own fields of GrlNet-0.2.GrlNet.Wc

    /**
     * the parent object struct
     * @field 
     */
    parent: GObject.Object

    // Owm methods of GrlNet-0.2.GrlNet.Wc

    /**
     * This method will flush all the pending request in the queue.
     */
    flushDelayedRequests(): void
    /**
     * Request the fetching of a web resource given the `uri`. This request is
     * asynchronous, thus the result will be returned within the `callback`.
     * @param uri The URI of the resource to request
     * @param cancellable a #GCancellable instance or %NULL to ignore
     * @param callback The callback when the result is ready
     */
    requestAsync(uri: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous load of the file's contents.
     * The contents are placed in contents, and length is set to the size of the
     * contents string.
     * 
     * The content address will be invalidated at the next request. So if you
     * want to keep it, please copy it into another address.
     * @param result The result of the request
     */
    requestFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* content */ string, /* length */ number ]
    /**
     * Request the fetching of a web resource given the `uri`. This request is
     * asynchronous, thus the result will be returned within the `callback`.
     * @param uri The URI of the resource to request
     * @param headers a set of additional HTTP headers for this request or %NULL to ignore
     * @param cancellable a #GCancellable instance or %NULL to ignore
     * @param callback The callback when the result is ready
     */
    requestWithHeadersAsync(uri: string, headers: GLib.HashTable | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Sets if cache must be used. Note that this will only work if caching is
     * supporting.  If sets %TRUE, a new cache will be created. If sets to %FALSE,
     * current cache is clean and removed.
     * @param useCache if cache must be used or not
     */
    setCache(useCache: boolean): void
    /**
     * Sets the new maximum size of cache, in Megabytes. Default value is 10. Using
     * 0 means no cache will be done.
     * @param cacheSize size of cache (in Mb)
     */
    setCacheSize(cacheSize: number): void
    /**
     * Setting the log level the logger feature is added into
     * the libsoup session.
     * @param logLevel the libsoup log level to set [0,3]
     */
    setLogLevel(logLevel: number): void
    /**
     * Setting this property, the #GrlNetWc will queue all the requests and
     * will dispatch them with a pause between them of this value.
     * @param throttling the number of seconds to wait between requests
     */
    setThrottling(throttling: number): void

    // Class property signals of GrlNet-0.2.GrlNet.Wc

    connect(sigName: "notify::cache", callback: any): number
    on(sigName: "notify::cache", callback: any): number
    once(sigName: "notify::cache", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cache", ...args: any[]): void
    connect(sigName: "notify::cache-size", callback: any): number
    on(sigName: "notify::cache-size", callback: any): number
    once(sigName: "notify::cache-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cache-size", ...args: any[]): void
    connect(sigName: "notify::loglevel", callback: any): number
    on(sigName: "notify::loglevel", callback: any): number
    once(sigName: "notify::loglevel", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::loglevel", ...args: any[]): void
    connect(sigName: "notify::throttling", callback: any): number
    on(sigName: "notify::throttling", callback: any): number
    once(sigName: "notify::throttling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::throttling", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: any): number
    on(sigName: "notify::user-agent", callback: any): number
    once(sigName: "notify::user-agent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Wc extends GObject.Object {

    // Own properties of GrlNet-0.2.GrlNet.Wc

    static name: string

    // Constructors of GrlNet-0.2.GrlNet.Wc

    constructor(config?: Wc.ConstructorProperties) 
    /**
     * Creates a new #GrlNetWc.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GrlNetWc.
     * @constructor 
     */
    static new(): Wc
    _init(config?: Wc.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export interface WcClass {

    // Own fields of GrlNet-0.2.GrlNet.WcClass

    /**
     * the parent class structure
     * @field 
     */
    parentClass: GObject.ObjectClass
}

/**
 * Grilo web client helper class.
 * 
 * It's a simple and thin web client to be used by the sources to download
 * content from Internet.
 * @record 
 */
export abstract class WcClass {

    // Own properties of GrlNet-0.2.GrlNet.WcClass

    static name: string
}

export interface WcPrivate {
}

export class WcPrivate {

    // Own properties of GrlNet-0.2.GrlNet.WcPrivate

    static name: string
}
