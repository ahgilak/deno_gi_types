
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Granite-7.0
 */

import type * as Gtk from './Gtk-4.0.js';
import type * as Gsk from './Gsk-4.0.js';
import type * as Graphene from './Graphene-1.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Gdk from './Gdk-4.0.js';
import type * as cairo from './cairo-1.0.js';
import type * as PangoCairo from './PangoCairo-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GdkPixbuf from './GdkPixbuf-2.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as Gee from './Gee-0.8.js';

export enum ServicesContractorError {
    SERVICE_NOT_AVAILABLE,
}
export enum SettingsPageStatusType {
    ERROR,
    OFFLINE,
    SUCCESS,
    WARNING,
    NONE,
}
export enum SettingsColorScheme {
    NO_PREFERENCE,
    DARK,
    LIGHT,
}
export const STYLE_CLASS_ACCENT: string
export const STYLE_CLASS_BACK_BUTTON: string
export const STYLE_CLASS_BADGE: string
export const STYLE_CLASS_CARD: string
export const STYLE_CLASS_CHECKERBOARD: string
export const STYLE_CLASS_CIRCULAR: string
export const STYLE_CLASS_COLOR_BUTTON: string
export const STYLE_CLASS_DEFAULT_DECORATION: string
export const STYLE_CLASS_DESTRUCTIVE_ACTION: string
export const STYLE_CLASS_DIALOG_CONTENT_AREA: string
export const STYLE_CLASS_H1_LABEL: string
export const STYLE_CLASS_H2_LABEL: string
export const STYLE_CLASS_H3_LABEL: string
export const STYLE_CLASS_H4_LABEL: string
export const STYLE_CLASS_KEYCAP: string
export const STYLE_CLASS_MODE_SWITCH: string
export const STYLE_CLASS_OSD: string
export const STYLE_CLASS_ROUNDED: string
export const STYLE_CLASS_SMALL_LABEL: string
export const STYLE_CLASS_TERMINAL: string
export const STYLE_CLASS_TITLE_LABEL: string
export const STYLE_CLASS_WARMTH: string
export const STYLE_CLASS_TEMPERATURE: string
export const STYLE_CLASS_LINKED: string
export const STYLE_CLASS_MENU: string
export const STYLE_CLASS_MENUITEM: string
export const STYLE_CLASS_DIM_LABEL: string
export const STYLE_CLASS_ERROR: string
export const STYLE_CLASS_FLAT: string
export const STYLE_CLASS_MESSAGE_DIALOG: string
export const STYLE_CLASS_SUGGESTED_ACTION: string
export const STYLE_CLASS_VIEW: string
export const STYLE_CLASS_WARNING: string
export const TRANSITION_DURATION_CLOSE: number
export const TRANSITION_DURATION_IN_PLACE: number
export const TRANSITION_DURATION_OPEN: number
export const TOOLTIP_SECONDARY_TEXT_MARKUP: string
export function dateTimeGetDefaultTimeFormat(is12h: boolean, withSecond: boolean): string
export function dateTimeGetRelativeDatetime(dateTime: GLib.DateTime): string
export function dateTimeIsSameDay(day1: GLib.DateTime, day2: GLib.DateTime): boolean
export function dateTimeGetDefaultDateFormat(withWeekday: boolean, withDay: boolean, withYear: boolean): string
export function dateTimeSecondsToTime(seconds: number): string
export function servicesApplicationSetBadge(count: number, callback: Gio.AsyncReadyCallback | null): void
export function servicesApplicationSetBadgeFinish(res: Gio.AsyncResult): boolean
export function servicesApplicationSetBadgeVisible(visible: boolean, callback: Gio.AsyncReadyCallback | null): void
export function servicesApplicationSetBadgeVisibleFinish(res: Gio.AsyncResult): boolean
export function servicesApplicationSetProgress(progress: number, callback: Gio.AsyncReadyCallback | null): void
export function servicesApplicationSetProgressFinish(res: Gio.AsyncResult): boolean
export function servicesApplicationSetProgressVisible(visible: boolean, callback: Gio.AsyncReadyCallback | null): void
export function servicesApplicationSetProgressVisibleFinish(res: Gio.AsyncResult): boolean
export function widgetsUtilsSetColorPrimary(window: Gtk.Widget, color: Gdk.RGBA, priority: number): Gtk.CssProvider | null
export function accelToString(accel: string | null): string
export function markupAccelTooltip(accels: string[] | null, description: string | null): string
export function contrastingForegroundColor(bgColor: Gdk.RGBA): /* result */ Gdk.RGBA
export module ServicesContract {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ServicesContract extends GObject.Object {

    // Owm methods of Granite-7.0.Granite.ServicesContract

    // Has conflict: getDisplayName(): string
    // Has conflict: getDescription(): string
    // Has conflict: getIcon(): Gio.Icon
    // Has conflict: executeWithFile(file: Gio.File): void
    // Has conflict: executeWithFiles(files: Gio.File[]): void

    // Own virtual methods of Granite-7.0.Granite.ServicesContract

    getDisplayName(): string
    getDescription(): string
    getIcon(): Gio.Icon
    executeWithFile(file: Gio.File): void
    executeWithFiles(files: Gio.File[]): void

    // Class property signals of Granite-7.0.Granite.ServicesContract

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ServicesContract {

    // Own properties of Granite-7.0.Granite.ServicesContract

    static name: string

    // Constructors of Granite-7.0.Granite.ServicesContract

    constructor(config?: ServicesContract.ConstructorProperties) 
    _init(config?: ServicesContract.ConstructorProperties): void
}

export module ServicesSettingsSerializable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ServicesSettingsSerializable extends GObject.Object {

    // Owm methods of Granite-7.0.Granite.ServicesSettingsSerializable

    // Has conflict: settingsSerialize(): string
    // Has conflict: settingsDeserialize(s: string): void

    // Own virtual methods of Granite-7.0.Granite.ServicesSettingsSerializable

    settingsSerialize(): string
    settingsDeserialize(s: string): void

    // Class property signals of Granite-7.0.Granite.ServicesSettingsSerializable

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ServicesSettingsSerializable {

    // Own properties of Granite-7.0.Granite.ServicesSettingsSerializable

    static name: string

    // Constructors of Granite-7.0.Granite.ServicesSettingsSerializable

    constructor(config?: ServicesSettingsSerializable.ConstructorProperties) 
    _init(config?: ServicesSettingsSerializable.ConstructorProperties): void
}

// Workaround
/** @ignore */
export module GraniteServicesSettingsSerializable {
    export interface ConstructorProperties extends ServicesSettingsSerializable.ConstructorProperties {}
}
/** @ignore */
export interface GraniteServicesSettingsSerializable extends ServicesSettingsSerializable {}
export module DrawingBufferSurface {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Granite-7.0.Granite.DrawingBufferSurface

        surface?: cairo.Surface | null
        width?: number | null
        height?: number | null
    }

}

export interface DrawingBufferSurface {

    // Own properties of Granite-7.0.Granite.DrawingBufferSurface

    surface: cairo.Surface
    width: number
    height: number
    readonly context: cairo.Context

    // Owm methods of Granite-7.0.Granite.DrawingBufferSurface

    getSurface(): cairo.Surface
    getWidth(): number
    getHeight(): number
    getContext(): cairo.Context
    clear(): void
    loadToPixbuf(): GdkPixbuf.Pixbuf
    averageColor(): DrawingColor
    fastBlur(radius: number, processCount: number): void
    exponentialBlur(radius: number): void
    gaussianBlur(radius: number): void

    // Class property signals of Granite-7.0.Granite.DrawingBufferSurface

    connect(sigName: "notify::surface", callback: any): number
    on(sigName: "notify::surface", callback: any): number
    once(sigName: "notify::surface", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: "notify::width", callback: any): number
    on(sigName: "notify::width", callback: any): number
    once(sigName: "notify::width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::height", callback: any): number
    on(sigName: "notify::height", callback: any): number
    once(sigName: "notify::height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::context", callback: any): number
    on(sigName: "notify::context", callback: any): number
    once(sigName: "notify::context", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DrawingBufferSurface extends GObject.Object {

    // Own properties of Granite-7.0.Granite.DrawingBufferSurface

    static name: string

    // Constructors of Granite-7.0.Granite.DrawingBufferSurface

    constructor(config?: DrawingBufferSurface.ConstructorProperties) 
    constructor(width: number, height: number) 
    static new(width: number, height: number): DrawingBufferSurface
    static withSurface(width: number, height: number, model: cairo.Surface): DrawingBufferSurface
    static withBufferSurface(width: number, height: number, model: DrawingBufferSurface): DrawingBufferSurface
    _init(config?: DrawingBufferSurface.ConstructorProperties): void
}

export module DrawingColor {

    // Constructor properties interface

    export interface ConstructorProperties extends GraniteServicesSettingsSerializable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface DrawingColor extends GraniteServicesSettingsSerializable {

    // Own fields of Granite-7.0.Granite.DrawingColor

    r: number
    g: number
    b: number
    a: number

    // Owm methods of Granite-7.0.Granite.DrawingColor

    setHue(hue: number): DrawingColor
    setSat(sat: number): DrawingColor
    setVal(val: number): DrawingColor
    setAlpha(alpha: number): DrawingColor
    getHue(): number
    getSat(): number
    getVal(): number
    addHue(val: number): DrawingColor
    setMinSat(sat: number): DrawingColor
    setMinValue(val: number): DrawingColor
    setMaxSat(sat: number): DrawingColor
    setMaxVal(val: number): DrawingColor
    multiplySat(amount: number): DrawingColor
    brightenVal(amount: number): DrawingColor
    darkenVal(amount: number): DrawingColor
    darkenBySat(amount: number): DrawingColor
    toString(): string
    toInt(): number

    // Class property signals of Granite-7.0.Granite.DrawingColor

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DrawingColor extends GObject.Object {

    // Own properties of Granite-7.0.Granite.DrawingColor

    static name: string

    // Constructors of Granite-7.0.Granite.DrawingColor

    constructor(config?: DrawingColor.ConstructorProperties) 
    constructor(r: number, g: number, b: number, a: number) 
    static new(r: number, g: number, b: number, a: number): DrawingColor
    static fromRgba(color: Gdk.RGBA): DrawingColor
    static fromString(color: string): DrawingColor
    static fromInt(color: number): DrawingColor
    _init(config?: DrawingColor.ConstructorProperties): void
    static alphaFromInt(color: number): number
    static redFromInt(color: number): number
    static greenFromInt(color: number): number
    static blueFromInt(color: number): number
}

export module DrawingUtilities {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DrawingUtilities {

    // Class property signals of Granite-7.0.Granite.DrawingUtilities

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DrawingUtilities extends GObject.Object {

    // Own properties of Granite-7.0.Granite.DrawingUtilities

    static name: string

    // Constructors of Granite-7.0.Granite.DrawingUtilities

    constructor(config?: DrawingUtilities.ConstructorProperties) 
    constructor() 
    static new(): DrawingUtilities
    _init(config?: DrawingUtilities.ConstructorProperties): void
    static cairoRoundedRectangle(cr: cairo.Context, x: number, y: number, width: number, height: number, radius: number): void
    static averageColor(source: GdkPixbuf.Pixbuf): DrawingColor
}

export module ServicesContractorProxy {

    // Signal callback interfaces

    /**
     * Signal callback interface for `contracts-changed`
     */
    export interface ContractsChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ServicesContractorProxy {

    // Own signals of Granite-7.0.Granite.ServicesContractorProxy

    connect(sigName: "contracts-changed", callback: ServicesContractorProxy.ContractsChangedSignalCallback): number
    on(sigName: "contracts-changed", callback: ServicesContractorProxy.ContractsChangedSignalCallback): number
    once(sigName: "contracts-changed", callback: ServicesContractorProxy.ContractsChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "contracts-changed", ...args: any[]): void

    // Class property signals of Granite-7.0.Granite.ServicesContractorProxy

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ServicesContractorProxy extends GObject.Object {

    // Own properties of Granite-7.0.Granite.ServicesContractorProxy

    static name: string

    // Constructors of Granite-7.0.Granite.ServicesContractorProxy

    constructor(config?: ServicesContractorProxy.ConstructorProperties) 
    _init(config?: ServicesContractorProxy.ConstructorProperties): void
    static getInstance(): any
    static getAllContracts(): Gee.List
    static getContractsByMime(mimeType: string): Gee.List
    static getContractsByMimelist(mimeTypes: string[]): Gee.List
    static getContractsForFile(file: Gio.File): Gee.List
    static getContractsForFiles(files: Gio.File[]): Gee.List
}

export module ServicesSystem {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ServicesSystem {

    // Class property signals of Granite-7.0.Granite.ServicesSystem

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ServicesSystem extends GObject.Object {

    // Own properties of Granite-7.0.Granite.ServicesSystem

    static name: string

    // Constructors of Granite-7.0.Granite.ServicesSystem

    constructor(config?: ServicesSystem.ConstructorProperties) 
    constructor() 
    static new(): ServicesSystem
    _init(config?: ServicesSystem.ConstructorProperties): void
    static historyIsEnabled(): boolean
}

export module SettingsPage {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {

        // Own constructor properties of Granite-7.0.Granite.SettingsPage

        statusType?: SettingsPageStatusType | null
        displayWidget?: Gtk.Widget | null
        header?: string | null
        status?: string | null
        iconName?: string | null
        title?: string | null
        child?: Gtk.Widget | null
    }

}

export interface SettingsPage {

    // Own properties of Granite-7.0.Granite.SettingsPage

    statusType: SettingsPageStatusType
    readonly displayWidget: Gtk.Widget
    readonly header: string
    status: string
    child: Gtk.Widget

    // Conflicting properties

    parentInstance: any

    // Own fields of Granite-7.0.Granite.SettingsPage

    iconName: string
    title: string

    // Owm methods of Granite-7.0.Granite.SettingsPage

    getStatusType(): SettingsPageStatusType
    setStatusType(value: SettingsPageStatusType): void
    getDisplayWidget(): Gtk.Widget | null
    getHeader(): string | null
    getStatus(): string
    setStatus(value: string): void
    getIconName(): string | null
    setIconName(value: string | null): void
    getTitle(): string
    setTitle(value: string): void
    getChild(): Gtk.Widget
    setChild(value: Gtk.Widget): void

    // Class property signals of Granite-7.0.Granite.SettingsPage

    connect(sigName: "notify::status-type", callback: any): number
    on(sigName: "notify::status-type", callback: any): number
    once(sigName: "notify::status-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::status-type", ...args: any[]): void
    connect(sigName: "notify::display-widget", callback: any): number
    on(sigName: "notify::display-widget", callback: any): number
    once(sigName: "notify::display-widget", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display-widget", ...args: any[]): void
    connect(sigName: "notify::header", callback: any): number
    on(sigName: "notify::header", callback: any): number
    once(sigName: "notify::header", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::header", ...args: any[]): void
    connect(sigName: "notify::status", callback: any): number
    on(sigName: "notify::status", callback: any): number
    once(sigName: "notify::status", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: any): number
    on(sigName: "notify::can-focus", callback: any): number
    once(sigName: "notify::can-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: any): number
    on(sigName: "notify::can-target", callback: any): number
    once(sigName: "notify::can-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: any): number
    on(sigName: "notify::css-classes", callback: any): number
    once(sigName: "notify::css-classes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: any): number
    on(sigName: "notify::css-name", callback: any): number
    once(sigName: "notify::css-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: any): number
    on(sigName: "notify::cursor", callback: any): number
    once(sigName: "notify::cursor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: any): number
    on(sigName: "notify::focus-on-click", callback: any): number
    once(sigName: "notify::focus-on-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: any): number
    on(sigName: "notify::focusable", callback: any): number
    once(sigName: "notify::focusable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focusable", ...args: any[]): void
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
    connect(sigName: "notify::layout-manager", callback: any): number
    on(sigName: "notify::layout-manager", callback: any): number
    once(sigName: "notify::layout-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
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
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: any): number
    on(sigName: "notify::overflow", callback: any): number
    once(sigName: "notify::overflow", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overflow", ...args: any[]): void
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
    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SettingsPage extends Gtk.Box {

    // Own properties of Granite-7.0.Granite.SettingsPage

    static name: string

    // Constructors of Granite-7.0.Granite.SettingsPage

    constructor(config?: SettingsPage.ConstructorProperties) 
    _init(config?: SettingsPage.ConstructorProperties): void
}

export module SimpleSettingsPage {

    // Constructor properties interface

    export interface ConstructorProperties extends SettingsPage.ConstructorProperties {

        // Own constructor properties of Granite-7.0.Granite.SimpleSettingsPage

        actionArea?: Gtk.Box | null
        contentArea?: Gtk.Grid | null
        statusSwitch?: Gtk.Switch | null
        activatable?: boolean | null
        description?: string | null
    }

}

export interface SimpleSettingsPage {

    // Own properties of Granite-7.0.Granite.SimpleSettingsPage

    readonly actionArea: Gtk.Box
    readonly contentArea: Gtk.Grid
    readonly statusSwitch: Gtk.Switch
    readonly activatable: boolean
    description: string

    // Conflicting properties

    parentInstance: any

    // Owm methods of Granite-7.0.Granite.SimpleSettingsPage

    getActionArea(): Gtk.Box
    getContentArea(): Gtk.Grid
    getStatusSwitch(): Gtk.Switch | null
    getActivatable(): boolean
    getDescription(): string
    setDescription(value: string): void

    // Class property signals of Granite-7.0.Granite.SimpleSettingsPage

    connect(sigName: "notify::action-area", callback: any): number
    on(sigName: "notify::action-area", callback: any): number
    once(sigName: "notify::action-area", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::action-area", ...args: any[]): void
    connect(sigName: "notify::content-area", callback: any): number
    on(sigName: "notify::content-area", callback: any): number
    once(sigName: "notify::content-area", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-area", ...args: any[]): void
    connect(sigName: "notify::status-switch", callback: any): number
    on(sigName: "notify::status-switch", callback: any): number
    once(sigName: "notify::status-switch", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::status-switch", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: any): number
    on(sigName: "notify::activatable", callback: any): number
    once(sigName: "notify::activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::status-type", callback: any): number
    on(sigName: "notify::status-type", callback: any): number
    once(sigName: "notify::status-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::status-type", ...args: any[]): void
    connect(sigName: "notify::display-widget", callback: any): number
    on(sigName: "notify::display-widget", callback: any): number
    once(sigName: "notify::display-widget", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display-widget", ...args: any[]): void
    connect(sigName: "notify::header", callback: any): number
    on(sigName: "notify::header", callback: any): number
    once(sigName: "notify::header", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::header", ...args: any[]): void
    connect(sigName: "notify::status", callback: any): number
    on(sigName: "notify::status", callback: any): number
    once(sigName: "notify::status", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: any): number
    on(sigName: "notify::can-focus", callback: any): number
    once(sigName: "notify::can-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: any): number
    on(sigName: "notify::can-target", callback: any): number
    once(sigName: "notify::can-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: any): number
    on(sigName: "notify::css-classes", callback: any): number
    once(sigName: "notify::css-classes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: any): number
    on(sigName: "notify::css-name", callback: any): number
    once(sigName: "notify::css-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: any): number
    on(sigName: "notify::cursor", callback: any): number
    once(sigName: "notify::cursor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: any): number
    on(sigName: "notify::focus-on-click", callback: any): number
    once(sigName: "notify::focus-on-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: any): number
    on(sigName: "notify::focusable", callback: any): number
    once(sigName: "notify::focusable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focusable", ...args: any[]): void
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
    connect(sigName: "notify::layout-manager", callback: any): number
    on(sigName: "notify::layout-manager", callback: any): number
    once(sigName: "notify::layout-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
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
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: any): number
    on(sigName: "notify::overflow", callback: any): number
    once(sigName: "notify::overflow", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overflow", ...args: any[]): void
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
    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SimpleSettingsPage extends SettingsPage {

    // Own properties of Granite-7.0.Granite.SimpleSettingsPage

    static name: string

    // Constructors of Granite-7.0.Granite.SimpleSettingsPage

    constructor(config?: SimpleSettingsPage.ConstructorProperties) 
    _init(config?: SimpleSettingsPage.ConstructorProperties): void
}

export module AccelLabel {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {

        // Own constructor properties of Granite-7.0.Granite.AccelLabel

        actionName?: string | null
        accelString?: string | null
        label?: string | null
    }

}

export interface AccelLabel {

    // Own properties of Granite-7.0.Granite.AccelLabel

    actionName: string
    accelString: string
    label: string

    // Conflicting properties

    parentInstance: any

    // Owm methods of Granite-7.0.Granite.AccelLabel

    getActionName(): string
    setActionName(value: string): void
    getAccelString(): string | null
    setAccelString(value: string | null): void
    getLabel(): string
    setLabel(value: string): void

    // Class property signals of Granite-7.0.Granite.AccelLabel

    connect(sigName: "notify::action-name", callback: any): number
    on(sigName: "notify::action-name", callback: any): number
    once(sigName: "notify::action-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::accel-string", callback: any): number
    on(sigName: "notify::accel-string", callback: any): number
    once(sigName: "notify::accel-string", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accel-string", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: any): number
    on(sigName: "notify::can-focus", callback: any): number
    once(sigName: "notify::can-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: any): number
    on(sigName: "notify::can-target", callback: any): number
    once(sigName: "notify::can-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: any): number
    on(sigName: "notify::css-classes", callback: any): number
    once(sigName: "notify::css-classes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: any): number
    on(sigName: "notify::css-name", callback: any): number
    once(sigName: "notify::css-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: any): number
    on(sigName: "notify::cursor", callback: any): number
    once(sigName: "notify::cursor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: any): number
    on(sigName: "notify::focus-on-click", callback: any): number
    once(sigName: "notify::focus-on-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: any): number
    on(sigName: "notify::focusable", callback: any): number
    once(sigName: "notify::focusable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focusable", ...args: any[]): void
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
    connect(sigName: "notify::layout-manager", callback: any): number
    on(sigName: "notify::layout-manager", callback: any): number
    once(sigName: "notify::layout-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
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
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: any): number
    on(sigName: "notify::overflow", callback: any): number
    once(sigName: "notify::overflow", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overflow", ...args: any[]): void
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
    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class AccelLabel extends Gtk.Box {

    // Own properties of Granite-7.0.Granite.AccelLabel

    static name: string

    // Constructors of Granite-7.0.Granite.AccelLabel

    constructor(config?: AccelLabel.ConstructorProperties) 
    constructor(label: string, accelString: string | null) 
    static new(label: string, accelString: string | null): AccelLabel

    // Overloads of new

    /**
     * Creates a new `GtkBox`.
     * @constructor 
     * @param orientation the box’s orientation
     * @param spacing the number of pixels to place by default between children
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    static fromActionName(label: string, actionName: string): AccelLabel
    _init(config?: AccelLabel.ConstructorProperties): void
}

export module DatePicker {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Buildable.ConstructorProperties, Gtk.Entry.ConstructorProperties {

        // Own constructor properties of Granite-7.0.Granite.DatePicker

        format?: string | null
        date?: GLib.DateTime | null
    }

}

export interface DatePicker extends Gtk.Buildable {

    // Own properties of Granite-7.0.Granite.DatePicker

    readonly format: string
    date: GLib.DateTime

    // Owm methods of Granite-7.0.Granite.DatePicker

    getFormat(): string
    getDate(): GLib.DateTime
    setDate(value: GLib.DateTime): void

    // Conflicting methods

    activate(): void

    // Overloads of activate

    /**
     * For widgets that can be “activated” (buttons, menu items, etc.),
     * this function activates them.
     * 
     * The activation will emit the signal set using
     * [method`Gtk`.WidgetClass.set_activate_signal] during class initialization.
     * 
     * Activation is what happens when you press <kbd>Enter</kbd>
     * on a widget during key navigation.
     * 
     * If you wish to handle the activation keybinding yourself, it is
     * recommended to use [method`Gtk`.WidgetClass.add_shortcut] with an action
     * created with [ctor`Gtk`.SignalAction.new].
     * 
     * If `widget` isn't activatable, the function returns %FALSE.
     */
    activate(): boolean
    /**
     * For widgets that can be “activated” (buttons, menu items, etc.),
     * this function activates them.
     * 
     * The activation will emit the signal set using
     * [method`Gtk`.WidgetClass.set_activate_signal] during class initialization.
     * 
     * Activation is what happens when you press <kbd>Enter</kbd>
     * on a widget during key navigation.
     * 
     * If you wish to handle the activation keybinding yourself, it is
     * recommended to use [method`Gtk`.WidgetClass.add_shortcut] with an action
     * created with [ctor`Gtk`.SignalAction.new].
     * 
     * If `widget` isn't activatable, the function returns %FALSE.
     */
    activate(): boolean

    // Class property signals of Granite-7.0.Granite.DatePicker

    connect(sigName: "notify::format", callback: any): number
    on(sigName: "notify::format", callback: any): number
    once(sigName: "notify::format", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::date", callback: any): number
    on(sigName: "notify::date", callback: any): number
    once(sigName: "notify::date", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::activates-default", callback: any): number
    on(sigName: "notify::activates-default", callback: any): number
    once(sigName: "notify::activates-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activates-default", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: any): number
    on(sigName: "notify::buffer", callback: any): number
    once(sigName: "notify::buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::completion", callback: any): number
    on(sigName: "notify::completion", callback: any): number
    once(sigName: "notify::completion", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::enable-emoji-completion", callback: any): number
    on(sigName: "notify::enable-emoji-completion", callback: any): number
    once(sigName: "notify::enable-emoji-completion", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enable-emoji-completion", ...args: any[]): void
    connect(sigName: "notify::extra-menu", callback: any): number
    on(sigName: "notify::extra-menu", callback: any): number
    once(sigName: "notify::extra-menu", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::extra-menu", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: any): number
    on(sigName: "notify::has-frame", callback: any): number
    once(sigName: "notify::has-frame", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: any): number
    on(sigName: "notify::im-module", callback: any): number
    once(sigName: "notify::im-module", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: any): number
    on(sigName: "notify::input-hints", callback: any): number
    once(sigName: "notify::input-hints", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: any): number
    on(sigName: "notify::input-purpose", callback: any): number
    once(sigName: "notify::input-purpose", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::invisible-char", callback: any): number
    on(sigName: "notify::invisible-char", callback: any): number
    once(sigName: "notify::invisible-char", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::invisible-char", ...args: any[]): void
    connect(sigName: "notify::invisible-char-set", callback: any): number
    on(sigName: "notify::invisible-char-set", callback: any): number
    once(sigName: "notify::invisible-char-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::invisible-char-set", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: any): number
    on(sigName: "notify::max-length", callback: any): number
    once(sigName: "notify::max-length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::overwrite-mode", callback: any): number
    on(sigName: "notify::overwrite-mode", callback: any): number
    once(sigName: "notify::overwrite-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overwrite-mode", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: any): number
    on(sigName: "notify::placeholder-text", callback: any): number
    once(sigName: "notify::placeholder-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::primary-icon-activatable", callback: any): number
    on(sigName: "notify::primary-icon-activatable", callback: any): number
    once(sigName: "notify::primary-icon-activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: any): number
    on(sigName: "notify::primary-icon-gicon", callback: any): number
    once(sigName: "notify::primary-icon-gicon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: any): number
    on(sigName: "notify::primary-icon-name", callback: any): number
    once(sigName: "notify::primary-icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-paintable", callback: any): number
    on(sigName: "notify::primary-icon-paintable", callback: any): number
    once(sigName: "notify::primary-icon-paintable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-paintable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-sensitive", callback: any): number
    on(sigName: "notify::primary-icon-sensitive", callback: any): number
    once(sigName: "notify::primary-icon-sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::primary-icon-storage-type", callback: any): number
    on(sigName: "notify::primary-icon-storage-type", callback: any): number
    once(sigName: "notify::primary-icon-storage-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: any): number
    on(sigName: "notify::primary-icon-tooltip-markup", callback: any): number
    once(sigName: "notify::primary-icon-tooltip-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: any): number
    on(sigName: "notify::primary-icon-tooltip-text", callback: any): number
    once(sigName: "notify::primary-icon-tooltip-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::progress-fraction", callback: any): number
    on(sigName: "notify::progress-fraction", callback: any): number
    once(sigName: "notify::progress-fraction", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::progress-fraction", ...args: any[]): void
    connect(sigName: "notify::progress-pulse-step", callback: any): number
    on(sigName: "notify::progress-pulse-step", callback: any): number
    once(sigName: "notify::progress-pulse-step", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::progress-pulse-step", ...args: any[]): void
    connect(sigName: "notify::scroll-offset", callback: any): number
    on(sigName: "notify::scroll-offset", callback: any): number
    once(sigName: "notify::scroll-offset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scroll-offset", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-activatable", callback: any): number
    on(sigName: "notify::secondary-icon-activatable", callback: any): number
    once(sigName: "notify::secondary-icon-activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: any): number
    on(sigName: "notify::secondary-icon-gicon", callback: any): number
    once(sigName: "notify::secondary-icon-gicon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: any): number
    on(sigName: "notify::secondary-icon-name", callback: any): number
    once(sigName: "notify::secondary-icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-paintable", callback: any): number
    on(sigName: "notify::secondary-icon-paintable", callback: any): number
    once(sigName: "notify::secondary-icon-paintable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-paintable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-sensitive", callback: any): number
    on(sigName: "notify::secondary-icon-sensitive", callback: any): number
    once(sigName: "notify::secondary-icon-sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-storage-type", callback: any): number
    on(sigName: "notify::secondary-icon-storage-type", callback: any): number
    once(sigName: "notify::secondary-icon-storage-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: any): number
    on(sigName: "notify::secondary-icon-tooltip-markup", callback: any): number
    once(sigName: "notify::secondary-icon-tooltip-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: any): number
    on(sigName: "notify::secondary-icon-tooltip-text", callback: any): number
    once(sigName: "notify::secondary-icon-tooltip-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::show-emoji-icon", callback: any): number
    on(sigName: "notify::show-emoji-icon", callback: any): number
    once(sigName: "notify::show-emoji-icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-emoji-icon", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: any): number
    on(sigName: "notify::tabs", callback: any): number
    once(sigName: "notify::tabs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::text-length", callback: any): number
    on(sigName: "notify::text-length", callback: any): number
    once(sigName: "notify::text-length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-length", ...args: any[]): void
    connect(sigName: "notify::truncate-multiline", callback: any): number
    on(sigName: "notify::truncate-multiline", callback: any): number
    once(sigName: "notify::truncate-multiline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::truncate-multiline", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: any): number
    on(sigName: "notify::visibility", callback: any): number
    once(sigName: "notify::visibility", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: any): number
    on(sigName: "notify::can-focus", callback: any): number
    once(sigName: "notify::can-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: any): number
    on(sigName: "notify::can-target", callback: any): number
    once(sigName: "notify::can-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: any): number
    on(sigName: "notify::css-classes", callback: any): number
    once(sigName: "notify::css-classes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: any): number
    on(sigName: "notify::css-name", callback: any): number
    once(sigName: "notify::css-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: any): number
    on(sigName: "notify::cursor", callback: any): number
    once(sigName: "notify::cursor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: any): number
    on(sigName: "notify::focus-on-click", callback: any): number
    once(sigName: "notify::focus-on-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: any): number
    on(sigName: "notify::focusable", callback: any): number
    once(sigName: "notify::focusable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focusable", ...args: any[]): void
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
    connect(sigName: "notify::layout-manager", callback: any): number
    on(sigName: "notify::layout-manager", callback: any): number
    once(sigName: "notify::layout-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
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
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: any): number
    on(sigName: "notify::overflow", callback: any): number
    once(sigName: "notify::overflow", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overflow", ...args: any[]): void
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
    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DatePicker extends Gtk.Entry {

    // Own properties of Granite-7.0.Granite.DatePicker

    static name: string

    // Constructors of Granite-7.0.Granite.DatePicker

    constructor(config?: DatePicker.ConstructorProperties) 
    static withFormat(format: string): DatePicker
    constructor() 
    static new(): DatePicker

    // Overloads of new

    /**
     * Creates a new entry.
     * @constructor 
     */
    static new(): Gtk.Entry
    _init(config?: DatePicker.ConstructorProperties): void
}

export module Dialog {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Dialog.ConstructorProperties {
    }

}

export interface Dialog {

    // Conflicting properties

    parentInstance: any

    // Conflicting methods

    /**
     * Realizes a `GtkNative`.
     * 
     * This should only be used by subclasses.
     */
    realize(): void

    // Overloads of realize

    /**
     * Creates the GDK resources associated with a widget.
     * 
     * Normally realization happens implicitly; if you show a widget
     * and all its parent containers, then the widget will be realized
     * and mapped automatically.
     * 
     * Realizing a widget requires all the widget’s parent widgets to be
     * realized; calling this function realizes the widget’s parents
     * in addition to `widget` itself. If a widget is not yet inside a
     * toplevel window when you realize it, bad things will happen.
     * 
     * This function is primarily used in widget implementations, and
     * isn’t very useful otherwise. Many times when you think you might
     * need it, a better approach is to connect to a signal that will be
     * called after the widget is realized automatically, such as
     * [signal`Gtk`.Widget::realize].
     * @virtual 
     */
    realize(): void
    /**
     * Creates the GDK resources associated with a widget.
     * 
     * Normally realization happens implicitly; if you show a widget
     * and all its parent containers, then the widget will be realized
     * and mapped automatically.
     * 
     * Realizing a widget requires all the widget’s parent widgets to be
     * realized; calling this function realizes the widget’s parents
     * in addition to `widget` itself. If a widget is not yet inside a
     * toplevel window when you realize it, bad things will happen.
     * 
     * This function is primarily used in widget implementations, and
     * isn’t very useful otherwise. Many times when you think you might
     * need it, a better approach is to connect to a signal that will be
     * called after the widget is realized automatically, such as
     * [signal`Gtk`.Widget::realize].
     * @virtual 
     */
    realize(): void
    /**
     * Unrealizes a `GtkNative`.
     * 
     * This should only be used by subclasses.
     */
    unrealize(): void

    // Overloads of unrealize

    /**
     * Causes a widget to be unrealized (frees all GDK resources
     * associated with the widget).
     * 
     * This function is only useful in widget implementations.
     * @virtual 
     */
    unrealize(): void
    /**
     * Causes a widget to be unrealized (frees all GDK resources
     * associated with the widget).
     * 
     * This function is only useful in widget implementations.
     * @virtual 
     */
    unrealize(): void
    activateDefault(): void

    // Overloads of activateDefault

    /**
     * Activates the `default.activate` action from `widget`.
     */
    activateDefault(): void
    /**
     * Activates the `default.activate` action from `widget`.
     */
    activateDefault(): void
    addController(controller: Gtk.ShortcutController): void
    /**
     * Adds `controller` to `widget` so that it will receive events.
     * 
     * You will usually want to call this function right after
     * creating any kind of [class`Gtk`.EventController].
     * @param controller a `GtkEventController` that hasn't been   added to a widget yet
     */
    addController(controller: Gtk.EventController): void
    removeController(controller: Gtk.ShortcutController): void
    /**
     * Removes `controller` from `widget,` so that it doesn't process
     * events anymore.
     * 
     * It should not be used again.
     * 
     * Widgets will remove all event controllers automatically when they
     * are destroyed, there is normally no need to call this function.
     * @param controller a `GtkEventController`
     */
    removeController(controller: Gtk.EventController): void
    close(): void

    // Overloads of close

    /**
     * Requests that the window is closed.
     * 
     * This is similar to what happens when a window manager
     * close button is clicked.
     * 
     * This function can be used with close buttons in custom
     * titlebars.
     */
    close(): void
    /**
     * Requests that the window is closed.
     * 
     * This is similar to what happens when a window manager
     * close button is clicked.
     * 
     * This function can be used with close buttons in custom
     * titlebars.
     */
    close(): void

    // Class property signals of Granite-7.0.Granite.Dialog

    connect(sigName: "notify::use-header-bar", callback: any): number
    on(sigName: "notify::use-header-bar", callback: any): number
    once(sigName: "notify::use-header-bar", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::application", callback: any): number
    on(sigName: "notify::application", callback: any): number
    once(sigName: "notify::application", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: any): number
    on(sigName: "notify::decorated", callback: any): number
    once(sigName: "notify::decorated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: any): number
    on(sigName: "notify::default-height", callback: any): number
    once(sigName: "notify::default-height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-widget", callback: any): number
    on(sigName: "notify::default-widget", callback: any): number
    once(sigName: "notify::default-widget", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-widget", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: any): number
    on(sigName: "notify::default-width", callback: any): number
    once(sigName: "notify::default-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: any): number
    on(sigName: "notify::deletable", callback: any): number
    once(sigName: "notify::deletable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: any): number
    on(sigName: "notify::destroy-with-parent", callback: any): number
    once(sigName: "notify::destroy-with-parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::display", callback: any): number
    on(sigName: "notify::display", callback: any): number
    once(sigName: "notify::display", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: any): number
    on(sigName: "notify::focus-visible", callback: any): number
    once(sigName: "notify::focus-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::focus-widget", callback: any): number
    on(sigName: "notify::focus-widget", callback: any): number
    once(sigName: "notify::focus-widget", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-widget", ...args: any[]): void
    connect(sigName: "notify::fullscreened", callback: any): number
    on(sigName: "notify::fullscreened", callback: any): number
    once(sigName: "notify::fullscreened", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fullscreened", ...args: any[]): void
    connect(sigName: "notify::handle-menubar-accel", callback: any): number
    on(sigName: "notify::handle-menubar-accel", callback: any): number
    once(sigName: "notify::handle-menubar-accel", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::handle-menubar-accel", ...args: any[]): void
    connect(sigName: "notify::hide-on-close", callback: any): number
    on(sigName: "notify::hide-on-close", callback: any): number
    once(sigName: "notify::hide-on-close", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hide-on-close", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: any): number
    on(sigName: "notify::is-active", callback: any): number
    once(sigName: "notify::is-active", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::maximized", callback: any): number
    on(sigName: "notify::maximized", callback: any): number
    once(sigName: "notify::maximized", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: any): number
    on(sigName: "notify::mnemonics-visible", callback: any): number
    once(sigName: "notify::mnemonics-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: any): number
    on(sigName: "notify::modal", callback: any): number
    once(sigName: "notify::modal", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: any): number
    on(sigName: "notify::resizable", callback: any): number
    once(sigName: "notify::resizable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: any): number
    on(sigName: "notify::startup-id", callback: any): number
    once(sigName: "notify::startup-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::titlebar", callback: any): number
    on(sigName: "notify::titlebar", callback: any): number
    once(sigName: "notify::titlebar", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::titlebar", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: any): number
    on(sigName: "notify::transient-for", callback: any): number
    once(sigName: "notify::transient-for", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: any): number
    on(sigName: "notify::can-focus", callback: any): number
    once(sigName: "notify::can-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: any): number
    on(sigName: "notify::can-target", callback: any): number
    once(sigName: "notify::can-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: any): number
    on(sigName: "notify::css-classes", callback: any): number
    once(sigName: "notify::css-classes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: any): number
    on(sigName: "notify::css-name", callback: any): number
    once(sigName: "notify::css-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: any): number
    on(sigName: "notify::cursor", callback: any): number
    once(sigName: "notify::cursor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: any): number
    on(sigName: "notify::focus-on-click", callback: any): number
    once(sigName: "notify::focus-on-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: any): number
    on(sigName: "notify::focusable", callback: any): number
    once(sigName: "notify::focusable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focusable", ...args: any[]): void
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
    connect(sigName: "notify::layout-manager", callback: any): number
    on(sigName: "notify::layout-manager", callback: any): number
    once(sigName: "notify::layout-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
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
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: any): number
    on(sigName: "notify::overflow", callback: any): number
    once(sigName: "notify::overflow", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overflow", ...args: any[]): void
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
    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Dialog extends Gtk.Dialog {

    // Own properties of Granite-7.0.Granite.Dialog

    static name: string

    // Constructors of Granite-7.0.Granite.Dialog

    constructor(config?: Dialog.ConstructorProperties) 
    constructor() 
    static new(): Dialog

    // Overloads of new

    /**
     * Creates a new dialog box.
     * 
     * Widgets should not be packed into the `GtkWindow`
     * directly, but into the `content_area` and `action_area,`
     * as described above.
     * @constructor 
     */
    static new(): Gtk.Dialog
    _init(config?: Dialog.ConstructorProperties): void
}

export module HeaderLabel {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Granite-7.0.Granite.HeaderLabel

        label?: string | null
    }

}

export interface HeaderLabel {

    // Own properties of Granite-7.0.Granite.HeaderLabel

    label: string

    // Owm methods of Granite-7.0.Granite.HeaderLabel

    getLabel(): string
    setLabel(value: string): void

    // Class property signals of Granite-7.0.Granite.HeaderLabel

    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: any): number
    on(sigName: "notify::can-focus", callback: any): number
    once(sigName: "notify::can-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: any): number
    on(sigName: "notify::can-target", callback: any): number
    once(sigName: "notify::can-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: any): number
    on(sigName: "notify::css-classes", callback: any): number
    once(sigName: "notify::css-classes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: any): number
    on(sigName: "notify::css-name", callback: any): number
    once(sigName: "notify::css-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: any): number
    on(sigName: "notify::cursor", callback: any): number
    once(sigName: "notify::cursor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: any): number
    on(sigName: "notify::focus-on-click", callback: any): number
    once(sigName: "notify::focus-on-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: any): number
    on(sigName: "notify::focusable", callback: any): number
    once(sigName: "notify::focusable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focusable", ...args: any[]): void
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
    connect(sigName: "notify::layout-manager", callback: any): number
    on(sigName: "notify::layout-manager", callback: any): number
    once(sigName: "notify::layout-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
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
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: any): number
    on(sigName: "notify::overflow", callback: any): number
    once(sigName: "notify::overflow", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overflow", ...args: any[]): void
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
    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class HeaderLabel extends Gtk.Widget {

    // Own properties of Granite-7.0.Granite.HeaderLabel

    static name: string

    // Constructors of Granite-7.0.Granite.HeaderLabel

    constructor(config?: HeaderLabel.ConstructorProperties) 
    constructor(label: string) 
    static new(label: string): HeaderLabel
    _init(config?: HeaderLabel.ConstructorProperties): void
}

export module HyperTextView {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.TextView.ConstructorProperties {
    }

}

export interface HyperTextView {

    // Conflicting properties

    parentInstance: any

    // Class property signals of Granite-7.0.Granite.HyperTextView

    connect(sigName: "notify::accepts-tab", callback: any): number
    on(sigName: "notify::accepts-tab", callback: any): number
    once(sigName: "notify::accepts-tab", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accepts-tab", ...args: any[]): void
    connect(sigName: "notify::bottom-margin", callback: any): number
    on(sigName: "notify::bottom-margin", callback: any): number
    once(sigName: "notify::bottom-margin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bottom-margin", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: any): number
    on(sigName: "notify::buffer", callback: any): number
    once(sigName: "notify::buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::cursor-visible", callback: any): number
    on(sigName: "notify::cursor-visible", callback: any): number
    once(sigName: "notify::cursor-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor-visible", ...args: any[]): void
    connect(sigName: "notify::editable", callback: any): number
    on(sigName: "notify::editable", callback: any): number
    once(sigName: "notify::editable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::extra-menu", callback: any): number
    on(sigName: "notify::extra-menu", callback: any): number
    once(sigName: "notify::extra-menu", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::extra-menu", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: any): number
    on(sigName: "notify::im-module", callback: any): number
    once(sigName: "notify::im-module", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::indent", callback: any): number
    on(sigName: "notify::indent", callback: any): number
    once(sigName: "notify::indent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::indent", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: any): number
    on(sigName: "notify::input-hints", callback: any): number
    once(sigName: "notify::input-hints", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: any): number
    on(sigName: "notify::input-purpose", callback: any): number
    once(sigName: "notify::input-purpose", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::justification", callback: any): number
    on(sigName: "notify::justification", callback: any): number
    once(sigName: "notify::justification", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::justification", ...args: any[]): void
    connect(sigName: "notify::left-margin", callback: any): number
    on(sigName: "notify::left-margin", callback: any): number
    once(sigName: "notify::left-margin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::left-margin", ...args: any[]): void
    connect(sigName: "notify::monospace", callback: any): number
    on(sigName: "notify::monospace", callback: any): number
    once(sigName: "notify::monospace", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::monospace", ...args: any[]): void
    connect(sigName: "notify::overwrite", callback: any): number
    on(sigName: "notify::overwrite", callback: any): number
    once(sigName: "notify::overwrite", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overwrite", ...args: any[]): void
    connect(sigName: "notify::pixels-above-lines", callback: any): number
    on(sigName: "notify::pixels-above-lines", callback: any): number
    once(sigName: "notify::pixels-above-lines", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixels-above-lines", ...args: any[]): void
    connect(sigName: "notify::pixels-below-lines", callback: any): number
    on(sigName: "notify::pixels-below-lines", callback: any): number
    once(sigName: "notify::pixels-below-lines", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixels-below-lines", ...args: any[]): void
    connect(sigName: "notify::pixels-inside-wrap", callback: any): number
    on(sigName: "notify::pixels-inside-wrap", callback: any): number
    once(sigName: "notify::pixels-inside-wrap", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixels-inside-wrap", ...args: any[]): void
    connect(sigName: "notify::right-margin", callback: any): number
    on(sigName: "notify::right-margin", callback: any): number
    once(sigName: "notify::right-margin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::right-margin", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: any): number
    on(sigName: "notify::tabs", callback: any): number
    once(sigName: "notify::tabs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::top-margin", callback: any): number
    on(sigName: "notify::top-margin", callback: any): number
    once(sigName: "notify::top-margin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::top-margin", ...args: any[]): void
    connect(sigName: "notify::wrap-mode", callback: any): number
    on(sigName: "notify::wrap-mode", callback: any): number
    once(sigName: "notify::wrap-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::wrap-mode", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: any): number
    on(sigName: "notify::can-focus", callback: any): number
    once(sigName: "notify::can-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: any): number
    on(sigName: "notify::can-target", callback: any): number
    once(sigName: "notify::can-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: any): number
    on(sigName: "notify::css-classes", callback: any): number
    once(sigName: "notify::css-classes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: any): number
    on(sigName: "notify::css-name", callback: any): number
    once(sigName: "notify::css-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: any): number
    on(sigName: "notify::cursor", callback: any): number
    once(sigName: "notify::cursor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: any): number
    on(sigName: "notify::focus-on-click", callback: any): number
    once(sigName: "notify::focus-on-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: any): number
    on(sigName: "notify::focusable", callback: any): number
    once(sigName: "notify::focusable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focusable", ...args: any[]): void
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
    connect(sigName: "notify::layout-manager", callback: any): number
    on(sigName: "notify::layout-manager", callback: any): number
    once(sigName: "notify::layout-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
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
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: any): number
    on(sigName: "notify::overflow", callback: any): number
    once(sigName: "notify::overflow", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overflow", ...args: any[]): void
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
    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class HyperTextView extends Gtk.TextView {

    // Own properties of Granite-7.0.Granite.HyperTextView

    static name: string

    // Constructors of Granite-7.0.Granite.HyperTextView

    constructor(config?: HyperTextView.ConstructorProperties) 
    constructor() 
    static new(): HyperTextView

    // Overloads of new

    /**
     * Creates a new `GtkTextView`.
     * 
     * If you don’t call [method`Gtk`.TextView.set_buffer] before using the
     * text view, an empty default buffer will be created for you. Get the
     * buffer with [method`Gtk`.TextView.get_buffer]. If you want to specify
     * your own buffer, consider [ctor`Gtk`.TextView.new_with_buffer].
     * @constructor 
     */
    static new(): Gtk.TextView
    _init(config?: HyperTextView.ConstructorProperties): void
}

export module MessageDialog {

    // Constructor properties interface

    export interface ConstructorProperties extends Dialog.ConstructorProperties {

        // Own constructor properties of Granite-7.0.Granite.MessageDialog

        primaryText?: string | null
        secondaryText?: string | null
        imageIcon?: Gio.Icon | null
        badgeIcon?: Gio.Icon | null
        primaryLabel?: Gtk.Label | null
        secondaryLabel?: Gtk.Label | null
        buttons?: Gtk.ButtonsType | null
        customBin?: Gtk.Box | null
    }

}

export interface MessageDialog {

    // Own properties of Granite-7.0.Granite.MessageDialog

    primaryText: string
    secondaryText: string
    imageIcon: Gio.Icon
    badgeIcon: Gio.Icon
    readonly primaryLabel: Gtk.Label
    readonly secondaryLabel: Gtk.Label
    readonly buttons: Gtk.ButtonsType
    readonly customBin: Gtk.Box

    // Conflicting properties

    parentInstance: any

    // Owm methods of Granite-7.0.Granite.MessageDialog

    getPrimaryText(): string
    setPrimaryText(value: string): void
    getSecondaryText(): string
    setSecondaryText(value: string): void
    getImageIcon(): Gio.Icon
    setImageIcon(value: Gio.Icon): void
    getBadgeIcon(): Gio.Icon
    setBadgeIcon(value: Gio.Icon): void
    getPrimaryLabel(): Gtk.Label
    getSecondaryLabel(): Gtk.Label
    getCustomBin(): Gtk.Box
    showErrorDetails(errorMessage: string): void

    // Conflicting methods

    /**
     * Realizes a `GtkNative`.
     * 
     * This should only be used by subclasses.
     */
    realize(): void

    // Overloads of realize

    /**
     * Creates the GDK resources associated with a widget.
     * 
     * Normally realization happens implicitly; if you show a widget
     * and all its parent containers, then the widget will be realized
     * and mapped automatically.
     * 
     * Realizing a widget requires all the widget’s parent widgets to be
     * realized; calling this function realizes the widget’s parents
     * in addition to `widget` itself. If a widget is not yet inside a
     * toplevel window when you realize it, bad things will happen.
     * 
     * This function is primarily used in widget implementations, and
     * isn’t very useful otherwise. Many times when you think you might
     * need it, a better approach is to connect to a signal that will be
     * called after the widget is realized automatically, such as
     * [signal`Gtk`.Widget::realize].
     * @virtual 
     */
    realize(): void
    /**
     * Creates the GDK resources associated with a widget.
     * 
     * Normally realization happens implicitly; if you show a widget
     * and all its parent containers, then the widget will be realized
     * and mapped automatically.
     * 
     * Realizing a widget requires all the widget’s parent widgets to be
     * realized; calling this function realizes the widget’s parents
     * in addition to `widget` itself. If a widget is not yet inside a
     * toplevel window when you realize it, bad things will happen.
     * 
     * This function is primarily used in widget implementations, and
     * isn’t very useful otherwise. Many times when you think you might
     * need it, a better approach is to connect to a signal that will be
     * called after the widget is realized automatically, such as
     * [signal`Gtk`.Widget::realize].
     * @virtual 
     */
    realize(): void
    /**
     * Unrealizes a `GtkNative`.
     * 
     * This should only be used by subclasses.
     */
    unrealize(): void

    // Overloads of unrealize

    /**
     * Causes a widget to be unrealized (frees all GDK resources
     * associated with the widget).
     * 
     * This function is only useful in widget implementations.
     * @virtual 
     */
    unrealize(): void
    /**
     * Causes a widget to be unrealized (frees all GDK resources
     * associated with the widget).
     * 
     * This function is only useful in widget implementations.
     * @virtual 
     */
    unrealize(): void
    activateDefault(): void

    // Overloads of activateDefault

    /**
     * Activates the `default.activate` action from `widget`.
     */
    activateDefault(): void
    /**
     * Activates the `default.activate` action from `widget`.
     */
    activateDefault(): void
    addController(controller: Gtk.ShortcutController): void
    /**
     * Adds `controller` to `widget` so that it will receive events.
     * 
     * You will usually want to call this function right after
     * creating any kind of [class`Gtk`.EventController].
     * @param controller a `GtkEventController` that hasn't been   added to a widget yet
     */
    addController(controller: Gtk.EventController): void
    removeController(controller: Gtk.ShortcutController): void
    /**
     * Removes `controller` from `widget,` so that it doesn't process
     * events anymore.
     * 
     * It should not be used again.
     * 
     * Widgets will remove all event controllers automatically when they
     * are destroyed, there is normally no need to call this function.
     * @param controller a `GtkEventController`
     */
    removeController(controller: Gtk.EventController): void
    close(): void

    // Overloads of close

    /**
     * Requests that the window is closed.
     * 
     * This is similar to what happens when a window manager
     * close button is clicked.
     * 
     * This function can be used with close buttons in custom
     * titlebars.
     */
    close(): void
    /**
     * Requests that the window is closed.
     * 
     * This is similar to what happens when a window manager
     * close button is clicked.
     * 
     * This function can be used with close buttons in custom
     * titlebars.
     */
    close(): void

    // Class property signals of Granite-7.0.Granite.MessageDialog

    connect(sigName: "notify::primary-text", callback: any): number
    on(sigName: "notify::primary-text", callback: any): number
    once(sigName: "notify::primary-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-text", ...args: any[]): void
    connect(sigName: "notify::secondary-text", callback: any): number
    on(sigName: "notify::secondary-text", callback: any): number
    once(sigName: "notify::secondary-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-text", ...args: any[]): void
    connect(sigName: "notify::image-icon", callback: any): number
    on(sigName: "notify::image-icon", callback: any): number
    once(sigName: "notify::image-icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::image-icon", ...args: any[]): void
    connect(sigName: "notify::badge-icon", callback: any): number
    on(sigName: "notify::badge-icon", callback: any): number
    once(sigName: "notify::badge-icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::badge-icon", ...args: any[]): void
    connect(sigName: "notify::primary-label", callback: any): number
    on(sigName: "notify::primary-label", callback: any): number
    once(sigName: "notify::primary-label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-label", ...args: any[]): void
    connect(sigName: "notify::secondary-label", callback: any): number
    on(sigName: "notify::secondary-label", callback: any): number
    once(sigName: "notify::secondary-label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-label", ...args: any[]): void
    connect(sigName: "notify::buttons", callback: any): number
    on(sigName: "notify::buttons", callback: any): number
    once(sigName: "notify::buttons", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buttons", ...args: any[]): void
    connect(sigName: "notify::custom-bin", callback: any): number
    on(sigName: "notify::custom-bin", callback: any): number
    once(sigName: "notify::custom-bin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::custom-bin", ...args: any[]): void
    connect(sigName: "notify::use-header-bar", callback: any): number
    on(sigName: "notify::use-header-bar", callback: any): number
    once(sigName: "notify::use-header-bar", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::application", callback: any): number
    on(sigName: "notify::application", callback: any): number
    once(sigName: "notify::application", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: any): number
    on(sigName: "notify::decorated", callback: any): number
    once(sigName: "notify::decorated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: any): number
    on(sigName: "notify::default-height", callback: any): number
    once(sigName: "notify::default-height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-widget", callback: any): number
    on(sigName: "notify::default-widget", callback: any): number
    once(sigName: "notify::default-widget", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-widget", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: any): number
    on(sigName: "notify::default-width", callback: any): number
    once(sigName: "notify::default-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: any): number
    on(sigName: "notify::deletable", callback: any): number
    once(sigName: "notify::deletable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: any): number
    on(sigName: "notify::destroy-with-parent", callback: any): number
    once(sigName: "notify::destroy-with-parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::display", callback: any): number
    on(sigName: "notify::display", callback: any): number
    once(sigName: "notify::display", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: any): number
    on(sigName: "notify::focus-visible", callback: any): number
    once(sigName: "notify::focus-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::focus-widget", callback: any): number
    on(sigName: "notify::focus-widget", callback: any): number
    once(sigName: "notify::focus-widget", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-widget", ...args: any[]): void
    connect(sigName: "notify::fullscreened", callback: any): number
    on(sigName: "notify::fullscreened", callback: any): number
    once(sigName: "notify::fullscreened", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fullscreened", ...args: any[]): void
    connect(sigName: "notify::handle-menubar-accel", callback: any): number
    on(sigName: "notify::handle-menubar-accel", callback: any): number
    once(sigName: "notify::handle-menubar-accel", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::handle-menubar-accel", ...args: any[]): void
    connect(sigName: "notify::hide-on-close", callback: any): number
    on(sigName: "notify::hide-on-close", callback: any): number
    once(sigName: "notify::hide-on-close", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hide-on-close", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: any): number
    on(sigName: "notify::is-active", callback: any): number
    once(sigName: "notify::is-active", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::maximized", callback: any): number
    on(sigName: "notify::maximized", callback: any): number
    once(sigName: "notify::maximized", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: any): number
    on(sigName: "notify::mnemonics-visible", callback: any): number
    once(sigName: "notify::mnemonics-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: any): number
    on(sigName: "notify::modal", callback: any): number
    once(sigName: "notify::modal", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: any): number
    on(sigName: "notify::resizable", callback: any): number
    once(sigName: "notify::resizable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: any): number
    on(sigName: "notify::startup-id", callback: any): number
    once(sigName: "notify::startup-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::titlebar", callback: any): number
    on(sigName: "notify::titlebar", callback: any): number
    once(sigName: "notify::titlebar", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::titlebar", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: any): number
    on(sigName: "notify::transient-for", callback: any): number
    once(sigName: "notify::transient-for", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: any): number
    on(sigName: "notify::can-focus", callback: any): number
    once(sigName: "notify::can-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: any): number
    on(sigName: "notify::can-target", callback: any): number
    once(sigName: "notify::can-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: any): number
    on(sigName: "notify::css-classes", callback: any): number
    once(sigName: "notify::css-classes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: any): number
    on(sigName: "notify::css-name", callback: any): number
    once(sigName: "notify::css-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: any): number
    on(sigName: "notify::cursor", callback: any): number
    once(sigName: "notify::cursor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: any): number
    on(sigName: "notify::focus-on-click", callback: any): number
    once(sigName: "notify::focus-on-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: any): number
    on(sigName: "notify::focusable", callback: any): number
    once(sigName: "notify::focusable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focusable", ...args: any[]): void
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
    connect(sigName: "notify::layout-manager", callback: any): number
    on(sigName: "notify::layout-manager", callback: any): number
    once(sigName: "notify::layout-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
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
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: any): number
    on(sigName: "notify::overflow", callback: any): number
    once(sigName: "notify::overflow", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overflow", ...args: any[]): void
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
    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MessageDialog extends Dialog {

    // Own properties of Granite-7.0.Granite.MessageDialog

    static name: string

    // Constructors of Granite-7.0.Granite.MessageDialog

    constructor(config?: MessageDialog.ConstructorProperties) 
    constructor(primaryText: string, secondaryText: string, imageIcon: Gio.Icon, buttons: Gtk.ButtonsType) 
    static new(primaryText: string, secondaryText: string, imageIcon: Gio.Icon, buttons: Gtk.ButtonsType): MessageDialog

    // Overloads of new

    static new(): Dialog
    /**
     * Creates a new dialog box.
     * 
     * Widgets should not be packed into the `GtkWindow`
     * directly, but into the `content_area` and `action_area,`
     * as described above.
     * @constructor 
     */
    static new(): Gtk.Dialog
    static withImageFromIconName(primaryText: string, secondaryText: string, imageIconName: string, buttons: Gtk.ButtonsType): MessageDialog
    _init(config?: MessageDialog.ConstructorProperties): void
}

export module ModeSwitch {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Box.ConstructorProperties {

        // Own constructor properties of Granite-7.0.Granite.ModeSwitch

        active?: boolean | null
        primaryIconGicon?: Gio.Icon | null
        primaryIconName?: string | null
        primaryIconTooltipText?: string | null
        secondaryIconGicon?: Gio.Icon | null
        secondaryIconName?: string | null
        secondaryIconTooltipText?: string | null
    }

}

export interface ModeSwitch {

    // Own properties of Granite-7.0.Granite.ModeSwitch

    active: boolean
    primaryIconGicon: Gio.Icon
    primaryIconName: string
    primaryIconTooltipText: string
    secondaryIconGicon: Gio.Icon
    secondaryIconName: string
    secondaryIconTooltipText: string

    // Conflicting properties

    parentInstance: any

    // Owm methods of Granite-7.0.Granite.ModeSwitch

    getActive(): boolean
    setActive(value: boolean): void
    getPrimaryIconGicon(): Gio.Icon
    setPrimaryIconGicon(value: Gio.Icon): void
    getPrimaryIconName(): string
    setPrimaryIconName(value: string): void
    getPrimaryIconTooltipText(): string
    setPrimaryIconTooltipText(value: string): void
    getSecondaryIconGicon(): Gio.Icon
    setSecondaryIconGicon(value: Gio.Icon): void
    getSecondaryIconName(): string
    setSecondaryIconName(value: string): void
    getSecondaryIconTooltipText(): string
    setSecondaryIconTooltipText(value: string): void

    // Class property signals of Granite-7.0.Granite.ModeSwitch

    connect(sigName: "notify::active", callback: any): number
    on(sigName: "notify::active", callback: any): number
    once(sigName: "notify::active", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: any): number
    on(sigName: "notify::primary-icon-gicon", callback: any): number
    once(sigName: "notify::primary-icon-gicon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: any): number
    on(sigName: "notify::primary-icon-name", callback: any): number
    once(sigName: "notify::primary-icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: any): number
    on(sigName: "notify::primary-icon-tooltip-text", callback: any): number
    once(sigName: "notify::primary-icon-tooltip-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: any): number
    on(sigName: "notify::secondary-icon-gicon", callback: any): number
    once(sigName: "notify::secondary-icon-gicon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: any): number
    on(sigName: "notify::secondary-icon-name", callback: any): number
    once(sigName: "notify::secondary-icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: any): number
    on(sigName: "notify::secondary-icon-tooltip-text", callback: any): number
    once(sigName: "notify::secondary-icon-tooltip-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: any): number
    on(sigName: "notify::can-focus", callback: any): number
    once(sigName: "notify::can-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: any): number
    on(sigName: "notify::can-target", callback: any): number
    once(sigName: "notify::can-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: any): number
    on(sigName: "notify::css-classes", callback: any): number
    once(sigName: "notify::css-classes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: any): number
    on(sigName: "notify::css-name", callback: any): number
    once(sigName: "notify::css-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: any): number
    on(sigName: "notify::cursor", callback: any): number
    once(sigName: "notify::cursor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: any): number
    on(sigName: "notify::focus-on-click", callback: any): number
    once(sigName: "notify::focus-on-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: any): number
    on(sigName: "notify::focusable", callback: any): number
    once(sigName: "notify::focusable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focusable", ...args: any[]): void
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
    connect(sigName: "notify::layout-manager", callback: any): number
    on(sigName: "notify::layout-manager", callback: any): number
    once(sigName: "notify::layout-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
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
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: any): number
    on(sigName: "notify::overflow", callback: any): number
    once(sigName: "notify::overflow", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overflow", ...args: any[]): void
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
    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ModeSwitch extends Gtk.Box {

    // Own properties of Granite-7.0.Granite.ModeSwitch

    static name: string

    // Constructors of Granite-7.0.Granite.ModeSwitch

    constructor(config?: ModeSwitch.ConstructorProperties) 
    constructor(primaryIconGicon: Gio.Icon, secondaryIconGicon: Gio.Icon) 
    static new(primaryIconGicon: Gio.Icon, secondaryIconGicon: Gio.Icon): ModeSwitch

    // Overloads of new

    /**
     * Creates a new `GtkBox`.
     * @constructor 
     * @param orientation the box’s orientation
     * @param spacing the number of pixels to place by default between children
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    static fromIconName(primaryIconName: string, secondaryIconName: string): ModeSwitch
    _init(config?: ModeSwitch.ConstructorProperties): void
}

export module OverlayBar {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Granite-7.0.Granite.OverlayBar

        overlay?: Gtk.Overlay | null
        label?: string | null
        active?: boolean | null
    }

}

export interface OverlayBar {

    // Own properties of Granite-7.0.Granite.OverlayBar

    readonly overlay: Gtk.Overlay
    label: string
    active: boolean

    // Owm methods of Granite-7.0.Granite.OverlayBar

    getOverlay(): Gtk.Overlay | null
    getLabel(): string
    setLabel(value: string): void
    getActive(): boolean
    setActive(value: boolean): void

    // Class property signals of Granite-7.0.Granite.OverlayBar

    connect(sigName: "notify::overlay", callback: any): number
    on(sigName: "notify::overlay", callback: any): number
    once(sigName: "notify::overlay", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overlay", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::active", callback: any): number
    on(sigName: "notify::active", callback: any): number
    once(sigName: "notify::active", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: any): number
    on(sigName: "notify::can-focus", callback: any): number
    once(sigName: "notify::can-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: any): number
    on(sigName: "notify::can-target", callback: any): number
    once(sigName: "notify::can-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: any): number
    on(sigName: "notify::css-classes", callback: any): number
    once(sigName: "notify::css-classes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: any): number
    on(sigName: "notify::css-name", callback: any): number
    once(sigName: "notify::css-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: any): number
    on(sigName: "notify::cursor", callback: any): number
    once(sigName: "notify::cursor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: any): number
    on(sigName: "notify::focus-on-click", callback: any): number
    once(sigName: "notify::focus-on-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: any): number
    on(sigName: "notify::focusable", callback: any): number
    once(sigName: "notify::focusable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focusable", ...args: any[]): void
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
    connect(sigName: "notify::layout-manager", callback: any): number
    on(sigName: "notify::layout-manager", callback: any): number
    once(sigName: "notify::layout-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
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
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: any): number
    on(sigName: "notify::overflow", callback: any): number
    once(sigName: "notify::overflow", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overflow", ...args: any[]): void
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
    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class OverlayBar extends Gtk.Widget {

    // Own properties of Granite-7.0.Granite.OverlayBar

    static name: string

    // Constructors of Granite-7.0.Granite.OverlayBar

    constructor(config?: OverlayBar.ConstructorProperties) 
    constructor(overlay: Gtk.Overlay | null) 
    static new(overlay: Gtk.Overlay | null): OverlayBar
    _init(config?: OverlayBar.ConstructorProperties): void
}

export module Placeholder {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Granite-7.0.Granite.Placeholder

        title?: string | null
        description?: string | null
        icon?: Gio.Icon | null
    }

}

export interface Placeholder {

    // Own properties of Granite-7.0.Granite.Placeholder

    title: string
    description: string
    icon: Gio.Icon

    // Owm methods of Granite-7.0.Granite.Placeholder

    getTitle(): string
    setTitle(value: string): void
    getDescription(): string
    setDescription(value: string): void
    getIcon(): Gio.Icon
    setIcon(value: Gio.Icon): void
    appendButton(icon: Gio.Icon, label: string, description: string): Gtk.Button

    // Class property signals of Granite-7.0.Granite.Placeholder

    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::icon", callback: any): number
    on(sigName: "notify::icon", callback: any): number
    once(sigName: "notify::icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: any): number
    on(sigName: "notify::can-focus", callback: any): number
    once(sigName: "notify::can-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: any): number
    on(sigName: "notify::can-target", callback: any): number
    once(sigName: "notify::can-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: any): number
    on(sigName: "notify::css-classes", callback: any): number
    once(sigName: "notify::css-classes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: any): number
    on(sigName: "notify::css-name", callback: any): number
    once(sigName: "notify::css-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: any): number
    on(sigName: "notify::cursor", callback: any): number
    once(sigName: "notify::cursor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: any): number
    on(sigName: "notify::focus-on-click", callback: any): number
    once(sigName: "notify::focus-on-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: any): number
    on(sigName: "notify::focusable", callback: any): number
    once(sigName: "notify::focusable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focusable", ...args: any[]): void
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
    connect(sigName: "notify::layout-manager", callback: any): number
    on(sigName: "notify::layout-manager", callback: any): number
    once(sigName: "notify::layout-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
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
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: any): number
    on(sigName: "notify::overflow", callback: any): number
    once(sigName: "notify::overflow", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overflow", ...args: any[]): void
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
    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Placeholder extends Gtk.Widget {

    // Own properties of Granite-7.0.Granite.Placeholder

    static name: string

    // Constructors of Granite-7.0.Granite.Placeholder

    constructor(config?: Placeholder.ConstructorProperties) 
    constructor(title: string) 
    static new(title: string): Placeholder
    _init(config?: Placeholder.ConstructorProperties): void
}

export module SettingsSidebar {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Granite-7.0.Granite.SettingsSidebar

        stack?: Gtk.Stack | null
        visibleChildName?: string | null
    }

}

export interface SettingsSidebar {

    // Own properties of Granite-7.0.Granite.SettingsSidebar

    readonly stack: Gtk.Stack
    visibleChildName: string

    // Owm methods of Granite-7.0.Granite.SettingsSidebar

    getStack(): Gtk.Stack
    getVisibleChildName(): string | null
    setVisibleChildName(value: string | null): void

    // Class property signals of Granite-7.0.Granite.SettingsSidebar

    connect(sigName: "notify::stack", callback: any): number
    on(sigName: "notify::stack", callback: any): number
    once(sigName: "notify::stack", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stack", ...args: any[]): void
    connect(sigName: "notify::visible-child-name", callback: any): number
    on(sigName: "notify::visible-child-name", callback: any): number
    once(sigName: "notify::visible-child-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible-child-name", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: any): number
    on(sigName: "notify::can-focus", callback: any): number
    once(sigName: "notify::can-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: any): number
    on(sigName: "notify::can-target", callback: any): number
    once(sigName: "notify::can-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: any): number
    on(sigName: "notify::css-classes", callback: any): number
    once(sigName: "notify::css-classes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: any): number
    on(sigName: "notify::css-name", callback: any): number
    once(sigName: "notify::css-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: any): number
    on(sigName: "notify::cursor", callback: any): number
    once(sigName: "notify::cursor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: any): number
    on(sigName: "notify::focus-on-click", callback: any): number
    once(sigName: "notify::focus-on-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: any): number
    on(sigName: "notify::focusable", callback: any): number
    once(sigName: "notify::focusable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focusable", ...args: any[]): void
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
    connect(sigName: "notify::layout-manager", callback: any): number
    on(sigName: "notify::layout-manager", callback: any): number
    once(sigName: "notify::layout-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
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
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: any): number
    on(sigName: "notify::overflow", callback: any): number
    once(sigName: "notify::overflow", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overflow", ...args: any[]): void
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
    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SettingsSidebar extends Gtk.Widget {

    // Own properties of Granite-7.0.Granite.SettingsSidebar

    static name: string

    // Constructors of Granite-7.0.Granite.SettingsSidebar

    constructor(config?: SettingsSidebar.ConstructorProperties) 
    constructor(stack: Gtk.Stack) 
    static new(stack: Gtk.Stack): SettingsSidebar
    _init(config?: SettingsSidebar.ConstructorProperties): void
}

export module Settings {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Granite-7.0.Granite.Settings

        prefersColorScheme?: SettingsColorScheme | null
    }

}

export interface Settings {

    // Own properties of Granite-7.0.Granite.Settings

    prefersColorScheme: SettingsColorScheme

    // Owm methods of Granite-7.0.Granite.Settings

    getPrefersColorScheme(): SettingsColorScheme

    // Class property signals of Granite-7.0.Granite.Settings

    connect(sigName: "notify::prefers-color-scheme", callback: any): number
    on(sigName: "notify::prefers-color-scheme", callback: any): number
    once(sigName: "notify::prefers-color-scheme", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefers-color-scheme", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Settings extends GObject.Object {

    // Own properties of Granite-7.0.Granite.Settings

    static name: string

    // Constructors of Granite-7.0.Granite.Settings

    constructor(config?: Settings.ConstructorProperties) 
    _init(config?: Settings.ConstructorProperties): void
    static getDefault(): Settings
}

export module SwitchModelButton {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.ToggleButton.ConstructorProperties {

        // Own constructor properties of Granite-7.0.Granite.SwitchModelButton

        text?: string | null
        description?: string | null
    }

}

export interface SwitchModelButton {

    // Own properties of Granite-7.0.Granite.SwitchModelButton

    text: string
    description: string

    // Owm methods of Granite-7.0.Granite.SwitchModelButton

    getText(): string
    setText(value: string): void
    getDescription(): string | null
    setDescription(value: string | null): void

    // Conflicting methods

    activate(): void

    // Overloads of activate

    /**
     * For widgets that can be “activated” (buttons, menu items, etc.),
     * this function activates them.
     * 
     * The activation will emit the signal set using
     * [method`Gtk`.WidgetClass.set_activate_signal] during class initialization.
     * 
     * Activation is what happens when you press <kbd>Enter</kbd>
     * on a widget during key navigation.
     * 
     * If you wish to handle the activation keybinding yourself, it is
     * recommended to use [method`Gtk`.WidgetClass.add_shortcut] with an action
     * created with [ctor`Gtk`.SignalAction.new].
     * 
     * If `widget` isn't activatable, the function returns %FALSE.
     */
    activate(): boolean
    /**
     * For widgets that can be “activated” (buttons, menu items, etc.),
     * this function activates them.
     * 
     * The activation will emit the signal set using
     * [method`Gtk`.WidgetClass.set_activate_signal] during class initialization.
     * 
     * Activation is what happens when you press <kbd>Enter</kbd>
     * on a widget during key navigation.
     * 
     * If you wish to handle the activation keybinding yourself, it is
     * recommended to use [method`Gtk`.WidgetClass.add_shortcut] with an action
     * created with [ctor`Gtk`.SignalAction.new].
     * 
     * If `widget` isn't activatable, the function returns %FALSE.
     */
    activate(): boolean

    // Class property signals of Granite-7.0.Granite.SwitchModelButton

    connect(sigName: "notify::text", callback: any): number
    on(sigName: "notify::text", callback: any): number
    once(sigName: "notify::text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::active", callback: any): number
    on(sigName: "notify::active", callback: any): number
    once(sigName: "notify::active", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::group", callback: any): number
    on(sigName: "notify::group", callback: any): number
    once(sigName: "notify::group", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group", ...args: any[]): void
    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: any): number
    on(sigName: "notify::has-frame", callback: any): number
    once(sigName: "notify::has-frame", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: any): number
    on(sigName: "notify::use-underline", callback: any): number
    once(sigName: "notify::use-underline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: any): number
    on(sigName: "notify::can-focus", callback: any): number
    once(sigName: "notify::can-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: any): number
    on(sigName: "notify::can-target", callback: any): number
    once(sigName: "notify::can-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: any): number
    on(sigName: "notify::css-classes", callback: any): number
    once(sigName: "notify::css-classes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: any): number
    on(sigName: "notify::css-name", callback: any): number
    once(sigName: "notify::css-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: any): number
    on(sigName: "notify::cursor", callback: any): number
    once(sigName: "notify::cursor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: any): number
    on(sigName: "notify::focus-on-click", callback: any): number
    once(sigName: "notify::focus-on-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: any): number
    on(sigName: "notify::focusable", callback: any): number
    once(sigName: "notify::focusable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focusable", ...args: any[]): void
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
    connect(sigName: "notify::layout-manager", callback: any): number
    on(sigName: "notify::layout-manager", callback: any): number
    once(sigName: "notify::layout-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
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
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: any): number
    on(sigName: "notify::overflow", callback: any): number
    once(sigName: "notify::overflow", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overflow", ...args: any[]): void
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
    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SwitchModelButton extends Gtk.ToggleButton {

    // Own properties of Granite-7.0.Granite.SwitchModelButton

    static name: string

    // Constructors of Granite-7.0.Granite.SwitchModelButton

    constructor(config?: SwitchModelButton.ConstructorProperties) 
    constructor(text: string) 
    static new(text: string): SwitchModelButton

    // Overloads of new

    /**
     * Creates a new toggle button.
     * 
     * A widget should be packed into the button, as in [ctor`Gtk`.Button.new].
     * @constructor 
     */
    static new(): Gtk.ToggleButton
    _init(config?: SwitchModelButton.ConstructorProperties): void
}

export module TimePicker {

    // Signal callback interfaces

    /**
     * Signal callback interface for `time-changed`
     */
    export interface TimeChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Entry.ConstructorProperties {

        // Own constructor properties of Granite-7.0.Granite.TimePicker

        format12?: string | null
        format24?: string | null
        time?: GLib.DateTime | null
    }

}

export interface TimePicker {

    // Own properties of Granite-7.0.Granite.TimePicker

    readonly format12: string
    readonly format24: string
    time: GLib.DateTime

    // Owm methods of Granite-7.0.Granite.TimePicker

    getFormat12(): string
    getFormat24(): string
    getTime(): GLib.DateTime
    setTime(value: GLib.DateTime): void

    // Conflicting methods

    activate(): void

    // Overloads of activate

    /**
     * For widgets that can be “activated” (buttons, menu items, etc.),
     * this function activates them.
     * 
     * The activation will emit the signal set using
     * [method`Gtk`.WidgetClass.set_activate_signal] during class initialization.
     * 
     * Activation is what happens when you press <kbd>Enter</kbd>
     * on a widget during key navigation.
     * 
     * If you wish to handle the activation keybinding yourself, it is
     * recommended to use [method`Gtk`.WidgetClass.add_shortcut] with an action
     * created with [ctor`Gtk`.SignalAction.new].
     * 
     * If `widget` isn't activatable, the function returns %FALSE.
     */
    activate(): boolean
    /**
     * For widgets that can be “activated” (buttons, menu items, etc.),
     * this function activates them.
     * 
     * The activation will emit the signal set using
     * [method`Gtk`.WidgetClass.set_activate_signal] during class initialization.
     * 
     * Activation is what happens when you press <kbd>Enter</kbd>
     * on a widget during key navigation.
     * 
     * If you wish to handle the activation keybinding yourself, it is
     * recommended to use [method`Gtk`.WidgetClass.add_shortcut] with an action
     * created with [ctor`Gtk`.SignalAction.new].
     * 
     * If `widget` isn't activatable, the function returns %FALSE.
     */
    activate(): boolean

    // Own signals of Granite-7.0.Granite.TimePicker

    connect(sigName: "time-changed", callback: TimePicker.TimeChangedSignalCallback): number
    on(sigName: "time-changed", callback: TimePicker.TimeChangedSignalCallback): number
    once(sigName: "time-changed", callback: TimePicker.TimeChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "time-changed", ...args: any[]): void

    // Class property signals of Granite-7.0.Granite.TimePicker

    connect(sigName: "notify::format-12", callback: any): number
    on(sigName: "notify::format-12", callback: any): number
    once(sigName: "notify::format-12", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::format-12", ...args: any[]): void
    connect(sigName: "notify::format-24", callback: any): number
    on(sigName: "notify::format-24", callback: any): number
    once(sigName: "notify::format-24", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::format-24", ...args: any[]): void
    connect(sigName: "notify::time", callback: any): number
    on(sigName: "notify::time", callback: any): number
    once(sigName: "notify::time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::time", ...args: any[]): void
    connect(sigName: "notify::activates-default", callback: any): number
    on(sigName: "notify::activates-default", callback: any): number
    once(sigName: "notify::activates-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activates-default", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: any): number
    on(sigName: "notify::buffer", callback: any): number
    once(sigName: "notify::buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::completion", callback: any): number
    on(sigName: "notify::completion", callback: any): number
    once(sigName: "notify::completion", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::enable-emoji-completion", callback: any): number
    on(sigName: "notify::enable-emoji-completion", callback: any): number
    once(sigName: "notify::enable-emoji-completion", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enable-emoji-completion", ...args: any[]): void
    connect(sigName: "notify::extra-menu", callback: any): number
    on(sigName: "notify::extra-menu", callback: any): number
    once(sigName: "notify::extra-menu", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::extra-menu", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: any): number
    on(sigName: "notify::has-frame", callback: any): number
    once(sigName: "notify::has-frame", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: any): number
    on(sigName: "notify::im-module", callback: any): number
    once(sigName: "notify::im-module", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: any): number
    on(sigName: "notify::input-hints", callback: any): number
    once(sigName: "notify::input-hints", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: any): number
    on(sigName: "notify::input-purpose", callback: any): number
    once(sigName: "notify::input-purpose", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::invisible-char", callback: any): number
    on(sigName: "notify::invisible-char", callback: any): number
    once(sigName: "notify::invisible-char", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::invisible-char", ...args: any[]): void
    connect(sigName: "notify::invisible-char-set", callback: any): number
    on(sigName: "notify::invisible-char-set", callback: any): number
    once(sigName: "notify::invisible-char-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::invisible-char-set", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: any): number
    on(sigName: "notify::max-length", callback: any): number
    once(sigName: "notify::max-length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::overwrite-mode", callback: any): number
    on(sigName: "notify::overwrite-mode", callback: any): number
    once(sigName: "notify::overwrite-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overwrite-mode", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: any): number
    on(sigName: "notify::placeholder-text", callback: any): number
    once(sigName: "notify::placeholder-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::primary-icon-activatable", callback: any): number
    on(sigName: "notify::primary-icon-activatable", callback: any): number
    once(sigName: "notify::primary-icon-activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: any): number
    on(sigName: "notify::primary-icon-gicon", callback: any): number
    once(sigName: "notify::primary-icon-gicon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: any): number
    on(sigName: "notify::primary-icon-name", callback: any): number
    once(sigName: "notify::primary-icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-paintable", callback: any): number
    on(sigName: "notify::primary-icon-paintable", callback: any): number
    once(sigName: "notify::primary-icon-paintable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-paintable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-sensitive", callback: any): number
    on(sigName: "notify::primary-icon-sensitive", callback: any): number
    once(sigName: "notify::primary-icon-sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::primary-icon-storage-type", callback: any): number
    on(sigName: "notify::primary-icon-storage-type", callback: any): number
    once(sigName: "notify::primary-icon-storage-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: any): number
    on(sigName: "notify::primary-icon-tooltip-markup", callback: any): number
    once(sigName: "notify::primary-icon-tooltip-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: any): number
    on(sigName: "notify::primary-icon-tooltip-text", callback: any): number
    once(sigName: "notify::primary-icon-tooltip-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::progress-fraction", callback: any): number
    on(sigName: "notify::progress-fraction", callback: any): number
    once(sigName: "notify::progress-fraction", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::progress-fraction", ...args: any[]): void
    connect(sigName: "notify::progress-pulse-step", callback: any): number
    on(sigName: "notify::progress-pulse-step", callback: any): number
    once(sigName: "notify::progress-pulse-step", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::progress-pulse-step", ...args: any[]): void
    connect(sigName: "notify::scroll-offset", callback: any): number
    on(sigName: "notify::scroll-offset", callback: any): number
    once(sigName: "notify::scroll-offset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scroll-offset", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-activatable", callback: any): number
    on(sigName: "notify::secondary-icon-activatable", callback: any): number
    once(sigName: "notify::secondary-icon-activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: any): number
    on(sigName: "notify::secondary-icon-gicon", callback: any): number
    once(sigName: "notify::secondary-icon-gicon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: any): number
    on(sigName: "notify::secondary-icon-name", callback: any): number
    once(sigName: "notify::secondary-icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-paintable", callback: any): number
    on(sigName: "notify::secondary-icon-paintable", callback: any): number
    once(sigName: "notify::secondary-icon-paintable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-paintable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-sensitive", callback: any): number
    on(sigName: "notify::secondary-icon-sensitive", callback: any): number
    once(sigName: "notify::secondary-icon-sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-storage-type", callback: any): number
    on(sigName: "notify::secondary-icon-storage-type", callback: any): number
    once(sigName: "notify::secondary-icon-storage-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: any): number
    on(sigName: "notify::secondary-icon-tooltip-markup", callback: any): number
    once(sigName: "notify::secondary-icon-tooltip-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: any): number
    on(sigName: "notify::secondary-icon-tooltip-text", callback: any): number
    once(sigName: "notify::secondary-icon-tooltip-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::show-emoji-icon", callback: any): number
    on(sigName: "notify::show-emoji-icon", callback: any): number
    once(sigName: "notify::show-emoji-icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-emoji-icon", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: any): number
    on(sigName: "notify::tabs", callback: any): number
    once(sigName: "notify::tabs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::text-length", callback: any): number
    on(sigName: "notify::text-length", callback: any): number
    once(sigName: "notify::text-length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-length", ...args: any[]): void
    connect(sigName: "notify::truncate-multiline", callback: any): number
    on(sigName: "notify::truncate-multiline", callback: any): number
    once(sigName: "notify::truncate-multiline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::truncate-multiline", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: any): number
    on(sigName: "notify::visibility", callback: any): number
    once(sigName: "notify::visibility", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: any): number
    on(sigName: "notify::can-focus", callback: any): number
    once(sigName: "notify::can-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: any): number
    on(sigName: "notify::can-target", callback: any): number
    once(sigName: "notify::can-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: any): number
    on(sigName: "notify::css-classes", callback: any): number
    once(sigName: "notify::css-classes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: any): number
    on(sigName: "notify::css-name", callback: any): number
    once(sigName: "notify::css-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: any): number
    on(sigName: "notify::cursor", callback: any): number
    once(sigName: "notify::cursor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: any): number
    on(sigName: "notify::focus-on-click", callback: any): number
    once(sigName: "notify::focus-on-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: any): number
    on(sigName: "notify::focusable", callback: any): number
    once(sigName: "notify::focusable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focusable", ...args: any[]): void
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
    connect(sigName: "notify::layout-manager", callback: any): number
    on(sigName: "notify::layout-manager", callback: any): number
    once(sigName: "notify::layout-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
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
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: any): number
    on(sigName: "notify::overflow", callback: any): number
    once(sigName: "notify::overflow", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overflow", ...args: any[]): void
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
    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class TimePicker extends Gtk.Entry {

    // Own properties of Granite-7.0.Granite.TimePicker

    static name: string

    // Constructors of Granite-7.0.Granite.TimePicker

    constructor(config?: TimePicker.ConstructorProperties) 
    static withFormat(format12: string, format24: string): TimePicker
    constructor() 
    static new(): TimePicker

    // Overloads of new

    /**
     * Creates a new entry.
     * @constructor 
     */
    static new(): Gtk.Entry
    _init(config?: TimePicker.ConstructorProperties): void
}

export module Toast {

    // Signal callback interfaces

    /**
     * Signal callback interface for `closed`
     */
    export interface ClosedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `default-action`
     */
    export interface DefaultActionSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Granite-7.0.Granite.Toast

        title?: string | null
    }

}

export interface Toast {

    // Own properties of Granite-7.0.Granite.Toast

    title: string

    // Owm methods of Granite-7.0.Granite.Toast

    getTitle(): string
    setTitle(value: string): void
    setDefaultAction(label: string | null): void
    sendNotification(): void

    // Own signals of Granite-7.0.Granite.Toast

    connect(sigName: "closed", callback: Toast.ClosedSignalCallback): number
    on(sigName: "closed", callback: Toast.ClosedSignalCallback): number
    once(sigName: "closed", callback: Toast.ClosedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "closed", ...args: any[]): void
    connect(sigName: "default-action", callback: Toast.DefaultActionSignalCallback): number
    on(sigName: "default-action", callback: Toast.DefaultActionSignalCallback): number
    once(sigName: "default-action", callback: Toast.DefaultActionSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "default-action", ...args: any[]): void

    // Class property signals of Granite-7.0.Granite.Toast

    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: any): number
    on(sigName: "notify::can-focus", callback: any): number
    once(sigName: "notify::can-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: any): number
    on(sigName: "notify::can-target", callback: any): number
    once(sigName: "notify::can-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: any): number
    on(sigName: "notify::css-classes", callback: any): number
    once(sigName: "notify::css-classes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: any): number
    on(sigName: "notify::css-name", callback: any): number
    once(sigName: "notify::css-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: any): number
    on(sigName: "notify::cursor", callback: any): number
    once(sigName: "notify::cursor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: any): number
    on(sigName: "notify::focus-on-click", callback: any): number
    once(sigName: "notify::focus-on-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: any): number
    on(sigName: "notify::focusable", callback: any): number
    once(sigName: "notify::focusable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focusable", ...args: any[]): void
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
    connect(sigName: "notify::layout-manager", callback: any): number
    on(sigName: "notify::layout-manager", callback: any): number
    once(sigName: "notify::layout-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
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
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: any): number
    on(sigName: "notify::overflow", callback: any): number
    once(sigName: "notify::overflow", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overflow", ...args: any[]): void
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
    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Toast extends Gtk.Widget {

    // Own properties of Granite-7.0.Granite.Toast

    static name: string

    // Constructors of Granite-7.0.Granite.Toast

    constructor(config?: Toast.ConstructorProperties) 
    constructor(title: string) 
    static new(title: string): Toast
    _init(config?: Toast.ConstructorProperties): void
}

export module ValidatedEntry {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Entry.ConstructorProperties {

        // Own constructor properties of Granite-7.0.Granite.ValidatedEntry

        isValid?: boolean | null
        minLength?: number | null
        regex?: GLib.Regex | null
    }

}

export interface ValidatedEntry {

    // Own properties of Granite-7.0.Granite.ValidatedEntry

    isValid: boolean
    minLength: number
    regex: GLib.Regex

    // Owm methods of Granite-7.0.Granite.ValidatedEntry

    getIsValid(): boolean
    setIsValid(value: boolean): void
    getMinLength(): number
    setMinLength(value: number): void
    getRegex(): GLib.Regex
    setRegex(value: GLib.Regex): void

    // Conflicting methods

    activate(): void

    // Overloads of activate

    /**
     * For widgets that can be “activated” (buttons, menu items, etc.),
     * this function activates them.
     * 
     * The activation will emit the signal set using
     * [method`Gtk`.WidgetClass.set_activate_signal] during class initialization.
     * 
     * Activation is what happens when you press <kbd>Enter</kbd>
     * on a widget during key navigation.
     * 
     * If you wish to handle the activation keybinding yourself, it is
     * recommended to use [method`Gtk`.WidgetClass.add_shortcut] with an action
     * created with [ctor`Gtk`.SignalAction.new].
     * 
     * If `widget` isn't activatable, the function returns %FALSE.
     */
    activate(): boolean
    /**
     * For widgets that can be “activated” (buttons, menu items, etc.),
     * this function activates them.
     * 
     * The activation will emit the signal set using
     * [method`Gtk`.WidgetClass.set_activate_signal] during class initialization.
     * 
     * Activation is what happens when you press <kbd>Enter</kbd>
     * on a widget during key navigation.
     * 
     * If you wish to handle the activation keybinding yourself, it is
     * recommended to use [method`Gtk`.WidgetClass.add_shortcut] with an action
     * created with [ctor`Gtk`.SignalAction.new].
     * 
     * If `widget` isn't activatable, the function returns %FALSE.
     */
    activate(): boolean

    // Class property signals of Granite-7.0.Granite.ValidatedEntry

    connect(sigName: "notify::is-valid", callback: any): number
    on(sigName: "notify::is-valid", callback: any): number
    once(sigName: "notify::is-valid", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-valid", ...args: any[]): void
    connect(sigName: "notify::min-length", callback: any): number
    on(sigName: "notify::min-length", callback: any): number
    once(sigName: "notify::min-length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::min-length", ...args: any[]): void
    connect(sigName: "notify::regex", callback: any): number
    on(sigName: "notify::regex", callback: any): number
    once(sigName: "notify::regex", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::regex", ...args: any[]): void
    connect(sigName: "notify::activates-default", callback: any): number
    on(sigName: "notify::activates-default", callback: any): number
    once(sigName: "notify::activates-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activates-default", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: any): number
    on(sigName: "notify::buffer", callback: any): number
    once(sigName: "notify::buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::completion", callback: any): number
    on(sigName: "notify::completion", callback: any): number
    once(sigName: "notify::completion", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::enable-emoji-completion", callback: any): number
    on(sigName: "notify::enable-emoji-completion", callback: any): number
    once(sigName: "notify::enable-emoji-completion", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enable-emoji-completion", ...args: any[]): void
    connect(sigName: "notify::extra-menu", callback: any): number
    on(sigName: "notify::extra-menu", callback: any): number
    once(sigName: "notify::extra-menu", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::extra-menu", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: any): number
    on(sigName: "notify::has-frame", callback: any): number
    once(sigName: "notify::has-frame", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: any): number
    on(sigName: "notify::im-module", callback: any): number
    once(sigName: "notify::im-module", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: any): number
    on(sigName: "notify::input-hints", callback: any): number
    once(sigName: "notify::input-hints", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: any): number
    on(sigName: "notify::input-purpose", callback: any): number
    once(sigName: "notify::input-purpose", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::invisible-char", callback: any): number
    on(sigName: "notify::invisible-char", callback: any): number
    once(sigName: "notify::invisible-char", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::invisible-char", ...args: any[]): void
    connect(sigName: "notify::invisible-char-set", callback: any): number
    on(sigName: "notify::invisible-char-set", callback: any): number
    once(sigName: "notify::invisible-char-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::invisible-char-set", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: any): number
    on(sigName: "notify::max-length", callback: any): number
    once(sigName: "notify::max-length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::overwrite-mode", callback: any): number
    on(sigName: "notify::overwrite-mode", callback: any): number
    once(sigName: "notify::overwrite-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overwrite-mode", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: any): number
    on(sigName: "notify::placeholder-text", callback: any): number
    once(sigName: "notify::placeholder-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::primary-icon-activatable", callback: any): number
    on(sigName: "notify::primary-icon-activatable", callback: any): number
    once(sigName: "notify::primary-icon-activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: any): number
    on(sigName: "notify::primary-icon-gicon", callback: any): number
    once(sigName: "notify::primary-icon-gicon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: any): number
    on(sigName: "notify::primary-icon-name", callback: any): number
    once(sigName: "notify::primary-icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-paintable", callback: any): number
    on(sigName: "notify::primary-icon-paintable", callback: any): number
    once(sigName: "notify::primary-icon-paintable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-paintable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-sensitive", callback: any): number
    on(sigName: "notify::primary-icon-sensitive", callback: any): number
    once(sigName: "notify::primary-icon-sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::primary-icon-storage-type", callback: any): number
    on(sigName: "notify::primary-icon-storage-type", callback: any): number
    once(sigName: "notify::primary-icon-storage-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: any): number
    on(sigName: "notify::primary-icon-tooltip-markup", callback: any): number
    once(sigName: "notify::primary-icon-tooltip-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: any): number
    on(sigName: "notify::primary-icon-tooltip-text", callback: any): number
    once(sigName: "notify::primary-icon-tooltip-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::progress-fraction", callback: any): number
    on(sigName: "notify::progress-fraction", callback: any): number
    once(sigName: "notify::progress-fraction", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::progress-fraction", ...args: any[]): void
    connect(sigName: "notify::progress-pulse-step", callback: any): number
    on(sigName: "notify::progress-pulse-step", callback: any): number
    once(sigName: "notify::progress-pulse-step", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::progress-pulse-step", ...args: any[]): void
    connect(sigName: "notify::scroll-offset", callback: any): number
    on(sigName: "notify::scroll-offset", callback: any): number
    once(sigName: "notify::scroll-offset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scroll-offset", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-activatable", callback: any): number
    on(sigName: "notify::secondary-icon-activatable", callback: any): number
    once(sigName: "notify::secondary-icon-activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: any): number
    on(sigName: "notify::secondary-icon-gicon", callback: any): number
    once(sigName: "notify::secondary-icon-gicon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: any): number
    on(sigName: "notify::secondary-icon-name", callback: any): number
    once(sigName: "notify::secondary-icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-paintable", callback: any): number
    on(sigName: "notify::secondary-icon-paintable", callback: any): number
    once(sigName: "notify::secondary-icon-paintable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-paintable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-sensitive", callback: any): number
    on(sigName: "notify::secondary-icon-sensitive", callback: any): number
    once(sigName: "notify::secondary-icon-sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-storage-type", callback: any): number
    on(sigName: "notify::secondary-icon-storage-type", callback: any): number
    once(sigName: "notify::secondary-icon-storage-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: any): number
    on(sigName: "notify::secondary-icon-tooltip-markup", callback: any): number
    once(sigName: "notify::secondary-icon-tooltip-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: any): number
    on(sigName: "notify::secondary-icon-tooltip-text", callback: any): number
    once(sigName: "notify::secondary-icon-tooltip-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::show-emoji-icon", callback: any): number
    on(sigName: "notify::show-emoji-icon", callback: any): number
    once(sigName: "notify::show-emoji-icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-emoji-icon", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: any): number
    on(sigName: "notify::tabs", callback: any): number
    once(sigName: "notify::tabs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::text-length", callback: any): number
    on(sigName: "notify::text-length", callback: any): number
    once(sigName: "notify::text-length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-length", ...args: any[]): void
    connect(sigName: "notify::truncate-multiline", callback: any): number
    on(sigName: "notify::truncate-multiline", callback: any): number
    once(sigName: "notify::truncate-multiline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::truncate-multiline", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: any): number
    on(sigName: "notify::visibility", callback: any): number
    once(sigName: "notify::visibility", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: any): number
    on(sigName: "notify::can-focus", callback: any): number
    once(sigName: "notify::can-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: any): number
    on(sigName: "notify::can-target", callback: any): number
    once(sigName: "notify::can-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: any): number
    on(sigName: "notify::css-classes", callback: any): number
    once(sigName: "notify::css-classes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: any): number
    on(sigName: "notify::css-name", callback: any): number
    once(sigName: "notify::css-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: any): number
    on(sigName: "notify::cursor", callback: any): number
    once(sigName: "notify::cursor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: any): number
    on(sigName: "notify::focus-on-click", callback: any): number
    once(sigName: "notify::focus-on-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: any): number
    on(sigName: "notify::focusable", callback: any): number
    once(sigName: "notify::focusable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focusable", ...args: any[]): void
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
    connect(sigName: "notify::layout-manager", callback: any): number
    on(sigName: "notify::layout-manager", callback: any): number
    once(sigName: "notify::layout-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
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
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: any): number
    on(sigName: "notify::overflow", callback: any): number
    once(sigName: "notify::overflow", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overflow", ...args: any[]): void
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
    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ValidatedEntry extends Gtk.Entry {

    // Own properties of Granite-7.0.Granite.ValidatedEntry

    static name: string

    // Constructors of Granite-7.0.Granite.ValidatedEntry

    constructor(config?: ValidatedEntry.ConstructorProperties) 
    static fromRegex(regexArg: GLib.Regex): ValidatedEntry
    constructor() 
    static new(): ValidatedEntry

    // Overloads of new

    /**
     * Creates a new entry.
     * @constructor 
     */
    static new(): Gtk.Entry
    _init(config?: ValidatedEntry.ConstructorProperties): void
}

export interface DrawingBufferSurfaceClass {
}

export abstract class DrawingBufferSurfaceClass {

    // Own properties of Granite-7.0.Granite.DrawingBufferSurfaceClass

    static name: string
}

export interface DrawingBufferSurfacePrivate {
}

export class DrawingBufferSurfacePrivate {

    // Own properties of Granite-7.0.Granite.DrawingBufferSurfacePrivate

    static name: string
}

export interface DrawingColorClass {
}

export abstract class DrawingColorClass {

    // Own properties of Granite-7.0.Granite.DrawingColorClass

    static name: string
}

export interface DrawingColorPrivate {
}

export class DrawingColorPrivate {

    // Own properties of Granite-7.0.Granite.DrawingColorPrivate

    static name: string
}

export interface DrawingUtilitiesClass {
}

export abstract class DrawingUtilitiesClass {

    // Own properties of Granite-7.0.Granite.DrawingUtilitiesClass

    static name: string
}

export interface DrawingUtilitiesPrivate {
}

export class DrawingUtilitiesPrivate {

    // Own properties of Granite-7.0.Granite.DrawingUtilitiesPrivate

    static name: string
}

export interface ServicesContractorProxyClass {
}

export abstract class ServicesContractorProxyClass {

    // Own properties of Granite-7.0.Granite.ServicesContractorProxyClass

    static name: string
}

export interface ServicesContractorProxyPrivate {
}

export class ServicesContractorProxyPrivate {

    // Own properties of Granite-7.0.Granite.ServicesContractorProxyPrivate

    static name: string
}

export interface ServicesSystemClass {
}

export abstract class ServicesSystemClass {

    // Own properties of Granite-7.0.Granite.ServicesSystemClass

    static name: string
}

export interface ServicesSystemPrivate {
}

export class ServicesSystemPrivate {

    // Own properties of Granite-7.0.Granite.ServicesSystemPrivate

    static name: string
}

export interface ServicesContractIface {

    // Own fields of Granite-7.0.Granite.ServicesContractIface

    getDisplayName: (self: any) => string
    getDescription: (self: any) => string
    getIcon: (self: any) => Gio.Icon
    executeWithFile: (self: any, file: Gio.File) => void
    executeWithFiles: (self: any, files: Gio.File[]) => void
}

export abstract class ServicesContractIface {

    // Own properties of Granite-7.0.Granite.ServicesContractIface

    static name: string
}

export interface ServicesSettingsSerializableIface {

    // Own fields of Granite-7.0.Granite.ServicesSettingsSerializableIface

    settingsSerialize: (self: any) => string
    settingsDeserialize: (self: any, s: string) => void
}

export abstract class ServicesSettingsSerializableIface {

    // Own properties of Granite-7.0.Granite.ServicesSettingsSerializableIface

    static name: string
}

export interface SettingsPageClass {
}

export abstract class SettingsPageClass {

    // Own properties of Granite-7.0.Granite.SettingsPageClass

    static name: string
}

export interface SettingsPagePrivate {
}

export class SettingsPagePrivate {

    // Own properties of Granite-7.0.Granite.SettingsPagePrivate

    static name: string
}

export interface SimpleSettingsPageClass {
}

export abstract class SimpleSettingsPageClass {

    // Own properties of Granite-7.0.Granite.SimpleSettingsPageClass

    static name: string
}

export interface SimpleSettingsPagePrivate {
}

export class SimpleSettingsPagePrivate {

    // Own properties of Granite-7.0.Granite.SimpleSettingsPagePrivate

    static name: string
}

export interface AccelLabelClass {
}

export abstract class AccelLabelClass {

    // Own properties of Granite-7.0.Granite.AccelLabelClass

    static name: string
}

export interface AccelLabelPrivate {
}

export class AccelLabelPrivate {

    // Own properties of Granite-7.0.Granite.AccelLabelPrivate

    static name: string
}

export interface DatePickerClass {
}

export abstract class DatePickerClass {

    // Own properties of Granite-7.0.Granite.DatePickerClass

    static name: string
}

export interface DatePickerPrivate {
}

export class DatePickerPrivate {

    // Own properties of Granite-7.0.Granite.DatePickerPrivate

    static name: string
}

export interface DialogClass {
}

export abstract class DialogClass {

    // Own properties of Granite-7.0.Granite.DialogClass

    static name: string
}

export interface DialogPrivate {
}

export class DialogPrivate {

    // Own properties of Granite-7.0.Granite.DialogPrivate

    static name: string
}

export interface HeaderLabelClass {
}

export abstract class HeaderLabelClass {

    // Own properties of Granite-7.0.Granite.HeaderLabelClass

    static name: string
}

export interface HeaderLabelPrivate {
}

export class HeaderLabelPrivate {

    // Own properties of Granite-7.0.Granite.HeaderLabelPrivate

    static name: string
}

export interface HyperTextViewClass {
}

export abstract class HyperTextViewClass {

    // Own properties of Granite-7.0.Granite.HyperTextViewClass

    static name: string
}

export interface HyperTextViewPrivate {
}

export class HyperTextViewPrivate {

    // Own properties of Granite-7.0.Granite.HyperTextViewPrivate

    static name: string
}

export interface MessageDialogClass {
}

export abstract class MessageDialogClass {

    // Own properties of Granite-7.0.Granite.MessageDialogClass

    static name: string
}

export interface MessageDialogPrivate {
}

export class MessageDialogPrivate {

    // Own properties of Granite-7.0.Granite.MessageDialogPrivate

    static name: string
}

export interface ModeSwitchClass {
}

export abstract class ModeSwitchClass {

    // Own properties of Granite-7.0.Granite.ModeSwitchClass

    static name: string
}

export interface ModeSwitchPrivate {
}

export class ModeSwitchPrivate {

    // Own properties of Granite-7.0.Granite.ModeSwitchPrivate

    static name: string
}

export interface OverlayBarClass {
}

export abstract class OverlayBarClass {

    // Own properties of Granite-7.0.Granite.OverlayBarClass

    static name: string
}

export interface OverlayBarPrivate {
}

export class OverlayBarPrivate {

    // Own properties of Granite-7.0.Granite.OverlayBarPrivate

    static name: string
}

export interface PlaceholderClass {
}

export abstract class PlaceholderClass {

    // Own properties of Granite-7.0.Granite.PlaceholderClass

    static name: string
}

export interface PlaceholderPrivate {
}

export class PlaceholderPrivate {

    // Own properties of Granite-7.0.Granite.PlaceholderPrivate

    static name: string
}

export interface SettingsSidebarClass {
}

export abstract class SettingsSidebarClass {

    // Own properties of Granite-7.0.Granite.SettingsSidebarClass

    static name: string
}

export interface SettingsSidebarPrivate {
}

export class SettingsSidebarPrivate {

    // Own properties of Granite-7.0.Granite.SettingsSidebarPrivate

    static name: string
}

export interface SettingsClass {
}

export abstract class SettingsClass {

    // Own properties of Granite-7.0.Granite.SettingsClass

    static name: string
}

export interface SettingsPrivate {
}

export class SettingsPrivate {

    // Own properties of Granite-7.0.Granite.SettingsPrivate

    static name: string
}

export interface SwitchModelButtonClass {
}

export abstract class SwitchModelButtonClass {

    // Own properties of Granite-7.0.Granite.SwitchModelButtonClass

    static name: string
}

export interface SwitchModelButtonPrivate {
}

export class SwitchModelButtonPrivate {

    // Own properties of Granite-7.0.Granite.SwitchModelButtonPrivate

    static name: string
}

export interface TimePickerClass {
}

export abstract class TimePickerClass {

    // Own properties of Granite-7.0.Granite.TimePickerClass

    static name: string
}

export interface TimePickerPrivate {
}

export class TimePickerPrivate {

    // Own properties of Granite-7.0.Granite.TimePickerPrivate

    static name: string
}

export interface ToastClass {
}

export abstract class ToastClass {

    // Own properties of Granite-7.0.Granite.ToastClass

    static name: string
}

export interface ToastPrivate {
}

export class ToastPrivate {

    // Own properties of Granite-7.0.Granite.ToastPrivate

    static name: string
}

export interface ValidatedEntryClass {
}

export abstract class ValidatedEntryClass {

    // Own properties of Granite-7.0.Granite.ValidatedEntryClass

    static name: string
}

export interface ValidatedEntryPrivate {
}

export class ValidatedEntryPrivate {

    // Own properties of Granite-7.0.Granite.ValidatedEntryPrivate

    static name: string
}
