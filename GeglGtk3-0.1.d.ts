
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GeglGtk3-0.1
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
import type * as Gegl from './Gegl-0.4.js';
import type * as Babl from './Babl-0.1.js';

/**
 * Specifies the autoscaling behavior of #GeglGtkView.
 */
export enum ViewAutoscale {
    /**
     * Do not autoscale
     */
    DISABLED,
    /**
     * Automatically scale the widget size
     */
    WIDGET,
    /**
     * Automatically scale content to fit widget
     */
    CONTENT,
}
export module View {

    // Signal callback interfaces

    /**
     * Signal callback interface for `draw-background`
     */
    export interface DrawBackgroundSignalCallback {
        (cr: cairo.Context, rect: Gdk.Rectangle): void
    }

    /**
     * Signal callback interface for `draw-overlay`
     */
    export interface DrawOverlaySignalCallback {
        (cr: cairo.Context, rect: Gdk.Rectangle): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.DrawingArea.ConstructorProperties {

        // Own constructor properties of GeglGtk3-0.1.GeglGtk3.View

        autoscalePolicy?: ViewAutoscale | null
        block?: boolean | null
        node?: GObject.Object | null
        scale?: number | null
        x?: number | null
        y?: number | null
    }

}

export interface View extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of GeglGtk3-0.1.GeglGtk3.View

    autoscalePolicy: ViewAutoscale
    block: boolean
    node: GObject.Object
    scale: number
    x: number
    y: number

    // Owm methods of GeglGtk3-0.1.GeglGtk3.View

    /**
     * Get the autoscaling policy
     */
    getAutoscalePolicy(): ViewAutoscale
    /**
     * Get the displayed #GeglNode
     */
    getNode(): Gegl.Node
    /**
     * Getter for the :scale property
     */
    getScale(): number
    /**
     * Get the model->view transformation
     * 
     * The transformation matrix describes the transformation between the
     * model (the output of the GeglNode) and the view (the display in the widget).
     * To transform coordinates use gegl_matrix3_transform_point().
     * To get a matrix representing the view->model space transformation, use gegl_matrix3_invert()
     */
    getTransformation(): /* matrix */ Gegl.Matrix3
    /**
     * Getter for the :x property
     */
    getX(): number
    /**
     * Getter for the :y property
     */
    getY(): number
    /**
     * Set the autoscaling policy
     * @param autoscale #GeglGtkViewAutoscale policy to use
     */
    setAutoscalePolicy(autoscale: ViewAutoscale): void
    /**
     * Change the #GeglNode to display
     * @param node a #GeglNode instance or %NULL
     */
    setNode(node: Gegl.Node | null): void
    /**
     * Setter for the :scale property
     * @param scale 
     */
    setScale(scale: number): void
    /**
     * Setter for the :x property
     * @param x 
     */
    setX(x: number): void
    /**
     * Setter for the :y property
     * @param y 
     */
    setY(y: number): void

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

    // Own signals of GeglGtk3-0.1.GeglGtk3.View

    connect(sigName: "draw-background", callback: View.DrawBackgroundSignalCallback): number
    on(sigName: "draw-background", callback: View.DrawBackgroundSignalCallback): number
    once(sigName: "draw-background", callback: View.DrawBackgroundSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "draw-background", rect: Gdk.Rectangle, ...args: any[]): void
    connect(sigName: "draw-overlay", callback: View.DrawOverlaySignalCallback): number
    on(sigName: "draw-overlay", callback: View.DrawOverlaySignalCallback): number
    once(sigName: "draw-overlay", callback: View.DrawOverlaySignalCallback): number
    off(handlerId: number): number
    emit(sigName: "draw-overlay", rect: Gdk.Rectangle, ...args: any[]): void

    // Class property signals of GeglGtk3-0.1.GeglGtk3.View

    connect(sigName: "notify::autoscale-policy", callback: any): number
    on(sigName: "notify::autoscale-policy", callback: any): number
    once(sigName: "notify::autoscale-policy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::autoscale-policy", ...args: any[]): void
    connect(sigName: "notify::block", callback: any): number
    on(sigName: "notify::block", callback: any): number
    once(sigName: "notify::block", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::block", ...args: any[]): void
    connect(sigName: "notify::node", callback: any): number
    on(sigName: "notify::node", callback: any): number
    once(sigName: "notify::node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::scale", callback: any): number
    on(sigName: "notify::scale", callback: any): number
    once(sigName: "notify::scale", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::x", callback: any): number
    on(sigName: "notify::x", callback: any): number
    once(sigName: "notify::x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: any): number
    on(sigName: "notify::y", callback: any): number
    once(sigName: "notify::y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::y", ...args: any[]): void
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

export class View extends Gtk.DrawingArea {

    // Own properties of GeglGtk3-0.1.GeglGtk3.View

    static name: string

    // Constructors of GeglGtk3-0.1.GeglGtk3.View

    constructor(config?: View.ConstructorProperties) 
    /**
     * Create a new #GeglGtkView
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GeglGtkView
     * @constructor 
     */
    static new(): View

    // Overloads of new

    /**
     * Creates a new drawing area.
     * @constructor 
     */
    static new(): Gtk.DrawingArea
    static newForBuffer(buffer: Gegl.Buffer): View
    /**
     * Create a new #GeglGtkView for a given #GeglNode
     * @constructor 
     * @param node The #GeglNode to display
     */
    static newForNode(node: Gegl.Node): View
    _init(config?: View.ConstructorProperties): void
}

export interface ViewClass {
}

export abstract class ViewClass {

    // Own properties of GeglGtk3-0.1.GeglGtk3.ViewClass

    static name: string
}

export interface ViewPrivate {
}

export class ViewPrivate {

    // Own properties of GeglGtk3-0.1.GeglGtk3.ViewPrivate

    static name: string
}
