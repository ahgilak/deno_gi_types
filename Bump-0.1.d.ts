
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Bump-0.1
 */

import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Gee from './Gee-0.8.js';

export interface Callback {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): object | null
}
export module Queue {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Queue extends GObject.Object {

    // Own properties of Bump-0.1.Bump.Queue

    readonly length: number

    // Owm methods of Bump-0.1.Bump.Queue

    // Has conflict: process(wait: GLib.TimeSpan): boolean
    // Has conflict: getLength(): number

    // Own virtual methods of Bump-0.1.Bump.Queue

    process(wait: GLib.TimeSpan): boolean
    getLength(): number

    // Class property signals of Bump-0.1.Bump.Queue

    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Queue {

    // Own properties of Bump-0.1.Bump.Queue

    static name: string

    // Constructors of Bump-0.1.Bump.Queue

    constructor(config?: Queue.ConstructorProperties) 
    _init(config?: Queue.ConstructorProperties): void
}

export module Threading {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Queue.ConstructorProperties {
    }

}

export interface Threading extends GObject.Object, Queue {

    // Owm methods of Bump-0.1.Bump.Threading

    getMaxThreads(): number
    setMaxThreads(value: number): void
    getMaxIdleTime(): GLib.TimeSpan
    setMaxIdleTime(value: GLib.TimeSpan): void
    getNumThreads(): number
    getIdleThreads(): number
    increaseMaxThreads(newMaxThreads: number): void
    runTask(func: GLib.SourceFunc): boolean
    // Has conflict: spawn(maxNewThreads: number): number

    // Own virtual methods of Bump-0.1.Bump.Threading

    spawn(maxNewThreads: number): number

    // Class property signals of Bump-0.1.Bump.Threading

    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Threading {

    // Own properties of Bump-0.1.Bump.Threading

    static name: string

    // Constructors of Bump-0.1.Bump.Threading

    constructor(config?: Threading.ConstructorProperties) 
    _init(config?: Threading.ConstructorProperties): void
}

export module AsyncPriorityQueue {

    // Signal callback interfaces

    /**
     * Signal callback interface for `consumer-shortage`
     */
    export interface ConsumerShortageSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gee.PriorityQueue.ConstructorProperties {

        // Own constructor properties of Bump-0.1.Bump.AsyncPriorityQueue

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
        waitingThreads?: number | null
    }

}

export interface AsyncPriorityQueue {

    // Own properties of Bump-0.1.Bump.AsyncPriorityQueue

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    waitingThreads: number

    // Owm methods of Bump-0.1.Bump.AsyncPriorityQueue

    pollTimed(wait: GLib.TimeSpan): object | null
    peekTimed(wait: GLib.TimeSpan): object | null
    offer(element?: object | null): boolean

    // Overloads of offer

    offer(element: object | null): boolean
    offer(element: object | null): boolean
    getWaitingThreads(): number

    // Conflicting methods

    drain(recipient: Gee.Collection, amount: number): number

    // Overloads of drain

    drain(recipient: Gee.Collection, amount: number): number
    drain(recipient: Gee.Collection, amount: number): number
    peek(): object | null

    // Overloads of peek

    peek(): object | null
    peek(): object | null
    poll(): object | null

    // Overloads of poll

    poll(): object | null
    poll(): object | null
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void
    getCapacity(): number

    // Overloads of getCapacity

    getCapacity(): number
    getCapacity(): number
    getRemainingCapacity(): number

    // Overloads of getRemainingCapacity

    getRemainingCapacity(): number
    getRemainingCapacity(): number
    getIsFull(): boolean

    // Overloads of getIsFull

    getIsFull(): boolean
    getIsFull(): boolean
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
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean

    // Own signals of Bump-0.1.Bump.AsyncPriorityQueue

    connect(sigName: "consumer-shortage", callback: AsyncPriorityQueue.ConsumerShortageSignalCallback): number
    on(sigName: "consumer-shortage", callback: AsyncPriorityQueue.ConsumerShortageSignalCallback): number
    once(sigName: "consumer-shortage", callback: AsyncPriorityQueue.ConsumerShortageSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "consumer-shortage", ...args: any[]): void

    // Class property signals of Bump-0.1.Bump.AsyncPriorityQueue

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
    connect(sigName: "notify::waiting-threads", callback: any): number
    on(sigName: "notify::waiting-threads", callback: any): number
    once(sigName: "notify::waiting-threads", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::waiting-threads", ...args: any[]): void
    connect(sigName: "notify::capacity", callback: any): number
    on(sigName: "notify::capacity", callback: any): number
    once(sigName: "notify::capacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::remaining-capacity", callback: any): number
    on(sigName: "notify::remaining-capacity", callback: any): number
    once(sigName: "notify::remaining-capacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remaining-capacity", ...args: any[]): void
    connect(sigName: "notify::is-full", callback: any): number
    on(sigName: "notify::is-full", callback: any): number
    once(sigName: "notify::is-full", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-full", ...args: any[]): void
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

export class AsyncPriorityQueue extends Gee.PriorityQueue {

    // Own properties of Bump-0.1.Bump.AsyncPriorityQueue

    static name: string

    // Constructors of Bump-0.1.Bump.AsyncPriorityQueue

    constructor(config?: AsyncPriorityQueue.ConstructorProperties) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null): AsyncPriorityQueue

    // Overloads of new

    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null): Gee.PriorityQueue
    _init(config?: AsyncPriorityQueue.ConstructorProperties): void
}

export module Claim {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Bump-0.1.Bump.Claim

        timeAcquired?: number | null
        timeReleased?: number | null
    }

}

export interface Claim extends Gio.Initable, Gio.AsyncInitable {

    // Own properties of Bump-0.1.Bump.Claim

    readonly active: boolean
    timeAcquired: number
    timeReleased: number
    readonly durationHeld: GLib.TimeSpan

    // Owm methods of Bump-0.1.Bump.Claim

    // Has conflict: release(): void
    // Has conflict: init(cancellable?: Gio.Cancellable | null): boolean
    // Has conflict: initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: initFinish(res: Gio.AsyncResult): boolean
    getActive(): boolean
    getTimeAcquired(): number
    getTimeReleased(): number
    getDurationHeld(): GLib.TimeSpan

    // Own virtual methods of Bump-0.1.Bump.Claim

    release(): void
    init(cancellable?: Gio.Cancellable | null): boolean

    // Overloads of init

    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class??? implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @virtual 
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    init(cancellable: Gio.Cancellable | null): boolean
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of initAsync

    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @virtual 
     * @param ioPriority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    initAsync(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean

    // Overloads of initFinish

    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @virtual 
     * @param res a #GAsyncResult.
     */
    initFinish(res: Gio.AsyncResult): boolean

    // Class property signals of Bump-0.1.Bump.Claim

    connect(sigName: "notify::active", callback: any): number
    on(sigName: "notify::active", callback: any): number
    once(sigName: "notify::active", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::time-acquired", callback: any): number
    on(sigName: "notify::time-acquired", callback: any): number
    once(sigName: "notify::time-acquired", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::time-acquired", ...args: any[]): void
    connect(sigName: "notify::time-released", callback: any): number
    on(sigName: "notify::time-released", callback: any): number
    once(sigName: "notify::time-released", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::time-released", ...args: any[]): void
    connect(sigName: "notify::duration-held", callback: any): number
    on(sigName: "notify::duration-held", callback: any): number
    once(sigName: "notify::duration-held", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::duration-held", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Claim extends GObject.Object {

    // Own properties of Bump-0.1.Bump.Claim

    static name: string

    // Constructors of Bump-0.1.Bump.Claim

    constructor(config?: Claim.ConstructorProperties) 
    constructor() 
    static new(): Claim
    _init(config?: Claim.ConstructorProperties): void
}

export module Event {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Bump-0.1.Bump.Event

        tType?: GObject.GType | null
        tDupFunc?: GObject.BoxedCopyFunc | null
        tDestroyFunc?: GLib.DestroyNotify | null
        pool?: TaskQueue | null
        autoReset?: boolean | null
        triggered?: boolean | null
    }

}

export interface Event {

    // Own properties of Bump-0.1.Bump.Event

    readonly tType: GObject.GType
    readonly tDupFunc: GObject.BoxedCopyFunc
    readonly tDestroyFunc: GLib.DestroyNotify
    readonly pool: TaskQueue
    readonly autoReset: boolean
    triggered: boolean

    // Owm methods of Bump-0.1.Bump.Event

    reset(): void
    trigger(value?: object | null): void
    add(func: any, priority: number, cancellable?: Gio.Cancellable | null): void
    execute(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null): object | null
    executeAsync(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeFinish(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult): object | null
    executeBackground(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeBackgroundFinish(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult): object | null
    getPool(): TaskQueue
    getAutoReset(): boolean
    getTriggered(): boolean

    // Class property signals of Bump-0.1.Bump.Event

    connect(sigName: "notify::t-type", callback: any): number
    on(sigName: "notify::t-type", callback: any): number
    once(sigName: "notify::t-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: any): number
    on(sigName: "notify::t-dup-func", callback: any): number
    once(sigName: "notify::t-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: any): number
    on(sigName: "notify::t-destroy-func", callback: any): number
    once(sigName: "notify::t-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::pool", callback: any): number
    on(sigName: "notify::pool", callback: any): number
    once(sigName: "notify::pool", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pool", ...args: any[]): void
    connect(sigName: "notify::auto-reset", callback: any): number
    on(sigName: "notify::auto-reset", callback: any): number
    once(sigName: "notify::auto-reset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::auto-reset", ...args: any[]): void
    connect(sigName: "notify::triggered", callback: any): number
    on(sigName: "notify::triggered", callback: any): number
    once(sigName: "notify::triggered", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::triggered", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Event extends GObject.Object {

    // Own properties of Bump-0.1.Bump.Event

    static name: string

    // Constructors of Bump-0.1.Bump.Event

    constructor(config?: Event.ConstructorProperties) 
    constructor(tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify, autoReset: boolean) 
    static new(tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify, autoReset: boolean): Event
    _init(config?: Event.ConstructorProperties): void
}

export module Factory {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Bump-0.1.Bump.Factory

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface Factory {

    // Own properties of Bump-0.1.Bump.Factory

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Owm methods of Bump-0.1.Bump.Factory

    // Has conflict: create(priority: number, cancellable?: Gio.Cancellable | null): object | null
    // Has conflict: createAsync(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: createFinish(res: Gio.AsyncResult): object | null
    // Has conflict: createBackground(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: createBackgroundFinish(res: Gio.AsyncResult): object | null
    // Has conflict: acquire(priority: number, cancellable?: Gio.Cancellable | null): object | null
    // Has conflict: acquireAsync(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: acquireFinish(res: Gio.AsyncResult): object | null
    // Has conflict: acquireBackground(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: acquireBackgroundFinish(res: Gio.AsyncResult): object | null
    getConstructProperties(): GObject.Parameter[] | null
    setConstructProperties(value: GObject.Parameter[] | null): void

    // Own virtual methods of Bump-0.1.Bump.Factory

    create(priority: number, cancellable?: Gio.Cancellable | null): object | null
    createAsync(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createFinish(res: Gio.AsyncResult): object | null
    createBackground(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createBackgroundFinish(res: Gio.AsyncResult): object | null
    acquire(priority: number, cancellable?: Gio.Cancellable | null): object | null
    acquireAsync(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    acquireFinish(res: Gio.AsyncResult): object | null
    acquireBackground(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    acquireBackgroundFinish(res: Gio.AsyncResult): object | null

    // Class property signals of Bump-0.1.Bump.Factory

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Factory extends GObject.Object {

    // Own properties of Bump-0.1.Bump.Factory

    static name: string

    // Constructors of Bump-0.1.Bump.Factory

    constructor(config?: Factory.ConstructorProperties) 
    _init(config?: Factory.ConstructorProperties): void
}

export module Lazy {

    // Constructor properties interface

    export interface ConstructorProperties extends Factory.ConstructorProperties {

        // Own constructor properties of Bump-0.1.Bump.Lazy

        tType?: GObject.GType | null
        tDupFunc?: GObject.BoxedCopyFunc | null
        tDestroyFunc?: GLib.DestroyNotify | null
        pool?: TaskQueue | null
    }

}

export interface Lazy {

    // Own properties of Bump-0.1.Bump.Lazy

    readonly tType: GObject.GType
    readonly tDupFunc: GObject.BoxedCopyFunc
    readonly tDestroyFunc: GLib.DestroyNotify
    readonly pool: TaskQueue
    readonly value: object
    readonly isInitialized: boolean

    // Owm methods of Bump-0.1.Bump.Lazy

    getPool(): TaskQueue
    getValue(): object | null
    getIsInitialized(): boolean

    // Class property signals of Bump-0.1.Bump.Lazy

    connect(sigName: "notify::t-type", callback: any): number
    on(sigName: "notify::t-type", callback: any): number
    once(sigName: "notify::t-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: any): number
    on(sigName: "notify::t-dup-func", callback: any): number
    once(sigName: "notify::t-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: any): number
    on(sigName: "notify::t-destroy-func", callback: any): number
    once(sigName: "notify::t-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::pool", callback: any): number
    on(sigName: "notify::pool", callback: any): number
    once(sigName: "notify::pool", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pool", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::is-initialized", callback: any): number
    on(sigName: "notify::is-initialized", callback: any): number
    once(sigName: "notify::is-initialized", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-initialized", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Lazy extends Factory {

    // Own properties of Bump-0.1.Bump.Lazy

    static name: string

    // Constructors of Bump-0.1.Bump.Lazy

    constructor(config?: Lazy.ConstructorProperties) 
    constructor(tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify) 
    static new(tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify): Lazy
    _init(config?: Lazy.ConstructorProperties): void
}

export module ResourceClaim {

    // Constructor properties interface

    export interface ConstructorProperties extends Claim.ConstructorProperties {

        // Own constructor properties of Bump-0.1.Bump.ResourceClaim

        tType?: GObject.GType | null
        tDupFunc?: GObject.BoxedCopyFunc | null
        tDestroyFunc?: GLib.DestroyNotify | null
        pool?: ResourcePool | null
    }

}

export interface ResourceClaim {

    // Own properties of Bump-0.1.Bump.ResourceClaim

    readonly tType: GObject.GType
    readonly tDupFunc: GObject.BoxedCopyFunc
    readonly tDestroyFunc: GLib.DestroyNotify
    readonly pool: ResourcePool
    readonly resource: object

    // Owm methods of Bump-0.1.Bump.ResourceClaim

    getPool(): ResourcePool
    getResource(): object | null

    // Conflicting methods

    init(cancellable?: Gio.Cancellable | null): boolean

    // Overloads of init

    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class??? implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @virtual 
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    init(cancellable: Gio.Cancellable | null): boolean
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class??? implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @virtual 
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    init(cancellable: Gio.Cancellable | null): boolean
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of initAsync

    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @virtual 
     * @param ioPriority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    initAsync(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @virtual 
     * @param ioPriority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    initAsync(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean

    // Overloads of initFinish

    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @virtual 
     * @param res a #GAsyncResult.
     */
    initFinish(res: Gio.AsyncResult): boolean
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @virtual 
     * @param res a #GAsyncResult.
     */
    initFinish(res: Gio.AsyncResult): boolean

    // Class property signals of Bump-0.1.Bump.ResourceClaim

    connect(sigName: "notify::t-type", callback: any): number
    on(sigName: "notify::t-type", callback: any): number
    once(sigName: "notify::t-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: any): number
    on(sigName: "notify::t-dup-func", callback: any): number
    once(sigName: "notify::t-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: any): number
    on(sigName: "notify::t-destroy-func", callback: any): number
    once(sigName: "notify::t-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::pool", callback: any): number
    on(sigName: "notify::pool", callback: any): number
    once(sigName: "notify::pool", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pool", ...args: any[]): void
    connect(sigName: "notify::resource", callback: any): number
    on(sigName: "notify::resource", callback: any): number
    once(sigName: "notify::resource", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resource", ...args: any[]): void
    connect(sigName: "notify::active", callback: any): number
    on(sigName: "notify::active", callback: any): number
    once(sigName: "notify::active", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::time-acquired", callback: any): number
    on(sigName: "notify::time-acquired", callback: any): number
    once(sigName: "notify::time-acquired", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::time-acquired", ...args: any[]): void
    connect(sigName: "notify::time-released", callback: any): number
    on(sigName: "notify::time-released", callback: any): number
    once(sigName: "notify::time-released", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::time-released", ...args: any[]): void
    connect(sigName: "notify::duration-held", callback: any): number
    on(sigName: "notify::duration-held", callback: any): number
    once(sigName: "notify::duration-held", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::duration-held", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ResourceClaim extends Claim {

    // Own properties of Bump-0.1.Bump.ResourceClaim

    static name: string

    // Constructors of Bump-0.1.Bump.ResourceClaim

    constructor(config?: ResourceClaim.ConstructorProperties) 
    constructor(tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify, pool: ResourcePool) 
    static new(tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify, pool: ResourcePool): ResourceClaim

    // Overloads of new

    static new(): Claim
    _init(config?: ResourceClaim.ConstructorProperties): void
}

export module ResourcePool {

    // Constructor properties interface

    export interface ConstructorProperties extends Factory.ConstructorProperties {

        // Own constructor properties of Bump-0.1.Bump.ResourcePool

        tType?: GObject.GType | null
        tDupFunc?: GObject.BoxedCopyFunc | null
        tDestroyFunc?: GLib.DestroyNotify | null
        maxResources?: number | null
        maxIdleTime?: GLib.TimeSpan | null
        numResources?: number | null
        pool?: TaskQueue | null
    }

}

export interface ResourcePool {

    // Own properties of Bump-0.1.Bump.ResourcePool

    readonly tType: GObject.GType
    readonly tDupFunc: GObject.BoxedCopyFunc
    readonly tDestroyFunc: GLib.DestroyNotify
    readonly maxResources: number
    maxIdleTime: GLib.TimeSpan
    numResources: number
    readonly idleResources: number
    readonly activeResources: number
    readonly pool: TaskQueue

    // Owm methods of Bump-0.1.Bump.ResourcePool

    // Has conflict: release(resource?: object | null): void
    execute(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null): object | null
    executeAsync(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeFinish(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult): object | null
    executeBackground(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeBackgroundFinish(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult): object | null
    claim(priority: number, cancellable?: Gio.Cancellable | null): ResourceClaim
    claimAsync(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    claimFinish(res: Gio.AsyncResult): ResourceClaim
    getMaxResources(): number
    getMaxIdleTime(): GLib.TimeSpan
    setMaxIdleTime(value: GLib.TimeSpan): void
    getNumResources(): number
    getIdleResources(): number
    getActiveResources(): number
    getPool(): TaskQueue

    // Own virtual methods of Bump-0.1.Bump.ResourcePool

    release(resource?: object | null): void

    // Class property signals of Bump-0.1.Bump.ResourcePool

    connect(sigName: "notify::t-type", callback: any): number
    on(sigName: "notify::t-type", callback: any): number
    once(sigName: "notify::t-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: any): number
    on(sigName: "notify::t-dup-func", callback: any): number
    once(sigName: "notify::t-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: any): number
    on(sigName: "notify::t-destroy-func", callback: any): number
    once(sigName: "notify::t-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::max-resources", callback: any): number
    on(sigName: "notify::max-resources", callback: any): number
    once(sigName: "notify::max-resources", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-resources", ...args: any[]): void
    connect(sigName: "notify::max-idle-time", callback: any): number
    on(sigName: "notify::max-idle-time", callback: any): number
    once(sigName: "notify::max-idle-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-idle-time", ...args: any[]): void
    connect(sigName: "notify::num-resources", callback: any): number
    on(sigName: "notify::num-resources", callback: any): number
    once(sigName: "notify::num-resources", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::num-resources", ...args: any[]): void
    connect(sigName: "notify::idle-resources", callback: any): number
    on(sigName: "notify::idle-resources", callback: any): number
    once(sigName: "notify::idle-resources", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::idle-resources", ...args: any[]): void
    connect(sigName: "notify::active-resources", callback: any): number
    on(sigName: "notify::active-resources", callback: any): number
    once(sigName: "notify::active-resources", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active-resources", ...args: any[]): void
    connect(sigName: "notify::pool", callback: any): number
    on(sigName: "notify::pool", callback: any): number
    once(sigName: "notify::pool", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pool", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ResourcePool extends Factory {

    // Own properties of Bump-0.1.Bump.ResourcePool

    static name: string

    // Constructors of Bump-0.1.Bump.ResourcePool

    constructor(config?: ResourcePool.ConstructorProperties) 
    constructor(tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify, maxResources: number) 
    static new(tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify, maxResources: number): ResourcePool
    _init(config?: ResourcePool.ConstructorProperties): void
}

export module Semaphore {

    // Constructor properties interface

    export interface ConstructorProperties extends TaskQueue.ConstructorProperties {

        // Own constructor properties of Bump-0.1.Bump.Semaphore

        maxClaims?: number | null
        claims?: number | null
        pool?: TaskQueue | null
    }

}

export interface Semaphore {

    // Own properties of Bump-0.1.Bump.Semaphore

    readonly maxClaims: number
    claims: number
    readonly pool: TaskQueue

    // Owm methods of Bump-0.1.Bump.Semaphore

    unlock(): void
    lock(priority: number, cancellable?: Gio.Cancellable | null): void
    lockAsync(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lockFinish(res: Gio.AsyncResult): void
    // Has conflict: claim(priority: number, cancellable?: Gio.Cancellable | null): SemaphoreClaim
    // Has conflict: claimAsync(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: claimFinish(res: Gio.AsyncResult): SemaphoreClaim
    getMaxClaims(): number
    getClaims(): number
    getPool(): TaskQueue

    // Conflicting methods

    spawn(max: number): number

    // Overloads of spawn

    spawn(maxNewThreads: number): number
    spawn(maxNewThreads: number): number
    process(wait: GLib.TimeSpan): boolean

    // Overloads of process

    process(wait: GLib.TimeSpan): boolean
    process(wait: GLib.TimeSpan): boolean

    // Own virtual methods of Bump-0.1.Bump.Semaphore

    claim(priority: number, cancellable?: Gio.Cancellable | null): SemaphoreClaim
    claimAsync(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    claimFinish(res: Gio.AsyncResult): SemaphoreClaim

    // Class property signals of Bump-0.1.Bump.Semaphore

    connect(sigName: "notify::max-claims", callback: any): number
    on(sigName: "notify::max-claims", callback: any): number
    once(sigName: "notify::max-claims", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-claims", ...args: any[]): void
    connect(sigName: "notify::claims", callback: any): number
    on(sigName: "notify::claims", callback: any): number
    once(sigName: "notify::claims", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::claims", ...args: any[]): void
    connect(sigName: "notify::pool", callback: any): number
    on(sigName: "notify::pool", callback: any): number
    once(sigName: "notify::pool", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pool", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Semaphore extends TaskQueue {

    // Own properties of Bump-0.1.Bump.Semaphore

    static name: string

    // Constructors of Bump-0.1.Bump.Semaphore

    constructor(config?: Semaphore.ConstructorProperties) 
    constructor(maxClaims: number) 
    static new(maxClaims: number): Semaphore

    // Overloads of new

    static new(): TaskQueue
    _init(config?: Semaphore.ConstructorProperties): void
}

export module SemaphoreClaim {

    // Constructor properties interface

    export interface ConstructorProperties extends Claim.ConstructorProperties {

        // Own constructor properties of Bump-0.1.Bump.SemaphoreClaim

        semaphore?: Semaphore | null
    }

}

export interface SemaphoreClaim {

    // Own properties of Bump-0.1.Bump.SemaphoreClaim

    readonly semaphore: Semaphore

    // Owm methods of Bump-0.1.Bump.SemaphoreClaim

    getSemaphore(): Semaphore

    // Conflicting methods

    init(cancellable?: Gio.Cancellable | null): boolean

    // Overloads of init

    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class??? implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @virtual 
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    init(cancellable: Gio.Cancellable | null): boolean
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class??? implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @virtual 
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    init(cancellable: Gio.Cancellable | null): boolean
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of initAsync

    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @virtual 
     * @param ioPriority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    initAsync(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @virtual 
     * @param ioPriority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    initAsync(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean

    // Overloads of initFinish

    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @virtual 
     * @param res a #GAsyncResult.
     */
    initFinish(res: Gio.AsyncResult): boolean
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @virtual 
     * @param res a #GAsyncResult.
     */
    initFinish(res: Gio.AsyncResult): boolean

    // Class property signals of Bump-0.1.Bump.SemaphoreClaim

    connect(sigName: "notify::semaphore", callback: any): number
    on(sigName: "notify::semaphore", callback: any): number
    once(sigName: "notify::semaphore", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::semaphore", ...args: any[]): void
    connect(sigName: "notify::active", callback: any): number
    on(sigName: "notify::active", callback: any): number
    once(sigName: "notify::active", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::time-acquired", callback: any): number
    on(sigName: "notify::time-acquired", callback: any): number
    once(sigName: "notify::time-acquired", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::time-acquired", ...args: any[]): void
    connect(sigName: "notify::time-released", callback: any): number
    on(sigName: "notify::time-released", callback: any): number
    once(sigName: "notify::time-released", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::time-released", ...args: any[]): void
    connect(sigName: "notify::duration-held", callback: any): number
    on(sigName: "notify::duration-held", callback: any): number
    once(sigName: "notify::duration-held", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::duration-held", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SemaphoreClaim extends Claim {

    // Own properties of Bump-0.1.Bump.SemaphoreClaim

    static name: string

    // Constructors of Bump-0.1.Bump.SemaphoreClaim

    constructor(config?: SemaphoreClaim.ConstructorProperties) 
    _init(config?: SemaphoreClaim.ConstructorProperties): void
}

export module TaskQueue {

    // Constructor properties interface

    export interface ConstructorProperties extends Queue.ConstructorProperties, Threading.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface TaskQueue extends Queue, Threading {

    // Owm methods of Bump-0.1.Bump.TaskQueue

    // Has conflict: spawn(max: number): number
    // Has conflict: add(task: GLib.SourceFunc, priority: number, cancellable?: Gio.Cancellable | null): void
    // Has conflict: process(wait: GLib.TimeSpan): boolean
    // Has conflict: execute(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null): object | null
    // Has conflict: executeAsync(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: executeFinish(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult): object | null
    // Has conflict: executeBackground(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    // Has conflict: executeBackgroundFinish(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult): object | null

    // Own virtual methods of Bump-0.1.Bump.TaskQueue

    spawn(max: number): number

    // Overloads of spawn

    spawn(maxNewThreads: number): number
    add(task: GLib.SourceFunc, priority: number, cancellable?: Gio.Cancellable | null): void
    process(wait: GLib.TimeSpan): boolean

    // Overloads of process

    process(wait: GLib.TimeSpan): boolean
    execute(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null): object | null
    executeAsync(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeFinish(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult): object | null
    executeBackground(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeBackgroundFinish(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult): object | null

    // Class property signals of Bump-0.1.Bump.TaskQueue

    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class TaskQueue extends GObject.Object {

    // Own properties of Bump-0.1.Bump.TaskQueue

    static name: string

    // Constructors of Bump-0.1.Bump.TaskQueue

    constructor(config?: TaskQueue.ConstructorProperties) 
    constructor() 
    static new(): TaskQueue
    _init(config?: TaskQueue.ConstructorProperties): void
    static getGlobal(): TaskQueue
}

export interface AsyncPriorityQueueClass {
}

export abstract class AsyncPriorityQueueClass {

    // Own properties of Bump-0.1.Bump.AsyncPriorityQueueClass

    static name: string
}

export interface AsyncPriorityQueuePrivate {
}

export class AsyncPriorityQueuePrivate {

    // Own properties of Bump-0.1.Bump.AsyncPriorityQueuePrivate

    static name: string
}

export interface ClaimClass {

    // Own fields of Bump-0.1.Bump.ClaimClass

    release: () => void
    init: (cancellable?: Gio.Cancellable | null) => boolean
    initAsync: (ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    initFinish: (res: Gio.AsyncResult) => boolean
}

export abstract class ClaimClass {

    // Own properties of Bump-0.1.Bump.ClaimClass

    static name: string
}

export interface ClaimPrivate {
}

export class ClaimPrivate {

    // Own properties of Bump-0.1.Bump.ClaimPrivate

    static name: string
}

export interface EventClass {
}

export abstract class EventClass {

    // Own properties of Bump-0.1.Bump.EventClass

    static name: string
}

export interface EventPrivate {
}

export class EventPrivate {

    // Own properties of Bump-0.1.Bump.EventPrivate

    static name: string
}

export interface FactoryClass {

    // Own fields of Bump-0.1.Bump.FactoryClass

    create: (priority: number, cancellable?: Gio.Cancellable | null) => object | null
    createAsync: (priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    createFinish: (res: Gio.AsyncResult) => object | null
    createBackground: (priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    createBackgroundFinish: (res: Gio.AsyncResult) => object | null
    acquire: (priority: number, cancellable?: Gio.Cancellable | null) => object | null
    acquireAsync: (priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    acquireFinish: (res: Gio.AsyncResult) => object | null
    acquireBackground: (priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    acquireBackgroundFinish: (res: Gio.AsyncResult) => object | null
}

export abstract class FactoryClass {

    // Own properties of Bump-0.1.Bump.FactoryClass

    static name: string
}

export interface FactoryPrivate {
}

export class FactoryPrivate {

    // Own properties of Bump-0.1.Bump.FactoryPrivate

    static name: string
}

export interface LazyClass {
}

export abstract class LazyClass {

    // Own properties of Bump-0.1.Bump.LazyClass

    static name: string
}

export interface LazyPrivate {
}

export class LazyPrivate {

    // Own properties of Bump-0.1.Bump.LazyPrivate

    static name: string
}

export interface ResourceClaimClass {
}

export abstract class ResourceClaimClass {

    // Own properties of Bump-0.1.Bump.ResourceClaimClass

    static name: string
}

export interface ResourceClaimPrivate {
}

export class ResourceClaimPrivate {

    // Own properties of Bump-0.1.Bump.ResourceClaimPrivate

    static name: string
}

export interface ResourcePoolClass {

    // Own fields of Bump-0.1.Bump.ResourcePoolClass

    release: (resource?: object | null) => void
}

export abstract class ResourcePoolClass {

    // Own properties of Bump-0.1.Bump.ResourcePoolClass

    static name: string
}

export interface ResourcePoolPrivate {
}

export class ResourcePoolPrivate {

    // Own properties of Bump-0.1.Bump.ResourcePoolPrivate

    static name: string
}

export interface SemaphoreClass {

    // Own fields of Bump-0.1.Bump.SemaphoreClass

    claim: (priority: number, cancellable?: Gio.Cancellable | null) => SemaphoreClaim
    claimAsync: (priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    claimFinish: (res: Gio.AsyncResult) => SemaphoreClaim
}

export abstract class SemaphoreClass {

    // Own properties of Bump-0.1.Bump.SemaphoreClass

    static name: string
}

export interface SemaphorePrivate {
}

export class SemaphorePrivate {

    // Own properties of Bump-0.1.Bump.SemaphorePrivate

    static name: string
}

export interface SemaphoreClaimClass {
}

export abstract class SemaphoreClaimClass {

    // Own properties of Bump-0.1.Bump.SemaphoreClaimClass

    static name: string
}

export interface SemaphoreClaimPrivate {
}

export class SemaphoreClaimPrivate {

    // Own properties of Bump-0.1.Bump.SemaphoreClaimPrivate

    static name: string
}

export interface TaskQueueClass {

    // Own fields of Bump-0.1.Bump.TaskQueueClass

    spawn: (max: number) => number
    add: (task: GLib.SourceFunc, priority: number, cancellable?: Gio.Cancellable | null) => void
    process: (wait: GLib.TimeSpan) => boolean
    execute: (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null) => object | null
    executeAsync: (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    executeFinish: (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult) => object | null
    executeBackground: (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    executeBackgroundFinish: (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult) => object | null
}

export abstract class TaskQueueClass {

    // Own properties of Bump-0.1.Bump.TaskQueueClass

    static name: string
}

export interface TaskQueuePrivate {
}

export class TaskQueuePrivate {

    // Own properties of Bump-0.1.Bump.TaskQueuePrivate

    static name: string
}

export interface QueueIface {

    // Own fields of Bump-0.1.Bump.QueueIface

    process: (wait: GLib.TimeSpan) => boolean
    getLength: () => number
}

export abstract class QueueIface {

    // Own properties of Bump-0.1.Bump.QueueIface

    static name: string
}

export interface ThreadingIface {

    // Own fields of Bump-0.1.Bump.ThreadingIface

    spawn: (maxNewThreads: number) => number
}

export abstract class ThreadingIface {

    // Own properties of Bump-0.1.Bump.ThreadingIface

    static name: string
}
