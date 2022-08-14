
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gdl-3
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

/**
 * Used to customize the appearance of a #GdlDockBar.
 */
export enum DockBarStyle {
    /**
     * Buttons display only icons in the dockbar.
     */
    ICONS,
    /**
     * Buttons display only text labels in the dockbar.
     */
    TEXT,
    /**
     * Buttons display text and icons in the dockbar.
     */
    BOTH,
    /**
     * identical to `GDL_DOCK_BAR_BOTH`.
     */
    AUTO,
}
/**
 * Define the image displayed.
 */
export enum DockItemButtonImageType {
    /**
     * Display a small cross
     */
    CLOSE,
    /**
     * Display a small triangle
     */
    ICONIFY,
}
/**
 * Described the docking position.
 */
export enum DockPlacement {
    /**
     * No position defined
     */
    NONE,
    /**
     * Dock object on the top
     */
    TOP,
    /**
     * Dock object on the bottom
     */
    BOTTOM,
    /**
     * Dock object on the right
     */
    RIGHT,
    /**
     * Dock object on the left
     */
    LEFT,
    /**
     * Dock object on top of the other
     */
    CENTER,
    /**
     * Dock object in its own window
     */
    FLOATING,
}
/**
 * Used to customize the appearance of the tabs in #GdlDockNotebook.
 */
export enum SwitcherStyle {
    /**
     * Tabs display only text labels.
     */
    TEXT,
    /**
     * Tabs display only icons.
     */
    ICON,
    /**
     * Tabs display text and icons.
     */
    BOTH,
    /**
     * Same as `GDL_SWITCHER_STYLE_BOTH`.
     */
    TOOLBAR,
    /**
     * Tabs display like notebook tabs.
     */
    TABS,
    /**
     * Do not display tabs.
     */
    NONE,
}
/**
 * Described the behaviour of a doc item. The item can have multiple flags set.
 * @bitfield 
 */
export enum DockItemBehavior {
    /**
     * Normal dock item
     */
    NORMAL,
    /**
     * item cannot be undocked
     */
    NEVER_FLOATING,
    /**
     * item cannot be docked vertically
     */
    NEVER_VERTICAL,
    /**
     * item cannot be docked horizontally
     */
    NEVER_HORIZONTAL,
    /**
     * item is locked, it cannot be moved around
     */
    LOCKED,
    /**
     * item cannot be docked at top
     */
    CANT_DOCK_TOP,
    /**
     * item cannot be docked at bottom
     */
    CANT_DOCK_BOTTOM,
    /**
     * item cannot be docked left
     */
    CANT_DOCK_LEFT,
    /**
     * item cannot be docked right
     */
    CANT_DOCK_RIGHT,
    /**
     * item cannot be docked at center
     */
    CANT_DOCK_CENTER,
    /**
     * item cannot be closed
     */
    CANT_CLOSE,
    /**
     * item cannot be iconified
     */
    CANT_ICONIFY,
    /**
     * item doesn't have a grip
     */
    NO_GRIP,
}
/**
 * Status flag of a GdlDockItem. Don't use unless you derive a widget from GdlDockItem
 * @bitfield 
 */
export enum DockItemFlags {
    /**
     * item is in a drag operation
     */
    IN_DRAG,
    /**
     * item is in a predrag operation
     */
    IN_PREDRAG,
    /**
     * item is iconified
     */
    ICONIFIED,
    /**
     * indicates the user has started an action on the dock item
     */
    USER_ACTION,
}
/**
 * Described the state of a #GdlDockObject.
 * 
 * Since 3.6: These flags are available using access function, like
 * gdl_dock_object_is_automatic() or gdl_dock_object_is_closed().
 * @bitfield 
 */
export enum DockObjectFlags {
    /**
     * Object is created and destroyed by the master, not the user
     */
    AUTOMATIC,
    /**
     * Object has a parent
     */
    ATTACHED,
    /**
     * Object is currently part of a rearrangement
     */
    IN_REFLOW,
    /**
     * Object will be removed
     */
    IN_DETACH,
}
/**
 * Used to flag additional characteristics to GObject properties used in dock
 * object.
 * @bitfield 
 */
export enum DockParamFlags {
    /**
     * The parameter is to be exported for later layout rebuilding
     */
    EXPORT,
    /**
     * The parameter must be set after adding the children objects
     */
    AFTER,
}
export const DOCK_MASTER_PROPERTY: string
export const DOCK_NAME_PROPERTY: string
/**
 * Minimum shift count to be used for user defined flags, to be stored in
 * #GdlDockObject.flags.
 */
export const DOCK_OBJECT_FLAGS_SHIFT: number
export function marshalVOIDOBJECTENUMBOXED(closure: GObject.TClosure, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object | null, marshalData: object | null): void
export function marshalVOIDOBJECTINTINT(closure: GObject.TClosure, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object | null, marshalData: object | null): void
export function marshalVOIDUINTUINT(closure: GObject.TClosure, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object | null, marshalData: object | null): void
export module Dock {

    // Signal callback interfaces

    /**
     * Signal callback interface for `layout-changed`
     */
    export interface LayoutChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, DockObject.ConstructorProperties {

        // Own constructor properties of Gdl-3.Gdl.Dock

        defaultTitle?: string | null
        floating?: boolean | null
        floatx?: number | null
        floaty?: number | null
        height?: number | null
        /**
         * Whether or not to prevent a floating dock window from appearing in the
         * taskbar. Note that this only affects floating windows that are created
         * after this flag is set; existing windows are not affected.  Usually,
         * this property is used when you create the dock.
         */
        skipTaskbar?: boolean | null
        width?: number | null
    }

}

export interface Dock extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Gdl-3.Gdl.Dock

    defaultTitle: string
    readonly floating: boolean
    floatx: number
    floaty: number
    height: number
    /**
     * Whether or not to prevent a floating dock window from appearing in the
     * taskbar. Note that this only affects floating windows that are created
     * after this flag is set; existing windows are not affected.  Usually,
     * this property is used when you create the dock.
     */
    skipTaskbar: boolean
    width: number

    // Conflicting properties

    name: any

    // Own fields of Gdl-3.Gdl.Dock

    object: DockObject
    priv: DockPrivate

    // Owm methods of Gdl-3.Gdl.Dock

    /**
     * Dock an item as a floating item. It creates a new window containing a new
     * dock widget sharing the same master where the item is docked.
     * @param item A #GdlDockItem widget
     * @param x X coordinate of the floating item
     * @param y Y coordinate of the floating item
     * @param width width of the floating item
     * @param height height of the floating item
     */
    addFloatingItem(item: DockItem, x: number, y: number, width: number, height: number): void
    /**
     * Dock in `dock,` the widget `item` at the position defined by `placement`. The
     * function takes care of finding the right parent widget eventually creating
     * it if needed.
     * @param item A #GdlDockItem widget
     * @param placement A position for the widget
     */
    addItem(item: DockItem, placement: DockPlacement): void
    /**
     * Looks for an #GdlDockItem widget bound to the master of the dock item. It
     * does not search only in the children of this particular dock widget.
     * @param name An item name
     */
    getItemByName(name: string): DockItem
    /**
     * Returns a list of all item bound to the master of the dock, not only
     * the children of this particular dock widget.
     */
    getNamedItems(): DockObject[]
    /**
     * Looks for an #GdlDockPlaceholder object bound to the master of the dock item.
     * It does not search only in the children of this particular dock widget.
     * @param name An item name
     */
    getPlaceholderByName(name: string): DockPlaceholder
    /**
     * Get the first child of the #GdlDockObject.
     */
    getRoot(): DockObject | null
    /**
     * Hide the preview window used to materialize the dock target.
     */
    hidePreview(): void
    /**
     * Create a new dock widget having the same master than `original`.
     * @param floating %TRUE to create a floating dock
     */
    newFrom(floating: boolean): Gtk.Widget
    /**
     * Sets whether or not a floating dock window should be prevented from
     * appearing in the system taskbar.
     * @param skip %TRUE if floating docks should be prevented from appearing in the taskbar
     */
    setSkipTaskbar(skip: boolean): void
    /**
     * Show a preview window used to materialize the dock target.
     * @param rect The position and the size of the preview window
     */
    showPreview(rect: Gdk.Rectangle): void
    /**
     * Show a preview window used to materialize the dock target.
     * @param rect The position and the size of the preview window
     */
    xorRect(rect: Gdk.Rectangle): void
    /**
     * Hide the preview window used to materialize the dock target.
     */
    xorRectHide(): void

    // Conflicting methods

    /**
     * Retrieves the name of the object. This name is used to identify the object.
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
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
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
     * Set the name of the object used to identify it.
     * @param name a name for the object
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
     * Get the top level #GdlDock widget of `object` or %NULL if cannot be found.
     */
    getToplevel(): Dock | null

    // Overloads of getToplevel

    /**
     * This function returns the topmost widget in the container hierarchy
     * `widget` is a part of. If `widget` has no parent widgets, it will be
     * returned as the topmost widget. No reference will be added to the
     * returned widget; it should not be unreferenced.
     * 
     * Note the difference in behavior vs. gtk_widget_get_ancestor();
     * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
     * would return
     * %NULL if `widget` wasn’t inside a toplevel window, and if the
     * window was inside a #GtkWindow-derived widget which was in turn
     * inside the toplevel #GtkWindow. While the second case may
     * seem unlikely, it actually happens when a #GtkPlug is embedded
     * inside a #GtkSocket within the same application.
     * 
     * To reliably find the toplevel #GtkWindow, use
     * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
     * on the result. For instance, to get the title of a widget's toplevel
     * window, one might use:
     * 
     * ```c
     * static const char *
     * get_widget_toplevel_title (GtkWidget *widget)
     * {
     *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
     *   if (GTK_IS_WINDOW (toplevel))
     *     {
     *       return gtk_window_get_title (GTK_WINDOW (toplevel));
     *     }
     * 
     *   return NULL;
     * }
     * ```
     * 
     */
    getToplevel(): Gtk.Widget
    /**
     * This function returns the topmost widget in the container hierarchy
     * `widget` is a part of. If `widget` has no parent widgets, it will be
     * returned as the topmost widget. No reference will be added to the
     * returned widget; it should not be unreferenced.
     * 
     * Note the difference in behavior vs. gtk_widget_get_ancestor();
     * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
     * would return
     * %NULL if `widget` wasn’t inside a toplevel window, and if the
     * window was inside a #GtkWindow-derived widget which was in turn
     * inside the toplevel #GtkWindow. While the second case may
     * seem unlikely, it actually happens when a #GtkPlug is embedded
     * inside a #GtkSocket within the same application.
     * 
     * To reliably find the toplevel #GtkWindow, use
     * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
     * on the result. For instance, to get the title of a widget's toplevel
     * window, one might use:
     * 
     * ```c
     * static const char *
     * get_widget_toplevel_title (GtkWidget *widget)
     * {
     *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
     *   if (GTK_IS_WINDOW (toplevel))
     *     {
     *       return gtk_window_get_title (GTK_WINDOW (toplevel));
     *     }
     * 
     *   return NULL;
     * }
     * ```
     * 
     */
    getToplevel(): Gtk.Widget
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

    // Own virtual methods of Gdl-3.Gdl.Dock

    layoutChanged(): void

    // Own signals of Gdl-3.Gdl.Dock

    connect(sigName: "layout-changed", callback: Dock.LayoutChangedSignalCallback): number
    on(sigName: "layout-changed", callback: Dock.LayoutChangedSignalCallback): number
    once(sigName: "layout-changed", callback: Dock.LayoutChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "layout-changed", ...args: any[]): void

    // Class property signals of Gdl-3.Gdl.Dock

    connect(sigName: "notify::default-title", callback: any): number
    on(sigName: "notify::default-title", callback: any): number
    once(sigName: "notify::default-title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-title", ...args: any[]): void
    connect(sigName: "notify::floating", callback: any): number
    on(sigName: "notify::floating", callback: any): number
    once(sigName: "notify::floating", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::floating", ...args: any[]): void
    connect(sigName: "notify::floatx", callback: any): number
    on(sigName: "notify::floatx", callback: any): number
    once(sigName: "notify::floatx", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::floatx", ...args: any[]): void
    connect(sigName: "notify::floaty", callback: any): number
    on(sigName: "notify::floaty", callback: any): number
    once(sigName: "notify::floaty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::floaty", ...args: any[]): void
    connect(sigName: "notify::height", callback: any): number
    on(sigName: "notify::height", callback: any): number
    once(sigName: "notify::height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar", callback: any): number
    on(sigName: "notify::skip-taskbar", callback: any): number
    once(sigName: "notify::skip-taskbar", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::skip-taskbar", ...args: any[]): void
    connect(sigName: "notify::width", callback: any): number
    on(sigName: "notify::width", callback: any): number
    once(sigName: "notify::width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::long-name", callback: any): number
    on(sigName: "notify::long-name", callback: any): number
    once(sigName: "notify::long-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::long-name", ...args: any[]): void
    connect(sigName: "notify::master", callback: any): number
    on(sigName: "notify::master", callback: any): number
    once(sigName: "notify::master", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::master", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pixbuf-icon", callback: any): number
    on(sigName: "notify::pixbuf-icon", callback: any): number
    once(sigName: "notify::pixbuf-icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixbuf-icon", ...args: any[]): void
    connect(sigName: "notify::stock-id", callback: any): number
    on(sigName: "notify::stock-id", callback: any): number
    once(sigName: "notify::stock-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stock-id", ...args: any[]): void
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

export class Dock extends DockObject {

    // Own properties of Gdl-3.Gdl.Dock

    static name: string

    // Constructors of Gdl-3.Gdl.Dock

    constructor(config?: Dock.ConstructorProperties) 
    /**
     * Create a new dock.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new dock.
     * @constructor 
     */
    static new(): Dock
    _init(config?: Dock.ConstructorProperties): void
}

export module DockBar {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Gdl-3.Gdl.DockBar

        dockbarStyle?: DockBarStyle | null
        /**
         * The #GdlDockMaster object attached to the dockbar.
         */
        master?: GObject.Object | null
    }

}

export interface DockBar extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gdl-3.Gdl.DockBar

    dockbarStyle: DockBarStyle
    /**
     * The #GdlDockMaster object attached to the dockbar.
     */
    master: GObject.Object

    // Own fields of Gdl-3.Gdl.DockBar

    parent: Gtk.Box & Gtk.Container

    // Owm methods of Gdl-3.Gdl.DockBar

    /**
     * Retrieves the orientation of the `dockbar`.
     */
    getOrientation(): Gtk.Orientation
    /**
     * Retrieves the style of the `dockbar`.
     */
    getStyle(): DockBarStyle

    // Overloads of getStyle

    /**
     * Simply an accessor function that returns `widget->`style.
     */
    getStyle(): Gtk.Style
    /**
     * Set the orientation of the `dockbar`.
     * @param orientation the new orientation
     */
    setOrientation(orientation: Gtk.Orientation): void
    /**
     * Set the style of the `dockbar`.
     * @param style the new style
     */
    setStyle(style: DockBarStyle): void

    // Overloads of setStyle

    /**
     * Used to set the #GtkStyle for a widget (`widget->`style). Since
     * GTK 3, this function does nothing, the passed in style is ignored.
     * @param style a #GtkStyle, or %NULL to remove the effect     of a previous call to gtk_widget_set_style() and go back to     the default style
     */
    setStyle(style: Gtk.Style | null): void

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

    // Class property signals of Gdl-3.Gdl.DockBar

    connect(sigName: "notify::dockbar-style", callback: any): number
    on(sigName: "notify::dockbar-style", callback: any): number
    once(sigName: "notify::dockbar-style", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dockbar-style", ...args: any[]): void
    connect(sigName: "notify::master", callback: any): number
    on(sigName: "notify::master", callback: any): number
    once(sigName: "notify::master", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::master", ...args: any[]): void
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

export class DockBar extends Gtk.Box {

    // Own properties of Gdl-3.Gdl.DockBar

    static name: string

    // Constructors of Gdl-3.Gdl.DockBar

    constructor(config?: DockBar.ConstructorProperties) 
    /**
     * Creates a new GDL dock bar. If a #GdlDockObject is used, the dock bar will
     * be associated with the master of this object.
     * @constructor 
     * @param master The associated #GdlDockMaster or #GdlDockObject object
     */
    constructor(master: GObject.Object | null) 
    /**
     * Creates a new GDL dock bar. If a #GdlDockObject is used, the dock bar will
     * be associated with the master of this object.
     * @constructor 
     * @param master The associated #GdlDockMaster or #GdlDockObject object
     */
    static new(master: GObject.Object | null): DockBar

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: DockBar.ConstructorProperties): void
}

export module DockItem {

    // Signal callback interfaces

    /**
     * Signal callback interface for `deselected`
     */
    export interface DeselectedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `dock-drag-begin`
     */
    export interface DockDragBeginSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `dock-drag-end`
     */
    export interface DockDragEndSignalCallback {
        (cancel: boolean): void
    }

    /**
     * Signal callback interface for `dock-drag-motion`
     */
    export interface DockDragMotionSignalCallback {
        (device: Gdk.Device, x: number, y: number): void
    }

    /**
     * Signal callback interface for `move-focus-child`
     */
    export interface MoveFocusChildSignalCallback {
        (dir: Gtk.DirectionType): void
    }

    /**
     * Signal callback interface for `selected`
     */
    export interface SelectedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, DockObject.ConstructorProperties {

        // Own constructor properties of Gdl-3.Gdl.DockItem

        behavior?: DockItemBehavior | null
        /**
         * If set, the dock item is closed.
         */
        closed?: boolean | null
        /**
         * If set, the dock item is hidden but it has a corresponding icon in the
         * dock bar allowing to show it again.
         */
        iconified?: boolean | null
        locked?: boolean | null
        /**
         * The orientation of the docking item. If the orientation is set to
         * #GTK_ORIENTATION_VERTICAL, the grip widget will be shown along
         * the top of the edge of item (if it is not hidden). If the
         * orientation is set to #GTK_ORIENTATION_HORIZONTAL, the grip
         * widget will be shown down the left edge of the item (even if the
         * widget text direction is set to RTL).
         */
        orientation?: Gtk.Orientation | null
        preferredHeight?: number | null
        preferredWidth?: number | null
        resize?: boolean | null
    }

}

export interface DockItem extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Gdl-3.Gdl.DockItem

    behavior: DockItemBehavior
    /**
     * If set, the dock item is closed.
     */
    closed: boolean
    /**
     * If set, the dock item is hidden but it has a corresponding icon in the
     * dock bar allowing to show it again.
     */
    iconified: boolean
    locked: boolean
    /**
     * The orientation of the docking item. If the orientation is set to
     * #GTK_ORIENTATION_VERTICAL, the grip widget will be shown along
     * the top of the edge of item (if it is not hidden). If the
     * orientation is set to #GTK_ORIENTATION_HORIZONTAL, the grip
     * widget will be shown down the left edge of the item (even if the
     * widget text direction is set to RTL).
     */
    orientation: Gtk.Orientation
    preferredHeight: number
    preferredWidth: number
    resize: boolean

    // Conflicting properties

    name: any

    // Own fields of Gdl-3.Gdl.DockItem

    object: DockObject

    // Owm methods of Gdl-3.Gdl.DockItem

    /**
     * Binds this dock item to a new dock master.
     * @param dock The #GdlDock widget to bind it to. Note that this widget must be a type of #GdlDock.
     */
    bind(dock: Gtk.Widget): void

    // Overloads of bind

    /**
     * Add a link between a #GdlDockObject and a master. It is normally not used
     * directly because it is automatically called when a new object is docked.
     * @param master A #GdlDockMaster
     */
    bind(master: GObject.Object): void
    /**
     * Relocates a dock item to a new location relative to another dock item.
     * @param target The dock item that will be used as the point of reference.
     * @param position The position to dock #item, relative to #target.
     * @param dockingParam This value is unused, and will be ignored.
     */
    dockTo(target: DockItem | null, position: DockPlacement, dockingParam: number): void
    /**
     * Retrieves the behavior of the item.
     */
    getBehaviorFlags(): DockItemBehavior
    /**
     * Gets the child of the #GdlDockItem, or %NULL if the item contains
     * no child widget. The returned widget does not have a reference
     * added, so you do not need to unref it.
     */
    getChild(): Gtk.Widget
    /**
     * Gets the size and the position of the drag window in pixels.
     * @param rect A pointer to a #GdkRectangle that will receive the drag position
     */
    getDragArea(rect: Gdk.Rectangle): void
    /**
     * This function returns the dock item's grip label widget.
     */
    getGrip(): Gtk.Widget | null
    /**
     * Retrieves the orientation of the object.
     */
    getOrientation(): Gtk.Orientation
    /**
     * Gets the current tab label widget. Note that this label widget is
     * only visible when the "switcher-style" property of the #GdlDockMaster
     * is set to #GDL_SWITCHER_STYLE_TABS
     */
    getTablabel(): Gtk.Widget
    /**
     * This function hides the dock item's grip widget.
     */
    hideGrip(): void
    /**
     * This function hides the dock item. Since version 3.6, when dock items
     * are hidden they are not removed from the layout.
     * 
     * The dock item close button causes the panel to be hidden.
     */
    hideItem(): void
    /**
     * This function iconifies the dock item. When dock items are iconified
     * they are hidden, and appear only as icons in dock bars.
     * 
     * The dock item iconify button causes the panel to be iconified.
     */
    iconifyItem(): void
    /**
     * Checks whether a given #GdlDockItem is closed. It can be only hidden or
     * detached.
     */
    isClosed(): boolean
    /**
     * Checks whether a given #GdlDockItem is iconified.
     */
    isIconified(): boolean
    /**
     * Checks whether a given #GdlDockItem is a placeholder created by the
     * #GdlDockLayout object and does not contain a child.
     */
    isPlaceholder(): boolean
    /**
     * This function locks the dock item. When locked the dock item cannot
     * be dragged around and it doesn't show a grip.
     */
    lock(): void
    /**
     * This function emits the deselected signal. It is used by #GdlSwitcher
     * to let clients know that this item has been deselected.
     */
    notifyDeselected(): void
    /**
     * This function emits the selected signal. It is to be used by #GdlSwitcher
     * to let clients know that this item has been switched to.
     */
    notifySelected(): void
    /**
     * Checks whether a given #GdlDockItem or its child widget has focus.
     * This check is performed recursively on child widgets.
     */
    orChildHasFocus(): boolean
    /**
     * Gets the preferred size of the dock item in pixels.
     * @param req A pointer to a #GtkRequisition into which the preferred size will be written.
     */
    preferredSize(req: Gtk.Requisition): void
    /**
     * This function sets the behavior of the dock item.
     * @param behavior Behavior flags to turn on
     * @param clear Whether to clear state before turning on `flags`
     */
    setBehaviorFlags(behavior: DockItemBehavior, clear: boolean): void
    /**
     * Set a new child for the #GdlDockItem. This child is different from the
     * children using the #GtkContainer interface. It is a private child reserved
     * for the widget implementation.
     * 
     * If a child is already present, it will be replaced. If `widget` is %NULL the
     * child will be removed.
     * @param child a #GtkWidget
     */
    setChild(child: Gtk.Widget | null): void
    /**
     * This method has only an effect when you add you dock_item with
     * GDL_DOCK_ITEM_BEH_NEVER_FLOATING. In this case you have to assign
     * it a default position.*
     * 
     * Deprecated 3.6: This function is doing nothing now.
     * @param reference The GdlDockObject which is the default dock for `item`
     */
    setDefaultPosition(reference: DockObject): void
    // Has conflict: setOrientation(orientation: Gtk.Orientation): void
    /**
     * Replaces the current tab label widget with another widget. Note that
     * this label widget is only visible when the "switcher-style" property
     * of the #GdlDockMaster is set to #GDL_SWITCHER_STYLE_TABS
     * @param tablabel The widget that will become the tab label.
     */
    setTablabel(tablabel: Gtk.Widget): void
    /**
     * This function shows the dock item's grip widget.
     */
    showGrip(): void
    /**
     * This function shows the dock item. When dock items are shown, they
     * are displayed in their normal layout position.
     */
    showItem(): void
    /**
     * Unbinds this dock item from it's dock master.
     */
    unbind(): void
    /**
     * This function unlocks the dock item. When unlocked the dock item can
     * be dragged around and can show a grip.
     */
    unlock(): void
    /**
     * This function sets the behavior of the dock item.
     * @param behavior Behavior flags to turn off
     */
    unsetBehaviorFlags(behavior: DockItemBehavior): void

    // Conflicting methods

    /**
     * Retrieves the name of the object. This name is used to identify the object.
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
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
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
     * Set the name of the object used to identify it.
     * @param name a name for the object
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
     * Get the top level #GdlDock widget of `object` or %NULL if cannot be found.
     */
    getToplevel(): Dock | null

    // Overloads of getToplevel

    /**
     * This function returns the topmost widget in the container hierarchy
     * `widget` is a part of. If `widget` has no parent widgets, it will be
     * returned as the topmost widget. No reference will be added to the
     * returned widget; it should not be unreferenced.
     * 
     * Note the difference in behavior vs. gtk_widget_get_ancestor();
     * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
     * would return
     * %NULL if `widget` wasn’t inside a toplevel window, and if the
     * window was inside a #GtkWindow-derived widget which was in turn
     * inside the toplevel #GtkWindow. While the second case may
     * seem unlikely, it actually happens when a #GtkPlug is embedded
     * inside a #GtkSocket within the same application.
     * 
     * To reliably find the toplevel #GtkWindow, use
     * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
     * on the result. For instance, to get the title of a widget's toplevel
     * window, one might use:
     * 
     * ```c
     * static const char *
     * get_widget_toplevel_title (GtkWidget *widget)
     * {
     *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
     *   if (GTK_IS_WINDOW (toplevel))
     *     {
     *       return gtk_window_get_title (GTK_WINDOW (toplevel));
     *     }
     * 
     *   return NULL;
     * }
     * ```
     * 
     */
    getToplevel(): Gtk.Widget
    /**
     * This function returns the topmost widget in the container hierarchy
     * `widget` is a part of. If `widget` has no parent widgets, it will be
     * returned as the topmost widget. No reference will be added to the
     * returned widget; it should not be unreferenced.
     * 
     * Note the difference in behavior vs. gtk_widget_get_ancestor();
     * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
     * would return
     * %NULL if `widget` wasn’t inside a toplevel window, and if the
     * window was inside a #GtkWindow-derived widget which was in turn
     * inside the toplevel #GtkWindow. While the second case may
     * seem unlikely, it actually happens when a #GtkPlug is embedded
     * inside a #GtkSocket within the same application.
     * 
     * To reliably find the toplevel #GtkWindow, use
     * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
     * on the result. For instance, to get the title of a widget's toplevel
     * window, one might use:
     * 
     * ```c
     * static const char *
     * get_widget_toplevel_title (GtkWidget *widget)
     * {
     *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
     *   if (GTK_IS_WINDOW (toplevel))
     *     {
     *       return gtk_window_get_title (GTK_WINDOW (toplevel));
     *     }
     * 
     *   return NULL;
     * }
     * ```
     * 
     */
    getToplevel(): Gtk.Widget
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

    // Own virtual methods of Gdl-3.Gdl.DockItem

    dockDragBegin(): void
    dockDragEnd(cancelled: boolean): void
    dockDragMotion(device: Gdk.Device, x: number, y: number): void
    moveFocusChild(direction: Gtk.DirectionType): void
    /**
     * This function sets the layout of the dock item.
     * @virtual 
     * @param orientation The orientation to set the item to. If the orientation is set to #GTK_ORIENTATION_VERTICAL, the grip widget will be shown along the top of the edge of item (if it is not hidden). If the orientation is set to #GTK_ORIENTATION_HORIZONTAL, the grip widget will be shown down the left edge of the item (even if the widget text direction is set to RTL).
     */
    setOrientation(orientation: Gtk.Orientation): void

    // Own signals of Gdl-3.Gdl.DockItem

    connect(sigName: "deselected", callback: DockItem.DeselectedSignalCallback): number
    on(sigName: "deselected", callback: DockItem.DeselectedSignalCallback): number
    once(sigName: "deselected", callback: DockItem.DeselectedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "deselected", ...args: any[]): void
    connect(sigName: "dock-drag-begin", callback: DockItem.DockDragBeginSignalCallback): number
    on(sigName: "dock-drag-begin", callback: DockItem.DockDragBeginSignalCallback): number
    once(sigName: "dock-drag-begin", callback: DockItem.DockDragBeginSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "dock-drag-begin", ...args: any[]): void
    connect(sigName: "dock-drag-end", callback: DockItem.DockDragEndSignalCallback): number
    on(sigName: "dock-drag-end", callback: DockItem.DockDragEndSignalCallback): number
    once(sigName: "dock-drag-end", callback: DockItem.DockDragEndSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "dock-drag-end", ...args: any[]): void
    connect(sigName: "dock-drag-motion", callback: DockItem.DockDragMotionSignalCallback): number
    on(sigName: "dock-drag-motion", callback: DockItem.DockDragMotionSignalCallback): number
    once(sigName: "dock-drag-motion", callback: DockItem.DockDragMotionSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "dock-drag-motion", x: number, y: number, ...args: any[]): void
    connect(sigName: "move-focus-child", callback: DockItem.MoveFocusChildSignalCallback): number
    on(sigName: "move-focus-child", callback: DockItem.MoveFocusChildSignalCallback): number
    once(sigName: "move-focus-child", callback: DockItem.MoveFocusChildSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "move-focus-child", ...args: any[]): void
    connect(sigName: "selected", callback: DockItem.SelectedSignalCallback): number
    on(sigName: "selected", callback: DockItem.SelectedSignalCallback): number
    once(sigName: "selected", callback: DockItem.SelectedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "selected", ...args: any[]): void

    // Class property signals of Gdl-3.Gdl.DockItem

    connect(sigName: "notify::behavior", callback: any): number
    on(sigName: "notify::behavior", callback: any): number
    once(sigName: "notify::behavior", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::behavior", ...args: any[]): void
    connect(sigName: "notify::closed", callback: any): number
    on(sigName: "notify::closed", callback: any): number
    once(sigName: "notify::closed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::closed", ...args: any[]): void
    connect(sigName: "notify::iconified", callback: any): number
    on(sigName: "notify::iconified", callback: any): number
    once(sigName: "notify::iconified", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::iconified", ...args: any[]): void
    connect(sigName: "notify::locked", callback: any): number
    on(sigName: "notify::locked", callback: any): number
    once(sigName: "notify::locked", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::locked", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: "notify::preferred-height", callback: any): number
    on(sigName: "notify::preferred-height", callback: any): number
    once(sigName: "notify::preferred-height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::preferred-height", ...args: any[]): void
    connect(sigName: "notify::preferred-width", callback: any): number
    on(sigName: "notify::preferred-width", callback: any): number
    once(sigName: "notify::preferred-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::preferred-width", ...args: any[]): void
    connect(sigName: "notify::resize", callback: any): number
    on(sigName: "notify::resize", callback: any): number
    once(sigName: "notify::resize", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resize", ...args: any[]): void
    connect(sigName: "notify::long-name", callback: any): number
    on(sigName: "notify::long-name", callback: any): number
    once(sigName: "notify::long-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::long-name", ...args: any[]): void
    connect(sigName: "notify::master", callback: any): number
    on(sigName: "notify::master", callback: any): number
    once(sigName: "notify::master", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::master", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pixbuf-icon", callback: any): number
    on(sigName: "notify::pixbuf-icon", callback: any): number
    once(sigName: "notify::pixbuf-icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixbuf-icon", ...args: any[]): void
    connect(sigName: "notify::stock-id", callback: any): number
    on(sigName: "notify::stock-id", callback: any): number
    once(sigName: "notify::stock-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stock-id", ...args: any[]): void
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

export class DockItem extends DockObject {

    // Own properties of Gdl-3.Gdl.DockItem

    static name: string

    // Constructors of Gdl-3.Gdl.DockItem

    constructor(config?: DockItem.ConstructorProperties) 
    /**
     * Creates a new dock item widget.
     * @constructor 
     * @param name Unique name for identifying the dock object.
     * @param longName Human readable name for the dock object.
     * @param behavior General behavior for the dock item (i.e. whether it can            float, if it's locked, etc.), as specified by            #GdlDockItemBehavior flags.
     */
    constructor(name: string, longName: string, behavior: DockItemBehavior) 
    /**
     * Creates a new dock item widget.
     * @constructor 
     * @param name Unique name for identifying the dock object.
     * @param longName Human readable name for the dock object.
     * @param behavior General behavior for the dock item (i.e. whether it can            float, if it's locked, etc.), as specified by            #GdlDockItemBehavior flags.
     */
    static new(name: string, longName: string, behavior: DockItemBehavior): DockItem
    /**
     * Creates a new dock item grip widget with a given pixbuf icon.
     * @constructor 
     * @param name Unique name for identifying the dock object.
     * @param longName Human readable name for the dock object.
     * @param pixbufIcon Pixbuf icon for the dock object.
     * @param behavior General behavior for the dock item (i.e. whether it can            float, if it's locked, etc.), as specified by            #GdlDockItemBehavior flags.
     */
    static newWithPixbufIcon(name: string, longName: string, pixbufIcon: GdkPixbuf.Pixbuf, behavior: DockItemBehavior): DockItem
    /**
     * Creates a new dock item grip widget with a given stock id.
     * @constructor 
     * @param name Unique name for identifying the dock object.
     * @param longName Human readable name for the dock object.
     * @param stockId Stock icon for the dock object.
     * @param behavior General behavior for the dock item (i.e. whether it can            float, if it's locked, etc.), as specified by            #GdlDockItemBehavior flags.
     */
    static newWithStock(name: string, longName: string, stockId: string, behavior: DockItemBehavior): DockItem
    _init(config?: DockItem.ConstructorProperties): void
    /**
     * Define in the corresponding kind of dock item has a grip. Even if an item
     * has a grip it can be hidden.
     * @param hasGrip %TRUE is the dock item has a grip
     */
    static setHasGrip(item_class: DockItem | Function | GObject.GType, hasGrip: boolean): void
}

export module DockItemButtonImage {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Widget.ConstructorProperties {
    }

}

export interface DockItemButtonImage extends Atk.ImplementorIface, Gtk.Buildable {

    // Own fields of Gdl-3.Gdl.DockItemButtonImage

    parent: Gtk.Widget & Gtk.Container
    imageType: DockItemButtonImageType

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

    // Class property signals of Gdl-3.Gdl.DockItemButtonImage

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

export class DockItemButtonImage extends Gtk.Widget {

    // Own properties of Gdl-3.Gdl.DockItemButtonImage

    static name: string

    // Constructors of Gdl-3.Gdl.DockItemButtonImage

    constructor(config?: DockItemButtonImage.ConstructorProperties) 
    /**
     * Creates a new GDL dock button image object.
     * @constructor 
     * @param imageType Specifies what type of image the widget should display
     */
    constructor(imageType: DockItemButtonImageType) 
    /**
     * Creates a new GDL dock button image object.
     * @constructor 
     * @param imageType Specifies what type of image the widget should display
     */
    static new(imageType: DockItemButtonImageType): DockItemButtonImage
    _init(config?: DockItemButtonImage.ConstructorProperties): void
}

export module DockItemGrip {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Container.ConstructorProperties {

        // Own constructor properties of Gdl-3.Gdl.DockItemGrip

        item?: DockItem | null
    }

}

export interface DockItemGrip extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Gdl-3.Gdl.DockItemGrip

    readonly item: DockItem

    // Own fields of Gdl-3.Gdl.DockItemGrip

    parent: Gtk.Container
    priv: DockItemGripPrivate

    // Owm methods of Gdl-3.Gdl.DockItemGrip

    /**
     * Return %TRUE if the grip window has reveived the event.
     * @param event A #GdkEvent
     */
    hasEvent(event: Gdk.Event): boolean
    /**
     * This function hides the dock item's grip widget handle hatching.
     */
    hideHandle(): void
    /**
     * Change the cursor when a drag operation is started.
     * @param inDrag %TRUE if a drag operation is started
     */
    setCursor(inDrag: boolean): void
    /**
     * Replaces the current label widget with another widget.
     * @param label The widget that will become the label.
     */
    setLabel(label: Gtk.Widget): void
    /**
     * This function shows the dock item's grip widget handle hatching.
     */
    showHandle(): void

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

    // Class property signals of Gdl-3.Gdl.DockItemGrip

    connect(sigName: "notify::item", callback: any): number
    on(sigName: "notify::item", callback: any): number
    once(sigName: "notify::item", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::item", ...args: any[]): void
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

export class DockItemGrip extends Gtk.Container {

    // Own properties of Gdl-3.Gdl.DockItemGrip

    static name: string

    // Constructors of Gdl-3.Gdl.DockItemGrip

    constructor(config?: DockItemGrip.ConstructorProperties) 
    /**
     * Creates a new GDL dock item grip object.
     * @constructor 
     * @param item The dock item that will "own" this grip widget.
     */
    constructor(item: DockItem) 
    /**
     * Creates a new GDL dock item grip object.
     * @constructor 
     * @param item The dock item that will "own" this grip widget.
     */
    static new(item: DockItem): DockItemGrip
    _init(config?: DockItemGrip.ConstructorProperties): void
}

export module DockLayout {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gdl-3.Gdl.DockLayout

        master?: GObject.Object | null
    }

}

export interface DockLayout {

    // Own properties of Gdl-3.Gdl.DockLayout

    readonly dirty: boolean
    master: GObject.Object

    // Own fields of Gdl-3.Gdl.DockLayout

    gObject: GObject.Object

    // Owm methods of Gdl-3.Gdl.DockLayout

    /**
     * Attach the `layout` to the `master` and delete the reference to
     * the master that the layout attached previously.
     * 
     * Deprecated 3.6: Use gdl_dock_layout_set_master() instead.
     * @param master The master object to which the layout will be attached
     */
    attach(master: DockMaster): void
    /**
     * Deletes the layout with the given name from the memory.
     * This will set #GdlDockLayout:dirty to %TRUE.
     * @param name The name of the layout to delete.
     */
    deleteLayout(name: string): void
    /**
     * Get the list of layout names including or not the default layout.
     * @param includeDefault %TRUE to include the default layout.
     */
    getLayouts(includeDefault: boolean): string[]
    /**
     * Retrieves the master of the object.
     */
    getMaster(): GObject.Object
    /**
     * Checks whether the XML tree in memory is different from the file where the layout was saved.
     */
    isDirty(): boolean
    /**
     * Loads the layout from file with the given `filename`.
     * This will set #GdlDockLayout:dirty to %FALSE.
     * @param filename The name of the file to load.
     */
    loadFromFile(filename: string): boolean
    /**
     * Loads the layout with the given name from the memory.
     * This will set #GdlDockLayout:dirty to %TRUE.
     * 
     * See also gdl_dock_layout_load_from_file()
     * @param name The name of the layout to load or %NULL for a default layout name.
     */
    loadLayout(name: string | null): boolean
    /**
     * Saves the `layout` with the given name to the memory.
     * This will set #GdlDockLayout:dirty to %TRUE.
     * 
     * See also gdl_dock_layout_save_to_file().
     * @param name The name of the layout to save or %NULL for a default layout name.
     */
    saveLayout(name: string | null): void
    /**
     * This function saves the current layout in XML format to
     * the file with the given `filename`.
     * @param filename Name of the file we want to save in layout
     */
    saveToFile(filename: string): boolean
    /**
     * Attach the `layout` to the `master` and delete the reference to
     * the master that the layout attached previously. Instead of setting `master`
     * directly with the master object, it is possible to use a #GdlDockObject, in
     * this case the layout will be attached to the same master than the dock
     * object.
     * @param master The master object to which the layout will be attached
     */
    setMaster(master: GObject.Object): void

    // Class property signals of Gdl-3.Gdl.DockLayout

    connect(sigName: "notify::dirty", callback: any): number
    on(sigName: "notify::dirty", callback: any): number
    once(sigName: "notify::dirty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dirty", ...args: any[]): void
    connect(sigName: "notify::master", callback: any): number
    on(sigName: "notify::master", callback: any): number
    once(sigName: "notify::master", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::master", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The GdlDockLayout struct contains only private fields
 * and should not be directly accessed.
 * @class 
 */
export class DockLayout extends GObject.Object {

    // Own properties of Gdl-3.Gdl.DockLayout

    static name: string

    // Constructors of Gdl-3.Gdl.DockLayout

    constructor(config?: DockLayout.ConstructorProperties) 
    /**
     * Creates a new #GdlDockLayout. Instead of setting `master`
     * directly with a master object, it is possible to use a #GdlDockObject, in
     * this case the layout will be attached to the same master than the dock
     * object.
     * @constructor 
     * @param master A master or a dock object to which the layout will be attached.
     */
    constructor(master: GObject.Object) 
    /**
     * Creates a new #GdlDockLayout. Instead of setting `master`
     * directly with a master object, it is possible to use a #GdlDockObject, in
     * this case the layout will be attached to the same master than the dock
     * object.
     * @constructor 
     * @param master A master or a dock object to which the layout will be attached.
     */
    static new(master: GObject.Object): DockLayout
    _init(config?: DockLayout.ConstructorProperties): void
}

export module DockMaster {

    // Signal callback interfaces

    /**
     * Signal callback interface for `layout-changed`
     */
    export interface LayoutChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gdl-3.Gdl.DockMaster

        defaultTitle?: string | null
        locked?: number | null
        switcherStyle?: SwitcherStyle | null
        tabPos?: Gtk.PositionType | null
        tabReorderable?: boolean | null
    }

}

export interface DockMaster {

    // Own properties of Gdl-3.Gdl.DockMaster

    defaultTitle: string
    locked: number
    switcherStyle: SwitcherStyle
    tabPos: Gtk.PositionType
    tabReorderable: boolean

    // Own fields of Gdl-3.Gdl.DockMaster

    object: GObject.Object
    priv: DockMasterPrivate

    // Owm methods of Gdl-3.Gdl.DockMaster

    /**
     * Add a new dock widget to the master.
     * @param object a #GdlDockObject
     */
    add(object: DockObject): void
    /**
     * Call `function` on each dock widget of the master.
     * @param function_ the function to call with each element's data
     */
    foreach(function_: GLib.Func): void
    /**
     * Call `function` on each top level dock widget of the master, including or not
     * the controller.
     * @param includeController %TRUE to include the controller
     * @param function_ the function to call with each element's data
     */
    foreachToplevel(includeController: boolean, function_: GLib.Func): void
    /**
     * Retrieves the #GdlDockObject acting as the controller.
     */
    getController(): DockObject
    /**
     * Return an unique translated dock name.
     */
    getDockName(): string
    /**
     * Looks for a #GdlDockObject named `nick_name`.
     * @param nickName the name of the dock widget.
     */
    getObject(nickName: string): DockObject | null
    /**
     * Remove one dock widget from the master.
     * @param object a #GdlDockObject
     */
    remove(object: DockObject): void
    /**
     * Set a new controller. The controller must be a top level #GdlDockObject.
     * @param newController a #GdlDockObject
     */
    setController(newController: DockObject): void

    // Own virtual methods of Gdl-3.Gdl.DockMaster

    layoutChanged(): void

    // Own signals of Gdl-3.Gdl.DockMaster

    connect(sigName: "layout-changed", callback: DockMaster.LayoutChangedSignalCallback): number
    on(sigName: "layout-changed", callback: DockMaster.LayoutChangedSignalCallback): number
    once(sigName: "layout-changed", callback: DockMaster.LayoutChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "layout-changed", ...args: any[]): void

    // Class property signals of Gdl-3.Gdl.DockMaster

    connect(sigName: "notify::default-title", callback: any): number
    on(sigName: "notify::default-title", callback: any): number
    once(sigName: "notify::default-title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-title", ...args: any[]): void
    connect(sigName: "notify::locked", callback: any): number
    on(sigName: "notify::locked", callback: any): number
    once(sigName: "notify::locked", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::locked", ...args: any[]): void
    connect(sigName: "notify::switcher-style", callback: any): number
    on(sigName: "notify::switcher-style", callback: any): number
    once(sigName: "notify::switcher-style", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::switcher-style", ...args: any[]): void
    connect(sigName: "notify::tab-pos", callback: any): number
    on(sigName: "notify::tab-pos", callback: any): number
    once(sigName: "notify::tab-pos", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tab-pos", ...args: any[]): void
    connect(sigName: "notify::tab-reorderable", callback: any): number
    on(sigName: "notify::tab-reorderable", callback: any): number
    once(sigName: "notify::tab-reorderable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tab-reorderable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DockMaster extends GObject.Object {

    // Own properties of Gdl-3.Gdl.DockMaster

    static name: string

    // Constructors of Gdl-3.Gdl.DockMaster

    constructor(config?: DockMaster.ConstructorProperties) 
    _init(config?: DockMaster.ConstructorProperties): void
}

export module DockNotebook {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, DockItem.ConstructorProperties {

        // Own constructor properties of Gdl-3.Gdl.DockNotebook

        page?: number | null
    }

}

export interface DockNotebook extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Gdl-3.Gdl.DockNotebook

    page: number

    // Conflicting properties

    name: any

    // Own fields of Gdl-3.Gdl.DockNotebook

    item: DockItem
    priv: DockNotebookPrivate

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
     * Retrieves the name of the object. This name is used to identify the object.
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
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
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
     * Set the name of the object used to identify it.
     * @param name a name for the object
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
     * Binds this dock item to a new dock master.
     * @param dock The #GdlDock widget to bind it to. Note that this widget must be a type of #GdlDock.
     */
    bind(dock: Gtk.Widget): void

    // Overloads of bind

    /**
     * Add a link between a #GdlDockObject and a master. It is normally not used
     * directly because it is automatically called when a new object is docked.
     * @param master A #GdlDockMaster
     */
    bind(master: GObject.Object): void
    /**
     * Add a link between a #GdlDockObject and a master. It is normally not used
     * directly because it is automatically called when a new object is docked.
     * @param master A #GdlDockMaster
     */
    bind(master: GObject.Object): void
    /**
     * Get the top level #GdlDock widget of `object` or %NULL if cannot be found.
     */
    getToplevel(): Dock | null

    // Overloads of getToplevel

    /**
     * This function returns the topmost widget in the container hierarchy
     * `widget` is a part of. If `widget` has no parent widgets, it will be
     * returned as the topmost widget. No reference will be added to the
     * returned widget; it should not be unreferenced.
     * 
     * Note the difference in behavior vs. gtk_widget_get_ancestor();
     * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
     * would return
     * %NULL if `widget` wasn’t inside a toplevel window, and if the
     * window was inside a #GtkWindow-derived widget which was in turn
     * inside the toplevel #GtkWindow. While the second case may
     * seem unlikely, it actually happens when a #GtkPlug is embedded
     * inside a #GtkSocket within the same application.
     * 
     * To reliably find the toplevel #GtkWindow, use
     * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
     * on the result. For instance, to get the title of a widget's toplevel
     * window, one might use:
     * 
     * ```c
     * static const char *
     * get_widget_toplevel_title (GtkWidget *widget)
     * {
     *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
     *   if (GTK_IS_WINDOW (toplevel))
     *     {
     *       return gtk_window_get_title (GTK_WINDOW (toplevel));
     *     }
     * 
     *   return NULL;
     * }
     * ```
     * 
     */
    getToplevel(): Gtk.Widget
    /**
     * This function returns the topmost widget in the container hierarchy
     * `widget` is a part of. If `widget` has no parent widgets, it will be
     * returned as the topmost widget. No reference will be added to the
     * returned widget; it should not be unreferenced.
     * 
     * Note the difference in behavior vs. gtk_widget_get_ancestor();
     * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
     * would return
     * %NULL if `widget` wasn’t inside a toplevel window, and if the
     * window was inside a #GtkWindow-derived widget which was in turn
     * inside the toplevel #GtkWindow. While the second case may
     * seem unlikely, it actually happens when a #GtkPlug is embedded
     * inside a #GtkSocket within the same application.
     * 
     * To reliably find the toplevel #GtkWindow, use
     * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
     * on the result. For instance, to get the title of a widget's toplevel
     * window, one might use:
     * 
     * ```c
     * static const char *
     * get_widget_toplevel_title (GtkWidget *widget)
     * {
     *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
     *   if (GTK_IS_WINDOW (toplevel))
     *     {
     *       return gtk_window_get_title (GTK_WINDOW (toplevel));
     *     }
     * 
     *   return NULL;
     * }
     * ```
     * 
     */
    getToplevel(): Gtk.Widget
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

    // Class property signals of Gdl-3.Gdl.DockNotebook

    connect(sigName: "notify::page", callback: any): number
    on(sigName: "notify::page", callback: any): number
    once(sigName: "notify::page", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::behavior", callback: any): number
    on(sigName: "notify::behavior", callback: any): number
    once(sigName: "notify::behavior", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::behavior", ...args: any[]): void
    connect(sigName: "notify::closed", callback: any): number
    on(sigName: "notify::closed", callback: any): number
    once(sigName: "notify::closed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::closed", ...args: any[]): void
    connect(sigName: "notify::iconified", callback: any): number
    on(sigName: "notify::iconified", callback: any): number
    once(sigName: "notify::iconified", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::iconified", ...args: any[]): void
    connect(sigName: "notify::locked", callback: any): number
    on(sigName: "notify::locked", callback: any): number
    once(sigName: "notify::locked", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::locked", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: "notify::preferred-height", callback: any): number
    on(sigName: "notify::preferred-height", callback: any): number
    once(sigName: "notify::preferred-height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::preferred-height", ...args: any[]): void
    connect(sigName: "notify::preferred-width", callback: any): number
    on(sigName: "notify::preferred-width", callback: any): number
    once(sigName: "notify::preferred-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::preferred-width", ...args: any[]): void
    connect(sigName: "notify::resize", callback: any): number
    on(sigName: "notify::resize", callback: any): number
    once(sigName: "notify::resize", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resize", ...args: any[]): void
    connect(sigName: "notify::long-name", callback: any): number
    on(sigName: "notify::long-name", callback: any): number
    once(sigName: "notify::long-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::long-name", ...args: any[]): void
    connect(sigName: "notify::master", callback: any): number
    on(sigName: "notify::master", callback: any): number
    once(sigName: "notify::master", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::master", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pixbuf-icon", callback: any): number
    on(sigName: "notify::pixbuf-icon", callback: any): number
    once(sigName: "notify::pixbuf-icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixbuf-icon", ...args: any[]): void
    connect(sigName: "notify::stock-id", callback: any): number
    on(sigName: "notify::stock-id", callback: any): number
    once(sigName: "notify::stock-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stock-id", ...args: any[]): void
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

export class DockNotebook extends DockItem {

    // Own properties of Gdl-3.Gdl.DockNotebook

    static name: string

    // Constructors of Gdl-3.Gdl.DockNotebook

    constructor(config?: DockNotebook.ConstructorProperties) 
    /**
     * Creates a new manual #GdlDockNotebook widget. This function is seldom useful as
     * such widget is normally created and destroyed automatically when needed by
     * the master.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new manual #GdlDockNotebook widget. This function is seldom useful as
     * such widget is normally created and destroyed automatically when needed by
     * the master.
     * @constructor 
     */
    static new(): DockNotebook

    // Overloads of new

    /**
     * Creates a new dock item widget.
     * @constructor 
     * @param name Unique name for identifying the dock object.
     * @param longName Human readable name for the dock object.
     * @param behavior General behavior for the dock item (i.e. whether it can            float, if it's locked, etc.), as specified by            #GdlDockItemBehavior flags.
     */
    static new(name: string, longName: string, behavior: DockItemBehavior): DockItem
    _init(config?: DockNotebook.ConstructorProperties): void
}

export module DockObject {

    // Signal callback interfaces

    /**
     * Signal callback interface for `detach`
     */
    export interface DetachSignalCallback {
        (recursive: boolean): void
    }

    /**
     * Signal callback interface for `dock`
     */
    export interface DockSignalCallback {
        (requestor: DockObject, position: DockPlacement, otherData: any | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Container.ConstructorProperties {

        // Own constructor properties of Gdl-3.Gdl.DockObject

        /**
         * A long descriptive name.
         */
        longName?: string | null
        /**
         * The master which manages all the objects in a dock ring
         */
        master?: DockMaster | null
        /**
         * The object name.  If the object is manual the name can be used
         * to recall the object from any other object in the ring
         */
        name?: string | null
        /**
         * A GdkPixbuf to use for the icon of the dock object.
         */
        pixbufIcon?: object | null
        /**
         * A stock id to use for the icon of the dock object.
         */
        stockId?: string | null
    }

}

export interface DockObject extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Gdl-3.Gdl.DockObject

    /**
     * A long descriptive name.
     */
    longName: string
    /**
     * The master which manages all the objects in a dock ring
     */
    master: DockMaster
    /**
     * The object name.  If the object is manual the name can be used
     * to recall the object from any other object in the ring
     */
    readonly name: any
    /**
     * A GdkPixbuf to use for the icon of the dock object.
     */
    pixbufIcon: object
    /**
     * A stock id to use for the icon of the dock object.
     */
    stockId: string

    // Own fields of Gdl-3.Gdl.DockObject

    container: Gtk.Container
    deprecatedFlags: DockObjectFlags
    deprecatedMaster: GObject.Object

    // Owm methods of Gdl-3.Gdl.DockObject

    /**
     * Add a link between a #GdlDockObject and a master. It is normally not used
     * directly because it is automatically called when a new object is docked.
     * @param master A #GdlDockMaster
     */
    bind(master: GObject.Object): void
    // Has conflict: childPlacement(child: DockObject, placement: DockPlacement | null): boolean
    // Has conflict: detach(recursive: boolean): void
    // Has conflict: dock(requestor: DockObject, position: DockPlacement, otherData: any | null): void
    // Has conflict: dockRequest(x: number, y: number, request: DockRequest): boolean
    /**
     * Temporarily freezes a dock object, any call to reduce on the object has no
     * immediate effect. If gdl_dock_object_freeze() has been called more than once,
     * gdl_dock_object_thaw() must be called an equal number of times.
     */
    freeze(): void
    /**
     * Retrieves the controller of the object.
     */
    getController(): DockObject
    /**
     * Retrieves the long name of the object. This name is an human readable string
     * which can be displayed in the user interface.
     */
    getLongName(): string
    /**
     * Retrieves the master of the object.
     */
    getMaster(): GObject.Object
    /**
     * Retrieves the name of the object. This name is used to identify the object.
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
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     */
    getName(): string
    /**
     * Returns a parent #GdlDockObject if it exists.
     */
    getParentObject(): DockObject | null
    /**
     * Retrieves a pixbuf used as the dock object icon.
     */
    getPixbuf(): GdkPixbuf.Pixbuf
    /**
     * Retrieves the a stock id used as the object icon.
     */
    getStockId(): string
    /**
     * Get the top level #GdlDock widget of `object` or %NULL if cannot be found.
     */
    getToplevel(): Dock | null

    // Overloads of getToplevel

    /**
     * This function returns the topmost widget in the container hierarchy
     * `widget` is a part of. If `widget` has no parent widgets, it will be
     * returned as the topmost widget. No reference will be added to the
     * returned widget; it should not be unreferenced.
     * 
     * Note the difference in behavior vs. gtk_widget_get_ancestor();
     * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
     * would return
     * %NULL if `widget` wasn’t inside a toplevel window, and if the
     * window was inside a #GtkWindow-derived widget which was in turn
     * inside the toplevel #GtkWindow. While the second case may
     * seem unlikely, it actually happens when a #GtkPlug is embedded
     * inside a #GtkSocket within the same application.
     * 
     * To reliably find the toplevel #GtkWindow, use
     * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
     * on the result. For instance, to get the title of a widget's toplevel
     * window, one might use:
     * 
     * ```c
     * static const char *
     * get_widget_toplevel_title (GtkWidget *widget)
     * {
     *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
     *   if (GTK_IS_WINDOW (toplevel))
     *     {
     *       return gtk_window_get_title (GTK_WINDOW (toplevel));
     *     }
     * 
     *   return NULL;
     * }
     * ```
     * 
     */
    getToplevel(): Gtk.Widget
    /**
     * Determine if an object is managed by the dock master, such object is
     * destroyed automatically when it is not needed anymore.
     */
    isAutomatic(): boolean
    /**
     * Check if the object is bound to a master.
     */
    isBound(): boolean
    /**
     * Checks whether a given #GdlDockObject is closed. It can be only hidden and
     * still in the widget hierarchy or detached.
     */
    isClosed(): boolean
    /**
     * Check if an object is a compound object, accepting children widget or not.
     */
    isCompound(): boolean
    /**
     * Determine if an object is frozen and is not removed immediately from the
     * widget hierarchy when it is reduced.
     */
    isFrozen(): boolean
    /**
     * Emits the #GdlDockMaster::layout-changed signal on the master of the object
     * if existing.
     */
    layoutChangedNotify(): void
    // Has conflict: present(child: DockObject | null): void
    // Has conflict: reduce(): void
    // Has conflict: reorder(child: DockObject, newPosition: DockPlacement, otherData: any | null): boolean
    /**
     * Set the long name of the object. This name is an human readable string
     * which can be displayed in the user interface.
     * @param name a name for the object
     */
    setLongName(name: string): void
    /**
     * A #GdlDockObject is managed by default by the dock master, use this function
     * to make it a manual object if you want to manage the destruction of the
     * object.
     */
    setManual(): void
    /**
     * Set the name of the object used to identify it.
     * @param name a name for the object
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
    /**
     * Set a icon for a dock object using a #GdkPixbuf.
     * @param icon a icon or %NULL
     */
    setPixbuf(icon: GdkPixbuf.Pixbuf | null): void
    /**
     * Set an icon for the dock object using a stock id.
     * @param stockId a stock id
     */
    setStockId(stockId: string): void
    /**
     * Thaws a dock object frozen with gdl_dock_object_freeze().
     * Any pending reduce calls are made, maybe leading to the destruction of
     * the object.
     */
    thaw(): void
    /**
     * This removes the link between an dock object and its master.
     */
    unbind(): void

    // Conflicting methods

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

    // Own virtual methods of Gdl-3.Gdl.DockObject

    /**
     * This function returns information about placement of a child dock
     * object inside another dock object.  The function returns %TRUE if
     * `child` is effectively a child of `object`.  `placement` should
     * normally be initially setup to %GDL_DOCK_NONE.  If it's set to some
     * other value, this function will not touch the stored value if the
     * specified placement is "compatible" with the actual placement of
     * the child.
     * 
     * `placement` can be %NULL, in which case the function simply tells if
     * `child` is attached to `object`.
     * @virtual 
     * @param child the child of the `object` we want the placement for
     * @param placement where to return the placement information
     */
    childPlacement(child: DockObject, placement: DockPlacement | null): boolean
    /**
     * Dissociate a dock object from its parent, including or not its children.
     * @virtual 
     * @param recursive %TRUE to detach children
     */
    detach(recursive: boolean): void
    /**
     * Dock a dock widget in `object` at the defined position.
     * @virtual 
     * @param requestor The widget to dock
     * @param position The position for the child
     * @param otherData Optional data giving additional information depending on the dock object.
     */
    dock(requestor: DockObject, position: DockPlacement, otherData: any | null): void
    /**
     * Dock a dock widget in `object` at the defined position.
     * @virtual 
     * @param x X coordinate
     * @param y Y coordinate
     * @param request A #GdlDockRequest with information about the docking position
     */
    dockRequest(x: number, y: number, request: DockRequest): boolean
    /**
     * Presents the GDL object to the user. By example, this will select the
     * corresponding page if the object is in a notebook. If `child` is missing,
     * only the `object` will be show.
     * @virtual 
     * @param child The child widget to present or %NULL
     */
    present(child: DockObject | null): void
    /**
     * Remove a compound object if it is not longer useful to hold the child. The
     * object has to be removed and the child reattached to the parent.
     * @virtual 
     */
    reduce(): void
    /**
     * Move the `child` widget at another place.
     * @virtual 
     * @param child The child widget to reorder
     * @param newPosition New position for the child
     * @param otherData Optional data giving additional information depending on the dock object.
     */
    reorder(child: DockObject, newPosition: DockPlacement, otherData: any | null): boolean

    // Own signals of Gdl-3.Gdl.DockObject

    connect(sigName: "detach", callback: DockObject.DetachSignalCallback): number
    on(sigName: "detach", callback: DockObject.DetachSignalCallback): number
    once(sigName: "detach", callback: DockObject.DetachSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "detach", ...args: any[]): void
    connect(sigName: "dock", callback: DockObject.DockSignalCallback): number
    on(sigName: "dock", callback: DockObject.DockSignalCallback): number
    once(sigName: "dock", callback: DockObject.DockSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "dock", position: DockPlacement, otherData: any | null, ...args: any[]): void

    // Class property signals of Gdl-3.Gdl.DockObject

    connect(sigName: "notify::long-name", callback: any): number
    on(sigName: "notify::long-name", callback: any): number
    once(sigName: "notify::long-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::long-name", ...args: any[]): void
    connect(sigName: "notify::master", callback: any): number
    on(sigName: "notify::master", callback: any): number
    once(sigName: "notify::master", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::master", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pixbuf-icon", callback: any): number
    on(sigName: "notify::pixbuf-icon", callback: any): number
    once(sigName: "notify::pixbuf-icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixbuf-icon", ...args: any[]): void
    connect(sigName: "notify::stock-id", callback: any): number
    on(sigName: "notify::stock-id", callback: any): number
    once(sigName: "notify::stock-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stock-id", ...args: any[]): void
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

export class DockObject extends Gtk.Container {

    // Own properties of Gdl-3.Gdl.DockObject

    static name: string

    // Constructors of Gdl-3.Gdl.DockObject

    constructor(config?: DockObject.ConstructorProperties) 
    _init(config?: DockObject.ConstructorProperties): void
    /**
     * Finds the nickname for a given type
     * @param type The type for which to find the nickname
     */
    static nickFromType(type: GObject.GType): string
    /**
     * Assigns an object type to a given nickname.  If the nickname already exists,
     * then it reassigns it to a new object type.
     * @param nick The nickname for the object type
     * @param type The object type
     */
    static setTypeForNick(nick: string, type: GObject.GType): GObject.GType
    /**
     * Finds the object type assigned to a given nickname.
     * @param nick The nickname for the object type
     */
    static typeFromNick(nick: string): GObject.GType
}

export module DockPaned {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, DockItem.ConstructorProperties {

        // Own constructor properties of Gdl-3.Gdl.DockPaned

        position?: number | null
    }

}

export interface DockPaned extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Gdl-3.Gdl.DockPaned

    position: number

    // Conflicting properties

    name: any

    // Own fields of Gdl-3.Gdl.DockPaned

    dockItem: DockItem
    priv: DockPanedPrivate

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
     * Retrieves the name of the object. This name is used to identify the object.
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
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
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
     * Set the name of the object used to identify it.
     * @param name a name for the object
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
     * Binds this dock item to a new dock master.
     * @param dock The #GdlDock widget to bind it to. Note that this widget must be a type of #GdlDock.
     */
    bind(dock: Gtk.Widget): void

    // Overloads of bind

    /**
     * Add a link between a #GdlDockObject and a master. It is normally not used
     * directly because it is automatically called when a new object is docked.
     * @param master A #GdlDockMaster
     */
    bind(master: GObject.Object): void
    /**
     * Add a link between a #GdlDockObject and a master. It is normally not used
     * directly because it is automatically called when a new object is docked.
     * @param master A #GdlDockMaster
     */
    bind(master: GObject.Object): void
    /**
     * Get the top level #GdlDock widget of `object` or %NULL if cannot be found.
     */
    getToplevel(): Dock | null

    // Overloads of getToplevel

    /**
     * This function returns the topmost widget in the container hierarchy
     * `widget` is a part of. If `widget` has no parent widgets, it will be
     * returned as the topmost widget. No reference will be added to the
     * returned widget; it should not be unreferenced.
     * 
     * Note the difference in behavior vs. gtk_widget_get_ancestor();
     * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
     * would return
     * %NULL if `widget` wasn’t inside a toplevel window, and if the
     * window was inside a #GtkWindow-derived widget which was in turn
     * inside the toplevel #GtkWindow. While the second case may
     * seem unlikely, it actually happens when a #GtkPlug is embedded
     * inside a #GtkSocket within the same application.
     * 
     * To reliably find the toplevel #GtkWindow, use
     * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
     * on the result. For instance, to get the title of a widget's toplevel
     * window, one might use:
     * 
     * ```c
     * static const char *
     * get_widget_toplevel_title (GtkWidget *widget)
     * {
     *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
     *   if (GTK_IS_WINDOW (toplevel))
     *     {
     *       return gtk_window_get_title (GTK_WINDOW (toplevel));
     *     }
     * 
     *   return NULL;
     * }
     * ```
     * 
     */
    getToplevel(): Gtk.Widget
    /**
     * This function returns the topmost widget in the container hierarchy
     * `widget` is a part of. If `widget` has no parent widgets, it will be
     * returned as the topmost widget. No reference will be added to the
     * returned widget; it should not be unreferenced.
     * 
     * Note the difference in behavior vs. gtk_widget_get_ancestor();
     * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
     * would return
     * %NULL if `widget` wasn’t inside a toplevel window, and if the
     * window was inside a #GtkWindow-derived widget which was in turn
     * inside the toplevel #GtkWindow. While the second case may
     * seem unlikely, it actually happens when a #GtkPlug is embedded
     * inside a #GtkSocket within the same application.
     * 
     * To reliably find the toplevel #GtkWindow, use
     * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
     * on the result. For instance, to get the title of a widget's toplevel
     * window, one might use:
     * 
     * ```c
     * static const char *
     * get_widget_toplevel_title (GtkWidget *widget)
     * {
     *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
     *   if (GTK_IS_WINDOW (toplevel))
     *     {
     *       return gtk_window_get_title (GTK_WINDOW (toplevel));
     *     }
     * 
     *   return NULL;
     * }
     * ```
     * 
     */
    getToplevel(): Gtk.Widget
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

    // Class property signals of Gdl-3.Gdl.DockPaned

    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::behavior", callback: any): number
    on(sigName: "notify::behavior", callback: any): number
    once(sigName: "notify::behavior", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::behavior", ...args: any[]): void
    connect(sigName: "notify::closed", callback: any): number
    on(sigName: "notify::closed", callback: any): number
    once(sigName: "notify::closed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::closed", ...args: any[]): void
    connect(sigName: "notify::iconified", callback: any): number
    on(sigName: "notify::iconified", callback: any): number
    once(sigName: "notify::iconified", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::iconified", ...args: any[]): void
    connect(sigName: "notify::locked", callback: any): number
    on(sigName: "notify::locked", callback: any): number
    once(sigName: "notify::locked", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::locked", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: "notify::preferred-height", callback: any): number
    on(sigName: "notify::preferred-height", callback: any): number
    once(sigName: "notify::preferred-height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::preferred-height", ...args: any[]): void
    connect(sigName: "notify::preferred-width", callback: any): number
    on(sigName: "notify::preferred-width", callback: any): number
    once(sigName: "notify::preferred-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::preferred-width", ...args: any[]): void
    connect(sigName: "notify::resize", callback: any): number
    on(sigName: "notify::resize", callback: any): number
    once(sigName: "notify::resize", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resize", ...args: any[]): void
    connect(sigName: "notify::long-name", callback: any): number
    on(sigName: "notify::long-name", callback: any): number
    once(sigName: "notify::long-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::long-name", ...args: any[]): void
    connect(sigName: "notify::master", callback: any): number
    on(sigName: "notify::master", callback: any): number
    once(sigName: "notify::master", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::master", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pixbuf-icon", callback: any): number
    on(sigName: "notify::pixbuf-icon", callback: any): number
    once(sigName: "notify::pixbuf-icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixbuf-icon", ...args: any[]): void
    connect(sigName: "notify::stock-id", callback: any): number
    on(sigName: "notify::stock-id", callback: any): number
    once(sigName: "notify::stock-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stock-id", ...args: any[]): void
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

export class DockPaned extends DockItem {

    // Own properties of Gdl-3.Gdl.DockPaned

    static name: string

    // Constructors of Gdl-3.Gdl.DockPaned

    constructor(config?: DockPaned.ConstructorProperties) 
    /**
     * Creates a new manual #GdlDockPaned widget. This function is seldom useful as
     * such widget is normally created and destroyed automatically when needed by
     * the master.
     * @constructor 
     * @param orientation the pane's orientation.
     */
    constructor(orientation: Gtk.Orientation) 
    /**
     * Creates a new manual #GdlDockPaned widget. This function is seldom useful as
     * such widget is normally created and destroyed automatically when needed by
     * the master.
     * @constructor 
     * @param orientation the pane's orientation.
     */
    static new(orientation: Gtk.Orientation): DockPaned

    // Overloads of new

    /**
     * Creates a new dock item widget.
     * @constructor 
     * @param name Unique name for identifying the dock object.
     * @param longName Human readable name for the dock object.
     * @param behavior General behavior for the dock item (i.e. whether it can            float, if it's locked, etc.), as specified by            #GdlDockItemBehavior flags.
     */
    static new(name: string, longName: string, behavior: DockItemBehavior): DockItem
    _init(config?: DockPaned.ConstructorProperties): void
}

export interface DockParam {
}

export class DockParam {

    // Own properties of Gdl-3.Gdl.DockParam

    static name: string
}

export module DockPlaceholder {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, DockObject.ConstructorProperties {

        // Own constructor properties of Gdl-3.Gdl.DockPlaceholder

        floating?: boolean | null
        floatx?: number | null
        floaty?: number | null
        height?: number | null
        host?: DockObject | null
        nextPlacement?: DockPlacement | null
        sticky?: boolean | null
        width?: number | null
    }

}

export interface DockPlaceholder extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Gdl-3.Gdl.DockPlaceholder

    readonly floating: boolean
    readonly floatx: number
    readonly floaty: number
    height: number
    host: DockObject
    nextPlacement: DockPlacement
    readonly sticky: boolean
    width: number

    // Conflicting properties

    name: any

    // Own fields of Gdl-3.Gdl.DockPlaceholder

    object: DockObject
    priv: DockPlaceholderPrivate

    // Owm methods of Gdl-3.Gdl.DockPlaceholder

    /**
     * Move the placeholder to the position of `object`.
     * @param object A new #GdlDockObject
     */
    attach(object: DockObject): void

    // Conflicting methods

    /**
     * Retrieves the name of the object. This name is used to identify the object.
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
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
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
     * Set the name of the object used to identify it.
     * @param name a name for the object
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
     * Get the top level #GdlDock widget of `object` or %NULL if cannot be found.
     */
    getToplevel(): Dock | null

    // Overloads of getToplevel

    /**
     * This function returns the topmost widget in the container hierarchy
     * `widget` is a part of. If `widget` has no parent widgets, it will be
     * returned as the topmost widget. No reference will be added to the
     * returned widget; it should not be unreferenced.
     * 
     * Note the difference in behavior vs. gtk_widget_get_ancestor();
     * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
     * would return
     * %NULL if `widget` wasn’t inside a toplevel window, and if the
     * window was inside a #GtkWindow-derived widget which was in turn
     * inside the toplevel #GtkWindow. While the second case may
     * seem unlikely, it actually happens when a #GtkPlug is embedded
     * inside a #GtkSocket within the same application.
     * 
     * To reliably find the toplevel #GtkWindow, use
     * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
     * on the result. For instance, to get the title of a widget's toplevel
     * window, one might use:
     * 
     * ```c
     * static const char *
     * get_widget_toplevel_title (GtkWidget *widget)
     * {
     *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
     *   if (GTK_IS_WINDOW (toplevel))
     *     {
     *       return gtk_window_get_title (GTK_WINDOW (toplevel));
     *     }
     * 
     *   return NULL;
     * }
     * ```
     * 
     */
    getToplevel(): Gtk.Widget
    /**
     * This function returns the topmost widget in the container hierarchy
     * `widget` is a part of. If `widget` has no parent widgets, it will be
     * returned as the topmost widget. No reference will be added to the
     * returned widget; it should not be unreferenced.
     * 
     * Note the difference in behavior vs. gtk_widget_get_ancestor();
     * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
     * would return
     * %NULL if `widget` wasn’t inside a toplevel window, and if the
     * window was inside a #GtkWindow-derived widget which was in turn
     * inside the toplevel #GtkWindow. While the second case may
     * seem unlikely, it actually happens when a #GtkPlug is embedded
     * inside a #GtkSocket within the same application.
     * 
     * To reliably find the toplevel #GtkWindow, use
     * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
     * on the result. For instance, to get the title of a widget's toplevel
     * window, one might use:
     * 
     * ```c
     * static const char *
     * get_widget_toplevel_title (GtkWidget *widget)
     * {
     *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
     *   if (GTK_IS_WINDOW (toplevel))
     *     {
     *       return gtk_window_get_title (GTK_WINDOW (toplevel));
     *     }
     * 
     *   return NULL;
     * }
     * ```
     * 
     */
    getToplevel(): Gtk.Widget
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

    // Class property signals of Gdl-3.Gdl.DockPlaceholder

    connect(sigName: "notify::floating", callback: any): number
    on(sigName: "notify::floating", callback: any): number
    once(sigName: "notify::floating", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::floating", ...args: any[]): void
    connect(sigName: "notify::floatx", callback: any): number
    on(sigName: "notify::floatx", callback: any): number
    once(sigName: "notify::floatx", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::floatx", ...args: any[]): void
    connect(sigName: "notify::floaty", callback: any): number
    on(sigName: "notify::floaty", callback: any): number
    once(sigName: "notify::floaty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::floaty", ...args: any[]): void
    connect(sigName: "notify::height", callback: any): number
    on(sigName: "notify::height", callback: any): number
    once(sigName: "notify::height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::host", callback: any): number
    on(sigName: "notify::host", callback: any): number
    once(sigName: "notify::host", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::host", ...args: any[]): void
    connect(sigName: "notify::next-placement", callback: any): number
    on(sigName: "notify::next-placement", callback: any): number
    once(sigName: "notify::next-placement", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-placement", ...args: any[]): void
    connect(sigName: "notify::sticky", callback: any): number
    on(sigName: "notify::sticky", callback: any): number
    once(sigName: "notify::sticky", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sticky", ...args: any[]): void
    connect(sigName: "notify::width", callback: any): number
    on(sigName: "notify::width", callback: any): number
    once(sigName: "notify::width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::long-name", callback: any): number
    on(sigName: "notify::long-name", callback: any): number
    once(sigName: "notify::long-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::long-name", ...args: any[]): void
    connect(sigName: "notify::master", callback: any): number
    on(sigName: "notify::master", callback: any): number
    once(sigName: "notify::master", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::master", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pixbuf-icon", callback: any): number
    on(sigName: "notify::pixbuf-icon", callback: any): number
    once(sigName: "notify::pixbuf-icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixbuf-icon", ...args: any[]): void
    connect(sigName: "notify::stock-id", callback: any): number
    on(sigName: "notify::stock-id", callback: any): number
    once(sigName: "notify::stock-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stock-id", ...args: any[]): void
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

export class DockPlaceholder extends DockObject {

    // Own properties of Gdl-3.Gdl.DockPlaceholder

    static name: string

    // Constructors of Gdl-3.Gdl.DockPlaceholder

    constructor(config?: DockPlaceholder.ConstructorProperties) 
    /**
     * Creates a new dock placeholder at `object` place. This is a kind of marker
     * allowing you to dock new items later at this place. It is not completely
     * working though.
     * @constructor 
     * @param name Unique name for identifying the dock object.
     * @param object Corresponding #GdlDockObject
     * @param position The position to dock a new item in `object`
     * @param sticky %TRUE if the placeholder move with the `object`
     */
    constructor(name: string, object: DockObject, position: DockPlacement, sticky: boolean) 
    /**
     * Creates a new dock placeholder at `object` place. This is a kind of marker
     * allowing you to dock new items later at this place. It is not completely
     * working though.
     * @constructor 
     * @param name Unique name for identifying the dock object.
     * @param object Corresponding #GdlDockObject
     * @param position The position to dock a new item in `object`
     * @param sticky %TRUE if the placeholder move with the `object`
     */
    static new(name: string, object: DockObject, position: DockPlacement, sticky: boolean): DockPlaceholder
    _init(config?: DockPlaceholder.ConstructorProperties): void
}

export module DockTablabel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `button-pressed-handle`
     */
    export interface ButtonPressedHandleSignalCallback {
        (event: Gdk.Event): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Gdl-3.Gdl.DockTablabel

        item?: DockItem | null
    }

}

export interface DockTablabel extends Atk.ImplementorIface, Gtk.Buildable {

    // Own fields of Gdl-3.Gdl.DockTablabel

    parent: Gtk.Bin & Gtk.Container
    dragHandleSize: number
    item: Gtk.Widget
    eventWindow: Gdk.Window
    active: boolean
    dragStartEvent: Gdk.EventButton
    preDrag: boolean

    // Owm methods of Gdl-3.Gdl.DockTablabel

    /**
     * Set the widget in "activated" state.
     */
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
     * Set the widget in "deactivated" state.
     */
    deactivate(): void

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

    // Own virtual methods of Gdl-3.Gdl.DockTablabel

    buttonPressedHandle(event: Gdk.EventButton): void

    // Own signals of Gdl-3.Gdl.DockTablabel

    connect(sigName: "button-pressed-handle", callback: DockTablabel.ButtonPressedHandleSignalCallback): number
    on(sigName: "button-pressed-handle", callback: DockTablabel.ButtonPressedHandleSignalCallback): number
    once(sigName: "button-pressed-handle", callback: DockTablabel.ButtonPressedHandleSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "button-pressed-handle", ...args: any[]): void

    // Class property signals of Gdl-3.Gdl.DockTablabel

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

export class DockTablabel extends Gtk.Bin {

    // Own properties of Gdl-3.Gdl.DockTablabel

    static name: string

    // Constructors of Gdl-3.Gdl.DockTablabel

    constructor(config?: DockTablabel.ConstructorProperties) 
    /**
     * Creates a new GDL tab label widget.
     * @constructor 
     * @param item The dock item that associated with this label widget.
     */
    constructor(item: DockItem) 
    /**
     * Creates a new GDL tab label widget.
     * @constructor 
     * @param item The dock item that associated with this label widget.
     */
    static new(item: DockItem): DockTablabel
    _init(config?: DockTablabel.ConstructorProperties): void
}

export module PreviewWindow {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Window.ConstructorProperties {
    }

}

export interface PreviewWindow extends Atk.ImplementorIface, Gtk.Buildable {

    // Own fields of Gdl-3.Gdl.PreviewWindow

    parentInstance: any

    // Owm methods of Gdl-3.Gdl.PreviewWindow

    /**
     * Update the size and position of the preview window. This function is
     * called on drag_motion event to update the representation of the docking site
     * in real time.
     * @param rect the new position and size of the window
     */
    update(rect: Gdk.Rectangle): void

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

    // Class property signals of Gdl-3.Gdl.PreviewWindow

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The GdlDockLayout struct contains only private fields
 * and should not be directly accessed.
 * @class 
 */
export class PreviewWindow extends Gtk.Window {

    // Own properties of Gdl-3.Gdl.PreviewWindow

    static name: string

    // Constructors of Gdl-3.Gdl.PreviewWindow

    constructor(config?: PreviewWindow.ConstructorProperties) 
    /**
     * Creates a new #GdlPreviewWindow
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GdlPreviewWindow
     * @constructor 
     */
    static new(): PreviewWindow

    // Overloads of new

    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: PreviewWindow.ConstructorProperties): void
}

export module Switcher {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Notebook.ConstructorProperties {

        // Own constructor properties of Gdl-3.Gdl.Switcher

        switcherStyle?: SwitcherStyle | null
        tabPos?: Gtk.PositionType | null
        tabReorderable?: boolean | null
    }

}

export interface Switcher extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Gdl-3.Gdl.Switcher

    switcherStyle: SwitcherStyle
    tabPos: Gtk.PositionType
    tabReorderable: boolean

    // Own fields of Gdl-3.Gdl.Switcher

    parent: Gtk.Notebook & Gtk.Container
    priv: SwitcherPrivate

    // Owm methods of Gdl-3.Gdl.Switcher

    /**
     * Adds a page to a #GdlSwitcher.  A button is created in the switcher, with its
     * icon taken preferentially from the `stock_id` parameter.  If this parameter is
     * %NULL, then the `pixbuf_icon` parameter is used.  Failing that, the
     * %GTK_STOCK_NEW stock icon is used.  The text label for the button is specified
     * using the `label` parameter.  If it is %NULL then a default incrementally
     * numbered label is used instead.
     * @param page The page to add to the switcher
     * @param tabWidget The  to add to the switcher
     * @param label The label text for the button
     * @param tooltips The tooltip for the button
     * @param stockId The stock ID for the button icon
     * @param pixbufIcon The pixbuf to use for the button icon
     * @param position The position at which to create the page
     */
    insertPage(page: Gtk.Widget, tabWidget: Gtk.Widget, label: string, tooltips: string, stockId: string, pixbufIcon: GdkPixbuf.Pixbuf, position: number): number

    // Overloads of insertPage

    insertPage(child: Gtk.Widget, tabLabel: Gtk.Widget, menuLabel: Gtk.Widget, position: number): number

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

    // Class property signals of Gdl-3.Gdl.Switcher

    connect(sigName: "notify::switcher-style", callback: any): number
    on(sigName: "notify::switcher-style", callback: any): number
    once(sigName: "notify::switcher-style", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::switcher-style", ...args: any[]): void
    connect(sigName: "notify::tab-pos", callback: any): number
    on(sigName: "notify::tab-pos", callback: any): number
    once(sigName: "notify::tab-pos", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tab-pos", ...args: any[]): void
    connect(sigName: "notify::tab-reorderable", callback: any): number
    on(sigName: "notify::tab-reorderable", callback: any): number
    once(sigName: "notify::tab-reorderable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tab-reorderable", ...args: any[]): void
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

export class Switcher extends Gtk.Notebook {

    // Own properties of Gdl-3.Gdl.Switcher

    static name: string

    // Constructors of Gdl-3.Gdl.Switcher

    constructor(config?: Switcher.ConstructorProperties) 
    /**
     * Creates a new notebook widget with no pages.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new notebook widget with no pages.
     * @constructor 
     */
    static new(): Switcher
    _init(config?: Switcher.ConstructorProperties): void
}

export interface DockBarClass {

    // Own fields of Gdl-3.Gdl.DockBarClass

    parentClass: Gtk.BoxClass
}

export abstract class DockBarClass {

    // Own properties of Gdl-3.Gdl.DockBarClass

    static name: string
}

export interface DockBarPrivate {
}

export class DockBarPrivate {

    // Own properties of Gdl-3.Gdl.DockBarPrivate

    static name: string
}

export interface DockClass {

    // Own fields of Gdl-3.Gdl.DockClass

    layoutChanged: (dock: Dock) => void
}

export abstract class DockClass {

    // Own properties of Gdl-3.Gdl.DockClass

    static name: string
}

export interface DockItemButtonImageClass {

    // Own fields of Gdl-3.Gdl.DockItemButtonImageClass

    parentClass: Gtk.WidgetClass
}

export abstract class DockItemButtonImageClass {

    // Own properties of Gdl-3.Gdl.DockItemButtonImageClass

    static name: string
}

export interface DockItemClass {

    // Own fields of Gdl-3.Gdl.DockItemClass

    parentClass: DockObjectClass
    priv: DockItemClassPrivate
    setOrientation: (item: DockItem, orientation: Gtk.Orientation) => void
    dockDragBegin: (item: DockItem) => void
    dockDragMotion: (item: DockItem, device: Gdk.Device, x: number, y: number) => void
    dockDragEnd: (item: DockItem, cancelled: boolean) => void
    moveFocusChild: (item: DockItem, direction: Gtk.DirectionType) => void
}

export abstract class DockItemClass {

    // Own properties of Gdl-3.Gdl.DockItemClass

    static name: string

    // Owm static methods of Gdl-3.Gdl.DockItemClass

    /**
     * Define in the corresponding kind of dock item has a grip. Even if an item
     * has a grip it can be hidden.
     * @param hasGrip %TRUE is the dock item has a grip
     */
    static setHasGrip(item_class: DockItem | Function | GObject.GType, hasGrip: boolean): void
}

export interface DockItemClassPrivate {
}

export class DockItemClassPrivate {

    // Own properties of Gdl-3.Gdl.DockItemClassPrivate

    static name: string
}

export interface DockItemGripClass {

    // Own fields of Gdl-3.Gdl.DockItemGripClass

    parentClass: Gtk.ContainerClass
}

export abstract class DockItemGripClass {

    // Own properties of Gdl-3.Gdl.DockItemGripClass

    static name: string
}

export interface DockItemGripPrivate {
}

export class DockItemGripPrivate {

    // Own properties of Gdl-3.Gdl.DockItemGripPrivate

    static name: string
}

export interface DockItemPrivate {
}

export class DockItemPrivate {

    // Own properties of Gdl-3.Gdl.DockItemPrivate

    static name: string
}

export interface DockLayoutClass {

    // Own fields of Gdl-3.Gdl.DockLayoutClass

    gObjectClass: GObject.ObjectClass
}

export abstract class DockLayoutClass {

    // Own properties of Gdl-3.Gdl.DockLayoutClass

    static name: string
}

export interface DockLayoutPrivate {
}

export class DockLayoutPrivate {

    // Own properties of Gdl-3.Gdl.DockLayoutPrivate

    static name: string
}

export interface DockMasterClass {

    // Own fields of Gdl-3.Gdl.DockMasterClass

    parentClass: GObject.ObjectClass
    layoutChanged: (master: DockMaster) => void
}

export abstract class DockMasterClass {

    // Own properties of Gdl-3.Gdl.DockMasterClass

    static name: string
}

export interface DockMasterPrivate {
}

export class DockMasterPrivate {

    // Own properties of Gdl-3.Gdl.DockMasterPrivate

    static name: string
}

export interface DockNotebookClass {

    // Own fields of Gdl-3.Gdl.DockNotebookClass

    parentClass: DockItemClass
    priv: DockNotebookClassPrivate
}

export abstract class DockNotebookClass {

    // Own properties of Gdl-3.Gdl.DockNotebookClass

    static name: string
}

export interface DockNotebookClassPrivate {
}

export class DockNotebookClassPrivate {

    // Own properties of Gdl-3.Gdl.DockNotebookClassPrivate

    static name: string
}

export interface DockNotebookPrivate {
}

export class DockNotebookPrivate {

    // Own properties of Gdl-3.Gdl.DockNotebookPrivate

    static name: string
}

export interface DockObjectClass {

    // Own fields of Gdl-3.Gdl.DockObjectClass

    parentClass: Gtk.ContainerClass
    priv: DockObjectClassPrivate
    detach: (object: DockObject, recursive: boolean) => void
    reduce: (object: DockObject) => void
    dockRequest: (object: DockObject, x: number, y: number, request: DockRequest) => boolean
    dock: (object: DockObject, requestor: DockObject, position: DockPlacement, otherData: any | null) => void
    reorder: (object: DockObject, child: DockObject, newPosition: DockPlacement, otherData: any | null) => boolean
    present: (object: DockObject, child: DockObject | null) => void
    childPlacement: (object: DockObject, child: DockObject, placement: DockPlacement | null) => boolean

    // Owm methods of Gdl-3.Gdl.DockObjectClass

    /**
     * Define in the corresponding kind of dock object can contains children.
     * @param isCompound %TRUE is the dock object contains other objects
     */
    setIsCompound(object_class: DockObject | Function | GObject.GType, isCompound: boolean): void
}

export abstract class DockObjectClass {

    // Own properties of Gdl-3.Gdl.DockObjectClass

    static name: string
}

export interface DockObjectClassPrivate {
}

export class DockObjectClassPrivate {

    // Own properties of Gdl-3.Gdl.DockObjectClassPrivate

    static name: string
}

export interface DockObjectPrivate {
}

export class DockObjectPrivate {

    // Own properties of Gdl-3.Gdl.DockObjectPrivate

    static name: string
}

export interface DockPanedClass {

    // Own fields of Gdl-3.Gdl.DockPanedClass

    parentClass: DockItemClass
}

export abstract class DockPanedClass {

    // Own properties of Gdl-3.Gdl.DockPanedClass

    static name: string
}

export interface DockPanedPrivate {
}

export class DockPanedPrivate {

    // Own properties of Gdl-3.Gdl.DockPanedPrivate

    static name: string
}

export interface DockPlaceholderClass {

    // Own fields of Gdl-3.Gdl.DockPlaceholderClass

    parentClass: DockObjectClass
}

export abstract class DockPlaceholderClass {

    // Own properties of Gdl-3.Gdl.DockPlaceholderClass

    static name: string
}

export interface DockPlaceholderPrivate {
}

export class DockPlaceholderPrivate {

    // Own properties of Gdl-3.Gdl.DockPlaceholderPrivate

    static name: string
}

export interface DockPrivate {
}

export class DockPrivate {

    // Own properties of Gdl-3.Gdl.DockPrivate

    static name: string
}

export interface DockRequest {

    // Own fields of Gdl-3.Gdl.DockRequest

    /**
     * A #GdlDockObject to dock
     * @field 
     */
    applicant: DockObject
    /**
     * The #GdlDockObject target
     * @field 
     */
    target: DockObject
    /**
     * how to dock `applicant` in `target`
     * @field 
     */
    position: DockPlacement
    /**
     * Precise position
     * @field 
     */
    rect: cairo.RectangleInt
    /**
     * Additional information
     * @field 
     */
    extra: any
}

/**
 * Full docking information.
 * @record 
 */
export class DockRequest {

    // Own properties of Gdl-3.Gdl.DockRequest

    static name: string
}

export interface DockTablabelClass {

    // Own fields of Gdl-3.Gdl.DockTablabelClass

    parentClass: Gtk.BinClass
    buttonPressedHandle: (tablabel: DockTablabel, event: Gdk.EventButton) => void
}

export abstract class DockTablabelClass {

    // Own properties of Gdl-3.Gdl.DockTablabelClass

    static name: string
}

export interface PreviewWindowClass {

    // Own fields of Gdl-3.Gdl.PreviewWindowClass

    parentClass: Gtk.WindowClass
}

export abstract class PreviewWindowClass {

    // Own properties of Gdl-3.Gdl.PreviewWindowClass

    static name: string
}

export interface SwitcherClass {

    // Own fields of Gdl-3.Gdl.SwitcherClass

    parentClass: Gtk.NotebookClass
    priv: SwitcherClassPrivate
}

export abstract class SwitcherClass {

    // Own properties of Gdl-3.Gdl.SwitcherClass

    static name: string
}

export interface SwitcherClassPrivate {
}

export class SwitcherClassPrivate {

    // Own properties of Gdl-3.Gdl.SwitcherClassPrivate

    static name: string
}

export interface SwitcherPrivate {
}

export class SwitcherPrivate {

    // Own properties of Gdl-3.Gdl.SwitcherPrivate

    static name: string
}
