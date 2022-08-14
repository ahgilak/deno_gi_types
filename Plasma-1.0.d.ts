
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Plasma-1.0
 */

import type * as ArrowCUDA from './ArrowCUDA-1.0.js';
import type * as Arrow from './Arrow-1.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

export module Client {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Plasma-1.0.Plasma.Client

        client?: object | null
    }

}

export interface Client {

    // Own properties of Plasma-1.0.Plasma.Client

    readonly client: object

    // Own fields of Plasma-1.0.Plasma.Client

    parentInstance: GObject.Object

    // Owm methods of Plasma-1.0.Plasma.Client

    create(id: ObjectID, dataSize: number, options: ClientCreateOptions | null): CreatedObject | null
    disconnect(): boolean
    referObject(id: ObjectID, timeoutMs: number): ReferredObject | null

    // Class property signals of Plasma-1.0.Plasma.Client

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

    // Own properties of Plasma-1.0.Plasma.Client

    static name: string

    // Constructors of Plasma-1.0.Plasma.Client

    constructor(config?: Client.ConstructorProperties) 
    constructor(storeSocketName: string, options: ClientOptions | null) 
    static new(storeSocketName: string, options: ClientOptions | null): Client
    _init(config?: Client.ConstructorProperties): void
}

export module ClientCreateOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Plasma-1.0.Plasma.ClientCreateOptions

        gpuDevice?: number | null
    }

}

export interface ClientCreateOptions {

    // Own properties of Plasma-1.0.Plasma.ClientCreateOptions

    gpuDevice: number

    // Own fields of Plasma-1.0.Plasma.ClientCreateOptions

    parentInstance: GObject.Object

    // Owm methods of Plasma-1.0.Plasma.ClientCreateOptions

    getMetadata(): Uint8Array | null
    setMetadata(metadata: Uint8Array | null): void

    // Class property signals of Plasma-1.0.Plasma.ClientCreateOptions

    connect(sigName: "notify::gpu-device", callback: any): number
    on(sigName: "notify::gpu-device", callback: any): number
    once(sigName: "notify::gpu-device", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::gpu-device", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ClientCreateOptions extends GObject.Object {

    // Own properties of Plasma-1.0.Plasma.ClientCreateOptions

    static name: string

    // Constructors of Plasma-1.0.Plasma.ClientCreateOptions

    constructor(config?: ClientCreateOptions.ConstructorProperties) 
    constructor() 
    static new(): ClientCreateOptions
    _init(config?: ClientCreateOptions.ConstructorProperties): void
}

export module ClientOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Plasma-1.0.Plasma.ClientOptions

        nRetries?: number | null
    }

}

export interface ClientOptions {

    // Own properties of Plasma-1.0.Plasma.ClientOptions

    nRetries: number

    // Own fields of Plasma-1.0.Plasma.ClientOptions

    parentInstance: GObject.Object

    // Owm methods of Plasma-1.0.Plasma.ClientOptions

    getNRetries(): number
    setNRetries(nRetries: number): void

    // Class property signals of Plasma-1.0.Plasma.ClientOptions

    connect(sigName: "notify::n-retries", callback: any): number
    on(sigName: "notify::n-retries", callback: any): number
    once(sigName: "notify::n-retries", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::n-retries", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ClientOptions extends GObject.Object {

    // Own properties of Plasma-1.0.Plasma.ClientOptions

    static name: string

    // Constructors of Plasma-1.0.Plasma.ClientOptions

    constructor(config?: ClientOptions.ConstructorProperties) 
    constructor() 
    static new(): ClientOptions
    _init(config?: ClientOptions.ConstructorProperties): void
}

export module CreatedObject {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface CreatedObject {

    // Own fields of Plasma-1.0.Plasma.CreatedObject

    parentInstance: any

    // Owm methods of Plasma-1.0.Plasma.CreatedObject

    /**
     * Aborts the object in the object store. You can't use the aborted
     * object anymore.
     */
    abort(): boolean
    /**
     * Seals the object in the object store. You can't use the sealed
     * object anymore.
     */
    seal(): boolean

    // Class property signals of Plasma-1.0.Plasma.CreatedObject

    connect(sigName: "notify::client", callback: any): number
    on(sigName: "notify::client", callback: any): number
    once(sigName: "notify::client", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::data", callback: any): number
    on(sigName: "notify::data", callback: any): number
    once(sigName: "notify::data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::gpu-device", callback: any): number
    on(sigName: "notify::gpu-device", callback: any): number
    once(sigName: "notify::gpu-device", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::gpu-device", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::metadata", callback: any): number
    on(sigName: "notify::metadata", callback: any): number
    once(sigName: "notify::metadata", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::metadata", ...args: any[]): void
    connect(sigName: "notify::raw-data", callback: any): number
    on(sigName: "notify::raw-data", callback: any): number
    once(sigName: "notify::raw-data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::raw-data", ...args: any[]): void
    connect(sigName: "notify::raw-metadata", callback: any): number
    on(sigName: "notify::raw-metadata", callback: any): number
    once(sigName: "notify::raw-metadata", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::raw-metadata", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CreatedObject extends Object {

    // Own properties of Plasma-1.0.Plasma.CreatedObject

    static name: string

    // Constructors of Plasma-1.0.Plasma.CreatedObject

    constructor(config?: CreatedObject.ConstructorProperties) 
    _init(config?: CreatedObject.ConstructorProperties): void
}

export module Object {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Plasma-1.0.Plasma.Object

        client?: Client | null
        data?: Arrow.Buffer | null
        gpuDevice?: number | null
        id?: ObjectID | null
        metadata?: Arrow.Buffer | null
        rawData?: object | null
        rawMetadata?: object | null
    }

}

export interface Object {

    // Own properties of Plasma-1.0.Plasma.Object

    readonly client: Client
    readonly data: Arrow.Buffer
    readonly gpuDevice: number
    readonly id: ObjectID
    readonly metadata: Arrow.Buffer
    readonly rawData: object
    readonly rawMetadata: object

    // Own fields of Plasma-1.0.Plasma.Object

    parentInstance: GObject.Object

    // Class property signals of Plasma-1.0.Plasma.Object

    connect(sigName: "notify::client", callback: any): number
    on(sigName: "notify::client", callback: any): number
    once(sigName: "notify::client", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::data", callback: any): number
    on(sigName: "notify::data", callback: any): number
    once(sigName: "notify::data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::gpu-device", callback: any): number
    on(sigName: "notify::gpu-device", callback: any): number
    once(sigName: "notify::gpu-device", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::gpu-device", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::metadata", callback: any): number
    on(sigName: "notify::metadata", callback: any): number
    once(sigName: "notify::metadata", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::metadata", ...args: any[]): void
    connect(sigName: "notify::raw-data", callback: any): number
    on(sigName: "notify::raw-data", callback: any): number
    once(sigName: "notify::raw-data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::raw-data", ...args: any[]): void
    connect(sigName: "notify::raw-metadata", callback: any): number
    on(sigName: "notify::raw-metadata", callback: any): number
    once(sigName: "notify::raw-metadata", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::raw-metadata", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Object extends GObject.Object {

    // Own properties of Plasma-1.0.Plasma.Object

    static name: string

    // Constructors of Plasma-1.0.Plasma.Object

    constructor(config?: Object.ConstructorProperties) 
    _init(config?: Object.ConstructorProperties): void
}

export module ObjectID {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ObjectID {

    // Own fields of Plasma-1.0.Plasma.ObjectID

    parentInstance: GObject.Object

    // Owm methods of Plasma-1.0.Plasma.ObjectID

    toBinary(): Uint8Array
    toHex(): string

    // Class property signals of Plasma-1.0.Plasma.ObjectID

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ObjectID extends GObject.Object {

    // Own properties of Plasma-1.0.Plasma.ObjectID

    static name: string

    // Constructors of Plasma-1.0.Plasma.ObjectID

    constructor(config?: ObjectID.ConstructorProperties) 
    constructor(id: Uint8Array) 
    static new(id: Uint8Array): ObjectID
    _init(config?: ObjectID.ConstructorProperties): void
}

export module ReferredObject {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface ReferredObject {

    // Own fields of Plasma-1.0.Plasma.ReferredObject

    parentInstance: any

    // Owm methods of Plasma-1.0.Plasma.ReferredObject

    /**
     * Releases the object explicitly. The object is no longer valid.
     */
    release(): boolean

    // Class property signals of Plasma-1.0.Plasma.ReferredObject

    connect(sigName: "notify::client", callback: any): number
    on(sigName: "notify::client", callback: any): number
    once(sigName: "notify::client", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::data", callback: any): number
    on(sigName: "notify::data", callback: any): number
    once(sigName: "notify::data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::gpu-device", callback: any): number
    on(sigName: "notify::gpu-device", callback: any): number
    once(sigName: "notify::gpu-device", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::gpu-device", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::metadata", callback: any): number
    on(sigName: "notify::metadata", callback: any): number
    once(sigName: "notify::metadata", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::metadata", ...args: any[]): void
    connect(sigName: "notify::raw-data", callback: any): number
    on(sigName: "notify::raw-data", callback: any): number
    once(sigName: "notify::raw-data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::raw-data", ...args: any[]): void
    connect(sigName: "notify::raw-metadata", callback: any): number
    on(sigName: "notify::raw-metadata", callback: any): number
    once(sigName: "notify::raw-metadata", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::raw-metadata", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ReferredObject extends Object {

    // Own properties of Plasma-1.0.Plasma.ReferredObject

    static name: string

    // Constructors of Plasma-1.0.Plasma.ReferredObject

    constructor(config?: ReferredObject.ConstructorProperties) 
    _init(config?: ReferredObject.ConstructorProperties): void
}

export interface ClientClass {

    // Own fields of Plasma-1.0.Plasma.ClientClass

    parentClass: GObject.ObjectClass
}

export abstract class ClientClass {

    // Own properties of Plasma-1.0.Plasma.ClientClass

    static name: string
}

export interface ClientCreateOptionsClass {

    // Own fields of Plasma-1.0.Plasma.ClientCreateOptionsClass

    parentClass: GObject.ObjectClass
}

export abstract class ClientCreateOptionsClass {

    // Own properties of Plasma-1.0.Plasma.ClientCreateOptionsClass

    static name: string
}

export interface ClientOptionsClass {

    // Own fields of Plasma-1.0.Plasma.ClientOptionsClass

    parentClass: GObject.ObjectClass
}

export abstract class ClientOptionsClass {

    // Own properties of Plasma-1.0.Plasma.ClientOptionsClass

    static name: string
}

export interface CreatedObjectClass {

    // Own fields of Plasma-1.0.Plasma.CreatedObjectClass

    parentClass: ObjectClass
}

export abstract class CreatedObjectClass {

    // Own properties of Plasma-1.0.Plasma.CreatedObjectClass

    static name: string
}

export interface ObjectClass {

    // Own fields of Plasma-1.0.Plasma.ObjectClass

    parentClass: GObject.ObjectClass
}

export abstract class ObjectClass {

    // Own properties of Plasma-1.0.Plasma.ObjectClass

    static name: string
}

export interface ObjectIDClass {

    // Own fields of Plasma-1.0.Plasma.ObjectIDClass

    parentClass: GObject.ObjectClass
}

export abstract class ObjectIDClass {

    // Own properties of Plasma-1.0.Plasma.ObjectIDClass

    static name: string
}

export interface ReferredObjectClass {

    // Own fields of Plasma-1.0.Plasma.ReferredObjectClass

    parentClass: ObjectClass
}

export abstract class ReferredObjectClass {

    // Own properties of Plasma-1.0.Plasma.ReferredObjectClass

    static name: string
}
