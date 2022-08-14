
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GtkClutter-1.0
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
import type * as Clutter from './Clutter-1.0.js';
import type * as Json from './Json-1.0.js';
import type * as GL from './GL-1.0.js';
import type * as CoglPango from './CoglPango-1.0.js';
import type * as PangoCairo from './PangoCairo-1.0.js';
import type * as Cogl from './Cogl-1.0.js';

/**
 * Error enumeration for #GtkClutterTexture
 */
export enum TextureError {
    /**
     * Invalid stock id
     */
    TEXTURE_ERROR_INVALID_STOCK_ID,
}
/**
 * This function should be called instead of clutter_init() and
 * gtk_init().
 * @param argv pointer to the   arguments vector, or %NULL
 */
export function init(argv: string[] | null): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
/**
 * This function should be called instead of clutter_init() and
 * gtk_init_with_args().
 * @param argv a pointer to the array   of command line arguments, or %NULL
 * @param parameterString a string which is displayed in    the first line of <option>--help</option> output, after    <literal><replaceable>programname</replaceable> [OPTION...]</literal>
 * @param entries a    %NULL-terminated array of #GOptionEntry<!-- -->s describing the    options of your program
 * @param translationDomain a translation domain to use for    translating the <option>--help</option> output for the options    in `entries` with gettext(), or %NULL
 */
export function initWithArgs(argv: string[] | null, parameterString: string | null, entries: GLib.OptionEntry[] | null, translationDomain: string | null): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
export module Actor {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Clutter.Actor.ConstructorProperties {

        // Own constructor properties of GtkClutter-1.0.GtkClutter.Actor

        /**
         * The #GtkWidget to be embedded into the #GtkClutterActor
         */
        contents?: Gtk.Widget | null
    }

}

export interface Actor extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of GtkClutter-1.0.GtkClutter.Actor

    /**
     * The #GtkWidget to be embedded into the #GtkClutterActor
     */
    contents: Gtk.Widget

    // Owm methods of GtkClutter-1.0.GtkClutter.Actor

    /**
     * Retrieves the child of the #GtkBin used to hold the contents of `actor`.
     * 
     * This convenience function is the logical equivalent of:
     * 
     * |[
     * GtkWidget *bin;
     * 
     * bin = gtk_clutter_actor_get_widget (GTK_CLUTTER_ACTOR (actor));
     * return gtk_bin_get_child (GTK_BIN (bin));
     * ```
     * 
     */
    getContents(): Gtk.Widget
    /**
     * Retrieves the #GtkBin used to hold the #GtkClutterActor:contents widget
     */
    getWidget(): Gtk.Widget

    // Conflicting methods

    /**
     * Puts `self` below `above`.
     * 
     * Both actors must have the same parent, and the parent must implement
     * the #ClutterContainer interface.
     * 
     * This function calls clutter_container_lower_child() internally.
     * @param above A #ClutterActor to lower below
     */
    lower(above: Clutter.Actor | null): void

    // Overloads of lower

    /**
     * Lowers `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.lower() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_below_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
     */
    lower(actor: Clutter.Actor, sibling: Clutter.Actor | null): void
    /**
     * Lowers `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.lower() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_below_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
     */
    lower(actor: Clutter.Actor, sibling: Clutter.Actor | null): void
    /**
     * Puts `self` above `below`.
     * 
     * Both actors must have the same parent, and the parent must implement
     * the #ClutterContainer interface
     * 
     * This function calls clutter_container_raise_child() internally.
     * @param below A #ClutterActor to raise above.
     */
    raise(below: Clutter.Actor | null): void

    // Overloads of raise

    /**
     * Raises `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.raise() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_above_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to raise to, or %NULL to raise   to the top
     */
    raise(actor: Clutter.Actor, sibling: Clutter.Actor | null): void
    /**
     * Raises `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.raise() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_above_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to raise to, or %NULL to raise   to the top
     */
    raise(actor: Clutter.Actor, sibling: Clutter.Actor | null): void

    // Class property signals of GtkClutter-1.0.GtkClutter.Actor

    connect(sigName: "notify::contents", callback: any): number
    on(sigName: "notify::contents", callback: any): number
    once(sigName: "notify::contents", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::contents", ...args: any[]): void
    connect(sigName: "notify::actions", callback: any): number
    on(sigName: "notify::actions", callback: any): number
    once(sigName: "notify::actions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: any): number
    on(sigName: "notify::allocation", callback: any): number
    once(sigName: "notify::allocation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: any): number
    on(sigName: "notify::anchor-gravity", callback: any): number
    once(sigName: "notify::anchor-gravity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: any): number
    on(sigName: "notify::anchor-x", callback: any): number
    once(sigName: "notify::anchor-x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: any): number
    on(sigName: "notify::anchor-y", callback: any): number
    once(sigName: "notify::anchor-y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: any): number
    on(sigName: "notify::background-color", callback: any): number
    once(sigName: "notify::background-color", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: any): number
    on(sigName: "notify::background-color-set", callback: any): number
    once(sigName: "notify::background-color-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: any): number
    on(sigName: "notify::child-transform", callback: any): number
    once(sigName: "notify::child-transform", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: any): number
    on(sigName: "notify::child-transform-set", callback: any): number
    once(sigName: "notify::child-transform-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: any): number
    on(sigName: "notify::clip", callback: any): number
    once(sigName: "notify::clip", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: any): number
    on(sigName: "notify::clip-rect", callback: any): number
    once(sigName: "notify::clip-rect", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: any): number
    on(sigName: "notify::clip-to-allocation", callback: any): number
    once(sigName: "notify::clip-to-allocation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: any): number
    on(sigName: "notify::constraints", callback: any): number
    once(sigName: "notify::constraints", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: any): number
    on(sigName: "notify::content-box", callback: any): number
    once(sigName: "notify::content-box", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: any): number
    on(sigName: "notify::content-gravity", callback: any): number
    once(sigName: "notify::content-gravity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: any): number
    on(sigName: "notify::content-repeat", callback: any): number
    once(sigName: "notify::content-repeat", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: any): number
    on(sigName: "notify::depth", callback: any): number
    once(sigName: "notify::depth", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: any): number
    on(sigName: "notify::effect", callback: any): number
    once(sigName: "notify::effect", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: any): number
    on(sigName: "notify::fixed-position-set", callback: any): number
    once(sigName: "notify::fixed-position-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: any): number
    on(sigName: "notify::fixed-x", callback: any): number
    once(sigName: "notify::fixed-x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: any): number
    on(sigName: "notify::fixed-y", callback: any): number
    once(sigName: "notify::fixed-y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: any): number
    on(sigName: "notify::has-clip", callback: any): number
    once(sigName: "notify::has-clip", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: any): number
    on(sigName: "notify::has-pointer", callback: any): number
    once(sigName: "notify::has-pointer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: any): number
    on(sigName: "notify::height", callback: any): number
    once(sigName: "notify::height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: any): number
    on(sigName: "notify::layout-manager", callback: any): number
    once(sigName: "notify::layout-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: any): number
    on(sigName: "notify::magnification-filter", callback: any): number
    once(sigName: "notify::magnification-filter", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: any): number
    on(sigName: "notify::mapped", callback: any): number
    once(sigName: "notify::mapped", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: any): number
    on(sigName: "notify::margin-bottom", callback: any): number
    once(sigName: "notify::margin-bottom", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
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
    connect(sigName: "notify::margin-top", callback: any): number
    on(sigName: "notify::margin-top", callback: any): number
    once(sigName: "notify::margin-top", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: any): number
    on(sigName: "notify::min-height", callback: any): number
    once(sigName: "notify::min-height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: any): number
    on(sigName: "notify::min-height-set", callback: any): number
    once(sigName: "notify::min-height-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: any): number
    on(sigName: "notify::min-width", callback: any): number
    once(sigName: "notify::min-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: any): number
    on(sigName: "notify::min-width-set", callback: any): number
    once(sigName: "notify::min-width-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: any): number
    on(sigName: "notify::minification-filter", callback: any): number
    once(sigName: "notify::minification-filter", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: any): number
    on(sigName: "notify::natural-height", callback: any): number
    once(sigName: "notify::natural-height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: any): number
    on(sigName: "notify::natural-height-set", callback: any): number
    once(sigName: "notify::natural-height-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: any): number
    on(sigName: "notify::natural-width", callback: any): number
    once(sigName: "notify::natural-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: any): number
    on(sigName: "notify::natural-width-set", callback: any): number
    once(sigName: "notify::natural-width-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: any): number
    on(sigName: "notify::offscreen-redirect", callback: any): number
    once(sigName: "notify::offscreen-redirect", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: any): number
    on(sigName: "notify::pivot-point", callback: any): number
    once(sigName: "notify::pivot-point", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: any): number
    on(sigName: "notify::pivot-point-z", callback: any): number
    once(sigName: "notify::pivot-point-z", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: any): number
    on(sigName: "notify::reactive", callback: any): number
    once(sigName: "notify::reactive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: any): number
    on(sigName: "notify::realized", callback: any): number
    once(sigName: "notify::realized", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: any): number
    on(sigName: "notify::request-mode", callback: any): number
    once(sigName: "notify::request-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: any): number
    on(sigName: "notify::rotation-angle-x", callback: any): number
    once(sigName: "notify::rotation-angle-x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: any): number
    on(sigName: "notify::rotation-angle-y", callback: any): number
    once(sigName: "notify::rotation-angle-y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: any): number
    on(sigName: "notify::rotation-angle-z", callback: any): number
    once(sigName: "notify::rotation-angle-z", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: any): number
    on(sigName: "notify::rotation-center-x", callback: any): number
    once(sigName: "notify::rotation-center-x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: any): number
    on(sigName: "notify::rotation-center-y", callback: any): number
    once(sigName: "notify::rotation-center-y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: any): number
    on(sigName: "notify::rotation-center-z", callback: any): number
    once(sigName: "notify::rotation-center-z", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: any): number
    on(sigName: "notify::rotation-center-z-gravity", callback: any): number
    once(sigName: "notify::rotation-center-z-gravity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: any): number
    on(sigName: "notify::scale-center-x", callback: any): number
    once(sigName: "notify::scale-center-x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: any): number
    on(sigName: "notify::scale-center-y", callback: any): number
    once(sigName: "notify::scale-center-y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: any): number
    on(sigName: "notify::scale-gravity", callback: any): number
    once(sigName: "notify::scale-gravity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: any): number
    on(sigName: "notify::scale-x", callback: any): number
    once(sigName: "notify::scale-x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: any): number
    on(sigName: "notify::scale-y", callback: any): number
    once(sigName: "notify::scale-y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: any): number
    on(sigName: "notify::scale-z", callback: any): number
    once(sigName: "notify::scale-z", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: any): number
    on(sigName: "notify::show-on-set-parent", callback: any): number
    once(sigName: "notify::show-on-set-parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: any): number
    on(sigName: "notify::text-direction", callback: any): number
    once(sigName: "notify::text-direction", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: any): number
    on(sigName: "notify::transform", callback: any): number
    once(sigName: "notify::transform", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: any): number
    on(sigName: "notify::transform-set", callback: any): number
    once(sigName: "notify::transform-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: any): number
    on(sigName: "notify::translation-x", callback: any): number
    once(sigName: "notify::translation-x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: any): number
    on(sigName: "notify::translation-y", callback: any): number
    once(sigName: "notify::translation-y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: any): number
    on(sigName: "notify::translation-z", callback: any): number
    once(sigName: "notify::translation-z", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: any): number
    on(sigName: "notify::visible", callback: any): number
    once(sigName: "notify::visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: any): number
    on(sigName: "notify::width", callback: any): number
    once(sigName: "notify::width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: any): number
    on(sigName: "notify::x", callback: any): number
    once(sigName: "notify::x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: any): number
    on(sigName: "notify::x-align", callback: any): number
    once(sigName: "notify::x-align", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: any): number
    on(sigName: "notify::x-expand", callback: any): number
    once(sigName: "notify::x-expand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: any): number
    on(sigName: "notify::y", callback: any): number
    once(sigName: "notify::y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: any): number
    on(sigName: "notify::y-align", callback: any): number
    once(sigName: "notify::y-align", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: any): number
    on(sigName: "notify::y-expand", callback: any): number
    once(sigName: "notify::y-expand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: any): number
    on(sigName: "notify::z-position", callback: any): number
    once(sigName: "notify::z-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A ClutterActor containing a #GtkWidget.
 * @class 
 */
export class Actor extends Clutter.Actor {

    // Own properties of GtkClutter-1.0.GtkClutter.Actor

    static name: string

    // Constructors of GtkClutter-1.0.GtkClutter.Actor

    constructor(config?: Actor.ConstructorProperties) 
    /**
     * Creates a new #GtkClutterActor.
     * 
     * This widget can be used to embed a #GtkWidget into a Clutter scene,
     * by retrieving the internal #GtkBin container using
     * gtk_clutter_actor_get_widget() and adding the #GtkWidget to it.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GtkClutterActor.
     * 
     * This widget can be used to embed a #GtkWidget into a Clutter scene,
     * by retrieving the internal #GtkBin container using
     * gtk_clutter_actor_get_widget() and adding the #GtkWidget to it.
     * @constructor 
     */
    static new(): Actor
    /**
     * Creates a new #GtkClutterActor widget. This widget can be
     * used to embed a Gtk widget into a clutter scene.
     * 
     * This function is the logical equivalent of:
     * 
     * |[
     * ClutterActor *actor = gtk_clutter_actor_new ();
     * GtkWidget *bin = gtk_clutter_actor_get_widget (GTK_CLUTTER_ACTOR (actor));
     * 
     * gtk_container_add (GTK_CONTAINER (bin), contents);
     * ```
     * 
     * @constructor 
     * @param contents a #GtkWidget to pack into this #ClutterActor
     */
    static newWithContents(contents: Gtk.Widget): Actor
    _init(config?: Actor.ConstructorProperties): void
}

export module Embed {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Container.ConstructorProperties {

        // Own constructor properties of GtkClutter-1.0.GtkClutter.Embed

        /**
         * Whether to use the reported size of the LayoutManager on the stage as the widget size.
         * See gtk_clutter_embed_set_use_layout_size() for details.
         */
        useLayoutSize?: boolean | null
    }

}

export interface Embed extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of GtkClutter-1.0.GtkClutter.Embed

    /**
     * Whether to use the reported size of the LayoutManager on the stage as the widget size.
     * See gtk_clutter_embed_set_use_layout_size() for details.
     */
    useLayoutSize: boolean

    // Owm methods of GtkClutter-1.0.GtkClutter.Embed

    /**
     * Retrieves the #ClutterStage from `embed`. The returned stage can be
     * used to add actors to the Clutter scene.
     */
    getStage(): Clutter.Actor
    /**
     * Retrieves whether the embedding uses the layout size, see
     * gtk_clutter_embed_set_use_layout_size() for details.
     */
    getUseLayoutSize(): boolean
    /**
     * Changes the way `embed` requests size. If `use_layout_size` is
     * %TRUE, the `embed` widget will request the size that the
     * LayoutManager reports as the preferred size. This means that
     * a Gtk+ window will automatically get the natural and minimum
     * toplevel window sizes. This is useful when the contents of the
     * clutter stage is similar to a traditional UI.
     * 
     * If `use_layout_size` is %FALSE (which is the default) then `embed`
     * will not request any size and its up to the embedder to make sure
     * there is some size (by setting a custom size on the widget or a default
     * size on the toplevel. This makes more sense when using the `embed`
     * as a viewport into a potentially unlimited clutter space.
     * @param useLayoutSize a boolean
     */
    setUseLayoutSize(useLayoutSize: boolean): void

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

    // Class property signals of GtkClutter-1.0.GtkClutter.Embed

    connect(sigName: "notify::use-layout-size", callback: any): number
    on(sigName: "notify::use-layout-size", callback: any): number
    once(sigName: "notify::use-layout-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-layout-size", ...args: any[]): void
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
 * A #GtkWidget containing the default Clutter stage.
 * 
 * The <structname>GtkClutterEmbed</structname> structure contains only
 * private data and should be accessed using the provided API.
 * @class 
 */
export class Embed extends Gtk.Container {

    // Own properties of GtkClutter-1.0.GtkClutter.Embed

    static name: string

    // Constructors of GtkClutter-1.0.GtkClutter.Embed

    constructor(config?: Embed.ConstructorProperties) 
    /**
     * Creates a new #GtkClutterEmbed widget. This widget can be
     * used to build a scene using Clutter API into a GTK+ application.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GtkClutterEmbed widget. This widget can be
     * used to build a scene using Clutter API into a GTK+ application.
     * @constructor 
     */
    static new(): Embed
    _init(config?: Embed.ConstructorProperties): void
}

export module Texture {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Clutter.Texture.ConstructorProperties {
    }

}

export interface Texture extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Owm methods of GtkClutter-1.0.GtkClutter.Texture

    /**
     * Sets the contents of `texture` using the `icon_name` from the
     * current icon theme.
     * @param widget a #GtkWidget or %NULL
     * @param iconName the name of the icon
     * @param iconSize the icon size or -1
     */
    setFromIconName(widget: Gtk.Widget | null, iconName: string, iconSize: Gtk.IconSize): boolean
    /**
     * Sets the contents of `texture` with a copy of `pixbuf`.
     * @param pixbuf a #GdkPixbuf
     */
    setFromPixbuf(pixbuf: GdkPixbuf.Pixbuf): boolean
    /**
     * Sets the contents of `texture` using the stock icon `stock_id,` as
     * rendered by `widget`.
     * @param widget a #GtkWidget
     * @param stockId the stock id of the icon
     * @param iconSize the size of the icon, or -1
     */
    setFromStock(widget: Gtk.Widget, stockId: string, iconSize: Gtk.IconSize): boolean

    // Conflicting methods

    /**
     * Lowers `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.lower() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_below_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
     */
    lower(actor: Clutter.Actor, sibling: Clutter.Actor | null): void
    /**
     * Puts `self` below `above`.
     * 
     * Both actors must have the same parent, and the parent must implement
     * the #ClutterContainer interface.
     * 
     * This function calls clutter_container_lower_child() internally.
     * @param above A #ClutterActor to lower below
     */
    lower(above: Clutter.Actor | null): void

    // Overloads of lower

    /**
     * Lowers `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.lower() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_below_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
     */
    lower(actor: Clutter.Actor, sibling: Clutter.Actor | null): void
    /**
     * Raises `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.raise() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_above_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to raise to, or %NULL to raise   to the top
     */
    raise(actor: Clutter.Actor, sibling: Clutter.Actor | null): void
    /**
     * Puts `self` above `below`.
     * 
     * Both actors must have the same parent, and the parent must implement
     * the #ClutterContainer interface
     * 
     * This function calls clutter_container_raise_child() internally.
     * @param below A #ClutterActor to raise above.
     */
    raise(below: Clutter.Actor | null): void

    // Overloads of raise

    /**
     * Raises `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.raise() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_above_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to raise to, or %NULL to raise   to the top
     */
    raise(actor: Clutter.Actor, sibling: Clutter.Actor | null): void

    // Class property signals of GtkClutter-1.0.GtkClutter.Texture

    connect(sigName: "notify::disable-slicing", callback: any): number
    on(sigName: "notify::disable-slicing", callback: any): number
    once(sigName: "notify::disable-slicing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::disable-slicing", ...args: any[]): void
    connect(sigName: "notify::filename", callback: any): number
    on(sigName: "notify::filename", callback: any): number
    once(sigName: "notify::filename", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::filter-quality", callback: any): number
    on(sigName: "notify::filter-quality", callback: any): number
    once(sigName: "notify::filter-quality", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::filter-quality", ...args: any[]): void
    connect(sigName: "notify::keep-aspect-ratio", callback: any): number
    on(sigName: "notify::keep-aspect-ratio", callback: any): number
    once(sigName: "notify::keep-aspect-ratio", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::keep-aspect-ratio", ...args: any[]): void
    connect(sigName: "notify::load-async", callback: any): number
    on(sigName: "notify::load-async", callback: any): number
    once(sigName: "notify::load-async", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::load-async", ...args: any[]): void
    connect(sigName: "notify::load-data-async", callback: any): number
    on(sigName: "notify::load-data-async", callback: any): number
    once(sigName: "notify::load-data-async", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::load-data-async", ...args: any[]): void
    connect(sigName: "notify::pick-with-alpha", callback: any): number
    on(sigName: "notify::pick-with-alpha", callback: any): number
    once(sigName: "notify::pick-with-alpha", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pick-with-alpha", ...args: any[]): void
    connect(sigName: "notify::pixel-format", callback: any): number
    on(sigName: "notify::pixel-format", callback: any): number
    once(sigName: "notify::pixel-format", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixel-format", ...args: any[]): void
    connect(sigName: "notify::repeat-x", callback: any): number
    on(sigName: "notify::repeat-x", callback: any): number
    once(sigName: "notify::repeat-x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::repeat-x", ...args: any[]): void
    connect(sigName: "notify::repeat-y", callback: any): number
    on(sigName: "notify::repeat-y", callback: any): number
    once(sigName: "notify::repeat-y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::repeat-y", ...args: any[]): void
    connect(sigName: "notify::sync-size", callback: any): number
    on(sigName: "notify::sync-size", callback: any): number
    once(sigName: "notify::sync-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sync-size", ...args: any[]): void
    connect(sigName: "notify::tile-waste", callback: any): number
    on(sigName: "notify::tile-waste", callback: any): number
    once(sigName: "notify::tile-waste", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tile-waste", ...args: any[]): void
    connect(sigName: "notify::actions", callback: any): number
    on(sigName: "notify::actions", callback: any): number
    once(sigName: "notify::actions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: any): number
    on(sigName: "notify::allocation", callback: any): number
    once(sigName: "notify::allocation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: any): number
    on(sigName: "notify::anchor-gravity", callback: any): number
    once(sigName: "notify::anchor-gravity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: any): number
    on(sigName: "notify::anchor-x", callback: any): number
    once(sigName: "notify::anchor-x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: any): number
    on(sigName: "notify::anchor-y", callback: any): number
    once(sigName: "notify::anchor-y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: any): number
    on(sigName: "notify::background-color", callback: any): number
    once(sigName: "notify::background-color", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: any): number
    on(sigName: "notify::background-color-set", callback: any): number
    once(sigName: "notify::background-color-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: any): number
    on(sigName: "notify::child-transform", callback: any): number
    once(sigName: "notify::child-transform", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: any): number
    on(sigName: "notify::child-transform-set", callback: any): number
    once(sigName: "notify::child-transform-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: any): number
    on(sigName: "notify::clip", callback: any): number
    once(sigName: "notify::clip", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: any): number
    on(sigName: "notify::clip-rect", callback: any): number
    once(sigName: "notify::clip-rect", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: any): number
    on(sigName: "notify::clip-to-allocation", callback: any): number
    once(sigName: "notify::clip-to-allocation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: any): number
    on(sigName: "notify::constraints", callback: any): number
    once(sigName: "notify::constraints", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: any): number
    on(sigName: "notify::content-box", callback: any): number
    once(sigName: "notify::content-box", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: any): number
    on(sigName: "notify::content-gravity", callback: any): number
    once(sigName: "notify::content-gravity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: any): number
    on(sigName: "notify::content-repeat", callback: any): number
    once(sigName: "notify::content-repeat", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: any): number
    on(sigName: "notify::depth", callback: any): number
    once(sigName: "notify::depth", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: any): number
    on(sigName: "notify::effect", callback: any): number
    once(sigName: "notify::effect", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: any): number
    on(sigName: "notify::fixed-position-set", callback: any): number
    once(sigName: "notify::fixed-position-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: any): number
    on(sigName: "notify::fixed-x", callback: any): number
    once(sigName: "notify::fixed-x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: any): number
    on(sigName: "notify::fixed-y", callback: any): number
    once(sigName: "notify::fixed-y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: any): number
    on(sigName: "notify::has-clip", callback: any): number
    once(sigName: "notify::has-clip", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: any): number
    on(sigName: "notify::has-pointer", callback: any): number
    once(sigName: "notify::has-pointer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: any): number
    on(sigName: "notify::height", callback: any): number
    once(sigName: "notify::height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: any): number
    on(sigName: "notify::layout-manager", callback: any): number
    once(sigName: "notify::layout-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: any): number
    on(sigName: "notify::magnification-filter", callback: any): number
    once(sigName: "notify::magnification-filter", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: any): number
    on(sigName: "notify::mapped", callback: any): number
    once(sigName: "notify::mapped", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: any): number
    on(sigName: "notify::margin-bottom", callback: any): number
    once(sigName: "notify::margin-bottom", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
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
    connect(sigName: "notify::margin-top", callback: any): number
    on(sigName: "notify::margin-top", callback: any): number
    once(sigName: "notify::margin-top", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: any): number
    on(sigName: "notify::min-height", callback: any): number
    once(sigName: "notify::min-height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: any): number
    on(sigName: "notify::min-height-set", callback: any): number
    once(sigName: "notify::min-height-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: any): number
    on(sigName: "notify::min-width", callback: any): number
    once(sigName: "notify::min-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: any): number
    on(sigName: "notify::min-width-set", callback: any): number
    once(sigName: "notify::min-width-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: any): number
    on(sigName: "notify::minification-filter", callback: any): number
    once(sigName: "notify::minification-filter", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: any): number
    on(sigName: "notify::natural-height", callback: any): number
    once(sigName: "notify::natural-height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: any): number
    on(sigName: "notify::natural-height-set", callback: any): number
    once(sigName: "notify::natural-height-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: any): number
    on(sigName: "notify::natural-width", callback: any): number
    once(sigName: "notify::natural-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: any): number
    on(sigName: "notify::natural-width-set", callback: any): number
    once(sigName: "notify::natural-width-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: any): number
    on(sigName: "notify::offscreen-redirect", callback: any): number
    once(sigName: "notify::offscreen-redirect", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: any): number
    on(sigName: "notify::pivot-point", callback: any): number
    once(sigName: "notify::pivot-point", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: any): number
    on(sigName: "notify::pivot-point-z", callback: any): number
    once(sigName: "notify::pivot-point-z", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: any): number
    on(sigName: "notify::reactive", callback: any): number
    once(sigName: "notify::reactive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: any): number
    on(sigName: "notify::realized", callback: any): number
    once(sigName: "notify::realized", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: any): number
    on(sigName: "notify::request-mode", callback: any): number
    once(sigName: "notify::request-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: any): number
    on(sigName: "notify::rotation-angle-x", callback: any): number
    once(sigName: "notify::rotation-angle-x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: any): number
    on(sigName: "notify::rotation-angle-y", callback: any): number
    once(sigName: "notify::rotation-angle-y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: any): number
    on(sigName: "notify::rotation-angle-z", callback: any): number
    once(sigName: "notify::rotation-angle-z", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: any): number
    on(sigName: "notify::rotation-center-x", callback: any): number
    once(sigName: "notify::rotation-center-x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: any): number
    on(sigName: "notify::rotation-center-y", callback: any): number
    once(sigName: "notify::rotation-center-y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: any): number
    on(sigName: "notify::rotation-center-z", callback: any): number
    once(sigName: "notify::rotation-center-z", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: any): number
    on(sigName: "notify::rotation-center-z-gravity", callback: any): number
    once(sigName: "notify::rotation-center-z-gravity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: any): number
    on(sigName: "notify::scale-center-x", callback: any): number
    once(sigName: "notify::scale-center-x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: any): number
    on(sigName: "notify::scale-center-y", callback: any): number
    once(sigName: "notify::scale-center-y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: any): number
    on(sigName: "notify::scale-gravity", callback: any): number
    once(sigName: "notify::scale-gravity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: any): number
    on(sigName: "notify::scale-x", callback: any): number
    once(sigName: "notify::scale-x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: any): number
    on(sigName: "notify::scale-y", callback: any): number
    once(sigName: "notify::scale-y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: any): number
    on(sigName: "notify::scale-z", callback: any): number
    once(sigName: "notify::scale-z", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: any): number
    on(sigName: "notify::show-on-set-parent", callback: any): number
    once(sigName: "notify::show-on-set-parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: any): number
    on(sigName: "notify::text-direction", callback: any): number
    once(sigName: "notify::text-direction", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: any): number
    on(sigName: "notify::transform", callback: any): number
    once(sigName: "notify::transform", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: any): number
    on(sigName: "notify::transform-set", callback: any): number
    once(sigName: "notify::transform-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: any): number
    on(sigName: "notify::translation-x", callback: any): number
    once(sigName: "notify::translation-x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: any): number
    on(sigName: "notify::translation-y", callback: any): number
    once(sigName: "notify::translation-y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: any): number
    on(sigName: "notify::translation-z", callback: any): number
    once(sigName: "notify::translation-z", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: any): number
    on(sigName: "notify::visible", callback: any): number
    once(sigName: "notify::visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: any): number
    on(sigName: "notify::width", callback: any): number
    once(sigName: "notify::width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: any): number
    on(sigName: "notify::x", callback: any): number
    once(sigName: "notify::x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: any): number
    on(sigName: "notify::x-align", callback: any): number
    once(sigName: "notify::x-align", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: any): number
    on(sigName: "notify::x-expand", callback: any): number
    once(sigName: "notify::x-expand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: any): number
    on(sigName: "notify::y", callback: any): number
    once(sigName: "notify::y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: any): number
    on(sigName: "notify::y-align", callback: any): number
    once(sigName: "notify::y-align", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: any): number
    on(sigName: "notify::y-expand", callback: any): number
    once(sigName: "notify::y-expand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: any): number
    on(sigName: "notify::z-position", callback: any): number
    once(sigName: "notify::z-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The <structname>GtkClutterTexture</structname> structure contains
 * only private data and should be accessed using the provided API.
 * @class 
 */
export class Texture extends Clutter.Texture {

    // Own properties of GtkClutter-1.0.GtkClutter.Texture

    static name: string

    // Constructors of GtkClutter-1.0.GtkClutter.Texture

    constructor(config?: Texture.ConstructorProperties) 
    /**
     * Creates a new #GtkClutterTexture actor.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GtkClutterTexture actor.
     * @constructor 
     */
    static new(): Texture
    _init(config?: Texture.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Window {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Window.ConstructorProperties {
    }

}

export interface Window extends Atk.ImplementorIface, Gtk.Buildable {

    // Owm methods of GtkClutter-1.0.GtkClutter.Window

    /**
     * Retrieves the #ClutterStage that this window is embedding
     * 
     * Use this function if you wish to add other actors to the #ClutterStage.
     */
    getStage(): Clutter.Actor

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

    // Class property signals of GtkClutter-1.0.GtkClutter.Window

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
 * A #GtkWindow containing a #ClutterStage.
 * 
 * The <structname>GtkClutterWindow</structname> structure contains only
 * private data and it should be accessed using the provided API.
 * @class 
 */
export class Window extends Gtk.Window {

    // Own properties of GtkClutter-1.0.GtkClutter.Window

    static name: string

    // Constructors of GtkClutter-1.0.GtkClutter.Window

    constructor(config?: Window.ConstructorProperties) 
    /**
     * Creates a new #GtkClutterWindow widget.
     * 
     * This window provides a hidden #ClutterStage on which the child
     * #GtkWidget<!-- -->s are placed. This allows other #ClutterActor<!-- -->s
     * to also be placed on the stage.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GtkClutterWindow widget.
     * 
     * This window provides a hidden #ClutterStage on which the child
     * #GtkWidget<!-- -->s are placed. This allows other #ClutterActor<!-- -->s
     * to also be placed on the stage.
     * @constructor 
     */
    static new(): Window

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
    _init(config?: Window.ConstructorProperties): void
}

export interface ActorClass {
}

/**
 * Base class for #GtkClutterActor.
 * @record 
 */
export abstract class ActorClass {

    // Own properties of GtkClutter-1.0.GtkClutter.ActorClass

    static name: string
}

export interface ActorPrivate {
}

export class ActorPrivate {

    // Own properties of GtkClutter-1.0.GtkClutter.ActorPrivate

    static name: string
}

export interface EmbedClass {
}

/**
 * Base class for #GtkClutterEmbed.
 * 
 * The <structname>GtkClutterEmbedClass</structname> contains only private
 * data.
 * @record 
 */
export abstract class EmbedClass {

    // Own properties of GtkClutter-1.0.GtkClutter.EmbedClass

    static name: string
}

export interface EmbedPrivate {
}

export class EmbedPrivate {

    // Own properties of GtkClutter-1.0.GtkClutter.EmbedPrivate

    static name: string
}

export interface TextureClass {
}

/**
 * The <structname>GtkClutterTextureClass</structname> structure contains
 * only private data.
 * @record 
 */
export abstract class TextureClass {

    // Own properties of GtkClutter-1.0.GtkClutter.TextureClass

    static name: string
}

export interface WindowClass {
}

/**
 * Base class for #GtkClutterWindow.
 * 
 * The <structname>GtkClutterWindowClass</structname> structure contains
 * only private data.
 * @record 
 */
export abstract class WindowClass {

    // Own properties of GtkClutter-1.0.GtkClutter.WindowClass

    static name: string
}

export interface WindowPrivate {
}

export class WindowPrivate {

    // Own properties of GtkClutter-1.0.GtkClutter.WindowPrivate

    static name: string
}
