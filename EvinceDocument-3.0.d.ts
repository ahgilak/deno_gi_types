
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * EvinceDocument-3.0
 */

import type * as Gtk from './Gtk-3.0.js';
import type * as xlib from './xlib-2.0.js';
import type * as Gdk from './Gdk-3.0.js';
import type * as cairo from './cairo-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GdkPixbuf from './GdkPixbuf-2.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as Atk from './Atk-1.0.js';

export enum AnnotationTextIcon {
    NOTE,
    COMMENT,
    KEY,
    HELP,
    NEW_PARAGRAPH,
    PARAGRAPH,
    INSERT,
    CROSS,
    CIRCLE,
    UNKNOWN,
}
export enum AnnotationTextMarkupType {
    HIGHLIGHT,
    STRIKE_OUT,
    UNDERLINE,
    SQUIGGLY,
}
export enum AnnotationType {
    UNKNOWN,
    TEXT,
    ATTACHMENT,
    TEXT_MARKUP,
}
export enum AnnotationsOverMarkup {
    NOT_IMPLEMENTED,
    UNKNOWN,
    YES,
    NOT,
}
export enum CompressionType {
    NONE,
    BZIP2,
    GZIP,
    LZMA,
}
export enum DocumentContainsJS {
    UNKNOWN,
    NO,
    YES,
}
export enum DocumentError {
    INVALID,
    UNSUPPORTED_CONTENT,
    ENCRYPTED,
}
export enum DocumentLayout {
    SINGLE_PAGE,
    ONE_COLUMN,
    TWO_COLUMN_LEFT,
    TWO_COLUMN_RIGHT,
    TWO_PAGE_LEFT,
    TWO_PAGE_RIGHT,
}
export enum DocumentMode {
    NONE,
    USE_OC,
    USE_THUMBS,
    FULL_SCREEN,
    USE_ATTACHMENTS,
    PRESENTATION,
}
export enum FileExporterFormat {
    UNKNOWN,
    PS,
    PDF,
}
export enum FormFieldButtonType {
    PUSH,
    CHECK,
    RADIO,
}
export enum FormFieldChoiceType {
    COMBO,
    LIST,
}
export enum FormFieldTextType {
    NORMAL,
    MULTILINE,
    FILE_SELECT,
}
export enum LinkActionType {
    GOTO_DEST,
    GOTO_REMOTE,
    EXTERNAL_URI,
    LAUNCH,
    NAMED,
    LAYERS_STATE,
    RESET_FORM,
}
export enum LinkDestType {
    PAGE,
    XYZ,
    FIT,
    FITH,
    FITV,
    FITR,
    NAMED,
    PAGE_LABEL,
    UNKNOWN,
}
export enum SelectionStyle {
    GLYPH,
    WORD,
    LINE,
}
export enum TransitionEffectAlignment {
    HORIZONTAL,
    VERTICAL,
}
export enum TransitionEffectDirection {
    INWARD,
    OUTWARD,
}
export enum TransitionEffectType {
    REPLACE,
    SPLIT,
    BLINDS,
    BOX,
    WIPE,
    DISSOLVE,
    GLITTER,
    FLY,
    PUSH,
    COVER,
    UNCOVER,
    FADE,
}
export enum AnnotationsSaveMask {
    NONE,
    CONTENTS,
    COLOR,
    AREA,
    LABEL,
    OPACITY,
    POPUP_RECT,
    POPUP_IS_OPEN,
    TEXT_IS_OPEN,
    TEXT_ICON,
    ATTACHMENT,
    TEXT_MARKUP_TYPE,
    ALL,
}
export enum DocumentInfoFields {
    TITLE,
    FORMAT,
    AUTHOR,
    SUBJECT,
    KEYWORDS,
    LAYOUT,
    CREATOR,
    PRODUCER,
    CREATION_DATE,
    MOD_DATE,
    LINEARIZED,
    START_MODE,
    UI_HINTS,
    PERMISSIONS,
    N_PAGES,
    SECURITY,
    PAPER_SIZE,
    LICENSE,
    CONTAINS_JS,
}
export enum DocumentLoadFlags {
    NONE,
    NO_CACHE,
}
export enum DocumentPermissions {
    OK_TO_PRINT,
    OK_TO_MODIFY,
    OK_TO_COPY,
    OK_TO_ADD_NOTES,
    FULL,
}
export enum DocumentUIHints {
    HIDE_TOOLBAR,
    HIDE_MENUBAR,
    HIDE_WINDOWUI,
    FIT_WINDOW,
    CENTER_WINDOW,
    DISPLAY_DOC_TITLE,
    DIRECTION_RTL,
}
export enum FileExporterCapabilities {
    PAGE_SET,
    COPIES,
    COLLATE,
    REVERSE,
    SCALE,
    GENERATE_PDF,
    GENERATE_PS,
    PREVIEW,
    NUMBER_UP,
}
export enum FindOptions {
    DEFAULT,
    CASE_SENSITIVE,
    WHOLE_WORDS_ONLY,
}
/**
 * The major version number of the EV library
 * (e.g. in version 3.1.4 this is 3).
 */
export const MAJOR_VERSION: number
/**
 * The minor version number of the EV library
 * (e.g. in version 3.1.4 this is 1).
 */
export const MINOR_VERSION: number
export function backendsManagerGetDocument(mimeType: string): Document
export function backendsManagerGetDocumentModuleName(document: Document): string
export function documentErrorQuark(): GLib.Quark
/**
 * Compresses the file at `uri`.
 *  
 * If `type` is %EV_COMPRESSION_NONE, it does nothing and returns %NULL.
 * 
 * Otherwise, it returns the filename of a
 * temporary file containing the compressed data from the file at `uri`.
 * 
 * On error it returns %NULL and fills in `error`.
 * 
 * It is the caller's responsibility to unlink the temp file after use.
 * @param uri a file URI
 * @param type the compression type
 */
export function fileCompress(uri: string, type: CompressionType): string
/**
 * Performs a g_file_copy_attributes() with %G_FILE_COPY_ALL_METADATA
 * from `from` to `to`.
 * @param from the source URI
 * @param to the target URI
 */
export function fileCopyMetadata(from: string, to: string): boolean
export function fileGetMimeType(uri: string, fast: boolean): string
export function fileGetMimeTypeFromFd(fd: number): string
export function fileIsTemp(file: Gio.File): boolean
/**
 * Uncompresses the file at `uri`.
 * 
 * If `type` is %EV_COMPRESSION_NONE, it does nothing and returns %NULL.
 * 
 * Otherwise, it returns the filename of a
 * temporary file containing the decompressed data from the file at `uri`.
 * On error it returns %NULL and fills in `error`.
 * 
 * It is the caller's responsibility to unlink the temp file after use.
 * @param uri a file URI
 * @param type the compression type
 */
export function fileUncompress(uri: string, type: CompressionType): string
export function getLocaleDir(): string
/**
 * Initializes the evince document library, and binds the evince
 * gettext domain.
 * 
 * You must call this before calling any other function in the evince
 * document library.
 */
export function init(): boolean
/**
 * Creates a temp directory in the evince temp directory.
 * @param tmpl a template string; must end in 'XXXXXX'
 */
export function mkdtemp(tmpl: string): string
/**
 * Creates a temp file in the evince temp directory.
 * @param tmpl a template string; must contain 'XXXXXX', but not necessarily as a suffix
 * @param fileName a location to store the filename of the temp file
 */
export function mkstemp(tmpl: string, fileName: string): number
/**
 * Creates a temp #GFile in the evince temp directory. See ev_mkstemp() for more information.
 * @param tmpl a template string; must contain 'XXXXXX', but not necessarily as a suffix
 */
export function mkstempFile(tmpl: string): Gio.File
export function rectCmp(a: Rectangle, b: Rectangle): number
/**
 * Checks whether evince should use the portal.
 */
export function shouldUsePortal(): boolean
/**
 * Shuts the evince document library down.
 */
export function shutdown(): void
export function tmpFileUnlink(file: Gio.File): void
export function tmpFilenameUnlink(filename: string): void
export function tmpUriUnlink(uri: string): void
/**
 * Performs a g_file_copy() from `from` to `to`.
 * @param from the source URI
 * @param to the target URI
 */
export function xferUriSimple(from: string, to: string): boolean
export function xmpParse(xmp: string, size: number, info: DocumentInfo): boolean
export module AnnotationMarkup {

    // Constructor properties interface

    export interface ConstructorProperties extends Annotation.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup

        canHavePopup?: boolean | null
        hasPopup?: boolean | null
        label?: string | null
        opacity?: number | null
        popupIsOpen?: boolean | null
        rectangle?: Rectangle | null
    }

}

export interface AnnotationMarkup extends Annotation {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup

    canHavePopup: boolean
    hasPopup: boolean
    label: string
    opacity: number
    popupIsOpen: boolean
    rectangle: Rectangle

    // Owm methods of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup

    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getRectangle(evRect: Rectangle): void
    setHasPopup(hasPopup: boolean): boolean
    setLabel(label: string): boolean
    setOpacity(opacity: number): boolean
    setPopupIsOpen(isOpen: boolean): boolean
    setRectangle(evRect: Rectangle): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup

    connect(sigName: "notify::can-have-popup", callback: any): number
    on(sigName: "notify::can-have-popup", callback: any): number
    once(sigName: "notify::can-have-popup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-have-popup", ...args: any[]): void
    connect(sigName: "notify::has-popup", callback: any): number
    on(sigName: "notify::has-popup", callback: any): number
    once(sigName: "notify::has-popup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-popup", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::popup-is-open", callback: any): number
    on(sigName: "notify::popup-is-open", callback: any): number
    once(sigName: "notify::popup-is-open", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::popup-is-open", ...args: any[]): void
    connect(sigName: "notify::rectangle", callback: any): number
    on(sigName: "notify::rectangle", callback: any): number
    once(sigName: "notify::rectangle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rectangle", ...args: any[]): void
    connect(sigName: "notify::area", callback: any): number
    on(sigName: "notify::area", callback: any): number
    once(sigName: "notify::area", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::area", ...args: any[]): void
    connect(sigName: "notify::color", callback: any): number
    on(sigName: "notify::color", callback: any): number
    once(sigName: "notify::color", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::contents", callback: any): number
    on(sigName: "notify::contents", callback: any): number
    once(sigName: "notify::contents", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::contents", ...args: any[]): void
    connect(sigName: "notify::modified", callback: any): number
    on(sigName: "notify::modified", callback: any): number
    once(sigName: "notify::modified", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::page", callback: any): number
    on(sigName: "notify::page", callback: any): number
    once(sigName: "notify::page", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::rgba", callback: any): number
    on(sigName: "notify::rgba", callback: any): number
    once(sigName: "notify::rgba", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class AnnotationMarkup extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup

    constructor(config?: AnnotationMarkup.ConstructorProperties) 
    _init(config?: AnnotationMarkup.ConstructorProperties): void
}

export module AsyncRenderer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `render-finished`
     */
    export interface RenderFinishedSignalCallback {
        (object: GdkPixbuf.Pixbuf): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface AsyncRenderer {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.AsyncRenderer

    // Has conflict: renderPixbuf(page: number, scale: number, rotation: number): void

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.AsyncRenderer

    renderFinished(pixbuf: GdkPixbuf.Pixbuf): void
    renderPixbuf(page: number, scale: number, rotation: number): void

    // Own signals of EvinceDocument-3.0.EvinceDocument.AsyncRenderer

    connect(sigName: "render-finished", callback: AsyncRenderer.RenderFinishedSignalCallback): number
    on(sigName: "render-finished", callback: AsyncRenderer.RenderFinishedSignalCallback): number
    once(sigName: "render-finished", callback: AsyncRenderer.RenderFinishedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "render-finished", ...args: any[]): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.AsyncRenderer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class AsyncRenderer extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AsyncRenderer

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.AsyncRenderer

    constructor(config?: AsyncRenderer.ConstructorProperties) 
    _init(config?: AsyncRenderer.ConstructorProperties): void
}

export module DocumentAnnotations {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DocumentAnnotations {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentAnnotations

    // Has conflict: addAnnotation(annot: Annotation, rect: Rectangle): void
    canAddAnnotation(): boolean
    canRemoveAnnotation(): boolean
    // Has conflict: documentIsModified(): boolean
    // Has conflict: getAnnotations(page: Page): MappingList
    // Has conflict: overMarkup(annot: Annotation, x: number, y: number): AnnotationsOverMarkup
    // Has conflict: removeAnnotation(annot: Annotation): void
    // Has conflict: saveAnnotation(annot: Annotation, mask: AnnotationsSaveMask): void

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentAnnotations

    addAnnotation(annot: Annotation, rect: Rectangle): void
    documentIsModified(): boolean
    getAnnotations(page: Page): MappingList
    overMarkup(annot: Annotation, x: number, y: number): AnnotationsOverMarkup
    removeAnnotation(annot: Annotation): void
    saveAnnotation(annot: Annotation, mask: AnnotationsSaveMask): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentAnnotations

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DocumentAnnotations extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentAnnotations

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentAnnotations

    constructor(config?: DocumentAnnotations.ConstructorProperties) 
    _init(config?: DocumentAnnotations.ConstructorProperties): void
}

export module DocumentAttachments {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DocumentAttachments {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentAttachments

    // Has conflict: getAttachments(): Attachment[]
    // Has conflict: hasAttachments(): boolean

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentAttachments

    getAttachments(): Attachment[]
    hasAttachments(): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentAttachments

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DocumentAttachments extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentAttachments

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentAttachments

    constructor(config?: DocumentAttachments.ConstructorProperties) 
    _init(config?: DocumentAttachments.ConstructorProperties): void
}

export module DocumentFind {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DocumentFind {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentFind

    // Has conflict: findText(page: Page, text: string, caseSensitive: boolean): Rectangle[]
    // Has conflict: findTextWithOptions(page: Page, text: string, options: FindOptions): Rectangle[]
    // Has conflict: getSupportedOptions(): FindOptions

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentFind

    findText(page: Page, text: string, caseSensitive: boolean): Rectangle[]
    findTextWithOptions(page: Page, text: string, options: FindOptions): Rectangle[]
    getSupportedOptions(): FindOptions

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentFind

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DocumentFind extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentFind

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentFind

    constructor(config?: DocumentFind.ConstructorProperties) 
    _init(config?: DocumentFind.ConstructorProperties): void
}

export module DocumentFonts {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DocumentFonts {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentFonts

    // Has conflict: fillModel(model: Gtk.TreeModel): void
    // Has conflict: getFontsSummary(): string
    // Has conflict: getProgress(): number
    // Has conflict: scan(nPages: number): boolean

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentFonts

    fillModel(model: Gtk.TreeModel): void
    getFontsSummary(): string
    getProgress(): number
    scan(nPages: number): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentFonts

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DocumentFonts extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentFonts

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentFonts

    constructor(config?: DocumentFonts.ConstructorProperties) 
    _init(config?: DocumentFonts.ConstructorProperties): void
}

export module DocumentForms {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DocumentForms {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentForms

    // Has conflict: documentIsModified(): boolean
    // Has conflict: formFieldButtonGetState(field: FormField): boolean
    // Has conflict: formFieldButtonSetState(field: FormField, state: boolean): void
    // Has conflict: formFieldChoiceGetItem(field: FormField, index: number): string
    // Has conflict: formFieldChoiceGetNItems(field: FormField): number
    // Has conflict: formFieldChoiceGetText(field: FormField): string
    // Has conflict: formFieldChoiceIsItemSelected(field: FormField, index: number): boolean
    // Has conflict: formFieldChoiceSelectItem(field: FormField, index: number): void
    // Has conflict: formFieldChoiceSetText(field: FormField, text: string): void
    // Has conflict: formFieldChoiceToggleItem(field: FormField, index: number): void
    // Has conflict: formFieldChoiceUnselectAll(field: FormField): void
    // Has conflict: formFieldTextGetText(field: FormField): string
    // Has conflict: formFieldTextSetText(field: FormField, text: string): void
    // Has conflict: getFormFields(page: Page): MappingList
    // Has conflict: resetForm(action: LinkAction): void

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentForms

    documentIsModified(): boolean
    formFieldButtonGetState(field: FormField): boolean
    formFieldButtonSetState(field: FormField, state: boolean): void
    formFieldChoiceGetItem(field: FormField, index: number): string
    formFieldChoiceGetNItems(field: FormField): number
    formFieldChoiceGetText(field: FormField): string
    formFieldChoiceIsItemSelected(field: FormField, index: number): boolean
    formFieldChoiceSelectItem(field: FormField, index: number): void
    formFieldChoiceSetText(field: FormField, text: string): void
    formFieldChoiceToggleItem(field: FormField, index: number): void
    formFieldChoiceUnselectAll(field: FormField): void
    formFieldTextGetText(field: FormField): string
    formFieldTextSetText(field: FormField, text: string): void
    getFormFields(page: Page): MappingList
    resetForm(action: LinkAction): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentForms

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DocumentForms extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentForms

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentForms

    constructor(config?: DocumentForms.ConstructorProperties) 
    _init(config?: DocumentForms.ConstructorProperties): void
}

export module DocumentImages {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DocumentImages {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentImages

    // Has conflict: getImage(image: Image): GdkPixbuf.Pixbuf
    // Has conflict: getImageMapping(page: Page): MappingList

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentImages

    getImage(image: Image): GdkPixbuf.Pixbuf
    getImageMapping(page: Page): MappingList

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentImages

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DocumentImages extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentImages

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentImages

    constructor(config?: DocumentImages.ConstructorProperties) 
    _init(config?: DocumentImages.ConstructorProperties): void
}

export module DocumentLayers {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DocumentLayers {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentLayers

    // Has conflict: getLayers(): Gtk.TreeModel
    // Has conflict: hasLayers(): boolean
    // Has conflict: hideLayer(layer: Layer): void
    // Has conflict: layerIsVisible(layer: Layer): boolean
    // Has conflict: showLayer(layer: Layer): void

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentLayers

    getLayers(): Gtk.TreeModel
    hasLayers(): boolean
    hideLayer(layer: Layer): void
    layerIsVisible(layer: Layer): boolean
    showLayer(layer: Layer): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentLayers

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DocumentLayers extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentLayers

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentLayers

    constructor(config?: DocumentLayers.ConstructorProperties) 
    _init(config?: DocumentLayers.ConstructorProperties): void
}

export module DocumentLinks {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DocumentLinks {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentLinks

    // Has conflict: findLinkDest(linkName: string): LinkDest
    // Has conflict: findLinkPage(linkName: string): number
    getDestPage(dest: LinkDest): number
    getDestPageLabel(dest: LinkDest): string
    getLinkPage(link: Link): number
    getLinkPageLabel(link: Link): string
    // Has conflict: getLinks(page: Page): MappingList
    // Has conflict: getLinksModel(): Gtk.TreeModel
    // Has conflict: hasDocumentLinks(): boolean

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentLinks

    findLinkDest(linkName: string): LinkDest
    findLinkPage(linkName: string): number
    getLinks(page: Page): MappingList
    getLinksModel(): Gtk.TreeModel
    hasDocumentLinks(): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentLinks

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DocumentLinks extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentLinks

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentLinks

    constructor(config?: DocumentLinks.ConstructorProperties) 
    _init(config?: DocumentLinks.ConstructorProperties): void
}

export module DocumentMedia {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DocumentMedia {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentMedia

    // Has conflict: getMediaMapping(page: Page): MappingList

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentMedia

    getMediaMapping(page: Page): MappingList

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentMedia

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DocumentMedia extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentMedia

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentMedia

    constructor(config?: DocumentMedia.ConstructorProperties) 
    _init(config?: DocumentMedia.ConstructorProperties): void
}

export module DocumentPrint {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DocumentPrint {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentPrint

    // Has conflict: printPage(page: Page, cr: cairo.Context): void

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentPrint

    printPage(page: Page, cr: cairo.Context): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentPrint

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DocumentPrint extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentPrint

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentPrint

    constructor(config?: DocumentPrint.ConstructorProperties) 
    _init(config?: DocumentPrint.ConstructorProperties): void
}

export module DocumentSecurity {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DocumentSecurity {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentSecurity

    // Has conflict: hasDocumentSecurity(): boolean
    // Has conflict: setPassword(password: string): void

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentSecurity

    hasDocumentSecurity(): boolean
    setPassword(password: string): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentSecurity

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DocumentSecurity extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentSecurity

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentSecurity

    constructor(config?: DocumentSecurity.ConstructorProperties) 
    _init(config?: DocumentSecurity.ConstructorProperties): void
}

export module DocumentText {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DocumentText {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentText

    // Has conflict: getText(page: Page): string
    // Has conflict: getTextAttrs(page: Page): Pango.AttrList
    // Has conflict: getTextLayout(page: Page, areas: Rectangle, nAreas: number): boolean
    // Has conflict: getTextMapping(page: Page): cairo.Region

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentText

    getText(page: Page): string
    /**
     * FIXME
     * @virtual 
     * @param page a #EvPage
     */
    getTextAttrs(page: Page): Pango.AttrList
    getTextLayout(page: Page, areas: Rectangle, nAreas: number): boolean
    getTextMapping(page: Page): cairo.Region

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentText

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DocumentText extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentText

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentText

    constructor(config?: DocumentText.ConstructorProperties) 
    _init(config?: DocumentText.ConstructorProperties): void
}

export module DocumentTransition {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DocumentTransition {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentTransition

    // Has conflict: getEffect(page: number): TransitionEffect
    // Has conflict: getPageDuration(page: number): number

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.DocumentTransition

    getEffect(page: number): TransitionEffect
    getPageDuration(page: number): number

    // Class property signals of EvinceDocument-3.0.EvinceDocument.DocumentTransition

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DocumentTransition extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentTransition

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentTransition

    constructor(config?: DocumentTransition.ConstructorProperties) 
    _init(config?: DocumentTransition.ConstructorProperties): void
}

export module FileExporter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface FileExporter {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.FileExporter

    // Has conflict: begin(fc: FileExporterContext): void
    // Has conflict: beginPage(): void
    // Has conflict: doPage(rc: RenderContext): void
    // Has conflict: end(): void
    // Has conflict: endPage(): void
    // Has conflict: getCapabilities(): FileExporterCapabilities

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.FileExporter

    begin(fc: FileExporterContext): void
    beginPage(): void
    doPage(rc: RenderContext): void
    end(): void
    endPage(): void
    getCapabilities(): FileExporterCapabilities

    // Class property signals of EvinceDocument-3.0.EvinceDocument.FileExporter

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FileExporter extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FileExporter

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.FileExporter

    constructor(config?: FileExporter.ConstructorProperties) 
    _init(config?: FileExporter.ConstructorProperties): void
}

export module Selection {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Selection {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.Selection

    // Has conflict: getSelectedText(page: Page, style: SelectionStyle, points: Rectangle): string
    // Has conflict: getSelectionRegion(rc: RenderContext, style: SelectionStyle, points: Rectangle): cairo.Region
    // Has conflict: renderSelection(rc: RenderContext, surface: cairo.Surface, points: Rectangle, oldPoints: Rectangle, style: SelectionStyle, text: Gdk.Color, base: Gdk.Color): void

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.Selection

    getSelectedText(page: Page, style: SelectionStyle, points: Rectangle): string
    getSelectionRegion(rc: RenderContext, style: SelectionStyle, points: Rectangle): cairo.Region
    renderSelection(rc: RenderContext, surface: cairo.Surface, points: Rectangle, oldPoints: Rectangle, style: SelectionStyle, text: Gdk.Color, base: Gdk.Color): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Selection

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Selection extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Selection

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.Selection

    constructor(config?: Selection.ConstructorProperties) 
    _init(config?: Selection.ConstructorProperties): void
}

export module Annotation {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of EvinceDocument-3.0.EvinceDocument.Annotation

        /**
         * The area of the page where the annotation is placed.
         * 
         * Since 3.18
         */
        area?: Rectangle | null
        /**
         * The colour of the annotation as a #GdkColor.
         */
        color?: object | null
        contents?: string | null
        modified?: string | null
        name?: string | null
        page?: Page | null
        /**
         * The colour of the annotation as a #GdkRGBA.
         */
        rgba?: Gdk.RGBA | null
    }

}

export interface Annotation {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Annotation

    /**
     * The area of the page where the annotation is placed.
     * 
     * Since 3.18
     */
    area: Rectangle
    /**
     * The colour of the annotation as a #GdkColor.
     */
    color: object
    contents: string
    modified: string
    name: string
    readonly page: Page
    /**
     * The colour of the annotation as a #GdkRGBA.
     */
    rgba: Gdk.RGBA

    // Owm methods of EvinceDocument-3.0.EvinceDocument.Annotation

    /**
     * Compare `annot` and `other`.
     * @param other another #EvAnnotation
     */
    equal(other: Annotation): boolean
    getAnnotationType(): AnnotationType
    getArea(area: Rectangle): void
    /**
     * Get the color of `annot`.
     */
    getColor(): /* color */ Gdk.Color
    /**
     * Get the contents of `annot`. The contents of
     * `annot` is the text that is displayed in the annotation, or an
     * alternate description of the annotation's content for non-text annotations
     */
    getContents(): string
    /**
     * Get the last modification date of `annot`.
     */
    getModified(): string
    /**
     * Get the name of `annot`. The name of the annotation is a string
     * that uniquely indenftifies `annot` amongs all the annotations
     * in the same page.
     */
    getName(): string
    /**
     * Get the page where `annot` appears.
     */
    getPage(): Page
    /**
     * Get the index of the page where `annot` appears. Note that the index
     * is 0 based.
     */
    getPageIndex(): number
    /**
     * Gets the color of `annot`.
     */
    getRgba(): /* rgba */ Gdk.RGBA
    /**
     * Set the area of the annotation to `area`.
     * @param area a #EvRectangle
     */
    setArea(area: Rectangle): boolean
    /**
     * Set the color of the annotation to `color`. You can monitor
     * changes to the annotation's color by connecting to
     * notify::color signal on `annot`.
     * @param color a #GdkColor
     */
    setColor(color: Gdk.Color): boolean
    /**
     * Set the contents of `annot`. You can monitor
     * changes in the annotation's  contents by connecting to
     * notify::contents signal of `annot`.
     * @param contents 
     */
    setContents(contents: string): boolean
    /**
     * Set the last modification date of `annot` to `modified`. To
     * set the last modification date using a #time_t, use
     * ev_annotation_set_modified_from_time_t() instead. You can monitor
     * changes to the last modification date by connecting to the
     * notify::modified signal on `annot`.
     * @param modified string with the last modification date.
     */
    setModified(modified: string): boolean
    /**
     * Set the last modification date of `annot` to `utime`.  You can
     * monitor changes to the last modification date by connecting to the
     * notify::modified sinal on `annot`.
     * For the time-format used, see ev_document_misc_format_date().
     * @param utime a #GTime
     */
    setModifiedFromTime(utime: GLib.Time): boolean
    /**
     * Set the last modification date of `annot` to `utime`.  You can
     * monitor changes to the last modification date by connecting to the
     * notify::modified sinal on `annot`.
     * For the time-format used, see ev_document_misc_format_datetime().
     * @param utime a #time_t
     */
    setModifiedFromTimeT(utime: number): boolean
    /**
     * Set the name of `annot`.
     * You can monitor changes of the annotation name by connecting
     * to the notify::name signal on `annot`.
     * @param name 
     */
    setName(name: string): boolean
    /**
     * Set the color of the annotation to `rgba`.
     * @param rgba a #GdkRGBA
     */
    setRgba(rgba: Gdk.RGBA): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Annotation

    connect(sigName: "notify::area", callback: any): number
    on(sigName: "notify::area", callback: any): number
    once(sigName: "notify::area", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::area", ...args: any[]): void
    connect(sigName: "notify::color", callback: any): number
    on(sigName: "notify::color", callback: any): number
    once(sigName: "notify::color", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::contents", callback: any): number
    on(sigName: "notify::contents", callback: any): number
    once(sigName: "notify::contents", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::contents", ...args: any[]): void
    connect(sigName: "notify::modified", callback: any): number
    on(sigName: "notify::modified", callback: any): number
    once(sigName: "notify::modified", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::page", callback: any): number
    on(sigName: "notify::page", callback: any): number
    once(sigName: "notify::page", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::rgba", callback: any): number
    on(sigName: "notify::rgba", callback: any): number
    once(sigName: "notify::rgba", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Annotation extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Annotation

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.Annotation

    constructor(config?: Annotation.ConstructorProperties) 
    _init(config?: Annotation.ConstructorProperties): void
}

export module AnnotationAttachment {

    // Constructor properties interface

    export interface ConstructorProperties extends AnnotationMarkup.ConstructorProperties, Annotation.ConstructorProperties {

        // Own constructor properties of EvinceDocument-3.0.EvinceDocument.AnnotationAttachment

        attachment?: Attachment | null
    }

}

export interface AnnotationAttachment extends AnnotationMarkup {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationAttachment

    attachment: Attachment

    // Owm methods of EvinceDocument-3.0.EvinceDocument.AnnotationAttachment

    getAttachment(): Attachment
    setAttachment(attachment: Attachment): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.AnnotationAttachment

    connect(sigName: "notify::attachment", callback: any): number
    on(sigName: "notify::attachment", callback: any): number
    once(sigName: "notify::attachment", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attachment", ...args: any[]): void
    connect(sigName: "notify::area", callback: any): number
    on(sigName: "notify::area", callback: any): number
    once(sigName: "notify::area", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::area", ...args: any[]): void
    connect(sigName: "notify::color", callback: any): number
    on(sigName: "notify::color", callback: any): number
    once(sigName: "notify::color", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::contents", callback: any): number
    on(sigName: "notify::contents", callback: any): number
    once(sigName: "notify::contents", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::contents", ...args: any[]): void
    connect(sigName: "notify::modified", callback: any): number
    on(sigName: "notify::modified", callback: any): number
    once(sigName: "notify::modified", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::page", callback: any): number
    on(sigName: "notify::page", callback: any): number
    once(sigName: "notify::page", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::rgba", callback: any): number
    on(sigName: "notify::rgba", callback: any): number
    once(sigName: "notify::rgba", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: "notify::can-have-popup", callback: any): number
    on(sigName: "notify::can-have-popup", callback: any): number
    once(sigName: "notify::can-have-popup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-have-popup", ...args: any[]): void
    connect(sigName: "notify::has-popup", callback: any): number
    on(sigName: "notify::has-popup", callback: any): number
    once(sigName: "notify::has-popup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-popup", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::popup-is-open", callback: any): number
    on(sigName: "notify::popup-is-open", callback: any): number
    once(sigName: "notify::popup-is-open", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::popup-is-open", ...args: any[]): void
    connect(sigName: "notify::rectangle", callback: any): number
    on(sigName: "notify::rectangle", callback: any): number
    once(sigName: "notify::rectangle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rectangle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class AnnotationAttachment extends Annotation {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationAttachment

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.AnnotationAttachment

    constructor(config?: AnnotationAttachment.ConstructorProperties) 
    constructor(page: Page, attachment: Attachment) 
    static new(page: Page, attachment: Attachment): AnnotationAttachment
    _init(config?: AnnotationAttachment.ConstructorProperties): void
}

export module AnnotationText {

    // Constructor properties interface

    export interface ConstructorProperties extends AnnotationMarkup.ConstructorProperties, Annotation.ConstructorProperties {

        // Own constructor properties of EvinceDocument-3.0.EvinceDocument.AnnotationText

        icon?: AnnotationTextIcon | null
        isOpen?: boolean | null
    }

}

export interface AnnotationText extends AnnotationMarkup {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationText

    icon: AnnotationTextIcon
    isOpen: boolean

    // Owm methods of EvinceDocument-3.0.EvinceDocument.AnnotationText

    getIcon(): AnnotationTextIcon
    getIsOpen(): boolean
    setIcon(icon: AnnotationTextIcon): boolean
    setIsOpen(isOpen: boolean): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.AnnotationText

    connect(sigName: "notify::icon", callback: any): number
    on(sigName: "notify::icon", callback: any): number
    once(sigName: "notify::icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::is-open", callback: any): number
    on(sigName: "notify::is-open", callback: any): number
    once(sigName: "notify::is-open", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-open", ...args: any[]): void
    connect(sigName: "notify::area", callback: any): number
    on(sigName: "notify::area", callback: any): number
    once(sigName: "notify::area", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::area", ...args: any[]): void
    connect(sigName: "notify::color", callback: any): number
    on(sigName: "notify::color", callback: any): number
    once(sigName: "notify::color", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::contents", callback: any): number
    on(sigName: "notify::contents", callback: any): number
    once(sigName: "notify::contents", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::contents", ...args: any[]): void
    connect(sigName: "notify::modified", callback: any): number
    on(sigName: "notify::modified", callback: any): number
    once(sigName: "notify::modified", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::page", callback: any): number
    on(sigName: "notify::page", callback: any): number
    once(sigName: "notify::page", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::rgba", callback: any): number
    on(sigName: "notify::rgba", callback: any): number
    once(sigName: "notify::rgba", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: "notify::can-have-popup", callback: any): number
    on(sigName: "notify::can-have-popup", callback: any): number
    once(sigName: "notify::can-have-popup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-have-popup", ...args: any[]): void
    connect(sigName: "notify::has-popup", callback: any): number
    on(sigName: "notify::has-popup", callback: any): number
    once(sigName: "notify::has-popup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-popup", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::popup-is-open", callback: any): number
    on(sigName: "notify::popup-is-open", callback: any): number
    once(sigName: "notify::popup-is-open", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::popup-is-open", ...args: any[]): void
    connect(sigName: "notify::rectangle", callback: any): number
    on(sigName: "notify::rectangle", callback: any): number
    once(sigName: "notify::rectangle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rectangle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class AnnotationText extends Annotation {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationText

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.AnnotationText

    constructor(config?: AnnotationText.ConstructorProperties) 
    constructor(page: Page) 
    static new(page: Page): AnnotationText
    _init(config?: AnnotationText.ConstructorProperties): void
}

export module AnnotationTextMarkup {

    // Constructor properties interface

    export interface ConstructorProperties extends AnnotationMarkup.ConstructorProperties, Annotation.ConstructorProperties {

        // Own constructor properties of EvinceDocument-3.0.EvinceDocument.AnnotationTextMarkup

        type?: AnnotationTextMarkupType | null
    }

}

export interface AnnotationTextMarkup extends AnnotationMarkup {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationTextMarkup

    type: AnnotationTextMarkupType

    // Owm methods of EvinceDocument-3.0.EvinceDocument.AnnotationTextMarkup

    getMarkupType(): AnnotationTextMarkupType
    setMarkupType(markupType: AnnotationTextMarkupType): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.AnnotationTextMarkup

    connect(sigName: "notify::type", callback: any): number
    on(sigName: "notify::type", callback: any): number
    once(sigName: "notify::type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::area", callback: any): number
    on(sigName: "notify::area", callback: any): number
    once(sigName: "notify::area", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::area", ...args: any[]): void
    connect(sigName: "notify::color", callback: any): number
    on(sigName: "notify::color", callback: any): number
    once(sigName: "notify::color", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::contents", callback: any): number
    on(sigName: "notify::contents", callback: any): number
    once(sigName: "notify::contents", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::contents", ...args: any[]): void
    connect(sigName: "notify::modified", callback: any): number
    on(sigName: "notify::modified", callback: any): number
    once(sigName: "notify::modified", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::page", callback: any): number
    on(sigName: "notify::page", callback: any): number
    once(sigName: "notify::page", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::rgba", callback: any): number
    on(sigName: "notify::rgba", callback: any): number
    once(sigName: "notify::rgba", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: "notify::can-have-popup", callback: any): number
    on(sigName: "notify::can-have-popup", callback: any): number
    once(sigName: "notify::can-have-popup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-have-popup", ...args: any[]): void
    connect(sigName: "notify::has-popup", callback: any): number
    on(sigName: "notify::has-popup", callback: any): number
    once(sigName: "notify::has-popup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-popup", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::popup-is-open", callback: any): number
    on(sigName: "notify::popup-is-open", callback: any): number
    once(sigName: "notify::popup-is-open", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::popup-is-open", ...args: any[]): void
    connect(sigName: "notify::rectangle", callback: any): number
    on(sigName: "notify::rectangle", callback: any): number
    once(sigName: "notify::rectangle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rectangle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class AnnotationTextMarkup extends Annotation {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationTextMarkup

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.AnnotationTextMarkup

    constructor(config?: AnnotationTextMarkup.ConstructorProperties) 
    static highlightNew(page: Page): AnnotationTextMarkup
    static squigglyNew(page: Page): AnnotationTextMarkup
    static strikeOutNew(page: Page): AnnotationTextMarkup
    static underlineNew(page: Page): AnnotationTextMarkup
    _init(config?: AnnotationTextMarkup.ConstructorProperties): void
}

export module Attachment {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of EvinceDocument-3.0.EvinceDocument.Attachment

        ctime?: number | null
        data?: object | null
        description?: string | null
        mtime?: number | null
        name?: string | null
        size?: number | null
    }

}

export interface Attachment {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Attachment

    readonly ctime: number
    readonly data: object
    readonly description: string
    readonly mtime: number
    readonly name: string
    readonly size: number

    // Own fields of EvinceDocument-3.0.EvinceDocument.Attachment

    baseInstance: GObject.Object

    // Owm methods of EvinceDocument-3.0.EvinceDocument.Attachment

    getCreationDate(): GLib.Time
    getDescription(): string
    getMimeType(): string
    getModificationDate(): GLib.Time
    getName(): string
    open(screen: Gdk.Screen, timestamp: number): boolean
    save(file: Gio.File): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Attachment

    connect(sigName: "notify::ctime", callback: any): number
    on(sigName: "notify::ctime", callback: any): number
    once(sigName: "notify::ctime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ctime", ...args: any[]): void
    connect(sigName: "notify::data", callback: any): number
    on(sigName: "notify::data", callback: any): number
    once(sigName: "notify::data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::mtime", callback: any): number
    on(sigName: "notify::mtime", callback: any): number
    once(sigName: "notify::mtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mtime", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
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

export class Attachment extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Attachment

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.Attachment

    constructor(config?: Attachment.ConstructorProperties) 
    constructor(name: string, description: string, mtime: GLib.Time, ctime: GLib.Time, size: number, data: object | null) 
    static new(name: string, description: string, mtime: GLib.Time, ctime: GLib.Time, size: number, data: object | null): Attachment
    _init(config?: Attachment.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Document {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of EvinceDocument-3.0.EvinceDocument.Document

        modified?: boolean | null
    }

}

export interface Document {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Document

    modified: boolean

    // Own fields of EvinceDocument-3.0.EvinceDocument.Document

    base: GObject.Object
    priv: DocumentPrivate

    // Owm methods of EvinceDocument-3.0.EvinceDocument.Document

    checkDimensions(): boolean
    findPageByLabel(pageLabel: string, pageIndex: number): boolean
    // Has conflict: getBackendInfo(info: DocumentBackendInfo): boolean
    // Has conflict: getInfo(): DocumentInfo
    getMaxLabelLen(): number
    getMaxPageSize(width: number, height: number): void
    getMinPageSize(width: number, height: number): void
    getModified(): boolean
    // Has conflict: getNPages(): number
    // Has conflict: getPage(index: number): Page
    // Has conflict: getPageLabel(pageIndex: number): string
    // Has conflict: getPageSize(pageIndex: number): [ /* width */ number, /* height */ number ]
    getSize(): number
    // Has conflict: getThumbnail(rc: RenderContext): GdkPixbuf.Pixbuf
    // Has conflict: getThumbnailSurface(rc: RenderContext): cairo.Surface
    getTitle(): string
    getUri(): string
    hasSynctex(): boolean
    hasTextPageLabels(): boolean
    isPageSizeUniform(): boolean
    // Has conflict: load(uri: string): boolean
    // Has conflict: loadFd(fd: number, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Loads `document` from `uri`.
     * 
     * On failure, %FALSE is returned and `error` is filled in.
     * If the document is encrypted, EV_DEFINE_ERROR_ENCRYPTED is returned.
     * If the backend cannot load the specific document, EV_DOCUMENT_ERROR_INVALID
     * is returned. Other errors are possible too, depending on the backend
     * used to load the document and the URI, e.g. #GIOError, #GFileError, and
     * #GConvertError.
     * @param uri the document's URI
     * @param flags flags from #EvDocumentLoadFlags
     */
    loadFull(uri: string, flags: DocumentLoadFlags): boolean
    // Has conflict: loadGfile(file: Gio.File, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): boolean
    // Has conflict: loadStream(stream: Gio.InputStream, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): boolean
    // Has conflict: render(rc: RenderContext): cairo.Surface
    // Has conflict: save(uri: string): boolean
    /**
     * Set the `document` modification state as `modified`.
     * @param modified a boolean value to set the document as modified or not.
     */
    setModified(modified: boolean): void
    /**
     * Peforms a Synctex backward search to obtain the TeX input file, line and
     * (possibly) column  corresponding to the  position (`x,``y)` (in 72dpi
     * coordinates) in the  `page` of `document`.
     * @param pageIndex the target page
     * @param x X coordinate
     * @param y Y coordinate
     */
    synctexBackwardSearch(pageIndex: number, x: number, y: number): SourceLink

    // Own virtual methods of EvinceDocument-3.0.EvinceDocument.Document

    getBackendInfo(info: DocumentBackendInfo): boolean
    /**
     * Returns the #EvDocumentInfo for the document.
     * @virtual 
     */
    getInfo(): DocumentInfo
    getNPages(): number
    getPage(index: number): Page
    getPageLabel(page: Page): string
    getPageSize(page: Page): [ /* width */ number, /* height */ number ]
    getThumbnail(rc: RenderContext): GdkPixbuf.Pixbuf
    getThumbnailSurface(rc: RenderContext): cairo.Surface
    /**
     * Loads `document` from `uri`.
     * 
     * On failure, %FALSE is returned and `error` is filled in.
     * If the document is encrypted, EV_DEFINE_ERROR_ENCRYPTED is returned.
     * If the backend cannot load the specific document, EV_DOCUMENT_ERROR_INVALID
     * is returned. If the backend does not support the format for the document's
     * contents, EV_DOCUMENT_ERROR_UNSUPPORTED_CONTENT is returned. Other errors
     * are possible too, depending on the backend used to load the document and
     * the URI, e.g. #GIOError, #GFileError, and #GConvertError.
     * @virtual 
     * @param uri the document's URI
     */
    load(uri: string): boolean
    /**
     * Synchronously loads the document from `fd,` which must refer to
     * a regular file.
     * 
     * Note that this function takes ownership of `fd;` you must not ever
     * operate on it again. It will be closed automatically if the document
     * is destroyed, or if this function returns %NULL.
     * 
     * See ev_document_load() for more information.
     * @virtual 
     * @param fd a file descriptor
     * @param flags flags from #EvDocumentLoadFlags
     * @param cancellable a #GCancellable, or %NULL
     */
    loadFd(fd: number, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Synchronously loads the document from `file`.
     * See ev_document_load() for more information.
     * @virtual 
     * @param file a #GFile
     * @param flags flags from #EvDocumentLoadFlags
     * @param cancellable a #GCancellable, or %NULL
     */
    loadGfile(file: Gio.File, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Synchronously loads the document from `stream`.
     * See ev_document_load() for more information.
     * @virtual 
     * @param stream a #GInputStream
     * @param flags flags from #EvDocumentLoadFlags
     * @param cancellable a #GCancellable, or %NULL
     */
    loadStream(stream: Gio.InputStream, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): boolean
    render(rc: RenderContext): cairo.Surface
    /**
     * Saves `document` to `uri`.
     * @virtual 
     * @param uri the target URI
     */
    save(uri: string): boolean
    supportSynctex(): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Document

    connect(sigName: "notify::modified", callback: any): number
    on(sigName: "notify::modified", callback: any): number
    once(sigName: "notify::modified", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Document extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Document

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.Document

    constructor(config?: Document.ConstructorProperties) 
    _init(config?: Document.ConstructorProperties): void
    static docMutexLock(): void
    static docMutexTrylock(): boolean
    static docMutexUnlock(): void
    /**
     * Adds some file filters to `chooser`.
     *  
     * Always add a "All documents" format.
     * 
     * If `document` is not %NULL, adds a #GtkFileFilter for `document'`s MIME type.
     * 
     * If `document` is %NULL, adds a #GtkFileFilter for each document type that evince
     * can handle.
     * @param chooser a #GtkFileChooser
     * @param document a #EvDocument, or %NULL
     */
    static factoryAddFilters(chooser: Gtk.Widget, document: Document): void
    /**
     * Creates a #EvDocument for the document at `uri;` or, if no backend handling
     * the document's type is found, or an error occurred on opening the document,
     * returns %NULL and fills in `error`.
     * If the document is encrypted, it is returned but also `error` is set to
     * %EV_DOCUMENT_ERROR_ENCRYPTED.
     * @param uri an URI
     */
    static factoryGetDocument(uri: string): Document
    /**
     * Synchronously creates a #EvDocument for the document from `fd` using the backend
     * for loading documents of type `mime_type;` or, if the backend does not support
     * loading from file descriptors, or an error occurred on opening the document,
     * returns %NULL and fills in `error`.
     * If the document is encrypted, it is returned but also `error` is set to
     * %EV_DOCUMENT_ERROR_ENCRYPTED.
     * 
     * If the mime type cannot be inferred from the file descriptor, and `mime_type` is %NULL,
     * an error is returned.
     * 
     * Note that this function takes ownership of `fd;` you must not ever
     * operate on it again. It will be closed automatically if the document
     * is destroyed, or if this function returns %NULL.
     * @param fd a file descriptor
     * @param mimeType the mime type
     * @param flags flags from #EvDocumentLoadFlags
     * @param cancellable a #GCancellable, or %NULL
     */
    static factoryGetDocumentForFd(fd: number, mimeType: string, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): Document
    /**
     * Synchronously creates a #EvDocument for the document at `file;` or, if no
     * backend handling the document's type is found, or an error occurred on
     * opening the document, returns %NULL and fills in `error`.
     * If the document is encrypted, it is returned but also `error` is set to
     * %EV_DOCUMENT_ERROR_ENCRYPTED.
     * @param file a #GFile
     * @param flags flags from #EvDocumentLoadFlags
     * @param cancellable a #GCancellable, or %NULL
     */
    static factoryGetDocumentForGfile(file: Gio.File, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): Document
    /**
     * Synchronously creates a #EvDocument for the document from `stream;` or, if no
     * backend handling the document's type is found, or an error occurred
     * on opening the document, returns %NULL and fills in `error`.
     * If the document is encrypted, it is returned but also `error` is set to
     * %EV_DOCUMENT_ERROR_ENCRYPTED.
     * 
     * If `mime_type` is non-%NULL, this overrides any type inferred from the stream.
     * If the mime type cannot be inferred from the stream, and `mime_type` is %NULL,
     * an error is returned.
     * @param stream a #GInputStream
     * @param mimeType a mime type hint
     * @param flags flags from #EvDocumentLoadFlags
     * @param cancellable a #GCancellable, or %NULL
     */
    static factoryGetDocumentForStream(stream: Gio.InputStream, mimeType: string | null, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null): Document
    /**
     * Creates a #EvDocument for the document at `uri;` or, if no backend handling
     * the document's type is found, or an error occurred on opening the document,
     * returns %NULL and fills in `error`.
     * If the document is encrypted, it is returned but also `error` is set to
     * %EV_DOCUMENT_ERROR_ENCRYPTED.
     * @param uri an URI
     * @param flags flags from #EvDocumentLoadFlags
     */
    static factoryGetDocumentFull(uri: string, flags: DocumentLoadFlags): Document
    static fcMutexLock(): void
    static fcMutexTrylock(): boolean
    static fcMutexUnlock(): void
    static miscFormatDate(utime: GLib.Time): string
    /**
     * Determine the preferred date and time representation for the current locale
     * for `dt`.
     * @param dt a #GDateTime
     */
    static miscFormatDatetime(dt: GLib.DateTime): string
    static miscGetLoadingThumbnail(width: number, height: number, invertedColors: boolean): GdkPixbuf.Pixbuf
    static miscGetPageBorderSize(pageWidth: number, pageHeight: number, border: Gtk.Border): void
    /**
     * Get the pointer's x and y position relative to `widget`.
     * @param widget a #GtkWidget
     */
    static miscGetPointerPosition(widget: Gtk.Widget): [ /* x */ number, /* y */ number ]
    static miscGetScreenDpi(screen: Gdk.Screen): number
    static miscGetThumbnailFrame(width: number, height: number, sourcePixbuf: GdkPixbuf.Pixbuf): GdkPixbuf.Pixbuf
    /**
     * Returns sensible guess for DPI of monitor on which given widget has been
     * realized. If HiDPI display, use 192, else 96.
     * Returns 96 as fallback value.
     * @param widget a #GtkWidget
     */
    static miscGetWidgetDpi(widget: Gtk.Widget): number
    static miscInvertPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    static miscInvertSurface(surface: cairo.Surface): void
    static miscPaintOnePage(cr: cairo.Context, widget: Gtk.Widget, area: Gdk.Rectangle, border: Gtk.Border, highlight: boolean, invertedColors: boolean): void
    static miscPixbufFromSurface(surface: cairo.Surface): GdkPixbuf.Pixbuf
    static miscRenderLoadingThumbnail(widget: Gtk.Widget, width: number, height: number, invertedColors: boolean): GdkPixbuf.Pixbuf
    static miscRenderLoadingThumbnailSurface(widget: Gtk.Widget, width: number, height: number, invertedColors: boolean): cairo.Surface
    static miscRenderThumbnailSurfaceWithFrame(widget: Gtk.Widget, sourceSurface: cairo.Surface, width: number, height: number): cairo.Surface
    static miscRenderThumbnailWithFrame(widget: Gtk.Widget, sourcePixbuf: GdkPixbuf.Pixbuf): GdkPixbuf.Pixbuf
    static miscSurfaceFromPixbuf(pixbuf: GdkPixbuf.Pixbuf): cairo.Surface
    static miscSurfaceRotateAndScale(surface: cairo.Surface, destWidth: number, destHeight: number, destRotation: number): cairo.Surface
}

export module FormField {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface FormField {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormField

    parent: GObject.Object
    id: number
    isReadOnly: boolean
    fontSize: number
    activationLink: Link
    page: Page
    changed: boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.FormField

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FormField extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormField

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.FormField

    constructor(config?: FormField.ConstructorProperties) 
    _init(config?: FormField.ConstructorProperties): void
}

export module FormFieldButton {

    // Constructor properties interface

    export interface ConstructorProperties extends FormField.ConstructorProperties {
    }

}

export interface FormFieldButton {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormFieldButton

    parent: FormField & GObject.Object
    type: FormFieldButtonType
    state: boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.FormFieldButton

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FormFieldButton extends FormField {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormFieldButton

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.FormFieldButton

    constructor(config?: FormFieldButton.ConstructorProperties) 
    constructor(id: number, type: FormFieldButtonType) 
    static new(id: number, type: FormFieldButtonType): FormFieldButton
    _init(config?: FormFieldButton.ConstructorProperties): void
}

export module FormFieldChoice {

    // Constructor properties interface

    export interface ConstructorProperties extends FormField.ConstructorProperties {
    }

}

export interface FormFieldChoice {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormFieldChoice

    parent: FormField & GObject.Object
    type: FormFieldChoiceType
    multiSelect: boolean
    isEditable: boolean
    doSpellCheck: boolean
    commitOnSelChange: boolean
    selectedItems: object[]
    text: string

    // Class property signals of EvinceDocument-3.0.EvinceDocument.FormFieldChoice

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FormFieldChoice extends FormField {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormFieldChoice

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.FormFieldChoice

    constructor(config?: FormFieldChoice.ConstructorProperties) 
    constructor(id: number, type: FormFieldChoiceType) 
    static new(id: number, type: FormFieldChoiceType): FormFieldChoice
    _init(config?: FormFieldChoice.ConstructorProperties): void
}

export module FormFieldSignature {

    // Constructor properties interface

    export interface ConstructorProperties extends FormField.ConstructorProperties {
    }

}

export interface FormFieldSignature {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormFieldSignature

    parent: FormField & GObject.Object

    // Class property signals of EvinceDocument-3.0.EvinceDocument.FormFieldSignature

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FormFieldSignature extends FormField {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormFieldSignature

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.FormFieldSignature

    constructor(config?: FormFieldSignature.ConstructorProperties) 
    constructor(id: number) 
    static new(id: number): FormFieldSignature
    _init(config?: FormFieldSignature.ConstructorProperties): void
}

export module FormFieldText {

    // Constructor properties interface

    export interface ConstructorProperties extends FormField.ConstructorProperties {
    }

}

export interface FormFieldText {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormFieldText

    parent: FormField & GObject.Object
    type: FormFieldTextType
    doSpellCheck: boolean
    doScroll: boolean
    comb: boolean
    isRichText: boolean
    isPassword: boolean
    maxLen: number
    text: string

    // Class property signals of EvinceDocument-3.0.EvinceDocument.FormFieldText

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FormFieldText extends FormField {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormFieldText

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.FormFieldText

    constructor(config?: FormFieldText.ConstructorProperties) 
    constructor(id: number, type: FormFieldTextType) 
    static new(id: number, type: FormFieldTextType): FormFieldText
    _init(config?: FormFieldText.ConstructorProperties): void
}

export module Image {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Image {

    // Own fields of EvinceDocument-3.0.EvinceDocument.Image

    baseInstance: GObject.Object
    priv: ImagePrivate

    // Owm methods of EvinceDocument-3.0.EvinceDocument.Image

    getId(): number
    getPage(): number
    getPixbuf(): GdkPixbuf.Pixbuf
    getTmpUri(): string
    saveTmp(pixbuf: GdkPixbuf.Pixbuf): string

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Image

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Image extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Image

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.Image

    constructor(config?: Image.ConstructorProperties) 
    constructor(page: number, imgId: number) 
    static new(page: number, imgId: number): Image
    static newFromPixbuf(pixbuf: GdkPixbuf.Pixbuf): Image
    _init(config?: Image.ConstructorProperties): void
}

export module Layer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Layer {

    // Own fields of EvinceDocument-3.0.EvinceDocument.Layer

    baseInstance: GObject.Object
    priv: LayerPrivate

    // Owm methods of EvinceDocument-3.0.EvinceDocument.Layer

    getRbGroup(): number
    isParent(): boolean

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Layer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Layer extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Layer

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.Layer

    constructor(config?: Layer.ConstructorProperties) 
    constructor(isParent: boolean, rbGroup: number) 
    static new(isParent: boolean, rbGroup: number): Layer
    _init(config?: Layer.ConstructorProperties): void
}

export module Link {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of EvinceDocument-3.0.EvinceDocument.Link

        action?: LinkAction | null
        title?: string | null
    }

}

export interface Link {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Link

    readonly action: LinkAction
    readonly title: string

    // Owm methods of EvinceDocument-3.0.EvinceDocument.Link

    getAction(): LinkAction
    getTitle(): string

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Link

    connect(sigName: "notify::action", callback: any): number
    on(sigName: "notify::action", callback: any): number
    once(sigName: "notify::action", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::action", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Link extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Link

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.Link

    constructor(config?: Link.ConstructorProperties) 
    constructor(title: string, action: LinkAction) 
    static new(title: string, action: LinkAction): Link
    _init(config?: Link.ConstructorProperties): void
}

export module LinkAction {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of EvinceDocument-3.0.EvinceDocument.LinkAction

        dest?: LinkDest | null
        excludeResetFields?: boolean | null
        filename?: string | null
        hideList?: object | null
        name?: string | null
        params?: string | null
        resetFields?: object | null
        showList?: object | null
        toggleList?: object | null
        type?: LinkActionType | null
        uri?: string | null
    }

}

export interface LinkAction {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LinkAction

    readonly dest: LinkDest
    readonly excludeResetFields: boolean
    readonly filename: string
    readonly hideList: object
    readonly name: string
    readonly params: string
    readonly resetFields: object
    readonly showList: object
    readonly toggleList: object
    readonly type: LinkActionType
    readonly uri: string

    // Owm methods of EvinceDocument-3.0.EvinceDocument.LinkAction

    /**
     * Checks whether `a` and `b` are equal.
     * @param b a #EvLinkAction
     */
    equal(b: LinkAction): boolean
    getActionType(): LinkActionType
    getDest(): LinkDest
    getExcludeResetFields(): boolean
    getFilename(): string
    getHideList(): Layer[]
    getName(): string
    getParams(): string
    getShowList(): Layer[]
    getToggleList(): Layer[]
    getUri(): string

    // Class property signals of EvinceDocument-3.0.EvinceDocument.LinkAction

    connect(sigName: "notify::dest", callback: any): number
    on(sigName: "notify::dest", callback: any): number
    once(sigName: "notify::dest", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dest", ...args: any[]): void
    connect(sigName: "notify::exclude-reset-fields", callback: any): number
    on(sigName: "notify::exclude-reset-fields", callback: any): number
    once(sigName: "notify::exclude-reset-fields", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::exclude-reset-fields", ...args: any[]): void
    connect(sigName: "notify::filename", callback: any): number
    on(sigName: "notify::filename", callback: any): number
    once(sigName: "notify::filename", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::hide-list", callback: any): number
    on(sigName: "notify::hide-list", callback: any): number
    once(sigName: "notify::hide-list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hide-list", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::params", callback: any): number
    on(sigName: "notify::params", callback: any): number
    once(sigName: "notify::params", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::params", ...args: any[]): void
    connect(sigName: "notify::reset-fields", callback: any): number
    on(sigName: "notify::reset-fields", callback: any): number
    once(sigName: "notify::reset-fields", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reset-fields", ...args: any[]): void
    connect(sigName: "notify::show-list", callback: any): number
    on(sigName: "notify::show-list", callback: any): number
    once(sigName: "notify::show-list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-list", ...args: any[]): void
    connect(sigName: "notify::toggle-list", callback: any): number
    on(sigName: "notify::toggle-list", callback: any): number
    once(sigName: "notify::toggle-list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::toggle-list", ...args: any[]): void
    connect(sigName: "notify::type", callback: any): number
    on(sigName: "notify::type", callback: any): number
    once(sigName: "notify::type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class LinkAction extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LinkAction

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.LinkAction

    constructor(config?: LinkAction.ConstructorProperties) 
    static newDest(dest: LinkDest): LinkAction
    static newExternalUri(uri: string): LinkAction
    static newLaunch(filename: string, params: string): LinkAction
    static newLayersState(showList: Layer[], hideList: Layer[], toggleList: Layer[]): LinkAction
    static newNamed(name: string): LinkAction
    static newRemote(dest: LinkDest, filename: string): LinkAction
    _init(config?: LinkAction.ConstructorProperties): void
}

export module LinkDest {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of EvinceDocument-3.0.EvinceDocument.LinkDest

        bottom?: number | null
        change?: number | null
        left?: number | null
        named?: string | null
        page?: number | null
        pageLabel?: string | null
        right?: number | null
        top?: number | null
        type?: LinkDestType | null
        zoom?: number | null
    }

}

export interface LinkDest {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LinkDest

    readonly bottom: number
    readonly change: number
    readonly left: number
    readonly named: string
    readonly page: number
    readonly pageLabel: string
    readonly right: number
    readonly top: number
    readonly type: LinkDestType
    readonly zoom: number

    // Owm methods of EvinceDocument-3.0.EvinceDocument.LinkDest

    /**
     * Checks whether `a` and `b` are equal.
     * @param b a #EvLinkDest
     */
    equal(b: LinkDest): boolean
    getBottom(): number
    getDestType(): LinkDestType
    getLeft(changeLeft: boolean): number
    getNamedDest(): string
    getPage(): number
    getPageLabel(): string
    getRight(): number
    getTop(changeTop: boolean): number
    getZoom(changeZoom: boolean): number

    // Class property signals of EvinceDocument-3.0.EvinceDocument.LinkDest

    connect(sigName: "notify::bottom", callback: any): number
    on(sigName: "notify::bottom", callback: any): number
    once(sigName: "notify::bottom", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bottom", ...args: any[]): void
    connect(sigName: "notify::change", callback: any): number
    on(sigName: "notify::change", callback: any): number
    once(sigName: "notify::change", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::change", ...args: any[]): void
    connect(sigName: "notify::left", callback: any): number
    on(sigName: "notify::left", callback: any): number
    once(sigName: "notify::left", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::left", ...args: any[]): void
    connect(sigName: "notify::named", callback: any): number
    on(sigName: "notify::named", callback: any): number
    once(sigName: "notify::named", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::named", ...args: any[]): void
    connect(sigName: "notify::page", callback: any): number
    on(sigName: "notify::page", callback: any): number
    once(sigName: "notify::page", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::page-label", callback: any): number
    on(sigName: "notify::page-label", callback: any): number
    once(sigName: "notify::page-label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::page-label", ...args: any[]): void
    connect(sigName: "notify::right", callback: any): number
    on(sigName: "notify::right", callback: any): number
    once(sigName: "notify::right", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::right", ...args: any[]): void
    connect(sigName: "notify::top", callback: any): number
    on(sigName: "notify::top", callback: any): number
    once(sigName: "notify::top", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::top", ...args: any[]): void
    connect(sigName: "notify::type", callback: any): number
    on(sigName: "notify::type", callback: any): number
    once(sigName: "notify::type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::zoom", callback: any): number
    on(sigName: "notify::zoom", callback: any): number
    once(sigName: "notify::zoom", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::zoom", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class LinkDest extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LinkDest

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.LinkDest

    constructor(config?: LinkDest.ConstructorProperties) 
    static newFit(page: number): LinkDest
    static newFith(page: number, top: number, changeTop: boolean): LinkDest
    static newFitr(page: number, left: number, bottom: number, right: number, top: number): LinkDest
    static newFitv(page: number, left: number, changeLeft: boolean): LinkDest
    static newNamed(namedDest: string): LinkDest
    static newPage(page: number): LinkDest
    static newPageLabel(pageLabel: string): LinkDest
    static newXyz(page: number, left: number, top: number, zoom: number, changeLeft: boolean, changeTop: boolean, changeZoom: boolean): LinkDest
    _init(config?: LinkDest.ConstructorProperties): void
}

export module Media {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Media {

    // Own fields of EvinceDocument-3.0.EvinceDocument.Media

    baseInstance: GObject.Object
    priv: MediaPrivate

    // Owm methods of EvinceDocument-3.0.EvinceDocument.Media

    getPageIndex(): number
    getShowControls(): boolean
    getUri(): string
    setShowControls(showControls: boolean): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Media

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Media extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Media

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.Media

    constructor(config?: Media.ConstructorProperties) 
    static newForUri(page: Page, uri: string): Media
    _init(config?: Media.ConstructorProperties): void
}

export module Page {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Page {

    // Own fields of EvinceDocument-3.0.EvinceDocument.Page

    baseInstance: GObject.Object
    index: number
    backendPage: BackendPage
    backendDestroyFunc: BackendPageDestroyFunc

    // Class property signals of EvinceDocument-3.0.EvinceDocument.Page

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Page extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Page

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.Page

    constructor(config?: Page.ConstructorProperties) 
    constructor(index: number) 
    static new(index: number): Page
    _init(config?: Page.ConstructorProperties): void
}

export module RenderContext {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface RenderContext {

    // Own fields of EvinceDocument-3.0.EvinceDocument.RenderContext

    parent: GObject.Object
    page: Page
    rotation: number
    scale: number
    targetWidth: number
    targetHeight: number

    // Owm methods of EvinceDocument-3.0.EvinceDocument.RenderContext

    computeScaledSize(widthPoints: number, heightPoints: number, scaledWidth: number, scaledHeight: number): void
    computeScales(widthPoints: number, heightPoints: number, scaleX: number, scaleY: number): void
    computeTransformedSize(widthPoints: number, heightPoints: number, transformedWidth: number, transformedHeight: number): void
    setPage(page: Page): void
    setRotation(rotation: number): void
    setScale(scale: number): void
    setTargetSize(targetWidth: number, targetHeight: number): void

    // Class property signals of EvinceDocument-3.0.EvinceDocument.RenderContext

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class RenderContext extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.RenderContext

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.RenderContext

    constructor(config?: RenderContext.ConstructorProperties) 
    constructor(page: Page, rotation: number, scale: number) 
    static new(page: Page, rotation: number, scale: number): RenderContext
    _init(config?: RenderContext.ConstructorProperties): void
}

export module TransitionEffect {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of EvinceDocument-3.0.EvinceDocument.TransitionEffect

        alignment?: TransitionEffectAlignment | null
        angle?: number | null
        direction?: TransitionEffectDirection | null
        duration?: number | null
        durationReal?: number | null
        rectangular?: boolean | null
        scale?: number | null
        type?: TransitionEffectType | null
    }

}

export interface TransitionEffect {

    // Own properties of EvinceDocument-3.0.EvinceDocument.TransitionEffect

    alignment: TransitionEffectAlignment
    angle: number
    direction: TransitionEffectDirection
    duration: number
    durationReal: number
    rectangular: boolean
    scale: number
    type: TransitionEffectType

    // Own fields of EvinceDocument-3.0.EvinceDocument.TransitionEffect

    parentInstance: GObject.Object

    // Class property signals of EvinceDocument-3.0.EvinceDocument.TransitionEffect

    connect(sigName: "notify::alignment", callback: any): number
    on(sigName: "notify::alignment", callback: any): number
    once(sigName: "notify::alignment", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::alignment", ...args: any[]): void
    connect(sigName: "notify::angle", callback: any): number
    on(sigName: "notify::angle", callback: any): number
    once(sigName: "notify::angle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::angle", ...args: any[]): void
    connect(sigName: "notify::direction", callback: any): number
    on(sigName: "notify::direction", callback: any): number
    once(sigName: "notify::direction", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::direction", ...args: any[]): void
    connect(sigName: "notify::duration", callback: any): number
    on(sigName: "notify::duration", callback: any): number
    once(sigName: "notify::duration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::duration-real", callback: any): number
    on(sigName: "notify::duration-real", callback: any): number
    once(sigName: "notify::duration-real", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::duration-real", ...args: any[]): void
    connect(sigName: "notify::rectangular", callback: any): number
    on(sigName: "notify::rectangular", callback: any): number
    once(sigName: "notify::rectangular", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rectangular", ...args: any[]): void
    connect(sigName: "notify::scale", callback: any): number
    on(sigName: "notify::scale", callback: any): number
    once(sigName: "notify::scale", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::type", callback: any): number
    on(sigName: "notify::type", callback: any): number
    once(sigName: "notify::type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class TransitionEffect extends GObject.Object {

    // Own properties of EvinceDocument-3.0.EvinceDocument.TransitionEffect

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.TransitionEffect

    constructor(config?: TransitionEffect.ConstructorProperties) 
    _init(config?: TransitionEffect.ConstructorProperties): void
}

export interface AnnotationAttachmentClass {
}

export abstract class AnnotationAttachmentClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationAttachmentClass

    static name: string
}

export interface AnnotationClass {
}

export abstract class AnnotationClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationClass

    static name: string
}

export interface AnnotationMarkupInterface {
}

export abstract class AnnotationMarkupInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationMarkupInterface

    static name: string
}

export interface AnnotationTextClass {
}

export abstract class AnnotationTextClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationTextClass

    static name: string
}

export interface AnnotationTextMarkupClass {
}

export abstract class AnnotationTextMarkupClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AnnotationTextMarkupClass

    static name: string
}

export interface AsyncRendererInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.AsyncRendererInterface

    baseIface: GObject.TypeInterface
    renderFinished: (renderer: AsyncRenderer, pixbuf: GdkPixbuf.Pixbuf) => void
    renderPixbuf: (renderer: AsyncRenderer, page: number, scale: number, rotation: number) => void
}

export abstract class AsyncRendererInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AsyncRendererInterface

    static name: string
}

export interface AttachmentClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.AttachmentClass

    baseClass: GObject.ObjectClass
}

export abstract class AttachmentClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.AttachmentClass

    static name: string
}

export interface DocumentAnnotationsInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentAnnotationsInterface

    baseIface: GObject.TypeInterface
    getAnnotations: (documentAnnots: DocumentAnnotations, page: Page) => MappingList
    documentIsModified: (documentAnnots: DocumentAnnotations) => boolean
    addAnnotation: (documentAnnots: DocumentAnnotations, annot: Annotation, rect: Rectangle) => void
    saveAnnotation: (documentAnnots: DocumentAnnotations, annot: Annotation, mask: AnnotationsSaveMask) => void
    removeAnnotation: (documentAnnots: DocumentAnnotations, annot: Annotation) => void
    overMarkup: (documentAnnots: DocumentAnnotations, annot: Annotation, x: number, y: number) => AnnotationsOverMarkup
}

export abstract class DocumentAnnotationsInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentAnnotationsInterface

    static name: string
}

export interface DocumentAttachmentsInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentAttachmentsInterface

    baseIface: GObject.TypeInterface
    hasAttachments: (documentAttachments: DocumentAttachments) => boolean
    getAttachments: (documentAttachments: DocumentAttachments) => Attachment[]
}

export abstract class DocumentAttachmentsInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentAttachmentsInterface

    static name: string
}

export interface DocumentBackendInfo {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentBackendInfo

    name: string
    version: string
}

export class DocumentBackendInfo {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentBackendInfo

    static name: string
}

export interface DocumentClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentClass

    baseClass: GObject.ObjectClass
    load: (document: Document, uri: string) => boolean
    save: (document: Document, uri: string) => boolean
    getNPages: (document: Document) => number
    getPage: (document: Document, index: number) => Page
    getPageSize: (document: Document, page: Page) => [ /* width */ number, /* height */ number ]
    getPageLabel: (document: Document, page: Page) => string
    render: (document: Document, rc: RenderContext) => cairo.Surface
    getThumbnail: (document: Document, rc: RenderContext) => GdkPixbuf.Pixbuf
    getInfo: (document: Document) => DocumentInfo
    getBackendInfo: (document: Document, info: DocumentBackendInfo) => boolean
    supportSynctex: (document: Document) => boolean
    loadStream: (document: Document, stream: Gio.InputStream, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null) => boolean
    loadGfile: (document: Document, file: Gio.File, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null) => boolean
    getThumbnailSurface: (document: Document, rc: RenderContext) => cairo.Surface
    loadFd: (document: Document, fd: number, flags: DocumentLoadFlags, cancellable: Gio.Cancellable | null) => boolean
}

export abstract class DocumentClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentClass

    static name: string
}

export interface DocumentFindInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentFindInterface

    baseIface: GObject.TypeInterface
    findText: (documentFind: DocumentFind, page: Page, text: string, caseSensitive: boolean) => Rectangle[]
    findTextWithOptions: (documentFind: DocumentFind, page: Page, text: string, options: FindOptions) => Rectangle[]
    getSupportedOptions: (documentFind: DocumentFind) => FindOptions
}

export abstract class DocumentFindInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentFindInterface

    static name: string
}

export interface DocumentFontsInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentFontsInterface

    baseIface: GObject.TypeInterface
    scan: (documentFonts: DocumentFonts, nPages: number) => boolean
    getProgress: (documentFonts: DocumentFonts) => number
    fillModel: (documentFonts: DocumentFonts, model: Gtk.TreeModel) => void
    getFontsSummary: (documentFonts: DocumentFonts) => string
}

export abstract class DocumentFontsInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentFontsInterface

    static name: string
}

export interface DocumentFormsInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentFormsInterface

    baseIface: GObject.TypeInterface
    getFormFields: (documentForms: DocumentForms, page: Page) => MappingList
    documentIsModified: (documentForms: DocumentForms) => boolean
    formFieldTextGetText: (documentForms: DocumentForms, field: FormField) => string
    formFieldTextSetText: (documentForms: DocumentForms, field: FormField, text: string) => void
    formFieldButtonGetState: (documentForms: DocumentForms, field: FormField) => boolean
    formFieldButtonSetState: (documentForms: DocumentForms, field: FormField, state: boolean) => void
    formFieldChoiceGetItem: (documentForms: DocumentForms, field: FormField, index: number) => string
    formFieldChoiceGetNItems: (documentForms: DocumentForms, field: FormField) => number
    formFieldChoiceIsItemSelected: (documentForms: DocumentForms, field: FormField, index: number) => boolean
    formFieldChoiceSelectItem: (documentForms: DocumentForms, field: FormField, index: number) => void
    formFieldChoiceToggleItem: (documentForms: DocumentForms, field: FormField, index: number) => void
    formFieldChoiceUnselectAll: (documentForms: DocumentForms, field: FormField) => void
    formFieldChoiceSetText: (documentForms: DocumentForms, field: FormField, text: string) => void
    formFieldChoiceGetText: (documentForms: DocumentForms, field: FormField) => string
    resetForm: (documentForms: DocumentForms, action: LinkAction) => void
}

export abstract class DocumentFormsInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentFormsInterface

    static name: string
}

export interface DocumentImagesInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentImagesInterface

    baseIface: GObject.TypeInterface
    getImageMapping: (documentImages: DocumentImages, page: Page) => MappingList
    getImage: (documentImages: DocumentImages, image: Image) => GdkPixbuf.Pixbuf
}

export abstract class DocumentImagesInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentImagesInterface

    static name: string
}

export interface DocumentInfo {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentInfo

    title: string
    format: string
    author: string
    subject: string
    keywords: string
    creator: string
    producer: string
    linearized: string
    security: string
    creationDate: GLib.Time
    modifiedDate: GLib.Time
    layout: DocumentLayout
    mode: DocumentMode
    uiHints: number
    permissions: number
    nPages: number
    paperHeight: number
    paperWidth: number
    license: DocumentLicense
    containsJs: DocumentContainsJS
    fieldsMask: number

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentInfo

    copy(): DocumentInfo
    /**
     * Frees `info`.
     */
    free(): void
    getCreatedDatetime(): GLib.DateTime | null
    getModifiedDatetime(): GLib.DateTime | null
    setFromXmp(xmp: string, size: number): boolean
    takeCreatedDatetime(datetime: GLib.DateTime): void
    takeModifiedDatetime(datetime: GLib.DateTime): void
}

export class DocumentInfo {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentInfo

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentInfo

    constructor() 
    static new(): DocumentInfo
}

export interface DocumentLayersInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentLayersInterface

    baseIface: GObject.TypeInterface
    hasLayers: (documentLayers: DocumentLayers) => boolean
    getLayers: (documentLayers: DocumentLayers) => Gtk.TreeModel
    showLayer: (documentLayers: DocumentLayers, layer: Layer) => void
    hideLayer: (documentLayers: DocumentLayers, layer: Layer) => void
    layerIsVisible: (documentLayers: DocumentLayers, layer: Layer) => boolean
}

export abstract class DocumentLayersInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentLayersInterface

    static name: string
}

export interface DocumentLicense {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentLicense

    text: string
    uri: string
    webStatement: string

    // Owm methods of EvinceDocument-3.0.EvinceDocument.DocumentLicense

    copy(): DocumentLicense
    /**
     * Frees `license`.
     */
    free(): void
    getText(): string | null
    getUri(): string | null
    getWebStatement(): string | null
}

export class DocumentLicense {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentLicense

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.DocumentLicense

    constructor() 
    static new(): DocumentLicense
}

export interface DocumentLinksInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentLinksInterface

    baseIface: GObject.TypeInterface
    hasDocumentLinks: (documentLinks: DocumentLinks) => boolean
    getLinksModel: (documentLinks: DocumentLinks) => Gtk.TreeModel
    getLinks: (documentLinks: DocumentLinks, page: Page) => MappingList
    findLinkDest: (documentLinks: DocumentLinks, linkName: string) => LinkDest
    findLinkPage: (documentLinks: DocumentLinks, linkName: string) => number
}

export abstract class DocumentLinksInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentLinksInterface

    static name: string
}

export interface DocumentMediaInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentMediaInterface

    baseIface: GObject.TypeInterface
    getMediaMapping: (documentMedia: DocumentMedia, page: Page) => MappingList
}

export abstract class DocumentMediaInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentMediaInterface

    static name: string
}

export interface DocumentPrintInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentPrintInterface

    baseIface: GObject.TypeInterface
    printPage: (documentPrint: DocumentPrint, page: Page, cr: cairo.Context) => void
}

export abstract class DocumentPrintInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentPrintInterface

    static name: string
}

export interface DocumentPrivate {
}

export class DocumentPrivate {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentPrivate

    static name: string
}

export interface DocumentSecurityInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentSecurityInterface

    baseIface: GObject.TypeInterface
    hasDocumentSecurity: (documentSecurity: DocumentSecurity) => boolean
    setPassword: (documentSecurity: DocumentSecurity, password: string) => void
}

export abstract class DocumentSecurityInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentSecurityInterface

    static name: string
}

export interface DocumentTextInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentTextInterface

    baseIface: GObject.TypeInterface
    getTextMapping: (documentText: DocumentText, page: Page) => cairo.Region
    getText: (documentText: DocumentText, page: Page) => string
    getTextLayout: (documentText: DocumentText, page: Page, areas: Rectangle, nAreas: number) => boolean
    getTextAttrs: (documentText: DocumentText, page: Page) => Pango.AttrList
}

export abstract class DocumentTextInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentTextInterface

    static name: string
}

export interface DocumentTransitionInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.DocumentTransitionInterface

    baseIface: GObject.TypeInterface
    getPageDuration: (documentTrans: DocumentTransition, page: number) => number
    getEffect: (documentTrans: DocumentTransition, page: number) => TransitionEffect
}

export abstract class DocumentTransitionInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.DocumentTransitionInterface

    static name: string
}

export interface FileExporterContext {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FileExporterContext

    format: FileExporterFormat
    filename: string
    firstPage: number
    lastPage: number
    paperWidth: number
    paperHeight: number
    duplex: boolean
    pagesPerSheet: number
}

export class FileExporterContext {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FileExporterContext

    static name: string
}

export interface FileExporterInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FileExporterInterface

    baseIface: GObject.TypeInterface
    begin: (exporter: FileExporter, fc: FileExporterContext) => void
    beginPage: (exporter: FileExporter) => void
    doPage: (exporter: FileExporter, rc: RenderContext) => void
    endPage: (exporter: FileExporter) => void
    end: (exporter: FileExporter) => void
    getCapabilities: (exporter: FileExporter) => FileExporterCapabilities
}

export abstract class FileExporterInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FileExporterInterface

    static name: string
}

export interface FormFieldButtonClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormFieldButtonClass

    parentClass: FormFieldClass
}

export abstract class FormFieldButtonClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormFieldButtonClass

    static name: string
}

export interface FormFieldChoiceClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormFieldChoiceClass

    parentClass: FormFieldClass
}

export abstract class FormFieldChoiceClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormFieldChoiceClass

    static name: string
}

export interface FormFieldClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormFieldClass

    parentClass: GObject.ObjectClass
}

export abstract class FormFieldClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormFieldClass

    static name: string
}

export interface FormFieldSignatureClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormFieldSignatureClass

    parentClass: FormFieldClass
}

export abstract class FormFieldSignatureClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormFieldSignatureClass

    static name: string
}

export interface FormFieldTextClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.FormFieldTextClass

    parentClass: FormFieldClass
}

export abstract class FormFieldTextClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.FormFieldTextClass

    static name: string
}

export interface ImageClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.ImageClass

    baseClass: GObject.ObjectClass
}

export abstract class ImageClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.ImageClass

    static name: string
}

export interface ImagePrivate {
}

export class ImagePrivate {

    // Own properties of EvinceDocument-3.0.EvinceDocument.ImagePrivate

    static name: string
}

export interface LayerClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.LayerClass

    baseClass: GObject.ObjectClass
}

export abstract class LayerClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LayerClass

    static name: string
}

export interface LayerPrivate {
}

export class LayerPrivate {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LayerPrivate

    static name: string
}

export interface LinkActionClass {
}

export abstract class LinkActionClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LinkActionClass

    static name: string
}

export interface LinkActionPrivate {
}

export class LinkActionPrivate {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LinkActionPrivate

    static name: string
}

export interface LinkClass {
}

export abstract class LinkClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LinkClass

    static name: string
}

export interface LinkDestClass {
}

export abstract class LinkDestClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LinkDestClass

    static name: string
}

export interface LinkDestPrivate {
}

export class LinkDestPrivate {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LinkDestPrivate

    static name: string
}

export interface LinkPrivate {
}

export class LinkPrivate {

    // Own properties of EvinceDocument-3.0.EvinceDocument.LinkPrivate

    static name: string
}

export interface Mapping {

    // Own fields of EvinceDocument-3.0.EvinceDocument.Mapping

    area: Rectangle
    data: object
}

export class Mapping {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Mapping

    static name: string
}

export interface MappingList {

    // Owm methods of EvinceDocument-3.0.EvinceDocument.MappingList

    find(data: object | null): Mapping
    findCustom(data: object | null, func: GLib.CompareFunc): Mapping
    get(x: number, y: number): Mapping
    getData(x: number, y: number): object | null
    getList(): Mapping[]
    getPage(): number
    length(): number
    nth(n: number): Mapping
    ref(): MappingList
    remove(mapping: Mapping): void
    unref(): void
}

export class MappingList {

    // Own properties of EvinceDocument-3.0.EvinceDocument.MappingList

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.MappingList

    constructor(page: number, list: Mapping[], dataDestroyFunc: GLib.DestroyNotify) 
    static new(page: number, list: Mapping[], dataDestroyFunc: GLib.DestroyNotify): MappingList
}

export interface MediaClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.MediaClass

    baseClass: GObject.ObjectClass
}

export abstract class MediaClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.MediaClass

    static name: string
}

export interface MediaPrivate {
}

export class MediaPrivate {

    // Own properties of EvinceDocument-3.0.EvinceDocument.MediaPrivate

    static name: string
}

export interface PageClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.PageClass

    baseClass: GObject.ObjectClass
}

export abstract class PageClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.PageClass

    static name: string
}

export interface Point {

    // Own fields of EvinceDocument-3.0.EvinceDocument.Point

    x: number
    y: number
}

export class Point {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Point

    static name: string
}

export interface Rectangle {

    // Own fields of EvinceDocument-3.0.EvinceDocument.Rectangle

    x1: number
    y1: number
    x2: number
    y2: number

    // Owm methods of EvinceDocument-3.0.EvinceDocument.Rectangle

    copy(): Rectangle
    free(): void
}

export class Rectangle {

    // Own properties of EvinceDocument-3.0.EvinceDocument.Rectangle

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.Rectangle

    constructor() 
    static new(): Rectangle
}

export interface RenderContextClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.RenderContextClass

    klass: GObject.ObjectClass
}

export abstract class RenderContextClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.RenderContextClass

    static name: string
}

export interface SelectionInterface {

    // Own fields of EvinceDocument-3.0.EvinceDocument.SelectionInterface

    baseIface: GObject.TypeInterface
    renderSelection: (selection: Selection, rc: RenderContext, surface: cairo.Surface, points: Rectangle, oldPoints: Rectangle, style: SelectionStyle, text: Gdk.Color, base: Gdk.Color) => void
    getSelectedText: (selection: Selection, page: Page, style: SelectionStyle, points: Rectangle) => string
    getSelectionRegion: (selection: Selection, rc: RenderContext, style: SelectionStyle, points: Rectangle) => cairo.Region
}

export abstract class SelectionInterface {

    // Own properties of EvinceDocument-3.0.EvinceDocument.SelectionInterface

    static name: string
}

export interface SourceLink {

    // Own fields of EvinceDocument-3.0.EvinceDocument.SourceLink

    filename: string
    line: number
    col: number

    // Owm methods of EvinceDocument-3.0.EvinceDocument.SourceLink

    copy(): SourceLink
    free(): void
}

export class SourceLink {

    // Own properties of EvinceDocument-3.0.EvinceDocument.SourceLink

    static name: string

    // Constructors of EvinceDocument-3.0.EvinceDocument.SourceLink

    constructor(filename: string, line: number, col: number) 
    static new(filename: string, line: number, col: number): SourceLink
}

export interface TransitionEffectClass {

    // Own fields of EvinceDocument-3.0.EvinceDocument.TransitionEffectClass

    parentClass: GObject.ObjectClass
}

export abstract class TransitionEffectClass {

    // Own properties of EvinceDocument-3.0.EvinceDocument.TransitionEffectClass

    static name: string
}

export interface TypeInfo {

    // Own fields of EvinceDocument-3.0.EvinceDocument.TypeInfo

    desc: string
    mimeTypes: string
}

export class TypeInfo {

    // Own properties of EvinceDocument-3.0.EvinceDocument.TypeInfo

    static name: string
}

    export type BackendPage = object
    export type BackendPageDestroyFunc = GLib.DestroyNotify