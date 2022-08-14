
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * PanelApplet-4.0
 */

import type * as xlib from './xlib-2.0.js';
import type * as cairo from './cairo-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Gtk from './Gtk-3.0.js';
import type * as Gdk from './Gdk-3.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GdkPixbuf from './GdkPixbuf-2.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as Atk from './Atk-1.0.js';
import type * as GConf from './GConf-2.0.js';

/**
 * Type defining the orientation of the applet. The values may seem backward
 * (e.g. %PANEL_APPLET_ORIENT_RIGHT means the panel is on the left side), but
 * this represents the direction the applet is oriented to.
 */
export enum AppletOrient {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}
/**
 * Flags to be used with panel_applet_get_flags()/panel_applet_set_flags(), to
 * indicate to the panel a specific behavior requested by the #PanelApplet.
 * @bitfield 
 */
export enum AppletFlags {
    FLAGS_NONE,
    EXPAND_MAJOR,
    EXPAND_MINOR,
    HAS_HANDLE,
}
export const APPLET_FLAGS_ALL: number
/**
 * The type used for callbacks after. The callback will usually check that `iid`
 * is a valid applet type identifier for the applet factory, and will then fill
 * `applet` with widgets, connect to signals, etc.
 * @callback 
 * @param applet a newly-created #PanelApplet.
 * @param iid identifier of the requested applet type.
 */
export interface AppletFactoryCallback {
    (applet: Applet, iid: string): boolean
}
export module Applet {

    // Signal callback interfaces

    /**
     * Signal callback interface for `change-background`
     */
    export interface ChangeBackgroundSignalCallback {
        (pattern: cairo.Pattern): void
    }

    /**
     * Signal callback interface for `change-orient`
     */
    export interface ChangeOrientSignalCallback {
        (orient: number): void
    }

    /**
     * Signal callback interface for `change-size`
     */
    export interface ChangeSizeSignalCallback {
        (size: number): void
    }



    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.EventBox.ConstructorProperties {

        // Own constructor properties of PanelApplet-4.0.PanelApplet.Applet

        /**
         * The #PanelAppletFlags of the applet.
         */
        flags?: number | null
        /**
         * Whether the panel the applet is on is locked down.
         */
        lockedDown?: boolean | null
        /**
         * The #PanelAppletOrient of the applet.
         * 
         * This property gets set when the applet gets embedded, and can change
         * when the panel position changes.
         */
        orient?: number | null
        /**
         * The GConf path to the per-instance settings of the applet.
         * 
         * This property gets set when the applet gets embedded.
         */
        prefsKey?: string | null
        /**
         * The GSettings path to the per-instance settings of the applet.
         * 
         * This property gets set when the applet gets embedded.
         */
        settingsPath?: string | null
        /**
         * The size of the panel the applet is on. For a horizontal panel, the
         * size if the height of the panel; for a vertical panel, the size is
         * the width of the panel.
         * 
         * This property gets set when the applet gets embedded, and can change
         * when the panel size changes.
         */
        size?: number | null
        /**
         * The size hints set for the applet. See panel_applet_set_size_hints().
         */
        sizeHints?: object | null
    }

}

export interface Applet extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of PanelApplet-4.0.PanelApplet.Applet

    /**
     * The #PanelAppletFlags of the applet.
     */
    flags: number
    /**
     * Whether the panel the applet is on is locked down.
     */
    lockedDown: boolean
    /**
     * The #PanelAppletOrient of the applet.
     * 
     * This property gets set when the applet gets embedded, and can change
     * when the panel position changes.
     */
    orient: number
    /**
     * The GConf path to the per-instance settings of the applet.
     * 
     * This property gets set when the applet gets embedded.
     */
    prefsKey: string
    /**
     * The GSettings path to the per-instance settings of the applet.
     * 
     * This property gets set when the applet gets embedded.
     */
    settingsPath: string
    /**
     * The size of the panel the applet is on. For a horizontal panel, the
     * size if the height of the panel; for a vertical panel, the size is
     * the width of the panel.
     * 
     * This property gets set when the applet gets embedded, and can change
     * when the panel size changes.
     */
    size: number
    /**
     * The size hints set for the applet. See panel_applet_set_size_hints().
     */
    sizeHints: object

    // Own fields of PanelApplet-4.0.PanelApplet.Applet

    eventBox: Gtk.EventBox

    // Owm methods of PanelApplet-4.0.PanelApplet.Applet

    /**
     * Associates the per-instance GConf directory of `applet` to the schemas
     * defined in `schema_dir`. This must be called if the applet will save
     * per-instance settings, to ensure that each key in the per-instance GConf
     * directory has a defined type, sane default and documentation.
     * @param schemaDir a GConf path of a schema directory.
     */
    addPreferences(schemaDir: string): void
    /**
     * Convenience wrapper around gconf_client_get_bool() to get the value of `key`
     * in the per-instance GConf directory of `applet`.
     * @param key a GConf key name.
     */
    gconfGetBool(key: string): boolean
    /**
     * Convenience wrapper around gconf_client_get_float() to get the value of `key`
     * in the per-instance GConf directory of `applet`.
     * @param key a GConf key name.
     */
    gconfGetFloat(key: string): number
    /**
     * Returns the full GConf path of `key,` in the per-instance GConf directory of
     * `applet`. The string should be freed by the caller.
     * @param key a GConf key name.
     */
    gconfGetFullKey(key: string): string
    /**
     * Convenience wrapper around gconf_client_get_int() to get the value of `key`
     * in the per-instance GConf directory of `applet`.
     * @param key a GConf key name.
     */
    gconfGetInt(key: string): number
    /**
     * Convenience wrapper around gconf_client_get_string() to get the value of `key`
     * in the per-instance GConf directory of `applet`.
     * @param key a GConf key name.
     */
    gconfGetString(key: string): string
    /**
     * Convenience wrapper around gconf_client_get_value() to get the value of `key`
     * in the per-instance GConf directory of `applet`.
     * @param key a GConf key name.
     */
    gconfGetValue(key: string): GConf.Value
    /**
     * Convenience wrapper around gconf_client_set_bool() to update `key` in the
     * per-instance GConf directory of `applet`.
     * @param key a GConf key name.
     * @param theBool new value for `key`.
     */
    gconfSetBool(key: string, theBool: boolean): void
    /**
     * Convenience wrapper around gconf_client_set_float() to update `key` in the
     * per-instance GConf directory of `applet`.
     * @param key a GConf key name.
     * @param theFloat new value for `key`.
     */
    gconfSetFloat(key: string, theFloat: number): void
    /**
     * Convenience wrapper around gconf_client_set_int() to update `key` in the
     * per-instance GConf directory of `applet`.
     * @param key a GConf key name.
     * @param theInt new value for `key`.
     */
    gconfSetInt(key: string, theInt: number): void
    /**
     * Convenience wrapper around gconf_client_set_string() to update `key` in the
     * per-instance GConf directory of `applet`.
     * @param key a GConf key name.
     * @param theString new value for `key`.
     */
    gconfSetString(key: string, theString: string): void
    /**
     * Convenience wrapper around gconf_client_set_value() to update `key` in the
     * per-instance GConf directory of `applet`.
     * @param key a GConf key name.
     * @param value new value for `key`.
     */
    gconfSetValue(key: string, value: GConf.Value): void
    /**
     * Gets the background pattern for `applet,` or %NULL if there is none.
     */
    getBackground(): cairo.Pattern
    /**
     * Gets the #PanelAppletFlags of `applet`.
     */
    getFlags(): AppletFlags
    /**
     * Gets whether the panel `applet` is on is locked down or not. A locked down
     * applet should not allow any change to its configuration.
     */
    getLockedDown(): boolean
    /**
     * Gets the #PanelAppletOrient of `applet`.
     */
    getOrient(): AppletOrient
    /**
     * Gets the GConf path to the per-instance settings of `applet`.
     */
    getPreferencesKey(): string
    /**
     * Gets the size of the panel `applet` is on. For a horizontal panel, the
     * size if the height of the panel; for a vertical panel, the size is the width
     * of the panel.
     */
    getSize(): number
    /**
     * Requests focus for `applet`. There is no guarantee that `applet` will
     * successfully get focus after that call.
     * @param timestamp the timestamp of the user interaction (typically a button or key press event) which triggered this call.
     */
    requestFocus(timestamp: number): void
    /**
     * Configure #PanelApplet to automatically draw the background of the applet on
     * `widget`. It is generally enough to call this function with `applet` as
     * `widget`.
     * @param widget a #GtkWidget.
     */
    setBackgroundWidget(widget: Gtk.Widget): void
    /**
     * Sets the #PanelAppletFlags of `applet`. Most of the time, at least
     * %PANEL_APPLET_EXPAND_MINOR should be used.
     * @param flags #PanelAppletFlags to use for `applet`.
     */
    setFlags(flags: AppletFlags): void
    /**
     * Give hints to the panel about sizes `applet` is comfortable with. This is
     * generally useful for applets that can take a lot of space, in case the panel
     * gets full and needs to restrict the size of some applets.
     * 
     * `size_hints` should have an even number of sizes. It is an array of (max,
     * min) pairs where min(i) > max(i + 1).
     * 
     * `base_size` will be added to all sizes in `size_hints,` and is therefore a way
     * to guarantee a minimum size to `applet`.
     * 
     * The panel will try to allocate a size that is acceptable to `applet,` i.e. in
     * one of the (`base_size` + max, `base_size` + min) ranges.
     * 
     * %PANEL_APPLET_EXPAND_MAJOR must be set for `applet` to use size hints.
     * @param sizeHints array of sizes.
     * @param nElements length of `size_hints`.
     * @param baseSize base size of the applet.
     */
    setSizeHints(sizeHints: number, nElements: number, baseSize: number): void
    /**
     * Sets up the context menu of `applet`. `xml` is a #GtkUIManager UI definition,
     * describing how to display the menu items. `action_group` contains the
     * various #GtkAction that are referenced in `xml`.
     * 
     * See also the <link linkend="getting-started.context-menu">Context
     * Menu</link> section.
     * @param xml a menu XML string.
     * @param actionGroup a #GtkActionGroup.
     */
    setupMenu(xml: string, actionGroup: Gtk.ActionGroup): void
    /**
     * Sets up the context menu of `applet`. `filename` is the path to a menu XML
     * file, containing a #GtkUIManager UI definition that describes how to display
     * the menu items. `action_group` contains the various #GtkAction that
     * are referenced in `xml`.
     * 
     * See also the <link linkend="getting-started.context-menu">Context
     * Menu</link> section.
     * @param filename path to a menu XML file.
     * @param actionGroup a #GtkActionGroup.
     */
    setupMenuFromFile(filename: string, actionGroup: Gtk.ActionGroup): void
    /**
     * Sets up the context menu of `applet`. `filename` is a resource path to a menu
     * XML file, containing a #GtkUIManager UI definition that describes how to
     * display the menu items. `action_group` contains the various #GtkAction that
     * are referenced in `xml`.
     * 
     * See also the <link linkend="getting-started.context-menu">Context
     * Menu</link> section.
     * @param resourcePath a resource path
     * @param actionGroup a #GtkActionGroup.
     */
    setupMenuFromResource(resourcePath: string, actionGroup: Gtk.ActionGroup): void

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

    // Own virtual methods of PanelApplet-4.0.PanelApplet.Applet

    changeBackground(pattern: cairo.Pattern): void
    changeOrient(orient: AppletOrient): void
    changeSize(size: number): void
    moveFocusOutOfApplet(direction: Gtk.DirectionType): void

    // Own signals of PanelApplet-4.0.PanelApplet.Applet

    connect(sigName: "change-background", callback: Applet.ChangeBackgroundSignalCallback): number
    on(sigName: "change-background", callback: Applet.ChangeBackgroundSignalCallback): number
    once(sigName: "change-background", callback: Applet.ChangeBackgroundSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "change-background", ...args: any[]): void
    connect(sigName: "change-orient", callback: Applet.ChangeOrientSignalCallback): number
    on(sigName: "change-orient", callback: Applet.ChangeOrientSignalCallback): number
    once(sigName: "change-orient", callback: Applet.ChangeOrientSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "change-orient", ...args: any[]): void
    connect(sigName: "change-size", callback: Applet.ChangeSizeSignalCallback): number
    on(sigName: "change-size", callback: Applet.ChangeSizeSignalCallback): number
    once(sigName: "change-size", callback: Applet.ChangeSizeSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "change-size", ...args: any[]): void
    connect(sigName: "move-focus-out-of-applet", callback: (...args: any[]) => void): number
    on(sigName: "move-focus-out-of-applet", callback: (...args: any[]) => void): number
    once(sigName: "move-focus-out-of-applet", callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: "move-focus-out-of-applet", ...args: any[]): void

    // Class property signals of PanelApplet-4.0.PanelApplet.Applet

    connect(sigName: "notify::flags", callback: any): number
    on(sigName: "notify::flags", callback: any): number
    once(sigName: "notify::flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::locked-down", callback: any): number
    on(sigName: "notify::locked-down", callback: any): number
    once(sigName: "notify::locked-down", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::locked-down", ...args: any[]): void
    connect(sigName: "notify::orient", callback: any): number
    on(sigName: "notify::orient", callback: any): number
    once(sigName: "notify::orient", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orient", ...args: any[]): void
    connect(sigName: "notify::prefs-key", callback: any): number
    on(sigName: "notify::prefs-key", callback: any): number
    once(sigName: "notify::prefs-key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefs-key", ...args: any[]): void
    connect(sigName: "notify::settings-path", callback: any): number
    on(sigName: "notify::settings-path", callback: any): number
    once(sigName: "notify::settings-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::settings-path", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::size-hints", callback: any): number
    on(sigName: "notify::size-hints", callback: any): number
    once(sigName: "notify::size-hints", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size-hints", ...args: any[]): void
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

export class Applet extends Gtk.EventBox {

    // Own properties of PanelApplet-4.0.PanelApplet.Applet

    static name: string

    // Constructors of PanelApplet-4.0.PanelApplet.Applet

    constructor(config?: Applet.ConstructorProperties) 
    _init(config?: Applet.ConstructorProperties): void
    /**
     * Creates the applet factory for `factory_id,` so that the factory can create
     * instances of the applet types it is associated with.
     * 
     * Applet instances created by the applet factory will use `applet_type` as
     * GType. Unless you subclass #PanelApplet, you should use %PANEL_TYPE_APPLET
     * as `applet_type`.
     * 
     * On creation of the applet instances, `callback` is called to setup the
     * applet. If `callback` returns %FALSE, the creation of the applet instance is
     * cancelled.
     * 
     * If using C, it is recommended to use #PANEL_APPLET_OUT_PROCESS_FACTORY
     * instead as it will create a main() function for you.
     * 
     * It can only be used once, and is incompatible with the use of
     * %PANEL_APPLET_IN_PROCESS_FACTORY and %PANEL_APPLET_OUT_PROCESS_FACTORY.
     * @param factoryId identifier of an applet factory.
     * @param appletType GType of the applet this factory creates.
     * @param callback callback to be called when a new applet is created.
     */
    static factoryMain(factoryId: string, appletType: GObject.GType, callback: AppletFactoryCallback): number
}

export interface AppletClass {

    // Own fields of PanelApplet-4.0.PanelApplet.AppletClass

    eventBoxClass: Gtk.EventBoxClass
    changeOrient: (applet: Applet, orient: AppletOrient) => void
    changeSize: (applet: Applet, size: number) => void
    changeBackground: (applet: Applet, pattern: cairo.Pattern) => void
    moveFocusOutOfApplet: (frame: Applet, direction: Gtk.DirectionType) => void
}

export abstract class AppletClass {

    // Own properties of PanelApplet-4.0.PanelApplet.AppletClass

    static name: string
}

export interface AppletPrivate {
}

export class AppletPrivate {

    // Own properties of PanelApplet-4.0.PanelApplet.AppletPrivate

    static name: string
}
