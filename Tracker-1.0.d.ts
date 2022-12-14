
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Tracker-1.0
 */

import type * as GLib from './GLib-2.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';

export enum SparqlValueType {
    UNBOUND,
    URI,
    STRING,
    INTEGER,
    DOUBLE,
    DATETIME,
    BLANK_NODE,
    BOOLEAN,
}
export enum Error {
    PARSE,
    UNKNOWN_CLASS,
    UNKNOWN_PROPERTY,
    TYPE,
    CONSTRAINT,
    NO_SPACE,
    INTERNAL,
    UNSUPPORTED,
}
export enum SparqlBuilderState {
    UPDATE,
    INSERT,
    DELETE,
    SUBJECT,
    PREDICATE,
    OBJECT,
    BLANK,
    WHERE,
    EMBEDDED_INSERT,
    GRAPH,
}
export const DBUS_SERVICE: string
export const DBUS_INTERFACE_RESOURCES: string
export const DBUS_OBJECT_RESOURCES: string
export const DBUS_INTERFACE_STATISTICS: string
export const DBUS_OBJECT_STATISTICS: string
export const DBUS_INTERFACE_STATUS: string
export const DBUS_OBJECT_STATUS: string
export const DBUS_INTERFACE_STEROIDS: string
export const DBUS_OBJECT_STEROIDS: string
export function sparqlEscapeUri(uri: string): string
export function sparqlEscapeString(literal: string): string
export function sparqlGetUuidUrn(): string
export module SparqlBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tracker-1.0.Tracker.SparqlBuilder

        length?: number | null
    }

}

export interface SparqlBuilder {

    // Own properties of Tracker-1.0.Tracker.SparqlBuilder

    readonly result: string
    length: number
    readonly state: SparqlBuilderState

    // Own fields of Tracker-1.0.Tracker.SparqlBuilder

    parentInstance: GObject.Object
    priv: SparqlBuilderPrivate

    // Owm methods of Tracker-1.0.Tracker.SparqlBuilder

    insertOpen(graph?: string | null): void
    insertSilentOpen(graph?: string | null): void
    insertClose(): void
    deleteOpen(graph?: string | null): void
    deleteClose(): void
    graphOpen(graph: string): void
    graphClose(): void
    whereOpen(): void
    whereClose(): void
    subjectVariable(varName: string): void
    objectVariable(varName: string): void
    subjectIri(iri: string): void
    subject(s: string): void
    predicateIri(iri: string): void
    predicate(s: string): void
    objectIri(iri: string): void
    object(s: string): void
    objectString(literal: string): void
    objectUnvalidated(value: string): void
    objectBoolean(literal: boolean): void
    objectInt64(literal: number): void
    objectDate(literal: number): /* literal */ number
    objectDouble(literal: number): void
    objectBlankOpen(): void
    objectBlankClose(): void
    prepend(raw: string): void
    append(raw: string): void
    getResult(): string
    getLength(): number
    getState(): SparqlBuilderState

    // Class property signals of Tracker-1.0.Tracker.SparqlBuilder

    connect(sigName: "notify::result", callback: any): number
    on(sigName: "notify::result", callback: any): number
    once(sigName: "notify::result", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::result", ...args: any[]): void
    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SparqlBuilder extends GObject.Object {

    // Own properties of Tracker-1.0.Tracker.SparqlBuilder

    static name: string

    // Constructors of Tracker-1.0.Tracker.SparqlBuilder

    constructor(config?: SparqlBuilder.ConstructorProperties) 
    static update(): SparqlBuilder
    static embeddedInsert(): SparqlBuilder
    constructor() 
    static new(): SparqlBuilder
    _init(config?: SparqlBuilder.ConstructorProperties): void
}

export module SparqlConnection {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SparqlConnection {

    // Own fields of Tracker-1.0.Tracker.SparqlConnection

    parentInstance: GObject.Object
    priv: SparqlConnectionPrivate

    // Owm methods of Tracker-1.0.Tracker.SparqlConnection

    // Has conflict: query(sparql: string, cancellable?: Gio.Cancellable | null): SparqlCursor
    // Has conflict: queryAsync(sparql: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: queryFinish(res: Gio.AsyncResult): SparqlCursor
    // Has conflict: update(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): void
    // Has conflict: updateAsync(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: updateFinish(res: Gio.AsyncResult): void
    // Has conflict: updateArrayAsync(sparql: string[], priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: updateArrayFinish(res: Gio.AsyncResult): any[] | null
    // Has conflict: updateBlank(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): GLib.Variant | null
    // Has conflict: updateBlankAsync(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: updateBlankFinish(res: Gio.AsyncResult): GLib.Variant | null
    // Has conflict: load(file: Gio.File, cancellable?: Gio.Cancellable | null): void
    // Has conflict: loadAsync(file: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: loadFinish(res: Gio.AsyncResult): void
    // Has conflict: statistics(cancellable?: Gio.Cancellable | null): SparqlCursor | null
    // Has conflict: statisticsAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: statisticsFinish(res: Gio.AsyncResult): SparqlCursor | null

    // Own virtual methods of Tracker-1.0.Tracker.SparqlConnection

    query(sparql: string, cancellable?: Gio.Cancellable | null): SparqlCursor
    queryAsync(sparql: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryFinish(res: Gio.AsyncResult): SparqlCursor
    update(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): void
    updateAsync(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateFinish(res: Gio.AsyncResult): void
    updateArrayAsync(sparql: string[], priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateArrayFinish(res: Gio.AsyncResult): any[] | null
    updateBlank(sparql: string, priority: number, cancellable?: Gio.Cancellable | null): GLib.Variant | null
    updateBlankAsync(sparql: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateBlankFinish(res: Gio.AsyncResult): GLib.Variant | null
    load(file: Gio.File, cancellable?: Gio.Cancellable | null): void
    loadAsync(file: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadFinish(res: Gio.AsyncResult): void
    statistics(cancellable?: Gio.Cancellable | null): SparqlCursor | null
    statisticsAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    statisticsFinish(res: Gio.AsyncResult): SparqlCursor | null

    // Class property signals of Tracker-1.0.Tracker.SparqlConnection

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SparqlConnection extends GObject.Object {

    // Own properties of Tracker-1.0.Tracker.SparqlConnection

    static name: string

    // Constructors of Tracker-1.0.Tracker.SparqlConnection

    constructor(config?: SparqlConnection.ConstructorProperties) 
    _init(config?: SparqlConnection.ConstructorProperties): void
    static getAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static getFinish(res: Gio.AsyncResult): SparqlConnection
    static get(cancellable?: Gio.Cancellable | null): SparqlConnection
    static getDirectAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static getDirectFinish(res: Gio.AsyncResult): SparqlConnection
    static getDirect(cancellable?: Gio.Cancellable | null): SparqlConnection
    static remoteNew(uriBase: string): SparqlConnection
}

export module SparqlCursor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tracker-1.0.Tracker.SparqlCursor

        connection?: SparqlConnection | null
    }

}

export interface SparqlCursor {

    // Own properties of Tracker-1.0.Tracker.SparqlCursor

    connection: SparqlConnection
    readonly nColumns: number

    // Own fields of Tracker-1.0.Tracker.SparqlCursor

    parentInstance: GObject.Object
    priv: SparqlCursorPrivate

    // Owm methods of Tracker-1.0.Tracker.SparqlCursor

    // Has conflict: getValueType(column: number): SparqlValueType
    // Has conflict: getVariableName(column: number): string | null
    // Has conflict: getString(column: number): [ /* returnType */ string | null, /* length */ number ]
    // Has conflict: next(cancellable?: Gio.Cancellable | null): boolean
    // Has conflict: nextAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: nextFinish(res: Gio.AsyncResult): boolean
    // Has conflict: rewind(): void
    // Has conflict: close(): void
    // Has conflict: getInteger(column: number): number
    // Has conflict: getDouble(column: number): number
    // Has conflict: getBoolean(column: number): boolean
    // Has conflict: isBound(column: number): boolean
    getConnection(): SparqlConnection
    setConnection(value: SparqlConnection): void
    // Has conflict: getNColumns(): number

    // Own virtual methods of Tracker-1.0.Tracker.SparqlCursor

    getValueType(column: number): SparqlValueType
    getVariableName(column: number): string | null
    getString(column: number): [ /* returnType */ string | null, /* length */ number ]
    next(cancellable?: Gio.Cancellable | null): boolean
    nextAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    nextFinish(res: Gio.AsyncResult): boolean
    rewind(): void
    close(): void
    getInteger(column: number): number
    getDouble(column: number): number
    getBoolean(column: number): boolean
    isBound(column: number): boolean
    getNColumns(): number

    // Class property signals of Tracker-1.0.Tracker.SparqlCursor

    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::n-columns", callback: any): number
    on(sigName: "notify::n-columns", callback: any): number
    once(sigName: "notify::n-columns", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::n-columns", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SparqlCursor extends GObject.Object {

    // Own properties of Tracker-1.0.Tracker.SparqlCursor

    static name: string

    // Constructors of Tracker-1.0.Tracker.SparqlCursor

    constructor(config?: SparqlCursor.ConstructorProperties) 
    _init(config?: SparqlCursor.ConstructorProperties): void
}

export interface SparqlBuilderClass {

    // Own fields of Tracker-1.0.Tracker.SparqlBuilderClass

    parentClass: GObject.ObjectClass
}

export abstract class SparqlBuilderClass {

    // Own properties of Tracker-1.0.Tracker.SparqlBuilderClass

    static name: string
}

export interface SparqlBuilderPrivate {
}

export class SparqlBuilderPrivate {

    // Own properties of Tracker-1.0.Tracker.SparqlBuilderPrivate

    static name: string
}

export interface SparqlConnectionClass {

    // Own fields of Tracker-1.0.Tracker.SparqlConnectionClass

    parentClass: GObject.ObjectClass
    query: (self: SparqlConnection, sparql: string, cancellable?: Gio.Cancellable | null) => SparqlCursor
    queryAsync: (self: SparqlConnection, sparql: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    queryFinish: (self: SparqlConnection, res: Gio.AsyncResult) => SparqlCursor
    update: (self: SparqlConnection, sparql: string, priority: number, cancellable?: Gio.Cancellable | null) => void
    updateAsync: (self: SparqlConnection, sparql: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    updateFinish: (self: SparqlConnection, res: Gio.AsyncResult) => void
    updateArrayAsync: (self: SparqlConnection, sparql: string[], priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    updateArrayFinish: (self: SparqlConnection, res: Gio.AsyncResult) => any[] | null
    updateBlank: (self: SparqlConnection, sparql: string, priority: number, cancellable?: Gio.Cancellable | null) => GLib.Variant | null
    updateBlankAsync: (self: SparqlConnection, sparql: string, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    updateBlankFinish: (self: SparqlConnection, res: Gio.AsyncResult) => GLib.Variant | null
    load: (self: SparqlConnection, file: Gio.File, cancellable?: Gio.Cancellable | null) => void
    loadAsync: (self: SparqlConnection, file: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    loadFinish: (self: SparqlConnection, res: Gio.AsyncResult) => void
    statistics: (self: SparqlConnection, cancellable?: Gio.Cancellable | null) => SparqlCursor | null
    statisticsAsync: (self: SparqlConnection, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    statisticsFinish: (self: SparqlConnection, res: Gio.AsyncResult) => SparqlCursor | null
}

export abstract class SparqlConnectionClass {

    // Own properties of Tracker-1.0.Tracker.SparqlConnectionClass

    static name: string
}

export interface SparqlConnectionPrivate {
}

export class SparqlConnectionPrivate {

    // Own properties of Tracker-1.0.Tracker.SparqlConnectionPrivate

    static name: string
}

export interface SparqlCursorClass {

    // Own fields of Tracker-1.0.Tracker.SparqlCursorClass

    parentClass: GObject.ObjectClass
    getValueType: (self: SparqlCursor, column: number) => SparqlValueType
    getVariableName: (self: SparqlCursor, column: number) => string | null
    getString: (self: SparqlCursor, column: number) => [ /* returnType */ string | null, /* length */ number ]
    next: (self: SparqlCursor, cancellable?: Gio.Cancellable | null) => boolean
    nextAsync: (self: SparqlCursor, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    nextFinish: (self: SparqlCursor, res: Gio.AsyncResult) => boolean
    rewind: (self: SparqlCursor) => void
    close: (self: SparqlCursor) => void
    getInteger: (self: SparqlCursor, column: number) => number
    getDouble: (self: SparqlCursor, column: number) => number
    getBoolean: (self: SparqlCursor, column: number) => boolean
    isBound: (self: SparqlCursor, column: number) => boolean
}

export abstract class SparqlCursorClass {

    // Own properties of Tracker-1.0.Tracker.SparqlCursorClass

    static name: string
}

export interface SparqlCursorPrivate {
}

export class SparqlCursorPrivate {

    // Own properties of Tracker-1.0.Tracker.SparqlCursorPrivate

    static name: string
}
