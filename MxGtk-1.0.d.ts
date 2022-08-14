
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * MxGtk-1.0
 */

import type * as cairo from './cairo-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Gtk from './Gtk-2.0.js';
import type * as Gdk from './Gdk-2.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GdkPixbuf from './GdkPixbuf-2.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as Atk from './Atk-1.0.js';

export module Frame {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Frame.ConstructorProperties {
    }

}

export interface Frame extends Atk.ImplementorIface, Gtk.Buildable {

    // Conflicting methods

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the the
     * <link linkend="BUILDER-UI">GtkBuilder UI definition</link>
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
     * #GtkBuilder sets the name based on the the
     * <link linkend="BUILDER-UI">GtkBuilder UI definition</link>
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
     * gtkrc file. You can apply a style to widgets with a particular name
     * in the gtkrc file. See the documentation for gtkrc files (on the
     * same page as the docs for #GtkRcStyle).
     * 
     * Note that widget names are separated by periods in paths (see
     * gtk_widget_path()), so names with embedded periods may cause confusion.
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
     * Destroys a widget. Equivalent to gtk_object_destroy(), except that
     * you don't have to cast the widget to #GtkObject. When a widget is
     * destroyed, it will break any references it holds to other objects.
     * If the widget is inside a container, the widget will be removed
     * from the container. If the widget is a toplevel (derived from
     * #GtkWindow), it will be removed from the list of toplevels, and the
     * reference GTK+ holds to it will be removed. Removing a
     * widget from its container or the list of toplevels results in the
     * widget being finalized, unless you've added additional references
     * to the widget with g_object_ref().
     * 
     * In most cases, only toplevel widgets (windows) require explicit
     * destruction, because when you destroy a toplevel its children will
     * be destroyed as well.
     */
    destroy(): void

    // Overloads of destroy

    destroy(): void
    destroy(): void

    // Class property signals of MxGtk-1.0.MxGtk.Frame

    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::shadow", callback: any): number
    on(sigName: "notify::shadow", callback: any): number
    once(sigName: "notify::shadow", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::shadow", ...args: any[]): void
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
    connect(sigName: "notify::extension-events", callback: any): number
    on(sigName: "notify::extension-events", callback: any): number
    once(sigName: "notify::extension-events", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::extension-events", ...args: any[]): void
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
    connect(sigName: "notify::is-focus", callback: any): number
    on(sigName: "notify::is-focus", callback: any): number
    once(sigName: "notify::is-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: any): number
    on(sigName: "notify::no-show-all", callback: any): number
    once(sigName: "notify::no-show-all", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: any): number
    on(sigName: "notify::receives-default", callback: any): number
    once(sigName: "notify::receives-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
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
    connect(sigName: "notify::user-data", callback: any): number
    on(sigName: "notify::user-data", callback: any): number
    once(sigName: "notify::user-data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user-data", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The contents of this structure are private and should only be accessed
 * through the public API.
 * @class 
 */
export class Frame extends Gtk.Frame {

    // Own properties of MxGtk-1.0.MxGtk.Frame

    static name: string

    // Constructors of MxGtk-1.0.MxGtk.Frame

    constructor(config?: Frame.ConstructorProperties) 
    /**
     * Create a new specially styled frame.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new specially styled frame.
     * @constructor 
     */
    static new(): Frame

    // Overloads of new

    /**
     * Creates a new #GtkFrame, with optional label `label`.
     * If `label` is %NULL, the label is omitted.
     * @constructor 
     * @param label the text to use as the label of the frame
     */
    static new(label: string): Gtk.Frame
    _init(config?: Frame.ConstructorProperties): void
}

export module LightSwitch {

    // Signal callback interfaces

    /**
     * Signal callback interface for `switch-flipped`
     */
    export interface SwitchFlippedSignalCallback {
        (object: boolean): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.DrawingArea.ConstructorProperties {

        // Own constructor properties of MxGtk-1.0.MxGtk.LightSwitch

        active?: boolean | null
    }

}

export interface LightSwitch extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of MxGtk-1.0.MxGtk.LightSwitch

    active: boolean

    // Owm methods of MxGtk-1.0.MxGtk.LightSwitch

    /**
     * Get the value of the "active" property
     */
    getActive(): boolean
    /**
     * Set the value of the "active" property
     * @param active #TRUE to set the switch to its ON state
     */
    setActive(active: boolean): void

    // Conflicting methods

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the the
     * <link linkend="BUILDER-UI">GtkBuilder UI definition</link>
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
     * #GtkBuilder sets the name based on the the
     * <link linkend="BUILDER-UI">GtkBuilder UI definition</link>
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
     * gtkrc file. You can apply a style to widgets with a particular name
     * in the gtkrc file. See the documentation for gtkrc files (on the
     * same page as the docs for #GtkRcStyle).
     * 
     * Note that widget names are separated by periods in paths (see
     * gtk_widget_path()), so names with embedded periods may cause confusion.
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
     * Destroys a widget. Equivalent to gtk_object_destroy(), except that
     * you don't have to cast the widget to #GtkObject. When a widget is
     * destroyed, it will break any references it holds to other objects.
     * If the widget is inside a container, the widget will be removed
     * from the container. If the widget is a toplevel (derived from
     * #GtkWindow), it will be removed from the list of toplevels, and the
     * reference GTK+ holds to it will be removed. Removing a
     * widget from its container or the list of toplevels results in the
     * widget being finalized, unless you've added additional references
     * to the widget with g_object_ref().
     * 
     * In most cases, only toplevel widgets (windows) require explicit
     * destruction, because when you destroy a toplevel its children will
     * be destroyed as well.
     */
    destroy(): void

    // Overloads of destroy

    destroy(): void
    destroy(): void

    // Own virtual methods of MxGtk-1.0.MxGtk.LightSwitch

    switchFlipped(state: boolean): void

    // Own signals of MxGtk-1.0.MxGtk.LightSwitch

    connect(sigName: "switch-flipped", callback: LightSwitch.SwitchFlippedSignalCallback): number
    on(sigName: "switch-flipped", callback: LightSwitch.SwitchFlippedSignalCallback): number
    once(sigName: "switch-flipped", callback: LightSwitch.SwitchFlippedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "switch-flipped", ...args: any[]): void

    // Class property signals of MxGtk-1.0.MxGtk.LightSwitch

    connect(sigName: "notify::active", callback: any): number
    on(sigName: "notify::active", callback: any): number
    once(sigName: "notify::active", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active", ...args: any[]): void
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
    connect(sigName: "notify::extension-events", callback: any): number
    on(sigName: "notify::extension-events", callback: any): number
    once(sigName: "notify::extension-events", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::extension-events", ...args: any[]): void
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
    connect(sigName: "notify::is-focus", callback: any): number
    on(sigName: "notify::is-focus", callback: any): number
    once(sigName: "notify::is-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: any): number
    on(sigName: "notify::no-show-all", callback: any): number
    once(sigName: "notify::no-show-all", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: any): number
    on(sigName: "notify::receives-default", callback: any): number
    once(sigName: "notify::receives-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
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
    connect(sigName: "notify::user-data", callback: any): number
    on(sigName: "notify::user-data", callback: any): number
    once(sigName: "notify::user-data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user-data", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The contents of this structure are private and should only be accessed
 * through the public API.
 * @class 
 */
export class LightSwitch extends Gtk.DrawingArea {

    // Own properties of MxGtk-1.0.MxGtk.LightSwitch

    static name: string

    // Constructors of MxGtk-1.0.MxGtk.LightSwitch

    constructor(config?: LightSwitch.ConstructorProperties) 
    /**
     * Create a #MxGtkLightSwitch
     * @constructor 
     */
    constructor() 
    /**
     * Create a #MxGtkLightSwitch
     * @constructor 
     */
    static new(): LightSwitch
    _init(config?: LightSwitch.ConstructorProperties): void
}

export interface FrameClass {

    // Own fields of MxGtk-1.0.MxGtk.FrameClass

    parentClass: Gtk.FrameClass
}

export abstract class FrameClass {

    // Own properties of MxGtk-1.0.MxGtk.FrameClass

    static name: string
}

export interface LightSwitchClass {

    // Own fields of MxGtk-1.0.MxGtk.LightSwitchClass

    parentClass: Gtk.DrawingAreaClass
    switchFlipped: (lightswitch: LightSwitch, state: boolean) => void
}

export abstract class LightSwitchClass {

    // Own properties of MxGtk-1.0.MxGtk.LightSwitchClass

    static name: string
}
