
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * SpiceClientGtk-3.0
 */

import type * as SpiceClientGLib from './SpiceClientGLib-2.0.js';
import type * as GstBase from './GstBase-1.0.js';
import type * as Gst from './Gst-1.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as Gtk from './Gtk-3.0.js';
import type * as xlib from './xlib-2.0.js';
import type * as Gdk from './Gdk-3.0.js';
import type * as cairo from './cairo-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as GdkPixbuf from './GdkPixbuf-2.0.js';
import type * as Atk from './Atk-1.0.js';

/**
 * Constants for key events.
 */
export enum DisplayKeyEvent {
    /**
     * key press
     */
    PRESS,
    /**
     * key release
     */
    RELEASE,
    /**
     * key click (press and release)
     */
    CLICK,
}
export module Display {

    // Signal callback interfaces

    /**
     * Signal callback interface for `grab-keys-pressed`
     */
    export interface GrabKeysPressedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `keyboard-grab`
     */
    export interface KeyboardGrabSignalCallback {
        (status: number): void
    }

    /**
     * Signal callback interface for `mouse-grab`
     */
    export interface MouseGrabSignalCallback {
        (status: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.EventBox.ConstructorProperties {

        // Own constructor properties of SpiceClientGtk-3.0.SpiceClientGtk.Display

        /**
         * channel-id for this #SpiceDisplay
         */
        channelId?: number | null
        /**
         * Disable all keyboard & mouse inputs.
         */
        disableInputs?: boolean | null
        grabKeyboard?: boolean | null
        grabMouse?: boolean | null
        /**
         * Delay in ms of non-modifiers key press events. If the key is
         * released before this delay, a single press & release event is
         * sent to the server. If the key is pressed longer than the
         * keypress-delay, the server will receive the delayed press
         * event, and a following release event when the key is released.
         */
        keypressDelay?: number | null
        /**
         * Select monitor from #SpiceDisplay to show.
         * The value -1 means the whole display is shown.
         * By default, the monitor 0 is selected.
         */
        monitorId?: number | null
        /**
         * If scaling, only scale down, never up.
         */
        onlyDownscale?: boolean | null
        resizeGuest?: boolean | null
        scaling?: boolean | null
        /**
         * #SpiceSession for this #SpiceDisplay
         */
        session?: SpiceClientGLib.Session | null
        /**
         * Zoom level in percentage, from 10 to 400. Default to 100.
         * (this option is only supported with cairo backend when scaling
         * is enabled)
         */
        zoomLevel?: number | null
    }

}

export interface Display extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.Display

    /**
     * channel-id for this #SpiceDisplay
     */
    readonly channelId: number
    /**
     * Disable all keyboard & mouse inputs.
     */
    disableInputs: boolean
    grabKeyboard: boolean
    grabMouse: boolean
    /**
     * Delay in ms of non-modifiers key press events. If the key is
     * released before this delay, a single press & release event is
     * sent to the server. If the key is pressed longer than the
     * keypress-delay, the server will receive the delayed press
     * event, and a following release event when the key is released.
     */
    keypressDelay: number
    /**
     * Select monitor from #SpiceDisplay to show.
     * The value -1 means the whole display is shown.
     * By default, the monitor 0 is selected.
     */
    monitorId: number
    /**
     * If scaling, only scale down, never up.
     */
    onlyDownscale: boolean
    /**
     * Indicate whether the display is ready to be shown. It takes
     * into account several conditions, such as the channel display
     * "mark" state, whether the monitor area is visible..
     */
    readonly ready: boolean
    resizeGuest: boolean
    scaling: boolean
    /**
     * #SpiceSession for this #SpiceDisplay
     */
    readonly session: SpiceClientGLib.Session
    /**
     * Zoom level in percentage, from 10 to 400. Default to 100.
     * (this option is only supported with cairo backend when scaling
     * is enabled)
     */
    zoomLevel: number

    // Owm methods of SpiceClientGtk-3.0.SpiceClientGtk.Display

    /**
     * Finds the current grab key combination for the `display`.
     */
    getGrabKeys(): GrabSequence
    /**
     * Take a screenshot of the display.
     */
    getPixbuf(): GdkPixbuf.Pixbuf
    /**
     * Ungrab the mouse.
     */
    mouseUngrab(): void
    /**
     * Send keyval press/release events to the display.
     * @param keyvals Keyval array
     * @param kind #SpiceDisplayKeyEvent action
     */
    sendKeys(keyvals: number[], kind: DisplayKeyEvent): void
    /**
     * Set the key combination to grab/ungrab the keyboard. The default is
     * "Control L + Alt L".
     * @param seq key sequence
     */
    setGrabKeys(seq: GrabSequence): void

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

    // Own signals of SpiceClientGtk-3.0.SpiceClientGtk.Display

    connect(sigName: "grab-keys-pressed", callback: Display.GrabKeysPressedSignalCallback): number
    on(sigName: "grab-keys-pressed", callback: Display.GrabKeysPressedSignalCallback): number
    once(sigName: "grab-keys-pressed", callback: Display.GrabKeysPressedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "grab-keys-pressed", ...args: any[]): void
    connect(sigName: "keyboard-grab", callback: Display.KeyboardGrabSignalCallback): number
    on(sigName: "keyboard-grab", callback: Display.KeyboardGrabSignalCallback): number
    once(sigName: "keyboard-grab", callback: Display.KeyboardGrabSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "keyboard-grab", ...args: any[]): void
    connect(sigName: "mouse-grab", callback: Display.MouseGrabSignalCallback): number
    on(sigName: "mouse-grab", callback: Display.MouseGrabSignalCallback): number
    once(sigName: "mouse-grab", callback: Display.MouseGrabSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "mouse-grab", ...args: any[]): void

    // Class property signals of SpiceClientGtk-3.0.SpiceClientGtk.Display

    connect(sigName: "notify::channel-id", callback: any): number
    on(sigName: "notify::channel-id", callback: any): number
    once(sigName: "notify::channel-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::channel-id", ...args: any[]): void
    connect(sigName: "notify::disable-inputs", callback: any): number
    on(sigName: "notify::disable-inputs", callback: any): number
    once(sigName: "notify::disable-inputs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::disable-inputs", ...args: any[]): void
    connect(sigName: "notify::grab-keyboard", callback: any): number
    on(sigName: "notify::grab-keyboard", callback: any): number
    once(sigName: "notify::grab-keyboard", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::grab-keyboard", ...args: any[]): void
    connect(sigName: "notify::grab-mouse", callback: any): number
    on(sigName: "notify::grab-mouse", callback: any): number
    once(sigName: "notify::grab-mouse", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::grab-mouse", ...args: any[]): void
    connect(sigName: "notify::keypress-delay", callback: any): number
    on(sigName: "notify::keypress-delay", callback: any): number
    once(sigName: "notify::keypress-delay", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::keypress-delay", ...args: any[]): void
    connect(sigName: "notify::monitor-id", callback: any): number
    on(sigName: "notify::monitor-id", callback: any): number
    once(sigName: "notify::monitor-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::monitor-id", ...args: any[]): void
    connect(sigName: "notify::only-downscale", callback: any): number
    on(sigName: "notify::only-downscale", callback: any): number
    once(sigName: "notify::only-downscale", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::only-downscale", ...args: any[]): void
    connect(sigName: "notify::ready", callback: any): number
    on(sigName: "notify::ready", callback: any): number
    once(sigName: "notify::ready", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ready", ...args: any[]): void
    connect(sigName: "notify::resize-guest", callback: any): number
    on(sigName: "notify::resize-guest", callback: any): number
    once(sigName: "notify::resize-guest", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resize-guest", ...args: any[]): void
    connect(sigName: "notify::scaling", callback: any): number
    on(sigName: "notify::scaling", callback: any): number
    once(sigName: "notify::scaling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scaling", ...args: any[]): void
    connect(sigName: "notify::session", callback: any): number
    on(sigName: "notify::session", callback: any): number
    once(sigName: "notify::session", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::zoom-level", callback: any): number
    on(sigName: "notify::zoom-level", callback: any): number
    once(sigName: "notify::zoom-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::zoom-level", ...args: any[]): void
    connect(sigName: "notify::above-child", callback: any): number
    on(sigName: "notify::above-child", callback: any): number
    once(sigName: "notify::above-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::above-child", ...args: any[]): void
    connect(sigName: "notify::visible-window", callback: any): number
    on(sigName: "notify::visible-window", callback: any): number
    once(sigName: "notify::visible-window", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible-window", ...args: any[]): void
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

/**
 * The #SpiceDisplay struct is opaque and should not be accessed directly.
 * @class 
 */
export class Display extends Gtk.EventBox {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.Display

    static name: string

    // Constructors of SpiceClientGtk-3.0.SpiceClientGtk.Display

    constructor(config?: Display.ConstructorProperties) 
    /**
     * Creates a new #SpiceDisplay widget.
     * @constructor 
     * @param session a #SpiceSession
     * @param channelId the display channel ID to associate with #SpiceDisplay
     */
    constructor(session: SpiceClientGLib.Session, channelId: number) 
    /**
     * Creates a new #SpiceDisplay widget.
     * @constructor 
     * @param session a #SpiceSession
     * @param channelId the display channel ID to associate with #SpiceDisplay
     */
    static new(session: SpiceClientGLib.Session, channelId: number): Display

    // Overloads of new

    /**
     * Creates a new #GtkEventBox.
     * @constructor 
     */
    static new(): Gtk.EventBox
    /**
     * Creates a new #SpiceDisplay widget associated with the monitor id.
     * @constructor 
     * @param session a #SpiceSession
     * @param channelId the display channel ID to associate with #SpiceDisplay
     * @param monitorId the monitor id within the display channel
     */
    static newWithMonitor(session: SpiceClientGLib.Session, channelId: number, monitorId: number): Display
    _init(config?: Display.ConstructorProperties): void
}

export module GtkSession {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of SpiceClientGtk-3.0.SpiceClientGtk.GtkSession

        /**
         * When this is true the clipboard gets automatically shared between host
         * and guest.
         */
        autoClipboard?: boolean | null
        /**
         * Automatically redirect newly plugged in USB devices. Note the auto
         * redirection only happens when a #SpiceDisplay associated with the
         * session had keyboard focus.
         */
        autoUsbredir?: boolean | null
        /**
         * #SpiceSession this #SpiceGtkSession is associated with
         */
        session?: SpiceClientGLib.Session | null
        /**
         * Automatically sync modifiers (Caps, Num and Scroll locks) with the guest.
         */
        syncModifiers?: boolean | null
    }

}

export interface GtkSession {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.GtkSession

    /**
     * When this is true the clipboard gets automatically shared between host
     * and guest.
     */
    autoClipboard: boolean
    /**
     * Automatically redirect newly plugged in USB devices. Note the auto
     * redirection only happens when a #SpiceDisplay associated with the
     * session had keyboard focus.
     */
    autoUsbredir: boolean
    /**
     * Returns %TRUE if the pointer is currently grabbed by this session.
     */
    readonly pointerGrabbed: boolean
    /**
     * #SpiceSession this #SpiceGtkSession is associated with
     */
    readonly session: SpiceClientGLib.Session
    /**
     * Automatically sync modifiers (Caps, Num and Scroll locks) with the guest.
     */
    syncModifiers: boolean

    // Owm methods of SpiceClientGtk-3.0.SpiceClientGtk.GtkSession

    /**
     * Copy client-side clipboard to guest clipboard.
     * 
     * Since 0.8
     */
    copyToGuest(): void
    /**
     * Copy guest clipboard to client-side clipboard.
     * 
     * Since 0.8
     */
    pasteFromGuest(): void

    // Class property signals of SpiceClientGtk-3.0.SpiceClientGtk.GtkSession

    connect(sigName: "notify::auto-clipboard", callback: any): number
    on(sigName: "notify::auto-clipboard", callback: any): number
    once(sigName: "notify::auto-clipboard", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::auto-clipboard", ...args: any[]): void
    connect(sigName: "notify::auto-usbredir", callback: any): number
    on(sigName: "notify::auto-usbredir", callback: any): number
    once(sigName: "notify::auto-usbredir", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::auto-usbredir", ...args: any[]): void
    connect(sigName: "notify::pointer-grabbed", callback: any): number
    on(sigName: "notify::pointer-grabbed", callback: any): number
    once(sigName: "notify::pointer-grabbed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pointer-grabbed", ...args: any[]): void
    connect(sigName: "notify::session", callback: any): number
    on(sigName: "notify::session", callback: any): number
    once(sigName: "notify::session", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: "notify::sync-modifiers", callback: any): number
    on(sigName: "notify::sync-modifiers", callback: any): number
    once(sigName: "notify::sync-modifiers", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sync-modifiers", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #SpiceGtkSession struct is opaque and should not be accessed directly.
 * @class 
 */
export class GtkSession extends GObject.Object {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.GtkSession

    static name: string

    // Constructors of SpiceClientGtk-3.0.SpiceClientGtk.GtkSession

    constructor(config?: GtkSession.ConstructorProperties) 
    _init(config?: GtkSession.ConstructorProperties): void
    /**
     * Gets the #SpiceGtkSession associated with the passed in #SpiceSession.
     * A new #SpiceGtkSession instance will be created the first time this
     * function is called for a certain #SpiceSession.
     * 
     * Note that this function returns a weak reference, which should not be used
     * after the #SpiceSession itself has been unref-ed by the caller.
     * @param session #SpiceSession for which to get the #SpiceGtkSession
     */
    static get(session: SpiceClientGLib.Session): GtkSession
}

export module UsbDeviceWidget {

    // Signal callback interfaces

    /**
     * Signal callback interface for `connect-failed`
     */
    export interface ConnectFailedSignalCallback {
        (device: SpiceClientGLib.UsbDevice, error: GLib.Error): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of SpiceClientGtk-3.0.SpiceClientGtk.UsbDeviceWidget

        /**
         * Format string to pass to spice_usb_device_get_description() for getting
         * the device USB descriptions.
         */
        deviceFormatString?: string | null
        /**
         * #SpiceSession this #SpiceUsbDeviceWidget is associated with
         */
        session?: SpiceClientGLib.Session | null
    }

}

export interface UsbDeviceWidget extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.UsbDeviceWidget

    /**
     * Format string to pass to spice_usb_device_get_description() for getting
     * the device USB descriptions.
     */
    readonly deviceFormatString: string
    /**
     * #SpiceSession this #SpiceUsbDeviceWidget is associated with
     */
    readonly session: SpiceClientGLib.Session

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

    // Own signals of SpiceClientGtk-3.0.SpiceClientGtk.UsbDeviceWidget

    connect(sigName: "connect-failed", callback: UsbDeviceWidget.ConnectFailedSignalCallback): number
    on(sigName: "connect-failed", callback: UsbDeviceWidget.ConnectFailedSignalCallback): number
    once(sigName: "connect-failed", callback: UsbDeviceWidget.ConnectFailedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "connect-failed", error: GLib.Error, ...args: any[]): void

    // Class property signals of SpiceClientGtk-3.0.SpiceClientGtk.UsbDeviceWidget

    connect(sigName: "notify::device-format-string", callback: any): number
    on(sigName: "notify::device-format-string", callback: any): number
    once(sigName: "notify::device-format-string", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::device-format-string", ...args: any[]): void
    connect(sigName: "notify::session", callback: any): number
    on(sigName: "notify::session", callback: any): number
    once(sigName: "notify::session", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::session", ...args: any[]): void
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
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #SpiceUsbDeviceWidget struct is opaque and should not be accessed directly.
 * @class 
 */
export class UsbDeviceWidget extends Gtk.Box {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.UsbDeviceWidget

    static name: string

    // Constructors of SpiceClientGtk-3.0.SpiceClientGtk.UsbDeviceWidget

    constructor(config?: UsbDeviceWidget.ConstructorProperties) 
    /**
     * Creates a new widget to control USB redirection.
     * @constructor 
     * @param session #SpiceSession for which to widget will control USB redirection
     * @param deviceFormatString String passed to spice_usb_device_get_description()
     */
    constructor(session: SpiceClientGLib.Session, deviceFormatString: string | null) 
    /**
     * Creates a new widget to control USB redirection.
     * @constructor 
     * @param session #SpiceSession for which to widget will control USB redirection
     * @param deviceFormatString String passed to spice_usb_device_get_description()
     */
    static new(session: SpiceClientGLib.Session, deviceFormatString: string | null): UsbDeviceWidget

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: UsbDeviceWidget.ConstructorProperties): void
}

export interface DisplayClass {
}

/**
 * Class structure for #SpiceDisplay. It is opaque and should not be accessed directly.
 * @record 
 */
export abstract class DisplayClass {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.DisplayClass

    static name: string
}

export interface GrabSequence {

    // Owm methods of SpiceClientGtk-3.0.SpiceClientGtk.GrabSequence

    /**
     * Creates a string representing the `sequence`.
     */
    asString(): string
    /**
     * Creates a copy of the `sequence`.
     */
    copy(): GrabSequence
    /**
     * Free `sequence`.
     */
    free(): void
}

/**
 * An opaque type that represents a grab sequence.
 * @record 
 */
export class GrabSequence {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.GrabSequence

    static name: string

    // Constructors of SpiceClientGtk-3.0.SpiceClientGtk.GrabSequence

    /**
     * Creates a new grab sequence from a list of keysym values
     * @constructor 
     * @param keysyms the keysym values
     */
    constructor(keysyms: number[]) 
    /**
     * Creates a new grab sequence from a list of keysym values
     * @constructor 
     * @param keysyms the keysym values
     */
    static new(keysyms: number[]): GrabSequence
    /**
     * Creates a new #SpiceGrabSequence from the string representation.
     * @constructor 
     * @param str a string of '+' separated key names (ex: "Control_L+Alt_L")
     */
    static newFromString(str: string): GrabSequence
}

export interface GtkSessionClass {
}

/**
 * Class structure for #SpiceGtkSession. It is opaque and should not be accessed directly.
 * @record 
 */
export abstract class GtkSessionClass {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.GtkSessionClass

    static name: string
}

export interface UsbDeviceWidgetClass {
}

/**
 * Class structure for #SpiceUsbDeviceWidget. It is opaque and should not be accessed directly.
 * @record 
 */
export abstract class UsbDeviceWidgetClass {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.UsbDeviceWidgetClass

    static name: string
}

export interface UsbDeviceWidgetPrivate {
}

export class UsbDeviceWidgetPrivate {

    // Own properties of SpiceClientGtk-3.0.SpiceClientGtk.UsbDeviceWidgetPrivate

    static name: string
}
