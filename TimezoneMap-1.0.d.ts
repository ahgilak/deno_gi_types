
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * TimezoneMap-1.0
 */

import type * as xlib from './xlib-2.0.js';
import type * as cairo from './cairo-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Json from './Json-1.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as Gtk from './Gtk-3.0.js';
import type * as Gdk from './Gdk-3.0.js';
import type * as GdkPixbuf from './GdkPixbuf-2.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as Atk from './Atk-1.0.js';

export const TIMEZONE_COMPLETION_ADMIN1: number
export const TIMEZONE_COMPLETION_COUNTRY: number
export const TIMEZONE_COMPLETION_LAST: number
export const TIMEZONE_COMPLETION_LATITUDE: number
export const TIMEZONE_COMPLETION_LONGITUDE: number
export const TIMEZONE_COMPLETION_NAME: number
export const TIMEZONE_COMPLETION_ZONE: number
export module TimezoneCompletion {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Buildable.ConstructorProperties, Gtk.CellLayout.ConstructorProperties, Gtk.EntryCompletion.ConstructorProperties {
    }

}

export interface TimezoneCompletion extends Gtk.Buildable, Gtk.CellLayout {

    // Own fields of TimezoneMap-1.0.TimezoneMap.TimezoneCompletion

    parent: Gtk.EntryCompletion
    priv: TimezoneCompletionPrivate

    // Owm methods of TimezoneMap-1.0.TimezoneMap.TimezoneCompletion

    watchEntry(entry: Gtk.Entry): void

    // Class property signals of TimezoneMap-1.0.TimezoneMap.TimezoneCompletion

    connect(sigName: "notify::cell-area", callback: any): number
    on(sigName: "notify::cell-area", callback: any): number
    once(sigName: "notify::cell-area", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cell-area", ...args: any[]): void
    connect(sigName: "notify::inline-completion", callback: any): number
    on(sigName: "notify::inline-completion", callback: any): number
    once(sigName: "notify::inline-completion", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::inline-completion", ...args: any[]): void
    connect(sigName: "notify::inline-selection", callback: any): number
    on(sigName: "notify::inline-selection", callback: any): number
    once(sigName: "notify::inline-selection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::inline-selection", ...args: any[]): void
    connect(sigName: "notify::minimum-key-length", callback: any): number
    on(sigName: "notify::minimum-key-length", callback: any): number
    once(sigName: "notify::minimum-key-length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::minimum-key-length", ...args: any[]): void
    connect(sigName: "notify::model", callback: any): number
    on(sigName: "notify::model", callback: any): number
    once(sigName: "notify::model", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::popup-completion", callback: any): number
    on(sigName: "notify::popup-completion", callback: any): number
    once(sigName: "notify::popup-completion", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::popup-completion", ...args: any[]): void
    connect(sigName: "notify::popup-set-width", callback: any): number
    on(sigName: "notify::popup-set-width", callback: any): number
    once(sigName: "notify::popup-set-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::popup-set-width", ...args: any[]): void
    connect(sigName: "notify::popup-single-match", callback: any): number
    on(sigName: "notify::popup-single-match", callback: any): number
    once(sigName: "notify::popup-single-match", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::popup-single-match", ...args: any[]): void
    connect(sigName: "notify::text-column", callback: any): number
    on(sigName: "notify::text-column", callback: any): number
    once(sigName: "notify::text-column", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-column", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class TimezoneCompletion extends Gtk.EntryCompletion {

    // Own properties of TimezoneMap-1.0.TimezoneMap.TimezoneCompletion

    static name: string

    // Constructors of TimezoneMap-1.0.TimezoneMap.TimezoneCompletion

    constructor(config?: TimezoneCompletion.ConstructorProperties) 
    constructor() 
    static new(): TimezoneCompletion

    // Overloads of new

    /**
     * Creates a new #GtkEntryCompletion object.
     * @constructor 
     */
    static new(): Gtk.EntryCompletion
    _init(config?: TimezoneCompletion.ConstructorProperties): void
}

export module TimezoneLocation {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of TimezoneMap-1.0.TimezoneMap.TimezoneLocation

        comment?: string | null
        country?: string | null
        dist?: number | null
        latitude?: number | null
        longitude?: number | null
        zone?: string | null
    }

}

export interface TimezoneLocation {

    // Own properties of TimezoneMap-1.0.TimezoneMap.TimezoneLocation

    comment: string
    country: string
    dist: number
    latitude: number
    longitude: number
    zone: string

    // Own fields of TimezoneMap-1.0.TimezoneMap.TimezoneLocation

    parent: GObject.Object
    priv: TimezoneLocationPrivate

    // Class property signals of TimezoneMap-1.0.TimezoneMap.TimezoneLocation

    connect(sigName: "notify::Comment", callback: any): number
    on(sigName: "notify::Comment", callback: any): number
    once(sigName: "notify::Comment", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::Comment", ...args: any[]): void
    connect(sigName: "notify::country", callback: any): number
    on(sigName: "notify::country", callback: any): number
    once(sigName: "notify::country", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::country", ...args: any[]): void
    connect(sigName: "notify::dist", callback: any): number
    on(sigName: "notify::dist", callback: any): number
    once(sigName: "notify::dist", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dist", ...args: any[]): void
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
    connect(sigName: "notify::zone", callback: any): number
    on(sigName: "notify::zone", callback: any): number
    once(sigName: "notify::zone", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::zone", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class TimezoneLocation extends GObject.Object {

    // Own properties of TimezoneMap-1.0.TimezoneMap.TimezoneLocation

    static name: string

    // Constructors of TimezoneMap-1.0.TimezoneMap.TimezoneLocation

    constructor(config?: TimezoneLocation.ConstructorProperties) 
    constructor() 
    static new(): TimezoneLocation
    _init(config?: TimezoneLocation.ConstructorProperties): void
}

export module TimezoneMap {

    // Signal callback interfaces

    /**
     * Signal callback interface for `location-changed`
     */
    export interface LocationChangedSignalCallback {
        (object: TimezoneLocation): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Widget.ConstructorProperties {
    }

}

export interface TimezoneMap extends Atk.ImplementorIface, Gtk.Buildable {

    // Own fields of TimezoneMap-1.0.TimezoneMap.TimezoneMap

    parent: Gtk.Widget & Gtk.Container
    priv: TimezoneMapPrivate

    // Owm methods of TimezoneMap-1.0.TimezoneMap.TimezoneMap

    getTimezoneAtCoords(lon: number, lat: number): string
    setCoords(lon: number, lat: number): void
    setTimezone(timezone: string): void
    setWatermark(watermark: string): void

    // Conflicting methods

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
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     */
    getName(): string
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
    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string): void

    // Own signals of TimezoneMap-1.0.TimezoneMap.TimezoneMap

    connect(sigName: "location-changed", callback: TimezoneMap.LocationChangedSignalCallback): number
    on(sigName: "location-changed", callback: TimezoneMap.LocationChangedSignalCallback): number
    once(sigName: "location-changed", callback: TimezoneMap.LocationChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "location-changed", ...args: any[]): void

    // Class property signals of TimezoneMap-1.0.TimezoneMap.TimezoneMap

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

export class TimezoneMap extends Gtk.Widget {

    // Own properties of TimezoneMap-1.0.TimezoneMap.TimezoneMap

    static name: string

    // Constructors of TimezoneMap-1.0.TimezoneMap.TimezoneMap

    constructor(config?: TimezoneMap.ConstructorProperties) 
    constructor() 
    static new(): TimezoneMap
    _init(config?: TimezoneMap.ConstructorProperties): void
}

export interface TimezoneCompletionClass {

    // Own fields of TimezoneMap-1.0.TimezoneMap.TimezoneCompletionClass

    parentClass: Gtk.EntryCompletionClass
}

export abstract class TimezoneCompletionClass {

    // Own properties of TimezoneMap-1.0.TimezoneMap.TimezoneCompletionClass

    static name: string
}

export interface TimezoneCompletionPrivate {
}

export class TimezoneCompletionPrivate {

    // Own properties of TimezoneMap-1.0.TimezoneMap.TimezoneCompletionPrivate

    static name: string
}

export interface TimezoneLocationClass {

    // Own fields of TimezoneMap-1.0.TimezoneMap.TimezoneLocationClass

    parentClass: GObject.ObjectClass
}

export abstract class TimezoneLocationClass {

    // Own properties of TimezoneMap-1.0.TimezoneMap.TimezoneLocationClass

    static name: string
}

export interface TimezoneLocationPrivate {
}

export class TimezoneLocationPrivate {

    // Own properties of TimezoneMap-1.0.TimezoneMap.TimezoneLocationPrivate

    static name: string
}

export interface TimezoneMapClass {

    // Own fields of TimezoneMap-1.0.TimezoneMap.TimezoneMapClass

    parentClass: Gtk.WidgetClass
}

export abstract class TimezoneMapClass {

    // Own properties of TimezoneMap-1.0.TimezoneMap.TimezoneMapClass

    static name: string
}

export interface TimezoneMapPrivate {
}

export class TimezoneMapPrivate {

    // Own properties of TimezoneMap-1.0.TimezoneMap.TimezoneMapPrivate

    static name: string
}
