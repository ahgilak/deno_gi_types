
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gee-1.0
 */

import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

export function functionsGetEqualFuncFor(t: GObject.GType): GLib.EqualFunc
export function functionsGetHashFuncFor(t: GObject.GType): GLib.HashFunc
export function functionsGetCompareFuncFor(t: GObject.GType): GLib.CompareFunc
export function directCompare(val1?: object | null, val2?: object | null): number
export module BidirIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends Iterator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface BidirIterator extends Iterator {

    // Owm methods of Gee-1.0.Gee.BidirIterator

    // Has conflict: previous(): boolean
    // Has conflict: hasPrevious(): boolean
    // Has conflict: last(): boolean

    // Own virtual methods of Gee-1.0.Gee.BidirIterator

    previous(): boolean
    hasPrevious(): boolean
    last(): boolean

    // Class property signals of Gee-1.0.Gee.BidirIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class BidirIterator extends GObject.Object {

    // Own properties of Gee-1.0.Gee.BidirIterator

    static name: string

    // Constructors of Gee-1.0.Gee.BidirIterator

    constructor(config?: BidirIterator.ConstructorProperties) 
    _init(config?: BidirIterator.ConstructorProperties): void
}

export module Collection {

    // Constructor properties interface

    export interface ConstructorProperties extends Iterable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Collection extends Iterable {

    // Own properties of Gee-1.0.Gee.Collection

    readonly size: number
    readonly isEmpty: boolean
    readonly readOnlyView: Collection

    // Owm methods of Gee-1.0.Gee.Collection

    // Has conflict: contains(item?: object | null): boolean
    // Has conflict: add(item?: object | null): boolean
    // Has conflict: remove(item?: object | null): boolean
    // Has conflict: clear(): void
    // Has conflict: addAll(collection: Collection): boolean
    // Has conflict: containsAll(collection: Collection): boolean
    // Has conflict: removeAll(collection: Collection): boolean
    // Has conflict: retainAll(collection: Collection): boolean
    // Has conflict: toArray(): object[]

    // Own virtual methods of Gee-1.0.Gee.Collection

    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]

    // Class property signals of Gee-1.0.Gee.Collection

    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: any): number
    on(sigName: "notify::is-empty", callback: any): number
    once(sigName: "notify::is-empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: any): number
    on(sigName: "notify::element-type", callback: any): number
    once(sigName: "notify::element-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Collection extends GObject.Object {

    // Own properties of Gee-1.0.Gee.Collection

    static name: string

    // Constructors of Gee-1.0.Gee.Collection

    constructor(config?: Collection.ConstructorProperties) 
    _init(config?: Collection.ConstructorProperties): void
    static empty(): Collection
}

export module Comparable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Comparable extends GObject.Object {

    // Owm methods of Gee-1.0.Gee.Comparable

    // Has conflict: compareTo(object?: object | null): number

    // Own virtual methods of Gee-1.0.Gee.Comparable

    compareTo(object?: object | null): number

    // Class property signals of Gee-1.0.Gee.Comparable

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Comparable {

    // Own properties of Gee-1.0.Gee.Comparable

    static name: string

    // Constructors of Gee-1.0.Gee.Comparable

    constructor(config?: Comparable.ConstructorProperties) 
    _init(config?: Comparable.ConstructorProperties): void
}

export module Deque {

    // Constructor properties interface

    export interface ConstructorProperties extends Queue.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Deque extends Queue {

    // Owm methods of Gee-1.0.Gee.Deque

    // Has conflict: offerHead(element?: object | null): boolean
    // Has conflict: peekHead(): object | null
    // Has conflict: pollHead(): object | null
    // Has conflict: drainHead(recipient: Collection, amount: number): number
    // Has conflict: offerTail(element?: object | null): boolean
    // Has conflict: peekTail(): object | null
    // Has conflict: pollTail(): object | null
    // Has conflict: drainTail(recipient: Collection, amount: number): number

    // Own virtual methods of Gee-1.0.Gee.Deque

    offerHead(element?: object | null): boolean
    peekHead(): object | null
    pollHead(): object | null
    drainHead(recipient: Collection, amount: number): number
    offerTail(element?: object | null): boolean
    peekTail(): object | null
    pollTail(): object | null
    drainTail(recipient: Collection, amount: number): number

    // Class property signals of Gee-1.0.Gee.Deque

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
    connect(sigName: "notify::is-empty", callback: any): number
    on(sigName: "notify::is-empty", callback: any): number
    once(sigName: "notify::is-empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: any): number
    on(sigName: "notify::element-type", callback: any): number
    once(sigName: "notify::element-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Deque extends GObject.Object {

    // Own properties of Gee-1.0.Gee.Deque

    static name: string

    // Constructors of Gee-1.0.Gee.Deque

    constructor(config?: Deque.ConstructorProperties) 
    _init(config?: Deque.ConstructorProperties): void
}

export module Iterable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Iterable extends GObject.Object {

    // Own properties of Gee-1.0.Gee.Iterable

    readonly elementType: GObject.GType

    // Owm methods of Gee-1.0.Gee.Iterable

    // Has conflict: iterator(): Iterator

    // Own virtual methods of Gee-1.0.Gee.Iterable

    iterator(): Iterator

    // Class property signals of Gee-1.0.Gee.Iterable

    connect(sigName: "notify::element-type", callback: any): number
    on(sigName: "notify::element-type", callback: any): number
    once(sigName: "notify::element-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Iterable {

    // Own properties of Gee-1.0.Gee.Iterable

    static name: string

    // Constructors of Gee-1.0.Gee.Iterable

    constructor(config?: Iterable.ConstructorProperties) 
    _init(config?: Iterable.ConstructorProperties): void
}

export module Iterator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Iterator extends GObject.Object {

    // Owm methods of Gee-1.0.Gee.Iterator

    // Has conflict: next(): boolean
    // Has conflict: hasNext(): boolean
    // Has conflict: first(): boolean
    // Has conflict: get(): object | null
    // Has conflict: remove(): void

    // Own virtual methods of Gee-1.0.Gee.Iterator

    next(): boolean
    hasNext(): boolean
    first(): boolean
    get(): object | null
    remove(): void

    // Class property signals of Gee-1.0.Gee.Iterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Iterator {

    // Own properties of Gee-1.0.Gee.Iterator

    static name: string

    // Constructors of Gee-1.0.Gee.Iterator

    constructor(config?: Iterator.ConstructorProperties) 
    _init(config?: Iterator.ConstructorProperties): void
}

export module List {

    // Constructor properties interface

    export interface ConstructorProperties extends Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface List extends Collection {

    // Own properties of Gee-1.0.Gee.List

    readonly readOnlyView: any

    // Owm methods of Gee-1.0.Gee.List

    // Has conflict: listIterator(): ListIterator
    // Has conflict: get(index: number): object | null
    // Has conflict: set(index: number, item?: object | null): void
    // Has conflict: indexOf(item?: object | null): number
    // Has conflict: insert(index: number, item?: object | null): void
    // Has conflict: removeAt(index: number): object | null
    // Has conflict: slice(start: number, stop: number): List | null
    // Has conflict: first(): object | null
    // Has conflict: last(): object | null
    // Has conflict: insertAll(index: number, collection: Collection): void
    // Has conflict: sort(compareFunc?: GLib.CompareFunc | null): void

    // Own virtual methods of Gee-1.0.Gee.List

    listIterator(): ListIterator
    get(index: number): object | null
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null
    slice(start: number, stop: number): List | null
    first(): object | null
    last(): object | null
    insertAll(index: number, collection: Collection): void
    sort(compareFunc?: GLib.CompareFunc | null): void

    // Class property signals of Gee-1.0.Gee.List

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
    connect(sigName: "notify::is-empty", callback: any): number
    on(sigName: "notify::is-empty", callback: any): number
    once(sigName: "notify::is-empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: any): number
    on(sigName: "notify::element-type", callback: any): number
    once(sigName: "notify::element-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class List extends GObject.Object {

    // Own properties of Gee-1.0.Gee.List

    static name: string

    // Constructors of Gee-1.0.Gee.List

    constructor(config?: List.ConstructorProperties) 
    _init(config?: List.ConstructorProperties): void
    static empty(): List

    // Overloads of empty

    static empty(): Collection
}

export module ListIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends BidirIterator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface ListIterator extends BidirIterator {

    // Owm methods of Gee-1.0.Gee.ListIterator

    // Has conflict: set(item?: object | null): void
    // Has conflict: insert(item?: object | null): void
    // Has conflict: add(item?: object | null): void
    // Has conflict: index(): number

    // Own virtual methods of Gee-1.0.Gee.ListIterator

    set(item?: object | null): void
    insert(item?: object | null): void
    add(item?: object | null): void
    index(): number

    // Class property signals of Gee-1.0.Gee.ListIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ListIterator extends GObject.Object {

    // Own properties of Gee-1.0.Gee.ListIterator

    static name: string

    // Constructors of Gee-1.0.Gee.ListIterator

    constructor(config?: ListIterator.ConstructorProperties) 
    _init(config?: ListIterator.ConstructorProperties): void
}

export module Map {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Iterable.ConstructorProperties {
    }

}

export interface Map extends GObject.Object, Iterable {

    // Own properties of Gee-1.0.Gee.Map

    readonly size: number
    readonly isEmpty: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly readOnlyView: Map
    readonly keyType: GObject.GType
    readonly valueType: GObject.GType

    // Owm methods of Gee-1.0.Gee.Map

    // Has conflict: hasKey(key?: object | null): boolean
    // Has conflict: contains(key?: object | null): boolean
    // Has conflict: has(key?: object | null, value?: object | null): boolean
    // Has conflict: get(key?: object | null): object | null
    // Has conflict: set(key?: object | null, value?: object | null): void
    // Has conflict: unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    // Has conflict: remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    // Has conflict: clear(): void
    // Has conflict: mapIterator(): MapIterator
    // Has conflict: setAll(map: Map): void
    // Has conflict: unsetAll(map: Map): boolean
    // Has conflict: removeAll(map: Map): boolean
    // Has conflict: hasAll(map: Map): boolean
    // Has conflict: containsAll(map: Map): boolean

    // Own virtual methods of Gee-1.0.Gee.Map

    hasKey(key?: object | null): boolean
    contains(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    remove(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    clear(): void
    mapIterator(): MapIterator
    setAll(map: Map): void
    unsetAll(map: Map): boolean
    removeAll(map: Map): boolean
    hasAll(map: Map): boolean
    containsAll(map: Map): boolean

    // Class property signals of Gee-1.0.Gee.Map

    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: any): number
    on(sigName: "notify::is-empty", callback: any): number
    once(sigName: "notify::is-empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
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
    connect(sigName: "notify::key-type", callback: any): number
    on(sigName: "notify::key-type", callback: any): number
    once(sigName: "notify::key-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::key-type", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: any): number
    on(sigName: "notify::value-type", callback: any): number
    once(sigName: "notify::value-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: any): number
    on(sigName: "notify::element-type", callback: any): number
    once(sigName: "notify::element-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Map {

    // Own properties of Gee-1.0.Gee.Map

    static name: string

    // Constructors of Gee-1.0.Gee.Map

    constructor(config?: Map.ConstructorProperties) 
    _init(config?: Map.ConstructorProperties): void
    static empty(): Map
}

export module MapIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MapIterator extends GObject.Object {

    // Owm methods of Gee-1.0.Gee.MapIterator

    // Has conflict: next(): boolean
    // Has conflict: hasNext(): boolean
    // Has conflict: first(): boolean
    // Has conflict: getKey(): object | null
    // Has conflict: getValue(): object | null
    // Has conflict: setValue(value?: object | null): void
    // Has conflict: unset(): void

    // Own virtual methods of Gee-1.0.Gee.MapIterator

    next(): boolean
    hasNext(): boolean
    first(): boolean
    getKey(): object | null
    getValue(): object | null
    setValue(value?: object | null): void
    unset(): void

    // Class property signals of Gee-1.0.Gee.MapIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MapIterator {

    // Own properties of Gee-1.0.Gee.MapIterator

    static name: string

    // Constructors of Gee-1.0.Gee.MapIterator

    constructor(config?: MapIterator.ConstructorProperties) 
    _init(config?: MapIterator.ConstructorProperties): void
}

export module MultiMap {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MultiMap extends GObject.Object {

    // Own properties of Gee-1.0.Gee.MultiMap

    readonly size: number

    // Owm methods of Gee-1.0.Gee.MultiMap

    // Has conflict: getKeys(): Set
    // Has conflict: getAllKeys(): MultiSet
    // Has conflict: getValues(): Collection
    // Has conflict: contains(key?: object | null): boolean
    // Has conflict: get(key?: object | null): Collection
    // Has conflict: set(key?: object | null, value?: object | null): void
    // Has conflict: remove(key?: object | null, value?: object | null): boolean
    // Has conflict: removeAll(key?: object | null): boolean
    // Has conflict: clear(): void

    // Own virtual methods of Gee-1.0.Gee.MultiMap

    getKeys(): Set
    getAllKeys(): MultiSet
    getValues(): Collection
    contains(key?: object | null): boolean
    get(key?: object | null): Collection
    set(key?: object | null, value?: object | null): void
    remove(key?: object | null, value?: object | null): boolean
    removeAll(key?: object | null): boolean
    clear(): void

    // Class property signals of Gee-1.0.Gee.MultiMap

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

export class MultiMap {

    // Own properties of Gee-1.0.Gee.MultiMap

    static name: string

    // Constructors of Gee-1.0.Gee.MultiMap

    constructor(config?: MultiMap.ConstructorProperties) 
    _init(config?: MultiMap.ConstructorProperties): void
}

export module MultiSet {

    // Constructor properties interface

    export interface ConstructorProperties extends Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface MultiSet extends Collection {

    // Owm methods of Gee-1.0.Gee.MultiSet

    // Has conflict: count(item?: object | null): number

    // Own virtual methods of Gee-1.0.Gee.MultiSet

    count(item?: object | null): number

    // Class property signals of Gee-1.0.Gee.MultiSet

    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: any): number
    on(sigName: "notify::is-empty", callback: any): number
    once(sigName: "notify::is-empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: any): number
    on(sigName: "notify::element-type", callback: any): number
    once(sigName: "notify::element-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MultiSet extends GObject.Object {

    // Own properties of Gee-1.0.Gee.MultiSet

    static name: string

    // Constructors of Gee-1.0.Gee.MultiSet

    constructor(config?: MultiSet.ConstructorProperties) 
    _init(config?: MultiSet.ConstructorProperties): void
}

export module Queue {

    // Constructor properties interface

    export interface ConstructorProperties extends Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Queue extends Collection {

    // Own properties of Gee-1.0.Gee.Queue

    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean

    // Owm methods of Gee-1.0.Gee.Queue

    // Has conflict: offer(element?: object | null): boolean
    // Has conflict: peek(): object | null
    // Has conflict: poll(): object | null
    // Has conflict: drain(recipient: Collection, amount: number): number

    // Own virtual methods of Gee-1.0.Gee.Queue

    offer(element?: object | null): boolean
    peek(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number

    // Class property signals of Gee-1.0.Gee.Queue

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
    connect(sigName: "notify::is-empty", callback: any): number
    on(sigName: "notify::is-empty", callback: any): number
    once(sigName: "notify::is-empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: any): number
    on(sigName: "notify::element-type", callback: any): number
    once(sigName: "notify::element-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Queue extends GObject.Object {

    // Own properties of Gee-1.0.Gee.Queue

    static name: string

    // Constructors of Gee-1.0.Gee.Queue

    constructor(config?: Queue.ConstructorProperties) 
    _init(config?: Queue.ConstructorProperties): void
}

export module Set {

    // Constructor properties interface

    export interface ConstructorProperties extends Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Set extends Collection {

    // Own properties of Gee-1.0.Gee.Set

    readonly readOnlyView: any

    // Class property signals of Gee-1.0.Gee.Set

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
    connect(sigName: "notify::is-empty", callback: any): number
    on(sigName: "notify::is-empty", callback: any): number
    once(sigName: "notify::is-empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: any): number
    on(sigName: "notify::element-type", callback: any): number
    once(sigName: "notify::element-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Set extends GObject.Object {

    // Own properties of Gee-1.0.Gee.Set

    static name: string

    // Constructors of Gee-1.0.Gee.Set

    constructor(config?: Set.ConstructorProperties) 
    _init(config?: Set.ConstructorProperties): void
    static empty(): Set

    // Overloads of empty

    static empty(): Collection
}

export module SortedSet {

    // Constructor properties interface

    export interface ConstructorProperties extends Set.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface SortedSet extends Set {

    // Conflicting properties

    readOnlyView: any

    // Owm methods of Gee-1.0.Gee.SortedSet

    // Has conflict: first(): object | null
    // Has conflict: last(): object | null
    // Has conflict: bidirIterator(): BidirIterator
    // Has conflict: iteratorAt(element?: object | null): BidirIterator | null
    // Has conflict: lower(element?: object | null): object | null
    // Has conflict: higher(element?: object | null): object | null
    // Has conflict: floor(element?: object | null): object | null
    // Has conflict: ceil(element?: object | null): object | null
    // Has conflict: headSet(before?: object | null): SortedSet
    // Has conflict: tailSet(after?: object | null): SortedSet
    // Has conflict: subSet(from?: object | null, to?: object | null): SortedSet

    // Own virtual methods of Gee-1.0.Gee.SortedSet

    first(): object | null
    last(): object | null
    bidirIterator(): BidirIterator
    iteratorAt(element?: object | null): BidirIterator | null
    lower(element?: object | null): object | null
    higher(element?: object | null): object | null
    floor(element?: object | null): object | null
    ceil(element?: object | null): object | null
    headSet(before?: object | null): SortedSet
    tailSet(after?: object | null): SortedSet
    subSet(from?: object | null, to?: object | null): SortedSet

    // Class property signals of Gee-1.0.Gee.SortedSet

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
    connect(sigName: "notify::is-empty", callback: any): number
    on(sigName: "notify::is-empty", callback: any): number
    once(sigName: "notify::is-empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: any): number
    on(sigName: "notify::element-type", callback: any): number
    once(sigName: "notify::element-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SortedSet extends GObject.Object {

    // Own properties of Gee-1.0.Gee.SortedSet

    static name: string

    // Constructors of Gee-1.0.Gee.SortedSet

    constructor(config?: SortedSet.ConstructorProperties) 
    _init(config?: SortedSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(): Set

    // Overloads of empty

    static empty(): Collection
    static empty(): Collection
}

export module AbstractCollection {

    // Constructor properties interface

    export interface ConstructorProperties extends Iterable.ConstructorProperties, Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface AbstractCollection extends Iterable, Collection {

    // Own properties of Gee-1.0.Gee.AbstractCollection

    readonly size: number
    readonly isEmpty: boolean
    readonly readOnlyView: Collection

    // Own fields of Gee-1.0.Gee.AbstractCollection

    parentInstance: GObject.Object
    priv: AbstractCollectionPrivate

    // Owm methods of Gee-1.0.Gee.AbstractCollection

    // Has conflict: contains(item?: object | null): boolean
    // Has conflict: add(item?: object | null): boolean
    // Has conflict: remove(item?: object | null): boolean
    // Has conflict: clear(): void
    // Has conflict: toArray(): object[]
    // Has conflict: addAll(collection: Collection): boolean
    // Has conflict: containsAll(collection: Collection): boolean
    // Has conflict: removeAll(collection: Collection): boolean
    // Has conflict: retainAll(collection: Collection): boolean
    // Has conflict: iterator(): Iterator

    // Own virtual methods of Gee-1.0.Gee.AbstractCollection

    contains(item?: object | null): boolean

    // Overloads of contains

    contains(item?: object | null): boolean
    add(item?: object | null): boolean

    // Overloads of add

    add(item?: object | null): boolean
    remove(item?: object | null): boolean

    // Overloads of remove

    remove(item?: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    toArray(): object[]

    // Overloads of toArray

    toArray(): object[]
    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean

    // Overloads of containsAll

    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean

    // Overloads of removeAll

    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean

    // Overloads of retainAll

    retainAll(collection: Collection): boolean
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator

    // Class property signals of Gee-1.0.Gee.AbstractCollection

    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: any): number
    on(sigName: "notify::is-empty", callback: any): number
    once(sigName: "notify::is-empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: any): number
    on(sigName: "notify::element-type", callback: any): number
    once(sigName: "notify::element-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class AbstractCollection extends GObject.Object {

    // Own properties of Gee-1.0.Gee.AbstractCollection

    static name: string

    // Constructors of Gee-1.0.Gee.AbstractCollection

    constructor(config?: AbstractCollection.ConstructorProperties) 
    _init(config?: AbstractCollection.ConstructorProperties): void
}

export module AbstractList {

    // Constructor properties interface

    export interface ConstructorProperties extends List.ConstructorProperties, AbstractCollection.ConstructorProperties {
    }

}

export interface AbstractList extends List {

    // Own properties of Gee-1.0.Gee.AbstractList

    readonly readOnlyView: any

    // Own fields of Gee-1.0.Gee.AbstractList

    parentInstance: any
    priv: any

    // Owm methods of Gee-1.0.Gee.AbstractList

    // Has conflict: listIterator(): ListIterator
    // Has conflict: get(index: number): object | null
    // Has conflict: set(index: number, item?: object | null): void
    // Has conflict: indexOf(item?: object | null): number
    // Has conflict: insert(index: number, item?: object | null): void
    // Has conflict: removeAt(index: number): object | null
    // Has conflict: slice(start: number, stop: number): List | null
    // Has conflict: first(): object | null
    // Has conflict: last(): object | null
    // Has conflict: insertAll(index: number, collection: Collection): void

    // Conflicting methods

    contains(item?: object | null): boolean

    // Overloads of contains

    contains(item?: object | null): boolean
    contains(item?: object | null): boolean
    add(item?: object | null): boolean

    // Overloads of add

    add(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean

    // Overloads of remove

    remove(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean

    // Overloads of containsAll

    containsAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean

    // Overloads of removeAll

    removeAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean

    // Overloads of retainAll

    retainAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]

    // Overloads of toArray

    toArray(): object[]
    toArray(): object[]
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator

    // Own virtual methods of Gee-1.0.Gee.AbstractList

    listIterator(): ListIterator

    // Overloads of listIterator

    listIterator(): ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    set(index: number, item?: object | null): void

    // Overloads of set

    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number

    // Overloads of indexOf

    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void

    // Overloads of insert

    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    slice(start: number, stop: number): List | null

    // Overloads of slice

    slice(start: number, stop: number): List | null
    first(): object | null

    // Overloads of first

    first(): object | null
    last(): object | null

    // Overloads of last

    last(): object | null
    insertAll(index: number, collection: Collection): void

    // Overloads of insertAll

    insertAll(index: number, collection: Collection): void

    // Class property signals of Gee-1.0.Gee.AbstractList

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
    connect(sigName: "notify::is-empty", callback: any): number
    on(sigName: "notify::is-empty", callback: any): number
    once(sigName: "notify::is-empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: any): number
    on(sigName: "notify::element-type", callback: any): number
    once(sigName: "notify::element-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class AbstractList extends AbstractCollection {

    // Own properties of Gee-1.0.Gee.AbstractList

    static name: string

    // Constructors of Gee-1.0.Gee.AbstractList

    constructor(config?: AbstractList.ConstructorProperties) 
    _init(config?: AbstractList.ConstructorProperties): void

    // Conflicting static methods

    static empty(): List

    // Overloads of empty

    static empty(): Collection
    static empty(): Collection
}

export module AbstractMap {

    // Constructor properties interface

    export interface ConstructorProperties extends Iterable.ConstructorProperties, Map.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface AbstractMap extends Iterable, Map {

    // Own properties of Gee-1.0.Gee.AbstractMap

    readonly size: number
    readonly isEmpty: boolean
    readonly keys: Set
    readonly values: Collection
    readonly entries: Set
    readonly readOnlyView: Map

    // Own fields of Gee-1.0.Gee.AbstractMap

    parentInstance: GObject.Object
    priv: AbstractMapPrivate

    // Owm methods of Gee-1.0.Gee.AbstractMap

    // Has conflict: hasKey(key?: object | null): boolean
    // Has conflict: has(key?: object | null, value?: object | null): boolean
    // Has conflict: get(key?: object | null): object | null
    // Has conflict: set(key?: object | null, value?: object | null): void
    // Has conflict: unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    // Has conflict: mapIterator(): MapIterator
    // Has conflict: clear(): void
    // Has conflict: setAll(map: Map): void
    // Has conflict: unsetAll(map: Map): boolean
    // Has conflict: hasAll(map: Map): boolean

    // Own virtual methods of Gee-1.0.Gee.AbstractMap

    hasKey(key?: object | null): boolean

    // Overloads of hasKey

    hasKey(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean

    // Overloads of has

    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null

    // Overloads of get

    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void

    // Overloads of set

    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]

    // Overloads of unset

    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    mapIterator(): MapIterator

    // Overloads of mapIterator

    mapIterator(): MapIterator
    clear(): void

    // Overloads of clear

    clear(): void
    setAll(map: Map): void

    // Overloads of setAll

    setAll(map: Map): void
    unsetAll(map: Map): boolean

    // Overloads of unsetAll

    unsetAll(map: Map): boolean
    hasAll(map: Map): boolean

    // Overloads of hasAll

    hasAll(map: Map): boolean

    // Class property signals of Gee-1.0.Gee.AbstractMap

    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: any): number
    on(sigName: "notify::is-empty", callback: any): number
    once(sigName: "notify::is-empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
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
    connect(sigName: "notify::element-type", callback: any): number
    on(sigName: "notify::element-type", callback: any): number
    once(sigName: "notify::element-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: "notify::key-type", callback: any): number
    on(sigName: "notify::key-type", callback: any): number
    once(sigName: "notify::key-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::key-type", ...args: any[]): void
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

export class AbstractMap extends GObject.Object {

    // Own properties of Gee-1.0.Gee.AbstractMap

    static name: string

    // Constructors of Gee-1.0.Gee.AbstractMap

    constructor(config?: AbstractMap.ConstructorProperties) 
    _init(config?: AbstractMap.ConstructorProperties): void
}

export module AbstractMultiMap {

    // Constructor properties interface

    export interface ConstructorProperties extends MultiMap.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface AbstractMultiMap extends MultiMap {

    // Own fields of Gee-1.0.Gee.AbstractMultiMap

    parentInstance: GObject.Object
    priv: AbstractMultiMapPrivate
    storageMap: Map

    // Owm methods of Gee-1.0.Gee.AbstractMultiMap

    // Has conflict: createValueStorage(): Collection
    // Has conflict: createMultiKeySet(): MultiSet
    // Has conflict: getValueEqualFunc(): GLib.EqualFunc

    // Own virtual methods of Gee-1.0.Gee.AbstractMultiMap

    createValueStorage(): Collection
    createMultiKeySet(): MultiSet
    getValueEqualFunc(): GLib.EqualFunc

    // Class property signals of Gee-1.0.Gee.AbstractMultiMap

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

export class AbstractMultiMap extends GObject.Object {

    // Own properties of Gee-1.0.Gee.AbstractMultiMap

    static name: string

    // Constructors of Gee-1.0.Gee.AbstractMultiMap

    constructor(config?: AbstractMultiMap.ConstructorProperties) 
    _init(config?: AbstractMultiMap.ConstructorProperties): void
}

export module AbstractMultiSet {

    // Constructor properties interface

    export interface ConstructorProperties extends MultiSet.ConstructorProperties, AbstractCollection.ConstructorProperties {
    }

}

export interface AbstractMultiSet extends MultiSet {

    // Own fields of Gee-1.0.Gee.AbstractMultiSet

    parentInstance: any
    priv: any
    storageMap: Map

    // Conflicting methods

    contains(item?: object | null): boolean

    // Overloads of contains

    contains(item?: object | null): boolean
    contains(item?: object | null): boolean
    add(item?: object | null): boolean

    // Overloads of add

    add(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean

    // Overloads of remove

    remove(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean

    // Overloads of containsAll

    containsAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean

    // Overloads of removeAll

    removeAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean

    // Overloads of retainAll

    retainAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]

    // Overloads of toArray

    toArray(): object[]
    toArray(): object[]
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator

    // Class property signals of Gee-1.0.Gee.AbstractMultiSet

    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: any): number
    on(sigName: "notify::is-empty", callback: any): number
    once(sigName: "notify::is-empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: any): number
    on(sigName: "notify::element-type", callback: any): number
    once(sigName: "notify::element-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class AbstractMultiSet extends AbstractCollection {

    // Own properties of Gee-1.0.Gee.AbstractMultiSet

    static name: string

    // Constructors of Gee-1.0.Gee.AbstractMultiSet

    constructor(config?: AbstractMultiSet.ConstructorProperties) 
    _init(config?: AbstractMultiSet.ConstructorProperties): void
}

export module AbstractQueue {

    // Constructor properties interface

    export interface ConstructorProperties extends Queue.ConstructorProperties, AbstractCollection.ConstructorProperties {
    }

}

export interface AbstractQueue extends Queue {

    // Own properties of Gee-1.0.Gee.AbstractQueue

    readonly capacity: number
    readonly remainingCapacity: number
    readonly isFull: boolean

    // Own fields of Gee-1.0.Gee.AbstractQueue

    parentInstance: any
    priv: any

    // Owm methods of Gee-1.0.Gee.AbstractQueue

    // Has conflict: offer(element?: object | null): boolean
    // Has conflict: peek(): object | null
    // Has conflict: poll(): object | null
    // Has conflict: drain(recipient: Collection, amount: number): number

    // Conflicting methods

    contains(item?: object | null): boolean

    // Overloads of contains

    contains(item?: object | null): boolean
    contains(item?: object | null): boolean
    add(item?: object | null): boolean

    // Overloads of add

    add(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean

    // Overloads of remove

    remove(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean

    // Overloads of containsAll

    containsAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean

    // Overloads of removeAll

    removeAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean

    // Overloads of retainAll

    retainAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]

    // Overloads of toArray

    toArray(): object[]
    toArray(): object[]
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator

    // Own virtual methods of Gee-1.0.Gee.AbstractQueue

    offer(element?: object | null): boolean

    // Overloads of offer

    offer(element?: object | null): boolean
    peek(): object | null

    // Overloads of peek

    peek(): object | null
    poll(): object | null

    // Overloads of poll

    poll(): object | null
    drain(recipient: Collection, amount: number): number

    // Overloads of drain

    drain(recipient: Collection, amount: number): number

    // Class property signals of Gee-1.0.Gee.AbstractQueue

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
    connect(sigName: "notify::is-empty", callback: any): number
    on(sigName: "notify::is-empty", callback: any): number
    once(sigName: "notify::is-empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: any): number
    on(sigName: "notify::element-type", callback: any): number
    once(sigName: "notify::element-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class AbstractQueue extends AbstractCollection {

    // Own properties of Gee-1.0.Gee.AbstractQueue

    static name: string

    // Constructors of Gee-1.0.Gee.AbstractQueue

    constructor(config?: AbstractQueue.ConstructorProperties) 
    _init(config?: AbstractQueue.ConstructorProperties): void
}

export module AbstractSet {

    // Constructor properties interface

    export interface ConstructorProperties extends Set.ConstructorProperties, AbstractCollection.ConstructorProperties {
    }

}

export interface AbstractSet extends Set {

    // Own properties of Gee-1.0.Gee.AbstractSet

    readonly readOnlyView: any

    // Own fields of Gee-1.0.Gee.AbstractSet

    parentInstance: any
    priv: any

    // Conflicting methods

    contains(item?: object | null): boolean

    // Overloads of contains

    contains(item?: object | null): boolean
    contains(item?: object | null): boolean
    add(item?: object | null): boolean

    // Overloads of add

    add(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean

    // Overloads of remove

    remove(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean

    // Overloads of containsAll

    containsAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean

    // Overloads of removeAll

    removeAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean

    // Overloads of retainAll

    retainAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]

    // Overloads of toArray

    toArray(): object[]
    toArray(): object[]
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator

    // Class property signals of Gee-1.0.Gee.AbstractSet

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
    connect(sigName: "notify::is-empty", callback: any): number
    on(sigName: "notify::is-empty", callback: any): number
    once(sigName: "notify::is-empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: any): number
    on(sigName: "notify::element-type", callback: any): number
    once(sigName: "notify::element-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class AbstractSet extends AbstractCollection {

    // Own properties of Gee-1.0.Gee.AbstractSet

    static name: string

    // Constructors of Gee-1.0.Gee.AbstractSet

    constructor(config?: AbstractSet.ConstructorProperties) 
    _init(config?: AbstractSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(): Set

    // Overloads of empty

    static empty(): Collection
    static empty(): Collection
}

export module ArrayList {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractList.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.ArrayList

        equalFunc?: GLib.EqualFunc | null
    }

}

export interface ArrayList {

    // Own properties of Gee-1.0.Gee.ArrayList

    equalFunc: GLib.EqualFunc

    // Conflicting properties

    readOnlyView: any

    // Own fields of Gee-1.0.Gee.ArrayList

    parentInstance: any
    priv: any

    // Owm methods of Gee-1.0.Gee.ArrayList

    sortWithData(compare: GLib.CompareDataFunc): void

    // Conflicting methods

    listIterator(): ListIterator

    // Overloads of listIterator

    listIterator(): ListIterator
    listIterator(): ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item?: object | null): void

    // Overloads of set

    set(index: number, item?: object | null): void
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number

    // Overloads of indexOf

    indexOf(item?: object | null): number
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void

    // Overloads of insert

    insert(index: number, item?: object | null): void
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): List | null

    // Overloads of slice

    slice(start: number, stop: number): List | null
    slice(start: number, stop: number): List | null
    first(): object | null

    // Overloads of first

    first(): object | null
    first(): object | null
    last(): object | null

    // Overloads of last

    last(): object | null
    last(): object | null
    insertAll(index: number, collection: Collection): void

    // Overloads of insertAll

    insertAll(index: number, collection: Collection): void
    insertAll(index: number, collection: Collection): void
    contains(item?: object | null): boolean

    // Overloads of contains

    contains(item?: object | null): boolean
    contains(item?: object | null): boolean
    add(item?: object | null): boolean

    // Overloads of add

    add(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean

    // Overloads of remove

    remove(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean

    // Overloads of containsAll

    containsAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean

    // Overloads of removeAll

    removeAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean

    // Overloads of retainAll

    retainAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]

    // Overloads of toArray

    toArray(): object[]
    toArray(): object[]
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator

    // Class property signals of Gee-1.0.Gee.ArrayList

    connect(sigName: "notify::equal-func", callback: any): number
    on(sigName: "notify::equal-func", callback: any): number
    once(sigName: "notify::equal-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::equal-func", ...args: any[]): void
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
    connect(sigName: "notify::is-empty", callback: any): number
    on(sigName: "notify::is-empty", callback: any): number
    once(sigName: "notify::is-empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ArrayList extends AbstractList {

    // Own properties of Gee-1.0.Gee.ArrayList

    static name: string

    // Constructors of Gee-1.0.Gee.ArrayList

    constructor(config?: ArrayList.ConstructorProperties) 
    constructor(equalFunc?: GLib.EqualFunc | null) 
    static new(equalFunc?: GLib.EqualFunc | null): ArrayList
    _init(config?: ArrayList.ConstructorProperties): void

    // Conflicting static methods

    static empty(): List

    // Overloads of empty

    static empty(): Collection
    static empty(): Collection
}

export module HashMap {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractMap.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.HashMap

        keyHashFunc?: GLib.HashFunc | null
        keyEqualFunc?: GLib.EqualFunc | null
        valueEqualFunc?: GLib.EqualFunc | null
    }

}

export interface HashMap {

    // Own properties of Gee-1.0.Gee.HashMap

    keyHashFunc: GLib.HashFunc
    keyEqualFunc: GLib.EqualFunc
    valueEqualFunc: GLib.EqualFunc

    // Own fields of Gee-1.0.Gee.HashMap

    parentInstance: any
    priv: any

    // Conflicting methods

    hasKey(key?: object | null): boolean

    // Overloads of hasKey

    hasKey(key?: object | null): boolean
    hasKey(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean

    // Overloads of has

    has(key?: object | null, value?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null

    // Overloads of get

    get(key?: object | null): object | null
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void

    // Overloads of set

    set(key?: object | null, value?: object | null): void
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]

    // Overloads of unset

    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    mapIterator(): MapIterator

    // Overloads of mapIterator

    mapIterator(): MapIterator
    mapIterator(): MapIterator
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    setAll(map: Map): void

    // Overloads of setAll

    setAll(map: Map): void
    setAll(map: Map): void
    unsetAll(map: Map): boolean

    // Overloads of unsetAll

    unsetAll(map: Map): boolean
    unsetAll(map: Map): boolean
    hasAll(map: Map): boolean

    // Overloads of hasAll

    hasAll(map: Map): boolean
    hasAll(map: Map): boolean

    // Class property signals of Gee-1.0.Gee.HashMap

    connect(sigName: "notify::key-hash-func", callback: any): number
    on(sigName: "notify::key-hash-func", callback: any): number
    once(sigName: "notify::key-hash-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::key-hash-func", ...args: any[]): void
    connect(sigName: "notify::key-equal-func", callback: any): number
    on(sigName: "notify::key-equal-func", callback: any): number
    once(sigName: "notify::key-equal-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::key-equal-func", ...args: any[]): void
    connect(sigName: "notify::value-equal-func", callback: any): number
    on(sigName: "notify::value-equal-func", callback: any): number
    once(sigName: "notify::value-equal-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-equal-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: any): number
    on(sigName: "notify::is-empty", callback: any): number
    once(sigName: "notify::is-empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
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

export class HashMap extends AbstractMap {

    // Own properties of Gee-1.0.Gee.HashMap

    static name: string

    // Constructors of Gee-1.0.Gee.HashMap

    constructor(config?: HashMap.ConstructorProperties) 
    constructor(keyHashFunc?: GLib.HashFunc | null, keyEqualFunc?: GLib.EqualFunc | null, valueEqualFunc?: GLib.EqualFunc | null) 
    static new(keyHashFunc?: GLib.HashFunc | null, keyEqualFunc?: GLib.EqualFunc | null, valueEqualFunc?: GLib.EqualFunc | null): HashMap
    _init(config?: HashMap.ConstructorProperties): void
}

export module HashMultiMap {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractMultiMap.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.HashMultiMap

        valueHashFunc?: GLib.HashFunc | null
        valueEqualFunc?: GLib.EqualFunc | null
    }

}

export interface HashMultiMap {

    // Own properties of Gee-1.0.Gee.HashMultiMap

    readonly keyHashFunc: GLib.HashFunc
    readonly keyEqualFunc: GLib.EqualFunc
    valueHashFunc: GLib.HashFunc
    valueEqualFunc: GLib.EqualFunc

    // Own fields of Gee-1.0.Gee.HashMultiMap

    parentInstance: any
    priv: any

    // Class property signals of Gee-1.0.Gee.HashMultiMap

    connect(sigName: "notify::key-hash-func", callback: any): number
    on(sigName: "notify::key-hash-func", callback: any): number
    once(sigName: "notify::key-hash-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::key-hash-func", ...args: any[]): void
    connect(sigName: "notify::key-equal-func", callback: any): number
    on(sigName: "notify::key-equal-func", callback: any): number
    once(sigName: "notify::key-equal-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::key-equal-func", ...args: any[]): void
    connect(sigName: "notify::value-hash-func", callback: any): number
    on(sigName: "notify::value-hash-func", callback: any): number
    once(sigName: "notify::value-hash-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-hash-func", ...args: any[]): void
    connect(sigName: "notify::value-equal-func", callback: any): number
    on(sigName: "notify::value-equal-func", callback: any): number
    once(sigName: "notify::value-equal-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-equal-func", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class HashMultiMap extends AbstractMultiMap {

    // Own properties of Gee-1.0.Gee.HashMultiMap

    static name: string

    // Constructors of Gee-1.0.Gee.HashMultiMap

    constructor(config?: HashMultiMap.ConstructorProperties) 
    constructor(keyHashFunc?: GLib.HashFunc | null, keyEqualFunc?: GLib.EqualFunc | null, valueHashFunc?: GLib.HashFunc | null, valueEqualFunc?: GLib.EqualFunc | null) 
    static new(keyHashFunc?: GLib.HashFunc | null, keyEqualFunc?: GLib.EqualFunc | null, valueHashFunc?: GLib.HashFunc | null, valueEqualFunc?: GLib.EqualFunc | null): HashMultiMap
    _init(config?: HashMultiMap.ConstructorProperties): void
}

export module HashMultiSet {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractMultiSet.ConstructorProperties {
    }

}

export interface HashMultiSet {

    // Own properties of Gee-1.0.Gee.HashMultiSet

    readonly hashFunc: GLib.HashFunc
    readonly equalFunc: GLib.EqualFunc

    // Own fields of Gee-1.0.Gee.HashMultiSet

    parentInstance: any
    priv: any

    // Conflicting methods

    contains(item?: object | null): boolean

    // Overloads of contains

    contains(item?: object | null): boolean
    contains(item?: object | null): boolean
    add(item?: object | null): boolean

    // Overloads of add

    add(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean

    // Overloads of remove

    remove(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean

    // Overloads of containsAll

    containsAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean

    // Overloads of removeAll

    removeAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean

    // Overloads of retainAll

    retainAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]

    // Overloads of toArray

    toArray(): object[]
    toArray(): object[]
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator

    // Class property signals of Gee-1.0.Gee.HashMultiSet

    connect(sigName: "notify::hash-func", callback: any): number
    on(sigName: "notify::hash-func", callback: any): number
    once(sigName: "notify::hash-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hash-func", ...args: any[]): void
    connect(sigName: "notify::equal-func", callback: any): number
    on(sigName: "notify::equal-func", callback: any): number
    once(sigName: "notify::equal-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::equal-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: any): number
    on(sigName: "notify::is-empty", callback: any): number
    once(sigName: "notify::is-empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
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

export class HashMultiSet extends AbstractMultiSet {

    // Own properties of Gee-1.0.Gee.HashMultiSet

    static name: string

    // Constructors of Gee-1.0.Gee.HashMultiSet

    constructor(config?: HashMultiSet.ConstructorProperties) 
    constructor(hashFunc?: GLib.HashFunc | null, equalFunc?: GLib.EqualFunc | null) 
    static new(hashFunc?: GLib.HashFunc | null, equalFunc?: GLib.EqualFunc | null): HashMultiSet
    _init(config?: HashMultiSet.ConstructorProperties): void
}

export module HashSet {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractSet.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.HashSet

        hashFunc?: GLib.HashFunc | null
        equalFunc?: GLib.EqualFunc | null
    }

}

export interface HashSet {

    // Own properties of Gee-1.0.Gee.HashSet

    hashFunc: GLib.HashFunc
    equalFunc: GLib.EqualFunc

    // Conflicting properties

    readOnlyView: any

    // Own fields of Gee-1.0.Gee.HashSet

    parentInstance: any
    priv: any

    // Conflicting methods

    contains(item?: object | null): boolean

    // Overloads of contains

    contains(item?: object | null): boolean
    contains(item?: object | null): boolean
    add(item?: object | null): boolean

    // Overloads of add

    add(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean

    // Overloads of remove

    remove(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean

    // Overloads of containsAll

    containsAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean

    // Overloads of removeAll

    removeAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean

    // Overloads of retainAll

    retainAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]

    // Overloads of toArray

    toArray(): object[]
    toArray(): object[]
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator

    // Class property signals of Gee-1.0.Gee.HashSet

    connect(sigName: "notify::hash-func", callback: any): number
    on(sigName: "notify::hash-func", callback: any): number
    once(sigName: "notify::hash-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hash-func", ...args: any[]): void
    connect(sigName: "notify::equal-func", callback: any): number
    on(sigName: "notify::equal-func", callback: any): number
    once(sigName: "notify::equal-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::equal-func", ...args: any[]): void
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
    connect(sigName: "notify::is-empty", callback: any): number
    on(sigName: "notify::is-empty", callback: any): number
    once(sigName: "notify::is-empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class HashSet extends AbstractSet {

    // Own properties of Gee-1.0.Gee.HashSet

    static name: string

    // Constructors of Gee-1.0.Gee.HashSet

    constructor(config?: HashSet.ConstructorProperties) 
    constructor(hashFunc?: GLib.HashFunc | null, equalFunc?: GLib.EqualFunc | null) 
    static new(hashFunc?: GLib.HashFunc | null, equalFunc?: GLib.EqualFunc | null): HashSet
    _init(config?: HashSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(): Set

    // Overloads of empty

    static empty(): Collection
    static empty(): Collection
}

export module LinkedList {

    // Constructor properties interface

    export interface ConstructorProperties extends Queue.ConstructorProperties, Deque.ConstructorProperties, AbstractList.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.LinkedList

        equalFunc?: GLib.EqualFunc | null
    }

}

export interface LinkedList extends Queue, Deque {

    // Own properties of Gee-1.0.Gee.LinkedList

    equalFunc: GLib.EqualFunc

    // Conflicting properties

    readOnlyView: any

    // Own fields of Gee-1.0.Gee.LinkedList

    parentInstance: any
    priv: any

    // Conflicting methods

    contains(item?: object | null): boolean
    contains(item?: object | null): boolean

    // Overloads of contains

    contains(item?: object | null): boolean
    add(item?: object | null): boolean
    add(item?: object | null): boolean

    // Overloads of add

    add(item?: object | null): boolean
    remove(item?: object | null): boolean
    remove(item?: object | null): boolean

    // Overloads of remove

    remove(item?: object | null): boolean
    clear(): void
    clear(): void

    // Overloads of clear

    clear(): void
    addAll(collection: Collection): boolean
    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean

    // Overloads of containsAll

    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean

    // Overloads of removeAll

    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean

    // Overloads of retainAll

    retainAll(collection: Collection): boolean
    toArray(): object[]
    toArray(): object[]

    // Overloads of toArray

    toArray(): object[]
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator
    listIterator(): ListIterator

    // Overloads of listIterator

    listIterator(): ListIterator
    listIterator(): ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item?: object | null): void

    // Overloads of set

    set(index: number, item?: object | null): void
    set(index: number, item?: object | null): void
    indexOf(item?: object | null): number

    // Overloads of indexOf

    indexOf(item?: object | null): number
    indexOf(item?: object | null): number
    insert(index: number, item?: object | null): void

    // Overloads of insert

    insert(index: number, item?: object | null): void
    insert(index: number, item?: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): List | null

    // Overloads of slice

    slice(start: number, stop: number): List | null
    slice(start: number, stop: number): List | null
    first(): object | null

    // Overloads of first

    first(): object | null
    first(): object | null
    last(): object | null

    // Overloads of last

    last(): object | null
    last(): object | null
    insertAll(index: number, collection: Collection): void

    // Overloads of insertAll

    insertAll(index: number, collection: Collection): void
    insertAll(index: number, collection: Collection): void

    // Class property signals of Gee-1.0.Gee.LinkedList

    connect(sigName: "notify::equal-func", callback: any): number
    on(sigName: "notify::equal-func", callback: any): number
    once(sigName: "notify::equal-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::equal-func", ...args: any[]): void
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
    connect(sigName: "notify::is-empty", callback: any): number
    on(sigName: "notify::is-empty", callback: any): number
    once(sigName: "notify::is-empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
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
    connect(sigName: "notify::element-type", callback: any): number
    on(sigName: "notify::element-type", callback: any): number
    once(sigName: "notify::element-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class LinkedList extends AbstractList {

    // Own properties of Gee-1.0.Gee.LinkedList

    static name: string

    // Constructors of Gee-1.0.Gee.LinkedList

    constructor(config?: LinkedList.ConstructorProperties) 
    constructor(equalFunc?: GLib.EqualFunc | null) 
    static new(equalFunc?: GLib.EqualFunc | null): LinkedList
    _init(config?: LinkedList.ConstructorProperties): void

    // Conflicting static methods

    static empty(): Collection
    static empty(): List

    // Overloads of empty

    static empty(): Collection
}

export module PriorityQueue {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractQueue.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.PriorityQueue

        compareFunc?: GLib.CompareFunc | null
    }

}

export interface PriorityQueue {

    // Own properties of Gee-1.0.Gee.PriorityQueue

    compareFunc: GLib.CompareFunc

    // Own fields of Gee-1.0.Gee.PriorityQueue

    parentInstance: any
    priv: any

    // Conflicting methods

    offer(element?: object | null): boolean

    // Overloads of offer

    offer(element?: object | null): boolean
    offer(element?: object | null): boolean
    peek(): object | null

    // Overloads of peek

    peek(): object | null
    peek(): object | null
    poll(): object | null

    // Overloads of poll

    poll(): object | null
    poll(): object | null
    drain(recipient: Collection, amount: number): number

    // Overloads of drain

    drain(recipient: Collection, amount: number): number
    drain(recipient: Collection, amount: number): number
    contains(item?: object | null): boolean

    // Overloads of contains

    contains(item?: object | null): boolean
    contains(item?: object | null): boolean
    add(item?: object | null): boolean

    // Overloads of add

    add(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean

    // Overloads of remove

    remove(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean

    // Overloads of containsAll

    containsAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean

    // Overloads of removeAll

    removeAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean

    // Overloads of retainAll

    retainAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]

    // Overloads of toArray

    toArray(): object[]
    toArray(): object[]
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator

    // Class property signals of Gee-1.0.Gee.PriorityQueue

    connect(sigName: "notify::compare-func", callback: any): number
    on(sigName: "notify::compare-func", callback: any): number
    once(sigName: "notify::compare-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::compare-func", ...args: any[]): void
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
    connect(sigName: "notify::is-empty", callback: any): number
    on(sigName: "notify::is-empty", callback: any): number
    once(sigName: "notify::is-empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
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

export class PriorityQueue extends AbstractQueue {

    // Own properties of Gee-1.0.Gee.PriorityQueue

    static name: string

    // Constructors of Gee-1.0.Gee.PriorityQueue

    constructor(config?: PriorityQueue.ConstructorProperties) 
    constructor(compareFunc?: GLib.CompareFunc | null) 
    static new(compareFunc?: GLib.CompareFunc | null): PriorityQueue
    _init(config?: PriorityQueue.ConstructorProperties): void
}

export module TreeMap {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractMap.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.TreeMap

        keyCompareFunc?: GLib.CompareFunc | null
        valueEqualFunc?: GLib.EqualFunc | null
    }

}

export interface TreeMap {

    // Own properties of Gee-1.0.Gee.TreeMap

    keyCompareFunc: GLib.CompareFunc
    valueEqualFunc: GLib.EqualFunc

    // Own fields of Gee-1.0.Gee.TreeMap

    parentInstance: any
    priv: any

    // Conflicting methods

    hasKey(key?: object | null): boolean

    // Overloads of hasKey

    hasKey(key?: object | null): boolean
    hasKey(key?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean

    // Overloads of has

    has(key?: object | null, value?: object | null): boolean
    has(key?: object | null, value?: object | null): boolean
    get(key?: object | null): object | null

    // Overloads of get

    get(key?: object | null): object | null
    get(key?: object | null): object | null
    set(key?: object | null, value?: object | null): void

    // Overloads of set

    set(key?: object | null, value?: object | null): void
    set(key?: object | null, value?: object | null): void
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]

    // Overloads of unset

    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    unset(key?: object | null): [ /* returnType */ boolean, /* value */ object | null ]
    mapIterator(): MapIterator

    // Overloads of mapIterator

    mapIterator(): MapIterator
    mapIterator(): MapIterator
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    setAll(map: Map): void

    // Overloads of setAll

    setAll(map: Map): void
    setAll(map: Map): void
    unsetAll(map: Map): boolean

    // Overloads of unsetAll

    unsetAll(map: Map): boolean
    unsetAll(map: Map): boolean
    hasAll(map: Map): boolean

    // Overloads of hasAll

    hasAll(map: Map): boolean
    hasAll(map: Map): boolean

    // Class property signals of Gee-1.0.Gee.TreeMap

    connect(sigName: "notify::key-compare-func", callback: any): number
    on(sigName: "notify::key-compare-func", callback: any): number
    once(sigName: "notify::key-compare-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::key-compare-func", ...args: any[]): void
    connect(sigName: "notify::value-equal-func", callback: any): number
    on(sigName: "notify::value-equal-func", callback: any): number
    once(sigName: "notify::value-equal-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-equal-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: any): number
    on(sigName: "notify::is-empty", callback: any): number
    once(sigName: "notify::is-empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
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

export class TreeMap extends AbstractMap {

    // Own properties of Gee-1.0.Gee.TreeMap

    static name: string

    // Constructors of Gee-1.0.Gee.TreeMap

    constructor(config?: TreeMap.ConstructorProperties) 
    constructor(keyCompareFunc?: GLib.CompareFunc | null, valueEqualFunc?: GLib.EqualFunc | null) 
    static new(keyCompareFunc?: GLib.CompareFunc | null, valueEqualFunc?: GLib.EqualFunc | null): TreeMap
    _init(config?: TreeMap.ConstructorProperties): void
}

export module TreeMultiMap {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractMultiMap.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.TreeMultiMap

        valueCompareFunc?: GLib.CompareFunc | null
    }

}

export interface TreeMultiMap {

    // Own properties of Gee-1.0.Gee.TreeMultiMap

    readonly keyCompareFunc: GLib.CompareFunc
    valueCompareFunc: GLib.CompareFunc

    // Own fields of Gee-1.0.Gee.TreeMultiMap

    parentInstance: any
    priv: any

    // Class property signals of Gee-1.0.Gee.TreeMultiMap

    connect(sigName: "notify::key-compare-func", callback: any): number
    on(sigName: "notify::key-compare-func", callback: any): number
    once(sigName: "notify::key-compare-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::key-compare-func", ...args: any[]): void
    connect(sigName: "notify::value-compare-func", callback: any): number
    on(sigName: "notify::value-compare-func", callback: any): number
    once(sigName: "notify::value-compare-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-compare-func", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class TreeMultiMap extends AbstractMultiMap {

    // Own properties of Gee-1.0.Gee.TreeMultiMap

    static name: string

    // Constructors of Gee-1.0.Gee.TreeMultiMap

    constructor(config?: TreeMultiMap.ConstructorProperties) 
    constructor(keyCompareFunc?: GLib.CompareFunc | null, valueCompareFunc?: GLib.CompareFunc | null) 
    static new(keyCompareFunc?: GLib.CompareFunc | null, valueCompareFunc?: GLib.CompareFunc | null): TreeMultiMap
    _init(config?: TreeMultiMap.ConstructorProperties): void
}

export module TreeMultiSet {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractMultiSet.ConstructorProperties {
    }

}

export interface TreeMultiSet {

    // Own properties of Gee-1.0.Gee.TreeMultiSet

    readonly compareFunc: GLib.CompareFunc

    // Own fields of Gee-1.0.Gee.TreeMultiSet

    parentInstance: any
    priv: any

    // Conflicting methods

    contains(item?: object | null): boolean

    // Overloads of contains

    contains(item?: object | null): boolean
    contains(item?: object | null): boolean
    add(item?: object | null): boolean

    // Overloads of add

    add(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean

    // Overloads of remove

    remove(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean

    // Overloads of containsAll

    containsAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean

    // Overloads of removeAll

    removeAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean

    // Overloads of retainAll

    retainAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]

    // Overloads of toArray

    toArray(): object[]
    toArray(): object[]
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator

    // Class property signals of Gee-1.0.Gee.TreeMultiSet

    connect(sigName: "notify::compare-func", callback: any): number
    on(sigName: "notify::compare-func", callback: any): number
    once(sigName: "notify::compare-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::compare-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::is-empty", callback: any): number
    on(sigName: "notify::is-empty", callback: any): number
    once(sigName: "notify::is-empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
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

export class TreeMultiSet extends AbstractMultiSet {

    // Own properties of Gee-1.0.Gee.TreeMultiSet

    static name: string

    // Constructors of Gee-1.0.Gee.TreeMultiSet

    constructor(config?: TreeMultiSet.ConstructorProperties) 
    constructor(compareFunc?: GLib.CompareFunc | null) 
    static new(compareFunc?: GLib.CompareFunc | null): TreeMultiSet
    _init(config?: TreeMultiSet.ConstructorProperties): void
}

export module TreeSet {

    // Constructor properties interface

    export interface ConstructorProperties extends SortedSet.ConstructorProperties, AbstractSet.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.TreeSet

        compareFunc?: GLib.CompareFunc | null
    }

}

export interface TreeSet extends SortedSet {

    // Own properties of Gee-1.0.Gee.TreeSet

    compareFunc: GLib.CompareFunc

    // Conflicting properties

    readOnlyView: any

    // Own fields of Gee-1.0.Gee.TreeSet

    parentInstance: any
    priv: any

    // Conflicting methods

    contains(item?: object | null): boolean

    // Overloads of contains

    contains(item?: object | null): boolean
    contains(item?: object | null): boolean
    add(item?: object | null): boolean

    // Overloads of add

    add(item?: object | null): boolean
    add(item?: object | null): boolean
    remove(item?: object | null): boolean

    // Overloads of remove

    remove(item?: object | null): boolean
    remove(item?: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    addAll(collection: Collection): boolean

    // Overloads of addAll

    addAll(collection: Collection): boolean
    addAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean

    // Overloads of containsAll

    containsAll(collection: Collection): boolean
    containsAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean

    // Overloads of removeAll

    removeAll(collection: Collection): boolean
    removeAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean

    // Overloads of retainAll

    retainAll(collection: Collection): boolean
    retainAll(collection: Collection): boolean
    toArray(): object[]

    // Overloads of toArray

    toArray(): object[]
    toArray(): object[]
    iterator(): Iterator

    // Overloads of iterator

    iterator(): Iterator
    iterator(): Iterator

    // Class property signals of Gee-1.0.Gee.TreeSet

    connect(sigName: "notify::compare-func", callback: any): number
    on(sigName: "notify::compare-func", callback: any): number
    once(sigName: "notify::compare-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::compare-func", ...args: any[]): void
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
    connect(sigName: "notify::is-empty", callback: any): number
    on(sigName: "notify::is-empty", callback: any): number
    once(sigName: "notify::is-empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-empty", ...args: any[]): void
    connect(sigName: "notify::element-type", callback: any): number
    on(sigName: "notify::element-type", callback: any): number
    once(sigName: "notify::element-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class TreeSet extends AbstractSet {

    // Own properties of Gee-1.0.Gee.TreeSet

    static name: string

    // Constructors of Gee-1.0.Gee.TreeSet

    constructor(config?: TreeSet.ConstructorProperties) 
    constructor(compareFunc?: GLib.CompareFunc | null) 
    static new(compareFunc?: GLib.CompareFunc | null): TreeSet
    _init(config?: TreeSet.ConstructorProperties): void

    // Conflicting static methods

    static empty(): Set

    // Overloads of empty

    static empty(): Collection
    static empty(): Collection
}

export module MapEntry {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gee-1.0.Gee.MapEntry

        value?: object | null
    }

}

export interface MapEntry {

    // Own properties of Gee-1.0.Gee.MapEntry

    readonly key: object
    value: object

    // Own fields of Gee-1.0.Gee.MapEntry

    parentInstance: GObject.Object
    priv: EntryPrivate

    // Class property signals of Gee-1.0.Gee.MapEntry

    connect(sigName: "notify::key", callback: any): number
    on(sigName: "notify::key", callback: any): number
    once(sigName: "notify::key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::key", ...args: any[]): void
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

export class MapEntry extends GObject.Object {

    // Own properties of Gee-1.0.Gee.MapEntry

    static name: string

    // Constructors of Gee-1.0.Gee.MapEntry

    constructor(config?: MapEntry.ConstructorProperties) 
    _init(config?: MapEntry.ConstructorProperties): void
}

export interface AbstractCollectionClass {

    // Own fields of Gee-1.0.Gee.AbstractCollectionClass

    parentClass: GObject.ObjectClass
    contains: (self: AbstractCollection, item?: object | null) => boolean
    add: (self: AbstractCollection, item?: object | null) => boolean
    remove: (self: AbstractCollection, item?: object | null) => boolean
    clear: (self: AbstractCollection) => void
    toArray: (self: AbstractCollection) => object[]
    addAll: (self: AbstractCollection, collection: Collection) => boolean
    containsAll: (self: AbstractCollection, collection: Collection) => boolean
    removeAll: (self: AbstractCollection, collection: Collection) => boolean
    retainAll: (self: AbstractCollection, collection: Collection) => boolean
    iterator: (self: AbstractCollection) => Iterator
}

export abstract class AbstractCollectionClass {

    // Own properties of Gee-1.0.Gee.AbstractCollectionClass

    static name: string
}

export interface AbstractCollectionPrivate {
}

export class AbstractCollectionPrivate {

    // Own properties of Gee-1.0.Gee.AbstractCollectionPrivate

    static name: string
}

export interface AbstractListClass {

    // Own fields of Gee-1.0.Gee.AbstractListClass

    parentClass: AbstractCollectionClass
    listIterator: (self: AbstractList) => ListIterator
    get: (self: AbstractList, index: number) => object | null
    set: (self: AbstractList, index: number, item?: object | null) => void
    indexOf: (self: AbstractList, item?: object | null) => number
    insert: (self: AbstractList, index: number, item?: object | null) => void
    removeAt: (self: AbstractList, index: number) => object | null
    slice: (self: AbstractList, start: number, stop: number) => List | null
    first: (self: AbstractList) => object | null
    last: (self: AbstractList) => object | null
    insertAll: (self: AbstractList, index: number, collection: Collection) => void
}

export abstract class AbstractListClass {

    // Own properties of Gee-1.0.Gee.AbstractListClass

    static name: string
}

export interface AbstractListPrivate {
}

export class AbstractListPrivate {

    // Own properties of Gee-1.0.Gee.AbstractListPrivate

    static name: string
}

export interface AbstractMapClass {

    // Own fields of Gee-1.0.Gee.AbstractMapClass

    parentClass: GObject.ObjectClass
    hasKey: (self: AbstractMap, key?: object | null) => boolean
    has: (self: AbstractMap, key?: object | null, value?: object | null) => boolean
    get: (self: AbstractMap, key?: object | null) => object | null
    set: (self: AbstractMap, key?: object | null, value?: object | null) => void
    unset: (self: AbstractMap, key?: object | null) => [ /* returnType */ boolean, /* value */ object | null ]
    mapIterator: (self: AbstractMap) => MapIterator
    clear: (self: AbstractMap) => void
    setAll: (self: AbstractMap, map: Map) => void
    unsetAll: (self: AbstractMap, map: Map) => boolean
    hasAll: (self: AbstractMap, map: Map) => boolean
}

export abstract class AbstractMapClass {

    // Own properties of Gee-1.0.Gee.AbstractMapClass

    static name: string
}

export interface AbstractMapPrivate {
}

export class AbstractMapPrivate {

    // Own properties of Gee-1.0.Gee.AbstractMapPrivate

    static name: string
}

export interface AbstractMultiMapClass {

    // Own fields of Gee-1.0.Gee.AbstractMultiMapClass

    parentClass: GObject.ObjectClass
    createValueStorage: (self: AbstractMultiMap) => Collection
    createMultiKeySet: (self: AbstractMultiMap) => MultiSet
    getValueEqualFunc: (self: AbstractMultiMap) => GLib.EqualFunc
}

export abstract class AbstractMultiMapClass {

    // Own properties of Gee-1.0.Gee.AbstractMultiMapClass

    static name: string
}

export interface AbstractMultiMapPrivate {
}

export class AbstractMultiMapPrivate {

    // Own properties of Gee-1.0.Gee.AbstractMultiMapPrivate

    static name: string
}

export interface AbstractMultiSetClass {

    // Own fields of Gee-1.0.Gee.AbstractMultiSetClass

    parentClass: AbstractCollectionClass
}

export abstract class AbstractMultiSetClass {

    // Own properties of Gee-1.0.Gee.AbstractMultiSetClass

    static name: string
}

export interface AbstractMultiSetPrivate {
}

export class AbstractMultiSetPrivate {

    // Own properties of Gee-1.0.Gee.AbstractMultiSetPrivate

    static name: string
}

export interface AbstractQueueClass {

    // Own fields of Gee-1.0.Gee.AbstractQueueClass

    parentClass: AbstractCollectionClass
    offer: (self: AbstractQueue, element?: object | null) => boolean
    peek: (self: AbstractQueue) => object | null
    poll: (self: AbstractQueue) => object | null
    drain: (self: AbstractQueue, recipient: Collection, amount: number) => number
}

export abstract class AbstractQueueClass {

    // Own properties of Gee-1.0.Gee.AbstractQueueClass

    static name: string
}

export interface AbstractQueuePrivate {
}

export class AbstractQueuePrivate {

    // Own properties of Gee-1.0.Gee.AbstractQueuePrivate

    static name: string
}

export interface AbstractSetClass {

    // Own fields of Gee-1.0.Gee.AbstractSetClass

    parentClass: AbstractCollectionClass
}

export abstract class AbstractSetClass {

    // Own properties of Gee-1.0.Gee.AbstractSetClass

    static name: string
}

export interface AbstractSetPrivate {
}

export class AbstractSetPrivate {

    // Own properties of Gee-1.0.Gee.AbstractSetPrivate

    static name: string
}

export interface ArrayListClass {

    // Own fields of Gee-1.0.Gee.ArrayListClass

    parentClass: AbstractListClass
}

export abstract class ArrayListClass {

    // Own properties of Gee-1.0.Gee.ArrayListClass

    static name: string
}

export interface ArrayListPrivate {
}

export class ArrayListPrivate {

    // Own properties of Gee-1.0.Gee.ArrayListPrivate

    static name: string
}

export interface HashMapClass {

    // Own fields of Gee-1.0.Gee.HashMapClass

    parentClass: AbstractMapClass
}

export abstract class HashMapClass {

    // Own properties of Gee-1.0.Gee.HashMapClass

    static name: string
}

export interface HashMapPrivate {
}

export class HashMapPrivate {

    // Own properties of Gee-1.0.Gee.HashMapPrivate

    static name: string
}

export interface HashMultiMapClass {

    // Own fields of Gee-1.0.Gee.HashMultiMapClass

    parentClass: AbstractMultiMapClass
}

export abstract class HashMultiMapClass {

    // Own properties of Gee-1.0.Gee.HashMultiMapClass

    static name: string
}

export interface HashMultiMapPrivate {
}

export class HashMultiMapPrivate {

    // Own properties of Gee-1.0.Gee.HashMultiMapPrivate

    static name: string
}

export interface HashMultiSetClass {

    // Own fields of Gee-1.0.Gee.HashMultiSetClass

    parentClass: AbstractMultiSetClass
}

export abstract class HashMultiSetClass {

    // Own properties of Gee-1.0.Gee.HashMultiSetClass

    static name: string
}

export interface HashMultiSetPrivate {
}

export class HashMultiSetPrivate {

    // Own properties of Gee-1.0.Gee.HashMultiSetPrivate

    static name: string
}

export interface HashSetClass {

    // Own fields of Gee-1.0.Gee.HashSetClass

    parentClass: AbstractSetClass
}

export abstract class HashSetClass {

    // Own properties of Gee-1.0.Gee.HashSetClass

    static name: string
}

export interface HashSetPrivate {
}

export class HashSetPrivate {

    // Own properties of Gee-1.0.Gee.HashSetPrivate

    static name: string
}

export interface LinkedListClass {

    // Own fields of Gee-1.0.Gee.LinkedListClass

    parentClass: AbstractListClass
}

export abstract class LinkedListClass {

    // Own properties of Gee-1.0.Gee.LinkedListClass

    static name: string
}

export interface LinkedListPrivate {
}

export class LinkedListPrivate {

    // Own properties of Gee-1.0.Gee.LinkedListPrivate

    static name: string
}

export interface PriorityQueueClass {

    // Own fields of Gee-1.0.Gee.PriorityQueueClass

    parentClass: AbstractQueueClass
}

export abstract class PriorityQueueClass {

    // Own properties of Gee-1.0.Gee.PriorityQueueClass

    static name: string
}

export interface PriorityQueuePrivate {
}

export class PriorityQueuePrivate {

    // Own properties of Gee-1.0.Gee.PriorityQueuePrivate

    static name: string
}

export interface TreeMapClass {

    // Own fields of Gee-1.0.Gee.TreeMapClass

    parentClass: AbstractMapClass
}

export abstract class TreeMapClass {

    // Own properties of Gee-1.0.Gee.TreeMapClass

    static name: string
}

export interface TreeMapPrivate {
}

export class TreeMapPrivate {

    // Own properties of Gee-1.0.Gee.TreeMapPrivate

    static name: string
}

export interface TreeMultiMapClass {

    // Own fields of Gee-1.0.Gee.TreeMultiMapClass

    parentClass: AbstractMultiMapClass
}

export abstract class TreeMultiMapClass {

    // Own properties of Gee-1.0.Gee.TreeMultiMapClass

    static name: string
}

export interface TreeMultiMapPrivate {
}

export class TreeMultiMapPrivate {

    // Own properties of Gee-1.0.Gee.TreeMultiMapPrivate

    static name: string
}

export interface TreeMultiSetClass {

    // Own fields of Gee-1.0.Gee.TreeMultiSetClass

    parentClass: AbstractMultiSetClass
}

export abstract class TreeMultiSetClass {

    // Own properties of Gee-1.0.Gee.TreeMultiSetClass

    static name: string
}

export interface TreeMultiSetPrivate {
}

export class TreeMultiSetPrivate {

    // Own properties of Gee-1.0.Gee.TreeMultiSetPrivate

    static name: string
}

export interface TreeSetClass {

    // Own fields of Gee-1.0.Gee.TreeSetClass

    parentClass: AbstractSetClass
}

export abstract class TreeSetClass {

    // Own properties of Gee-1.0.Gee.TreeSetClass

    static name: string
}

export interface TreeSetPrivate {
}

export class TreeSetPrivate {

    // Own properties of Gee-1.0.Gee.TreeSetPrivate

    static name: string
}

export interface BidirIteratorIface {

    // Own fields of Gee-1.0.Gee.BidirIteratorIface

    parentIface: GObject.TypeInterface
    previous: (self: BidirIterator) => boolean
    hasPrevious: (self: BidirIterator) => boolean
    last: (self: BidirIterator) => boolean
}

export abstract class BidirIteratorIface {

    // Own properties of Gee-1.0.Gee.BidirIteratorIface

    static name: string
}

export interface CollectionIface {

    // Own fields of Gee-1.0.Gee.CollectionIface

    parentIface: GObject.TypeInterface
    contains: (self: Collection, item?: object | null) => boolean
    add: (self: Collection, item?: object | null) => boolean
    remove: (self: Collection, item?: object | null) => boolean
    clear: (self: Collection) => void
    addAll: (self: Collection, collection: Collection) => boolean
    containsAll: (self: Collection, collection: Collection) => boolean
    removeAll: (self: Collection, collection: Collection) => boolean
    retainAll: (self: Collection, collection: Collection) => boolean
    toArray: (self: Collection) => object[]
}

export abstract class CollectionIface {

    // Own properties of Gee-1.0.Gee.CollectionIface

    static name: string
}

export interface ComparableIface {

    // Own fields of Gee-1.0.Gee.ComparableIface

    parentIface: GObject.TypeInterface
    compareTo: (self: Comparable, object?: object | null) => number
}

export abstract class ComparableIface {

    // Own properties of Gee-1.0.Gee.ComparableIface

    static name: string
}

export interface DequeIface {

    // Own fields of Gee-1.0.Gee.DequeIface

    parentIface: GObject.TypeInterface
    offerHead: (self: Deque, element?: object | null) => boolean
    peekHead: (self: Deque) => object | null
    pollHead: (self: Deque) => object | null
    drainHead: (self: Deque, recipient: Collection, amount: number) => number
    offerTail: (self: Deque, element?: object | null) => boolean
    peekTail: (self: Deque) => object | null
    pollTail: (self: Deque) => object | null
    drainTail: (self: Deque, recipient: Collection, amount: number) => number
}

export abstract class DequeIface {

    // Own properties of Gee-1.0.Gee.DequeIface

    static name: string
}

export interface IterableIface {

    // Own fields of Gee-1.0.Gee.IterableIface

    parentIface: GObject.TypeInterface
    iterator: (self: Iterable) => Iterator
}

export abstract class IterableIface {

    // Own properties of Gee-1.0.Gee.IterableIface

    static name: string
}

export interface IteratorIface {

    // Own fields of Gee-1.0.Gee.IteratorIface

    parentIface: GObject.TypeInterface
    next: (self: Iterator) => boolean
    hasNext: (self: Iterator) => boolean
    first: (self: Iterator) => boolean
    get: (self: Iterator) => object | null
    remove: (self: Iterator) => void
}

export abstract class IteratorIface {

    // Own properties of Gee-1.0.Gee.IteratorIface

    static name: string
}

export interface ListIface {

    // Own fields of Gee-1.0.Gee.ListIface

    parentIface: GObject.TypeInterface
    listIterator: (self: List) => ListIterator
    get: (self: List, index: number) => object | null
    set: (self: List, index: number, item?: object | null) => void
    indexOf: (self: List, item?: object | null) => number
    insert: (self: List, index: number, item?: object | null) => void
    removeAt: (self: List, index: number) => object | null
    slice: (self: List, start: number, stop: number) => List | null
    first: (self: List) => object | null
    last: (self: List) => object | null
    insertAll: (self: List, index: number, collection: Collection) => void
    sort: (self: List, compareFunc?: GLib.CompareFunc | null) => void
}

export abstract class ListIface {

    // Own properties of Gee-1.0.Gee.ListIface

    static name: string
}

export interface ListIteratorIface {

    // Own fields of Gee-1.0.Gee.ListIteratorIface

    parentIface: GObject.TypeInterface
    set: (self: ListIterator, item?: object | null) => void
    insert: (self: ListIterator, item?: object | null) => void
    add: (self: ListIterator, item?: object | null) => void
    index: (self: ListIterator) => number
}

export abstract class ListIteratorIface {

    // Own properties of Gee-1.0.Gee.ListIteratorIface

    static name: string
}

export interface MapIface {

    // Own fields of Gee-1.0.Gee.MapIface

    parentIface: GObject.TypeInterface
    hasKey: (self: Map, key?: object | null) => boolean
    contains: (self: Map, key?: object | null) => boolean
    has: (self: Map, key?: object | null, value?: object | null) => boolean
    get: (self: Map, key?: object | null) => object | null
    set: (self: Map, key?: object | null, value?: object | null) => void
    unset: (self: Map, key?: object | null) => [ /* returnType */ boolean, /* value */ object | null ]
    remove: (self: Map, key?: object | null) => [ /* returnType */ boolean, /* value */ object | null ]
    clear: (self: Map) => void
    mapIterator: (self: Map) => MapIterator
    setAll: (self: Map, map: Map) => void
    unsetAll: (self: Map, map: Map) => boolean
    removeAll: (self: Map, map: Map) => boolean
    hasAll: (self: Map, map: Map) => boolean
    containsAll: (self: Map, map: Map) => boolean
}

export abstract class MapIface {

    // Own properties of Gee-1.0.Gee.MapIface

    static name: string
}

export interface MapEntryClass {

    // Own fields of Gee-1.0.Gee.MapEntryClass

    parentClass: GObject.ObjectClass
}

export abstract class MapEntryClass {

    // Own properties of Gee-1.0.Gee.MapEntryClass

    static name: string
}

export interface EntryPrivate {
}

export class EntryPrivate {

    // Own properties of Gee-1.0.Gee.EntryPrivate

    static name: string
}

export interface MapIteratorIface {

    // Own fields of Gee-1.0.Gee.MapIteratorIface

    parentIface: GObject.TypeInterface
    next: (self: MapIterator) => boolean
    hasNext: (self: MapIterator) => boolean
    first: (self: MapIterator) => boolean
    getKey: (self: MapIterator) => object | null
    getValue: (self: MapIterator) => object | null
    setValue: (self: MapIterator, value?: object | null) => void
    unset: (self: MapIterator) => void
}

export abstract class MapIteratorIface {

    // Own properties of Gee-1.0.Gee.MapIteratorIface

    static name: string
}

export interface MultiMapIface {

    // Own fields of Gee-1.0.Gee.MultiMapIface

    parentIface: GObject.TypeInterface
    getKeys: (self: MultiMap) => Set
    getAllKeys: (self: MultiMap) => MultiSet
    getValues: (self: MultiMap) => Collection
    contains: (self: MultiMap, key?: object | null) => boolean
    get: (self: MultiMap, key?: object | null) => Collection
    set: (self: MultiMap, key?: object | null, value?: object | null) => void
    remove: (self: MultiMap, key?: object | null, value?: object | null) => boolean
    removeAll: (self: MultiMap, key?: object | null) => boolean
    clear: (self: MultiMap) => void
}

export abstract class MultiMapIface {

    // Own properties of Gee-1.0.Gee.MultiMapIface

    static name: string
}

export interface MultiSetIface {

    // Own fields of Gee-1.0.Gee.MultiSetIface

    parentIface: GObject.TypeInterface
    count: (self: MultiSet, item?: object | null) => number
}

export abstract class MultiSetIface {

    // Own properties of Gee-1.0.Gee.MultiSetIface

    static name: string
}

export interface QueueIface {

    // Own fields of Gee-1.0.Gee.QueueIface

    parentIface: GObject.TypeInterface
    offer: (self: Queue, element?: object | null) => boolean
    peek: (self: Queue) => object | null
    poll: (self: Queue) => object | null
    drain: (self: Queue, recipient: Collection, amount: number) => number
}

export abstract class QueueIface {

    // Own properties of Gee-1.0.Gee.QueueIface

    static name: string
}

export interface SetIface {

    // Own fields of Gee-1.0.Gee.SetIface

    parentIface: GObject.TypeInterface
}

export abstract class SetIface {

    // Own properties of Gee-1.0.Gee.SetIface

    static name: string
}

export interface SortedSetIface {

    // Own fields of Gee-1.0.Gee.SortedSetIface

    parentIface: GObject.TypeInterface
    first: (self: SortedSet) => object | null
    last: (self: SortedSet) => object | null
    bidirIterator: (self: SortedSet) => BidirIterator
    iteratorAt: (self: SortedSet, element?: object | null) => BidirIterator | null
    lower: (self: SortedSet, element?: object | null) => object | null
    higher: (self: SortedSet, element?: object | null) => object | null
    floor: (self: SortedSet, element?: object | null) => object | null
    ceil: (self: SortedSet, element?: object | null) => object | null
    headSet: (self: SortedSet, before?: object | null) => SortedSet
    tailSet: (self: SortedSet, after?: object | null) => SortedSet
    subSet: (self: SortedSet, from?: object | null, to?: object | null) => SortedSet
}

export abstract class SortedSetIface {

    // Own properties of Gee-1.0.Gee.SortedSetIface

    static name: string
}
