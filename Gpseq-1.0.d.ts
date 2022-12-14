
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gpseq-1.0
 */

import type * as Gee from './Gee-0.8.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

export enum ChannelError {
    CLOSED,
    TIMEOUT,
    TRY_FAILED,
}
export enum MapError {
    DUPLICATE_KEY,
}
export enum OptionalError {
    NOT_PRESENT,
}
export enum CollectorFeatures {
    CONCURRENT,
    UNORDERED,
}
export function collectorsToGenericArray(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collector
export function collectorsToCollection(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, factory: Supplier): Collector
export function collectorsToList(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collector
export function collectorsToSet(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, hash: Gee.HashDataFunc | null, equal: Gee.EqualDataFunc | null): Collector
export function collectorsToMap(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, keyMapper: MapFunc, valMapper: MapFunc, merger: CombineFunc | null, keyHash: Gee.HashDataFunc | null, keyEqual: Gee.EqualDataFunc | null, valueEqual: Gee.EqualDataFunc | null): Collector
export function collectorsSumInt(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
export function collectorsSumUint(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
export function collectorsSumLong(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
export function collectorsSumUlong(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
export function collectorsSumFloat(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
export function collectorsSumDouble(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
export function collectorsSumInt32(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
export function collectorsSumUint32(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
export function collectorsSumInt64(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
export function collectorsSumUint64(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
export function collectorsAverageFloat(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
export function collectorsAverageDouble(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Collector
export function collectorsGroupBy(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, classifier: MapFunc): Collector
export function collectorsGroupByWith(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, classifier: MapFunc, downstream: Collector): Collector
export function collectorsPartition(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, pred: Predicate): Collector
export function collectorsPartitionWith(vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, pred: Predicate, downstream: Collector): Collector
export function collectorsMax(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compare: GLib.CompareDataFunc | null): Collector
export function collectorsMin(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compare: GLib.CompareDataFunc | null): Collector
export function collectorsCount(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Collector
export function collectorsFold(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, accumulator: FoldFunc, combiner: CombineFunc, identity?: object | null): Collector
export function collectorsReduce(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, accumulator: CombineFunc): Collector
export function collectorsJoin(delimiter: string): Collector
export function collectorsFilter(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, pred: Predicate, downstream: Collector): Collector
export function collectorsTee(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, downstreams: Collector[], merger: TeeMergeFunc): Collector
export function collectorsMap(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, mapper: MapFunc, downstream: Collector): Collector
export function collectorsWrap(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, collector: Collector): Collector
export function comparesReverse(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, cmp: GLib.CompareDataFunc | null): [ /* returnType */ GLib.CompareDataFunc, /* resultTarget */ object | null, /* resultTargetDestroyNotify */ GLib.DestroyNotify ]
export function comparesJoin(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, cmp: GLib.CompareDataFunc, cmp2: GLib.CompareDataFunc): [ /* returnType */ GLib.CompareDataFunc, /* resultTarget */ object | null, /* resultTargetDestroyNotify */ GLib.DestroyNotify ]
export function overflowIntAdd(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
export function overflowIntSub(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
export function overflowIntMul(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
export function overflowLongAdd(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
export function overflowLongSub(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
export function overflowLongMul(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
export function overflowInt32Add(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
export function overflowInt32Sub(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
export function overflowInt32Mul(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
export function overflowInt64Add(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
export function overflowInt64Sub(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
export function overflowInt64Mul(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
export function parallelSort(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: object[], compare: GLib.CompareDataFunc | null): Future
export function task(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: TaskFunc): Future
export function run(func: VoidTaskFunc): Future
export function blocking(func: VoidTaskFunc): void
export function blockingGet(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: TaskFunc): object | null
export function join(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, left: TaskFunc): [ /* returnType */ object[], /* resultLength1 */ number ]
export function atomicInt64Get(atomic: number): [ /* returnType */ number, /* atomic */ number ]
export function atomicInt64Set(atomic: number, newval: number): /* atomic */ number
export function atomicInt64Inc(atomic: number): /* atomic */ number
export function atomicInt64DecAndTest(atomic: number): [ /* returnType */ boolean, /* atomic */ number ]
export function atomicInt64CompareAndExchange(atomic: number, oldval: number, newval: number): [ /* returnType */ boolean, /* atomic */ number ]
export function atomicInt64Add(atomic: number, val: number): [ /* returnType */ number, /* atomic */ number ]
export function atomicInt64And(atomic: number, val: number): [ /* returnType */ number, /* atomic */ number ]
export function atomicInt64Or(atomic: number, val: number): [ /* returnType */ number, /* atomic */ number ]
export function atomicInt64Xor(atomic: number, val: number): [ /* returnType */ number, /* atomic */ number ]
export interface CombineFunc {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, a: object | null, b: object | null): object | null
}
export interface EachChunkFunc {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, chunk: object[]): boolean
}
export interface FlatMapFunc {
    (aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null): Gee.Iterator
}
export interface FoldFunc {
    (aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null, a: object | null): object | null
}
export interface Func {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null): void
}
export interface MapFunc {
    (aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null): object | null
}
export interface Predicate {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, g: object | null): boolean
}
export interface SupplyFunc {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): object | null
}
export interface TaskFunc {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): object | null
}
export interface TeeMergeFunc {
    (aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, results: GObject.Object[]): object | null
}
export interface VoidFunc {
    (): void
}
export interface VoidTaskFunc {
    (): void
}
export module Channel {

    // Constructor properties interface

    export interface ConstructorProperties extends Sender.ConstructorProperties, Receiver.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Channel extends Sender, Receiver {

    // Class property signals of Gpseq-1.0.Gpseq.Channel

    connect(sigName: "notify::capacity", callback: any): number
    on(sigName: "notify::capacity", callback: any): number
    once(sigName: "notify::capacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::capacity", ...args: any[]): void
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

export class Channel extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Channel

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.Channel

    constructor(config?: Channel.ConstructorProperties) 
    _init(config?: Channel.ConstructorProperties): void
    static bounded(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, proposedCapacity: number): Channel
    static unbounded(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Channel
}

export module ChannelBase {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ChannelBase extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.ChannelBase

    readonly capacity: Optional
    readonly length: number

    // Owm methods of Gpseq-1.0.Gpseq.ChannelBase

    // Has conflict: getCapacity(): Optional
    // Has conflict: getLength(): number
    // Has conflict: getIsFull(): boolean
    // Has conflict: getIsEmpty(): boolean
    // Has conflict: close(): void

    // Own virtual methods of Gpseq-1.0.Gpseq.ChannelBase

    getCapacity(): Optional
    getLength(): number
    getIsFull(): boolean
    getIsEmpty(): boolean
    close(): void

    // Class property signals of Gpseq-1.0.Gpseq.ChannelBase

    connect(sigName: "notify::capacity", callback: any): number
    on(sigName: "notify::capacity", callback: any): number
    once(sigName: "notify::capacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::capacity", ...args: any[]): void
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

export class ChannelBase {

    // Own properties of Gpseq-1.0.Gpseq.ChannelBase

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.ChannelBase

    constructor(config?: ChannelBase.ConstructorProperties) 
    _init(config?: ChannelBase.ConstructorProperties): void
}

export module Collector {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Collector extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Collector

    readonly features: CollectorFeatures

    // Owm methods of Gpseq-1.0.Gpseq.Collector

    // Has conflict: getFeatures(): CollectorFeatures
    // Has conflict: createAccumulator(): object | null
    // Has conflict: accumulate(g?: object | null, a?: object | null): void
    // Has conflict: combine(a?: object | null, b?: object | null): object | null
    // Has conflict: finish(a?: object | null): object | null

    // Own virtual methods of Gpseq-1.0.Gpseq.Collector

    getFeatures(): CollectorFeatures
    createAccumulator(): object | null
    accumulate(g?: object | null, a?: object | null): void
    combine(a?: object | null, b?: object | null): object | null
    finish(a?: object | null): object | null

    // Class property signals of Gpseq-1.0.Gpseq.Collector

    connect(sigName: "notify::features", callback: any): number
    on(sigName: "notify::features", callback: any): number
    once(sigName: "notify::features", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::features", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Collector {

    // Own properties of Gpseq-1.0.Gpseq.Collector

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.Collector

    constructor(config?: Collector.ConstructorProperties) 
    _init(config?: Collector.ConstructorProperties): void
}

export module Executor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Executor extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Executor

    readonly parallels: number

    // Owm methods of Gpseq-1.0.Gpseq.Executor

    // Has conflict: submit(task: Task): void
    // Has conflict: getParallels(): number

    // Own virtual methods of Gpseq-1.0.Gpseq.Executor

    submit(task: Task): void
    getParallels(): number

    // Class property signals of Gpseq-1.0.Gpseq.Executor

    connect(sigName: "notify::parallels", callback: any): number
    on(sigName: "notify::parallels", callback: any): number
    once(sigName: "notify::parallels", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parallels", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Executor {

    // Own properties of Gpseq-1.0.Gpseq.Executor

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.Executor

    constructor(config?: Executor.ConstructorProperties) 
    _init(config?: Executor.ConstructorProperties): void
}

export module Receiver {

    // Constructor properties interface

    export interface ConstructorProperties extends ChannelBase.ConstructorProperties, Gee.Traversable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Receiver extends ChannelBase, Gee.Traversable {

    // Owm methods of Gpseq-1.0.Gpseq.Receiver

    // Has conflict: recv(): Result
    // Has conflict: recvUntil(endTime: number): Result
    // Has conflict: tryRecv(): Result

    // Own virtual methods of Gpseq-1.0.Gpseq.Receiver

    recv(): Result
    recvUntil(endTime: number): Result
    tryRecv(): Result

    // Class property signals of Gpseq-1.0.Gpseq.Receiver

    connect(sigName: "notify::capacity", callback: any): number
    on(sigName: "notify::capacity", callback: any): number
    once(sigName: "notify::capacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::capacity", ...args: any[]): void
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

export class Receiver extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Receiver

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.Receiver

    constructor(config?: Receiver.ConstructorProperties) 
    _init(config?: Receiver.ConstructorProperties): void
}

export module Result {

    // Constructor properties interface

    export interface ConstructorProperties extends Gee.Hashable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Result extends Gee.Hashable {

    // Owm methods of Gpseq-1.0.Gpseq.Result

    getValueType(): GObject.GType
    getValue(): object | null
    getException(): GLib.Error | null
    getIsErr(): boolean
    ok(): Result
    okWith(expected: object | null, equal: Gee.EqualDataFunc | null): Result
    // Has conflict: future(): Future
    // Has conflict: get(): object | null
    // Has conflict: transform(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Result
    // Has conflict: flatMap(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Result
    // Has conflict: map(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Result
    // Has conflict: mapErr(func: any): Result
    // Has conflict: zip(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, bType: GObject.GType, bDupFunc: GObject.BoxedCopyFunc, bDestroyFunc: GLib.DestroyNotify, zipFunc: any, second: Result): Result
    // Has conflict: then(func: GLib.Func): Result
    // Has conflict: andThen(func: Func): Result

    // Own virtual methods of Gpseq-1.0.Gpseq.Result

    future(): Future
    get(): object | null
    transform(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Result
    flatMap(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Result
    map(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Result
    mapErr(func: any): Result
    zip(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, bType: GObject.GType, bDupFunc: GObject.BoxedCopyFunc, bDestroyFunc: GLib.DestroyNotify, zipFunc: any, second: Result): Result
    then(func: GLib.Func): Result
    andThen(func: Func): Result

    // Class property signals of Gpseq-1.0.Gpseq.Result

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Result extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Result

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.Result

    constructor(config?: Result.ConstructorProperties) 
    _init(config?: Result.ConstructorProperties): void
    static of(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, value?: object | null): Result
    static err(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, exception: GLib.Error): Result
}

export module Sender {

    // Constructor properties interface

    export interface ConstructorProperties extends ChannelBase.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Sender extends ChannelBase {

    // Owm methods of Gpseq-1.0.Gpseq.Sender

    // Has conflict: send(data?: object | null): Result
    // Has conflict: sendUntil(data: object | null, endTime: number): Result
    // Has conflict: trySend(data?: object | null): Result

    // Own virtual methods of Gpseq-1.0.Gpseq.Sender

    send(data?: object | null): Result
    sendUntil(data: object | null, endTime: number): Result
    trySend(data?: object | null): Result

    // Class property signals of Gpseq-1.0.Gpseq.Sender

    connect(sigName: "notify::capacity", callback: any): number
    on(sigName: "notify::capacity", callback: any): number
    once(sigName: "notify::capacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::capacity", ...args: any[]): void
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

export class Sender extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Sender

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.Sender

    constructor(config?: Sender.ConstructorProperties) 
    _init(config?: Sender.ConstructorProperties): void
}

export module Spliterator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Spliterator extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Spliterator

    readonly estimatedSize: number
    readonly isSizeKnown: boolean

    // Owm methods of Gpseq-1.0.Gpseq.Spliterator

    getElementType(): GObject.GType
    // Has conflict: trySplit(): Spliterator | null
    // Has conflict: tryAdvance(consumer: Func): boolean
    // Has conflict: getEstimatedSize(): number
    // Has conflict: getIsSizeKnown(): boolean
    // Has conflict: each(f: Func): void
    // Has conflict: eachChunk(f: EachChunkFunc): boolean

    // Own virtual methods of Gpseq-1.0.Gpseq.Spliterator

    trySplit(): Spliterator | null
    tryAdvance(consumer: Func): boolean
    getEstimatedSize(): number
    getIsSizeKnown(): boolean
    each(f: Func): void
    eachChunk(f: EachChunkFunc): boolean

    // Class property signals of Gpseq-1.0.Gpseq.Spliterator

    connect(sigName: "notify::estimated-size", callback: any): number
    on(sigName: "notify::estimated-size", callback: any): number
    once(sigName: "notify::estimated-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::estimated-size", ...args: any[]): void
    connect(sigName: "notify::is-size-known", callback: any): number
    on(sigName: "notify::is-size-known", callback: any): number
    once(sigName: "notify::is-size-known", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-size-known", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Spliterator {

    // Own properties of Gpseq-1.0.Gpseq.Spliterator

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.Spliterator

    constructor(config?: Spliterator.ConstructorProperties) 
    _init(config?: Spliterator.ConstructorProperties): void
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Spliterator
}

export module Supplier {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Supplier extends GObject.Object {

    // Owm methods of Gpseq-1.0.Gpseq.Supplier

    // Has conflict: supply(): object | null

    // Own virtual methods of Gpseq-1.0.Gpseq.Supplier

    supply(): object | null

    // Class property signals of Gpseq-1.0.Gpseq.Supplier

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Supplier {

    // Own properties of Gpseq-1.0.Gpseq.Supplier

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.Supplier

    constructor(config?: Supplier.ConstructorProperties) 
    _init(config?: Supplier.ConstructorProperties): void
    static fromFunc(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: SupplyFunc): Supplier
}

export module Task {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Task extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Task

    readonly future: Future

    // Owm methods of Gpseq-1.0.Gpseq.Task

    // Has conflict: getFuture(): Future
    // Has conflict: compute(): void
    invoke(): void

    // Own virtual methods of Gpseq-1.0.Gpseq.Task

    getFuture(): Future
    compute(): void

    // Class property signals of Gpseq-1.0.Gpseq.Task

    connect(sigName: "notify::future", callback: any): number
    on(sigName: "notify::future", callback: any): number
    once(sigName: "notify::future", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::future", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Task {

    // Own properties of Gpseq-1.0.Gpseq.Task

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.Task

    constructor(config?: Task.ConstructorProperties) 
    _init(config?: Task.ConstructorProperties): void
}

export module ThreadFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ThreadFactory extends GObject.Object {

    // Owm methods of Gpseq-1.0.Gpseq.ThreadFactory

    // Has conflict: createThread(pool: WorkerPool): WorkerThread

    // Own virtual methods of Gpseq-1.0.Gpseq.ThreadFactory

    createThread(pool: WorkerPool): WorkerThread

    // Class property signals of Gpseq-1.0.Gpseq.ThreadFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ThreadFactory {

    // Own properties of Gpseq-1.0.Gpseq.ThreadFactory

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.ThreadFactory

    constructor(config?: ThreadFactory.ConstructorProperties) 
    _init(config?: ThreadFactory.ConstructorProperties): void
}

export module ArraySpliterator {

    // Constructor properties interface

    export interface ConstructorProperties extends Spliterator.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gpseq-1.0.Gpseq.ArraySpliterator

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface ArraySpliterator extends Spliterator {

    // Own properties of Gpseq-1.0.Gpseq.ArraySpliterator

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Class property signals of Gpseq-1.0.Gpseq.ArraySpliterator

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
    connect(sigName: "notify::estimated-size", callback: any): number
    on(sigName: "notify::estimated-size", callback: any): number
    once(sigName: "notify::estimated-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::estimated-size", ...args: any[]): void
    connect(sigName: "notify::is-size-known", callback: any): number
    on(sigName: "notify::is-size-known", callback: any): number
    once(sigName: "notify::is-size-known", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-size-known", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ArraySpliterator extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.ArraySpliterator

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.ArraySpliterator

    constructor(config?: ArraySpliterator.ConstructorProperties) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: object[], start: number, stop: number) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: object[], start: number, stop: number): ArraySpliterator
    _init(config?: ArraySpliterator.ConstructorProperties): void
}

export module ForkJoinTask {

    // Constructor properties interface

    export interface ConstructorProperties extends Task.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gpseq-1.0.Gpseq.ForkJoinTask

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
        depth?: number | null
    }

}

export interface ForkJoinTask extends Task {

    // Own properties of Gpseq-1.0.Gpseq.ForkJoinTask

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly parent: ForkJoinTask
    readonly root: ForkJoinTask
    readonly isRoot: boolean
    readonly threshold: number
    readonly maxDepth: number
    depth: number
    readonly executor: Executor
    readonly promise: Promise
    readonly sharedResult: ForkJoinTaskSharedResult
    readonly isCancelled: boolean

    // Owm methods of Gpseq-1.0.Gpseq.ForkJoinTask

    getParent(): ForkJoinTask | null
    getRoot(): ForkJoinTask
    getIsRoot(): boolean
    getThreshold(): number
    getMaxDepth(): number
    getDepth(): number
    setDepth(value: number): void
    getExecutor(): Executor
    getPromise(): Promise
    join(): object | null
    fork(): void
    getSharedResult(): ForkJoinTaskSharedResult
    cancel(): void
    getIsCancelled(): boolean
    // Has conflict: compute(): void

    // Own virtual methods of Gpseq-1.0.Gpseq.ForkJoinTask

    compute(): void

    // Overloads of compute

    compute(): void

    // Class property signals of Gpseq-1.0.Gpseq.ForkJoinTask

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
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::is-root", callback: any): number
    on(sigName: "notify::is-root", callback: any): number
    once(sigName: "notify::is-root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-root", ...args: any[]): void
    connect(sigName: "notify::threshold", callback: any): number
    on(sigName: "notify::threshold", callback: any): number
    once(sigName: "notify::threshold", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::threshold", ...args: any[]): void
    connect(sigName: "notify::max-depth", callback: any): number
    on(sigName: "notify::max-depth", callback: any): number
    once(sigName: "notify::max-depth", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-depth", ...args: any[]): void
    connect(sigName: "notify::depth", callback: any): number
    on(sigName: "notify::depth", callback: any): number
    once(sigName: "notify::depth", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::executor", callback: any): number
    on(sigName: "notify::executor", callback: any): number
    once(sigName: "notify::executor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::executor", ...args: any[]): void
    connect(sigName: "notify::promise", callback: any): number
    on(sigName: "notify::promise", callback: any): number
    once(sigName: "notify::promise", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::promise", ...args: any[]): void
    connect(sigName: "notify::shared-result", callback: any): number
    on(sigName: "notify::shared-result", callback: any): number
    once(sigName: "notify::shared-result", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::shared-result", ...args: any[]): void
    connect(sigName: "notify::is-cancelled", callback: any): number
    on(sigName: "notify::is-cancelled", callback: any): number
    once(sigName: "notify::is-cancelled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-cancelled", ...args: any[]): void
    connect(sigName: "notify::future", callback: any): number
    on(sigName: "notify::future", callback: any): number
    once(sigName: "notify::future", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::future", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ForkJoinTask extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.ForkJoinTask

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.ForkJoinTask

    constructor(config?: ForkJoinTask.ConstructorProperties) 
    _init(config?: ForkJoinTask.ConstructorProperties): void
}

export interface ForkJoinTaskSharedResult {

    // Own fields of Gpseq-1.0.Gpseq.ForkJoinTaskSharedResult

    refCount: number

    // Owm methods of Gpseq-1.0.Gpseq.ForkJoinTaskSharedResult

    getReady(): boolean
    getValue(): object | null
    setValue(value?: object | null): void
    getError(): GLib.Error | null
    setError(value?: GLib.Error | null): void
    bakePromise(promise: Promise): void
}

export class ForkJoinTaskSharedResult {

    // Own properties of Gpseq-1.0.Gpseq.ForkJoinTaskSharedResult

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.ForkJoinTaskSharedResult

    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): ForkJoinTaskSharedResult
}

export module FuncTask {

    // Constructor properties interface

    export interface ConstructorProperties extends Task.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gpseq-1.0.Gpseq.FuncTask

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface FuncTask extends Task {

    // Own properties of Gpseq-1.0.Gpseq.FuncTask

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Class property signals of Gpseq-1.0.Gpseq.FuncTask

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
    connect(sigName: "notify::future", callback: any): number
    on(sigName: "notify::future", callback: any): number
    once(sigName: "notify::future", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::future", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FuncTask extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.FuncTask

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.FuncTask

    constructor(config?: FuncTask.ConstructorProperties) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: TaskFunc) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: TaskFunc): FuncTask
    _init(config?: FuncTask.ConstructorProperties): void
}

export module Future {

    // Constructor properties interface

    export interface ConstructorProperties extends Gee.Hashable.ConstructorProperties, Result.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gpseq-1.0.Gpseq.Future

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface Future extends Gee.Hashable, Result {

    // Own properties of Gpseq-1.0.Gpseq.Future

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly ready: boolean

    // Owm methods of Gpseq-1.0.Gpseq.Future

    // Has conflict: getReady(): boolean
    // Has conflict: wait(): object | null
    // Has conflict: waitUntil(endTime: number): [ /* returnType */ boolean, /* value */ object | null ]
    // Has conflict: transform(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Result

    // Own virtual methods of Gpseq-1.0.Gpseq.Future

    getReady(): boolean
    wait(): object | null
    waitUntil(endTime: number): [ /* returnType */ boolean, /* value */ object | null ]
    transform(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Result

    // Overloads of transform

    transform(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any): Result

    // Class property signals of Gpseq-1.0.Gpseq.Future

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
    connect(sigName: "notify::ready", callback: any): number
    on(sigName: "notify::ready", callback: any): number
    once(sigName: "notify::ready", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ready", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Future extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Future

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.Future

    constructor(config?: Future.ConstructorProperties) 
    _init(config?: Future.ConstructorProperties): void
    static of(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, value?: object | null): Future

    // Overloads of of

    static of(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, value?: object | null): Result
    static err(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, exception: GLib.Error): Future

    // Overloads of err

    static err(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, exception: GLib.Error): Result
    static done(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, result: Result): Future
}

export module GenericArraySpliterator {

    // Constructor properties interface

    export interface ConstructorProperties extends Spliterator.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gpseq-1.0.Gpseq.GenericArraySpliterator

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface GenericArraySpliterator extends Spliterator {

    // Own properties of Gpseq-1.0.Gpseq.GenericArraySpliterator

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Class property signals of Gpseq-1.0.Gpseq.GenericArraySpliterator

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
    connect(sigName: "notify::estimated-size", callback: any): number
    on(sigName: "notify::estimated-size", callback: any): number
    once(sigName: "notify::estimated-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::estimated-size", ...args: any[]): void
    connect(sigName: "notify::is-size-known", callback: any): number
    on(sigName: "notify::is-size-known", callback: any): number
    once(sigName: "notify::is-size-known", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-size-known", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class GenericArraySpliterator extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.GenericArraySpliterator

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.GenericArraySpliterator

    constructor(config?: GenericArraySpliterator.ConstructorProperties) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: object[], start: number, stop: number) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: object[], start: number, stop: number): GenericArraySpliterator
    _init(config?: GenericArraySpliterator.ConstructorProperties): void
}

export module IteratorSpliterator {

    // Constructor properties interface

    export interface ConstructorProperties extends Spliterator.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gpseq-1.0.Gpseq.IteratorSpliterator

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface IteratorSpliterator extends Spliterator {

    // Own properties of Gpseq-1.0.Gpseq.IteratorSpliterator

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Class property signals of Gpseq-1.0.Gpseq.IteratorSpliterator

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
    connect(sigName: "notify::estimated-size", callback: any): number
    on(sigName: "notify::estimated-size", callback: any): number
    once(sigName: "notify::estimated-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::estimated-size", ...args: any[]): void
    connect(sigName: "notify::is-size-known", callback: any): number
    on(sigName: "notify::is-size-known", callback: any): number
    once(sigName: "notify::is-size-known", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-size-known", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IteratorSpliterator extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.IteratorSpliterator

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.IteratorSpliterator

    constructor(config?: IteratorSpliterator.ConstructorProperties) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, iterator: Gee.Iterator, estimatedSize: number, sizeKnown: boolean) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, iterator: Gee.Iterator, estimatedSize: number, sizeKnown: boolean): IteratorSpliterator
    static fromCollection(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, collection: Gee.Collection): IteratorSpliterator
    _init(config?: IteratorSpliterator.ConstructorProperties): void
}

export module ListSpliterator {

    // Constructor properties interface

    export interface ConstructorProperties extends Spliterator.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gpseq-1.0.Gpseq.ListSpliterator

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface ListSpliterator extends Spliterator {

    // Own properties of Gpseq-1.0.Gpseq.ListSpliterator

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Class property signals of Gpseq-1.0.Gpseq.ListSpliterator

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
    connect(sigName: "notify::estimated-size", callback: any): number
    on(sigName: "notify::estimated-size", callback: any): number
    once(sigName: "notify::estimated-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::estimated-size", ...args: any[]): void
    connect(sigName: "notify::is-size-known", callback: any): number
    on(sigName: "notify::is-size-known", callback: any): number
    once(sigName: "notify::is-size-known", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-size-known", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ListSpliterator extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.ListSpliterator

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.ListSpliterator

    constructor(config?: ListSpliterator.ConstructorProperties) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, list: Gee.List, start: number, stop: number) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, list: Gee.List, start: number, stop: number): ListSpliterator
    _init(config?: ListSpliterator.ConstructorProperties): void
}

export module Optional {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gpseq-1.0.Gpseq.Optional

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface Optional {

    // Own properties of Gpseq-1.0.Gpseq.Optional

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly valueType: GObject.GType
    readonly value: object
    readonly isPresent: boolean

    // Owm methods of Gpseq-1.0.Gpseq.Optional

    getValueType(): GObject.GType
    getValue(): object | null
    getIsPresent(): boolean
    toString(): string
    ifPresent(consumer: GLib.Func): void
    orElse(other?: object | null): object | null
    orElseGet(supplier: SupplyFunc): object | null
    orElseThrow(errorSupplier?: SupplyFunc | null): object | null
    orElseFail(): object | null
    filter(pred: Gee.Predicate): Optional
    map(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, mapper: Gee.MapFunc): Optional

    // Class property signals of Gpseq-1.0.Gpseq.Optional

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
    connect(sigName: "notify::value-type", callback: any): number
    on(sigName: "notify::value-type", callback: any): number
    once(sigName: "notify::value-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::is-present", callback: any): number
    on(sigName: "notify::is-present", callback: any): number
    once(sigName: "notify::is-present", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-present", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Optional extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Optional

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.Optional

    constructor(config?: Optional.ConstructorProperties) 
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Optional
    static of(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, value?: object | null): Optional
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Optional
    _init(config?: Optional.ConstructorProperties): void
}

export interface Promise {

    // Own fields of Gpseq-1.0.Gpseq.Promise

    refCount: number

    // Owm methods of Gpseq-1.0.Gpseq.Promise

    getFuture(): Future
    setValue(value?: object | null): void
    setException(exception: GLib.Error): void
}

export class Promise {

    // Own properties of Gpseq-1.0.Gpseq.Promise

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.Promise

    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Promise
}

export module Seq {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gpseq-1.0.Gpseq.Seq

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface Seq {

    // Own properties of Gpseq-1.0.Gpseq.Seq

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly elementType: GObject.GType
    readonly taskEnv: TaskEnv
    readonly isClosed: boolean
    readonly isParallel: boolean

    // Owm methods of Gpseq-1.0.Gpseq.Seq

    getElementType(): GObject.GType
    getTaskEnv(): TaskEnv
    getIsClosed(): boolean
    close(): void
    getIsParallel(): boolean
    sequential(): Seq
    parallel(): Seq
    iterator(): Gee.Iterator
    spliterator(): Spliterator
    count(): Future
    distinct(hash: Gee.HashDataFunc | null, equal: Gee.EqualDataFunc | null): Seq
    allMatch(pred: Predicate): Future
    anyMatch(pred: Predicate): Future
    noneMatch(pred: Predicate): Future
    findAny(pred: Predicate): Future
    findFirst(pred: Predicate): Future
    skip(n: number): Seq
    limit(n: number): Seq
    chop(offset: number, length: number): Seq
    skipOrdered(n: number): Seq
    limitOrdered(n: number): Seq
    chopOrdered(offset: number, length: number): Seq
    filter(pred: Predicate): Seq
    fold(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, accumulator: FoldFunc, combiner: CombineFunc, identity?: object | null): Future
    reduce(accumulator: CombineFunc): Future
    map(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, mapper: MapFunc): Seq
    flatMap(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, mapper: FlatMapFunc): Seq
    max(compare: GLib.CompareDataFunc | null): Future
    min(compare: GLib.CompareDataFunc | null): Future
    orderBy(compare: GLib.CompareDataFunc | null): Seq
    reverseOrderBy(compare: GLib.CompareDataFunc | null): Seq
    foreach(f: Func): Future
    collect(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, collector: Collector): Future
    collectOrdered(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, collector: Collector): Future
    groupBy(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, classifier: MapFunc): Future
    partition(pred: Predicate): Future
    toGenericArray(): Future
    toList(): Future
    toSet(hash: Gee.HashDataFunc | null, equal: Gee.EqualDataFunc | null): Future
    toMap(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyMapper: MapFunc, valMapper: MapFunc, merger: CombineFunc | null, keyHash: Gee.HashDataFunc | null, keyEqual: Gee.EqualDataFunc | null, valueEqual: Gee.EqualDataFunc | null): Future

    // Class property signals of Gpseq-1.0.Gpseq.Seq

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
    connect(sigName: "notify::element-type", callback: any): number
    on(sigName: "notify::element-type", callback: any): number
    once(sigName: "notify::element-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: "notify::task-env", callback: any): number
    on(sigName: "notify::task-env", callback: any): number
    once(sigName: "notify::task-env", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::task-env", ...args: any[]): void
    connect(sigName: "notify::is-closed", callback: any): number
    on(sigName: "notify::is-closed", callback: any): number
    once(sigName: "notify::is-closed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-closed", ...args: any[]): void
    connect(sigName: "notify::is-parallel", callback: any): number
    on(sigName: "notify::is-parallel", callback: any): number
    once(sigName: "notify::is-parallel", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-parallel", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Seq extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Seq

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.Seq

    constructor(config?: Seq.ConstructorProperties) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, spliterator: Spliterator, env?: TaskEnv | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, spliterator: Spliterator, env?: TaskEnv | null): Seq
    _init(config?: Seq.ConstructorProperties): void
    static ofArray(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: object[], env?: TaskEnv | null): Seq
    static ofOwnedArray(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: object[], env?: TaskEnv | null): Seq
    static ofGenericArray(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: object[], env?: TaskEnv | null): Seq
    static ofIterator(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, iterator: Gee.Iterator, estimatedSize: number, sizeKnown: boolean, env?: TaskEnv | null): Seq
    static ofCollection(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, collection: Gee.Collection, env?: TaskEnv | null): Seq
    static ofList(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, list: Gee.List, env?: TaskEnv | null): Seq
    static ofSupplier(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, supplier: Supplier, env?: TaskEnv | null): Seq
    static ofSupplyFunc(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: SupplyFunc, env?: TaskEnv | null): Seq
    static iterate(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, seed: object | null, pred: Gee.Predicate, next: Gee.MapFunc, env?: TaskEnv | null): Seq
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Seq
}

export module SpliteratorTask {

    // Constructor properties interface

    export interface ConstructorProperties extends ForkJoinTask.ConstructorProperties {

        // Own constructor properties of Gpseq-1.0.Gpseq.SpliteratorTask

        rType?: GObject.GType | null
        rDupFunc?: GObject.BoxedCopyFunc | null
        rDestroyFunc?: GLib.DestroyNotify | null
        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface SpliteratorTask {

    // Own properties of Gpseq-1.0.Gpseq.SpliteratorTask

    readonly rType: GObject.GType
    readonly rDupFunc: GObject.BoxedCopyFunc
    readonly rDestroyFunc: GLib.DestroyNotify
    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly spliterator: Spliterator
    readonly leftChild: SpliteratorTask
    readonly rightChild: SpliteratorTask
    readonly isLeaf: boolean
    readonly isLeftmost: boolean
    readonly emptyResult: object

    // Owm methods of Gpseq-1.0.Gpseq.SpliteratorTask

    getSpliterator(): Spliterator
    getLeftChild(): SpliteratorTask | null
    getRightChild(): SpliteratorTask | null
    getIsLeaf(): boolean
    getIsLeftmost(): boolean
    cancelLaterNodes(): void
    // Has conflict: getEmptyResult(): object | null
    // Has conflict: leafCompute(): object | null
    // Has conflict: mergeResults(left?: object | null, right?: object | null): object | null
    // Has conflict: makeChild(spliterator: Spliterator): SpliteratorTask

    // Conflicting methods

    compute(): void

    // Overloads of compute

    compute(): void
    compute(): void

    // Own virtual methods of Gpseq-1.0.Gpseq.SpliteratorTask

    getEmptyResult(): object | null
    leafCompute(): object | null
    mergeResults(left?: object | null, right?: object | null): object | null
    makeChild(spliterator: Spliterator): SpliteratorTask

    // Class property signals of Gpseq-1.0.Gpseq.SpliteratorTask

    connect(sigName: "notify::r-type", callback: any): number
    on(sigName: "notify::r-type", callback: any): number
    once(sigName: "notify::r-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::r-type", ...args: any[]): void
    connect(sigName: "notify::r-dup-func", callback: any): number
    on(sigName: "notify::r-dup-func", callback: any): number
    once(sigName: "notify::r-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::r-dup-func", ...args: any[]): void
    connect(sigName: "notify::r-destroy-func", callback: any): number
    on(sigName: "notify::r-destroy-func", callback: any): number
    once(sigName: "notify::r-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::r-destroy-func", ...args: any[]): void
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
    connect(sigName: "notify::spliterator", callback: any): number
    on(sigName: "notify::spliterator", callback: any): number
    once(sigName: "notify::spliterator", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spliterator", ...args: any[]): void
    connect(sigName: "notify::left-child", callback: any): number
    on(sigName: "notify::left-child", callback: any): number
    once(sigName: "notify::left-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::left-child", ...args: any[]): void
    connect(sigName: "notify::right-child", callback: any): number
    on(sigName: "notify::right-child", callback: any): number
    once(sigName: "notify::right-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::right-child", ...args: any[]): void
    connect(sigName: "notify::is-leaf", callback: any): number
    on(sigName: "notify::is-leaf", callback: any): number
    once(sigName: "notify::is-leaf", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-leaf", ...args: any[]): void
    connect(sigName: "notify::is-leftmost", callback: any): number
    on(sigName: "notify::is-leftmost", callback: any): number
    once(sigName: "notify::is-leftmost", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-leftmost", ...args: any[]): void
    connect(sigName: "notify::empty-result", callback: any): number
    on(sigName: "notify::empty-result", callback: any): number
    once(sigName: "notify::empty-result", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::empty-result", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::is-root", callback: any): number
    on(sigName: "notify::is-root", callback: any): number
    once(sigName: "notify::is-root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-root", ...args: any[]): void
    connect(sigName: "notify::threshold", callback: any): number
    on(sigName: "notify::threshold", callback: any): number
    once(sigName: "notify::threshold", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::threshold", ...args: any[]): void
    connect(sigName: "notify::max-depth", callback: any): number
    on(sigName: "notify::max-depth", callback: any): number
    once(sigName: "notify::max-depth", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-depth", ...args: any[]): void
    connect(sigName: "notify::depth", callback: any): number
    on(sigName: "notify::depth", callback: any): number
    once(sigName: "notify::depth", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::executor", callback: any): number
    on(sigName: "notify::executor", callback: any): number
    once(sigName: "notify::executor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::executor", ...args: any[]): void
    connect(sigName: "notify::promise", callback: any): number
    on(sigName: "notify::promise", callback: any): number
    once(sigName: "notify::promise", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::promise", ...args: any[]): void
    connect(sigName: "notify::shared-result", callback: any): number
    on(sigName: "notify::shared-result", callback: any): number
    once(sigName: "notify::shared-result", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::shared-result", ...args: any[]): void
    connect(sigName: "notify::is-cancelled", callback: any): number
    on(sigName: "notify::is-cancelled", callback: any): number
    once(sigName: "notify::is-cancelled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-cancelled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SpliteratorTask extends ForkJoinTask {

    // Own properties of Gpseq-1.0.Gpseq.SpliteratorTask

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.SpliteratorTask

    constructor(config?: SpliteratorTask.ConstructorProperties) 
    _init(config?: SpliteratorTask.ConstructorProperties): void
}

export module SubArray {

    // Constructor properties interface

    export interface ConstructorProperties extends Gee.Traversable.ConstructorProperties, Gee.Iterable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gpseq-1.0.Gpseq.SubArray

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface SubArray extends Gee.Traversable, Gee.Iterable {

    // Own properties of Gpseq-1.0.Gpseq.SubArray

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly size: number

    // Owm methods of Gpseq-1.0.Gpseq.SubArray

    getData(): object[]

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    getSize(): number
    get(index: number): object | null
    set(index: number, item?: object | null): void
    sort(compareFunc: GLib.CompareDataFunc | null): void
    copy(start: number, src: SubArray, srcStart: number, count: number): void
    copyArray(start: number, src: object[], srcStart: number, count: number): void
    subArray(start: number, stop: number): SubArray

    // Class property signals of Gpseq-1.0.Gpseq.SubArray

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
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SubArray extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.SubArray

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.SubArray

    constructor(config?: SubArray.ConstructorProperties) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, data: object[]) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, data: object[]): SubArray
    static fromSubArray(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: SubArray, start: number, stop: number): SubArray
    _init(config?: SubArray.ConstructorProperties): void
}

export module SubArraySpliterator {

    // Constructor properties interface

    export interface ConstructorProperties extends Spliterator.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gpseq-1.0.Gpseq.SubArraySpliterator

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface SubArraySpliterator extends Spliterator {

    // Own properties of Gpseq-1.0.Gpseq.SubArraySpliterator

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Class property signals of Gpseq-1.0.Gpseq.SubArraySpliterator

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
    connect(sigName: "notify::estimated-size", callback: any): number
    on(sigName: "notify::estimated-size", callback: any): number
    once(sigName: "notify::estimated-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::estimated-size", ...args: any[]): void
    connect(sigName: "notify::is-size-known", callback: any): number
    on(sigName: "notify::is-size-known", callback: any): number
    once(sigName: "notify::is-size-known", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-size-known", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SubArraySpliterator extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.SubArraySpliterator

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.SubArraySpliterator

    constructor(config?: SubArraySpliterator.ConstructorProperties) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: SubArray, start: number, stop: number) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, array: SubArray, start: number, stop: number): SubArraySpliterator
    _init(config?: SubArraySpliterator.ConstructorProperties): void
}

export module SupplierSpliterator {

    // Constructor properties interface

    export interface ConstructorProperties extends Spliterator.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gpseq-1.0.Gpseq.SupplierSpliterator

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface SupplierSpliterator extends Spliterator {

    // Own properties of Gpseq-1.0.Gpseq.SupplierSpliterator

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Class property signals of Gpseq-1.0.Gpseq.SupplierSpliterator

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
    connect(sigName: "notify::estimated-size", callback: any): number
    on(sigName: "notify::estimated-size", callback: any): number
    once(sigName: "notify::estimated-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::estimated-size", ...args: any[]): void
    connect(sigName: "notify::is-size-known", callback: any): number
    on(sigName: "notify::is-size-known", callback: any): number
    once(sigName: "notify::is-size-known", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-size-known", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SupplierSpliterator extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.SupplierSpliterator

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.SupplierSpliterator

    constructor(config?: SupplierSpliterator.ConstructorProperties) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, supplier: Supplier) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, supplier: Supplier): SupplierSpliterator
    _init(config?: SupplierSpliterator.ConstructorProperties): void
}

export module TaskEnv {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface TaskEnv {

    // Own properties of Gpseq-1.0.Gpseq.TaskEnv

    readonly executor: Executor

    // Owm methods of Gpseq-1.0.Gpseq.TaskEnv

    // Has conflict: getExecutor(): Executor
    // Has conflict: resolveThreshold(elements: number, threads: number): number
    // Has conflict: resolveMaxDepth(elements: number, threads: number): number

    // Own virtual methods of Gpseq-1.0.Gpseq.TaskEnv

    getExecutor(): Executor
    resolveThreshold(elements: number, threads: number): number
    resolveMaxDepth(elements: number, threads: number): number

    // Class property signals of Gpseq-1.0.Gpseq.TaskEnv

    connect(sigName: "notify::executor", callback: any): number
    on(sigName: "notify::executor", callback: any): number
    once(sigName: "notify::executor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::executor", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class TaskEnv extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.TaskEnv

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.TaskEnv

    constructor(config?: TaskEnv.ConstructorProperties) 
    _init(config?: TaskEnv.ConstructorProperties): void
    static getDefaultTaskEnv(): TaskEnv
    static setDefaultTaskEnv(taskEnv: TaskEnv): void
    static getCommonTaskEnv(): TaskEnv
    static push(taskEnv: TaskEnv): void
    static pop(): void
    static apply(taskEnv: TaskEnv, func: VoidFunc): void
}

export module WaitGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface WaitGroup {

    // Owm methods of Gpseq-1.0.Gpseq.WaitGroup

    add(delta: number): void
    done(): void
    task(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: TaskFunc): Future
    run(func: VoidTaskFunc): Future
    wait(): void
    waitUntil(endTime: number): boolean

    // Class property signals of Gpseq-1.0.Gpseq.WaitGroup

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class WaitGroup extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.WaitGroup

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.WaitGroup

    constructor(config?: WaitGroup.ConstructorProperties) 
    constructor() 
    static new(): WaitGroup
    _init(config?: WaitGroup.ConstructorProperties): void
}

export module WorkerPool {

    // Constructor properties interface

    export interface ConstructorProperties extends Executor.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gpseq-1.0.Gpseq.WorkerPool

        maxThreads?: number | null
    }

}

export interface WorkerPool extends Executor {

    // Own properties of Gpseq-1.0.Gpseq.WorkerPool

    maxThreads: number
    readonly numThreads: number
    readonly factory: ThreadFactory
    readonly isTerminating: boolean
    readonly isTerminated: boolean
    readonly isTerminatingStarted: boolean

    // Owm methods of Gpseq-1.0.Gpseq.WorkerPool

    getMaxThreads(): number
    setMaxThreads(value: number): void
    getNumThreads(): number
    getFactory(): ThreadFactory
    getIsTerminating(): boolean
    getIsTerminated(): boolean
    getIsTerminatingStarted(): boolean
    terminate(): void
    terminateNow(): void
    waitTermination(): void
    waitTerminationUntil(endTime: number): void

    // Class property signals of Gpseq-1.0.Gpseq.WorkerPool

    connect(sigName: "notify::max-threads", callback: any): number
    on(sigName: "notify::max-threads", callback: any): number
    once(sigName: "notify::max-threads", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-threads", ...args: any[]): void
    connect(sigName: "notify::num-threads", callback: any): number
    on(sigName: "notify::num-threads", callback: any): number
    once(sigName: "notify::num-threads", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::num-threads", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::is-terminating", callback: any): number
    on(sigName: "notify::is-terminating", callback: any): number
    once(sigName: "notify::is-terminating", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-terminating", ...args: any[]): void
    connect(sigName: "notify::is-terminated", callback: any): number
    on(sigName: "notify::is-terminated", callback: any): number
    once(sigName: "notify::is-terminated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-terminated", ...args: any[]): void
    connect(sigName: "notify::is-terminating-started", callback: any): number
    on(sigName: "notify::is-terminating-started", callback: any): number
    once(sigName: "notify::is-terminating-started", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-terminating-started", ...args: any[]): void
    connect(sigName: "notify::parallels", callback: any): number
    on(sigName: "notify::parallels", callback: any): number
    once(sigName: "notify::parallels", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parallels", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class WorkerPool extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.WorkerPool

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.WorkerPool

    constructor(config?: WorkerPool.ConstructorProperties) 
    static withDefaults(): WorkerPool
    constructor(parallels: number, factory: ThreadFactory) 
    static new(parallels: number, factory: ThreadFactory): WorkerPool
    _init(config?: WorkerPool.ConstructorProperties): void
    static getDefaultFactory(): ThreadFactory
}

export module WorkerThread {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface WorkerThread {

    // Own properties of Gpseq-1.0.Gpseq.WorkerThread

    readonly thread: GLib.Thread
    readonly pool: WorkerPool
    readonly name: string
    readonly isStarted: boolean
    readonly isTerminated: boolean
    readonly isAlive: boolean

    // Owm methods of Gpseq-1.0.Gpseq.WorkerThread

    getThread(): GLib.Thread | null
    getPool(): WorkerPool
    getName(): string
    getIsStarted(): boolean
    getIsTerminated(): boolean
    getIsAlive(): boolean
    start(): void
    join(): void
    blocking(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: TaskFunc): object | null

    // Class property signals of Gpseq-1.0.Gpseq.WorkerThread

    connect(sigName: "notify::thread", callback: any): number
    on(sigName: "notify::thread", callback: any): number
    once(sigName: "notify::thread", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::thread", ...args: any[]): void
    connect(sigName: "notify::pool", callback: any): number
    on(sigName: "notify::pool", callback: any): number
    once(sigName: "notify::pool", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pool", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::is-started", callback: any): number
    on(sigName: "notify::is-started", callback: any): number
    once(sigName: "notify::is-started", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-started", ...args: any[]): void
    connect(sigName: "notify::is-terminated", callback: any): number
    on(sigName: "notify::is-terminated", callback: any): number
    once(sigName: "notify::is-terminated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-terminated", ...args: any[]): void
    connect(sigName: "notify::is-alive", callback: any): number
    on(sigName: "notify::is-alive", callback: any): number
    once(sigName: "notify::is-alive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-alive", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class WorkerThread extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.WorkerThread

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.WorkerThread

    constructor(config?: WorkerThread.ConstructorProperties) 
    constructor(pool: WorkerPool) 
    static new(pool: WorkerPool): WorkerThread
    _init(config?: WorkerThread.ConstructorProperties): void
    static getBy(thread: GLib.Thread): WorkerThread | null
    static self(): WorkerThread | null
}

export module Wrapper {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gpseq-1.0.Gpseq.Wrapper

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

export interface Wrapper {

    // Own properties of Gpseq-1.0.Gpseq.Wrapper

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    readonly value: object
    readonly valueType: GObject.GType

    // Owm methods of Gpseq-1.0.Gpseq.Wrapper

    getValue(): object | null
    getValueType(): GObject.GType

    // Class property signals of Gpseq-1.0.Gpseq.Wrapper

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
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: any): number
    on(sigName: "notify::value-type", callback: any): number
    once(sigName: "notify::value-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Wrapper extends GObject.Object {

    // Own properties of Gpseq-1.0.Gpseq.Wrapper

    static name: string

    // Constructors of Gpseq-1.0.Gpseq.Wrapper

    constructor(config?: Wrapper.ConstructorProperties) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, value?: object | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, value?: object | null): Wrapper
    _init(config?: Wrapper.ConstructorProperties): void
}

export interface ArraySpliteratorClass {
}

export abstract class ArraySpliteratorClass {

    // Own properties of Gpseq-1.0.Gpseq.ArraySpliteratorClass

    static name: string
}

export interface ArraySpliteratorPrivate {
}

export class ArraySpliteratorPrivate {

    // Own properties of Gpseq-1.0.Gpseq.ArraySpliteratorPrivate

    static name: string
}

export interface ForkJoinTaskClass {

    // Own fields of Gpseq-1.0.Gpseq.ForkJoinTaskClass

    compute: (self: ForkJoinTask) => void
}

export abstract class ForkJoinTaskClass {

    // Own properties of Gpseq-1.0.Gpseq.ForkJoinTaskClass

    static name: string
}

export interface ForkJoinTaskPrivate {
}

export class ForkJoinTaskPrivate {

    // Own properties of Gpseq-1.0.Gpseq.ForkJoinTaskPrivate

    static name: string
}

export interface ForkJoinTaskSharedResultClass {
}

export abstract class ForkJoinTaskSharedResultClass {

    // Own properties of Gpseq-1.0.Gpseq.ForkJoinTaskSharedResultClass

    static name: string
}

export interface ForkJoinTaskSharedResultPrivate {
}

export class ForkJoinTaskSharedResultPrivate {

    // Own properties of Gpseq-1.0.Gpseq.ForkJoinTaskSharedResultPrivate

    static name: string
}

export interface FuncTaskClass {
}

export abstract class FuncTaskClass {

    // Own properties of Gpseq-1.0.Gpseq.FuncTaskClass

    static name: string
}

export interface FuncTaskPrivate {
}

export class FuncTaskPrivate {

    // Own properties of Gpseq-1.0.Gpseq.FuncTaskPrivate

    static name: string
}

export interface FutureClass {

    // Own fields of Gpseq-1.0.Gpseq.FutureClass

    wait: (self: Future) => object | null
    waitUntil: (self: Future, endTime: number) => [ /* returnType */ boolean, /* value */ object | null ]
    transform: (self: Future, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Result
}

export abstract class FutureClass {

    // Own properties of Gpseq-1.0.Gpseq.FutureClass

    static name: string
}

export interface FuturePrivate {
}

export class FuturePrivate {

    // Own properties of Gpseq-1.0.Gpseq.FuturePrivate

    static name: string
}

export interface GenericArraySpliteratorClass {
}

export abstract class GenericArraySpliteratorClass {

    // Own properties of Gpseq-1.0.Gpseq.GenericArraySpliteratorClass

    static name: string
}

export interface GenericArraySpliteratorPrivate {
}

export class GenericArraySpliteratorPrivate {

    // Own properties of Gpseq-1.0.Gpseq.GenericArraySpliteratorPrivate

    static name: string
}

export interface IteratorSpliteratorClass {
}

export abstract class IteratorSpliteratorClass {

    // Own properties of Gpseq-1.0.Gpseq.IteratorSpliteratorClass

    static name: string
}

export interface IteratorSpliteratorPrivate {
}

export class IteratorSpliteratorPrivate {

    // Own properties of Gpseq-1.0.Gpseq.IteratorSpliteratorPrivate

    static name: string
}

export interface ListSpliteratorClass {
}

export abstract class ListSpliteratorClass {

    // Own properties of Gpseq-1.0.Gpseq.ListSpliteratorClass

    static name: string
}

export interface ListSpliteratorPrivate {
}

export class ListSpliteratorPrivate {

    // Own properties of Gpseq-1.0.Gpseq.ListSpliteratorPrivate

    static name: string
}

export interface OptionalClass {
}

export abstract class OptionalClass {

    // Own properties of Gpseq-1.0.Gpseq.OptionalClass

    static name: string
}

export interface OptionalPrivate {
}

export class OptionalPrivate {

    // Own properties of Gpseq-1.0.Gpseq.OptionalPrivate

    static name: string
}

export interface PromiseClass {
}

export abstract class PromiseClass {

    // Own properties of Gpseq-1.0.Gpseq.PromiseClass

    static name: string
}

export interface PromisePrivate {
}

export class PromisePrivate {

    // Own properties of Gpseq-1.0.Gpseq.PromisePrivate

    static name: string
}

export interface SeqClass {
}

export abstract class SeqClass {

    // Own properties of Gpseq-1.0.Gpseq.SeqClass

    static name: string
}

export interface SeqPrivate {
}

export class SeqPrivate {

    // Own properties of Gpseq-1.0.Gpseq.SeqPrivate

    static name: string
}

export interface SpliteratorTaskClass {

    // Own fields of Gpseq-1.0.Gpseq.SpliteratorTaskClass

    leafCompute: (self: SpliteratorTask) => object | null
    mergeResults: (self: SpliteratorTask, left?: object | null, right?: object | null) => object | null
    makeChild: (self: SpliteratorTask, spliterator: Spliterator) => SpliteratorTask
}

export abstract class SpliteratorTaskClass {

    // Own properties of Gpseq-1.0.Gpseq.SpliteratorTaskClass

    static name: string
}

export interface SpliteratorTaskPrivate {
}

export class SpliteratorTaskPrivate {

    // Own properties of Gpseq-1.0.Gpseq.SpliteratorTaskPrivate

    static name: string
}

export interface SubArrayClass {
}

export abstract class SubArrayClass {

    // Own properties of Gpseq-1.0.Gpseq.SubArrayClass

    static name: string
}

export interface SubArrayPrivate {
}

export class SubArrayPrivate {

    // Own properties of Gpseq-1.0.Gpseq.SubArrayPrivate

    static name: string
}

export interface SubArraySpliteratorClass {
}

export abstract class SubArraySpliteratorClass {

    // Own properties of Gpseq-1.0.Gpseq.SubArraySpliteratorClass

    static name: string
}

export interface SubArraySpliteratorPrivate {
}

export class SubArraySpliteratorPrivate {

    // Own properties of Gpseq-1.0.Gpseq.SubArraySpliteratorPrivate

    static name: string
}

export interface SupplierSpliteratorClass {
}

export abstract class SupplierSpliteratorClass {

    // Own properties of Gpseq-1.0.Gpseq.SupplierSpliteratorClass

    static name: string
}

export interface SupplierSpliteratorPrivate {
}

export class SupplierSpliteratorPrivate {

    // Own properties of Gpseq-1.0.Gpseq.SupplierSpliteratorPrivate

    static name: string
}

export interface TaskEnvClass {

    // Own fields of Gpseq-1.0.Gpseq.TaskEnvClass

    resolveThreshold: (self: TaskEnv, elements: number, threads: number) => number
    resolveMaxDepth: (self: TaskEnv, elements: number, threads: number) => number
}

export abstract class TaskEnvClass {

    // Own properties of Gpseq-1.0.Gpseq.TaskEnvClass

    static name: string
}

export interface TaskEnvPrivate {
}

export class TaskEnvPrivate {

    // Own properties of Gpseq-1.0.Gpseq.TaskEnvPrivate

    static name: string
}

export interface WaitGroupClass {
}

export abstract class WaitGroupClass {

    // Own properties of Gpseq-1.0.Gpseq.WaitGroupClass

    static name: string
}

export interface WaitGroupPrivate {
}

export class WaitGroupPrivate {

    // Own properties of Gpseq-1.0.Gpseq.WaitGroupPrivate

    static name: string
}

export interface WorkerPoolClass {
}

export abstract class WorkerPoolClass {

    // Own properties of Gpseq-1.0.Gpseq.WorkerPoolClass

    static name: string
}

export interface WorkerPoolPrivate {
}

export class WorkerPoolPrivate {

    // Own properties of Gpseq-1.0.Gpseq.WorkerPoolPrivate

    static name: string
}

export interface WorkerThreadClass {
}

export abstract class WorkerThreadClass {

    // Own properties of Gpseq-1.0.Gpseq.WorkerThreadClass

    static name: string
}

export interface WorkerThreadPrivate {
}

export class WorkerThreadPrivate {

    // Own properties of Gpseq-1.0.Gpseq.WorkerThreadPrivate

    static name: string
}

export interface WrapperClass {
}

export abstract class WrapperClass {

    // Own properties of Gpseq-1.0.Gpseq.WrapperClass

    static name: string
}

export interface WrapperPrivate {
}

export class WrapperPrivate {

    // Own properties of Gpseq-1.0.Gpseq.WrapperPrivate

    static name: string
}

export interface ChannelIface {
}

export abstract class ChannelIface {

    // Own properties of Gpseq-1.0.Gpseq.ChannelIface

    static name: string
}

export interface ChannelBaseIface {

    // Own fields of Gpseq-1.0.Gpseq.ChannelBaseIface

    close: (self: ChannelBase) => void
    getCapacity: (self: ChannelBase) => Optional
    getLength: (self: ChannelBase) => number
    getIsFull: (self: ChannelBase) => boolean
    getIsEmpty: (self: ChannelBase) => boolean
}

export abstract class ChannelBaseIface {

    // Own properties of Gpseq-1.0.Gpseq.ChannelBaseIface

    static name: string
}

export interface CollectorIface {

    // Own fields of Gpseq-1.0.Gpseq.CollectorIface

    createAccumulator: (self: Collector) => object | null
    accumulate: (self: Collector, g?: object | null, a?: object | null) => void
    combine: (self: Collector, a?: object | null, b?: object | null) => object | null
    finish: (self: Collector, a?: object | null) => object | null
    getFeatures: (self: Collector) => CollectorFeatures
}

export abstract class CollectorIface {

    // Own properties of Gpseq-1.0.Gpseq.CollectorIface

    static name: string
}

export interface ExecutorIface {

    // Own fields of Gpseq-1.0.Gpseq.ExecutorIface

    submit: (self: Executor, task: Task) => void
    getParallels: (self: Executor) => number
}

export abstract class ExecutorIface {

    // Own properties of Gpseq-1.0.Gpseq.ExecutorIface

    static name: string
}

export interface ReceiverIface {

    // Own fields of Gpseq-1.0.Gpseq.ReceiverIface

    recv: (self: Receiver) => Result
    recvUntil: (self: Receiver, endTime: number) => Result
    tryRecv: (self: Receiver) => Result
}

export abstract class ReceiverIface {

    // Own properties of Gpseq-1.0.Gpseq.ReceiverIface

    static name: string
}

export interface ResultIface {

    // Own fields of Gpseq-1.0.Gpseq.ResultIface

    future: (self: Result) => Future
    get: (self: Result) => object | null
    transform: (self: Result, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Result
    flatMap: (self: Result, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Result
    map: (self: Result, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, func: any) => Result
    mapErr: (self: Result, func: any) => Result
    zip: (self: Result, aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, bType: GObject.GType, bDupFunc: GObject.BoxedCopyFunc, bDestroyFunc: GLib.DestroyNotify, zipFunc: any, second: Result) => Result
    then: (self: Result, func: GLib.Func) => Result
    andThen: (self: Result, func: Func) => Result
}

export abstract class ResultIface {

    // Own properties of Gpseq-1.0.Gpseq.ResultIface

    static name: string
}

export interface SenderIface {

    // Own fields of Gpseq-1.0.Gpseq.SenderIface

    send: (self: Sender, data?: object | null) => Result
    sendUntil: (self: Sender, data: object | null, endTime: number) => Result
    trySend: (self: Sender, data?: object | null) => Result
}

export abstract class SenderIface {

    // Own properties of Gpseq-1.0.Gpseq.SenderIface

    static name: string
}

export interface SpliteratorIface {

    // Own fields of Gpseq-1.0.Gpseq.SpliteratorIface

    trySplit: (self: Spliterator) => Spliterator | null
    tryAdvance: (self: Spliterator, consumer: Func) => boolean
    each: (self: Spliterator, f: Func) => void
    eachChunk: (self: Spliterator, f: EachChunkFunc) => boolean
    getEstimatedSize: (self: Spliterator) => number
    getIsSizeKnown: (self: Spliterator) => boolean
}

export abstract class SpliteratorIface {

    // Own properties of Gpseq-1.0.Gpseq.SpliteratorIface

    static name: string
}

export interface SupplierIface {

    // Own fields of Gpseq-1.0.Gpseq.SupplierIface

    supply: (self: Supplier) => object | null
}

export abstract class SupplierIface {

    // Own properties of Gpseq-1.0.Gpseq.SupplierIface

    static name: string
}

export interface TaskIface {

    // Own fields of Gpseq-1.0.Gpseq.TaskIface

    compute: (self: Task) => void
    getFuture: (self: Task) => Future
}

export abstract class TaskIface {

    // Own properties of Gpseq-1.0.Gpseq.TaskIface

    static name: string
}

export interface ThreadFactoryIface {

    // Own fields of Gpseq-1.0.Gpseq.ThreadFactoryIface

    createThread: (self: ThreadFactory, pool: WorkerPool) => WorkerThread
}

export abstract class ThreadFactoryIface {

    // Own properties of Gpseq-1.0.Gpseq.ThreadFactoryIface

    static name: string
}

export interface CacheLinePad {
}

export class CacheLinePad {

    // Own properties of Gpseq-1.0.Gpseq.CacheLinePad

    static name: string
}
