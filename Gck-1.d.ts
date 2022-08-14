
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gck-1
 */

import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

/**
 * Flags to be used with a [method`Builder`.init_full] and [ctor`Builder`.new].
 */
export enum BuilderFlags {
    /**
     * no special flags
     */
    NONE,
    /**
     * use non-pageable memory for the values of the attributes
     */
    SECURE_MEMORY,
}
/**
 * Various error codes. All the `CKR_XXX` error codes from PKCS#11 are also
 * relevant error codes.
 * 
 * Note that errors are returned as [struct`GLib`.Error] structures. The `code`
 * member of the error then contains the raw PKCS#11 `CK_RV` result value.
 */
export enum Error {
    /**
     * a result code that signifies there was a problem
     *                            loading a PKCS#11 module, usually a shared library
     */
    PROBLEM,
}
/**
 * Various error codes used with PKCS#11 URIs
 */
export enum UriError {
    /**
     * invalid URI scheme
     */
    BAD_SCHEME,
    /**
     * bad URI encoding
     */
    BAD_ENCODING,
    /**
     * bad URI syntax
     */
    BAD_SYNTAX,
    /**
     * bad URI version component
     */
    BAD_VERSION,
    /**
     * piece of the URI was not found
     */
    NOT_FOUND,
}
/**
 * Options for creating sessions.
 * @bitfield 
 */
export enum SessionOptions {
    /**
     * Open session as read only
     */
    READ_ONLY,
    /**
     * Open sessions as read/write
     */
    READ_WRITE,
    /**
     * Login as user on new sessions
     */
    LOGIN_USER,
    /**
     * Authenticate as necessary
     */
    AUTHENTICATE,
}
/**
 * Which parts of the PKCS#11 URI will be parsed or formatted. These can be
 * combined.
 * @bitfield 
 */
export enum UriFlags {
    /**
     * the URI will be used to match objects.
     */
    FOR_OBJECT,
    /**
     * the URI will be used to match tokens.
     */
    FOR_TOKEN,
    /**
     * the URI will be used to match modules.
     */
    FOR_MODULE,
    /**
     * the URI has specific version numbers for module and/or token
     */
    WITH_VERSION,
    /**
     * parse all recognized components of the URI.
     */
    FOR_ANY,
}
/**
 * Used as a terminator at the end of variable argument lists.
 */
export const INVALID: number
/**
 * The major version number of the Gck library.
 */
export const MAJOR_VERSION: number
/**
 * The micro version number of the Gck library.
 */
export const MICRO_VERSION: number
/**
 * The minor version number of the Gck library.
 */
export const MINOR_VERSION: number
/**
 * The URI will match specific version of modules. To be used as a GckUriFlags argument.
 */
export const URI_FOR_MODULE_WITH_VERSION: number
/**
 * The URI will match objects on a specific token. To be used as a GckUriFlags argument.
 */
export const URI_FOR_OBJECT_ON_TOKEN: number
/**
 * The token inserted into a device with a specific module.
 */
export const URI_FOR_OBJECT_ON_TOKEN_AND_MODULE: number
/**
 * Custom PKCS#11 errors that originate from the gck library, are
 * based at this error code.
 */
export const VENDOR_CODE: number
/**
 * Unreferences a builder. If this was the last reference then the builder
 * is freed.
 * 
 * It is an error to use this function on builders that were allocated on the
 * stack.
 * @param builder the builder
 */
export function builderUnref(builder: object | null): void
export function errorGetQuark(): GLib.Quark
export function listGetBoxedType(): GObject.GType
/**
 * Get a message for a PKCS#11 return value or error code. Do not
 * pass `CKR_OK` or other non-errors to this function.
 * @param rv The PKCS#11 return value to get a message for.
 */
export function messageFromRv(rv: number): string
/**
 * Setup an enumerator for listing matching objects on the modules.
 * 
 * This call will not block but will return an enumerator immediately.
 * 
 * If the `attrs` [struct`Attributes]` is floating, it is consumed.
 * @param modules The modules
 * @param attrs attributes that the objects must have, or empty for all objects
 * @param sessionOptions Options from GckSessionOptions
 */
export function modulesEnumerateObjects(modules: Module[], attrs: Attributes, sessionOptions: SessionOptions): Enumerator
/**
 * Enumerate objects that match a URI.
 * 
 * This call will not block. Use the [class`Enumerator]` functions in order to
 * get at the actual objects that match.
 * @param modules The modules
 * @param uri The URI that the enumerator will match
 * @param sessionOptions Options from GckSessionOptions
 */
export function modulesEnumerateUri(modules: Module[], uri: string, sessionOptions: SessionOptions): Enumerator
/**
 * Get a list of slots for across all of the modules.
 * @param modules The modules
 * @param tokenPresent Whether to only list slots with token present
 */
export function modulesGetSlots(modules: Module[], tokenPresent: boolean): Slot[]
/**
 * Load and initialize all the registered modules.
 * @param cancellable optional cancellation object
 */
export function modulesInitializeRegistered(cancellable: Gio.Cancellable | null): Module[]
/**
 * Load and initialize all the registered modules asynchronously.
 * @param cancellable optional cancellation object
 * @param callback a callback which will be called when the operation completes
 */
export function modulesInitializeRegisteredAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Finishes the asynchronous operation to initialize the registered
 * PKCS#11 modules.
 * @param result the asynchronous result
 */
export function modulesInitializeRegisteredFinish(result: Gio.AsyncResult): Module[]
/**
 * Find an object that matches a URI.
 * 
 * This call can block. Use [func`modules_enumerate_uri]` for a non-blocking
 * version.
 * @param modules The modules
 * @param uri The URI the objects must match
 * @param sessionOptions Options from GckSessionOptions
 */
export function modulesObjectForUri(modules: Module[], uri: string, sessionOptions: SessionOptions): Object | null
/**
 * Find objects that match a URI.
 * 
 * This call can block. Use [func`modules_enumerate_uri]` for a non-blocking
 * version.
 * @param modules The modules
 * @param uri The URI the objects must match
 * @param sessionOptions Options from GckSessionOptions
 */
export function modulesObjectsForUri(modules: Module[], uri: string, sessionOptions: SessionOptions): Object[]
/**
 * Lookup a token that matches the URI.
 * @param modules The modules
 * @param uri The URI that the token must match
 */
export function modulesTokenForUri(modules: Module[], uri: string): Slot
/**
 * Lookup a token that matches the URI.
 * @param modules The modules
 * @param uri The URI that the token must match
 */
export function modulesTokensForUri(modules: Module[], uri: string): Slot[]
/**
 * Initialize a list of GckObject from raw PKCS#11 handles. The handles argument must contain
 * contiguous CK_OBJECT_HANDLE handles in an array.
 * @param session The session for these objects
 * @param objectHandles The raw object handles.
 */
export function objectsFromHandleArray(session: Session, objectHandles: number[]): Object[]
/**
 * Setup an enumerator for listing matching objects on the slots.
 * 
 * If the `match` #GckAttributes is floating, it is consumed.
 * 
 * This call will not block but will return an enumerator immediately.
 * @param slots a list of #GckSlot to enumerate objects on.
 * @param match attributes that the objects must match, or empty for all objects
 * @param options options for opening a session
 */
export function slotsEnumerateObjects(slots: Slot[], match: Attributes, options: SessionOptions): Enumerator
/**
 * Build a PKCS#11 URI. The various parts relevant to the flags
 * specified will be used to build the URI.
 * @param uriData the info to build the URI from.
 * @param flags The context that the URI is for
 */
export function uriBuild(uriData: UriData, flags: UriFlags): string
export function uriErrorGetQuark(): GLib.Quark
/**
 * Parse a PKCS#11 URI for use in a given context.
 * 
 * The result will contain the fields that are relevant for
 * the given context. See #GckUriData  for more info.
 * Other fields will be set to %NULL.
 * @param string the URI to parse.
 * @param flags the context in which the URI will be used.
 */
export function uriParse(string: string, flags: UriFlags): UriData
/**
 * Convert `CK_BBOOL` type memory to a boolean.
 * @param value memory to convert
 */
export function valueToBoolean(value: Uint8Array): [ /* returnType */ boolean, /* result */ boolean ]
/**
 * Convert `CK_ULONG` type memory to a boolean.
 * @param value memory to convert
 */
export function valueToUlong(value: Uint8Array): [ /* returnType */ boolean, /* result */ number ]
/**
 * An allocator used to allocate data for the attributes in this
 * [struct`Attributes]` set.
 * 
 * This is a function that acts like g_realloc. Specifically it frees when length is
 * set to zero, it allocates when data is set to %NULL, and it reallocates when both
 * are valid.
 * @callback 
 * @param data Memory to allocate or deallocate.
 * @param length New length of memory.
 */
export interface Allocator {
    (data: object | null, length: number): object | null
}
export module ObjectCache {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gck-1.Gck.ObjectCache

        /**
         * The attributes cached on this object.
         */
        attributes?: Attributes | null
    }

}

export interface ObjectCache extends Object {

    // Own properties of Gck-1.Gck.ObjectCache

    /**
     * The attributes cached on this object.
     */
    attributes: Attributes

    // Owm methods of Gck-1.Gck.ObjectCache

    // Has conflict: fill(attrs: Attributes): void
    /**
     * Sets the attributes cached on this object.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * @param attrs the attributes to set
     */
    setAttributes(attrs: Attributes | null): void
    /**
     * Update the object cache with given attributes. If an attribute already
     * exists in the cache, it will be updated, and if it doesn't it will be added.
     * 
     * This may block, use the asynchronous version when this is not desirable
     * @param attrTypes the types of attributes to update
     * @param cancellable optional cancellation object
     */
    update(attrTypes: number[], cancellable: Gio.Cancellable | null): boolean
    /**
     * Update the object cache with given attributes. If an attribute already
     * exists in the cache, it will be updated, and if it doesn't it will be added.
     * 
     * This call will return immediately and complete asynchronously.
     * @param attrTypes the types of attributes to update
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    updateAsync(attrTypes: number[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete an asynchronous operation to update the object cache with given
     * attributes.
     * @param result the asynchronous result passed to the callback
     */
    updateFinish(result: Gio.AsyncResult): boolean

    // Conflicting methods

    /**
     * Get the data for the specified attribute from the object. For convenience
     * the returned data has a null terminator.
     * 
     * This call may block for an indefinite period.
     * @param attrType The attribute to get data for.
     * @param cancellable A #GCancellable or %NULL
     */
    getData(attrType: number, cancellable: Gio.Cancellable | null): Uint8Array

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null

    // Own virtual methods of Gck-1.Gck.ObjectCache

    /**
     * Adds the attributes to the set cached on this object. If an attribute is
     * already present in the cache it will be overridden by this value.
     * 
     * This will be done in a thread-safe manner.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * @virtual 
     * @param attrs the attributes to cache
     */
    fill(attrs: Attributes): void

    // Class property signals of Gck-1.Gck.ObjectCache

    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::handle", callback: any): number
    on(sigName: "notify::handle", callback: any): number
    once(sigName: "notify::handle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: "notify::module", callback: any): number
    on(sigName: "notify::module", callback: any): number
    once(sigName: "notify::module", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::module", ...args: any[]): void
    connect(sigName: "notify::session", callback: any): number
    on(sigName: "notify::session", callback: any): number
    once(sigName: "notify::session", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An interface implemented by derived classes of [class`Object]` to indicate
 * which attributes they'd like an enumerator to retrieve.
 * 
 * These attributes are then cached on the object and can be retrieved through
 * the [property`ObjectCache:`attributes] property.
 * @interface 
 */
export class ObjectCache extends GObject.Object {

    // Own properties of Gck-1.Gck.ObjectCache

    static name: string

    // Constructors of Gck-1.Gck.ObjectCache

    constructor(config?: ObjectCache.ConstructorProperties) 
    _init(config?: ObjectCache.ConstructorProperties): void
}

export module Enumerator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gck-1.Gck.Enumerator

        /**
         * Chained enumerator, which will be enumerated when this enumerator
         * has enumerated all its objects.
         */
        chained?: Enumerator | null
        /**
         * Interaction object used to ask the user for pins when opening
         * sessions. Used if the session_options of the enumerator have
         * %GCK_SESSION_LOGIN_USER
         */
        interaction?: Gio.TlsInteraction | null
    }

}

export interface Enumerator {

    // Own properties of Gck-1.Gck.Enumerator

    /**
     * Chained enumerator, which will be enumerated when this enumerator
     * has enumerated all its objects.
     */
    chained: Enumerator
    /**
     * Interaction object used to ask the user for pins when opening
     * sessions. Used if the session_options of the enumerator have
     * %GCK_SESSION_LOGIN_USER
     */
    interaction: Gio.TlsInteraction

    // Own fields of Gck-1.Gck.Enumerator

    parent: GObject.Object

    // Owm methods of Gck-1.Gck.Enumerator

    /**
     * Get the enumerator that will be run after all objects from this one
     * are seen.
     */
    getChained(): Enumerator | null
    /**
     * Get the interaction used when a pin is needed
     */
    getInteraction(): Gio.TlsInteraction | null
    /**
     * Get the type of objects created by this enumerator. The type will always
     * either be #GckObject or derived from it.
     */
    getObjectType(): GObject.GType
    /**
     * Get the next object in the enumerator, or %NULL if there are no more objects.
     * 
     * %NULL is also returned if the function fails. Use the `error` to determine
     * whether a failure occurred or not.
     * @param cancellable A #GCancellable or %NULL
     */
    next(cancellable: Gio.Cancellable | null): Object | null
    /**
     * Get the next set of objects from the enumerator. This operation completes
     * asynchronously.The maximum number of objects can be specified with
     * `max_objects`. If -1 is specified, then all the remaining objects will be
     * enumerated.
     * @param maxObjects The maximum number of objects to get
     * @param cancellable A #GCancellable or %NULL
     * @param callback Called when the result is ready
     */
    nextAsync(maxObjects: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete an operation to enumerate next objects.
     * 
     * %NULL is also returned if the function fails. Use the `error` to determine
     * whether a failure occurred or not.
     * @param result The result passed to the callback
     */
    nextFinish(result: Gio.AsyncResult): Object[]
    /**
     * Get the next set of objects from the enumerator. The maximum number of
     * objects can be specified with `max_objects`. If -1 is specified, then all
     * the remaining objects will be returned.
     * 
     * %NULL is also returned if the function fails. Use the `error` to determine
     * whether a failure occurred or not.
     * @param maxObjects The maximum amount of objects to enumerate
     * @param cancellable A #GCancellable or %NULL
     */
    nextN(maxObjects: number, cancellable: Gio.Cancellable | null): Object[]
    /**
     * Set a chained enumerator that will be run after all objects from this one
     * are seen.
     * @param chained the chained enumerator or %NULL
     */
    setChained(chained: Enumerator | null): void
    /**
     * Set the interaction used when a pin is needed
     * @param interaction the interaction or %NULL
     */
    setInteraction(interaction: Gio.TlsInteraction | null): void
    /**
     * Set the type of objects to be created by this enumerator. The type must
     * always be either #GckObject or derived from it.
     * 
     * If `attr_types` and `attr_count` are non-NULL and non-zero respectively,
     * then the #GckObjectCache interface is expected to be implemented on the
     * derived class, then the enumerator will retrieve attributes for each object.
     * @param objectType the type of objects to create
     * @param attrTypes types of attributes to retrieve for objects
     */
    setObjectType(objectType: GObject.GType, attrTypes: number[]): void

    // Class property signals of Gck-1.Gck.Enumerator

    connect(sigName: "notify::chained", callback: any): number
    on(sigName: "notify::chained", callback: any): number
    once(sigName: "notify::chained", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::chained", ...args: any[]): void
    connect(sigName: "notify::interaction", callback: any): number
    on(sigName: "notify::interaction", callback: any): number
    once(sigName: "notify::interaction", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interaction", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Can be used to enumerate through PKCS#11 objects. It will automatically
 * create sessions as necessary.
 * 
 * Use [func`modules_enumerate_objects]` or [func`modules_enumerate_uri]` to
 * create an enumerator. To get the objects, use [method`Enumerator`.next] or
 * [method`Enumerator`.next_async] functions.
 * @class 
 */
export class Enumerator extends GObject.Object {

    // Own properties of Gck-1.Gck.Enumerator

    static name: string

    // Constructors of Gck-1.Gck.Enumerator

    constructor(config?: Enumerator.ConstructorProperties) 
    _init(config?: Enumerator.ConstructorProperties): void
}

export module Module {

    // Signal callback interfaces

    /**
     * Signal callback interface for `authenticate-object`
     */
    export interface AuthenticateObjectSignalCallback {
        (object: Object, label: string, password: object | null): boolean
    }

    /**
     * Signal callback interface for `authenticate-slot`
     */
    export interface AuthenticateSlotSignalCallback {
        (slot: Slot, string: string, password: object | null): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gck-1.Gck.Module

        /**
         * The raw PKCS&num;11 function list for the module.
         * 
         * This points to a CK_FUNCTION_LIST structure.
         */
        functions?: object | null
        /**
         * The PKCS&num;11 module file path.
         * 
         * This may be set to NULL if this object was created from an already
         * initialized module via the gck_module_new() function.
         */
        path?: string | null
    }

}

export interface Module {

    // Own properties of Gck-1.Gck.Module

    /**
     * The raw PKCS&num;11 function list for the module.
     * 
     * This points to a CK_FUNCTION_LIST structure.
     */
    readonly functions: object
    /**
     * The PKCS&num;11 module file path.
     * 
     * This may be set to NULL if this object was created from an already
     * initialized module via the gck_module_new() function.
     */
    readonly path: string

    // Own fields of Gck-1.Gck.Module

    parent: GObject.Object

    // Owm methods of Gck-1.Gck.Module

    /**
     * Checks equality of two modules. Two GckModule objects can point to the same
     * underlying PKCS#11 module.
     * @param module2 a pointer to the second #GckModule
     */
    equal(module2: Module): boolean
    /**
     * Get the info about a PKCS#11 module.
     */
    getInfo(): ModuleInfo
    /**
     * Get the file path of this module. This may not be an absolute path, and
     * usually reflects the path passed to [func`Module`.initialize].
     */
    getPath(): string
    /**
     * Get the GckSlot objects for a given module.
     * @param tokenPresent Whether to limit only to slots with a token present.
     */
    getSlots(tokenPresent: boolean): Slot[]
    /**
     * Create a hash value for the GckModule.
     * 
     * This function is intended for easily hashing a [class`Module]` to add to
     * a [struct`GLib`.HashTable] or similar data structure.
     */
    hash(): number
    /**
     * Check whether the PKCS#11 URI matches the module
     * @param uri the uri to match against the module
     */
    match(uri: UriData): boolean

    // Own virtual methods of Gck-1.Gck.Module

    authenticateObject(object: Object, label: string, password: string): boolean
    authenticateSlot(slot: Slot, label: string, password: string): boolean

    // Own signals of Gck-1.Gck.Module

    connect(sigName: "authenticate-object", callback: Module.AuthenticateObjectSignalCallback): number
    on(sigName: "authenticate-object", callback: Module.AuthenticateObjectSignalCallback): number
    once(sigName: "authenticate-object", callback: Module.AuthenticateObjectSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "authenticate-object", label: string, password: object | null, ...args: any[]): void
    connect(sigName: "authenticate-slot", callback: Module.AuthenticateSlotSignalCallback): number
    on(sigName: "authenticate-slot", callback: Module.AuthenticateSlotSignalCallback): number
    once(sigName: "authenticate-slot", callback: Module.AuthenticateSlotSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "authenticate-slot", string: string, password: object | null, ...args: any[]): void

    // Class property signals of Gck-1.Gck.Module

    connect(sigName: "notify::functions", callback: any): number
    on(sigName: "notify::functions", callback: any): number
    once(sigName: "notify::functions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::functions", ...args: any[]): void
    connect(sigName: "notify::path", callback: any): number
    on(sigName: "notify::path", callback: any): number
    once(sigName: "notify::path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Holds a loaded PKCS#11 module. A PKCS#11 module is a shared library.
 * 
 * You can load and initialize a PKCS#11 module with the
 * [func`Module`.initialize] call. If you already have a loaded and
 * initialized module that you'd like to use with the various Gck functions,
 * then you can use [ctor`Module`.new].
 * @class 
 */
export class Module extends GObject.Object {

    // Own properties of Gck-1.Gck.Module

    static name: string

    // Constructors of Gck-1.Gck.Module

    constructor(config?: Module.ConstructorProperties) 
    _init(config?: Module.ConstructorProperties): void
    /**
     * Load and initialize a PKCS#11 module represented by a GckModule object.
     * @param path The file system path to the PKCS#11 module to load.
     * @param cancellable optional cancellation object
     */
    static initialize(path: string, cancellable: Gio.Cancellable | null): Module
    /**
     * Asynchronously load and initialize a PKCS#11 module represented by a
     * [class`Module]` object.
     * @param path the file system path to the PKCS#11 module to load
     * @param cancellable optional cancellation object
     * @param callback a callback which will be called when the operation completes
     */
    static initializeAsync(path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the asynchronous initialize operation.
     * @param result the asynchronous result
     */
    static initializeFinish(result: Gio.AsyncResult): Module | null
}

export module Object {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gck-1.Gck.Object

        /**
         * The raw PKCS11 handle for this object.
         */
        handle?: number | null
        /**
         * The GckModule that this object belongs to.
         */
        module?: Module | null
        /**
         * The PKCS11 session to make calls on when this object needs to
         * perform operations on itself.
         * 
         * If this is NULL then a new session is opened for each operation,
         * such as gck_object_get(), gck_object_set() or gck_object_destroy().
         */
        session?: Session | null
    }

}

export interface Object {

    // Own properties of Gck-1.Gck.Object

    /**
     * The raw PKCS11 handle for this object.
     */
    readonly handle: number
    /**
     * The GckModule that this object belongs to.
     */
    readonly module: Module
    /**
     * The PKCS11 session to make calls on when this object needs to
     * perform operations on itself.
     * 
     * If this is NULL then a new session is opened for each operation,
     * such as gck_object_get(), gck_object_set() or gck_object_destroy().
     */
    readonly session: Session

    // Own fields of Gck-1.Gck.Object

    parent: GObject.Object

    // Owm methods of Gck-1.Gck.Object

    /**
     * Lookup attributes in the cache, or retrieve them from the object if necessary.
     * 
     * If `object` is a #GckObjectCache then this will lookup the attributes there
     * first if available, otherwise will read them from the object and update
     * the cache.
     * 
     * If `object` is not a #GckObjectCache, then the attributes will simply be
     * read from the object.
     * 
     * This may block, use the asynchronous version when this is not desirable
     * @param attrTypes the types of attributes to update
     * @param cancellable optional cancellation object
     */
    cacheLookup(attrTypes: number[], cancellable: Gio.Cancellable | null): Attributes
    /**
     * Lookup attributes in the cache, or retrieve them from the object if necessary.
     * 
     * If `object` is a #GckObjectCache then this will lookup the attributes there
     * first if available, otherwise will read them from the object and update
     * the cache.
     * 
     * If `object` is not a #GckObjectCache, then the attributes will simply be
     * read from the object.
     * 
     * This will return immediately and complete asynchronously
     * @param attrTypes the types of attributes to update
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    cacheLookupAsync(attrTypes: number[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete an operation to lookup attributes in the cache or retrieve them
     * from the object if necessary.
     * @param result the asynchrounous result passed to the callback
     */
    cacheLookupFinish(result: Gio.AsyncResult): Attributes
    /**
     * Destroy a PKCS#11 object, deleting it from storage or the session.
     * This call may block for an indefinite period.
     * @param cancellable Optional cancellable object, or %NULL to ignore.
     */
    destroy(cancellable: Gio.Cancellable | null): boolean
    /**
     * Destroy a PKCS#11 object, deleting it from storage or the session.
     * This call will return immediately and complete asynchronously.
     * @param cancellable Optional cancellable object, or %NULL to ignore.
     * @param callback Callback which is called when operation completes.
     */
    destroyAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Get the status of the operation to destroy a PKCS#11 object, begun with
     * gck_object_destroy_async().
     * @param result The result of the destory operation passed to the callback.
     */
    destroyFinish(result: Gio.AsyncResult): boolean
    /**
     * Checks equality of two objects. Two GckObject objects can point to the same
     * underlying PKCS#11 object.
     * @param object2 a pointer to the second #GckObject
     */
    equal(object2: Object): boolean
    /**
     * Get the specified attributes from the object. The attributes will be cleared
     * of their current values, and new attributes will be stored. The attributes
     * should not be accessed in any way except for referencing and unreferencing
     * them until gck_object_get_finish() is called.
     * 
     * This call returns immediately and completes asynchronously.
     * @param attrTypes the types of the attributes to get
     * @param cancellable optional cancellation object, or %NULL
     * @param callback A callback which is called when the operation completes.
     */
    getAsync(attrTypes: number[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Get the data for the specified attribute from the object. For convenience
     * the returned data has a null terminator.
     * 
     * This call may block for an indefinite period.
     * @param attrType The attribute to get data for.
     * @param cancellable A #GCancellable or %NULL
     */
    getData(attrType: number, cancellable: Gio.Cancellable | null): Uint8Array

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Get the data for the specified attribute from the object.
     * 
     * This call will return immediately and complete asynchronously.
     * @param attrType The attribute to get data for.
     * @param allocator An allocator with which to allocate memory for the data, or %NULL for default.
     * @param cancellable Optional cancellation object, or %NULL.
     * @param callback Called when the operation completes.
     */
    getDataAsync(attrType: number, allocator: Allocator, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of an operation to get attribute data from
     * an object. For convenience the returned data has an extra null terminator,
     * not included in the returned length.
     * @param result The result passed to the callback.
     */
    getDataFinish(result: Gio.AsyncResult): Uint8Array
    /**
     * Get the result of a get operation and return specified attributes from
     * the object.
     * 
     * No extra references are added to the returned attributes pointer.
     * @param result The result passed to the callback.
     */
    getFinish(result: Gio.AsyncResult): Attributes
    /**
     * Get the specified attributes from the object. This call may
     * block for an indefinite period.
     * 
     * No extra references are added to the returned attributes pointer.
     * During this call you may not access the attributes in any way.
     * @param attrTypes the types of the attributes to get
     * @param cancellable optional cancellation object, or %NULL
     */
    getFull(attrTypes: number[], cancellable: Gio.Cancellable | null): Attributes
    /**
     * Get the raw PKCS#11 handle of a GckObject.
     */
    getHandle(): number
    /**
     * Get the PKCS#11 module to which this object belongs.
     */
    getModule(): Module
    /**
     * Get the PKCS#11 session assigned to make calls on when operating
     * on this object.
     * 
     * This will only return a session if it was set explitly on this
     * object. By default an object will open and close sessions
     * appropriate for its calls.
     */
    getSession(): Session
    /**
     * Get an attribute template from the object. The attr_type must be for
     * an attribute which returns a template.
     * 
     * This call may block for an indefinite period.
     * @param attrType The template attribute type.
     * @param cancellable Optional cancellation object, or %NULL.
     */
    getTemplate(attrType: number, cancellable: Gio.Cancellable | null): Attributes
    /**
     * Get an attribute template from the object. The `attr_type` must be for
     * an attribute which returns a template.
     * 
     * This call will return immediately and complete asynchronously.
     * @param attrType The template attribute type.
     * @param cancellable Optional cancellation object, or %NULL.
     * @param callback Called when the operation completes.
     */
    getTemplateAsync(attrType: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of an operation to get attribute template from
     * an object.
     * @param result The result passed to the callback.
     */
    getTemplateFinish(result: Gio.AsyncResult): Attributes
    /**
     * Create a hash value for the GckObject.
     * 
     * This function is intended for easily hashing a GckObject to add to
     * a GHashTable or similar data structure.
     */
    hash(): number
    /**
     * Set PKCS#11 attributes on an object. This call may block for an indefinite period.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * @param attrs The attributes to set on the object.
     * @param cancellable Optional cancellable object, or %NULL to ignore.
     */
    set(attrs: Attributes, cancellable: Gio.Cancellable | null): boolean
    /**
     * Set PKCS#11 attributes on an object. This call will return
     * immediately and completes asynchronously.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * @param attrs The attributes to set on the object.
     * @param cancellable Optional cancellable object, or %NULL to ignore.
     * @param callback Callback which is called when operation completes.
     */
    setAsync(attrs: Attributes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Get the status of the operation to set attributes on a PKCS#11 object,
     * begun with gck_object_set_async().
     * @param result The result of the destory operation passed to the callback.
     */
    setFinish(result: Gio.AsyncResult): boolean
    /**
     * Set an attribute template on the object. The attr_type must be for
     * an attribute which contains a template.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * 
     * This call may block for an indefinite period.
     * @param attrType The attribute template type.
     * @param attrs The attribute template.
     * @param cancellable Optional cancellation object, or %NULL.
     */
    setTemplate(attrType: number, attrs: Attributes, cancellable: Gio.Cancellable | null): boolean
    /**
     * Set an attribute template on the object. The attr_type must be for
     * an attribute which contains a template.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * 
     * This call will return immediately and complete asynchronously.
     * @param attrType The attribute template type.
     * @param attrs The attribute template.
     * @param cancellable Optional cancellation object, or %NULL.
     * @param callback Called when the operation completes.
     */
    setTemplateAsync(attrType: number, attrs: Attributes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of an operation to set attribute template on
     * an object.
     * @param result The result passed to the callback.
     */
    setTemplateFinish(result: Gio.AsyncResult): boolean

    // Class property signals of Gck-1.Gck.Object

    connect(sigName: "notify::handle", callback: any): number
    on(sigName: "notify::handle", callback: any): number
    once(sigName: "notify::handle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: "notify::module", callback: any): number
    on(sigName: "notify::module", callback: any): number
    once(sigName: "notify::module", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::module", ...args: any[]): void
    connect(sigName: "notify::session", callback: any): number
    on(sigName: "notify::session", callback: any): number
    once(sigName: "notify::session", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Holds a handle to a PKCS11 object such as a key or certificate. Token
 * objects are stored on the token persistently. Others are transient and are
 * called session objects.
 * @interface 
 */
export class Object extends GObject.Object {

    // Own properties of Gck-1.Gck.Object

    static name: string

    // Constructors of Gck-1.Gck.Object

    constructor(config?: Object.ConstructorProperties) 
    /**
     * Initialize a GckObject from a raw PKCS#11 handle. Normally you would use
     * [method`Session`.create_object] or [method`Session`.find_objects] to access
     * objects.
     * @constructor 
     * @param session The session through which this object is accessed or created.
     * @param objectHandle The raw `CK_OBJECT_HANDLE` of the object.
     */
    static fromHandle(session: Session, objectHandle: number): Object
    _init(config?: Object.ConstructorProperties): void
}

export module Password {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.TlsPassword.ConstructorProperties {

        // Own constructor properties of Gck-1.Gck.Password

        /**
         * The PKCS#11 key that the password is being requested for. If this
         * is set then the GckPassword:token property will be %NULL
         */
        key?: Object | null
        /**
         * The PKCS#11 token the password is for, if this is set then
         * the GckPassword:object property will be %NULL
         */
        token?: Slot | null
    }

}

export interface Password {

    // Own properties of Gck-1.Gck.Password

    /**
     * The PKCS#11 key that the password is being requested for. If this
     * is set then the GckPassword:token property will be %NULL
     */
    readonly key: Object
    /**
     * The PKCS#11 module that is requesting the password
     */
    readonly module: Module
    /**
     * The PKCS#11 token the password is for, if this is set then
     * the GckPassword:object property will be %NULL
     */
    readonly token: Slot

    // Own fields of Gck-1.Gck.Password

    parent: Gio.TlsPassword

    // Owm methods of Gck-1.Gck.Password

    /**
     * If the password request is to unlock a PKCS#11 key, then this is the
     * the object representing that key.
     */
    getKey(): Object
    /**
     * Get the PKCS#11 module that is requesting the password.
     */
    getModule(): Module
    /**
     * If the password request is to unlock a PKCS#11 token, then this is the
     * slot containing that token.
     */
    getToken(): Slot

    // Class property signals of Gck-1.Gck.Password

    connect(sigName: "notify::key", callback: any): number
    on(sigName: "notify::key", callback: any): number
    once(sigName: "notify::key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::key", ...args: any[]): void
    connect(sigName: "notify::module", callback: any): number
    on(sigName: "notify::module", callback: any): number
    once(sigName: "notify::module", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::module", ...args: any[]): void
    connect(sigName: "notify::token", callback: any): number
    on(sigName: "notify::token", callback: any): number
    once(sigName: "notify::token", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::token", ...args: any[]): void
    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::flags", callback: any): number
    on(sigName: "notify::flags", callback: any): number
    once(sigName: "notify::flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::warning", callback: any): number
    on(sigName: "notify::warning", callback: any): number
    once(sigName: "notify::warning", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::warning", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Represents a password which is requested of the user.
 * 
 * This is used in conjuction with [class`Gio`.TlsInteraction]. `GckPassword` is
 * a [class`Gio`.TlsPassword] which contains additional information about which
 * PKCS#11 token or key the password is being requested for.
 * @class 
 */
export class Password extends Gio.TlsPassword {

    // Own properties of Gck-1.Gck.Password

    static name: string

    // Constructors of Gck-1.Gck.Password

    constructor(config?: Password.ConstructorProperties) 
    _init(config?: Password.ConstructorProperties): void
}

export module Session {

    // Signal callback interfaces

    /**
     * Signal callback interface for `discard-handle`
     */
    export interface DiscardHandleSignalCallback {
        (handle: number): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gck-1.Gck.Session

        /**
         * Raw PKCS#11 application data used to open the PKCS#11 session.
         */
        appData?: object | null
        /**
         * The raw CK_SESSION_HANDLE handle of this session.
         */
        handle?: number | null
        /**
         * Interaction object used to ask the user for pins when opening
         * sessions. Used if the session_options of the enumerator have
         * %GCK_SESSION_LOGIN_USER
         */
        interaction?: Gio.TlsInteraction | null
        /**
         * Raw PKCS#11 flags used to open the PKCS#11 session.
         */
        openingFlags?: number | null
        /**
         * The options this session was opened with.
         */
        options?: SessionOptions | null
        /**
         * The GckSlot this session is opened on.
         */
        slot?: Slot | null
    }

}

export interface Session extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of Gck-1.Gck.Session

    /**
     * Raw PKCS#11 application data used to open the PKCS#11 session.
     */
    readonly appData: object
    /**
     * The raw CK_SESSION_HANDLE handle of this session.
     */
    readonly handle: number
    /**
     * Interaction object used to ask the user for pins when opening
     * sessions. Used if the session_options of the enumerator have
     * %GCK_SESSION_LOGIN_USER
     */
    interaction: Gio.TlsInteraction
    /**
     * The GckModule that this session is opened on.
     */
    readonly module: Module
    /**
     * Raw PKCS#11 flags used to open the PKCS#11 session.
     */
    readonly openingFlags: number
    /**
     * The options this session was opened with.
     */
    readonly options: SessionOptions
    /**
     * The GckSlot this session is opened on.
     */
    readonly slot: Slot

    // Own fields of Gck-1.Gck.Session

    parent: GObject.Object

    // Owm methods of Gck-1.Gck.Session

    /**
     * Create a new PKCS#11 object. This call may block for an
     * indefinite period.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * @param attrs The attributes to create the object with.
     * @param cancellable Optional cancellation object, or %NULL.
     */
    createObject(attrs: Attributes, cancellable: Gio.Cancellable | null): Object
    /**
     * Create a new PKCS#11 object. This call will return immediately
     * and complete asynchronously.
     * 
     * If `attrs` is a floating reference, it is consumed.
     * @param attrs The attributes to create the object with.
     * @param cancellable Optional cancellation object or %NULL.
     * @param callback Called when the operation completes.
     */
    createObjectAsync(attrs: Attributes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of creating a new PKCS#11 object.
     * @param result The result passed to the callback.
     */
    createObjectFinish(result: Gio.AsyncResult): Object
    /**
     * Decrypt data in a mechanism specific manner. This call may
     * block for an indefinite period.
     * @param key The key to decrypt with.
     * @param mechType The mechanism type to use for decryption.
     * @param input data to decrypt
     * @param cancellable Optional cancellation object, or %NULL
     */
    decrypt(key: Object, mechType: number, input: Uint8Array, cancellable: Gio.Cancellable | null): Uint8Array
    /**
     * Decrypt data in a mechanism specific manner. This call will
     * return immediately and complete asynchronously.
     * @param key The key to decrypt with.
     * @param mechanism The mechanism type and parameters to use for decryption.
     * @param input data to decrypt
     * @param cancellable A GCancellable which can be used to cancel the operation.
     * @param callback Called when the operation completes.
     */
    decryptAsync(key: Object, mechanism: Mechanism, input: Uint8Array, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of an decryption operation.
     * @param result The result object passed to the callback.
     */
    decryptFinish(result: Gio.AsyncResult): Uint8Array
    /**
     * Decrypt data in a mechanism specific manner. This call may
     * block for an indefinite period.
     * @param key The key to decrypt with.
     * @param mechanism The mechanism type and parameters to use for decryption.
     * @param input data to decrypt
     * @param cancellable A GCancellable which can be used to cancel the operation.
     */
    decryptFull(key: Object, mechanism: Mechanism, input: Uint8Array, cancellable: Gio.Cancellable | null): Uint8Array
    /**
     * Derive a key from another key. This call may block for an
     * indefinite period.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * @param base The key to derive from.
     * @param mechType The mechanism to use for derivation.
     * @param attrs Additional attributes for the derived key.
     * @param cancellable Optional cancellation object, or %NULL.
     */
    deriveKey(base: Object, mechType: number, attrs: Attributes, cancellable: Gio.Cancellable | null): Object
    /**
     * Derive a key from another key. This call will
     * return immediately and complete asynchronously.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * @param base The key to derive from.
     * @param mechanism The mechanism to use for derivation.
     * @param attrs Additional attributes for the derived key.
     * @param cancellable Optional cancellation object or %NULL.
     * @param callback Called when the operation completes.
     */
    deriveKeyAsync(base: Object, mechanism: Mechanism, attrs: Attributes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of a derive key operation.
     * @param result The async result passed to the callback.
     */
    deriveKeyFinish(result: Gio.AsyncResult): Object
    /**
     * Derive a key from another key. This call may block for an
     * indefinite period.
     * 
     * If the `attrs` #GckAttributes is floating, it is consumed.
     * @param base The key to derive from.
     * @param mechanism The mechanism to use for derivation.
     * @param attrs Additional attributes for the derived key.
     * @param cancellable Optional cancellation object, or %NULL.
     */
    deriveKeyFull(base: Object, mechanism: Mechanism, attrs: Attributes, cancellable: Gio.Cancellable | null): Object
    /**
     * Encrypt data in a mechanism specific manner. This call may
     * block for an indefinite period.
     * @param key The key to encrypt with.
     * @param mechType The mechanism type to use for encryption.
     * @param input the data to encrypt
     * @param cancellable Optional cancellation object, or %NULL
     */
    encrypt(key: Object, mechType: number, input: Uint8Array, cancellable: Gio.Cancellable | null): Uint8Array
    /**
     * Encrypt data in a mechanism specific manner. This call will
     * return immediately and complete asynchronously.
     * @param key The key to encrypt with.
     * @param mechanism The mechanism type and parameters to use for encryption.
     * @param input the data to encrypt
     * @param cancellable A GCancellable which can be used to cancel the operation.
     * @param callback Called when the operation completes.
     */
    encryptAsync(key: Object, mechanism: Mechanism, input: Uint8Array, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of an encryption operation.
     * @param result The result object passed to the callback.
     */
    encryptFinish(result: Gio.AsyncResult): Uint8Array
    /**
     * Encrypt data in a mechanism specific manner. This call may
     * block for an indefinite period.
     * @param key The key to encrypt with.
     * @param mechanism The mechanism type and parameters to use for encryption.
     * @param input the data to encrypt
     * @param cancellable A GCancellable which can be used to cancel the operation.
     */
    encryptFull(key: Object, mechanism: Mechanism, input: Uint8Array, cancellable: Gio.Cancellable | null): Uint8Array
    /**
     * Setup an enumerator for listing matching objects available via this session.
     * 
     * If `match` is a floating reference, it is consumed.
     * 
     * This call will not block but will return an enumerator immediately.
     * @param match attributes that the objects must match, or empty for all objects
     */
    enumerateObjects(match: Attributes): Enumerator
    /**
     * Find the objects matching the passed attributes. This call may
     * block for an indefinite period.
     * 
     * If `match` is a floating reference, it is consumed.
     * @param match the attributes to match against objects
     * @param cancellable optional cancellation object or %NULL
     */
    findHandles(match: Attributes, cancellable: Gio.Cancellable | null): number[] | null
    /**
     * Find the objects matching the passed attributes. This call will
     * return immediately and complete asynchronously.
     * 
     * If `match` is a floating reference, it is consumed.
     * @param match the attributes to match against the objects
     * @param cancellable optional cancellation object or %NULL
     * @param callback called when the operation completes
     */
    findHandlesAsync(match: Attributes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of a find handles operation.
     * @param result the asynchronous result
     */
    findHandlesFinish(result: Gio.AsyncResult): number[] | null
    /**
     * Find the objects matching the passed attributes. This call may
     * block for an indefinite period.
     * 
     * If `match` is a floating reference, it is consumed.
     * @param match the attributes to match
     * @param cancellable Optional cancellation object or %NULL.
     */
    findObjects(match: Attributes, cancellable: Gio.Cancellable | null): Object[]
    /**
     * Find the objects matching the passed attributes. This call will
     * return immediately and complete asynchronously.
     * 
     * If the `match` #GckAttributes is floating, it is consumed.
     * @param match The attributes to match.
     * @param cancellable Optional cancellation object or %NULL.
     * @param callback Called when the operation completes.
     */
    findObjectsAsync(match: Attributes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of a find operation.
     * @param result The attributes to match.
     */
    findObjectsFinish(result: Gio.AsyncResult): Object[]
    /**
     * Generate a new key pair of public and private keys. This call may block for
     * an indefinite period.
     * 
     * If `public_attrs` and/or `private_attrs` is a floating reference, it is
     * consumed.
     * @param mechType The mechanism type to use for key generation.
     * @param publicAttrs Additional attributes for the generated public key.
     * @param privateAttrs Additional attributes for the generated private key.
     * @param cancellable Optional cancellation object, or %NULL.
     */
    generateKeyPair(mechType: number, publicAttrs: Attributes, privateAttrs: Attributes, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* publicKey */ Object, /* privateKey */ Object ]
    /**
     * Generate a new key pair of public and private keys. This call will
     * return immediately and complete asynchronously.
     * 
     * If `public_attrs` and/or `private_attrs` is a floating reference, it is
     * consumed.
     * @param mechanism The mechanism to use for key generation.
     * @param publicAttrs Additional attributes for the generated public key.
     * @param privateAttrs Additional attributes for the generated private key.
     * @param cancellable Optional cancellation object or %NULL.
     * @param callback Called when the operation completes.
     */
    generateKeyPairAsync(mechanism: Mechanism, publicAttrs: Attributes, privateAttrs: Attributes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of a generate key pair operation.
     * @param result The async result passed to the callback.
     */
    generateKeyPairFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* publicKey */ Object, /* privateKey */ Object ]
    /**
     * Generate a new key pair of public and private keys. This call may block for an
     * indefinite period.
     * 
     * If `public_attrs` and/or `private_attrs` is a floating reference, it is
     * consumed.
     * @param mechanism The mechanism to use for key generation.
     * @param publicAttrs Additional attributes for the generated public key.
     * @param privateAttrs Additional attributes for the generated private key.
     * @param cancellable Optional cancellation object, or %NULL.
     */
    generateKeyPairFull(mechanism: Mechanism, publicAttrs: Attributes, privateAttrs: Attributes, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* publicKey */ Object, /* privateKey */ Object ]
    /**
     * Get the raw PKCS#11 session handle from a session object.
     */
    getHandle(): number
    /**
     * Get information about the session.
     */
    getInfo(): SessionInfo
    /**
     * Get the interaction object set on this session, which is used to prompt
     * for pins and the like.
     */
    getInteraction(): Gio.TlsInteraction | null
    /**
     * Get the PKCS#11 module to which this session belongs.
     */
    getModule(): Module
    /**
     * Get the options this session was opened with.
     */
    getOptions(): SessionOptions
    /**
     * Get the PKCS#11 slot to which this session belongs.
     */
    getSlot(): Slot
    /**
     * Get the session state. The state is the various PKCS#11 CKS_XXX flags.
     */
    getState(): number
    /**
     * Initialize the user's pin on this slot that this session is opened on.
     * According to the PKCS#11 standards, the session must be logged in with
     * the CKU_SO user type.
     * 
     * This call may block for an indefinite period.
     * @param pin the user's PIN, or %NULL for       protected authentication path
     * @param cancellable Optional cancellation object, or %NULL.
     */
    initPin(pin: Uint8Array | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Initialize the user's pin on this slot that this session is opened on.
     * According to the PKCS#11 standards, the session must be logged in with
     * the `CKU_SO` user type.
     * 
     * This call will return immediately and completes asynchronously.
     * @param pin the user's PIN, or %NULL for protected authentication path
     * @param cancellable Optional cancellation object, or %NULL.
     * @param callback Called when the operation completes.
     */
    initPinAsync(pin: Uint8Array | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of initializing a user's PIN.
     * @param result The result passed to the callback.
     */
    initPinFinish(result: Gio.AsyncResult): boolean
    /**
     * Login the user on the session. This call may block for
     * an indefinite period.
     * @param userType The type of login user.
     * @param pin the user's PIN, or %NULL for       protected authentication path
     * @param cancellable Optional cancellation object, or %NULL.
     */
    login(userType: number, pin: Uint8Array | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Login the user on the session. This call will return
     * immediately and completes asynchronously.
     * @param userType The type of login user.
     * @param pin the user's PIN, or %NULL for       protected authentication path
     * @param cancellable Optional cancellation object, or %NULL.
     * @param callback Called when the operation completes.
     */
    loginAsync(userType: number, pin: Uint8Array | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of a login operation.
     * @param result The result passed to the callback.
     */
    loginFinish(result: Gio.AsyncResult): boolean
    /**
     * Login the user on the session requesting the password interactively
     * when necessary. This call may block for an indefinite period.
     * @param userType the type of login user
     * @param interaction interaction to request PIN when necessary
     * @param cancellable optional cancellation object, or %NULL
     */
    loginInteractive(userType: number, interaction: Gio.TlsInteraction | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Login the user on the session prompting for passwords interactively when
     * necessary. This call will return immediately and completes asynchronously.
     * @param userType the type of login user
     * @param interaction interaction to request PIN when necessary
     * @param cancellable optional cancellation object, or %NULL
     * @param callback called when the operation completes
     */
    loginInteractiveAsync(userType: number, interaction: Gio.TlsInteraction | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of a login operation.
     * @param result the result passed to the callback
     */
    loginInteractiveFinish(result: Gio.AsyncResult): boolean
    /**
     * Log out of the session. This call may block for an indefinite period.
     * @param cancellable Optional cancellation object, or %NULL.
     */
    logout(cancellable: Gio.Cancellable | null): boolean
    /**
     * Log out of the session. This call returns immediately and completes
     * asynchronously.
     * @param cancellable Optional cancellation object, or %NULL.
     * @param callback Called when the operation completes.
     */
    logoutAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of logging out of a session.
     * @param result The result passed to the callback.
     */
    logoutFinish(result: Gio.AsyncResult): boolean
    /**
     * Set the interaction object on this session, which is used to prompt for
     * pins and the like.
     * @param interaction the interaction or %NULL
     */
    setInteraction(interaction: Gio.TlsInteraction | null): void
    /**
     * Change the user's pin on this slot that this session is opened on.
     * 
     * This call may block for an indefinite period.
     * @param oldPin the user's old PIN, or %NULL           for protected authentication path.
     * @param newPin the user's new PIN, or %NULL           for protected authentication path
     * @param cancellable Optional cancellation object, or %NULL.
     */
    setPin(oldPin: Uint8Array | null, newPin: Uint8Array | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Change the user's pin on this slot that this session is opened on.
     * 
     * This call will return immediately and completes asynchronously.
     * @param oldPin the user's old PIN, or %NULL           for protected authentication path
     * @param nOldPin the length of the old PIN
     * @param newPin the user's new PIN, or %NULL           for protected authentication path
     * @param cancellable Optional cancellation object, or %NULL.
     * @param callback Called when the operation completes.
     */
    setPinAsync(oldPin: Uint8Array | null, nOldPin: number, newPin: Uint8Array | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of changing a user's PIN.
     * @param result The result passed to the callback.
     */
    setPinFinish(result: Gio.AsyncResult): boolean
    /**
     * Sign data in a mechanism specific manner. This call may
     * block for an indefinite period.
     * @param key The key to sign with.
     * @param mechType The mechanism type to use for signing.
     * @param input data to sign
     * @param cancellable Optional cancellation object, or %NULL
     */
    sign(key: Object, mechType: number, input: Uint8Array, cancellable: Gio.Cancellable | null): Uint8Array
    /**
     * Sign data in a mechanism specific manner. This call will
     * return immediately and complete asynchronously.
     * @param key The key to sign with.
     * @param mechanism The mechanism type and parameters to use for signing.
     * @param input data to sign
     * @param cancellable A GCancellable which can be used to cancel the operation.
     * @param callback Called when the operation completes.
     */
    signAsync(key: Object, mechanism: Mechanism, input: Uint8Array, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of an signing operation.
     * @param result The result object passed to the callback.
     */
    signFinish(result: Gio.AsyncResult): Uint8Array
    /**
     * Sign data in a mechanism specific manner. This call may
     * block for an indefinite period.
     * @param key The key to sign with.
     * @param mechanism The mechanism type and parameters to use for signing.
     * @param input data to sign
     * @param nResult location to store the length of the result data
     * @param cancellable A GCancellable which can be used to cancel the operation.
     */
    signFull(key: Object, mechanism: Mechanism, input: Uint8Array, nResult: number, cancellable: Gio.Cancellable | null): number
    /**
     * Unwrap a key from a byte stream. This call may block for an
     * indefinite period.
     * 
     * If `attrs` is a floating reference, it is consumed.
     * @param wrapper The key to use for unwrapping.
     * @param mechType The mechanism to use for unwrapping.
     * @param input the wrapped data as a byte stream
     * @param attrs Additional attributes for the unwrapped key.
     * @param cancellable Optional cancellation object, or %NULL.
     */
    unwrapKey(wrapper: Object, mechType: number, input: Uint8Array, attrs: Attributes, cancellable: Gio.Cancellable | null): Object
    /**
     * Unwrap a key from a byte stream. This call will
     * return immediately and complete asynchronously.
     * 
     * If `attrs` is a floating reference, it is consumed.
     * @param wrapper The key to use for unwrapping.
     * @param mechanism The mechanism to use for unwrapping.
     * @param input the wrapped data as a byte stream
     * @param attrs Additional attributes for the unwrapped key.
     * @param cancellable Optional cancellation object or %NULL.
     * @param callback Called when the operation completes.
     */
    unwrapKeyAsync(wrapper: Object, mechanism: Mechanism, input: Uint8Array, attrs: Attributes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of a unwrap key operation.
     * @param result The async result passed to the callback.
     */
    unwrapKeyFinish(result: Gio.AsyncResult): Object
    /**
     * Unwrap a key from a byte stream. This call may block for an
     * indefinite period.
     * 
     * If `attrs` is a floating reference, it is consumed.
     * @param wrapper The key to use for unwrapping.
     * @param mechanism The mechanism to use for unwrapping.
     * @param input the wrapped data as a byte stream
     * @param attrs Additional attributes for the unwrapped key.
     * @param cancellable Optional cancellation object, or %NULL.
     */
    unwrapKeyFull(wrapper: Object, mechanism: Mechanism, input: Uint8Array, attrs: Attributes, cancellable: Gio.Cancellable | null): Object
    /**
     * Verify data in a mechanism specific manner. This call may
     * block for an indefinite period.
     * @param key The key to verify with.
     * @param mechType The mechanism type to use for verifying.
     * @param input data to verify
     * @param signature the signature
     * @param cancellable Optional cancellation object, or %NULL
     */
    verify(key: Object, mechType: number, input: Uint8Array, signature: Uint8Array, cancellable: Gio.Cancellable | null): boolean
    /**
     * Verify data in a mechanism specific manner. This call returns
     * immediately and completes asynchronously.
     * @param key The key to verify with.
     * @param mechanism The mechanism type and parameters to use for signing.
     * @param input data to verify
     * @param signature the signature
     * @param cancellable A GCancellable which can be used to cancel the operation.
     * @param callback Called when the operation completes.
     */
    verifyAsync(key: Object, mechanism: Mechanism, input: Uint8Array, signature: Uint8Array, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of an verify operation.
     * @param result The result object passed to the callback.
     */
    verifyFinish(result: Gio.AsyncResult): boolean
    /**
     * Verify data in a mechanism specific manner. This call may
     * block for an indefinite period.
     * @param key The key to verify with.
     * @param mechanism The mechanism type and parameters to use for signing.
     * @param input data to verify
     * @param signature the signature
     * @param cancellable A GCancellable which can be used to cancel the operation.
     */
    verifyFull(key: Object, mechanism: Mechanism, input: Uint8Array, signature: Uint8Array, cancellable: Gio.Cancellable | null): boolean
    /**
     * Wrap a key into a byte stream. This call may block for an
     * indefinite period.
     * @param wrapper The key to use for wrapping.
     * @param mechType The mechanism type to use for wrapping.
     * @param wrapped The key to wrap.
     * @param cancellable A #GCancellable or %NULL
     */
    wrapKey(wrapper: Object, mechType: number, wrapped: Object, cancellable: Gio.Cancellable | null): Uint8Array
    /**
     * Wrap a key into a byte stream. This call will
     * return immediately and complete asynchronously.
     * @param wrapper The key to use for wrapping.
     * @param mechanism The mechanism to use for wrapping.
     * @param wrapped The key to wrap.
     * @param cancellable Optional cancellation object or %NULL.
     * @param callback Called when the operation completes.
     */
    wrapKeyAsync(wrapper: Object, mechanism: Mechanism, wrapped: Object, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of a wrap key operation.
     * @param result The async result passed to the callback.
     */
    wrapKeyFinish(result: Gio.AsyncResult): Uint8Array
    /**
     * Wrap a key into a byte stream. This call may block for an
     * indefinite period.
     * @param wrapper The key to use for wrapping.
     * @param mechanism The mechanism to use for wrapping.
     * @param wrapped The key to wrap.
     * @param cancellable Optional cancellation object, or %NULL.
     */
    wrapKeyFull(wrapper: Object, mechanism: Mechanism, wrapped: Object, cancellable: Gio.Cancellable | null): Uint8Array

    // Own signals of Gck-1.Gck.Session

    connect(sigName: "discard-handle", callback: Session.DiscardHandleSignalCallback): number
    on(sigName: "discard-handle", callback: Session.DiscardHandleSignalCallback): number
    once(sigName: "discard-handle", callback: Session.DiscardHandleSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "discard-handle", ...args: any[]): void

    // Class property signals of Gck-1.Gck.Session

    connect(sigName: "notify::app-data", callback: any): number
    on(sigName: "notify::app-data", callback: any): number
    once(sigName: "notify::app-data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::app-data", ...args: any[]): void
    connect(sigName: "notify::handle", callback: any): number
    on(sigName: "notify::handle", callback: any): number
    once(sigName: "notify::handle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: "notify::interaction", callback: any): number
    on(sigName: "notify::interaction", callback: any): number
    once(sigName: "notify::interaction", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interaction", ...args: any[]): void
    connect(sigName: "notify::module", callback: any): number
    on(sigName: "notify::module", callback: any): number
    once(sigName: "notify::module", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::module", ...args: any[]): void
    connect(sigName: "notify::opening-flags", callback: any): number
    on(sigName: "notify::opening-flags", callback: any): number
    once(sigName: "notify::opening-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opening-flags", ...args: any[]): void
    connect(sigName: "notify::options", callback: any): number
    on(sigName: "notify::options", callback: any): number
    once(sigName: "notify::options", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: "notify::slot", callback: any): number
    on(sigName: "notify::slot", callback: any): number
    once(sigName: "notify::slot", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::slot", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Represents an open PKCS11 session.
 * 
 * Before performing any PKCS11 operations, a session must be opened. This is
 * analogous to an open database handle, or a file handle.
 * @class 
 */
export class Session extends GObject.Object {

    // Own properties of Gck-1.Gck.Session

    static name: string

    // Constructors of Gck-1.Gck.Session

    constructor(config?: Session.ConstructorProperties) 
    _init(config?: Session.ConstructorProperties): void
    /**
     * Initialize a session object from a raw PKCS#11 session handle.
     * Usually one would use the [method`Slot`.open_session] function to
     * create a session.
     * @param slot The slot which the session belongs to.
     * @param sessionHandle the raw PKCS#11 handle of the session
     * @param options Session options. Those which are used during opening a session have no effect.
     */
    static fromHandle(slot: Slot, sessionHandle: number, options: SessionOptions): Session
    /**
     * Open a session on the slot. This call may block for an indefinite period.
     * @param slot the slot to open session on
     * @param options session options
     * @param interaction optional interaction for logins or object authentication
     * @param cancellable optional cancellation object
     */
    static open(slot: Slot, options: SessionOptions, interaction: Gio.TlsInteraction | null, cancellable: Gio.Cancellable | null): Session
    /**
     * Open a session on the slot. This call will return immediately and complete
     * asynchronously.
     * @param slot the slot to open session on
     * @param options session options
     * @param interaction optional interaction for logins or object authentication
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    static openAsync(slot: Slot, options: SessionOptions, interaction: Gio.TlsInteraction | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of an open session operation.
     * @param result the result passed to the callback
     */
    static openFinish(result: Gio.AsyncResult): Session
}

export module Slot {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gck-1.Gck.Slot

        /**
         * The raw CK_SLOT_ID handle of this slot.
         */
        handle?: number | null
        /**
         * The PKCS11 object that this slot is a part of.
         */
        module?: Module | null
    }

}

export interface Slot {

    // Own properties of Gck-1.Gck.Slot

    /**
     * The raw CK_SLOT_ID handle of this slot.
     */
    readonly handle: number
    /**
     * The PKCS11 object that this slot is a part of.
     */
    readonly module: Module

    // Own fields of Gck-1.Gck.Slot

    parent: GObject.Object

    // Owm methods of Gck-1.Gck.Slot

    /**
     * Setup an enumerator for listing matching objects on the slot.
     * 
     * If the `match` #GckAttributes is floating, it is consumed.
     * 
     * This call will not block but will return an enumerator immediately.
     * @param match attributes that the objects must match, or empty for all objects
     * @param options options for opening a session
     */
    enumerateObjects(match: Attributes, options: SessionOptions): Enumerator
    /**
     * Checks equality of two slots. Two GckSlot objects can point to the same
     * underlying PKCS#11 slot.
     * @param slot2 a pointer to the second #GckSlot
     */
    equal(slot2: Slot): boolean
    /**
     * Get the raw PKCS#11 handle of a slot.
     */
    getHandle(): number
    /**
     * Get the information for this slot.
     */
    getInfo(): SlotInfo
    /**
     * Get information for the specified mechanism.
     * @param mechType The mechanisms type to get info for.
     */
    getMechanismInfo(mechType: number): MechanismInfo
    /**
     * Get the available mechanisms for this slot.
     */
    getMechanisms(): number[]
    /**
     * Get the module that this slot is on.
     */
    getModule(): Module
    /**
     * Get the token information for this slot.
     */
    getTokenInfo(): TokenInfo
    /**
     * Check if the PKCS11 slot has the given flags.
     * @param flags The flags to check.
     */
    hasFlags(flags: number): boolean
    /**
     * Create a hash value for the GckSlot.
     * 
     * This function is intended for easily hashing a GckSlot to add to
     * a GHashTable or similar data structure.
     */
    hash(): number
    /**
     * Check whether the PKCS#11 URI matches the slot
     * @param uri the uri to match against the slot
     */
    match(uri: UriData): boolean
    /**
     * Open a session on the slot. If the 'auto reuse' setting is set,
     * then this may be a recycled session with the same flags.
     * 
     * This call may block for an indefinite period.
     * @param options The #GckSessionOptions to open a session with.
     * @param cancellable An optional cancellation object, or %NULL.
     */
    openSession(options: SessionOptions, cancellable: Gio.Cancellable | null): Session
    /**
     * Open a session on the slot. If the 'auto reuse' setting is set,
     * then this may be a recycled session with the same flags.
     * 
     * This call will return immediately and complete asynchronously.
     * @param options The options to open the new session with.
     * @param cancellable Optional cancellation object, or %NULL.
     * @param callback Called when the operation completes.
     */
    openSessionAsync(options: SessionOptions, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Get the result of an open session operation. If the 'auto reuse' setting is set,
     * then this may be a recycled session with the same flags.
     * @param result The result passed to the callback.
     */
    openSessionFinish(result: Gio.AsyncResult): Session

    // Class property signals of Gck-1.Gck.Slot

    connect(sigName: "notify::handle", callback: any): number
    on(sigName: "notify::handle", callback: any): number
    once(sigName: "notify::handle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: "notify::module", callback: any): number
    on(sigName: "notify::module", callback: any): number
    once(sigName: "notify::module", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::module", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Represents a PKCS#11 slot that can contain a token.
 * 
 * A PKCS#11 slot can contain a token. As an example, a slot might be a card
 * reader, and the token the card. If the PKCS#11 module is not a hardware
 * driver, often the slot and token are equivalent.
 * @class 
 */
export class Slot extends GObject.Object {

    // Own properties of Gck-1.Gck.Slot

    static name: string

    // Constructors of Gck-1.Gck.Slot

    constructor(config?: Slot.ConstructorProperties) 
    _init(config?: Slot.ConstructorProperties): void
    /**
     * Create a new GckSlot object for a raw PKCS#11 handle.
     * @param module The module that this slot is on.
     * @param slotId The raw PKCS#11 handle or slot id of this slot.
     */
    static fromHandle(module: Module, slotId: number): Slot
}

export interface Attribute {

    // Own fields of Gck-1.Gck.Attribute

    /**
     * The attribute type, such as `CKA_LABEL`.
     * @field 
     */
    type: number
    /**
     * The value of the attribute. May be %NULL.
     * @field 
     */
    value: Uint8Array
    /**
     * The length of the attribute. May be [const`INVALID]` if the
     * attribute is invalid.
     * @field 
     */
    length: number

    // Owm methods of Gck-1.Gck.Attribute

    /**
     * Clear allocated memory held by a #GckAttribute.
     * 
     * This attribute must have been allocated by a Gck library function, or
     * the results of this method are undefined.
     * 
     * The type of the attribute will remain set.
     */
    clear(): void
    /**
     * Dump the specified attribute using g_printerr().
     */
    dump(): void
    /**
     * Duplicate the PKCS#11 attribute. All value memory is
     * also copied.
     * 
     * The `attr` must have been allocated or initialized by a Gck function or
     * the results of this function are undefined.
     */
    dup(): Attribute
    /**
     * Compare two attributes. Useful with <code>GHashTable</code>.
     * @param attr2 second attribute to compare
     */
    equal(attr2: Attribute): boolean
    /**
     * Free an attribute and its allocated memory. These is usually
     * used with attributes that are allocated by [ctor`Attribute`.new]
     * or a similar function.
     */
    free(): void
    /**
     * Get the CK_BBOOL of a PKCS#11 attribute. No conversion
     * is performed. It is an error to pass an attribute to this
     * function unless you're know it's supposed to contain a
     * boolean value.
     */
    getBoolean(): boolean
    /**
     * Get the raw value in the attribute.
     * 
     * This is useful from scripting languages. C callers will generally
     * access the #GckAttribute struct directly.
     * 
     * This function will %NULL if the attribute contains empty or invalid
     * data. The returned data must not be modified and is only valid
     * as long as this `attribute`.
     */
    getData(): Uint8Array
    /**
     * Get the CK_DATE of a PKCS#11 attribute. No
     * conversion is performed. It is an error to pass an attribute
     * to this function unless you're know it's supposed to contain
     * a value of the right type.
     * @param value The date value to fill in with the parsed date.
     */
    getDate(value: GLib.Date): void
    /**
     * Get the string value of a PKCS#11 attribute. No
     * conversion is performed. It is an error to pass an attribute
     * to this function unless you're know it's supposed to contain
     * a value of the right type.
     */
    getString(): string | null
    /**
     * Get the CK_ULONG value of a PKCS#11 attribute. No
     * conversion is performed. It is an error to pass an attribute
     * to this function unless you're know it's supposed to contain
     * a value of the right type.
     */
    getUlong(): number
    /**
     * Hash an attribute for use in <code>GHashTable</code> keys.
     */
    hash(): number
    /**
     * Initialize a PKCS#11 attribute as a copy of another attribute.
     * This copies the value memory as well.
     * 
     * When done with the copied attribute you should use
     * [method`Attribute`.clear] to free the internal memory.
     * @param src An attribute to copy.
     */
    initCopy(src: Attribute): void
    /**
     * Check if the PKCS#11 attribute represents 'invalid' or 'not found'
     * according to the PKCS#11 spec. That is, having length
     * of (CK_ULONG)-1.
     */
    isInvalid(): boolean
}

/**
 * This structure represents a PKCS#11 `CK_ATTRIBUTE`. These attributes contain
 * information about a PKCS#11 object. Use [method`Object`.get] or
 * [method`Object`.set] to set and attributes on an object.
 * 
 * Although you are free to allocate a `GckAttribute` in your own code, no
 * functions in this library will operate on such an attribute.
 * @record 
 */
export class Attribute {

    // Own properties of Gck-1.Gck.Attribute

    static name: string

    // Constructors of Gck-1.Gck.Attribute

    /**
     * Create a new PKCS#11 attribute. The value will be copied
     * into the new attribute.
     * @constructor 
     * @param attrType the PKCS#11 attribute type to set on the attribute
     * @param value the raw value of the attribute
     * @param length the length of the attribute
     */
    constructor(attrType: number, value: number, length: number) 
    /**
     * Create a new PKCS#11 attribute. The value will be copied
     * into the new attribute.
     * @constructor 
     * @param attrType the PKCS#11 attribute type to set on the attribute
     * @param value the raw value of the attribute
     * @param length the length of the attribute
     */
    static new(attrType: number, value: number, length: number): Attribute
    /**
     * Initialize a PKCS#11 attribute to boolean. This will result
     * in a CK_BBOOL attribute from the PKCS#11 specs.
     * @constructor 
     * @param attrType the PKCS#11 attribute type to set on the attribute
     * @param value the boolean value of the attribute
     */
    static newBoolean(attrType: number, value: boolean): Attribute
    /**
     * Initialize a PKCS#11 attribute to a date. This will result
     * in a CK_DATE attribute from the PKCS#11 specs.
     * @constructor 
     * @param attrType the PKCS#11 attribute type to set on the attribute
     * @param value the date value of the attribute
     */
    static newDate(attrType: number, value: GLib.Date): Attribute
    /**
     * Create a new PKCS#11 attribute with empty data.
     * @constructor 
     * @param attrType the PKCS#11 attribute type to set on the attribute
     */
    static newEmpty(attrType: number): Attribute
    /**
     * Create a new PKCS#11 attribute as 'invalid' or 'not found'
     * state. Specifically this sets the value length to (CK_ULONG)-1
     * as specified in the PKCS#11 specification.
     * @constructor 
     * @param attrType the PKCS#11 attribute type to set on the attribute
     */
    static newInvalid(attrType: number): Attribute
    /**
     * Initialize a PKCS#11 attribute to a string. This will result
     * in an attribute containing the text, but not the null terminator.
     * The text in the attribute will be of the same encoding as you pass
     * to this function.
     * @constructor 
     * @param attrType the PKCS#11 attribute type to set on the attribute
     * @param value the null-terminated string value of the attribute
     */
    static newString(attrType: number, value: string): Attribute
    /**
     * Initialize a PKCS#11 attribute to a unsigned long. This will result
     * in a `CK_ULONG` attribute from the PKCS#11 specs.
     * @constructor 
     * @param attrType the PKCS#11 attribute type to set on the attribute
     * @param value the ulong value of the attribute
     */
    static newUlong(attrType: number, value: number): Attribute
}

export interface Attributes {

    // Owm methods of Gck-1.Gck.Attributes

    /**
     * Get attribute at the specified index in the attribute array.
     * 
     * Use [method`Attributes`.count] to determine how many attributes are
     * in the array.
     * @param index The attribute index to retrieve.
     */
    at(index: number): Attribute
    /**
     * Check whether the attributes contain a certain attribute.
     * @param match The attribute to find
     */
    contains(match: Attribute): boolean
    /**
     * Get the number of attributes in this attribute array.
     */
    count(): number
    /**
     * Dump the attributes using g_printerr().
     */
    dump(): void
    /**
     * Find an attribute with the specified type in the array.
     * @param attrType The type of attribute to find.
     */
    find(attrType: number): Attribute
    /**
     * Find an attribute with the specified type in the array.
     * 
     * The attribute (if found) must be of the right size to store
     * a boolean value (ie: CK_BBOOL). If the attribute is marked invalid
     * then it will be treated as not found.
     * @param attrType The type of attribute to find.
     */
    findBoolean(attrType: number): [ /* returnType */ boolean, /* value */ boolean ]
    /**
     * Find an attribute with the specified type in the array.
     * 
     * The attribute (if found) must be of the right size to store
     * a date value (ie: CK_DATE). If the attribute is marked invalid
     * then it will be treated as not found.
     * @param attrType The type of attribute to find.
     */
    findDate(attrType: number): [ /* returnType */ boolean, /* value */ GLib.Date ]
    /**
     * Find an attribute with the specified type in the array.
     * 
     * If the attribute is marked invalid then it will be treated as not found.
     * The resulting string will be null-terminated, and must be freed by the caller
     * using g_free().
     * @param attrType The type of attribute to find.
     */
    findString(attrType: number): [ /* returnType */ boolean, /* value */ string ]
    /**
     * Find an attribute with the specified type in the array.
     * 
     * The attribute (if found) must be of the right size to store
     * a unsigned long value (ie: CK_ULONG). If the attribute is marked invalid
     * then it will be treated as not found.
     * @param attrType The type of attribute to find.
     */
    findUlong(attrType: number): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Reference this attributes array.
     */
    ref(): Attributes
    /**
     * #GckAttributes uses a floating reference count system. [method`Builder`.end]
     * and [ctor`Attributes`.new_empty] both return floating references.
     * 
     * Calling this function on a `GckAttributes` with a floating
     * reference will convert the floating reference into a full reference.
     * Calling this function on a non-floating `GckAttributes` results
     * in an additional normal reference being added.
     * 
     * In other words, if the `attrs` is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference.  If the `attrs` is not floating, then this call adds a
     * new normal reference increasing the reference count by one.
     * 
     * All Gck library functions that assume ownership of floating references
     * are documented as such. Essentially any Gck function that performs
     * an operation using a #GckAttributes argument rather than operating on the
     * attributes themselves, will accept a floating reference.
     */
    refSink(): Attributes
    /**
     * Print out attributes to a string in aform that's useful for debugging
     * or logging.
     * 
     * The format of the string returned may change in the future.
     */
    toString(): string
    /**
     * Unreference this attribute array.
     * 
     * When all outstanding references are gone, the array will be freed.
     */
    unref(): void
}

/**
 * A set of [struct`Attribute]` structures.
 * 
 * These attributes contain information about a PKCS11 object. Use
 * [method`Object`.get] or [method`Object`.set] to set and retrieve attributes on
 * an object.
 * @record 
 */
export class Attributes {

    // Own properties of Gck-1.Gck.Attributes

    static name: string

    // Constructors of Gck-1.Gck.Attributes

    /**
     * Create a new empty `GckAttributes` array.
     * 
     * The returned set of attributes is floating, and should either be passed to
     * another gck library function which consumes this floating reference, or if
     * you wish to keep these attributes around you should ref them with
     * gck_attributes_ref_sink() and unref them later with gck_attributes_unref().
     * @constructor 
     * @param reserved Should be set to always be [const`INVALID]`
     */
    constructor(reserved: number) 
    /**
     * Create a new empty `GckAttributes` array.
     * 
     * The returned set of attributes is floating, and should either be passed to
     * another gck library function which consumes this floating reference, or if
     * you wish to keep these attributes around you should ref them with
     * gck_attributes_ref_sink() and unref them later with gck_attributes_unref().
     * @constructor 
     * @param reserved Should be set to always be [const`INVALID]`
     */
    static new(reserved: number): Attributes
}

export interface Builder {

    // Owm methods of Gck-1.Gck.Builder

    /**
     * Add all the `attrs` attributes to the builder. The attributes are added
     * uncondititionally whether or not attributes with the same types already
     * exist in the builder.
     * 
     * As an optimization, the attribute memory values are automatically shared
     * between the attributes and the builder.
     * @param attrs the attributes to add
     */
    addAll(attrs: Attributes): void
    /**
     * Add an attribute to the builder. The attribute is added unconditionally whether
     * or not an attribute with the same type already exists on the builder.
     * 
     * The `attr` attribute must have been created or owned by the Gck library.
     * If you call this function on an arbitrary `GckAttribute` that is allocated on
     * the stack or elsewhere, then this will result in undefined behavior.
     * 
     * As an optimization, the attribute memory value is automatically shared
     * between the attribute and the builder.
     * @param attr the attribute to add
     */
    addAttribute(attr: Attribute): void
    /**
     * Add a new attribute to the builder for the boolean `value`.
     * Unconditionally adds a new attribute, even if one with the same `attr_type`
     * already exists.
     * @param attrType the new attribute type
     * @param value the attribute value
     */
    addBoolean(attrType: number, value: boolean): void
    /**
     * Add a new attribute to the builder with an arbitrary value. Unconditionally
     * adds a new attribute, even if one with the same `attr_type` already exists.
     * 
     * The memory in `value` is copied by the builder.
     * 
     * %NULL may be specified for the `value` argument, in which case an empty
     * attribute is created. [const`INVALID]` may be specified for the length, in
     * which case an invalid attribute is created in the PKCS#11 style.
     * @param attrType the new attribute type
     * @param value the new attribute memory
     */
    addData(attrType: number, value: Uint8Array | null): void
    /**
     * Add a new attribute to the builder for the date `value`.
     * Unconditionally adds a new attribute, even if one with the same `attr_type`
     * already exists.
     * @param attrType the new attribute type
     * @param value the attribute value
     */
    addDate(attrType: number, value: GLib.Date): void
    /**
     * Add a new attribute to the builder that is empty. Unconditionally
     * adds a new attribute, even if one with the same `attr_type` already exists.
     * @param attrType the new attribute type
     */
    addEmpty(attrType: number): void
    /**
     * Add a new attribute to the builder that is invalid in the PKCS#11 sense.
     * Unconditionally adds a new attribute, even if one with the same `attr_type`
     * already exists.
     * @param attrType the new attribute type
     */
    addInvalid(attrType: number): void
    /**
     * Add the attributes with the types in `only_types` from `attrs` to the
     * builder. The attributes are added uncondititionally whether or not
     * attributes with the same types already exist in the builder.
     * 
     * ```c
     * // Add the CKA_ID and CKA_CLASS attributes from attrs to builder
     * gulong only[] = { CKA_ID, CKA_CLASS };
     * gck_builder_add_onlyv (builder, attrs, only, 2);
     * ```
     * 
     * As an optimization, the attribute memory values are automatically shared
     * between the attributes and the builder.
     * @param attrs the attributes to add
     * @param onlyTypes the types of attributes to add
     */
    addOnly(attrs: Attributes, onlyTypes: number[]): void
    /**
     * Add a new attribute to the builder for the string `value` or %NULL.
     * Unconditionally adds a new attribute, even if one with the same `attr_type`
     * already exists.
     * @param attrType the new attribute type
     * @param value the attribute value
     */
    addString(attrType: number, value: string | null): void
    /**
     * Add a new attribute to the builder for the unsigned long `value`.
     * Unconditionally adds a new attribute, even if one with the same `attr_type`
     * already exists.
     * @param attrType the new attribute type
     * @param value the attribute value
     */
    addUlong(attrType: number, value: number): void
    /**
     * Clear the builder and release all allocated memory. The builder may be used
     * again to build another set of attributes after this function call.
     * 
     * If memory is shared between this builder and other attributes, then that
     * memory is only freed when both of them are cleared or unreferenced.
     */
    clear(): void
    /**
     * Make a copy of the builder and its state. The new builder is allocated
     * with [ctor`Builder`.new] and should be freed with gck_builder_unref().
     * 
     * Attribute value memory is automatically shared between the two builders,
     * and is only freed when both are gone.
     */
    copy(): Builder
    /**
     * Complete the #GckBuilder, and return the attributes contained in the builder.
     * The #GckBuilder will be cleared after this function call, and it is no
     * longer necessary to use [method`Builder`.clear] on it, although it is also
     * permitted. The builder may be used again to build another set of attributes
     * after this function call.
     * 
     * The returned set of attributes is floating, and should either be passed to
     * another gck library function which consumes this floating reference, or if
     * you wish to keep these attributes around you should ref them with
     * gck_attributes_ref_sink() and unref them later with gck_attributes_unref().
     */
    end(): Attributes
    /**
     * Find an attribute in the builder. Both valid and invalid attributes (in
     * the PKCS#11 sense) are returned. If multiple attributes exist for the given
     * attribute type, then the first one is returned.
     * 
     * The returned [struct`Attribute]` is owned by the builder and may not be
     * modified in any way. It is only valid until another attribute is added to or
     * set on the builder, or until the builder is cleared or unreferenced.
     * @param attrType the type of attribute to find
     */
    find(attrType: number): Attribute
    /**
     * Find a boolean attribute in the builder that has the type `attr_type,` is
     * of the correct boolean size, and is not invalid in the PKCS#11 sense.
     * If multiple attributes exist for the given attribute type, then the first\
     * one is returned.
     * @param attrType the type of attribute to find
     */
    findBoolean(attrType: number): [ /* returnType */ boolean, /* value */ boolean ]
    /**
     * Find a date attribute in the builder that has the type `attr_type,` is of
     * the correct date size, and is not invalid in the PKCS#11 sense.
     * If multiple attributes exist for the given attribute type, then the first
     * one is returned.
     * @param attrType the type of attribute to find
     */
    findDate(attrType: number): [ /* returnType */ boolean, /* value */ GLib.Date ]
    /**
     * Find a string attribute in the builder that has the type `attr_type,` has a
     * non %NULL value pointer, and is not invalid in the PKCS#11 sense.
     * If multiple attributes exist for the given attribute type, then the first
     * one is returned.
     * @param attrType the type of attribute to find
     */
    findString(attrType: number): [ /* returnType */ boolean, /* value */ string ]
    /**
     * Find a unsigned long attribute in the builder that has the type `attr_type,`
     * is of the correct unsigned long size, and is not invalid in the PKCS#11 sense.
     * If multiple attributes exist for the given attribute type, then the first
     * one is returned.
     * @param attrType the type of attribute to find
     */
    findUlong(attrType: number): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Initialize a stack allocated builder, with the default flags.
     * 
     * This is equivalent to initializing a builder variable with the
     * %GCK_BUILDER_INIT constant, or setting it to zeroed memory.
     * 
     * ```c
     * // Equivalent ways of initializing a GckBuilder
     * GckBuilder builder = GCK_BUILDER_INIT;
     * GckBuilder builder2;
     * GckBuilder builder3;
     * 
     * gck_builder_init (&builder2);
     * 
     * memset (&builder3, 0, sizeof (builder3));
     * ```
     */
    init(): void
    /**
     * Initialize a stack allocated builder, with the appropriate flags.
     * 
     * If the %GCK_BUILDER_SECURE_MEMORY flag is specified then non-pageable memory
     * will be used for the various values of the attributes in the builder
     * @param flags the flags for the new builder
     */
    initFull(flags: BuilderFlags): void
    /**
     * Add a reference to a builder that was created with [ctor`Builder`.new]. The
     * builder must later be unreferenced again with gck_builder_unref().
     * 
     * It is an error to use this function on builders that were allocated on the
     * stack.
     */
    ref(): Builder
    /**
     * Set all the `attrs` attributes to the builder. If any attributes with the
     * same types are already present in the builder, then those attributes are
     * changed to the new values.
     * 
     * As an optimization, the attribute memory values are automatically shared
     * between the attributes and the builder.
     * @param attrs the attributes to set
     */
    setAll(attrs: Attributes): void
    /**
     * Set an attribute on the builder for the boolean `value`.
     * If an attribute with `attr_type` already exists in the builder then it is
     * changed to the new value, otherwise an attribute is added.
     * @param attrType the new attribute type
     * @param value the attribute value
     */
    setBoolean(attrType: number, value: boolean): void
    /**
     * Set a new attribute to the builder with an arbitrary value. If an attribute
     * with `attr_type` already exists in the builder then it is changed to the new
     * value, otherwise an attribute is added.
     * 
     * The memory in `value` is copied by the builder.
     * 
     * %NULL may be specified for the `value` argument, in which case an empty
     * attribute is created. [const`INVALID]` may be specified for the length, in
     * which case an invalid attribute is created in the PKCS#11 style.
     * @param attrType the attribute type
     * @param value the new attribute memory
     */
    setData(attrType: number, value: Uint8Array | null): void
    /**
     * Set an attribute on the builder for the date `value`.
     * If an attribute with `attr_type` already exists in the builder then it is
     * changed to the new value, otherwise an attribute is added.
     * @param attrType the new attribute type
     * @param value the attribute value
     */
    setDate(attrType: number, value: GLib.Date): void
    /**
     * Set an attribute on the builder that is empty. If an attribute
     * with `attr_type` already exists in the builder then it is changed to the new
     * value, otherwise an attribute is added.
     * @param attrType the attribute type
     */
    setEmpty(attrType: number): void
    /**
     * Set an attribute on the builder that is invalid in the PKCS#11 sense.
     * If an attribute with `attr_type` already exists in the builder then it is
     * changed to the new value, otherwise an attribute is added.
     * @param attrType the attribute type
     */
    setInvalid(attrType: number): void
    /**
     * Set an attribute on the builder for the string `value` or %NULL.
     * If an attribute with `attr_type` already exists in the builder then it is
     * changed to the new value, otherwise an attribute is added.
     * @param attrType the new attribute type
     * @param value the attribute value
     */
    setString(attrType: number, value: string): void
    /**
     * Set an attribute on the builder for the unsigned long `value`.
     * If an attribute with `attr_type` already exists in the builder then it is
     * changed to the new value, otherwise an attribute is added.
     * @param attrType the new attribute type
     * @param value the attribute value
     */
    setUlong(attrType: number, value: number): void
    /**
     * Take the attributes that have been built in the #GckBuilder. The builder
     * will no longer contain any attributes after this function call.
     * 
     * The returned set of attributes is a full reference, not floating.
     */
    steal(): Attributes
    /**
     * Add a new attribute to the builder with an arbitrary value. Unconditionally
     * adds a new attribute, even if one with the same `attr_type` already exists.
     * 
     * Ownership of the `value` memory is taken by the builder, may be reallocated,
     * and is eventually freed with g_free(). The memory must have been allocated
     * using the standard GLib memory allocation routines.
     * 
     * %NULL may be specified for the `value` argument, in which case an empty
     * attribute is created. [const`INVALID]` may be specified for the length, in
     * which case an invalid attribute is created in the PKCS#11 style.
     * @param attrType the new attribute type
     * @param value the new         attribute memory
     */
    takeData(attrType: number, value: Uint8Array | null): void
}

/**
 * A builder for a set of attributes. Add attributes to a builder, and then use
 * [method`Builder`.end] to get the completed [struct`Attributes]`.
 * 
 * The fields of #GckBuilder are private and not to be accessed directly.
 * @record 
 */
export class Builder {

    // Own properties of Gck-1.Gck.Builder

    static name: string

    // Constructors of Gck-1.Gck.Builder

    /**
     * Create a new `GckBuilder` not allocated on the stack, so it can be shared
     * across a single scope, and referenced / unreferenced.
     * 
     * Normally a `GckBuilder` is created on the stack, and simply initialized.
     * 
     * If the %GCK_BUILDER_SECURE_MEMORY flag is specified then non-pageable memory
     * will be used for the various values of the attributes in the builder
     * @constructor 
     * @param flags flags for the new builder
     */
    constructor(flags: BuilderFlags) 
    /**
     * Create a new `GckBuilder` not allocated on the stack, so it can be shared
     * across a single scope, and referenced / unreferenced.
     * 
     * Normally a `GckBuilder` is created on the stack, and simply initialized.
     * 
     * If the %GCK_BUILDER_SECURE_MEMORY flag is specified then non-pageable memory
     * will be used for the various values of the attributes in the builder
     * @constructor 
     * @param flags flags for the new builder
     */
    static new(flags: BuilderFlags): Builder
    /**
     * Unreferences a builder. If this was the last reference then the builder
     * is freed.
     * 
     * It is an error to use this function on builders that were allocated on the
     * stack.
     * @param builder the builder
     */
    static unref(builder: object | null): void
}

export interface EnumeratorClass {

    // Own fields of Gck-1.Gck.EnumeratorClass

    parent: GObject.ObjectClass
}

export abstract class EnumeratorClass {

    // Own properties of Gck-1.Gck.EnumeratorClass

    static name: string
}

export interface EnumeratorPrivate {
}

export class EnumeratorPrivate {

    // Own properties of Gck-1.Gck.EnumeratorPrivate

    static name: string
}

export interface Mechanism {

    // Own fields of Gck-1.Gck.Mechanism

    /**
     * The mechanism type
     * @field 
     */
    type: number
    /**
     * Mechanism specific data.
     * @field 
     */
    parameter: object
    /**
     * Length of mechanism specific data.
     * @field 
     */
    nParameter: number
}

/**
 * Represents a mechanism used with crypto operations.
 * @record 
 */
export class Mechanism {

    // Own properties of Gck-1.Gck.Mechanism

    static name: string
}

export interface MechanismInfo {

    // Own fields of Gck-1.Gck.MechanismInfo

    /**
     * The minimum key size that can be used with this mechanism.
     * @field 
     */
    minKeySize: number
    /**
     * The maximum key size that can be used with this mechanism.
     * @field 
     */
    maxKeySize: number
    /**
     * Various PKCS11 flags that apply to this mechanism.
     * @field 
     */
    flags: number

    // Owm methods of Gck-1.Gck.MechanismInfo

    /**
     * Make a copy of the mechanism info.
     */
    copy(): MechanismInfo
    /**
     * Free the GckMechanismInfo and associated resources.
     */
    free(): void
}

/**
 * Represents information about a PKCS11 mechanism.
 * 
 * This is analogous to a CK_MECHANISM_INFO structure.
 * 
 * When you're done with this structure it should be released with
 * gck_mechanism_info_free().
 * @record 
 */
export class MechanismInfo {

    // Own properties of Gck-1.Gck.MechanismInfo

    static name: string
}

export interface ModuleClass {

    // Own fields of Gck-1.Gck.ModuleClass

    parent: GObject.ObjectClass
    authenticateSlot: (self: Module, slot: Slot, label: string, password: string) => boolean
    authenticateObject: (self: Module, object: Object, label: string, password: string) => boolean
}

export abstract class ModuleClass {

    // Own properties of Gck-1.Gck.ModuleClass

    static name: string
}

export interface ModuleInfo {

    // Own fields of Gck-1.Gck.ModuleInfo

    /**
     * The major version of the module.
     * @field 
     */
    pkcs11VersionMajor: number
    /**
     * The minor version of the module.
     * @field 
     */
    pkcs11VersionMinor: number
    /**
     * The module manufacturer.
     * @field 
     */
    manufacturerId: string
    /**
     * The module PKCS&num;11 flags.
     * @field 
     */
    flags: number
    /**
     * The module description.
     * @field 
     */
    libraryDescription: string
    /**
     * The major version of the library.
     * @field 
     */
    libraryVersionMajor: number
    /**
     * The minor version of the library.
     * @field 
     */
    libraryVersionMinor: number

    // Owm methods of Gck-1.Gck.ModuleInfo

    /**
     * Make a copy of the module info.
     */
    copy(): ModuleInfo
    /**
     * Free a GckModuleInfo structure.
     */
    free(): void
}

/**
 * Holds information about the PKCS#11 module.
 * 
 * This structure corresponds to `CK_MODULE_INFO` in the PKCS#11 standard. The
 * strings are %NULL terminated for easier use.
 * 
 * Use gck_module_info_free() to release this structure when done with it.
 * @record 
 */
export class ModuleInfo {

    // Own properties of Gck-1.Gck.ModuleInfo

    static name: string
}

export interface ModulePrivate {
}

export class ModulePrivate {

    // Own properties of Gck-1.Gck.ModulePrivate

    static name: string
}

export interface ObjectCacheIface {

    // Own fields of Gck-1.Gck.ObjectCacheIface

    /**
     * parent interface
     * @field 
     */
    interface: GObject.TypeInterface
    /**
     * attribute types that an
     *                   enumerator should retrieve
     * @field 
     */
    defaultTypes: number[]
    /**
     * number of attribute types to be retrieved
     * @field 
     */
    nDefaultTypes: number
    fill: (object: ObjectCache, attrs: Attributes) => void
}

/**
 * Interface for [iface`ObjectCache]`. If the `default_types` field is
 * implemented by a implementing class, then that will be used by a
 * [class`Enumerator]` which has been setup using
 * [method`Enumerator`.set_object_type]
 * 
 * The implementation for `populate` should add the attributes to the
 * cache. It must be thread safe.
 * @record 
 */
export abstract class ObjectCacheIface {

    // Own properties of Gck-1.Gck.ObjectCacheIface

    static name: string
}

export interface ObjectClass {

    // Own fields of Gck-1.Gck.ObjectClass

    /**
     * derived from this
     * @field 
     */
    parent: GObject.ObjectClass
}

/**
 * The class for a [class`Object]`.
 * 
 * If the `attribute_types` field is set by a derived class, then the a
 * #GckEnumerator which has been setup using [method`Enumerator`.set_object_type]
 * with this derived type will retrieve these attributes when enumerating. In
 * this case the class must implement an 'attributes' property of boxed type
 * `GCK_TYPE_ATTRIBUTES`.
 * @record 
 */
export abstract class ObjectClass {

    // Own properties of Gck-1.Gck.ObjectClass

    static name: string
}

export interface ObjectPrivate {
}

export class ObjectPrivate {

    // Own properties of Gck-1.Gck.ObjectPrivate

    static name: string
}

export interface PasswordClass {

    // Own fields of Gck-1.Gck.PasswordClass

    /**
     * parent class
     * @field 
     */
    parent: Gio.TlsPasswordClass
}

/**
 * The class struct for [class`Password]`.
 * @record 
 */
export abstract class PasswordClass {

    // Own properties of Gck-1.Gck.PasswordClass

    static name: string
}

export interface PasswordPrivate {
}

export class PasswordPrivate {

    // Own properties of Gck-1.Gck.PasswordPrivate

    static name: string
}

export interface SessionClass {

    // Own fields of Gck-1.Gck.SessionClass

    parent: GObject.ObjectClass
}

export abstract class SessionClass {

    // Own properties of Gck-1.Gck.SessionClass

    static name: string
}

export interface SessionInfo {

    // Own fields of Gck-1.Gck.SessionInfo

    /**
     * The handle of the PKCS11 slot that this session is opened on.
     * @field 
     */
    slotId: number
    /**
     * The user login state of the session.
     * @field 
     */
    state: number
    /**
     * Various PKCS11 flags.
     * @field 
     */
    flags: number
    /**
     * The last device error that occurred from an operation on this session.
     * @field 
     */
    deviceError: number

    // Owm methods of Gck-1.Gck.SessionInfo

    /**
     * Make a new copy of a session info structure.
     */
    copy(): SessionInfo
    /**
     * Free the GckSessionInfo structure and all associated memory.
     */
    free(): void
}

/**
 * Information about the session. This is analogous to a CK_SESSION_INFO structure.
 * 
 * When done with this structure, release it using gck_session_info_free().
 * @record 
 */
export class SessionInfo {

    // Own properties of Gck-1.Gck.SessionInfo

    static name: string
}

export interface SessionPrivate {
}

export class SessionPrivate {

    // Own properties of Gck-1.Gck.SessionPrivate

    static name: string
}

export interface SlotClass {

    // Own fields of Gck-1.Gck.SlotClass

    parent: GObject.ObjectClass
}

export abstract class SlotClass {

    // Own properties of Gck-1.Gck.SlotClass

    static name: string
}

export interface SlotInfo {

    // Own fields of Gck-1.Gck.SlotInfo

    /**
     * Description of the slot.
     * @field 
     */
    slotDescription: string
    /**
     * The manufacturer of this slot.
     * @field 
     */
    manufacturerId: string
    /**
     * Various PKCS11 flags that apply to this slot.
     * @field 
     */
    flags: number
    /**
     * The major version of the hardware.
     * @field 
     */
    hardwareVersionMajor: number
    /**
     * The minor version of the hardware.
     * @field 
     */
    hardwareVersionMinor: number
    /**
     * The major version of the firmware.
     * @field 
     */
    firmwareVersionMajor: number
    /**
     * The minor version of the firmware.
     * @field 
     */
    firmwareVersionMinor: number

    // Owm methods of Gck-1.Gck.SlotInfo

    /**
     * Make a copy of the slot info.
     */
    copy(): SlotInfo
    /**
     * Free the GckSlotInfo and associated resources.
     */
    free(): void
}

/**
 * Represents information about a PKCS11 slot.
 * 
 * This is analogous to a CK_SLOT_INFO structure, but the
 * strings are far more usable.
 * 
 * When you're done with this structure it should be released with
 * gck_slot_info_free().
 * @record 
 */
export class SlotInfo {

    // Own properties of Gck-1.Gck.SlotInfo

    static name: string
}

export interface SlotPrivate {
}

export class SlotPrivate {

    // Own properties of Gck-1.Gck.SlotPrivate

    static name: string
}

export interface TokenInfo {

    // Own fields of Gck-1.Gck.TokenInfo

    /**
     * The displayable token label.
     * @field 
     */
    label: string
    /**
     * The manufacturer of this slot.
     * @field 
     */
    manufacturerId: string
    /**
     * The token model number as a string.
     * @field 
     */
    model: string
    /**
     * The token serial number as a string.
     * @field 
     */
    serialNumber: string
    /**
     * Various PKCS11 flags that apply to this token.
     * @field 
     */
    flags: number
    /**
     * The maximum number of sessions allowed on this token.
     * @field 
     */
    maxSessionCount: number
    /**
     * The number of sessions open on this token.
     * @field 
     */
    sessionCount: number
    /**
     * The maximum number of read/write sessions allowed on this token.
     * @field 
     */
    maxRwSessionCount: number
    /**
     * The number of sessions open on this token.
     * @field 
     */
    rwSessionCount: number
    /**
     * The maximum length of a PIN for locking this token.
     * @field 
     */
    maxPinLen: number
    /**
     * The minimum length of a PIN for locking this token.
     * @field 
     */
    minPinLen: number
    /**
     * The total amount of memory on this token for storing public objects.
     * @field 
     */
    totalPublicMemory: number
    /**
     * The available amount of memory on this token for storing public objects.
     * @field 
     */
    freePublicMemory: number
    /**
     * The total amount of memory on this token for storing private objects.
     * @field 
     */
    totalPrivateMemory: number
    /**
     * The available amount of memory on this token for storing private objects.
     * @field 
     */
    freePrivateMemory: number
    /**
     * The major version of the hardware.
     * @field 
     */
    hardwareVersionMajor: number
    /**
     * The minor version of the hardware.
     * @field 
     */
    hardwareVersionMinor: number
    /**
     * The major version of the firmware.
     * @field 
     */
    firmwareVersionMajor: number
    /**
     * The minor version of the firmware.
     * @field 
     */
    firmwareVersionMinor: number
    /**
     * If the token has a hardware clock, this is set to the number of seconds since the epoch.
     * @field 
     */
    utcTime: number

    // Owm methods of Gck-1.Gck.TokenInfo

    /**
     * Make a copy of the token info.
     */
    copy(): TokenInfo
    /**
     * Free the GckTokenInfo and associated resources.
     */
    free(): void
}

/**
 * Represents information about a PKCS11 token.
 * 
 * This is analogous to a CK_TOKEN_INFO structure, but the
 * strings are far more usable.
 * 
 * When you're done with this structure it should be released with
 * gck_token_info_free().
 * @record 
 */
export class TokenInfo {

    // Own properties of Gck-1.Gck.TokenInfo

    static name: string
}

export interface UriData {

    // Own fields of Gck-1.Gck.UriData

    /**
     * whether any parts of the PKCS#11 URI were unsupported or unrecognized.
     * @field 
     */
    anyUnrecognized: boolean
    /**
     * information about the PKCS#11 modules matching the URI.
     * @field 
     */
    moduleInfo: ModuleInfo
    /**
     * information about the PKCS#11 tokens matching the URI.
     * @field 
     */
    tokenInfo: TokenInfo
    /**
     * information about the PKCS#11 objects matching the URI.
     * @field 
     */
    attributes: Attributes

    // Owm methods of Gck-1.Gck.UriData

    /**
     * Copy a #GckUriData
     */
    copy(): UriData
    /**
     * Free a #GckUriData.
     */
    free(): void
}

/**
 * Information about the contents of a PKCS#11 URI. Various fields may be %NULL
 * depending on the context that the URI was parsed for.
 * 
 * Since PKCS#11 URIs represent a set which results from the intersections of
 * all of the URI parts, if `any_recognized` is set to %TRUE then usually the URI
 * should be treated as not matching anything.
 * @record 
 */
export class UriData {

    // Own properties of Gck-1.Gck.UriData

    static name: string

    // Constructors of Gck-1.Gck.UriData

    /**
     * Allocate a new GckUriData structure. None of the fields
     * will be set.
     * @constructor 
     */
    constructor() 
    /**
     * Allocate a new GckUriData structure. None of the fields
     * will be set.
     * @constructor 
     */
    static new(): UriData
}
