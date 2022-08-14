
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GnomeMaps-1.0
 */

import type * as Rest from './Rest-0.7.js';
import type * as Soup from './Soup-2.4.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as GeocodeGlib from './GeocodeGlib-1.0.js';
import type * as Json from './Json-1.0.js';
import type * as Champlain from './Champlain-0.12.js';
import type * as Clutter from './Clutter-1.0.js';
import type * as cairo from './cairo-1.0.js';
import type * as GL from './GL-1.0.js';
import type * as CoglPango from './CoglPango-1.0.js';
import type * as PangoCairo from './PangoCairo-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as Cogl from './Cogl-1.0.js';
import type * as Atk from './Atk-1.0.js';

export enum ContactStoreState {
    /**
     * Initial state
     */
    INITIAL,
    /**
     * Loading
     */
    LOADING,
    /**
     * Loaded
     */
    LOADED,
}
export function osmFinalize(): void
export function osmInit(): void
export function osmParse(content: string, length: number): OSMObject
export interface ContactGeocodeCallback {
    (contact: Contact): void
}
export interface ContactStoreLookupCallback {
    (contact: Contact): void
}
export module Contact {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GnomeMaps-1.0.GnomeMaps.Contact

        /**
         * The icon of the contact.
         */
        icon?: Gio.Icon | null
        /**
         * The unique id of the contact.
         */
        id?: string | null
        /**
         * The name of the contact.
         */
        name?: string | null
    }

}

export interface Contact {

    // Own properties of GnomeMaps-1.0.GnomeMaps.Contact

    /**
     * The bounding box for the contact.
     */
    readonly boundingBox: Champlain.BoundingBox
    /**
     * The icon of the contact.
     */
    icon: Gio.Icon
    /**
     * The unique id of the contact.
     */
    id: string
    /**
     * The name of the contact.
     */
    name: string

    // Own fields of GnomeMaps-1.0.GnomeMaps.Contact

    parentInstance: GObject.Object
    priv: ContactPrivate

    // Owm methods of GnomeMaps-1.0.GnomeMaps.Contact

    addPlace(place: GeocodeGlib.Place): void
    geocode(callback: ContactGeocodeCallback): void
    getPlaces(): GeocodeGlib.Place[]

    // Class property signals of GnomeMaps-1.0.GnomeMaps.Contact

    connect(sigName: "notify::bounding-box", callback: any): number
    on(sigName: "notify::bounding-box", callback: any): number
    once(sigName: "notify::bounding-box", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bounding-box", ...args: any[]): void
    connect(sigName: "notify::icon", callback: any): number
    on(sigName: "notify::icon", callback: any): number
    once(sigName: "notify::icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
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

export class Contact extends GObject.Object {

    // Own properties of GnomeMaps-1.0.GnomeMaps.Contact

    static name: string

    // Constructors of GnomeMaps-1.0.GnomeMaps.Contact

    constructor(config?: Contact.ConstructorProperties) 
    constructor() 
    static new(): Contact
    _init(config?: Contact.ConstructorProperties): void
}

export module ContactStore {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ContactStore {

    // Own properties of GnomeMaps-1.0.GnomeMaps.ContactStore

    /**
     * The type of the contact.
     */
    readonly state: ContactStoreState

    // Own fields of GnomeMaps-1.0.GnomeMaps.ContactStore

    parentInstance: GObject.Object
    priv: ContactStorePrivate

    // Owm methods of GnomeMaps-1.0.GnomeMaps.ContactStore

    getContacts(): Contact[]
    /**
     * Load contacts from available backends.
     */
    load(): void
    lookup(id: string, callback: ContactStoreLookupCallback): void

    // Class property signals of GnomeMaps-1.0.GnomeMaps.ContactStore

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

export class ContactStore extends GObject.Object {

    // Own properties of GnomeMaps-1.0.GnomeMaps.ContactStore

    static name: string

    // Constructors of GnomeMaps-1.0.GnomeMaps.ContactStore

    constructor(config?: ContactStore.ConstructorProperties) 
    constructor() 
    static new(): ContactStore
    _init(config?: ContactStore.ConstructorProperties): void
}

export module FileTileSource {

    // Constructor properties interface

    export interface ConstructorProperties extends Champlain.TileSource.ConstructorProperties {

        // Own constructor properties of GnomeMaps-1.0.GnomeMaps.FileTileSource

        /**
         * The path to the tile source.
         */
        path?: string | null
    }

}

export interface FileTileSource {

    // Own properties of GnomeMaps-1.0.GnomeMaps.FileTileSource

    /**
     * The maximum zoom level of the tile source.
     */
    readonly maxZoom: number
    /**
     * The minimum zoom level of the tile source.
     */
    readonly minZoom: number
    /**
     * The path to the tile source.
     */
    path: string
    /**
     * Set a bounding box to limit the world to. No tiles will be loaded
     * outside of this bounding box. It will not be possible to scroll outside
     * of this bounding box.
     */
    readonly world: Champlain.BoundingBox

    // Own fields of GnomeMaps-1.0.GnomeMaps.FileTileSource

    parentInstance: any
    priv: any

    // Owm methods of GnomeMaps-1.0.GnomeMaps.FileTileSource

    prepare(): boolean

    // Class property signals of GnomeMaps-1.0.GnomeMaps.FileTileSource

    connect(sigName: "notify::max-zoom", callback: any): number
    on(sigName: "notify::max-zoom", callback: any): number
    once(sigName: "notify::max-zoom", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-zoom", ...args: any[]): void
    connect(sigName: "notify::min-zoom", callback: any): number
    on(sigName: "notify::min-zoom", callback: any): number
    once(sigName: "notify::min-zoom", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::min-zoom", ...args: any[]): void
    connect(sigName: "notify::path", callback: any): number
    on(sigName: "notify::path", callback: any): number
    once(sigName: "notify::path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::world", callback: any): number
    on(sigName: "notify::world", callback: any): number
    once(sigName: "notify::world", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::world", ...args: any[]): void
    connect(sigName: "notify::cache", callback: any): number
    on(sigName: "notify::cache", callback: any): number
    once(sigName: "notify::cache", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cache", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::license", callback: any): number
    on(sigName: "notify::license", callback: any): number
    once(sigName: "notify::license", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::license-uri", callback: any): number
    on(sigName: "notify::license-uri", callback: any): number
    once(sigName: "notify::license-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::license-uri", ...args: any[]): void
    connect(sigName: "notify::max-zoom-level", callback: any): number
    on(sigName: "notify::max-zoom-level", callback: any): number
    once(sigName: "notify::max-zoom-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: any): number
    on(sigName: "notify::min-zoom-level", callback: any): number
    once(sigName: "notify::min-zoom-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::projection", callback: any): number
    on(sigName: "notify::projection", callback: any): number
    once(sigName: "notify::projection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::projection", ...args: any[]): void
    connect(sigName: "notify::tile-size", callback: any): number
    on(sigName: "notify::tile-size", callback: any): number
    once(sigName: "notify::tile-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: "notify::next-source", callback: any): number
    on(sigName: "notify::next-source", callback: any): number
    once(sigName: "notify::next-source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: any): number
    on(sigName: "notify::renderer", callback: any): number
    once(sigName: "notify::renderer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #MapsFileTileSource structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class FileTileSource extends Champlain.TileSource {

    // Own properties of GnomeMaps-1.0.GnomeMaps.FileTileSource

    static name: string

    // Constructors of GnomeMaps-1.0.GnomeMaps.FileTileSource

    constructor(config?: FileTileSource.ConstructorProperties) 
    _init(config?: FileTileSource.ConstructorProperties): void
}

export module OSMChangeset {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GnomeMaps-1.0.GnomeMaps.OSMChangeset

        /**
         * The comment of the changes.
         */
        comment?: string | null
        createdBy?: string | null
    }

}

export interface OSMChangeset {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    /**
     * The comment of the changes.
     */
    comment: string
    createdBy: string

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    parentInstance: GObject.Object
    priv: OSMChangesetPrivate

    // Owm methods of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    serialize(): string

    // Class property signals of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    connect(sigName: "notify::comment", callback: any): number
    on(sigName: "notify::comment", callback: any): number
    once(sigName: "notify::comment", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::comment", ...args: any[]): void
    connect(sigName: "notify::created-by", callback: any): number
    on(sigName: "notify::created-by", callback: any): number
    once(sigName: "notify::created-by", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::created-by", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class OSMChangeset extends GObject.Object {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    static name: string

    // Constructors of GnomeMaps-1.0.GnomeMaps.OSMChangeset

    constructor(config?: OSMChangeset.ConstructorProperties) 
    constructor(comment: string | null, createdBy: string | null) 
    static new(comment: string | null, createdBy: string | null): OSMChangeset
    _init(config?: OSMChangeset.ConstructorProperties): void
}

export module OSMNode {

    // Constructor properties interface

    export interface ConstructorProperties extends OSMObject.ConstructorProperties {

        // Own constructor properties of GnomeMaps-1.0.GnomeMaps.OSMNode

        /**
         * The latitude of the node.
         */
        latitude?: number | null
        /**
         * The longitude of the node.
         */
        longitude?: number | null
    }

}

export interface OSMNode {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMNode

    /**
     * The latitude of the node.
     */
    latitude: number
    /**
     * The longitude of the node.
     */
    longitude: number

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMNode

    parentInstance: any
    priv: OSMNodePrivate

    // Class property signals of GnomeMaps-1.0.GnomeMaps.OSMNode

    connect(sigName: "notify::latitude", callback: any): number
    on(sigName: "notify::latitude", callback: any): number
    once(sigName: "notify::latitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: any): number
    on(sigName: "notify::longitude", callback: any): number
    once(sigName: "notify::longitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: "notify::changeset", callback: any): number
    on(sigName: "notify::changeset", callback: any): number
    once(sigName: "notify::changeset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::changeset", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::version", callback: any): number
    on(sigName: "notify::version", callback: any): number
    once(sigName: "notify::version", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class OSMNode extends OSMObject {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMNode

    static name: string

    // Constructors of GnomeMaps-1.0.GnomeMaps.OSMNode

    constructor(config?: OSMNode.ConstructorProperties) 
    constructor(id: number, version: number, changeset: number, longitude: number, latitude: number) 
    static new(id: number, version: number, changeset: number, longitude: number, latitude: number): OSMNode
    _init(config?: OSMNode.ConstructorProperties): void
}

export module OSMOAuthProxyCall {

    // Constructor properties interface

    export interface ConstructorProperties extends Rest.OAuthProxyCall.ConstructorProperties {
    }

}

export interface OSMOAuthProxyCall {

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCall

    parent: Rest.OAuthProxyCall & Rest.ProxyCall & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCall

    connect(sigName: "notify::proxy", callback: any): number
    on(sigName: "notify::proxy", callback: any): number
    once(sigName: "notify::proxy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class OSMOAuthProxyCall extends Rest.OAuthProxyCall {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCall

    static name: string

    // Constructors of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCall

    constructor(config?: OSMOAuthProxyCall.ConstructorProperties) 
    constructor(proxy: Rest.OAuthProxy, content: string) 
    static new(proxy: Rest.OAuthProxy, content: string): OSMOAuthProxyCall
    _init(config?: OSMOAuthProxyCall.ConstructorProperties): void
}

export module OSMObject {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GnomeMaps-1.0.GnomeMaps.OSMObject

        /**
         * The OSM changeset for the current upload of the object.
         */
        changeset?: number | null
        /**
         * The OSM id of the object.
         */
        id?: number | null
        /**
         * The latest OSM version of the object.
         */
        version?: number | null
    }

}

export interface OSMObject {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMObject

    /**
     * The OSM changeset for the current upload of the object.
     */
    changeset: number
    /**
     * The OSM id of the object.
     */
    id: number
    /**
     * The latest OSM version of the object.
     */
    version: number

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMObject

    parentInstance: GObject.Object

    // Owm methods of GnomeMaps-1.0.GnomeMaps.OSMObject

    deleteTag(key: string): void
    getTag(key: string): string
    serialize(): string
    setTag(key: string, value: string): void

    // Class property signals of GnomeMaps-1.0.GnomeMaps.OSMObject

    connect(sigName: "notify::changeset", callback: any): number
    on(sigName: "notify::changeset", callback: any): number
    once(sigName: "notify::changeset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::changeset", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::version", callback: any): number
    on(sigName: "notify::version", callback: any): number
    once(sigName: "notify::version", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class OSMObject extends GObject.Object {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMObject

    static name: string

    // Constructors of GnomeMaps-1.0.GnomeMaps.OSMObject

    constructor(config?: OSMObject.ConstructorProperties) 
    _init(config?: OSMObject.ConstructorProperties): void
}

export module OSMRelation {

    // Constructor properties interface

    export interface ConstructorProperties extends OSMObject.ConstructorProperties {
    }

}

export interface OSMRelation {

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMRelation

    parentInstance: any
    priv: OSMRelationPrivate

    // Owm methods of GnomeMaps-1.0.GnomeMaps.OSMRelation

    addMember(role: string, type: number, ref: number): void

    // Class property signals of GnomeMaps-1.0.GnomeMaps.OSMRelation

    connect(sigName: "notify::changeset", callback: any): number
    on(sigName: "notify::changeset", callback: any): number
    once(sigName: "notify::changeset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::changeset", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::version", callback: any): number
    on(sigName: "notify::version", callback: any): number
    once(sigName: "notify::version", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class OSMRelation extends OSMObject {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMRelation

    static name: string

    // Constructors of GnomeMaps-1.0.GnomeMaps.OSMRelation

    constructor(config?: OSMRelation.ConstructorProperties) 
    constructor(id: number, version: number, changeset: number) 
    static new(id: number, version: number, changeset: number): OSMRelation
    _init(config?: OSMRelation.ConstructorProperties): void
}

export module OSMWay {

    // Constructor properties interface

    export interface ConstructorProperties extends OSMObject.ConstructorProperties {
    }

}

export interface OSMWay {

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMWay

    parentInstance: any
    priv: OSMWayPrivate

    // Owm methods of GnomeMaps-1.0.GnomeMaps.OSMWay

    addNodeId(id: number): void

    // Class property signals of GnomeMaps-1.0.GnomeMaps.OSMWay

    connect(sigName: "notify::changeset", callback: any): number
    on(sigName: "notify::changeset", callback: any): number
    once(sigName: "notify::changeset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::changeset", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::version", callback: any): number
    on(sigName: "notify::version", callback: any): number
    once(sigName: "notify::version", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class OSMWay extends OSMObject {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMWay

    static name: string

    // Constructors of GnomeMaps-1.0.GnomeMaps.OSMWay

    constructor(config?: OSMWay.ConstructorProperties) 
    constructor(id: number, version: number, changeset: number) 
    static new(id: number, version: number, changeset: number): OSMWay
    _init(config?: OSMWay.ConstructorProperties): void
}

export interface ContactClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.ContactClass

    parentClass: GObject.ObjectClass
}

export abstract class ContactClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.ContactClass

    static name: string
}

export interface ContactPrivate {
}

export class ContactPrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.ContactPrivate

    static name: string
}

export interface ContactStoreClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.ContactStoreClass

    parentClass: GObject.ObjectClass
}

export abstract class ContactStoreClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.ContactStoreClass

    static name: string
}

export interface ContactStorePrivate {
}

export class ContactStorePrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.ContactStorePrivate

    static name: string
}

export interface FileTileSourceClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.FileTileSourceClass

    parentClass: Champlain.TileSourceClass
}

export abstract class FileTileSourceClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.FileTileSourceClass

    static name: string
}

export interface FileTileSourcePrivate {
}

export class FileTileSourcePrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.FileTileSourcePrivate

    static name: string
}

export interface OSMChangesetClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMChangesetClass

    parentClass: GObject.ObjectClass
}

export abstract class OSMChangesetClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMChangesetClass

    static name: string
}

export interface OSMChangesetPrivate {
}

export class OSMChangesetPrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMChangesetPrivate

    static name: string
}

export interface OSMNodeClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMNodeClass

    parentClass: OSMObjectClass
}

export abstract class OSMNodeClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMNodeClass

    static name: string
}

export interface OSMNodePrivate {
}

export class OSMNodePrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMNodePrivate

    static name: string
}

export interface OSMOAuthProxyCallClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCallClass

    parentClass: Rest.OAuthProxyCallClass
}

export abstract class OSMOAuthProxyCallClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCallClass

    static name: string
}

export interface OSMOAuthProxyCallPrivate {
}

export class OSMOAuthProxyCallPrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMOAuthProxyCallPrivate

    static name: string
}

export interface OSMObjectClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMObjectClass

    parentClass: GObject.ObjectClass
    getXmlTagName: () => string
}

export abstract class OSMObjectClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMObjectClass

    static name: string
}

export interface OSMObjectPrivate {
}

export class OSMObjectPrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMObjectPrivate

    static name: string
}

export interface OSMRelationClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMRelationClass

    parentClass: OSMObjectClass
}

export abstract class OSMRelationClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMRelationClass

    static name: string
}

export interface OSMRelationPrivate {
}

export class OSMRelationPrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMRelationPrivate

    static name: string
}

export interface OSMWayClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps.OSMWayClass

    parentClass: OSMObjectClass
}

export abstract class OSMWayClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMWayClass

    static name: string
}

export interface OSMWayPrivate {
}

export class OSMWayPrivate {

    // Own properties of GnomeMaps-1.0.GnomeMaps.OSMWayPrivate

    static name: string
}

export interface _ContactClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._ContactClass

    parentClass: GObject.ObjectClass
}

export class _ContactClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._ContactClass

    static name: string
}

export interface _ContactStoreClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._ContactStoreClass

    parentClass: GObject.ObjectClass
}

export class _ContactStoreClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._ContactStoreClass

    static name: string
}

export interface _OSMChangesetClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._OSMChangesetClass

    parentClass: GObject.ObjectClass
}

export class _OSMChangesetClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._OSMChangesetClass

    static name: string
}

export interface _OSMNodeClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._OSMNodeClass

    parentClass: OSMObjectClass
}

export class _OSMNodeClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._OSMNodeClass

    static name: string
}

export interface _OSMRelationClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._OSMRelationClass

    parentClass: OSMObjectClass
}

export class _OSMRelationClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._OSMRelationClass

    static name: string
}

export interface _OSMWayClass {

    // Own fields of GnomeMaps-1.0.GnomeMaps._OSMWayClass

    parentClass: OSMObjectClass
}

export class _OSMWayClass {

    // Own properties of GnomeMaps-1.0.GnomeMaps._OSMWayClass

    static name: string
}
