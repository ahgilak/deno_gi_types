
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Vgsl-1
 */

import type * as Vgda from './Vgda-1.js';
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

    export interface ConstructorProperties extends Vgda.GProvider.ConstructorProperties {
    }

}

export interface Connection {

    // Class property signals of Vgsl-1.Vgsl.Connection

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Connection extends Vgda.GProvider {

    // Own properties of Vgsl-1.Vgsl.Connection

    static name: string

    // Constructors of Vgsl-1.Vgsl.Connection

    constructor(config?: Connection.ConstructorProperties) 
    constructor() 
    static new(): Connection

    // Overloads of new

    static new(): Vgda.GProvider
    _init(config?: Connection.ConstructorProperties): void
}

export interface ConnectionClass {
}

export abstract class ConnectionClass {

    // Own properties of Vgsl-1.Vgsl.ConnectionClass

    static name: string
}

export interface ConnectionPrivate {
}

export class ConnectionPrivate {

    // Own properties of Vgsl-1.Vgsl.ConnectionPrivate

    static name: string
}
