
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GcrUi-3
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
import type * as Gcr from './Gcr-3.js';
import type * as Gck from './Gck-1.js';

/**
 * If a [class`CollectionModel]` is created with a mode of
 * %GCR_COLLECTION_MODEL_TREE, then any included objects that are themselves a
 * [iface`Gcr`.Collection], will have all child
 * objects include as child rows in a tree form.
 */
export enum CollectionModelMode {
    /**
     * only objects in the top collection, no child objects
     */
    LIST,
    /**
     * show objects in the collection, and child objects in a tree form
     */
    TREE,
}
/**
 * Create and initialize a renderer for the given attributes and label. These
 * renderers should have been preregistered via gcr_renderer_register().
 * @param label The label for the renderer
 * @param attrs The attributes to render
 */
export function rendererCreate(label: string | null, attrs: Gck.Attributes): Renderer | null
/**
 * Register a renderer to be created when matching attributes are passed to
 * gcr_renderer_create().
 * @param rendererType The renderer class type
 * @param attrs The attributes to match
 */
export function rendererRegister(rendererType: GObject.GType, attrs: Gck.Attributes): void
/**
 * Register all the well known renderers for certificates and keys known to the
 * Gcr library.
 */
export function rendererRegisterWellKnown(): void
/**
 * Get an implementation of #GcrViewer that supports a view
 * of multiple renderers.
 */
export function viewerNew(): Viewer
/**
 * Get an implementation of #GcrViewer that supports a scrolled view
 * of multiple renderers.
 */
export function viewerNewScrolled(): Viewer
export module Renderer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `data-changed`
     */
    export interface DataChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GcrUi-3.GcrUi.Renderer

        /**
         * The attributes to display.
         */
        attributes?: Gck.Attributes | null
        /**
         * The label to display.
         */
        label?: string | null
    }

}

export interface Renderer {

    // Own properties of GcrUi-3.GcrUi.Renderer

    /**
     * The attributes to display.
     */
    attributes: Gck.Attributes
    /**
     * The label to display.
     */
    label: string

    // Owm methods of GcrUi-3.GcrUi.Renderer

    /**
     * Emit the #GcrRenderer::data-changed signal on the renderer. This is used by
     * renderer implementations.
     */
    emitDataChanged(): void
    /**
     * Get the PKCS#11 attributes, if any, set for this renderer to display.
     */
    getAttributes(): Gck.Attributes | null
    /**
     * Called by #GcrViewer when about to display a popup menu for the content
     * displayed by the renderer. The renderer can add a menu item if desired.
     * @param viewer The viewer that is displaying a popup
     * @param menu The popup menu being displayed
     */
    popuplatePopup(viewer: Viewer, menu: Gtk.Menu): void
    // Has conflict: renderView(viewer: Viewer): void
    /**
     * Set the PKCS#11 attributes for this renderer to display.
     * @param attrs attributes to set
     */
    setAttributes(attrs: Gck.Attributes | null): void

    // Own virtual methods of GcrUi-3.GcrUi.Renderer

    dataChanged(): void
    populatePopup(viewer: Viewer, menu: Gtk.Menu): void
    /**
     * Render the contents of the renderer to the given viewer.
     * @virtual 
     * @param viewer The viewer to render to.
     */
    renderView(viewer: Viewer): void

    // Own signals of GcrUi-3.GcrUi.Renderer

    connect(sigName: "data-changed", callback: Renderer.DataChangedSignalCallback): number
    on(sigName: "data-changed", callback: Renderer.DataChangedSignalCallback): number
    once(sigName: "data-changed", callback: Renderer.DataChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "data-changed", ...args: any[]): void

    // Class property signals of GcrUi-3.GcrUi.Renderer

    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An interface that's implemented by renderers which wish to render data to a
 * [iface`Viewer]`.
 * 
 * The interaction between [iface`Renderer]` and [iface`Viewer]` is not stable
 * yet, and so new renderers cannot be implemented outside the Gcr library at
 * this time.
 * 
 * To lookup a renderer for a given set of attributes, use the gcr_renderer_create()
 * function. This will create and initialize a renderer that's capable of viewing
 * the data in those attributes.
 * @interface 
 */
export class Renderer extends GObject.Object {

    // Own properties of GcrUi-3.GcrUi.Renderer

    static name: string

    // Constructors of GcrUi-3.GcrUi.Renderer

    constructor(config?: Renderer.ConstructorProperties) 
    _init(config?: Renderer.ConstructorProperties): void
    /**
     * Create and initialize a renderer for the given attributes and label. These
     * renderers should have been preregistered via gcr_renderer_register().
     * @param label The label for the renderer
     * @param attrs The attributes to render
     */
    static create(label: string | null, attrs: Gck.Attributes): Renderer | null
    /**
     * Register a renderer to be created when matching attributes are passed to
     * gcr_renderer_create().
     * @param rendererType The renderer class type
     * @param attrs The attributes to match
     */
    static register(rendererType: GObject.GType, attrs: Gck.Attributes): void
    /**
     * Register all the well known renderers for certificates and keys known to the
     * Gcr library.
     */
    static registerWellKnown(): void
}

export module Viewer {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Viewer extends Gtk.Widget {

    // Owm methods of GcrUi-3.GcrUi.Viewer

    // Has conflict: addRenderer(renderer: Renderer): void
    // Has conflict: countRenderers(): number
    // Has conflict: getRenderer(index: number): Renderer
    // Has conflict: insertRenderer(renderer: Renderer, before: Renderer | null): void
    // Has conflict: removeRenderer(renderer: Renderer): void

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

    // Own virtual methods of GcrUi-3.GcrUi.Viewer

    /**
     * Add a renderer to this viewer.
     * @virtual 
     * @param renderer The renderer to add
     */
    addRenderer(renderer: Renderer): void
    /**
     * Get the number of renderers present in the viewer.
     * @virtual 
     */
    countRenderers(): number
    /**
     * Get a pointer to the renderer at the given index. It is an error to request
     * an index that is out of bounds.
     * @virtual 
     * @param index The index of the renderer to get
     */
    getRenderer(index: number): Renderer
    /**
     * Insert a renderer at a specific point in the viewer
     * @virtual 
     * @param renderer the renderer to insert
     * @param before the renderer to insert before
     */
    insertRenderer(renderer: Renderer, before: Renderer | null): void
    /**
     * Remove a renderer from this viewer.
     * @virtual 
     * @param renderer The renderer to remove
     */
    removeRenderer(renderer: Renderer): void

    // Class property signals of GcrUi-3.GcrUi.Viewer

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
 * An abstract interface that represents a widget that can hold
 * various renderers and display their contents.
 * 
 * The interaction between [iface`Renderer]` and [iface`Viewer]` is not stable
 * yet, and so viewers cannot be implemented outside the Gcr library at this
 * time.
 * 
 * Use the [func`Viewer`.new] and [func`Viewer`.new_scrolled] to get default
 * implementations of viewers.
 * @interface 
 */
export class Viewer extends GObject.Object {

    // Own properties of GcrUi-3.GcrUi.Viewer

    static name: string

    // Constructors of GcrUi-3.GcrUi.Viewer

    constructor(config?: Viewer.ConstructorProperties) 
    _init(config?: Viewer.ConstructorProperties): void
    /**
     * Get an implementation of #GcrViewer that supports a view
     * of multiple renderers.
     */
    static new(): Viewer
    /**
     * Get an implementation of #GcrViewer that supports a scrolled view
     * of multiple renderers.
     */
    static newScrolled(): Viewer
}

export module CertificateRenderer {

    // Constructor properties interface

    export interface ConstructorProperties extends Gcr.Certificate.ConstructorProperties, Gcr.Comparable.ConstructorProperties, Renderer.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GcrUi-3.GcrUi.CertificateRenderer

        /**
         * The certificate attributes to display. One of the attributes must be
         * a CKA_VALUE type attribute which contains a DER encoded certificate.
         */
        attributes?: Gck.Attributes | null
        /**
         * The certificate to display. May be %NULL.
         */
        certificate?: Gcr.Certificate | null
        /**
         * The label to display.
         */
        label?: string | null
    }

}

export interface CertificateRenderer extends Gcr.Certificate, Gcr.Comparable, Renderer {

    // Own properties of GcrUi-3.GcrUi.CertificateRenderer

    /**
     * The certificate attributes to display. One of the attributes must be
     * a CKA_VALUE type attribute which contains a DER encoded certificate.
     */
    attributes: Gck.Attributes
    /**
     * The certificate to display. May be %NULL.
     */
    certificate: Gcr.Certificate
    /**
     * The label to display.
     */
    label: any

    // Own fields of GcrUi-3.GcrUi.CertificateRenderer

    parent: GObject.Object

    // Owm methods of GcrUi-3.GcrUi.CertificateRenderer

    /**
     * Get the certificate displayed in the renderer. If no certificate was
     * explicitly set, then the renderer will return itself since it acts as
     * a valid certificate.
     */
    getCertificate(): Gcr.Certificate
    /**
     * Set a certificate to display in the renderer.
     * @param certificate the certificate to display
     */
    setCertificate(certificate: Gcr.Certificate | null): void

    // Class property signals of GcrUi-3.GcrUi.CertificateRenderer

    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::certificate", callback: any): number
    on(sigName: "notify::certificate", callback: any): number
    once(sigName: "notify::certificate", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::certificate", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::expiry", callback: any): number
    on(sigName: "notify::expiry", callback: any): number
    once(sigName: "notify::expiry", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expiry", ...args: any[]): void
    connect(sigName: "notify::icon", callback: any): number
    on(sigName: "notify::icon", callback: any): number
    once(sigName: "notify::icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::issuer", callback: any): number
    on(sigName: "notify::issuer", callback: any): number
    once(sigName: "notify::issuer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::issuer", ...args: any[]): void
    connect(sigName: "notify::markup", callback: any): number
    on(sigName: "notify::markup", callback: any): number
    once(sigName: "notify::markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::markup", ...args: any[]): void
    connect(sigName: "notify::subject", callback: any): number
    on(sigName: "notify::subject", callback: any): number
    once(sigName: "notify::subject", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subject", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An implementation of #GcrRenderer which renders certificates.
 * @class 
 */
export class CertificateRenderer extends GObject.Object {

    // Own properties of GcrUi-3.GcrUi.CertificateRenderer

    static name: string

    // Constructors of GcrUi-3.GcrUi.CertificateRenderer

    constructor(config?: CertificateRenderer.ConstructorProperties) 
    /**
     * Create a new certificate renderer to display the certificate.
     * @constructor 
     * @param certificate The certificate to display
     */
    constructor(certificate: Gcr.Certificate) 
    /**
     * Create a new certificate renderer to display the certificate.
     * @constructor 
     * @param certificate The certificate to display
     */
    static new(certificate: Gcr.Certificate): CertificateRenderer
    /**
     * Create a new certificate renderer to display the label and attributes. One
     * of the attributes should be a CKA_VALUE type attribute containing a DER
     * encoded certificate.
     * @constructor 
     * @param label the label to display
     * @param attrs The attributes to display
     */
    static newForAttributes(label: string | null, attrs: object | null): CertificateRenderer
    _init(config?: CertificateRenderer.ConstructorProperties): void
}

export module CertificateWidget {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of GcrUi-3.GcrUi.CertificateWidget

        attributes?: Gck.Attributes | null
        certificate?: Gcr.Certificate | null
    }

}

export interface CertificateWidget extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of GcrUi-3.GcrUi.CertificateWidget

    attributes: Gck.Attributes
    certificate: Gcr.Certificate

    // Owm methods of GcrUi-3.GcrUi.CertificateWidget

    /**
     * Get the attributes displayed in the widget. The attributes should contain
     * a certificate.
     */
    getAttributes(): Gck.Attributes | null
    /**
     * Get the certificate displayed in the widget.
     */
    getCertificate(): Gcr.Certificate | null
    /**
     * Set the attributes displayed in the widget. The attributes should contain
     * a certificate.
     * @param attrs the attributes to display
     */
    setAttributes(attrs: Gck.Attributes | null): void
    /**
     * Set the certificate displayed in the widget
     * @param certificate the certificate to display
     */
    setCertificate(certificate: Gcr.Certificate | null): void

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

    // Class property signals of GcrUi-3.GcrUi.CertificateWidget

    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::certificate", callback: any): number
    on(sigName: "notify::certificate", callback: any): number
    once(sigName: "notify::certificate", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::certificate", ...args: any[]): void
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
 * A widget that can be used to display a certificate.
 * 
 * A certificate widget is normally in a collapsed state showing only
 * details, but can be expanded by the user.
 * 
 * Use [ctor`CertificateWidget`.new] to create a new certificate widget. Only
 * one certificate can be displayed. It contains a [iface`Viewer]` internally
 * and [class`CertificateRenderer]` is used to render the certificate to the
 * viewer.
 * 
 * To show more than one certificate in a view, create the viewer and
 * add renderers to it.
 * @class 
 */
export class CertificateWidget extends Gtk.Bin {

    // Own properties of GcrUi-3.GcrUi.CertificateWidget

    static name: string

    // Constructors of GcrUi-3.GcrUi.CertificateWidget

    constructor(config?: CertificateWidget.ConstructorProperties) 
    /**
     * Create a new certificate widget which displays a given certificate.
     * @constructor 
     * @param certificate certificate to display, or %NULL
     */
    constructor(certificate: Gcr.Certificate | null) 
    /**
     * Create a new certificate widget which displays a given certificate.
     * @constructor 
     * @param certificate certificate to display, or %NULL
     */
    static new(certificate: Gcr.Certificate | null): CertificateWidget
    _init(config?: CertificateWidget.ConstructorProperties): void
}

export module CollectionModel {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.TreeModel.ConstructorProperties, Gtk.TreeSortable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GcrUi-3.GcrUi.CollectionModel

        collection?: Gcr.Collection | null
        columns?: object | null
    }

}

export interface CollectionModel extends Gtk.TreeModel, Gtk.TreeSortable {

    // Own properties of GcrUi-3.GcrUi.CollectionModel

    collection: Gcr.Collection
    readonly columns: object

    // Own fields of GcrUi-3.GcrUi.CollectionModel

    parent: GObject.Object

    // Owm methods of GcrUi-3.GcrUi.CollectionModel

    /**
     * Set whether a given row is toggled selected or not.
     * @param iter The row
     * @param selected Whether the row should be selected or not.
     */
    changeSelected(iter: Gtk.TreeIter, selected: boolean): void
    /**
     * Get the column identifier for the column that contains the values
     * of the selected state.
     */
    columnForSelected(): number
    /**
     * Get the collection which this model represents
     */
    getCollection(): Gcr.Collection
    /**
     * Get a list of checked/selected objects.
     */
    getSelectedObjects(): GObject.Object[]
    /**
     * Check whether a given row has been toggled as selected.
     * @param iter The row
     */
    isSelected(iter: Gtk.TreeIter): boolean
    /**
     * Set `iter` to the row for the given object. If the object is not in this
     * model, then %FALSE will be returned.
     * @param object The object
     * @param iter The row for the object
     */
    iterForObject(object: GObject.Object, iter: Gtk.TreeIter): boolean
    /**
     * Get the object that is represented by the given row in the model.
     * @param iter The row
     */
    objectForIter(iter: Gtk.TreeIter): GObject.Object
    /**
     * Set the collection which this model represents
     * @param collection the collection or %NULL
     */
    setCollection(collection: Gcr.Collection | null): void
    /**
     * Set the checked/selected objects.
     * @param selected a list of objects to select
     */
    setSelectedObjects(selected: GObject.Object[]): void
    /**
     * Toggle the selected state of a given row.
     * @param iter The row
     */
    toggleSelected(iter: Gtk.TreeIter): void

    // Class property signals of GcrUi-3.GcrUi.CollectionModel

    connect(sigName: "notify::collection", callback: any): number
    on(sigName: "notify::collection", callback: any): number
    once(sigName: "notify::collection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::collection", ...args: any[]): void
    connect(sigName: "notify::columns", callback: any): number
    on(sigName: "notify::columns", callback: any): number
    once(sigName: "notify::columns", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::columns", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Ain implementation of a [iface`Gtk`.TreeModel] which contains a row for each
 * object in a [iface`Gcr`.Collection].
 * 
 * As objects are added or removed from the collection, rows are added and
 * removed from this model.
 * 
 * The row values come from the properties of the objects in the collection. Use
 * [ctor`CollectionModel`.new] to create a new collection model. To have more
 * control over the values use a set of [struct`Gcr`.Column] structures to
 * define the columns. This can be done with [ctor`CollectionModel`.new_full] or
 * [method`CollectionModel`.set_columns].
 * 
 * Each row can have a selected state, which is represented by a boolean column.
 * The selected state can be toggled with gcr_collection_model_toggle_selected()
 * or set with gcr_collection_model_set_selected_objects() and retrieved with
 * [method`CollectionModel`.get_selected_objects].
 * 
 * To determine which object a row represents and vice versa, use the
 * [method`CollectionModel`.iter_for_object] or
 * [method`CollectionModel`.object_for_iter] functions.
 * @class 
 */
export class CollectionModel extends GObject.Object {

    // Own properties of GcrUi-3.GcrUi.CollectionModel

    static name: string

    // Constructors of GcrUi-3.GcrUi.CollectionModel

    constructor(config?: CollectionModel.ConstructorProperties) 
    _init(config?: CollectionModel.ConstructorProperties): void
}

export module ComboSelector {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.CellEditable.ConstructorProperties, Gtk.CellLayout.ConstructorProperties, Gtk.ComboBox.ConstructorProperties {

        // Own constructor properties of GcrUi-3.GcrUi.ComboSelector

        /**
         * The collection which contains the objects to display in the selector.
         */
        collection?: Gcr.Collection | null
    }

}

export interface ComboSelector extends Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {

    // Own properties of GcrUi-3.GcrUi.ComboSelector

    /**
     * The collection which contains the objects to display in the selector.
     */
    readonly collection: Gcr.Collection

    // Conflicting properties

    parentInstance: any

    // Own fields of GcrUi-3.GcrUi.ComboSelector

    parent: Gtk.ComboBox & Gtk.Container

    // Owm methods of GcrUi-3.GcrUi.ComboSelector

    /**
     * Get the collection that this selector is displaying objects from.
     */
    getCollection(): Gcr.Collection
    /**
     * Get the selected object in the selector, or %NULL if nothing selected.
     */
    getSelected(): GObject.Object
    /**
     * Set the currently selected object in the selector, or clear the selection
     * if selected is set to %NULL.
     * @param selected the object to select or %NULL
     */
    setSelected(selected: GObject.Object | null): void

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

    // Class property signals of GcrUi-3.GcrUi.ComboSelector

    connect(sigName: "notify::collection", callback: any): number
    on(sigName: "notify::collection", callback: any): number
    once(sigName: "notify::collection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::collection", ...args: any[]): void
    connect(sigName: "notify::active", callback: any): number
    on(sigName: "notify::active", callback: any): number
    once(sigName: "notify::active", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::active-id", callback: any): number
    on(sigName: "notify::active-id", callback: any): number
    once(sigName: "notify::active-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active-id", ...args: any[]): void
    connect(sigName: "notify::add-tearoffs", callback: any): number
    on(sigName: "notify::add-tearoffs", callback: any): number
    once(sigName: "notify::add-tearoffs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::add-tearoffs", ...args: any[]): void
    connect(sigName: "notify::button-sensitivity", callback: any): number
    on(sigName: "notify::button-sensitivity", callback: any): number
    once(sigName: "notify::button-sensitivity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::button-sensitivity", ...args: any[]): void
    connect(sigName: "notify::cell-area", callback: any): number
    on(sigName: "notify::cell-area", callback: any): number
    once(sigName: "notify::cell-area", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cell-area", ...args: any[]): void
    connect(sigName: "notify::column-span-column", callback: any): number
    on(sigName: "notify::column-span-column", callback: any): number
    once(sigName: "notify::column-span-column", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-span-column", ...args: any[]): void
    connect(sigName: "notify::entry-text-column", callback: any): number
    on(sigName: "notify::entry-text-column", callback: any): number
    once(sigName: "notify::entry-text-column", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::entry-text-column", ...args: any[]): void
    connect(sigName: "notify::has-entry", callback: any): number
    on(sigName: "notify::has-entry", callback: any): number
    once(sigName: "notify::has-entry", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-entry", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: any): number
    on(sigName: "notify::has-frame", callback: any): number
    once(sigName: "notify::has-frame", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::id-column", callback: any): number
    on(sigName: "notify::id-column", callback: any): number
    once(sigName: "notify::id-column", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id-column", ...args: any[]): void
    connect(sigName: "notify::model", callback: any): number
    on(sigName: "notify::model", callback: any): number
    once(sigName: "notify::model", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::popup-fixed-width", callback: any): number
    on(sigName: "notify::popup-fixed-width", callback: any): number
    once(sigName: "notify::popup-fixed-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::popup-fixed-width", ...args: any[]): void
    connect(sigName: "notify::popup-shown", callback: any): number
    on(sigName: "notify::popup-shown", callback: any): number
    once(sigName: "notify::popup-shown", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::popup-shown", ...args: any[]): void
    connect(sigName: "notify::row-span-column", callback: any): number
    on(sigName: "notify::row-span-column", callback: any): number
    once(sigName: "notify::row-span-column", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-span-column", ...args: any[]): void
    connect(sigName: "notify::tearoff-title", callback: any): number
    on(sigName: "notify::tearoff-title", callback: any): number
    once(sigName: "notify::tearoff-title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tearoff-title", ...args: any[]): void
    connect(sigName: "notify::wrap-width", callback: any): number
    on(sigName: "notify::wrap-width", callback: any): number
    once(sigName: "notify::wrap-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::wrap-width", ...args: any[]): void
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
    connect(sigName: "notify::editing-canceled", callback: any): number
    on(sigName: "notify::editing-canceled", callback: any): number
    once(sigName: "notify::editing-canceled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::editing-canceled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A widget that can be used to select a certificate or key. It allows
 * the user to select one object from the selector at a time.
 * @class 
 */
export class ComboSelector extends Gtk.ComboBox {

    // Own properties of GcrUi-3.GcrUi.ComboSelector

    static name: string

    // Constructors of GcrUi-3.GcrUi.ComboSelector

    constructor(config?: ComboSelector.ConstructorProperties) 
    /**
     * Create a new #GcrTreeSelector.
     * @constructor 
     * @param collection The collection that contains the objects to display
     */
    constructor(collection: Gcr.Collection) 
    /**
     * Create a new #GcrTreeSelector.
     * @constructor 
     * @param collection The collection that contains the objects to display
     */
    static new(collection: Gcr.Collection): ComboSelector

    // Overloads of new

    /**
     * Creates a new empty #GtkComboBox.
     * @constructor 
     */
    static new(): Gtk.ComboBox
    _init(config?: ComboSelector.ConstructorProperties): void
}

export module FailureRenderer {

    // Constructor properties interface

    export interface ConstructorProperties extends Renderer.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GcrUi-3.GcrUi.FailureRenderer

        attributes?: Gck.Attributes | null
        label?: string | null
    }

}

export interface FailureRenderer extends Renderer {

    // Own properties of GcrUi-3.GcrUi.FailureRenderer

    attributes: Gck.Attributes
    label: string

    // Class property signals of GcrUi-3.GcrUi.FailureRenderer

    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A renderer that can be used for unsupported data.
 * @class 
 */
export class FailureRenderer extends GObject.Object {

    // Own properties of GcrUi-3.GcrUi.FailureRenderer

    static name: string

    // Constructors of GcrUi-3.GcrUi.FailureRenderer

    constructor(config?: FailureRenderer.ConstructorProperties) 
    /**
     * Create a new renderer for an error.
     * @constructor 
     * @param label the label for the failure
     * @param error the error to display
     */
    constructor(label: string | null, error: GLib.Error) 
    /**
     * Create a new renderer for an error.
     * @constructor 
     * @param label the label for the failure
     * @param error the error to display
     */
    static new(label: string | null, error: GLib.Error): FailureRenderer
    _init(config?: FailureRenderer.ConstructorProperties): void
    /**
     * Create a new renderer for unsupported data.
     * @param label the label for the failure
     */
    static newUnsupported(label: string): Renderer
}

export module ImportButton {

    // Signal callback interfaces

    /**
     * Signal callback interface for `imported`
     */
    export interface ImportedSignalCallback {
        (importer: GObject.Object, error: GLib.Error): void
    }

    /**
     * Signal callback interface for `importing`
     */
    export interface ImportingSignalCallback {
        (importer: GObject.Object): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Activatable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Button.ConstructorProperties {
    }

}

export interface ImportButton extends Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {

    // Own fields of GcrUi-3.GcrUi.ImportButton

    parent: Gtk.Button & Gtk.Container

    // Owm methods of GcrUi-3.GcrUi.ImportButton

    /**
     * Queue an item to import via the button
     * @param parsed a parsed item
     */
    addParsed(parsed: Gcr.Parsed): void

    // Conflicting methods

    activate(): void

    // Overloads of activate

    /**
     * For widgets that can be “activated” (buttons, menu items, etc.)
     * this function activates them. Activation is what happens when you
     * press Enter on a widget during key navigation. If `widget` isn't
     * activatable, the function returns %FALSE.
     */
    activate(): boolean
    /**
     * For widgets that can be “activated” (buttons, menu items, etc.)
     * this function activates them. Activation is what happens when you
     * press Enter on a widget during key navigation. If `widget` isn't
     * activatable, the function returns %FALSE.
     */
    activate(): boolean
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

    // Own virtual methods of GcrUi-3.GcrUi.ImportButton

    imported(importer: Gcr.Importer, error: GLib.Error): void
    importing(importer: Gcr.Importer): void

    // Own signals of GcrUi-3.GcrUi.ImportButton

    connect(sigName: "imported", callback: ImportButton.ImportedSignalCallback): number
    on(sigName: "imported", callback: ImportButton.ImportedSignalCallback): number
    once(sigName: "imported", callback: ImportButton.ImportedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "imported", error: GLib.Error, ...args: any[]): void
    connect(sigName: "importing", callback: ImportButton.ImportingSignalCallback): number
    on(sigName: "importing", callback: ImportButton.ImportingSignalCallback): number
    once(sigName: "importing", callback: ImportButton.ImportingSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "importing", ...args: any[]): void

    // Class property signals of GcrUi-3.GcrUi.ImportButton

    connect(sigName: "notify::always-show-image", callback: any): number
    on(sigName: "notify::always-show-image", callback: any): number
    once(sigName: "notify::always-show-image", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::always-show-image", ...args: any[]): void
    connect(sigName: "notify::image", callback: any): number
    on(sigName: "notify::image", callback: any): number
    once(sigName: "notify::image", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::image-position", callback: any): number
    on(sigName: "notify::image-position", callback: any): number
    once(sigName: "notify::image-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::image-position", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relief", callback: any): number
    on(sigName: "notify::relief", callback: any): number
    once(sigName: "notify::relief", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::relief", ...args: any[]): void
    connect(sigName: "notify::use-stock", callback: any): number
    on(sigName: "notify::use-stock", callback: any): number
    once(sigName: "notify::use-stock", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-stock", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: any): number
    on(sigName: "notify::use-underline", callback: any): number
    once(sigName: "notify::use-underline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: any): number
    on(sigName: "notify::xalign", callback: any): number
    once(sigName: "notify::xalign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: any): number
    on(sigName: "notify::yalign", callback: any): number
    once(sigName: "notify::yalign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::yalign", ...args: any[]): void
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
    connect(sigName: "notify::action-name", callback: any): number
    on(sigName: "notify::action-name", callback: any): number
    once(sigName: "notify::action-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: any): number
    on(sigName: "notify::action-target", callback: any): number
    once(sigName: "notify::action-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: "notify::related-action", callback: any): number
    on(sigName: "notify::related-action", callback: any): number
    once(sigName: "notify::related-action", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::related-action", ...args: any[]): void
    connect(sigName: "notify::use-action-appearance", callback: any): number
    on(sigName: "notify::use-action-appearance", callback: any): number
    once(sigName: "notify::use-action-appearance", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-action-appearance", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A button which imports keys and certificates.
 * 
 * The import button shows a spinner when the button is activated. When more
 * than one importer is available, it shows a drop down to select which to
 * import to.
 * @class 
 */
export class ImportButton extends Gtk.Button {

    // Own properties of GcrUi-3.GcrUi.ImportButton

    static name: string

    // Constructors of GcrUi-3.GcrUi.ImportButton

    constructor(config?: ImportButton.ConstructorProperties) 
    /**
     * Create a new #GcrImportButton.
     * @constructor 
     * @param label label to display on the button
     */
    constructor(label: string | null) 
    /**
     * Create a new #GcrImportButton.
     * @constructor 
     * @param label label to display on the button
     */
    static new(label: string | null): ImportButton

    // Overloads of new

    /**
     * Creates a new #GtkButton widget. To add a child widget to the button,
     * use gtk_container_add().
     * @constructor 
     */
    static new(): Gtk.Button
    _init(config?: ImportButton.ConstructorProperties): void
}

export module KeyRenderer {

    // Constructor properties interface

    export interface ConstructorProperties extends Renderer.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GcrUi-3.GcrUi.KeyRenderer

        object?: Gck.Object | null
    }

}

export interface KeyRenderer extends Renderer {

    // Own properties of GcrUi-3.GcrUi.KeyRenderer

    object: Gck.Object

    // Own fields of GcrUi-3.GcrUi.KeyRenderer

    parent: GObject.Object

    // Owm methods of GcrUi-3.GcrUi.KeyRenderer

    /**
     * Get the attributes displayed in the renderer.
     */
    getAttributes(): Gck.Attributes | null
    /**
     * Get the attributes displayed in the renderer. The attributes should represent
     * either an RSA, DSA, or EC key in PKCS#11 style.
     * @param attrs the attributes to display
     */
    setAttributes(attrs: Gck.Attributes | null): void

    // Class property signals of GcrUi-3.GcrUi.KeyRenderer

    connect(sigName: "notify::object", callback: any): number
    on(sigName: "notify::object", callback: any): number
    once(sigName: "notify::object", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An implementation of #GcrRenderer which renders keys.
 * @class 
 */
export class KeyRenderer extends GObject.Object {

    // Own properties of GcrUi-3.GcrUi.KeyRenderer

    static name: string

    // Constructors of GcrUi-3.GcrUi.KeyRenderer

    constructor(config?: KeyRenderer.ConstructorProperties) 
    /**
     * Create a new key renderer which renders a given key in the attributes.
     * @constructor 
     * @param label label describing the key
     * @param attrs key to display, or %NULL
     */
    constructor(label: string | null, attrs: Gck.Attributes | null) 
    /**
     * Create a new key renderer which renders a given key in the attributes.
     * @constructor 
     * @param label label describing the key
     * @param attrs key to display, or %NULL
     */
    static new(label: string | null, attrs: Gck.Attributes | null): KeyRenderer
    _init(config?: KeyRenderer.ConstructorProperties): void
}

export module KeyWidget {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of GcrUi-3.GcrUi.KeyWidget

        attributes?: Gck.Attributes | null
    }

}

export interface KeyWidget extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of GcrUi-3.GcrUi.KeyWidget

    attributes: Gck.Attributes

    // Owm methods of GcrUi-3.GcrUi.KeyWidget

    /**
     * Get the attributes displayed in the widget.
     */
    getAttributes(): Gck.Attributes | null
    /**
     * Get the attributes displayed in the widget. The attributes should represent
     * either an RSA, DSA or EC key in PKCS#11 style.
     * @param attrs the attributes to display
     */
    setAttributes(attrs: Gck.Attributes | null): void

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

    // Class property signals of GcrUi-3.GcrUi.KeyWidget

    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
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
 * A key widget and renderer
 * 
 * A key widget can be used to display a RSA, DSA or EC key. The widget is
 * normally in a collapsed state showing only details, but can be expanded by
 * the user.
 * 
 * Use [ctor`KeyWidget`.new] to create a new key widget. Only one key can be
 * displayed. A key widget contains a [iface`Viewer]` internally and
 * [class`KeyRenderer]` is used to render the key to the viewer. To show more
 * than one key in a view, create the viewer and add renderers to it.
 * @class 
 */
export class KeyWidget extends Gtk.Bin {

    // Own properties of GcrUi-3.GcrUi.KeyWidget

    static name: string

    // Constructors of GcrUi-3.GcrUi.KeyWidget

    constructor(config?: KeyWidget.ConstructorProperties) 
    /**
     * Create a new key widget which displays a given key in the attributes.
     * @constructor 
     * @param attrs key to display, or %NULL
     */
    constructor(attrs: Gck.Attributes | null) 
    /**
     * Create a new key widget which displays a given key in the attributes.
     * @constructor 
     * @param attrs key to display, or %NULL
     */
    static new(attrs: Gck.Attributes | null): KeyWidget
    _init(config?: KeyWidget.ConstructorProperties): void
}

export module ListSelector {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.TreeView.ConstructorProperties {

        // Own constructor properties of GcrUi-3.GcrUi.ListSelector

        /**
         * The collection which contains the objects to display in the selector.
         */
        collection?: Gcr.Collection | null
    }

}

export interface ListSelector extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of GcrUi-3.GcrUi.ListSelector

    /**
     * The collection which contains the objects to display in the selector.
     */
    readonly collection: Gcr.Collection

    // Own fields of GcrUi-3.GcrUi.ListSelector

    parent: Gtk.TreeView & Gtk.Container & Gtk.Container

    // Owm methods of GcrUi-3.GcrUi.ListSelector

    /**
     * Get the collection that this selector is displaying objects from.
     */
    getCollection(): Gcr.Collection
    /**
     * Get a list of selected objects.
     */
    getSelected(): GObject.Object[]
    /**
     * Select certain objects in the selector.
     * @param selected the list of objects to select
     */
    setSelected(selected: GObject.Object[]): void

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

    // Class property signals of GcrUi-3.GcrUi.ListSelector

    connect(sigName: "notify::collection", callback: any): number
    on(sigName: "notify::collection", callback: any): number
    once(sigName: "notify::collection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::collection", ...args: any[]): void
    connect(sigName: "notify::activate-on-single-click", callback: any): number
    on(sigName: "notify::activate-on-single-click", callback: any): number
    once(sigName: "notify::activate-on-single-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activate-on-single-click", ...args: any[]): void
    connect(sigName: "notify::enable-grid-lines", callback: any): number
    on(sigName: "notify::enable-grid-lines", callback: any): number
    once(sigName: "notify::enable-grid-lines", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enable-grid-lines", ...args: any[]): void
    connect(sigName: "notify::enable-search", callback: any): number
    on(sigName: "notify::enable-search", callback: any): number
    once(sigName: "notify::enable-search", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enable-search", ...args: any[]): void
    connect(sigName: "notify::enable-tree-lines", callback: any): number
    on(sigName: "notify::enable-tree-lines", callback: any): number
    once(sigName: "notify::enable-tree-lines", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enable-tree-lines", ...args: any[]): void
    connect(sigName: "notify::expander-column", callback: any): number
    on(sigName: "notify::expander-column", callback: any): number
    once(sigName: "notify::expander-column", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expander-column", ...args: any[]): void
    connect(sigName: "notify::fixed-height-mode", callback: any): number
    on(sigName: "notify::fixed-height-mode", callback: any): number
    once(sigName: "notify::fixed-height-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fixed-height-mode", ...args: any[]): void
    connect(sigName: "notify::headers-clickable", callback: any): number
    on(sigName: "notify::headers-clickable", callback: any): number
    once(sigName: "notify::headers-clickable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::headers-clickable", ...args: any[]): void
    connect(sigName: "notify::headers-visible", callback: any): number
    on(sigName: "notify::headers-visible", callback: any): number
    once(sigName: "notify::headers-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::headers-visible", ...args: any[]): void
    connect(sigName: "notify::hover-expand", callback: any): number
    on(sigName: "notify::hover-expand", callback: any): number
    once(sigName: "notify::hover-expand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hover-expand", ...args: any[]): void
    connect(sigName: "notify::hover-selection", callback: any): number
    on(sigName: "notify::hover-selection", callback: any): number
    once(sigName: "notify::hover-selection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hover-selection", ...args: any[]): void
    connect(sigName: "notify::level-indentation", callback: any): number
    on(sigName: "notify::level-indentation", callback: any): number
    once(sigName: "notify::level-indentation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::level-indentation", ...args: any[]): void
    connect(sigName: "notify::model", callback: any): number
    on(sigName: "notify::model", callback: any): number
    once(sigName: "notify::model", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::reorderable", callback: any): number
    on(sigName: "notify::reorderable", callback: any): number
    once(sigName: "notify::reorderable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reorderable", ...args: any[]): void
    connect(sigName: "notify::rubber-banding", callback: any): number
    on(sigName: "notify::rubber-banding", callback: any): number
    once(sigName: "notify::rubber-banding", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rubber-banding", ...args: any[]): void
    connect(sigName: "notify::rules-hint", callback: any): number
    on(sigName: "notify::rules-hint", callback: any): number
    once(sigName: "notify::rules-hint", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rules-hint", ...args: any[]): void
    connect(sigName: "notify::search-column", callback: any): number
    on(sigName: "notify::search-column", callback: any): number
    once(sigName: "notify::search-column", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::search-column", ...args: any[]): void
    connect(sigName: "notify::show-expanders", callback: any): number
    on(sigName: "notify::show-expanders", callback: any): number
    once(sigName: "notify::show-expanders", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-expanders", ...args: any[]): void
    connect(sigName: "notify::tooltip-column", callback: any): number
    on(sigName: "notify::tooltip-column", callback: any): number
    once(sigName: "notify::tooltip-column", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tooltip-column", ...args: any[]): void
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
    connect(sigName: "notify::hadjustment", callback: any): number
    on(sigName: "notify::hadjustment", callback: any): number
    once(sigName: "notify::hadjustment", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: any): number
    on(sigName: "notify::hscroll-policy", callback: any): number
    once(sigName: "notify::hscroll-policy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: any): number
    on(sigName: "notify::vadjustment", callback: any): number
    once(sigName: "notify::vadjustment", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: any): number
    on(sigName: "notify::vscroll-policy", callback: any): number
    once(sigName: "notify::vscroll-policy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A selector widget to select 1 or more certificates or keys from a list.
 * 
 * Live search is available for quick filtering.
 * @class 
 */
export class ListSelector extends Gtk.TreeView {

    // Own properties of GcrUi-3.GcrUi.ListSelector

    static name: string

    // Constructors of GcrUi-3.GcrUi.ListSelector

    constructor(config?: ListSelector.ConstructorProperties) 
    /**
     * Create a new #GcrListSelector.
     * @constructor 
     * @param collection The collection that contains the objects to display
     */
    constructor(collection: Gcr.Collection) 
    /**
     * Create a new #GcrListSelector.
     * @constructor 
     * @param collection The collection that contains the objects to display
     */
    static new(collection: Gcr.Collection): ListSelector

    // Overloads of new

    /**
     * Creates a new #GtkTreeView widget.
     * @constructor 
     */
    static new(): Gtk.TreeView
    _init(config?: ListSelector.ConstructorProperties): void
}

export module PromptDialog {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gcr.Prompt.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Dialog.ConstructorProperties {
    }

}

export interface PromptDialog extends Atk.ImplementorIface, Gcr.Prompt, Gtk.Buildable {

    // Own properties of GcrUi-3.GcrUi.PromptDialog

    /**
     * Whether the choice check box is visible or not.
     */
    readonly choiceVisible: boolean
    /**
     * Whether the password confirm entry is visible or not.
     */
    readonly confirmVisible: boolean
    /**
     * Whether the password entry is visible or not.
     */
    readonly passwordVisible: boolean
    /**
     * Whether the warning label is visible or not.
     */
    readonly warningVisible: boolean

    // Conflicting properties

    readonly window: Gtk.Window & Gdk.Window & Gdk.Window

    // Own fields of GcrUi-3.GcrUi.PromptDialog

    parent: Gtk.Dialog & Gtk.Container

    // Conflicting methods

    /**
     * Closes the prompt so that in can no longer be used to prompt. The various
     * prompt methods will return results as if the user dismissed the prompt.
     * 
     * The prompt may also be closed by the implementor of the prompt object.
     * 
     * This emits the [signal`Prompt:`:prompt-close] signal on the prompt object.
     */
    close(): void
    close(): void

    // Overloads of close

    /**
     * Requests that the window is closed, similar to what happens
     * when a window manager close button is clicked.
     * 
     * This function can be used with close buttons in custom
     * titlebars.
     */
    close(): void
    /**
     * Requests that the window is closed, similar to what happens
     * when a window manager close button is clicked.
     * 
     * This function can be used with close buttons in custom
     * titlebars.
     */
    close(): void
    /**
     * Gets the title of the prompt.
     * 
     * A prompt implementation may choose not to display the prompt title. The
     * prompt message should contain relevant information.
     */
    getTitle(): string
    /**
     * Retrieves the title of the window. See gtk_window_set_title().
     */
    getTitle(): string | null
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
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     */
    mnemonicActivate(keyval: number, modifier: Gdk.ModifierType): boolean

    // Overloads of mnemonicActivate

    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @virtual 
     * @param groupCycling %TRUE if there are other widgets with the same mnemonic
     */
    mnemonicActivate(groupCycling: boolean): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @virtual 
     * @param groupCycling %TRUE if there are other widgets with the same mnemonic
     */
    mnemonicActivate(groupCycling: boolean): boolean
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

    // Class property signals of GcrUi-3.GcrUi.PromptDialog

    connect(sigName: "notify::choice-visible", callback: any): number
    on(sigName: "notify::choice-visible", callback: any): number
    once(sigName: "notify::choice-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::choice-visible", ...args: any[]): void
    connect(sigName: "notify::confirm-visible", callback: any): number
    on(sigName: "notify::confirm-visible", callback: any): number
    once(sigName: "notify::confirm-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::confirm-visible", ...args: any[]): void
    connect(sigName: "notify::password-visible", callback: any): number
    on(sigName: "notify::password-visible", callback: any): number
    once(sigName: "notify::password-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::password-visible", ...args: any[]): void
    connect(sigName: "notify::warning-visible", callback: any): number
    on(sigName: "notify::warning-visible", callback: any): number
    once(sigName: "notify::warning-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::warning-visible", ...args: any[]): void
    connect(sigName: "notify::use-header-bar", callback: any): number
    on(sigName: "notify::use-header-bar", callback: any): number
    once(sigName: "notify::use-header-bar", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::accept-focus", callback: any): number
    on(sigName: "notify::accept-focus", callback: any): number
    once(sigName: "notify::accept-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: any): number
    on(sigName: "notify::application", callback: any): number
    once(sigName: "notify::application", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: any): number
    on(sigName: "notify::attached-to", callback: any): number
    once(sigName: "notify::attached-to", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
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
    connect(sigName: "notify::focus-on-map", callback: any): number
    on(sigName: "notify::focus-on-map", callback: any): number
    once(sigName: "notify::focus-on-map", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: any): number
    on(sigName: "notify::focus-visible", callback: any): number
    once(sigName: "notify::focus-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: any): number
    on(sigName: "notify::gravity", callback: any): number
    once(sigName: "notify::gravity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: any): number
    on(sigName: "notify::has-resize-grip", callback: any): number
    once(sigName: "notify::has-resize-grip", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: any): number
    on(sigName: "notify::has-toplevel-focus", callback: any): number
    once(sigName: "notify::has-toplevel-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: any): number
    on(sigName: "notify::hide-titlebar-when-maximized", callback: any): number
    once(sigName: "notify::hide-titlebar-when-maximized", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: any): number
    on(sigName: "notify::icon", callback: any): number
    once(sigName: "notify::icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon", ...args: any[]): void
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
    connect(sigName: "notify::is-maximized", callback: any): number
    on(sigName: "notify::is-maximized", callback: any): number
    once(sigName: "notify::is-maximized", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
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
    connect(sigName: "notify::resize-grip-visible", callback: any): number
    on(sigName: "notify::resize-grip-visible", callback: any): number
    once(sigName: "notify::resize-grip-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: any): number
    on(sigName: "notify::screen", callback: any): number
    once(sigName: "notify::screen", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: any): number
    on(sigName: "notify::skip-pager-hint", callback: any): number
    once(sigName: "notify::skip-pager-hint", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: any): number
    on(sigName: "notify::skip-taskbar-hint", callback: any): number
    once(sigName: "notify::skip-taskbar-hint", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
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
    connect(sigName: "notify::transient-for", callback: any): number
    on(sigName: "notify::transient-for", callback: any): number
    once(sigName: "notify::transient-for", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: any): number
    on(sigName: "notify::type", callback: any): number
    once(sigName: "notify::type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: any): number
    on(sigName: "notify::type-hint", callback: any): number
    once(sigName: "notify::type-hint", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: any): number
    on(sigName: "notify::urgency-hint", callback: any): number
    once(sigName: "notify::urgency-hint", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: any): number
    on(sigName: "notify::window-position", callback: any): number
    once(sigName: "notify::window-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::window-position", ...args: any[]): void
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
    connect(sigName: "notify::caller-window", callback: any): number
    on(sigName: "notify::caller-window", callback: any): number
    once(sigName: "notify::caller-window", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::caller-window", ...args: any[]): void
    connect(sigName: "notify::cancel-label", callback: any): number
    on(sigName: "notify::cancel-label", callback: any): number
    once(sigName: "notify::cancel-label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cancel-label", ...args: any[]): void
    connect(sigName: "notify::choice-chosen", callback: any): number
    on(sigName: "notify::choice-chosen", callback: any): number
    once(sigName: "notify::choice-chosen", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::choice-chosen", ...args: any[]): void
    connect(sigName: "notify::choice-label", callback: any): number
    on(sigName: "notify::choice-label", callback: any): number
    once(sigName: "notify::choice-label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::choice-label", ...args: any[]): void
    connect(sigName: "notify::continue-label", callback: any): number
    on(sigName: "notify::continue-label", callback: any): number
    once(sigName: "notify::continue-label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::continue-label", ...args: any[]): void
    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::message", callback: any): number
    on(sigName: "notify::message", callback: any): number
    once(sigName: "notify::message", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: "notify::password-new", callback: any): number
    on(sigName: "notify::password-new", callback: any): number
    once(sigName: "notify::password-new", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::password-new", ...args: any[]): void
    connect(sigName: "notify::password-strength", callback: any): number
    on(sigName: "notify::password-strength", callback: any): number
    once(sigName: "notify::password-strength", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::password-strength", ...args: any[]): void
    connect(sigName: "notify::warning", callback: any): number
    on(sigName: "notify::warning", callback: any): number
    once(sigName: "notify::warning", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::warning", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A [iface`Gcr`.Prompt] implementation which shows a GTK dialog. The dialog
 * will remain visible (but insensitive) between prompts. If the user cancels
 * the dialog between prompts, then the dialog will be hidden.
 * @class 
 */
export class PromptDialog extends Gtk.Dialog {

    // Own properties of GcrUi-3.GcrUi.PromptDialog

    static name: string

    // Constructors of GcrUi-3.GcrUi.PromptDialog

    constructor(config?: PromptDialog.ConstructorProperties) 
    _init(config?: PromptDialog.ConstructorProperties): void

    // Conflicting static methods

    static new(...args: any[]): any
}

export module SecureEntryBuffer {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.EntryBuffer.ConstructorProperties {
    }

}

export interface SecureEntryBuffer {

    // Own fields of GcrUi-3.GcrUi.SecureEntryBuffer

    parent: Gtk.EntryBuffer

    // Class property signals of GcrUi-3.GcrUi.SecureEntryBuffer

    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: any): number
    on(sigName: "notify::max-length", callback: any): number
    once(sigName: "notify::max-length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::text", callback: any): number
    on(sigName: "notify::text", callback: any): number
    once(sigName: "notify::text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A [class`Gtk`.EntryBuffer] that uses non-pageable memory.
 * 
 * It's good practice to try to keep passwords or sensitive secrets out of
 * pageable memory whenever possible, so that they don't get written to disk.
 * 
 * A [class`SecureEntryBuffer]` is a [class`Gtk`.EntryBuffer] to be used with
 * [class`Gtk`.Entry] which uses non-pageable memory to store a password placed
 * in the entry. In order to make any sense at all, the entry must have it's
 * visibility turned off, and just be displaying place holder characters for
 * the text. That is, a password style entry.
 * 
 * Use [ctor`Gtk`.Entry.new_with_buffer] or [method`Gtk`.Entry.set_buffer] to set this buffer
 * on an entry.
 * @class 
 */
export class SecureEntryBuffer extends Gtk.EntryBuffer {

    // Own properties of GcrUi-3.GcrUi.SecureEntryBuffer

    static name: string

    // Constructors of GcrUi-3.GcrUi.SecureEntryBuffer

    constructor(config?: SecureEntryBuffer.ConstructorProperties) 
    /**
     * Create a new secure entry buffer.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new secure entry buffer.
     * @constructor 
     */
    static new(): SecureEntryBuffer

    // Overloads of new

    /**
     * Create a new GtkEntryBuffer object.
     * 
     * Optionally, specify initial text to set in the buffer.
     * @constructor 
     * @param initialChars initial buffer text, or %NULL
     * @param nInitialChars number of characters in `initial_chars,` or -1
     */
    static new(initialChars: string | null, nInitialChars: number): Gtk.EntryBuffer
    _init(config?: SecureEntryBuffer.ConstructorProperties): void
}

export module TreeSelector {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.TreeView.ConstructorProperties {

        // Own constructor properties of GcrUi-3.GcrUi.TreeSelector

        /**
         * The collection which contains the objects to display in the selector.
         */
        collection?: Gcr.Collection | null
        /**
         * The columns to use to display the objects.
         */
        columns?: object | null
    }

}

export interface TreeSelector extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of GcrUi-3.GcrUi.TreeSelector

    /**
     * The collection which contains the objects to display in the selector.
     */
    readonly collection: Gcr.Collection
    /**
     * The columns to use to display the objects.
     */
    readonly columns: object

    // Own fields of GcrUi-3.GcrUi.TreeSelector

    parent: Gtk.TreeView & Gtk.Container & Gtk.Container

    // Owm methods of GcrUi-3.GcrUi.TreeSelector

    /**
     * Get the collection that this selector is displaying objects from.
     */
    getCollection(): Gcr.Collection
    /**
     * Get a list of selected objects.
     */
    getSelected(): GObject.Object[]
    /**
     * Select certain objects in the selector.
     * @param selected the list of objects to select
     */
    setSelected(selected: GObject.Object[]): void

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

    // Class property signals of GcrUi-3.GcrUi.TreeSelector

    connect(sigName: "notify::collection", callback: any): number
    on(sigName: "notify::collection", callback: any): number
    once(sigName: "notify::collection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::collection", ...args: any[]): void
    connect(sigName: "notify::columns", callback: any): number
    on(sigName: "notify::columns", callback: any): number
    once(sigName: "notify::columns", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::columns", ...args: any[]): void
    connect(sigName: "notify::activate-on-single-click", callback: any): number
    on(sigName: "notify::activate-on-single-click", callback: any): number
    once(sigName: "notify::activate-on-single-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activate-on-single-click", ...args: any[]): void
    connect(sigName: "notify::enable-grid-lines", callback: any): number
    on(sigName: "notify::enable-grid-lines", callback: any): number
    once(sigName: "notify::enable-grid-lines", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enable-grid-lines", ...args: any[]): void
    connect(sigName: "notify::enable-search", callback: any): number
    on(sigName: "notify::enable-search", callback: any): number
    once(sigName: "notify::enable-search", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enable-search", ...args: any[]): void
    connect(sigName: "notify::enable-tree-lines", callback: any): number
    on(sigName: "notify::enable-tree-lines", callback: any): number
    once(sigName: "notify::enable-tree-lines", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enable-tree-lines", ...args: any[]): void
    connect(sigName: "notify::expander-column", callback: any): number
    on(sigName: "notify::expander-column", callback: any): number
    once(sigName: "notify::expander-column", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expander-column", ...args: any[]): void
    connect(sigName: "notify::fixed-height-mode", callback: any): number
    on(sigName: "notify::fixed-height-mode", callback: any): number
    once(sigName: "notify::fixed-height-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fixed-height-mode", ...args: any[]): void
    connect(sigName: "notify::headers-clickable", callback: any): number
    on(sigName: "notify::headers-clickable", callback: any): number
    once(sigName: "notify::headers-clickable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::headers-clickable", ...args: any[]): void
    connect(sigName: "notify::headers-visible", callback: any): number
    on(sigName: "notify::headers-visible", callback: any): number
    once(sigName: "notify::headers-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::headers-visible", ...args: any[]): void
    connect(sigName: "notify::hover-expand", callback: any): number
    on(sigName: "notify::hover-expand", callback: any): number
    once(sigName: "notify::hover-expand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hover-expand", ...args: any[]): void
    connect(sigName: "notify::hover-selection", callback: any): number
    on(sigName: "notify::hover-selection", callback: any): number
    once(sigName: "notify::hover-selection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hover-selection", ...args: any[]): void
    connect(sigName: "notify::level-indentation", callback: any): number
    on(sigName: "notify::level-indentation", callback: any): number
    once(sigName: "notify::level-indentation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::level-indentation", ...args: any[]): void
    connect(sigName: "notify::model", callback: any): number
    on(sigName: "notify::model", callback: any): number
    once(sigName: "notify::model", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::reorderable", callback: any): number
    on(sigName: "notify::reorderable", callback: any): number
    once(sigName: "notify::reorderable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reorderable", ...args: any[]): void
    connect(sigName: "notify::rubber-banding", callback: any): number
    on(sigName: "notify::rubber-banding", callback: any): number
    once(sigName: "notify::rubber-banding", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rubber-banding", ...args: any[]): void
    connect(sigName: "notify::rules-hint", callback: any): number
    on(sigName: "notify::rules-hint", callback: any): number
    once(sigName: "notify::rules-hint", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rules-hint", ...args: any[]): void
    connect(sigName: "notify::search-column", callback: any): number
    on(sigName: "notify::search-column", callback: any): number
    once(sigName: "notify::search-column", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::search-column", ...args: any[]): void
    connect(sigName: "notify::show-expanders", callback: any): number
    on(sigName: "notify::show-expanders", callback: any): number
    once(sigName: "notify::show-expanders", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-expanders", ...args: any[]): void
    connect(sigName: "notify::tooltip-column", callback: any): number
    on(sigName: "notify::tooltip-column", callback: any): number
    once(sigName: "notify::tooltip-column", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tooltip-column", ...args: any[]): void
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
    connect(sigName: "notify::hadjustment", callback: any): number
    on(sigName: "notify::hadjustment", callback: any): number
    once(sigName: "notify::hadjustment", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: any): number
    on(sigName: "notify::hscroll-policy", callback: any): number
    once(sigName: "notify::hscroll-policy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: any): number
    on(sigName: "notify::vadjustment", callback: any): number
    once(sigName: "notify::vadjustment", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: any): number
    on(sigName: "notify::vscroll-policy", callback: any): number
    once(sigName: "notify::vscroll-policy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A tree selector can be used to select certificates or keys. It allows
 * the user to select multiple objects from a tree.
 * @class 
 */
export class TreeSelector extends Gtk.TreeView {

    // Own properties of GcrUi-3.GcrUi.TreeSelector

    static name: string

    // Constructors of GcrUi-3.GcrUi.TreeSelector

    constructor(config?: TreeSelector.ConstructorProperties) 
    _init(config?: TreeSelector.ConstructorProperties): void
}

export module UnlockOptionsWidget {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of GcrUi-3.GcrUi.UnlockOptionsWidget

        choice?: string | null
        ttl?: number | null
    }

}

export interface UnlockOptionsWidget extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of GcrUi-3.GcrUi.UnlockOptionsWidget

    choice: string
    ttl: number

    // Owm methods of GcrUi-3.GcrUi.UnlockOptionsWidget

    /**
     * Get the currently selected option, like %GCR_UNLOCK_OPTION_ALWAYS.
     */
    getChoice(): string
    /**
     * Get the label for one of the options. Use an option name like
     * %GCR_UNLOCK_OPTION_ALWAYS.
     * @param option The option name
     */
    getLabel(option: string): string
    /**
     * Get the sensitivity state for one of the options. Use an option name like
     * %GCR_UNLOCK_OPTION_ALWAYS.
     * @param option The option name
     */
    getSensitive(option: string): boolean

    // Overloads of getSensitive

    /**
     * Returns the widget’s sensitivity (in the sense of returning
     * the value that has been set using gtk_widget_set_sensitive()).
     * 
     * The effective sensitivity of a widget is however determined by both its
     * own and its parent widget’s sensitivity. See gtk_widget_is_sensitive().
     */
    getSensitive(): boolean
    /**
     * Get the timeout setting set for unlock options that have a timeout.
     * This will also return a valid value if the currently selected option
     * does not have a timeout.
     */
    getTtl(): number
    /**
     * Set the currently selected option. Use an option name like
     * %GCR_UNLOCK_OPTION_ALWAYS.
     * @param option The option name
     */
    setChoice(option: string): void
    /**
     * Set the label for one of the options. Use an option name like
     * %GCR_UNLOCK_OPTION_ALWAYS.
     * @param option The option name
     * @param text The new label
     */
    setLabel(option: string, text: string): void
    /**
     * Set the sensitivity state for one of the options. Use an option name like
     * %GCR_UNLOCK_OPTION_ALWAYS. The reason will be displayed as a tooltip.
     * @param option The option name
     * @param sensitive The sensitivity state.
     * @param reason A user displayable string which contains the reason for the sensitivity.
     */
    setSensitive(option: string, sensitive: boolean, reason: string): void

    // Overloads of setSensitive

    /**
     * Sets the sensitivity of a widget. A widget is sensitive if the user
     * can interact with it. Insensitive widgets are “grayed out” and the
     * user can’t interact with them. Insensitive widgets are known as
     * “inactive”, “disabled”, or “ghosted” in some other toolkits.
     * @param sensitive %TRUE to make the widget sensitive
     */
    setSensitive(sensitive: boolean): void
    /**
     * Set the current setting for the timeout. This can be set even when the
     * currently selected option does not have a timeout.
     * @param ttl The timeout to set, in seconds
     */
    setTtl(ttl: number): void

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

    // Class property signals of GcrUi-3.GcrUi.UnlockOptionsWidget

    connect(sigName: "notify::choice", callback: any): number
    on(sigName: "notify::choice", callback: any): number
    once(sigName: "notify::choice", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::choice", ...args: any[]): void
    connect(sigName: "notify::ttl", callback: any): number
    on(sigName: "notify::ttl", callback: any): number
    once(sigName: "notify::ttl", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ttl", ...args: any[]): void
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
 * This widget displays a set of unlock options for the user to select.
 * 
 * The user can choose between keeping caching the unlock indefinitely, or for
 * a given amount of time.
 * 
 * Each option has a different name, for example #GCR_UNLOCK_OPTION_ALWAYS. These
 * names are used together with the various functions like
 * [method`UnlockOptionsWidget`.get_choice].
 * @class 
 */
export class UnlockOptionsWidget extends Gtk.Bin {

    // Own properties of GcrUi-3.GcrUi.UnlockOptionsWidget

    static name: string

    // Constructors of GcrUi-3.GcrUi.UnlockOptionsWidget

    constructor(config?: UnlockOptionsWidget.ConstructorProperties) 
    /**
     * Create a new #GcrUnlockOptionsWidget.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GcrUnlockOptionsWidget.
     * @constructor 
     */
    static new(): UnlockOptionsWidget
    _init(config?: UnlockOptionsWidget.ConstructorProperties): void
}

export module ViewerWidget {

    // Signal callback interfaces

    /**
     * Signal callback interface for `added`
     */
    export interface AddedSignalCallback {
        (renderer: Renderer, parsed: Gcr.Parsed): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of GcrUi-3.GcrUi.ViewerWidget

        /**
         * Display name for data being displayed. This is automatically
         * calculated from a loaded file, or can be explicitly set.
         * 
         * Used as a hint when displaying a title for the data, but may be
         * overridden by the parsed data.
         */
        displayName?: string | null
    }

}

export interface ViewerWidget extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of GcrUi-3.GcrUi.ViewerWidget

    /**
     * Display name for data being displayed. This is automatically
     * calculated from a loaded file, or can be explicitly set.
     * 
     * Used as a hint when displaying a title for the data, but may be
     * overridden by the parsed data.
     */
    displayName: string
    /**
     * The parser used to parse loaded data into viewable items.
     */
    readonly parser: Gcr.Parser

    // Owm methods of GcrUi-3.GcrUi.ViewerWidget

    /**
     * Clear the error displayed on the viewer widget.
     */
    clearError(): void
    /**
     * Get the display name for data being displayed. This is automatically
     * calculated from a loaded file, or can be explicitly set.
     * 
     * Used as a hint when displaying a title for the data, but may be
     * overridden by the parsed data.
     */
    getDisplayName(): string
    /**
     * Get the parser used to parse loaded data into viewable items.
     */
    getParser(): Gcr.Parser
    /**
     * Get the viewer used to display the viewable items.
     */
    getViewer(): Viewer
    /**
     * Parse and load some data to be displayed into the viewer widgets. The data
     * may contain multiple parseable items if the format can contain multiple
     * items.
     * @param displayName label for the loaded data
     * @param data data to load
     */
    loadBytes(displayName: string | null, data: any): void
    /**
     * Parse and load some data to be displayed into the viewer widgets. The data
     * may contain multiple parseable items if the format can contain multiple
     * items.
     * 
     * This function will copy the data. Use [method`ViewerWidget`.load_bytes] to avoid
     * copying the data.
     * @param displayName label for the loaded data
     * @param data data to load
     */
    loadData(displayName: string | null, data: Uint8Array): void
    /**
     * Display contents of a file in the viewer widget. Multiple files can
     * be loaded.
     * @param file a file to load
     */
    loadFile(file: Gio.File): void
    /**
     * Set the display name for data being displayed. Once explicitly
     * set it will no longer be calculated automatically by loading data.
     * 
     * Used as a hint when displaying a title for the data, but may be
     * overridden by the parsed data.
     * @param displayName the display name
     */
    setDisplayName(displayName: string): void
    /**
     * Show an error on the viewer widget. This is displayed on a info bar near
     * the edge of the widget.
     * @param message descriptive error message
     * @param error detailed error
     */
    showError(message: string, error: GLib.Error | null): void

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

    // Own signals of GcrUi-3.GcrUi.ViewerWidget

    connect(sigName: "added", callback: ViewerWidget.AddedSignalCallback): number
    on(sigName: "added", callback: ViewerWidget.AddedSignalCallback): number
    once(sigName: "added", callback: ViewerWidget.AddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "added", parsed: Gcr.Parsed, ...args: any[]): void

    // Class property signals of GcrUi-3.GcrUi.ViewerWidget

    connect(sigName: "notify::display-name", callback: any): number
    on(sigName: "notify::display-name", callback: any): number
    once(sigName: "notify::display-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::parser", callback: any): number
    on(sigName: "notify::parser", callback: any): number
    once(sigName: "notify::parser", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parser", ...args: any[]): void
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
 * A viewer widget which can display certificates and keys that are
 * located in files.
 * @class 
 */
export class ViewerWidget extends Gtk.Box {

    // Own properties of GcrUi-3.GcrUi.ViewerWidget

    static name: string

    // Constructors of GcrUi-3.GcrUi.ViewerWidget

    constructor(config?: ViewerWidget.ConstructorProperties) 
    /**
     * Create a new viewer widget.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new viewer widget.
     * @constructor 
     */
    static new(): ViewerWidget

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: ViewerWidget.ConstructorProperties): void
}

export interface CertificateRendererClass {

    // Own fields of GcrUi-3.GcrUi.CertificateRendererClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
}

/**
 * The class for #GcrCertificateRenderer.
 * @record 
 */
export abstract class CertificateRendererClass {

    // Own properties of GcrUi-3.GcrUi.CertificateRendererClass

    static name: string
}

export interface CertificateRendererPrivate {
}

export class CertificateRendererPrivate {

    // Own properties of GcrUi-3.GcrUi.CertificateRendererPrivate

    static name: string
}

export interface CertificateWidgetClass {
}

export abstract class CertificateWidgetClass {

    // Own properties of GcrUi-3.GcrUi.CertificateWidgetClass

    static name: string
}

export interface CertificateWidgetPrivate {
}

export class CertificateWidgetPrivate {

    // Own properties of GcrUi-3.GcrUi.CertificateWidgetPrivate

    static name: string
}

export interface CollectionModelClass {

    // Own fields of GcrUi-3.GcrUi.CollectionModelClass

    /**
     * The parent class
     * @field 
     */
    parentClass: GObject.ObjectClass
}

/**
 * The class for #GcrCollectionModel.
 * @record 
 */
export abstract class CollectionModelClass {

    // Own properties of GcrUi-3.GcrUi.CollectionModelClass

    static name: string
}

export interface CollectionModelPrivate {
}

export class CollectionModelPrivate {

    // Own properties of GcrUi-3.GcrUi.CollectionModelPrivate

    static name: string
}

export interface ComboSelectorClass {
}

export abstract class ComboSelectorClass {

    // Own properties of GcrUi-3.GcrUi.ComboSelectorClass

    static name: string
}

export interface ComboSelectorPrivate {
}

export class ComboSelectorPrivate {

    // Own properties of GcrUi-3.GcrUi.ComboSelectorPrivate

    static name: string
}

export interface FailureRendererClass {
}

export abstract class FailureRendererClass {

    // Own properties of GcrUi-3.GcrUi.FailureRendererClass

    static name: string
}

export interface FailureRendererPrivate {
}

export class FailureRendererPrivate {

    // Own properties of GcrUi-3.GcrUi.FailureRendererPrivate

    static name: string
}

export interface ImportButtonClass {

    // Own fields of GcrUi-3.GcrUi.ImportButtonClass

    /**
     * The parent class
     * @field 
     */
    parentClass: Gtk.ButtonClass
    importing: (self: ImportButton, importer: Gcr.Importer) => void
    imported: (self: ImportButton, importer: Gcr.Importer, error: GLib.Error) => void
}

/**
 * Class struct for [class`ImportButton]`.
 * @record 
 */
export abstract class ImportButtonClass {

    // Own properties of GcrUi-3.GcrUi.ImportButtonClass

    static name: string
}

export interface ImportButtonPrivate {
}

export class ImportButtonPrivate {

    // Own properties of GcrUi-3.GcrUi.ImportButtonPrivate

    static name: string
}

export interface KeyRendererClass {

    // Own fields of GcrUi-3.GcrUi.KeyRendererClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
}

/**
 * The class for #GcrKeyRenderer.
 * @record 
 */
export abstract class KeyRendererClass {

    // Own properties of GcrUi-3.GcrUi.KeyRendererClass

    static name: string
}

export interface KeyRendererPrivate {
}

export class KeyRendererPrivate {

    // Own properties of GcrUi-3.GcrUi.KeyRendererPrivate

    static name: string
}

export interface KeyWidgetClass {
}

export abstract class KeyWidgetClass {

    // Own properties of GcrUi-3.GcrUi.KeyWidgetClass

    static name: string
}

export interface KeyWidgetPrivate {
}

export class KeyWidgetPrivate {

    // Own properties of GcrUi-3.GcrUi.KeyWidgetPrivate

    static name: string
}

export interface ListSelectorClass {
}

export abstract class ListSelectorClass {

    // Own properties of GcrUi-3.GcrUi.ListSelectorClass

    static name: string
}

export interface ListSelectorPrivate {
}

export class ListSelectorPrivate {

    // Own properties of GcrUi-3.GcrUi.ListSelectorPrivate

    static name: string
}

export interface PromptDialogClass {

    // Own fields of GcrUi-3.GcrUi.PromptDialogClass

    parentClass: Gtk.DialogClass
}

export abstract class PromptDialogClass {

    // Own properties of GcrUi-3.GcrUi.PromptDialogClass

    static name: string
}

export interface PromptDialogPrivate {
}

export class PromptDialogPrivate {

    // Own properties of GcrUi-3.GcrUi.PromptDialogPrivate

    static name: string
}

export interface RendererIface {

    // Own fields of GcrUi-3.GcrUi.RendererIface

    /**
     * the parent interface type
     * @field 
     */
    parent: GObject.TypeInterface
    dataChanged: (self: Renderer) => void
    renderView: (self: Renderer, viewer: Viewer) => void
    populatePopup: (self: Renderer, viewer: Viewer, menu: Gtk.Menu) => void
}

/**
 * The interface for #GcrRenderer
 * @record 
 */
export abstract class RendererIface {

    // Own properties of GcrUi-3.GcrUi.RendererIface

    static name: string
}

export interface SecureEntryBufferClass {

    // Own fields of GcrUi-3.GcrUi.SecureEntryBufferClass

    parentClass: Gtk.EntryBufferClass
}

export abstract class SecureEntryBufferClass {

    // Own properties of GcrUi-3.GcrUi.SecureEntryBufferClass

    static name: string
}

export interface SecureEntryBufferPrivate {
}

export class SecureEntryBufferPrivate {

    // Own properties of GcrUi-3.GcrUi.SecureEntryBufferPrivate

    static name: string
}

export interface TreeSelectorClass {
}

export abstract class TreeSelectorClass {

    // Own properties of GcrUi-3.GcrUi.TreeSelectorClass

    static name: string
}

export interface TreeSelectorPrivate {
}

export class TreeSelectorPrivate {

    // Own properties of GcrUi-3.GcrUi.TreeSelectorPrivate

    static name: string
}

export interface UnlockOptionsWidgetClass {
}

export abstract class UnlockOptionsWidgetClass {

    // Own properties of GcrUi-3.GcrUi.UnlockOptionsWidgetClass

    static name: string
}

export interface UnlockOptionsWidgetPrivate {
}

export class UnlockOptionsWidgetPrivate {

    // Own properties of GcrUi-3.GcrUi.UnlockOptionsWidgetPrivate

    static name: string
}

export interface ViewerIface {

    // Own fields of GcrUi-3.GcrUi.ViewerIface

    /**
     * The parent interface
     * @field 
     */
    parent: GObject.TypeInterface
    addRenderer: (viewer: Viewer, renderer: Renderer) => void
    insertRenderer: (viewer: Viewer, renderer: Renderer, before: Renderer | null) => void
    removeRenderer: (viewer: Viewer, renderer: Renderer) => void
    countRenderers: (viewer: Viewer) => number
    getRenderer: (viewer: Viewer, index: number) => Renderer
}

/**
 * The interface for #GcrViewer
 * @record 
 */
export abstract class ViewerIface {

    // Own properties of GcrUi-3.GcrUi.ViewerIface

    static name: string
}

export interface ViewerWidgetClass {

    // Own fields of GcrUi-3.GcrUi.ViewerWidgetClass

    parentClass: Gtk.BoxClass
}

export abstract class ViewerWidgetClass {

    // Own properties of GcrUi-3.GcrUi.ViewerWidgetClass

    static name: string
}
