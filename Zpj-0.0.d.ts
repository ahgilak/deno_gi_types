
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Zpj-0.0
 */

import type * as Soup from './Soup-2.4.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Rest from './Rest-0.7.js';
import type * as Json from './Json-1.0.js';

/**
 * This enumeration can be expanded at a later date.
 */
export enum Error {
    /**
     * The server received an invalid URL,
     *   possibly because of an invalid `file_id`.
     */
    REQUEST_URL_INVALID,
    /**
     * An unknown error occurred.
     */
    UNKNOWN,
}
/**
 * The types of Skydrive
 * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh243648">
 * objects</ulink>.
 * 
 * This enumeration can be expanded at a later date.
 */
export enum SkydriveEntryType {
    /**
     * A file.
     */
    FILE,
    /**
     * A folder.
     */
    FOLDER,
    /**
     * A photo.
     */
    PHOTO,
    /**
     * A video.
     */
    VIDEO,
    /**
     * Invalid or unknown object.
     */
    INVALID,
}
/**
 * Different
 * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826522.aspx#reading_photos_videos_props">
 * thumbnail sizes</ulink> offered by SkyDrive.
 * 
 * This enumeration can be expanded at a later date.
 */
export enum ThumbnailSize {
    /**
     * Smallest possible size.
     */
    SMALL,
    /**
     * The default.
     */
    NORMAL,
}
/**
 * <ulink
 * url="http://msdn.microsoft.com/en-us/library/live/hh826545#friendly">
 * Friendly name</ulink> for the Documents folder. It can be used as
 * the #ZpjSkydriveEntry:id and #ZpjSkydriveEntry:parent_id.
 */
export const SKYDRIVE_FOLDER_MY_DOCUMENTS: string
/**
 * <ulink
 * url="http://msdn.microsoft.com/en-us/library/live/hh826545#friendly">
 * Friendly name</ulink> for the Pictures folder. It can be used as the
 * #ZpjSkydriveEntry:id and #ZpjSkydriveEntry:parent_id.
 */
export const SKYDRIVE_FOLDER_MY_PHOTOS: string
/**
 * <ulink
 * url="http://msdn.microsoft.com/en-us/library/live/hh826545#friendly">
 * Friendly name</ulink> for the Public folder. It can be used as the
 * #ZpjSkydriveEntry:id and #ZpjSkydriveEntry:parent_id.
 */
export const SKYDRIVE_FOLDER_PUBLIC_DOCUMENTS: string
/**
 * <ulink
 * url="http://msdn.microsoft.com/en-us/library/live/hh826545#friendly">
 * Friendly name</ulink> for the Skydrive top-level folder. It can be
 * used as the #ZpjSkydriveEntry:id and #ZpjSkydriveEntry:parent_id.
 */
export const SKYDRIVE_FOLDER_SKYDRIVE: string
export function errorQuark(): GLib.Quark
export module Authorizer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Authorizer {

    // Owm methods of Zpj-0.0.Zpj.Authorizer

    // Has conflict: isAuthorizedForDomain(domain: AuthorizationDomain): boolean
    // Has conflict: processCall(domain: AuthorizationDomain | null, call: Rest.ProxyCall): void
    // Has conflict: processMessage(domain: AuthorizationDomain | null, message: Soup.Message): void
    // Has conflict: refreshAuthorization(cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously forces `iface` to refresh any authorization tokens
     * held by it. See zpj_authorizer_refresh_authorization() for the
     * synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call zpj_authorizer_refresh_authorization_finish() to get the
     * result of the operation.
     * 
     * This method is thread safe.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @param callback A #GAsyncReadyCallback to call when the   request is satisfied.
     */
    refreshAuthorizationAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous operation started with
     * zpj_authorizer_refresh_authorization_async().
     * @param res A #GAsyncResult.
     */
    refreshAuthorizationFinish(res: Gio.AsyncResult): boolean

    // Own virtual methods of Zpj-0.0.Zpj.Authorizer

    /**
     * Whether the authorization tokens held by `iface` are valid for
     * `domain`.
     * 
     * This method is thread safe.
     * @virtual 
     * @param domain A #ZpjAuthorizationDomain.
     */
    isAuthorizedForDomain(domain: AuthorizationDomain): boolean
    /**
     * Adds the necessary authorization to `call`.
     * 
     * This method modifies `call` in place and is thread safe.
     * @virtual 
     * @param domain An optional #ZpjAuthorizationDomain object,   or %NULL.
     * @param call A #RestProxyCall.
     */
    processCall(domain: AuthorizationDomain | null, call: Rest.ProxyCall): void
    /**
     * Adds the necessary authorization to `message`. The type of `message`
     * can be DELETE, GET and POST.
     * 
     * This method modifies `message` in place and is thread safe.
     * @virtual 
     * @param domain An optional #ZpjAuthorizationDomain object,   or %NULL.
     * @param message A #SoupMessage.
     */
    processMessage(domain: AuthorizationDomain | null, message: Soup.Message): void
    /**
     * Synchronously forces `iface` to refresh any authorization tokens
     * held by it. See zpj_authorizer_refresh_authorization_async() for the
     * asynchronous version of this call.
     * 
     * This method is thread safe.
     * @virtual 
     * @param cancellable An optional #GCancellable object, or   %NULL.
     */
    refreshAuthorization(cancellable: Gio.Cancellable | null): boolean

    // Class property signals of Zpj-0.0.Zpj.Authorizer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Authorizer extends GObject.Object {

    // Own properties of Zpj-0.0.Zpj.Authorizer

    static name: string

    // Constructors of Zpj-0.0.Zpj.Authorizer

    constructor(config?: Authorizer.ConstructorProperties) 
    _init(config?: Authorizer.ConstructorProperties): void
}

export module AuthorizationDomain {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Zpj-0.0.Zpj.AuthorizationDomain

        scope?: string | null
        serviceName?: string | null
    }

}

export interface AuthorizationDomain {

    // Own properties of Zpj-0.0.Zpj.AuthorizationDomain

    readonly scope: string
    readonly serviceName: string

    // Own fields of Zpj-0.0.Zpj.AuthorizationDomain

    parentInstance: GObject.Object
    priv: AuthorizationDomainPrivate

    // Owm methods of Zpj-0.0.Zpj.AuthorizationDomain

    getScope(): string
    getServiceName(): string

    // Class property signals of Zpj-0.0.Zpj.AuthorizationDomain

    connect(sigName: "notify::scope", callback: any): number
    on(sigName: "notify::scope", callback: any): number
    once(sigName: "notify::scope", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scope", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: any): number
    on(sigName: "notify::service-name", callback: any): number
    once(sigName: "notify::service-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class AuthorizationDomain extends GObject.Object {

    // Own properties of Zpj-0.0.Zpj.AuthorizationDomain

    static name: string

    // Constructors of Zpj-0.0.Zpj.AuthorizationDomain

    constructor(config?: AuthorizationDomain.ConstructorProperties) 
    _init(config?: AuthorizationDomain.ConstructorProperties): void
}

export module GoaAuthorizer {

    // Constructor properties interface

    export interface ConstructorProperties extends Authorizer.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface GoaAuthorizer extends Authorizer {

    // Own fields of Zpj-0.0.Zpj.GoaAuthorizer

    parentInstance: GObject.Object
    priv: GoaAuthorizerPrivate

    // Class property signals of Zpj-0.0.Zpj.GoaAuthorizer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #ZpjGoaAuthorizer structure contains only private data and
 * should only be accessed using the provided API.
 * @class 
 */
export class GoaAuthorizer extends GObject.Object {

    // Own properties of Zpj-0.0.Zpj.GoaAuthorizer

    static name: string

    // Constructors of Zpj-0.0.Zpj.GoaAuthorizer

    constructor(config?: GoaAuthorizer.ConstructorProperties) 
    _init(config?: GoaAuthorizer.ConstructorProperties): void
}

export module Skydrive {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Zpj-0.0.Zpj.Skydrive

        authorizer?: Authorizer | null
    }

}

export interface Skydrive {

    // Own properties of Zpj-0.0.Zpj.Skydrive

    authorizer: Authorizer

    // Own fields of Zpj-0.0.Zpj.Skydrive

    parentInstance: GObject.Object
    priv: SkydrivePrivate

    // Owm methods of Zpj-0.0.Zpj.Skydrive

    createFolder(folder: SkydriveFolder, cancellable: Gio.Cancellable | null): boolean
    createFolderFromName(name: string, parentId: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Synchronously deletes the entry corresponding to `entry_id` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>.
     * @param entryId The ID of the #ZpjSkydriveEntry to be deleted.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     */
    deleteEntryId(entryId: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Synchronously downloads the file corresponding to `file_id` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink> and saves it in `path`. The file is temporarily
     * saved in the preferred directory for temporary files (as returned
     * by g_get_tmp_dir()) while the download is going on, and then moved
     * to `path`.
     * @param fileId The ID of the #ZpjSkydriveFile to be downloaded.
     * @param path The destination.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     */
    downloadFileIdToPath(fileId: string, path: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Synchronously returns a stream for downloading the file
     * corresponding to `file_id` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>. See
     * zpj_skydrive_download_file_id_to_stream_async() for the asynchronous
     * version of this call.
     * @param fileId The ID of the #ZpjSkydriveFile to be downloaded.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     */
    downloadFileIdToStream(fileId: string, cancellable: Gio.Cancellable | null): Gio.InputStream
    /**
     * Asynchronously returns a stream for downloading the file
     * corresponding to `file_id` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>. See zpj_skydrive_download_file_id_to_stream() for
     * the synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call zpj_skydrive_download_file_id_to_stream_finish() to get
     * the result of the operation.
     * @param fileId The ID of the #ZpjSkydriveFile to be downloaded.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @param callback A #GAsyncReadyCallback to call when the   request is satisfied.
     */
    downloadFileIdToStreamAsync(fileId: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous operation started with
     * zpj_skydrive_download_file_id_to_stream_async().
     * @param res A #GAsyncResult.
     */
    downloadFileIdToStreamFinish(res: Gio.AsyncResult): Gio.InputStream
    /**
     * Synchronously downloads `file` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink> and saves it in `path`. The file is temporarily
     * saved in the preferred directory for temporary files (as returned
     * by g_get_tmp_dir()) while the download is going on, and then moved
     * to `path`.
     * @param file The #ZpjSkydriveFile to be downloaded.
     * @param path The destination.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     */
    downloadFileToPath(file: SkydriveFile, path: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Synchronously returns a stream for downloading `file` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>. See zpj_skydrive_download_file_to_stream_async()
     * for the asynchronous version of this call.
     * @param file The #ZpjSkydriveFile to be downloaded.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     */
    downloadFileToStream(file: SkydriveFile, cancellable: Gio.Cancellable | null): Gio.InputStream
    /**
     * Asynchronously returns a stream for downloading `file` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>. See zpj_skydrive_download_file_to_stream() for the
     * synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call zpj_skydrive_download_file_to_stream_finish() to get the
     * result of the operation.
     * @param file The #ZpjSkydriveFile to be downloaded.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @param callback A #GAsyncReadyCallback to call when the   request is satisfied.
     */
    downloadFileToStreamAsync(file: SkydriveFile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous operation started with
     * zpj_skydrive_download_file_to_stream_async().
     * @param res A #GAsyncResult.
     */
    downloadFileToStreamFinish(res: Gio.AsyncResult): Gio.InputStream
    /**
     * Gets the authorizer used to authorize requests to `self`.
     */
    getAuthorizer(): Authorizer
    /**
     * Synchronously lists the contents of `folder_id` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>.
     * @param folder The #ZpjSkydriveFolder to be listed.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     */
    listFolder(folder: SkydriveFolder, cancellable: Gio.Cancellable | null): SkydriveEntry[]
    /**
     * Synchronously lists the contents of the folder corresponding to
     * `folder_id` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>.
     * @param folderId The ID of the #ZpjSkydriveFolder to be listed.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     */
    listFolderId(folderId: string, cancellable: Gio.Cancellable | null): SkydriveEntry[]
    /**
     * Asynchronously lists the contents of the folder corresponding to
     * `folder_id` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>. See zpj_skydrive_list_folder_id() for the
     * synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call zpj_skydrive_list_folder_id_finish() to get the result
     * of the operation.
     * @param folderId The ID of the #ZpjSkydriveFolder to be listed.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @param callback A #GAsyncReadyCallback to call when the   request is satisfied.
     */
    listFolderIdAsync(folderId: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous operation started with
     * zpj_skydrive_list_folder_id_async().
     * @param res A #GAsyncResult.
     */
    listFolderIdFinish(res: Gio.AsyncResult): SkydriveEntry[]
    /**
     * Synchronously reads the properties of the entry corresponding to
     * `id` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>. See zpj_skydrive_query_info_from_id_async() for
     * the asynchronous version of this call.
     * @param id An ID to be queried.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     */
    queryInfoFromId(id: string, cancellable: Gio.Cancellable | null): SkydriveEntry
    /**
     * Asynchronously reads the properties of the entry corresponding to
     * `id` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>. See zpj_skydrive_query_info_from_id() for the
     * synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call zpj_skydrive_query_info_from_id_finish() to get the result
     * of the operation.
     * @param id The ID to be queried.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     * @param callback A #GAsyncReadyCallback to call when the   request is satisfied.
     */
    queryInfoFromIdAsync(id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous operation started with
     * zpj_skydrive_query_info_from_id_async().
     * @param res A #GAsyncResult.
     */
    queryInfoFromIdFinish(res: Gio.AsyncResult): SkydriveEntry
    /**
     * Uses the new `authorizer` to replace the old one that was used to
     * authorize requests to `self`.
     * @param authorizer A new #ZpjAuthorizer.
     */
    setAuthorizer(authorizer: Authorizer): void
    /**
     * Synchronously returns a stream for downloading the thumbnail of the
     * file corresponding to `file_id` from
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink>. See
     * zpj_skydrive_thumbnail_file_id_to_stream_async() for the
     * asynchronous version of this call.
     * 
     * Thumbnails are only available for #ZpjSkydrivePhoto and
     * #ZpjSkydriveVideo objects. If `file_id` refers to some other kind of
     * #ZpjSkydriveFile, the error %ZPJ_ERROR_REQUEST_URL_INVALID will be
     * returned.
     * @param fileId The ID of the #ZpjSkydriveFile to be thumbnailed.
     * @param size The thumbnail size.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     */
    thumbnailFileIdToStream(fileId: string, size: ThumbnailSize, cancellable: Gio.Cancellable | null): Gio.InputStream
    /**
     * Synchronously uploads the file at `path` to
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink> and places it under `folder`.
     * @param path The source.
     * @param folder The destination #ZpjSkydriveFolder.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     */
    uploadPathToFolder(path: string, folder: SkydriveFolder, cancellable: Gio.Cancellable | null): boolean
    /**
     * Synchronously uploads the file at `path` to
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh826521">
     * Skydrive</ulink> and places it under the folder corresponding to
     * `folder_id`.
     * @param path The source.
     * @param folderId The ID of the destination #ZpjSkydriveFolder.
     * @param cancellable An optional #GCancellable object, or   %NULL.
     */
    uploadPathToFolderId(path: string, folderId: string, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of Zpj-0.0.Zpj.Skydrive

    connect(sigName: "notify::authorizer", callback: any): number
    on(sigName: "notify::authorizer", callback: any): number
    once(sigName: "notify::authorizer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::authorizer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #ZpjSkydrive structure contains only private data and should
 * only be accessed using the provided API.
 * @class 
 */
export class Skydrive extends GObject.Object {

    // Own properties of Zpj-0.0.Zpj.Skydrive

    static name: string

    // Constructors of Zpj-0.0.Zpj.Skydrive

    constructor(config?: Skydrive.ConstructorProperties) 
    /**
     * Creates a new #ZpjSkydrive using the given `authorizer`.
     * @constructor 
     * @param authorizer A #ZpjAuthorizer to authorize the service's requests.
     */
    constructor(authorizer: Authorizer) 
    /**
     * Creates a new #ZpjSkydrive using the given `authorizer`.
     * @constructor 
     * @param authorizer A #ZpjAuthorizer to authorize the service's requests.
     */
    static new(authorizer: Authorizer): Skydrive
    _init(config?: Skydrive.ConstructorProperties): void
}

export module SkydriveEntry {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Zpj-0.0.Zpj.SkydriveEntry

        json?: Json.Node | null
    }

}

export interface SkydriveEntry {

    // Own properties of Zpj-0.0.Zpj.SkydriveEntry

    readonly createdTime: GLib.DateTime
    readonly description: string
    readonly fromId: string
    readonly fromName: string
    readonly id: string
    readonly json: Json.Node
    readonly name: string
    readonly parentId: string
    readonly type: SkydriveEntryType
    readonly updatedTime: GLib.DateTime

    // Own fields of Zpj-0.0.Zpj.SkydriveEntry

    parentInstance: GObject.Object
    priv: SkydriveEntryPrivate

    // Owm methods of Zpj-0.0.Zpj.SkydriveEntry

    /**
     * Gets the time at which `self` was created. This is the value of the
     * <ulink url="http://msdn.microsoft.com/en-us/library/live/hh243648">
     * updated_time</ulink> member in the JSON returned by the server.
     */
    getCreatedTime(): GLib.DateTime
    /**
     * Gets the description of `self`. This is the value of the <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
     * description</ulink> member in the JSON returned by the server.
     */
    getDescription(): string
    /**
     * Gets the ID of the user who created or uploaded `self`. This is part
     * of the <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
     * from</ulink> object in the JSON returned by the server.
     */
    getFromId(): string
    /**
     * Gets the name of the user who created or uploaded `self`. This is
     * part of the <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
     * from</ulink> object in the JSON returned by the server.
     */
    getFromName(): string
    /**
     * Gets the ID of `self`. This is the value of the <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
     * id</ulink> member in the JSON returned by the server.
     */
    getId(): string
    /**
     * Gets the name of `self`. This is the value of the <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
     * name</ulink> member in the JSON returned by the server.
     */
    getName(): string
    /**
     * Gets the ID of the folder containing `self`. This is the value of
     * the <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
     * parent_id</ulink> member in the JSON returned by the server.
     */
    getParentId(): string
    /**
     * Gets the time at which `self` was last updated. This is the value of
     * the <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh243648">
     * updated_time</ulink> member in the JSON returned by the server.
     */
    getUpdatedTime(): GLib.DateTime
    /**
     * Whether `self` is a folder.
     */
    isFolder(): boolean

    // Own virtual methods of Zpj-0.0.Zpj.SkydriveEntry

    parseJsonNode(node: Json.Node): void

    // Class property signals of Zpj-0.0.Zpj.SkydriveEntry

    connect(sigName: "notify::created-time", callback: any): number
    on(sigName: "notify::created-time", callback: any): number
    once(sigName: "notify::created-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::from-id", callback: any): number
    on(sigName: "notify::from-id", callback: any): number
    once(sigName: "notify::from-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::from-id", ...args: any[]): void
    connect(sigName: "notify::from-name", callback: any): number
    on(sigName: "notify::from-name", callback: any): number
    once(sigName: "notify::from-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::from-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::json", callback: any): number
    on(sigName: "notify::json", callback: any): number
    once(sigName: "notify::json", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::json", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parent-id", callback: any): number
    on(sigName: "notify::parent-id", callback: any): number
    once(sigName: "notify::parent-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-id", ...args: any[]): void
    connect(sigName: "notify::type", callback: any): number
    on(sigName: "notify::type", callback: any): number
    once(sigName: "notify::type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type", ...args: any[]): void
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

/**
 * The #ZpjSkydriveEntry structure contains only private data and
 * should only be accessed using the provided API.
 * @class 
 */
export class SkydriveEntry extends GObject.Object {

    // Own properties of Zpj-0.0.Zpj.SkydriveEntry

    static name: string

    // Constructors of Zpj-0.0.Zpj.SkydriveEntry

    constructor(config?: SkydriveEntry.ConstructorProperties) 
    _init(config?: SkydriveEntry.ConstructorProperties): void
}

export module SkydriveFile {

    // Constructor properties interface

    export interface ConstructorProperties extends SkydriveEntry.ConstructorProperties {
    }

}

export interface SkydriveFile {

    // Own properties of Zpj-0.0.Zpj.SkydriveFile

    readonly size: number

    // Own fields of Zpj-0.0.Zpj.SkydriveFile

    parentInstance: any
    priv: any

    // Owm methods of Zpj-0.0.Zpj.SkydriveFile

    /**
     * Gets the size of `self` in bytes. This is the value of the <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh243648#file">
     * size</ulink> member in the JSON returned by the server.
     */
    getSize(): number

    // Class property signals of Zpj-0.0.Zpj.SkydriveFile

    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::created-time", callback: any): number
    on(sigName: "notify::created-time", callback: any): number
    once(sigName: "notify::created-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::from-id", callback: any): number
    on(sigName: "notify::from-id", callback: any): number
    once(sigName: "notify::from-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::from-id", ...args: any[]): void
    connect(sigName: "notify::from-name", callback: any): number
    on(sigName: "notify::from-name", callback: any): number
    once(sigName: "notify::from-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::from-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::json", callback: any): number
    on(sigName: "notify::json", callback: any): number
    once(sigName: "notify::json", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::json", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parent-id", callback: any): number
    on(sigName: "notify::parent-id", callback: any): number
    once(sigName: "notify::parent-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-id", ...args: any[]): void
    connect(sigName: "notify::type", callback: any): number
    on(sigName: "notify::type", callback: any): number
    once(sigName: "notify::type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type", ...args: any[]): void
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

/**
 * The #ZpjSkydriveFile structure contains only private data and should
 * only be accessed using the provided API.
 * @class 
 */
export class SkydriveFile extends SkydriveEntry {

    // Own properties of Zpj-0.0.Zpj.SkydriveFile

    static name: string

    // Constructors of Zpj-0.0.Zpj.SkydriveFile

    constructor(config?: SkydriveFile.ConstructorProperties) 
    /**
     * Creates a new #ZpjSkydriveFile from the given `node`. If you already
     * know the ID of the file then you can use
     * zpj_skydrive_query_info_from_id().
     * @constructor 
     * @param node A #JsonNode returned by the server.
     */
    constructor(node: Json.Node) 
    /**
     * Creates a new #ZpjSkydriveFile from the given `node`. If you already
     * know the ID of the file then you can use
     * zpj_skydrive_query_info_from_id().
     * @constructor 
     * @param node A #JsonNode returned by the server.
     */
    static new(node: Json.Node): SkydriveFile
    _init(config?: SkydriveFile.ConstructorProperties): void
}

export module SkydriveFolder {

    // Constructor properties interface

    export interface ConstructorProperties extends SkydriveEntry.ConstructorProperties {
    }

}

export interface SkydriveFolder {

    // Own fields of Zpj-0.0.Zpj.SkydriveFolder

    parentInstance: any

    // Class property signals of Zpj-0.0.Zpj.SkydriveFolder

    connect(sigName: "notify::created-time", callback: any): number
    on(sigName: "notify::created-time", callback: any): number
    once(sigName: "notify::created-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::from-id", callback: any): number
    on(sigName: "notify::from-id", callback: any): number
    once(sigName: "notify::from-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::from-id", ...args: any[]): void
    connect(sigName: "notify::from-name", callback: any): number
    on(sigName: "notify::from-name", callback: any): number
    once(sigName: "notify::from-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::from-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::json", callback: any): number
    on(sigName: "notify::json", callback: any): number
    once(sigName: "notify::json", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::json", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parent-id", callback: any): number
    on(sigName: "notify::parent-id", callback: any): number
    once(sigName: "notify::parent-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-id", ...args: any[]): void
    connect(sigName: "notify::type", callback: any): number
    on(sigName: "notify::type", callback: any): number
    once(sigName: "notify::type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type", ...args: any[]): void
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

/**
 * The #ZpjSkydriveFolder structure contains only private data and
 * should only be accessed using the provided API.
 * @class 
 */
export class SkydriveFolder extends SkydriveEntry {

    // Own properties of Zpj-0.0.Zpj.SkydriveFolder

    static name: string

    // Constructors of Zpj-0.0.Zpj.SkydriveFolder

    constructor(config?: SkydriveFolder.ConstructorProperties) 
    /**
     * Creates a new #ZpjSkydriveFolder from the given `node`. If you
     * already know the ID of the folder then you can use
     * zpj_skydrive_query_info_from_id().
     * @constructor 
     * @param node A #JsonNode returned by the server.
     */
    constructor(node: Json.Node) 
    /**
     * Creates a new #ZpjSkydriveFolder from the given `node`. If you
     * already know the ID of the folder then you can use
     * zpj_skydrive_query_info_from_id().
     * @constructor 
     * @param node A #JsonNode returned by the server.
     */
    static new(node: Json.Node): SkydriveFolder
    _init(config?: SkydriveFolder.ConstructorProperties): void
}

export module SkydrivePhoto {

    // Constructor properties interface

    export interface ConstructorProperties extends SkydriveFile.ConstructorProperties {
    }

}

export interface SkydrivePhoto {

    // Conflicting properties

    priv: any & SkydriveEntryPrivate

    // Own fields of Zpj-0.0.Zpj.SkydrivePhoto

    parentInstance: any

    // Class property signals of Zpj-0.0.Zpj.SkydrivePhoto

    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::created-time", callback: any): number
    on(sigName: "notify::created-time", callback: any): number
    once(sigName: "notify::created-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::from-id", callback: any): number
    on(sigName: "notify::from-id", callback: any): number
    once(sigName: "notify::from-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::from-id", ...args: any[]): void
    connect(sigName: "notify::from-name", callback: any): number
    on(sigName: "notify::from-name", callback: any): number
    once(sigName: "notify::from-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::from-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::json", callback: any): number
    on(sigName: "notify::json", callback: any): number
    once(sigName: "notify::json", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::json", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parent-id", callback: any): number
    on(sigName: "notify::parent-id", callback: any): number
    once(sigName: "notify::parent-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-id", ...args: any[]): void
    connect(sigName: "notify::type", callback: any): number
    on(sigName: "notify::type", callback: any): number
    once(sigName: "notify::type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type", ...args: any[]): void
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

/**
 * The #ZpjSkydrivePhoto structure contains only private data and
 * should only be accessed using the provided API.
 * @class 
 */
export class SkydrivePhoto extends SkydriveFile {

    // Own properties of Zpj-0.0.Zpj.SkydrivePhoto

    static name: string

    // Constructors of Zpj-0.0.Zpj.SkydrivePhoto

    constructor(config?: SkydrivePhoto.ConstructorProperties) 
    /**
     * Creates a new #ZpjSkydrivePhoto from the given `node`. If you already
     * know the ID of the photo then you can use
     * zpj_skydrive_query_info_from_id().
     * @constructor 
     * @param node A #JsonNode returned by the server.
     */
    constructor(node: Json.Node) 
    /**
     * Creates a new #ZpjSkydrivePhoto from the given `node`. If you already
     * know the ID of the photo then you can use
     * zpj_skydrive_query_info_from_id().
     * @constructor 
     * @param node A #JsonNode returned by the server.
     */
    static new(node: Json.Node): SkydrivePhoto
    _init(config?: SkydrivePhoto.ConstructorProperties): void
}

export module SkydriveVideo {

    // Constructor properties interface

    export interface ConstructorProperties extends SkydriveFile.ConstructorProperties {
    }

}

export interface SkydriveVideo {

    // Own properties of Zpj-0.0.Zpj.SkydriveVideo

    readonly bitrate: number
    readonly duration: number
    readonly height: number
    readonly width: number

    // Own fields of Zpj-0.0.Zpj.SkydriveVideo

    parentInstance: any
    priv: any

    // Owm methods of Zpj-0.0.Zpj.SkydriveVideo

    /**
     * Gets the bit rate of `self` in bits per second. This is the value of
     * the <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh243648#video">
     * bitrate</ulink> member in the JSON returned by the server.
     */
    getBitrate(): number
    /**
     * Gets the run time duration of `self` in milliseconds. This is the
     * value of the <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh243648#video">
     * duration</ulink> member in the JSON returned by the server.
     */
    getDuration(): number
    /**
     * Gets the height of `self` in pixels. This is the value of the <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh243648#video">
     * height</ulink> member in the JSON returned by the server.
     */
    getHeight(): number
    /**
     * Gets the width of `self` in pixels. This is the value of the <ulink
     * url="http://msdn.microsoft.com/en-us/library/live/hh243648#video">
     * width</ulink> member in the JSON returned by the server.
     */
    getWidth(): number

    // Class property signals of Zpj-0.0.Zpj.SkydriveVideo

    connect(sigName: "notify::bitrate", callback: any): number
    on(sigName: "notify::bitrate", callback: any): number
    once(sigName: "notify::bitrate", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bitrate", ...args: any[]): void
    connect(sigName: "notify::duration", callback: any): number
    on(sigName: "notify::duration", callback: any): number
    once(sigName: "notify::duration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::height", callback: any): number
    on(sigName: "notify::height", callback: any): number
    once(sigName: "notify::height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::width", callback: any): number
    on(sigName: "notify::width", callback: any): number
    once(sigName: "notify::width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::created-time", callback: any): number
    on(sigName: "notify::created-time", callback: any): number
    once(sigName: "notify::created-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::created-time", ...args: any[]): void
    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::from-id", callback: any): number
    on(sigName: "notify::from-id", callback: any): number
    once(sigName: "notify::from-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::from-id", ...args: any[]): void
    connect(sigName: "notify::from-name", callback: any): number
    on(sigName: "notify::from-name", callback: any): number
    once(sigName: "notify::from-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::from-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::json", callback: any): number
    on(sigName: "notify::json", callback: any): number
    once(sigName: "notify::json", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::json", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parent-id", callback: any): number
    on(sigName: "notify::parent-id", callback: any): number
    once(sigName: "notify::parent-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-id", ...args: any[]): void
    connect(sigName: "notify::type", callback: any): number
    on(sigName: "notify::type", callback: any): number
    once(sigName: "notify::type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type", ...args: any[]): void
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

/**
 * The #ZpjSkydriveVideo structure contains only private data and
 * should only be accessed using the provided API.
 * @class 
 */
export class SkydriveVideo extends SkydriveFile {

    // Own properties of Zpj-0.0.Zpj.SkydriveVideo

    static name: string

    // Constructors of Zpj-0.0.Zpj.SkydriveVideo

    constructor(config?: SkydriveVideo.ConstructorProperties) 
    /**
     * Creates a new #ZpjSkydriveVideo from the given `node`. If you already
     * know the ID of the video then you can use
     * zpj_skydrive_query_info_from_id().
     * @constructor 
     * @param node A #JsonNode returned by the server.
     */
    constructor(node: Json.Node) 
    /**
     * Creates a new #ZpjSkydriveVideo from the given `node`. If you already
     * know the ID of the video then you can use
     * zpj_skydrive_query_info_from_id().
     * @constructor 
     * @param node A #JsonNode returned by the server.
     */
    static new(node: Json.Node): SkydriveVideo
    _init(config?: SkydriveVideo.ConstructorProperties): void
}

export interface AuthorizationDomainClass {

    // Own fields of Zpj-0.0.Zpj.AuthorizationDomainClass

    parentClass: GObject.ObjectClass
}

export abstract class AuthorizationDomainClass {

    // Own properties of Zpj-0.0.Zpj.AuthorizationDomainClass

    static name: string
}

export interface AuthorizationDomainPrivate {
}

export class AuthorizationDomainPrivate {

    // Own properties of Zpj-0.0.Zpj.AuthorizationDomainPrivate

    static name: string
}

export interface AuthorizerInterface {

    // Own fields of Zpj-0.0.Zpj.AuthorizerInterface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
    isAuthorizedForDomain: (iface: Authorizer, domain: AuthorizationDomain) => boolean
    processCall: (iface: Authorizer, domain: AuthorizationDomain | null, call: Rest.ProxyCall) => void
    processMessage: (iface: Authorizer, domain: AuthorizationDomain | null, message: Soup.Message) => void
    refreshAuthorization: (iface: Authorizer, cancellable: Gio.Cancellable | null) => boolean
}

/**
 * Interface structure for #ZpjAuthorizer. All methods should be
 * thread safe.
 * @record 
 */
export abstract class AuthorizerInterface {

    // Own properties of Zpj-0.0.Zpj.AuthorizerInterface

    static name: string
}

export interface GoaAuthorizerClass {

    // Own fields of Zpj-0.0.Zpj.GoaAuthorizerClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
}

/**
 * Class structure for #ZpjGoaAuthorizer.
 * @record 
 */
export abstract class GoaAuthorizerClass {

    // Own properties of Zpj-0.0.Zpj.GoaAuthorizerClass

    static name: string
}

export interface GoaAuthorizerPrivate {
}

export class GoaAuthorizerPrivate {

    // Own properties of Zpj-0.0.Zpj.GoaAuthorizerPrivate

    static name: string
}

export interface SkydriveClass {

    // Own fields of Zpj-0.0.Zpj.SkydriveClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
}

/**
 * Class structure for #ZpjSkydrive.
 * @record 
 */
export abstract class SkydriveClass {

    // Own properties of Zpj-0.0.Zpj.SkydriveClass

    static name: string
}

export interface SkydriveEntryClass {

    // Own fields of Zpj-0.0.Zpj.SkydriveEntryClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
    parseJsonNode: (self: SkydriveEntry, node: Json.Node) => void
}

/**
 * Class structure for #ZpjSkydriveEntry.
 * @record 
 */
export abstract class SkydriveEntryClass {

    // Own properties of Zpj-0.0.Zpj.SkydriveEntryClass

    static name: string
}

export interface SkydriveEntryPrivate {
}

export class SkydriveEntryPrivate {

    // Own properties of Zpj-0.0.Zpj.SkydriveEntryPrivate

    static name: string
}

export interface SkydriveFileClass {

    // Own fields of Zpj-0.0.Zpj.SkydriveFileClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: SkydriveEntryClass
}

/**
 * Class structure for #ZpjSkydriveFile.
 * @record 
 */
export abstract class SkydriveFileClass {

    // Own properties of Zpj-0.0.Zpj.SkydriveFileClass

    static name: string
}

export interface SkydriveFilePrivate {
}

export class SkydriveFilePrivate {

    // Own properties of Zpj-0.0.Zpj.SkydriveFilePrivate

    static name: string
}

export interface SkydriveFolderClass {

    // Own fields of Zpj-0.0.Zpj.SkydriveFolderClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: SkydriveEntryClass
}

/**
 * Class structure for #ZpjSkydriveFolder.
 * @record 
 */
export abstract class SkydriveFolderClass {

    // Own properties of Zpj-0.0.Zpj.SkydriveFolderClass

    static name: string
}

export interface SkydrivePhotoClass {

    // Own fields of Zpj-0.0.Zpj.SkydrivePhotoClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: SkydriveFileClass
}

/**
 * Class structure for #ZpjSkydrivePhoto.
 * @record 
 */
export abstract class SkydrivePhotoClass {

    // Own properties of Zpj-0.0.Zpj.SkydrivePhotoClass

    static name: string
}

export interface SkydrivePrivate {
}

export class SkydrivePrivate {

    // Own properties of Zpj-0.0.Zpj.SkydrivePrivate

    static name: string
}

export interface SkydriveVideoClass {

    // Own fields of Zpj-0.0.Zpj.SkydriveVideoClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: SkydriveFileClass
}

/**
 * Class structure for #ZpjSkydriveVideo.
 * @record 
 */
export abstract class SkydriveVideoClass {

    // Own properties of Zpj-0.0.Zpj.SkydriveVideoClass

    static name: string
}

export interface SkydriveVideoPrivate {
}

export class SkydriveVideoPrivate {

    // Own properties of Zpj-0.0.Zpj.SkydriveVideoPrivate

    static name: string
}
