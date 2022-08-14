
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Sushi-1.0
 */

import type * as xlib from './xlib-2.0.js';
import type * as libxml2 from './libxml2-2.0.js';
import type * as freetype2 from './freetype2-2.0.js';
import type * as fontconfig from './fontconfig-2.0.js';
import type * as cairo from './cairo-1.0.js';
import type * as PangoFT2 from './PangoFT2-1.0.js';
import type * as PangoFc from './PangoFc-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as PangoCairo from './PangoCairo-1.0.js';
import type * as Json from './Json-1.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GtkSource from './GtkSource-3.0.js';
import type * as Gtk from './Gtk-3.0.js';
import type * as Gdk from './Gdk-3.0.js';
import type * as GdkPixbuf from './GdkPixbuf-2.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as Atk from './Atk-1.0.js';
import type * as GstTag from './GstTag-0.10.js';
import type * as Gst from './Gst-0.10.js';
import type * as GstPbutils from './GstPbutils-0.10.js';
import type * as GstBase from './GstBase-0.10.js';
import type * as GL from './GL-1.0.js';
import type * as EvinceDocument from './EvinceDocument-3.0.js';
import type * as CoglPango from './CoglPango-1.0.js';
import type * as Cogl from './Cogl-1.0.js';
import type * as Clutter from './Clutter-1.0.js';

export enum SoundPlayerState {
    UNKNOWN,
    IDLE,
    PLAYING,
    DONE,
    ERROR,
}
export function createForeignWindow(xid: number): Gdk.Window
export function createRoundedBackground(): Clutter.Actor
export function querySupportedDocumentTypes(): string[]
export module CoverArtFetcher {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Sushi-1.0.Sushi.CoverArtFetcher

        taglist?: Gst.TagList | null
    }

}

export interface CoverArtFetcher {

    // Own properties of Sushi-1.0.Sushi.CoverArtFetcher

    readonly cover: GdkPixbuf.Pixbuf
    taglist: Gst.TagList

    // Own fields of Sushi-1.0.Sushi.CoverArtFetcher

    parentInstance: GObject.Object
    priv: CoverArtFetcherPrivate

    // Class property signals of Sushi-1.0.Sushi.CoverArtFetcher

    connect(sigName: "notify::cover", callback: any): number
    on(sigName: "notify::cover", callback: any): number
    once(sigName: "notify::cover", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cover", ...args: any[]): void
    connect(sigName: "notify::taglist", callback: any): number
    on(sigName: "notify::taglist", callback: any): number
    once(sigName: "notify::taglist", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::taglist", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CoverArtFetcher extends GObject.Object {

    // Own properties of Sushi-1.0.Sushi.CoverArtFetcher

    static name: string

    // Constructors of Sushi-1.0.Sushi.CoverArtFetcher

    constructor(config?: CoverArtFetcher.ConstructorProperties) 
    constructor(taglist: Gst.TagList) 
    static new(taglist: Gst.TagList): CoverArtFetcher
    _init(config?: CoverArtFetcher.ConstructorProperties): void
}

export module FileLoader {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Sushi-1.0.Sushi.FileLoader

        file?: Gio.File | null
    }

}

export interface FileLoader {

    // Own properties of Sushi-1.0.Sushi.FileLoader

    readonly contentType: string
    file: Gio.File
    readonly icon: GdkPixbuf.Pixbuf
    readonly name: string
    readonly size: string
    readonly time: string

    // Own fields of Sushi-1.0.Sushi.FileLoader

    parentInstance: GObject.Object
    priv: FileLoaderPrivate

    // Owm methods of Sushi-1.0.Sushi.FileLoader

    getContentTypeString(): string
    getDateString(): string
    getDisplayName(): string
    getIcon(): GdkPixbuf.Pixbuf
    getLoading(): boolean
    getSizeString(): string
    stop(): void

    // Class property signals of Sushi-1.0.Sushi.FileLoader

    connect(sigName: "notify::content-type", callback: any): number
    on(sigName: "notify::content-type", callback: any): number
    once(sigName: "notify::content-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::file", callback: any): number
    on(sigName: "notify::file", callback: any): number
    once(sigName: "notify::file", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::icon", callback: any): number
    on(sigName: "notify::icon", callback: any): number
    once(sigName: "notify::icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon", ...args: any[]): void
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
    connect(sigName: "notify::time", callback: any): number
    on(sigName: "notify::time", callback: any): number
    once(sigName: "notify::time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FileLoader extends GObject.Object {

    // Own properties of Sushi-1.0.Sushi.FileLoader

    static name: string

    // Constructors of Sushi-1.0.Sushi.FileLoader

    constructor(config?: FileLoader.ConstructorProperties) 
    constructor(file: Gio.File) 
    static new(file: Gio.File): FileLoader
    _init(config?: FileLoader.ConstructorProperties): void
}

export module FontWidget {

    // Signal callback interfaces

    /**
     * Signal callback interface for `loaded`
     */
    export interface LoadedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.DrawingArea.ConstructorProperties {

        // Own constructor properties of Sushi-1.0.Sushi.FontWidget

        uri?: string | null
    }

}

export interface FontWidget extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Sushi-1.0.Sushi.FontWidget

    uri: string

    // Own fields of Sushi-1.0.Sushi.FontWidget

    parentInstance: any
    priv: FontWidgetPrivate

    // Conflicting methods

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     */
    getName(): string
    /**
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     */
    getName(): string

    // Overloads of getName

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     */
    getName(): string
    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string): void
    /**
     * Widgets can be named, which allows you to refer to them from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for #GtkStyleContext).
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    setName(name: string): void

    // Overloads of setName

    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string): void

    // Own signals of Sushi-1.0.Sushi.FontWidget

    connect(sigName: "loaded", callback: FontWidget.LoadedSignalCallback): number
    on(sigName: "loaded", callback: FontWidget.LoadedSignalCallback): number
    once(sigName: "loaded", callback: FontWidget.LoadedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "loaded", ...args: any[]): void

    // Class property signals of Sushi-1.0.Sushi.FontWidget

    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: any): number
    on(sigName: "notify::app-paintable", callback: any): number
    once(sigName: "notify::app-paintable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: any): number
    on(sigName: "notify::can-default", callback: any): number
    once(sigName: "notify::can-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: any): number
    on(sigName: "notify::can-focus", callback: any): number
    once(sigName: "notify::can-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: any): number
    on(sigName: "notify::composite-child", callback: any): number
    once(sigName: "notify::composite-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: any): number
    on(sigName: "notify::double-buffered", callback: any): number
    once(sigName: "notify::double-buffered", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: any): number
    on(sigName: "notify::events", callback: any): number
    once(sigName: "notify::events", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: any): number
    on(sigName: "notify::expand", callback: any): number
    once(sigName: "notify::expand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: any): number
    on(sigName: "notify::focus-on-click", callback: any): number
    once(sigName: "notify::focus-on-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: any): number
    on(sigName: "notify::halign", callback: any): number
    once(sigName: "notify::halign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: any): number
    on(sigName: "notify::has-default", callback: any): number
    once(sigName: "notify::has-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: any): number
    on(sigName: "notify::has-focus", callback: any): number
    once(sigName: "notify::has-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: any): number
    on(sigName: "notify::has-tooltip", callback: any): number
    once(sigName: "notify::has-tooltip", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: any): number
    on(sigName: "notify::height-request", callback: any): number
    once(sigName: "notify::height-request", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: any): number
    on(sigName: "notify::hexpand", callback: any): number
    once(sigName: "notify::hexpand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: any): number
    on(sigName: "notify::hexpand-set", callback: any): number
    once(sigName: "notify::hexpand-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: any): number
    on(sigName: "notify::is-focus", callback: any): number
    once(sigName: "notify::is-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: any): number
    on(sigName: "notify::margin", callback: any): number
    once(sigName: "notify::margin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: any): number
    on(sigName: "notify::margin-bottom", callback: any): number
    once(sigName: "notify::margin-bottom", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: any): number
    on(sigName: "notify::margin-end", callback: any): number
    once(sigName: "notify::margin-end", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: any): number
    on(sigName: "notify::margin-left", callback: any): number
    once(sigName: "notify::margin-left", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: any): number
    on(sigName: "notify::margin-right", callback: any): number
    once(sigName: "notify::margin-right", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: any): number
    on(sigName: "notify::margin-start", callback: any): number
    once(sigName: "notify::margin-start", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: any): number
    on(sigName: "notify::margin-top", callback: any): number
    once(sigName: "notify::margin-top", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: any): number
    on(sigName: "notify::no-show-all", callback: any): number
    once(sigName: "notify::no-show-all", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: any): number
    on(sigName: "notify::receives-default", callback: any): number
    once(sigName: "notify::receives-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: any): number
    on(sigName: "notify::scale-factor", callback: any): number
    once(sigName: "notify::scale-factor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: any): number
    on(sigName: "notify::sensitive", callback: any): number
    once(sigName: "notify::sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: any): number
    on(sigName: "notify::style", callback: any): number
    once(sigName: "notify::style", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: any): number
    on(sigName: "notify::tooltip-markup", callback: any): number
    once(sigName: "notify::tooltip-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: any): number
    on(sigName: "notify::tooltip-text", callback: any): number
    once(sigName: "notify::tooltip-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: any): number
    on(sigName: "notify::valign", callback: any): number
    once(sigName: "notify::valign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: any): number
    on(sigName: "notify::vexpand", callback: any): number
    once(sigName: "notify::vexpand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: any): number
    on(sigName: "notify::vexpand-set", callback: any): number
    once(sigName: "notify::vexpand-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: any): number
    on(sigName: "notify::visible", callback: any): number
    once(sigName: "notify::visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: any): number
    on(sigName: "notify::width-request", callback: any): number
    once(sigName: "notify::width-request", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: any): number
    on(sigName: "notify::window", callback: any): number
    once(sigName: "notify::window", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FontWidget extends Gtk.DrawingArea {

    // Own properties of Sushi-1.0.Sushi.FontWidget

    static name: string

    // Constructors of Sushi-1.0.Sushi.FontWidget

    constructor(config?: FontWidget.ConstructorProperties) 
    constructor(uri: string) 
    static new(uri: string): FontWidget

    // Overloads of new

    /**
     * Creates a new drawing area.
     * @constructor 
     */
    static new(): Gtk.DrawingArea
    _init(config?: FontWidget.ConstructorProperties): void
}

export module PdfLoader {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Sushi-1.0.Sushi.PdfLoader

        uri?: string | null
    }

}

export interface PdfLoader {

    // Own properties of Sushi-1.0.Sushi.PdfLoader

    readonly document: EvinceDocument.Document
    uri: string

    // Own fields of Sushi-1.0.Sushi.PdfLoader

    parentInstance: GObject.Object
    priv: PdfLoaderPrivate

    // Owm methods of Sushi-1.0.Sushi.PdfLoader

    cleanupDocument(): void
    getMaxPageSize(): [ /* width */ number, /* height */ number ]

    // Class property signals of Sushi-1.0.Sushi.PdfLoader

    connect(sigName: "notify::document", callback: any): number
    on(sigName: "notify::document", callback: any): number
    once(sigName: "notify::document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document", ...args: any[]): void
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

export class PdfLoader extends GObject.Object {

    // Own properties of Sushi-1.0.Sushi.PdfLoader

    static name: string

    // Constructors of Sushi-1.0.Sushi.PdfLoader

    constructor(config?: PdfLoader.ConstructorProperties) 
    constructor(uri: string) 
    static new(uri: string): PdfLoader
    _init(config?: PdfLoader.ConstructorProperties): void
}

export module SoundPlayer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Sushi-1.0.Sushi.SoundPlayer

        playing?: boolean | null
        progress?: number | null
        uri?: string | null
    }

}

export interface SoundPlayer {

    // Own properties of Sushi-1.0.Sushi.SoundPlayer

    readonly duration: number
    playing: boolean
    progress: number
    readonly state: SoundPlayerState
    readonly taglist: Gst.TagList
    uri: string

    // Own fields of Sushi-1.0.Sushi.SoundPlayer

    parentInstance: GObject.Object
    priv: SoundPlayerPrivate

    // Class property signals of Sushi-1.0.Sushi.SoundPlayer

    connect(sigName: "notify::duration", callback: any): number
    on(sigName: "notify::duration", callback: any): number
    once(sigName: "notify::duration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::playing", callback: any): number
    on(sigName: "notify::playing", callback: any): number
    once(sigName: "notify::playing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::playing", ...args: any[]): void
    connect(sigName: "notify::progress", callback: any): number
    on(sigName: "notify::progress", callback: any): number
    once(sigName: "notify::progress", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::taglist", callback: any): number
    on(sigName: "notify::taglist", callback: any): number
    once(sigName: "notify::taglist", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::taglist", ...args: any[]): void
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

export class SoundPlayer extends GObject.Object {

    // Own properties of Sushi-1.0.Sushi.SoundPlayer

    static name: string

    // Constructors of Sushi-1.0.Sushi.SoundPlayer

    constructor(config?: SoundPlayer.ConstructorProperties) 
    _init(config?: SoundPlayer.ConstructorProperties): void
}

export module TextLoader {

    // Signal callback interfaces

    /**
     * Signal callback interface for `loaded`
     */
    export interface LoadedSignalCallback {
        (object: GtkSource.Buffer): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Sushi-1.0.Sushi.TextLoader

        uri?: string | null
    }

}

export interface TextLoader {

    // Own properties of Sushi-1.0.Sushi.TextLoader

    uri: string

    // Own fields of Sushi-1.0.Sushi.TextLoader

    parentInstance: GObject.Object
    priv: TextLoaderPrivate

    // Own signals of Sushi-1.0.Sushi.TextLoader

    connect(sigName: "loaded", callback: TextLoader.LoadedSignalCallback): number
    on(sigName: "loaded", callback: TextLoader.LoadedSignalCallback): number
    once(sigName: "loaded", callback: TextLoader.LoadedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "loaded", ...args: any[]): void

    // Class property signals of Sushi-1.0.Sushi.TextLoader

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

export class TextLoader extends GObject.Object {

    // Own properties of Sushi-1.0.Sushi.TextLoader

    static name: string

    // Constructors of Sushi-1.0.Sushi.TextLoader

    constructor(config?: TextLoader.ConstructorProperties) 
    constructor(uri: string) 
    static new(uri: string): TextLoader
    _init(config?: TextLoader.ConstructorProperties): void
}

export interface CoverArtFetcherClass {

    // Own fields of Sushi-1.0.Sushi.CoverArtFetcherClass

    parentClass: GObject.ObjectClass
}

export abstract class CoverArtFetcherClass {

    // Own properties of Sushi-1.0.Sushi.CoverArtFetcherClass

    static name: string
}

export interface CoverArtFetcherPrivate {
}

export class CoverArtFetcherPrivate {

    // Own properties of Sushi-1.0.Sushi.CoverArtFetcherPrivate

    static name: string
}

export interface FileLoaderClass {

    // Own fields of Sushi-1.0.Sushi.FileLoaderClass

    parentClass: GObject.ObjectClass
}

export abstract class FileLoaderClass {

    // Own properties of Sushi-1.0.Sushi.FileLoaderClass

    static name: string
}

export interface FileLoaderPrivate {
}

export class FileLoaderPrivate {

    // Own properties of Sushi-1.0.Sushi.FileLoaderPrivate

    static name: string
}

export interface FontWidgetClass {

    // Own fields of Sushi-1.0.Sushi.FontWidgetClass

    parentClass: Gtk.DrawingAreaClass
}

export abstract class FontWidgetClass {

    // Own properties of Sushi-1.0.Sushi.FontWidgetClass

    static name: string
}

export interface FontWidgetPrivate {
}

export class FontWidgetPrivate {

    // Own properties of Sushi-1.0.Sushi.FontWidgetPrivate

    static name: string
}

export interface PdfLoaderClass {

    // Own fields of Sushi-1.0.Sushi.PdfLoaderClass

    parentClass: GObject.ObjectClass
}

export abstract class PdfLoaderClass {

    // Own properties of Sushi-1.0.Sushi.PdfLoaderClass

    static name: string
}

export interface PdfLoaderPrivate {
}

export class PdfLoaderPrivate {

    // Own properties of Sushi-1.0.Sushi.PdfLoaderPrivate

    static name: string
}

export interface SoundPlayerClass {

    // Own fields of Sushi-1.0.Sushi.SoundPlayerClass

    parentClass: GObject.ObjectClass
}

export abstract class SoundPlayerClass {

    // Own properties of Sushi-1.0.Sushi.SoundPlayerClass

    static name: string
}

export interface SoundPlayerPrivate {
}

export class SoundPlayerPrivate {

    // Own properties of Sushi-1.0.Sushi.SoundPlayerPrivate

    static name: string
}

export interface TextLoaderClass {

    // Own fields of Sushi-1.0.Sushi.TextLoaderClass

    parentClass: GObject.ObjectClass
}

export abstract class TextLoaderClass {

    // Own properties of Sushi-1.0.Sushi.TextLoaderClass

    static name: string
}

export interface TextLoaderPrivate {
}

export class TextLoaderPrivate {

    // Own properties of Sushi-1.0.Sushi.TextLoaderPrivate

    static name: string
}
