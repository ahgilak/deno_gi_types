
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Devhelp-3.0
 */

import type * as WebKit2 from './WebKit2-4.1.js';
import type * as Soup from './Soup-3.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as JavaScriptCore from './JavaScriptCore-4.1.js';
import type * as Gtk from './Gtk-3.0.js';
import type * as xlib from './xlib-2.0.js';
import type * as Gdk from './Gdk-3.0.js';
import type * as cairo from './cairo-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as GdkPixbuf from './GdkPixbuf-2.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as Atk from './Atk-1.0.js';

/**
 * The type of the content the link points to.
 */
export enum LinkType {
    /**
     * The top-level page of a #DhBook.
     */
    BOOK,
    /**
     * A page.
     */
    PAGE,
    /**
     * Another kind of keyword.
     */
    KEYWORD,
    /**
     * A function keyword.
     */
    FUNCTION,
    /**
     * A struct keyword.
     */
    STRUCT,
    /**
     * A macro keyword.
     */
    MACRO,
    /**
     * An enum keyword.
     */
    ENUM,
    /**
     * A typedef keyword.
     */
    TYPEDEF,
    /**
     * A property keyword.
     */
    PROPERTY,
    /**
     * A signal keyword.
     */
    SIGNAL,
}
export enum LinkFlags {
    /**
     * No flags set.
     */
    NONE,
    /**
     * The symbol that the link points to is deprecated.
     */
    DEPRECATED,
}
/**
 * Binds `sidebar` and `notebook:`
 * - When the #DhSidebar::link-selected signal is emitted, open the URI in the
 *   active #DhWebView.
 * - On #GtkNotebook::switch-page or when the user clicks on a link, calls
 *   dh_sidebar_select_uri() with the new active URI.
 * 
 * You need to call this function when the #DhNotebook is empty, i.e. before
 * adding the first #DhTab.
 * 
 * Note that this function doesn't take a “self” window parameter, to be more
 * flexible: it is possible to have several pairs of #DhSidebar/#DhNotebook per
 * window, to show different #DhProfile's.
 * @param sidebar a #DhSidebar.
 * @param notebook an empty #DhNotebook.
 */
export function applicationWindowBindSidebarAndNotebook(sidebar: Sidebar, notebook: Notebook): void
/**
 * Free the resources allocated by Devhelp. For example it unrefs the singleton
 * objects.
 * 
 * It is not mandatory to call this function, it's just to be friendlier to
 * memory debugging tools. This function is meant to be called at the end of
 * main(). It can be called several times.
 */
export function finalize(): void
/**
 * Initializes the Devhelp library (e.g. for the internationalization).
 * 
 * This function can be called several times, but is meant to be called at the
 * beginning of main(), before any other Devhelp function call.
 * 
 * Since version 3.38, this function enables the WebKitGTK sandbox by calling
 * webkit_web_context_set_sandbox_enabled() on the default #WebKitWebContext.
 */
export function init(): void
export function linkTypeToString(linkType: LinkType): string
export module AssistantView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `open-uri`
     */
    export interface OpenUriSignalCallback {
        (uri: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, WebKit2.WebView.ConstructorProperties {
    }

}

export interface AssistantView extends Atk.ImplementorIface, Gtk.Buildable {

    // Conflicting properties

    parent: WebKit2.WebViewBase & Gtk.Container & Gtk.Container

    // Own fields of Devhelp-3.0.Devhelp.AssistantView

    parentInstance: any

    // Owm methods of Devhelp-3.0.Devhelp.AssistantView

    /**
     * Search for `str` in the current assistant view.
     * @param str the search query.
     */
    search(str: string): boolean
    /**
     * Open `link` in the assistant view, if %NULL the view will be blanked.
     * @param link a #DhLink to set or %NULL.
     */
    setLink(link: Link | null): boolean

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
     * Gets the #WebKitSettings currently applied to `web_view`.
     * If no other #WebKitSettings have been explicitly applied to
     * `web_view` with webkit_web_view_set_settings(), the default
     * #WebKitSettings will be returned. This method always returns
     * a valid #WebKitSettings object.
     * To modify any of the `web_view` settings, you can either create
     * a new #WebKitSettings object with webkit_settings_new(), setting
     * the desired preferences, and then replace the existing `web_view`
     * settings with webkit_web_view_set_settings() or get the existing
     * `web_view` settings and update it directly. #WebKitSettings objects
     * can be shared by multiple #WebKitWebView<!-- -->s, so modifying
     * the settings of a #WebKitWebView would affect other
     * #WebKitWebView<!-- -->s using the same #WebKitSettings.
     */
    getSettings(): WebKit2.Settings

    // Overloads of getSettings

    /**
     * Gets the settings object holding the settings used for this widget.
     * 
     * Note that this function can only be called when the #GtkWidget
     * is attached to a toplevel, since the settings object is specific
     * to a particular #GdkScreen.
     */
    getSettings(): Gtk.Settings
    /**
     * Gets the settings object holding the settings used for this widget.
     * 
     * Note that this function can only be called when the #GtkWidget
     * is attached to a toplevel, since the settings object is specific
     * to a particular #GdkScreen.
     */
    getSettings(): Gtk.Settings
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

    // Own signals of Devhelp-3.0.Devhelp.AssistantView

    connect(sigName: "open-uri", callback: AssistantView.OpenUriSignalCallback): number
    on(sigName: "open-uri", callback: AssistantView.OpenUriSignalCallback): number
    once(sigName: "open-uri", callback: AssistantView.OpenUriSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "open-uri", ...args: any[]): void

    // Class property signals of Devhelp-3.0.Devhelp.AssistantView

    connect(sigName: "notify::automation-presentation-type", callback: any): number
    on(sigName: "notify::automation-presentation-type", callback: any): number
    once(sigName: "notify::automation-presentation-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::automation-presentation-type", ...args: any[]): void
    connect(sigName: "notify::camera-capture-state", callback: any): number
    on(sigName: "notify::camera-capture-state", callback: any): number
    once(sigName: "notify::camera-capture-state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::camera-capture-state", ...args: any[]): void
    connect(sigName: "notify::display-capture-state", callback: any): number
    on(sigName: "notify::display-capture-state", callback: any): number
    once(sigName: "notify::display-capture-state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display-capture-state", ...args: any[]): void
    connect(sigName: "notify::editable", callback: any): number
    on(sigName: "notify::editable", callback: any): number
    once(sigName: "notify::editable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::estimated-load-progress", callback: any): number
    on(sigName: "notify::estimated-load-progress", callback: any): number
    once(sigName: "notify::estimated-load-progress", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::estimated-load-progress", ...args: any[]): void
    connect(sigName: "notify::favicon", callback: any): number
    on(sigName: "notify::favicon", callback: any): number
    once(sigName: "notify::favicon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::favicon", ...args: any[]): void
    connect(sigName: "notify::is-controlled-by-automation", callback: any): number
    on(sigName: "notify::is-controlled-by-automation", callback: any): number
    once(sigName: "notify::is-controlled-by-automation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-controlled-by-automation", ...args: any[]): void
    connect(sigName: "notify::is-ephemeral", callback: any): number
    on(sigName: "notify::is-ephemeral", callback: any): number
    once(sigName: "notify::is-ephemeral", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-ephemeral", ...args: any[]): void
    connect(sigName: "notify::is-loading", callback: any): number
    on(sigName: "notify::is-loading", callback: any): number
    once(sigName: "notify::is-loading", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-loading", ...args: any[]): void
    connect(sigName: "notify::is-muted", callback: any): number
    on(sigName: "notify::is-muted", callback: any): number
    once(sigName: "notify::is-muted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-muted", ...args: any[]): void
    connect(sigName: "notify::is-playing-audio", callback: any): number
    on(sigName: "notify::is-playing-audio", callback: any): number
    once(sigName: "notify::is-playing-audio", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-playing-audio", ...args: any[]): void
    connect(sigName: "notify::is-web-process-responsive", callback: any): number
    on(sigName: "notify::is-web-process-responsive", callback: any): number
    once(sigName: "notify::is-web-process-responsive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-web-process-responsive", ...args: any[]): void
    connect(sigName: "notify::microphone-capture-state", callback: any): number
    on(sigName: "notify::microphone-capture-state", callback: any): number
    once(sigName: "notify::microphone-capture-state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::microphone-capture-state", ...args: any[]): void
    connect(sigName: "notify::page-id", callback: any): number
    on(sigName: "notify::page-id", callback: any): number
    once(sigName: "notify::page-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::page-id", ...args: any[]): void
    connect(sigName: "notify::related-view", callback: any): number
    on(sigName: "notify::related-view", callback: any): number
    once(sigName: "notify::related-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::related-view", ...args: any[]): void
    connect(sigName: "notify::settings", callback: any): number
    on(sigName: "notify::settings", callback: any): number
    once(sigName: "notify::settings", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::settings", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::user-content-manager", callback: any): number
    on(sigName: "notify::user-content-manager", callback: any): number
    once(sigName: "notify::user-content-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user-content-manager", ...args: any[]): void
    connect(sigName: "notify::web-context", callback: any): number
    on(sigName: "notify::web-context", callback: any): number
    once(sigName: "notify::web-context", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::web-context", ...args: any[]): void
    connect(sigName: "notify::website-policies", callback: any): number
    on(sigName: "notify::website-policies", callback: any): number
    once(sigName: "notify::website-policies", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::website-policies", ...args: any[]): void
    connect(sigName: "notify::zoom-level", callback: any): number
    on(sigName: "notify::zoom-level", callback: any): number
    once(sigName: "notify::zoom-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::zoom-level", ...args: any[]): void
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

export class AssistantView extends WebKit2.WebView {

    // Own properties of Devhelp-3.0.Devhelp.AssistantView

    static name: string

    // Constructors of Devhelp-3.0.Devhelp.AssistantView

    constructor(config?: AssistantView.ConstructorProperties) 
    constructor() 
    static new(): AssistantView
    _init(config?: AssistantView.ConstructorProperties): void
}

export module Book {

    // Signal callback interfaces

    /**
     * Signal callback interface for `deleted`
     */
    export interface DeletedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `updated`
     */
    export interface UpdatedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Book {

    // Own fields of Devhelp-3.0.Devhelp.Book

    parentInstance: GObject.Object

    // Owm methods of Devhelp-3.0.Devhelp.Book

    /**
     * Compares the #DhBook's by their IDs, with g_ascii_strcasecmp().
     * @param b a #DhBook.
     */
    cmpById(b: Book): number
    /**
     * Compares the #DhBook's by their title.
     * @param b a #DhBook.
     */
    cmpByTitle(b: Book): number
    getCompletion(): Completion
    /**
     * Gets the book ID. In the Devhelp index file format version 2, it is actually
     * the “name”, not the ID, but “book ID” is clearer, “book name” can be confused
     * with the title.
     */
    getId(): string
    getIndexFile(): Gio.File
    getLanguage(): string
    getLinks(): Link[]
    getTitle(): string
    /**
     * Gets the general structure of the book, as a tree. The tree contains only
     * #DhLink's of type %DH_LINK_TYPE_BOOK or %DH_LINK_TYPE_PAGE. The other
     * #DhLink's are not contained in the tree. To have a list of
     * <emphasis>all</emphasis> #DhLink's part of the book, you need to call
     * dh_book_get_links().
     */
    getTree(): GLib.Node

    // Own signals of Devhelp-3.0.Devhelp.Book

    connect(sigName: "deleted", callback: Book.DeletedSignalCallback): number
    on(sigName: "deleted", callback: Book.DeletedSignalCallback): number
    once(sigName: "deleted", callback: Book.DeletedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "deleted", ...args: any[]): void
    connect(sigName: "updated", callback: Book.UpdatedSignalCallback): number
    on(sigName: "updated", callback: Book.UpdatedSignalCallback): number
    once(sigName: "updated", callback: Book.UpdatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "updated", ...args: any[]): void

    // Class property signals of Devhelp-3.0.Devhelp.Book

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Book extends GObject.Object {

    // Own properties of Devhelp-3.0.Devhelp.Book

    static name: string

    // Constructors of Devhelp-3.0.Devhelp.Book

    constructor(config?: Book.ConstructorProperties) 
    constructor(indexFile: Gio.File) 
    static new(indexFile: Gio.File): Book
    _init(config?: Book.ConstructorProperties): void
}

export module BookList {

    // Signal callback interfaces

    /**
     * Signal callback interface for `add-book`
     */
    export interface AddBookSignalCallback {
        (book: Book): void
    }

    /**
     * Signal callback interface for `remove-book`
     */
    export interface RemoveBookSignalCallback {
        (book: Book): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface BookList {

    // Own fields of Devhelp-3.0.Devhelp.BookList

    parent: GObject.Object
    priv: BookListPrivate

    // Owm methods of Devhelp-3.0.Devhelp.BookList

    // Has conflict: addBook(book: Book): void
    // Has conflict: getBooks(): Book[]
    // Has conflict: removeBook(book: Book): void

    // Own virtual methods of Devhelp-3.0.Devhelp.BookList

    /**
     * Emits the #DhBookList::add-book signal.
     * 
     * It is a programmer error to call this function if `book` is already inserted
     * in `book_list`.
     * @virtual 
     * @param book a #DhBook.
     */
    addBook(book: Book): void
    /**
     * Gets the list of #DhBook's part of `book_list,` in no particular order. Each
     * book ID in the list is unique (see dh_book_get_id()).
     * @virtual 
     */
    getBooks(): Book[]
    /**
     * Emits the #DhBookList::remove-book signal.
     * 
     * It is a programmer error to call this function if `book` is not present in
     * `book_list`.
     * @virtual 
     * @param book a #DhBook.
     */
    removeBook(book: Book): void

    // Own signals of Devhelp-3.0.Devhelp.BookList

    connect(sigName: "add-book", callback: BookList.AddBookSignalCallback): number
    on(sigName: "add-book", callback: BookList.AddBookSignalCallback): number
    once(sigName: "add-book", callback: BookList.AddBookSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "add-book", ...args: any[]): void
    connect(sigName: "remove-book", callback: BookList.RemoveBookSignalCallback): number
    on(sigName: "remove-book", callback: BookList.RemoveBookSignalCallback): number
    once(sigName: "remove-book", callback: BookList.RemoveBookSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "remove-book", ...args: any[]): void

    // Class property signals of Devhelp-3.0.Devhelp.BookList

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class BookList extends GObject.Object {

    // Own properties of Devhelp-3.0.Devhelp.BookList

    static name: string

    // Constructors of Devhelp-3.0.Devhelp.BookList

    constructor(config?: BookList.ConstructorProperties) 
    constructor() 
    static new(): BookList
    _init(config?: BookList.ConstructorProperties): void
    /**
     * Gets the default #DhBookList object. It is created with #DhBookListBuilder,
     * dh_book_list_builder_add_default_sub_book_lists() is called, and
     * dh_book_list_builder_read_books_disabled_setting() is called with the default
     * #DhSettings object as returned by dh_settings_get_default().
     */
    static getDefault(): BookList
}

export module BookListBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface BookListBuilder {

    // Own fields of Devhelp-3.0.Devhelp.BookListBuilder

    parent: GObject.Object
    priv: BookListBuilderPrivate

    // Owm methods of Devhelp-3.0.Devhelp.BookListBuilder

    /**
     * Creates the default #DhBookListDirectory's and adds them to `builder` with
     * dh_book_list_builder_add_sub_book_list().
     * 
     * It creates and adds a #DhBookListDirectory for the following directories (in
     * that order):
     * - `$XDG_DATA_HOME/doc/`
     * - `$XDG_DATA_HOME/gtk-doc/html/`
     * - `$XDG_DATA_HOME/devhelp/books/`
     * - For each directory in `$XDG_DATA_DIRS`:
     *   - `$xdg_data_dir/doc/`
     *   - `$xdg_data_dir/gtk-doc/html/`
     *   - `$xdg_data_dir/devhelp/books/`
     * 
     * See g_get_user_data_dir() and g_get_system_data_dirs().
     * 
     * Additionally, if the libdevhelp has been compiled with the `flatpak_build`
     * option, it creates and adds a #DhBookListDirectory for the following
     * directories (in that order, after the above ones):
     * - `/run/host/usr/share/doc/`
     * - `/run/host/usr/share/gtk-doc/html/`
     * - `/run/host/usr/share/devhelp/books/`
     * 
     * The exact list of directories is subject to change, it is not part of the
     * API.
     */
    addDefaultSubBookLists(): void
    /**
     * Adds `sub_book_list`.
     * 
     * The #DhBookList object that will be created with
     * dh_book_list_builder_create_object() will contain all the sub-#DhBookList's
     * added with this function (and it will listen to their signals). The
     * sub-#DhBookList's must be added in order of decreasing priority (the first
     * sub-#DhBookList added has the highest priority). The priority is used in case
     * of book ID conflicts (see dh_book_get_id()).
     * @param subBookList a #DhBookList.
     */
    addSubBookList(subBookList: BookList): void
    /**
     * Creates the #DhBookList. It actually creates a subclass of #DhBookList, but
     * the subclass is not exposed to the public API.
     */
    createObject(): BookList
    /**
     * Sets the #DhSettings object from which to read the "books-disabled"
     * #GSettings key. If `settings` is %NULL or if this function isn't called, then
     * the #DhBookList object that will be created with
     * dh_book_list_builder_create_object() will not read a "books-disabled"
     * setting.
     * 
     * With #DhBookListBuilder it is not possible to read the "books-disabled"
     * settings from several #DhSettings objects and combine them. Only the last
     * call to this function is taken into account when creating the #DhBookList
     * with dh_book_list_builder_create_object().
     * @param settings a #DhSettings, or %NULL.
     */
    readBooksDisabledSetting(settings: Settings | null): void

    // Class property signals of Devhelp-3.0.Devhelp.BookListBuilder

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class BookListBuilder extends GObject.Object {

    // Own properties of Devhelp-3.0.Devhelp.BookListBuilder

    static name: string

    // Constructors of Devhelp-3.0.Devhelp.BookListBuilder

    constructor(config?: BookListBuilder.ConstructorProperties) 
    constructor() 
    static new(): BookListBuilder
    _init(config?: BookListBuilder.ConstructorProperties): void
}

export module BookListDirectory {

    // Constructor properties interface

    export interface ConstructorProperties extends BookList.ConstructorProperties {

        // Own constructor properties of Devhelp-3.0.Devhelp.BookListDirectory

        /**
         * The directory, as a #GFile, containing a set of Devhelp books.
         */
        directory?: Gio.File | null
    }

}

export interface BookListDirectory {

    // Own properties of Devhelp-3.0.Devhelp.BookListDirectory

    /**
     * The directory, as a #GFile, containing a set of Devhelp books.
     */
    readonly directory: Gio.File

    // Own fields of Devhelp-3.0.Devhelp.BookListDirectory

    parent: BookList & GObject.Object
    priv: any

    // Owm methods of Devhelp-3.0.Devhelp.BookListDirectory

    getDirectory(): Gio.File

    // Class property signals of Devhelp-3.0.Devhelp.BookListDirectory

    connect(sigName: "notify::directory", callback: any): number
    on(sigName: "notify::directory", callback: any): number
    once(sigName: "notify::directory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::directory", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class BookListDirectory extends BookList {

    // Own properties of Devhelp-3.0.Devhelp.BookListDirectory

    static name: string

    // Constructors of Devhelp-3.0.Devhelp.BookListDirectory

    constructor(config?: BookListDirectory.ConstructorProperties) 
    /**
     * Returns a #DhBookListDirectory for `directory`.
     * 
     * If a #DhBookListDirectory instance is still alive for `directory` (according
     * to g_file_equal()), the same instance is returned with the reference count
     * increased by one, to avoid data duplication. If no #DhBookListDirectory
     * instance already exists for `directory,` this function returns a new instance
     * with a reference count of one (so it's the responsibility of the caller to
     * keep the object alive if wanted, to avoid destroying and re-creating the same
     * #DhBookListDirectory repeatedly).
     * @constructor 
     * @param directory the #DhBookListDirectory:directory.
     */
    constructor(directory: Gio.File) 
    /**
     * Returns a #DhBookListDirectory for `directory`.
     * 
     * If a #DhBookListDirectory instance is still alive for `directory` (according
     * to g_file_equal()), the same instance is returned with the reference count
     * increased by one, to avoid data duplication. If no #DhBookListDirectory
     * instance already exists for `directory,` this function returns a new instance
     * with a reference count of one (so it's the responsibility of the caller to
     * keep the object alive if wanted, to avoid destroying and re-creating the same
     * #DhBookListDirectory repeatedly).
     * @constructor 
     * @param directory the #DhBookListDirectory:directory.
     */
    static new(directory: Gio.File): BookListDirectory

    // Overloads of new

    static new(): BookList
    _init(config?: BookListDirectory.ConstructorProperties): void
}

export module BookManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface BookManager {

    // Own fields of Devhelp-3.0.Devhelp.BookManager

    parentInstance: GObject.Object

    // Owm methods of Devhelp-3.0.Devhelp.BookManager

    populate(): void

    // Class property signals of Devhelp-3.0.Devhelp.BookManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class BookManager extends GObject.Object {

    // Own properties of Devhelp-3.0.Devhelp.BookManager

    static name: string

    // Constructors of Devhelp-3.0.Devhelp.BookManager

    constructor(config?: BookManager.ConstructorProperties) 
    constructor() 
    static new(): BookManager
    _init(config?: BookManager.ConstructorProperties): void
}

export module BookTree {

    // Signal callback interfaces

    /**
     * Signal callback interface for `link-selected`
     */
    export interface LinkSelectedSignalCallback {
        (link: Link): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.TreeView.ConstructorProperties {

        // Own constructor properties of Devhelp-3.0.Devhelp.BookTree

        /**
         * The #DhProfile. If set to %NULL, the default profile as returned by
         * dh_profile_get_default() is used.
         */
        profile?: Profile | null
    }

}

export interface BookTree extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of Devhelp-3.0.Devhelp.BookTree

    /**
     * The #DhProfile. If set to %NULL, the default profile as returned by
     * dh_profile_get_default() is used.
     */
    readonly profile: Profile

    // Own fields of Devhelp-3.0.Devhelp.BookTree

    parentInstance: any

    // Owm methods of Devhelp-3.0.Devhelp.BookTree

    getProfile(): Profile
    getSelectedLink(): Link | null
    /**
     * Selects the row corresponding to `uri`. It searches in the tree a #DhLink
     * being at `uri` (if it's an exact match), or containing `uri` (if `uri` contains
     * an anchor).
     * @param uri the URI to select.
     */
    selectUri(uri: string): void

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

    // Own signals of Devhelp-3.0.Devhelp.BookTree

    connect(sigName: "link-selected", callback: BookTree.LinkSelectedSignalCallback): number
    on(sigName: "link-selected", callback: BookTree.LinkSelectedSignalCallback): number
    once(sigName: "link-selected", callback: BookTree.LinkSelectedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "link-selected", ...args: any[]): void

    // Class property signals of Devhelp-3.0.Devhelp.BookTree

    connect(sigName: "notify::profile", callback: any): number
    on(sigName: "notify::profile", callback: any): number
    once(sigName: "notify::profile", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::profile", ...args: any[]): void
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

export class BookTree extends Gtk.TreeView {

    // Own properties of Devhelp-3.0.Devhelp.BookTree

    static name: string

    // Constructors of Devhelp-3.0.Devhelp.BookTree

    constructor(config?: BookTree.ConstructorProperties) 
    constructor(profile: Profile | null) 
    static new(profile: Profile | null): BookTree

    // Overloads of new

    /**
     * Creates a new #GtkTreeView widget.
     * @constructor 
     */
    static new(): Gtk.TreeView
    _init(config?: BookTree.ConstructorProperties): void
}

export module Completion {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Completion {

    // Own fields of Devhelp-3.0.Devhelp.Completion

    parent: GObject.Object
    priv: CompletionPrivate

    // Owm methods of Devhelp-3.0.Devhelp.Completion

    /**
     * Adds a string to the `completion` object.
     * 
     * After adding all the strings you need to call dh_completion_sort().
     * @param str a string.
     */
    addString(str: string): void
    /**
     * This function does the equivalent of:
     * 1. Searches the data structure of `completion` to find all strings that have
     *    `prefix` as prefix.
     * 2. From the list found at step 1, find the longest prefix that still matches
     *    all the strings in the list.
     * 
     * This function assumes that `prefix` and the strings contained in `completion`
     * are in UTF-8. If all the strings are valid UTF-8, then the return value will
     * also be valid UTF-8 (it won't return a partial multi-byte character).
     * @param prefix the string to complete.
     */
    complete(prefix: string): string | null
    /**
     * Sorts all the strings. It is required to call this function after adding
     * strings with dh_completion_add_string().
     */
    sort(): void

    // Class property signals of Devhelp-3.0.Devhelp.Completion

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Completion extends GObject.Object {

    // Own properties of Devhelp-3.0.Devhelp.Completion

    static name: string

    // Constructors of Devhelp-3.0.Devhelp.Completion

    constructor(config?: Completion.ConstructorProperties) 
    constructor() 
    static new(): Completion
    _init(config?: Completion.ConstructorProperties): void
    /**
     * The same as dh_completion_complete(), but aggregated for several
     * #DhCompletion objects.
     * @param completionObjects a #GList of   #DhCompletion objects.
     * @param prefix the string to complete.
     */
    static aggregateComplete(completionObjects: Completion[] | null, prefix: string): string | null
}

export module KeywordModel {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.TreeModel.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface KeywordModel extends Gtk.TreeModel {

    // Own fields of Devhelp-3.0.Devhelp.KeywordModel

    parentInstance: GObject.Object

    // Owm methods of Devhelp-3.0.Devhelp.KeywordModel

    /**
     * Searches in the #DhBookList of `profile` the list of #DhLink's that correspond
     * to `search_string,` and fills the `model` with that list (erasing the previous
     * content).
     * 
     * Attention, when calling this function the `model` needs to be disconnected
     * from the #GtkTreeView, because the #GtkTreeModel signals are not emitted, to
     * improve the performances (sending a lot of signals is slow) and have a
     * simpler implementation. The previous row selection is anyway no longer
     * relevant.
     * 
     * Note that there is a maximum number of matches (configured internally). When
     * the maximum is reached the search is stopped, to avoid blocking the GUI
     * (since this function runs synchronously) if the `search_string` contains for
     * example only one character. (And it is anyway not very useful to show to the
     * user tens of thousands search results).
     * @param searchString a search query.
     * @param currentBookId the ID of the book currently shown, or %NULL.
     * @param profile a #DhProfile, or %NULL for the default profile.
     */
    filter(searchString: string, currentBookId: string | null, profile: Profile | null): Link | null

    // Class property signals of Devhelp-3.0.Devhelp.KeywordModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class KeywordModel extends GObject.Object {

    // Own properties of Devhelp-3.0.Devhelp.KeywordModel

    static name: string

    // Constructors of Devhelp-3.0.Devhelp.KeywordModel

    constructor(config?: KeywordModel.ConstructorProperties) 
    constructor() 
    static new(): KeywordModel
    _init(config?: KeywordModel.ConstructorProperties): void
}

export module Notebook {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Notebook.ConstructorProperties {

        // Own constructor properties of Devhelp-3.0.Devhelp.Notebook

        /**
         * The #DhProfile. If set to %NULL, the default profile as returned by
         * dh_profile_get_default() is used.
         */
        profile?: Profile | null
    }

}

export interface Notebook extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Devhelp-3.0.Devhelp.Notebook

    /**
     * The #DhProfile. If set to %NULL, the default profile as returned by
     * dh_profile_get_default() is used.
     */
    readonly profile: Profile

    // Own fields of Devhelp-3.0.Devhelp.Notebook

    parent: Gtk.Notebook & Gtk.Container
    priv: NotebookPrivate

    // Owm methods of Devhelp-3.0.Devhelp.Notebook

    getActiveTab(): Tab | null
    getActiveWebView(): WebView | null
    getAllWebViews(): WebView[]
    getProfile(): Profile
    /**
     * Creates a new #DhTab and #DhTabLabel and appends them to the #GtkNotebook.
     * 
     * The #DhWebView will have the same #DhProfile as `notebook`.
     * @param uri the URI to open, or %NULL for a blank page.
     * @param switchFocus whether to call gtk_notebook_set_current_page() on the new   tab.
     */
    openNewTab(uri: string | null, switchFocus: boolean): void

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

    // Class property signals of Devhelp-3.0.Devhelp.Notebook

    connect(sigName: "notify::profile", callback: any): number
    on(sigName: "notify::profile", callback: any): number
    once(sigName: "notify::profile", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::profile", ...args: any[]): void
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

export class Notebook extends Gtk.Notebook {

    // Own properties of Devhelp-3.0.Devhelp.Notebook

    static name: string

    // Constructors of Devhelp-3.0.Devhelp.Notebook

    constructor(config?: Notebook.ConstructorProperties) 
    constructor(profile: Profile | null) 
    static new(profile: Profile | null): Notebook

    // Overloads of new

    /**
     * Creates a new #GtkNotebook widget with no pages.
     * @constructor 
     */
    static new(): Gtk.Notebook
    _init(config?: Notebook.ConstructorProperties): void
}

export module Profile {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Profile {

    // Own fields of Devhelp-3.0.Devhelp.Profile

    parent: GObject.Object
    priv: ProfilePrivate

    // Owm methods of Devhelp-3.0.Devhelp.Profile

    /**
     * Gets the #DhBookList object of `profile`. The returned object is guaranteed to
     * be the same for the lifetime of `profile`.
     */
    getBookList(): BookList
    /**
     * Gets the #DhSettings object of `profile`. The returned object is guaranteed to
     * be the same for the lifetime of `profile`.
     */
    getSettings(): Settings

    // Class property signals of Devhelp-3.0.Devhelp.Profile

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Profile extends GObject.Object {

    // Own properties of Devhelp-3.0.Devhelp.Profile

    static name: string

    // Constructors of Devhelp-3.0.Devhelp.Profile

    constructor(config?: Profile.ConstructorProperties) 
    _init(config?: Profile.ConstructorProperties): void
    /**
     * Gets the default #DhProfile object. It has the default #DhSettings object as
     * returned by dh_settings_get_default(), and the default #DhBookList object as
     * returned by dh_book_list_get_default().
     */
    static getDefault(): Profile
}

export module ProfileBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ProfileBuilder {

    // Own fields of Devhelp-3.0.Devhelp.ProfileBuilder

    parent: GObject.Object
    priv: ProfileBuilderPrivate

    // Owm methods of Devhelp-3.0.Devhelp.ProfileBuilder

    createObject(): Profile
    /**
     * Sets the #DhBookList object.
     * 
     * If you don't call this function, the default #DhBookList object as returned
     * by dh_book_list_get_default() will be used.
     * @param bookList a #DhBookList.
     */
    setBookList(bookList: BookList): void
    /**
     * Sets the #DhSettings object.
     * 
     * If you don't call this function, the default #DhSettings object as returned
     * by dh_settings_get_default() will be used.
     * @param settings a #DhSettings.
     */
    setSettings(settings: Settings): void

    // Class property signals of Devhelp-3.0.Devhelp.ProfileBuilder

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ProfileBuilder extends GObject.Object {

    // Own properties of Devhelp-3.0.Devhelp.ProfileBuilder

    static name: string

    // Constructors of Devhelp-3.0.Devhelp.ProfileBuilder

    constructor(config?: ProfileBuilder.ConstructorProperties) 
    constructor() 
    static new(): ProfileBuilder
    _init(config?: ProfileBuilder.ConstructorProperties): void
}

export module SearchBar {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.SearchBar.ConstructorProperties {

        // Own constructor properties of Devhelp-3.0.Devhelp.SearchBar

        /**
         * The associated #DhNotebook. #DhSearchBar has a strong reference to
         * the #DhNotebook.
         */
        notebook?: Notebook | null
    }

}

export interface SearchBar extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Devhelp-3.0.Devhelp.SearchBar

    /**
     * The associated #DhNotebook. #DhSearchBar has a strong reference to
     * the #DhNotebook.
     */
    readonly notebook: Notebook

    // Own fields of Devhelp-3.0.Devhelp.SearchBar

    parent: Gtk.SearchBar & Gtk.Container
    priv: SearchBarPrivate

    // Owm methods of Devhelp-3.0.Devhelp.SearchBar

    getNotebook(): Notebook
    /**
     * Grabs the focus to the #DhSearchBar search entry and selects its text.
     */
    grabFocusToSearchEntry(): void

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

    // Class property signals of Devhelp-3.0.Devhelp.SearchBar

    connect(sigName: "notify::notebook", callback: any): number
    on(sigName: "notify::notebook", callback: any): number
    once(sigName: "notify::notebook", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::notebook", ...args: any[]): void
    connect(sigName: "notify::search-mode-enabled", callback: any): number
    on(sigName: "notify::search-mode-enabled", callback: any): number
    once(sigName: "notify::search-mode-enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::search-mode-enabled", ...args: any[]): void
    connect(sigName: "notify::show-close-button", callback: any): number
    on(sigName: "notify::show-close-button", callback: any): number
    once(sigName: "notify::show-close-button", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-close-button", ...args: any[]): void
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

export class SearchBar extends Gtk.SearchBar {

    // Own properties of Devhelp-3.0.Devhelp.SearchBar

    static name: string

    // Constructors of Devhelp-3.0.Devhelp.SearchBar

    constructor(config?: SearchBar.ConstructorProperties) 
    constructor(notebook: Notebook) 
    static new(notebook: Notebook): SearchBar

    // Overloads of new

    /**
     * Creates a #GtkSearchBar. You will need to tell it about
     * which widget is going to be your text entry using
     * gtk_search_bar_connect_entry().
     * @constructor 
     */
    static new(): Gtk.SearchBar
    _init(config?: SearchBar.ConstructorProperties): void
}

export module Settings {

    // Signal callback interfaces

    /**
     * Signal callback interface for `books-disabled-changed`
     */
    export interface BooksDisabledChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `fonts-changed`
     */
    export interface FontsChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Devhelp-3.0.Devhelp.Settings

        /**
         * Font for text with fixed width, such as code examples.
         * 
         * This property is independent of #DhSettings:use-system-fonts.
         */
        fixedFont?: string | null
        /**
         * Whether books should be grouped by programming language in the UI.
         */
        groupBooksByLanguage?: boolean | null
        /**
         * Whether to use the system default fonts.
         */
        useSystemFonts?: boolean | null
        /**
         * Font for text with variable width.
         * 
         * This property is independent of #DhSettings:use-system-fonts.
         */
        variableFont?: string | null
    }

}

export interface Settings {

    // Own properties of Devhelp-3.0.Devhelp.Settings

    /**
     * Font for text with fixed width, such as code examples.
     * 
     * This property is independent of #DhSettings:use-system-fonts.
     */
    fixedFont: string
    /**
     * Whether books should be grouped by programming language in the UI.
     */
    groupBooksByLanguage: boolean
    /**
     * Whether to use the system default fonts.
     */
    useSystemFonts: boolean
    /**
     * Font for text with variable width.
     * 
     * This property is independent of #DhSettings:use-system-fonts.
     */
    variableFont: string

    // Own fields of Devhelp-3.0.Devhelp.Settings

    parent: GObject.Object
    priv: SettingsPrivate

    // Owm methods of Devhelp-3.0.Devhelp.Settings

    /**
     * Binds all the #DhSettings properties to their corresponding #GSettings keys.
     */
    bindAll(): void
    /**
     * Binds the #DhSettings:use-system-fonts, #DhSettings:variable-font and
     * #DhSettings:fixed-font properties to their corresponding #GSettings keys.
     */
    bindFonts(): void
    /**
     * Binds the #DhSettings:group-books-by-language property to the corresponding
     * #GSettings key.
     */
    bindGroupBooksByLanguage(): void
    /**
     * Tells `settings` to not emit the #DhSettings::books-disabled-changed signal
     * until dh_settings_thaw_books_disabled_changed() is called.
     * 
     * A bit like g_object_freeze_notify(), except that there is no freeze count.
     * 
     * This function is useful if you call dh_settings_set_book_enabled() several
     * times in a row.
     */
    freezeBooksDisabledChanged(): void
    /**
     * Warning: you probably want to use the dh_settings_get_selected_fonts()
     * function instead, to take into account the #DhSettings:use-system-fonts
     * property.
     */
    getFixedFont(): string
    getGroupBooksByLanguage(): boolean
    /**
     * If #DhSettings:use-system-fonts is %TRUE, returns the system fonts. Otherwise
     * returns the values of the #DhSettings:variable-font and
     * #DhSettings:fixed-font properties.
     */
    getSelectedFonts(): [ /* variableFont */ string, /* fixedFont */ string ]
    getUseSystemFonts(): boolean
    /**
     * Warning: you probably want to use the dh_settings_get_selected_fonts()
     * function instead, to take into account the #DhSettings:use-system-fonts
     * property.
     */
    getVariableFont(): string
    /**
     * Returns whether `book` is enabled according to the "books-disabled" #GSettings
     * key. If the `book` ID is present in "books-disabled", this function returns
     * %FALSE, otherwise %TRUE is returned.
     * @param book a #DhBook.
     */
    isBookEnabled(book: Book): boolean
    /**
     * Modifies the "books-disabled" #GSettings key. It adds or removes the `book` ID
     * from "books-disabled".
     * @param book a #DhBook.
     * @param enabled the new value.
     */
    setBookEnabled(book: Book, enabled: boolean): void
    /**
     * Sets the #DhSettings:fixed-font property.
     * @param fixedFont the new value.
     */
    setFixedFont(fixedFont: string): void
    /**
     * Sets the #DhSettings:group-books-by-language property.
     * @param groupBooksByLanguage the new value.
     */
    setGroupBooksByLanguage(groupBooksByLanguage: boolean): void
    /**
     * Sets the #DhSettings:use-system-fonts property.
     * @param useSystemFonts the new value.
     */
    setUseSystemFonts(useSystemFonts: boolean): void
    /**
     * Sets the #DhSettings:variable-font property.
     * @param variableFont the new value.
     */
    setVariableFont(variableFont: string): void
    /**
     * Stops the effect of dh_settings_freeze_books_disabled_changed(), and emits
     * the #DhSettings::books-disabled-changed signal.
     * 
     * A bit like g_object_thaw_notify(), except that there is no freeze count.
     */
    thawBooksDisabledChanged(): void

    // Own virtual methods of Devhelp-3.0.Devhelp.Settings

    booksDisabledChanged(): void
    fontsChanged(): void

    // Own signals of Devhelp-3.0.Devhelp.Settings

    connect(sigName: "books-disabled-changed", callback: Settings.BooksDisabledChangedSignalCallback): number
    on(sigName: "books-disabled-changed", callback: Settings.BooksDisabledChangedSignalCallback): number
    once(sigName: "books-disabled-changed", callback: Settings.BooksDisabledChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "books-disabled-changed", ...args: any[]): void
    connect(sigName: "fonts-changed", callback: Settings.FontsChangedSignalCallback): number
    on(sigName: "fonts-changed", callback: Settings.FontsChangedSignalCallback): number
    once(sigName: "fonts-changed", callback: Settings.FontsChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "fonts-changed", ...args: any[]): void

    // Class property signals of Devhelp-3.0.Devhelp.Settings

    connect(sigName: "notify::fixed-font", callback: any): number
    on(sigName: "notify::fixed-font", callback: any): number
    once(sigName: "notify::fixed-font", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fixed-font", ...args: any[]): void
    connect(sigName: "notify::group-books-by-language", callback: any): number
    on(sigName: "notify::group-books-by-language", callback: any): number
    once(sigName: "notify::group-books-by-language", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group-books-by-language", ...args: any[]): void
    connect(sigName: "notify::use-system-fonts", callback: any): number
    on(sigName: "notify::use-system-fonts", callback: any): number
    once(sigName: "notify::use-system-fonts", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-system-fonts", ...args: any[]): void
    connect(sigName: "notify::variable-font", callback: any): number
    on(sigName: "notify::variable-font", callback: any): number
    once(sigName: "notify::variable-font", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::variable-font", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Settings extends GObject.Object {

    // Own properties of Devhelp-3.0.Devhelp.Settings

    static name: string

    // Constructors of Devhelp-3.0.Devhelp.Settings

    constructor(config?: Settings.ConstructorProperties) 
    _init(config?: Settings.ConstructorProperties): void
    /**
     * Gets the default #DhSettings object. It has the default #GSettings paths (see
     * #DhSettingsBuilder) and dh_settings_bind_all() has been called.
     */
    static getDefault(): Settings
}

export module SettingsBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SettingsBuilder {

    // Own fields of Devhelp-3.0.Devhelp.SettingsBuilder

    parent: GObject.Object
    priv: SettingsBuilderPrivate

    // Owm methods of Devhelp-3.0.Devhelp.SettingsBuilder

    createObject(): Settings
    /**
     * Sets the path for the "contents" schema.
     * 
     * If you don't call this function, the default path for this schema will be
     * used.
     * @param contentsPath the path for the "contents" schema.
     */
    setContentsPath(contentsPath: string): void
    /**
     * Sets the path for the "fonts" schema.
     * 
     * If you don't call this function, the default path for this schema will be
     * used.
     * @param fontsPath the path for the "fonts" schema.
     */
    setFontsPath(fontsPath: string): void

    // Class property signals of Devhelp-3.0.Devhelp.SettingsBuilder

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SettingsBuilder extends GObject.Object {

    // Own properties of Devhelp-3.0.Devhelp.SettingsBuilder

    static name: string

    // Constructors of Devhelp-3.0.Devhelp.SettingsBuilder

    constructor(config?: SettingsBuilder.ConstructorProperties) 
    constructor() 
    static new(): SettingsBuilder
    _init(config?: SettingsBuilder.ConstructorProperties): void
}

export module Sidebar {

    // Signal callback interfaces

    /**
     * Signal callback interface for `link-selected`
     */
    export interface LinkSelectedSignalCallback {
        (link: Link): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Grid.ConstructorProperties {

        // Own constructor properties of Devhelp-3.0.Devhelp.Sidebar

        /**
         * The #DhProfile. If set to %NULL, the default profile as returned by
         * dh_profile_get_default() is used.
         */
        profile?: Profile | null
    }

}

export interface Sidebar extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Devhelp-3.0.Devhelp.Sidebar

    /**
     * The #DhProfile. If set to %NULL, the default profile as returned by
     * dh_profile_get_default() is used.
     */
    readonly profile: Profile

    // Own fields of Devhelp-3.0.Devhelp.Sidebar

    parentInstance: any

    // Owm methods of Devhelp-3.0.Devhelp.Sidebar

    getProfile(): Profile
    /**
     * Note: the return value of this function is not necessarily the same as the
     * last #DhLink emitted by the #DhSidebar::link-selected signal. See the
     * documentation of #DhSidebar::link-selected.
     */
    getSelectedLink(): Link | null
    /**
     * Calls dh_book_tree_select_uri().
     * @param uri the URI to select.
     */
    selectUri(uri: string): void
    /**
     * Gives the focus to the search entry.
     */
    setSearchFocus(): void
    setSearchString(str: string): void

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

    // Own virtual methods of Devhelp-3.0.Devhelp.Sidebar

    linkSelected(link: Link): void

    // Own signals of Devhelp-3.0.Devhelp.Sidebar

    connect(sigName: "link-selected", callback: Sidebar.LinkSelectedSignalCallback): number
    on(sigName: "link-selected", callback: Sidebar.LinkSelectedSignalCallback): number
    once(sigName: "link-selected", callback: Sidebar.LinkSelectedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "link-selected", ...args: any[]): void

    // Class property signals of Devhelp-3.0.Devhelp.Sidebar

    connect(sigName: "notify::profile", callback: any): number
    on(sigName: "notify::profile", callback: any): number
    once(sigName: "notify::profile", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::profile", ...args: any[]): void
    connect(sigName: "notify::baseline-row", callback: any): number
    on(sigName: "notify::baseline-row", callback: any): number
    once(sigName: "notify::baseline-row", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: any): number
    on(sigName: "notify::column-homogeneous", callback: any): number
    once(sigName: "notify::column-homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: any): number
    on(sigName: "notify::column-spacing", callback: any): number
    once(sigName: "notify::column-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: any): number
    on(sigName: "notify::row-homogeneous", callback: any): number
    once(sigName: "notify::row-homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: any): number
    on(sigName: "notify::row-spacing", callback: any): number
    once(sigName: "notify::row-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
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

export class Sidebar extends Gtk.Grid {

    // Own properties of Devhelp-3.0.Devhelp.Sidebar

    static name: string

    // Constructors of Devhelp-3.0.Devhelp.Sidebar

    constructor(config?: Sidebar.ConstructorProperties) 
    constructor(bookManager: BookManager | null) 
    static new(bookManager: BookManager | null): Sidebar

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    _init(config?: Sidebar.ConstructorProperties): void
    static new2(profile: Profile | null): Sidebar
}

export module Tab {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Grid.ConstructorProperties {

        // Own constructor properties of Devhelp-3.0.Devhelp.Tab

        /**
         * The #DhWebView of the tab. If set to %NULL a #DhWebView is created
         * with the default #DhProfile.
         */
        webView?: WebView | null
    }

}

export interface Tab extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Devhelp-3.0.Devhelp.Tab

    /**
     * The #DhWebView of the tab. If set to %NULL a #DhWebView is created
     * with the default #DhProfile.
     */
    readonly webView: WebView

    // Own fields of Devhelp-3.0.Devhelp.Tab

    parent: Gtk.Grid & Gtk.Container
    priv: TabPrivate

    // Owm methods of Devhelp-3.0.Devhelp.Tab

    getWebView(): WebView

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

    // Class property signals of Devhelp-3.0.Devhelp.Tab

    connect(sigName: "notify::web-view", callback: any): number
    on(sigName: "notify::web-view", callback: any): number
    once(sigName: "notify::web-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::web-view", ...args: any[]): void
    connect(sigName: "notify::baseline-row", callback: any): number
    on(sigName: "notify::baseline-row", callback: any): number
    once(sigName: "notify::baseline-row", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: any): number
    on(sigName: "notify::column-homogeneous", callback: any): number
    once(sigName: "notify::column-homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: any): number
    on(sigName: "notify::column-spacing", callback: any): number
    once(sigName: "notify::column-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: any): number
    on(sigName: "notify::row-homogeneous", callback: any): number
    once(sigName: "notify::row-homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: any): number
    on(sigName: "notify::row-spacing", callback: any): number
    once(sigName: "notify::row-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
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

export class Tab extends Gtk.Grid {

    // Own properties of Devhelp-3.0.Devhelp.Tab

    static name: string

    // Constructors of Devhelp-3.0.Devhelp.Tab

    constructor(config?: Tab.ConstructorProperties) 
    constructor(webView: WebView | null) 
    static new(webView: WebView | null): Tab

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    _init(config?: Tab.ConstructorProperties): void
}

export module TabLabel {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Grid.ConstructorProperties {

        // Own constructor properties of Devhelp-3.0.Devhelp.TabLabel

        /**
         * The associated #DhTab. #DhTabLabel has a weak reference to the
         * #DhTab.
         */
        tab?: Tab | null
    }

}

export interface TabLabel extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Devhelp-3.0.Devhelp.TabLabel

    /**
     * The associated #DhTab. #DhTabLabel has a weak reference to the
     * #DhTab.
     */
    readonly tab: Tab

    // Own fields of Devhelp-3.0.Devhelp.TabLabel

    parent: Gtk.Grid & Gtk.Container
    priv: TabLabelPrivate

    // Owm methods of Devhelp-3.0.Devhelp.TabLabel

    getTab(): Tab | null

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

    // Class property signals of Devhelp-3.0.Devhelp.TabLabel

    connect(sigName: "notify::tab", callback: any): number
    on(sigName: "notify::tab", callback: any): number
    once(sigName: "notify::tab", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tab", ...args: any[]): void
    connect(sigName: "notify::baseline-row", callback: any): number
    on(sigName: "notify::baseline-row", callback: any): number
    once(sigName: "notify::baseline-row", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: any): number
    on(sigName: "notify::column-homogeneous", callback: any): number
    once(sigName: "notify::column-homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: any): number
    on(sigName: "notify::column-spacing", callback: any): number
    once(sigName: "notify::column-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: any): number
    on(sigName: "notify::row-homogeneous", callback: any): number
    once(sigName: "notify::row-homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: any): number
    on(sigName: "notify::row-spacing", callback: any): number
    once(sigName: "notify::row-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
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

export class TabLabel extends Gtk.Grid {

    // Own properties of Devhelp-3.0.Devhelp.TabLabel

    static name: string

    // Constructors of Devhelp-3.0.Devhelp.TabLabel

    constructor(config?: TabLabel.ConstructorProperties) 
    constructor(tab: Tab) 
    static new(tab: Tab): TabLabel

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    _init(config?: TabLabel.ConstructorProperties): void
}

export module WebView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `open-new-tab`
     */
    export interface OpenNewTabSignalCallback {
        (uri: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, WebKit2.WebView.ConstructorProperties {

        // Own constructor properties of Devhelp-3.0.Devhelp.WebView

        /**
         * The #DhProfile. If set to %NULL, the default profile as returned by
         * dh_profile_get_default() is used.
         */
        profile?: Profile | null
    }

}

export interface WebView extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Devhelp-3.0.Devhelp.WebView

    /**
     * The #DhProfile. If set to %NULL, the default profile as returned by
     * dh_profile_get_default() is used.
     */
    readonly profile: Profile

    // Conflicting properties

    parentInstance: any

    // Own fields of Devhelp-3.0.Devhelp.WebView

    parent: WebKit2.WebView & WebKit2.WebViewBase & Gtk.Container & Gtk.Container
    priv: WebViewPrivate

    // Owm methods of Devhelp-3.0.Devhelp.WebView

    canResetZoom(): boolean
    canZoomIn(): boolean
    canZoomOut(): boolean
    /**
     * An enhanced getter function for the #WebKitWebView:title property: when that
     * property is the empty string or %NULL, this function returns “Empty Page”
     * (translated).
     */
    getDevhelpTitle(): string
    getProfile(): Profile
    /**
     * Reset the text size to the normal size.
     */
    resetZoom(): void
    /**
     * Like webkit_find_controller_search_next(), but takes into account whether
     * dh_web_view_set_search_text() has been called.
     */
    searchNext(): void
    /**
     * Like webkit_find_controller_search_previous(), but takes into account whether
     * dh_web_view_set_search_text() has been called.
     */
    searchPrevious(): void
    /**
     * A more convenient API (for Devhelp needs) than #WebKitFindController. If
     * `search_text` is not empty, it calls webkit_find_controller_search() if not
     * already done. If `search_text` is empty or %NULL, it calls
     * webkit_find_controller_search_finish().
     * @param searchText the search string, or %NULL.
     */
    setSearchText(searchText: string | null): void
    /**
     * Makes the text larger.
     */
    zoomIn(): void
    /**
     * Makes the text smaller.
     */
    zoomOut(): void

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
     * Gets the #WebKitSettings currently applied to `web_view`.
     * If no other #WebKitSettings have been explicitly applied to
     * `web_view` with webkit_web_view_set_settings(), the default
     * #WebKitSettings will be returned. This method always returns
     * a valid #WebKitSettings object.
     * To modify any of the `web_view` settings, you can either create
     * a new #WebKitSettings object with webkit_settings_new(), setting
     * the desired preferences, and then replace the existing `web_view`
     * settings with webkit_web_view_set_settings() or get the existing
     * `web_view` settings and update it directly. #WebKitSettings objects
     * can be shared by multiple #WebKitWebView<!-- -->s, so modifying
     * the settings of a #WebKitWebView would affect other
     * #WebKitWebView<!-- -->s using the same #WebKitSettings.
     */
    getSettings(): WebKit2.Settings

    // Overloads of getSettings

    /**
     * Gets the settings object holding the settings used for this widget.
     * 
     * Note that this function can only be called when the #GtkWidget
     * is attached to a toplevel, since the settings object is specific
     * to a particular #GdkScreen.
     */
    getSettings(): Gtk.Settings
    /**
     * Gets the settings object holding the settings used for this widget.
     * 
     * Note that this function can only be called when the #GtkWidget
     * is attached to a toplevel, since the settings object is specific
     * to a particular #GdkScreen.
     */
    getSettings(): Gtk.Settings
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

    // Own virtual methods of Devhelp-3.0.Devhelp.WebView

    openNewTab(uri: string): void

    // Own signals of Devhelp-3.0.Devhelp.WebView

    connect(sigName: "open-new-tab", callback: WebView.OpenNewTabSignalCallback): number
    on(sigName: "open-new-tab", callback: WebView.OpenNewTabSignalCallback): number
    once(sigName: "open-new-tab", callback: WebView.OpenNewTabSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "open-new-tab", ...args: any[]): void

    // Class property signals of Devhelp-3.0.Devhelp.WebView

    connect(sigName: "notify::profile", callback: any): number
    on(sigName: "notify::profile", callback: any): number
    once(sigName: "notify::profile", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::profile", ...args: any[]): void
    connect(sigName: "notify::automation-presentation-type", callback: any): number
    on(sigName: "notify::automation-presentation-type", callback: any): number
    once(sigName: "notify::automation-presentation-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::automation-presentation-type", ...args: any[]): void
    connect(sigName: "notify::camera-capture-state", callback: any): number
    on(sigName: "notify::camera-capture-state", callback: any): number
    once(sigName: "notify::camera-capture-state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::camera-capture-state", ...args: any[]): void
    connect(sigName: "notify::display-capture-state", callback: any): number
    on(sigName: "notify::display-capture-state", callback: any): number
    once(sigName: "notify::display-capture-state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display-capture-state", ...args: any[]): void
    connect(sigName: "notify::editable", callback: any): number
    on(sigName: "notify::editable", callback: any): number
    once(sigName: "notify::editable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::estimated-load-progress", callback: any): number
    on(sigName: "notify::estimated-load-progress", callback: any): number
    once(sigName: "notify::estimated-load-progress", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::estimated-load-progress", ...args: any[]): void
    connect(sigName: "notify::favicon", callback: any): number
    on(sigName: "notify::favicon", callback: any): number
    once(sigName: "notify::favicon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::favicon", ...args: any[]): void
    connect(sigName: "notify::is-controlled-by-automation", callback: any): number
    on(sigName: "notify::is-controlled-by-automation", callback: any): number
    once(sigName: "notify::is-controlled-by-automation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-controlled-by-automation", ...args: any[]): void
    connect(sigName: "notify::is-ephemeral", callback: any): number
    on(sigName: "notify::is-ephemeral", callback: any): number
    once(sigName: "notify::is-ephemeral", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-ephemeral", ...args: any[]): void
    connect(sigName: "notify::is-loading", callback: any): number
    on(sigName: "notify::is-loading", callback: any): number
    once(sigName: "notify::is-loading", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-loading", ...args: any[]): void
    connect(sigName: "notify::is-muted", callback: any): number
    on(sigName: "notify::is-muted", callback: any): number
    once(sigName: "notify::is-muted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-muted", ...args: any[]): void
    connect(sigName: "notify::is-playing-audio", callback: any): number
    on(sigName: "notify::is-playing-audio", callback: any): number
    once(sigName: "notify::is-playing-audio", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-playing-audio", ...args: any[]): void
    connect(sigName: "notify::is-web-process-responsive", callback: any): number
    on(sigName: "notify::is-web-process-responsive", callback: any): number
    once(sigName: "notify::is-web-process-responsive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-web-process-responsive", ...args: any[]): void
    connect(sigName: "notify::microphone-capture-state", callback: any): number
    on(sigName: "notify::microphone-capture-state", callback: any): number
    once(sigName: "notify::microphone-capture-state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::microphone-capture-state", ...args: any[]): void
    connect(sigName: "notify::page-id", callback: any): number
    on(sigName: "notify::page-id", callback: any): number
    once(sigName: "notify::page-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::page-id", ...args: any[]): void
    connect(sigName: "notify::related-view", callback: any): number
    on(sigName: "notify::related-view", callback: any): number
    once(sigName: "notify::related-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::related-view", ...args: any[]): void
    connect(sigName: "notify::settings", callback: any): number
    on(sigName: "notify::settings", callback: any): number
    once(sigName: "notify::settings", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::settings", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::user-content-manager", callback: any): number
    on(sigName: "notify::user-content-manager", callback: any): number
    once(sigName: "notify::user-content-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user-content-manager", ...args: any[]): void
    connect(sigName: "notify::web-context", callback: any): number
    on(sigName: "notify::web-context", callback: any): number
    once(sigName: "notify::web-context", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::web-context", ...args: any[]): void
    connect(sigName: "notify::website-policies", callback: any): number
    on(sigName: "notify::website-policies", callback: any): number
    once(sigName: "notify::website-policies", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::website-policies", ...args: any[]): void
    connect(sigName: "notify::zoom-level", callback: any): number
    on(sigName: "notify::zoom-level", callback: any): number
    once(sigName: "notify::zoom-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::zoom-level", ...args: any[]): void
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

export class WebView extends WebKit2.WebView {

    // Own properties of Devhelp-3.0.Devhelp.WebView

    static name: string

    // Constructors of Devhelp-3.0.Devhelp.WebView

    constructor(config?: WebView.ConstructorProperties) 
    constructor(profile: Profile | null) 
    static new(profile: Profile | null): WebView

    // Overloads of new

    /**
     * Creates a new #WebKitWebView with the default #WebKitWebContext and
     * no #WebKitUserContentManager associated with it.
     * See also webkit_web_view_new_with_context(),
     * webkit_web_view_new_with_user_content_manager(), and
     * webkit_web_view_new_with_settings().
     * @constructor 
     */
    static new(): WebKit2.WebView
    _init(config?: WebView.ConstructorProperties): void
}

export interface AssistantViewClass {

    // Own fields of Devhelp-3.0.Devhelp.AssistantViewClass

    parentClass: WebKit2.WebViewClass
    padding: object[]
}

export abstract class AssistantViewClass {

    // Own properties of Devhelp-3.0.Devhelp.AssistantViewClass

    static name: string
}

export interface BookClass {

    // Own fields of Devhelp-3.0.Devhelp.BookClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class BookClass {

    // Own properties of Devhelp-3.0.Devhelp.BookClass

    static name: string
}

export interface BookListBuilderClass {

    // Own fields of Devhelp-3.0.Devhelp.BookListBuilderClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class BookListBuilderClass {

    // Own properties of Devhelp-3.0.Devhelp.BookListBuilderClass

    static name: string
}

export interface BookListBuilderPrivate {
}

export class BookListBuilderPrivate {

    // Own properties of Devhelp-3.0.Devhelp.BookListBuilderPrivate

    static name: string
}

export interface BookListClass {

    // Own fields of Devhelp-3.0.Devhelp.BookListClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
    addBook: (bookList: BookList, book: Book) => void
    removeBook: (bookList: BookList, book: Book) => void
    getBooks: (bookList: BookList) => Book[]
}

export abstract class BookListClass {

    // Own properties of Devhelp-3.0.Devhelp.BookListClass

    static name: string
}

export interface BookListDirectoryClass {

    // Own fields of Devhelp-3.0.Devhelp.BookListDirectoryClass

    parentClass: BookListClass
    padding: object[]
}

export abstract class BookListDirectoryClass {

    // Own properties of Devhelp-3.0.Devhelp.BookListDirectoryClass

    static name: string
}

export interface BookListDirectoryPrivate {
}

export class BookListDirectoryPrivate {

    // Own properties of Devhelp-3.0.Devhelp.BookListDirectoryPrivate

    static name: string
}

export interface BookListPrivate {
}

export class BookListPrivate {

    // Own properties of Devhelp-3.0.Devhelp.BookListPrivate

    static name: string
}

export interface BookManagerClass {

    // Own fields of Devhelp-3.0.Devhelp.BookManagerClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class BookManagerClass {

    // Own properties of Devhelp-3.0.Devhelp.BookManagerClass

    static name: string
}

export interface BookTreeClass {

    // Own fields of Devhelp-3.0.Devhelp.BookTreeClass

    parentClass: Gtk.TreeViewClass
    padding: object[]
}

export abstract class BookTreeClass {

    // Own properties of Devhelp-3.0.Devhelp.BookTreeClass

    static name: string
}

export interface CompletionClass {

    // Own fields of Devhelp-3.0.Devhelp.CompletionClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class CompletionClass {

    // Own properties of Devhelp-3.0.Devhelp.CompletionClass

    static name: string
}

export interface CompletionPrivate {
}

export class CompletionPrivate {

    // Own properties of Devhelp-3.0.Devhelp.CompletionPrivate

    static name: string
}

export interface KeywordModelClass {

    // Own fields of Devhelp-3.0.Devhelp.KeywordModelClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class KeywordModelClass {

    // Own properties of Devhelp-3.0.Devhelp.KeywordModelClass

    static name: string
}

export interface Link {

    // Owm methods of Devhelp-3.0.Devhelp.Link

    /**
     * This function permits to know if `link` belongs to a certain page.
     * 
     * `page_id` is usually the HTML filename without the `.html` extension. More
     * generally, `page_id` must be a relative URL (relative to the book base path),
     * without the anchor nor the file extension.
     * 
     * For example if `link` has the relative URL `"DhLink.html#dh-link-ref"`, then
     * this function will return %TRUE if the `page_id` is `"DhLink"`.
     * @param pageId a page ID, i.e. the filename without its extension.
     */
    belongsToPage(pageId: string): boolean
    /**
     * Compares the links `a` and `b`. This function is used to determine in which
     * order the links should be displayed.
     * @param b a #DhLink.
     */
    compare(b: Link): number
    getBookId(): string
    getBookTitle(): string
    getFlags(): LinkFlags
    getLinkType(): LinkType
    getName(): string
    /**
     * Gets the `link` URI, by concateneting the book base path with the `link`
     * relative URL.
     */
    getUri(): string | null
    matchRelativeUrl(relativeUrl: string): boolean
    /**
     * Increases the reference count of `link`.
     * 
     * Not thread-safe.
     */
    ref(): Link
    /**
     * Sets the flags of the link.
     * @param flags the new flags of the link.
     */
    setFlags(flags: LinkFlags): void
    /**
     * Decreases the reference count of `link`.
     * 
     * Not thread-safe.
     */
    unref(): void
}

export class Link {

    // Own properties of Devhelp-3.0.Devhelp.Link

    static name: string

    // Constructors of Devhelp-3.0.Devhelp.Link

    constructor(type: LinkType, bookLink: Link, name: string, relativeUrl: string) 
    static new(type: LinkType, bookLink: Link, name: string, relativeUrl: string): Link
    static newBook(basePath: string, bookId: string, bookTitle: string, relativeUrl: string): Link
}

export interface NotebookClass {

    // Own fields of Devhelp-3.0.Devhelp.NotebookClass

    parentClass: Gtk.NotebookClass
    padding: object[]
}

export abstract class NotebookClass {

    // Own properties of Devhelp-3.0.Devhelp.NotebookClass

    static name: string
}

export interface NotebookPrivate {
}

export class NotebookPrivate {

    // Own properties of Devhelp-3.0.Devhelp.NotebookPrivate

    static name: string
}

export interface ProfileBuilderClass {

    // Own fields of Devhelp-3.0.Devhelp.ProfileBuilderClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class ProfileBuilderClass {

    // Own properties of Devhelp-3.0.Devhelp.ProfileBuilderClass

    static name: string
}

export interface ProfileBuilderPrivate {
}

export class ProfileBuilderPrivate {

    // Own properties of Devhelp-3.0.Devhelp.ProfileBuilderPrivate

    static name: string
}

export interface ProfileClass {

    // Own fields of Devhelp-3.0.Devhelp.ProfileClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class ProfileClass {

    // Own properties of Devhelp-3.0.Devhelp.ProfileClass

    static name: string
}

export interface ProfilePrivate {
}

export class ProfilePrivate {

    // Own properties of Devhelp-3.0.Devhelp.ProfilePrivate

    static name: string
}

export interface SearchBarClass {

    // Own fields of Devhelp-3.0.Devhelp.SearchBarClass

    parentClass: Gtk.SearchBarClass
    padding: object[]
}

export abstract class SearchBarClass {

    // Own properties of Devhelp-3.0.Devhelp.SearchBarClass

    static name: string
}

export interface SearchBarPrivate {
}

export class SearchBarPrivate {

    // Own properties of Devhelp-3.0.Devhelp.SearchBarPrivate

    static name: string
}

export interface SettingsBuilderClass {

    // Own fields of Devhelp-3.0.Devhelp.SettingsBuilderClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class SettingsBuilderClass {

    // Own properties of Devhelp-3.0.Devhelp.SettingsBuilderClass

    static name: string
}

export interface SettingsBuilderPrivate {
}

export class SettingsBuilderPrivate {

    // Own properties of Devhelp-3.0.Devhelp.SettingsBuilderPrivate

    static name: string
}

export interface SettingsClass {

    // Own fields of Devhelp-3.0.Devhelp.SettingsClass

    parent: GObject.ObjectClass
    booksDisabledChanged: (settings: Settings) => void
    fontsChanged: (settings: Settings) => void
    padding: object[]
}

export abstract class SettingsClass {

    // Own properties of Devhelp-3.0.Devhelp.SettingsClass

    static name: string
}

export interface SettingsPrivate {
}

export class SettingsPrivate {

    // Own properties of Devhelp-3.0.Devhelp.SettingsPrivate

    static name: string
}

export interface SidebarClass {

    // Own fields of Devhelp-3.0.Devhelp.SidebarClass

    parentClass: Gtk.GridClass
    linkSelected: (sidebar: Sidebar, link: Link) => void
    padding: object[]
}

export abstract class SidebarClass {

    // Own properties of Devhelp-3.0.Devhelp.SidebarClass

    static name: string
}

export interface TabClass {

    // Own fields of Devhelp-3.0.Devhelp.TabClass

    parentClass: Gtk.GridClass
    padding: object[]
}

export abstract class TabClass {

    // Own properties of Devhelp-3.0.Devhelp.TabClass

    static name: string
}

export interface TabLabelClass {

    // Own fields of Devhelp-3.0.Devhelp.TabLabelClass

    parentClass: Gtk.GridClass
    padding: object[]
}

export abstract class TabLabelClass {

    // Own properties of Devhelp-3.0.Devhelp.TabLabelClass

    static name: string
}

export interface TabLabelPrivate {
}

export class TabLabelPrivate {

    // Own properties of Devhelp-3.0.Devhelp.TabLabelPrivate

    static name: string
}

export interface TabPrivate {
}

export class TabPrivate {

    // Own properties of Devhelp-3.0.Devhelp.TabPrivate

    static name: string
}

export interface WebViewClass {

    // Own fields of Devhelp-3.0.Devhelp.WebViewClass

    parentClass: WebKit2.WebViewClass
    openNewTab: (view: WebView, uri: string) => void
    padding: object[]
}

export abstract class WebViewClass {

    // Own properties of Devhelp-3.0.Devhelp.WebViewClass

    static name: string
}

export interface WebViewPrivate {
}

export class WebViewPrivate {

    // Own properties of Devhelp-3.0.Devhelp.WebViewPrivate

    static name: string
}
