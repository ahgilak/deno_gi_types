
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gkbd-3.0
 */

import type * as xlib from './xlib-2.0.js';
import type * as Xkl from './Xkl-1.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Gtk from './Gtk-3.0.js';
import type * as Gdk from './Gdk-3.0.js';
import type * as cairo from './cairo-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GdkPixbuf from './GdkPixbuf-2.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as Atk from './Atk-1.0.js';

export enum KeyboardDrawingGroupLevelPosition {
    TOPLEFT,
    TOPRIGHT,
    BOTTOMLEFT,
    BOTTOMRIGHT,
    TOTAL,
    FIRST,
    LAST,
}
export enum KeyboardDrawingItemType {
    INVALID,
    KEY,
    KEY_EXTRA,
    DOODAD,
}
export const DESKTOP_SCHEMA: string
export const KEYBOARD_DRAWING_H: number
export const KEYBOARD_SCHEMA: string
export function installGlibLogAppender(): void
export function keyboardConfigAddDefaultSwitchOptionIfNecessary(layoutsList: string, optionsList: string, wasAppended: boolean): string[]
export function keyboardConfigFormatFullDescription(layoutDescr: string, variantDescr: string): string
export function keyboardConfigGetDescriptions(configRegistry: Xkl.ConfigRegistry, name: string, layoutShortDescr: string, layoutDescr: string, variantShortDescr: string, variantDescr: string): boolean
export function keyboardConfigMergeItems(parent: string, child: string): string
export function keyboardConfigSplitItems(merged: string, parent: string, child: string): boolean
export function previewLoadPosition(): Gdk.Rectangle
export function previewSavePosition(rect: Gdk.Rectangle): void
export function strvAppend(arr: string, element: string): string[]
export function strvBehead(arr: string): void
export function strvRemove(arr: string, element: string): boolean
export module Configuration {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `group-changed`
     */
    export interface GroupChangedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `indicators-changed`
     */
    export interface IndicatorsChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Configuration {

    // Own fields of Gkbd-3.0.Gkbd.Configuration

    parent: GObject.Object
    priv: ConfigurationPrivate

    // Owm methods of Gkbd-3.0.Gkbd.Configuration

    appendObject(obj: GObject.Object): void
    extractLayoutName(group: number): string
    freeImages(images: GdkPixbuf.Pixbuf[]): void
    getAllObjects(): GObject.Object[]
    getCapsLockState(): boolean
    getCurrentGroup(): number
    getCurrentTooltip(): string
    getGroupName(group: number): string
    getGroupNames(): string[]
    getImageFilename(group: number): string
    getIndicatorConfig(): IndicatorConfig
    getKeyboardConfig(): KeyboardConfig
    getNumLockState(): boolean
    getScrollLockState(): boolean
    getShortGroupNames(): string[]
    getXklEngine(): Xkl.Engine
    ifAnyObjectExists(): boolean
    ifFlagsShown(): boolean
    loadImages(): GdkPixbuf.Pixbuf[]
    lockGroup(group: number): void
    lockNextGroup(): void
    removeObject(obj: GObject.Object): void
    startListen(): void
    stopListen(): void

    // Own signals of Gkbd-3.0.Gkbd.Configuration

    connect(sigName: "changed", callback: Configuration.ChangedSignalCallback): number
    on(sigName: "changed", callback: Configuration.ChangedSignalCallback): number
    once(sigName: "changed", callback: Configuration.ChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "group-changed", callback: Configuration.GroupChangedSignalCallback): number
    on(sigName: "group-changed", callback: Configuration.GroupChangedSignalCallback): number
    once(sigName: "group-changed", callback: Configuration.GroupChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "group-changed", ...args: any[]): void
    connect(sigName: "indicators-changed", callback: Configuration.IndicatorsChangedSignalCallback): number
    on(sigName: "indicators-changed", callback: Configuration.IndicatorsChangedSignalCallback): number
    once(sigName: "indicators-changed", callback: Configuration.IndicatorsChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "indicators-changed", ...args: any[]): void

    // Class property signals of Gkbd-3.0.Gkbd.Configuration

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Configuration extends GObject.Object {

    // Own properties of Gkbd-3.0.Gkbd.Configuration

    static name: string

    // Constructors of Gkbd-3.0.Gkbd.Configuration

    constructor(config?: Configuration.ConstructorProperties) 
    _init(config?: Configuration.ConstructorProperties): void
    static createLabelTitle(group: number, ln2cntMap: GLib.HashTable, layoutName: string): string
    static get(): Configuration
}

export module Indicator {

    // Signal callback interfaces

    /**
     * Signal callback interface for `reinit-ui`
     */
    export interface ReinitUiSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Notebook.ConstructorProperties {
    }

}

export interface Indicator extends Atk.ImplementorIface, Gtk.Buildable {

    // Own fields of Gkbd-3.0.Gkbd.Indicator

    parent: Gtk.Notebook & Gtk.Container
    priv: IndicatorPrivate

    // Owm methods of Gkbd-3.0.Gkbd.Indicator

    // Has conflict: reinitUi(): void
    setAngle(angle: number): void
    setParentTooltips(ifset: boolean): void

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
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param childProperty the name of a child property installed on     the class of `container`
     */
    childNotify(child: Gtk.Widget, childProperty: string): void

    // Overloads of childNotify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Own virtual methods of Gkbd-3.0.Gkbd.Indicator

    reinitUi(): void

    // Own signals of Gkbd-3.0.Gkbd.Indicator

    connect(sigName: "reinit-ui", callback: Indicator.ReinitUiSignalCallback): number
    on(sigName: "reinit-ui", callback: Indicator.ReinitUiSignalCallback): number
    once(sigName: "reinit-ui", callback: Indicator.ReinitUiSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "reinit-ui", ...args: any[]): void

    // Class property signals of Gkbd-3.0.Gkbd.Indicator

    connect(sigName: "notify::enable-popup", callback: any): number
    on(sigName: "notify::enable-popup", callback: any): number
    once(sigName: "notify::enable-popup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enable-popup", ...args: any[]): void
    connect(sigName: "notify::group-name", callback: any): number
    on(sigName: "notify::group-name", callback: any): number
    once(sigName: "notify::group-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group-name", ...args: any[]): void
    connect(sigName: "notify::page", callback: any): number
    on(sigName: "notify::page", callback: any): number
    once(sigName: "notify::page", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::scrollable", callback: any): number
    on(sigName: "notify::scrollable", callback: any): number
    once(sigName: "notify::scrollable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scrollable", ...args: any[]): void
    connect(sigName: "notify::show-border", callback: any): number
    on(sigName: "notify::show-border", callback: any): number
    once(sigName: "notify::show-border", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-border", ...args: any[]): void
    connect(sigName: "notify::show-tabs", callback: any): number
    on(sigName: "notify::show-tabs", callback: any): number
    once(sigName: "notify::show-tabs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-tabs", ...args: any[]): void
    connect(sigName: "notify::tab-pos", callback: any): number
    on(sigName: "notify::tab-pos", callback: any): number
    once(sigName: "notify::tab-pos", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tab-pos", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: any): number
    on(sigName: "notify::border-width", callback: any): number
    once(sigName: "notify::border-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: any): number
    on(sigName: "notify::resize-mode", callback: any): number
    once(sigName: "notify::resize-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
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

export class Indicator extends Gtk.Notebook {

    // Own properties of Gkbd-3.0.Gkbd.Indicator

    static name: string

    // Constructors of Gkbd-3.0.Gkbd.Indicator

    constructor(config?: Indicator.ConstructorProperties) 
    constructor() 
    static new(): Indicator
    _init(config?: Indicator.ConstructorProperties): void
    static getGroupNames(): string[]
    static getImageFilename(group: number): string
    static getMaxWidthHeightRatio(): number
    static getXklEngine(): Xkl.Engine
}

export module KeyboardDrawing {

    // Signal callback interfaces

    /**
     * Signal callback interface for `bad-keycode`
     */
    export interface BadKeycodeSignalCallback {
        (object: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.DrawingArea.ConstructorProperties {
    }

}

export interface KeyboardDrawing extends Atk.ImplementorIface, Gtk.Buildable {

    // Owm methods of Gkbd-3.0.Gkbd.KeyboardDrawing

    getCompat(): string
    getGeometry(): string
    getKeycodes(): string
    getSymbols(): string
    getTypes(): string
    print(parentWindow: Gtk.Window, description: string): void
    /**
     * Renders a keyboard layout to a cairo_t context.  `cr` and `layout` can be got
     * from e.g. a GtkWidget or a GtkPrintContext.  `cr` and `layout` may be modified
     * by the function but will not be unreffed.
     * @param cr Cairo context to render to
     * @param layout Pango layout to use to render text
     * @param x left coordinate (pixels) of region to render in
     * @param y top coordinate (pixels) of region to render in
     * @param width width (pixels) of region to render in
     * @param height height (pixels) of region to render in
     * @param dpiX 
     * @param dpiY 
     */
    render(cr: cairo.Context, layout: Pango.Layout, x: number, y: number, width: number, height: number, dpiX: number, dpiY: number): boolean
    setGroupsLevels(groupLevels: KeyboardDrawingGroupLevel): void
    setLayout(id: string): void
    setTrackConfig(enable: boolean): void
    setTrackModifiers(enable: boolean): void

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

    // Own virtual methods of Gkbd-3.0.Gkbd.KeyboardDrawing

    badKeycode(keycode: number): void

    // Own signals of Gkbd-3.0.Gkbd.KeyboardDrawing

    connect(sigName: "bad-keycode", callback: KeyboardDrawing.BadKeycodeSignalCallback): number
    on(sigName: "bad-keycode", callback: KeyboardDrawing.BadKeycodeSignalCallback): number
    once(sigName: "bad-keycode", callback: KeyboardDrawing.BadKeycodeSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "bad-keycode", ...args: any[]): void

    // Class property signals of Gkbd-3.0.Gkbd.KeyboardDrawing

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

export class KeyboardDrawing extends Gtk.DrawingArea {

    // Own properties of Gkbd-3.0.Gkbd.KeyboardDrawing

    static name: string

    // Constructors of Gkbd-3.0.Gkbd.KeyboardDrawing

    constructor(config?: KeyboardDrawing.ConstructorProperties) 
    static dialogNew(): KeyboardDrawing
    constructor() 
    static new(): KeyboardDrawing
    _init(config?: KeyboardDrawing.ConstructorProperties): void
    static dialogSetGroup(dialog: Gtk.Widget, registry: Xkl.ConfigRegistry, group: number): void
    static dialogSetLayout(dialog: Gtk.Widget, registry: Xkl.ConfigRegistry, layout: string): void
}

export module Status {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.StatusIcon.ConstructorProperties {
    }

}

export interface Status {

    // Own fields of Gkbd-3.0.Gkbd.Status

    parent: Gtk.StatusIcon
    priv: any

    // Owm methods of Gkbd-3.0.Gkbd.Status

    reinitUi(): void

    // Class property signals of Gkbd-3.0.Gkbd.Status

    connect(sigName: "notify::embedded", callback: any): number
    on(sigName: "notify::embedded", callback: any): number
    once(sigName: "notify::embedded", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::embedded", ...args: any[]): void
    connect(sigName: "notify::file", callback: any): number
    on(sigName: "notify::file", callback: any): number
    once(sigName: "notify::file", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::gicon", callback: any): number
    on(sigName: "notify::gicon", callback: any): number
    once(sigName: "notify::gicon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::gicon", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: any): number
    on(sigName: "notify::has-tooltip", callback: any): number
    once(sigName: "notify::has-tooltip", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: "notify::pixbuf", callback: any): number
    on(sigName: "notify::pixbuf", callback: any): number
    once(sigName: "notify::pixbuf", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixbuf", ...args: any[]): void
    connect(sigName: "notify::screen", callback: any): number
    on(sigName: "notify::screen", callback: any): number
    once(sigName: "notify::screen", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::stock", callback: any): number
    on(sigName: "notify::stock", callback: any): number
    once(sigName: "notify::stock", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stock", ...args: any[]): void
    connect(sigName: "notify::storage-type", callback: any): number
    on(sigName: "notify::storage-type", callback: any): number
    once(sigName: "notify::storage-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::storage-type", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
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
    connect(sigName: "notify::visible", callback: any): number
    on(sigName: "notify::visible", callback: any): number
    once(sigName: "notify::visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Status extends Gtk.StatusIcon {

    // Own properties of Gkbd-3.0.Gkbd.Status

    static name: string

    // Constructors of Gkbd-3.0.Gkbd.Status

    constructor(config?: Status.ConstructorProperties) 
    constructor() 
    static new(): Status
    _init(config?: Status.ConstructorProperties): void
    static getGroupNames(): string[]
    static getImageFilename(group: number): string
    static getXklEngine(): Xkl.Engine
}

export interface ConfigurationClass {

    // Own fields of Gkbd-3.0.Gkbd.ConfigurationClass

    parentClass: GObject.ObjectClass
}

export abstract class ConfigurationClass {

    // Own properties of Gkbd-3.0.Gkbd.ConfigurationClass

    static name: string
}

export interface ConfigurationPrivate {
}

export class ConfigurationPrivate {

    // Own properties of Gkbd-3.0.Gkbd.ConfigurationPrivate

    static name: string
}

export interface DesktopConfig {

    // Own fields of Gkbd-3.0.Gkbd.DesktopConfig

    defaultGroup: number
    groupPerApp: boolean
    handleIndicators: boolean
    layoutNamesAsGroupNames: boolean
    loadExtraItems: boolean
    settings: Gio.Settings
    configListenerId: number
    engine: Xkl.Engine

    // Owm methods of Gkbd-3.0.Gkbd.DesktopConfig

    activate(): boolean
    init(engine: Xkl.Engine): void
    load(): void
    loadGroupDescriptions(registry: Xkl.ConfigRegistry, layoutIds: string, variantIds: string, shortGroupNames: string, fullGroupNames: string): boolean
    lockNextGroup(): void
    lockPrevGroup(): void
    restoreGroup(): void
    save(): void
    startListen(func: GObject.Callback): void
    stopListen(): void
    term(): void
}

export class DesktopConfig {

    // Own properties of Gkbd-3.0.Gkbd.DesktopConfig

    static name: string
}

export interface IndicatorClass {

    // Own fields of Gkbd-3.0.Gkbd.IndicatorClass

    parentClass: Gtk.NotebookClass
    reinitUi: (gki: Indicator) => void
}

export abstract class IndicatorClass {

    // Own properties of Gkbd-3.0.Gkbd.IndicatorClass

    static name: string
}

export interface IndicatorConfig {

    // Own fields of Gkbd-3.0.Gkbd.IndicatorConfig

    secondaryGroupsMask: number
    showFlags: boolean
    fontFamily: string
    fontSize: number
    foregroundColor: string
    backgroundColor: string
    settings: Gio.Settings
    imageFilenames: object[]
    iconTheme: Gtk.IconTheme
    configListenerId: number
    engine: Xkl.Engine

    // Owm methods of Gkbd-3.0.Gkbd.IndicatorConfig

    activate(): void
    freeImageFilenames(): void
    getFgColorForWidget(widget: Gtk.Widget): string
    getFontForWidget(widget: Gtk.Widget, fontFamily: string, fontSize: number): void
    getImagesFile(kbdConfig: KeyboardConfig, group: number): string
    init(engine: Xkl.Engine): void
    load(): void
    loadImageFilenames(kbdConfig: KeyboardConfig): void
    refreshStyle(): void
    save(): void
    startListen(func: GObject.Callback): void
    stopListen(): void
    term(): void
}

export class IndicatorConfig {

    // Own properties of Gkbd-3.0.Gkbd.IndicatorConfig

    static name: string
}

export interface IndicatorPrivate {
}

export class IndicatorPrivate {

    // Own properties of Gkbd-3.0.Gkbd.IndicatorPrivate

    static name: string
}

export interface KeyboardConfig {

    // Own fields of Gkbd-3.0.Gkbd.KeyboardConfig

    model: string
    layoutsVariants: string
    options: string
    settings: Gio.Settings
    configListenerId: number
    engine: Xkl.Engine

    // Owm methods of Gkbd-3.0.Gkbd.KeyboardConfig

    activate(): boolean
    equals(kbdConfig2: KeyboardConfig): boolean
    init(engine: Xkl.Engine): void
    load(kbdConfigDefault: KeyboardConfig): void
    loadFromXCurrent(buf: Xkl.ConfigRec): void
    loadFromXInitial(buf: Xkl.ConfigRec): void
    save(): void
    startListen(func: GObject.Callback): void
    stopListen(): void
    term(): void
    toString(): string
}

export class KeyboardConfig {

    // Own properties of Gkbd-3.0.Gkbd.KeyboardConfig

    static name: string

    // Constructors of Gkbd-3.0.Gkbd.KeyboardConfig

    static addDefaultSwitchOptionIfNecessary(layoutsList: string, optionsList: string, wasAppended: boolean): string[]
    static formatFullDescription(layoutDescr: string, variantDescr: string): string
    static getDescriptions(configRegistry: Xkl.ConfigRegistry, name: string, layoutShortDescr: string, layoutDescr: string, variantShortDescr: string, variantDescr: string): boolean
    static mergeItems(parent: string, child: string): string
    static splitItems(merged: string, parent: string, child: string): boolean
}

export interface KeyboardDrawingClass {

    // Own fields of Gkbd-3.0.Gkbd.KeyboardDrawingClass

    parentClass: Gtk.DrawingAreaClass
    badKeycode: (drawing: KeyboardDrawing, keycode: number) => void
}

export abstract class KeyboardDrawingClass {

    // Own properties of Gkbd-3.0.Gkbd.KeyboardDrawingClass

    static name: string
}

export interface KeyboardDrawingDoodad {
}

export class KeyboardDrawingDoodad {

    // Own properties of Gkbd-3.0.Gkbd.KeyboardDrawingDoodad

    static name: string
}

export interface KeyboardDrawingGroupLevel {

    // Own fields of Gkbd-3.0.Gkbd.KeyboardDrawingGroupLevel

    group: number
    level: number
}

export class KeyboardDrawingGroupLevel {

    // Own properties of Gkbd-3.0.Gkbd.KeyboardDrawingGroupLevel

    static name: string
}

export interface KeyboardDrawingItem {
}

export class KeyboardDrawingItem {

    // Own properties of Gkbd-3.0.Gkbd.KeyboardDrawingItem

    static name: string
}

export interface KeyboardDrawingKey {
}

export class KeyboardDrawingKey {

    // Own properties of Gkbd-3.0.Gkbd.KeyboardDrawingKey

    static name: string
}

export interface KeyboardDrawingRenderContext {

    // Own fields of Gkbd-3.0.Gkbd.KeyboardDrawingRenderContext

    cr: cairo.Context
    angle: number
    layout: Pango.Layout
    fontDesc: Pango.FontDescription
    scaleNumerator: number
    scaleDenominator: number
    darkColor: Gdk.RGBA
}

export class KeyboardDrawingRenderContext {

    // Own properties of Gkbd-3.0.Gkbd.KeyboardDrawingRenderContext

    static name: string
}

export interface StatusClass {

    // Own fields of Gkbd-3.0.Gkbd.StatusClass

    parentClass: Gtk.NotebookClass
}

export abstract class StatusClass {

    // Own properties of Gkbd-3.0.Gkbd.StatusClass

    static name: string
}

export interface StatusPrivate {
}

export class StatusPrivate {

    // Own properties of Gkbd-3.0.Gkbd.StatusPrivate

    static name: string
}
