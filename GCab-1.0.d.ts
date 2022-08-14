
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GCab-1.0
 */

import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

/**
 * Compression used by the #GCabFolder.
 */
export enum Compression {
    /**
     * No compression.
     */
    NONE,
    /**
     * MSZIP compression.
     */
    MSZIP,
    /**
     * QUANTUM compression (unsupported).
     */
    QUANTUM,
    /**
     * LZX compression (only decompression supported).
     */
    LZX,
    /**
     * compression value mask.
     */
    MASK,
}
/**
 * The various errors triggered by the GCab functions.
 */
export enum Error {
    /**
     * The given file is not of Cabinet format.
     */
    FORMAT,
    /**
     * General function failure.
     */
    FAILED,
    /**
     * Action or format is not supported
     */
    NOT_SUPPORTED,
    /**
     * Data stream was invalid
     */
    INVALID_DATA,
}
/**
 * Attributes associated with the #GCabFile.
 */
export enum FileAttribute {
    /**
     * file is read-only
     */
    RDONLY,
    /**
     * file is hidden
     */
    HIDDEN,
    /**
     * file is a system file
     */
    SYSTEM,
    /**
     * file modified since last backup
     */
    ARCH,
    /**
     * run after extraction
     */
    EXEC,
    /**
     * name contains UTF
     */
    NAME_IS_UTF,
}
export function errorQuark(): GLib.Quark
/**
 * The type used for callback called when processing Cabinet archive
 * files.
 * @callback 
 * @param file the file being processed
 */
export interface FileCallback {
    (file: File): boolean
}
export module Cabinet {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GCab-1.0.GCab.Cabinet

        reserved?: Uint8Array | null
        signature?: Uint8Array | null
    }

}

export interface Cabinet {

    // Own properties of GCab-1.0.GCab.Cabinet

    reserved: Uint8Array
    signature: Uint8Array

    // Owm methods of GCab-1.0.GCab.Cabinet

    /**
     * Add `folder` to `cabinet`.
     * @param folder a #GCabFolder
     */
    addFolder(folder: Folder): boolean
    /**
     * Extract files to given path.
     * 
     * If `path` is NULL then the files are decompressed to memory blobs stored on
     * each #GCabFile.
     * @param path the path to extract files
     * @param fileCallback an optional #GCabFile callback,     return %FALSE to filter out or skip files.
     * @param progressCallback a progress callback
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     */
    extract(path: Gio.File | null, fileCallback: FileCallback | null, progressCallback: Gio.FileProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Extract files to given path.
     * @param path the path to extract files
     * @param fileCallback an optional #GCabFile callback,     return %FALSE to filter out or skip files.
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     */
    extractSimple(path: Gio.File, fileCallback: FileCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Get the Cabinet folders within the `cabinet`.
     * Note that Cabinet folders are not like filesystem path, they are
     * group of files sharing some layout parameters.
     */
    getFolders(): Folder[]
    /**
     * Lookup the cabinet authenticode signature if any.
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     */
    getSignature(cancellable: Gio.Cancellable | null): Uint8Array
    /**
     * Get the size of the compressed cabinet file.
     */
    getSize(): number
    /**
     * Load a cabinet archive.
     * @param stream a #GInputStream
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     */
    load(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): boolean
    /**
     * Save `cabinet` to the output stream `out`. `out` must be a #GSeekable.
     * @param stream a #GOutputStream also #GSeekable
     * @param fileCallback report current file being saved
     * @param progressCallback report saving progress
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     */
    write(stream: Gio.OutputStream, fileCallback: FileCallback | null, progressCallback: Gio.FileProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Save `cabinet` to the output stream `out`. `out` must be a #GSeekable.
     * @param stream a #GOutputStream also #GSeekable
     * @param fileCallback report current file being saved
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     */
    writeSimple(stream: Gio.OutputStream, fileCallback: FileCallback | null, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of GCab-1.0.GCab.Cabinet

    connect(sigName: "notify::reserved", callback: any): number
    on(sigName: "notify::reserved", callback: any): number
    once(sigName: "notify::reserved", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reserved", ...args: any[]): void
    connect(sigName: "notify::signature", callback: any): number
    on(sigName: "notify::signature", callback: any): number
    once(sigName: "notify::signature", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::signature", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An opaque object holding a Cabinet file reference.
 * @class 
 */
export class Cabinet extends GObject.Object {

    // Own properties of GCab-1.0.GCab.Cabinet

    static name: string

    // Constructors of GCab-1.0.GCab.Cabinet

    constructor(config?: Cabinet.ConstructorProperties) 
    /**
     * Create a new #GCabCabinet object to read or create a Cabinet
     * archive.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GCabCabinet object to read or create a Cabinet
     * archive.
     * @constructor 
     */
    static new(): Cabinet
    _init(config?: Cabinet.ConstructorProperties): void
}

export module File {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GCab-1.0.GCab.File

        bytes?: any | null
        file?: Gio.File | null
        name?: string | null
    }

}

export interface File {

    // Own properties of GCab-1.0.GCab.File

    bytes: any
    file: Gio.File
    name: string

    // Owm methods of GCab-1.0.GCab.File

    /**
     * Get the file attributes.
     */
    getAttributes(): number
    /**
     * Get the #GFile associated with `file`. This will only be non-%NULL if the
     * #GCabFile has been created using gcab_file_new_with_bytes().
     */
    getBytes(): any
    /**
     * Get the file date, in `result`.
     * @param result a #GTimeVal to return date
     */
    getDate(result: GLib.TimeVal): boolean
    /**
     * Gets the file date and returns it as a #GDateTime..
     */
    getDateTime(): GLib.DateTime
    /**
     * Get the file name to use for extraction, or %NULL.
     */
    getExtractName(): string | null
    /**
     * If the cabinet is being created, get the #GFile associated with
     * `file`. This must be an exisiting file that can be read, in order to
     * be added to the archive during cabinet creation.
     * 
     * If `file` is from an existing cabinet, the fuction will return
     * %NULL.
     */
    getFile(): Gio.File
    /**
     * Get the file name within the cabinet.
     */
    getName(): string
    /**
     * Get the file size.
     */
    getSize(): number
    /**
     * Set the file attributes.
     * @param attr the attributes, e.g. %GCAB_FILE_ATTRIBUTE_RDONLY
     */
    setAttributes(attr: number): void
    /**
     * Replace the #GBytes associated with `self`.
     * This is most usefule when the #GCabFile has been created using
     * gcab_file_new_with_bytes() and the data needs to be modified.
     * @param bytes a #GBytes
     */
    setBytes(bytes: any): void
    /**
     * Sets the file modification date, instead of the value provided by the GFile.
     * @param tv a #GTimeVal
     */
    setDate(tv: GLib.TimeVal): void
    /**
     * Sets the file modification date (instead of the date provided by the GFile)
     * @param dt a #GDateTime
     */
    setDateTime(dt: GLib.DateTime): void
    /**
     * Sets the file name to use for extraction, instead of the name
     * provided by the Cabinet.
     * @param name a file name or %NULL
     */
    setExtractName(name: string | null): void

    // Class property signals of GCab-1.0.GCab.File

    connect(sigName: "notify::bytes", callback: any): number
    on(sigName: "notify::bytes", callback: any): number
    once(sigName: "notify::bytes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bytes", ...args: any[]): void
    connect(sigName: "notify::file", callback: any): number
    on(sigName: "notify::file", callback: any): number
    once(sigName: "notify::file", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file", ...args: any[]): void
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

/**
 * An opaque object, referencing a file in a Cabinet.
 * @class 
 */
export class File extends GObject.Object {

    // Own properties of GCab-1.0.GCab.File

    static name: string

    // Constructors of GCab-1.0.GCab.File

    constructor(config?: File.ConstructorProperties) 
    /**
     * Create a #GCabFile from a given #GBytes.
     * 
     * If this file is to be added to an archive you should also probably use
     * gcab_file_set_date() and gcab_file_set_attributes() to set sensible values.
     * @constructor 
     * @param name name of the file within the cabinet
     * @param bytes a #GBytes to be added to the cabinet
     */
    static newWithBytes(name: string, bytes: any): File
    /**
     * Create a #GCabFile from a given #GFile, to be added to a
     * #GCabCabinet for archive creation.
     * @constructor 
     * @param name name of the file within the cabinet
     * @param file a #GFile to be added to the cabinet
     */
    static newWithFile(name: string, file: Gio.File): File
    _init(config?: File.ConstructorProperties): void
}

export module Folder {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GCab-1.0.GCab.Folder

        comptype?: number | null
        reserved?: Uint8Array | null
    }

}

export interface Folder {

    // Own properties of GCab-1.0.GCab.Folder

    readonly compression: Compression
    readonly comptype: number
    reserved: Uint8Array

    // Owm methods of GCab-1.0.GCab.Folder

    /**
     * Add `file` to the #GCabFolder.
     * @param cabfile file to be added
     * @param recurse whether to recurse through subdirectories
     * @param cancellable optional #GCancellable object,     %NULL to ignore
     */
    addFile(cabfile: File, recurse: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Returns the compression used in this folder.
     */
    getComptype(): number
    /**
     * Gets a specific #GCabFile files contained in the `cabfolder`.
     * @param name a file name
     */
    getFileByName(name: string): File
    /**
     * Get the list of #GCabFile files contained in the `cabfolder`.
     */
    getFiles(): File[]
    /**
     * Get the number of files in this `folder`.
     */
    getNfiles(): number

    // Class property signals of GCab-1.0.GCab.Folder

    connect(sigName: "notify::compression", callback: any): number
    on(sigName: "notify::compression", callback: any): number
    once(sigName: "notify::compression", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::compression", ...args: any[]): void
    connect(sigName: "notify::comptype", callback: any): number
    on(sigName: "notify::comptype", callback: any): number
    once(sigName: "notify::comptype", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::comptype", ...args: any[]): void
    connect(sigName: "notify::reserved", callback: any): number
    on(sigName: "notify::reserved", callback: any): number
    once(sigName: "notify::reserved", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reserved", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An opaque object, referencing a folder in a Cabinet.
 * @class 
 */
export class Folder extends GObject.Object {

    // Own properties of GCab-1.0.GCab.Folder

    static name: string

    // Constructors of GCab-1.0.GCab.Folder

    constructor(config?: Folder.ConstructorProperties) 
    /**
     * Creates a new empty Cabinet folder. Use gcab_folder_add_file() to
     * add files to an archive.
     * 
     * A Cabinet folder is not a file path, it is a container for files.
     * @constructor 
     * @param comptype compression to used in this folder
     */
    constructor(comptype: number) 
    /**
     * Creates a new empty Cabinet folder. Use gcab_folder_add_file() to
     * add files to an archive.
     * 
     * A Cabinet folder is not a file path, it is a container for files.
     * @constructor 
     * @param comptype compression to used in this folder
     */
    static new(comptype: number): Folder
    _init(config?: Folder.ConstructorProperties): void
}

export interface CabinetClass {

    // Own fields of GCab-1.0.GCab.CabinetClass

    parentClass: GObject.ObjectClass
}

export abstract class CabinetClass {

    // Own properties of GCab-1.0.GCab.CabinetClass

    static name: string
}

export interface FileClass {

    // Own fields of GCab-1.0.GCab.FileClass

    parentClass: GObject.ObjectClass
}

export abstract class FileClass {

    // Own properties of GCab-1.0.GCab.FileClass

    static name: string
}

export interface FolderClass {

    // Own fields of GCab-1.0.GCab.FolderClass

    parentClass: GObject.ObjectClass
}

export abstract class FolderClass {

    // Own properties of GCab-1.0.GCab.FolderClass

    static name: string
}
