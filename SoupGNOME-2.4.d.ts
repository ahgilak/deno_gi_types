
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * SoupGNOME-2.4
 */

import type * as Soup from './Soup-2.4.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

export const COOKIE_JAR_SQLITE_FILENAME: string
export function gnomeFeatures226GetType(): GObject.GType
export module CookieJarSqlite {

    // Constructor properties interface

    export interface ConstructorProperties extends Soup.SessionFeature.ConstructorProperties, Soup.CookieJarDB.ConstructorProperties {
    }

}

export interface CookieJarSqlite extends Soup.SessionFeature {

    // Own fields of SoupGNOME-2.4.SoupGNOME.CookieJarSqlite

    parent: Soup.CookieJarDB & Soup.CookieJar & GObject.Object & GObject.Object

    // Class property signals of SoupGNOME-2.4.SoupGNOME.CookieJarSqlite

    connect(sigName: "notify::filename", callback: any): number
    on(sigName: "notify::filename", callback: any): number
    once(sigName: "notify::filename", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::accept-policy", callback: any): number
    on(sigName: "notify::accept-policy", callback: any): number
    once(sigName: "notify::accept-policy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accept-policy", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CookieJarSqlite extends Soup.CookieJarDB {

    // Own properties of SoupGNOME-2.4.SoupGNOME.CookieJarSqlite

    static name: string

    // Constructors of SoupGNOME-2.4.SoupGNOME.CookieJarSqlite

    constructor(config?: CookieJarSqlite.ConstructorProperties) 
    constructor(filename: string, readOnly: boolean) 
    static new(filename: string, readOnly: boolean): CookieJarSqlite

    // Overloads of new

    /**
     * Creates a #SoupCookieJarDB.
     * 
     * `filename` will be read in at startup to create an initial set of
     * cookies. If `read_only` is %FALSE, then the non-session cookies will
     * be written to `filename` when the 'changed' signal is emitted from
     * the jar. (If `read_only` is %TRUE, then the cookie jar will only be
     * used for this session, and changes made to it will be lost when the
     * jar is destroyed.)
     * @constructor 
     * @param filename the filename to read to/write from, or %NULL
     * @param readOnly %TRUE if `filename` is read-only
     */
    static new(filename: string, readOnly: boolean): Soup.CookieJarDB
    /**
     * Creates a new #SoupCookieJar. The base #SoupCookieJar class does
     * not support persistent storage of cookies; use a subclass for that.
     * @constructor 
     */
    static new(): Soup.CookieJar
    _init(config?: CookieJarSqlite.ConstructorProperties): void
}

export module PasswordManagerGNOME {

    // Constructor properties interface

    export interface ConstructorProperties extends Soup.SessionFeature.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface PasswordManagerGNOME extends Soup.SessionFeature {

    // Class property signals of SoupGNOME-2.4.SoupGNOME.PasswordManagerGNOME

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PasswordManagerGNOME extends GObject.Object {

    // Own properties of SoupGNOME-2.4.SoupGNOME.PasswordManagerGNOME

    static name: string

    // Constructors of SoupGNOME-2.4.SoupGNOME.PasswordManagerGNOME

    constructor(config?: PasswordManagerGNOME.ConstructorProperties) 
    _init(config?: PasswordManagerGNOME.ConstructorProperties): void
}

export module ProxyResolverGNOME {

    // Constructor properties interface

    export interface ConstructorProperties extends Soup.ProxyURIResolver.ConstructorProperties, Soup.SessionFeature.ConstructorProperties, Soup.ProxyResolverDefault.ConstructorProperties {
    }

}

export interface ProxyResolverGNOME extends Soup.ProxyURIResolver, Soup.SessionFeature {

    // Class property signals of SoupGNOME-2.4.SoupGNOME.ProxyResolverGNOME

    connect(sigName: "notify::gproxy-resolver", callback: any): number
    on(sigName: "notify::gproxy-resolver", callback: any): number
    once(sigName: "notify::gproxy-resolver", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::gproxy-resolver", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ProxyResolverGNOME extends Soup.ProxyResolverDefault {

    // Own properties of SoupGNOME-2.4.SoupGNOME.ProxyResolverGNOME

    static name: string

    // Constructors of SoupGNOME-2.4.SoupGNOME.ProxyResolverGNOME

    constructor(config?: ProxyResolverGNOME.ConstructorProperties) 
    _init(config?: ProxyResolverGNOME.ConstructorProperties): void
}

export interface CookieJarSqliteClass {

    // Own fields of SoupGNOME-2.4.SoupGNOME.CookieJarSqliteClass

    parentClass: Soup.CookieJarDBClass
}

export abstract class CookieJarSqliteClass {

    // Own properties of SoupGNOME-2.4.SoupGNOME.CookieJarSqliteClass

    static name: string
}
