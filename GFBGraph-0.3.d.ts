
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GFBGraph-0.3
 */

import type * as Soup from './Soup-2.4.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Rest from './Rest-0.7.js';
import type * as Json from './Json-1.0.js';

export enum NodeError {
    CONNECTIONABLE,
    CONNECTABLE,
}
/**
 * Create a new #RestProxyCall pointing to the Facebook Graph API url (https://graph.facebook.com)
 * and processed by the authorizer to allow queries.
 * @param authorizer a #GFBGraphAuthorizer.
 */
export function newRestCall(authorizer: Authorizer): Rest.ProxyCall
export module Authorizer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Authorizer {

    // Owm methods of GFBGraph-0.3.GFBGraph.Authorizer

    // Has conflict: processCall(call: Rest.ProxyCall): void
    // Has conflict: processMessage(message: Soup.Message): void
    // Has conflict: refreshAuthorization(cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of GFBGraph-0.3.GFBGraph.Authorizer

    /**
     * Adds the necessary authorization to `call`.
     * 
     * This method modifies `call` in place and is thread safe.
     * @virtual 
     * @param call A #RestProxyCall.
     */
    processCall(call: Rest.ProxyCall): void
    /**
     * Adds the necessary authorization to `message`. The type of `message`
     * can be DELETE, GET and POST.
     * 
     * This method modifies `message` in place and is thread safe.
     * @virtual 
     * @param message A #SoupMessage.
     */
    processMessage(message: Soup.Message): void
    /**
     * Synchronously forces `iface` to refresh any authorization tokens
     * held by it.
     * 
     * This method is thread safe.
     * @virtual 
     * @param cancellable An optional #GCancellable object, or %NULL.
     */
    refreshAuthorization(cancellable: Gio.Cancellable | null): boolean

    // Class property signals of GFBGraph-0.3.GFBGraph.Authorizer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Authorizer extends GObject.Object {

    // Own properties of GFBGraph-0.3.GFBGraph.Authorizer

    static name: string

    // Constructors of GFBGraph-0.3.GFBGraph.Authorizer

    constructor(config?: Authorizer.ConstructorProperties) 
    _init(config?: Authorizer.ConstructorProperties): void
}

export module Connectable {

    // Constructor properties interface

    export interface ConstructorProperties extends Node.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Connectable extends Node {

    // Owm methods of GFBGraph-0.3.GFBGraph.Connectable

    /**
     * In most cases, #GFBGraphConnectable implementers can use this function in order to parse
     * the response when a gfbgraph_node_get_connection_nodes() is executed and the
     * gfbgraph_connectable_parse_connected_data() was called.
     * 
     * Normally, Facebook Graph API returns the connections in the same way, using JSON objects,
     * with a root object called "data".
     * @param payload a const #gchar with the response string from the Facebook Graph API.
     */
    defaultParseConnectedData(payload: string): Node[]
    /**
     * Get the Facebook Graph API function path to retrieve the nodes connected with `node_type`
     * managed by the #GFBGraphConnectable object.
     * @param nodeType a #GType, required a #GFBGRAPH_TYPE_NODE or children.
     */
    getConnectionPath(nodeType: GObject.GType): string
    // Has conflict: getConnectionPostParams(nodeType: GObject.GType): GLib.HashTable
    /**
     * Check if `self` object, normally a #GFBGraphNode implementing the #GFBGraphConnectable interface,
     * has the possibility to be connected to another node of type `node_type`.
     * @param nodeType a #GType, required a #GFBGRAPH_TYPE_NODE or children.
     */
    isConnectableTo(nodeType: GObject.GType): boolean
    // Has conflict: parseConnectedData(payload: string): Node[]

    // Own virtual methods of GFBGraph-0.3.GFBGraph.Connectable

    /**
     * Get the params to be inserted in a request to the Facebook Graph API
     * in order to append the node `self` to a node of type `node_type`.
     * @virtual 
     * @param nodeType a #GType, required a #GFBGRAPH_TYPE_NODE or children.
     */
    getConnectionPostParams(nodeType: GObject.GType): GLib.HashTable
    /**
     * Parse the response contained in `payload` when a gfbgraph_node_get_connection_nodes() was
     * executed.
     * @virtual 
     * @param payload a const #gchar with the response string from the Facebook Graph API.
     */
    parseConnectedData(payload: string): Node[]

    // Class property signals of GFBGraph-0.3.GFBGraph.Connectable

    connect(sigName: "notify::created-time", callback: any): number
    on(sigName: "notify::created-time", callback: any): number
    once(sigName: "notify::created-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::link", callback: any): number
    on(sigName: "notify::link", callback: any): number
    once(sigName: "notify::link", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::link", ...args: any[]): void
    connect(sigName: "notify::updated-time", callback: any): number
    on(sigName: "notify::updated-time", callback: any): number
    once(sigName: "notify::updated-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated-time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Connectable extends GObject.Object {

    // Own properties of GFBGraph-0.3.GFBGraph.Connectable

    static name: string

    // Constructors of GFBGraph-0.3.GFBGraph.Connectable

    constructor(config?: Connectable.ConstructorProperties) 
    _init(config?: Connectable.ConstructorProperties): void
}

export module Album {

    // Constructor properties interface

    export interface ConstructorProperties extends Connectable.ConstructorProperties, Node.ConstructorProperties {

        // Own constructor properties of GFBGraph-0.3.GFBGraph.Album

        /**
         * The number of photos in the album.
         */
        count?: number | null
        coverPhoto?: string | null
        /**
         * The album description given by the owner.
         */
        description?: string | null
        /**
         * The album name.
         */
        name?: string | null
    }

}

export interface Album extends Connectable {

    // Own properties of GFBGraph-0.3.GFBGraph.Album

    /**
     * The number of photos in the album.
     */
    count: number
    coverPhoto: string
    /**
     * The album description given by the owner.
     */
    description: string
    /**
     * The album name.
     */
    name: string

    // Own fields of GFBGraph-0.3.GFBGraph.Album

    parent: Node & GObject.Object

    // Owm methods of GFBGraph-0.3.GFBGraph.Album

    getCount(): number
    getCoverPhotoId(): string
    getDescription(): string
    getName(): string
    /**
     * Sets the description for the `album`.
     * @param description a const pointer to a #gchar.
     */
    setDescription(description: string): void
    /**
     * Sets the name for the `album`.
     * @param name a const pointer to a #gchar.
     */
    setName(name: string): void

    // Class property signals of GFBGraph-0.3.GFBGraph.Album

    connect(sigName: "notify::count", callback: any): number
    on(sigName: "notify::count", callback: any): number
    once(sigName: "notify::count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::count", ...args: any[]): void
    connect(sigName: "notify::cover-photo", callback: any): number
    on(sigName: "notify::cover-photo", callback: any): number
    once(sigName: "notify::cover-photo", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cover-photo", ...args: any[]): void
    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::created-time", callback: any): number
    on(sigName: "notify::created-time", callback: any): number
    once(sigName: "notify::created-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::link", callback: any): number
    on(sigName: "notify::link", callback: any): number
    once(sigName: "notify::link", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::link", ...args: any[]): void
    connect(sigName: "notify::updated-time", callback: any): number
    on(sigName: "notify::updated-time", callback: any): number
    once(sigName: "notify::updated-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated-time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Album extends Node {

    // Own properties of GFBGraph-0.3.GFBGraph.Album

    static name: string

    // Constructors of GFBGraph-0.3.GFBGraph.Album

    constructor(config?: Album.ConstructorProperties) 
    /**
     * Creates a new #GFBGraphAlbum.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GFBGraphAlbum.
     * @constructor 
     */
    static new(): Album

    // Overloads of new

    /**
     * Creates a new #GFBGraphNode.
     * @constructor 
     */
    static new(): Node
    /**
     * Retrieves an album node from the Facebook Graph with the give ID.
     * @constructor 
     * @param authorizer a #GFBGraphAuthorizer.
     * @param id a const #gchar with the album ID.
     */
    static newFromId(authorizer: Authorizer, id: string): Album

    // Overloads of newFromId

    /**
     * Retrieve a node object as a #GFBgraphNode of #node_type type, with the given `id` from the Facebook Graph.
     * @constructor 
     * @param authorizer a #GFBGraphAuthorizer.
     * @param id a const #gchar with the node ID.
     * @param nodeType a #GFBGraphNode type #GType.
     */
    static newFromId(authorizer: Authorizer, id: string, nodeType: GObject.GType): Node
    _init(config?: Album.ConstructorProperties): void
}

export module GoaAuthorizer {

    // Constructor properties interface

    export interface ConstructorProperties extends Authorizer.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface GoaAuthorizer extends Authorizer {

    // Own fields of GFBGraph-0.3.GFBGraph.GoaAuthorizer

    parent: GObject.Object

    // Class property signals of GFBGraph-0.3.GFBGraph.GoaAuthorizer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class GoaAuthorizer extends GObject.Object {

    // Own properties of GFBGraph-0.3.GFBGraph.GoaAuthorizer

    static name: string

    // Constructors of GFBGraph-0.3.GFBGraph.GoaAuthorizer

    constructor(config?: GoaAuthorizer.ConstructorProperties) 
    _init(config?: GoaAuthorizer.ConstructorProperties): void
}

export module Node {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GFBGraph-0.3.GFBGraph.Node

        createdTime?: string | null
        /**
         * The node ID. All nodes have one of this.
         */
        id?: string | null
        /**
         * The node link. An URL to the node on Facebook.
         */
        link?: string | null
        updatedTime?: string | null
    }

}

export interface Node {

    // Own properties of GFBGraph-0.3.GFBGraph.Node

    createdTime: string
    /**
     * The node ID. All nodes have one of this.
     */
    id: string
    /**
     * The node link. An URL to the node on Facebook.
     */
    link: string
    updatedTime: string

    // Own fields of GFBGraph-0.3.GFBGraph.Node

    parent: GObject.Object

    // Owm methods of GFBGraph-0.3.GFBGraph.Node

    /**
     * Appends `connect_node` to `node`. `connect_node` must implement the #GFBGraphConnectable interface
     * and be connectable to `node` GType.
     * @param connectNode A #GFBGraphNode.
     * @param authorizer A #GFBGraphAuthorizer.
     */
    appendConnection(connectNode: Node, authorizer: Authorizer): boolean
    /**
     * Retrieve the nodes of type `node_type` connected to the `node` object. The `node_type` object must
     * implement the #GFBGraphConnectionable interface and be connectable to `node` type object.
     * See gfbgraph_node_get_connection_nodes_async() for the asynchronous version of this call.
     * @param nodeType a #GFBGraphNode type #GType that determines the kind of nodes to retrieve.
     * @param authorizer a #GFBGraphAuthorizer.
     */
    getConnectionNodes(nodeType: GObject.GType, authorizer: Authorizer): Node[]
    /**
     * Asynchronously retrieve the list of nodes of type `node_type` connected to the `node` object. See
     * gfbgraph_node_get_connection_nodes() for the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can then call gfbgraph_node_get_connection_nodes_finish()
     * to get the list of connected nodes.
     * @param nodeType a #GFBGraphNode type #GType that must implement the #GFBGraphConnectionable interface.
     * @param authorizer a #GFBGraphAuthorizer.
     * @param cancellable An optional #GCancellable object, or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is completed.
     */
    getConnectionNodesAsync(nodeType: GObject.GType, authorizer: Authorizer, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous operation started with
     * gfbgraph_node_get_connection_nodes_async().
     * @param result A #GAsyncResult.
     */
    getConnectionNodesAsyncFinish(result: Gio.AsyncResult): Node[]
    /**
     * Gets a node created time.
     */
    getCreatedTime(): string
    /**
     * Gets the Facebook Graph unique node ID.
     */
    getId(): string
    getLink(): string
    /**
     * Gets a node updated time.
     */
    getUpdatedTime(): string
    /**
     * Sets the ID for a node. Just useful when a new node is created
     * and the Graph API returns the ID of the new created node.
     * @param id a const pointer to a #gchar.
     */
    setId(id: string): void

    // Class property signals of GFBGraph-0.3.GFBGraph.Node

    connect(sigName: "notify::created-time", callback: any): number
    on(sigName: "notify::created-time", callback: any): number
    once(sigName: "notify::created-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::link", callback: any): number
    on(sigName: "notify::link", callback: any): number
    once(sigName: "notify::link", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::link", ...args: any[]): void
    connect(sigName: "notify::updated-time", callback: any): number
    on(sigName: "notify::updated-time", callback: any): number
    once(sigName: "notify::updated-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated-time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Node extends GObject.Object {

    // Own properties of GFBGraph-0.3.GFBGraph.Node

    static name: string

    // Constructors of GFBGraph-0.3.GFBGraph.Node

    constructor(config?: Node.ConstructorProperties) 
    /**
     * Creates a new #GFBGraphNode.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GFBGraphNode.
     * @constructor 
     */
    static new(): Node
    /**
     * Retrieve a node object as a #GFBgraphNode of #node_type type, with the given `id` from the Facebook Graph.
     * @constructor 
     * @param authorizer a #GFBGraphAuthorizer.
     * @param id a const #gchar with the node ID.
     * @param nodeType a #GFBGraphNode type #GType.
     */
    static newFromId(authorizer: Authorizer, id: string, nodeType: GObject.GType): Node
    _init(config?: Node.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Photo {

    // Constructor properties interface

    export interface ConstructorProperties extends Connectable.ConstructorProperties, Json.Serializable.ConstructorProperties, Node.ConstructorProperties {

        // Own constructor properties of GFBGraph-0.3.GFBGraph.Photo

        /**
         * The default photo height, up to 720px.
         */
        height?: number | null
        /**
         * A list with the available representations of the photo, in differents sizes
         */
        images?: object | null
        /**
         * The name of the photo given by his owner.
         */
        name?: string | null
        /**
         * An URI for the photo, with a maximum width or height of 720px.
         */
        source?: string | null
        /**
         * The default photo width, up to 720px.
         */
        width?: number | null
    }

}

export interface Photo extends Connectable, Json.Serializable {

    // Own properties of GFBGraph-0.3.GFBGraph.Photo

    /**
     * The default photo height, up to 720px.
     */
    height: number
    /**
     * A list with the available representations of the photo, in differents sizes
     */
    images: object
    /**
     * The name of the photo given by his owner.
     */
    name: string
    /**
     * An URI for the photo, with a maximum width or height of 720px.
     */
    source: string
    /**
     * The default photo width, up to 720px.
     */
    width: number

    // Own fields of GFBGraph-0.3.GFBGraph.Photo

    parent: Node & GObject.Object

    // Owm methods of GFBGraph-0.3.GFBGraph.Photo

    /**
     * Download the default sized photo pointed by `photo,` with a maximum width or height of 720px.
     * The photo always is a JPEG.
     * @param authorizer a #GFBGraphAuthorizer.
     */
    downloadDefaultSize(authorizer: Authorizer): Gio.InputStream
    getDefaultHeight(): number
    getDefaultSourceUri(): string
    getDefaultWidth(): number
    getImageHires(): PhotoImage
    getImageNearHeight(height: number): PhotoImage
    getImageNearWidth(width: number): PhotoImage
    getImages(): PhotoImage[]
    getName(): string

    // Conflicting methods

    /**
     * Calls the [vfunc`Json`.Serializable.get_property] implementation
     * on the `JsonSerializable` instance, which will get the value of
     * the given property.
     * @virtual 
     * @param pspec a property description
     */
    getProperty(pspec: GObject.ParamSpec): /* value */ any

    // Overloads of getProperty

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Calls the [vfunc`Json`.Serializable.set_property] implementation
     * on the `JsonSerializable` instance, which will set the property
     * with the given value.
     * @virtual 
     * @param pspec a property description
     * @param value the property value to set
     */
    setProperty(pspec: GObject.ParamSpec, value: any): void

    // Overloads of setProperty

    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty<T = any>(propertyName: string, value: T): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty<T = any>(propertyName: string, value: T): void

    // Class property signals of GFBGraph-0.3.GFBGraph.Photo

    connect(sigName: "notify::height", callback: any): number
    on(sigName: "notify::height", callback: any): number
    once(sigName: "notify::height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::images", callback: any): number
    on(sigName: "notify::images", callback: any): number
    once(sigName: "notify::images", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::images", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::source", callback: any): number
    on(sigName: "notify::source", callback: any): number
    once(sigName: "notify::source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::width", callback: any): number
    on(sigName: "notify::width", callback: any): number
    once(sigName: "notify::width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::created-time", callback: any): number
    on(sigName: "notify::created-time", callback: any): number
    once(sigName: "notify::created-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::link", callback: any): number
    on(sigName: "notify::link", callback: any): number
    once(sigName: "notify::link", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::link", ...args: any[]): void
    connect(sigName: "notify::updated-time", callback: any): number
    on(sigName: "notify::updated-time", callback: any): number
    once(sigName: "notify::updated-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated-time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Photo extends Node {

    // Own properties of GFBGraph-0.3.GFBGraph.Photo

    static name: string

    // Constructors of GFBGraph-0.3.GFBGraph.Photo

    constructor(config?: Photo.ConstructorProperties) 
    /**
     * Creates a new #GFBGraphPhoto.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GFBGraphPhoto.
     * @constructor 
     */
    static new(): Photo

    // Overloads of new

    /**
     * Creates a new #GFBGraphNode.
     * @constructor 
     */
    static new(): Node
    /**
     * Retrieves an photo node from the Facebook Graph with the give ID.
     * @constructor 
     * @param authorizer a #GFBGraphAuthorizer.
     * @param id a const #gchar with the photo ID.
     */
    static newFromId(authorizer: Authorizer, id: string): Photo

    // Overloads of newFromId

    /**
     * Retrieve a node object as a #GFBgraphNode of #node_type type, with the given `id` from the Facebook Graph.
     * @constructor 
     * @param authorizer a #GFBGraphAuthorizer.
     * @param id a const #gchar with the node ID.
     * @param nodeType a #GFBGraphNode type #GType.
     */
    static newFromId(authorizer: Authorizer, id: string, nodeType: GObject.GType): Node
    _init(config?: Photo.ConstructorProperties): void
}

export module SimpleAuthorizer {

    // Constructor properties interface

    export interface ConstructorProperties extends Authorizer.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GFBGraph-0.3.GFBGraph.SimpleAuthorizer

        accessToken?: string | null
    }

}

export interface SimpleAuthorizer extends Authorizer {

    // Own properties of GFBGraph-0.3.GFBGraph.SimpleAuthorizer

    accessToken: string

    // Own fields of GFBGraph-0.3.GFBGraph.SimpleAuthorizer

    parent: GObject.Object

    // Class property signals of GFBGraph-0.3.GFBGraph.SimpleAuthorizer

    connect(sigName: "notify::access-token", callback: any): number
    on(sigName: "notify::access-token", callback: any): number
    once(sigName: "notify::access-token", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::access-token", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SimpleAuthorizer extends GObject.Object {

    // Own properties of GFBGraph-0.3.GFBGraph.SimpleAuthorizer

    static name: string

    // Constructors of GFBGraph-0.3.GFBGraph.SimpleAuthorizer

    constructor(config?: SimpleAuthorizer.ConstructorProperties) 
    /**
     * Creates a new #GFBGraphAuthorizer to use with the GFBGraph library using the `access_token` as access token.
     * It's only a test authorizer, don't use in final code.
     * @constructor 
     * @param accessToken a const `gchar`.
     */
    constructor(accessToken: string) 
    /**
     * Creates a new #GFBGraphAuthorizer to use with the GFBGraph library using the `access_token` as access token.
     * It's only a test authorizer, don't use in final code.
     * @constructor 
     * @param accessToken a const `gchar`.
     */
    static new(accessToken: string): SimpleAuthorizer
    _init(config?: SimpleAuthorizer.ConstructorProperties): void
}

export module User {

    // Constructor properties interface

    export interface ConstructorProperties extends Node.ConstructorProperties {

        // Own constructor properties of GFBGraph-0.3.GFBGraph.User

        /**
         * The email of the user if available
         */
        email?: string | null
        /**
         * The full name of the user
         */
        name?: string | null
    }

}

export interface User {

    // Own properties of GFBGraph-0.3.GFBGraph.User

    /**
     * The email of the user if available
     */
    email: string
    /**
     * The full name of the user
     */
    name: string

    // Own fields of GFBGraph-0.3.GFBGraph.User

    parent: Node & GObject.Object

    // Owm methods of GFBGraph-0.3.GFBGraph.User

    /**
     * Retrieve the albums nodes owned by the `user`. This functions call the function ID/albums.
     * @param authorizer a #GFBGraphAuthorizer.
     */
    getAlbums(authorizer: Authorizer): Album[]
    /**
     * Asynchronously retrieve the albums nodes owned by the `user`. See gfbgraph_user_get_albums() for the
     * synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can then call gfbgraph_user_get_albums_async_finish()
     * to get the #GList of #GFBGraphAlbum owned by the `user`.
     * @param authorizer a #GFBGraphAuthorizer.
     * @param cancellable An optional #GCancellable object, or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is completed.
     */
    getAlbumsAsync(authorizer: Authorizer, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous operation started with
     * gfbgraph_user_get_albums_async().
     * @param result A #GAsyncResult.
     */
    getAlbumsAsyncFinish(result: Gio.AsyncResult): Album[]
    /**
     * Get the user email. To retrieve this propertie, you need 'email' extended
     * permission.
     */
    getEmail(): string
    /**
     * Get the user full name.
     */
    getName(): string

    // Class property signals of GFBGraph-0.3.GFBGraph.User

    connect(sigName: "notify::email", callback: any): number
    on(sigName: "notify::email", callback: any): number
    once(sigName: "notify::email", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::email", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::created-time", callback: any): number
    on(sigName: "notify::created-time", callback: any): number
    once(sigName: "notify::created-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::link", callback: any): number
    on(sigName: "notify::link", callback: any): number
    once(sigName: "notify::link", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::link", ...args: any[]): void
    connect(sigName: "notify::updated-time", callback: any): number
    on(sigName: "notify::updated-time", callback: any): number
    once(sigName: "notify::updated-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated-time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class User extends Node {

    // Own properties of GFBGraph-0.3.GFBGraph.User

    static name: string

    // Constructors of GFBGraph-0.3.GFBGraph.User

    constructor(config?: User.ConstructorProperties) 
    /**
     * Creates a new #GFBGraphUser.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GFBGraphUser.
     * @constructor 
     */
    static new(): User

    // Overloads of new

    /**
     * Creates a new #GFBGraphNode.
     * @constructor 
     */
    static new(): Node
    /**
     * Retrieves a user from the Facebook Graph with the give ID.
     * @constructor 
     * @param authorizer a #GFBGraphAuthorizer.
     * @param id a const #gchar with the user ID.
     */
    static newFromId(authorizer: Authorizer, id: string): User

    // Overloads of newFromId

    /**
     * Retrieve a node object as a #GFBgraphNode of #node_type type, with the given `id` from the Facebook Graph.
     * @constructor 
     * @param authorizer a #GFBGraphAuthorizer.
     * @param id a const #gchar with the node ID.
     * @param nodeType a #GFBGraphNode type #GType.
     */
    static newFromId(authorizer: Authorizer, id: string, nodeType: GObject.GType): Node
    _init(config?: User.ConstructorProperties): void
    /**
     * Retrieve the current user logged using the https://graph.facebook.com/me Graph API function.
     * See gfbgraph_user_get_my_async() for the asynchronous version of this call.
     * @param authorizer a #GFBGraphAuthorizer.
     */
    static getMe(authorizer: Authorizer): User
    /**
     * Asynchronously retrieve the current user logged. See gfbgraph_user_get_me() for the
     * synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can then call gfbgraph_user_get_me_finish()
     * to get the #GFBGraphUser for to the current user logged.
     * @param authorizer a #GFBGraphAuthorizer.
     * @param cancellable An optional #GCancellable object, or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is completed.
     */
    static getMeAsync(authorizer: Authorizer, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous operation started with
     * gfbgraph_user_get_me_async().
     * @param authorizer a #GFBGraphAuthorizer.
     * @param result A #GAsyncResult.
     */
    static getMeAsyncFinish(authorizer: Authorizer, result: Gio.AsyncResult): User
}

export interface AlbumClass {

    // Own fields of GFBGraph-0.3.GFBGraph.AlbumClass

    parentClass: NodeClass
}

export abstract class AlbumClass {

    // Own properties of GFBGraph-0.3.GFBGraph.AlbumClass

    static name: string
}

export interface AlbumPrivate {
}

export class AlbumPrivate {

    // Own properties of GFBGraph-0.3.GFBGraph.AlbumPrivate

    static name: string
}

export interface AuthorizerInterface {

    // Own fields of GFBGraph-0.3.GFBGraph.AuthorizerInterface

    /**
     * The parent interface.
     * @field 
     */
    parent: GObject.TypeInterface
    processCall: (iface: Authorizer, call: Rest.ProxyCall) => void
    processMessage: (iface: Authorizer, message: Soup.Message) => void
    refreshAuthorization: (iface: Authorizer, cancellable: Gio.Cancellable | null) => boolean
}

/**
 * Interface structure for #GFBGraphAuthorizer. All methos should be thread safe.
 * @record 
 */
export abstract class AuthorizerInterface {

    // Own properties of GFBGraph-0.3.GFBGraph.AuthorizerInterface

    static name: string
}

export interface ConnectableInterface {

    // Own fields of GFBGraph-0.3.GFBGraph.ConnectableInterface

    parent: GObject.TypeInterface
    connections: GLib.HashTable
    getConnectionPostParams: (self: Connectable, nodeType: GObject.GType) => GLib.HashTable
    parseConnectedData: (self: Connectable, payload: string) => Node[]
}

export abstract class ConnectableInterface {

    // Own properties of GFBGraph-0.3.GFBGraph.ConnectableInterface

    static name: string
}

export interface GoaAuthorizerClass {

    // Own fields of GFBGraph-0.3.GFBGraph.GoaAuthorizerClass

    parentClass: GObject.ObjectClass
}

export abstract class GoaAuthorizerClass {

    // Own properties of GFBGraph-0.3.GFBGraph.GoaAuthorizerClass

    static name: string
}

export interface GoaAuthorizerPrivate {
}

export class GoaAuthorizerPrivate {

    // Own properties of GFBGraph-0.3.GFBGraph.GoaAuthorizerPrivate

    static name: string
}

export interface NodeClass {

    // Own fields of GFBGraph-0.3.GFBGraph.NodeClass

    parentClass: GObject.ObjectClass
}

export abstract class NodeClass {

    // Own properties of GFBGraph-0.3.GFBGraph.NodeClass

    static name: string
}

export interface NodePrivate {
}

export class NodePrivate {

    // Own properties of GFBGraph-0.3.GFBGraph.NodePrivate

    static name: string
}

export interface PhotoClass {

    // Own fields of GFBGraph-0.3.GFBGraph.PhotoClass

    parentClass: NodeClass
}

export abstract class PhotoClass {

    // Own properties of GFBGraph-0.3.GFBGraph.PhotoClass

    static name: string
}

export interface PhotoImage {

    // Own fields of GFBGraph-0.3.GFBGraph.PhotoImage

    width: number
    height: number
    source: string
}

/**
 * An struct with the information of a image.
 * @record 
 */
export class PhotoImage {

    // Own properties of GFBGraph-0.3.GFBGraph.PhotoImage

    static name: string
}

export interface PhotoPrivate {
}

export class PhotoPrivate {

    // Own properties of GFBGraph-0.3.GFBGraph.PhotoPrivate

    static name: string
}

export interface SimpleAuthorizerClass {

    // Own fields of GFBGraph-0.3.GFBGraph.SimpleAuthorizerClass

    parentClass: GObject.ObjectClass
}

export abstract class SimpleAuthorizerClass {

    // Own properties of GFBGraph-0.3.GFBGraph.SimpleAuthorizerClass

    static name: string
}

export interface SimpleAuthorizerPrivate {
}

export class SimpleAuthorizerPrivate {

    // Own properties of GFBGraph-0.3.GFBGraph.SimpleAuthorizerPrivate

    static name: string
}

export interface UserClass {

    // Own fields of GFBGraph-0.3.GFBGraph.UserClass

    parentClass: NodeClass
}

export abstract class UserClass {

    // Own properties of GFBGraph-0.3.GFBGraph.UserClass

    static name: string
}

export interface UserPrivate {
}

export class UserPrivate {

    // Own properties of GFBGraph-0.3.GFBGraph.UserPrivate

    static name: string
}
