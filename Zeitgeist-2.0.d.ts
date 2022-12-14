
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Zeitgeist-2.0
 */

import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Gio from './Gio-2.0.js';

export enum ResultType {
    MOST_RECENT_EVENTS,
    LEAST_RECENT_EVENTS,
    MOST_RECENT_SUBJECTS,
    LEAST_RECENT_SUBJECTS,
    MOST_POPULAR_SUBJECTS,
    LEAST_POPULAR_SUBJECTS,
    MOST_POPULAR_ACTOR,
    LEAST_POPULAR_ACTOR,
    MOST_RECENT_ACTOR,
    LEAST_RECENT_ACTOR,
    MOST_RECENT_ORIGIN,
    LEAST_RECENT_ORIGIN,
    MOST_POPULAR_ORIGIN,
    LEAST_POPULAR_ORIGIN,
    OLDEST_ACTOR,
    MOST_RECENT_SUBJECT_INTERPRETATION,
    LEAST_RECENT_SUBJECT_INTERPRETATION,
    MOST_POPULAR_SUBJECT_INTERPRETATION,
    LEAST_POPULAR_SUBJECT_INTERPRETATION,
    MOST_RECENT_MIMETYPE,
    LEAST_RECENT_MIMETYPE,
    MOST_POPULAR_MIMETYPE,
    LEAST_POPULAR_MIMETYPE,
    MOST_RECENT_CURRENT_URI,
    LEAST_RECENT_CURRENT_URI,
    MOST_POPULAR_CURRENT_URI,
    LEAST_POPULAR_CURRENT_URI,
    MOST_RECENT_EVENT_ORIGIN,
    LEAST_RECENT_EVENT_ORIGIN,
    MOST_POPULAR_EVENT_ORIGIN,
    LEAST_POPULAR_EVENT_ORIGIN,
    MOST_RECENT_CURRENT_ORIGIN,
    LEAST_RECENT_CURRENT_ORIGIN,
    MOST_POPULAR_CURRENT_ORIGIN,
    LEAST_POPULAR_CURRENT_ORIGIN,
    RELEVANCY,
}
export enum RelevantResultType {
    RECENT,
    RELATED,
}
export enum StorageState {
    NOT_AVAILABLE,
    AVAILABLE,
    ANY,
}
export enum EngineError {
    BACKUP_FAILED,
    DATABASE_BUSY,
    DATABASE_CANTOPEN,
    DATABASE_CORRUPT,
    DATABASE_ERROR,
    DATABASE_RETIRE_FAILED,
    EXISTING_INSTANCE,
    INVALID_ARGUMENT,
    INVALID_EVENT,
    INVALID_KEY,
}
export enum DataModelError {
    INVALID_SIGNATURE,
    NULL_EVENT,
    TOO_MANY_RESULTS,
}
export const DataSourcesSIG_DATASOURCES: string
export const TimestampSECOND: number
export const TimestampMINUTE: number
export const TimestampHOUR: number
export const TimestampDAY: number
export const TimestampWEEK: number
export const TimestampYEAR: number
export const NCALALARM: string
export const NCALATTACHMENT: string
export const NCALCALENDAR: string
export const NCALCALENDAR_DATA_OBJECT: string
export const NCALEVENT: string
export const NCALFREEBUSY: string
export const NCALJOURNAL: string
export const NCALTIMEZONE: string
export const NCALTODO: string
export const NCOCONTACT: string
export const NCOCONTACT_GROUP: string
export const NCOCONTACT_LIST: string
export const NCOCONTACT_LIST_DATA_OBJECT: string
export const NCOORGANIZATION_CONTACT: string
export const NCOPERSON_CONTACT: string
export const NFOAPPLICATION: string
export const NFOARCHIVE: string
export const NFOARCHIVE_ITEM: string
export const NFOATTACHMENT: string
export const NFOAUDIO: string
export const NFOBOOKMARK: string
export const NFOBOOKMARK_FOLDER: string
export const NFOCURSOR: string
export const NFODATA_CONTAINER: string
export const NFODELETED_RESOURCE: string
export const NFODOCUMENT: string
export const NFOEMBEDDED_FILE_DATA_OBJECT: string
export const NFOEXECUTABLE: string
export const NFOFILESYSTEM: string
export const NFOFILESYSTEM_IMAGE: string
export const NFOFILE_DATA_OBJECT: string
export const NFOFOLDER: string
export const NFOFONT: string
export const NFOHARD_DISK_PARTITION: string
export const NFOHTML_DOCUMENT: string
export const NFOICON: string
export const NFOIMAGE: string
export const NFOMEDIA: string
export const NFOMEDIA_LIST: string
export const NFOMEDIA_STREAM: string
export const NFOMIND_MAP: string
export const NFOOPERATING_SYSTEM: string
export const NFOPAGINATED_TEXT_DOCUMENT: string
export const NFOPLAIN_TEXT_DOCUMENT: string
export const NFOPRESENTATION: string
export const NFORASTER_IMAGE: string
export const NFOREMOTE_DATA_OBJECT: string
export const NFOREMOTE_PORT_ADDRESS: string
export const NFOSOFTWARE: string
export const NFOSOFTWARE_ITEM: string
export const NFOSOFTWARE_SERVICE: string
export const NFOSOURCE_CODE: string
export const NFOSPREADSHEET: string
export const NFOTEXT_DOCUMENT: string
export const NFOTRASH: string
export const NFOVECTOR_IMAGE: string
export const NFOVIDEO: string
export const NFOVISUAL: string
export const NFOWEBSITE: string
export const NFOWEB_DATA_OBJECT: string
export const NIEDATA_OBJECT: string
export const NIEINFORMATION_ELEMENT: string
export const NMMMOVIE: string
export const NMMMUSIC_ALBUM: string
export const NMMMUSIC_PIECE: string
export const NMMTVSERIES: string
export const NMMTVSHOW: string
export const NMOEMAIL: string
export const NMOIMMESSAGE: string
export const NMOMAILBOX: string
export const NMOMAILBOX_DATA_OBJECT: string
export const NMOMESSAGE: string
export const NMOMIME_ENTITY: string
export const ZGACCEPT_EVENT: string
export const ZGACCESS_EVENT: string
export const ZGAPPLICATION_ACTION: string
export const ZGCREATE_EVENT: string
export const ZGDELETE_EVENT: string
export const ZGDENY_EVENT: string
export const ZGEVENT_INTERPRETATION: string
export const ZGEVENT_MANIFESTATION: string
export const ZGEXPIRE_EVENT: string
export const ZGHEURISTIC_ACTIVITY: string
export const ZGLEAVE_EVENT: string
export const ZGMODIFY_EVENT: string
export const ZGMOVE_EVENT: string
export const ZGRECEIVE_EVENT: string
export const ZGSCHEDULED_ACTIVITY: string
export const ZGSEND_EVENT: string
export const ZGSYSTEM_NOTIFICATION: string
export const ZGUSER_ACTIVITY: string
export const ZGWORLD_ACTIVITY: string
export const UtilsENGINE_DBUS_NAME: string
export const UtilsENGINE_DBUS_PATH: string
export const UtilsSIG_EVENT: string
export const UtilsMAX_DBUS_RESULT_SIZE: number
export const UtilsCACHE_SIZE: number
export function dataSourcesFromVariant(sourcesVariant: GLib.Variant): DataSource[]
export function dataSourcesToVariant(sources: GLib.HashTable): GLib.Variant
export function eventsFromVariant(vevents: GLib.Variant): Event[]
export function eventsToVariant(events: Event[]): GLib.Variant
export function eventsToVariantWithLimit(events: Event[], limit: number): GLib.Variant
export function timestampFromTimeval(timeval: GLib.TimeVal): number
export function timestampToTimeval(timestamp: number): /* result */ GLib.TimeVal
export function timestampFromNow(): number
export function timestampFromIso8601(datetime: string): number
export function timestampToIso8601(timestamp: number): string
export function timestampFromDate(date: GLib.Date): number
export function timestampFromDmy(day: GLib.DateDay, month: GLib.DateMonth, year: GLib.DateYear): number
export function timestampToDate(timestamp: number): /* result */ GLib.Date
export function timestampNextMidnight(timestamp: number): number
export function timestampPrevMidnight(timestamp: number): number
export function symbolGetDisplayName(symbolUri: string): string
export function symbolGetDescription(symbolUri: string): string
export function symbolGetAllParents(symbolUri: string): string[]
export function symbolGetAllChildren(symbolUri: string): string[]
export function symbolGetChildren(symbolUri: string): string[]
export function symbolGetParents(symbolUri: string): string[]
export function symbolIsA(symbolUri: string | null, parentUri: string | null): boolean
export function utilsGetDataPath(): string
export function utilsGetDefaultDataPath(): string
export function utilsGetDatabaseFilePath(): string
export function utilsSetDatabaseFilePath(path: string): void
export function utilsGetDatabaseFileBackupPath(): string
export function utilsGetDatabaseFileRetireName(): string
export function utilsGetLocalExtensionsPath(): string
export function utilsUsingInMemoryDatabase(): boolean
export function utilsBackupDatabase(): void
export function utilsParseNegation(val: string): [ /* returnType */ boolean, /* val */ string ]
export function utilsParseNoexpand(val: string): [ /* returnType */ boolean, /* val */ string ]
export function utilsParseWildcard(val: string): [ /* returnType */ boolean, /* val */ string ]
export function utilsIsEmptyString(s: string | null): boolean
export function utilsLogMayReadDirectly(): boolean
export function resultTypeIsSortOrderAsc(resultType: ResultType): boolean
export function registerMimetype(mimetype: string, interpretationUri: string): void
export function registerMimetypeRegex(mimetypeRegex: string, interpretationUri: string): void
export function interpretationForMimetype(mimetype: string | null): string | null
export function registerUriScheme(uriScheme: string, manifestationType: string): void
export function manifestationForUri(uri: string): string | null
export module RemoteRegistry {

    // Signal callback interfaces

    /**
     * Signal callback interface for `data-source-disconnected`
     */
    export interface DataSourceDisconnectedSignalCallback {
        (dataSource: GLib.Variant): void
    }

    /**
     * Signal callback interface for `data-source-enabled`
     */
    export interface DataSourceEnabledSignalCallback {
        (uniqueId: string, enabled: boolean): void
    }

    /**
     * Signal callback interface for `data-source-registered`
     */
    export interface DataSourceRegisteredSignalCallback {
        (dataSource: GLib.Variant): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface RemoteRegistry extends GObject.Object {

    // Owm methods of Zeitgeist-2.0.Zeitgeist.RemoteRegistry

    // Has conflict: getDataSources(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: getDataSourcesFinish(res: Gio.AsyncResult): GLib.Variant
    // Has conflict: registerDataSource(uniqueId: string, name: string, description: string, eventTemplates: GLib.Variant, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: registerDataSourceFinish(res: Gio.AsyncResult): boolean
    // Has conflict: setDataSourceEnabled(uniqueId: string, enabled: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: setDataSourceEnabledFinish(res: Gio.AsyncResult): void
    // Has conflict: getDataSourceFromId(uniqueId: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: getDataSourceFromIdFinish(res: Gio.AsyncResult): GLib.Variant

    // Own virtual methods of Zeitgeist-2.0.Zeitgeist.RemoteRegistry

    getDataSources(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getDataSourcesFinish(res: Gio.AsyncResult): GLib.Variant
    registerDataSource(uniqueId: string, name: string, description: string, eventTemplates: GLib.Variant, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    registerDataSourceFinish(res: Gio.AsyncResult): boolean
    setDataSourceEnabled(uniqueId: string, enabled: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    setDataSourceEnabledFinish(res: Gio.AsyncResult): void
    getDataSourceFromId(uniqueId: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getDataSourceFromIdFinish(res: Gio.AsyncResult): GLib.Variant

    // Own signals of Zeitgeist-2.0.Zeitgeist.RemoteRegistry

    connect(sigName: "data-source-disconnected", callback: RemoteRegistry.DataSourceDisconnectedSignalCallback): number
    on(sigName: "data-source-disconnected", callback: RemoteRegistry.DataSourceDisconnectedSignalCallback): number
    once(sigName: "data-source-disconnected", callback: RemoteRegistry.DataSourceDisconnectedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "data-source-disconnected", ...args: any[]): void
    connect(sigName: "data-source-enabled", callback: RemoteRegistry.DataSourceEnabledSignalCallback): number
    on(sigName: "data-source-enabled", callback: RemoteRegistry.DataSourceEnabledSignalCallback): number
    once(sigName: "data-source-enabled", callback: RemoteRegistry.DataSourceEnabledSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "data-source-enabled", enabled: boolean, ...args: any[]): void
    connect(sigName: "data-source-registered", callback: RemoteRegistry.DataSourceRegisteredSignalCallback): number
    on(sigName: "data-source-registered", callback: RemoteRegistry.DataSourceRegisteredSignalCallback): number
    once(sigName: "data-source-registered", callback: RemoteRegistry.DataSourceRegisteredSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "data-source-registered", ...args: any[]): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.RemoteRegistry

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class RemoteRegistry {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteRegistry

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.RemoteRegistry

    constructor(config?: RemoteRegistry.ConstructorProperties) 
    _init(config?: RemoteRegistry.ConstructorProperties): void
}

export module RemoteLog {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface RemoteLog extends GObject.Object {

    // Owm methods of Zeitgeist-2.0.Zeitgeist.RemoteLog

    // Has conflict: deleteEvents(eventIds: number[], cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: deleteEventsFinish(res: Gio.AsyncResult): GLib.Variant
    // Has conflict: findEventIds(timeRange: GLib.Variant, eventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: findEventIdsFinish(res: Gio.AsyncResult): number[]
    // Has conflict: findEvents(timeRange: GLib.Variant, eventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: findEventsFinish(res: Gio.AsyncResult): GLib.Variant
    // Has conflict: findRelatedUris(timeRange: GLib.Variant, eventTemplates: GLib.Variant, resultEventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: findRelatedUrisFinish(res: Gio.AsyncResult): string[]
    // Has conflict: getEvents(eventIds: number[], cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: getEventsFinish(res: Gio.AsyncResult): GLib.Variant
    // Has conflict: insertEvents(events: GLib.Variant, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: insertEventsFinish(res: Gio.AsyncResult): number[]
    // Has conflict: installMonitor(monitorPath: string, timeRange: GLib.Variant, eventTemplates: GLib.Variant, owner: string | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: installMonitorFinish(res: Gio.AsyncResult): void
    // Has conflict: removeMonitor(monitorPath: string, owner: string | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: removeMonitorFinish(res: Gio.AsyncResult): void
    // Has conflict: quit(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: quitFinish(res: Gio.AsyncResult): void
    // Has conflict: getExtensions(): string[]
    // Has conflict: getVersion(): /* result */ VersionStruct
    // Has conflict: getDatapath(): string

    // Own virtual methods of Zeitgeist-2.0.Zeitgeist.RemoteLog

    deleteEvents(eventIds: number[], cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    deleteEventsFinish(res: Gio.AsyncResult): GLib.Variant
    findEventIds(timeRange: GLib.Variant, eventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    findEventIdsFinish(res: Gio.AsyncResult): number[]
    findEvents(timeRange: GLib.Variant, eventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    findEventsFinish(res: Gio.AsyncResult): GLib.Variant
    findRelatedUris(timeRange: GLib.Variant, eventTemplates: GLib.Variant, resultEventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    findRelatedUrisFinish(res: Gio.AsyncResult): string[]
    getEvents(eventIds: number[], cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    getEventsFinish(res: Gio.AsyncResult): GLib.Variant
    insertEvents(events: GLib.Variant, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null): void
    insertEventsFinish(res: Gio.AsyncResult): number[]
    installMonitor(monitorPath: string, timeRange: GLib.Variant, eventTemplates: GLib.Variant, owner: string | null, callback: Gio.AsyncReadyCallback | null): void
    installMonitorFinish(res: Gio.AsyncResult): void
    removeMonitor(monitorPath: string, owner: string | null, callback: Gio.AsyncReadyCallback | null): void
    removeMonitorFinish(res: Gio.AsyncResult): void
    quit(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    quitFinish(res: Gio.AsyncResult): void
    getExtensions(): string[]
    getVersion(): /* result */ VersionStruct
    getDatapath(): string

    // Class property signals of Zeitgeist-2.0.Zeitgeist.RemoteLog

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class RemoteLog {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteLog

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.RemoteLog

    constructor(config?: RemoteLog.ConstructorProperties) 
    _init(config?: RemoteLog.ConstructorProperties): void
}

export module RemoteMonitor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface RemoteMonitor extends GObject.Object {

    // Owm methods of Zeitgeist-2.0.Zeitgeist.RemoteMonitor

    // Has conflict: notifyInsert(timeRange: GLib.Variant, events: GLib.Variant, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: notifyInsertFinish(res: Gio.AsyncResult): void
    // Has conflict: notifyDelete(timeRange: GLib.Variant, eventIds: number[], callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: notifyDeleteFinish(res: Gio.AsyncResult): void

    // Own virtual methods of Zeitgeist-2.0.Zeitgeist.RemoteMonitor

    notifyInsert(timeRange: GLib.Variant, events: GLib.Variant, callback: Gio.AsyncReadyCallback | null): void
    notifyInsertFinish(res: Gio.AsyncResult): void
    notifyDelete(timeRange: GLib.Variant, eventIds: number[], callback: Gio.AsyncReadyCallback | null): void
    notifyDeleteFinish(res: Gio.AsyncResult): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.RemoteMonitor

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class RemoteMonitor {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteMonitor

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.RemoteMonitor

    constructor(config?: RemoteMonitor.ConstructorProperties) 
    _init(config?: RemoteMonitor.ConstructorProperties): void
}

export module RemoteSimpleIndexer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface RemoteSimpleIndexer extends GObject.Object {

    // Owm methods of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexer

    // Has conflict: search(queryString: string, timeRange: GLib.Variant, filterTemplates: GLib.Variant, offset: number, count: number, resultType: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: searchFinish(res: Gio.AsyncResult): [ /* events */ GLib.Variant, /* matches */ number ]
    // Has conflict: searchWithRelevancies(queryString: string, timeRange: GLib.Variant, filterTemplates: GLib.Variant, storageState: number, offset: number, count: number, resultType: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: searchWithRelevanciesFinish(res: Gio.AsyncResult): [ /* events */ GLib.Variant, /* relevancies */ number[], /* matches */ number ]

    // Own virtual methods of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexer

    search(queryString: string, timeRange: GLib.Variant, filterTemplates: GLib.Variant, offset: number, count: number, resultType: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    searchFinish(res: Gio.AsyncResult): [ /* events */ GLib.Variant, /* matches */ number ]
    searchWithRelevancies(queryString: string, timeRange: GLib.Variant, filterTemplates: GLib.Variant, storageState: number, offset: number, count: number, resultType: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    searchWithRelevanciesFinish(res: Gio.AsyncResult): [ /* events */ GLib.Variant, /* relevancies */ number[], /* matches */ number ]

    // Class property signals of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class RemoteSimpleIndexer {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexer

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexer

    constructor(config?: RemoteSimpleIndexer.ConstructorProperties) 
    _init(config?: RemoteSimpleIndexer.ConstructorProperties): void
}

export module NetworkManagerDBus {

    // Signal callback interfaces

    /**
     * Signal callback interface for `state-changed`
     */
    export interface StateChangedSignalCallback {
        (state: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface NetworkManagerDBus extends GObject.Object {

    // Owm methods of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus

    // Has conflict: state(): number

    // Own virtual methods of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus

    state(): number

    // Own signals of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus

    connect(sigName: "state-changed", callback: NetworkManagerDBus.StateChangedSignalCallback): number
    on(sigName: "state-changed", callback: NetworkManagerDBus.StateChangedSignalCallback): number
    once(sigName: "state-changed", callback: NetworkManagerDBus.StateChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "state-changed", ...args: any[]): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class NetworkManagerDBus {

    // Own properties of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBus

    constructor(config?: NetworkManagerDBus.ConstructorProperties) 
    _init(config?: NetworkManagerDBus.ConstructorProperties): void
}

export module ConnmanManagerDBus {

    // Signal callback interfaces

    /**
     * Signal callback interface for `state-changed`
     */
    export interface StateChangedSignalCallback {
        (state: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ConnmanManagerDBus extends GObject.Object {

    // Owm methods of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus

    // Has conflict: getState(): string

    // Own virtual methods of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus

    getState(): string

    // Own signals of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus

    connect(sigName: "state-changed", callback: ConnmanManagerDBus.StateChangedSignalCallback): number
    on(sigName: "state-changed", callback: ConnmanManagerDBus.StateChangedSignalCallback): number
    once(sigName: "state-changed", callback: ConnmanManagerDBus.StateChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "state-changed", ...args: any[]): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ConnmanManagerDBus {

    // Own properties of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBus

    constructor(config?: ConnmanManagerDBus.ConstructorProperties) 
    _init(config?: ConnmanManagerDBus.ConstructorProperties): void
}

export module ResultSet {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ResultSet extends GObject.Object {

    // Owm methods of Zeitgeist-2.0.Zeitgeist.ResultSet

    // Has conflict: size(): number
    // Has conflict: estimatedMatches(): number
    // Has conflict: nextValue(): Event | null
    // Has conflict: hasNext(): boolean
    // Has conflict: tell(): number
    // Has conflict: reset(): void
    iterator(): ResultSet

    // Own virtual methods of Zeitgeist-2.0.Zeitgeist.ResultSet

    size(): number
    estimatedMatches(): number
    nextValue(): Event | null
    hasNext(): boolean
    tell(): number
    reset(): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.ResultSet

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ResultSet {

    // Own properties of Zeitgeist-2.0.Zeitgeist.ResultSet

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.ResultSet

    constructor(config?: ResultSet.ConstructorProperties) 
    _init(config?: ResultSet.ConstructorProperties): void
}

export module DataSourceRegistry {

    // Signal callback interfaces

    /**
     * Signal callback interface for `source-disconnected`
     */
    export interface SourceDisconnectedSignalCallback {
        (dataSource: DataSource): void
    }

    /**
     * Signal callback interface for `source-enabled`
     */
    export interface SourceEnabledSignalCallback {
        (uniqueId: string, enabled: boolean): void
    }

    /**
     * Signal callback interface for `source-registered`
     */
    export interface SourceRegisteredSignalCallback {
        (dataSource: DataSource): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends QueuedProxyWrapper.ConstructorProperties {
    }

}

export interface DataSourceRegistry {

    // Owm methods of Zeitgeist-2.0.Zeitgeist.DataSourceRegistry

    getDataSources(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getDataSourcesFinish(res: Gio.AsyncResult): DataSource[]
    getDataSourceFromId(uniqueId: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getDataSourceFromIdFinish(res: Gio.AsyncResult): DataSource
    registerDataSource(dataSource: DataSource, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    registerDataSourceFinish(res: Gio.AsyncResult): boolean
    setDataSourceEnabled(uniqueId: string, enabled: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    setDataSourceEnabledFinish(res: Gio.AsyncResult): void

    // Own signals of Zeitgeist-2.0.Zeitgeist.DataSourceRegistry

    connect(sigName: "source-disconnected", callback: DataSourceRegistry.SourceDisconnectedSignalCallback): number
    on(sigName: "source-disconnected", callback: DataSourceRegistry.SourceDisconnectedSignalCallback): number
    once(sigName: "source-disconnected", callback: DataSourceRegistry.SourceDisconnectedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "source-disconnected", ...args: any[]): void
    connect(sigName: "source-enabled", callback: DataSourceRegistry.SourceEnabledSignalCallback): number
    on(sigName: "source-enabled", callback: DataSourceRegistry.SourceEnabledSignalCallback): number
    once(sigName: "source-enabled", callback: DataSourceRegistry.SourceEnabledSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "source-enabled", enabled: boolean, ...args: any[]): void
    connect(sigName: "source-registered", callback: DataSourceRegistry.SourceRegisteredSignalCallback): number
    on(sigName: "source-registered", callback: DataSourceRegistry.SourceRegisteredSignalCallback): number
    once(sigName: "source-registered", callback: DataSourceRegistry.SourceRegisteredSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "source-registered", ...args: any[]): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.DataSourceRegistry

    connect(sigName: "notify::proxy-created", callback: any): number
    on(sigName: "notify::proxy-created", callback: any): number
    once(sigName: "notify::proxy-created", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proxy-created", ...args: any[]): void
    connect(sigName: "notify::is-connected", callback: any): number
    on(sigName: "notify::is-connected", callback: any): number
    once(sigName: "notify::is-connected", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-connected", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DataSourceRegistry extends QueuedProxyWrapper {

    // Own properties of Zeitgeist-2.0.Zeitgeist.DataSourceRegistry

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.DataSourceRegistry

    constructor(config?: DataSourceRegistry.ConstructorProperties) 
    constructor() 
    static new(): DataSourceRegistry
    _init(config?: DataSourceRegistry.ConstructorProperties): void
}

export module Index {

    // Constructor properties interface

    export interface ConstructorProperties extends QueuedProxyWrapper.ConstructorProperties {
    }

}

export interface Index {

    // Owm methods of Zeitgeist-2.0.Zeitgeist.Index

    search(query: string, timeRange: TimeRange, eventTemplates: Event[], offset: number, numEvents: number, resultType: ResultType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    searchFinish(res: Gio.AsyncResult): ResultSet
    searchWithRelevancies(query: string, timeRange: TimeRange, eventTemplates: Event[], storageState: StorageState, offset: number, numEvents: number, resultType: ResultType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    searchWithRelevanciesFinish(res: Gio.AsyncResult): [ /* returnType */ ResultSet, /* relevancies */ number[] ]

    // Class property signals of Zeitgeist-2.0.Zeitgeist.Index

    connect(sigName: "notify::proxy-created", callback: any): number
    on(sigName: "notify::proxy-created", callback: any): number
    once(sigName: "notify::proxy-created", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proxy-created", ...args: any[]): void
    connect(sigName: "notify::is-connected", callback: any): number
    on(sigName: "notify::is-connected", callback: any): number
    once(sigName: "notify::is-connected", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-connected", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Index extends QueuedProxyWrapper {

    // Own properties of Zeitgeist-2.0.Zeitgeist.Index

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.Index

    constructor(config?: Index.ConstructorProperties) 
    constructor() 
    static new(): Index
    _init(config?: Index.ConstructorProperties): void
}

export module Log {

    // Constructor properties interface

    export interface ConstructorProperties extends QueuedProxyWrapper.ConstructorProperties {
    }

}

export interface Log {

    // Owm methods of Zeitgeist-2.0.Zeitgeist.Log

    insertEvent(event: Event, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    insertEventFinish(res: Gio.AsyncResult): number[]
    insertEvents(events: Event[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    insertEventsFinish(res: Gio.AsyncResult): number[]
    insertEventNoReply(event: Event): void
    insertEventsNoReply(events: Event[]): void
    findEvents(timeRange: TimeRange, eventTemplates: Event[], storageState: StorageState, numEvents: number, resultType: ResultType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    findEventsFinish(res: Gio.AsyncResult): ResultSet
    findEventIds(timeRange: TimeRange, eventTemplates: Event[], storageState: StorageState, numEvents: number, resultType: ResultType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    findEventIdsFinish(res: Gio.AsyncResult): number[]
    getEvents(eventIds: number[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getEventsFinish(res: Gio.AsyncResult): ResultSet
    findRelatedUris(timeRange: TimeRange, eventTemplates: Event[], resultEventTemplates: Event[], storageState: StorageState, numEvents: number, resultType: RelevantResultType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    findRelatedUrisFinish(res: Gio.AsyncResult): string[]
    deleteEvents(eventIds: number[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    deleteEventsFinish(res: Gio.AsyncResult): TimeRange
    quit(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    quitFinish(res: Gio.AsyncResult): void
    installMonitor(monitor: Monitor): void
    removeMonitor(monitor: Monitor): void
    getVersion(): [ /* major */ number, /* minor */ number, /* micro */ number ]
    getExtensions(): string[]
    datapath(): string

    // Class property signals of Zeitgeist-2.0.Zeitgeist.Log

    connect(sigName: "notify::proxy-created", callback: any): number
    on(sigName: "notify::proxy-created", callback: any): number
    once(sigName: "notify::proxy-created", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proxy-created", ...args: any[]): void
    connect(sigName: "notify::is-connected", callback: any): number
    on(sigName: "notify::is-connected", callback: any): number
    once(sigName: "notify::is-connected", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-connected", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Log extends QueuedProxyWrapper {

    // Own properties of Zeitgeist-2.0.Zeitgeist.Log

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.Log

    constructor(config?: Log.ConstructorProperties) 
    constructor() 
    static new(): Log
    _init(config?: Log.ConstructorProperties): void
    static getDefault(): Log
}

export module Monitor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `events-inserted`
     */
    export interface EventsInsertedSignalCallback {
        (timeRange: TimeRange, events: ResultSet): void
    }

    /**
     * Signal callback interface for `events-deleted`
     */
    export interface EventsDeletedSignalCallback {
        (timeRange: TimeRange, eventIds: number[]): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends RemoteMonitor.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Zeitgeist-2.0.Zeitgeist.Monitor

        timeRange?: TimeRange | null
        eventTemplates?: Event[] | null
    }

}

export interface Monitor extends RemoteMonitor {

    // Own properties of Zeitgeist-2.0.Zeitgeist.Monitor

    timeRange: TimeRange
    eventTemplates: Event[]

    // Owm methods of Zeitgeist-2.0.Zeitgeist.Monitor

    getTemplates(): Event[]
    getPath(): string
    getTimeRange(): TimeRange
    setTimeRange(value: TimeRange): void
    getEventTemplates(): Event[]
    setEventTemplates(value: Event[]): void

    // Own signals of Zeitgeist-2.0.Zeitgeist.Monitor

    connect(sigName: "events-inserted", callback: Monitor.EventsInsertedSignalCallback): number
    on(sigName: "events-inserted", callback: Monitor.EventsInsertedSignalCallback): number
    once(sigName: "events-inserted", callback: Monitor.EventsInsertedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "events-inserted", events: ResultSet, ...args: any[]): void
    connect(sigName: "events-deleted", callback: Monitor.EventsDeletedSignalCallback): number
    on(sigName: "events-deleted", callback: Monitor.EventsDeletedSignalCallback): number
    once(sigName: "events-deleted", callback: Monitor.EventsDeletedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "events-deleted", eventIds: number[], ...args: any[]): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.Monitor

    connect(sigName: "notify::time-range", callback: any): number
    on(sigName: "notify::time-range", callback: any): number
    once(sigName: "notify::time-range", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::time-range", ...args: any[]): void
    connect(sigName: "notify::event-templates", callback: any): number
    on(sigName: "notify::event-templates", callback: any): number
    once(sigName: "notify::event-templates", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::event-templates", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Monitor extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.Monitor

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.Monitor

    constructor(config?: Monitor.ConstructorProperties) 
    constructor(timeRange: TimeRange, eventTemplates: Event[]) 
    static new(timeRange: TimeRange, eventTemplates: Event[]): Monitor
    _init(config?: Monitor.ConstructorProperties): void
}

export module QueuedProxyWrapper {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper

        proxyCreated?: boolean | null
        isConnected?: boolean | null
    }

}

export interface QueuedProxyWrapper {

    // Own properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper

    proxyCreated: boolean
    isConnected: boolean

    // Owm methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper

    proxyAcquired(proxy: GObject.Object): void
    proxyUnavailable(err: Gio.IOErrorEnum): void
    processQueuedMethods(): void
    nameOwnerChanged(pspec: GObject.ParamSpec): void
    // Has conflict: onConnectionEstablished(): void
    // Has conflict: onConnectionLost(): void
    waitForProxy(callback: Gio.AsyncReadyCallback | null): void
    waitForProxyFinish(res: Gio.AsyncResult): void
    getProxyCreated(): boolean
    getIsConnected(): boolean

    // Own virtual methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper

    onConnectionEstablished(): void
    onConnectionLost(): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper

    connect(sigName: "notify::proxy-created", callback: any): number
    on(sigName: "notify::proxy-created", callback: any): number
    once(sigName: "notify::proxy-created", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proxy-created", ...args: any[]): void
    connect(sigName: "notify::is-connected", callback: any): number
    on(sigName: "notify::is-connected", callback: any): number
    once(sigName: "notify::is-connected", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-connected", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class QueuedProxyWrapper extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapper

    constructor(config?: QueuedProxyWrapper.ConstructorProperties) 
    _init(config?: QueuedProxyWrapper.ConstructorProperties): void
}

export interface QueuedProxyWrapperQueuedMethod {

    // Own fields of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperQueuedMethod

    refCount: number

    // Owm methods of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperQueuedMethod

    getQueuedMethod(): [ /* returnType */ GLib.SourceFunc, /* resultTarget */ object ]
}

export class QueuedProxyWrapperQueuedMethod {

    // Own properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperQueuedMethod

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperQueuedMethod

    constructor(callback: GLib.SourceFunc) 
    static new(callback: GLib.SourceFunc): QueuedProxyWrapperQueuedMethod
}

export module DataSource {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Zeitgeist-2.0.Zeitgeist.DataSource

        uniqueId?: string | null
        name?: string | null
        description?: string | null
        eventTemplates?: Event[] | null
        enabled?: boolean | null
        running?: boolean | null
        timestamp?: number | null
    }

}

export interface DataSource {

    // Own properties of Zeitgeist-2.0.Zeitgeist.DataSource

    uniqueId: string
    name: string
    description: string
    eventTemplates: Event[]
    enabled: boolean
    running: boolean
    timestamp: number

    // Owm methods of Zeitgeist-2.0.Zeitgeist.DataSource

    toVariant(): GLib.Variant
    getUniqueId(): string
    setUniqueId(value: string): void
    getName(): string
    setName(value: string): void
    getDescription(): string
    setDescription(value: string): void
    getEventTemplates(): Event[] | null
    setEventTemplates(value: Event[] | null): void
    getEnabled(): boolean
    setEnabled(value: boolean): void
    getRunning(): boolean
    setRunning(value: boolean): void
    getTimestamp(): number
    setTimestamp(value: number): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.DataSource

    connect(sigName: "notify::unique-id", callback: any): number
    on(sigName: "notify::unique-id", callback: any): number
    once(sigName: "notify::unique-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unique-id", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::event-templates", callback: any): number
    on(sigName: "notify::event-templates", callback: any): number
    once(sigName: "notify::event-templates", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::event-templates", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: any): number
    on(sigName: "notify::enabled", callback: any): number
    once(sigName: "notify::enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::running", callback: any): number
    on(sigName: "notify::running", callback: any): number
    once(sigName: "notify::running", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::running", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: any): number
    on(sigName: "notify::timestamp", callback: any): number
    once(sigName: "notify::timestamp", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DataSource extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.DataSource

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.DataSource

    constructor(config?: DataSource.ConstructorProperties) 
    constructor() 
    static new(): DataSource
    static full(uniqueId: string, name: string, description: string, templates: Event[] | null): DataSource
    static fromVariant(variant: GLib.Variant, resetRunning: boolean): DataSource
    _init(config?: DataSource.ConstructorProperties): void
}

export module Event {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Zeitgeist-2.0.Zeitgeist.Event

        id?: number | null
        timestamp?: number | null
        origin?: string | null
        actor?: string | null
        interpretation?: string | null
        manifestation?: string | null
        subjects?: Subject[] | null
        payload?: any | null
    }

}

export interface Event {

    // Own properties of Zeitgeist-2.0.Zeitgeist.Event

    id: number
    timestamp: number
    origin: string
    actor: string
    interpretation: string
    manifestation: string
    subjects: Subject[]
    payload: any

    // Owm methods of Zeitgeist-2.0.Zeitgeist.Event

    getSubject(index: number): Subject
    numSubjects(): number
    addSubject(subject: Subject): void
    takeSubject(subject: Subject): void
    setActorFromAppInfo(info: Gio.AppInfo): void
    toVariant(): GLib.Variant
    debugPrint(): void
    matchesTemplate(templateEvent: Event): boolean
    getId(): number
    setId(value: number): void
    getTimestamp(): number
    setTimestamp(value: number): void
    getOrigin(): string | null
    setOrigin(value: string | null): void
    getActor(): string | null
    setActor(value: string | null): void
    getInterpretation(): string | null
    setInterpretation(value: string | null): void
    getManifestation(): string | null
    setManifestation(value: string | null): void
    getSubjects(): Subject[]
    setSubjects(value: Subject[]): void
    getPayload(): any | null
    setPayload(value: any | null): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.Event

    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: any): number
    on(sigName: "notify::timestamp", callback: any): number
    once(sigName: "notify::timestamp", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: "notify::origin", callback: any): number
    on(sigName: "notify::origin", callback: any): number
    once(sigName: "notify::origin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::actor", callback: any): number
    on(sigName: "notify::actor", callback: any): number
    once(sigName: "notify::actor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::actor", ...args: any[]): void
    connect(sigName: "notify::interpretation", callback: any): number
    on(sigName: "notify::interpretation", callback: any): number
    once(sigName: "notify::interpretation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interpretation", ...args: any[]): void
    connect(sigName: "notify::manifestation", callback: any): number
    on(sigName: "notify::manifestation", callback: any): number
    once(sigName: "notify::manifestation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::manifestation", ...args: any[]): void
    connect(sigName: "notify::subjects", callback: any): number
    on(sigName: "notify::subjects", callback: any): number
    once(sigName: "notify::subjects", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subjects", ...args: any[]): void
    connect(sigName: "notify::payload", callback: any): number
    on(sigName: "notify::payload", callback: any): number
    once(sigName: "notify::payload", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::payload", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Event extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.Event

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.Event

    constructor(config?: Event.ConstructorProperties) 
    static fromVariant(eventVariant: GLib.Variant): Event
    constructor() 
    static new(): Event
    _init(config?: Event.ConstructorProperties): void
}

export module Subject {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Zeitgeist-2.0.Zeitgeist.Subject

        uri?: string | null
        origin?: string | null
        text?: string | null
        storage?: string | null
        currentUri?: string | null
        currentOrigin?: string | null
        mimetype?: string | null
        interpretation?: string | null
        manifestation?: string | null
    }

}

export interface Subject {

    // Own properties of Zeitgeist-2.0.Zeitgeist.Subject

    uri: string
    origin: string
    text: string
    storage: string
    currentUri: string
    currentOrigin: string
    mimetype: string
    interpretation: string
    manifestation: string

    // Owm methods of Zeitgeist-2.0.Zeitgeist.Subject

    toVariant(): GLib.Variant
    matchesTemplate(templateSubject: Subject): boolean
    getUri(): string | null
    setUri(value: string | null): void
    getOrigin(): string | null
    setOrigin(value: string | null): void
    getText(): string | null
    setText(value: string | null): void
    getStorage(): string | null
    setStorage(value: string | null): void
    getCurrentUri(): string | null
    setCurrentUri(value: string | null): void
    getCurrentOrigin(): string | null
    setCurrentOrigin(value: string | null): void
    getMimetype(): string | null
    setMimetype(value: string | null): void
    getInterpretation(): string | null
    setInterpretation(value: string | null): void
    getManifestation(): string | null
    setManifestation(value: string | null): void

    // Class property signals of Zeitgeist-2.0.Zeitgeist.Subject

    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::origin", callback: any): number
    on(sigName: "notify::origin", callback: any): number
    once(sigName: "notify::origin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::text", callback: any): number
    on(sigName: "notify::text", callback: any): number
    once(sigName: "notify::text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::storage", callback: any): number
    on(sigName: "notify::storage", callback: any): number
    once(sigName: "notify::storage", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::storage", ...args: any[]): void
    connect(sigName: "notify::current-uri", callback: any): number
    on(sigName: "notify::current-uri", callback: any): number
    once(sigName: "notify::current-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::current-uri", ...args: any[]): void
    connect(sigName: "notify::current-origin", callback: any): number
    on(sigName: "notify::current-origin", callback: any): number
    once(sigName: "notify::current-origin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::current-origin", ...args: any[]): void
    connect(sigName: "notify::mimetype", callback: any): number
    on(sigName: "notify::mimetype", callback: any): number
    once(sigName: "notify::mimetype", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mimetype", ...args: any[]): void
    connect(sigName: "notify::interpretation", callback: any): number
    on(sigName: "notify::interpretation", callback: any): number
    once(sigName: "notify::interpretation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interpretation", ...args: any[]): void
    connect(sigName: "notify::manifestation", callback: any): number
    on(sigName: "notify::manifestation", callback: any): number
    once(sigName: "notify::manifestation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::manifestation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Subject extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.Subject

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.Subject

    constructor(config?: Subject.ConstructorProperties) 
    static full(uri: string | null, interpretation: string | null, manifestation: string | null, mimetype: string | null, origin: string | null, text: string | null, storage: string | null): Subject
    static moveEvent(sourceUri: string | null, sourceOrigin: string | null, destinationUri: string | null, destinationOrigin: string | null, interpretation: string | null, manifestation: string | null, mimetype: string | null, text: string | null, storage: string | null): Subject
    static fromVariant(subjectVariant: GLib.Variant): Subject
    constructor() 
    static new(): Subject
    _init(config?: Subject.ConstructorProperties): void
}

export module TimeRange {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Zeitgeist-2.0.Zeitgeist.TimeRange

        start?: number | null
        end?: number | null
    }

}

export interface TimeRange {

    // Own properties of Zeitgeist-2.0.Zeitgeist.TimeRange

    start: number
    end: number

    // Owm methods of Zeitgeist-2.0.Zeitgeist.TimeRange

    toVariant(): GLib.Variant
    intersect(timeRange: TimeRange): TimeRange | null
    getStart(): number
    getEnd(): number

    // Class property signals of Zeitgeist-2.0.Zeitgeist.TimeRange

    connect(sigName: "notify::start", callback: any): number
    on(sigName: "notify::start", callback: any): number
    once(sigName: "notify::start", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::start", ...args: any[]): void
    connect(sigName: "notify::end", callback: any): number
    on(sigName: "notify::end", callback: any): number
    once(sigName: "notify::end", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::end", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class TimeRange extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.TimeRange

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.TimeRange

    constructor(config?: TimeRange.ConstructorProperties) 
    constructor(startMsec: number, endMsec: number) 
    static new(startMsec: number, endMsec: number): TimeRange
    static anytime(): TimeRange
    static toNow(): TimeRange
    static fromNow(): TimeRange
    static fromVariant(variant: GLib.Variant): TimeRange
    _init(config?: TimeRange.ConstructorProperties): void
}

export module SimpleResultSet {

    // Constructor properties interface

    export interface ConstructorProperties extends ResultSet.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface SimpleResultSet extends ResultSet {

    // Class property signals of Zeitgeist-2.0.Zeitgeist.SimpleResultSet

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SimpleResultSet extends GObject.Object {

    // Own properties of Zeitgeist-2.0.Zeitgeist.SimpleResultSet

    static name: string

    // Constructors of Zeitgeist-2.0.Zeitgeist.SimpleResultSet

    constructor(config?: SimpleResultSet.ConstructorProperties) 
    constructor(events: Event[]) 
    static new(events: Event[]): SimpleResultSet
    static withNumMatches(events: Event[], matches: number): SimpleResultSet
    _init(config?: SimpleResultSet.ConstructorProperties): void
}

export interface DataSourceRegistryClass {
}

export abstract class DataSourceRegistryClass {

    // Own properties of Zeitgeist-2.0.Zeitgeist.DataSourceRegistryClass

    static name: string
}

export interface DataSourceRegistryPrivate {
}

export class DataSourceRegistryPrivate {

    // Own properties of Zeitgeist-2.0.Zeitgeist.DataSourceRegistryPrivate

    static name: string
}

export interface IndexClass {
}

export abstract class IndexClass {

    // Own properties of Zeitgeist-2.0.Zeitgeist.IndexClass

    static name: string
}

export interface IndexPrivate {
}

export class IndexPrivate {

    // Own properties of Zeitgeist-2.0.Zeitgeist.IndexPrivate

    static name: string
}

export interface LogClass {
}

export abstract class LogClass {

    // Own properties of Zeitgeist-2.0.Zeitgeist.LogClass

    static name: string
}

export interface LogPrivate {
}

export class LogPrivate {

    // Own properties of Zeitgeist-2.0.Zeitgeist.LogPrivate

    static name: string
}

export interface MonitorClass {
}

export abstract class MonitorClass {

    // Own properties of Zeitgeist-2.0.Zeitgeist.MonitorClass

    static name: string
}

export interface MonitorPrivate {
}

export class MonitorPrivate {

    // Own properties of Zeitgeist-2.0.Zeitgeist.MonitorPrivate

    static name: string
}

export interface QueuedProxyWrapperClass {

    // Own fields of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperClass

    onConnectionEstablished: (self: QueuedProxyWrapper) => void
    onConnectionLost: (self: QueuedProxyWrapper) => void
}

export abstract class QueuedProxyWrapperClass {

    // Own properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperClass

    static name: string
}

export interface QueuedProxyWrapperPrivate {
}

export class QueuedProxyWrapperPrivate {

    // Own properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperPrivate

    static name: string
}

export interface QueuedProxyWrapperQueuedMethodClass {
}

export abstract class QueuedProxyWrapperQueuedMethodClass {

    // Own properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperQueuedMethodClass

    static name: string
}

export interface QueuedProxyWrapperQueuedMethodPrivate {
}

export class QueuedProxyWrapperQueuedMethodPrivate {

    // Own properties of Zeitgeist-2.0.Zeitgeist.QueuedProxyWrapperQueuedMethodPrivate

    static name: string
}

export interface DataSourceClass {
}

export abstract class DataSourceClass {

    // Own properties of Zeitgeist-2.0.Zeitgeist.DataSourceClass

    static name: string
}

export interface DataSourcePrivate {
}

export class DataSourcePrivate {

    // Own properties of Zeitgeist-2.0.Zeitgeist.DataSourcePrivate

    static name: string
}

export interface EventClass {
}

export abstract class EventClass {

    // Own properties of Zeitgeist-2.0.Zeitgeist.EventClass

    static name: string
}

export interface EventPrivate {
}

export class EventPrivate {

    // Own properties of Zeitgeist-2.0.Zeitgeist.EventPrivate

    static name: string
}

export interface SubjectClass {
}

export abstract class SubjectClass {

    // Own properties of Zeitgeist-2.0.Zeitgeist.SubjectClass

    static name: string
}

export interface SubjectPrivate {
}

export class SubjectPrivate {

    // Own properties of Zeitgeist-2.0.Zeitgeist.SubjectPrivate

    static name: string
}

export interface TimeRangeClass {
}

export abstract class TimeRangeClass {

    // Own properties of Zeitgeist-2.0.Zeitgeist.TimeRangeClass

    static name: string
}

export interface TimeRangePrivate {
}

export class TimeRangePrivate {

    // Own properties of Zeitgeist-2.0.Zeitgeist.TimeRangePrivate

    static name: string
}

export interface SimpleResultSetClass {
}

export abstract class SimpleResultSetClass {

    // Own properties of Zeitgeist-2.0.Zeitgeist.SimpleResultSetClass

    static name: string
}

export interface SimpleResultSetPrivate {
}

export class SimpleResultSetPrivate {

    // Own properties of Zeitgeist-2.0.Zeitgeist.SimpleResultSetPrivate

    static name: string
}

export interface RemoteRegistryIface {

    // Own fields of Zeitgeist-2.0.Zeitgeist.RemoteRegistryIface

    getDataSources: (self: RemoteRegistry, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    getDataSourcesFinish: (self: RemoteRegistry, res: Gio.AsyncResult) => GLib.Variant
    registerDataSource: (self: RemoteRegistry, uniqueId: string, name: string, description: string, eventTemplates: GLib.Variant, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null) => void
    registerDataSourceFinish: (self: RemoteRegistry, res: Gio.AsyncResult) => boolean
    setDataSourceEnabled: (self: RemoteRegistry, uniqueId: string, enabled: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    setDataSourceEnabledFinish: (self: RemoteRegistry, res: Gio.AsyncResult) => void
    getDataSourceFromId: (self: RemoteRegistry, uniqueId: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    getDataSourceFromIdFinish: (self: RemoteRegistry, res: Gio.AsyncResult) => GLib.Variant
}

export abstract class RemoteRegistryIface {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteRegistryIface

    static name: string
}

export interface RemoteLogIface {

    // Own fields of Zeitgeist-2.0.Zeitgeist.RemoteLogIface

    deleteEvents: (self: RemoteLog, eventIds: number[], cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null) => void
    deleteEventsFinish: (self: RemoteLog, res: Gio.AsyncResult) => GLib.Variant
    findEventIds: (self: RemoteLog, timeRange: GLib.Variant, eventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null) => void
    findEventIdsFinish: (self: RemoteLog) => [ /* returnType */ number[], /* resultLength1 */ number ]
    findEvents: (self: RemoteLog, timeRange: GLib.Variant, eventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null) => void
    findEventsFinish: (self: RemoteLog, res: Gio.AsyncResult) => GLib.Variant
    findRelatedUris: (self: RemoteLog, timeRange: GLib.Variant, eventTemplates: GLib.Variant, resultEventTemplates: GLib.Variant, storageState: number, numEvents: number, resultType: number, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null) => void
    findRelatedUrisFinish: (self: RemoteLog) => [ /* returnType */ string[], /* resultLength1 */ number ]
    getEvents: (self: RemoteLog, eventIds: number[], cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null) => void
    getEventsFinish: (self: RemoteLog, res: Gio.AsyncResult) => GLib.Variant
    insertEvents: (self: RemoteLog, events: GLib.Variant, cancellable: Gio.Cancellable | null, sender: string | null, callback: Gio.AsyncReadyCallback | null) => void
    insertEventsFinish: (self: RemoteLog) => [ /* returnType */ number[], /* resultLength1 */ number ]
    installMonitor: (self: RemoteLog, monitorPath: string, timeRange: GLib.Variant, eventTemplates: GLib.Variant, owner: string | null, callback: Gio.AsyncReadyCallback | null) => void
    installMonitorFinish: (self: RemoteLog, res: Gio.AsyncResult) => void
    removeMonitor: (self: RemoteLog, monitorPath: string, owner: string | null, callback: Gio.AsyncReadyCallback | null) => void
    removeMonitorFinish: (self: RemoteLog, res: Gio.AsyncResult) => void
    quit: (self: RemoteLog, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    quitFinish: (self: RemoteLog, res: Gio.AsyncResult) => void
    getExtensions: () => [ /* returnType */ string[], /* resultLength1 */ number ]
    getVersion: (self: RemoteLog) => /* result */ VersionStruct
    getDatapath: (self: RemoteLog) => string
}

export abstract class RemoteLogIface {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteLogIface

    static name: string
}

export interface RemoteMonitorIface {

    // Own fields of Zeitgeist-2.0.Zeitgeist.RemoteMonitorIface

    notifyInsert: (self: RemoteMonitor, timeRange: GLib.Variant, events: GLib.Variant, callback: Gio.AsyncReadyCallback | null) => void
    notifyInsertFinish: (self: RemoteMonitor, res: Gio.AsyncResult) => void
    notifyDelete: (self: RemoteMonitor, timeRange: GLib.Variant, eventIds: number[], callback: Gio.AsyncReadyCallback | null) => void
    notifyDeleteFinish: (self: RemoteMonitor, res: Gio.AsyncResult) => void
}

export abstract class RemoteMonitorIface {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteMonitorIface

    static name: string
}

export interface RemoteSimpleIndexerIface {

    // Own fields of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexerIface

    search: (self: RemoteSimpleIndexer, queryString: string, timeRange: GLib.Variant, filterTemplates: GLib.Variant, offset: number, count: number, resultType: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    searchFinish: (self: RemoteSimpleIndexer, res: Gio.AsyncResult) => [ /* events */ GLib.Variant, /* matches */ number ]
    searchWithRelevancies: (self: RemoteSimpleIndexer, queryString: string, timeRange: GLib.Variant, filterTemplates: GLib.Variant, storageState: number, offset: number, count: number, resultType: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    searchWithRelevanciesFinish: (self: RemoteSimpleIndexer, res: Gio.AsyncResult) => [ /* events */ GLib.Variant, /* relevancies */ number[], /* matches */ number ]
}

export abstract class RemoteSimpleIndexerIface {

    // Own properties of Zeitgeist-2.0.Zeitgeist.RemoteSimpleIndexerIface

    static name: string
}

export interface NetworkManagerDBusIface {

    // Own fields of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBusIface

    state: (self: NetworkManagerDBus) => number
}

export abstract class NetworkManagerDBusIface {

    // Own properties of Zeitgeist-2.0.Zeitgeist.NetworkManagerDBusIface

    static name: string
}

export interface ConnmanManagerDBusIface {

    // Own fields of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBusIface

    getState: (self: ConnmanManagerDBus) => string
}

export abstract class ConnmanManagerDBusIface {

    // Own properties of Zeitgeist-2.0.Zeitgeist.ConnmanManagerDBusIface

    static name: string
}

export interface ResultSetIface {

    // Own fields of Zeitgeist-2.0.Zeitgeist.ResultSetIface

    size: (self: ResultSet) => number
    estimatedMatches: (self: ResultSet) => number
    nextValue: (self: ResultSet) => Event | null
    hasNext: (self: ResultSet) => boolean
    tell: (self: ResultSet) => number
    reset: (self: ResultSet) => void
}

export abstract class ResultSetIface {

    // Own properties of Zeitgeist-2.0.Zeitgeist.ResultSetIface

    static name: string
}

export interface VersionStruct {

    // Own fields of Zeitgeist-2.0.Zeitgeist.VersionStruct

    major: number
    minor: number
    micro: number
}

export class VersionStruct {

    // Own properties of Zeitgeist-2.0.Zeitgeist.VersionStruct

    static name: string
}
