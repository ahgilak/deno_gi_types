
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * MediaArt-1.0
 */

import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

/**
 * Enumeration values used in errors returned by the
 * #MediaArtError API.
 */
export enum Error {
    /**
     * Storage information is unknown, we
     * have no knowledge about removable media.
     */
    NO_STORAGE,
    /**
     * Title is required, but was not provided,
     * or was empty.
     */
    NO_TITLE,
    /**
     * A call to symlink() failed
     * resulting in the incorrect storage of media art.
     */
    SYMLINK_FAILED,
    /**
     * File could not be renamed.
     */
    RENAME_FAILED,
}
/**
 * This type categorized the type of media art we're dealing with.
 */
export enum Type {
    /**
     * No media art is available
     */
    NONE,
    /**
     * Media art is an album
     */
    ALBUM,
    /**
     * Media art is a movie or video
     */
    VIDEO,
}
/**
 * This type categorized the flags used when processing media art.
 * @bitfield 
 */
export enum ProcessFlags {
    /**
     * Normal operation.
     */
    NONE,
    /**
     * Force media art to be re-saved to disk even if it already exists and the related file or URI has the same modified time (mtime).
     */
    FORCE,
}
/**
 * This function performs the same operation as
 * media_art_file_to_jpeg() with the exception that a raw `buffer` can
 * be used instead providing `len` and the `buffer_mime` too.
 * @param buffer Raw buffer representing content to save
 * @param len Length of `buffer` to use
 * @param bufferMime MIME type for `buffer`
 * @param target Output file name (not URI) to save converted content to
 */
export function bufferToJpeg(buffer: number, len: number, bufferMime: string, target: string): boolean
export function errorQuark(): GLib.Quark
/**
 * Save `filename` to `target` as JPEG format. The `filename` may not be
 * a JPEG in the first place.
 * @param filename Original file name (not URI) to convert
 * @param target Output file name (not URI) to save converted content to
 */
export function fileToJpeg(filename: string, target: string): boolean
/**
 * Gets the files pointing to cache files suitable for storing the media
 * art provided by the `artist,` `title` and `file` arguments. `cache_file`
 * will point to a location in the XDG user cache directory, meanwhile
 * `local_file` will point to a cache file that resides in the same
 * filesystem than `file`.
 * 
 * The `file` provided is required if `local_file` is to be returned.
 * The `local_file` relates to a location on the media the local file
 * system or media storage it is found on, so for example, if you have
 * a mounted volume with MP3s on it in
 * <filename>file:///media/martyn/pendrive</filename>, the `local_file`
 * will point to a URI that looks like
 * <filename>file:///media/martyn/pendrive/.mediaartlocal/...</filename>.
 * 
 * The `cache_file` is very different to the `local_file,` the
 * `cache_file` relates to a symlink stored in XDG cache directories
 * for the user. A `cache_file` would be expected to look like
 * <filename>file:///home/martyn/.cache/media-art/...</filename>. This
 * is normally the location that is most useful (assuming the cache
 * has been extracted in the first place).
 * 
 * When done, both #GFile<!-- -->s must be freed with g_object_unref() if
 * non-%NULL.
 * @param artist the artist
 * @param title the title
 * @param prefix the prefix for cache files, for example "album"
 * @param file a #GFile representing the actual media art or %NULL
 */
export function getFile(artist: string | null, title: string | null, prefix: string | null, file: Gio.File | null): [ /* returnType */ boolean, /* cacheFile */ Gio.File, /* localFile */ Gio.File ]
/**
 * This function calls media_art_get_file() by creating a #GFile for
 * `uri` and passing the same arguments to media_art_get_file(). For more
 * details about what this function does, see media_art_get_file().
 * 
 * Get the path to media art for a given resource. Newly allocated
 * data returned in `cache_path` and `local_uri` must be freed with g_free().
 * @param artist the artist
 * @param title the title
 * @param prefix the prefix, for example "album"
 * @param uri the uri of the file or %NULL
 */
export function getPath(artist: string | null, title: string | null, prefix: string | null, uri: string | null): [ /* returnType */ boolean, /* cachePath */ string, /* localUri */ string ]
/**
 * This function facilitates a plugin&apos;s need to create any
 * internal caches before anything else is done. This function must
 * exist in each plugin and is called immediately after the plugin is
 * loaded. Conversely, media_art_plugin_shutdown() is called before
 * tear down of the plugin system or plugin itself.
 * @param maxWidth The maximum width that an image is allowed to be
 */
export function pluginInit(maxWidth: number): void
/**
 * This function facilitates a plugin&apos;s need to clean up any
 * internal caches. This function must exist in each plugin and is
 * called immediately after the plugin is loaded. Conversely,
 * media_art_plugin_init() is called after the plugin is loaded.
 */
export function pluginShutdown(): void
/**
 * Removes media art for given album/artist provided.
 * @param artist artist the media art belongs to
 * @param album album the media art belongs or %NULL
 */
export function remove(artist: string, album: string | null): boolean
/**
 * Strip a albumname or artistname string to prepare it for calculating the
 * media art path with it. Certain characters and charactersets will be stripped
 * and a newly allocated string returned which you must free with g_free().
 * 
 * This functions is used internally by media_art_get_file() and
 * media_art_get_path(). You will not normally need to call it yourself.
 * 
 * This function provides the following features:
 * 1. Invalid characters include: ()[]<>{}_!`#`$^&*+=|\/"'?~;
 * 2. Text inside brackets of (), {}, [] and <> pairs are removed.
 * 3. Multiples of space characters are removed.
 * @param original original string
 */
export function stripInvalidEntities(original: string): string
export module Process {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Process extends Gio.Initable {

    // Own fields of MediaArt-1.0.MediaArt.Process

    /**
     * parent object
     * @field 
     */
    parent: GObject.Object

    // Owm methods of MediaArt-1.0.MediaArt.Process

    /**
     * Processes a memory buffer represented by `buffer` and `len`. If you
     * have extracted any embedded media art and passed this in as
     * `buffer,` the image data will be converted to the correct format and
     * saved in the media art cache.
     * 
     * Either `artist` OR `title` can be %NULL, but they can not both be %NULL.
     * 
     * If `file` is on a removable filesystem, the media art file will be saved in a
     * cache on the removable file system rather than on the host machine.
     * @param type The type of media
     * @param flags The options given for how to process the media art
     * @param relatedFile File related to the media art
     * @param buffer a buffer containing `file` data, or %NULL
     * @param mime MIME type of `buffer,` or %NULL
     * @param artist The artist name `file` or %NULL
     * @param title The title for `file` or %NULL
     */
    buffer(type: Type, flags: ProcessFlags, relatedFile: Gio.File, buffer: Uint8Array | null, mime: string, artist: string | null, title: string | null): boolean
    /**
     * Process `file` and check if media art exists and if it is up to date
     * with `artist` and `title` provided. Either `artist` OR `title` can be
     * %NULL, but they can not both be %NULL.
     * 
     * NOTE: This function MAY retrieve media art for
     * `artist` and `title` combinations. It is not guaranteed and depends
     * on download services available over DBus at the time.
     * 
     * In cases where download is unavailable, media_art_process_file()
     * will only try to procure a cache for possible media art found in
     * directories surrounding the location of `file`. If a buffer or
     * memory chunk needs to be saved to disk which has been retrieved
     * from an MP3 (for example), you should use
     * media_art_process_buffer().
     * 
     * The modification time (mtime) of `file` is checked against the
     * cached stored for `artist` and `title`. If the cache is old or
     * doesn't exist, it will be updated. What this actually does is
     * update the mtime of the cache (a symlink) on the disk.
     * 
     * If there is no actual media art stored locally (for example, it's
     * stored in a directory on a removable device), it is copied locally
     * (usually to an XDG cache directory).
     * 
     * If `file` is on a removable filesystem, the media art file will be
     * saved in a cache on the removable file system rather than on the
     * host machine.
     * @param type The type of media
     * @param flags The options given for how to process the media art
     * @param file File to be processed
     * @param artist The artist name `file` or %NULL
     * @param title The title for `file` or %NULL
     */
    file(type: Type, flags: ProcessFlags, file: Gio.File, artist: string | null, title: string | null): boolean
    /**
     * This function calls media_art_process_file(), but takes the `uri` as
     * a string rather than a #GFile object. Either `artist` OR `title` can be
     * %NULL, but they can not both be %NULL.
     * @param type The type of media that contained the image data
     * @param flags How the media art is processed
     * @param uri URI of the media file that contained the data
     * @param artist The artist name `uri` or %NULL
     * @param title The title for `uri` or %NULL
     */
    uri(type: Type, flags: ProcessFlags, uri: string, artist: string | null, title: string | null): boolean

    // Class property signals of MediaArt-1.0.MediaArt.Process

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A class implementation for processing and extracting media art.
 * @class 
 */
export class Process extends GObject.Object {

    // Own properties of MediaArt-1.0.MediaArt.Process

    static name: string

    // Constructors of MediaArt-1.0.MediaArt.Process

    constructor(config?: Process.ConstructorProperties) 
    /**
     * Initialize a GObject for processing and extracting media art.
     * 
     * This function initializes cache hash tables, backend plugins,
     * storage modules used for removable devices and a connection to D-Bus.
     * @constructor 
     */
    constructor() 
    /**
     * Initialize a GObject for processing and extracting media art.
     * 
     * This function initializes cache hash tables, backend plugins,
     * storage modules used for removable devices and a connection to D-Bus.
     * @constructor 
     */
    static new(): Process
    _init(config?: Process.ConstructorProperties): void
}

export interface ProcessClass {

    // Own fields of MediaArt-1.0.MediaArt.ProcessClass

    /**
     * parent object class
     * @field 
     */
    parent: GObject.ObjectClass
}

/**
 * Prototype for the class.
 * @record 
 */
export abstract class ProcessClass {

    // Own properties of MediaArt-1.0.MediaArt.ProcessClass

    static name: string
}
