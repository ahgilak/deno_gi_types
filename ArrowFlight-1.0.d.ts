
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ArrowFlight-1.0
 */

import type * as Arrow from './Arrow-1.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

export module CallOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface CallOptions {

    // Own fields of ArrowFlight-1.0.ArrowFlight.CallOptions

    parentInstance: GObject.Object

    // Class property signals of ArrowFlight-1.0.ArrowFlight.CallOptions

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CallOptions extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.CallOptions

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.CallOptions

    constructor(config?: CallOptions.ConstructorProperties) 
    constructor() 
    static new(): CallOptions
    _init(config?: CallOptions.ConstructorProperties): void
}

export module Client {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowFlight-1.0.ArrowFlight.Client

        client?: object | null
    }

}

export interface Client {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Client

    readonly client: object

    // Own fields of ArrowFlight-1.0.ArrowFlight.Client

    parentInstance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.Client

    doGet(ticket: Ticket, options: CallOptions | null): StreamReader | null
    listFlights(criteria: Criteria | null, options: CallOptions | null): Info[] | null

    // Class property signals of ArrowFlight-1.0.ArrowFlight.Client

    connect(sigName: "notify::client", callback: any): number
    on(sigName: "notify::client", callback: any): number
    once(sigName: "notify::client", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Client extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Client

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.Client

    constructor(config?: Client.ConstructorProperties) 
    constructor(location: Location, options: ClientOptions | null) 
    static new(location: Location, options: ClientOptions | null): Client
    _init(config?: Client.ConstructorProperties): void
}

export module ClientOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ClientOptions {

    // Own fields of ArrowFlight-1.0.ArrowFlight.ClientOptions

    parentInstance: GObject.Object

    // Class property signals of ArrowFlight-1.0.ArrowFlight.ClientOptions

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ClientOptions extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ClientOptions

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.ClientOptions

    constructor(config?: ClientOptions.ConstructorProperties) 
    constructor() 
    static new(): ClientOptions
    _init(config?: ClientOptions.ConstructorProperties): void
}

export module CommandDescriptor {

    // Constructor properties interface

    export interface ConstructorProperties extends Descriptor.ConstructorProperties {
    }

}

export interface CommandDescriptor {

    // Own fields of ArrowFlight-1.0.ArrowFlight.CommandDescriptor

    parentInstance: any

    // Owm methods of ArrowFlight-1.0.ArrowFlight.CommandDescriptor

    getCommand(): string

    // Class property signals of ArrowFlight-1.0.ArrowFlight.CommandDescriptor

    connect(sigName: "notify::descriptor", callback: any): number
    on(sigName: "notify::descriptor", callback: any): number
    once(sigName: "notify::descriptor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::descriptor", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CommandDescriptor extends Descriptor {

    // Own properties of ArrowFlight-1.0.ArrowFlight.CommandDescriptor

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.CommandDescriptor

    constructor(config?: CommandDescriptor.ConstructorProperties) 
    constructor(command: string) 
    static new(command: string): CommandDescriptor
    _init(config?: CommandDescriptor.ConstructorProperties): void
}

export module Criteria {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowFlight-1.0.ArrowFlight.Criteria

        /**
         * Opaque criteria expression, dependent on server implementation.
         */
        expression?: any | null
    }

}

export interface Criteria {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Criteria

    /**
     * Opaque criteria expression, dependent on server implementation.
     */
    expression: any

    // Own fields of ArrowFlight-1.0.ArrowFlight.Criteria

    parentInstance: GObject.Object

    // Class property signals of ArrowFlight-1.0.ArrowFlight.Criteria

    connect(sigName: "notify::expression", callback: any): number
    on(sigName: "notify::expression", callback: any): number
    once(sigName: "notify::expression", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expression", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Criteria extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Criteria

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.Criteria

    constructor(config?: Criteria.ConstructorProperties) 
    constructor(expression: any) 
    static new(expression: any): Criteria
    _init(config?: Criteria.ConstructorProperties): void
}

export module DataStream {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowFlight-1.0.ArrowFlight.DataStream

        stream?: object | null
    }

}

export interface DataStream {

    // Own properties of ArrowFlight-1.0.ArrowFlight.DataStream

    readonly stream: object

    // Own fields of ArrowFlight-1.0.ArrowFlight.DataStream

    parentInstance: GObject.Object

    // Class property signals of ArrowFlight-1.0.ArrowFlight.DataStream

    connect(sigName: "notify::stream", callback: any): number
    on(sigName: "notify::stream", callback: any): number
    once(sigName: "notify::stream", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DataStream extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.DataStream

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.DataStream

    constructor(config?: DataStream.ConstructorProperties) 
    _init(config?: DataStream.ConstructorProperties): void
}

export module Descriptor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowFlight-1.0.ArrowFlight.Descriptor

        descriptor?: object | null
    }

}

export interface Descriptor {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Descriptor

    readonly descriptor: object

    // Own fields of ArrowFlight-1.0.ArrowFlight.Descriptor

    parentInstance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.Descriptor

    equal(otherDescriptor: Descriptor): boolean
    toString(): string

    // Class property signals of ArrowFlight-1.0.ArrowFlight.Descriptor

    connect(sigName: "notify::descriptor", callback: any): number
    on(sigName: "notify::descriptor", callback: any): number
    once(sigName: "notify::descriptor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::descriptor", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Descriptor extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Descriptor

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.Descriptor

    constructor(config?: Descriptor.ConstructorProperties) 
    _init(config?: Descriptor.ConstructorProperties): void
}

export module Endpoint {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Endpoint {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Endpoint

    /**
     * Opaque ticket identify; use with DoGet RPC.
     */
    readonly ticket: Ticket

    // Own fields of ArrowFlight-1.0.ArrowFlight.Endpoint

    parentInstance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.Endpoint

    equal(otherEndpoint: Endpoint): boolean
    getLocations(): Location[] | null

    // Class property signals of ArrowFlight-1.0.ArrowFlight.Endpoint

    connect(sigName: "notify::ticket", callback: any): number
    on(sigName: "notify::ticket", callback: any): number
    once(sigName: "notify::ticket", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ticket", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Endpoint extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Endpoint

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.Endpoint

    constructor(config?: Endpoint.ConstructorProperties) 
    constructor(ticket: Ticket, locations: Location[]) 
    static new(ticket: Ticket, locations: Location[]): Endpoint
    _init(config?: Endpoint.ConstructorProperties): void
}

export module Info {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowFlight-1.0.ArrowFlight.Info

        info?: object | null
    }

}

export interface Info {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Info

    readonly info: object

    // Own fields of ArrowFlight-1.0.ArrowFlight.Info

    parentInstance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.Info

    equal(otherInfo: Info): boolean
    getDescriptor(): Descriptor
    getEndpoints(): Endpoint[]
    getSchema(options: Arrow.ReadOptions | null): Arrow.Schema
    getTotalBytes(): number
    getTotalRecords(): number

    // Class property signals of ArrowFlight-1.0.ArrowFlight.Info

    connect(sigName: "notify::info", callback: any): number
    on(sigName: "notify::info", callback: any): number
    once(sigName: "notify::info", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::info", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Info extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Info

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.Info

    constructor(config?: Info.ConstructorProperties) 
    constructor(schema: Arrow.Schema, descriptor: Descriptor, endpoints: Endpoint[], totalRecords: number, totalBytes: number) 
    static new(schema: Arrow.Schema, descriptor: Descriptor, endpoints: Endpoint[], totalRecords: number, totalBytes: number): Info
    _init(config?: Info.ConstructorProperties): void
}

export module Location {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Location {

    // Own fields of ArrowFlight-1.0.ArrowFlight.Location

    parentInstance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.Location

    equal(otherLocation: Location): boolean
    getScheme(): string
    toString(): string

    // Class property signals of ArrowFlight-1.0.ArrowFlight.Location

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Location extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Location

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.Location

    constructor(config?: Location.ConstructorProperties) 
    constructor(uri: string) 
    static new(uri: string): Location
    _init(config?: Location.ConstructorProperties): void
}

export module PathDescriptor {

    // Constructor properties interface

    export interface ConstructorProperties extends Descriptor.ConstructorProperties {
    }

}

export interface PathDescriptor {

    // Own fields of ArrowFlight-1.0.ArrowFlight.PathDescriptor

    parentInstance: any

    // Owm methods of ArrowFlight-1.0.ArrowFlight.PathDescriptor

    getPaths(): string[] | null

    // Class property signals of ArrowFlight-1.0.ArrowFlight.PathDescriptor

    connect(sigName: "notify::descriptor", callback: any): number
    on(sigName: "notify::descriptor", callback: any): number
    once(sigName: "notify::descriptor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::descriptor", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PathDescriptor extends Descriptor {

    // Own properties of ArrowFlight-1.0.ArrowFlight.PathDescriptor

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.PathDescriptor

    constructor(config?: PathDescriptor.ConstructorProperties) 
    constructor(paths: string[]) 
    static new(paths: string[]): PathDescriptor
    _init(config?: PathDescriptor.ConstructorProperties): void
}

export module RecordBatchReader {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowFlight-1.0.ArrowFlight.RecordBatchReader

        reader?: object | null
    }

}

export interface RecordBatchReader {

    // Own properties of ArrowFlight-1.0.ArrowFlight.RecordBatchReader

    readonly reader: object

    // Own fields of ArrowFlight-1.0.ArrowFlight.RecordBatchReader

    parentInstance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.RecordBatchReader

    readAll(): Arrow.Table
    readNext(): StreamChunk

    // Class property signals of ArrowFlight-1.0.ArrowFlight.RecordBatchReader

    connect(sigName: "notify::reader", callback: any): number
    on(sigName: "notify::reader", callback: any): number
    once(sigName: "notify::reader", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reader", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class RecordBatchReader extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.RecordBatchReader

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.RecordBatchReader

    constructor(config?: RecordBatchReader.ConstructorProperties) 
    _init(config?: RecordBatchReader.ConstructorProperties): void
}

export module RecordBatchStream {

    // Constructor properties interface

    export interface ConstructorProperties extends DataStream.ConstructorProperties {

        // Own constructor properties of ArrowFlight-1.0.ArrowFlight.RecordBatchStream

        /**
         * The reader that produces record batches.
         */
        reader?: Arrow.RecordBatchReader | null
    }

}

export interface RecordBatchStream {

    // Own properties of ArrowFlight-1.0.ArrowFlight.RecordBatchStream

    /**
     * The reader that produces record batches.
     */
    readonly reader: Arrow.RecordBatchReader

    // Own fields of ArrowFlight-1.0.ArrowFlight.RecordBatchStream

    parentInstance: any

    // Class property signals of ArrowFlight-1.0.ArrowFlight.RecordBatchStream

    connect(sigName: "notify::reader", callback: any): number
    on(sigName: "notify::reader", callback: any): number
    once(sigName: "notify::reader", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reader", ...args: any[]): void
    connect(sigName: "notify::stream", callback: any): number
    on(sigName: "notify::stream", callback: any): number
    once(sigName: "notify::stream", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class RecordBatchStream extends DataStream {

    // Own properties of ArrowFlight-1.0.ArrowFlight.RecordBatchStream

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.RecordBatchStream

    constructor(config?: RecordBatchStream.ConstructorProperties) 
    constructor(reader: Arrow.RecordBatchReader, options: Arrow.WriteOptions | null) 
    static new(reader: Arrow.RecordBatchReader, options: Arrow.WriteOptions | null): RecordBatchStream
    _init(config?: RecordBatchStream.ConstructorProperties): void
}

export module Server {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Server {

    // Own fields of ArrowFlight-1.0.ArrowFlight.Server

    parentInstance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.Server

    // Has conflict: doGet(context: ServerCallContext, ticket: Ticket): DataStream
    getPort(): number
    // Has conflict: listFlights(context: ServerCallContext, criteria: Criteria | null): Info[]
    listen(options: ServerOptions): boolean
    /**
     * Shuts down the serve. This function can be called from signal
     * handler or another thread.
     */
    shutdown(): boolean
    wait(): boolean

    // Own virtual methods of ArrowFlight-1.0.ArrowFlight.Server

    doGet(context: ServerCallContext, ticket: Ticket): DataStream
    listFlights(context: ServerCallContext, criteria: Criteria | null): Info[]

    // Class property signals of ArrowFlight-1.0.ArrowFlight.Server

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Server extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Server

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.Server

    constructor(config?: Server.ConstructorProperties) 
    _init(config?: Server.ConstructorProperties): void
}

export module ServerCallContext {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowFlight-1.0.ArrowFlight.ServerCallContext

        callContext?: object | null
    }

}

export interface ServerCallContext {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ServerCallContext

    readonly callContext: object

    // Own fields of ArrowFlight-1.0.ArrowFlight.ServerCallContext

    parentInstance: GObject.Object

    // Class property signals of ArrowFlight-1.0.ArrowFlight.ServerCallContext

    connect(sigName: "notify::call-context", callback: any): number
    on(sigName: "notify::call-context", callback: any): number
    once(sigName: "notify::call-context", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::call-context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ServerCallContext extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ServerCallContext

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.ServerCallContext

    constructor(config?: ServerCallContext.ConstructorProperties) 
    _init(config?: ServerCallContext.ConstructorProperties): void
}

export module ServerOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowFlight-1.0.ArrowFlight.ServerOptions

        location?: Location | null
    }

}

export interface ServerOptions {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ServerOptions

    readonly location: Location

    // Own fields of ArrowFlight-1.0.ArrowFlight.ServerOptions

    parentInstance: GObject.Object

    // Class property signals of ArrowFlight-1.0.ArrowFlight.ServerOptions

    connect(sigName: "notify::location", callback: any): number
    on(sigName: "notify::location", callback: any): number
    once(sigName: "notify::location", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ServerOptions extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ServerOptions

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.ServerOptions

    constructor(config?: ServerOptions.ConstructorProperties) 
    constructor(location: Location) 
    static new(location: Location): ServerOptions
    _init(config?: ServerOptions.ConstructorProperties): void
}

export module StreamChunk {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowFlight-1.0.ArrowFlight.StreamChunk

        chunk?: object | null
    }

}

export interface StreamChunk {

    // Own properties of ArrowFlight-1.0.ArrowFlight.StreamChunk

    readonly chunk: object

    // Own fields of ArrowFlight-1.0.ArrowFlight.StreamChunk

    parentInstance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.StreamChunk

    getData(): Arrow.RecordBatch

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    getMetadata(): Arrow.Buffer | null

    // Class property signals of ArrowFlight-1.0.ArrowFlight.StreamChunk

    connect(sigName: "notify::chunk", callback: any): number
    on(sigName: "notify::chunk", callback: any): number
    once(sigName: "notify::chunk", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::chunk", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class StreamChunk extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.StreamChunk

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.StreamChunk

    constructor(config?: StreamChunk.ConstructorProperties) 
    _init(config?: StreamChunk.ConstructorProperties): void
}

export module StreamReader {

    // Constructor properties interface

    export interface ConstructorProperties extends RecordBatchReader.ConstructorProperties {
    }

}

export interface StreamReader {

    // Own fields of ArrowFlight-1.0.ArrowFlight.StreamReader

    parentInstance: any

    // Class property signals of ArrowFlight-1.0.ArrowFlight.StreamReader

    connect(sigName: "notify::reader", callback: any): number
    on(sigName: "notify::reader", callback: any): number
    once(sigName: "notify::reader", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reader", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class StreamReader extends RecordBatchReader {

    // Own properties of ArrowFlight-1.0.ArrowFlight.StreamReader

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.StreamReader

    constructor(config?: StreamReader.ConstructorProperties) 
    _init(config?: StreamReader.ConstructorProperties): void
}

export module Ticket {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowFlight-1.0.ArrowFlight.Ticket

        /**
         * Opaque identifier or credential to use when requesting a data
         * stream with the DoGet RPC.
         */
        data?: any | null
    }

}

export interface Ticket {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Ticket

    /**
     * Opaque identifier or credential to use when requesting a data
     * stream with the DoGet RPC.
     */
    data: any

    // Own fields of ArrowFlight-1.0.ArrowFlight.Ticket

    parentInstance: GObject.Object

    // Owm methods of ArrowFlight-1.0.ArrowFlight.Ticket

    equal(otherTicket: Ticket): boolean

    // Class property signals of ArrowFlight-1.0.ArrowFlight.Ticket

    connect(sigName: "notify::data", callback: any): number
    on(sigName: "notify::data", callback: any): number
    once(sigName: "notify::data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Ticket extends GObject.Object {

    // Own properties of ArrowFlight-1.0.ArrowFlight.Ticket

    static name: string

    // Constructors of ArrowFlight-1.0.ArrowFlight.Ticket

    constructor(config?: Ticket.ConstructorProperties) 
    constructor(data: any) 
    static new(data: any): Ticket
    _init(config?: Ticket.ConstructorProperties): void
}

export interface CallOptionsClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.CallOptionsClass

    parentClass: GObject.ObjectClass
}

export abstract class CallOptionsClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.CallOptionsClass

    static name: string
}

export interface ClientClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.ClientClass

    parentClass: GObject.ObjectClass
}

export abstract class ClientClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ClientClass

    static name: string
}

export interface ClientOptionsClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.ClientOptionsClass

    parentClass: GObject.ObjectClass
}

export abstract class ClientOptionsClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ClientOptionsClass

    static name: string
}

export interface CommandDescriptorClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.CommandDescriptorClass

    parentClass: DescriptorClass
}

export abstract class CommandDescriptorClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.CommandDescriptorClass

    static name: string
}

export interface CriteriaClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.CriteriaClass

    parentClass: GObject.ObjectClass
}

export abstract class CriteriaClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.CriteriaClass

    static name: string
}

export interface DataStreamClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.DataStreamClass

    parentClass: GObject.ObjectClass
}

export abstract class DataStreamClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.DataStreamClass

    static name: string
}

export interface DescriptorClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.DescriptorClass

    parentClass: GObject.ObjectClass
}

export abstract class DescriptorClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.DescriptorClass

    static name: string
}

export interface EndpointClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.EndpointClass

    parentClass: GObject.ObjectClass
}

export abstract class EndpointClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.EndpointClass

    static name: string
}

export interface InfoClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.InfoClass

    parentClass: GObject.ObjectClass
}

export abstract class InfoClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.InfoClass

    static name: string
}

export interface LocationClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.LocationClass

    parentClass: GObject.ObjectClass
}

export abstract class LocationClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.LocationClass

    static name: string
}

export interface PathDescriptorClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.PathDescriptorClass

    parentClass: DescriptorClass
}

export abstract class PathDescriptorClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.PathDescriptorClass

    static name: string
}

export interface RecordBatchReaderClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.RecordBatchReaderClass

    parentClass: GObject.ObjectClass
}

export abstract class RecordBatchReaderClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.RecordBatchReaderClass

    static name: string
}

export interface RecordBatchStreamClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.RecordBatchStreamClass

    parentClass: DataStreamClass
}

export abstract class RecordBatchStreamClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.RecordBatchStreamClass

    static name: string
}

export interface ServerCallContextClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.ServerCallContextClass

    parentClass: GObject.ObjectClass
}

export abstract class ServerCallContextClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ServerCallContextClass

    static name: string
}

export interface ServerClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.ServerClass

    parentClass: GObject.ObjectClass
    listFlights: (server: Server, context: ServerCallContext, criteria: Criteria | null) => Info[]
    doGet: (server: Server, context: ServerCallContext, ticket: Ticket) => DataStream
}

export abstract class ServerClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ServerClass

    static name: string
}

export interface ServerOptionsClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.ServerOptionsClass

    parentClass: GObject.ObjectClass
}

export abstract class ServerOptionsClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.ServerOptionsClass

    static name: string
}

export interface StreamChunkClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.StreamChunkClass

    parentClass: GObject.ObjectClass
}

export abstract class StreamChunkClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.StreamChunkClass

    static name: string
}

export interface StreamReaderClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.StreamReaderClass

    parentClass: RecordBatchReaderClass
}

export abstract class StreamReaderClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.StreamReaderClass

    static name: string
}

export interface TicketClass {

    // Own fields of ArrowFlight-1.0.ArrowFlight.TicketClass

    parentClass: GObject.ObjectClass
}

export abstract class TicketClass {

    // Own properties of ArrowFlight-1.0.ArrowFlight.TicketClass

    static name: string
}
