
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Vpg-1
 */

import type * as Vda from './Vda-1.js';
import type * as GCalc from './GCalc-2.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Gee from './Gee-0.8.js';
import type * as Json from './Json-1.0.js';
import type * as GXml from './GXml-0.20.js';
import type * as libxml2 from './libxml2-2.0.js';

export module Connection {

    // Constructor properties interface

    export interface ConstructorProperties extends Vda.Connection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Connection extends Vda.Connection {

    // Class property signals of Vpg-1.Vpg.Connection

    connect(sigName: "notify::status", callback: any): number
    on(sigName: "notify::status", callback: any): number
    once(sigName: "notify::status", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::is-opened", callback: any): number
    on(sigName: "notify::is-opened", callback: any): number
    once(sigName: "notify::is-opened", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-opened", ...args: any[]): void
    connect(sigName: "notify::connection-string", callback: any): number
    on(sigName: "notify::connection-string", callback: any): number
    once(sigName: "notify::connection-string", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection-string", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Connection extends GObject.Object {

    // Own properties of Vpg-1.Vpg.Connection

    static name: string

    // Constructors of Vpg-1.Vpg.Connection

    constructor(config?: Connection.ConstructorProperties) 
    constructor() 
    static new(): Connection
    _init(config?: Connection.ConstructorProperties): void
}

export interface ConnectionClass {
}

export abstract class ConnectionClass {

    // Own properties of Vpg-1.Vpg.ConnectionClass

    static name: string
}

export interface ConnectionPrivate {
}

export class ConnectionPrivate {

    // Own properties of Vpg-1.Vpg.ConnectionPrivate

    static name: string
}
