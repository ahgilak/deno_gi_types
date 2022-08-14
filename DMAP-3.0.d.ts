
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * DMAP-3.0
 */

import type * as Soup from './Soup-2.4.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

export enum ConnectionState {
    GET_INFO,
    LOGIN,
    GET_REVISION_NUMBER,
    GET_DB_INFO,
    GET_SONGS,
    GET_PLAYLISTS,
    GET_PLAYLIST_ENTRIES,
    LOGOUT,
    DONE,
}
export enum ContentCode {
    CC_INVALID,
    RAW,
    CC_MDCL,
    CC_MSTT,
    CC_MIID,
    CC_MINM,
    CC_MIKD,
    CC_MPER,
    CC_MCON,
    CC_MCTI,
    CC_MPCO,
    CC_MSTS,
    CC_MIMC,
    CC_MCTC,
    CC_MRCO,
    CC_MTCO,
    CC_MLCL,
    CC_MLIT,
    CC_MBCL,
    CC_MSRV,
    CC_MSAU,
    CC_MSLR,
    CC_MPRO,
    CC_MSAL,
    CC_MSUP,
    CC_MSPI,
    CC_MSEX,
    CC_MSBR,
    CC_MSQY,
    CC_MSIX,
    CC_MSRS,
    CC_MSTM,
    CC_MSDC,
    CC_MCCR,
    CC_MCNM,
    CC_MCNA,
    CC_MCTY,
    CC_MLOG,
    CC_MLID,
    CC_MUPD,
    CC_MUSR,
    CC_MUTY,
    CC_MUDL,
    CC_MSMA,
    CC_FQUESCH,
    CC_APRO,
    CC_AVDB,
    CC_ABRO,
    CC_ABAL,
    CC_ABAR,
    CC_ABCP,
    CC_ABGN,
    CC_ADBS,
    CC_ASAL,
    CC_ASAI,
    CC_ASAA,
    CC_ASAR,
    CC_ASBT,
    CC_ASBR,
    CC_ASCM,
    CC_ASCO,
    CC_ASDA,
    CC_ASDM,
    CC_ASDC,
    CC_ASDN,
    CC_ASDB,
    CC_ASEQ,
    CC_ASFM,
    CC_ASGN,
    CC_ASDT,
    CC_ASRV,
    CC_ASSR,
    CC_ASSZ,
    CC_ASST,
    CC_ASSP,
    CC_ASTM,
    CC_ASTC,
    CC_ASTN,
    CC_ASUR,
    CC_ASYR,
    CC_ASDK,
    CC_ASUL,
    CC_ASSU,
    CC_ASSA,
    CC_APLY,
    CC_ABPL,
    CC_APSO,
    CC_PRSV,
    CC_ARIF,
    CC_MSAS,
    CC_AGRP,
    CC_AGAL,
    CC_ASCP,
    CC_PPRO,
    CC_PASP,
    CC_PFDT,
    CC_PICD,
    CC_PIMF,
    CC_PFMT,
    CC_PIFS,
    CC_PLSZ,
    CC_PHGT,
    CC_PWTH,
    CC_PRAT,
    CC_PCMT,
    CC_PRET,
    CC_AESV,
    CC_AEHV,
    CC_AESP,
    CC_AEPP,
    CC_AEPS,
    CC_AESG,
    CC_AEMK,
    CC_AEFP,
    CC_CMPA,
    CC_CMNM,
    CC_CMTY,
    CC_CMPG,
    CC_CACI,
    CC_CAPS,
    CC_CASH,
    CC_CARP,
    CC_CAAS,
    CC_CAAR,
    CC_CAIA,
    CC_CANP,
    CC_CANN,
    CC_CANA,
    CC_CANL,
    CC_CANG,
    CC_CANT,
    CC_CASP,
    CC_CASS,
    CC_CAST,
    CC_CASU,
    CC_CASG,
    CC_CACR,
    CC_CMCP,
    CC_CMGT,
    CC_CMIK,
    CC_CMSP,
    CC_CMST,
    CC_CMSV,
    CC_CMSR,
    CC_CMMK,
    CC_CMVO,
    CC_CMPR,
    CC_CAPR,
    CC_AEFR,
    CC_CAOV,
    CC_CMRL,
    CC_CAHP,
    CC_CAIV,
    CC_CAVC,
}
export enum MdnsBrowserError {
    NOT_RUNNING,
    FAILED,
}
export enum MdnsBrowserServiceType {
    INVALID,
    DAAP,
    DPAP,
    DACP,
    RAOP,
    LAST,
}
export enum MdnsBrowserTransportProtocol {
    TCP,
    UDP,
    LAST,
}
export enum MdnsPublisherError {
    NOT_RUNNING,
    FAILED,
}
export enum MediaKind {
    MUSIC,
    MOVIE,
    PODCAST,
    TV_SHOW,
}
export enum Type {
    BYTE,
    SIGNED_INT,
    SHORT,
    INT,
    INT64,
    STRING,
    DATE,
    VERSION,
    CONTAINER,
    POINTER,
}
export const HASH_SIZE: number
export const STATUS_OK: number
export function contentCodeDmapType(code: ContentCode): Type
export function contentCodeName(code: ContentCode): string
export function contentCodeReadFromBuffer(buf: string): ContentCode
export function contentCodeString(code: ContentCode): string
export function contentCodeStringAsInt32(str: string): number
export function contentCodes(number: number): ContentCodeDefinition
export function hashGenerate(versionMajor: number, url: number, hashSelect: number, out: number, requestId: number): void
export function hashProgressiveFinal(context: HashContext, digest: number): void
export function hashProgressiveInit(context: HashContext): void
export function hashProgressiveToString(digest: number, string: string): void
export function hashProgressiveUpdate(context: HashContext, buffer: number, length: number): void
export function mdnsBrowserErrorQuark(): GLib.Quark
export function mdnsPublisherErrorQuark(): GLib.Quark
export function mimeToFormat(transcodeMimetype: string): string
export function structureDestroy(structure: GLib.Node): void
export function structureGetSize(structure: GLib.Node): number
export function structureIncreaseByPredictedSize(structure: GLib.Node, size: number): void
export function structurePrint(structure: GLib.Node): void
export function structureSerialize(structure: GLib.Node, length: number): string
export interface ConnectionCallback {
    (connection: Connection, result: boolean, reason: string): boolean
}
export interface ResponseHandler {
    (connection: Connection, status: number, structure: GLib.Node): void
}
export module ContainerDb {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ContainerDb {

    // Owm methods of DMAP-3.0.DMAP.ContainerDb

    // Has conflict: add(record: ContainerRecord): void
    // Has conflict: count(): number

    // Own virtual methods of DMAP-3.0.DMAP.ContainerDb

    /**
     * Add a record to the database.
     * @virtual 
     * @param record A record.
     */
    add(record: ContainerRecord): void
    count(): number

    // Class property signals of DMAP-3.0.DMAP.ContainerDb

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ContainerDb extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.ContainerDb

    static name: string

    // Constructors of DMAP-3.0.DMAP.ContainerDb

    constructor(config?: ContainerDb.ConstructorProperties) 
    _init(config?: ContainerDb.ConstructorProperties): void
}

export module ContainerRecord {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of DMAP-3.0.DMAP.ContainerRecord

        name?: string | null
    }

}

export interface ContainerRecord {

    // Own properties of DMAP-3.0.DMAP.ContainerRecord

    name: string

    // Owm methods of DMAP-3.0.DMAP.ContainerRecord

    // Has conflict: addEntry(record: Record, id: number): void
    // Has conflict: getEntryCount(): number
    // Has conflict: getId(): number

    // Own virtual methods of DMAP-3.0.DMAP.ContainerRecord

    /**
     * Add a record to the database. It is assumed that the record is placed
     * directly into the database (not copied) and not freed.
     * @virtual 
     * @param record A DMAPRecord.
     * @param id The record's ID.
     */
    addEntry(record: Record, id: number): void
    getEntryCount(): number
    getId(): number

    // Class property signals of DMAP-3.0.DMAP.ContainerRecord

    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ContainerRecord extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.ContainerRecord

    static name: string

    // Constructors of DMAP-3.0.DMAP.ContainerRecord

    constructor(config?: ContainerRecord.ConstructorProperties) 
    _init(config?: ContainerRecord.ConstructorProperties): void
}

export module Db {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Db {

    // Owm methods of DMAP-3.0.DMAP.Db

    // Has conflict: add(record: Record): number
    // Has conflict: addPath(path: string): number
    // Has conflict: addWithId(record: Record, id: number): number
    // Has conflict: count(): number
    // Has conflict: lookupIdByLocation(location: string): number

    // Own virtual methods of DMAP-3.0.DMAP.Db

    /**
     * Add a record to the database.
     * @virtual 
     * @param record A database record.
     */
    add(record: Record): number
    /**
     * Create a record and add it to the database.
     * @virtual 
     * @param path A path to an appropriate media file.
     */
    addPath(path: string): number
    /**
     * Add a record to the database and assign it the given ID.
     * @virtual 
     * @param record A database record.
     * @param id A database record ID.
     */
    addWithId(record: Record, id: number): number
    count(): number
    lookupIdByLocation(location: string): number

    // Class property signals of DMAP-3.0.DMAP.Db

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Db extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.Db

    static name: string

    // Constructors of DMAP-3.0.DMAP.Db

    constructor(config?: Db.ConstructorProperties) 
    _init(config?: Db.ConstructorProperties): void
}

export module Record {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Record {

    // Owm methods of DMAP-3.0.DMAP.Record

    // Has conflict: setFromBlob(blob: Uint8Array): boolean

    // Own virtual methods of DMAP-3.0.DMAP.Record

    setFromBlob(blob: Uint8Array): boolean

    // Class property signals of DMAP-3.0.DMAP.Record

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Record extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.Record

    static name: string

    // Constructors of DMAP-3.0.DMAP.Record

    constructor(config?: Record.ConstructorProperties) 
    _init(config?: Record.ConstructorProperties): void
}

export module RecordFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface RecordFactory {

    // Class property signals of DMAP-3.0.DMAP.RecordFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class RecordFactory extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.RecordFactory

    static name: string

    // Constructors of DMAP-3.0.DMAP.RecordFactory

    constructor(config?: RecordFactory.ConstructorProperties) 
    _init(config?: RecordFactory.ConstructorProperties): void
}

export module Connection {

    // Signal callback interfaces

    /**
     * Signal callback interface for `authenticate`
     */
    export interface AuthenticateSignalCallback {
        (object: string, p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean): void
    }

    /**
     * Signal callback interface for `connected`
     */
    export interface ConnectedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `connecting`
     */
    export interface ConnectingSignalCallback {
        (object: number, p0: number): void
    }

    /**
     * Signal callback interface for `disconnected`
     */
    export interface DisconnectedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `operation-done`
     */
    export interface OperationDoneSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of DMAP-3.0.DMAP.Connection

        baseUri?: object | null
        databaseId?: number | null
        db?: object | null
        dmapVersion?: number | null
        factory?: object | null
        host?: string | null
        name?: string | null
        password?: string | null
        port?: number | null
        revisionNumber?: number | null
        sessionId?: number | null
        username?: string | null
    }

}

export interface Connection {

    // Own properties of DMAP-3.0.DMAP.Connection

    baseUri: object
    databaseId: number
    readonly db: object
    dmapVersion: number
    readonly factory: object
    readonly host: string
    readonly name: string
    password: string
    readonly port: number
    revisionNumber: number
    sessionId: number
    readonly username: string

    // Own fields of DMAP-3.0.DMAP.Connection

    parent: GObject.Object
    priv: ConnectionPrivate

    // Owm methods of DMAP-3.0.DMAP.Connection

    /**
     * Attach an authentication credential to a request. This
     * method should be called by a function that is connected to the
     * #DMAPConnection::authenticate signal. The signal will provide the
     * connection, session, message and auth to that function. That function
     * should obtain a password and provide it to this method.
     * @param session A #SoupSession
     * @param message A #SoupMessage
     * @param auth A #SoupAuth
     * @param password A password
     */
    authenticateMessage(session: Soup.Session, message: Soup.Message, auth: Soup.Auth, password: string): void
    getHeaders(uri: string): Soup.MessageHeaders
    isConnected(): boolean
    setup(): void

    // Own virtual methods of DMAP-3.0.DMAP.Connection

    authenticate(name: string): string
    connected(): void
    connecting(state: ConnectionState, progress: number): void
    disconnected(): void
    getProtocolVersionCc(): ContentCode
    getQueryMetadata(): string
    operationDone(): void

    // Own signals of DMAP-3.0.DMAP.Connection

    connect(sigName: "authenticate", callback: Connection.AuthenticateSignalCallback): number
    on(sigName: "authenticate", callback: Connection.AuthenticateSignalCallback): number
    once(sigName: "authenticate", callback: Connection.AuthenticateSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "authenticate", p0: Soup.Session, p1: Soup.Message, p2: Soup.Auth, p3: boolean, ...args: any[]): void
    connect(sigName: "connected", callback: Connection.ConnectedSignalCallback): number
    on(sigName: "connected", callback: Connection.ConnectedSignalCallback): number
    once(sigName: "connected", callback: Connection.ConnectedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "connected", ...args: any[]): void
    connect(sigName: "connecting", callback: Connection.ConnectingSignalCallback): number
    on(sigName: "connecting", callback: Connection.ConnectingSignalCallback): number
    once(sigName: "connecting", callback: Connection.ConnectingSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "connecting", p0: number, ...args: any[]): void
    connect(sigName: "disconnected", callback: Connection.DisconnectedSignalCallback): number
    on(sigName: "disconnected", callback: Connection.DisconnectedSignalCallback): number
    once(sigName: "disconnected", callback: Connection.DisconnectedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "disconnected", ...args: any[]): void
    connect(sigName: "operation-done", callback: Connection.OperationDoneSignalCallback): number
    on(sigName: "operation-done", callback: Connection.OperationDoneSignalCallback): number
    once(sigName: "operation-done", callback: Connection.OperationDoneSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "operation-done", ...args: any[]): void

    // Class property signals of DMAP-3.0.DMAP.Connection

    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::database-id", callback: any): number
    on(sigName: "notify::database-id", callback: any): number
    once(sigName: "notify::database-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::database-id", ...args: any[]): void
    connect(sigName: "notify::db", callback: any): number
    on(sigName: "notify::db", callback: any): number
    once(sigName: "notify::db", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::db", ...args: any[]): void
    connect(sigName: "notify::dmap-version", callback: any): number
    on(sigName: "notify::dmap-version", callback: any): number
    once(sigName: "notify::dmap-version", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dmap-version", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::host", callback: any): number
    on(sigName: "notify::host", callback: any): number
    once(sigName: "notify::host", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::host", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::password", callback: any): number
    on(sigName: "notify::password", callback: any): number
    once(sigName: "notify::password", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::port", callback: any): number
    on(sigName: "notify::port", callback: any): number
    once(sigName: "notify::port", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::revision-number", callback: any): number
    on(sigName: "notify::revision-number", callback: any): number
    once(sigName: "notify::revision-number", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::revision-number", ...args: any[]): void
    connect(sigName: "notify::session-id", callback: any): number
    on(sigName: "notify::session-id", callback: any): number
    once(sigName: "notify::session-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::session-id", ...args: any[]): void
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

export class Connection extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.Connection

    static name: string

    // Constructors of DMAP-3.0.DMAP.Connection

    constructor(config?: Connection.ConstructorProperties) 
    _init(config?: Connection.ConstructorProperties): void
}

export module GstInputStream {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Seekable.ConstructorProperties, Gio.InputStream.ConstructorProperties {
    }

}

export interface GstInputStream extends Gio.Seekable {

    // Own fields of DMAP-3.0.DMAP.GstInputStream

    parent: Gio.InputStream
    priv: GstInputStreamPrivate

    // Own virtual methods of DMAP-3.0.DMAP.GstInputStream

    killPipeline(): void

    // Class property signals of DMAP-3.0.DMAP.GstInputStream

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class GstInputStream extends Gio.InputStream {

    // Own properties of DMAP-3.0.DMAP.GstInputStream

    static name: string

    // Constructors of DMAP-3.0.DMAP.GstInputStream

    constructor(config?: GstInputStream.ConstructorProperties) 
    constructor(transcodeMimetype: string, srcStream: Gio.InputStream) 
    static new(transcodeMimetype: string, srcStream: Gio.InputStream): GstInputStream
    _init(config?: GstInputStream.ConstructorProperties): void
}

export module MdnsBrowser {

    // Signal callback interfaces

    /**
     * Signal callback interface for `service-added`
     */
    export interface ServiceAddedSignalCallback {
        (service: object): void
    }

    /**
     * Signal callback interface for `service-removed`
     */
    export interface ServiceRemovedSignalCallback {
        (object: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MdnsBrowser {

    // Own fields of DMAP-3.0.DMAP.MdnsBrowser

    object: GObject.Object
    priv: MdnsBrowserPrivate

    // Owm methods of DMAP-3.0.DMAP.MdnsBrowser

    getServiceType(): MdnsBrowserServiceType
    /**
     * Starts a DMAPMdnsBrowser.
     */
    start(): boolean
    /**
     * Stops a DMAPMdnsBrowser.
     */
    stop(): boolean

    // Own virtual methods of DMAP-3.0.DMAP.MdnsBrowser

    serviceAdded(service: MdnsBrowserService): void
    serviceRemoved(service: MdnsBrowserService): void

    // Own signals of DMAP-3.0.DMAP.MdnsBrowser

    connect(sigName: "service-added", callback: MdnsBrowser.ServiceAddedSignalCallback): number
    on(sigName: "service-added", callback: MdnsBrowser.ServiceAddedSignalCallback): number
    once(sigName: "service-added", callback: MdnsBrowser.ServiceAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "service-added", ...args: any[]): void
    connect(sigName: "service-removed", callback: MdnsBrowser.ServiceRemovedSignalCallback): number
    on(sigName: "service-removed", callback: MdnsBrowser.ServiceRemovedSignalCallback): number
    once(sigName: "service-removed", callback: MdnsBrowser.ServiceRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "service-removed", ...args: any[]): void

    // Class property signals of DMAP-3.0.DMAP.MdnsBrowser

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MdnsBrowser extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.MdnsBrowser

    static name: string

    // Constructors of DMAP-3.0.DMAP.MdnsBrowser

    constructor(config?: MdnsBrowser.ConstructorProperties) 
    /**
     * Creates a new mDNS browser.
     * @constructor 
     * @param type The type of service to browse.
     */
    constructor(type: MdnsBrowserServiceType) 
    /**
     * Creates a new mDNS browser.
     * @constructor 
     * @param type The type of service to browse.
     */
    static new(type: MdnsBrowserServiceType): MdnsBrowser
    _init(config?: MdnsBrowser.ConstructorProperties): void
}

export module MdnsPublisher {

    // Signal callback interfaces

    /**
     * Signal callback interface for `name-collision`
     */
    export interface NameCollisionSignalCallback {
        (object: string): void
    }

    /**
     * Signal callback interface for `published`
     */
    export interface PublishedSignalCallback {
        (object: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MdnsPublisher {

    // Own fields of DMAP-3.0.DMAP.MdnsPublisher

    object: GObject.Object
    priv: MdnsPublisherPrivate

    // Owm methods of DMAP-3.0.DMAP.MdnsPublisher

    publish(name: string, port: number, typeOfService: string, passwordRequired: boolean, txtRecords: string): boolean
    renameAtPort(port: number, name: string): boolean
    withdraw(port: number): boolean

    // Own virtual methods of DMAP-3.0.DMAP.MdnsPublisher

    nameCollision(name: string): void
    published(name: string): void

    // Own signals of DMAP-3.0.DMAP.MdnsPublisher

    connect(sigName: "name-collision", callback: MdnsPublisher.NameCollisionSignalCallback): number
    on(sigName: "name-collision", callback: MdnsPublisher.NameCollisionSignalCallback): number
    once(sigName: "name-collision", callback: MdnsPublisher.NameCollisionSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "name-collision", ...args: any[]): void
    connect(sigName: "published", callback: MdnsPublisher.PublishedSignalCallback): number
    on(sigName: "published", callback: MdnsPublisher.PublishedSignalCallback): number
    once(sigName: "published", callback: MdnsPublisher.PublishedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "published", ...args: any[]): void

    // Class property signals of DMAP-3.0.DMAP.MdnsPublisher

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MdnsPublisher extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.MdnsPublisher

    static name: string

    // Constructors of DMAP-3.0.DMAP.MdnsPublisher

    constructor(config?: MdnsPublisher.ConstructorProperties) 
    constructor() 
    static new(): MdnsPublisher
    _init(config?: MdnsPublisher.ConstructorProperties): void
}

export module Share {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of DMAP-3.0.DMAP.Share

        authMethod?: number | null
        containerDb?: object | null
        db?: object | null
        name?: string | null
        password?: string | null
        revisionNumber?: number | null
        transcodeMimetype?: string | null
        txtRecords?: string[] | null
    }

}

export interface Share {

    // Own properties of DMAP-3.0.DMAP.Share

    authMethod: number
    readonly containerDb: object
    readonly db: object
    name: string
    password: string
    revisionNumber: number
    readonly serverIpv4: Soup.Server
    readonly serverIpv6: Soup.Server
    readonly transcodeMimetype: string
    txtRecords: string[]

    // Own fields of DMAP-3.0.DMAP.Share

    parent: GObject.Object
    priv: SharePrivate

    // Own virtual methods of DMAP-3.0.DMAP.Share

    contentCodes(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext): void
    ctrlInt(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext): void
    databases(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext): void
    databasesBrowseXxx(server: Soup.Server, msg: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext): void
    databasesItemsXxx(server: Soup.Server, msg: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext): void
    getDesiredPort(): number
    getTypeOfService(): string
    login(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext): void
    logout(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext): void
    messageAddStandardHeaders(msg: Soup.Message): void
    nameCollision(publisher: MdnsPublisher, name: string): void
    published(publisher: MdnsPublisher, name: string): void
    serverInfo(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext): void
    update(server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext): void

    // Class property signals of DMAP-3.0.DMAP.Share

    connect(sigName: "notify::auth-method", callback: any): number
    on(sigName: "notify::auth-method", callback: any): number
    once(sigName: "notify::auth-method", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::auth-method", ...args: any[]): void
    connect(sigName: "notify::container-db", callback: any): number
    on(sigName: "notify::container-db", callback: any): number
    once(sigName: "notify::container-db", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::container-db", ...args: any[]): void
    connect(sigName: "notify::db", callback: any): number
    on(sigName: "notify::db", callback: any): number
    once(sigName: "notify::db", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::db", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::password", callback: any): number
    on(sigName: "notify::password", callback: any): number
    once(sigName: "notify::password", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::revision-number", callback: any): number
    on(sigName: "notify::revision-number", callback: any): number
    once(sigName: "notify::revision-number", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::revision-number", ...args: any[]): void
    connect(sigName: "notify::server-ipv4", callback: any): number
    on(sigName: "notify::server-ipv4", callback: any): number
    once(sigName: "notify::server-ipv4", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::server-ipv4", ...args: any[]): void
    connect(sigName: "notify::server-ipv6", callback: any): number
    on(sigName: "notify::server-ipv6", callback: any): number
    once(sigName: "notify::server-ipv6", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::server-ipv6", ...args: any[]): void
    connect(sigName: "notify::transcode-mimetype", callback: any): number
    on(sigName: "notify::transcode-mimetype", callback: any): number
    once(sigName: "notify::transcode-mimetype", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transcode-mimetype", ...args: any[]): void
    connect(sigName: "notify::txt-records", callback: any): number
    on(sigName: "notify::txt-records", callback: any): number
    once(sigName: "notify::txt-records", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::txt-records", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Share extends GObject.Object {

    // Own properties of DMAP-3.0.DMAP.Share

    static name: string

    // Constructors of DMAP-3.0.DMAP.Share

    constructor(config?: Share.ConstructorProperties) 
    _init(config?: Share.ConstructorProperties): void
}

export interface ConnectionClass {

    // Own fields of DMAP-3.0.DMAP.ConnectionClass

    parent: GObject.ObjectClass
    getProtocolVersionCc: (connection: Connection) => ContentCode
    getQueryMetadata: (connection: Connection) => string
    connected: (connection: Connection) => void
    disconnected: (connection: Connection) => void
    authenticate: (connection: Connection, name: string) => string
    connecting: (connection: Connection, state: ConnectionState, progress: number) => void
    operationDone: (connection: Connection) => void
}

export abstract class ConnectionClass {

    // Own properties of DMAP-3.0.DMAP.ConnectionClass

    static name: string
}

export interface ConnectionPrivate {
}

export class ConnectionPrivate {

    // Own properties of DMAP-3.0.DMAP.ConnectionPrivate

    static name: string
}

export interface ContainerDbIface {

    // Own fields of DMAP-3.0.DMAP.ContainerDbIface

    parent: GObject.TypeInterface
    add: (db: ContainerDb, record: ContainerRecord) => void
    count: (db: ContainerDb) => number
}

export abstract class ContainerDbIface {

    // Own properties of DMAP-3.0.DMAP.ContainerDbIface

    static name: string
}

export interface ContainerRecordIface {

    // Own fields of DMAP-3.0.DMAP.ContainerRecordIface

    parent: GObject.TypeInterface
    getId: (record: ContainerRecord) => number
    addEntry: (containerRecord: ContainerRecord, record: Record, id: number) => void
    getEntryCount: (record: ContainerRecord) => number
}

export abstract class ContainerRecordIface {

    // Own properties of DMAP-3.0.DMAP.ContainerRecordIface

    static name: string
}

export interface ContentCodeDefinition {

    // Own fields of DMAP-3.0.DMAP.ContentCodeDefinition

    code: ContentCode
    intCode: number
    name: string
    string: string
    type: Type
}

export class ContentCodeDefinition {

    // Own properties of DMAP-3.0.DMAP.ContentCodeDefinition

    static name: string
}

export interface DbFilterDefinition {

    // Own fields of DMAP-3.0.DMAP.DbFilterDefinition

    key: string
    value: string
    negate: boolean
}

export class DbFilterDefinition {

    // Own properties of DMAP-3.0.DMAP.DbFilterDefinition

    static name: string
}

export interface DbIface {

    // Own fields of DMAP-3.0.DMAP.DbIface

    parent: GObject.TypeInterface
    add: (db: Db, record: Record) => number
    addWithId: (db: Db, record: Record, id: number) => number
    addPath: (db: Db, path: string) => number
    lookupIdByLocation: (db: Db, location: string) => number
    count: (db: Db) => number
}

export abstract class DbIface {

    // Own properties of DMAP-3.0.DMAP.DbIface

    static name: string
}

export interface GstInputStreamClass {

    // Own fields of DMAP-3.0.DMAP.GstInputStreamClass

    parent: Gio.InputStreamClass
    killPipeline: (arg0: GstInputStream) => void
}

export abstract class GstInputStreamClass {

    // Own properties of DMAP-3.0.DMAP.GstInputStreamClass

    static name: string
}

export interface GstInputStreamPrivate {
}

export class GstInputStreamPrivate {

    // Own properties of DMAP-3.0.DMAP.GstInputStreamPrivate

    static name: string
}

export interface HashContext {

    // Own fields of DMAP-3.0.DMAP.HashContext

    buf: number[]
    bits: number[]
    in_: number[]
    version: number
}

export class HashContext {

    // Own properties of DMAP-3.0.DMAP.HashContext

    static name: string
}

export interface MdnsBrowserClass {

    // Own fields of DMAP-3.0.DMAP.MdnsBrowserClass

    parentClass: GObject.ObjectClass
    serviceAdded: (browser: MdnsBrowser, service: MdnsBrowserService) => void
    serviceRemoved: (browser: MdnsBrowser, service: MdnsBrowserService) => void
}

export abstract class MdnsBrowserClass {

    // Own properties of DMAP-3.0.DMAP.MdnsBrowserClass

    static name: string
}

export interface MdnsBrowserPrivate {
}

export class MdnsBrowserPrivate {

    // Own properties of DMAP-3.0.DMAP.MdnsBrowserPrivate

    static name: string
}

export interface MdnsBrowserService {

    // Own fields of DMAP-3.0.DMAP.MdnsBrowserService

    serviceName: string
    name: string
    host: string
    port: number
    passwordProtected: boolean
    pair: string
    transportProtocol: MdnsBrowserTransportProtocol
}

export class MdnsBrowserService {

    // Own properties of DMAP-3.0.DMAP.MdnsBrowserService

    static name: string
}

export interface MdnsPublisherClass {

    // Own fields of DMAP-3.0.DMAP.MdnsPublisherClass

    parentClass: GObject.ObjectClass
    published: (publisher: MdnsPublisher, name: string) => void
    nameCollision: (publisher: MdnsPublisher, name: string) => void
}

export abstract class MdnsPublisherClass {

    // Own properties of DMAP-3.0.DMAP.MdnsPublisherClass

    static name: string
}

export interface MdnsPublisherPrivate {
}

export class MdnsPublisherPrivate {

    // Own properties of DMAP-3.0.DMAP.MdnsPublisherPrivate

    static name: string
}

export interface MetaDataMap {

    // Own fields of DMAP-3.0.DMAP.MetaDataMap

    tag: string
    md: number
}

export class MetaDataMap {

    // Own properties of DMAP-3.0.DMAP.MetaDataMap

    static name: string
}

export interface Playlist {

    // Own fields of DMAP-3.0.DMAP.Playlist

    name: string
    id: number
    uris: object[]
}

export class Playlist {

    // Own properties of DMAP-3.0.DMAP.Playlist

    static name: string
}

export interface RecordFactoryIface {

    // Own fields of DMAP-3.0.DMAP.RecordFactoryIface

    parent: GObject.TypeInterface
}

export abstract class RecordFactoryIface {

    // Own properties of DMAP-3.0.DMAP.RecordFactoryIface

    static name: string
}

export interface RecordIface {

    // Own fields of DMAP-3.0.DMAP.RecordIface

    parent: GObject.TypeInterface
    setFromBlob: (record: Record, blob: Uint8Array) => boolean
}

export abstract class RecordIface {

    // Own properties of DMAP-3.0.DMAP.RecordIface

    static name: string
}

export interface ShareClass {

    // Own fields of DMAP-3.0.DMAP.ShareClass

    parent: GObject.ObjectClass
    getDesiredPort: (share: Share) => number
    getTypeOfService: (share: Share) => string
    messageAddStandardHeaders: (share: Share, msg: Soup.Message) => void
    addEntryToMlcl: (id: object, record: Record, mb: object) => void
    databasesBrowseXxx: (share: Share, server: Soup.Server, msg: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext) => void
    databasesItemsXxx: (share: Share, server: Soup.Server, msg: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext) => void
    serverInfo: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    contentCodes: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    login: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    logout: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    update: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    ctrlInt: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, ctx: Soup.ClientContext) => void
    published: (share: Share, publisher: MdnsPublisher, name: string) => void
    nameCollision: (share: Share, publisher: MdnsPublisher, name: string) => void
    databases: (share: Share, server: Soup.Server, message: Soup.Message, path: string, query: GLib.HashTable, context: Soup.ClientContext) => void
}

export abstract class ShareClass {

    // Own properties of DMAP-3.0.DMAP.ShareClass

    static name: string
}

export interface SharePrivate {
}

export class SharePrivate {

    // Own properties of DMAP-3.0.DMAP.SharePrivate

    static name: string
}

export interface StructureItem {

    // Own fields of DMAP-3.0.DMAP.StructureItem

    contentCode: ContentCode
    content: any
    size: number
}

export class StructureItem {

    // Own properties of DMAP-3.0.DMAP.StructureItem

    static name: string
}
