
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Vda-1
 */

import type * as GCalc from './GCalc-2.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Gee from './Gee-0.8.js';
import type * as Json from './Json-1.0.js';
import type * as GXml from './GXml-0.20.js';
import type * as libxml2 from './libxml2-2.0.js';

export enum MoveDirection {
    FORWARD,
    BACKWARD,
    RELATIVE,
}
export enum MetaObjectError {
    APPEND,
    UPDATE,
    SAVE,
    DROP,
}
export enum ConnectionError {
    NO_DATABASE_NAME_ERROR,
    SERVER_ERROR,
    QUERY_CREATION_ERROR,
}
export enum DataObjectError {
    SELECT_ERROR,
    INSERT_ERROR,
    DELETE_ERROR,
    UPDATE_ERROR,
    PARAMETERS_ERROR,
    NO_CONNECTION_ERROR,
}
export enum DataCollectionError {
    INVALID_PROPERTY_ERROR,
}
export enum ParserError {
    INVALID_TOKEN_ERROR,
    INVALID_EXPRESSION_ERROR,
}
export enum QueryError {
    INVALID_QUERY_ERROR,
    INVALID_CONNECTION_ERROR,
    GENERAL_ERROR,
}
export enum RoleError {
    PROVILAGE_ERROR,
}
export enum RowModelError {
    INVALID_COLUMN_NAME_ERROR,
    INVALID_COLUMN_NUMBER_ERROR,
}
export enum SqlCommandError {
    INVALID_STRUCTURE_ERROR,
}
export enum SqlCommandSelectError {
    INVALID_FIELDS_ERROR,
}
export enum SqlExpressionError {
    INVALID_EXPRESSION_ERROR,
}
export enum ConnectionStatus {
    INVALID,
    IN_PROGRESS,
    CANCELED,
    MADE,
    DISCONNECTED,
    TIMEOUT,
    CONNECTED,
}
export enum SqlExpressionOperatorType {
    NONE,
    AND,
    OR,
    EQ,
    IS,
    LIKE,
    BETWEEN,
    NOT_BETWEEN,
    BETWEEN_SYMMETRIC,
    NOT_BETWEEN_SYMMETRIC,
    IS_DISTINCT_FROM,
    IS_NOT_DISTINCT_FROM,
    GT,
    LT,
    GEQ,
    LEQ,
    DIFF,
    REGEXP,
    REGEXP_CI,
    NOT_REGEXP,
    NOT_REGEXP_CI,
    SIMILAR_TO,
    IS_NULL,
    IS_NOT_NULL,
    IS_TRUE,
    IS_NOT_TRUE,
    IS_FALSE,
    IS_NOT_FALSE,
    IS_UNKNOWN,
    IS_NOT_UNKNOWN,
    NOT,
    IN,
    NOT_IN,
    CONCATENATE,
    PLUS,
    MINUS,
    STAR,
    DIV,
    REM,
    BITAND,
    BITOR,
    BITNOT,
    ILIKE,
}
export enum RoleGrant {
    NONE,
    SELECT,
    INSERT,
    UPDATE,
    DELETE,
    TRUNCATE,
    REFERENCES,
    TRIGGER,
    CREATE,
    USAGE,
    PRIVILEGES,
}
export module MetaObject {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.MetaObject

        connection?: Connection | null
    }

}

export interface MetaObject extends GObject.Object {

    // Own properties of Vda-1.Vda.MetaObject

    connection: Connection

    // Owm methods of Vda-1.Vda.MetaObject

    // Has conflict: getConnection(): Connection
    // Has conflict: setConnection(value: Connection): void

    // Own virtual methods of Vda-1.Vda.MetaObject

    getConnection(): Connection
    setConnection(value: Connection): void

    // Class property signals of Vda-1.Vda.MetaObject

    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MetaObject {

    // Own properties of Vda-1.Vda.MetaObject

    static name: string

    // Constructors of Vda-1.Vda.MetaObject

    constructor(config?: MetaObject.ConstructorProperties) 
    _init(config?: MetaObject.ConstructorProperties): void
}

export module MetaNamedObject {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, MetaObject.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.MetaNamedObject

        name?: string | null
    }

}

export interface MetaNamedObject extends GObject.Object, MetaObject {

    // Own properties of Vda-1.Vda.MetaNamedObject

    name: string

    // Owm methods of Vda-1.Vda.MetaNamedObject

    // Has conflict: getName(): string
    // Has conflict: setName(value: string): void

    // Own virtual methods of Vda-1.Vda.MetaNamedObject

    getName(): string
    setName(value: string): void

    // Class property signals of Vda-1.Vda.MetaNamedObject

    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MetaNamedObject {

    // Own properties of Vda-1.Vda.MetaNamedObject

    static name: string

    // Constructors of Vda-1.Vda.MetaNamedObject

    constructor(config?: MetaNamedObject.ConstructorProperties) 
    _init(config?: MetaNamedObject.ConstructorProperties): void
}

export module ColumnModel {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ColumnModel extends GObject.Object {

    // Own properties of Vda-1.Vda.ColumnModel

    readonly name: string
    readonly dataType: GObject.GType

    // Owm methods of Vda-1.Vda.ColumnModel

    // Has conflict: getName(): string
    // Has conflict: getDataType(): GObject.GType

    // Own virtual methods of Vda-1.Vda.ColumnModel

    getName(): string
    getDataType(): GObject.GType

    // Class property signals of Vda-1.Vda.ColumnModel

    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::data-type", callback: any): number
    on(sigName: "notify::data-type", callback: any): number
    once(sigName: "notify::data-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::data-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ColumnModel {

    // Own properties of Vda-1.Vda.ColumnModel

    static name: string

    // Constructors of Vda-1.Vda.ColumnModel

    constructor(config?: ColumnModel.ConstructorProperties) 
    _init(config?: ColumnModel.ConstructorProperties): void
}

export module Connection {

    // Signal callback interfaces

    /**
     * Signal callback interface for `closed`
     */
    export interface ClosedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `opened`
     */
    export interface OpenedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `closing`
     */
    export interface ClosingSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `canceled`
     */
    export interface CanceledSignalCallback {
        (message: string): void
    }

    /**
     * Signal callback interface for `timeout`
     */
    export interface TimeoutSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `disconnected`
     */
    export interface DisconnectedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.Connection

        parameters?: ConnectionParameters | null
    }

}

export interface Connection extends GObject.Object {

    // Own properties of Vda-1.Vda.Connection

    readonly status: ConnectionStatus
    parameters: ConnectionParameters
    readonly isOpened: boolean
    readonly connectionString: string

    // Owm methods of Vda-1.Vda.Connection

    // Has conflict: close(callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: closeFinish(res: Gio.AsyncResult): void
    // Has conflict: open(callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: openFinish(res: Gio.AsyncResult): ConnectionStatus
    // Has conflict: openFromString(cncString: string, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: openFromStringFinish(res: Gio.AsyncResult): ConnectionStatus
    // Has conflict: parseString(sql: string): Query
    // Has conflict: parseStringPrepared(name: string | null, sql: string): PreparedQuery | null
    // Has conflict: getPreparedQuery(name: string): PreparedQuery | null
    // Has conflict: queryFromCommand(cmd: SqlCommand, name?: string | null): PreparedQuery | null
    // Has conflict: valueToQuotedString(v: SqlValue): string
    // Has conflict: locale(category: string): string
    // Has conflict: getStatus(): ConnectionStatus
    // Has conflict: getParameters(): ConnectionParameters
    // Has conflict: setParameters(value: ConnectionParameters): void
    // Has conflict: getIsOpened(): boolean
    // Has conflict: getConnectionString(): string

    // Own virtual methods of Vda-1.Vda.Connection

    close(callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(res: Gio.AsyncResult): void
    open(callback?: Gio.AsyncReadyCallback | null): void
    openFinish(res: Gio.AsyncResult): ConnectionStatus
    openFromString(cncString: string, callback?: Gio.AsyncReadyCallback | null): void
    openFromStringFinish(res: Gio.AsyncResult): ConnectionStatus
    parseString(sql: string): Query
    parseStringPrepared(name: string | null, sql: string): PreparedQuery | null
    getPreparedQuery(name: string): PreparedQuery | null
    queryFromCommand(cmd: SqlCommand, name?: string | null): PreparedQuery | null
    valueToQuotedString(v: SqlValue): string
    locale(category: string): string
    getStatus(): ConnectionStatus
    getParameters(): ConnectionParameters
    setParameters(value: ConnectionParameters): void
    getIsOpened(): boolean
    getConnectionString(): string

    // Own signals of Vda-1.Vda.Connection

    connect(sigName: "closed", callback: Connection.ClosedSignalCallback): number
    on(sigName: "closed", callback: Connection.ClosedSignalCallback): number
    once(sigName: "closed", callback: Connection.ClosedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "closed", ...args: any[]): void
    connect(sigName: "opened", callback: Connection.OpenedSignalCallback): number
    on(sigName: "opened", callback: Connection.OpenedSignalCallback): number
    once(sigName: "opened", callback: Connection.OpenedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "opened", ...args: any[]): void
    connect(sigName: "closing", callback: Connection.ClosingSignalCallback): number
    on(sigName: "closing", callback: Connection.ClosingSignalCallback): number
    once(sigName: "closing", callback: Connection.ClosingSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "closing", ...args: any[]): void
    connect(sigName: "canceled", callback: Connection.CanceledSignalCallback): number
    on(sigName: "canceled", callback: Connection.CanceledSignalCallback): number
    once(sigName: "canceled", callback: Connection.CanceledSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "canceled", ...args: any[]): void
    connect(sigName: "timeout", callback: Connection.TimeoutSignalCallback): number
    on(sigName: "timeout", callback: Connection.TimeoutSignalCallback): number
    once(sigName: "timeout", callback: Connection.TimeoutSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "timeout", ...args: any[]): void
    connect(sigName: "disconnected", callback: Connection.DisconnectedSignalCallback): number
    on(sigName: "disconnected", callback: Connection.DisconnectedSignalCallback): number
    once(sigName: "disconnected", callback: Connection.DisconnectedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "disconnected", ...args: any[]): void

    // Class property signals of Vda-1.Vda.Connection

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

export class Connection {

    // Own properties of Vda-1.Vda.Connection

    static name: string

    // Constructors of Vda-1.Vda.Connection

    constructor(config?: Connection.ConstructorProperties) 
    _init(config?: Connection.ConstructorProperties): void
}

export module ConnectionBlob {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ConnectionBlob extends GObject.Object {

    // Owm methods of Vda-1.Vda.ConnectionBlob

    // Has conflict: create(stream: Gio.InputStream): SqlValueBlob
    // Has conflict: delete(val: SqlValueBlob): void

    // Own virtual methods of Vda-1.Vda.ConnectionBlob

    create(stream: Gio.InputStream): SqlValueBlob
    delete(val: SqlValueBlob): void

    // Class property signals of Vda-1.Vda.ConnectionBlob

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ConnectionBlob {

    // Own properties of Vda-1.Vda.ConnectionBlob

    static name: string

    // Constructors of Vda-1.Vda.ConnectionBlob

    constructor(config?: ConnectionBlob.ConstructorProperties) 
    _init(config?: ConnectionBlob.ConstructorProperties): void
}

export module ConnectionRolebased {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ConnectionRolebased extends GObject.Object {

    // Owm methods of Vda-1.Vda.ConnectionRolebased

    // Has conflict: currentRole(): Role | null
    // Has conflict: createRole(name: string, params: Parameters): Role | null

    // Own virtual methods of Vda-1.Vda.ConnectionRolebased

    currentRole(): Role | null
    createRole(name: string, params: Parameters): Role | null

    // Class property signals of Vda-1.Vda.ConnectionRolebased

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ConnectionRolebased {

    // Own properties of Vda-1.Vda.ConnectionRolebased

    static name: string

    // Constructors of Vda-1.Vda.ConnectionRolebased

    constructor(config?: ConnectionRolebased.ConstructorProperties) 
    _init(config?: ConnectionRolebased.ConstructorProperties): void
}

export module ConnectionTransactional {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ConnectionTransactional extends GObject.Object {

    // Owm methods of Vda-1.Vda.ConnectionTransactional

    // Has conflict: addSavepoint(name?: string | null): boolean
    // Has conflict: deleteSavepoint(name?: string | null): boolean
    // Has conflict: rollbackSavepoint(name?: string | null): boolean
    // Has conflict: beginTransaction(name?: string | null): boolean
    // Has conflict: commitTransaction(name?: string | null): boolean
    // Has conflict: rollbackTransaction(name?: string | null): boolean

    // Own virtual methods of Vda-1.Vda.ConnectionTransactional

    addSavepoint(name?: string | null): boolean
    deleteSavepoint(name?: string | null): boolean
    rollbackSavepoint(name?: string | null): boolean
    beginTransaction(name?: string | null): boolean
    commitTransaction(name?: string | null): boolean
    rollbackTransaction(name?: string | null): boolean

    // Class property signals of Vda-1.Vda.ConnectionTransactional

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ConnectionTransactional {

    // Own properties of Vda-1.Vda.ConnectionTransactional

    static name: string

    // Constructors of Vda-1.Vda.ConnectionTransactional

    constructor(config?: ConnectionTransactional.ConstructorProperties) 
    _init(config?: ConnectionTransactional.ConstructorProperties): void
}

export module DataObject {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.DataObject

        databaseConnection?: Connection | null
        databaseTableName?: string | null
        cancellable?: Gio.Cancellable | null
    }

}

export interface DataObject extends GObject.Object {

    // Own properties of Vda-1.Vda.DataObject

    databaseConnection: Connection
    databaseTableName: string
    cancellable: Gio.Cancellable

    // Owm methods of Vda-1.Vda.DataObject

    // Has conflict: updateDataFromDb(callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: updateDataFromDbFinish(res: Gio.AsyncResult): void
    // Has conflict: updateDataFromDbPkey(callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: updateDataFromDbPkeyFinish(res: Gio.AsyncResult): void
    // Has conflict: updateDataFromDbFull(usePkey: boolean, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: updateDataFromDbFullFinish(res: Gio.AsyncResult): void
    // Has conflict: insertDataIntoDb(callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: insertDataIntoDbFinish(res: Gio.AsyncResult): void
    // Has conflict: deleteDataFromDb(callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: deleteDataFromDbFinish(res: Gio.AsyncResult): void
    // Has conflict: deleteDataFromDbPkey(callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: deleteDataFromDbPkeyFinish(res: Gio.AsyncResult): void
    // Has conflict: deleteDataFromDbFull(usePkey: boolean, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: deleteDataFromDbFullFinish(res: Gio.AsyncResult): void
    // Has conflict: updateDataIntoDb(callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: updateDataIntoDbFinish(res: Gio.AsyncResult): void
    // Has conflict: updateDataIntoDbPkey(callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: updateDataIntoDbPkeyFinish(res: Gio.AsyncResult): void
    // Has conflict: updateDataIntoDbFull(usePkey: boolean, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: updateDataIntoDbFullFinish(res: Gio.AsyncResult): void
    // Has conflict: updateFromRow(table: TableModel, nrow: number): void
    // Has conflict: getDatabaseConnection(): Connection
    // Has conflict: setDatabaseConnection(value: Connection): void
    // Has conflict: getDatabaseTableName(): string
    // Has conflict: setDatabaseTableName(value: string): void
    // Has conflict: getCancellable(): Gio.Cancellable
    // Has conflict: setCancellable(value: Gio.Cancellable): void

    // Own virtual methods of Vda-1.Vda.DataObject

    updateDataFromDb(callback?: Gio.AsyncReadyCallback | null): void
    updateDataFromDbFinish(res: Gio.AsyncResult): void
    updateDataFromDbPkey(callback?: Gio.AsyncReadyCallback | null): void
    updateDataFromDbPkeyFinish(res: Gio.AsyncResult): void
    updateDataFromDbFull(usePkey: boolean, callback?: Gio.AsyncReadyCallback | null): void
    updateDataFromDbFullFinish(res: Gio.AsyncResult): void
    insertDataIntoDb(callback?: Gio.AsyncReadyCallback | null): void
    insertDataIntoDbFinish(res: Gio.AsyncResult): void
    deleteDataFromDb(callback?: Gio.AsyncReadyCallback | null): void
    deleteDataFromDbFinish(res: Gio.AsyncResult): void
    deleteDataFromDbPkey(callback?: Gio.AsyncReadyCallback | null): void
    deleteDataFromDbPkeyFinish(res: Gio.AsyncResult): void
    deleteDataFromDbFull(usePkey: boolean, callback?: Gio.AsyncReadyCallback | null): void
    deleteDataFromDbFullFinish(res: Gio.AsyncResult): void
    updateDataIntoDb(callback?: Gio.AsyncReadyCallback | null): void
    updateDataIntoDbFinish(res: Gio.AsyncResult): void
    updateDataIntoDbPkey(callback?: Gio.AsyncReadyCallback | null): void
    updateDataIntoDbPkeyFinish(res: Gio.AsyncResult): void
    updateDataIntoDbFull(usePkey: boolean, callback?: Gio.AsyncReadyCallback | null): void
    updateDataIntoDbFullFinish(res: Gio.AsyncResult): void
    updateFromRow(table: TableModel, nrow: number): void
    getDatabaseConnection(): Connection
    setDatabaseConnection(value: Connection): void
    getDatabaseTableName(): string
    setDatabaseTableName(value: string): void
    getCancellable(): Gio.Cancellable
    setCancellable(value: Gio.Cancellable): void

    // Class property signals of Vda-1.Vda.DataObject

    connect(sigName: "notify::database-connection", callback: any): number
    on(sigName: "notify::database-connection", callback: any): number
    once(sigName: "notify::database-connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::database-connection", ...args: any[]): void
    connect(sigName: "notify::database-table-name", callback: any): number
    on(sigName: "notify::database-table-name", callback: any): number
    once(sigName: "notify::database-table-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::database-table-name", ...args: any[]): void
    connect(sigName: "notify::cancellable", callback: any): number
    on(sigName: "notify::cancellable", callback: any): number
    once(sigName: "notify::cancellable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DataObject {

    // Own properties of Vda-1.Vda.DataObject

    static name: string

    // Constructors of Vda-1.Vda.DataObject

    constructor(config?: DataObject.ConstructorProperties) 
    _init(config?: DataObject.ConstructorProperties): void
    static createSelectQuery(obj: DataObject, usePkey: boolean): SqlCommandSelect
    static createSelectAll(obj: DataObject): SqlCommandSelect
    static createInsertQuery(obj: DataObject): SqlCommandInsert
    static createDeleteQuery(obj: DataObject, usePkey: boolean): SqlCommandDelete
    static createUpdateQuery(obj: DataObject, usePkey: boolean): SqlCommandUpdate
}

export module DataCollection {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.DataCollection

        databaseConnection?: Connection | null
        cancellable?: Gio.Cancellable | null
    }

}

export interface DataCollection extends GObject.Object {

    // Own properties of Vda-1.Vda.DataCollection

    databaseConnection: Connection
    readonly parentProperty: string
    readonly parent: DataObject
    readonly objectType: GObject.GType
    readonly refField: string
    cancellable: Gio.Cancellable

    // Owm methods of Vda-1.Vda.DataCollection

    // Has conflict: getObjects(callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: getObjectsFinish(res: Gio.AsyncResult): TableModel
    // Has conflict: getDatabaseConnection(): Connection
    // Has conflict: setDatabaseConnection(value: Connection): void
    // Has conflict: getParentProperty(): string
    // Has conflict: getParent(): DataObject
    // Has conflict: getObjectType(): GObject.GType
    // Has conflict: getRefField(): string
    // Has conflict: getCancellable(): Gio.Cancellable
    // Has conflict: setCancellable(value: Gio.Cancellable): void

    // Own virtual methods of Vda-1.Vda.DataCollection

    getObjects(callback?: Gio.AsyncReadyCallback | null): void
    getObjectsFinish(res: Gio.AsyncResult): TableModel
    getDatabaseConnection(): Connection
    setDatabaseConnection(value: Connection): void
    getParentProperty(): string
    getParent(): DataObject
    getObjectType(): GObject.GType
    getRefField(): string
    getCancellable(): Gio.Cancellable
    setCancellable(value: Gio.Cancellable): void

    // Class property signals of Vda-1.Vda.DataCollection

    connect(sigName: "notify::database-connection", callback: any): number
    on(sigName: "notify::database-connection", callback: any): number
    once(sigName: "notify::database-connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::database-connection", ...args: any[]): void
    connect(sigName: "notify::parent-property", callback: any): number
    on(sigName: "notify::parent-property", callback: any): number
    once(sigName: "notify::parent-property", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-property", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::object-type", callback: any): number
    on(sigName: "notify::object-type", callback: any): number
    once(sigName: "notify::object-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-type", ...args: any[]): void
    connect(sigName: "notify::ref-field", callback: any): number
    on(sigName: "notify::ref-field", callback: any): number
    once(sigName: "notify::ref-field", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ref-field", ...args: any[]): void
    connect(sigName: "notify::cancellable", callback: any): number
    on(sigName: "notify::cancellable", callback: any): number
    once(sigName: "notify::cancellable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DataCollection {

    // Own properties of Vda-1.Vda.DataCollection

    static name: string

    // Constructors of Vda-1.Vda.DataCollection

    constructor(config?: DataCollection.ConstructorProperties) 
    _init(config?: DataCollection.ConstructorProperties): void
}

export module HashModel {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Gio.ListModel.ConstructorProperties {
    }

}

export interface HashModel extends GObject.Object, Gio.ListModel {

    // Owm methods of Vda-1.Vda.HashModel

    // Has conflict: add(object: GObject.Object): void
    // Has conflict: find(key: GObject.Object): GObject.Object | null
    // Has conflict: remove(object: GObject.Object): void

    // Own virtual methods of Vda-1.Vda.HashModel

    add(object: GObject.Object): void
    find(key: GObject.Object): GObject.Object | null
    remove(object: GObject.Object): void

    // Class property signals of Vda-1.Vda.HashModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class HashModel {

    // Own properties of Vda-1.Vda.HashModel

    static name: string

    // Constructors of Vda-1.Vda.HashModel

    constructor(config?: HashModel.ConstructorProperties) 
    _init(config?: HashModel.ConstructorProperties): void
}

export module Inserted {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Result.ConstructorProperties {
    }

}

export interface Inserted extends GObject.Object, Result {

    // Own properties of Vda-1.Vda.Inserted

    readonly number: number
    readonly lastInserted: RowModel

    // Owm methods of Vda-1.Vda.Inserted

    // Has conflict: getNumber(): number
    // Has conflict: getLastInserted(): RowModel

    // Own virtual methods of Vda-1.Vda.Inserted

    getNumber(): number
    getLastInserted(): RowModel

    // Class property signals of Vda-1.Vda.Inserted

    connect(sigName: "notify::number", callback: any): number
    on(sigName: "notify::number", callback: any): number
    once(sigName: "notify::number", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::number", ...args: any[]): void
    connect(sigName: "notify::last-inserted", callback: any): number
    on(sigName: "notify::last-inserted", callback: any): number
    once(sigName: "notify::last-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-inserted", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Inserted {

    // Own properties of Vda-1.Vda.Inserted

    static name: string

    // Constructors of Vda-1.Vda.Inserted

    constructor(config?: Inserted.ConstructorProperties) 
    _init(config?: Inserted.ConstructorProperties): void
}

export module ParsedQuery {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, PreparedQuery.ConstructorProperties {
    }

}

export interface ParsedQuery extends GObject.Object, PreparedQuery {

    // Own properties of Vda-1.Vda.ParsedQuery

    readonly command: SqlCommand

    // Owm methods of Vda-1.Vda.ParsedQuery

    // Has conflict: getCommand(): SqlCommand

    // Own virtual methods of Vda-1.Vda.ParsedQuery

    getCommand(): SqlCommand

    // Class property signals of Vda-1.Vda.ParsedQuery

    connect(sigName: "notify::command", callback: any): number
    on(sigName: "notify::command", callback: any): number
    once(sigName: "notify::command", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::command", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::sql", callback: any): number
    on(sigName: "notify::sql", callback: any): number
    once(sigName: "notify::sql", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sql", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ParsedQuery {

    // Own properties of Vda-1.Vda.ParsedQuery

    static name: string

    // Constructors of Vda-1.Vda.ParsedQuery

    constructor(config?: ParsedQuery.ConstructorProperties) 
    _init(config?: ParsedQuery.ConstructorProperties): void
}

export module PreparedQuery {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Query.ConstructorProperties {
    }

}

export interface PreparedQuery extends GObject.Object, Query {

    // Own properties of Vda-1.Vda.PreparedQuery

    readonly name: string
    readonly parameters: SqlParameters

    // Owm methods of Vda-1.Vda.PreparedQuery

    // Has conflict: getName(): string
    // Has conflict: getParameters(): SqlParameters

    // Own virtual methods of Vda-1.Vda.PreparedQuery

    getName(): string
    getParameters(): SqlParameters

    // Class property signals of Vda-1.Vda.PreparedQuery

    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::sql", callback: any): number
    on(sigName: "notify::sql", callback: any): number
    once(sigName: "notify::sql", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sql", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PreparedQuery {

    // Own properties of Vda-1.Vda.PreparedQuery

    static name: string

    // Constructors of Vda-1.Vda.PreparedQuery

    constructor(config?: PreparedQuery.ConstructorProperties) 
    _init(config?: PreparedQuery.ConstructorProperties): void
}

export module Query {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Query extends GObject.Object {

    // Own properties of Vda-1.Vda.Query

    readonly sql: string
    readonly connection: Connection

    // Owm methods of Vda-1.Vda.Query

    // Has conflict: execute(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: executeFinish(res: Gio.AsyncResult): Result | null
    // Has conflict: cancel(callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: cancelFinish(res: Gio.AsyncResult): void
    // Has conflict: renderSql(): string
    // Has conflict: getSql(): string
    // Has conflict: getConnection(): Connection

    // Own virtual methods of Vda-1.Vda.Query

    execute(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeFinish(res: Gio.AsyncResult): Result | null
    cancel(callback?: Gio.AsyncReadyCallback | null): void
    cancelFinish(res: Gio.AsyncResult): void
    renderSql(): string
    getSql(): string
    getConnection(): Connection

    // Class property signals of Vda-1.Vda.Query

    connect(sigName: "notify::sql", callback: any): number
    on(sigName: "notify::sql", callback: any): number
    once(sigName: "notify::sql", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sql", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Query {

    // Own properties of Vda-1.Vda.Query

    static name: string

    // Constructors of Vda-1.Vda.Query

    constructor(config?: Query.ConstructorProperties) 
    _init(config?: Query.ConstructorProperties): void
}

export module Result {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Result extends GObject.Object {

    // Class property signals of Vda-1.Vda.Result

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Result {

    // Own properties of Vda-1.Vda.Result

    static name: string

    // Constructors of Vda-1.Vda.Result

    constructor(config?: Result.ConstructorProperties) 
    _init(config?: Result.ConstructorProperties): void
}

export module Role {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Role extends GObject.Object {

    // Own properties of Vda-1.Vda.Role

    readonly connection: Connection

    // Owm methods of Vda-1.Vda.Role

    // Has conflict: name(callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: nameFinish(res: Gio.AsyncResult): string
    // Has conflict: membership(callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: membershipFinish(res: Gio.AsyncResult): HashModel
    // Has conflict: privilages(object: MetaObject, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: privilagesFinish(res: Gio.AsyncResult): RoleGrant
    // Has conflict: changePrivilages(object: MetaObject, grant: RoleGrant, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: changePrivilagesFinish(res: Gio.AsyncResult): void
    // Has conflict: getConnection(): Connection

    // Own virtual methods of Vda-1.Vda.Role

    name(callback?: Gio.AsyncReadyCallback | null): void
    nameFinish(res: Gio.AsyncResult): string
    membership(callback?: Gio.AsyncReadyCallback | null): void
    membershipFinish(res: Gio.AsyncResult): HashModel
    privilages(object: MetaObject, callback?: Gio.AsyncReadyCallback | null): void
    privilagesFinish(res: Gio.AsyncResult): RoleGrant
    changePrivilages(object: MetaObject, grant: RoleGrant, callback?: Gio.AsyncReadyCallback | null): void
    changePrivilagesFinish(res: Gio.AsyncResult): void
    getConnection(): Connection

    // Class property signals of Vda-1.Vda.Role

    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Role {

    // Own properties of Vda-1.Vda.Role

    static name: string

    // Constructors of Vda-1.Vda.Role

    constructor(config?: Role.ConstructorProperties) 
    _init(config?: Role.ConstructorProperties): void
}

export module RowModel {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Gio.ListModel.ConstructorProperties {
    }

}

export interface RowModel extends GObject.Object, Gio.ListModel {

    // Own properties of Vda-1.Vda.RowModel

    readonly nColumns: number

    // Owm methods of Vda-1.Vda.RowModel

    // Has conflict: getColumn(name: string): ColumnModel | null
    // Has conflict: getColumnAt(col: number): ColumnModel | null
    // Has conflict: getValue(name: string): SqlValue | null
    // Has conflict: getValueAt(col: number): SqlValue | null
    // Has conflict: getString(name: string): string | null
    // Has conflict: getStringAt(col: number): string | null
    // Has conflict: getNColumns(): number

    // Own virtual methods of Vda-1.Vda.RowModel

    getColumn(name: string): ColumnModel | null
    getColumnAt(col: number): ColumnModel | null
    getValue(name: string): SqlValue | null
    getValueAt(col: number): SqlValue | null
    getString(name: string): string | null
    getStringAt(col: number): string | null
    getNColumns(): number

    // Class property signals of Vda-1.Vda.RowModel

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

export class RowModel {

    // Own properties of Vda-1.Vda.RowModel

    static name: string

    // Constructors of Vda-1.Vda.RowModel

    constructor(config?: RowModel.ConstructorProperties) 
    _init(config?: RowModel.ConstructorProperties): void
}

export module SqlAffectedRows {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Result.ConstructorProperties {
    }

}

export interface SqlAffectedRows extends GObject.Object, Result {

    // Own properties of Vda-1.Vda.SqlAffectedRows

    readonly number: number

    // Owm methods of Vda-1.Vda.SqlAffectedRows

    // Has conflict: getNumber(): number

    // Own virtual methods of Vda-1.Vda.SqlAffectedRows

    getNumber(): number

    // Class property signals of Vda-1.Vda.SqlAffectedRows

    connect(sigName: "notify::number", callback: any): number
    on(sigName: "notify::number", callback: any): number
    once(sigName: "notify::number", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::number", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlAffectedRows {

    // Own properties of Vda-1.Vda.SqlAffectedRows

    static name: string

    // Constructors of Vda-1.Vda.SqlAffectedRows

    constructor(config?: SqlAffectedRows.ConstructorProperties) 
    _init(config?: SqlAffectedRows.ConstructorProperties): void
}

export module SqlCommand {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SqlCommand extends GObject.Object {

    // Own properties of Vda-1.Vda.SqlCommand

    readonly connection: Connection

    // Owm methods of Vda-1.Vda.SqlCommand

    // Has conflict: getConnection(): Connection

    // Own virtual methods of Vda-1.Vda.SqlCommand

    getConnection(): Connection

    // Class property signals of Vda-1.Vda.SqlCommand

    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlCommand {

    // Own properties of Vda-1.Vda.SqlCommand

    static name: string

    // Constructors of Vda-1.Vda.SqlCommand

    constructor(config?: SqlCommand.ConstructorProperties) 
    _init(config?: SqlCommand.ConstructorProperties): void
}

export module SqlCommandConditional {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SqlCommandConditional extends GObject.Object {

    // Own properties of Vda-1.Vda.SqlCommandConditional

    readonly condition: SqlExpression

    // Owm methods of Vda-1.Vda.SqlCommandConditional

    // Has conflict: getCondition(): SqlExpression

    // Own virtual methods of Vda-1.Vda.SqlCommandConditional

    getCondition(): SqlExpression

    // Class property signals of Vda-1.Vda.SqlCommandConditional

    connect(sigName: "notify::condition", callback: any): number
    on(sigName: "notify::condition", callback: any): number
    once(sigName: "notify::condition", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::condition", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlCommandConditional {

    // Own properties of Vda-1.Vda.SqlCommandConditional

    static name: string

    // Constructors of Vda-1.Vda.SqlCommandConditional

    constructor(config?: SqlCommandConditional.ConstructorProperties) 
    _init(config?: SqlCommandConditional.ConstructorProperties): void
}

export module SqlCommandDelete {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlCommandTableRelated.ConstructorProperties, SqlCommandConditional.ConstructorProperties, SqlCommand.ConstructorProperties, SqlCommandParametrized.ConstructorProperties {
    }

}

export interface SqlCommandDelete extends GObject.Object, SqlCommandTableRelated, SqlCommandConditional, SqlCommand, SqlCommandParametrized {

    // Owm methods of Vda-1.Vda.SqlCommandDelete

    // Has conflict: stringify(): string
    // Has conflict: toQuery(name?: string | null): Query
    // Has conflict: parse(sql: string): void

    // Own virtual methods of Vda-1.Vda.SqlCommandDelete

    stringify(): string
    toQuery(name?: string | null): Query
    parse(sql: string): void

    // Class property signals of Vda-1.Vda.SqlCommandDelete

    connect(sigName: "notify::table", callback: any): number
    on(sigName: "notify::table", callback: any): number
    once(sigName: "notify::table", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::allias", callback: any): number
    on(sigName: "notify::allias", callback: any): number
    once(sigName: "notify::allias", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: "notify::condition", callback: any): number
    on(sigName: "notify::condition", callback: any): number
    once(sigName: "notify::condition", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::condition", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlCommandDelete {

    // Own properties of Vda-1.Vda.SqlCommandDelete

    static name: string

    // Constructors of Vda-1.Vda.SqlCommandDelete

    constructor(config?: SqlCommandDelete.ConstructorProperties) 
    _init(config?: SqlCommandDelete.ConstructorProperties): void
}

export module SqlCommandInsert {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlCommandTableRelated.ConstructorProperties, SqlCommandModification.ConstructorProperties, SqlCommand.ConstructorProperties, SqlCommandParametrized.ConstructorProperties {
    }

}

export interface SqlCommandInsert extends GObject.Object, SqlCommandTableRelated, SqlCommandModification, SqlCommand, SqlCommandParametrized {

    // Owm methods of Vda-1.Vda.SqlCommandInsert

    // Has conflict: stringify(): string
    // Has conflict: toQuery(name?: string | null): Query
    // Has conflict: parse(sql: string): void

    // Own virtual methods of Vda-1.Vda.SqlCommandInsert

    stringify(): string
    toQuery(name?: string | null): Query
    parse(sql: string): void

    // Class property signals of Vda-1.Vda.SqlCommandInsert

    connect(sigName: "notify::table", callback: any): number
    on(sigName: "notify::table", callback: any): number
    once(sigName: "notify::table", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::allias", callback: any): number
    on(sigName: "notify::allias", callback: any): number
    once(sigName: "notify::allias", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: "notify::fields", callback: any): number
    on(sigName: "notify::fields", callback: any): number
    once(sigName: "notify::fields", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fields", ...args: any[]): void
    connect(sigName: "notify::values", callback: any): number
    on(sigName: "notify::values", callback: any): number
    once(sigName: "notify::values", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlCommandInsert {

    // Own properties of Vda-1.Vda.SqlCommandInsert

    static name: string

    // Constructors of Vda-1.Vda.SqlCommandInsert

    constructor(config?: SqlCommandInsert.ConstructorProperties) 
    _init(config?: SqlCommandInsert.ConstructorProperties): void
}

export module SqlCommandModification {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SqlCommandModification extends GObject.Object {

    // Own properties of Vda-1.Vda.SqlCommandModification

    readonly fields: HashModel
    readonly values: HashModel

    // Owm methods of Vda-1.Vda.SqlCommandModification

    // Has conflict: addFieldValue(name: string, val?: any | null): void
    // Has conflict: addField(name: string): void
    // Has conflict: addValue(val?: any | null): void
    // Has conflict: addFieldParameterValue(field: string, par: string, gtype: GObject.GType): void
    // Has conflict: addParameter(par: string, gtype: GObject.GType): void
    // Has conflict: getFields(): HashModel
    // Has conflict: getValues(): HashModel

    // Own virtual methods of Vda-1.Vda.SqlCommandModification

    addFieldValue(name: string, val?: any | null): void
    addField(name: string): void
    addValue(val?: any | null): void
    addFieldParameterValue(field: string, par: string, gtype: GObject.GType): void
    addParameter(par: string, gtype: GObject.GType): void
    getFields(): HashModel
    getValues(): HashModel

    // Class property signals of Vda-1.Vda.SqlCommandModification

    connect(sigName: "notify::fields", callback: any): number
    on(sigName: "notify::fields", callback: any): number
    once(sigName: "notify::fields", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fields", ...args: any[]): void
    connect(sigName: "notify::values", callback: any): number
    on(sigName: "notify::values", callback: any): number
    once(sigName: "notify::values", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlCommandModification {

    // Own properties of Vda-1.Vda.SqlCommandModification

    static name: string

    // Constructors of Vda-1.Vda.SqlCommandModification

    constructor(config?: SqlCommandModification.ConstructorProperties) 
    _init(config?: SqlCommandModification.ConstructorProperties): void
}

export module SqlCommandParametrized {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlCommand.ConstructorProperties {
    }

}

export interface SqlCommandParametrized extends GObject.Object, SqlCommand {

    // Own properties of Vda-1.Vda.SqlCommandParametrized

    readonly parameters: SqlParameters

    // Owm methods of Vda-1.Vda.SqlCommandParametrized

    // Has conflict: getParameters(): SqlParameters

    // Own virtual methods of Vda-1.Vda.SqlCommandParametrized

    getParameters(): SqlParameters

    // Class property signals of Vda-1.Vda.SqlCommandParametrized

    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlCommandParametrized {

    // Own properties of Vda-1.Vda.SqlCommandParametrized

    static name: string

    // Constructors of Vda-1.Vda.SqlCommandParametrized

    constructor(config?: SqlCommandParametrized.ConstructorProperties) 
    _init(config?: SqlCommandParametrized.ConstructorProperties): void
}

export module SqlCommandSelect {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlCommandConditional.ConstructorProperties, SqlCommand.ConstructorProperties, SqlCommandParametrized.ConstructorProperties {
    }

}

export interface SqlCommandSelect extends GObject.Object, SqlCommandConditional, SqlCommand, SqlCommandParametrized {

    // Own properties of Vda-1.Vda.SqlCommandSelect

    readonly fields: HashModel
    readonly tables: HashModel

    // Owm methods of Vda-1.Vda.SqlCommandSelect

    // Has conflict: addField(field: string, tableRef?: string | null, alias?: string | null): void
    // Has conflict: addTable(name: string, allias?: string | null): void
    // Has conflict: addValueField(val: any, allias?: string | null): void
    // Has conflict: addMathExpField(exp: string, allias?: string | null): void
    // Has conflict: stringify(): string
    // Has conflict: toQuery(name?: string | null): PreparedQuery
    // Has conflict: parse(sql: string): void
    // Has conflict: getFields(): HashModel
    // Has conflict: getTables(): HashModel

    // Own virtual methods of Vda-1.Vda.SqlCommandSelect

    addField(field: string, tableRef?: string | null, alias?: string | null): void
    addTable(name: string, allias?: string | null): void
    addValueField(val: any, allias?: string | null): void
    addMathExpField(exp: string, allias?: string | null): void
    stringify(): string
    toQuery(name?: string | null): PreparedQuery
    parse(sql: string): void
    getFields(): HashModel
    getTables(): HashModel

    // Class property signals of Vda-1.Vda.SqlCommandSelect

    connect(sigName: "notify::fields", callback: any): number
    on(sigName: "notify::fields", callback: any): number
    once(sigName: "notify::fields", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fields", ...args: any[]): void
    connect(sigName: "notify::tables", callback: any): number
    on(sigName: "notify::tables", callback: any): number
    once(sigName: "notify::tables", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tables", ...args: any[]): void
    connect(sigName: "notify::condition", callback: any): number
    on(sigName: "notify::condition", callback: any): number
    once(sigName: "notify::condition", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::condition", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlCommandSelect {

    // Own properties of Vda-1.Vda.SqlCommandSelect

    static name: string

    // Constructors of Vda-1.Vda.SqlCommandSelect

    constructor(config?: SqlCommandSelect.ConstructorProperties) 
    _init(config?: SqlCommandSelect.ConstructorProperties): void
}

export module SqlCommandTableRelated {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.SqlCommandTableRelated

        table?: string | null
        allias?: string | null
    }

}

export interface SqlCommandTableRelated extends GObject.Object {

    // Own properties of Vda-1.Vda.SqlCommandTableRelated

    table: string
    allias: string

    // Owm methods of Vda-1.Vda.SqlCommandTableRelated

    // Has conflict: getTable(): string
    // Has conflict: setTable(value: string): void
    // Has conflict: getAllias(): string
    // Has conflict: setAllias(value: string): void

    // Own virtual methods of Vda-1.Vda.SqlCommandTableRelated

    getTable(): string
    setTable(value: string): void
    getAllias(): string
    setAllias(value: string): void

    // Class property signals of Vda-1.Vda.SqlCommandTableRelated

    connect(sigName: "notify::table", callback: any): number
    on(sigName: "notify::table", callback: any): number
    once(sigName: "notify::table", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::allias", callback: any): number
    on(sigName: "notify::allias", callback: any): number
    once(sigName: "notify::allias", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlCommandTableRelated {

    // Own properties of Vda-1.Vda.SqlCommandTableRelated

    static name: string

    // Constructors of Vda-1.Vda.SqlCommandTableRelated

    constructor(config?: SqlCommandTableRelated.ConstructorProperties) 
    _init(config?: SqlCommandTableRelated.ConstructorProperties): void
}

export module SqlCommandUpdate {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlCommandTableRelated.ConstructorProperties, SqlCommandModification.ConstructorProperties, SqlCommandConditional.ConstructorProperties, SqlCommand.ConstructorProperties, SqlCommandParametrized.ConstructorProperties {
    }

}

export interface SqlCommandUpdate extends GObject.Object, SqlCommandTableRelated, SqlCommandModification, SqlCommandConditional, SqlCommand, SqlCommandParametrized {

    // Owm methods of Vda-1.Vda.SqlCommandUpdate

    // Has conflict: stringify(): string
    // Has conflict: toQuery(name?: string | null): Query
    // Has conflict: parse(sql: string): void

    // Own virtual methods of Vda-1.Vda.SqlCommandUpdate

    stringify(): string
    toQuery(name?: string | null): Query
    parse(sql: string): void

    // Class property signals of Vda-1.Vda.SqlCommandUpdate

    connect(sigName: "notify::table", callback: any): number
    on(sigName: "notify::table", callback: any): number
    once(sigName: "notify::table", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::allias", callback: any): number
    on(sigName: "notify::allias", callback: any): number
    once(sigName: "notify::allias", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: "notify::fields", callback: any): number
    on(sigName: "notify::fields", callback: any): number
    once(sigName: "notify::fields", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fields", ...args: any[]): void
    connect(sigName: "notify::values", callback: any): number
    on(sigName: "notify::values", callback: any): number
    once(sigName: "notify::values", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::condition", callback: any): number
    on(sigName: "notify::condition", callback: any): number
    once(sigName: "notify::condition", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::condition", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlCommandUpdate {

    // Own properties of Vda-1.Vda.SqlCommandUpdate

    static name: string

    // Constructors of Vda-1.Vda.SqlCommandUpdate

    constructor(config?: SqlCommandUpdate.ConstructorProperties) 
    _init(config?: SqlCommandUpdate.ConstructorProperties): void
}

export module SqlExpression {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Gio.ListModel.ConstructorProperties {
    }

}

export interface SqlExpression extends GObject.Object, Gio.ListModel {

    // Owm methods of Vda-1.Vda.SqlExpression

    // Has conflict: addExpression(exp: SqlExpression): void
    // Has conflict: removeExpression(exp: SqlExpression): void
    // Has conflict: toString(): string
    // Has conflict: addMathExpression(str: string, cnc: Connection, params?: SqlParameters | null): void

    // Own virtual methods of Vda-1.Vda.SqlExpression

    addExpression(exp: SqlExpression): void
    removeExpression(exp: SqlExpression): void
    toString(): string
    addMathExpression(str: string, cnc: Connection, params?: SqlParameters | null): void

    // Class property signals of Vda-1.Vda.SqlExpression

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpression {

    // Own properties of Vda-1.Vda.SqlExpression

    static name: string

    // Constructors of Vda-1.Vda.SqlExpression

    constructor(config?: SqlExpression.ConstructorProperties) 
    _init(config?: SqlExpression.ConstructorProperties): void
    static parse(str: string, cnc: Connection, params?: SqlParameters | null): SqlExpression
}

export module SqlExpressionField {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpression.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.SqlExpressionField

        tableRef?: string | null
        name?: string | null
        allias?: string | null
    }

}

export interface SqlExpressionField extends GObject.Object, SqlExpression {

    // Own properties of Vda-1.Vda.SqlExpressionField

    tableRef: string
    name: string
    allias: string

    // Owm methods of Vda-1.Vda.SqlExpressionField

    // Has conflict: getTableRef(): string
    // Has conflict: setTableRef(value: string): void
    // Has conflict: getName(): string
    // Has conflict: setName(value: string): void
    // Has conflict: getAllias(): string | null
    // Has conflict: setAllias(value?: string | null): void

    // Own virtual methods of Vda-1.Vda.SqlExpressionField

    getTableRef(): string
    setTableRef(value: string): void
    getName(): string
    setName(value: string): void
    getAllias(): string | null
    setAllias(value?: string | null): void

    // Class property signals of Vda-1.Vda.SqlExpressionField

    connect(sigName: "notify::table-ref", callback: any): number
    on(sigName: "notify::table-ref", callback: any): number
    once(sigName: "notify::table-ref", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::table-ref", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::allias", callback: any): number
    on(sigName: "notify::allias", callback: any): number
    once(sigName: "notify::allias", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionField {

    // Own properties of Vda-1.Vda.SqlExpressionField

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionField

    constructor(config?: SqlExpressionField.ConstructorProperties) 
    _init(config?: SqlExpressionField.ConstructorProperties): void
}

export module SqlExpressionOperator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpression.ConstructorProperties {
    }

}

export interface SqlExpressionOperator extends GObject.Object, SqlExpression {

    // Own properties of Vda-1.Vda.SqlExpressionOperator

    readonly operatorType: SqlExpressionOperatorType

    // Owm methods of Vda-1.Vda.SqlExpressionOperator

    // Has conflict: createFieldExpression(name: string): SqlExpressionField
    // Has conflict: createValueExpression(val: any | null, cnc: Connection): SqlExpressionValue
    // Has conflict: createParameterExpression(name: string, gtype: GObject.GType): SqlExpressionValueParameter
    // Has conflict: addAndOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    // Has conflict: addOrOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    // Has conflict: addEqOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    // Has conflict: addDiffOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    // Has conflict: addLikeOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    // Has conflict: addGtOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    // Has conflict: addGeqOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    // Has conflict: addLeqOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    // Has conflict: addSimilarToOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    // Has conflict: addIsNullOperator(exp1: SqlExpression): SqlExpressionOperator
    // Has conflict: addIsNotNullOperator(exp1: SqlExpression): SqlExpressionOperator
    // Has conflict: addNotOperator(exp: SqlExpression): SqlExpressionOperator
    // Has conflict: addIsTrueOperator(exp1: SqlExpression): SqlExpressionOperator
    // Has conflict: addIsNotTrueOperator(exp1: SqlExpression): SqlExpressionOperator
    // Has conflict: addIsFalseOperator(exp1: SqlExpression): SqlExpressionOperator
    // Has conflict: addIsNotFalseOperator(exp1: SqlExpression): SqlExpressionOperator
    // Has conflict: addIsUnknownOperator(exp1: SqlExpression): SqlExpressionOperator
    // Has conflict: addIsNotUnknownOperator(exp1: SqlExpression): SqlExpressionOperator
    // Has conflict: addInOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    // Has conflict: addNotInOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    // Has conflict: addConcatenateOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    // Has conflict: addPlusOperator(exp1: SqlExpression, exp2?: SqlExpression | null): SqlExpressionOperator
    // Has conflict: addMinusOperator(exp1: SqlExpression, exp2?: SqlExpression | null): SqlExpressionOperator
    // Has conflict: addStarOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    // Has conflict: addDivOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    // Has conflict: addRegexpOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    // Has conflict: addBetweenOperator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator
    // Has conflict: addNotBetweenOperator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator
    // Has conflict: addBetweenSymmetricOperator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator
    // Has conflict: addNotBetweenSymmetricOperator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator
    // Has conflict: addIsDistinctFromOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    // Has conflict: addIsNotDistinctFromOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    // Has conflict: getOperatorType(): SqlExpressionOperatorType

    // Own virtual methods of Vda-1.Vda.SqlExpressionOperator

    createFieldExpression(name: string): SqlExpressionField
    createValueExpression(val: any | null, cnc: Connection): SqlExpressionValue
    createParameterExpression(name: string, gtype: GObject.GType): SqlExpressionValueParameter
    addAndOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    addOrOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    addEqOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    addDiffOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    addLikeOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    addGtOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    addGeqOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    addLeqOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    addSimilarToOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    addIsNullOperator(exp1: SqlExpression): SqlExpressionOperator
    addIsNotNullOperator(exp1: SqlExpression): SqlExpressionOperator
    addNotOperator(exp: SqlExpression): SqlExpressionOperator
    addIsTrueOperator(exp1: SqlExpression): SqlExpressionOperator
    addIsNotTrueOperator(exp1: SqlExpression): SqlExpressionOperator
    addIsFalseOperator(exp1: SqlExpression): SqlExpressionOperator
    addIsNotFalseOperator(exp1: SqlExpression): SqlExpressionOperator
    addIsUnknownOperator(exp1: SqlExpression): SqlExpressionOperator
    addIsNotUnknownOperator(exp1: SqlExpression): SqlExpressionOperator
    addInOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    addNotInOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    addConcatenateOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    addPlusOperator(exp1: SqlExpression, exp2?: SqlExpression | null): SqlExpressionOperator
    addMinusOperator(exp1: SqlExpression, exp2?: SqlExpression | null): SqlExpressionOperator
    addStarOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    addDivOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    addRegexpOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    addBetweenOperator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator
    addNotBetweenOperator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator
    addBetweenSymmetricOperator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator
    addNotBetweenSymmetricOperator(exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression): SqlExpressionOperator
    addIsDistinctFromOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    addIsNotDistinctFromOperator(exp1: SqlExpression, exp2: SqlExpression): SqlExpressionOperator
    getOperatorType(): SqlExpressionOperatorType

    // Class property signals of Vda-1.Vda.SqlExpressionOperator

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperator {

    // Own properties of Vda-1.Vda.SqlExpressionOperator

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperator

    constructor(config?: SqlExpressionOperator.ConstructorProperties) 
    _init(config?: SqlExpressionOperator.ConstructorProperties): void
}

export module SqlExpressionOperatorGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperator.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorGroup extends GObject.Object, SqlExpressionOperator {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorGroup

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorGroup {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorGroup

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorGroup

    constructor(config?: SqlExpressionOperatorGroup.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorGroup.ConstructorProperties): void
}

export module SqlExpressionOperatorMultiterm {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperator.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorMultiterm extends GObject.Object, SqlExpressionOperator {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorMultiterm

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorMultiterm {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorMultiterm

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorMultiterm

    constructor(config?: SqlExpressionOperatorMultiterm.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorMultiterm.ConstructorProperties): void
}

export module SqlExpressionOperatorAnd {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorMultiterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorAnd extends GObject.Object, SqlExpressionOperatorMultiterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorAnd

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorAnd {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorAnd

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorAnd

    constructor(config?: SqlExpressionOperatorAnd.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorAnd.ConstructorProperties): void
}

export module SqlExpressionOperatorOr {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorMultiterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorOr extends GObject.Object, SqlExpressionOperatorMultiterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorOr

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorOr {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorOr

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorOr

    constructor(config?: SqlExpressionOperatorOr.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorOr.ConstructorProperties): void
}

export module SqlExpressionOperatorBinaryterm {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperator.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorBinaryterm extends GObject.Object, SqlExpressionOperator {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorBinaryterm

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBinaryterm

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorBinaryterm

    constructor(config?: SqlExpressionOperatorBinaryterm.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorBinaryterm.ConstructorProperties): void
}

export module SqlExpressionOperatorEq {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorEq extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorEq

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorEq {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorEq

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorEq

    constructor(config?: SqlExpressionOperatorEq.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorEq.ConstructorProperties): void
}

export module SqlExpressionOperatorNotEq {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorNotEq extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNotEq

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorNotEq {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotEq

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNotEq

    constructor(config?: SqlExpressionOperatorNotEq.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorNotEq.ConstructorProperties): void
}

export module SqlExpressionOperatorDiff {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorDiff extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorDiff

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorDiff {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorDiff

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorDiff

    constructor(config?: SqlExpressionOperatorDiff.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorDiff.ConstructorProperties): void
}

export module SqlExpressionOperatorGt {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorGt extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorGt

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorGt {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorGt

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorGt

    constructor(config?: SqlExpressionOperatorGt.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorGt.ConstructorProperties): void
}

export module SqlExpressionOperatorLt {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorLt extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorLt

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorLt {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorLt

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorLt

    constructor(config?: SqlExpressionOperatorLt.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorLt.ConstructorProperties): void
}

export module SqlExpressionOperatorGeq {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorGeq extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorGeq

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorGeq {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorGeq

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorGeq

    constructor(config?: SqlExpressionOperatorGeq.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorGeq.ConstructorProperties): void
}

export module SqlExpressionOperatorLeq {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorLeq extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorLeq

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorLeq {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorLeq

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorLeq

    constructor(config?: SqlExpressionOperatorLeq.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorLeq.ConstructorProperties): void
}

export module SqlExpressionOperatorRegexp {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorRegexp extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorRegexp

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorRegexp {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorRegexp

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorRegexp

    constructor(config?: SqlExpressionOperatorRegexp.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorRegexp.ConstructorProperties): void
}

export module SqlExpressionOperatorStar {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorStar extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorStar

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorStar {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorStar

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorStar

    constructor(config?: SqlExpressionOperatorStar.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorStar.ConstructorProperties): void
}

export module SqlExpressionOperatorDiv {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorDiv extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorDiv

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorDiv {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorDiv

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorDiv

    constructor(config?: SqlExpressionOperatorDiv.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorDiv.ConstructorProperties): void
}

export module SqlExpressionOperatorIn {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIn extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIn

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorIn {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIn

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIn

    constructor(config?: SqlExpressionOperatorIn.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIn.ConstructorProperties): void
}

export module SqlExpressionOperatorNotIn {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorNotIn extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNotIn

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorNotIn {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotIn

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNotIn

    constructor(config?: SqlExpressionOperatorNotIn.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorNotIn.ConstructorProperties): void
}

export module SqlExpressionOperatorConcatenate {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorConcatenate extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorConcatenate

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorConcatenate {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorConcatenate

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorConcatenate

    constructor(config?: SqlExpressionOperatorConcatenate.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorConcatenate.ConstructorProperties): void
}

export module SqlExpressionOperatorSimilarTo {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorSimilarTo extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorSimilarTo

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorSimilarTo {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorSimilarTo

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorSimilarTo

    constructor(config?: SqlExpressionOperatorSimilarTo.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorSimilarTo.ConstructorProperties): void
}

export module SqlExpressionOperatorLike {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorLike extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorLike

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorLike {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorLike

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorLike

    constructor(config?: SqlExpressionOperatorLike.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorLike.ConstructorProperties): void
}

export module SqlExpressionOperatorNotLike {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorNotLike extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNotLike

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorNotLike {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotLike

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNotLike

    constructor(config?: SqlExpressionOperatorNotLike.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorNotLike.ConstructorProperties): void
}

export module SqlExpressionOperatorIlike {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIlike extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIlike

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorIlike {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIlike

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIlike

    constructor(config?: SqlExpressionOperatorIlike.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIlike.ConstructorProperties): void
}

export module SqlExpressionOperatorNotIlike {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorNotIlike extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNotIlike

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorNotIlike {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotIlike

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNotIlike

    constructor(config?: SqlExpressionOperatorNotIlike.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorNotIlike.ConstructorProperties): void
}

export module SqlExpressionOperatorBinaryUnaryterm {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperator.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorBinaryUnaryterm extends GObject.Object, SqlExpressionOperator {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorBinaryUnaryterm

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorBinaryUnaryterm {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBinaryUnaryterm

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorBinaryUnaryterm

    constructor(config?: SqlExpressionOperatorBinaryUnaryterm.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorBinaryUnaryterm.ConstructorProperties): void
}

export module SqlExpressionOperatorMinus {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryUnaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorMinus extends GObject.Object, SqlExpressionOperatorBinaryUnaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorMinus

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorMinus {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorMinus

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorMinus

    constructor(config?: SqlExpressionOperatorMinus.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorMinus.ConstructorProperties): void
}

export module SqlExpressionOperatorPlus {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryUnaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorPlus extends GObject.Object, SqlExpressionOperatorBinaryUnaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorPlus

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorPlus {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorPlus

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorPlus

    constructor(config?: SqlExpressionOperatorPlus.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorPlus.ConstructorProperties): void
}

export module SqlExpressionOperatorInitialUnaryterm {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperator.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorInitialUnaryterm extends GObject.Object, SqlExpressionOperator {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorInitialUnaryterm

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorInitialUnaryterm {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorInitialUnaryterm

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorInitialUnaryterm

    constructor(config?: SqlExpressionOperatorInitialUnaryterm.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorInitialUnaryterm.ConstructorProperties): void
}

export module SqlExpressionOperatorNot {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorInitialUnaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorNot extends GObject.Object, SqlExpressionOperatorInitialUnaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNot

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorNot {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNot

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNot

    constructor(config?: SqlExpressionOperatorNot.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorNot.ConstructorProperties): void
}

export module SqlExpressionOperatorFinalUnaryterm {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperator.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorFinalUnaryterm extends GObject.Object, SqlExpressionOperator {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorFinalUnaryterm

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorFinalUnaryterm {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorFinalUnaryterm

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorFinalUnaryterm

    constructor(config?: SqlExpressionOperatorFinalUnaryterm.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorFinalUnaryterm.ConstructorProperties): void
}

export module SqlExpressionOperatorIs {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorFinalUnaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIs extends GObject.Object, SqlExpressionOperatorFinalUnaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIs

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorIs {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIs

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIs

    constructor(config?: SqlExpressionOperatorIs.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIs.ConstructorProperties): void
}

export module SqlExpressionOperatorIsNot {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorIs.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsNot extends GObject.Object, SqlExpressionOperatorIs {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsNot

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorIsNot {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNot

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsNot

    constructor(config?: SqlExpressionOperatorIsNot.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsNot.ConstructorProperties): void
}

export module SqlExpressionOperatorIsNull {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorIs.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsNull extends GObject.Object, SqlExpressionOperatorIs {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsNull

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorIsNull {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNull

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsNull

    constructor(config?: SqlExpressionOperatorIsNull.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsNull.ConstructorProperties): void
}

export module SqlExpressionOperatorIsNotNull {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorIsNot.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsNotNull extends GObject.Object, SqlExpressionOperatorIsNot {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsNotNull

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorIsNotNull {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotNull

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsNotNull

    constructor(config?: SqlExpressionOperatorIsNotNull.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsNotNull.ConstructorProperties): void
}

export module SqlExpressionOperatorIsTrue {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorIs.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsTrue extends GObject.Object, SqlExpressionOperatorIs {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsTrue

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorIsTrue {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsTrue

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsTrue

    constructor(config?: SqlExpressionOperatorIsTrue.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsTrue.ConstructorProperties): void
}

export module SqlExpressionOperatorIsNotTrue {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorIsNot.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsNotTrue extends GObject.Object, SqlExpressionOperatorIsNot {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsNotTrue

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorIsNotTrue {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotTrue

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsNotTrue

    constructor(config?: SqlExpressionOperatorIsNotTrue.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsNotTrue.ConstructorProperties): void
}

export module SqlExpressionOperatorIsFalse {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorIs.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsFalse extends GObject.Object, SqlExpressionOperatorIs {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsFalse

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorIsFalse {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsFalse

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsFalse

    constructor(config?: SqlExpressionOperatorIsFalse.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsFalse.ConstructorProperties): void
}

export module SqlExpressionOperatorIsNotFalse {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorIsNot.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsNotFalse extends GObject.Object, SqlExpressionOperatorIsNot {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsNotFalse

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorIsNotFalse {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotFalse

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsNotFalse

    constructor(config?: SqlExpressionOperatorIsNotFalse.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsNotFalse.ConstructorProperties): void
}

export module SqlExpressionOperatorIsUnknown {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorIs.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsUnknown extends GObject.Object, SqlExpressionOperatorIs {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsUnknown

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorIsUnknown {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsUnknown

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsUnknown

    constructor(config?: SqlExpressionOperatorIsUnknown.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsUnknown.ConstructorProperties): void
}

export module SqlExpressionOperatorIsNotUnknown {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorIs.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsNotUnknown extends GObject.Object, SqlExpressionOperatorIs {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsNotUnknown

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorIsNotUnknown {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotUnknown

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsNotUnknown

    constructor(config?: SqlExpressionOperatorIsNotUnknown.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsNotUnknown.ConstructorProperties): void
}

export module SqlExpressionOperatorIsDistinct {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsDistinct extends GObject.Object, SqlExpressionOperatorBinaryterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsDistinct

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorIsDistinct {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsDistinct

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsDistinct

    constructor(config?: SqlExpressionOperatorIsDistinct.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsDistinct.ConstructorProperties): void
}

export module SqlExpressionOperatorIsNotDistinct {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorIsDistinct.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsNotDistinct extends GObject.Object, SqlExpressionOperatorIsDistinct {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsNotDistinct

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorIsNotDistinct {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotDistinct

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsNotDistinct

    constructor(config?: SqlExpressionOperatorIsNotDistinct.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsNotDistinct.ConstructorProperties): void
}

export module SqlExpressionOperatorIsDistinctFrom {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorIsDistinct.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsDistinctFrom extends GObject.Object, SqlExpressionOperatorIsDistinct {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsDistinctFrom

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorIsDistinctFrom {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsDistinctFrom

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsDistinctFrom

    constructor(config?: SqlExpressionOperatorIsDistinctFrom.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsDistinctFrom.ConstructorProperties): void
}

export module SqlExpressionOperatorIsNotDistinctFrom {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorIsNotDistinct.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorIsNotDistinctFrom extends GObject.Object, SqlExpressionOperatorIsNotDistinct {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorIsNotDistinctFrom

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorIsNotDistinctFrom {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotDistinctFrom

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorIsNotDistinctFrom

    constructor(config?: SqlExpressionOperatorIsNotDistinctFrom.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorIsNotDistinctFrom.ConstructorProperties): void
}

export module SqlExpressionOperatorThreeterm {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperator.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorThreeterm extends GObject.Object, SqlExpressionOperator {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorThreeterm

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorThreeterm {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorThreeterm

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorThreeterm

    constructor(config?: SqlExpressionOperatorThreeterm.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorThreeterm.ConstructorProperties): void
}

export module SqlExpressionOperatorBetween {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorThreeterm.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorBetween extends GObject.Object, SqlExpressionOperatorThreeterm {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorBetween

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorBetween {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBetween

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorBetween

    constructor(config?: SqlExpressionOperatorBetween.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorBetween.ConstructorProperties): void
}

export module SqlExpressionOperatorBetweenAnd {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBetween.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorBetweenAnd extends GObject.Object, SqlExpressionOperatorBetween {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorBetweenAnd

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorBetweenAnd {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBetweenAnd

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorBetweenAnd

    constructor(config?: SqlExpressionOperatorBetweenAnd.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorBetweenAnd.ConstructorProperties): void
}

export module SqlExpressionOperatorNotBetween {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBetween.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorNotBetween extends GObject.Object, SqlExpressionOperatorBetween {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNotBetween

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorNotBetween {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotBetween

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNotBetween

    constructor(config?: SqlExpressionOperatorNotBetween.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorNotBetween.ConstructorProperties): void
}

export module SqlExpressionOperatorNotBetweenAnd {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorNotBetween.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorNotBetweenAnd extends GObject.Object, SqlExpressionOperatorNotBetween {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNotBetweenAnd

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorNotBetweenAnd {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotBetweenAnd

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNotBetweenAnd

    constructor(config?: SqlExpressionOperatorNotBetweenAnd.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorNotBetweenAnd.ConstructorProperties): void
}

export module SqlExpressionOperatorBetweenSymmetric {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBetween.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorBetweenSymmetric extends GObject.Object, SqlExpressionOperatorBetween {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorBetweenSymmetric

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorBetweenSymmetric {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBetweenSymmetric

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorBetweenSymmetric

    constructor(config?: SqlExpressionOperatorBetweenSymmetric.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorBetweenSymmetric.ConstructorProperties): void
}

export module SqlExpressionOperatorBetweenSymmetricAnd {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBetweenSymmetric.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorBetweenSymmetricAnd extends GObject.Object, SqlExpressionOperatorBetweenSymmetric {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorBetweenSymmetricAnd

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorBetweenSymmetricAnd {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBetweenSymmetricAnd

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorBetweenSymmetricAnd

    constructor(config?: SqlExpressionOperatorBetweenSymmetricAnd.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorBetweenSymmetricAnd.ConstructorProperties): void
}

export module SqlExpressionOperatorNotBetweenSymmetric {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorBetweenSymmetric.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorNotBetweenSymmetric extends GObject.Object, SqlExpressionOperatorBetweenSymmetric {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNotBetweenSymmetric

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorNotBetweenSymmetric {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotBetweenSymmetric

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNotBetweenSymmetric

    constructor(config?: SqlExpressionOperatorNotBetweenSymmetric.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorNotBetweenSymmetric.ConstructorProperties): void
}

export module SqlExpressionOperatorNotBetweenSymmetricAnd {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpressionOperatorNotBetweenSymmetric.ConstructorProperties {
    }

}

export interface SqlExpressionOperatorNotBetweenSymmetricAnd extends GObject.Object, SqlExpressionOperatorNotBetweenSymmetric {

    // Class property signals of Vda-1.Vda.SqlExpressionOperatorNotBetweenSymmetricAnd

    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionOperatorNotBetweenSymmetricAnd {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotBetweenSymmetricAnd

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionOperatorNotBetweenSymmetricAnd

    constructor(config?: SqlExpressionOperatorNotBetweenSymmetricAnd.ConstructorProperties) 
    _init(config?: SqlExpressionOperatorNotBetweenSymmetricAnd.ConstructorProperties): void
}

export module SqlExpressionValue {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpression.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.SqlExpressionValue

        connection?: Connection | null
        value?: SqlValue | null
    }

}

export interface SqlExpressionValue extends GObject.Object, SqlExpression {

    // Own properties of Vda-1.Vda.SqlExpressionValue

    connection: Connection
    value: SqlValue

    // Owm methods of Vda-1.Vda.SqlExpressionValue

    // Has conflict: setMathExpressionValue(str: string, params?: SqlParameters | null): void
    // Has conflict: getConnection(): Connection | null
    // Has conflict: setConnection(value?: Connection | null): void
    // Has conflict: getValue(): SqlValue
    // Has conflict: setValue(value: SqlValue): void

    // Own virtual methods of Vda-1.Vda.SqlExpressionValue

    setMathExpressionValue(str: string, params?: SqlParameters | null): void
    getConnection(): Connection | null
    setConnection(value?: Connection | null): void
    getValue(): SqlValue
    setValue(value: SqlValue): void

    // Class property signals of Vda-1.Vda.SqlExpressionValue

    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionValue {

    // Own properties of Vda-1.Vda.SqlExpressionValue

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionValue

    constructor(config?: SqlExpressionValue.ConstructorProperties) 
    _init(config?: SqlExpressionValue.ConstructorProperties): void
}

export module SqlExpressionValueParameter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlExpression.ConstructorProperties, SqlExpressionValue.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.SqlExpressionValueParameter

        parameters?: SqlParameters | null
        name?: string | null
        gtype?: GObject.GType | null
    }

}

export interface SqlExpressionValueParameter extends GObject.Object, SqlExpression, SqlExpressionValue {

    // Own properties of Vda-1.Vda.SqlExpressionValueParameter

    parameters: SqlParameters
    name: string
    gtype: GObject.GType

    // Owm methods of Vda-1.Vda.SqlExpressionValueParameter

    // Has conflict: parse(str: string): void
    // Has conflict: getParameters(): SqlParameters
    // Has conflict: setParameters(value: SqlParameters): void
    // Has conflict: getName(): string
    // Has conflict: setName(value: string): void
    // Has conflict: getGtype(): GObject.GType
    // Has conflict: setGtype(value: GObject.GType): void

    // Own virtual methods of Vda-1.Vda.SqlExpressionValueParameter

    parse(str: string): void
    getParameters(): SqlParameters
    setParameters(value: SqlParameters): void
    getName(): string
    setName(value: string): void
    getGtype(): GObject.GType
    setGtype(value: GObject.GType): void

    // Class property signals of Vda-1.Vda.SqlExpressionValueParameter

    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::gtype", callback: any): number
    on(sigName: "notify::gtype", callback: any): number
    once(sigName: "notify::gtype", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::gtype", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlExpressionValueParameter {

    // Own properties of Vda-1.Vda.SqlExpressionValueParameter

    static name: string

    // Constructors of Vda-1.Vda.SqlExpressionValueParameter

    constructor(config?: SqlExpressionValueParameter.ConstructorProperties) 
    _init(config?: SqlExpressionValueParameter.ConstructorProperties): void
    static gtypeFromString(str: string): GObject.GType
}

export module SqlParameters {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SqlParameters extends GObject.Object {

    // Owm methods of Vda-1.Vda.SqlParameters

    // Has conflict: setValue(name: string, val: any): void
    // Has conflict: getValue(name: string): any | null
    // Has conflict: setSqlValue(name: string, val: SqlValue): void
    // Has conflict: getSqlValue(name: string): SqlValue
    // Has conflict: hasParam(name: string): boolean

    // Own virtual methods of Vda-1.Vda.SqlParameters

    setValue(name: string, val: any): void
    getValue(name: string): any | null
    setSqlValue(name: string, val: SqlValue): void
    getSqlValue(name: string): SqlValue
    hasParam(name: string): boolean

    // Class property signals of Vda-1.Vda.SqlParameters

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlParameters {

    // Own properties of Vda-1.Vda.SqlParameters

    static name: string

    // Constructors of Vda-1.Vda.SqlParameters

    constructor(config?: SqlParameters.ConstructorProperties) 
    _init(config?: SqlParameters.ConstructorProperties): void
}

export module SqlParser {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SqlParser extends GObject.Object {

    // Owm methods of Vda-1.Vda.SqlParser

    // Has conflict: parse(str: string, cnc: Connection): SqlCommandParametrized

    // Own virtual methods of Vda-1.Vda.SqlParser

    parse(str: string, cnc: Connection): SqlCommandParametrized

    // Class property signals of Vda-1.Vda.SqlParser

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlParser {

    // Own properties of Vda-1.Vda.SqlParser

    static name: string

    // Constructors of Vda-1.Vda.SqlParser

    constructor(config?: SqlParser.ConstructorProperties) 
    _init(config?: SqlParser.ConstructorProperties): void
}

export module SqlTableReference {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.SqlTableReference

        name?: string | null
        allias?: string | null
    }

}

export interface SqlTableReference extends GObject.Object {

    // Own properties of Vda-1.Vda.SqlTableReference

    name: string
    allias: string

    // Owm methods of Vda-1.Vda.SqlTableReference

    // Has conflict: getName(): string
    // Has conflict: setName(value: string): void
    // Has conflict: getAllias(): string | null
    // Has conflict: setAllias(value?: string | null): void

    // Own virtual methods of Vda-1.Vda.SqlTableReference

    getName(): string
    setName(value: string): void
    getAllias(): string | null
    setAllias(value?: string | null): void

    // Class property signals of Vda-1.Vda.SqlTableReference

    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::allias", callback: any): number
    on(sigName: "notify::allias", callback: any): number
    once(sigName: "notify::allias", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SqlTableReference {

    // Own properties of Vda-1.Vda.SqlTableReference

    static name: string

    // Constructors of Vda-1.Vda.SqlTableReference

    constructor(config?: SqlTableReference.ConstructorProperties) 
    _init(config?: SqlTableReference.ConstructorProperties): void
}

export module Stringifiable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Stringifiable extends GObject.Object {

    // Owm methods of Vda-1.Vda.Stringifiable

    // Has conflict: toString(): string

    // Own virtual methods of Vda-1.Vda.Stringifiable

    toString(): string

    // Class property signals of Vda-1.Vda.Stringifiable

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Stringifiable {

    // Own properties of Vda-1.Vda.Stringifiable

    static name: string

    // Constructors of Vda-1.Vda.Stringifiable

    constructor(config?: Stringifiable.ConstructorProperties) 
    _init(config?: Stringifiable.ConstructorProperties): void
}

export module SqlValue {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Stringifiable.ConstructorProperties {
    }

}

export interface SqlValue extends GObject.Object, Stringifiable {

    // Own properties of Vda-1.Vda.SqlValue

    readonly name: string

    // Owm methods of Vda-1.Vda.SqlValue

    // Has conflict: parse(str: string): boolean
    // Has conflict: fromValue(val: any): boolean
    // Has conflict: cast(type: GObject.GType): SqlValue | null
    // Has conflict: isCompatible(type: GObject.GType): boolean
    // Has conflict: toGvalue(): /* result */ any
    // Has conflict: toStringQuoted(): string
    // Has conflict: toSqlExpression(): string
    // Has conflict: getName(): string

    // Own virtual methods of Vda-1.Vda.SqlValue

    parse(str: string): boolean
    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any
    toStringQuoted(): string
    toSqlExpression(): string
    getName(): string

    // Class property signals of Vda-1.Vda.SqlValue

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

export class SqlValue {

    // Own properties of Vda-1.Vda.SqlValue

    static name: string

    // Constructors of Vda-1.Vda.SqlValue

    constructor(config?: SqlValue.ConstructorProperties) 
    _init(config?: SqlValue.ConstructorProperties): void
    static newFromGvalue(val?: any | null): SqlValue
    static newFromGtype(type: GObject.GType): SqlValue | null
}

export module SqlValueNull {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties {
    }

}

export interface SqlValueNull extends GObject.Object, SqlValue {

    // Class property signals of Vda-1.Vda.SqlValueNull

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

export class SqlValueNull {

    // Own properties of Vda-1.Vda.SqlValueNull

    static name: string

    // Constructors of Vda-1.Vda.SqlValueNull

    constructor(config?: SqlValueNull.ConstructorProperties) 
    _init(config?: SqlValueNull.ConstructorProperties): void
}

export module SqlValueBool {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties {
    }

}

export interface SqlValueBool extends GObject.Object, SqlValue {

    // Class property signals of Vda-1.Vda.SqlValueBool

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

export class SqlValueBool {

    // Own properties of Vda-1.Vda.SqlValueBool

    static name: string

    // Constructors of Vda-1.Vda.SqlValueBool

    constructor(config?: SqlValueBool.ConstructorProperties) 
    _init(config?: SqlValueBool.ConstructorProperties): void
}

export module SqlValueBit {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties {
    }

}

export interface SqlValueBit extends GObject.Object, SqlValue {

    // Class property signals of Vda-1.Vda.SqlValueBit

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

export class SqlValueBit {

    // Own properties of Vda-1.Vda.SqlValueBit

    static name: string

    // Constructors of Vda-1.Vda.SqlValueBit

    constructor(config?: SqlValueBit.ConstructorProperties) 
    _init(config?: SqlValueBit.ConstructorProperties): void
}

export module SqlValueString {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties {
    }

}

export interface SqlValueString extends GObject.Object, SqlValue {

    // Class property signals of Vda-1.Vda.SqlValueString

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

export class SqlValueString {

    // Own properties of Vda-1.Vda.SqlValueString

    static name: string

    // Constructors of Vda-1.Vda.SqlValueString

    constructor(config?: SqlValueString.ConstructorProperties) 
    _init(config?: SqlValueString.ConstructorProperties): void
}

export module SqlValueXml {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueString.ConstructorProperties {
    }

}

export interface SqlValueXml extends GObject.Object, SqlValue, SqlValueString {

    // Own properties of Vda-1.Vda.SqlValueXml

    readonly document: GXml.DomDocument

    // Owm methods of Vda-1.Vda.SqlValueXml

    // Has conflict: getDocument(): GXml.DomDocument

    // Own virtual methods of Vda-1.Vda.SqlValueXml

    getDocument(): GXml.DomDocument

    // Class property signals of Vda-1.Vda.SqlValueXml

    connect(sigName: "notify::document", callback: any): number
    on(sigName: "notify::document", callback: any): number
    once(sigName: "notify::document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document", ...args: any[]): void
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

export class SqlValueXml {

    // Own properties of Vda-1.Vda.SqlValueXml

    static name: string

    // Constructors of Vda-1.Vda.SqlValueXml

    constructor(config?: SqlValueXml.ConstructorProperties) 
    _init(config?: SqlValueXml.ConstructorProperties): void
}

export module SqlValueJson {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueString.ConstructorProperties {
    }

}

export interface SqlValueJson extends GObject.Object, SqlValue, SqlValueString {

    // Own properties of Vda-1.Vda.SqlValueJson

    readonly document: Json.Node

    // Owm methods of Vda-1.Vda.SqlValueJson

    // Has conflict: getDocument(): Json.Node

    // Own virtual methods of Vda-1.Vda.SqlValueJson

    getDocument(): Json.Node

    // Class property signals of Vda-1.Vda.SqlValueJson

    connect(sigName: "notify::document", callback: any): number
    on(sigName: "notify::document", callback: any): number
    once(sigName: "notify::document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document", ...args: any[]): void
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

export class SqlValueJson {

    // Own properties of Vda-1.Vda.SqlValueJson

    static name: string

    // Constructors of Vda-1.Vda.SqlValueJson

    constructor(config?: SqlValueJson.ConstructorProperties) 
    _init(config?: SqlValueJson.ConstructorProperties): void
}

export module SqlValueText {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueString.ConstructorProperties {
    }

}

export interface SqlValueText extends GObject.Object, SqlValue, SqlValueString {

    // Class property signals of Vda-1.Vda.SqlValueText

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

export class SqlValueText {

    // Own properties of Vda-1.Vda.SqlValueText

    static name: string

    // Constructors of Vda-1.Vda.SqlValueText

    constructor(config?: SqlValueText.ConstructorProperties) 
    _init(config?: SqlValueText.ConstructorProperties): void
}

export module SqlValueName {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueString.ConstructorProperties {
    }

}

export interface SqlValueName extends GObject.Object, SqlValue, SqlValueString {

    // Class property signals of Vda-1.Vda.SqlValueName

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

export class SqlValueName {

    // Own properties of Vda-1.Vda.SqlValueName

    static name: string

    // Constructors of Vda-1.Vda.SqlValueName

    constructor(config?: SqlValueName.ConstructorProperties) 
    _init(config?: SqlValueName.ConstructorProperties): void
}

export module SqlValueInteger {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties {
    }

}

export interface SqlValueInteger extends GObject.Object, SqlValue {

    // Class property signals of Vda-1.Vda.SqlValueInteger

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

export class SqlValueInteger {

    // Own properties of Vda-1.Vda.SqlValueInteger

    static name: string

    // Constructors of Vda-1.Vda.SqlValueInteger

    constructor(config?: SqlValueInteger.ConstructorProperties) 
    _init(config?: SqlValueInteger.ConstructorProperties): void
}

export module SqlValueByte {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueInteger.ConstructorProperties {
    }

}

export interface SqlValueByte extends GObject.Object, SqlValue, SqlValueInteger {

    // Class property signals of Vda-1.Vda.SqlValueByte

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

export class SqlValueByte {

    // Own properties of Vda-1.Vda.SqlValueByte

    static name: string

    // Constructors of Vda-1.Vda.SqlValueByte

    constructor(config?: SqlValueByte.ConstructorProperties) 
    _init(config?: SqlValueByte.ConstructorProperties): void
}

export module SqlValueInt2 {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueInteger.ConstructorProperties {
    }

}

export interface SqlValueInt2 extends GObject.Object, SqlValue, SqlValueInteger {

    // Class property signals of Vda-1.Vda.SqlValueInt2

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

export class SqlValueInt2 {

    // Own properties of Vda-1.Vda.SqlValueInt2

    static name: string

    // Constructors of Vda-1.Vda.SqlValueInt2

    constructor(config?: SqlValueInt2.ConstructorProperties) 
    _init(config?: SqlValueInt2.ConstructorProperties): void
}

export module SqlValueInt4 {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueInteger.ConstructorProperties {
    }

}

export interface SqlValueInt4 extends GObject.Object, SqlValue, SqlValueInteger {

    // Class property signals of Vda-1.Vda.SqlValueInt4

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

export class SqlValueInt4 {

    // Own properties of Vda-1.Vda.SqlValueInt4

    static name: string

    // Constructors of Vda-1.Vda.SqlValueInt4

    constructor(config?: SqlValueInt4.ConstructorProperties) 
    _init(config?: SqlValueInt4.ConstructorProperties): void
}

export module SqlValueInt8 {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueInteger.ConstructorProperties {
    }

}

export interface SqlValueInt8 extends GObject.Object, SqlValue, SqlValueInteger {

    // Class property signals of Vda-1.Vda.SqlValueInt8

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

export class SqlValueInt8 {

    // Own properties of Vda-1.Vda.SqlValueInt8

    static name: string

    // Constructors of Vda-1.Vda.SqlValueInt8

    constructor(config?: SqlValueInt8.ConstructorProperties) 
    _init(config?: SqlValueInt8.ConstructorProperties): void
}

export module SqlValueUnsignedInteger {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties {
    }

}

export interface SqlValueUnsignedInteger extends GObject.Object, SqlValue {

    // Class property signals of Vda-1.Vda.SqlValueUnsignedInteger

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

export class SqlValueUnsignedInteger {

    // Own properties of Vda-1.Vda.SqlValueUnsignedInteger

    static name: string

    // Constructors of Vda-1.Vda.SqlValueUnsignedInteger

    constructor(config?: SqlValueUnsignedInteger.ConstructorProperties) 
    _init(config?: SqlValueUnsignedInteger.ConstructorProperties): void
}

export module SqlValueUnsignedByte {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueUnsignedInteger.ConstructorProperties {
    }

}

export interface SqlValueUnsignedByte extends GObject.Object, SqlValue, SqlValueUnsignedInteger {

    // Class property signals of Vda-1.Vda.SqlValueUnsignedByte

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

export class SqlValueUnsignedByte {

    // Own properties of Vda-1.Vda.SqlValueUnsignedByte

    static name: string

    // Constructors of Vda-1.Vda.SqlValueUnsignedByte

    constructor(config?: SqlValueUnsignedByte.ConstructorProperties) 
    _init(config?: SqlValueUnsignedByte.ConstructorProperties): void
}

export module SqlValueUnsignedInt2 {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueUnsignedInteger.ConstructorProperties {
    }

}

export interface SqlValueUnsignedInt2 extends GObject.Object, SqlValue, SqlValueUnsignedInteger {

    // Class property signals of Vda-1.Vda.SqlValueUnsignedInt2

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

export class SqlValueUnsignedInt2 {

    // Own properties of Vda-1.Vda.SqlValueUnsignedInt2

    static name: string

    // Constructors of Vda-1.Vda.SqlValueUnsignedInt2

    constructor(config?: SqlValueUnsignedInt2.ConstructorProperties) 
    _init(config?: SqlValueUnsignedInt2.ConstructorProperties): void
}

export module SqlValueUnsignedInt4 {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueUnsignedInteger.ConstructorProperties {
    }

}

export interface SqlValueUnsignedInt4 extends GObject.Object, SqlValue, SqlValueUnsignedInteger {

    // Class property signals of Vda-1.Vda.SqlValueUnsignedInt4

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

export class SqlValueUnsignedInt4 {

    // Own properties of Vda-1.Vda.SqlValueUnsignedInt4

    static name: string

    // Constructors of Vda-1.Vda.SqlValueUnsignedInt4

    constructor(config?: SqlValueUnsignedInt4.ConstructorProperties) 
    _init(config?: SqlValueUnsignedInt4.ConstructorProperties): void
}

export module SqlValueUnsignedInt8 {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueUnsignedInteger.ConstructorProperties {
    }

}

export interface SqlValueUnsignedInt8 extends GObject.Object, SqlValue, SqlValueUnsignedInteger {

    // Class property signals of Vda-1.Vda.SqlValueUnsignedInt8

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

export class SqlValueUnsignedInt8 {

    // Own properties of Vda-1.Vda.SqlValueUnsignedInt8

    static name: string

    // Constructors of Vda-1.Vda.SqlValueUnsignedInt8

    constructor(config?: SqlValueUnsignedInt8.ConstructorProperties) 
    _init(config?: SqlValueUnsignedInt8.ConstructorProperties): void
}

export module SqlValueOid {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueInteger.ConstructorProperties {
    }

}

export interface SqlValueOid extends GObject.Object, SqlValue, SqlValueInteger {

    // Class property signals of Vda-1.Vda.SqlValueOid

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

export class SqlValueOid {

    // Own properties of Vda-1.Vda.SqlValueOid

    static name: string

    // Constructors of Vda-1.Vda.SqlValueOid

    constructor(config?: SqlValueOid.ConstructorProperties) 
    _init(config?: SqlValueOid.ConstructorProperties): void
}

export module SqlValueNumeric {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties {
    }

}

export interface SqlValueNumeric extends GObject.Object, SqlValue {

    // Owm methods of Vda-1.Vda.SqlValueNumeric

    // Has conflict: setPrecision(p: number): void
    // Has conflict: getPrecision(): number
    // Has conflict: format(str: string): string
    // Has conflict: getDouble(): number
    // Has conflict: setDouble(v: number): void
    // Has conflict: getReal(): number
    // Has conflict: setReal(r: number): void
    // Has conflict: getImaginary(): number
    // Has conflict: setImaginary(img: number): void

    // Own virtual methods of Vda-1.Vda.SqlValueNumeric

    setPrecision(p: number): void
    getPrecision(): number
    format(str: string): string
    getDouble(): number
    setDouble(v: number): void
    getReal(): number
    setReal(r: number): void
    getImaginary(): number
    setImaginary(img: number): void

    // Class property signals of Vda-1.Vda.SqlValueNumeric

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

export class SqlValueNumeric {

    // Own properties of Vda-1.Vda.SqlValueNumeric

    static name: string

    // Constructors of Vda-1.Vda.SqlValueNumeric

    constructor(config?: SqlValueNumeric.ConstructorProperties) 
    _init(config?: SqlValueNumeric.ConstructorProperties): void
}

export module SqlValueFloat {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueNumeric.ConstructorProperties {
    }

}

export interface SqlValueFloat extends GObject.Object, SqlValue, SqlValueNumeric {

    // Owm methods of Vda-1.Vda.SqlValueFloat

    // Has conflict: getFloat(): number

    // Own virtual methods of Vda-1.Vda.SqlValueFloat

    getFloat(): number

    // Class property signals of Vda-1.Vda.SqlValueFloat

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

export class SqlValueFloat {

    // Own properties of Vda-1.Vda.SqlValueFloat

    static name: string

    // Constructors of Vda-1.Vda.SqlValueFloat

    constructor(config?: SqlValueFloat.ConstructorProperties) 
    _init(config?: SqlValueFloat.ConstructorProperties): void
}

export module SqlValueDouble {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueNumeric.ConstructorProperties {
    }

}

export interface SqlValueDouble extends GObject.Object, SqlValue, SqlValueNumeric {

    // Class property signals of Vda-1.Vda.SqlValueDouble

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

export class SqlValueDouble {

    // Own properties of Vda-1.Vda.SqlValueDouble

    static name: string

    // Constructors of Vda-1.Vda.SqlValueDouble

    constructor(config?: SqlValueDouble.ConstructorProperties) 
    _init(config?: SqlValueDouble.ConstructorProperties): void
}

export module SqlValueMoney {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueNumeric.ConstructorProperties {
    }

}

export interface SqlValueMoney extends GObject.Object, SqlValue, SqlValueNumeric {

    // Owm methods of Vda-1.Vda.SqlValueMoney

    // Has conflict: locale(): string
    // Has conflict: intLocale(): string
    // Has conflict: getIntPrecision(): number
    // Has conflict: setIntPrecision(p: number): void

    // Own virtual methods of Vda-1.Vda.SqlValueMoney

    locale(): string
    intLocale(): string
    getIntPrecision(): number
    setIntPrecision(p: number): void

    // Class property signals of Vda-1.Vda.SqlValueMoney

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

export class SqlValueMoney {

    // Own properties of Vda-1.Vda.SqlValueMoney

    static name: string

    // Constructors of Vda-1.Vda.SqlValueMoney

    constructor(config?: SqlValueMoney.ConstructorProperties) 
    _init(config?: SqlValueMoney.ConstructorProperties): void
}

export module SqlValueDate {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties {
    }

}

export interface SqlValueDate extends GObject.Object, SqlValue {

    // Owm methods of Vda-1.Vda.SqlValueDate

    // Has conflict: getDate(): /* result */ GLib.Date
    // Has conflict: setDate(ts: GLib.Date): void

    // Own virtual methods of Vda-1.Vda.SqlValueDate

    getDate(): /* result */ GLib.Date
    setDate(ts: GLib.Date): void

    // Class property signals of Vda-1.Vda.SqlValueDate

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

export class SqlValueDate {

    // Own properties of Vda-1.Vda.SqlValueDate

    static name: string

    // Constructors of Vda-1.Vda.SqlValueDate

    constructor(config?: SqlValueDate.ConstructorProperties) 
    _init(config?: SqlValueDate.ConstructorProperties): void
}

export module SqlValueTimestamp {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties {
    }

}

export interface SqlValueTimestamp extends GObject.Object, SqlValue {

    // Owm methods of Vda-1.Vda.SqlValueTimestamp

    // Has conflict: formatLocal(): string
    // Has conflict: formatUtc(): string
    // Has conflict: formatLocale(): string
    // Has conflict: formatDate(): string
    // Has conflict: formatDateLocale(): string
    // Has conflict: formatTime(): string
    // Has conflict: formatTimeLocal(): string
    // Has conflict: formatTimeLocalNtz(): string
    // Has conflict: getTimestamp(): GLib.DateTime
    // Has conflict: setTimestamp(ts: GLib.DateTime): void

    // Own virtual methods of Vda-1.Vda.SqlValueTimestamp

    formatLocal(): string
    formatUtc(): string
    formatLocale(): string
    formatDate(): string
    formatDateLocale(): string
    formatTime(): string
    formatTimeLocal(): string
    formatTimeLocalNtz(): string
    getTimestamp(): GLib.DateTime
    setTimestamp(ts: GLib.DateTime): void

    // Class property signals of Vda-1.Vda.SqlValueTimestamp

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

export class SqlValueTimestamp {

    // Own properties of Vda-1.Vda.SqlValueTimestamp

    static name: string

    // Constructors of Vda-1.Vda.SqlValueTimestamp

    constructor(config?: SqlValueTimestamp.ConstructorProperties) 
    _init(config?: SqlValueTimestamp.ConstructorProperties): void
}

export module SqlValueTimestampNtz {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueTimestamp.ConstructorProperties {
    }

}

export interface SqlValueTimestampNtz extends GObject.Object, SqlValue, SqlValueTimestamp {

    // Class property signals of Vda-1.Vda.SqlValueTimestampNtz

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

export class SqlValueTimestampNtz {

    // Own properties of Vda-1.Vda.SqlValueTimestampNtz

    static name: string

    // Constructors of Vda-1.Vda.SqlValueTimestampNtz

    constructor(config?: SqlValueTimestampNtz.ConstructorProperties) 
    _init(config?: SqlValueTimestampNtz.ConstructorProperties): void
}

export module SqlValueTime {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueTimestamp.ConstructorProperties {
    }

}

export interface SqlValueTime extends GObject.Object, SqlValue, SqlValueTimestamp {

    // Class property signals of Vda-1.Vda.SqlValueTime

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

export class SqlValueTime {

    // Own properties of Vda-1.Vda.SqlValueTime

    static name: string

    // Constructors of Vda-1.Vda.SqlValueTime

    constructor(config?: SqlValueTime.ConstructorProperties) 
    _init(config?: SqlValueTime.ConstructorProperties): void
}

export module SqlValueTimeNtz {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueTimestampNtz.ConstructorProperties {
    }

}

export interface SqlValueTimeNtz extends GObject.Object, SqlValue, SqlValueTimestampNtz {

    // Class property signals of Vda-1.Vda.SqlValueTimeNtz

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

export class SqlValueTimeNtz {

    // Own properties of Vda-1.Vda.SqlValueTimeNtz

    static name: string

    // Constructors of Vda-1.Vda.SqlValueTimeNtz

    constructor(config?: SqlValueTimeNtz.ConstructorProperties) 
    _init(config?: SqlValueTimeNtz.ConstructorProperties): void
}

export module SqlValueBinary {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties {
    }

}

export interface SqlValueBinary extends GObject.Object, SqlValue {

    // Own properties of Vda-1.Vda.SqlValueBinary

    readonly size: number

    // Owm methods of Vda-1.Vda.SqlValueBinary

    // Has conflict: getBytes(): any
    // Has conflict: getOutStream(): Gio.OutputStream | null
    // Has conflict: getInputStream(): Gio.InputStream | null
    // Has conflict: getSize(): number

    // Own virtual methods of Vda-1.Vda.SqlValueBinary

    getBytes(): any
    getOutStream(): Gio.OutputStream | null
    getInputStream(): Gio.InputStream | null
    getSize(): number

    // Class property signals of Vda-1.Vda.SqlValueBinary

    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
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

export class SqlValueBinary {

    // Own properties of Vda-1.Vda.SqlValueBinary

    static name: string

    // Constructors of Vda-1.Vda.SqlValueBinary

    constructor(config?: SqlValueBinary.ConstructorProperties) 
    _init(config?: SqlValueBinary.ConstructorProperties): void
}

export module SqlValueBlob {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValueBinary.ConstructorProperties {
    }

}

export interface SqlValueBlob extends GObject.Object, SqlValueBinary {

    // Own properties of Vda-1.Vda.SqlValueBlob

    readonly connection: Connection

    // Owm methods of Vda-1.Vda.SqlValueBlob

    // Has conflict: create(stream: Gio.InputStream): void
    // Has conflict: delete(): void
    // Has conflict: write(file: Gio.File): void
    // Has conflict: read(file: Gio.File): void
    // Has conflict: getConnection(): Connection

    // Own virtual methods of Vda-1.Vda.SqlValueBlob

    create(stream: Gio.InputStream): void
    delete(): void
    write(file: Gio.File): void
    read(file: Gio.File): void
    getConnection(): Connection

    // Class property signals of Vda-1.Vda.SqlValueBlob

    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
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

export class SqlValueBlob {

    // Own properties of Vda-1.Vda.SqlValueBlob

    static name: string

    // Constructors of Vda-1.Vda.SqlValueBlob

    constructor(config?: SqlValueBlob.ConstructorProperties) 
    _init(config?: SqlValueBlob.ConstructorProperties): void
}

export module SqlValueBlobOid {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValueBlob.ConstructorProperties {
    }

}

export interface SqlValueBlobOid extends GObject.Object, SqlValueBlob {

    // Own properties of Vda-1.Vda.SqlValueBlobOid

    readonly identification: number

    // Owm methods of Vda-1.Vda.SqlValueBlobOid

    // Has conflict: getIdentification(): number

    // Own virtual methods of Vda-1.Vda.SqlValueBlobOid

    getIdentification(): number

    // Class property signals of Vda-1.Vda.SqlValueBlobOid

    connect(sigName: "notify::identification", callback: any): number
    on(sigName: "notify::identification", callback: any): number
    once(sigName: "notify::identification", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::identification", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
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

export class SqlValueBlobOid {

    // Own properties of Vda-1.Vda.SqlValueBlobOid

    static name: string

    // Constructors of Vda-1.Vda.SqlValueBlobOid

    constructor(config?: SqlValueBlobOid.ConstructorProperties) 
    _init(config?: SqlValueBlobOid.ConstructorProperties): void
}

export module SqlValueGeometricPoint {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.SqlValueGeometricPoint

        x?: number | null
        y?: number | null
    }

}

export interface SqlValueGeometricPoint extends GObject.Object, SqlValue {

    // Own properties of Vda-1.Vda.SqlValueGeometricPoint

    x: number
    y: number

    // Owm methods of Vda-1.Vda.SqlValueGeometricPoint

    // Has conflict: getX(): number
    // Has conflict: setX(value: number): void
    // Has conflict: getY(): number
    // Has conflict: setY(value: number): void

    // Own virtual methods of Vda-1.Vda.SqlValueGeometricPoint

    getX(): number
    setX(value: number): void
    getY(): number
    setY(value: number): void

    // Class property signals of Vda-1.Vda.SqlValueGeometricPoint

    connect(sigName: "notify::x", callback: any): number
    on(sigName: "notify::x", callback: any): number
    once(sigName: "notify::x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: any): number
    on(sigName: "notify::y", callback: any): number
    once(sigName: "notify::y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::y", ...args: any[]): void
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

export class SqlValueGeometricPoint {

    // Own properties of Vda-1.Vda.SqlValueGeometricPoint

    static name: string

    // Constructors of Vda-1.Vda.SqlValueGeometricPoint

    constructor(config?: SqlValueGeometricPoint.ConstructorProperties) 
    _init(config?: SqlValueGeometricPoint.ConstructorProperties): void
}

export module SqlValueMathExp {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, SqlValue.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.SqlValueMathExp

        math?: GCalc.MathEquationManager | null
    }

}

export interface SqlValueMathExp extends GObject.Object, SqlValue {

    // Own properties of Vda-1.Vda.SqlValueMathExp

    math: GCalc.MathEquationManager

    // Owm methods of Vda-1.Vda.SqlValueMathExp

    // Has conflict: getMath(): GCalc.MathEquationManager
    // Has conflict: setMath(value: GCalc.MathEquationManager): void

    // Own virtual methods of Vda-1.Vda.SqlValueMathExp

    getMath(): GCalc.MathEquationManager
    setMath(value: GCalc.MathEquationManager): void

    // Class property signals of Vda-1.Vda.SqlValueMathExp

    connect(sigName: "notify::math", callback: any): number
    on(sigName: "notify::math", callback: any): number
    once(sigName: "notify::math", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::math", ...args: any[]): void
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

export class SqlValueMathExp {

    // Own properties of Vda-1.Vda.SqlValueMathExp

    static name: string

    // Constructors of Vda-1.Vda.SqlValueMathExp

    constructor(config?: SqlValueMathExp.ConstructorProperties) 
    _init(config?: SqlValueMathExp.ConstructorProperties): void
}

export module TableModel {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Gio.ListModel.ConstructorProperties, Result.ConstructorProperties {
    }

}

export interface TableModel extends GObject.Object, Gio.ListModel, Result {

    // Class property signals of Vda-1.Vda.TableModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class TableModel {

    // Own properties of Vda-1.Vda.TableModel

    static name: string

    // Constructors of Vda-1.Vda.TableModel

    constructor(config?: TableModel.ConstructorProperties) 
    _init(config?: TableModel.ConstructorProperties): void
}

export module TableModelSequential {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Result.ConstructorProperties {
    }

}

export interface TableModelSequential extends GObject.Object, Result {

    // Owm methods of Vda-1.Vda.TableModelSequential

    // Has conflict: current(): RowModel | null
    // Has conflict: next(): boolean
    // Has conflict: back(): boolean
    // Has conflict: move(direction: MoveDirection, relative: number): boolean
    // Has conflict: copyCurrent(): RowModel | null

    // Own virtual methods of Vda-1.Vda.TableModelSequential

    current(): RowModel | null
    next(): boolean
    back(): boolean
    move(direction: MoveDirection, relative: number): boolean
    copyCurrent(): RowModel | null

    // Class property signals of Vda-1.Vda.TableModelSequential

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class TableModelSequential {

    // Own properties of Vda-1.Vda.TableModelSequential

    static name: string

    // Constructors of Vda-1.Vda.TableModelSequential

    constructor(config?: TableModelSequential.ConstructorProperties) 
    _init(config?: TableModelSequential.ConstructorProperties): void
}

export module AffectedRows {

    // Constructor properties interface

    export interface ConstructorProperties extends Result.ConstructorProperties, SqlAffectedRows.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface AffectedRows extends Result, SqlAffectedRows {

    // Class property signals of Vda-1.Vda.AffectedRows

    connect(sigName: "notify::number", callback: any): number
    on(sigName: "notify::number", callback: any): number
    once(sigName: "notify::number", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::number", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class AffectedRows extends GObject.Object {

    // Own properties of Vda-1.Vda.AffectedRows

    static name: string

    // Constructors of Vda-1.Vda.AffectedRows

    constructor(config?: AffectedRows.ConstructorProperties) 
    constructor(rows: number) 
    static new(rows: number): AffectedRows
    _init(config?: AffectedRows.ConstructorProperties): void
}

export module CommandDelete {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlCommand.ConstructorProperties, SqlCommandTableRelated.ConstructorProperties, SqlCommandConditional.ConstructorProperties, Stringifiable.ConstructorProperties, SqlCommandParametrized.ConstructorProperties, SqlCommandDelete.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface CommandDelete extends SqlCommand, SqlCommandTableRelated, SqlCommandConditional, Stringifiable, SqlCommandParametrized, SqlCommandDelete {

    // Class property signals of Vda-1.Vda.CommandDelete

    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::table", callback: any): number
    on(sigName: "notify::table", callback: any): number
    once(sigName: "notify::table", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::allias", callback: any): number
    on(sigName: "notify::allias", callback: any): number
    once(sigName: "notify::allias", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: "notify::condition", callback: any): number
    on(sigName: "notify::condition", callback: any): number
    once(sigName: "notify::condition", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::condition", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CommandDelete extends GObject.Object {

    // Own properties of Vda-1.Vda.CommandDelete

    static name: string

    // Constructors of Vda-1.Vda.CommandDelete

    constructor(config?: CommandDelete.ConstructorProperties) 
    constructor(cnc: Connection) 
    static new(cnc: Connection): CommandDelete
    _init(config?: CommandDelete.ConstructorProperties): void
}

export module CommandInsert {

    // Constructor properties interface

    export interface ConstructorProperties extends Stringifiable.ConstructorProperties, SqlCommandInsert.ConstructorProperties, CommandModification.ConstructorProperties {
    }

}

export interface CommandInsert extends Stringifiable, SqlCommandInsert {

    // Class property signals of Vda-1.Vda.CommandInsert

    connect(sigName: "notify::table", callback: any): number
    on(sigName: "notify::table", callback: any): number
    once(sigName: "notify::table", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::allias", callback: any): number
    on(sigName: "notify::allias", callback: any): number
    once(sigName: "notify::allias", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: "notify::fields", callback: any): number
    on(sigName: "notify::fields", callback: any): number
    once(sigName: "notify::fields", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fields", ...args: any[]): void
    connect(sigName: "notify::values", callback: any): number
    on(sigName: "notify::values", callback: any): number
    once(sigName: "notify::values", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CommandInsert extends CommandModification {

    // Own properties of Vda-1.Vda.CommandInsert

    static name: string

    // Constructors of Vda-1.Vda.CommandInsert

    constructor(config?: CommandInsert.ConstructorProperties) 
    constructor(cnc: Connection) 
    static new(cnc: Connection): CommandInsert

    // Overloads of new

    static new(cnc: Connection): CommandModification
    _init(config?: CommandInsert.ConstructorProperties): void
}

export module CommandModification {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlCommand.ConstructorProperties, SqlCommandTableRelated.ConstructorProperties, SqlCommandModification.ConstructorProperties, SqlCommandParametrized.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface CommandModification extends SqlCommand, SqlCommandTableRelated, SqlCommandModification, SqlCommandParametrized {

    // Class property signals of Vda-1.Vda.CommandModification

    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::table", callback: any): number
    on(sigName: "notify::table", callback: any): number
    once(sigName: "notify::table", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::allias", callback: any): number
    on(sigName: "notify::allias", callback: any): number
    once(sigName: "notify::allias", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: "notify::fields", callback: any): number
    on(sigName: "notify::fields", callback: any): number
    once(sigName: "notify::fields", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fields", ...args: any[]): void
    connect(sigName: "notify::values", callback: any): number
    on(sigName: "notify::values", callback: any): number
    once(sigName: "notify::values", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CommandModification extends GObject.Object {

    // Own properties of Vda-1.Vda.CommandModification

    static name: string

    // Constructors of Vda-1.Vda.CommandModification

    constructor(config?: CommandModification.ConstructorProperties) 
    constructor(cnc: Connection) 
    static new(cnc: Connection): CommandModification
    _init(config?: CommandModification.ConstructorProperties): void
}

export module CommandSelect {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlCommand.ConstructorProperties, SqlCommandConditional.ConstructorProperties, Stringifiable.ConstructorProperties, SqlCommandParametrized.ConstructorProperties, SqlCommandSelect.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface CommandSelect extends SqlCommand, SqlCommandConditional, Stringifiable, SqlCommandParametrized, SqlCommandSelect {

    // Class property signals of Vda-1.Vda.CommandSelect

    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::condition", callback: any): number
    on(sigName: "notify::condition", callback: any): number
    once(sigName: "notify::condition", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::condition", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::fields", callback: any): number
    on(sigName: "notify::fields", callback: any): number
    once(sigName: "notify::fields", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fields", ...args: any[]): void
    connect(sigName: "notify::tables", callback: any): number
    on(sigName: "notify::tables", callback: any): number
    once(sigName: "notify::tables", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tables", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CommandSelect extends GObject.Object {

    // Own properties of Vda-1.Vda.CommandSelect

    static name: string

    // Constructors of Vda-1.Vda.CommandSelect

    constructor(config?: CommandSelect.ConstructorProperties) 
    constructor(cnc: Connection) 
    static new(cnc: Connection): CommandSelect
    _init(config?: CommandSelect.ConstructorProperties): void
}

export module CommandUpdate {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlCommandConditional.ConstructorProperties, Stringifiable.ConstructorProperties, SqlCommandUpdate.ConstructorProperties, CommandModification.ConstructorProperties {
    }

}

export interface CommandUpdate extends SqlCommandConditional, Stringifiable, SqlCommandUpdate {

    // Class property signals of Vda-1.Vda.CommandUpdate

    connect(sigName: "notify::condition", callback: any): number
    on(sigName: "notify::condition", callback: any): number
    once(sigName: "notify::condition", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::condition", ...args: any[]): void
    connect(sigName: "notify::table", callback: any): number
    on(sigName: "notify::table", callback: any): number
    once(sigName: "notify::table", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::table", ...args: any[]): void
    connect(sigName: "notify::allias", callback: any): number
    on(sigName: "notify::allias", callback: any): number
    once(sigName: "notify::allias", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: "notify::fields", callback: any): number
    on(sigName: "notify::fields", callback: any): number
    once(sigName: "notify::fields", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fields", ...args: any[]): void
    connect(sigName: "notify::values", callback: any): number
    on(sigName: "notify::values", callback: any): number
    once(sigName: "notify::values", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CommandUpdate extends CommandModification {

    // Own properties of Vda-1.Vda.CommandUpdate

    static name: string

    // Constructors of Vda-1.Vda.CommandUpdate

    constructor(config?: CommandUpdate.ConstructorProperties) 
    constructor(cnc: Connection) 
    static new(cnc: Connection): CommandUpdate

    // Overloads of new

    static new(cnc: Connection): CommandModification
    _init(config?: CommandUpdate.ConstructorProperties): void
}

export module ConnectionParameter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.ConnectionParameter

        name?: string | null
        value?: string | null
    }

}

export interface ConnectionParameter {

    // Own properties of Vda-1.Vda.ConnectionParameter

    name: string
    value: string

    // Owm methods of Vda-1.Vda.ConnectionParameter

    getName(): string
    setName(value: string): void
    getValue(): string
    setValue(value: string): void

    // Class property signals of Vda-1.Vda.ConnectionParameter

    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ConnectionParameter extends GObject.Object {

    // Own properties of Vda-1.Vda.ConnectionParameter

    static name: string

    // Constructors of Vda-1.Vda.ConnectionParameter

    constructor(config?: ConnectionParameter.ConstructorProperties) 
    constructor() 
    static new(): ConnectionParameter
    _init(config?: ConnectionParameter.ConstructorProperties): void
}

export module ConnectionParameterDbName {

    // Constructor properties interface

    export interface ConstructorProperties extends ConnectionParameter.ConstructorProperties {
    }

}

export interface ConnectionParameterDbName {

    // Class property signals of Vda-1.Vda.ConnectionParameterDbName

    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ConnectionParameterDbName extends ConnectionParameter {

    // Own properties of Vda-1.Vda.ConnectionParameterDbName

    static name: string

    // Constructors of Vda-1.Vda.ConnectionParameterDbName

    constructor(config?: ConnectionParameterDbName.ConstructorProperties) 
    constructor() 
    static new(): ConnectionParameterDbName

    // Overloads of new

    static new(): ConnectionParameter
    _init(config?: ConnectionParameterDbName.ConstructorProperties): void
}

export module ConnectionParameterHost {

    // Constructor properties interface

    export interface ConstructorProperties extends ConnectionParameter.ConstructorProperties {
    }

}

export interface ConnectionParameterHost {

    // Class property signals of Vda-1.Vda.ConnectionParameterHost

    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ConnectionParameterHost extends ConnectionParameter {

    // Own properties of Vda-1.Vda.ConnectionParameterHost

    static name: string

    // Constructors of Vda-1.Vda.ConnectionParameterHost

    constructor(config?: ConnectionParameterHost.ConstructorProperties) 
    constructor() 
    static new(): ConnectionParameterHost

    // Overloads of new

    static new(): ConnectionParameter
    _init(config?: ConnectionParameterHost.ConstructorProperties): void
}

export module ConnectionParameterPort {

    // Constructor properties interface

    export interface ConstructorProperties extends ConnectionParameter.ConstructorProperties {
    }

}

export interface ConnectionParameterPort {

    // Class property signals of Vda-1.Vda.ConnectionParameterPort

    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ConnectionParameterPort extends ConnectionParameter {

    // Own properties of Vda-1.Vda.ConnectionParameterPort

    static name: string

    // Constructors of Vda-1.Vda.ConnectionParameterPort

    constructor(config?: ConnectionParameterPort.ConstructorProperties) 
    constructor() 
    static new(): ConnectionParameterPort

    // Overloads of new

    static new(): ConnectionParameter
    _init(config?: ConnectionParameterPort.ConstructorProperties): void
}

export module ConnectionParameterUserName {

    // Constructor properties interface

    export interface ConstructorProperties extends ConnectionParameter.ConstructorProperties {
    }

}

export interface ConnectionParameterUserName {

    // Class property signals of Vda-1.Vda.ConnectionParameterUserName

    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ConnectionParameterUserName extends ConnectionParameter {

    // Own properties of Vda-1.Vda.ConnectionParameterUserName

    static name: string

    // Constructors of Vda-1.Vda.ConnectionParameterUserName

    constructor(config?: ConnectionParameterUserName.ConstructorProperties) 
    constructor() 
    static new(): ConnectionParameterUserName

    // Overloads of new

    static new(): ConnectionParameter
    _init(config?: ConnectionParameterUserName.ConstructorProperties): void
}

export module ConnectionParameterPassword {

    // Constructor properties interface

    export interface ConstructorProperties extends ConnectionParameter.ConstructorProperties {
    }

}

export interface ConnectionParameterPassword {

    // Class property signals of Vda-1.Vda.ConnectionParameterPassword

    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ConnectionParameterPassword extends ConnectionParameter {

    // Own properties of Vda-1.Vda.ConnectionParameterPassword

    static name: string

    // Constructors of Vda-1.Vda.ConnectionParameterPassword

    constructor(config?: ConnectionParameterPassword.ConstructorProperties) 
    constructor() 
    static new(): ConnectionParameterPassword

    // Overloads of new

    static new(): ConnectionParameter
    _init(config?: ConnectionParameterPassword.ConstructorProperties): void
}

export module ConnectionParameters {

    // Constructor properties interface

    export interface ConstructorProperties extends Gee.HashMap.ConstructorProperties {
    }

}

export interface ConnectionParameters {

    // Owm methods of Vda-1.Vda.ConnectionParameters

    // Has conflict: parse(cnstring: string): void
    toString(): string
    hasParam(name: string): boolean

    // Conflicting methods

    hasKey(key: object | null): boolean

    // Overloads of hasKey

    hasKey(key: object | null): boolean
    hasKey(key: object | null): boolean
    has(key: object | null, value: object | null): boolean

    // Overloads of has

    has(key: object | null, value: object | null): boolean
    has(key: object | null, value: object | null): boolean
    get(key: object | null): object | null

    // Overloads of get

    get(key: object | null): object | null
    get(key: object | null): object | null
    set(key: object | null, value: object | null): void

    // Overloads of set

    set(key: object | null, value: object | null): void
    set(key: object | null, value: object | null): void
    unset(key: object | null): [ /* returnType */ boolean, /* value */ object ]

    // Overloads of unset

    unset(key: object | null): [ /* returnType */ boolean, /* value */ object ]
    unset(key: object | null): [ /* returnType */ boolean, /* value */ object ]
    mapIterator(): Gee.MapIterator

    // Overloads of mapIterator

    mapIterator(): Gee.MapIterator
    mapIterator(): Gee.MapIterator
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator

    // Overloads of stream

    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    getKeys(): Gee.Set

    // Overloads of getKeys

    getKeys(): Gee.Set
    getKeys(): Gee.Set
    getValues(): Gee.Collection

    // Overloads of getValues

    getValues(): Gee.Collection
    getValues(): Gee.Collection
    getEntries(): Gee.Set

    // Overloads of getEntries

    getEntries(): Gee.Set
    getEntries(): Gee.Set
    getReadOnlyView(): Gee.Map

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Map
    getReadOnlyView(): Gee.Map

    // Own virtual methods of Vda-1.Vda.ConnectionParameters

    parse(cnstring: string): void

    // Class property signals of Vda-1.Vda.ConnectionParameters

    connect(sigName: "notify::k-type", callback: any): number
    on(sigName: "notify::k-type", callback: any): number
    once(sigName: "notify::k-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: any): number
    on(sigName: "notify::k-dup-func", callback: any): number
    once(sigName: "notify::k-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: any): number
    on(sigName: "notify::k-destroy-func", callback: any): number
    once(sigName: "notify::k-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: any): number
    on(sigName: "notify::v-type", callback: any): number
    once(sigName: "notify::v-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: any): number
    on(sigName: "notify::v-dup-func", callback: any): number
    once(sigName: "notify::v-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: any): number
    on(sigName: "notify::v-destroy-func", callback: any): number
    once(sigName: "notify::v-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: any): number
    on(sigName: "notify::keys", callback: any): number
    once(sigName: "notify::keys", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: any): number
    on(sigName: "notify::values", callback: any): number
    once(sigName: "notify::values", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: any): number
    on(sigName: "notify::entries", callback: any): number
    once(sigName: "notify::entries", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ConnectionParameters extends Gee.HashMap {

    // Own properties of Vda-1.Vda.ConnectionParameters

    static name: string

    // Constructors of Vda-1.Vda.ConnectionParameters

    constructor(config?: ConnectionParameters.ConstructorProperties) 
    constructor(cncStr: string) 
    static new(cncStr: string): ConnectionParameters

    // Overloads of new

    static new(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: Gee.HashDataFunc | null, keyEqualFunc: Gee.EqualDataFunc | null, valueEqualFunc: Gee.EqualDataFunc | null): Gee.HashMap
    _init(config?: ConnectionParameters.ConstructorProperties): void
}

export module Expression {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.ListModel.ConstructorProperties, SqlExpression.ConstructorProperties, Gee.ArrayList.ConstructorProperties {
    }

}

export interface Expression extends Gio.ListModel, SqlExpression {

    // Conflicting properties

    readOnlyView: any
    size: any

    // Owm methods of Vda-1.Vda.Expression

    // Has conflict: toString(): string

    // Conflicting methods

    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Own virtual methods of Vda-1.Vda.Expression

    toString(): string

    // Overloads of toString

    toString(): string

    // Class property signals of Vda-1.Vda.Expression

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
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

export class Expression extends Gee.ArrayList {

    // Own properties of Vda-1.Vda.Expression

    static name: string

    // Constructors of Vda-1.Vda.Expression

    constructor(config?: Expression.ConstructorProperties) 
    constructor() 
    static new(): Expression

    // Overloads of new

    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: Expression.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionField {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionField.ConstructorProperties, Expression.ConstructorProperties {
    }

}

export interface ExpressionField extends SqlExpressionField {

    // Conflicting properties

    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionField

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::table-ref", callback: any): number
    on(sigName: "notify::table-ref", callback: any): number
    once(sigName: "notify::table-ref", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::table-ref", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::allias", callback: any): number
    on(sigName: "notify::allias", callback: any): number
    once(sigName: "notify::allias", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionField extends Expression {

    // Own properties of Vda-1.Vda.ExpressionField

    static name: string

    // Constructors of Vda-1.Vda.ExpressionField

    constructor(config?: ExpressionField.ConstructorProperties) 
    constructor() 
    static new(): ExpressionField

    // Overloads of new

    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionField.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperator {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperator.ConstructorProperties, Expression.ConstructorProperties {
    }

}

export interface ExpressionOperator extends SqlExpressionOperator {

    // Conflicting properties

    readOnlyView: any
    size: any

    // Own fields of Vda-1.Vda.ExpressionOperator

    operatorType: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperator

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperator extends Expression {

    // Own properties of Vda-1.Vda.ExpressionOperator

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperator

    constructor(config?: ExpressionOperator.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperator

    // Overloads of new

    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperator.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorGroup.ConstructorProperties, ExpressionOperator.ConstructorProperties {
    }

}

export interface ExpressionOperatorGroup extends SqlExpressionOperatorGroup {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorGroup

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorGroup extends ExpressionOperator {

    // Own properties of Vda-1.Vda.ExpressionOperatorGroup

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorGroup

    constructor(config?: ExpressionOperatorGroup.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorGroup

    // Overloads of new

    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorGroup.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorMultiterm {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorMultiterm.ConstructorProperties, ExpressionOperator.ConstructorProperties {
    }

}

export interface ExpressionOperatorMultiterm extends SqlExpressionOperatorMultiterm {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Own fields of Vda-1.Vda.ExpressionOperatorMultiterm

    operatorName: string

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorMultiterm

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorMultiterm extends ExpressionOperator {

    // Own properties of Vda-1.Vda.ExpressionOperatorMultiterm

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorMultiterm

    constructor(config?: ExpressionOperatorMultiterm.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorMultiterm

    // Overloads of new

    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorMultiterm.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorAnd {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorAnd.ConstructorProperties, ExpressionOperatorMultiterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorAnd extends SqlExpressionOperatorAnd {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorAnd

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorAnd extends ExpressionOperatorMultiterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorAnd

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorAnd

    constructor(config?: ExpressionOperatorAnd.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorAnd

    // Overloads of new

    static new(): ExpressionOperatorMultiterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorAnd.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorOr {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorOr.ConstructorProperties, ExpressionOperatorMultiterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorOr extends SqlExpressionOperatorOr {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorOr

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorOr extends ExpressionOperatorMultiterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorOr

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorOr

    constructor(config?: ExpressionOperatorOr.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorOr

    // Overloads of new

    static new(): ExpressionOperatorMultiterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorOr.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorBinaryterm {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorBinaryterm.ConstructorProperties, ExpressionOperator.ConstructorProperties {
    }

}

export interface ExpressionOperatorBinaryterm extends SqlExpressionOperatorBinaryterm {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Own fields of Vda-1.Vda.ExpressionOperatorBinaryterm

    operatorName: string

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorBinaryterm

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorBinaryterm extends ExpressionOperator {

    // Own properties of Vda-1.Vda.ExpressionOperatorBinaryterm

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorBinaryterm

    constructor(config?: ExpressionOperatorBinaryterm.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorBinaryterm

    // Overloads of new

    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorBinaryterm.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorEq {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorEq.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorEq extends SqlExpressionOperatorEq {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorEq

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorEq extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorEq

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorEq

    constructor(config?: ExpressionOperatorEq.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorEq

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorEq.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorNotEq {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorNotEq.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorNotEq extends SqlExpressionOperatorNotEq {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorNotEq

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorNotEq extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotEq

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorNotEq

    constructor(config?: ExpressionOperatorNotEq.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorNotEq

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNotEq.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorDiff {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorDiff.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorDiff extends SqlExpressionOperatorDiff {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorDiff

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorDiff extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorDiff

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorDiff

    constructor(config?: ExpressionOperatorDiff.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorDiff

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorDiff.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorGt {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorGt.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorGt extends SqlExpressionOperatorGt {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorGt

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorGt extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorGt

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorGt

    constructor(config?: ExpressionOperatorGt.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorGt

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorGt.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorLt {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorLt.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorLt extends SqlExpressionOperatorLt {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorLt

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorLt extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorLt

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorLt

    constructor(config?: ExpressionOperatorLt.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorLt

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorLt.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorGeq {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorGeq.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorGeq extends SqlExpressionOperatorGeq {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorGeq

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorGeq extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorGeq

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorGeq

    constructor(config?: ExpressionOperatorGeq.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorGeq

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorGeq.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorLeq {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorLeq.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorLeq extends SqlExpressionOperatorLeq {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorLeq

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorLeq extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorLeq

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorLeq

    constructor(config?: ExpressionOperatorLeq.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorLeq

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorLeq.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorRegexp {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorRegexp.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorRegexp extends SqlExpressionOperatorRegexp {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorRegexp

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorRegexp extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorRegexp

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorRegexp

    constructor(config?: ExpressionOperatorRegexp.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorRegexp

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorRegexp.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorStar {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorStar.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorStar extends SqlExpressionOperatorStar {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorStar

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorStar extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorStar

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorStar

    constructor(config?: ExpressionOperatorStar.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorStar

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorStar.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorDiv {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorDiv.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorDiv extends SqlExpressionOperatorDiv {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorDiv

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorDiv extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorDiv

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorDiv

    constructor(config?: ExpressionOperatorDiv.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorDiv

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorDiv.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIn {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIn.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorIn extends SqlExpressionOperatorIn {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorIn

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorIn extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorIn

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorIn

    constructor(config?: ExpressionOperatorIn.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIn

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIn.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorNotIn {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorNotIn.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorNotIn extends SqlExpressionOperatorNotIn {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorNotIn

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorNotIn extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotIn

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorNotIn

    constructor(config?: ExpressionOperatorNotIn.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorNotIn

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNotIn.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorConcatenate {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorConcatenate.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorConcatenate extends SqlExpressionOperatorConcatenate {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorConcatenate

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorConcatenate extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorConcatenate

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorConcatenate

    constructor(config?: ExpressionOperatorConcatenate.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorConcatenate

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorConcatenate.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorSimilarTo {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorSimilarTo.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorSimilarTo extends SqlExpressionOperatorSimilarTo {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorSimilarTo

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorSimilarTo extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorSimilarTo

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorSimilarTo

    constructor(config?: ExpressionOperatorSimilarTo.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorSimilarTo

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorSimilarTo.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorLike {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorLike.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorLike extends SqlExpressionOperatorLike {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorLike

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorLike extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorLike

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorLike

    constructor(config?: ExpressionOperatorLike.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorLike

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorLike.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorNotLike {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorNotLike.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorNotLike extends SqlExpressionOperatorNotLike {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorNotLike

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorNotLike extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotLike

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorNotLike

    constructor(config?: ExpressionOperatorNotLike.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorNotLike

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNotLike.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIlike {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIlike.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorIlike extends SqlExpressionOperatorIlike {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorIlike

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorIlike extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorIlike

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorIlike

    constructor(config?: ExpressionOperatorIlike.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIlike

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIlike.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorNotIlike {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorNotIlike.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorNotIlike extends SqlExpressionOperatorNotIlike {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorNotIlike

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorNotIlike extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotIlike

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorNotIlike

    constructor(config?: ExpressionOperatorNotIlike.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorNotIlike

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNotIlike.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorBinaryUnaryterm {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorBinaryUnaryterm.ConstructorProperties, ExpressionOperator.ConstructorProperties {
    }

}

export interface ExpressionOperatorBinaryUnaryterm extends SqlExpressionOperatorBinaryUnaryterm {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Own fields of Vda-1.Vda.ExpressionOperatorBinaryUnaryterm

    operatorName: string

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorBinaryUnaryterm

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorBinaryUnaryterm extends ExpressionOperator {

    // Own properties of Vda-1.Vda.ExpressionOperatorBinaryUnaryterm

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorBinaryUnaryterm

    constructor(config?: ExpressionOperatorBinaryUnaryterm.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorBinaryUnaryterm

    // Overloads of new

    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorBinaryUnaryterm.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorMinus {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorMinus.ConstructorProperties, ExpressionOperatorBinaryUnaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorMinus extends SqlExpressionOperatorMinus {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorMinus

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorMinus extends ExpressionOperatorBinaryUnaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorMinus

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorMinus

    constructor(config?: ExpressionOperatorMinus.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorMinus

    // Overloads of new

    static new(): ExpressionOperatorBinaryUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorMinus.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorPlus {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorPlus.ConstructorProperties, ExpressionOperatorBinaryUnaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorPlus extends SqlExpressionOperatorPlus {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorPlus

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorPlus extends ExpressionOperatorBinaryUnaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorPlus

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorPlus

    constructor(config?: ExpressionOperatorPlus.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorPlus

    // Overloads of new

    static new(): ExpressionOperatorBinaryUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorPlus.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorInitialUnaryterm {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorInitialUnaryterm.ConstructorProperties, ExpressionOperator.ConstructorProperties {
    }

}

export interface ExpressionOperatorInitialUnaryterm extends SqlExpressionOperatorInitialUnaryterm {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Own fields of Vda-1.Vda.ExpressionOperatorInitialUnaryterm

    operatorName: string

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorInitialUnaryterm

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorInitialUnaryterm extends ExpressionOperator {

    // Own properties of Vda-1.Vda.ExpressionOperatorInitialUnaryterm

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorInitialUnaryterm

    constructor(config?: ExpressionOperatorInitialUnaryterm.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorInitialUnaryterm

    // Overloads of new

    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorInitialUnaryterm.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorNot {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorNot.ConstructorProperties, ExpressionOperatorInitialUnaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorNot extends SqlExpressionOperatorNot {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorNot

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorNot extends ExpressionOperatorInitialUnaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorNot

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorNot

    constructor(config?: ExpressionOperatorNot.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorNot

    // Overloads of new

    static new(): ExpressionOperatorInitialUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNot.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorFinalUnaryterm {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorFinalUnaryterm.ConstructorProperties, ExpressionOperator.ConstructorProperties {
    }

}

export interface ExpressionOperatorFinalUnaryterm extends SqlExpressionOperatorFinalUnaryterm {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Own fields of Vda-1.Vda.ExpressionOperatorFinalUnaryterm

    operatorName: string

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorFinalUnaryterm

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorFinalUnaryterm extends ExpressionOperator {

    // Own properties of Vda-1.Vda.ExpressionOperatorFinalUnaryterm

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorFinalUnaryterm

    constructor(config?: ExpressionOperatorFinalUnaryterm.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorFinalUnaryterm

    // Overloads of new

    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorFinalUnaryterm.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIs {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIs.ConstructorProperties, ExpressionOperatorFinalUnaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorIs extends SqlExpressionOperatorIs {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorIs

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorIs extends ExpressionOperatorFinalUnaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorIs

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorIs

    constructor(config?: ExpressionOperatorIs.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIs

    // Overloads of new

    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIs.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsNot {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsNot.ConstructorProperties, ExpressionOperatorIs.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsNot extends SqlExpressionOperatorIsNot {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsNot

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorIsNot extends ExpressionOperatorIs {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNot

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorIsNot

    constructor(config?: ExpressionOperatorIsNot.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsNot

    // Overloads of new

    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsNot.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsNull {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsNull.ConstructorProperties, ExpressionOperatorIs.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsNull extends SqlExpressionOperatorIsNull {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsNull

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorIsNull extends ExpressionOperatorIs {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNull

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorIsNull

    constructor(config?: ExpressionOperatorIsNull.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsNull

    // Overloads of new

    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsNull.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsNotNull {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsNotNull.ConstructorProperties, ExpressionOperatorIsNot.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsNotNull extends SqlExpressionOperatorIsNotNull {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsNotNull

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorIsNotNull extends ExpressionOperatorIsNot {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotNull

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorIsNotNull

    constructor(config?: ExpressionOperatorIsNotNull.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsNotNull

    // Overloads of new

    static new(): ExpressionOperatorIsNot
    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsNotNull.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsTrue {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsTrue.ConstructorProperties, ExpressionOperatorIs.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsTrue extends SqlExpressionOperatorIsTrue {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsTrue

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorIsTrue extends ExpressionOperatorIs {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsTrue

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorIsTrue

    constructor(config?: ExpressionOperatorIsTrue.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsTrue

    // Overloads of new

    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsTrue.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsNotTrue {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsNotTrue.ConstructorProperties, ExpressionOperatorIsNot.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsNotTrue extends SqlExpressionOperatorIsNotTrue {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsNotTrue

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorIsNotTrue extends ExpressionOperatorIsNot {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotTrue

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorIsNotTrue

    constructor(config?: ExpressionOperatorIsNotTrue.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsNotTrue

    // Overloads of new

    static new(): ExpressionOperatorIsNot
    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsNotTrue.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsFalse {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsFalse.ConstructorProperties, ExpressionOperatorIs.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsFalse extends SqlExpressionOperatorIsFalse {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsFalse

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorIsFalse extends ExpressionOperatorIs {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsFalse

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorIsFalse

    constructor(config?: ExpressionOperatorIsFalse.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsFalse

    // Overloads of new

    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsFalse.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsNotFalse {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsNotFalse.ConstructorProperties, ExpressionOperatorIsNot.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsNotFalse extends SqlExpressionOperatorIsNotFalse {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsNotFalse

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorIsNotFalse extends ExpressionOperatorIsNot {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotFalse

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorIsNotFalse

    constructor(config?: ExpressionOperatorIsNotFalse.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsNotFalse

    // Overloads of new

    static new(): ExpressionOperatorIsNot
    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsNotFalse.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsNotUnknown {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsNotUnknown.ConstructorProperties, ExpressionOperatorIsNot.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsNotUnknown extends SqlExpressionOperatorIsNotUnknown {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string
    toString(): string

    // Overloads of toString

    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsNotUnknown

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorIsNotUnknown extends ExpressionOperatorIsNot {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotUnknown

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorIsNotUnknown

    constructor(config?: ExpressionOperatorIsNotUnknown.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsNotUnknown

    // Overloads of new

    static new(): ExpressionOperatorIsNot
    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsNotUnknown.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsUnknown {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsUnknown.ConstructorProperties, ExpressionOperatorIs.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsUnknown extends SqlExpressionOperatorIsUnknown {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsUnknown

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorIsUnknown extends ExpressionOperatorIs {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsUnknown

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorIsUnknown

    constructor(config?: ExpressionOperatorIsUnknown.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsUnknown

    // Overloads of new

    static new(): ExpressionOperatorIs
    static new(): ExpressionOperatorFinalUnaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsUnknown.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsDistinct {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsDistinct.ConstructorProperties, ExpressionOperatorBinaryterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsDistinct extends SqlExpressionOperatorIsDistinct {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsDistinct

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorIsDistinct extends ExpressionOperatorBinaryterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsDistinct

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorIsDistinct

    constructor(config?: ExpressionOperatorIsDistinct.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsDistinct

    // Overloads of new

    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsDistinct.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsNotDistinct {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsNotDistinct.ConstructorProperties, ExpressionOperatorIsDistinct.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsNotDistinct extends SqlExpressionOperatorIsNotDistinct {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsNotDistinct

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorIsNotDistinct extends ExpressionOperatorIsDistinct {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotDistinct

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorIsNotDistinct

    constructor(config?: ExpressionOperatorIsNotDistinct.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsNotDistinct

    // Overloads of new

    static new(): ExpressionOperatorIsDistinct
    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsNotDistinct.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsDistinctFrom {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsDistinctFrom.ConstructorProperties, ExpressionOperatorIsDistinct.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsDistinctFrom extends SqlExpressionOperatorIsDistinctFrom {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsDistinctFrom

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorIsDistinctFrom extends ExpressionOperatorIsDistinct {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsDistinctFrom

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorIsDistinctFrom

    constructor(config?: ExpressionOperatorIsDistinctFrom.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsDistinctFrom

    // Overloads of new

    static new(): ExpressionOperatorIsDistinct
    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsDistinctFrom.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorIsNotDistinctFrom {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorIsNotDistinctFrom.ConstructorProperties, ExpressionOperatorIsNotDistinct.ConstructorProperties {
    }

}

export interface ExpressionOperatorIsNotDistinctFrom extends SqlExpressionOperatorIsNotDistinctFrom {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorIsNotDistinctFrom

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorIsNotDistinctFrom extends ExpressionOperatorIsNotDistinct {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotDistinctFrom

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorIsNotDistinctFrom

    constructor(config?: ExpressionOperatorIsNotDistinctFrom.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorIsNotDistinctFrom

    // Overloads of new

    static new(): ExpressionOperatorIsNotDistinct
    static new(): ExpressionOperatorIsDistinct
    static new(): ExpressionOperatorBinaryterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorIsNotDistinctFrom.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorThreeterm {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorThreeterm.ConstructorProperties, ExpressionOperator.ConstructorProperties {
    }

}

export interface ExpressionOperatorThreeterm extends SqlExpressionOperatorThreeterm {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Own fields of Vda-1.Vda.ExpressionOperatorThreeterm

    operatorName: string
    operator2Name: string

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorThreeterm

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorThreeterm extends ExpressionOperator {

    // Own properties of Vda-1.Vda.ExpressionOperatorThreeterm

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorThreeterm

    constructor(config?: ExpressionOperatorThreeterm.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorThreeterm

    // Overloads of new

    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorThreeterm.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorBetween {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorBetween.ConstructorProperties, ExpressionOperatorThreeterm.ConstructorProperties {
    }

}

export interface ExpressionOperatorBetween extends SqlExpressionOperatorBetween {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorBetween

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorBetween extends ExpressionOperatorThreeterm {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetween

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorBetween

    constructor(config?: ExpressionOperatorBetween.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorBetween

    // Overloads of new

    static new(): ExpressionOperatorThreeterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorBetween.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorBetweenAnd {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorBetweenAnd.ConstructorProperties, ExpressionOperatorBetween.ConstructorProperties {
    }

}

export interface ExpressionOperatorBetweenAnd extends SqlExpressionOperatorBetweenAnd {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorBetweenAnd

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorBetweenAnd extends ExpressionOperatorBetween {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenAnd

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorBetweenAnd

    constructor(config?: ExpressionOperatorBetweenAnd.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorBetweenAnd

    // Overloads of new

    static new(): ExpressionOperatorBetween
    static new(): ExpressionOperatorThreeterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorBetweenAnd.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorNotBetween {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorNotBetween.ConstructorProperties, ExpressionOperatorBetween.ConstructorProperties {
    }

}

export interface ExpressionOperatorNotBetween extends SqlExpressionOperatorNotBetween {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorNotBetween

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorNotBetween extends ExpressionOperatorBetween {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetween

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorNotBetween

    constructor(config?: ExpressionOperatorNotBetween.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorNotBetween

    // Overloads of new

    static new(): ExpressionOperatorBetween
    static new(): ExpressionOperatorThreeterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNotBetween.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorNotBetweenAnd {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorNotBetweenAnd.ConstructorProperties, ExpressionOperatorNotBetween.ConstructorProperties {
    }

}

export interface ExpressionOperatorNotBetweenAnd extends SqlExpressionOperatorNotBetweenAnd {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorNotBetweenAnd

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorNotBetweenAnd extends ExpressionOperatorNotBetween {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenAnd

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorNotBetweenAnd

    constructor(config?: ExpressionOperatorNotBetweenAnd.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorNotBetweenAnd

    // Overloads of new

    static new(): ExpressionOperatorNotBetween
    static new(): ExpressionOperatorBetween
    static new(): ExpressionOperatorThreeterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNotBetweenAnd.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorBetweenSymmetric {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorBetweenSymmetric.ConstructorProperties, ExpressionOperatorBetween.ConstructorProperties {
    }

}

export interface ExpressionOperatorBetweenSymmetric extends SqlExpressionOperatorBetweenSymmetric {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorBetweenSymmetric

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorBetweenSymmetric extends ExpressionOperatorBetween {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenSymmetric

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorBetweenSymmetric

    constructor(config?: ExpressionOperatorBetweenSymmetric.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorBetweenSymmetric

    // Overloads of new

    static new(): ExpressionOperatorBetween
    static new(): ExpressionOperatorThreeterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorBetweenSymmetric.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorBetweenSymmetricAnd {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorBetweenSymmetricAnd.ConstructorProperties, ExpressionOperatorBetweenSymmetric.ConstructorProperties {
    }

}

export interface ExpressionOperatorBetweenSymmetricAnd extends SqlExpressionOperatorBetweenSymmetricAnd {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorBetweenSymmetricAnd

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorBetweenSymmetricAnd extends ExpressionOperatorBetweenSymmetric {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenSymmetricAnd

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorBetweenSymmetricAnd

    constructor(config?: ExpressionOperatorBetweenSymmetricAnd.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorBetweenSymmetricAnd

    // Overloads of new

    static new(): ExpressionOperatorBetweenSymmetric
    static new(): ExpressionOperatorBetween
    static new(): ExpressionOperatorThreeterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorBetweenSymmetricAnd.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorNotBetweenSymmetric {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorNotBetweenSymmetric.ConstructorProperties, ExpressionOperatorBetweenSymmetric.ConstructorProperties {
    }

}

export interface ExpressionOperatorNotBetweenSymmetric extends SqlExpressionOperatorNotBetweenSymmetric {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetric

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorNotBetweenSymmetric extends ExpressionOperatorBetweenSymmetric {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetric

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetric

    constructor(config?: ExpressionOperatorNotBetweenSymmetric.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorNotBetweenSymmetric

    // Overloads of new

    static new(): ExpressionOperatorBetweenSymmetric
    static new(): ExpressionOperatorBetween
    static new(): ExpressionOperatorThreeterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNotBetweenSymmetric.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionOperatorNotBetweenSymmetricAnd {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionOperatorNotBetweenSymmetricAnd.ConstructorProperties, ExpressionOperatorNotBetweenSymmetric.ConstructorProperties {
    }

}

export interface ExpressionOperatorNotBetweenSymmetricAnd extends SqlExpressionOperatorNotBetweenSymmetricAnd {

    // Conflicting properties

    operatorType: any
    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetricAnd

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::operator-type", callback: any): number
    on(sigName: "notify::operator-type", callback: any): number
    once(sigName: "notify::operator-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::operator-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionOperatorNotBetweenSymmetricAnd extends ExpressionOperatorNotBetweenSymmetric {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetricAnd

    static name: string

    // Constructors of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetricAnd

    constructor(config?: ExpressionOperatorNotBetweenSymmetricAnd.ConstructorProperties) 
    constructor() 
    static new(): ExpressionOperatorNotBetweenSymmetricAnd

    // Overloads of new

    static new(): ExpressionOperatorNotBetweenSymmetric
    static new(): ExpressionOperatorBetweenSymmetric
    static new(): ExpressionOperatorBetween
    static new(): ExpressionOperatorThreeterm
    static new(): ExpressionOperator
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionOperatorNotBetweenSymmetricAnd.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionValue {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionValue.ConstructorProperties, Expression.ConstructorProperties {
    }

}

export interface ExpressionValue extends SqlExpressionValue {

    // Conflicting properties

    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionValue

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionValue extends Expression {

    // Own properties of Vda-1.Vda.ExpressionValue

    static name: string

    // Constructors of Vda-1.Vda.ExpressionValue

    constructor(config?: ExpressionValue.ConstructorProperties) 
    constructor() 
    static new(): ExpressionValue

    // Overloads of new

    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionValue.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionValueParameter {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlExpressionValueParameter.ConstructorProperties, ExpressionValue.ConstructorProperties {
    }

}

export interface ExpressionValueParameter extends SqlExpressionValueParameter {

    // Conflicting properties

    readOnlyView: any
    size: any

    // Conflicting methods

    toString(): string
    toString(): string

    // Overloads of toString

    toString(): string
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.ExpressionValueParameter

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::gtype", callback: any): number
    on(sigName: "notify::gtype", callback: any): number
    once(sigName: "notify::gtype", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::gtype", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionValueParameter extends ExpressionValue {

    // Own properties of Vda-1.Vda.ExpressionValueParameter

    static name: string

    // Constructors of Vda-1.Vda.ExpressionValueParameter

    constructor(config?: ExpressionValueParameter.ConstructorProperties) 
    constructor() 
    static new(): ExpressionValueParameter

    // Overloads of new

    static new(): ExpressionValue
    static new(): Expression
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionValueParameter.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module HashList {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.ListModel.ConstructorProperties, HashModel.ConstructorProperties, Gee.ArrayList.ConstructorProperties {
    }

}

export interface HashList extends Gio.ListModel, HashModel {

    // Conflicting properties

    readOnlyView: any
    size: any

    // Conflicting methods

    add(object: GObject.Object): void
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(object: GObject.Object): void
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Class property signals of Vda-1.Vda.HashList

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
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

export class HashList extends Gee.ArrayList {

    // Own properties of Vda-1.Vda.HashList

    static name: string

    // Constructors of Vda-1.Vda.HashList

    constructor(config?: HashList.ConstructorProperties) 
    constructor() 
    static new(): HashList

    // Overloads of new

    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: HashList.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module InvalidQuery {

    // Constructor properties interface

    export interface ConstructorProperties extends Query.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.InvalidQuery

        message?: string | null
    }

}

export interface InvalidQuery extends Query {

    // Own properties of Vda-1.Vda.InvalidQuery

    message: string

    // Owm methods of Vda-1.Vda.InvalidQuery

    getMessage(): string
    setMessage(value: string): void

    // Class property signals of Vda-1.Vda.InvalidQuery

    connect(sigName: "notify::message", callback: any): number
    on(sigName: "notify::message", callback: any): number
    once(sigName: "notify::message", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: "notify::sql", callback: any): number
    on(sigName: "notify::sql", callback: any): number
    once(sigName: "notify::sql", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sql", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class InvalidQuery extends GObject.Object {

    // Own properties of Vda-1.Vda.InvalidQuery

    static name: string

    // Constructors of Vda-1.Vda.InvalidQuery

    constructor(config?: InvalidQuery.ConstructorProperties) 
    constructor(msg: string) 
    static new(msg: string): InvalidQuery
    _init(config?: InvalidQuery.ConstructorProperties): void
}

export module InvalidPreparedQuery {

    // Constructor properties interface

    export interface ConstructorProperties extends PreparedQuery.ConstructorProperties, InvalidQuery.ConstructorProperties {
    }

}

export interface InvalidPreparedQuery extends PreparedQuery {

    // Class property signals of Vda-1.Vda.InvalidPreparedQuery

    connect(sigName: "notify::message", callback: any): number
    on(sigName: "notify::message", callback: any): number
    once(sigName: "notify::message", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::sql", callback: any): number
    on(sigName: "notify::sql", callback: any): number
    once(sigName: "notify::sql", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sql", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class InvalidPreparedQuery extends InvalidQuery {

    // Own properties of Vda-1.Vda.InvalidPreparedQuery

    static name: string

    // Constructors of Vda-1.Vda.InvalidPreparedQuery

    constructor(config?: InvalidPreparedQuery.ConstructorProperties) 
    constructor(msg: string) 
    static new(msg: string): InvalidPreparedQuery

    // Overloads of new

    static new(msg: string): InvalidQuery
    _init(config?: InvalidPreparedQuery.ConstructorProperties): void
}

export module InvalidResult {

    // Constructor properties interface

    export interface ConstructorProperties extends Result.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.InvalidResult

        message?: string | null
    }

}

export interface InvalidResult extends Result {

    // Own properties of Vda-1.Vda.InvalidResult

    message: string

    // Owm methods of Vda-1.Vda.InvalidResult

    getMessage(): string
    setMessage(value: string): void

    // Class property signals of Vda-1.Vda.InvalidResult

    connect(sigName: "notify::message", callback: any): number
    on(sigName: "notify::message", callback: any): number
    once(sigName: "notify::message", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class InvalidResult extends GObject.Object {

    // Own properties of Vda-1.Vda.InvalidResult

    static name: string

    // Constructors of Vda-1.Vda.InvalidResult

    constructor(config?: InvalidResult.ConstructorProperties) 
    constructor(msg: string) 
    static new(msg: string): InvalidResult
    _init(config?: InvalidResult.ConstructorProperties): void
}

export module Parameters {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlParameters.ConstructorProperties, Gee.HashMap.ConstructorProperties {
    }

}

export interface Parameters extends SqlParameters {

    // Conflicting methods

    hasKey(key: object | null): boolean

    // Overloads of hasKey

    hasKey(key: object | null): boolean
    hasKey(key: object | null): boolean
    has(key: object | null, value: object | null): boolean

    // Overloads of has

    has(key: object | null, value: object | null): boolean
    has(key: object | null, value: object | null): boolean
    get(key: object | null): object | null

    // Overloads of get

    get(key: object | null): object | null
    get(key: object | null): object | null
    set(key: object | null, value: object | null): void

    // Overloads of set

    set(key: object | null, value: object | null): void
    set(key: object | null, value: object | null): void
    unset(key: object | null): [ /* returnType */ boolean, /* value */ object ]

    // Overloads of unset

    unset(key: object | null): [ /* returnType */ boolean, /* value */ object ]
    unset(key: object | null): [ /* returnType */ boolean, /* value */ object ]
    mapIterator(): Gee.MapIterator

    // Overloads of mapIterator

    mapIterator(): Gee.MapIterator
    mapIterator(): Gee.MapIterator
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator

    // Overloads of stream

    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    getKeys(): Gee.Set

    // Overloads of getKeys

    getKeys(): Gee.Set
    getKeys(): Gee.Set
    getValues(): Gee.Collection

    // Overloads of getValues

    getValues(): Gee.Collection
    getValues(): Gee.Collection
    getEntries(): Gee.Set

    // Overloads of getEntries

    getEntries(): Gee.Set
    getEntries(): Gee.Set
    getReadOnlyView(): Gee.Map

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Map
    getReadOnlyView(): Gee.Map

    // Class property signals of Vda-1.Vda.Parameters

    connect(sigName: "notify::k-type", callback: any): number
    on(sigName: "notify::k-type", callback: any): number
    once(sigName: "notify::k-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: any): number
    on(sigName: "notify::k-dup-func", callback: any): number
    once(sigName: "notify::k-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: any): number
    on(sigName: "notify::k-destroy-func", callback: any): number
    once(sigName: "notify::k-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: any): number
    on(sigName: "notify::v-type", callback: any): number
    once(sigName: "notify::v-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: any): number
    on(sigName: "notify::v-dup-func", callback: any): number
    once(sigName: "notify::v-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: any): number
    on(sigName: "notify::v-destroy-func", callback: any): number
    once(sigName: "notify::v-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: any): number
    on(sigName: "notify::keys", callback: any): number
    once(sigName: "notify::keys", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: any): number
    on(sigName: "notify::values", callback: any): number
    once(sigName: "notify::values", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: any): number
    on(sigName: "notify::entries", callback: any): number
    once(sigName: "notify::entries", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Parameters extends Gee.HashMap {

    // Own properties of Vda-1.Vda.Parameters

    static name: string

    // Constructors of Vda-1.Vda.Parameters

    constructor(config?: Parameters.ConstructorProperties) 
    constructor() 
    static new(): Parameters

    // Overloads of new

    static new(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: Gee.HashDataFunc | null, keyEqualFunc: Gee.EqualDataFunc | null, valueEqualFunc: Gee.EqualDataFunc | null): Gee.HashMap
    _init(config?: Parameters.ConstructorProperties): void
}

export module Parser {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlParser.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Parser extends SqlParser {

    // Class property signals of Vda-1.Vda.Parser

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Parser extends GObject.Object {

    // Own properties of Vda-1.Vda.Parser

    static name: string

    // Constructors of Vda-1.Vda.Parser

    constructor(config?: Parser.ConstructorProperties) 
    constructor() 
    static new(): Parser
    _init(config?: Parser.ConstructorProperties): void
}

export module TableReference {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlTableReference.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface TableReference extends SqlTableReference {

    // Class property signals of Vda-1.Vda.TableReference

    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::allias", callback: any): number
    on(sigName: "notify::allias", callback: any): number
    once(sigName: "notify::allias", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allias", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class TableReference extends GObject.Object {

    // Own properties of Vda-1.Vda.TableReference

    static name: string

    // Constructors of Vda-1.Vda.TableReference

    constructor(config?: TableReference.ConstructorProperties) 
    constructor() 
    static new(): TableReference
    _init(config?: TableReference.ConstructorProperties): void
}

export module Value {

    // Constructor properties interface

    export interface ConstructorProperties extends Stringifiable.ConstructorProperties, SqlValue.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Value extends Stringifiable, SqlValue {

    // Own fields of Vda-1.Vda.Value

    name: any
    val: any

    // Owm methods of Vda-1.Vda.Value

    // Has conflict: forceValue(val: any): boolean
    // Has conflict: fromValue(val: any): boolean
    // Has conflict: cast(type: GObject.GType): SqlValue | null
    // Has conflict: isCompatible(type: GObject.GType): boolean
    // Has conflict: parse(str: string): boolean
    // Has conflict: toGvalue(): /* result */ any
    // Has conflict: toString(): string
    // Has conflict: toStringQuoted(): string
    // Has conflict: toSqlExpression(): string

    // Own virtual methods of Vda-1.Vda.Value

    forceValue(val: any): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toString(): string

    // Overloads of toString

    toString(): string
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string

    // Class property signals of Vda-1.Vda.Value

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

export class Value extends GObject.Object {

    // Own properties of Vda-1.Vda.Value

    static name: string

    // Constructors of Vda-1.Vda.Value

    constructor(config?: Value.ConstructorProperties) 
    constructor() 
    static new(): Value
    _init(config?: Value.ConstructorProperties): void
}

export module ValueNull {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueNull.ConstructorProperties, Value.ConstructorProperties {
    }

}

export interface ValueNull extends SqlValueNull {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    parse(str: string): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toGvalue(): /* result */ any
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toStringQuoted(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string

    // Class property signals of Vda-1.Vda.ValueNull

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

export class ValueNull extends Value {

    // Own properties of Vda-1.Vda.ValueNull

    static name: string

    // Constructors of Vda-1.Vda.ValueNull

    constructor(config?: ValueNull.ConstructorProperties) 
    constructor() 
    static new(): ValueNull

    // Overloads of new

    static new(): Value
    _init(config?: ValueNull.ConstructorProperties): void
}

export module ValueString {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueString.ConstructorProperties, Value.ConstructorProperties {
    }

}

export interface ValueString extends SqlValueString {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    parse(str: string): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toGvalue(): /* result */ any
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toStringQuoted(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string

    // Class property signals of Vda-1.Vda.ValueString

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

export class ValueString extends Value {

    // Own properties of Vda-1.Vda.ValueString

    static name: string

    // Constructors of Vda-1.Vda.ValueString

    constructor(config?: ValueString.ConstructorProperties) 
    constructor() 
    static new(): ValueString

    // Overloads of new

    static new(): Value
    _init(config?: ValueString.ConstructorProperties): void
}

export module ValueXml {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueXml.ConstructorProperties, ValueString.ConstructorProperties {
    }

}

export interface ValueXml extends SqlValueXml {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean
    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    fromValue(val: any): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toStringQuoted(): string
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toSqlExpression(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string

    // Class property signals of Vda-1.Vda.ValueXml

    connect(sigName: "notify::document", callback: any): number
    on(sigName: "notify::document", callback: any): number
    once(sigName: "notify::document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document", ...args: any[]): void
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

export class ValueXml extends ValueString {

    // Own properties of Vda-1.Vda.ValueXml

    static name: string

    // Constructors of Vda-1.Vda.ValueXml

    constructor(config?: ValueXml.ConstructorProperties) 
    constructor() 
    static new(): ValueXml

    // Overloads of new

    static new(): ValueString
    static new(): Value
    _init(config?: ValueXml.ConstructorProperties): void
}

export module ValueJson {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueJson.ConstructorProperties, ValueString.ConstructorProperties {
    }

}

export interface ValueJson extends SqlValueJson {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean
    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    fromValue(val: any): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toStringQuoted(): string
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toSqlExpression(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string

    // Class property signals of Vda-1.Vda.ValueJson

    connect(sigName: "notify::document", callback: any): number
    on(sigName: "notify::document", callback: any): number
    once(sigName: "notify::document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document", ...args: any[]): void
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

export class ValueJson extends ValueString {

    // Own properties of Vda-1.Vda.ValueJson

    static name: string

    // Constructors of Vda-1.Vda.ValueJson

    constructor(config?: ValueJson.ConstructorProperties) 
    constructor() 
    static new(): ValueJson

    // Overloads of new

    static new(): ValueString
    static new(): Value
    _init(config?: ValueJson.ConstructorProperties): void
}

export module ValueText {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueText.ConstructorProperties, ValueString.ConstructorProperties {
    }

}

export interface ValueText extends SqlValueText {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean
    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    fromValue(val: any): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toStringQuoted(): string
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toSqlExpression(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string

    // Class property signals of Vda-1.Vda.ValueText

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

export class ValueText extends ValueString {

    // Own properties of Vda-1.Vda.ValueText

    static name: string

    // Constructors of Vda-1.Vda.ValueText

    constructor(config?: ValueText.ConstructorProperties) 
    constructor() 
    static new(): ValueText

    // Overloads of new

    static new(): ValueString
    static new(): Value
    _init(config?: ValueText.ConstructorProperties): void
}

export module ValueName {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueName.ConstructorProperties, ValueString.ConstructorProperties {
    }

}

export interface ValueName extends SqlValueName {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean
    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    fromValue(val: any): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toStringQuoted(): string
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toSqlExpression(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string

    // Class property signals of Vda-1.Vda.ValueName

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

export class ValueName extends ValueString {

    // Own properties of Vda-1.Vda.ValueName

    static name: string

    // Constructors of Vda-1.Vda.ValueName

    constructor(config?: ValueName.ConstructorProperties) 
    constructor() 
    static new(): ValueName

    // Overloads of new

    static new(): ValueString
    static new(): Value
    _init(config?: ValueName.ConstructorProperties): void
}

export module ValueBool {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueBool.ConstructorProperties, Value.ConstructorProperties {
    }

}

export interface ValueBool extends SqlValueBool {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    parse(str: string): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toGvalue(): /* result */ any
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toStringQuoted(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string

    // Class property signals of Vda-1.Vda.ValueBool

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

export class ValueBool extends Value {

    // Own properties of Vda-1.Vda.ValueBool

    static name: string

    // Constructors of Vda-1.Vda.ValueBool

    constructor(config?: ValueBool.ConstructorProperties) 
    constructor() 
    static new(): ValueBool

    // Overloads of new

    static new(): Value
    _init(config?: ValueBool.ConstructorProperties): void
}

export module ValueBit {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueBit.ConstructorProperties, ValueBool.ConstructorProperties {
    }

}

export interface ValueBit extends SqlValueBit {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean
    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    fromValue(val: any): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toStringQuoted(): string
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toSqlExpression(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string

    // Class property signals of Vda-1.Vda.ValueBit

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

export class ValueBit extends ValueBool {

    // Own properties of Vda-1.Vda.ValueBit

    static name: string

    // Constructors of Vda-1.Vda.ValueBit

    constructor(config?: ValueBit.ConstructorProperties) 
    constructor() 
    static new(): ValueBit

    // Overloads of new

    static new(): ValueBool
    static new(): Value
    _init(config?: ValueBit.ConstructorProperties): void
}

export module ValueInteger {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValue.ConstructorProperties, SqlValueInteger.ConstructorProperties, Value.ConstructorProperties {
    }

}

export interface ValueInteger extends SqlValue, SqlValueInteger {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean
    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    fromValue(val: any): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toStringQuoted(): string
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toSqlExpression(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string

    // Class property signals of Vda-1.Vda.ValueInteger

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

export class ValueInteger extends Value {

    // Own properties of Vda-1.Vda.ValueInteger

    static name: string

    // Constructors of Vda-1.Vda.ValueInteger

    constructor(config?: ValueInteger.ConstructorProperties) 
    constructor() 
    static new(): ValueInteger

    // Overloads of new

    static new(): Value
    _init(config?: ValueInteger.ConstructorProperties): void
}

export module ValueByte {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueByte.ConstructorProperties, ValueInteger.ConstructorProperties {
    }

}

export interface ValueByte extends SqlValueByte {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean
    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    fromValue(val: any): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toStringQuoted(): string
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toSqlExpression(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string

    // Class property signals of Vda-1.Vda.ValueByte

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

export class ValueByte extends ValueInteger {

    // Own properties of Vda-1.Vda.ValueByte

    static name: string

    // Constructors of Vda-1.Vda.ValueByte

    constructor(config?: ValueByte.ConstructorProperties) 
    constructor() 
    static new(): ValueByte

    // Overloads of new

    static new(): ValueInteger
    static new(): Value
    _init(config?: ValueByte.ConstructorProperties): void
}

export module ValueInt2 {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueInt2.ConstructorProperties, ValueInteger.ConstructorProperties {
    }

}

export interface ValueInt2 extends SqlValueInt2 {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean
    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    fromValue(val: any): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toStringQuoted(): string
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toSqlExpression(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string

    // Class property signals of Vda-1.Vda.ValueInt2

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

export class ValueInt2 extends ValueInteger {

    // Own properties of Vda-1.Vda.ValueInt2

    static name: string

    // Constructors of Vda-1.Vda.ValueInt2

    constructor(config?: ValueInt2.ConstructorProperties) 
    constructor() 
    static new(): ValueInt2

    // Overloads of new

    static new(): ValueInteger
    static new(): Value
    _init(config?: ValueInt2.ConstructorProperties): void
}

export module ValueInt4 {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueInt4.ConstructorProperties, ValueInteger.ConstructorProperties {
    }

}

export interface ValueInt4 extends SqlValueInt4 {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean
    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    fromValue(val: any): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toStringQuoted(): string
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toSqlExpression(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string

    // Class property signals of Vda-1.Vda.ValueInt4

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

export class ValueInt4 extends ValueInteger {

    // Own properties of Vda-1.Vda.ValueInt4

    static name: string

    // Constructors of Vda-1.Vda.ValueInt4

    constructor(config?: ValueInt4.ConstructorProperties) 
    constructor() 
    static new(): ValueInt4

    // Overloads of new

    static new(): ValueInteger
    static new(): Value
    _init(config?: ValueInt4.ConstructorProperties): void
}

export module ValueInt8 {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueInt8.ConstructorProperties, ValueInteger.ConstructorProperties {
    }

}

export interface ValueInt8 extends SqlValueInt8 {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean
    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    fromValue(val: any): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toStringQuoted(): string
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toSqlExpression(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string

    // Class property signals of Vda-1.Vda.ValueInt8

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

export class ValueInt8 extends ValueInteger {

    // Own properties of Vda-1.Vda.ValueInt8

    static name: string

    // Constructors of Vda-1.Vda.ValueInt8

    constructor(config?: ValueInt8.ConstructorProperties) 
    constructor() 
    static new(): ValueInt8

    // Overloads of new

    static new(): ValueInteger
    static new(): Value
    _init(config?: ValueInt8.ConstructorProperties): void
}

export module ValueUnsignedInteger {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValue.ConstructorProperties, SqlValueUnsignedInteger.ConstructorProperties, Value.ConstructorProperties {
    }

}

export interface ValueUnsignedInteger extends SqlValue, SqlValueUnsignedInteger {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean
    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    fromValue(val: any): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toStringQuoted(): string
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toSqlExpression(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string

    // Class property signals of Vda-1.Vda.ValueUnsignedInteger

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

export class ValueUnsignedInteger extends Value {

    // Own properties of Vda-1.Vda.ValueUnsignedInteger

    static name: string

    // Constructors of Vda-1.Vda.ValueUnsignedInteger

    constructor(config?: ValueUnsignedInteger.ConstructorProperties) 
    constructor() 
    static new(): ValueUnsignedInteger

    // Overloads of new

    static new(): Value
    _init(config?: ValueUnsignedInteger.ConstructorProperties): void
}

export module ValueUnsignedByte {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueUnsignedByte.ConstructorProperties, ValueUnsignedInteger.ConstructorProperties {
    }

}

export interface ValueUnsignedByte extends SqlValueUnsignedByte {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean
    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    fromValue(val: any): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toStringQuoted(): string
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toSqlExpression(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string

    // Class property signals of Vda-1.Vda.ValueUnsignedByte

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

export class ValueUnsignedByte extends ValueUnsignedInteger {

    // Own properties of Vda-1.Vda.ValueUnsignedByte

    static name: string

    // Constructors of Vda-1.Vda.ValueUnsignedByte

    constructor(config?: ValueUnsignedByte.ConstructorProperties) 
    constructor() 
    static new(): ValueUnsignedByte

    // Overloads of new

    static new(): ValueUnsignedInteger
    static new(): Value
    _init(config?: ValueUnsignedByte.ConstructorProperties): void
}

export module ValueUnsignedInt2 {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueUnsignedInt2.ConstructorProperties, ValueUnsignedInteger.ConstructorProperties {
    }

}

export interface ValueUnsignedInt2 extends SqlValueUnsignedInt2 {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean
    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    fromValue(val: any): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toStringQuoted(): string
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toSqlExpression(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string

    // Class property signals of Vda-1.Vda.ValueUnsignedInt2

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

export class ValueUnsignedInt2 extends ValueUnsignedInteger {

    // Own properties of Vda-1.Vda.ValueUnsignedInt2

    static name: string

    // Constructors of Vda-1.Vda.ValueUnsignedInt2

    constructor(config?: ValueUnsignedInt2.ConstructorProperties) 
    constructor() 
    static new(): ValueUnsignedInt2

    // Overloads of new

    static new(): ValueUnsignedInteger
    static new(): Value
    _init(config?: ValueUnsignedInt2.ConstructorProperties): void
}

export module ValueUnsignedInt4 {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueUnsignedInt4.ConstructorProperties, ValueUnsignedInteger.ConstructorProperties {
    }

}

export interface ValueUnsignedInt4 extends SqlValueUnsignedInt4 {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean
    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    fromValue(val: any): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toStringQuoted(): string
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toSqlExpression(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string

    // Class property signals of Vda-1.Vda.ValueUnsignedInt4

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

export class ValueUnsignedInt4 extends ValueUnsignedInteger {

    // Own properties of Vda-1.Vda.ValueUnsignedInt4

    static name: string

    // Constructors of Vda-1.Vda.ValueUnsignedInt4

    constructor(config?: ValueUnsignedInt4.ConstructorProperties) 
    constructor() 
    static new(): ValueUnsignedInt4

    // Overloads of new

    static new(): ValueUnsignedInteger
    static new(): Value
    _init(config?: ValueUnsignedInt4.ConstructorProperties): void
}

export module ValueUnsignedInt8 {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueUnsignedInt8.ConstructorProperties, ValueUnsignedInteger.ConstructorProperties {
    }

}

export interface ValueUnsignedInt8 extends SqlValueUnsignedInt8 {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean
    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    fromValue(val: any): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toStringQuoted(): string
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toSqlExpression(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string

    // Class property signals of Vda-1.Vda.ValueUnsignedInt8

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

export class ValueUnsignedInt8 extends ValueUnsignedInteger {

    // Own properties of Vda-1.Vda.ValueUnsignedInt8

    static name: string

    // Constructors of Vda-1.Vda.ValueUnsignedInt8

    constructor(config?: ValueUnsignedInt8.ConstructorProperties) 
    constructor() 
    static new(): ValueUnsignedInt8

    // Overloads of new

    static new(): ValueUnsignedInteger
    static new(): Value
    _init(config?: ValueUnsignedInt8.ConstructorProperties): void
}

export module ValueOid {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueOid.ConstructorProperties, ValueInteger.ConstructorProperties {
    }

}

export interface ValueOid extends SqlValueOid {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean
    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    fromValue(val: any): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toStringQuoted(): string
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toSqlExpression(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string

    // Class property signals of Vda-1.Vda.ValueOid

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

export class ValueOid extends ValueInteger {

    // Own properties of Vda-1.Vda.ValueOid

    static name: string

    // Constructors of Vda-1.Vda.ValueOid

    constructor(config?: ValueOid.ConstructorProperties) 
    constructor() 
    static new(): ValueOid

    // Overloads of new

    static new(): ValueInteger
    static new(): Value
    _init(config?: ValueOid.ConstructorProperties): void
}

export module ValueNumeric {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueNumeric.ConstructorProperties, Value.ConstructorProperties {
    }

}

export interface ValueNumeric extends SqlValueNumeric {

    // Conflicting properties

    name: any

    // Owm methods of Vda-1.Vda.ValueNumeric

    // Has conflict: format(str: string): string

    // Conflicting methods

    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    parse(str: string): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toGvalue(): /* result */ any
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toStringQuoted(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string

    // Own virtual methods of Vda-1.Vda.ValueNumeric

    format(str: string): string

    // Overloads of format

    format(str: string): string

    // Class property signals of Vda-1.Vda.ValueNumeric

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

export class ValueNumeric extends Value {

    // Own properties of Vda-1.Vda.ValueNumeric

    static name: string

    // Constructors of Vda-1.Vda.ValueNumeric

    constructor(config?: ValueNumeric.ConstructorProperties) 
    constructor() 
    static new(): ValueNumeric

    // Overloads of new

    static new(): Value
    _init(config?: ValueNumeric.ConstructorProperties): void
}

export module ValueFloat {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueFloat.ConstructorProperties, ValueNumeric.ConstructorProperties {
    }

}

export interface ValueFloat extends SqlValueFloat {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean
    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    fromValue(val: any): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toStringQuoted(): string
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toSqlExpression(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    format(str: string): string

    // Overloads of format

    format(str: string): string
    format(str: string): string

    // Class property signals of Vda-1.Vda.ValueFloat

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

export class ValueFloat extends ValueNumeric {

    // Own properties of Vda-1.Vda.ValueFloat

    static name: string

    // Constructors of Vda-1.Vda.ValueFloat

    constructor(config?: ValueFloat.ConstructorProperties) 
    constructor() 
    static new(): ValueFloat

    // Overloads of new

    static new(): ValueNumeric
    static new(): Value
    _init(config?: ValueFloat.ConstructorProperties): void
}

export module ValueDouble {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueDouble.ConstructorProperties, ValueNumeric.ConstructorProperties {
    }

}

export interface ValueDouble extends SqlValueDouble {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean
    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    fromValue(val: any): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toStringQuoted(): string
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toSqlExpression(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    format(str: string): string

    // Overloads of format

    format(str: string): string
    format(str: string): string

    // Class property signals of Vda-1.Vda.ValueDouble

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

export class ValueDouble extends ValueNumeric {

    // Own properties of Vda-1.Vda.ValueDouble

    static name: string

    // Constructors of Vda-1.Vda.ValueDouble

    constructor(config?: ValueDouble.ConstructorProperties) 
    constructor() 
    static new(): ValueDouble

    // Overloads of new

    static new(): ValueNumeric
    static new(): Value
    _init(config?: ValueDouble.ConstructorProperties): void
}

export module ValueMoney {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueMoney.ConstructorProperties, ValueNumeric.ConstructorProperties {
    }

}

export interface ValueMoney extends SqlValueMoney {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean
    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    fromValue(val: any): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toStringQuoted(): string
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toSqlExpression(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    format(str: string): string

    // Overloads of format

    format(str: string): string
    format(str: string): string

    // Class property signals of Vda-1.Vda.ValueMoney

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

export class ValueMoney extends ValueNumeric {

    // Own properties of Vda-1.Vda.ValueMoney

    static name: string

    // Constructors of Vda-1.Vda.ValueMoney

    constructor(config?: ValueMoney.ConstructorProperties) 
    constructor() 
    static new(): ValueMoney

    // Overloads of new

    static new(): ValueNumeric
    static new(): Value
    _init(config?: ValueMoney.ConstructorProperties): void
}

export module ValueTimestamp {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueTimestamp.ConstructorProperties, Value.ConstructorProperties {
    }

}

export interface ValueTimestamp extends SqlValueTimestamp {

    // Conflicting properties

    name: any

    // Own fields of Vda-1.Vda.ValueTimestamp

    dt: GLib.DateTime

    // Owm methods of Vda-1.Vda.ValueTimestamp

    // Has conflict: formatLocal(): string
    // Has conflict: formatUtc(): string
    // Has conflict: formatLocale(): string

    // Conflicting methods

    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    parse(str: string): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toGvalue(): /* result */ any
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toStringQuoted(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string

    // Own virtual methods of Vda-1.Vda.ValueTimestamp

    formatLocal(): string

    // Overloads of formatLocal

    formatLocal(): string
    formatUtc(): string

    // Overloads of formatUtc

    formatUtc(): string
    formatLocale(): string

    // Overloads of formatLocale

    formatLocale(): string

    // Class property signals of Vda-1.Vda.ValueTimestamp

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

export class ValueTimestamp extends Value {

    // Own properties of Vda-1.Vda.ValueTimestamp

    static name: string

    // Constructors of Vda-1.Vda.ValueTimestamp

    constructor(config?: ValueTimestamp.ConstructorProperties) 
    constructor() 
    static new(): ValueTimestamp

    // Overloads of new

    static new(): Value
    _init(config?: ValueTimestamp.ConstructorProperties): void
}

export module ValueTimestampNtz {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueTimestampNtz.ConstructorProperties, ValueTimestamp.ConstructorProperties {
    }

}

export interface ValueTimestampNtz extends SqlValueTimestampNtz {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean
    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    fromValue(val: any): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toStringQuoted(): string
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toSqlExpression(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    formatLocal(): string

    // Overloads of formatLocal

    formatLocal(): string
    formatLocal(): string
    formatUtc(): string

    // Overloads of formatUtc

    formatUtc(): string
    formatUtc(): string
    formatLocale(): string

    // Overloads of formatLocale

    formatLocale(): string
    formatLocale(): string

    // Class property signals of Vda-1.Vda.ValueTimestampNtz

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

export class ValueTimestampNtz extends ValueTimestamp {

    // Own properties of Vda-1.Vda.ValueTimestampNtz

    static name: string

    // Constructors of Vda-1.Vda.ValueTimestampNtz

    constructor(config?: ValueTimestampNtz.ConstructorProperties) 
    constructor() 
    static new(): ValueTimestampNtz

    // Overloads of new

    static new(): ValueTimestamp
    static new(): Value
    _init(config?: ValueTimestampNtz.ConstructorProperties): void
}

export module ValueTime {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueTime.ConstructorProperties, ValueTimestamp.ConstructorProperties {
    }

}

export interface ValueTime extends SqlValueTime {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean
    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    fromValue(val: any): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toStringQuoted(): string
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toSqlExpression(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    formatLocal(): string

    // Overloads of formatLocal

    formatLocal(): string
    formatLocal(): string
    formatUtc(): string

    // Overloads of formatUtc

    formatUtc(): string
    formatUtc(): string
    formatLocale(): string

    // Overloads of formatLocale

    formatLocale(): string
    formatLocale(): string

    // Class property signals of Vda-1.Vda.ValueTime

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

export class ValueTime extends ValueTimestamp {

    // Own properties of Vda-1.Vda.ValueTime

    static name: string

    // Constructors of Vda-1.Vda.ValueTime

    constructor(config?: ValueTime.ConstructorProperties) 
    constructor() 
    static new(): ValueTime

    // Overloads of new

    static new(): ValueTimestamp
    static new(): Value
    _init(config?: ValueTime.ConstructorProperties): void
}

export module ValueTimeNtz {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueTimeNtz.ConstructorProperties, ValueTimestampNtz.ConstructorProperties {
    }

}

export interface ValueTimeNtz extends SqlValueTimeNtz {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean
    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    fromValue(val: any): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toStringQuoted(): string
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toSqlExpression(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toString(): string
    toString(): string

    // Overloads of toString

    toString(): string
    formatLocal(): string

    // Overloads of formatLocal

    formatLocal(): string
    formatLocal(): string
    formatUtc(): string

    // Overloads of formatUtc

    formatUtc(): string
    formatUtc(): string
    formatLocale(): string

    // Overloads of formatLocale

    formatLocale(): string
    formatLocale(): string

    // Class property signals of Vda-1.Vda.ValueTimeNtz

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

export class ValueTimeNtz extends ValueTimestampNtz {

    // Own properties of Vda-1.Vda.ValueTimeNtz

    static name: string

    // Constructors of Vda-1.Vda.ValueTimeNtz

    constructor(config?: ValueTimeNtz.ConstructorProperties) 
    constructor() 
    static new(): ValueTimeNtz

    // Overloads of new

    static new(): ValueTimestampNtz
    static new(): ValueTimestamp
    static new(): Value
    _init(config?: ValueTimeNtz.ConstructorProperties): void
}

export module ValueDate {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueDate.ConstructorProperties, Value.ConstructorProperties {
    }

}

export interface ValueDate extends SqlValueDate {

    // Conflicting properties

    name: any

    // Own fields of Vda-1.Vda.ValueDate

    d: GLib.Date

    // Conflicting methods

    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    parse(str: string): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toGvalue(): /* result */ any
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toStringQuoted(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string

    // Class property signals of Vda-1.Vda.ValueDate

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

export class ValueDate extends Value {

    // Own properties of Vda-1.Vda.ValueDate

    static name: string

    // Constructors of Vda-1.Vda.ValueDate

    constructor(config?: ValueDate.ConstructorProperties) 
    constructor() 
    static new(): ValueDate

    // Overloads of new

    static new(): Value
    _init(config?: ValueDate.ConstructorProperties): void
}

export module ValueBinary {

    // Constructor properties interface

    export interface ConstructorProperties extends SqlValueBinary.ConstructorProperties, Value.ConstructorProperties {
    }

}

export interface ValueBinary extends SqlValueBinary {

    // Conflicting properties

    name: any

    // Conflicting methods

    parse(str: string): boolean

    // Overloads of parse

    parse(str: string): boolean
    parse(str: string): boolean
    fromValue(val: any): boolean

    // Overloads of fromValue

    fromValue(val: any): boolean
    fromValue(val: any): boolean
    cast(type: GObject.GType): SqlValue | null

    // Overloads of cast

    cast(type: GObject.GType): SqlValue | null
    cast(type: GObject.GType): SqlValue | null
    isCompatible(type: GObject.GType): boolean

    // Overloads of isCompatible

    isCompatible(type: GObject.GType): boolean
    isCompatible(type: GObject.GType): boolean
    toGvalue(): /* result */ any

    // Overloads of toGvalue

    toGvalue(): /* result */ any
    toGvalue(): /* result */ any
    toStringQuoted(): string

    // Overloads of toStringQuoted

    toStringQuoted(): string
    toStringQuoted(): string
    toSqlExpression(): string

    // Overloads of toSqlExpression

    toSqlExpression(): string
    toSqlExpression(): string
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string

    // Class property signals of Vda-1.Vda.ValueBinary

    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
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

export class ValueBinary extends Value {

    // Own properties of Vda-1.Vda.ValueBinary

    static name: string

    // Constructors of Vda-1.Vda.ValueBinary

    constructor(config?: ValueBinary.ConstructorProperties) 
    static withData(d: Uint8Array): ValueBinary
    static take(d: Uint8Array): ValueBinary
    constructor() 
    static new(): ValueBinary

    // Overloads of new

    static new(): Value
    _init(config?: ValueBinary.ConstructorProperties): void
}

export module ValueMathExp {

    // Constructor properties interface

    export interface ConstructorProperties extends Stringifiable.ConstructorProperties, SqlValue.ConstructorProperties, SqlValueMathExp.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Vda-1.Vda.ValueMathExp

        parameters?: SqlParameters | null
    }

}

export interface ValueMathExp extends Stringifiable, SqlValue, SqlValueMathExp {

    // Own properties of Vda-1.Vda.ValueMathExp

    parameters: SqlParameters

    // Owm methods of Vda-1.Vda.ValueMathExp

    getParameters(): SqlParameters
    setParameters(value: SqlParameters): void

    // Class property signals of Vda-1.Vda.ValueMathExp

    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::math", callback: any): number
    on(sigName: "notify::math", callback: any): number
    once(sigName: "notify::math", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::math", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ValueMathExp extends GObject.Object {

    // Own properties of Vda-1.Vda.ValueMathExp

    static name: string

    // Constructors of Vda-1.Vda.ValueMathExp

    constructor(config?: ValueMathExp.ConstructorProperties) 
    constructor() 
    static new(): ValueMathExp
    _init(config?: ValueMathExp.ConstructorProperties): void
}

export interface AffectedRowsClass {
}

export abstract class AffectedRowsClass {

    // Own properties of Vda-1.Vda.AffectedRowsClass

    static name: string
}

export interface AffectedRowsPrivate {
}

export class AffectedRowsPrivate {

    // Own properties of Vda-1.Vda.AffectedRowsPrivate

    static name: string
}

export interface CommandDeleteClass {
}

export abstract class CommandDeleteClass {

    // Own properties of Vda-1.Vda.CommandDeleteClass

    static name: string
}

export interface CommandDeletePrivate {
}

export class CommandDeletePrivate {

    // Own properties of Vda-1.Vda.CommandDeletePrivate

    static name: string
}

export interface CommandInsertClass {
}

export abstract class CommandInsertClass {

    // Own properties of Vda-1.Vda.CommandInsertClass

    static name: string
}

export interface CommandInsertPrivate {
}

export class CommandInsertPrivate {

    // Own properties of Vda-1.Vda.CommandInsertPrivate

    static name: string
}

export interface CommandModificationClass {
}

export abstract class CommandModificationClass {

    // Own properties of Vda-1.Vda.CommandModificationClass

    static name: string
}

export interface CommandModificationPrivate {
}

export class CommandModificationPrivate {

    // Own properties of Vda-1.Vda.CommandModificationPrivate

    static name: string
}

export interface CommandSelectClass {
}

export abstract class CommandSelectClass {

    // Own properties of Vda-1.Vda.CommandSelectClass

    static name: string
}

export interface CommandSelectPrivate {
}

export class CommandSelectPrivate {

    // Own properties of Vda-1.Vda.CommandSelectPrivate

    static name: string
}

export interface CommandUpdateClass {
}

export abstract class CommandUpdateClass {

    // Own properties of Vda-1.Vda.CommandUpdateClass

    static name: string
}

export interface CommandUpdatePrivate {
}

export class CommandUpdatePrivate {

    // Own properties of Vda-1.Vda.CommandUpdatePrivate

    static name: string
}

export interface ConnectionParameterClass {
}

export abstract class ConnectionParameterClass {

    // Own properties of Vda-1.Vda.ConnectionParameterClass

    static name: string
}

export interface ConnectionParameterPrivate {
}

export class ConnectionParameterPrivate {

    // Own properties of Vda-1.Vda.ConnectionParameterPrivate

    static name: string
}

export interface ConnectionParameterDbNameClass {
}

export abstract class ConnectionParameterDbNameClass {

    // Own properties of Vda-1.Vda.ConnectionParameterDbNameClass

    static name: string
}

export interface ConnectionParameterDbNamePrivate {
}

export class ConnectionParameterDbNamePrivate {

    // Own properties of Vda-1.Vda.ConnectionParameterDbNamePrivate

    static name: string
}

export interface ConnectionParameterHostClass {
}

export abstract class ConnectionParameterHostClass {

    // Own properties of Vda-1.Vda.ConnectionParameterHostClass

    static name: string
}

export interface ConnectionParameterHostPrivate {
}

export class ConnectionParameterHostPrivate {

    // Own properties of Vda-1.Vda.ConnectionParameterHostPrivate

    static name: string
}

export interface ConnectionParameterPortClass {
}

export abstract class ConnectionParameterPortClass {

    // Own properties of Vda-1.Vda.ConnectionParameterPortClass

    static name: string
}

export interface ConnectionParameterPortPrivate {
}

export class ConnectionParameterPortPrivate {

    // Own properties of Vda-1.Vda.ConnectionParameterPortPrivate

    static name: string
}

export interface ConnectionParameterUserNameClass {
}

export abstract class ConnectionParameterUserNameClass {

    // Own properties of Vda-1.Vda.ConnectionParameterUserNameClass

    static name: string
}

export interface ConnectionParameterUserNamePrivate {
}

export class ConnectionParameterUserNamePrivate {

    // Own properties of Vda-1.Vda.ConnectionParameterUserNamePrivate

    static name: string
}

export interface ConnectionParameterPasswordClass {
}

export abstract class ConnectionParameterPasswordClass {

    // Own properties of Vda-1.Vda.ConnectionParameterPasswordClass

    static name: string
}

export interface ConnectionParameterPasswordPrivate {
}

export class ConnectionParameterPasswordPrivate {

    // Own properties of Vda-1.Vda.ConnectionParameterPasswordPrivate

    static name: string
}

export interface ConnectionParametersClass {

    // Own fields of Vda-1.Vda.ConnectionParametersClass

    parse: (cnstring: string) => void
}

export abstract class ConnectionParametersClass {

    // Own properties of Vda-1.Vda.ConnectionParametersClass

    static name: string
}

export interface ConnectionParametersPrivate {
}

export class ConnectionParametersPrivate {

    // Own properties of Vda-1.Vda.ConnectionParametersPrivate

    static name: string
}

export interface ExpressionClass {

    // Own fields of Vda-1.Vda.ExpressionClass

    toString: () => string
}

export abstract class ExpressionClass {

    // Own properties of Vda-1.Vda.ExpressionClass

    static name: string
}

export interface ExpressionPrivate {
}

export class ExpressionPrivate {

    // Own properties of Vda-1.Vda.ExpressionPrivate

    static name: string
}

export interface ExpressionFieldClass {
}

export abstract class ExpressionFieldClass {

    // Own properties of Vda-1.Vda.ExpressionFieldClass

    static name: string
}

export interface ExpressionFieldPrivate {
}

export class ExpressionFieldPrivate {

    // Own properties of Vda-1.Vda.ExpressionFieldPrivate

    static name: string
}

export interface ExpressionOperatorClass {
}

export abstract class ExpressionOperatorClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorClass

    static name: string
}

export interface ExpressionOperatorPrivate {
}

export class ExpressionOperatorPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorPrivate

    static name: string
}

export interface ExpressionOperatorGroupClass {
}

export abstract class ExpressionOperatorGroupClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorGroupClass

    static name: string
}

export interface ExpressionOperatorGroupPrivate {
}

export class ExpressionOperatorGroupPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorGroupPrivate

    static name: string
}

export interface ExpressionOperatorMultitermClass {
}

export abstract class ExpressionOperatorMultitermClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorMultitermClass

    static name: string
}

export interface ExpressionOperatorMultitermPrivate {
}

export class ExpressionOperatorMultitermPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorMultitermPrivate

    static name: string
}

export interface ExpressionOperatorAndClass {
}

export abstract class ExpressionOperatorAndClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorAndClass

    static name: string
}

export interface ExpressionOperatorAndPrivate {
}

export class ExpressionOperatorAndPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorAndPrivate

    static name: string
}

export interface ExpressionOperatorOrClass {
}

export abstract class ExpressionOperatorOrClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorOrClass

    static name: string
}

export interface ExpressionOperatorOrPrivate {
}

export class ExpressionOperatorOrPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorOrPrivate

    static name: string
}

export interface ExpressionOperatorBinarytermClass {
}

export abstract class ExpressionOperatorBinarytermClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorBinarytermClass

    static name: string
}

export interface ExpressionOperatorBinarytermPrivate {
}

export class ExpressionOperatorBinarytermPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorBinarytermPrivate

    static name: string
}

export interface ExpressionOperatorEqClass {
}

export abstract class ExpressionOperatorEqClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorEqClass

    static name: string
}

export interface ExpressionOperatorEqPrivate {
}

export class ExpressionOperatorEqPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorEqPrivate

    static name: string
}

export interface ExpressionOperatorNotEqClass {
}

export abstract class ExpressionOperatorNotEqClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotEqClass

    static name: string
}

export interface ExpressionOperatorNotEqPrivate {
}

export class ExpressionOperatorNotEqPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotEqPrivate

    static name: string
}

export interface ExpressionOperatorDiffClass {
}

export abstract class ExpressionOperatorDiffClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorDiffClass

    static name: string
}

export interface ExpressionOperatorDiffPrivate {
}

export class ExpressionOperatorDiffPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorDiffPrivate

    static name: string
}

export interface ExpressionOperatorGtClass {
}

export abstract class ExpressionOperatorGtClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorGtClass

    static name: string
}

export interface ExpressionOperatorGtPrivate {
}

export class ExpressionOperatorGtPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorGtPrivate

    static name: string
}

export interface ExpressionOperatorLtClass {
}

export abstract class ExpressionOperatorLtClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorLtClass

    static name: string
}

export interface ExpressionOperatorLtPrivate {
}

export class ExpressionOperatorLtPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorLtPrivate

    static name: string
}

export interface ExpressionOperatorGeqClass {
}

export abstract class ExpressionOperatorGeqClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorGeqClass

    static name: string
}

export interface ExpressionOperatorGeqPrivate {
}

export class ExpressionOperatorGeqPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorGeqPrivate

    static name: string
}

export interface ExpressionOperatorLeqClass {
}

export abstract class ExpressionOperatorLeqClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorLeqClass

    static name: string
}

export interface ExpressionOperatorLeqPrivate {
}

export class ExpressionOperatorLeqPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorLeqPrivate

    static name: string
}

export interface ExpressionOperatorRegexpClass {
}

export abstract class ExpressionOperatorRegexpClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorRegexpClass

    static name: string
}

export interface ExpressionOperatorRegexpPrivate {
}

export class ExpressionOperatorRegexpPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorRegexpPrivate

    static name: string
}

export interface ExpressionOperatorStarClass {
}

export abstract class ExpressionOperatorStarClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorStarClass

    static name: string
}

export interface ExpressionOperatorStarPrivate {
}

export class ExpressionOperatorStarPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorStarPrivate

    static name: string
}

export interface ExpressionOperatorDivClass {
}

export abstract class ExpressionOperatorDivClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorDivClass

    static name: string
}

export interface ExpressionOperatorDivPrivate {
}

export class ExpressionOperatorDivPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorDivPrivate

    static name: string
}

export interface ExpressionOperatorInClass {
}

export abstract class ExpressionOperatorInClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorInClass

    static name: string
}

export interface ExpressionOperatorInPrivate {
}

export class ExpressionOperatorInPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorInPrivate

    static name: string
}

export interface ExpressionOperatorNotInClass {
}

export abstract class ExpressionOperatorNotInClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotInClass

    static name: string
}

export interface ExpressionOperatorNotInPrivate {
}

export class ExpressionOperatorNotInPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotInPrivate

    static name: string
}

export interface ExpressionOperatorConcatenateClass {
}

export abstract class ExpressionOperatorConcatenateClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorConcatenateClass

    static name: string
}

export interface ExpressionOperatorConcatenatePrivate {
}

export class ExpressionOperatorConcatenatePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorConcatenatePrivate

    static name: string
}

export interface ExpressionOperatorSimilarToClass {
}

export abstract class ExpressionOperatorSimilarToClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorSimilarToClass

    static name: string
}

export interface ExpressionOperatorSimilarToPrivate {
}

export class ExpressionOperatorSimilarToPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorSimilarToPrivate

    static name: string
}

export interface ExpressionOperatorLikeClass {
}

export abstract class ExpressionOperatorLikeClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorLikeClass

    static name: string
}

export interface ExpressionOperatorLikePrivate {
}

export class ExpressionOperatorLikePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorLikePrivate

    static name: string
}

export interface ExpressionOperatorNotLikeClass {
}

export abstract class ExpressionOperatorNotLikeClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotLikeClass

    static name: string
}

export interface ExpressionOperatorNotLikePrivate {
}

export class ExpressionOperatorNotLikePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotLikePrivate

    static name: string
}

export interface ExpressionOperatorIlikeClass {
}

export abstract class ExpressionOperatorIlikeClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIlikeClass

    static name: string
}

export interface ExpressionOperatorIlikePrivate {
}

export class ExpressionOperatorIlikePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIlikePrivate

    static name: string
}

export interface ExpressionOperatorNotIlikeClass {
}

export abstract class ExpressionOperatorNotIlikeClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotIlikeClass

    static name: string
}

export interface ExpressionOperatorNotIlikePrivate {
}

export class ExpressionOperatorNotIlikePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotIlikePrivate

    static name: string
}

export interface ExpressionOperatorBinaryUnarytermClass {
}

export abstract class ExpressionOperatorBinaryUnarytermClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorBinaryUnarytermClass

    static name: string
}

export interface ExpressionOperatorBinaryUnarytermPrivate {
}

export class ExpressionOperatorBinaryUnarytermPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorBinaryUnarytermPrivate

    static name: string
}

export interface ExpressionOperatorMinusClass {
}

export abstract class ExpressionOperatorMinusClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorMinusClass

    static name: string
}

export interface ExpressionOperatorMinusPrivate {
}

export class ExpressionOperatorMinusPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorMinusPrivate

    static name: string
}

export interface ExpressionOperatorPlusClass {
}

export abstract class ExpressionOperatorPlusClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorPlusClass

    static name: string
}

export interface ExpressionOperatorPlusPrivate {
}

export class ExpressionOperatorPlusPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorPlusPrivate

    static name: string
}

export interface ExpressionOperatorInitialUnarytermClass {
}

export abstract class ExpressionOperatorInitialUnarytermClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorInitialUnarytermClass

    static name: string
}

export interface ExpressionOperatorInitialUnarytermPrivate {
}

export class ExpressionOperatorInitialUnarytermPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorInitialUnarytermPrivate

    static name: string
}

export interface ExpressionOperatorNotClass {
}

export abstract class ExpressionOperatorNotClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotClass

    static name: string
}

export interface ExpressionOperatorNotPrivate {
}

export class ExpressionOperatorNotPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotPrivate

    static name: string
}

export interface ExpressionOperatorFinalUnarytermClass {
}

export abstract class ExpressionOperatorFinalUnarytermClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorFinalUnarytermClass

    static name: string
}

export interface ExpressionOperatorFinalUnarytermPrivate {
}

export class ExpressionOperatorFinalUnarytermPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorFinalUnarytermPrivate

    static name: string
}

export interface ExpressionOperatorIsClass {
}

export abstract class ExpressionOperatorIsClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsClass

    static name: string
}

export interface ExpressionOperatorIsPrivate {
}

export class ExpressionOperatorIsPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsPrivate

    static name: string
}

export interface ExpressionOperatorIsNotClass {
}

export abstract class ExpressionOperatorIsNotClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotClass

    static name: string
}

export interface ExpressionOperatorIsNotPrivate {
}

export class ExpressionOperatorIsNotPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotPrivate

    static name: string
}

export interface ExpressionOperatorIsNullClass {
}

export abstract class ExpressionOperatorIsNullClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNullClass

    static name: string
}

export interface ExpressionOperatorIsNullPrivate {
}

export class ExpressionOperatorIsNullPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNullPrivate

    static name: string
}

export interface ExpressionOperatorIsNotNullClass {
}

export abstract class ExpressionOperatorIsNotNullClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotNullClass

    static name: string
}

export interface ExpressionOperatorIsNotNullPrivate {
}

export class ExpressionOperatorIsNotNullPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotNullPrivate

    static name: string
}

export interface ExpressionOperatorIsTrueClass {
}

export abstract class ExpressionOperatorIsTrueClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsTrueClass

    static name: string
}

export interface ExpressionOperatorIsTruePrivate {
}

export class ExpressionOperatorIsTruePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsTruePrivate

    static name: string
}

export interface ExpressionOperatorIsNotTrueClass {
}

export abstract class ExpressionOperatorIsNotTrueClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotTrueClass

    static name: string
}

export interface ExpressionOperatorIsNotTruePrivate {
}

export class ExpressionOperatorIsNotTruePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotTruePrivate

    static name: string
}

export interface ExpressionOperatorIsFalseClass {
}

export abstract class ExpressionOperatorIsFalseClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsFalseClass

    static name: string
}

export interface ExpressionOperatorIsFalsePrivate {
}

export class ExpressionOperatorIsFalsePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsFalsePrivate

    static name: string
}

export interface ExpressionOperatorIsNotFalseClass {
}

export abstract class ExpressionOperatorIsNotFalseClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotFalseClass

    static name: string
}

export interface ExpressionOperatorIsNotFalsePrivate {
}

export class ExpressionOperatorIsNotFalsePrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotFalsePrivate

    static name: string
}

export interface ExpressionOperatorIsNotUnknownClass {
}

export abstract class ExpressionOperatorIsNotUnknownClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotUnknownClass

    static name: string
}

export interface ExpressionOperatorIsNotUnknownPrivate {
}

export class ExpressionOperatorIsNotUnknownPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotUnknownPrivate

    static name: string
}

export interface ExpressionOperatorIsUnknownClass {
}

export abstract class ExpressionOperatorIsUnknownClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsUnknownClass

    static name: string
}

export interface ExpressionOperatorIsUnknownPrivate {
}

export class ExpressionOperatorIsUnknownPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsUnknownPrivate

    static name: string
}

export interface ExpressionOperatorIsDistinctClass {
}

export abstract class ExpressionOperatorIsDistinctClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsDistinctClass

    static name: string
}

export interface ExpressionOperatorIsDistinctPrivate {
}

export class ExpressionOperatorIsDistinctPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsDistinctPrivate

    static name: string
}

export interface ExpressionOperatorIsNotDistinctClass {
}

export abstract class ExpressionOperatorIsNotDistinctClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotDistinctClass

    static name: string
}

export interface ExpressionOperatorIsNotDistinctPrivate {
}

export class ExpressionOperatorIsNotDistinctPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotDistinctPrivate

    static name: string
}

export interface ExpressionOperatorIsDistinctFromClass {
}

export abstract class ExpressionOperatorIsDistinctFromClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsDistinctFromClass

    static name: string
}

export interface ExpressionOperatorIsDistinctFromPrivate {
}

export class ExpressionOperatorIsDistinctFromPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsDistinctFromPrivate

    static name: string
}

export interface ExpressionOperatorIsNotDistinctFromClass {
}

export abstract class ExpressionOperatorIsNotDistinctFromClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotDistinctFromClass

    static name: string
}

export interface ExpressionOperatorIsNotDistinctFromPrivate {
}

export class ExpressionOperatorIsNotDistinctFromPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorIsNotDistinctFromPrivate

    static name: string
}

export interface ExpressionOperatorThreetermClass {
}

export abstract class ExpressionOperatorThreetermClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorThreetermClass

    static name: string
}

export interface ExpressionOperatorThreetermPrivate {
}

export class ExpressionOperatorThreetermPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorThreetermPrivate

    static name: string
}

export interface ExpressionOperatorBetweenClass {
}

export abstract class ExpressionOperatorBetweenClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenClass

    static name: string
}

export interface ExpressionOperatorBetweenPrivate {
}

export class ExpressionOperatorBetweenPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenPrivate

    static name: string
}

export interface ExpressionOperatorBetweenAndClass {
}

export abstract class ExpressionOperatorBetweenAndClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenAndClass

    static name: string
}

export interface ExpressionOperatorBetweenAndPrivate {
}

export class ExpressionOperatorBetweenAndPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenAndPrivate

    static name: string
}

export interface ExpressionOperatorNotBetweenClass {
}

export abstract class ExpressionOperatorNotBetweenClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenClass

    static name: string
}

export interface ExpressionOperatorNotBetweenPrivate {
}

export class ExpressionOperatorNotBetweenPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenPrivate

    static name: string
}

export interface ExpressionOperatorNotBetweenAndClass {
}

export abstract class ExpressionOperatorNotBetweenAndClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenAndClass

    static name: string
}

export interface ExpressionOperatorNotBetweenAndPrivate {
}

export class ExpressionOperatorNotBetweenAndPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenAndPrivate

    static name: string
}

export interface ExpressionOperatorBetweenSymmetricClass {
}

export abstract class ExpressionOperatorBetweenSymmetricClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenSymmetricClass

    static name: string
}

export interface ExpressionOperatorBetweenSymmetricPrivate {
}

export class ExpressionOperatorBetweenSymmetricPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenSymmetricPrivate

    static name: string
}

export interface ExpressionOperatorBetweenSymmetricAndClass {
}

export abstract class ExpressionOperatorBetweenSymmetricAndClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenSymmetricAndClass

    static name: string
}

export interface ExpressionOperatorBetweenSymmetricAndPrivate {
}

export class ExpressionOperatorBetweenSymmetricAndPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorBetweenSymmetricAndPrivate

    static name: string
}

export interface ExpressionOperatorNotBetweenSymmetricClass {
}

export abstract class ExpressionOperatorNotBetweenSymmetricClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetricClass

    static name: string
}

export interface ExpressionOperatorNotBetweenSymmetricPrivate {
}

export class ExpressionOperatorNotBetweenSymmetricPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetricPrivate

    static name: string
}

export interface ExpressionOperatorNotBetweenSymmetricAndClass {
}

export abstract class ExpressionOperatorNotBetweenSymmetricAndClass {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetricAndClass

    static name: string
}

export interface ExpressionOperatorNotBetweenSymmetricAndPrivate {
}

export class ExpressionOperatorNotBetweenSymmetricAndPrivate {

    // Own properties of Vda-1.Vda.ExpressionOperatorNotBetweenSymmetricAndPrivate

    static name: string
}

export interface ExpressionValueClass {
}

export abstract class ExpressionValueClass {

    // Own properties of Vda-1.Vda.ExpressionValueClass

    static name: string
}

export interface ExpressionValuePrivate {
}

export class ExpressionValuePrivate {

    // Own properties of Vda-1.Vda.ExpressionValuePrivate

    static name: string
}

export interface ExpressionValueParameterClass {
}

export abstract class ExpressionValueParameterClass {

    // Own properties of Vda-1.Vda.ExpressionValueParameterClass

    static name: string
}

export interface ExpressionValueParameterPrivate {
}

export class ExpressionValueParameterPrivate {

    // Own properties of Vda-1.Vda.ExpressionValueParameterPrivate

    static name: string
}

export interface HashListClass {
}

export abstract class HashListClass {

    // Own properties of Vda-1.Vda.HashListClass

    static name: string
}

export interface HashListPrivate {
}

export class HashListPrivate {

    // Own properties of Vda-1.Vda.HashListPrivate

    static name: string
}

export interface InvalidQueryClass {
}

export abstract class InvalidQueryClass {

    // Own properties of Vda-1.Vda.InvalidQueryClass

    static name: string
}

export interface InvalidQueryPrivate {
}

export class InvalidQueryPrivate {

    // Own properties of Vda-1.Vda.InvalidQueryPrivate

    static name: string
}

export interface InvalidPreparedQueryClass {
}

export abstract class InvalidPreparedQueryClass {

    // Own properties of Vda-1.Vda.InvalidPreparedQueryClass

    static name: string
}

export interface InvalidPreparedQueryPrivate {
}

export class InvalidPreparedQueryPrivate {

    // Own properties of Vda-1.Vda.InvalidPreparedQueryPrivate

    static name: string
}

export interface InvalidResultClass {
}

export abstract class InvalidResultClass {

    // Own properties of Vda-1.Vda.InvalidResultClass

    static name: string
}

export interface InvalidResultPrivate {
}

export class InvalidResultPrivate {

    // Own properties of Vda-1.Vda.InvalidResultPrivate

    static name: string
}

export interface ParametersClass {
}

export abstract class ParametersClass {

    // Own properties of Vda-1.Vda.ParametersClass

    static name: string
}

export interface ParametersPrivate {
}

export class ParametersPrivate {

    // Own properties of Vda-1.Vda.ParametersPrivate

    static name: string
}

export interface ParserClass {
}

export abstract class ParserClass {

    // Own properties of Vda-1.Vda.ParserClass

    static name: string
}

export interface ParserPrivate {
}

export class ParserPrivate {

    // Own properties of Vda-1.Vda.ParserPrivate

    static name: string
}

export interface TableReferenceClass {
}

export abstract class TableReferenceClass {

    // Own properties of Vda-1.Vda.TableReferenceClass

    static name: string
}

export interface TableReferencePrivate {
}

export class TableReferencePrivate {

    // Own properties of Vda-1.Vda.TableReferencePrivate

    static name: string
}

export interface ValueClass {

    // Own fields of Vda-1.Vda.ValueClass

    forceValue: (val: any) => boolean
    fromValue: (val: any) => boolean
    cast: (type: GObject.GType) => SqlValue | null
    isCompatible: (type: GObject.GType) => boolean
    parse: (str: string) => boolean
    toGvalue: () => /* result */ any
    toString: () => string
    toStringQuoted: () => string
    toSqlExpression: () => string
}

export abstract class ValueClass {

    // Own properties of Vda-1.Vda.ValueClass

    static name: string
}

export interface ValuePrivate {
}

export class ValuePrivate {

    // Own properties of Vda-1.Vda.ValuePrivate

    static name: string
}

export interface ValueNullClass {
}

export abstract class ValueNullClass {

    // Own properties of Vda-1.Vda.ValueNullClass

    static name: string
}

export interface ValueNullPrivate {
}

export class ValueNullPrivate {

    // Own properties of Vda-1.Vda.ValueNullPrivate

    static name: string
}

export interface ValueStringClass {
}

export abstract class ValueStringClass {

    // Own properties of Vda-1.Vda.ValueStringClass

    static name: string
}

export interface ValueStringPrivate {
}

export class ValueStringPrivate {

    // Own properties of Vda-1.Vda.ValueStringPrivate

    static name: string
}

export interface ValueXmlClass {
}

export abstract class ValueXmlClass {

    // Own properties of Vda-1.Vda.ValueXmlClass

    static name: string
}

export interface ValueXmlPrivate {
}

export class ValueXmlPrivate {

    // Own properties of Vda-1.Vda.ValueXmlPrivate

    static name: string
}

export interface ValueJsonClass {
}

export abstract class ValueJsonClass {

    // Own properties of Vda-1.Vda.ValueJsonClass

    static name: string
}

export interface ValueJsonPrivate {
}

export class ValueJsonPrivate {

    // Own properties of Vda-1.Vda.ValueJsonPrivate

    static name: string
}

export interface ValueTextClass {
}

export abstract class ValueTextClass {

    // Own properties of Vda-1.Vda.ValueTextClass

    static name: string
}

export interface ValueTextPrivate {
}

export class ValueTextPrivate {

    // Own properties of Vda-1.Vda.ValueTextPrivate

    static name: string
}

export interface ValueNameClass {
}

export abstract class ValueNameClass {

    // Own properties of Vda-1.Vda.ValueNameClass

    static name: string
}

export interface ValueNamePrivate {
}

export class ValueNamePrivate {

    // Own properties of Vda-1.Vda.ValueNamePrivate

    static name: string
}

export interface ValueBoolClass {
}

export abstract class ValueBoolClass {

    // Own properties of Vda-1.Vda.ValueBoolClass

    static name: string
}

export interface ValueBoolPrivate {
}

export class ValueBoolPrivate {

    // Own properties of Vda-1.Vda.ValueBoolPrivate

    static name: string
}

export interface ValueBitClass {
}

export abstract class ValueBitClass {

    // Own properties of Vda-1.Vda.ValueBitClass

    static name: string
}

export interface ValueBitPrivate {
}

export class ValueBitPrivate {

    // Own properties of Vda-1.Vda.ValueBitPrivate

    static name: string
}

export interface ValueIntegerClass {
}

export abstract class ValueIntegerClass {

    // Own properties of Vda-1.Vda.ValueIntegerClass

    static name: string
}

export interface ValueIntegerPrivate {
}

export class ValueIntegerPrivate {

    // Own properties of Vda-1.Vda.ValueIntegerPrivate

    static name: string
}

export interface ValueByteClass {
}

export abstract class ValueByteClass {

    // Own properties of Vda-1.Vda.ValueByteClass

    static name: string
}

export interface ValueBytePrivate {
}

export class ValueBytePrivate {

    // Own properties of Vda-1.Vda.ValueBytePrivate

    static name: string
}

export interface ValueInt2Class {
}

export abstract class ValueInt2Class {

    // Own properties of Vda-1.Vda.ValueInt2Class

    static name: string
}

export interface ValueInt2Private {
}

export class ValueInt2Private {

    // Own properties of Vda-1.Vda.ValueInt2Private

    static name: string
}

export interface ValueInt4Class {
}

export abstract class ValueInt4Class {

    // Own properties of Vda-1.Vda.ValueInt4Class

    static name: string
}

export interface ValueInt4Private {
}

export class ValueInt4Private {

    // Own properties of Vda-1.Vda.ValueInt4Private

    static name: string
}

export interface ValueInt8Class {
}

export abstract class ValueInt8Class {

    // Own properties of Vda-1.Vda.ValueInt8Class

    static name: string
}

export interface ValueInt8Private {
}

export class ValueInt8Private {

    // Own properties of Vda-1.Vda.ValueInt8Private

    static name: string
}

export interface ValueUnsignedIntegerClass {
}

export abstract class ValueUnsignedIntegerClass {

    // Own properties of Vda-1.Vda.ValueUnsignedIntegerClass

    static name: string
}

export interface ValueUnsignedIntegerPrivate {
}

export class ValueUnsignedIntegerPrivate {

    // Own properties of Vda-1.Vda.ValueUnsignedIntegerPrivate

    static name: string
}

export interface ValueUnsignedByteClass {
}

export abstract class ValueUnsignedByteClass {

    // Own properties of Vda-1.Vda.ValueUnsignedByteClass

    static name: string
}

export interface ValueUnsignedBytePrivate {
}

export class ValueUnsignedBytePrivate {

    // Own properties of Vda-1.Vda.ValueUnsignedBytePrivate

    static name: string
}

export interface ValueUnsignedInt2Class {
}

export abstract class ValueUnsignedInt2Class {

    // Own properties of Vda-1.Vda.ValueUnsignedInt2Class

    static name: string
}

export interface ValueUnsignedInt2Private {
}

export class ValueUnsignedInt2Private {

    // Own properties of Vda-1.Vda.ValueUnsignedInt2Private

    static name: string
}

export interface ValueUnsignedInt4Class {
}

export abstract class ValueUnsignedInt4Class {

    // Own properties of Vda-1.Vda.ValueUnsignedInt4Class

    static name: string
}

export interface ValueUnsignedInt4Private {
}

export class ValueUnsignedInt4Private {

    // Own properties of Vda-1.Vda.ValueUnsignedInt4Private

    static name: string
}

export interface ValueUnsignedInt8Class {
}

export abstract class ValueUnsignedInt8Class {

    // Own properties of Vda-1.Vda.ValueUnsignedInt8Class

    static name: string
}

export interface ValueUnsignedInt8Private {
}

export class ValueUnsignedInt8Private {

    // Own properties of Vda-1.Vda.ValueUnsignedInt8Private

    static name: string
}

export interface ValueOidClass {
}

export abstract class ValueOidClass {

    // Own properties of Vda-1.Vda.ValueOidClass

    static name: string
}

export interface ValueOidPrivate {
}

export class ValueOidPrivate {

    // Own properties of Vda-1.Vda.ValueOidPrivate

    static name: string
}

export interface ValueNumericClass {

    // Own fields of Vda-1.Vda.ValueNumericClass

    format: (str: string) => string
}

export abstract class ValueNumericClass {

    // Own properties of Vda-1.Vda.ValueNumericClass

    static name: string
}

export interface ValueNumericPrivate {
}

export class ValueNumericPrivate {

    // Own properties of Vda-1.Vda.ValueNumericPrivate

    static name: string
}

export interface ValueFloatClass {
}

export abstract class ValueFloatClass {

    // Own properties of Vda-1.Vda.ValueFloatClass

    static name: string
}

export interface ValueFloatPrivate {
}

export class ValueFloatPrivate {

    // Own properties of Vda-1.Vda.ValueFloatPrivate

    static name: string
}

export interface ValueDoubleClass {
}

export abstract class ValueDoubleClass {

    // Own properties of Vda-1.Vda.ValueDoubleClass

    static name: string
}

export interface ValueDoublePrivate {
}

export class ValueDoublePrivate {

    // Own properties of Vda-1.Vda.ValueDoublePrivate

    static name: string
}

export interface ValueMoneyClass {
}

export abstract class ValueMoneyClass {

    // Own properties of Vda-1.Vda.ValueMoneyClass

    static name: string
}

export interface ValueMoneyPrivate {
}

export class ValueMoneyPrivate {

    // Own properties of Vda-1.Vda.ValueMoneyPrivate

    static name: string
}

export interface ValueTimestampClass {

    // Own fields of Vda-1.Vda.ValueTimestampClass

    formatLocal: () => string
    formatUtc: () => string
    formatLocale: () => string
}

export abstract class ValueTimestampClass {

    // Own properties of Vda-1.Vda.ValueTimestampClass

    static name: string
}

export interface ValueTimestampPrivate {
}

export class ValueTimestampPrivate {

    // Own properties of Vda-1.Vda.ValueTimestampPrivate

    static name: string
}

export interface ValueTimestampNtzClass {
}

export abstract class ValueTimestampNtzClass {

    // Own properties of Vda-1.Vda.ValueTimestampNtzClass

    static name: string
}

export interface ValueTimestampNtzPrivate {
}

export class ValueTimestampNtzPrivate {

    // Own properties of Vda-1.Vda.ValueTimestampNtzPrivate

    static name: string
}

export interface ValueTimeClass {
}

export abstract class ValueTimeClass {

    // Own properties of Vda-1.Vda.ValueTimeClass

    static name: string
}

export interface ValueTimePrivate {
}

export class ValueTimePrivate {

    // Own properties of Vda-1.Vda.ValueTimePrivate

    static name: string
}

export interface ValueTimeNtzClass {
}

export abstract class ValueTimeNtzClass {

    // Own properties of Vda-1.Vda.ValueTimeNtzClass

    static name: string
}

export interface ValueTimeNtzPrivate {
}

export class ValueTimeNtzPrivate {

    // Own properties of Vda-1.Vda.ValueTimeNtzPrivate

    static name: string
}

export interface ValueDateClass {
}

export abstract class ValueDateClass {

    // Own properties of Vda-1.Vda.ValueDateClass

    static name: string
}

export interface ValueDatePrivate {
}

export class ValueDatePrivate {

    // Own properties of Vda-1.Vda.ValueDatePrivate

    static name: string
}

export interface ValueBinaryClass {
}

export abstract class ValueBinaryClass {

    // Own properties of Vda-1.Vda.ValueBinaryClass

    static name: string
}

export interface ValueBinaryPrivate {
}

export class ValueBinaryPrivate {

    // Own properties of Vda-1.Vda.ValueBinaryPrivate

    static name: string
}

export interface ValueMathExpClass {
}

export abstract class ValueMathExpClass {

    // Own properties of Vda-1.Vda.ValueMathExpClass

    static name: string
}

export interface ValueMathExpPrivate {
}

export class ValueMathExpPrivate {

    // Own properties of Vda-1.Vda.ValueMathExpPrivate

    static name: string
}

export interface MetaObjectIface {

    // Own fields of Vda-1.Vda.MetaObjectIface

    getConnection: () => Connection
    setConnection: (value: Connection) => void
}

export abstract class MetaObjectIface {

    // Own properties of Vda-1.Vda.MetaObjectIface

    static name: string
}

export interface MetaNamedObjectIface {

    // Own fields of Vda-1.Vda.MetaNamedObjectIface

    getName: () => string
    setName: (value: string) => void
}

export abstract class MetaNamedObjectIface {

    // Own properties of Vda-1.Vda.MetaNamedObjectIface

    static name: string
}

export interface ColumnModelIface {

    // Own fields of Vda-1.Vda.ColumnModelIface

    getName: () => string
    getDataType: () => GObject.GType
}

export abstract class ColumnModelIface {

    // Own properties of Vda-1.Vda.ColumnModelIface

    static name: string
}

export interface ConnectionIface {

    // Own fields of Vda-1.Vda.ConnectionIface

    close: (callback?: Gio.AsyncReadyCallback | null) => void
    closeFinish: (res: Gio.AsyncResult) => void
    open: (callback?: Gio.AsyncReadyCallback | null) => void
    openFinish: (res: Gio.AsyncResult) => ConnectionStatus
    openFromString: (cncString: string, callback?: Gio.AsyncReadyCallback | null) => void
    openFromStringFinish: (res: Gio.AsyncResult) => ConnectionStatus
    parseString: (sql: string) => Query
    parseStringPrepared: (name: string | null, sql: string) => PreparedQuery | null
    getPreparedQuery: (name: string) => PreparedQuery | null
    queryFromCommand: (cmd: SqlCommand, name?: string | null) => PreparedQuery | null
    valueToQuotedString: (v: SqlValue) => string
    locale: (category: string) => string
    getStatus: () => ConnectionStatus
    getParameters: () => ConnectionParameters
    setParameters: (value: ConnectionParameters) => void
    getIsOpened: () => boolean
    getConnectionString: () => string
}

export abstract class ConnectionIface {

    // Own properties of Vda-1.Vda.ConnectionIface

    static name: string
}

export interface ConnectionBlobIface {

    // Own fields of Vda-1.Vda.ConnectionBlobIface

    create: (stream: Gio.InputStream) => SqlValueBlob
    delete_: (val: SqlValueBlob) => void
}

export abstract class ConnectionBlobIface {

    // Own properties of Vda-1.Vda.ConnectionBlobIface

    static name: string
}

export interface ConnectionRolebasedIface {

    // Own fields of Vda-1.Vda.ConnectionRolebasedIface

    currentRole: () => Role | null
    createRole: (name: string, params: Parameters) => Role | null
}

export abstract class ConnectionRolebasedIface {

    // Own properties of Vda-1.Vda.ConnectionRolebasedIface

    static name: string
}

export interface ConnectionTransactionalIface {

    // Own fields of Vda-1.Vda.ConnectionTransactionalIface

    addSavepoint: (name?: string | null) => boolean
    deleteSavepoint: (name?: string | null) => boolean
    rollbackSavepoint: (name?: string | null) => boolean
    beginTransaction: (name?: string | null) => boolean
    commitTransaction: (name?: string | null) => boolean
    rollbackTransaction: (name?: string | null) => boolean
}

export abstract class ConnectionTransactionalIface {

    // Own properties of Vda-1.Vda.ConnectionTransactionalIface

    static name: string
}

export interface DataObjectIface {

    // Own fields of Vda-1.Vda.DataObjectIface

    updateDataFromDb: (callback?: Gio.AsyncReadyCallback | null) => void
    updateDataFromDbFinish: (res: Gio.AsyncResult) => void
    updateDataFromDbPkey: (callback?: Gio.AsyncReadyCallback | null) => void
    updateDataFromDbPkeyFinish: (res: Gio.AsyncResult) => void
    updateDataFromDbFull: (usePkey: boolean, callback?: Gio.AsyncReadyCallback | null) => void
    updateDataFromDbFullFinish: (res: Gio.AsyncResult) => void
    insertDataIntoDb: (callback?: Gio.AsyncReadyCallback | null) => void
    insertDataIntoDbFinish: (res: Gio.AsyncResult) => void
    deleteDataFromDb: (callback?: Gio.AsyncReadyCallback | null) => void
    deleteDataFromDbFinish: (res: Gio.AsyncResult) => void
    deleteDataFromDbPkey: (callback?: Gio.AsyncReadyCallback | null) => void
    deleteDataFromDbPkeyFinish: (res: Gio.AsyncResult) => void
    deleteDataFromDbFull: (usePkey: boolean, callback?: Gio.AsyncReadyCallback | null) => void
    deleteDataFromDbFullFinish: (res: Gio.AsyncResult) => void
    updateDataIntoDb: (callback?: Gio.AsyncReadyCallback | null) => void
    updateDataIntoDbFinish: (res: Gio.AsyncResult) => void
    updateDataIntoDbPkey: (callback?: Gio.AsyncReadyCallback | null) => void
    updateDataIntoDbPkeyFinish: (res: Gio.AsyncResult) => void
    updateDataIntoDbFull: (usePkey: boolean, callback?: Gio.AsyncReadyCallback | null) => void
    updateDataIntoDbFullFinish: (res: Gio.AsyncResult) => void
    updateFromRow: (table: TableModel, nrow: number) => void
    getDatabaseConnection: () => Connection
    setDatabaseConnection: (value: Connection) => void
    getDatabaseTableName: () => string
    setDatabaseTableName: (value: string) => void
    getCancellable: () => Gio.Cancellable
    setCancellable: (value: Gio.Cancellable) => void
}

export abstract class DataObjectIface {

    // Own properties of Vda-1.Vda.DataObjectIface

    static name: string
}

export interface DataCollectionIface {

    // Own fields of Vda-1.Vda.DataCollectionIface

    getObjects: (callback?: Gio.AsyncReadyCallback | null) => void
    getObjectsFinish: (res: Gio.AsyncResult) => TableModel
    getDatabaseConnection: () => Connection
    setDatabaseConnection: (value: Connection) => void
    getParentProperty: () => string
    getParent: () => DataObject
    getObjectType: () => GObject.GType
    getRefField: () => string
    getCancellable: () => Gio.Cancellable
    setCancellable: (value: Gio.Cancellable) => void
}

export abstract class DataCollectionIface {

    // Own properties of Vda-1.Vda.DataCollectionIface

    static name: string
}

export interface HashModelIface {

    // Own fields of Vda-1.Vda.HashModelIface

    add: (object: GObject.Object) => void
    find: (key: GObject.Object) => GObject.Object | null
    remove: (object: GObject.Object) => void
}

export abstract class HashModelIface {

    // Own properties of Vda-1.Vda.HashModelIface

    static name: string
}

export interface InsertedIface {

    // Own fields of Vda-1.Vda.InsertedIface

    getNumber: () => number
    getLastInserted: () => RowModel
}

export abstract class InsertedIface {

    // Own properties of Vda-1.Vda.InsertedIface

    static name: string
}

export interface ParsedQueryIface {

    // Own fields of Vda-1.Vda.ParsedQueryIface

    getCommand: () => SqlCommand
}

export abstract class ParsedQueryIface {

    // Own properties of Vda-1.Vda.ParsedQueryIface

    static name: string
}

export interface PreparedQueryIface {

    // Own fields of Vda-1.Vda.PreparedQueryIface

    getName: () => string
    getParameters: () => SqlParameters
}

export abstract class PreparedQueryIface {

    // Own properties of Vda-1.Vda.PreparedQueryIface

    static name: string
}

export interface QueryIface {

    // Own fields of Vda-1.Vda.QueryIface

    execute: (cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    executeFinish: (res: Gio.AsyncResult) => Result | null
    cancel: (callback?: Gio.AsyncReadyCallback | null) => void
    cancelFinish: (res: Gio.AsyncResult) => void
    renderSql: () => string
    getSql: () => string
    getConnection: () => Connection
}

export abstract class QueryIface {

    // Own properties of Vda-1.Vda.QueryIface

    static name: string
}

export interface ResultIface {
}

export abstract class ResultIface {

    // Own properties of Vda-1.Vda.ResultIface

    static name: string
}

export interface RoleIface {

    // Own fields of Vda-1.Vda.RoleIface

    name: (callback?: Gio.AsyncReadyCallback | null) => void
    nameFinish: (res: Gio.AsyncResult) => string
    membership: (callback?: Gio.AsyncReadyCallback | null) => void
    membershipFinish: (res: Gio.AsyncResult) => HashModel
    privilages: (object: MetaObject, callback?: Gio.AsyncReadyCallback | null) => void
    privilagesFinish: (res: Gio.AsyncResult) => RoleGrant
    changePrivilages: (object: MetaObject, grant: RoleGrant, callback?: Gio.AsyncReadyCallback | null) => void
    changePrivilagesFinish: (res: Gio.AsyncResult) => void
    getConnection: () => Connection
}

export abstract class RoleIface {

    // Own properties of Vda-1.Vda.RoleIface

    static name: string
}

export interface RowModelIface {

    // Own fields of Vda-1.Vda.RowModelIface

    getColumn: (name: string) => ColumnModel | null
    getColumnAt: (col: number) => ColumnModel | null
    getValue: (name: string) => SqlValue | null
    getValueAt: (col: number) => SqlValue | null
    getString: (name: string) => string | null
    getStringAt: (col: number) => string | null
    getNColumns: () => number
}

export abstract class RowModelIface {

    // Own properties of Vda-1.Vda.RowModelIface

    static name: string
}

export interface SqlAffectedRowsIface {

    // Own fields of Vda-1.Vda.SqlAffectedRowsIface

    getNumber: () => number
}

export abstract class SqlAffectedRowsIface {

    // Own properties of Vda-1.Vda.SqlAffectedRowsIface

    static name: string
}

export interface SqlCommandIface {

    // Own fields of Vda-1.Vda.SqlCommandIface

    getConnection: () => Connection
}

export abstract class SqlCommandIface {

    // Own properties of Vda-1.Vda.SqlCommandIface

    static name: string
}

export interface SqlCommandConditionalIface {

    // Own fields of Vda-1.Vda.SqlCommandConditionalIface

    getCondition: () => SqlExpression
}

export abstract class SqlCommandConditionalIface {

    // Own properties of Vda-1.Vda.SqlCommandConditionalIface

    static name: string
}

export interface SqlCommandDeleteIface {

    // Own fields of Vda-1.Vda.SqlCommandDeleteIface

    stringify: () => string
    toQuery: (name?: string | null) => Query
    parse: (sql: string) => void
}

export abstract class SqlCommandDeleteIface {

    // Own properties of Vda-1.Vda.SqlCommandDeleteIface

    static name: string
}

export interface SqlCommandInsertIface {

    // Own fields of Vda-1.Vda.SqlCommandInsertIface

    stringify: () => string
    toQuery: (name?: string | null) => Query
    parse: (sql: string) => void
}

export abstract class SqlCommandInsertIface {

    // Own properties of Vda-1.Vda.SqlCommandInsertIface

    static name: string
}

export interface SqlCommandModificationIface {

    // Own fields of Vda-1.Vda.SqlCommandModificationIface

    addFieldValue: (name: string, val?: any | null) => void
    addField: (name: string) => void
    addValue: (val?: any | null) => void
    addFieldParameterValue: (field: string, par: string, gtype: GObject.GType) => void
    addParameter: (par: string, gtype: GObject.GType) => void
    getFields: () => HashModel
    getValues: () => HashModel
}

export abstract class SqlCommandModificationIface {

    // Own properties of Vda-1.Vda.SqlCommandModificationIface

    static name: string
}

export interface SqlCommandParametrizedIface {

    // Own fields of Vda-1.Vda.SqlCommandParametrizedIface

    getParameters: () => SqlParameters
}

export abstract class SqlCommandParametrizedIface {

    // Own properties of Vda-1.Vda.SqlCommandParametrizedIface

    static name: string
}

export interface SqlCommandSelectIface {

    // Own fields of Vda-1.Vda.SqlCommandSelectIface

    addField: (field: string, tableRef?: string | null, alias?: string | null) => void
    addTable: (name: string, allias?: string | null) => void
    addValueField: (val: any, allias?: string | null) => void
    addMathExpField: (exp: string, allias?: string | null) => void
    stringify: () => string
    toQuery: (name?: string | null) => PreparedQuery
    parse: (sql: string) => void
    getFields: () => HashModel
    getTables: () => HashModel
}

export abstract class SqlCommandSelectIface {

    // Own properties of Vda-1.Vda.SqlCommandSelectIface

    static name: string
}

export interface SqlCommandTableRelatedIface {

    // Own fields of Vda-1.Vda.SqlCommandTableRelatedIface

    getTable: () => string
    setTable: (value: string) => void
    getAllias: () => string
    setAllias: (value: string) => void
}

export abstract class SqlCommandTableRelatedIface {

    // Own properties of Vda-1.Vda.SqlCommandTableRelatedIface

    static name: string
}

export interface SqlCommandUpdateIface {

    // Own fields of Vda-1.Vda.SqlCommandUpdateIface

    stringify: () => string
    toQuery: (name?: string | null) => Query
    parse: (sql: string) => void
}

export abstract class SqlCommandUpdateIface {

    // Own properties of Vda-1.Vda.SqlCommandUpdateIface

    static name: string
}

export interface SqlExpressionIface {

    // Own fields of Vda-1.Vda.SqlExpressionIface

    addExpression: (exp: SqlExpression) => void
    removeExpression: (exp: SqlExpression) => void
    toString: () => string
    addMathExpression: (str: string, cnc: Connection, params?: SqlParameters | null) => void
}

export abstract class SqlExpressionIface {

    // Own properties of Vda-1.Vda.SqlExpressionIface

    static name: string
}

export interface SqlExpressionFieldIface {

    // Own fields of Vda-1.Vda.SqlExpressionFieldIface

    getTableRef: () => string
    setTableRef: (value: string) => void
    getName: () => string
    setName: (value: string) => void
    getAllias: () => string | null
    setAllias: (value?: string | null) => void
}

export abstract class SqlExpressionFieldIface {

    // Own properties of Vda-1.Vda.SqlExpressionFieldIface

    static name: string
}

export interface SqlExpressionOperatorIface {

    // Own fields of Vda-1.Vda.SqlExpressionOperatorIface

    createFieldExpression: (name: string) => SqlExpressionField
    createValueExpression: (val: any | null, cnc: Connection) => SqlExpressionValue
    createParameterExpression: (name: string, gtype: GObject.GType) => SqlExpressionValueParameter
    addAndOperator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    addOrOperator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    addEqOperator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    addDiffOperator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    addLikeOperator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    addGtOperator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    addGeqOperator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    addLeqOperator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    addSimilarToOperator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    addIsNullOperator: (exp1: SqlExpression) => SqlExpressionOperator
    addIsNotNullOperator: (exp1: SqlExpression) => SqlExpressionOperator
    addNotOperator: (exp: SqlExpression) => SqlExpressionOperator
    addIsTrueOperator: (exp1: SqlExpression) => SqlExpressionOperator
    addIsNotTrueOperator: (exp1: SqlExpression) => SqlExpressionOperator
    addIsFalseOperator: (exp1: SqlExpression) => SqlExpressionOperator
    addIsNotFalseOperator: (exp1: SqlExpression) => SqlExpressionOperator
    addIsUnknownOperator: (exp1: SqlExpression) => SqlExpressionOperator
    addIsNotUnknownOperator: (exp1: SqlExpression) => SqlExpressionOperator
    addInOperator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    addNotInOperator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    addConcatenateOperator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    addPlusOperator: (exp1: SqlExpression, exp2?: SqlExpression | null) => SqlExpressionOperator
    addMinusOperator: (exp1: SqlExpression, exp2?: SqlExpression | null) => SqlExpressionOperator
    addStarOperator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    addDivOperator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    addRegexpOperator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    addBetweenOperator: (exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression) => SqlExpressionOperator
    addNotBetweenOperator: (exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression) => SqlExpressionOperator
    addBetweenSymmetricOperator: (exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression) => SqlExpressionOperator
    addNotBetweenSymmetricOperator: (exp1: SqlExpression, exp2: SqlExpression, exp3: SqlExpression) => SqlExpressionOperator
    addIsDistinctFromOperator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    addIsNotDistinctFromOperator: (exp1: SqlExpression, exp2: SqlExpression) => SqlExpressionOperator
    getOperatorType: () => SqlExpressionOperatorType
}

export abstract class SqlExpressionOperatorIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIface

    static name: string
}

export interface SqlExpressionOperatorGroupIface {
}

export abstract class SqlExpressionOperatorGroupIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorGroupIface

    static name: string
}

export interface SqlExpressionOperatorMultitermIface {
}

export abstract class SqlExpressionOperatorMultitermIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorMultitermIface

    static name: string
}

export interface SqlExpressionOperatorAndIface {
}

export abstract class SqlExpressionOperatorAndIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorAndIface

    static name: string
}

export interface SqlExpressionOperatorOrIface {
}

export abstract class SqlExpressionOperatorOrIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorOrIface

    static name: string
}

export interface SqlExpressionOperatorBinarytermIface {
}

export abstract class SqlExpressionOperatorBinarytermIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBinarytermIface

    static name: string
}

export interface SqlExpressionOperatorEqIface {
}

export abstract class SqlExpressionOperatorEqIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorEqIface

    static name: string
}

export interface SqlExpressionOperatorNotEqIface {
}

export abstract class SqlExpressionOperatorNotEqIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotEqIface

    static name: string
}

export interface SqlExpressionOperatorDiffIface {
}

export abstract class SqlExpressionOperatorDiffIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorDiffIface

    static name: string
}

export interface SqlExpressionOperatorGtIface {
}

export abstract class SqlExpressionOperatorGtIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorGtIface

    static name: string
}

export interface SqlExpressionOperatorLtIface {
}

export abstract class SqlExpressionOperatorLtIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorLtIface

    static name: string
}

export interface SqlExpressionOperatorGeqIface {
}

export abstract class SqlExpressionOperatorGeqIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorGeqIface

    static name: string
}

export interface SqlExpressionOperatorLeqIface {
}

export abstract class SqlExpressionOperatorLeqIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorLeqIface

    static name: string
}

export interface SqlExpressionOperatorRegexpIface {
}

export abstract class SqlExpressionOperatorRegexpIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorRegexpIface

    static name: string
}

export interface SqlExpressionOperatorStarIface {
}

export abstract class SqlExpressionOperatorStarIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorStarIface

    static name: string
}

export interface SqlExpressionOperatorDivIface {
}

export abstract class SqlExpressionOperatorDivIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorDivIface

    static name: string
}

export interface SqlExpressionOperatorInIface {
}

export abstract class SqlExpressionOperatorInIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorInIface

    static name: string
}

export interface SqlExpressionOperatorNotInIface {
}

export abstract class SqlExpressionOperatorNotInIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotInIface

    static name: string
}

export interface SqlExpressionOperatorConcatenateIface {
}

export abstract class SqlExpressionOperatorConcatenateIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorConcatenateIface

    static name: string
}

export interface SqlExpressionOperatorSimilarToIface {
}

export abstract class SqlExpressionOperatorSimilarToIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorSimilarToIface

    static name: string
}

export interface SqlExpressionOperatorLikeIface {
}

export abstract class SqlExpressionOperatorLikeIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorLikeIface

    static name: string
}

export interface SqlExpressionOperatorNotLikeIface {
}

export abstract class SqlExpressionOperatorNotLikeIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotLikeIface

    static name: string
}

export interface SqlExpressionOperatorIlikeIface {
}

export abstract class SqlExpressionOperatorIlikeIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIlikeIface

    static name: string
}

export interface SqlExpressionOperatorNotIlikeIface {
}

export abstract class SqlExpressionOperatorNotIlikeIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotIlikeIface

    static name: string
}

export interface SqlExpressionOperatorBinaryUnarytermIface {
}

export abstract class SqlExpressionOperatorBinaryUnarytermIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBinaryUnarytermIface

    static name: string
}

export interface SqlExpressionOperatorMinusIface {
}

export abstract class SqlExpressionOperatorMinusIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorMinusIface

    static name: string
}

export interface SqlExpressionOperatorPlusIface {
}

export abstract class SqlExpressionOperatorPlusIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorPlusIface

    static name: string
}

export interface SqlExpressionOperatorInitialUnarytermIface {
}

export abstract class SqlExpressionOperatorInitialUnarytermIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorInitialUnarytermIface

    static name: string
}

export interface SqlExpressionOperatorNotIface {
}

export abstract class SqlExpressionOperatorNotIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotIface

    static name: string
}

export interface SqlExpressionOperatorFinalUnarytermIface {
}

export abstract class SqlExpressionOperatorFinalUnarytermIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorFinalUnarytermIface

    static name: string
}

export interface SqlExpressionOperatorIsIface {
}

export abstract class SqlExpressionOperatorIsIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsIface

    static name: string
}

export interface SqlExpressionOperatorIsNotIface {
}

export abstract class SqlExpressionOperatorIsNotIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotIface

    static name: string
}

export interface SqlExpressionOperatorIsNullIface {
}

export abstract class SqlExpressionOperatorIsNullIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNullIface

    static name: string
}

export interface SqlExpressionOperatorIsNotNullIface {
}

export abstract class SqlExpressionOperatorIsNotNullIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotNullIface

    static name: string
}

export interface SqlExpressionOperatorIsTrueIface {
}

export abstract class SqlExpressionOperatorIsTrueIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsTrueIface

    static name: string
}

export interface SqlExpressionOperatorIsNotTrueIface {
}

export abstract class SqlExpressionOperatorIsNotTrueIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotTrueIface

    static name: string
}

export interface SqlExpressionOperatorIsFalseIface {
}

export abstract class SqlExpressionOperatorIsFalseIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsFalseIface

    static name: string
}

export interface SqlExpressionOperatorIsNotFalseIface {
}

export abstract class SqlExpressionOperatorIsNotFalseIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotFalseIface

    static name: string
}

export interface SqlExpressionOperatorIsUnknownIface {
}

export abstract class SqlExpressionOperatorIsUnknownIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsUnknownIface

    static name: string
}

export interface SqlExpressionOperatorIsNotUnknownIface {
}

export abstract class SqlExpressionOperatorIsNotUnknownIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotUnknownIface

    static name: string
}

export interface SqlExpressionOperatorIsDistinctIface {
}

export abstract class SqlExpressionOperatorIsDistinctIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsDistinctIface

    static name: string
}

export interface SqlExpressionOperatorIsNotDistinctIface {
}

export abstract class SqlExpressionOperatorIsNotDistinctIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotDistinctIface

    static name: string
}

export interface SqlExpressionOperatorIsDistinctFromIface {
}

export abstract class SqlExpressionOperatorIsDistinctFromIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsDistinctFromIface

    static name: string
}

export interface SqlExpressionOperatorIsNotDistinctFromIface {
}

export abstract class SqlExpressionOperatorIsNotDistinctFromIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorIsNotDistinctFromIface

    static name: string
}

export interface SqlExpressionOperatorThreetermIface {
}

export abstract class SqlExpressionOperatorThreetermIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorThreetermIface

    static name: string
}

export interface SqlExpressionOperatorBetweenIface {
}

export abstract class SqlExpressionOperatorBetweenIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBetweenIface

    static name: string
}

export interface SqlExpressionOperatorBetweenAndIface {
}

export abstract class SqlExpressionOperatorBetweenAndIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBetweenAndIface

    static name: string
}

export interface SqlExpressionOperatorNotBetweenIface {
}

export abstract class SqlExpressionOperatorNotBetweenIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotBetweenIface

    static name: string
}

export interface SqlExpressionOperatorNotBetweenAndIface {
}

export abstract class SqlExpressionOperatorNotBetweenAndIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotBetweenAndIface

    static name: string
}

export interface SqlExpressionOperatorBetweenSymmetricIface {
}

export abstract class SqlExpressionOperatorBetweenSymmetricIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBetweenSymmetricIface

    static name: string
}

export interface SqlExpressionOperatorBetweenSymmetricAndIface {
}

export abstract class SqlExpressionOperatorBetweenSymmetricAndIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorBetweenSymmetricAndIface

    static name: string
}

export interface SqlExpressionOperatorNotBetweenSymmetricIface {
}

export abstract class SqlExpressionOperatorNotBetweenSymmetricIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotBetweenSymmetricIface

    static name: string
}

export interface SqlExpressionOperatorNotBetweenSymmetricAndIface {
}

export abstract class SqlExpressionOperatorNotBetweenSymmetricAndIface {

    // Own properties of Vda-1.Vda.SqlExpressionOperatorNotBetweenSymmetricAndIface

    static name: string
}

export interface SqlExpressionValueIface {

    // Own fields of Vda-1.Vda.SqlExpressionValueIface

    setMathExpressionValue: (str: string, params?: SqlParameters | null) => void
    getConnection: () => Connection | null
    setConnection: (value?: Connection | null) => void
    getValue: () => SqlValue
    setValue: (value: SqlValue) => void
}

export abstract class SqlExpressionValueIface {

    // Own properties of Vda-1.Vda.SqlExpressionValueIface

    static name: string
}

export interface SqlExpressionValueParameterIface {

    // Own fields of Vda-1.Vda.SqlExpressionValueParameterIface

    parse: (str: string) => void
    getParameters: () => SqlParameters
    setParameters: (value: SqlParameters) => void
    getName: () => string
    setName: (value: string) => void
    getGtype: () => GObject.GType
    setGtype: (value: GObject.GType) => void
}

export abstract class SqlExpressionValueParameterIface {

    // Own properties of Vda-1.Vda.SqlExpressionValueParameterIface

    static name: string
}

export interface SqlParametersIface {

    // Own fields of Vda-1.Vda.SqlParametersIface

    setValue: (name: string, val: any) => void
    getValue: (name: string) => any | null
    setSqlValue: (name: string, val: SqlValue) => void
    getSqlValue: (name: string) => SqlValue
    hasParam: (name: string) => boolean
}

export abstract class SqlParametersIface {

    // Own properties of Vda-1.Vda.SqlParametersIface

    static name: string
}

export interface SqlParserIface {

    // Own fields of Vda-1.Vda.SqlParserIface

    parse: (str: string, cnc: Connection) => SqlCommandParametrized
}

export abstract class SqlParserIface {

    // Own properties of Vda-1.Vda.SqlParserIface

    static name: string
}

export interface SqlTableReferenceIface {

    // Own fields of Vda-1.Vda.SqlTableReferenceIface

    getName: () => string
    setName: (value: string) => void
    getAllias: () => string | null
    setAllias: (value?: string | null) => void
}

export abstract class SqlTableReferenceIface {

    // Own properties of Vda-1.Vda.SqlTableReferenceIface

    static name: string
}

export interface StringifiableIface {

    // Own fields of Vda-1.Vda.StringifiableIface

    toString: () => string
}

export abstract class StringifiableIface {

    // Own properties of Vda-1.Vda.StringifiableIface

    static name: string
}

export interface SqlValueIface {

    // Own fields of Vda-1.Vda.SqlValueIface

    parse: (str: string) => boolean
    fromValue: (val: any) => boolean
    cast: (type: GObject.GType) => SqlValue | null
    isCompatible: (type: GObject.GType) => boolean
    toGvalue: () => /* result */ any
    toStringQuoted: () => string
    toSqlExpression: () => string
    getName: () => string
}

export abstract class SqlValueIface {

    // Own properties of Vda-1.Vda.SqlValueIface

    static name: string
}

export interface SqlValueNullIface {
}

export abstract class SqlValueNullIface {

    // Own properties of Vda-1.Vda.SqlValueNullIface

    static name: string
}

export interface SqlValueBoolIface {
}

export abstract class SqlValueBoolIface {

    // Own properties of Vda-1.Vda.SqlValueBoolIface

    static name: string
}

export interface SqlValueBitIface {
}

export abstract class SqlValueBitIface {

    // Own properties of Vda-1.Vda.SqlValueBitIface

    static name: string
}

export interface SqlValueStringIface {
}

export abstract class SqlValueStringIface {

    // Own properties of Vda-1.Vda.SqlValueStringIface

    static name: string
}

export interface SqlValueXmlIface {

    // Own fields of Vda-1.Vda.SqlValueXmlIface

    getDocument: () => GXml.DomDocument
}

export abstract class SqlValueXmlIface {

    // Own properties of Vda-1.Vda.SqlValueXmlIface

    static name: string
}

export interface SqlValueJsonIface {

    // Own fields of Vda-1.Vda.SqlValueJsonIface

    getDocument: () => Json.Node
}

export abstract class SqlValueJsonIface {

    // Own properties of Vda-1.Vda.SqlValueJsonIface

    static name: string
}

export interface SqlValueTextIface {
}

export abstract class SqlValueTextIface {

    // Own properties of Vda-1.Vda.SqlValueTextIface

    static name: string
}

export interface SqlValueNameIface {
}

export abstract class SqlValueNameIface {

    // Own properties of Vda-1.Vda.SqlValueNameIface

    static name: string
}

export interface SqlValueIntegerIface {
}

export abstract class SqlValueIntegerIface {

    // Own properties of Vda-1.Vda.SqlValueIntegerIface

    static name: string
}

export interface SqlValueByteIface {
}

export abstract class SqlValueByteIface {

    // Own properties of Vda-1.Vda.SqlValueByteIface

    static name: string
}

export interface SqlValueInt2Iface {
}

export abstract class SqlValueInt2Iface {

    // Own properties of Vda-1.Vda.SqlValueInt2Iface

    static name: string
}

export interface SqlValueInt4Iface {
}

export abstract class SqlValueInt4Iface {

    // Own properties of Vda-1.Vda.SqlValueInt4Iface

    static name: string
}

export interface SqlValueInt8Iface {
}

export abstract class SqlValueInt8Iface {

    // Own properties of Vda-1.Vda.SqlValueInt8Iface

    static name: string
}

export interface SqlValueUnsignedIntegerIface {
}

export abstract class SqlValueUnsignedIntegerIface {

    // Own properties of Vda-1.Vda.SqlValueUnsignedIntegerIface

    static name: string
}

export interface SqlValueUnsignedByteIface {
}

export abstract class SqlValueUnsignedByteIface {

    // Own properties of Vda-1.Vda.SqlValueUnsignedByteIface

    static name: string
}

export interface SqlValueUnsignedInt2Iface {
}

export abstract class SqlValueUnsignedInt2Iface {

    // Own properties of Vda-1.Vda.SqlValueUnsignedInt2Iface

    static name: string
}

export interface SqlValueUnsignedInt4Iface {
}

export abstract class SqlValueUnsignedInt4Iface {

    // Own properties of Vda-1.Vda.SqlValueUnsignedInt4Iface

    static name: string
}

export interface SqlValueUnsignedInt8Iface {
}

export abstract class SqlValueUnsignedInt8Iface {

    // Own properties of Vda-1.Vda.SqlValueUnsignedInt8Iface

    static name: string
}

export interface SqlValueOidIface {
}

export abstract class SqlValueOidIface {

    // Own properties of Vda-1.Vda.SqlValueOidIface

    static name: string
}

export interface SqlValueNumericIface {

    // Own fields of Vda-1.Vda.SqlValueNumericIface

    setPrecision: (p: number) => void
    getPrecision: () => number
    format: (str: string) => string
    getDouble: () => number
    setDouble: (v: number) => void
    getReal: () => number
    setReal: (r: number) => void
    getImaginary: () => number
    setImaginary: (img: number) => void
}

export abstract class SqlValueNumericIface {

    // Own properties of Vda-1.Vda.SqlValueNumericIface

    static name: string
}

export interface SqlValueFloatIface {

    // Own fields of Vda-1.Vda.SqlValueFloatIface

    getFloat: () => number
}

export abstract class SqlValueFloatIface {

    // Own properties of Vda-1.Vda.SqlValueFloatIface

    static name: string
}

export interface SqlValueDoubleIface {
}

export abstract class SqlValueDoubleIface {

    // Own properties of Vda-1.Vda.SqlValueDoubleIface

    static name: string
}

export interface SqlValueMoneyIface {

    // Own fields of Vda-1.Vda.SqlValueMoneyIface

    locale: () => string
    intLocale: () => string
    getIntPrecision: () => number
    setIntPrecision: (p: number) => void
}

export abstract class SqlValueMoneyIface {

    // Own properties of Vda-1.Vda.SqlValueMoneyIface

    static name: string
}

export interface SqlValueDateIface {

    // Own fields of Vda-1.Vda.SqlValueDateIface

    getDate: () => /* result */ GLib.Date
    setDate: (ts: GLib.Date) => void
}

export abstract class SqlValueDateIface {

    // Own properties of Vda-1.Vda.SqlValueDateIface

    static name: string
}

export interface SqlValueTimestampIface {

    // Own fields of Vda-1.Vda.SqlValueTimestampIface

    formatLocal: () => string
    formatUtc: () => string
    formatLocale: () => string
    formatDate: () => string
    formatDateLocale: () => string
    formatTime: () => string
    formatTimeLocal: () => string
    formatTimeLocalNtz: () => string
    getTimestamp: () => GLib.DateTime
    setTimestamp: (ts: GLib.DateTime) => void
}

export abstract class SqlValueTimestampIface {

    // Own properties of Vda-1.Vda.SqlValueTimestampIface

    static name: string
}

export interface SqlValueTimestampNtzIface {
}

export abstract class SqlValueTimestampNtzIface {

    // Own properties of Vda-1.Vda.SqlValueTimestampNtzIface

    static name: string
}

export interface SqlValueTimeIface {
}

export abstract class SqlValueTimeIface {

    // Own properties of Vda-1.Vda.SqlValueTimeIface

    static name: string
}

export interface SqlValueTimeNtzIface {
}

export abstract class SqlValueTimeNtzIface {

    // Own properties of Vda-1.Vda.SqlValueTimeNtzIface

    static name: string
}

export interface SqlValueBinaryIface {

    // Own fields of Vda-1.Vda.SqlValueBinaryIface

    getBytes: () => any
    getOutStream: () => Gio.OutputStream | null
    getInputStream: () => Gio.InputStream | null
    getSize: () => number
}

export abstract class SqlValueBinaryIface {

    // Own properties of Vda-1.Vda.SqlValueBinaryIface

    static name: string
}

export interface SqlValueBlobIface {

    // Own fields of Vda-1.Vda.SqlValueBlobIface

    create: (stream: Gio.InputStream) => void
    delete_: () => void
    write: (file: Gio.File) => void
    read: (file: Gio.File) => void
    getConnection: () => Connection
}

export abstract class SqlValueBlobIface {

    // Own properties of Vda-1.Vda.SqlValueBlobIface

    static name: string
}

export interface SqlValueBlobOidIface {

    // Own fields of Vda-1.Vda.SqlValueBlobOidIface

    getIdentification: () => number
}

export abstract class SqlValueBlobOidIface {

    // Own properties of Vda-1.Vda.SqlValueBlobOidIface

    static name: string
}

export interface SqlValueGeometricPointIface {

    // Own fields of Vda-1.Vda.SqlValueGeometricPointIface

    getX: () => number
    setX: (value: number) => void
    getY: () => number
    setY: (value: number) => void
}

export abstract class SqlValueGeometricPointIface {

    // Own properties of Vda-1.Vda.SqlValueGeometricPointIface

    static name: string
}

export interface SqlValueMathExpIface {

    // Own fields of Vda-1.Vda.SqlValueMathExpIface

    getMath: () => GCalc.MathEquationManager
    setMath: (value: GCalc.MathEquationManager) => void
}

export abstract class SqlValueMathExpIface {

    // Own properties of Vda-1.Vda.SqlValueMathExpIface

    static name: string
}

export interface TableModelIface {
}

export abstract class TableModelIface {

    // Own properties of Vda-1.Vda.TableModelIface

    static name: string
}

export interface TableModelSequentialIface {

    // Own fields of Vda-1.Vda.TableModelSequentialIface

    current: () => RowModel | null
    next: () => boolean
    back: () => boolean
    move: (direction: MoveDirection, relative: number) => boolean
    copyCurrent: () => RowModel | null
}

export abstract class TableModelSequentialIface {

    // Own properties of Vda-1.Vda.TableModelSequentialIface

    static name: string
}
