
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gxps-1.0
 */

import type * as cairo from './cairo-1.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

/**
 * Error codes returned by GXPS functions.
 */
export enum Error {
    /**
     * Internal source file not found in XPS file
     */
    SOURCE_NOT_FOUND,
    /**
     * Error loading fonts
     */
    FONT,
    /**
     * Error loading images
     */
    IMAGE,
}
/**
 * Error codes returned by #GXPSFile functions.
 */
export enum FileError {
    /**
     * The XPS is invalid.
     */
    FILE_ERROR_INVALID,
}
/**
 * Error codes returned by #GXPSPage functions
 */
export enum PageError {
    /**
     * The page is invalid.
     */
    INVALID,
    /**
     * Error rendering the page.
     */
    RENDER,
    /**
     * Anchor is invalid for the page.
     */
    INVALID_ANCHOR,
}
/**
 * The major version number of the GXPS header files (e.g. in GXPS version
 * 0.1.2 this is 0.)
 */
export const MAJOR_VERSION: number
/**
 * The micro version number of the GXPS header files (e.g. in GXPS version
 * 0.1.2 this is 2.)
 */
export const MICRO_VERSION: number
/**
 * The major version number of the GXPS header files (e.g. in GXPS version
 * 0.1.2 this is 1.)
 */
export const MINOR_VERSION: number
/**
 * The version number of the GXPS library as a string
 */
export const VERSION_STRING: string
export function errorQuark(): GLib.Quark
export module CoreProperties {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gxps-1.0.Gxps.CoreProperties

        source?: string | null
    }

}

export interface CoreProperties extends Gio.Initable {

    // Own properties of Gxps-1.0.Gxps.CoreProperties

    readonly source: string

    // Own fields of Gxps-1.0.Gxps.CoreProperties

    parent: GObject.Object

    // Owm methods of Gxps-1.0.Gxps.CoreProperties

    /**
     * Get the category.
     */
    getCategory(): string
    /**
     * Get the status of the content (e.g. Draft, Reviewed, Final)
     */
    getContentStatus(): string
    /**
     * Get the type of content represented, generally defined by a
     * specific use and intended audience. This is not the MIME-Type.
     */
    getContentType(): string
    /**
     * Get the creating date.
     */
    getCreated(): number
    /**
     * Get the creator.
     */
    getCreator(): string
    /**
     * Get the description.
     */
    getDescription(): string
    /**
     * Get the unique identifier.
     */
    getIdentifier(): string
    /**
     * Get the keywords.
     */
    getKeywords(): string
    /**
     * Get the language.
     */
    getLanguage(): string
    /**
     * Get the user who performed the last modification.
     */
    getLastModifiedBy(): string
    /**
     * Get the date of the last printing.
     */
    getLastPrinted(): number
    /**
     * Get the last modification date.
     */
    getModified(): number
    /**
     * Get the revision number.
     */
    getRevision(): string
    /**
     * Get the subject.
     */
    getSubject(): string
    /**
     * Get the title.
     */
    getTitle(): string
    /**
     * Get the version number.
     */
    getVersion(): string

    // Class property signals of Gxps-1.0.Gxps.CoreProperties

    connect(sigName: "notify::source", callback: any): number
    on(sigName: "notify::source", callback: any): number
    once(sigName: "notify::source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The <structname>GXPSCoreProperties</structname> struct contains
 * only private fields and should not be directly accessed.
 * @class 
 */
export class CoreProperties extends GObject.Object {

    // Own properties of Gxps-1.0.Gxps.CoreProperties

    static name: string

    // Constructors of Gxps-1.0.Gxps.CoreProperties

    constructor(config?: CoreProperties.ConstructorProperties) 
    _init(config?: CoreProperties.ConstructorProperties): void
}

export module Document {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gxps-1.0.Gxps.Document

        source?: string | null
    }

}

export interface Document extends Gio.Initable {

    // Own properties of Gxps-1.0.Gxps.Document

    readonly source: string

    // Own fields of Gxps-1.0.Gxps.Document

    parent: GObject.Object

    // Owm methods of Gxps-1.0.Gxps.Document

    /**
     * Gets the number of pages in `doc`.
     */
    getNPages(): number
    /**
     * Creates a new #GXPSPage representing the page at
     * index `n_doc` in `doc` document.
     * @param nPage the index of the page to get
     */
    getPage(nPage: number): Page
    /**
     * Gets the index of the page in `doc` where the given
     * anchor is.
     * @param anchor the name of an anchor
     */
    getPageForAnchor(anchor: string): number
    /**
     * Gets the typical size of the page at index `n_page` in `doc` document.
     * This function is useful to get the advisory size of pages in a document
     * without creating #GXPSPage objects. This page size might be different than
     * the actual page size so page dimension might need to be updated once the
     * page is loaded. Advisory page sizes are not always available in `doc,`
     * in which case this function returns %FALSE.
     * To get the authoritative size of a page you should use gxps_page_get_size()
     * instead.
     * @param nPage the index of a page in `doc`
     */
    getPageSize(nPage: number): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    /**
     * Creates a new #GXPSDocumentStructure representing the document
     * structure of `doc`.
     */
    getStructure(): DocumentStructure

    // Class property signals of Gxps-1.0.Gxps.Document

    connect(sigName: "notify::source", callback: any): number
    on(sigName: "notify::source", callback: any): number
    once(sigName: "notify::source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The <structname>GXPSDocument</structname> struct contains
 * only private fields and should not be directly accessed.
 * @class 
 */
export class Document extends GObject.Object {

    // Own properties of Gxps-1.0.Gxps.Document

    static name: string

    // Constructors of Gxps-1.0.Gxps.Document

    constructor(config?: Document.ConstructorProperties) 
    _init(config?: Document.ConstructorProperties): void
}

export module DocumentStructure {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gxps-1.0.Gxps.DocumentStructure

        source?: string | null
    }

}

export interface DocumentStructure {

    // Own properties of Gxps-1.0.Gxps.DocumentStructure

    readonly source: string

    // Own fields of Gxps-1.0.Gxps.DocumentStructure

    parent: GObject.Object

    // Owm methods of Gxps-1.0.Gxps.DocumentStructure

    /**
     * Whether `structure` has an outline or not.
     */
    hasOutline(): boolean

    // Class property signals of Gxps-1.0.Gxps.DocumentStructure

    connect(sigName: "notify::source", callback: any): number
    on(sigName: "notify::source", callback: any): number
    once(sigName: "notify::source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The <structname>GXPSDocumentStructure</structname> struct contains
 * only private fields and should not be directly accessed.
 * @class 
 */
export class DocumentStructure extends GObject.Object {

    // Own properties of Gxps-1.0.Gxps.DocumentStructure

    static name: string

    // Constructors of Gxps-1.0.Gxps.DocumentStructure

    constructor(config?: DocumentStructure.ConstructorProperties) 
    _init(config?: DocumentStructure.ConstructorProperties): void
    /**
     * Initializes `iter` to the root item of the outline contained by `structure`
     * and a associates it with `structure`.
     * 
     * Here is a simple example of some code that walks the full outline:
     * 
     * <informalexample><programlisting>
     * static void
     * walk_outline (GXPSOutlineIter *iter)
     * {
     *     do {
     *         GXPSOutlineIter child_iter;
     *         const gchar    *description = gxps_outline_iter_get_description (iter);
     *         GXPSLinkTarget *target = gxps_outline_iter_get_target (iter);
     * 
     *         /<!-- -->* Do something with description and taregt *<!-- -->/
     *         if (gxps_outline_iter_children (&child_iter, iter))
     *             walk_outline (&child_iter);
     *     } while (gxps_outline_iter_next (iter));
     * }
     * ...
     * {
     *     GXPSOutlineIter iter;
     *     if (gxps_document_structure_outline_iter_init (&iter, structure))
     *         walk_outline (&iter);
     * }
     * </programlisting></informalexample>
     * @param iter an uninitialized #GXPSOutlineIter
     * @param structure a #GXPSDocumentStructure
     */
    static outlineIterInit(iter: OutlineIter, structure: DocumentStructure): boolean
}

export module File {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gxps-1.0.Gxps.File

        file?: Gio.File | null
    }

}

export interface File extends Gio.Initable {

    // Own properties of Gxps-1.0.Gxps.File

    readonly file: Gio.File

    // Own fields of Gxps-1.0.Gxps.File

    parent: GObject.Object

    // Owm methods of Gxps-1.0.Gxps.File

    /**
     * Create a #GXPSCoreProperties object containing the metadata
     * of `xpsm,` or %NULL in case of error or if the #GXPSFile
     * doesn't contain core properties.
     */
    getCoreProperties(): CoreProperties
    /**
     * Creates a new #GXPSDocument representing the document at
     * index `n_doc` in `xps` file.
     * @param nDoc the index of the document to get
     */
    getDocument(nDoc: number): Document
    /**
     * Gets the index of the document in `xps` pointed by `target`.
     * If the #GXPSLinkTarget does not reference a document, or
     * referenced document is not found in `xps` file -1 will be
     * returned. In this case you can look for the page pointed by
     * the link target by calling gxps_document_get_page_for_anchor()
     * with the anchor of the #GXPSLinkTarget for every document in
     * `xps`.
     * @param target a #GXPSLinkTarget
     */
    getDocumentForLinkTarget(target: LinkTarget): number
    /**
     * Gets the number of documents in `xps`.
     */
    getNDocuments(): number

    // Class property signals of Gxps-1.0.Gxps.File

    connect(sigName: "notify::file", callback: any): number
    on(sigName: "notify::file", callback: any): number
    once(sigName: "notify::file", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The <structname>GXPSFile</structname> struct contains
 * only private fields and should not be directly accessed.
 * @class 
 */
export class File extends GObject.Object {

    // Own properties of Gxps-1.0.Gxps.File

    static name: string

    // Constructors of Gxps-1.0.Gxps.File

    constructor(config?: File.ConstructorProperties) 
    /**
     * Creates a new #GXPSFile for the given #GFile.
     * @constructor 
     * @param filename a #GFile
     */
    constructor(filename: Gio.File) 
    /**
     * Creates a new #GXPSFile for the given #GFile.
     * @constructor 
     * @param filename a #GFile
     */
    static new(filename: Gio.File): File
    _init(config?: File.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Page {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gxps-1.0.Gxps.Page

        source?: string | null
    }

}

export interface Page extends Gio.Initable {

    // Own properties of Gxps-1.0.Gxps.Page

    readonly source: string

    // Own fields of Gxps-1.0.Gxps.Page

    parent: GObject.Object

    // Owm methods of Gxps-1.0.Gxps.Page

    /**
     * Gets a list of #GXPSLink items that map from a location
     * in `page` to a #GXPSLinkTarget. Items in the list should
     * be freed with gxps_link_free() and the list itself with
     * g_list_free() when done.
     */
    getLinks(): any[]
    /**
     * Gets the size of the page.
     */
    getSize(): [ /* width */ number, /* height */ number ]
    /**
     * Render the page to the given cairo context. In case of
     * error, %FALSE is returned and `error` is filled with
     * information about error.
     * @param cr a cairo context to render to
     */
    render(cr: cairo.Context): boolean

    // Class property signals of Gxps-1.0.Gxps.Page

    connect(sigName: "notify::source", callback: any): number
    on(sigName: "notify::source", callback: any): number
    once(sigName: "notify::source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The <structname>GXPSPage</structname> struct contains
 * only private fields and should not be directly accessed.
 * @class 
 */
export class Page extends GObject.Object {

    // Own properties of Gxps-1.0.Gxps.Page

    static name: string

    // Constructors of Gxps-1.0.Gxps.Page

    constructor(config?: Page.ConstructorProperties) 
    _init(config?: Page.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export interface CorePropertiesClass {

    // Own fields of Gxps-1.0.Gxps.CorePropertiesClass

    parentClass: GObject.ObjectClass
}

export abstract class CorePropertiesClass {

    // Own properties of Gxps-1.0.Gxps.CorePropertiesClass

    static name: string
}

export interface CorePropertiesPrivate {
}

export class CorePropertiesPrivate {

    // Own properties of Gxps-1.0.Gxps.CorePropertiesPrivate

    static name: string
}

export interface DocumentClass {

    // Own fields of Gxps-1.0.Gxps.DocumentClass

    parentClass: GObject.ObjectClass
}

export abstract class DocumentClass {

    // Own properties of Gxps-1.0.Gxps.DocumentClass

    static name: string
}

export interface DocumentPrivate {
}

export class DocumentPrivate {

    // Own properties of Gxps-1.0.Gxps.DocumentPrivate

    static name: string
}

export interface DocumentStructureClass {

    // Own fields of Gxps-1.0.Gxps.DocumentStructureClass

    parentClass: GObject.ObjectClass
}

export abstract class DocumentStructureClass {

    // Own properties of Gxps-1.0.Gxps.DocumentStructureClass

    static name: string
}

export interface DocumentStructurePrivate {
}

export class DocumentStructurePrivate {

    // Own properties of Gxps-1.0.Gxps.DocumentStructurePrivate

    static name: string
}

export interface FileClass {

    // Own fields of Gxps-1.0.Gxps.FileClass

    parentClass: GObject.ObjectClass
}

export abstract class FileClass {

    // Own properties of Gxps-1.0.Gxps.FileClass

    static name: string
}

export interface FilePrivate {
}

export class FilePrivate {

    // Own properties of Gxps-1.0.Gxps.FilePrivate

    static name: string
}

export interface Link {

    // Owm methods of Gxps-1.0.Gxps.Link

    /**
     * Creates a copy of a #GXPSLink.
     */
    copy(): Link
    /**
     * Frees a #GXPSLink.
     */
    free(): void
    /**
     * Gets the #GXPSLinkTarget mapped by `link`.
     */
    getTarget(): LinkTarget
}

/**
 * GXPSLink maps a location in a page to a #GXPSLinkTarget.
 * @record 
 */
export class Link {

    // Own properties of Gxps-1.0.Gxps.Link

    static name: string
}

export interface LinkTarget {

    // Owm methods of Gxps-1.0.Gxps.LinkTarget

    /**
     * Creates a copy of a #GXPSLinkTarget
     */
    copy(): LinkTarget
    /**
     * Frees a #GXPSLinkTarget.
     */
    free(): void
    /**
     * Gets the anchor name `target` links to. If `target` is
     * an internal #GXPSLinkTarget this function always returns
     * and anchor, if it is external it might return %NULL if the
     * `target` does not have an anchor.
     */
    getAnchor(): string
    /**
     * Gets the URI `target` links to.
     */
    getUri(): string
    /**
     * Gets whether `target` destination is internal or not.
     */
    isInternal(): boolean
}

/**
 * GXPSLinkTarget represents a hyperlink source.
 * @record 
 */
export class LinkTarget {

    // Own properties of Gxps-1.0.Gxps.LinkTarget

    static name: string
}

export interface OutlineIter {

    // Owm methods of Gxps-1.0.Gxps.OutlineIter

    /**
     * Initializes `iter` to the first child item of `parent`.
     * See gxps_document_structure_outline_iter_init() for
     * more details.
     * @param parent an initialized #GXPSOutlineIter
     */
    children(parent: OutlineIter): boolean
    /**
     * Gets the description of the outline item associated with `iter`.
     * See gxps_document_structure_outline_iter_init() for
     * more details.
     */
    getDescription(): string
    /**
     * Gets the #GXPSLinkTarget of the outline item associated with `iter`.
     * See gxps_document_structure_outline_iter_init() for
     * more details.
     */
    getTarget(): LinkTarget
    /**
     * Advances `iter` to the next item at the current level.
     * See gxps_document_structure_outline_iter_init() for
     * more details.
     */
    next(): boolean
}

/**
 * GXPSOutlineIter represents an iterator that can be
 * used to iterate over the items of an outline
 * contained in a #GXPSDocumentStructure
 * @record 
 */
export class OutlineIter {

    // Own properties of Gxps-1.0.Gxps.OutlineIter

    static name: string
}

export interface PageClass {

    // Own fields of Gxps-1.0.Gxps.PageClass

    parentClass: GObject.ObjectClass
}

export abstract class PageClass {

    // Own properties of Gxps-1.0.Gxps.PageClass

    static name: string
}

export interface PagePrivate {
}

export class PagePrivate {

    // Own properties of Gxps-1.0.Gxps.PagePrivate

    static name: string
}
