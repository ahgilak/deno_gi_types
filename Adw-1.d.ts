
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Adw-1
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

/**
 * Describes the possible states of an [class`Animation]`.
 * 
 * The state can be controlled with [method`Animation`.play],
 * [method`Animation`.pause], [method`Animation`.resume],
 * [method`Animation`.reset] and [method`Animation`.skip].
 */
export enum AnimationState {
    /**
     * The animation hasn't started yet.
     */
    IDLE,
    /**
     * The animation has been paused.
     */
    PAUSED,
    /**
     * The animation is currently playing.
     */
    PLAYING,
    /**
     * The animation has finished.
     */
    FINISHED,
}
/**
 * Describes title centering behavior of a [class`HeaderBar]` widget.
 */
export enum CenteringPolicy {
    /**
     * Keep the title centered when possible
     */
    LOOSE,
    /**
     * Keep the title centered at all cost
     */
    STRICT,
}
/**
 * Application color schemes for [property`StyleManager:`color-scheme].
 */
export enum ColorScheme {
    /**
     * Inherit the parent color-scheme. When set on the
     *   `AdwStyleManager` returned by [func`StyleManager`.get_default], it's
     *   equivalent to `ADW_COLOR_SCHEME_PREFER_LIGHT`.
     */
    DEFAULT,
    /**
     * Always use light appearance.
     */
    FORCE_LIGHT,
    /**
     * Use light appearance unless the system
     *   prefers dark colors.
     */
    PREFER_LIGHT,
    /**
     * Use dark appearance unless the system prefers
     *   prefers light colors.
     */
    PREFER_DARK,
    /**
     * Always use dark appearance.
     */
    FORCE_DARK,
}
/**
 * Describes the available easing functions for use with
 * [class`TimedAnimation]`.
 * 
 * New values may be added to this enumeration over time.
 */
export enum Easing {
    /**
     * Linear tweening.
     */
    LINEAR,
    /**
     * Quadratic tweening.
     */
    EASE_IN_QUAD,
    /**
     * Quadratic tweening, inverse of `ADW_EASE_IN_QUAD`.
     */
    EASE_OUT_QUAD,
    /**
     * Quadratic tweening, combining `ADW_EASE_IN_QUAD` and
     *   `ADW_EASE_OUT_QUAD`.
     */
    EASE_IN_OUT_QUAD,
    /**
     * Cubic tweening.
     */
    EASE_IN_CUBIC,
    /**
     * Cubic tweening, inverse of `ADW_EASE_IN_CUBIC`.
     */
    EASE_OUT_CUBIC,
    /**
     * Cubic tweening, combining `ADW_EASE_IN_CUBIC` and
     *   `ADW_EASE_OUT_CUBIC`.
     */
    EASE_IN_OUT_CUBIC,
    /**
     * Quartic tweening.
     */
    EASE_IN_QUART,
    /**
     * Quartic tweening, inverse of `ADW_EASE_IN_QUART`.
     */
    EASE_OUT_QUART,
    /**
     * Quartic tweening, combining `ADW_EASE_IN_QUART` and
     *   `ADW_EASE_OUT_QUART`.
     */
    EASE_IN_OUT_QUART,
    /**
     * Quintic tweening.
     */
    EASE_IN_QUINT,
    /**
     * Quintic tweening, inverse of `ADW_EASE_IN_QUINT`.
     */
    EASE_OUT_QUINT,
    /**
     * Quintic tweening, combining `ADW_EASE_IN_QUINT` and
     *   `ADW_EASE_OUT_QUINT`.
     */
    EASE_IN_OUT_QUINT,
    /**
     * Sine wave tweening.
     */
    EASE_IN_SINE,
    /**
     * Sine wave tweening, inverse of `ADW_EASE_IN_SINE`.
     */
    EASE_OUT_SINE,
    /**
     * Sine wave tweening, combining `ADW_EASE_IN_SINE` and
     *   `ADW_EASE_OUT_SINE`.
     */
    EASE_IN_OUT_SINE,
    /**
     * Exponential tweening.
     */
    EASE_IN_EXPO,
    /**
     * Exponential tweening, inverse of `ADW_EASE_IN_EXPO`.
     */
    EASE_OUT_EXPO,
    /**
     * Exponential tweening, combining `ADW_EASE_IN_EXPO` and
     *   `ADW_EASE_OUT_EXPO`.
     */
    EASE_IN_OUT_EXPO,
    /**
     * Circular tweening.
     */
    EASE_IN_CIRC,
    /**
     * Circular tweening, inverse of `ADW_EASE_IN_CIRC`.
     */
    EASE_OUT_CIRC,
    /**
     * Circular tweening, combining `ADW_EASE_IN_CIRC` and
     *   `ADW_EASE_OUT_CIRC`.
     */
    EASE_IN_OUT_CIRC,
    /**
     * Elastic tweening, with offshoot on start.
     */
    EASE_IN_ELASTIC,
    /**
     * Elastic tweening, with offshoot on end, inverse of
     *   `ADW_EASE_IN_ELASTIC`.
     */
    EASE_OUT_ELASTIC,
    /**
     * Elastic tweening, with offshoot on both ends,
     *   combining `ADW_EASE_IN_ELASTIC` and `ADW_EASE_OUT_ELASTIC`.
     */
    EASE_IN_OUT_ELASTIC,
    /**
     * Overshooting cubic tweening, with backtracking on start.
     */
    EASE_IN_BACK,
    /**
     * Overshooting cubic tweening, with backtracking on end,
     *   inverse of `ADW_EASE_IN_BACK`.
     */
    EASE_OUT_BACK,
    /**
     * Overshooting cubic tweening, with backtracking on both
     *   ends, combining `ADW_EASE_IN_BACK` and `ADW_EASE_OUT_BACK`.
     */
    EASE_IN_OUT_BACK,
    /**
     * Exponentially decaying parabolic (bounce) tweening,
     *   on start.
     */
    EASE_IN_BOUNCE,
    /**
     * Exponentially decaying parabolic (bounce) tweening,
     *   with bounce on end, inverse of `ADW_EASE_IN_BOUNCE`.
     */
    EASE_OUT_BOUNCE,
    /**
     * Exponentially decaying parabolic (bounce) tweening,
     *   with bounce on both ends, combining `ADW_EASE_IN_BOUNCE` and
     *   `ADW_EASE_OUT_BOUNCE`.
     */
    EASE_IN_OUT_BOUNCE,
}
/**
 * Describes the possible folding behavior of a [class`Flap]` widget.
 */
export enum FlapFoldPolicy {
    /**
     * Disable folding, the flap cannot reach narrow
     *   sizes.
     */
    NEVER,
    /**
     * Keep the flap always folded.
     */
    ALWAYS,
    /**
     * Fold and unfold the flap based on available
     *   space.
     */
    AUTO,
}
/**
 * Describes transitions types of a [class`Flap]` widget.
 * 
 * It determines the type of animation when transitioning between children in a
 * [class`Flap]` widget, as well as which areas can be swiped via
 * [property`Flap:`swipe-to-open] and [property`Flap:`swipe-to-close].
 * 
 * New values may be added to this enum over time.
 */
export enum FlapTransitionType {
    /**
     * The flap slides over the content, which is
     *   dimmed. When folded, only the flap can be swiped.
     */
    OVER,
    /**
     * The content slides over the flap. Only the
     *   content can be swiped.
     */
    UNDER,
    /**
     * The flap slides offscreen when hidden,
     *   neither the flap nor content overlap each other. Both widgets can be
     *   swiped.
     */
    SLIDE,
}
/**
 * Determines when [class`Flap]` and [class`Leaflet]` will fold.
 */
export enum FoldThresholdPolicy {
    /**
     * Folding is based on the minimum size
     */
    MINIMUM,
    /**
     * Folding is based on the natural size
     */
    NATURAL,
}
/**
 * Describes the possible transitions in a [class`Leaflet]` widget.
 * 
 * New values may be added to this enumeration over time.
 */
export enum LeafletTransitionType {
    /**
     * Cover the old page or uncover the new page, sliding from or towards the end according to orientation, text direction and children order
     */
    OVER,
    /**
     * Uncover the new page or cover the old page, sliding from or towards the start according to orientation, text direction and children order
     */
    UNDER,
    /**
     * Slide from left, right, up or down according to the orientation, text direction and the children order
     */
    SLIDE,
}
/**
 * Describes the direction of a swipe navigation gesture.
 */
export enum NavigationDirection {
    /**
     * Corresponds to start or top, depending on orientation and text direction
     */
    BACK,
    /**
     * Corresponds to end or bottom, depending on orientation and text direction
     */
    FORWARD,
}
/**
 * Describes the possible transitions in a [class`Squeezer]` widget.
 */
export enum SqueezerTransitionType {
    /**
     * No transition
     */
    NONE,
    /**
     * A cross-fade
     */
    CROSSFADE,
}
/**
 * [class`Toast]` behavior when another toast is already displayed.
 */
export enum ToastPriority {
    /**
     * the toast will be queued if another toast is
     *   already displayed.
     */
    NORMAL,
    /**
     * the toast will be displayed immediately, pushing
     *   the previous toast into the queue instead.
     */
    HIGH,
}
/**
 * Describes the adaptive modes of [class`ViewSwitcher]`.
 */
export enum ViewSwitcherPolicy {
    /**
     * Force the narrow mode
     */
    NARROW,
    /**
     * Force the wide mode
     */
    WIDE,
}
/**
 * Indicates an [class`Animation]` with an infinite duration.
 * 
 * This value is mostly used internally.
 */
export const DURATION_INFINITE: number
/**
 * Adwaita major version component (e.g. 1 if the version is 1.2.3).
 */
export const MAJOR_VERSION: number
/**
 * Adwaita micro version component (e.g. 3 if the version is 1.2.3).
 */
export const MICRO_VERSION: number
/**
 * Adwaita minor version component (e.g. 2 if the version is 1.2.3).
 */
export const MINOR_VERSION: number
/**
 * Adwaita version, encoded as a string, useful for printing and
 * concatenation.
 */
export const VERSION_S: string
/**
 * Computes easing with `easing` for `value`.
 * 
 * `value` should generally be in the [0, 1] range.
 * @param self an easing value
 * @param value a value to ease
 */
export function easingEase(self: Easing, value: number): number
/**
 * Checks whether animations are enabled for `widget`.
 * 
 * This should be used when implementing an animated widget to know whether to
 * animate it or not.
 * @param widget a `GtkWidget`
 */
export function getEnableAnimations(widget: Gtk.Widget): boolean
/**
 * Returns the major version number of the Adwaita library.
 * 
 * For example, in libadwaita version 1.2.3 this is 1.
 * 
 * This function is in the library, so it represents the libadwaita library your
 * code is running against. Contrast with the [const`MAJOR_VERSION]` constant,
 * which represents the major version of the libadwaita headers you have
 * included when compiling your code.
 */
export function getMajorVersion(): number
/**
 * Returns the micro version number of the Adwaita library.
 * 
 * For example, in libadwaita version 1.2.3 this is 3.
 * 
 * This function is in the library, so it represents the libadwaita library your
 * code is running against. Contrast with the [const`MAJOR_VERSION]` constant,
 * which represents the micro version of the libadwaita headers you have
 * included when compiling your code.
 */
export function getMicroVersion(): number
/**
 * Returns the minor version number of the Adwaita library.
 * 
 * For example, in libadwaita version 1.2.3 this is 2.
 * 
 * This function is in the library, so it represents the libadwaita library your
 * code is running against. Contrast with the [const`MAJOR_VERSION]` constant,
 * which represents the minor version of the libadwaita headers you have
 * included when compiling your code.
 */
export function getMinorVersion(): number
/**
 * Initializes Libadwaita.
 * 
 * This function can be used instead of [func`Gtk`.init] as it initializes GTK
 * implicitly.
 * 
 * There's no need to call this function if you're using [class`Application]`.
 * 
 * If Libadwaita has already been initialized, the function will simply return.
 * 
 * This makes sure translations, types, themes, and icons for the Adwaita
 * library are set up properly.
 */
export function init(): void
/**
 * Use this function to check if libadwaita has been initialized with
 * [func`init]`.
 */
export function isInitialized(): boolean
/**
 * Computes the linear interpolation between `a` and `b` for `t`.
 * @param a the start
 * @param b the end
 * @param t the interpolation rate
 */
export function lerp(a: number, b: number, t: number): number
/**
 * Prototype for animation targets based on user callbacks.
 * @callback 
 * @param value The animation value
 */
export interface AnimationTargetFunc {
    (value: number): void
}
export module Swipeable {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Swipeable extends Gtk.Widget {

    // Owm methods of Adw-1.Adw.Swipeable

    // Has conflict: getCancelProgress(): number
    // Has conflict: getDistance(): number
    // Has conflict: getProgress(): number
    // Has conflict: getSnapPoints(): number[]
    // Has conflict: getSwipeArea(navigationDirection: NavigationDirection, isDrag: boolean): /* rect */ Gdk.Rectangle

    // Own virtual methods of Adw-1.Adw.Swipeable

    /**
     * Gets the progress `self` will snap back to after the gesture is canceled.
     * @virtual 
     */
    getCancelProgress(): number
    /**
     * Gets the swipe distance of `self`.
     * 
     * This corresponds to how many pixels 1 unit represents.
     * @virtual 
     */
    getDistance(): number
    /**
     * Gets the current progress of `self`.
     * @virtual 
     */
    getProgress(): number
    /**
     * Gets the snap points of `self`.
     * 
     * Each snap point represents a progress value that is considered acceptable to
     * end the swipe on.
     * @virtual 
     */
    getSnapPoints(): number[]
    /**
     * Gets the area `self` can start a swipe from for the given direction and
     * gesture type.
     * 
     * This can be used to restrict swipes to only be possible from a certain area,
     * for example, to only allow edge swipes, or to have a draggable element and
     * ignore swipes elsewhere.
     * 
     * If not implemented, the default implementation returns the allocation of
     * `self,` allowing swipes from anywhere.
     * @virtual 
     * @param navigationDirection the direction of the swipe
     * @param isDrag whether the swipe is caused by a dragging gesture
     */
    getSwipeArea(navigationDirection: NavigationDirection, isDrag: boolean): /* rect */ Gdk.Rectangle

    // Class property signals of Adw-1.Adw.Swipeable

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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An interface for swipeable widgets.
 * 
 * The `AdwSwipeable` interface is implemented by all swipeable widgets.
 * 
 * See [class`SwipeTracker]` for details about implementing it.
 * @interface 
 */
export class Swipeable extends GObject.Object {

    // Own properties of Adw-1.Adw.Swipeable

    static name: string

    // Constructors of Adw-1.Adw.Swipeable

    constructor(config?: Swipeable.ConstructorProperties) 
    _init(config?: Swipeable.ConstructorProperties): void
}

export module ActionRow {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activated`
     */
    export interface ActivatedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, PreferencesRow.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ActionRow

        /**
         * The widget to activate when the row is activated.
         * 
         * The row can be activated either by clicking on it, calling
         * [method`ActionRow`.activate], or via mnemonics in the title or the subtitle.
         * See the [property`PreferencesRow:`use-underline] property to enable
         * mnemonics.
         * 
         * The target widget will be activated by emitting the
         * [signal`Gtk`.Widget::mnemonic-activate] signal on it.
         */
        activatableWidget?: Gtk.Widget | null
        /**
         * The icon name for this row.
         */
        iconName?: string | null
        /**
         * The subtitle for this row.
         */
        subtitle?: string | null
        /**
         * The number of lines at the end of which the subtitle label will be
         * ellipsized.
         * 
         * If the value is 0, the number of lines won't be limited.
         */
        subtitleLines?: number | null
        /**
         * The number of lines at the end of which the title label will be ellipsized.
         * 
         * If the value is 0, the number of lines won't be limited.
         */
        titleLines?: number | null
    }

}

export interface ActionRow extends Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.ActionRow

    /**
     * The widget to activate when the row is activated.
     * 
     * The row can be activated either by clicking on it, calling
     * [method`ActionRow`.activate], or via mnemonics in the title or the subtitle.
     * See the [property`PreferencesRow:`use-underline] property to enable
     * mnemonics.
     * 
     * The target widget will be activated by emitting the
     * [signal`Gtk`.Widget::mnemonic-activate] signal on it.
     */
    activatableWidget: Gtk.Widget
    /**
     * The icon name for this row.
     */
    iconName: string
    /**
     * The subtitle for this row.
     */
    subtitle: string
    /**
     * The number of lines at the end of which the subtitle label will be
     * ellipsized.
     * 
     * If the value is 0, the number of lines won't be limited.
     */
    subtitleLines: number
    /**
     * The number of lines at the end of which the title label will be ellipsized.
     * 
     * If the value is 0, the number of lines won't be limited.
     */
    titleLines: number

    // Own fields of Adw-1.Adw.ActionRow

    parentInstance: any

    // Owm methods of Adw-1.Adw.ActionRow

    // Has conflict: activate(): void
    /**
     * Adds a prefix widget to `self`.
     * @param widget a widget
     */
    addPrefix(widget: Gtk.Widget): void
    /**
     * Adds a suffix widget to `self`.
     * @param widget a widget
     */
    addSuffix(widget: Gtk.Widget): void
    /**
     * Gets the widget activated when `self` is activated.
     */
    getActivatableWidget(): Gtk.Widget | null
    /**
     * Gets the icon name for `self`.
     */
    getIconName(): string | null
    /**
     * Gets the subtitle for `self`.
     */
    getSubtitle(): string | null
    /**
     * Gets the number of lines at the end of which the subtitle label will be
     * ellipsized.
     * 
     * If the value is 0, the number of lines won't be limited.
     */
    getSubtitleLines(): number
    /**
     * Gets the number of lines at the end of which the title label will be
     * ellipsized.
     * 
     * If the value is 0, the number of lines won't be limited.
     */
    getTitleLines(): number
    /**
     * Removes a child from `self`.
     * @param widget the child to be removed
     */
    remove(widget: Gtk.Widget): void
    /**
     * Sets the widget to activate when `self` is activated.
     * @param widget the target widget
     */
    setActivatableWidget(widget: Gtk.Widget | null): void
    /**
     * Sets the icon name for `self`.
     * @param iconName the icon name
     */
    setIconName(iconName: string | null): void
    /**
     * Sets the subtitle for `self`.
     * 
     * The subtitle is interpreted as Pango markup unless
     * [property`PreferencesRow:`use-markup] is set to `FALSE`.
     * @param subtitle the subtitle
     */
    setSubtitle(subtitle: string): void
    /**
     * Sets the number of lines at the end of which the subtitle label will be
     * ellipsized.
     * 
     * If the value is 0, the number of lines won't be limited.
     * @param subtitleLines the number of lines at the end of which the subtitle label will be ellipsized
     */
    setSubtitleLines(subtitleLines: number): void
    /**
     * Sets the number of lines at the end of which the title label will be
     * ellipsized.
     * 
     * If the value is 0, the number of lines won't be limited.
     * @param titleLines the number of lines at the end of which the title label will be ellipsized
     */
    setTitleLines(titleLines: number): void

    // Own virtual methods of Adw-1.Adw.ActionRow

    /**
     * Activates `self`.
     * @virtual 
     */
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
    activate(): void

    // Own signals of Adw-1.Adw.ActionRow

    connect(sigName: "activated", callback: ActionRow.ActivatedSignalCallback): number
    on(sigName: "activated", callback: ActionRow.ActivatedSignalCallback): number
    once(sigName: "activated", callback: ActionRow.ActivatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "activated", ...args: any[]): void

    // Class property signals of Adw-1.Adw.ActionRow

    connect(sigName: "notify::activatable-widget", callback: any): number
    on(sigName: "notify::activatable-widget", callback: any): number
    once(sigName: "notify::activatable-widget", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activatable-widget", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: any): number
    on(sigName: "notify::subtitle", callback: any): number
    once(sigName: "notify::subtitle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::subtitle-lines", callback: any): number
    on(sigName: "notify::subtitle-lines", callback: any): number
    once(sigName: "notify::subtitle-lines", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subtitle-lines", ...args: any[]): void
    connect(sigName: "notify::title-lines", callback: any): number
    on(sigName: "notify::title-lines", callback: any): number
    once(sigName: "notify::title-lines", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title-lines", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::title-selectable", callback: any): number
    on(sigName: "notify::title-selectable", callback: any): number
    once(sigName: "notify::title-selectable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title-selectable", ...args: any[]): void
    connect(sigName: "notify::use-markup", callback: any): number
    on(sigName: "notify::use-markup", callback: any): number
    once(sigName: "notify::use-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-markup", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: any): number
    on(sigName: "notify::use-underline", callback: any): number
    once(sigName: "notify::use-underline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: any): number
    on(sigName: "notify::activatable", callback: any): number
    once(sigName: "notify::activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: any): number
    on(sigName: "notify::selectable", callback: any): number
    once(sigName: "notify::selectable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selectable", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A [class`Gtk`.ListBoxRow] used to present actions.
 * 
 * <picture>
 *   <source srcset="action-row-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="action-row.png" alt="action-row">
 * </picture>
 * 
 * The `AdwActionRow` widget can have a title, a subtitle and an icon. The row
 * can receive additional widgets at its end, or prefix widgets at its start.
 * 
 * It is convenient to present a preference and its related actions.
 * 
 * `AdwActionRow` is unactivatable by default, giving it an activatable widget
 * will automatically make it activatable, but unsetting it won't change the
 * row's activatability.
 * 
 * ## AdwActionRow as GtkBuildable
 * 
 * The `AdwActionRow` implementation of the [iface`Gtk`.Buildable] interface
 * supports adding a child at its end by specifying “suffix” or omitting the
 * “type” attribute of a <child> element.
 * 
 * It also supports adding a child as a prefix widget by specifying “prefix” as
 * the “type” attribute of a <child> element.
 * 
 * ## CSS nodes
 * 
 * `AdwActionRow` has a main CSS node with name `row`.
 * 
 * It contains the subnode `box.header` for its main horizontal box, and
 * `box.title` for the vertical box containing the title and subtitle labels.
 * 
 * It contains subnodes `label.title` and `label.subtitle` representing
 * respectively the title label and subtitle label.
 * @class 
 */
export class ActionRow extends PreferencesRow {

    // Own properties of Adw-1.Adw.ActionRow

    static name: string

    // Constructors of Adw-1.Adw.ActionRow

    constructor(config?: ActionRow.ConstructorProperties) 
    /**
     * Creates a new `AdwActionRow`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwActionRow`.
     * @constructor 
     */
    static new(): ActionRow
    _init(config?: ActionRow.ConstructorProperties): void
}

export module Animation {

    // Signal callback interfaces

    /**
     * Signal callback interface for `done`
     */
    export interface DoneSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.Animation

        /**
         * The target to animate.
         */
        target?: AnimationTarget | null
        /**
         * The animation widget.
         * 
         * It provides the frame clock for the animation. It's not strictly necessary
         * for this widget to be same as the one being animated.
         * 
         * The widget must be mapped in order for the animation to work. If it's not
         * mapped, or if it gets unmapped during an ongoing animation, the animation
         * will be automatically skipped.
         */
        widget?: Gtk.Widget | null
    }

}

export interface Animation {

    // Own properties of Adw-1.Adw.Animation

    /**
     * The animation state.
     * 
     * The state indicates whether the animation is currently playing, paused,
     * finished or hasn't been started yet.
     */
    readonly state: AnimationState
    /**
     * The target to animate.
     */
    target: AnimationTarget
    /**
     * The current value of the animation.
     */
    readonly value: number
    /**
     * The animation widget.
     * 
     * It provides the frame clock for the animation. It's not strictly necessary
     * for this widget to be same as the one being animated.
     * 
     * The widget must be mapped in order for the animation to work. If it's not
     * mapped, or if it gets unmapped during an ongoing animation, the animation
     * will be automatically skipped.
     */
    readonly widget: Gtk.Widget

    // Own fields of Adw-1.Adw.Animation

    parentInstance: GObject.Object

    // Owm methods of Adw-1.Adw.Animation

    /**
     * Gets the current value of `self`.
     * 
     * The state indicates whether `self` is currently playing, paused, finished or
     * hasn't been started yet.
     */
    getState(): AnimationState
    /**
     * Gets the target `self` animates.
     */
    getTarget(): AnimationTarget
    /**
     * Gets the current value of `self`.
     */
    getValue(): number
    /**
     * Gets the widget `self` was created for.
     */
    getWidget(): Gtk.Widget
    /**
     * Pauses a playing animation for `self`.
     * 
     * Does nothing if the current state of `self` isn't `ADW_ANIMATION_PLAYING`.
     * 
     * Sets [property`Animation:`state] to `ADW_ANIMATION_PAUSED`.
     */
    pause(): void
    /**
     * Starts the animation for `self`.
     * 
     * If the animation is playing, paused or has been completed, restarts it from
     * the beginning. This allows to easily play an animation regardless of whether
     * it's already playing or not.
     * 
     * Sets [property`Animation:`state] to `ADW_ANIMATION_PLAYING`.
     * 
     * The animation will be automatically skipped if [property`Animation:`widget] is
     * unmapped, or if [property`Gtk`.Settings:gtk-enable-animations] is `FALSE`.
     * 
     * As such, it's not guaranteed that the animation will actually run. For
     * example, when using [func`GLib`.idle_add] and starting an animation
     * immediately afterwards, it's entirely possible that the idle callback will
     * run after the animation has already finished, and not while it's playing.
     */
    play(): void
    /**
     * Resets the animation for `self`.
     * 
     * Sets [property`Animation:`state] to `ADW_ANIMATION_IDLE`.
     */
    reset(): void
    /**
     * Resumes a paused animation for `self`.
     * 
     * This function must only be used if the animation has been paused with
     * [method`Animation`.pause].
     * 
     * Sets [property`Animation:`state] to `ADW_ANIMATION_PLAYING`.
     */
    resume(): void
    /**
     * Skips the animation for `self`.
     * 
     * If the animation hasn't been started yet, is playing, or is paused, instantly
     * skips the animation to the end and causes [signal`Animation:`:done] to be
     * emitted.
     * 
     * Sets [property`Animation:`state] to `ADW_ANIMATION_FINISHED`.
     */
    skip(): void

    // Own signals of Adw-1.Adw.Animation

    connect(sigName: "done", callback: Animation.DoneSignalCallback): number
    on(sigName: "done", callback: Animation.DoneSignalCallback): number
    once(sigName: "done", callback: Animation.DoneSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "done", ...args: any[]): void

    // Class property signals of Adw-1.Adw.Animation

    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::target", callback: any): number
    on(sigName: "notify::target", callback: any): number
    once(sigName: "notify::target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::widget", callback: any): number
    on(sigName: "notify::widget", callback: any): number
    once(sigName: "notify::widget", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::widget", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A base class for animations.
 * 
 * `AdwAnimation` represents an animation on a widget. It has a target that
 * provides a value to animate, and a state indicating whether the
 * animation hasn't been started yet, is playing, paused or finished.
 * 
 * Currently there are two concrete animation types:
 * [class`TimedAnimation]` and [class`SpringAnimation]`.
 * 
 * `AdwAnimation` will automatically skip the animation if
 * [property`Animation:`widget] is unmapped, or if
 * [property`Gtk`.Settings:gtk-enable-animations] is `FALSE`.
 * 
 * The [signal`Animation:`:done] signal can be used to perform an action after
 * the animation ends, for example hiding a widget after animating its
 * [property`Gtk`.Widget:opacity] to 0.
 * 
 * `AdwAnimation` will be kept alive while the animation is playing. As such,
 * it's safe to create an animation, start it and immediately unref it:
 * A fire-and-forget animation:
 * 
 * ```c
 * static void
 * animation_cb (double    value,
 *               MyObject *self)
 * {
 *   // Do something with `value`
 * }
 * 
 * static void
 * my_object_animate (MyObject *self)
 * {
 *   AdwAnimationTarget *target =
 *     adw_callback_animation_target_new ((AdwAnimationTargetFunc) animation_cb,
 *                                        self, NULL);
 *   g_autoptr (AdwAnimation) animation =
 *     adw_timed_animation_new (widget, 0, 1, 250, target);
 * 
 *   adw_animation_play (animation);
 * }
 * ```
 * 
 * If there's a chance the previous animation for the same target hasn't yet
 * finished, the previous animation should be stopped first, or the existing
 * `AdwAnimation` object can be reused.
 * @class 
 */
export class Animation extends GObject.Object {

    // Own properties of Adw-1.Adw.Animation

    static name: string

    // Constructors of Adw-1.Adw.Animation

    constructor(config?: Animation.ConstructorProperties) 
    _init(config?: Animation.ConstructorProperties): void
}

export module AnimationTarget {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface AnimationTarget {

    // Class property signals of Adw-1.Adw.AnimationTarget

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Represents a value [class`Animation]` can animate.
 * 
 * Currently the only implementation is [class`CallbackAnimationTarget]`.
 * @class 
 */
export class AnimationTarget extends GObject.Object {

    // Own properties of Adw-1.Adw.AnimationTarget

    static name: string

    // Constructors of Adw-1.Adw.AnimationTarget

    constructor(config?: AnimationTarget.ConstructorProperties) 
    _init(config?: AnimationTarget.ConstructorProperties): void
}

export module Application {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.ActionGroup.ConstructorProperties, Gio.ActionMap.ConstructorProperties, Gtk.Application.ConstructorProperties {
    }

}

export interface Application extends Gio.ActionGroup, Gio.ActionMap {

    // Own properties of Adw-1.Adw.Application

    /**
     * The style manager for this application.
     * 
     * This is a convenience property allowing to access `AdwStyleManager` through
     * property bindings or expressions.
     */
    readonly styleManager: StyleManager

    // Own fields of Adw-1.Adw.Application

    parentInstance: any

    // Owm methods of Adw-1.Adw.Application

    /**
     * Gets the style manager for `self`.
     */
    getStyleManager(): StyleManager

    // Class property signals of Adw-1.Adw.Application

    connect(sigName: "notify::style-manager", callback: any): number
    on(sigName: "notify::style-manager", callback: any): number
    once(sigName: "notify::style-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::style-manager", ...args: any[]): void
    connect(sigName: "notify::active-window", callback: any): number
    on(sigName: "notify::active-window", callback: any): number
    once(sigName: "notify::active-window", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active-window", ...args: any[]): void
    connect(sigName: "notify::menubar", callback: any): number
    on(sigName: "notify::menubar", callback: any): number
    once(sigName: "notify::menubar", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::menubar", ...args: any[]): void
    connect(sigName: "notify::register-session", callback: any): number
    on(sigName: "notify::register-session", callback: any): number
    once(sigName: "notify::register-session", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::register-session", ...args: any[]): void
    connect(sigName: "notify::screensaver-active", callback: any): number
    on(sigName: "notify::screensaver-active", callback: any): number
    once(sigName: "notify::screensaver-active", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::screensaver-active", ...args: any[]): void
    connect(sigName: "notify::action-group", callback: any): number
    on(sigName: "notify::action-group", callback: any): number
    once(sigName: "notify::action-group", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::action-group", ...args: any[]): void
    connect(sigName: "notify::application-id", callback: any): number
    on(sigName: "notify::application-id", callback: any): number
    once(sigName: "notify::application-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::application-id", ...args: any[]): void
    connect(sigName: "notify::flags", callback: any): number
    on(sigName: "notify::flags", callback: any): number
    once(sigName: "notify::flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::inactivity-timeout", callback: any): number
    on(sigName: "notify::inactivity-timeout", callback: any): number
    once(sigName: "notify::inactivity-timeout", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::inactivity-timeout", ...args: any[]): void
    connect(sigName: "notify::is-busy", callback: any): number
    on(sigName: "notify::is-busy", callback: any): number
    once(sigName: "notify::is-busy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-busy", ...args: any[]): void
    connect(sigName: "notify::is-registered", callback: any): number
    on(sigName: "notify::is-registered", callback: any): number
    once(sigName: "notify::is-registered", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-registered", ...args: any[]): void
    connect(sigName: "notify::is-remote", callback: any): number
    on(sigName: "notify::is-remote", callback: any): number
    once(sigName: "notify::is-remote", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-remote", ...args: any[]): void
    connect(sigName: "notify::resource-base-path", callback: any): number
    on(sigName: "notify::resource-base-path", callback: any): number
    once(sigName: "notify::resource-base-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resource-base-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A base class for Adwaita applications.
 * 
 * `AdwApplication` handles library initialization by calling [func`init]` in the
 * default [signal`Gio`.Application::startup] signal handler, in turn chaining up
 * as required by [class`Gtk`.Application]. Therefore, any subclass of
 * `AdwApplication` should always chain up its `startup` handler before using
 * any Adwaita or GTK API.
 * 
 * ## Automatic Resources
 * 
 * `AdwApplication` will automatically load stylesheets located in the
 * application's resource base path (see
 * [method`Gio`.Application.set_resource_base_path], if they're present.
 * 
 * They can be used to add custom styles to the application, as follows:
 * 
 * - `style.css` contains styles that are always present.
 * 
 * - `style-dark.css` contains styles only used when
 * [property`StyleManager:`dark] is `TRUE`.
 * 
 * - `style-hc.css` contains styles used when the system high contrast
 *   preference is enabled.
 * 
 * - `style-hc-dark.css` contains styles used when the system high contrast
 *   preference is enabled and [property`StyleManager:`dark] is `TRUE`.
 * @class 
 */
export class Application extends Gtk.Application {

    // Own properties of Adw-1.Adw.Application

    static name: string

    // Constructors of Adw-1.Adw.Application

    constructor(config?: Application.ConstructorProperties) 
    /**
     * Creates a new `AdwApplication`.
     * 
     * If `application_id` is not `NULL`, then it must be valid. See
     * [func`Gio`.Application.id_is_valid].
     * 
     * If no application ID is given then some features (most notably application
     * uniqueness) will be disabled.
     * @constructor 
     * @param applicationId The application ID
     * @param flags The application flags
     */
    constructor(applicationId: string | null, flags: Gio.ApplicationFlags) 
    /**
     * Creates a new `AdwApplication`.
     * 
     * If `application_id` is not `NULL`, then it must be valid. See
     * [func`Gio`.Application.id_is_valid].
     * 
     * If no application ID is given then some features (most notably application
     * uniqueness) will be disabled.
     * @constructor 
     * @param applicationId The application ID
     * @param flags The application flags
     */
    static new(applicationId: string | null, flags: Gio.ApplicationFlags): Application

    // Overloads of new

    /**
     * Creates a new `GtkApplication` instance.
     * 
     * When using `GtkApplication`, it is not necessary to call [func`Gtk`.init]
     * manually. It is called as soon as the application gets registered as
     * the primary instance.
     * 
     * Concretely, [func`Gtk`.init] is called in the default handler for the
     * `GApplication::startup` signal. Therefore, `GtkApplication` subclasses should
     * always chain up in their `GApplication::startup` handler before using any GTK
     * API.
     * 
     * Note that commandline arguments are not passed to [func`Gtk`.init].
     * 
     * If `application_id` is not %NULL, then it must be valid. See
     * `g_application_id_is_valid()`.
     * 
     * If no application ID is given then some features (most notably application
     * uniqueness) will be disabled.
     * @constructor 
     * @param applicationId The application ID
     * @param flags the application flags
     */
    static new(applicationId: string | null, flags: Gio.ApplicationFlags): Gtk.Application
    /**
     * Creates a new #GApplication instance.
     * 
     * If non-%NULL, the application id must be valid.  See
     * g_application_id_is_valid().
     * 
     * If no application ID is given then some features of #GApplication
     * (most notably application uniqueness) will be disabled.
     * @constructor 
     * @param applicationId the application id
     * @param flags the application flags
     */
    static new(applicationId: string | null, flags: Gio.ApplicationFlags): Gio.Application
    _init(config?: Application.ConstructorProperties): void
}

export module ApplicationWindow {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.ActionGroup.ConstructorProperties, Gio.ActionMap.ConstructorProperties, Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Native.ConstructorProperties, Gtk.Root.ConstructorProperties, Gtk.ShortcutManager.ConstructorProperties, Gtk.ApplicationWindow.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ApplicationWindow

        /**
         * The content widget.
         */
        content?: Gtk.Widget | null
    }

}

export interface ApplicationWindow extends Gio.ActionGroup, Gio.ActionMap, Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Native, Gtk.Root, Gtk.ShortcutManager {

    // Own properties of Adw-1.Adw.ApplicationWindow

    /**
     * The content widget.
     */
    content: Gtk.Widget

    // Own fields of Adw-1.Adw.ApplicationWindow

    parentInstance: any

    // Owm methods of Adw-1.Adw.ApplicationWindow

    /**
     * Gets the content widget of `self`.
     * 
     * This method should always be used instead of [method`Gtk`.Window.get_child].
     */
    getContent(): Gtk.Widget | null
    /**
     * Sets the content widget of `self`.
     * 
     * This method should always be used instead of [method`Gtk`.Window.set_child].
     * @param content the content widget
     */
    setContent(content: Gtk.Widget | null): void

    // Conflicting methods

    /**
     * Activate the named action within `action_group`.
     * 
     * If the action is expecting a parameter, then the correct type of
     * parameter must be given as `parameter`.  If the action is expecting no
     * parameters then `parameter` must be %NULL.  See
     * g_action_group_get_action_parameter_type().
     * 
     * If the #GActionGroup implementation supports asynchronous remote
     * activation over D-Bus, this call may return before the relevant
     * D-Bus traffic has been sent, or any replies have been received. In
     * order to block on such asynchronous activation calls,
     * g_dbus_connection_flush() should be called prior to the code, which
     * depends on the result of the action activation. Without flushing
     * the D-Bus connection, there is no guarantee that the action would
     * have been activated.
     * 
     * The following code which runs in a remote app instance, shows an
     * example of a "quit" action being activated on the primary app
     * instance over D-Bus. Here g_dbus_connection_flush() is called
     * before `exit()`. Without g_dbus_connection_flush(), the "quit" action
     * may fail to be activated on the primary instance.
     * 
     * 
     * ```c
     * // call "quit" action on primary instance
     * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
     * 
     * // make sure the action is activated now
     * g_dbus_connection_flush (...);
     * 
     * g_debug ("application has been terminated. exiting.");
     * 
     * exit (0);
     * ```
     * 
     * @virtual 
     * @param actionName the name of the action to activate
     * @param parameter parameters to the activation
     */
    activateAction(actionName: string, parameter: GLib.Variant | null): void
    /**
     * Looks up the action in the action groups associated with
     * `widget` and its ancestors, and activates it.
     * 
     * If the action is in an action group added with
     * [method`Gtk`.Widget.insert_action_group], the `name` is expected
     * to be prefixed with the prefix that was used when the group was
     * inserted.
     * 
     * The arguments must match the actions expected parameter type,
     * as returned by `g_action_get_parameter_type()`.
     * @param name the name of the action to activate
     * @param args parameters to use
     */
    activateAction(name: string, args: GLib.Variant | null): boolean
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
    /**
     * Activates the `default.activate` action from `widget`.
     */
    activateDefault(): void
    activateDefault(): void

    // Overloads of activateDefault

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
    /**
     * Returns the unique ID of the window.
     * 
     *  If the window has not yet been added to a `GtkApplication`, returns `0`.
     */
    getId(): number

    // Overloads of getId

    getId(): string
    getId(): string

    // Class property signals of Adw-1.Adw.ApplicationWindow

    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::show-menubar", callback: any): number
    on(sigName: "notify::show-menubar", callback: any): number
    once(sigName: "notify::show-menubar", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-menubar", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A freeform application window.
 * 
 * <picture>
 *   <source srcset="application-window-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="application-window.png" alt="application-window">
 * </picture>
 * 
 * `AdwApplicationWindow` is a [class`Gtk`.ApplicationWindow] subclass providing
 * the same features as [class`Window]`.
 * 
 * See [class`Window]` for details.
 * 
 * Using [property`Gtk`.Application:menubar] is not supported and may result in
 * visual glitches.
 * @class 
 */
export class ApplicationWindow extends Gtk.ApplicationWindow {

    // Own properties of Adw-1.Adw.ApplicationWindow

    static name: string

    // Constructors of Adw-1.Adw.ApplicationWindow

    constructor(config?: ApplicationWindow.ConstructorProperties) 
    /**
     * Creates a new `AdwApplicationWindow` for `app`.
     * @constructor 
     * @param app an application instance
     */
    constructor(app: Gtk.Application) 
    /**
     * Creates a new `AdwApplicationWindow` for `app`.
     * @constructor 
     * @param app an application instance
     */
    static new(app: Gtk.Application): ApplicationWindow

    // Overloads of new

    /**
     * Creates a new `GtkApplicationWindow`.
     * @constructor 
     * @param application a `GtkApplication`
     */
    static new(application: Gtk.Application): Gtk.ApplicationWindow
    /**
     * Creates a new `GtkWindow`.
     * 
     * To get an undecorated window (no window borders), use
     * [method`Gtk`.Window.set_decorated].
     * 
     * All top-level windows created by gtk_window_new() are stored
     * in an internal top-level window list. This list can be obtained
     * from [func`Gtk`.Window.list_toplevels]. Due to GTK keeping a
     * reference to the window internally, gtk_window_new() does not
     * return a reference to the caller.
     * 
     * To delete a `GtkWindow`, call [method`Gtk`.Window.destroy].
     * @constructor 
     */
    static new(): Gtk.Window
    _init(config?: ApplicationWindow.ConstructorProperties): void
}

export module Avatar {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.Avatar

        /**
         * A custom image to use instead of initials or icon.
         */
        customImage?: Gdk.Paintable | null
        /**
         * The name of an icon to use as a fallback.
         * 
         * If no name is set, `avatar-default-symbolic` will be used.
         */
        iconName?: string | null
        /**
         * Whether initials are used instead of an icon on the fallback avatar.
         * 
         * See [property`Avatar:`icon-name] for how to change the fallback icon.
         */
        showInitials?: boolean | null
        /**
         * The size of the avatar.
         */
        size?: number | null
        /**
         * Sets the text used to generate the fallback initials and color.
         * 
         * It's only used to generate the color if [property`Avatar:`show-initials] is
         * `FALSE`.
         */
        text?: string | null
    }

}

export interface Avatar extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.Avatar

    /**
     * A custom image to use instead of initials or icon.
     */
    customImage: Gdk.Paintable
    /**
     * The name of an icon to use as a fallback.
     * 
     * If no name is set, `avatar-default-symbolic` will be used.
     */
    iconName: string
    /**
     * Whether initials are used instead of an icon on the fallback avatar.
     * 
     * See [property`Avatar:`icon-name] for how to change the fallback icon.
     */
    showInitials: boolean
    /**
     * The size of the avatar.
     */
    size: number
    /**
     * Sets the text used to generate the fallback initials and color.
     * 
     * It's only used to generate the color if [property`Avatar:`show-initials] is
     * `FALSE`.
     */
    text: string

    // Owm methods of Adw-1.Adw.Avatar

    /**
     * Renders `self` into a [class`Gdk`.Texture] at `scale_factor`.
     * 
     * This can be used to export the fallback avatar.
     * @param scaleFactor The scale factor
     */
    drawToTexture(scaleFactor: number): Gdk.Texture
    /**
     * Gets the custom image paintable.
     */
    getCustomImage(): Gdk.Paintable | null
    /**
     * Gets the name of an icon to use as a fallback.
     */
    getIconName(): string | null
    /**
     * Gets whether initials are used instead of an icon on the fallback avatar.
     */
    getShowInitials(): boolean
    /**
     * Gets the size of the avatar.
     */
    getSize(): number

    // Overloads of getSize

    /**
     * Returns the content width or height of the widget.
     * 
     * Which dimension is returned depends on `orientation`.
     * 
     * This is equivalent to calling [method`Gtk`.Widget.get_width]
     * for %GTK_ORIENTATION_HORIZONTAL or [method`Gtk`.Widget.get_height]
     * for %GTK_ORIENTATION_VERTICAL, but can be used when
     * writing orientation-independent code, such as when
     * implementing [iface`Gtk`.Orientable] widgets.
     * @param orientation the orientation to query
     */
    getSize(orientation: Gtk.Orientation): number
    /**
     * Gets the text used to generate the fallback initials and color.
     */
    getText(): string | null
    /**
     * Sets the custom image paintable.
     * @param customImage a custom image
     */
    setCustomImage(customImage: Gdk.Paintable | null): void
    /**
     * Sets the name of an icon to use as a fallback.
     * 
     * If no name is set, `avatar-default-symbolic` will be used.
     * @param iconName the icon name
     */
    setIconName(iconName: string | null): void
    /**
     * Sets whether to use initials instead of an icon on the fallback avatar.
     * @param showInitials whether to use initials instead of an icon as fallback
     */
    setShowInitials(showInitials: boolean): void
    /**
     * Sets the size of the avatar.
     * @param size The size of the avatar
     */
    setSize(size: number): void
    /**
     * Sets the text used to generate the fallback initials and color.
     * @param text the text used to get the initials and color
     */
    setText(text: string | null): void

    // Class property signals of Adw-1.Adw.Avatar

    connect(sigName: "notify::custom-image", callback: any): number
    on(sigName: "notify::custom-image", callback: any): number
    once(sigName: "notify::custom-image", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::custom-image", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::show-initials", callback: any): number
    on(sigName: "notify::show-initials", callback: any): number
    once(sigName: "notify::show-initials", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-initials", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text", callback: any): number
    on(sigName: "notify::text", callback: any): number
    once(sigName: "notify::text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A widget displaying an image, with a generated fallback.
 * 
 * <picture>
 *   <source srcset="avatar-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="avatar.png" alt="avatar">
 * </picture>
 * 
 * `AdwAvatar` is a widget that shows a round avatar.
 * 
 * `AdwAvatar` generates an avatar with the initials of  the
 * [property`Avatar:`text] on top of a colored background.
 * 
 * The color is picked based on the hash of the [property`Avatar:`text].
 * 
 * If [property`Avatar:`show-initials] is set to `FALSE`,
 * [property`Avatar:`icon-name] or `avatar-default-symbolic` is shown instead of
 * the initials.
 * 
 * Use [property`Avatar:`custom-image] to set a custom image.
 * 
 * ## CSS nodes
 * 
 * `AdwAvatar` has a single CSS node with name `avatar`.
 * @class 
 */
export class Avatar extends Gtk.Widget {

    // Own properties of Adw-1.Adw.Avatar

    static name: string

    // Constructors of Adw-1.Adw.Avatar

    constructor(config?: Avatar.ConstructorProperties) 
    /**
     * Creates a new `AdwAvatar`.
     * @constructor 
     * @param size The size of the avatar
     * @param text the text used to get the initials and color
     * @param showInitials whether to use initials instead of an icon as fallback
     */
    constructor(size: number, text: string | null, showInitials: boolean) 
    /**
     * Creates a new `AdwAvatar`.
     * @constructor 
     * @param size The size of the avatar
     * @param text the text used to get the initials and color
     * @param showInitials whether to use initials instead of an icon as fallback
     */
    static new(size: number, text: string | null, showInitials: boolean): Avatar
    _init(config?: Avatar.ConstructorProperties): void
}

export module Bin {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.Bin

        /**
         * The child widget of the `AdwBin`.
         */
        child?: Gtk.Widget | null
    }

}

export interface Bin extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.Bin

    /**
     * The child widget of the `AdwBin`.
     */
    child: Gtk.Widget

    // Own fields of Adw-1.Adw.Bin

    parentInstance: any

    // Owm methods of Adw-1.Adw.Bin

    /**
     * Gets the child widget of `self`.
     */
    getChild(): Gtk.Widget | null
    /**
     * Sets the child widget of `self`.
     * @param child the child widget
     */
    setChild(child: Gtk.Widget | null): void

    // Class property signals of Adw-1.Adw.Bin

    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A widget with one child.
 * 
 * <picture>
 *   <source srcset="bin-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="bin.png" alt="bin">
 * </picture>
 * 
 * The `AdwBin` widget has only one child, set with the [property`Bin:`child]
 * property.
 * 
 * It is useful for deriving subclasses, since it provides common code needed
 * for handling a single child widget.
 * @class 
 */
export class Bin extends Gtk.Widget {

    // Own properties of Adw-1.Adw.Bin

    static name: string

    // Constructors of Adw-1.Adw.Bin

    constructor(config?: Bin.ConstructorProperties) 
    /**
     * Creates a new `AdwBin`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwBin`.
     * @constructor 
     */
    static new(): Bin
    _init(config?: Bin.ConstructorProperties): void
}

export module ButtonContent {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ButtonContent

        /**
         * The name of the displayed icon.
         * 
         * If empty, the icon is not shown.
         */
        iconName?: string | null
        /**
         * The displayed label.
         */
        label?: string | null
        /**
         * Whether an underline in the text indicates a mnemonic.
         * 
         * The mnemonic can be used to activate the parent button.
         * 
         * See [property`ButtonContent:`label].
         */
        useUnderline?: boolean | null
    }

}

export interface ButtonContent extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.ButtonContent

    /**
     * The name of the displayed icon.
     * 
     * If empty, the icon is not shown.
     */
    iconName: string
    /**
     * The displayed label.
     */
    label: string
    /**
     * Whether an underline in the text indicates a mnemonic.
     * 
     * The mnemonic can be used to activate the parent button.
     * 
     * See [property`ButtonContent:`label].
     */
    useUnderline: boolean

    // Owm methods of Adw-1.Adw.ButtonContent

    /**
     * Gets the name of the displayed icon.
     */
    getIconName(): string
    /**
     * Gets the displayed label.
     */
    getLabel(): string
    /**
     * Gets whether an underline in the text indicates a mnemonic.
     */
    getUseUnderline(): boolean
    /**
     * Sets the name of the displayed icon.
     * @param iconName the new icon name
     */
    setIconName(iconName: string): void
    /**
     * Sets the displayed label.
     * @param label the new label
     */
    setLabel(label: string): void
    /**
     * Sets whether an underline in the text indicates a mnemonic.
     * @param useUnderline whether an underline in the text indicates a mnemonic
     */
    setUseUnderline(useUnderline: boolean): void

    // Class property signals of Adw-1.Adw.ButtonContent

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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A helper widget for creating buttons.
 * 
 * <picture>
 *   <source srcset="button-content-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="button-content.png" alt="button-content">
 * </picture>
 * 
 * `AdwButtonContent` is a box-like widget with an icon and a label.
 * 
 * It's intended to be used as a direct child of [class`Gtk`.Button],
 * [class`Gtk`.MenuButton] or [class`SplitButton]`, when they need to have both an
 * icon and a label, as follows:
 * 
 * ```xml
 * <object class="GtkButton">
 *   <property name="child">
 *     <object class="AdwButtonContent">
 *       <property name="icon-name">document-open-symbolic</property>
 *       <property name="label" translatable="yes">_Open</property>
 *       <property name="use-underline">True</property>
 *     </object>
 *   </property>
 * </object>
 * ```
 * 
 * `AdwButtonContent` handles style classes and connecting the mnemonic to the
 * button automatically.
 * 
 * ## CSS nodes
 * 
 * ```
 * buttoncontent
 * ├── image
 * ╰── label
 * ```
 * 
 * `AdwButtonContent`'s CSS node is called `buttoncontent`. It contains the
 * subnodes `image` and `label`.
 * 
 * When inside a `GtkButton` or `AdwSplitButton`, the button will receive the
 * `.image-text-button` style class. When inside a `GtkMenuButton`, the
 * internal `GtkButton` will receive it instead.
 * 
 * ## Accessibility
 * 
 * `AdwButtonContent` uses the `GTK_ACCESSIBLE_ROLE_GROUP` role.
 * @class 
 */
export class ButtonContent extends Gtk.Widget {

    // Own properties of Adw-1.Adw.ButtonContent

    static name: string

    // Constructors of Adw-1.Adw.ButtonContent

    constructor(config?: ButtonContent.ConstructorProperties) 
    /**
     * Creates a new `AdwButtonContent`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwButtonContent`.
     * @constructor 
     */
    static new(): ButtonContent
    _init(config?: ButtonContent.ConstructorProperties): void
}

export module CallbackAnimationTarget {

    // Constructor properties interface

    export interface ConstructorProperties extends AnimationTarget.ConstructorProperties {
    }

}

export interface CallbackAnimationTarget {

    // Class property signals of Adw-1.Adw.CallbackAnimationTarget

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An [class`AnimationTarget]` that calls a given callback during the
 * animation.
 * @class 
 */
export class CallbackAnimationTarget extends AnimationTarget {

    // Own properties of Adw-1.Adw.CallbackAnimationTarget

    static name: string

    // Constructors of Adw-1.Adw.CallbackAnimationTarget

    constructor(config?: CallbackAnimationTarget.ConstructorProperties) 
    /**
     * Creates a new `AdwAnimationTarget` that calls the given `callback` during
     * the animation.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwAnimationTarget` that calls the given `callback` during
     * the animation.
     * @constructor 
     */
    static new(): CallbackAnimationTarget
    _init(config?: CallbackAnimationTarget.ConstructorProperties): void
}

export module Carousel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `page-changed`
     */
    export interface PageChangedSignalCallback {
        (index: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Swipeable.ConstructorProperties, Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.Carousel

        /**
         * Whether to allow swiping for more than one page at a time.
         * 
         * If the value is `FALSE`, each swipe can only move to the adjacent pages.
         */
        allowLongSwipes?: boolean | null
        /**
         * Sets whether the `AdwCarousel` can be dragged with mouse pointer.
         * 
         * If the value is `FALSE`, dragging is only available on touch.
         */
        allowMouseDrag?: boolean | null
        /**
         * Whether the widget will respond to scroll wheel events.
         * 
         * If the value is `FALSE`, wheel events will be ignored.
         */
        allowScrollWheel?: boolean | null
        /**
         * Whether the carousel can be navigated.
         * 
         * This can be used to temporarily disable a `AdwCarousel` to only allow
         * navigating it in a certain state.
         */
        interactive?: boolean | null
        /**
         * Page reveal duration, in milliseconds.
         */
        revealDuration?: number | null
        /**
         * Scroll animation spring parameters.
         * 
         * The default value is equivalent to:
         * 
         * ```c
         * adw_spring_params_new (1, 0.5, 500)
         * ```
         */
        scrollParams?: SpringParams | null
        /**
         * Spacing between pages in pixels.
         */
        spacing?: number | null
    }

}

export interface Carousel extends Swipeable, Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {

    // Own properties of Adw-1.Adw.Carousel

    /**
     * Whether to allow swiping for more than one page at a time.
     * 
     * If the value is `FALSE`, each swipe can only move to the adjacent pages.
     */
    allowLongSwipes: boolean
    /**
     * Sets whether the `AdwCarousel` can be dragged with mouse pointer.
     * 
     * If the value is `FALSE`, dragging is only available on touch.
     */
    allowMouseDrag: boolean
    /**
     * Whether the widget will respond to scroll wheel events.
     * 
     * If the value is `FALSE`, wheel events will be ignored.
     */
    allowScrollWheel: boolean
    /**
     * Whether the carousel can be navigated.
     * 
     * This can be used to temporarily disable a `AdwCarousel` to only allow
     * navigating it in a certain state.
     */
    interactive: boolean
    /**
     * The number of pages in a `AdwCarousel`.
     */
    readonly nPages: number
    /**
     * Current scrolling position, unitless.
     * 
     * 1 matches 1 page. Use [method`Carousel`.scroll_to] for changing it.
     */
    readonly position: number
    /**
     * Page reveal duration, in milliseconds.
     */
    revealDuration: number
    /**
     * Scroll animation spring parameters.
     * 
     * The default value is equivalent to:
     * 
     * ```c
     * adw_spring_params_new (1, 0.5, 500)
     * ```
     */
    scrollParams: SpringParams
    /**
     * Spacing between pages in pixels.
     */
    spacing: number

    // Owm methods of Adw-1.Adw.Carousel

    /**
     * Appends `child` to `self`.
     * @param child a widget to add
     */
    append(child: Gtk.Widget): void
    /**
     * Gets whether to allow swiping for more than one page at a time.
     */
    getAllowLongSwipes(): boolean
    /**
     * Sets whether `self` can be dragged with mouse pointer.
     */
    getAllowMouseDrag(): boolean
    /**
     * Gets whether `self` will respond to scroll wheel events.
     */
    getAllowScrollWheel(): boolean
    /**
     * Gets whether `self` can be navigated.
     */
    getInteractive(): boolean
    /**
     * Gets the number of pages in `self`.
     */
    getNPages(): number
    /**
     * Gets the page at position `n`.
     * @param n index of the page
     */
    getNthPage(n: number): Gtk.Widget
    /**
     * Gets current scroll position in `self`.
     * 
     * It's unitless, 1 matches 1 page.
     */
    getPosition(): number
    /**
     * Gets duration of the animation used when adding or removing pages.
     */
    getRevealDuration(): number
    /**
     * Gets the scroll animation spring parameters for `self`.
     */
    getScrollParams(): SpringParams
    /**
     * Gets spacing between pages in pixels.
     */
    getSpacing(): number
    /**
     * Inserts `child` into `self` at position `position`.
     * 
     * If position is -1, or larger than the number of pages,
     * `child` will be appended to the end.
     * @param child a widget to add
     * @param position the position to insert `child` at
     */
    insert(child: Gtk.Widget, position: number): void
    /**
     * Prepends `child` to `self`.
     * @param child a widget to add
     */
    prepend(child: Gtk.Widget): void
    /**
     * Removes `child` from `self`.
     * @param child a widget to remove
     */
    remove(child: Gtk.Widget): void
    /**
     * Moves `child` into position `position`.
     * 
     * If position is -1, or larger than the number of pages, `child` will be moved
     * at the end.
     * @param child a widget to add
     * @param position the position to move `child` to
     */
    reorder(child: Gtk.Widget, position: number): void
    /**
     * Scrolls to `widget`.
     * 
     * If `animate` is `TRUE`, the transition will be animated.
     * @param widget a child of `self`
     * @param animate whether to animate the transition
     */
    scrollTo(widget: Gtk.Widget, animate: boolean): void
    /**
     * Sets whether to allow swiping for more than one page at a time.
     * @param allowLongSwipes whether to allow long swipes
     */
    setAllowLongSwipes(allowLongSwipes: boolean): void
    /**
     * Sets whether `self` can be dragged with mouse pointer.
     * @param allowMouseDrag whether `self` can be dragged with mouse pointer
     */
    setAllowMouseDrag(allowMouseDrag: boolean): void
    /**
     * Sets whether `self` will respond to scroll wheel events.
     * @param allowScrollWheel whether `self` will respond to scroll wheel events
     */
    setAllowScrollWheel(allowScrollWheel: boolean): void
    /**
     * Sets whether `self` can be navigated.
     * @param interactive whether `self` can be navigated
     */
    setInteractive(interactive: boolean): void
    /**
     * Sets duration of the animation used when adding or removing pages.
     * @param revealDuration the new reveal duration value
     */
    setRevealDuration(revealDuration: number): void
    /**
     * Sets the scroll animation spring parameters for `self`.
     * @param params the new parameters
     */
    setScrollParams(params: SpringParams): void
    /**
     * Sets spacing between pages in pixels.
     * @param spacing the new spacing value
     */
    setSpacing(spacing: number): void

    // Own signals of Adw-1.Adw.Carousel

    connect(sigName: "page-changed", callback: Carousel.PageChangedSignalCallback): number
    on(sigName: "page-changed", callback: Carousel.PageChangedSignalCallback): number
    once(sigName: "page-changed", callback: Carousel.PageChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "page-changed", ...args: any[]): void

    // Class property signals of Adw-1.Adw.Carousel

    connect(sigName: "notify::allow-long-swipes", callback: any): number
    on(sigName: "notify::allow-long-swipes", callback: any): number
    once(sigName: "notify::allow-long-swipes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allow-long-swipes", ...args: any[]): void
    connect(sigName: "notify::allow-mouse-drag", callback: any): number
    on(sigName: "notify::allow-mouse-drag", callback: any): number
    once(sigName: "notify::allow-mouse-drag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allow-mouse-drag", ...args: any[]): void
    connect(sigName: "notify::allow-scroll-wheel", callback: any): number
    on(sigName: "notify::allow-scroll-wheel", callback: any): number
    once(sigName: "notify::allow-scroll-wheel", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allow-scroll-wheel", ...args: any[]): void
    connect(sigName: "notify::interactive", callback: any): number
    on(sigName: "notify::interactive", callback: any): number
    once(sigName: "notify::interactive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interactive", ...args: any[]): void
    connect(sigName: "notify::n-pages", callback: any): number
    on(sigName: "notify::n-pages", callback: any): number
    once(sigName: "notify::n-pages", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::n-pages", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reveal-duration", callback: any): number
    on(sigName: "notify::reveal-duration", callback: any): number
    once(sigName: "notify::reveal-duration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reveal-duration", ...args: any[]): void
    connect(sigName: "notify::scroll-params", callback: any): number
    on(sigName: "notify::scroll-params", callback: any): number
    once(sigName: "notify::scroll-params", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scroll-params", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
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
 * A paginated scrolling widget.
 * 
 * <picture>
 *   <source srcset="carousel-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="carousel.png" alt="carousel">
 * </picture>
 * 
 * The `AdwCarousel` widget can be used to display a set of pages with
 * swipe-based navigation between them.
 * 
 * [class`CarouselIndicatorDots]` and [class`CarouselIndicatorLines]` can be used
 * to provide page indicators for `AdwCarousel`.
 * 
 * ## CSS nodes
 * 
 * `AdwCarousel` has a single CSS node with name `carousel`.
 * @class 
 */
export class Carousel extends Gtk.Widget {

    // Own properties of Adw-1.Adw.Carousel

    static name: string

    // Constructors of Adw-1.Adw.Carousel

    constructor(config?: Carousel.ConstructorProperties) 
    /**
     * Creates a new `AdwCarousel`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwCarousel`.
     * @constructor 
     */
    static new(): Carousel
    _init(config?: Carousel.ConstructorProperties): void
}

export module CarouselIndicatorDots {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.CarouselIndicatorDots

        /**
         * The displayed carousel.
         */
        carousel?: Carousel | null
    }

}

export interface CarouselIndicatorDots extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {

    // Own properties of Adw-1.Adw.CarouselIndicatorDots

    /**
     * The displayed carousel.
     */
    carousel: Carousel

    // Owm methods of Adw-1.Adw.CarouselIndicatorDots

    /**
     * Gets the displayed carousel.
     */
    getCarousel(): Carousel | null
    /**
     * Sets the displayed carousel.
     * @param carousel a carousel
     */
    setCarousel(carousel: Carousel | null): void

    // Class property signals of Adw-1.Adw.CarouselIndicatorDots

    connect(sigName: "notify::carousel", callback: any): number
    on(sigName: "notify::carousel", callback: any): number
    once(sigName: "notify::carousel", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::carousel", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
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
 * A dots indicator for [class`Carousel]`.
 * 
 * <picture>
 *   <source srcset="carousel-indicator-dots-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="carousel-indicator-dots.png" alt="carousel-indicator-dots">
 * </picture>
 * 
 * The `AdwCarouselIndicatorDots` widget shows a set of dots for each page of a
 * given [class`Carousel]`. The dot representing the carousel's active page is
 * larger and more opaque than the others, the transition to the active and
 * inactive state is gradual to match the carousel's position.
 * 
 * See also [class`CarouselIndicatorLines]`.
 * 
 * ## CSS nodes
 * 
 * `AdwCarouselIndicatorDots` has a single CSS node with name
 * `carouselindicatordots`.
 * @class 
 */
export class CarouselIndicatorDots extends Gtk.Widget {

    // Own properties of Adw-1.Adw.CarouselIndicatorDots

    static name: string

    // Constructors of Adw-1.Adw.CarouselIndicatorDots

    constructor(config?: CarouselIndicatorDots.ConstructorProperties) 
    /**
     * Creates a new `AdwCarouselIndicatorDots`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwCarouselIndicatorDots`.
     * @constructor 
     */
    static new(): CarouselIndicatorDots
    _init(config?: CarouselIndicatorDots.ConstructorProperties): void
}

export module CarouselIndicatorLines {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.CarouselIndicatorLines

        /**
         * The displayed carousel.
         */
        carousel?: Carousel | null
    }

}

export interface CarouselIndicatorLines extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {

    // Own properties of Adw-1.Adw.CarouselIndicatorLines

    /**
     * The displayed carousel.
     */
    carousel: Carousel

    // Owm methods of Adw-1.Adw.CarouselIndicatorLines

    /**
     * Gets the displayed carousel.
     */
    getCarousel(): Carousel | null
    /**
     * Sets the displayed carousel.
     * @param carousel a carousel
     */
    setCarousel(carousel: Carousel | null): void

    // Class property signals of Adw-1.Adw.CarouselIndicatorLines

    connect(sigName: "notify::carousel", callback: any): number
    on(sigName: "notify::carousel", callback: any): number
    once(sigName: "notify::carousel", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::carousel", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
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
 * A lines indicator for [class`Carousel]`.
 * 
 * <picture>
 *   <source srcset="carousel-indicator-dots-lines.png" media="(prefers-color-scheme: dark)">
 *   <img src="carousel-indicator-lines.png" alt="carousel-indicator-lines">
 * </picture>
 * 
 * The `AdwCarouselIndicatorLines` widget shows a set of lines for each page of
 * a given [class`Carousel]`. The carousel's active page is shown as another line
 * that moves between them to match the carousel's position.
 * 
 * See also [class`CarouselIndicatorDots]`.
 * 
 * ## CSS nodes
 * 
 * `AdwCarouselIndicatorLines` has a single CSS node with name
 * `carouselindicatorlines`.
 * @class 
 */
export class CarouselIndicatorLines extends Gtk.Widget {

    // Own properties of Adw-1.Adw.CarouselIndicatorLines

    static name: string

    // Constructors of Adw-1.Adw.CarouselIndicatorLines

    constructor(config?: CarouselIndicatorLines.ConstructorProperties) 
    /**
     * Creates a new `AdwCarouselIndicatorLines`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwCarouselIndicatorLines`.
     * @constructor 
     */
    static new(): CarouselIndicatorLines
    _init(config?: CarouselIndicatorLines.ConstructorProperties): void
}

export module Clamp {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.Clamp

        /**
         * The child widget of the `AdwClamp`.
         */
        child?: Gtk.Widget | null
        /**
         * The maximum size allocated to the child.
         * 
         * It is the width if the clamp is horizontal, or the height if it is vertical.
         */
        maximumSize?: number | null
        /**
         * The size above which the child is clamped.
         * 
         * Starting from this size, the clamp will tighten its grip on the child,
         * slowly allocating less and less of the available size up to the maximum
         * allocated size. Below that threshold and below the maximum size, the child
         * will be allocated all the available size.
         * 
         * If the threshold is greater than the maximum size to allocate to the child,
         * the child will be allocated all the size up to the maximum.
         * If the threshold is lower than the minimum size to allocate to the child,
         * that size will be used as the tightening threshold.
         * 
         * Effectively, tightening the grip on the child before it reaches its maximum
         * size makes transitions to and from the maximum size smoother when resizing.
         */
        tighteningThreshold?: number | null
    }

}

export interface Clamp extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {

    // Own properties of Adw-1.Adw.Clamp

    /**
     * The child widget of the `AdwClamp`.
     */
    child: Gtk.Widget
    /**
     * The maximum size allocated to the child.
     * 
     * It is the width if the clamp is horizontal, or the height if it is vertical.
     */
    maximumSize: number
    /**
     * The size above which the child is clamped.
     * 
     * Starting from this size, the clamp will tighten its grip on the child,
     * slowly allocating less and less of the available size up to the maximum
     * allocated size. Below that threshold and below the maximum size, the child
     * will be allocated all the available size.
     * 
     * If the threshold is greater than the maximum size to allocate to the child,
     * the child will be allocated all the size up to the maximum.
     * If the threshold is lower than the minimum size to allocate to the child,
     * that size will be used as the tightening threshold.
     * 
     * Effectively, tightening the grip on the child before it reaches its maximum
     * size makes transitions to and from the maximum size smoother when resizing.
     */
    tighteningThreshold: number

    // Owm methods of Adw-1.Adw.Clamp

    /**
     * Gets the child widget of `self`.
     */
    getChild(): Gtk.Widget | null
    /**
     * Gets the maximum size allocated to the child.
     */
    getMaximumSize(): number
    /**
     * Gets the size above which the child is clamped.
     */
    getTighteningThreshold(): number
    /**
     * Sets the child widget of `self`.
     * @param child the child widget
     */
    setChild(child: Gtk.Widget | null): void
    /**
     * Sets the maximum size allocated to the child.
     * @param maximumSize the maximum size
     */
    setMaximumSize(maximumSize: number): void
    /**
     * Sets the size above which the child is clamped.
     * @param tighteningThreshold the tightening threshold
     */
    setTighteningThreshold(tighteningThreshold: number): void

    // Class property signals of Adw-1.Adw.Clamp

    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::maximum-size", callback: any): number
    on(sigName: "notify::maximum-size", callback: any): number
    once(sigName: "notify::maximum-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::maximum-size", ...args: any[]): void
    connect(sigName: "notify::tightening-threshold", callback: any): number
    on(sigName: "notify::tightening-threshold", callback: any): number
    once(sigName: "notify::tightening-threshold", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tightening-threshold", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
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
 * A widget constraining its child to a given size.
 * 
 * <picture>
 *   <source srcset="clamp-wide-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="clamp-wide.png" alt="clamp-wide">
 * </picture>
 * <picture>
 *   <source srcset="clamp-narrow-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="clamp-narrow.png" alt="clamp-narrow">
 * </picture>
 * 
 * The `AdwClamp` widget constrains the size of the widget it contains to a
 * given maximum size. It will constrain the width if it is horizontal, or the
 * height if it is vertical. The expansion of the child from its minimum to its
 * maximum size is eased out for a smooth transition.
 * 
 * If the child requires more than the requested maximum size, it will be
 * allocated the minimum size it can fit in instead.
 * 
 * ## CSS nodes
 * 
 * `AdwClamp` has a single CSS node with name `clamp`.
 * 
 * Its children will receive the style classes `.large` when the child reached
 * its maximum size, `.small` when the clamp allocates its full size to the
 * child, `.medium` in-between, or none if it hasn't computed its size yet.
 * @class 
 */
export class Clamp extends Gtk.Widget {

    // Own properties of Adw-1.Adw.Clamp

    static name: string

    // Constructors of Adw-1.Adw.Clamp

    constructor(config?: Clamp.ConstructorProperties) 
    /**
     * Creates a new `AdwClamp`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwClamp`.
     * @constructor 
     */
    static new(): Clamp
    _init(config?: Clamp.ConstructorProperties): void
}

export module ClampLayout {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Orientable.ConstructorProperties, Gtk.LayoutManager.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ClampLayout

        /**
         * The maximum size to allocate to the children.
         * 
         * It is the width if the layout is horizontal, or the height if it is
         * vertical.
         */
        maximumSize?: number | null
        /**
         * The size above which the child is clamped.
         * 
         * Starting from this size, the layout will tighten its grip on the children,
         * slowly allocating less and less of the available size up to the maximum
         * allocated size. Below that threshold and below the maximum size, the
         * children will be allocated all the available size.
         * 
         * If the threshold is greater than the maximum size to allocate to the
         * children, they will be allocated the whole size up to the maximum. If the
         * threshold is lower than the minimum size to allocate to the children, that
         * size will be used as the tightening threshold.
         * 
         * Effectively, tightening the grip on a child before it reaches its maximum
         * size makes transitions to and from the maximum size smoother when resizing.
         */
        tighteningThreshold?: number | null
    }

}

export interface ClampLayout extends Gtk.Orientable {

    // Own properties of Adw-1.Adw.ClampLayout

    /**
     * The maximum size to allocate to the children.
     * 
     * It is the width if the layout is horizontal, or the height if it is
     * vertical.
     */
    maximumSize: number
    /**
     * The size above which the child is clamped.
     * 
     * Starting from this size, the layout will tighten its grip on the children,
     * slowly allocating less and less of the available size up to the maximum
     * allocated size. Below that threshold and below the maximum size, the
     * children will be allocated all the available size.
     * 
     * If the threshold is greater than the maximum size to allocate to the
     * children, they will be allocated the whole size up to the maximum. If the
     * threshold is lower than the minimum size to allocate to the children, that
     * size will be used as the tightening threshold.
     * 
     * Effectively, tightening the grip on a child before it reaches its maximum
     * size makes transitions to and from the maximum size smoother when resizing.
     */
    tighteningThreshold: number

    // Owm methods of Adw-1.Adw.ClampLayout

    /**
     * Gets the maximum size allocated to the children.
     */
    getMaximumSize(): number
    /**
     * Gets the size above which the children are clamped.
     */
    getTighteningThreshold(): number
    /**
     * Sets the maximum size allocated to the children.
     * @param maximumSize the maximum size
     */
    setMaximumSize(maximumSize: number): void
    /**
     * Sets the size above which the children are clamped.
     * @param tighteningThreshold the tightening threshold
     */
    setTighteningThreshold(tighteningThreshold: number): void

    // Class property signals of Adw-1.Adw.ClampLayout

    connect(sigName: "notify::maximum-size", callback: any): number
    on(sigName: "notify::maximum-size", callback: any): number
    once(sigName: "notify::maximum-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::maximum-size", ...args: any[]): void
    connect(sigName: "notify::tightening-threshold", callback: any): number
    on(sigName: "notify::tightening-threshold", callback: any): number
    once(sigName: "notify::tightening-threshold", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tightening-threshold", ...args: any[]): void
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
 * A layout manager constraining its children to a given size.
 * 
 * <picture>
 *   <source srcset="clamp-wide-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="clamp-wide.png" alt="clamp-wide">
 * </picture>
 * <picture>
 *   <source srcset="clamp-narrow-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="clamp-narrow.png" alt="clamp-narrow">
 * </picture>
 * 
 * `AdwClampLayout` constraints the size of the widgets it contains to a given
 * maximum size. It will constrain the width if it is horizontal, or the height
 * if it is vertical. The expansion of the children from their minimum to their
 * maximum size is eased out for a smooth transition.
 * 
 * If a child requires more than the requested maximum size, it will be
 * allocated the minimum size it can fit in instead.
 * 
 * Each child will get the style  classes .large when it reached its maximum
 * size, .small when it's allocated the full size, .medium in-between, or none
 * if it hasn't been allocated yet.
 * @class 
 */
export class ClampLayout extends Gtk.LayoutManager {

    // Own properties of Adw-1.Adw.ClampLayout

    static name: string

    // Constructors of Adw-1.Adw.ClampLayout

    constructor(config?: ClampLayout.ConstructorProperties) 
    /**
     * Creates a new `AdwClampLayout`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwClampLayout`.
     * @constructor 
     */
    static new(): ClampLayout
    _init(config?: ClampLayout.ConstructorProperties): void
}

export module ClampScrollable {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ClampScrollable

        /**
         * The child widget of the `AdwClampScrollable`.
         */
        child?: Gtk.Widget | null
        /**
         * The maximum size allocated to the child.
         * 
         * It is the width if the clamp is horizontal, or the height if it is vertical.
         */
        maximumSize?: number | null
        /**
         * The size above which the child is clamped.
         * 
         * Starting from this size, the clamp will tighten its grip on the child,
         * slowly allocating less and less of the available size up to the maximum
         * allocated size. Below that threshold and below the maximum width, the child
         * will be allocated all the available size.
         * 
         * If the threshold is greater than the maximum size to allocate to the child,
         * the child will be allocated all the width up to the maximum.
         * If the threshold is lower than the minimum size to allocate to the child,
         * that size will be used as the tightening threshold.
         * 
         * Effectively, tightening the grip on the child before it reaches its maximum
         * size makes transitions to and from the maximum size smoother when resizing.
         */
        tighteningThreshold?: number | null
    }

}

export interface ClampScrollable extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable, Gtk.Scrollable {

    // Own properties of Adw-1.Adw.ClampScrollable

    /**
     * The child widget of the `AdwClampScrollable`.
     */
    child: Gtk.Widget
    /**
     * The maximum size allocated to the child.
     * 
     * It is the width if the clamp is horizontal, or the height if it is vertical.
     */
    maximumSize: number
    /**
     * The size above which the child is clamped.
     * 
     * Starting from this size, the clamp will tighten its grip on the child,
     * slowly allocating less and less of the available size up to the maximum
     * allocated size. Below that threshold and below the maximum width, the child
     * will be allocated all the available size.
     * 
     * If the threshold is greater than the maximum size to allocate to the child,
     * the child will be allocated all the width up to the maximum.
     * If the threshold is lower than the minimum size to allocate to the child,
     * that size will be used as the tightening threshold.
     * 
     * Effectively, tightening the grip on the child before it reaches its maximum
     * size makes transitions to and from the maximum size smoother when resizing.
     */
    tighteningThreshold: number

    // Owm methods of Adw-1.Adw.ClampScrollable

    /**
     * Gets the child widget of `self`.
     */
    getChild(): Gtk.Widget | null
    /**
     * Gets the maximum size allocated to the child.
     */
    getMaximumSize(): number
    /**
     * Gets the size above which the child is clamped.
     */
    getTighteningThreshold(): number
    /**
     * Sets the child widget of `self`.
     * @param child the child widget
     */
    setChild(child: Gtk.Widget | null): void
    /**
     * Sets the maximum size allocated to the child.
     * @param maximumSize the maximum size
     */
    setMaximumSize(maximumSize: number): void
    /**
     * Sets the size above which the child is clamped.
     * @param tighteningThreshold the tightening threshold
     */
    setTighteningThreshold(tighteningThreshold: number): void

    // Class property signals of Adw-1.Adw.ClampScrollable

    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::maximum-size", callback: any): number
    on(sigName: "notify::maximum-size", callback: any): number
    once(sigName: "notify::maximum-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::maximum-size", ...args: any[]): void
    connect(sigName: "notify::tightening-threshold", callback: any): number
    on(sigName: "notify::tightening-threshold", callback: any): number
    once(sigName: "notify::tightening-threshold", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tightening-threshold", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
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
 * A scrollable [class`Clamp]`.
 * 
 * `AdwClampScrollable` is a variant of [class`Clamp]` that implements the
 * [iface`Gtk`.Scrollable] interface.
 * 
 * The primary use case for `AdwClampScrollable` is clamping
 * [class`Gtk`.ListView].
 * @class 
 */
export class ClampScrollable extends Gtk.Widget {

    // Own properties of Adw-1.Adw.ClampScrollable

    static name: string

    // Constructors of Adw-1.Adw.ClampScrollable

    constructor(config?: ClampScrollable.ConstructorProperties) 
    /**
     * Creates a new `AdwClampScrollable`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwClampScrollable`.
     * @constructor 
     */
    static new(): ClampScrollable
    _init(config?: ClampScrollable.ConstructorProperties): void
}

export module ComboRow {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, ActionRow.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ComboRow

        /**
         * An expression used to obtain strings from items.
         * 
         * It's used to bind strings to labels produced by the default factory.
         * 
         * If [property`ComboRow:`factory] is not set, the expression is also used to
         * bind strings to labels produced by a default factory.
         */
        expression?: Gtk.Expression | null
        /**
         * Factory for populating list items.
         * 
         * This factory is always used for the item in the row. It is also used for
         * items in the popup unless [property`ComboRow:`list-factory] is set.
         */
        factory?: Gtk.ListItemFactory | null
        /**
         * The factory for populating list items in the popup.
         * 
         * If this is not set, [property`ComboRow:`factory] is used.
         */
        listFactory?: Gtk.ListItemFactory | null
        /**
         * Model for the displayed items.
         */
        model?: Gio.ListModel | null
        /**
         * The position of the selected item.
         * 
         * If no item is selected, the property has the value
         * [const`Gtk`.INVALID_LIST_POSITION]
         */
        selected?: number | null
        /**
         * Whether to use the current value as the subtitle.
         * 
         * If you use a custom list item factory, you will need to give the row a
         * name conversion expression with [property`ComboRow:`expression].
         * 
         * If `TRUE`, you should not access [property`ActionRow:`subtitle].
         * 
         * The subtitle is interpreted as Pango markup if
         * [property`PreferencesRow:`use-markup] is set to `TRUE`.
         */
        useSubtitle?: boolean | null
    }

}

export interface ComboRow extends Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.ComboRow

    /**
     * An expression used to obtain strings from items.
     * 
     * It's used to bind strings to labels produced by the default factory.
     * 
     * If [property`ComboRow:`factory] is not set, the expression is also used to
     * bind strings to labels produced by a default factory.
     */
    expression: Gtk.Expression
    /**
     * Factory for populating list items.
     * 
     * This factory is always used for the item in the row. It is also used for
     * items in the popup unless [property`ComboRow:`list-factory] is set.
     */
    factory: Gtk.ListItemFactory
    /**
     * The factory for populating list items in the popup.
     * 
     * If this is not set, [property`ComboRow:`factory] is used.
     */
    listFactory: Gtk.ListItemFactory
    /**
     * Model for the displayed items.
     */
    model: Gio.ListModel
    /**
     * The position of the selected item.
     * 
     * If no item is selected, the property has the value
     * [const`Gtk`.INVALID_LIST_POSITION]
     */
    selected: number
    /**
     * The selected item.
     */
    readonly selectedItem: GObject.Object
    /**
     * Whether to use the current value as the subtitle.
     * 
     * If you use a custom list item factory, you will need to give the row a
     * name conversion expression with [property`ComboRow:`expression].
     * 
     * If `TRUE`, you should not access [property`ActionRow:`subtitle].
     * 
     * The subtitle is interpreted as Pango markup if
     * [property`PreferencesRow:`use-markup] is set to `TRUE`.
     */
    useSubtitle: boolean

    // Own fields of Adw-1.Adw.ComboRow

    parentInstance: any

    // Owm methods of Adw-1.Adw.ComboRow

    /**
     * Gets the expression used to obtain strings from items.
     */
    getExpression(): Gtk.Expression | null
    /**
     * Gets the factory that's currently used to populate list items.
     */
    getFactory(): Gtk.ListItemFactory | null
    /**
     * Gets the factory that's currently used to populate list items in the popup.
     */
    getListFactory(): Gtk.ListItemFactory | null
    /**
     * Gets the model that provides the displayed items.
     */
    getModel(): Gio.ListModel | null
    /**
     * Gets the position of the selected item.
     */
    getSelected(): number
    /**
     * Gets the selected item.
     */
    getSelectedItem(): GObject.Object | null
    /**
     * Gets whether to use the current value as the subtitle.
     */
    getUseSubtitle(): boolean
    /**
     * Sets the expression used to obtain strings from items.
     * 
     * The expression must have a value type of `G_TYPE_STRING`.
     * @param expression an expression
     */
    setExpression(expression: Gtk.Expression | null): void
    /**
     * Sets the `GtkListItemFactory` to use for populating list items.
     * @param factory the factory to use
     */
    setFactory(factory: Gtk.ListItemFactory | null): void
    /**
     * Sets the `GtkListItemFactory` to use for populating list items in the popup.
     * @param factory the factory to use
     */
    setListFactory(factory: Gtk.ListItemFactory | null): void
    /**
     * Sets the [iface`Gio`.ListModel] to use.
     * @param model the model to use
     */
    setModel(model: Gio.ListModel | null): void
    /**
     * Selects the item at the given position.
     * @param position the position of the item to select, or   [const`Gtk`.INVALID_LIST_POSITION]
     */
    setSelected(position: number): void
    /**
     * Sets whether to use the current value as the subtitle.
     * @param useSubtitle whether to use the current value as the subtitle
     */
    setUseSubtitle(useSubtitle: boolean): void

    // Conflicting methods

    /**
     * Activates `self`.
     * @virtual 
     */
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
    activate(): void
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

    // Class property signals of Adw-1.Adw.ComboRow

    connect(sigName: "notify::expression", callback: any): number
    on(sigName: "notify::expression", callback: any): number
    once(sigName: "notify::expression", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expression", ...args: any[]): void
    connect(sigName: "notify::factory", callback: any): number
    on(sigName: "notify::factory", callback: any): number
    once(sigName: "notify::factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::factory", ...args: any[]): void
    connect(sigName: "notify::list-factory", callback: any): number
    on(sigName: "notify::list-factory", callback: any): number
    once(sigName: "notify::list-factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::list-factory", ...args: any[]): void
    connect(sigName: "notify::model", callback: any): number
    on(sigName: "notify::model", callback: any): number
    once(sigName: "notify::model", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::selected", callback: any): number
    on(sigName: "notify::selected", callback: any): number
    once(sigName: "notify::selected", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selected", ...args: any[]): void
    connect(sigName: "notify::selected-item", callback: any): number
    on(sigName: "notify::selected-item", callback: any): number
    once(sigName: "notify::selected-item", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selected-item", ...args: any[]): void
    connect(sigName: "notify::use-subtitle", callback: any): number
    on(sigName: "notify::use-subtitle", callback: any): number
    once(sigName: "notify::use-subtitle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-subtitle", ...args: any[]): void
    connect(sigName: "notify::activatable-widget", callback: any): number
    on(sigName: "notify::activatable-widget", callback: any): number
    once(sigName: "notify::activatable-widget", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activatable-widget", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: any): number
    on(sigName: "notify::subtitle", callback: any): number
    once(sigName: "notify::subtitle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::subtitle-lines", callback: any): number
    on(sigName: "notify::subtitle-lines", callback: any): number
    once(sigName: "notify::subtitle-lines", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subtitle-lines", ...args: any[]): void
    connect(sigName: "notify::title-lines", callback: any): number
    on(sigName: "notify::title-lines", callback: any): number
    once(sigName: "notify::title-lines", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title-lines", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::title-selectable", callback: any): number
    on(sigName: "notify::title-selectable", callback: any): number
    once(sigName: "notify::title-selectable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title-selectable", ...args: any[]): void
    connect(sigName: "notify::use-markup", callback: any): number
    on(sigName: "notify::use-markup", callback: any): number
    once(sigName: "notify::use-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-markup", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: any): number
    on(sigName: "notify::use-underline", callback: any): number
    once(sigName: "notify::use-underline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: any): number
    on(sigName: "notify::activatable", callback: any): number
    once(sigName: "notify::activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: any): number
    on(sigName: "notify::selectable", callback: any): number
    once(sigName: "notify::selectable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selectable", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A [class`Gtk`.ListBoxRow] used to choose from a list of items.
 * 
 * <picture>
 *   <source srcset="combo-row-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="combo-row.png" alt="combo-row">
 * </picture>
 * 
 * The `AdwComboRow` widget allows the user to choose from a list of valid
 * choices. The row displays the selected choice. When activated, the row
 * displays a popover which allows the user to make a new choice.
 * 
 * `AdwComboRow` mirrors [class`Gtk`.DropDown], see that widget for details.
 * 
 * `AdwComboRow` is [property`Gtk`.ListBoxRow:activatable] if a model is set.
 * 
 * ## CSS nodes
 * 
 * `AdwComboRow` has a main CSS node with name `row` and the `.combo` style
 * class.
 * 
 * Its popover has the node named `popover` with the `.menu` style class, it
 * contains a [class`Gtk`.ScrolledWindow], which in turn contains a
 * [class`Gtk`.ListView], both are accessible via their regular nodes.
 * 
 * ## Accessibility
 * 
 * `AdwComboRow` uses the `GTK_ACCESSIBLE_ROLE_COMBO_BOX` role.
 * @class 
 */
export class ComboRow extends ActionRow {

    // Own properties of Adw-1.Adw.ComboRow

    static name: string

    // Constructors of Adw-1.Adw.ComboRow

    constructor(config?: ComboRow.ConstructorProperties) 
    /**
     * Creates a new `AdwComboRow`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwComboRow`.
     * @constructor 
     */
    static new(): ComboRow
    _init(config?: ComboRow.ConstructorProperties): void
}

export module EnumListItem {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface EnumListItem {

    // Own properties of Adw-1.Adw.EnumListItem

    /**
     * The enum value name.
     */
    readonly name: string
    /**
     * The enum value nick.
     */
    readonly nick: string
    /**
     * The enum value.
     */
    readonly value: number

    // Owm methods of Adw-1.Adw.EnumListItem

    /**
     * Gets the enum value name.
     */
    getName(): string
    /**
     * Gets the enum value nick.
     */
    getNick(): string
    /**
     * Gets the enum value.
     */
    getValue(): number

    // Class property signals of Adw-1.Adw.EnumListItem

    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::nick", callback: any): number
    on(sigName: "notify::nick", callback: any): number
    once(sigName: "notify::nick", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nick", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * `AdwEnumListItem` is the type of items in a [class`EnumListModel]`.
 * @class 
 */
export class EnumListItem extends GObject.Object {

    // Own properties of Adw-1.Adw.EnumListItem

    static name: string

    // Constructors of Adw-1.Adw.EnumListItem

    constructor(config?: EnumListItem.ConstructorProperties) 
    _init(config?: EnumListItem.ConstructorProperties): void
}

export module EnumListModel {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.ListModel.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.EnumListModel

        /**
         * The type of the enum represented by the model.
         */
        enumType?: GObject.GType | null
    }

}

export interface EnumListModel extends Gio.ListModel {

    // Own properties of Adw-1.Adw.EnumListModel

    /**
     * The type of the enum represented by the model.
     */
    readonly enumType: GObject.GType

    // Owm methods of Adw-1.Adw.EnumListModel

    /**
     * Finds the position of a given enum value in `self`.
     * @param value an enum value
     */
    findPosition(value: number): number
    /**
     * Gets the type of the enum represented by `self`.
     */
    getEnumType(): GObject.GType

    // Class property signals of Adw-1.Adw.EnumListModel

    connect(sigName: "notify::enum-type", callback: any): number
    on(sigName: "notify::enum-type", callback: any): number
    once(sigName: "notify::enum-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enum-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A [iface`Gio`.ListModel] representing values of a given enum.
 * 
 * `AdwEnumListModel` contains objects of type [class`EnumListItem]`.
 * @class 
 */
export class EnumListModel extends GObject.Object {

    // Own properties of Adw-1.Adw.EnumListModel

    static name: string

    // Constructors of Adw-1.Adw.EnumListModel

    constructor(config?: EnumListModel.ConstructorProperties) 
    /**
     * Creates a new `AdwEnumListModel` for `enum_type`.
     * @constructor 
     * @param enumType the type of the enum to construct the model from
     */
    constructor(enumType: GObject.GType) 
    /**
     * Creates a new `AdwEnumListModel` for `enum_type`.
     * @constructor 
     * @param enumType the type of the enum to construct the model from
     */
    static new(enumType: GObject.GType): EnumListModel
    _init(config?: EnumListModel.ConstructorProperties): void
}

export module ExpanderRow {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, PreferencesRow.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ExpanderRow

        /**
         * Whether expansion is enabled.
         */
        enableExpansion?: boolean | null
        /**
         * Whether the row is expanded.
         */
        expanded?: boolean | null
        /**
         * The icon name for this row.
         */
        iconName?: string | null
        /**
         * Whether the switch enabling the expansion is visible.
         */
        showEnableSwitch?: boolean | null
        /**
         * The subtitle for this row.
         */
        subtitle?: string | null
    }

}

export interface ExpanderRow extends Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.ExpanderRow

    /**
     * Whether expansion is enabled.
     */
    enableExpansion: boolean
    /**
     * Whether the row is expanded.
     */
    expanded: boolean
    /**
     * The icon name for this row.
     */
    iconName: string
    /**
     * Whether the switch enabling the expansion is visible.
     */
    showEnableSwitch: boolean
    /**
     * The subtitle for this row.
     */
    subtitle: string

    // Own fields of Adw-1.Adw.ExpanderRow

    parentInstance: any

    // Owm methods of Adw-1.Adw.ExpanderRow

    /**
     * Adds an action widget to `self`.
     * @param widget a widget
     */
    addAction(widget: Gtk.Widget): void
    /**
     * Adds a prefix widget to `self`.
     * @param widget a widget
     */
    addPrefix(widget: Gtk.Widget): void
    /**
     * Adds a widget to `self`.
     * 
     * The widget will appear in the expanding list below `self`.
     * @param child a widget
     */
    addRow(child: Gtk.Widget): void
    /**
     * Gets whether the expansion of `self` is enabled.
     */
    getEnableExpansion(): boolean
    /**
     * Gets whether `self` is expanded.
     */
    getExpanded(): boolean
    /**
     * Gets the icon name for `self`.
     */
    getIconName(): string | null
    /**
     * Gets whether the switch enabling the expansion of `self` is visible.
     */
    getShowEnableSwitch(): boolean
    /**
     * Gets the subtitle for `self`.
     */
    getSubtitle(): string
    remove(child: Gtk.Widget): void
    /**
     * Sets whether the expansion of `self` is enabled.
     * @param enableExpansion whether to enable the expansion
     */
    setEnableExpansion(enableExpansion: boolean): void
    /**
     * Sets whether `self` is expanded.
     * @param expanded whether to expand the row
     */
    setExpanded(expanded: boolean): void
    /**
     * Sets the icon name for `self`.
     * @param iconName the icon name
     */
    setIconName(iconName: string | null): void
    /**
     * Sets whether the switch enabling the expansion of `self` is visible.
     * @param showEnableSwitch whether to show the switch enabling the expansion
     */
    setShowEnableSwitch(showEnableSwitch: boolean): void
    /**
     * Sets the subtitle for `self`.
     * 
     * The subtitle is interpreted as Pango markup unless
     * [property`PreferencesRow:`use-markup] is set to `FALSE`.
     * @param subtitle the subtitle
     */
    setSubtitle(subtitle: string): void

    // Conflicting methods

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

    // Class property signals of Adw-1.Adw.ExpanderRow

    connect(sigName: "notify::enable-expansion", callback: any): number
    on(sigName: "notify::enable-expansion", callback: any): number
    once(sigName: "notify::enable-expansion", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enable-expansion", ...args: any[]): void
    connect(sigName: "notify::expanded", callback: any): number
    on(sigName: "notify::expanded", callback: any): number
    once(sigName: "notify::expanded", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expanded", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::show-enable-switch", callback: any): number
    on(sigName: "notify::show-enable-switch", callback: any): number
    once(sigName: "notify::show-enable-switch", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-enable-switch", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: any): number
    on(sigName: "notify::subtitle", callback: any): number
    once(sigName: "notify::subtitle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::title-selectable", callback: any): number
    on(sigName: "notify::title-selectable", callback: any): number
    once(sigName: "notify::title-selectable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title-selectable", ...args: any[]): void
    connect(sigName: "notify::use-markup", callback: any): number
    on(sigName: "notify::use-markup", callback: any): number
    once(sigName: "notify::use-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-markup", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: any): number
    on(sigName: "notify::use-underline", callback: any): number
    once(sigName: "notify::use-underline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: any): number
    on(sigName: "notify::activatable", callback: any): number
    once(sigName: "notify::activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: any): number
    on(sigName: "notify::selectable", callback: any): number
    once(sigName: "notify::selectable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selectable", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A [class`Gtk`.ListBoxRow] used to reveal widgets.
 * 
 * <picture>
 *   <source srcset="expander-row-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="expander-row.png" alt="expander-row">
 * </picture>
 * 
 * The `AdwExpanderRow` widget allows the user to reveal or hide widgets below
 * it. It also allows the user to enable the expansion of the row, allowing to
 * disable all that the row contains.
 * 
 * ## AdwExpanderRow as GtkBuildable
 * 
 * The `AdwExpanderRow` implementation of the [iface`Gtk`.Buildable] interface
 * supports adding a child as an action widget by specifying “action” as the
 * “type” attribute of a <child> element.
 * 
 * It also supports adding it as a prefix widget by specifying “prefix” as the
 * “type” attribute of a <child> element.
 * 
 * ## CSS nodes
 * 
 * `AdwExpanderRow` has a main CSS node with name `row` and the `.expander`
 * style class. It has the `.empty` style class when it contains no children.
 * 
 * It contains the subnodes `row.header` for its main embedded row,
 * `list.nested` for the list it can expand, and `image.expander-row-arrow` for
 * its arrow.
 * @class 
 */
export class ExpanderRow extends PreferencesRow {

    // Own properties of Adw-1.Adw.ExpanderRow

    static name: string

    // Constructors of Adw-1.Adw.ExpanderRow

    constructor(config?: ExpanderRow.ConstructorProperties) 
    /**
     * Creates a new `AdwExpanderRow`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwExpanderRow`.
     * @constructor 
     */
    static new(): ExpanderRow
    _init(config?: ExpanderRow.ConstructorProperties): void
}

export module Flap {

    // Constructor properties interface

    export interface ConstructorProperties extends Swipeable.ConstructorProperties, Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.Flap

        /**
         * The content widget.
         * 
         * It's always displayed when unfolded, and partially visible
         * when folded.
         */
        content?: Gtk.Widget | null
        /**
         * The flap widget.
         * 
         * It's only visible when [property`Flap:`reveal-progress] is greater than 0.
         */
        flap?: Gtk.Widget | null
        /**
         * The flap position.
         * 
         * If it's set to `GTK_PACK_START`, the flap is displayed before the content,
         * if `GTK_PACK_END`, it's displayed after the content.
         */
        flapPosition?: Gtk.PackType | null
        /**
         * The fold transition animation duration, in milliseconds.
         */
        foldDuration?: number | null
        /**
         * The fold policy for the flap.
         */
        foldPolicy?: FlapFoldPolicy | null
        /**
         * Determines when the flap will fold.
         * 
         * If set to `ADW_FOLD_THRESHOLD_POLICY_MINIMUM`, flap will only fold when
         * the children cannot fit anymore. With `ADW_FOLD_THRESHOLD_POLICY_NATURAL`,
         * it will fold as soon as children don't get their natural size.
         * 
         * This can be useful if you have a long ellipsizing label and want to let it
         * ellipsize instead of immediately folding.
         */
        foldThresholdPolicy?: FoldThresholdPolicy | null
        /**
         * Whether the flap is locked.
         * 
         * If `FALSE`, folding when the flap is revealed automatically closes it, and
         * unfolding it when the flap is not revealed opens it. If `TRUE`,
         * [property`Flap:`reveal-flap] value never changes on its own.
         */
        locked?: boolean | null
        /**
         * Whether the flap is modal.
         * 
         * If `TRUE`, clicking the content widget while flap is revealed, as well as
         * pressing the <kbd>Esc</kbd> key, will close the flap. If `FALSE`, clicks
         * are passed through to the content widget.
         */
        modal?: boolean | null
        /**
         * Whether the flap widget is revealed.
         */
        revealFlap?: boolean | null
        /**
         * The reveal animation spring parameters.
         * 
         * The default value is equivalent to:
         * 
         * ```c
         * adw_spring_params_new (1, 0.5, 500)
         * ```
         */
        revealParams?: SpringParams | null
        /**
         * The separator widget.
         * 
         * It's displayed between content and flap when there's no shadow to display.
         * When exactly it's visible depends on the [property`Flap:`transition-type]
         * value.
         */
        separator?: Gtk.Widget | null
        /**
         * Whether the flap can be closed with a swipe gesture.
         * 
         * The area that can be swiped depends on the [property`Flap:`transition-type]
         * value.
         */
        swipeToClose?: boolean | null
        /**
         * Whether the flap can be opened with a swipe gesture.
         * 
         * The area that can be swiped depends on the [property`Flap:`transition-type]
         * value.
         */
        swipeToOpen?: boolean | null
        /**
         * the type of animation used for reveal and fold transitions.
         * 
         * [property`Flap:`flap] is transparent by default, which means the content
         * will be seen through it with `ADW_FLAP_TRANSITION_TYPE_OVER` transitions;
         * add the [`.background`](style-classes.html#background) style class to it if
         * this is unwanted.
         */
        transitionType?: FlapTransitionType | null
    }

}

export interface Flap extends Swipeable, Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {

    // Own properties of Adw-1.Adw.Flap

    /**
     * The content widget.
     * 
     * It's always displayed when unfolded, and partially visible
     * when folded.
     */
    content: Gtk.Widget
    /**
     * The flap widget.
     * 
     * It's only visible when [property`Flap:`reveal-progress] is greater than 0.
     */
    flap: Gtk.Widget
    /**
     * The flap position.
     * 
     * If it's set to `GTK_PACK_START`, the flap is displayed before the content,
     * if `GTK_PACK_END`, it's displayed after the content.
     */
    flapPosition: Gtk.PackType
    /**
     * The fold transition animation duration, in milliseconds.
     */
    foldDuration: number
    /**
     * The fold policy for the flap.
     */
    foldPolicy: FlapFoldPolicy
    /**
     * Determines when the flap will fold.
     * 
     * If set to `ADW_FOLD_THRESHOLD_POLICY_MINIMUM`, flap will only fold when
     * the children cannot fit anymore. With `ADW_FOLD_THRESHOLD_POLICY_NATURAL`,
     * it will fold as soon as children don't get their natural size.
     * 
     * This can be useful if you have a long ellipsizing label and want to let it
     * ellipsize instead of immediately folding.
     */
    foldThresholdPolicy: FoldThresholdPolicy
    /**
     * Whether the flap is currently folded.
     * 
     * See [property`Flap:`fold-policy].
     */
    readonly folded: boolean
    /**
     * Whether the flap is locked.
     * 
     * If `FALSE`, folding when the flap is revealed automatically closes it, and
     * unfolding it when the flap is not revealed opens it. If `TRUE`,
     * [property`Flap:`reveal-flap] value never changes on its own.
     */
    locked: boolean
    /**
     * Whether the flap is modal.
     * 
     * If `TRUE`, clicking the content widget while flap is revealed, as well as
     * pressing the <kbd>Esc</kbd> key, will close the flap. If `FALSE`, clicks
     * are passed through to the content widget.
     */
    modal: boolean
    /**
     * Whether the flap widget is revealed.
     */
    revealFlap: boolean
    /**
     * The reveal animation spring parameters.
     * 
     * The default value is equivalent to:
     * 
     * ```c
     * adw_spring_params_new (1, 0.5, 500)
     * ```
     */
    revealParams: SpringParams
    /**
     * The current reveal transition progress.
     * 
     * 0 means fully hidden, 1 means fully revealed.
     * 
     * See [property`Flap:`reveal-flap].
     */
    readonly revealProgress: number
    /**
     * The separator widget.
     * 
     * It's displayed between content and flap when there's no shadow to display.
     * When exactly it's visible depends on the [property`Flap:`transition-type]
     * value.
     */
    separator: Gtk.Widget
    /**
     * Whether the flap can be closed with a swipe gesture.
     * 
     * The area that can be swiped depends on the [property`Flap:`transition-type]
     * value.
     */
    swipeToClose: boolean
    /**
     * Whether the flap can be opened with a swipe gesture.
     * 
     * The area that can be swiped depends on the [property`Flap:`transition-type]
     * value.
     */
    swipeToOpen: boolean
    /**
     * the type of animation used for reveal and fold transitions.
     * 
     * [property`Flap:`flap] is transparent by default, which means the content
     * will be seen through it with `ADW_FLAP_TRANSITION_TYPE_OVER` transitions;
     * add the [`.background`](style-classes.html#background) style class to it if
     * this is unwanted.
     */
    transitionType: FlapTransitionType

    // Owm methods of Adw-1.Adw.Flap

    /**
     * Gets the content widget for `self`.
     */
    getContent(): Gtk.Widget | null
    /**
     * Gets the flap widget for `self`.
     */
    getFlap(): Gtk.Widget | null
    /**
     * Gets the flap position for `self`.
     */
    getFlapPosition(): Gtk.PackType
    /**
     * Gets the duration that fold transitions in `self` will take.
     */
    getFoldDuration(): number
    /**
     * Gets the fold policy for `self`.
     */
    getFoldPolicy(): FlapFoldPolicy
    /**
     * Gets the fold threshold policy for `self`.
     */
    getFoldThresholdPolicy(): FoldThresholdPolicy
    /**
     * Gets whether `self` is currently folded.
     */
    getFolded(): boolean
    /**
     * Gets whether `self` is locked.
     */
    getLocked(): boolean
    /**
     * Gets whether `self` is modal.
     */
    getModal(): boolean
    /**
     * Gets whether the flap widget is revealed for `self`.
     */
    getRevealFlap(): boolean
    /**
     * Gets the reveal animation spring parameters for `self`.
     */
    getRevealParams(): SpringParams
    /**
     * Gets the current reveal progress for `self`.
     */
    getRevealProgress(): number
    /**
     * Gets the separator widget for `self`.
     */
    getSeparator(): Gtk.Widget | null
    /**
     * Gets whether `self` can be closed with a swipe gesture.
     */
    getSwipeToClose(): boolean
    /**
     * Gets whether `self` can be opened with a swipe gesture.
     */
    getSwipeToOpen(): boolean
    /**
     * Gets the type of animation used for reveal and fold transitions in `self`.
     */
    getTransitionType(): FlapTransitionType
    /**
     * Sets the content widget for `self`.
     * @param content the content widget
     */
    setContent(content: Gtk.Widget | null): void
    /**
     * Sets the flap widget for `self`.
     * @param flap the flap widget
     */
    setFlap(flap: Gtk.Widget | null): void
    /**
     * Sets the flap position for `self`.
     * @param position the new value
     */
    setFlapPosition(position: Gtk.PackType): void
    /**
     * Sets the duration that fold transitions in `self` will take.
     * @param duration the new duration, in milliseconds
     */
    setFoldDuration(duration: number): void
    /**
     * Sets the fold policy for `self`.
     * @param policy the fold policy
     */
    setFoldPolicy(policy: FlapFoldPolicy): void
    /**
     * Sets the fold threshold policy for `self`.
     * @param policy the policy to use
     */
    setFoldThresholdPolicy(policy: FoldThresholdPolicy): void
    /**
     * Sets whether `self` is locked.
     * @param locked the new value
     */
    setLocked(locked: boolean): void
    /**
     * Sets whether `self` is modal.
     * @param modal whether `self` is modal
     */
    setModal(modal: boolean): void
    /**
     * Sets whether the flap widget is revealed for `self`.
     * @param revealFlap whether to reveal the flap widget
     */
    setRevealFlap(revealFlap: boolean): void
    /**
     * Sets the reveal animation spring parameters for `self`.
     * @param params the new parameters
     */
    setRevealParams(params: SpringParams): void
    /**
     * Sets the separator widget for `self`.
     * @param separator the separator widget
     */
    setSeparator(separator: Gtk.Widget | null): void
    /**
     * Sets whether `self` can be closed with a swipe gesture.
     * @param swipeToClose whether `self` can be closed with a swipe gesture
     */
    setSwipeToClose(swipeToClose: boolean): void
    /**
     * Sets whether `self` can be opened with a swipe gesture.
     * @param swipeToOpen whether `self` can be opened with a swipe gesture
     */
    setSwipeToOpen(swipeToOpen: boolean): void
    /**
     * Sets the type of animation used for reveal and fold transitions in `self`.
     * @param transitionType the new transition type
     */
    setTransitionType(transitionType: FlapTransitionType): void

    // Class property signals of Adw-1.Adw.Flap

    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::flap", callback: any): number
    on(sigName: "notify::flap", callback: any): number
    once(sigName: "notify::flap", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::flap", ...args: any[]): void
    connect(sigName: "notify::flap-position", callback: any): number
    on(sigName: "notify::flap-position", callback: any): number
    once(sigName: "notify::flap-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::flap-position", ...args: any[]): void
    connect(sigName: "notify::fold-duration", callback: any): number
    on(sigName: "notify::fold-duration", callback: any): number
    once(sigName: "notify::fold-duration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fold-duration", ...args: any[]): void
    connect(sigName: "notify::fold-policy", callback: any): number
    on(sigName: "notify::fold-policy", callback: any): number
    once(sigName: "notify::fold-policy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fold-policy", ...args: any[]): void
    connect(sigName: "notify::fold-threshold-policy", callback: any): number
    on(sigName: "notify::fold-threshold-policy", callback: any): number
    once(sigName: "notify::fold-threshold-policy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fold-threshold-policy", ...args: any[]): void
    connect(sigName: "notify::folded", callback: any): number
    on(sigName: "notify::folded", callback: any): number
    once(sigName: "notify::folded", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::folded", ...args: any[]): void
    connect(sigName: "notify::locked", callback: any): number
    on(sigName: "notify::locked", callback: any): number
    once(sigName: "notify::locked", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::locked", ...args: any[]): void
    connect(sigName: "notify::modal", callback: any): number
    on(sigName: "notify::modal", callback: any): number
    once(sigName: "notify::modal", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::reveal-flap", callback: any): number
    on(sigName: "notify::reveal-flap", callback: any): number
    once(sigName: "notify::reveal-flap", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reveal-flap", ...args: any[]): void
    connect(sigName: "notify::reveal-params", callback: any): number
    on(sigName: "notify::reveal-params", callback: any): number
    once(sigName: "notify::reveal-params", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reveal-params", ...args: any[]): void
    connect(sigName: "notify::reveal-progress", callback: any): number
    on(sigName: "notify::reveal-progress", callback: any): number
    once(sigName: "notify::reveal-progress", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reveal-progress", ...args: any[]): void
    connect(sigName: "notify::separator", callback: any): number
    on(sigName: "notify::separator", callback: any): number
    once(sigName: "notify::separator", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::separator", ...args: any[]): void
    connect(sigName: "notify::swipe-to-close", callback: any): number
    on(sigName: "notify::swipe-to-close", callback: any): number
    once(sigName: "notify::swipe-to-close", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::swipe-to-close", ...args: any[]): void
    connect(sigName: "notify::swipe-to-open", callback: any): number
    on(sigName: "notify::swipe-to-open", callback: any): number
    once(sigName: "notify::swipe-to-open", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::swipe-to-open", ...args: any[]): void
    connect(sigName: "notify::transition-type", callback: any): number
    on(sigName: "notify::transition-type", callback: any): number
    once(sigName: "notify::transition-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transition-type", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
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
 * An adaptive container acting like a box or an overlay.
 * 
 * <picture>
 *   <source srcset="flap-wide-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="flap-wide.png" alt="flap-wide">
 * </picture>
 * <picture>
 *   <source srcset="flap-narrow-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="flap-narrow.png" alt="flap-narrow">
 * </picture>
 * 
 * The `AdwFlap` widget can display its children like a [class`Gtk`.Box] does or
 * like a [class`Gtk`.Overlay] does, according to the
 * [property`Flap:`fold-policy] value.
 * 
 * `AdwFlap` has at most three children: [property`Flap:`content],
 * [property`Flap:`flap] and [property`Flap:`separator]. Content is the primary
 * child, flap is displayed next to it when unfolded, or overlays it when
 * folded. Flap can be shown or hidden by changing the
 * [property`Flap:`reveal-flap] value, as well as via swipe gestures if
 * [property`Flap:`swipe-to-open] and/or [property`Flap:`swipe-to-close] are set
 * to `TRUE`.
 * 
 * Optionally, a separator can be provided, which would be displayed between
 * the content and the flap when there's no shadow to separate them, depending
 * on the transition type.
 * 
 * [property`Flap:`flap] is transparent by default; add the
 * [`.background`](style-classes.html#background) style class to it if this is
 * unwanted.
 * 
 * If [property`Flap:`modal] is set to `TRUE`, content becomes completely
 * inaccessible when the flap is revealed while folded.
 * 
 * The position of the flap and separator children relative to the content is
 * determined by orientation, as well as the [property`Flap:`flap-position]
 * value.
 * 
 * Folding the flap will automatically hide the flap widget, and unfolding it
 * will automatically reveal it. If this behavior is not desired, the
 * [property`Flap:`locked] property can be used to override it.
 * 
 * Common use cases include sidebars, header bars that need to be able to
 * overlap the window content (for example, in fullscreen mode) and bottom
 * sheets.
 * 
 * ## AdwFlap as GtkBuildable
 * 
 * The `AdwFlap` implementation of the [iface`Gtk`.Buildable] interface supports
 * setting the flap child by specifying “flap” as the “type” attribute of a
 * <child> element, and separator by specifying “separator”. Specifying
 * “content” child type or omitting it results in setting the content child.
 * 
 * ## CSS nodes
 * 
 * `AdwFlap` has a single CSS node with name `flap`. The node will get the style
 * classes `.folded` when it is folded, and `.unfolded` when it's not.
 * @class 
 */
export class Flap extends Gtk.Widget {

    // Own properties of Adw-1.Adw.Flap

    static name: string

    // Constructors of Adw-1.Adw.Flap

    constructor(config?: Flap.ConstructorProperties) 
    /**
     * Creates a new `AdwFlap`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwFlap`.
     * @constructor 
     */
    static new(): Flap
    _init(config?: Flap.ConstructorProperties): void
}

export module HeaderBar {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.HeaderBar

        /**
         * The policy for aligning the center widget.
         */
        centeringPolicy?: CenteringPolicy | null
        /**
         * The decoration layout for buttons.
         * 
         * If this property is not set, the
         * [property`Gtk`.Settings:gtk-decoration-layout] setting is used.
         * 
         * The format of the string is button names, separated by commas. A colon
         * separates the buttons that should appear at the start from those at the
         * end. Recognized button names are minimize, maximize, close and icon (the
         * window icon).
         * 
         * For example, “icon:minimize,maximize,close” specifies an icon at the start,
         * and minimize, maximize and close buttons at the end.
         */
        decorationLayout?: string | null
        /**
         * Whether to show title buttons at the end of the header bar.
         * 
         * See [property`HeaderBar:`show-start-title-buttons] for the other side.
         * 
         * Which buttons are actually shown and where is determined by the
         * [property`HeaderBar:`decoration-layout] property, and by the state of the
         * window (e.g. a close button will not be shown if the window can't be
         * closed).
         */
        showEndTitleButtons?: boolean | null
        /**
         * Whether to show title buttons at the start of the header bar.
         * 
         * See [property`HeaderBar:`show-end-title-buttons] for the other side.
         * 
         * Which buttons are actually shown and where is determined by the
         * [property`HeaderBar:`decoration-layout] property, and by the state of the
         * window (e.g. a close button will not be shown if the window can't be
         * closed).
         */
        showStartTitleButtons?: boolean | null
        /**
         * The title widget to display.
         * 
         * When set to `NULL`, the header bar will display the title of the window it
         * is contained in.
         * 
         * To use a different title, use [class`WindowTitle]`:
         * 
         * ```xml
         * <object class="AdwHeaderBar">
         *   <property name="title-widget">
         *     <object class="AdwWindowTitle">
         *       <property name="title" translatable="yes">Title</property>
         *     </object>
         *   </property>
         * </object>
         * ```
         */
        titleWidget?: Gtk.Widget | null
    }

}

export interface HeaderBar extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.HeaderBar

    /**
     * The policy for aligning the center widget.
     */
    centeringPolicy: CenteringPolicy
    /**
     * The decoration layout for buttons.
     * 
     * If this property is not set, the
     * [property`Gtk`.Settings:gtk-decoration-layout] setting is used.
     * 
     * The format of the string is button names, separated by commas. A colon
     * separates the buttons that should appear at the start from those at the
     * end. Recognized button names are minimize, maximize, close and icon (the
     * window icon).
     * 
     * For example, “icon:minimize,maximize,close” specifies an icon at the start,
     * and minimize, maximize and close buttons at the end.
     */
    decorationLayout: string
    /**
     * Whether to show title buttons at the end of the header bar.
     * 
     * See [property`HeaderBar:`show-start-title-buttons] for the other side.
     * 
     * Which buttons are actually shown and where is determined by the
     * [property`HeaderBar:`decoration-layout] property, and by the state of the
     * window (e.g. a close button will not be shown if the window can't be
     * closed).
     */
    showEndTitleButtons: boolean
    /**
     * Whether to show title buttons at the start of the header bar.
     * 
     * See [property`HeaderBar:`show-end-title-buttons] for the other side.
     * 
     * Which buttons are actually shown and where is determined by the
     * [property`HeaderBar:`decoration-layout] property, and by the state of the
     * window (e.g. a close button will not be shown if the window can't be
     * closed).
     */
    showStartTitleButtons: boolean
    /**
     * The title widget to display.
     * 
     * When set to `NULL`, the header bar will display the title of the window it
     * is contained in.
     * 
     * To use a different title, use [class`WindowTitle]`:
     * 
     * ```xml
     * <object class="AdwHeaderBar">
     *   <property name="title-widget">
     *     <object class="AdwWindowTitle">
     *       <property name="title" translatable="yes">Title</property>
     *     </object>
     *   </property>
     * </object>
     * ```
     */
    titleWidget: Gtk.Widget

    // Owm methods of Adw-1.Adw.HeaderBar

    /**
     * Gets the policy for aligning the center widget.
     */
    getCenteringPolicy(): CenteringPolicy
    /**
     * Gets the decoration layout for `self`.
     */
    getDecorationLayout(): string | null
    /**
     * Gets whether to show title buttons at the end of `self`.
     */
    getShowEndTitleButtons(): boolean
    /**
     * Gets whether to show title buttons at the start of `self`.
     */
    getShowStartTitleButtons(): boolean
    /**
     * Gets the title widget widget of `self`.
     */
    getTitleWidget(): Gtk.Widget | null
    /**
     * Adds `child` to `self,` packed with reference to the end of `self`.
     * @param child the widget to be added to `self`
     */
    packEnd(child: Gtk.Widget): void
    /**
     * Adds `child` to `self,` packed with reference to the start of the `self`.
     * @param child the widget to be added to `self`
     */
    packStart(child: Gtk.Widget): void
    /**
     * Removes a child from `self`.
     * 
     * The child must have been added with [method`HeaderBar`.pack_start],
     * [method`HeaderBar`.pack_end] or [property`HeaderBar:`title-widget].
     * @param child the child to remove
     */
    remove(child: Gtk.Widget): void
    /**
     * Sets the policy for aligning the center widget.
     * @param centeringPolicy the centering policy
     */
    setCenteringPolicy(centeringPolicy: CenteringPolicy): void
    /**
     * Sets the decoration layout for `self`.
     * @param layout a decoration layout
     */
    setDecorationLayout(layout: string | null): void
    /**
     * Sets whether to show title buttons at the end of `self`.
     * @param setting `TRUE` to show standard title buttons
     */
    setShowEndTitleButtons(setting: boolean): void
    /**
     * Sets whether to show title buttons at the start of `self`.
     * @param setting `TRUE` to show standard title buttons
     */
    setShowStartTitleButtons(setting: boolean): void
    /**
     * Sets the title widget for `self`.
     * @param titleWidget a widget to use for a title
     */
    setTitleWidget(titleWidget: Gtk.Widget | null): void

    // Class property signals of Adw-1.Adw.HeaderBar

    connect(sigName: "notify::centering-policy", callback: any): number
    on(sigName: "notify::centering-policy", callback: any): number
    once(sigName: "notify::centering-policy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::centering-policy", ...args: any[]): void
    connect(sigName: "notify::decoration-layout", callback: any): number
    on(sigName: "notify::decoration-layout", callback: any): number
    once(sigName: "notify::decoration-layout", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::decoration-layout", ...args: any[]): void
    connect(sigName: "notify::show-end-title-buttons", callback: any): number
    on(sigName: "notify::show-end-title-buttons", callback: any): number
    once(sigName: "notify::show-end-title-buttons", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-end-title-buttons", ...args: any[]): void
    connect(sigName: "notify::show-start-title-buttons", callback: any): number
    on(sigName: "notify::show-start-title-buttons", callback: any): number
    once(sigName: "notify::show-start-title-buttons", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-start-title-buttons", ...args: any[]): void
    connect(sigName: "notify::title-widget", callback: any): number
    on(sigName: "notify::title-widget", callback: any): number
    once(sigName: "notify::title-widget", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title-widget", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A title bar widget.
 * 
 * <picture>
 *   <source srcset="header-bar-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="header-bar.png" alt="header-bar">
 * </picture>
 * 
 * `AdwHeaderBar` is similar to [class`Gtk`.HeaderBar], but provides additional
 * features compared to it. Refer to `GtkHeaderBar` for details.
 * 
 * [property`HeaderBar:`centering-policy] allows to enforce strict centering of
 * the title widget, this is useful for [class`ViewSwitcherTitle]`.
 * 
 * [property`HeaderBar:`show-start-title-buttons] and
 * [property`HeaderBar:`show-end-title-buttons] allow to easily create split
 * header bar layouts using [class`Leaflet]`, as follows:
 * 
 * ```xml
 * <object class="AdwLeaflet" id="leaflet">
 *   <child>
 *     <object class="GtkBox">
 *       <property name="orientation">vertical</property>
 *       <child>
 *         <object class="AdwHeaderBar">
 *           <binding name="show-end-title-buttons">
 *             <lookup name="folded">leaflet</lookup>
 *           </binding>
 *         </object>
 *       </child>
 *       <!-- ... -->
 *     </object>
 *   </child>
 *   <!-- ... -->
 *   <child>
 *     <object class="GtkBox">
 *       <property name="orientation">vertical</property>
 *       <property name="hexpand">True</property>
 *       <child>
 *         <object class="AdwHeaderBar">
 *           <binding name="show-start-title-buttons">
 *             <lookup name="folded">leaflet</lookup>
 *           </binding>
 *         </object>
 *       </child>
 *       <!-- ... -->
 *     </object>
 *   </child>
 * </object>
 * ```
 * 
 * <picture>
 *   <source srcset="header-bar-split-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="header-bar-split.png" alt="header-bar-split">
 * </picture>
 * 
 * ## CSS nodes
 * 
 * ```
 * headerbar
 * ╰── windowhandle
 *     ╰── box
 *         ├── widget
 *         │   ╰── box.start
 *         │       ├── windowcontrols.start
 *         │       ╰── [other children]
 *         ├── [Title Widget]
 *         ╰── widget
 *             ╰── box.end
 *                 ├── [other children]
 *                 ╰── windowcontrols.end
 * ```
 * 
 * `AdwHeaderBar`'s CSS node is called `headerbar`. It contains a `windowhandle`
 * subnode, which contains a `box` subnode, which contains two `widget` subnodes
 * at the start and end of the header bar, each of which contains a `box`
 * subnode with the `.start` and `.end` style classes respectively, as well as a
 * center node that represents the title.
 * 
 * Each of the boxes contains a `windowcontrols` subnode, see
 * [class`Gtk`.WindowControls] for details, as well as other children.
 * 
 * ## Accessibility
 * 
 * `AdwHeaderBar` uses the `GTK_ACCESSIBLE_ROLE_GROUP` role.
 * @class 
 */
export class HeaderBar extends Gtk.Widget {

    // Own properties of Adw-1.Adw.HeaderBar

    static name: string

    // Constructors of Adw-1.Adw.HeaderBar

    constructor(config?: HeaderBar.ConstructorProperties) 
    /**
     * Creates a new `AdwHeaderBar`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwHeaderBar`.
     * @constructor 
     */
    static new(): HeaderBar
    _init(config?: HeaderBar.ConstructorProperties): void
}

export module Leaflet {

    // Constructor properties interface

    export interface ConstructorProperties extends Swipeable.ConstructorProperties, Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.Leaflet

        /**
         * Whether gestures and shortcuts for navigating backward are enabled.
         * 
         * The supported gestures are:
         * 
         * - One-finger swipe on touchscreens
         * - Horizontal scrolling on touchpads (usually two-finger swipe)
         * - Back/forward mouse buttons
         * 
         * The keyboard back/forward keys are also supported, as well as the
         * <kbd>Alt</kbd>+<kbd>←</kbd> shortcut for horizontal orientation, or
         * <kbd>Alt</kbd>+<kbd>↑</kbd> for vertical orientation.
         * 
         * If the orientation is horizontal, for right-to-left locales, gestures and
         * shortcuts are reversed.
         * 
         * Only children that have [property`LeafletPage:`navigatable] set to `TRUE`
         * can be navigated to.
         */
        canNavigateBack?: boolean | null
        /**
         * Whether gestures and shortcuts for navigating forward are enabled.
         * 
         * The supported gestures are:
         * 
         * - One-finger swipe on touchscreens
         * - Horizontal scrolling on touchpads (usually two-finger swipe)
         * - Back/forward mouse buttons
         * 
         * The keyboard back/forward keys are also supported, as well as the
         * <kbd>Alt</kbd>+<kbd>→</kbd> shortcut for horizontal orientation, or
         * <kbd>Alt</kbd>+<kbd>↓</kbd> for vertical orientation.
         * 
         * If the orientation is horizontal, for right-to-left locales, gestures and
         * shortcuts are reversed.
         * 
         * Only children that have [property`LeafletPage:`navigatable] set to `TRUE`
         * can be navigated to.
         */
        canNavigateForward?: boolean | null
        /**
         * Whether or not the leaflet can unfold.
         */
        canUnfold?: boolean | null
        /**
         * The child transition spring parameters.
         * 
         * The default value is equivalent to:
         * 
         * ```c
         * adw_spring_params_new (1, 0.5, 500)
         * ```
         */
        childTransitionParams?: SpringParams | null
        /**
         * Determines when the leaflet will fold.
         * 
         * If set to `ADW_FOLD_THRESHOLD_POLICY_MINIMUM`, it will only fold when
         * the children cannot fit anymore. With `ADW_FOLD_THRESHOLD_POLICY_NATURAL`,
         * it will fold as soon as children don't get their natural size.
         * 
         * This can be useful if you have a long ellipsizing label and want to let it
         * ellipsize instead of immediately folding.
         */
        foldThresholdPolicy?: FoldThresholdPolicy | null
        /**
         * Whether the leaflet allocates the same size for all children when folded.
         * 
         * If set to `FALSE`, different children can have different size along the
         * opposite orientation.
         */
        homogeneous?: boolean | null
        /**
         * The mode transition animation duration, in milliseconds.
         */
        modeTransitionDuration?: number | null
        /**
         * The type of animation used for transitions between modes and children.
         * 
         * The transition type can be changed without problems at runtime, so it is
         * possible to change the animation based on the mode or child that is about
         * to become current.
         */
        transitionType?: LeafletTransitionType | null
        /**
         * The widget currently visible when the leaflet is folded.
         * 
         * The transition is determined by [property`Leaflet:`transition-type] and
         * [Leaflet:child-transition-duration]. The transition can be cancelled by the
         * user, in which case visible child will change back to the previously
         * visible child.
         */
        visibleChild?: Gtk.Widget | null
        /**
         * The name of the widget currently visible when the leaflet is folded.
         * 
         * See [property`Leaflet:`visible-child].
         */
        visibleChildName?: string | null
    }

}

export interface Leaflet extends Swipeable, Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {

    // Own properties of Adw-1.Adw.Leaflet

    /**
     * Whether gestures and shortcuts for navigating backward are enabled.
     * 
     * The supported gestures are:
     * 
     * - One-finger swipe on touchscreens
     * - Horizontal scrolling on touchpads (usually two-finger swipe)
     * - Back/forward mouse buttons
     * 
     * The keyboard back/forward keys are also supported, as well as the
     * <kbd>Alt</kbd>+<kbd>←</kbd> shortcut for horizontal orientation, or
     * <kbd>Alt</kbd>+<kbd>↑</kbd> for vertical orientation.
     * 
     * If the orientation is horizontal, for right-to-left locales, gestures and
     * shortcuts are reversed.
     * 
     * Only children that have [property`LeafletPage:`navigatable] set to `TRUE`
     * can be navigated to.
     */
    canNavigateBack: boolean
    /**
     * Whether gestures and shortcuts for navigating forward are enabled.
     * 
     * The supported gestures are:
     * 
     * - One-finger swipe on touchscreens
     * - Horizontal scrolling on touchpads (usually two-finger swipe)
     * - Back/forward mouse buttons
     * 
     * The keyboard back/forward keys are also supported, as well as the
     * <kbd>Alt</kbd>+<kbd>→</kbd> shortcut for horizontal orientation, or
     * <kbd>Alt</kbd>+<kbd>↓</kbd> for vertical orientation.
     * 
     * If the orientation is horizontal, for right-to-left locales, gestures and
     * shortcuts are reversed.
     * 
     * Only children that have [property`LeafletPage:`navigatable] set to `TRUE`
     * can be navigated to.
     */
    canNavigateForward: boolean
    /**
     * Whether or not the leaflet can unfold.
     */
    canUnfold: boolean
    /**
     * The child transition spring parameters.
     * 
     * The default value is equivalent to:
     * 
     * ```c
     * adw_spring_params_new (1, 0.5, 500)
     * ```
     */
    childTransitionParams: SpringParams
    /**
     * Whether a child transition is currently running.
     */
    readonly childTransitionRunning: boolean
    /**
     * Determines when the leaflet will fold.
     * 
     * If set to `ADW_FOLD_THRESHOLD_POLICY_MINIMUM`, it will only fold when
     * the children cannot fit anymore. With `ADW_FOLD_THRESHOLD_POLICY_NATURAL`,
     * it will fold as soon as children don't get their natural size.
     * 
     * This can be useful if you have a long ellipsizing label and want to let it
     * ellipsize instead of immediately folding.
     */
    foldThresholdPolicy: FoldThresholdPolicy
    /**
     * Whether the leaflet is folded.
     * 
     * The leaflet will be folded if the size allocated to it is smaller than the
     * sum of the fold threshold policy, it will be unfolded otherwise.
     */
    readonly folded: boolean
    /**
     * Whether the leaflet allocates the same size for all children when folded.
     * 
     * If set to `FALSE`, different children can have different size along the
     * opposite orientation.
     */
    homogeneous: boolean
    /**
     * The mode transition animation duration, in milliseconds.
     */
    modeTransitionDuration: number
    /**
     * A selection model with the leaflet's pages.
     * 
     * This can be used to keep an up-to-date view. The model also implements
     * [iface`Gtk`.SelectionModel] and can be used to track and change the visible
     * page.
     */
    readonly pages: Gtk.SelectionModel
    /**
     * The type of animation used for transitions between modes and children.
     * 
     * The transition type can be changed without problems at runtime, so it is
     * possible to change the animation based on the mode or child that is about
     * to become current.
     */
    transitionType: LeafletTransitionType
    /**
     * The widget currently visible when the leaflet is folded.
     * 
     * The transition is determined by [property`Leaflet:`transition-type] and
     * [Leaflet:child-transition-duration]. The transition can be cancelled by the
     * user, in which case visible child will change back to the previously
     * visible child.
     */
    visibleChild: Gtk.Widget
    /**
     * The name of the widget currently visible when the leaflet is folded.
     * 
     * See [property`Leaflet:`visible-child].
     */
    visibleChildName: string

    // Owm methods of Adw-1.Adw.Leaflet

    /**
     * Adds a child to `self`.
     * @param child the widget to add
     */
    append(child: Gtk.Widget): LeafletPage
    /**
     * Finds the previous or next navigatable child.
     * 
     * This will be the same child [method`Leaflet`.navigate] or swipe gestures will
     * navigate to.
     * 
     * If there's no child to navigate to, `NULL` will be returned instead.
     * 
     * See [property`LeafletPage:`navigatable].
     * @param direction the direction
     */
    getAdjacentChild(direction: NavigationDirection): Gtk.Widget | null
    /**
     * Gets whether gestures and shortcuts for navigating backward are enabled.
     */
    getCanNavigateBack(): boolean
    /**
     * Gets whether gestures and shortcuts for navigating forward are enabled.
     */
    getCanNavigateForward(): boolean
    /**
     * Gets whether `self` can unfold.
     */
    getCanUnfold(): boolean
    /**
     * Finds the child of `self` with `name`.
     * 
     * Returns `NULL` if there is no child with this name.
     * 
     * See [property`LeafletPage:`name].
     * @param name the name of the child to find
     */
    getChildByName(name: string): Gtk.Widget | null
    /**
     * Gets the child transition spring parameters for `self`.
     */
    getChildTransitionParams(): SpringParams
    /**
     * Gets whether a child transition is currently running for `self`.
     */
    getChildTransitionRunning(): boolean
    /**
     * Gets the fold threshold policy for `self`.
     */
    getFoldThresholdPolicy(): FoldThresholdPolicy
    /**
     * Gets whether `self` is folded.
     */
    getFolded(): boolean
    /**
     * Gets whether `self` is homogeneous.
     */
    getHomogeneous(): boolean
    /**
     * Gets the mode transition animation duration for `self`.
     */
    getModeTransitionDuration(): number
    /**
     * Returns the [class`LeafletPage]` object for `child`.
     * @param child a child of `self`
     */
    getPage(child: Gtk.Widget): LeafletPage
    /**
     * Returns a [iface`Gio`.ListModel] that contains the pages of the leaflet.
     * 
     * This can be used to keep an up-to-date view. The model also implements
     * [iface`Gtk`.SelectionModel] and can be used to track and change the visible
     * page.
     */
    getPages(): Gtk.SelectionModel
    /**
     * Gets the type of animation used for transitions between modes and children.
     */
    getTransitionType(): LeafletTransitionType
    /**
     * Gets the widget currently visible when the leaflet is folded.
     */
    getVisibleChild(): Gtk.Widget | null
    /**
     * Gets the name of the currently visible child widget.
     */
    getVisibleChildName(): string | null
    /**
     * Inserts `child` in the position after `sibling` in the list of children.
     * 
     * If `sibling` is `NULL`, inserts `child` at the first position.
     * @param child the widget to insert
     * @param sibling the sibling after which to insert `child`
     */
    insertChildAfter(child: Gtk.Widget, sibling: Gtk.Widget | null): LeafletPage
    /**
     * Navigates to the previous or next child.
     * 
     * The child must have the [property`LeafletPage:`navigatable] property set to
     * `TRUE`, otherwise it will be skipped.
     * 
     * This will be the same child as returned by
     * [method`Leaflet`.get_adjacent_child] or navigated to via swipe gestures.
     * @param direction the direction
     */
    navigate(direction: NavigationDirection): boolean
    /**
     * Inserts `child` at the first position in `self`.
     * @param child the widget to prepend
     */
    prepend(child: Gtk.Widget): LeafletPage
    /**
     * Removes a child widget from `self`.
     * @param child the child to remove
     */
    remove(child: Gtk.Widget): void
    /**
     * Moves `child` to the position after `sibling` in the list of children.
     * 
     * If `sibling` is `NULL`, moves `child` to the first position.
     * @param child the widget to move, must be a child of `self`
     * @param sibling the sibling to move `child` after
     */
    reorderChildAfter(child: Gtk.Widget, sibling: Gtk.Widget | null): void
    /**
     * Sets whether gestures and shortcuts for navigating backward are enabled.
     * @param canNavigateBack the new value
     */
    setCanNavigateBack(canNavigateBack: boolean): void
    /**
     * Sets whether gestures and shortcuts for navigating forward are enabled.
     * @param canNavigateForward the new value
     */
    setCanNavigateForward(canNavigateForward: boolean): void
    /**
     * Sets whether `self` can unfold.
     * @param canUnfold whether `self` can unfold
     */
    setCanUnfold(canUnfold: boolean): void
    /**
     * Sets the child transition spring parameters for `self`.
     * @param params the new parameters
     */
    setChildTransitionParams(params: SpringParams): void
    /**
     * Sets the fold threshold policy for `self`.
     * @param policy the policy to use
     */
    setFoldThresholdPolicy(policy: FoldThresholdPolicy): void
    /**
     * Sets `self` to be homogeneous or not.
     * 
     * If set to `FALSE`, different children can have different size along the
     * opposite orientation.
     * @param homogeneous whether to make `self` homogeneous
     */
    setHomogeneous(homogeneous: boolean): void
    /**
     * Sets the mode transition animation duration for `self`.
     * @param duration the new duration, in milliseconds
     */
    setModeTransitionDuration(duration: number): void
    /**
     * Sets the type of animation used for transitions between modes and children.
     * @param transition the new transition type
     */
    setTransitionType(transition: LeafletTransitionType): void
    /**
     * Sets the widget currently visible when the leaflet is folded.
     * @param visibleChild the new child
     */
    setVisibleChild(visibleChild: Gtk.Widget): void
    /**
     * Makes the child with the name `name` visible.
     * 
     * See adw_leaflet_set_visible_child() for more details.
     * @param name the name of a child
     */
    setVisibleChildName(name: string): void

    // Class property signals of Adw-1.Adw.Leaflet

    connect(sigName: "notify::can-navigate-back", callback: any): number
    on(sigName: "notify::can-navigate-back", callback: any): number
    once(sigName: "notify::can-navigate-back", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-navigate-back", ...args: any[]): void
    connect(sigName: "notify::can-navigate-forward", callback: any): number
    on(sigName: "notify::can-navigate-forward", callback: any): number
    once(sigName: "notify::can-navigate-forward", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-navigate-forward", ...args: any[]): void
    connect(sigName: "notify::can-unfold", callback: any): number
    on(sigName: "notify::can-unfold", callback: any): number
    once(sigName: "notify::can-unfold", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-unfold", ...args: any[]): void
    connect(sigName: "notify::child-transition-params", callback: any): number
    on(sigName: "notify::child-transition-params", callback: any): number
    once(sigName: "notify::child-transition-params", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-transition-params", ...args: any[]): void
    connect(sigName: "notify::child-transition-running", callback: any): number
    on(sigName: "notify::child-transition-running", callback: any): number
    once(sigName: "notify::child-transition-running", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-transition-running", ...args: any[]): void
    connect(sigName: "notify::fold-threshold-policy", callback: any): number
    on(sigName: "notify::fold-threshold-policy", callback: any): number
    once(sigName: "notify::fold-threshold-policy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fold-threshold-policy", ...args: any[]): void
    connect(sigName: "notify::folded", callback: any): number
    on(sigName: "notify::folded", callback: any): number
    once(sigName: "notify::folded", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::folded", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::mode-transition-duration", callback: any): number
    on(sigName: "notify::mode-transition-duration", callback: any): number
    once(sigName: "notify::mode-transition-duration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mode-transition-duration", ...args: any[]): void
    connect(sigName: "notify::pages", callback: any): number
    on(sigName: "notify::pages", callback: any): number
    once(sigName: "notify::pages", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pages", ...args: any[]): void
    connect(sigName: "notify::transition-type", callback: any): number
    on(sigName: "notify::transition-type", callback: any): number
    once(sigName: "notify::transition-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transition-type", ...args: any[]): void
    connect(sigName: "notify::visible-child", callback: any): number
    on(sigName: "notify::visible-child", callback: any): number
    once(sigName: "notify::visible-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible-child", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
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
 * An adaptive container acting like a box or a stack.
 * 
 * <picture>
 *   <source srcset="leaflet-wide-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="leaflet-wide.png" alt="leaflet-wide">
 * </picture>
 * <picture>
 *   <source srcset="leaflet-narrow-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="leaflet-narrow.png" alt="leaflet-narrow">
 * </picture>
 * 
 * The `AdwLeaflet` widget can display its children like a [class`Gtk`.Box] does
 * or like a [class`Gtk`.Stack] does, adapting to size changes by switching
 * between the two modes.
 * 
 * When there is enough space the children are displayed side by side, otherwise
 * only one is displayed and the leaflet is said to be “folded”.
 * The threshold is dictated by the preferred minimum sizes of the children.
 * When a leaflet is folded, the children can be navigated using swipe gestures.
 * 
 * The “over” and “under” transition types stack the children one on top of the
 * other, while the “slide” transition puts the children side by side. While
 * navigating to a child on the side or below can be performed by swiping the
 * current child away, navigating to an upper child requires dragging it from
 * the edge where it resides. This doesn't affect non-dragging swipes.
 * 
 * ## CSS nodes
 * 
 * `AdwLeaflet` has a single CSS node with name `leaflet`. The node will get the
 * style classes `.folded` when it is folded, `.unfolded` when it's not, or none
 * if it hasn't computed its fold yet.
 * @class 
 */
export class Leaflet extends Gtk.Widget {

    // Own properties of Adw-1.Adw.Leaflet

    static name: string

    // Constructors of Adw-1.Adw.Leaflet

    constructor(config?: Leaflet.ConstructorProperties) 
    /**
     * Creates a new `AdwLeaflet`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwLeaflet`.
     * @constructor 
     */
    static new(): Leaflet
    _init(config?: Leaflet.ConstructorProperties): void
}

export module LeafletPage {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.LeafletPage

        /**
         * The child of the page.
         */
        child?: Gtk.Widget | null
        /**
         * The name of the child page.
         */
        name?: string | null
        /**
         * Whether the child can be navigated to when folded.
         * 
         * If `FALSE`, the child will be ignored by
         * [method`Leaflet`.get_adjacent_child], [method`Leaflet`.navigate], and swipe
         * gestures.
         * 
         * This can be used used to prevent switching to widgets like separators.
         */
        navigatable?: boolean | null
    }

}

export interface LeafletPage {

    // Own properties of Adw-1.Adw.LeafletPage

    /**
     * The child of the page.
     */
    readonly child: Gtk.Widget
    /**
     * The name of the child page.
     */
    name: string
    /**
     * Whether the child can be navigated to when folded.
     * 
     * If `FALSE`, the child will be ignored by
     * [method`Leaflet`.get_adjacent_child], [method`Leaflet`.navigate], and swipe
     * gestures.
     * 
     * This can be used used to prevent switching to widgets like separators.
     */
    navigatable: boolean

    // Owm methods of Adw-1.Adw.LeafletPage

    /**
     * Gets the leaflet child th which `self` belongs.
     */
    getChild(): Gtk.Widget
    /**
     * Gets the name of `self`.
     */
    getName(): string | null
    /**
     * Gets whether the child can be navigated to when folded.
     */
    getNavigatable(): boolean
    /**
     * Sets the name of the `self`.
     * @param name the new value to set
     */
    setName(name: string | null): void
    /**
     * Sets whether `self` can be navigated to when folded.
     * @param navigatable whether `self` can be navigated to when folded
     */
    setNavigatable(navigatable: boolean): void

    // Class property signals of Adw-1.Adw.LeafletPage

    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::navigatable", callback: any): number
    on(sigName: "notify::navigatable", callback: any): number
    once(sigName: "notify::navigatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::navigatable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An auxiliary class used by [class`Leaflet]`.
 * @class 
 */
export class LeafletPage extends GObject.Object {

    // Own properties of Adw-1.Adw.LeafletPage

    static name: string

    // Constructors of Adw-1.Adw.LeafletPage

    constructor(config?: LeafletPage.ConstructorProperties) 
    _init(config?: LeafletPage.ConstructorProperties): void
}

export module PreferencesGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.PreferencesGroup

        /**
         * The description for this group of preferences.
         */
        description?: string | null
        /**
         * The header suffix widget.
         * 
         * Displayed above the list, next to the title and description. Suffixes are commonly used to show a button or a spinner for the whole group.
         */
        headerSuffix?: Gtk.Widget | null
        /**
         * The title for this group of preferences.
         */
        title?: string | null
    }

}

export interface PreferencesGroup extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.PreferencesGroup

    /**
     * The description for this group of preferences.
     */
    description: string
    /**
     * The header suffix widget.
     * 
     * Displayed above the list, next to the title and description. Suffixes are commonly used to show a button or a spinner for the whole group.
     */
    headerSuffix: Gtk.Widget
    /**
     * The title for this group of preferences.
     */
    title: string

    // Own fields of Adw-1.Adw.PreferencesGroup

    parentInstance: any

    // Owm methods of Adw-1.Adw.PreferencesGroup

    /**
     * Adds a child to `self`.
     * @param child the widget to add
     */
    add(child: Gtk.Widget): void
    /**
     * Gets the description of `self`.
     */
    getDescription(): string | null
    /**
     * Gets the suffix for `self'`s header.
     */
    getHeaderSuffix(): Gtk.Widget | null
    /**
     * Gets the title of `self`.
     */
    getTitle(): string
    /**
     * Removes a child from `self`.
     * @param child the child to remove
     */
    remove(child: Gtk.Widget): void
    /**
     * Sets the description for `self`.
     * @param description the description
     */
    setDescription(description: string | null): void
    /**
     * Sets the suffix for `self'`s header.
     * @param suffix the suffix to set
     */
    setHeaderSuffix(suffix: Gtk.Widget | null): void
    /**
     * Sets the title for `self`.
     * @param title the title
     */
    setTitle(title: string): void

    // Class property signals of Adw-1.Adw.PreferencesGroup

    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::header-suffix", callback: any): number
    on(sigName: "notify::header-suffix", callback: any): number
    once(sigName: "notify::header-suffix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::header-suffix", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A group of preference rows.
 * 
 * <picture>
 *   <source srcset="preferences-group-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="preferences-group.png" alt="preferences-group">
 * </picture>
 * 
 * An `AdwPreferencesGroup` represents a group or tightly related preferences,
 * which in turn are represented by [class`PreferencesRow]`.
 * 
 * To summarize the role of the preferences it gathers, a group can have both a
 * title and a description. The title will be used by [class`PreferencesWindow]`
 * to let the user look for a preference.
 * 
 * ## AdwPreferencesGroup as GtkBuildable
 * 
 * The `AdwPreferencesGroup` implementation of the [iface`Gtk`.Buildable] interface
 * supports adding [class`PreferencesRow]`s to the list by omitting "type". If "type"
 * is omitted and the widget isn't a [class`PreferencesRow]` the child is added to
 * a box below the list.
 * 
 * When the "type" attribute of a child is `header-suffix`, the child
 * is set as the suffix on the end of the title and description.
 * 
 * ## CSS nodes
 * 
 * `AdwPreferencesGroup` has a single CSS node with name `preferencesgroup`.
 * 
 * ## Accessibility
 * 
 * `AdwPreferencesGroup` uses the `GTK_ACCESSIBLE_ROLE_GROUP` role.
 * @class 
 */
export class PreferencesGroup extends Gtk.Widget {

    // Own properties of Adw-1.Adw.PreferencesGroup

    static name: string

    // Constructors of Adw-1.Adw.PreferencesGroup

    constructor(config?: PreferencesGroup.ConstructorProperties) 
    /**
     * Creates a new `AdwPreferencesGroup`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwPreferencesGroup`.
     * @constructor 
     */
    static new(): PreferencesGroup
    _init(config?: PreferencesGroup.ConstructorProperties): void
}

export module PreferencesPage {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.PreferencesPage

        /**
         * The icon name for this page.
         */
        iconName?: string | null
        /**
         * The name of this page.
         */
        name?: string | null
        /**
         * The title for this page.
         */
        title?: string | null
        /**
         * Whether an embedded underline in the title indicates a mnemonic.
         */
        useUnderline?: boolean | null
    }

}

export interface PreferencesPage extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.PreferencesPage

    /**
     * The icon name for this page.
     */
    iconName: string
    /**
     * The name of this page.
     */
    name: string
    /**
     * The title for this page.
     */
    title: string
    /**
     * Whether an embedded underline in the title indicates a mnemonic.
     */
    useUnderline: boolean

    // Own fields of Adw-1.Adw.PreferencesPage

    parentInstance: any

    // Owm methods of Adw-1.Adw.PreferencesPage

    /**
     * Adds a preferences group to `self`.
     * @param group the group to add
     */
    add(group: PreferencesGroup): void
    /**
     * Gets the icon name for `self`.
     */
    getIconName(): string | null
    /**
     * Gets the name of `self`.
     */
    getName(): string | null

    // Overloads of getName

    /**
     * Retrieves the name of a widget.
     * 
     * See [method`Gtk`.Widget.set_name] for the significance of widget names.
     */
    getName(): string
    /**
     * Gets the title of `self`.
     */
    getTitle(): string
    /**
     * Gets whether an embedded underline in the title indicates a mnemonic.
     */
    getUseUnderline(): boolean
    /**
     * Removes a group from `self`.
     * @param group the group to remove
     */
    remove(group: PreferencesGroup): void
    /**
     * Sets the icon name for `self`.
     * @param iconName the icon name
     */
    setIconName(iconName: string | null): void
    /**
     * Sets the name of `self`.
     * @param name the name
     */
    setName(name: string | null): void

    // Overloads of setName

    /**
     * Sets a widgets name.
     * 
     * Setting a name allows you to refer to the widget from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for [class`Gtk`.StyleContext].
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    setName(name: string): void
    /**
     * Sets the title of `self`.
     * @param title the title
     */
    setTitle(title: string): void
    /**
     * Sets whether an embedded underline in the title indicates a mnemonic.
     * @param useUnderline `TRUE` if underlines in the text indicate mnemonics
     */
    setUseUnderline(useUnderline: boolean): void

    // Class property signals of Adw-1.Adw.PreferencesPage

    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A page from [class`PreferencesWindow]`.
 * 
 * <picture>
 *   <source srcset="preferences-page-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="preferences-page.png" alt="preferences-page">
 * </picture>
 * 
 * The `AdwPreferencesPage` widget gathers preferences groups into a single page
 * of a preferences window.
 * 
 * ## CSS nodes
 * 
 * `AdwPreferencesPage` has a single CSS node with name `preferencespage`.
 * 
 * ## Accessibility
 * 
 * `AdwPreferencesPage` uses the `GTK_ACCESSIBLE_ROLE_GROUP` role.
 * @class 
 */
export class PreferencesPage extends Gtk.Widget {

    // Own properties of Adw-1.Adw.PreferencesPage

    static name: string

    // Constructors of Adw-1.Adw.PreferencesPage

    constructor(config?: PreferencesPage.ConstructorProperties) 
    /**
     * Creates a new `AdwPreferencesPage`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwPreferencesPage`.
     * @constructor 
     */
    static new(): PreferencesPage
    _init(config?: PreferencesPage.ConstructorProperties): void
}

export module PreferencesRow {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.ListBoxRow.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.PreferencesRow

        /**
         * The title of the preference represented by this row.
         */
        title?: string | null
        /**
         * Whether the user can copy the title from the label.
         * 
         * See also [property`Gtk`.Label:selectable].
         */
        titleSelectable?: boolean | null
        /**
         * Whether to use Pango markup for the title label.
         * 
         * Subclasses may also use it for other labels, such as subtitle.
         * 
         * See also [func`Pango`.parse_markup].
         */
        useMarkup?: boolean | null
        /**
         * Whether an embedded underline in the title indicates a mnemonic.
         */
        useUnderline?: boolean | null
    }

}

export interface PreferencesRow extends Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.PreferencesRow

    /**
     * The title of the preference represented by this row.
     */
    title: string
    /**
     * Whether the user can copy the title from the label.
     * 
     * See also [property`Gtk`.Label:selectable].
     */
    titleSelectable: boolean
    /**
     * Whether to use Pango markup for the title label.
     * 
     * Subclasses may also use it for other labels, such as subtitle.
     * 
     * See also [func`Pango`.parse_markup].
     */
    useMarkup: boolean
    /**
     * Whether an embedded underline in the title indicates a mnemonic.
     */
    useUnderline: boolean

    // Own fields of Adw-1.Adw.PreferencesRow

    parentInstance: any

    // Owm methods of Adw-1.Adw.PreferencesRow

    /**
     * Gets the title of the preference represented by `self`.
     */
    getTitle(): string
    /**
     * Gets whether the user can copy the title from the label
     */
    getTitleSelectable(): boolean
    /**
     * Gets whether to use Pango markup for the title label.
     */
    getUseMarkup(): boolean
    /**
     * Gets whether an embedded underline in the title indicates a mnemonic.
     */
    getUseUnderline(): boolean
    /**
     * Sets the title of the preference represented by `self`.
     * 
     * The title is interpreted as Pango markup unless
     * [property`PreferencesRow:`use-markup] is set to `FALSE`.
     * @param title the title
     */
    setTitle(title: string): void
    /**
     * Sets whether the user can copy the title from the label
     * @param titleSelectable `TRUE` if the user can copy the title from the label
     */
    setTitleSelectable(titleSelectable: boolean): void
    /**
     * Sets whether to use Pango markup for the title label.
     * @param useMarkup whether to use markup
     */
    setUseMarkup(useMarkup: boolean): void
    /**
     * Sets whether an embedded underline in the title indicates a mnemonic.
     * @param useUnderline `TRUE` if underlines in the text indicate mnemonics
     */
    setUseUnderline(useUnderline: boolean): void

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

    // Class property signals of Adw-1.Adw.PreferencesRow

    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::title-selectable", callback: any): number
    on(sigName: "notify::title-selectable", callback: any): number
    once(sigName: "notify::title-selectable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title-selectable", ...args: any[]): void
    connect(sigName: "notify::use-markup", callback: any): number
    on(sigName: "notify::use-markup", callback: any): number
    once(sigName: "notify::use-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-markup", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: any): number
    on(sigName: "notify::use-underline", callback: any): number
    once(sigName: "notify::use-underline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: any): number
    on(sigName: "notify::activatable", callback: any): number
    once(sigName: "notify::activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: any): number
    on(sigName: "notify::selectable", callback: any): number
    once(sigName: "notify::selectable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selectable", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A [class`Gtk`.ListBoxRow] used to present preferences.
 * 
 * The `AdwPreferencesRow` widget has a title that [class`PreferencesWindow]`
 * will use to let the user look for a preference. It doesn't present the title
 * in any way and lets you present the preference as you please.
 * 
 * [class`ActionRow]` and its derivatives are convenient to use as preference
 * rows as they take care of presenting the preference's title while letting you
 * compose the inputs of the preference around it.
 * @class 
 */
export class PreferencesRow extends Gtk.ListBoxRow {

    // Own properties of Adw-1.Adw.PreferencesRow

    static name: string

    // Constructors of Adw-1.Adw.PreferencesRow

    constructor(config?: PreferencesRow.ConstructorProperties) 
    /**
     * Creates a new `AdwPreferencesRow`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwPreferencesRow`.
     * @constructor 
     */
    static new(): PreferencesRow
    _init(config?: PreferencesRow.ConstructorProperties): void
}

export module PreferencesWindow {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Native.ConstructorProperties, Gtk.Root.ConstructorProperties, Gtk.ShortcutManager.ConstructorProperties, Window.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.PreferencesWindow

        /**
         * Whether gestures and shortcuts for closing subpages are enabled.
         * 
         * The supported gestures are:
         * 
         * - One-finger swipe on touchscreens
         * - Horizontal scrolling on touchpads (usually two-finger swipe)
         * - Back mouse button
         * 
         * The keyboard back key is also supported, as well as the
         * <kbd>Alt</kbd>+<kbd>←</kbd> shortcut.
         * 
         * For right-to-left locales, gestures and shortcuts are reversed.
         */
        canNavigateBack?: boolean | null
        /**
         * Whether search is enabled.
         */
        searchEnabled?: boolean | null
        visiblePage?: Gtk.Widget | null
        visiblePageName?: string | null
    }

}

export interface PreferencesWindow extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Native, Gtk.Root, Gtk.ShortcutManager {

    // Own properties of Adw-1.Adw.PreferencesWindow

    /**
     * Whether gestures and shortcuts for closing subpages are enabled.
     * 
     * The supported gestures are:
     * 
     * - One-finger swipe on touchscreens
     * - Horizontal scrolling on touchpads (usually two-finger swipe)
     * - Back mouse button
     * 
     * The keyboard back key is also supported, as well as the
     * <kbd>Alt</kbd>+<kbd>←</kbd> shortcut.
     * 
     * For right-to-left locales, gestures and shortcuts are reversed.
     */
    canNavigateBack: boolean
    /**
     * Whether search is enabled.
     */
    searchEnabled: boolean
    visiblePage: Gtk.Widget
    visiblePageName: string

    // Own fields of Adw-1.Adw.PreferencesWindow

    parentInstance: any

    // Owm methods of Adw-1.Adw.PreferencesWindow

    /**
     * Adds a preferences page to `self`.
     * @param page the page to add
     */
    add(page: PreferencesPage): void
    /**
     * Displays `toast`.
     * 
     * See [method`ToastOverlay`.add_toast].
     * @param toast a toast
     */
    addToast(toast: Toast): void
    /**
     * Closes the current subpage.
     * 
     * If there is no presented subpage, this does nothing.
     */
    closeSubpage(): void
    /**
     * Gets whether gestures and shortcuts for closing subpages are enabled.
     */
    getCanNavigateBack(): boolean
    /**
     * Gets whether search is enabled for `self`.
     */
    getSearchEnabled(): boolean
    /**
     * Gets the currently visible page of `self`.
     */
    getVisiblePage(): PreferencesPage | null
    /**
     * Gets the name of currently visible page of `self`.
     */
    getVisiblePageName(): string | null
    /**
     * Sets `subpage` as the window's subpage and opens it.
     * 
     * The transition can be cancelled by the user, in which case visible child will
     * change back to the previously visible child.
     * @param subpage the subpage
     */
    presentSubpage(subpage: Gtk.Widget): void
    /**
     * Removes a page from `self`.
     * @param page the page to remove
     */
    remove(page: PreferencesPage): void
    /**
     * Sets whether gestures and shortcuts for closing subpages are enabled.
     * @param canNavigateBack the new value
     */
    setCanNavigateBack(canNavigateBack: boolean): void
    /**
     * Sets whether search is enabled for `self`.
     * @param searchEnabled whether search is enabled
     */
    setSearchEnabled(searchEnabled: boolean): void
    /**
     * Makes `page` the visible page of `self`.
     * @param page a page of `self`
     */
    setVisiblePage(page: PreferencesPage): void
    /**
     * Makes the page with the given name visible.
     * @param name the name of the page to make visible
     */
    setVisiblePageName(name: string): void

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
    /**
     * Activates the `default.activate` action from `widget`.
     */
    activateDefault(): void
    activateDefault(): void

    // Overloads of activateDefault

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

    // Class property signals of Adw-1.Adw.PreferencesWindow

    connect(sigName: "notify::can-navigate-back", callback: any): number
    on(sigName: "notify::can-navigate-back", callback: any): number
    once(sigName: "notify::can-navigate-back", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-navigate-back", ...args: any[]): void
    connect(sigName: "notify::search-enabled", callback: any): number
    on(sigName: "notify::search-enabled", callback: any): number
    once(sigName: "notify::search-enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::search-enabled", ...args: any[]): void
    connect(sigName: "notify::visible-page", callback: any): number
    on(sigName: "notify::visible-page", callback: any): number
    once(sigName: "notify::visible-page", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible-page", ...args: any[]): void
    connect(sigName: "notify::visible-page-name", callback: any): number
    on(sigName: "notify::visible-page-name", callback: any): number
    once(sigName: "notify::visible-page-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible-page-name", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A window to present an application's preferences.
 * 
 * <picture>
 *   <source srcset="preferences-window-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="preferences-window.png" alt="preferences-window">
 * </picture>
 * 
 * The `AdwPreferencesWindow` widget presents an application's preferences
 * gathered into pages and groups. The preferences are searchable by the user.
 * 
 * ## CSS nodes
 * 
 * `AdwPreferencesWindow` has a main CSS node with the name `window` and the
 * style class `.preferences`.
 * @class 
 */
export class PreferencesWindow extends Window {

    // Own properties of Adw-1.Adw.PreferencesWindow

    static name: string

    // Constructors of Adw-1.Adw.PreferencesWindow

    constructor(config?: PreferencesWindow.ConstructorProperties) 
    /**
     * Creates a new `AdwPreferencesWindow`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwPreferencesWindow`.
     * @constructor 
     */
    static new(): PreferencesWindow
    _init(config?: PreferencesWindow.ConstructorProperties): void
}

export module SplitButton {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate`
     */
    export interface ActivateSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `clicked`
     */
    export interface ClickedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.SplitButton

        /**
         * The child widget.
         * 
         * Setting the child widget will set [property`SplitButton:`label] and
         * [property`SplitButton:`icon-name] to `NULL`.
         */
        child?: Gtk.Widget | null
        /**
         * The direction in which the popup will be popped up.
         * 
         * The dropdown arrow icon will point at the same direction.
         * 
         * If the does not fit in the available space in the given direction,
         * GTK will its best to keep it inside the screen and fully visible.
         * 
         * If you pass `GTK_ARROW_NONE`, it's equivalent to `GTK_ARROW_DOWN`.
         */
        direction?: Gtk.ArrowType | null
        /**
         * The name of the icon used to automatically populate the button.
         * 
         * Setting the icon name will set [property`SplitButton:`label] and
         * [property`SplitButton:`child] to `NULL`.
         */
        iconName?: string | null
        /**
         * The label for the button.
         * 
         * Setting the label will set [property`SplitButton:`icon-name] and
         * [property`SplitButton:`child] to `NULL`.
         */
        label?: string | null
        /**
         * The `GMenuModel` from which the popup will be created.
         * 
         * If the menu model is `NULL`, the dropdown is disabled.
         * 
         * A [class`Gtk`.Popover] will be created from the menu model with
         * [ctor`Gtk`.PopoverMenu.new_from_model]. Actions will be connected
         * as documented for this function.
         * 
         * If [property`SplitButton:`popover] is already set, it will be dissociated
         * from the button, and the property is set to `NULL`.
         */
        menuModel?: Gio.MenuModel | null
        /**
         * The `GtkPopover` that will be popped up when the dropdown is clicked.
         * 
         * If the popover is `NULL`, the dropdown is disabled.
         * 
         * If [property`SplitButton:`menu-model] is set, the menu model is dissociated
         * from the button, and the property is set to `NULL`.
         */
        popover?: Gtk.Popover | null
        /**
         * Whether an underline in the text indicates a mnemonic.
         * 
         * See [property`SplitButton:`label].
         */
        useUnderline?: boolean | null
    }

}

export interface SplitButton extends Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.SplitButton

    /**
     * The child widget.
     * 
     * Setting the child widget will set [property`SplitButton:`label] and
     * [property`SplitButton:`icon-name] to `NULL`.
     */
    child: Gtk.Widget
    /**
     * The direction in which the popup will be popped up.
     * 
     * The dropdown arrow icon will point at the same direction.
     * 
     * If the does not fit in the available space in the given direction,
     * GTK will its best to keep it inside the screen and fully visible.
     * 
     * If you pass `GTK_ARROW_NONE`, it's equivalent to `GTK_ARROW_DOWN`.
     */
    direction: Gtk.ArrowType
    /**
     * The name of the icon used to automatically populate the button.
     * 
     * Setting the icon name will set [property`SplitButton:`label] and
     * [property`SplitButton:`child] to `NULL`.
     */
    iconName: string
    /**
     * The label for the button.
     * 
     * Setting the label will set [property`SplitButton:`icon-name] and
     * [property`SplitButton:`child] to `NULL`.
     */
    label: string
    /**
     * The `GMenuModel` from which the popup will be created.
     * 
     * If the menu model is `NULL`, the dropdown is disabled.
     * 
     * A [class`Gtk`.Popover] will be created from the menu model with
     * [ctor`Gtk`.PopoverMenu.new_from_model]. Actions will be connected
     * as documented for this function.
     * 
     * If [property`SplitButton:`popover] is already set, it will be dissociated
     * from the button, and the property is set to `NULL`.
     */
    menuModel: Gio.MenuModel
    /**
     * The `GtkPopover` that will be popped up when the dropdown is clicked.
     * 
     * If the popover is `NULL`, the dropdown is disabled.
     * 
     * If [property`SplitButton:`menu-model] is set, the menu model is dissociated
     * from the button, and the property is set to `NULL`.
     */
    popover: Gtk.Popover
    /**
     * Whether an underline in the text indicates a mnemonic.
     * 
     * See [property`SplitButton:`label].
     */
    useUnderline: boolean

    // Owm methods of Adw-1.Adw.SplitButton

    /**
     * Gets the child widget.
     */
    getChild(): Gtk.Widget | null
    /**
     * Gets the direction in which the popup will be popped up.
     */
    getDirection(): Gtk.ArrowType

    // Overloads of getDirection

    /**
     * Gets the reading direction for a particular widget.
     * 
     * See [method`Gtk`.Widget.set_direction].
     */
    getDirection(): Gtk.TextDirection
    /**
     * Gets the name of the icon used to automatically populate the button.
     * 
     * If the icon name has not been set with [method`SplitButton`.set_icon_name]
     * the return value will be `NULL`.
     */
    getIconName(): string | null
    /**
     * Gets the label for `self`.
     */
    getLabel(): string | null
    /**
     * Gets the menu model from which the popup will be created.
     */
    getMenuModel(): Gio.MenuModel | null
    /**
     * Gets the popover that will be popped up when the dropdown is clicked.
     */
    getPopover(): Gtk.Popover | null
    /**
     * Gets whether an underline in the text indicates a mnemonic.
     */
    getUseUnderline(): boolean
    /**
     * Dismisses the menu.
     */
    popdown(): void
    /**
     * Pops up the menu.
     */
    popup(): void
    /**
     * Sets the child widget.
     * @param child the new child widget
     */
    setChild(child: Gtk.Widget | null): void
    /**
     * Sets the direction in which the popup will be popped up.
     * @param direction the direction
     */
    setDirection(direction: Gtk.ArrowType): void

    // Overloads of setDirection

    /**
     * Sets the reading direction on a particular widget.
     * 
     * This direction controls the primary direction for widgets
     * containing text, and also the direction in which the children
     * of a container are packed. The ability to set the direction is
     * present in order so that correct localization into languages with
     * right-to-left reading directions can be done. Generally, applications
     * will let the default reading direction present, except for containers
     * where the containers are arranged in an order that is explicitly
     * visual rather than logical (such as buttons for text justification).
     * 
     * If the direction is set to %GTK_TEXT_DIR_NONE, then the value
     * set by [func`Gtk`.Widget.set_default_direction] will be used.
     * @param dir the new direction
     */
    setDirection(dir: Gtk.TextDirection): void
    /**
     * Sets the name of the icon used to automatically populate the button.
     * @param iconName the icon name to set
     */
    setIconName(iconName: string): void
    /**
     * Sets the label for `self`.
     * @param label the label to set
     */
    setLabel(label: string): void
    /**
     * Sets the menu model from which the popup will be created.
     * @param menuModel the menu model
     */
    setMenuModel(menuModel: Gio.MenuModel | null): void
    /**
     * Sets the popover that will be popped up when the dropdown is clicked.
     * @param popover the popover
     */
    setPopover(popover: Gtk.Popover | null): void
    /**
     * Sets whether an underline in the text indicates a mnemonic.
     * @param useUnderline whether an underline in the text indicates a mnemonic
     */
    setUseUnderline(useUnderline: boolean): void

    // Own signals of Adw-1.Adw.SplitButton

    connect(sigName: "activate", callback: SplitButton.ActivateSignalCallback): number
    on(sigName: "activate", callback: SplitButton.ActivateSignalCallback): number
    once(sigName: "activate", callback: SplitButton.ActivateSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "activate", ...args: any[]): void
    connect(sigName: "clicked", callback: SplitButton.ClickedSignalCallback): number
    on(sigName: "clicked", callback: SplitButton.ClickedSignalCallback): number
    once(sigName: "clicked", callback: SplitButton.ClickedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "clicked", ...args: any[]): void

    // Class property signals of Adw-1.Adw.SplitButton

    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::direction", callback: any): number
    on(sigName: "notify::direction", callback: any): number
    once(sigName: "notify::direction", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::direction", ...args: any[]): void
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
    connect(sigName: "notify::menu-model", callback: any): number
    on(sigName: "notify::menu-model", callback: any): number
    once(sigName: "notify::menu-model", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::menu-model", ...args: any[]): void
    connect(sigName: "notify::popover", callback: any): number
    on(sigName: "notify::popover", callback: any): number
    once(sigName: "notify::popover", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::popover", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A combined button and dropdown widget.
 * 
 * <picture>
 *   <source srcset="split-button-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="split-button.png" alt="split-button">
 * </picture>
 * 
 * `AdwSplitButton` is typically used to present a set of actions in a menu,
 * but allow access to one of them with a single click.
 * 
 * The API is very similar to [class`Gtk`.Button] and [class`Gtk`.MenuButton], see
 * their documentation for details.
 * 
 * ## CSS nodes
 * 
 * ```
 * splitbutton[.image-button][.text-button]
 * ├── button
 * │   ╰── <content>
 * ├── separator
 * ╰── menubutton
 *     ╰── button.toggle
 *         ╰── arrow
 * ```
 * 
 * `AdwSplitButton`'s CSS node is called `splitbutton`. It contains the css
 * nodes: `button`, `separator`, `menubutton`. See [class`Gtk`.MenuButton]
 * documentation for the `menubutton` contents.
 * 
 * The main CSS node will contain the `.image-button` or `.text-button` style
 * classes matching the button contents. The nested button nodes will never
 * contain them.
 * 
 * ## Accessibility
 * 
 * `AdwSplitButton` uses the `GTK_ACCESSIBLE_ROLE_GROUP` role.
 * @class 
 */
export class SplitButton extends Gtk.Widget {

    // Own properties of Adw-1.Adw.SplitButton

    static name: string

    // Constructors of Adw-1.Adw.SplitButton

    constructor(config?: SplitButton.ConstructorProperties) 
    /**
     * Creates a new `AdwSplitButton`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwSplitButton`.
     * @constructor 
     */
    static new(): SplitButton
    _init(config?: SplitButton.ConstructorProperties): void
}

export module SpringAnimation {

    // Constructor properties interface

    export interface ConstructorProperties extends Animation.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.SpringAnimation

        /**
         * Whether the animation should be clamped.
         * 
         * If set to `TRUE`, the animation will abruptly end as soon as it reaches the
         * final value, preventing overshooting.
         * 
         * It won't prevent overshooting [property`SpringAnimation:`value-from] if a
         * relative negative [property`SpringAnimation:`initial-velocity] is set.
         */
        clamp?: boolean | null
        /**
         * Precision of the spring.
         * 
         * The level of precision used to determine when the animation has come to a
         * rest, that is, when the amplitude of the oscillations becomes smaller than
         * this value.
         * 
         * If the epsilon value is too small, the animation will take a long time to
         * stop after the animated value has stopped visibly changing.
         * 
         * If the epsilon value is too large, the animation will end prematurely.
         * 
         * The default value is 0.001.
         */
        epsilon?: number | null
        /**
         * The initial velocity to start the animation with.
         * 
         * Initial velocity affects only the animation curve, but not its duration.
         */
        initialVelocity?: number | null
        /**
         * Physical parameters describing the spring.
         */
        springParams?: SpringParams | null
        /**
         * The value to animate from.
         * 
         * The animation will start at this value and end at
         * [property`SpringAnimation:`value-to].
         */
        valueFrom?: number | null
        /**
         * The value to animate to.
         * 
         * The animation will start at [property`SpringAnimation:`value-from] and end
         * at this value.
         */
        valueTo?: number | null
    }

}

export interface SpringAnimation {

    // Own properties of Adw-1.Adw.SpringAnimation

    /**
     * Whether the animation should be clamped.
     * 
     * If set to `TRUE`, the animation will abruptly end as soon as it reaches the
     * final value, preventing overshooting.
     * 
     * It won't prevent overshooting [property`SpringAnimation:`value-from] if a
     * relative negative [property`SpringAnimation:`initial-velocity] is set.
     */
    clamp: boolean
    /**
     * Precision of the spring.
     * 
     * The level of precision used to determine when the animation has come to a
     * rest, that is, when the amplitude of the oscillations becomes smaller than
     * this value.
     * 
     * If the epsilon value is too small, the animation will take a long time to
     * stop after the animated value has stopped visibly changing.
     * 
     * If the epsilon value is too large, the animation will end prematurely.
     * 
     * The default value is 0.001.
     */
    epsilon: number
    /**
     * Estimated duration of the animation, in milliseconds.
     * 
     * Can be [const`DURATION_INFINITE]` if the spring damping is set to 0.
     */
    readonly estimatedDuration: number
    /**
     * The initial velocity to start the animation with.
     * 
     * Initial velocity affects only the animation curve, but not its duration.
     */
    initialVelocity: number
    /**
     * Physical parameters describing the spring.
     */
    springParams: SpringParams
    /**
     * The value to animate from.
     * 
     * The animation will start at this value and end at
     * [property`SpringAnimation:`value-to].
     */
    valueFrom: number
    /**
     * The value to animate to.
     * 
     * The animation will start at [property`SpringAnimation:`value-from] and end
     * at this value.
     */
    valueTo: number
    /**
     * Current velocity of the animation.
     */
    readonly velocity: number

    // Owm methods of Adw-1.Adw.SpringAnimation

    /**
     * Gets whether `self` should be clamped.
     */
    getClamp(): boolean
    /**
     * Gets the precision used to determine the duration of `self`.
     */
    getEpsilon(): number
    /**
     * Gets the estimated duration of `self`.
     */
    getEstimatedDuration(): number
    /**
     * Gets the initial velocity of `self`.
     */
    getInitialVelocity(): number
    /**
     * Gets the physical parameters of the spring of `self`.
     */
    getSpringParams(): SpringParams
    /**
     * Gets the value `self` will animate from.
     */
    getValueFrom(): number
    /**
     * Gets the value `self` will animate to.
     */
    getValueTo(): number
    /**
     * Gets the current velocity of `self`.
     */
    getVelocity(): number
    /**
     * Sets whether `self` should be clamped.
     * @param clamp the new value
     */
    setClamp(clamp: boolean): void
    /**
     * Sets the precision used to determine the duration of `self`.
     * @param epsilon the new value
     */
    setEpsilon(epsilon: number): void
    /**
     * Sets the initial velocity of `self`.
     * @param velocity the initial velocity
     */
    setInitialVelocity(velocity: number): void
    /**
     * Sets the physical parameters of the spring of `self`.
     * @param springParams the new spring parameters
     */
    setSpringParams(springParams: SpringParams): void
    /**
     * Sets the value `self` will animate from.
     * @param value the value to animate from
     */
    setValueFrom(value: number): void
    /**
     * Sets the value `self` will animate to.
     * @param value the value to animate to
     */
    setValueTo(value: number): void

    // Class property signals of Adw-1.Adw.SpringAnimation

    connect(sigName: "notify::clamp", callback: any): number
    on(sigName: "notify::clamp", callback: any): number
    once(sigName: "notify::clamp", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::clamp", ...args: any[]): void
    connect(sigName: "notify::epsilon", callback: any): number
    on(sigName: "notify::epsilon", callback: any): number
    once(sigName: "notify::epsilon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::epsilon", ...args: any[]): void
    connect(sigName: "notify::estimated-duration", callback: any): number
    on(sigName: "notify::estimated-duration", callback: any): number
    once(sigName: "notify::estimated-duration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::estimated-duration", ...args: any[]): void
    connect(sigName: "notify::initial-velocity", callback: any): number
    on(sigName: "notify::initial-velocity", callback: any): number
    once(sigName: "notify::initial-velocity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::initial-velocity", ...args: any[]): void
    connect(sigName: "notify::spring-params", callback: any): number
    on(sigName: "notify::spring-params", callback: any): number
    once(sigName: "notify::spring-params", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spring-params", ...args: any[]): void
    connect(sigName: "notify::value-from", callback: any): number
    on(sigName: "notify::value-from", callback: any): number
    once(sigName: "notify::value-from", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-from", ...args: any[]): void
    connect(sigName: "notify::value-to", callback: any): number
    on(sigName: "notify::value-to", callback: any): number
    once(sigName: "notify::value-to", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-to", ...args: any[]): void
    connect(sigName: "notify::velocity", callback: any): number
    on(sigName: "notify::velocity", callback: any): number
    once(sigName: "notify::velocity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::velocity", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::target", callback: any): number
    on(sigName: "notify::target", callback: any): number
    once(sigName: "notify::target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::widget", callback: any): number
    on(sigName: "notify::widget", callback: any): number
    once(sigName: "notify::widget", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::widget", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A spring-based [class`Animation]`.
 * 
 * `AdwSpringAnimation` implements an animation driven by a physical model of a
 * spring described by [struct`SpringParams]`, with a resting position in
 * [property`SpringAnimation:`value-to], stretched to
 * [property`SpringAnimation:`value-from].
 * 
 * Since the animation is physically simulated, spring animations don't have a
 * fixed duration. The animation will stop when the simulated spring comes to a
 * rest - when the amplitude of the oscillations becomes smaller than
 * [property`SpringAnimation:`epsilon], or immediately when it reaches
 * [property`SpringAnimation:`value-to] if
 * [property`SpringAnimation:`clamp] is set to `TRUE`. The estimated duration can
 * be obtained with [property`SpringAnimation:`estimated-duration].
 * 
 * Due to the nature of spring-driven motion the animation can overshoot
 * [property`SpringAnimation:`value-to] before coming to a rest. Whether the
 * animation will overshoot or not depends on the damping ratio of the spring.
 * See [struct`SpringParams]` for more information about specific damping ratio
 * values.
 * 
 * If [property`SpringAnimation:`clamp] is `TRUE`, the animation will abruptly
 * end as soon as it reaches the final value, preventing overshooting.
 * 
 * Animations can have an initial velocity value, set via
 * [property`SpringAnimation:`initial-velocity], which adjusts the curve without
 * changing the duration. This makes spring animations useful for deceleration
 * at the end of gestures.
 * 
 * If the initial and final values are equal, and the initial velocity is not 0,
 * the animation value will bounce and return to its resting position.
 * @class 
 */
export class SpringAnimation extends Animation {

    // Own properties of Adw-1.Adw.SpringAnimation

    static name: string

    // Constructors of Adw-1.Adw.SpringAnimation

    constructor(config?: SpringAnimation.ConstructorProperties) 
    /**
     * Creates a new `AdwSpringAnimation` on `widget`.
     * 
     * The animation will animate `target` from `from` to `to` with the dynamics of a
     * spring described by `spring_params`.
     * @constructor 
     * @param widget a widget to create animation on
     * @param from a value to animate from
     * @param to a value to animate to
     * @param springParams physical parameters of the spring
     * @param target a target value to animate
     */
    constructor(widget: Gtk.Widget, from: number, to: number, springParams: SpringParams, target: AnimationTarget) 
    /**
     * Creates a new `AdwSpringAnimation` on `widget`.
     * 
     * The animation will animate `target` from `from` to `to` with the dynamics of a
     * spring described by `spring_params`.
     * @constructor 
     * @param widget a widget to create animation on
     * @param from a value to animate from
     * @param to a value to animate to
     * @param springParams physical parameters of the spring
     * @param target a target value to animate
     */
    static new(widget: Gtk.Widget, from: number, to: number, springParams: SpringParams, target: AnimationTarget): SpringAnimation
    _init(config?: SpringAnimation.ConstructorProperties): void
}

export module Squeezer {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.Squeezer

        /**
         * Whether to allow squeezing beyond the last child's minimum size.
         * 
         * If set to `TRUE`, the squeezer can shrink to the point where no child can
         * be shown. This is functionally equivalent to appending a widget with 0x0
         * minimum size.
         */
        allowNone?: boolean | null
        /**
         * Whether all children have the same size for the opposite orientation.
         * 
         * For example, if a squeezer is horizontal and is homogeneous, it will request
         * the same height for all its children. If it isn't, the squeezer may change
         * size when a different child becomes visible.
         */
        homogeneous?: boolean | null
        /**
         * Whether the squeezer interpolates its size when changing the visible child.
         * 
         * If `TRUE`, the squeezer will interpolate its size between the one of the
         * previous visible child and the one of the new visible child, according to
         * the set transition duration and the orientation, e.g. if the squeezer is
         * horizontal, it will interpolate the its height.
         */
        interpolateSize?: boolean | null
        /**
         * Determines when the squeezer will switch children.
         * 
         * If set to `ADW_FOLD_THRESHOLD_POLICY_MINIMUM`, it will only switch when
         * the visible child cannot fit anymore. With
         * `ADW_FOLD_THRESHOLD_POLICY_NATURAL`, it will switch as soon as the visible
         * child doesn't get their natural size.
         * 
         * This can be useful if you have a long ellipsizing label and want to let it
         * ellipsize instead of immediately switching.
         */
        switchThresholdPolicy?: FoldThresholdPolicy | null
        /**
         * The animation duration, in milliseconds.
         */
        transitionDuration?: number | null
        /**
         * The type of animation used for transitions between children.
         */
        transitionType?: SqueezerTransitionType | null
        /**
         * The horizontal alignment, from 0 (start) to 1 (end).
         * 
         * This affects the children allocation during transitions, when they exceed
         * the size of the squeezer.
         * 
         * For example, 0.5 means the child will be centered, 0 means it will keep the
         * start side aligned and overflow the end side, and 1 means the opposite.
         */
        xalign?: number | null
        /**
         * The vertical alignment, from 0 (top) to 1 (bottom).
         * 
         * This affects the children allocation during transitions, when they exceed
         * the size of the squeezer.
         * 
         * For example, 0.5 means the child will be centered, 0 means it will keep the
         * top side aligned and overflow the bottom side, and 1 means the opposite.
         */
        yalign?: number | null
    }

}

export interface Squeezer extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {

    // Own properties of Adw-1.Adw.Squeezer

    /**
     * Whether to allow squeezing beyond the last child's minimum size.
     * 
     * If set to `TRUE`, the squeezer can shrink to the point where no child can
     * be shown. This is functionally equivalent to appending a widget with 0x0
     * minimum size.
     */
    allowNone: boolean
    /**
     * Whether all children have the same size for the opposite orientation.
     * 
     * For example, if a squeezer is horizontal and is homogeneous, it will request
     * the same height for all its children. If it isn't, the squeezer may change
     * size when a different child becomes visible.
     */
    homogeneous: boolean
    /**
     * Whether the squeezer interpolates its size when changing the visible child.
     * 
     * If `TRUE`, the squeezer will interpolate its size between the one of the
     * previous visible child and the one of the new visible child, according to
     * the set transition duration and the orientation, e.g. if the squeezer is
     * horizontal, it will interpolate the its height.
     */
    interpolateSize: boolean
    /**
     * A selection model with the squeezer's pages.
     * 
     * This can be used to keep an up-to-date view. The model also implements
     * [iface`Gtk`.SelectionModel] and can be used to track the visible page.
     */
    readonly pages: Gtk.SelectionModel
    /**
     * Determines when the squeezer will switch children.
     * 
     * If set to `ADW_FOLD_THRESHOLD_POLICY_MINIMUM`, it will only switch when
     * the visible child cannot fit anymore. With
     * `ADW_FOLD_THRESHOLD_POLICY_NATURAL`, it will switch as soon as the visible
     * child doesn't get their natural size.
     * 
     * This can be useful if you have a long ellipsizing label and want to let it
     * ellipsize instead of immediately switching.
     */
    switchThresholdPolicy: FoldThresholdPolicy
    /**
     * The animation duration, in milliseconds.
     */
    transitionDuration: number
    /**
     * Whether a transition is currently running.
     * 
     * If a transition is impossible, the property value will be set to `TRUE` and
     * then immediately to `FALSE`, so it's possible to rely on its notifications
     * to know that a transition has happened.
     */
    readonly transitionRunning: boolean
    /**
     * The type of animation used for transitions between children.
     */
    transitionType: SqueezerTransitionType
    /**
     * The currently visible child.
     */
    readonly visibleChild: Gtk.Widget
    /**
     * The horizontal alignment, from 0 (start) to 1 (end).
     * 
     * This affects the children allocation during transitions, when they exceed
     * the size of the squeezer.
     * 
     * For example, 0.5 means the child will be centered, 0 means it will keep the
     * start side aligned and overflow the end side, and 1 means the opposite.
     */
    xalign: number
    /**
     * The vertical alignment, from 0 (top) to 1 (bottom).
     * 
     * This affects the children allocation during transitions, when they exceed
     * the size of the squeezer.
     * 
     * For example, 0.5 means the child will be centered, 0 means it will keep the
     * top side aligned and overflow the bottom side, and 1 means the opposite.
     */
    yalign: number

    // Owm methods of Adw-1.Adw.Squeezer

    /**
     * Adds a child to `self`.
     * @param child the widget to add
     */
    add(child: Gtk.Widget): SqueezerPage
    /**
     * Gets whether to allow squeezing beyond the last child's minimum size.
     */
    getAllowNone(): boolean
    /**
     * Gets whether all children have the same size for the opposite orientation.
     */
    getHomogeneous(): boolean
    /**
     * Gets whether `self` interpolates its size when changing the visible child.
     */
    getInterpolateSize(): boolean
    /**
     * Returns the [class`SqueezerPage]` object for `child`.
     * @param child a child of `self`
     */
    getPage(child: Gtk.Widget): SqueezerPage
    /**
     * Returns a [iface`Gio`.ListModel] that contains the pages of `self`.
     * 
     * This can be used to keep an up-to-date view. The model also implements
     * [iface`Gtk`.SelectionModel] and can be used to track the visible page.
     */
    getPages(): Gtk.SelectionModel
    /**
     * Gets the fold threshold policy for `self`.
     */
    getSwitchThresholdPolicy(): FoldThresholdPolicy
    /**
     * Gets the transition animation duration for `self`.
     */
    getTransitionDuration(): number
    /**
     * Gets whether a transition is currently running for `self`.
     */
    getTransitionRunning(): boolean
    /**
     * Gets the type of animation used for transitions between children in `self`.
     */
    getTransitionType(): SqueezerTransitionType
    /**
     * Gets the currently visible child of `self`.
     */
    getVisibleChild(): Gtk.Widget | null
    /**
     * Gets the horizontal alignment, from 0 (start) to 1 (end).
     */
    getXalign(): number
    /**
     * Gets the vertical alignment, from 0 (top) to 1 (bottom).
     */
    getYalign(): number
    /**
     * Removes a child widget from `self`.
     * @param child the child to remove
     */
    remove(child: Gtk.Widget): void
    /**
     * Sets whether to allow squeezing beyond the last child's minimum size.
     * @param allowNone whether `self` allows squeezing beyond the last child
     */
    setAllowNone(allowNone: boolean): void
    /**
     * Sets whether all children have the same size for the opposite orientation.
     * @param homogeneous whether `self` is homogeneous
     */
    setHomogeneous(homogeneous: boolean): void
    /**
     * Sets whether `self` interpolates its size when changing the visible child.
     * @param interpolateSize whether to interpolate the size
     */
    setInterpolateSize(interpolateSize: boolean): void
    /**
     * Sets the fold threshold policy for `self`.
     * @param policy the policy to use
     */
    setSwitchThresholdPolicy(policy: FoldThresholdPolicy): void
    /**
     * Sets the transition animation duration for `self`.
     * @param duration the new duration, in milliseconds
     */
    setTransitionDuration(duration: number): void
    /**
     * Sets the type of animation used for transitions between children in `self`.
     * @param transition the new transition type
     */
    setTransitionType(transition: SqueezerTransitionType): void
    /**
     * Sets the horizontal alignment, from 0 (start) to 1 (end).
     * @param xalign the new alignment value
     */
    setXalign(xalign: number): void
    /**
     * Sets the vertical alignment, from 0 (top) to 1 (bottom).
     * @param yalign the new alignment value
     */
    setYalign(yalign: number): void

    // Class property signals of Adw-1.Adw.Squeezer

    connect(sigName: "notify::allow-none", callback: any): number
    on(sigName: "notify::allow-none", callback: any): number
    once(sigName: "notify::allow-none", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allow-none", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::interpolate-size", callback: any): number
    on(sigName: "notify::interpolate-size", callback: any): number
    once(sigName: "notify::interpolate-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interpolate-size", ...args: any[]): void
    connect(sigName: "notify::pages", callback: any): number
    on(sigName: "notify::pages", callback: any): number
    once(sigName: "notify::pages", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pages", ...args: any[]): void
    connect(sigName: "notify::switch-threshold-policy", callback: any): number
    on(sigName: "notify::switch-threshold-policy", callback: any): number
    once(sigName: "notify::switch-threshold-policy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::switch-threshold-policy", ...args: any[]): void
    connect(sigName: "notify::transition-duration", callback: any): number
    on(sigName: "notify::transition-duration", callback: any): number
    once(sigName: "notify::transition-duration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transition-duration", ...args: any[]): void
    connect(sigName: "notify::transition-running", callback: any): number
    on(sigName: "notify::transition-running", callback: any): number
    once(sigName: "notify::transition-running", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transition-running", ...args: any[]): void
    connect(sigName: "notify::transition-type", callback: any): number
    on(sigName: "notify::transition-type", callback: any): number
    once(sigName: "notify::transition-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transition-type", ...args: any[]): void
    connect(sigName: "notify::visible-child", callback: any): number
    on(sigName: "notify::visible-child", callback: any): number
    once(sigName: "notify::visible-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible-child", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
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
 * A best fit container.
 * 
 * <picture>
 *   <source srcset="squeezer-wide-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="squeezer-wide.png" alt="squeezer-wide">
 * </picture>
 * <picture>
 *   <source srcset="squeezer-narrow-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="squeezer-narrow.png" alt="squeezer-narrow">
 * </picture>
 * 
 * The `AdwSqueezer` widget is a container which only shows the first of its
 * children that fits in the available size. It is convenient to offer different
 * widgets to represent the same data with different levels of detail, making
 * the widget seem to squeeze itself to fit in the available space.
 * 
 * Transitions between children can be animated as fades. This can be controlled
 * with [property`Squeezer:`transition-type].
 * 
 * ## CSS nodes
 * 
 * `AdwSqueezer` has a single CSS node with name `squeezer`.
 * @class 
 */
export class Squeezer extends Gtk.Widget {

    // Own properties of Adw-1.Adw.Squeezer

    static name: string

    // Constructors of Adw-1.Adw.Squeezer

    constructor(config?: Squeezer.ConstructorProperties) 
    /**
     * Creates a new `AdwSqueezer`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwSqueezer`.
     * @constructor 
     */
    static new(): Squeezer
    _init(config?: Squeezer.ConstructorProperties): void
}

export module SqueezerPage {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.SqueezerPage

        /**
         * The child of the page.
         */
        child?: Gtk.Widget | null
        /**
         * Whether the child is enabled.
         * 
         * If a child is disabled, it will be ignored when looking for the child
         * fitting the available size best.
         * 
         * This allows to programmatically and prematurely hide a child even if it
         * fits in the available space.
         * 
         * This can be used e.g. to ensure a certain child is hidden below a certain
         * window width, or any other constraint you find suitable.
         */
        enabled?: boolean | null
    }

}

export interface SqueezerPage {

    // Own properties of Adw-1.Adw.SqueezerPage

    /**
     * The child of the page.
     */
    readonly child: Gtk.Widget
    /**
     * Whether the child is enabled.
     * 
     * If a child is disabled, it will be ignored when looking for the child
     * fitting the available size best.
     * 
     * This allows to programmatically and prematurely hide a child even if it
     * fits in the available space.
     * 
     * This can be used e.g. to ensure a certain child is hidden below a certain
     * window width, or any other constraint you find suitable.
     */
    enabled: boolean

    // Owm methods of Adw-1.Adw.SqueezerPage

    /**
     * Returns the squeezer child to which `self` belongs.
     */
    getChild(): Gtk.Widget
    /**
     * Gets whether `self` is enabled.
     */
    getEnabled(): boolean
    /**
     * Sets whether `self` is enabled.
     * @param enabled whether `self` is enabled
     */
    setEnabled(enabled: boolean): void

    // Class property signals of Adw-1.Adw.SqueezerPage

    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: any): number
    on(sigName: "notify::enabled", callback: any): number
    once(sigName: "notify::enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An auxiliary class used by [class`Squeezer]`.
 * @class 
 */
export class SqueezerPage extends GObject.Object {

    // Own properties of Adw-1.Adw.SqueezerPage

    static name: string

    // Constructors of Adw-1.Adw.SqueezerPage

    constructor(config?: SqueezerPage.ConstructorProperties) 
    _init(config?: SqueezerPage.ConstructorProperties): void
}

export module StatusPage {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.StatusPage

        /**
         * The child widget.
         */
        child?: Gtk.Widget | null
        /**
         * The description to be displayed below the title.
         */
        description?: string | null
        /**
         * The name of the icon to be used.
         * 
         * Changing this will clear [property`StatusPage:`paintable] out.
         */
        iconName?: string | null
        /**
         * The `GdkPaintable` to be used.
         * 
         * Changing this will clear [property`StatusPage:`icon-name] out.
         */
        paintable?: Gdk.Paintable | null
        /**
         * The title to be displayed below the icon.
         */
        title?: string | null
    }

}

export interface StatusPage extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.StatusPage

    /**
     * The child widget.
     */
    child: Gtk.Widget
    /**
     * The description to be displayed below the title.
     */
    description: string
    /**
     * The name of the icon to be used.
     * 
     * Changing this will clear [property`StatusPage:`paintable] out.
     */
    iconName: string
    /**
     * The `GdkPaintable` to be used.
     * 
     * Changing this will clear [property`StatusPage:`icon-name] out.
     */
    paintable: Gdk.Paintable
    /**
     * The title to be displayed below the icon.
     */
    title: string

    // Owm methods of Adw-1.Adw.StatusPage

    /**
     * Gets the child widget of `self`.
     */
    getChild(): Gtk.Widget | null
    /**
     * Gets the description for `self`.
     */
    getDescription(): string | null
    /**
     * Gets the icon name for `self`.
     */
    getIconName(): string | null
    /**
     * Gets the paintable for `self`.
     */
    getPaintable(): Gdk.Paintable | null
    /**
     * Gets the title for `self`.
     */
    getTitle(): string
    /**
     * Sets the child widget of `self`.
     * @param child the child widget
     */
    setChild(child: Gtk.Widget | null): void
    /**
     * Sets the description for `self`.
     * @param description the description
     */
    setDescription(description: string | null): void
    /**
     * Sets the icon name for `self`.
     * @param iconName the icon name
     */
    setIconName(iconName: string | null): void
    /**
     * Sets the paintable for `self`.
     * @param paintable the paintable
     */
    setPaintable(paintable: Gdk.Paintable | null): void
    /**
     * Sets the title for `self`.
     * @param title the title
     */
    setTitle(title: string): void

    // Class property signals of Adw-1.Adw.StatusPage

    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::paintable", callback: any): number
    on(sigName: "notify::paintable", callback: any): number
    once(sigName: "notify::paintable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::paintable", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A page used for empty/error states and similar use-cases.
 * 
 * <picture>
 *   <source srcset="status-page-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="status-page.png" alt="status-page">
 * </picture>
 * 
 * The `AdwStatusPage` widget can have an icon, a title, a description and a
 * custom widget which is displayed below them.
 * 
 * ## CSS nodes
 * 
 * `AdwStatusPage` has a main CSS node with name `statuspage`.
 * 
 * `AdwStatusPage` can use the
 * [`.compact`](style-classes.html#compact-status-page) style class for when it
 * needs to fit into a small space such a sidebar or a popover.
 * @class 
 */
export class StatusPage extends Gtk.Widget {

    // Own properties of Adw-1.Adw.StatusPage

    static name: string

    // Constructors of Adw-1.Adw.StatusPage

    constructor(config?: StatusPage.ConstructorProperties) 
    /**
     * Creates a new `AdwStatusPage`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwStatusPage`.
     * @constructor 
     */
    static new(): StatusPage
    _init(config?: StatusPage.ConstructorProperties): void
}

export module StyleManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.StyleManager

        /**
         * The requested application color scheme.
         * 
         * The effective appearance will be decided based on the application color
         * scheme and the system preferred color scheme. The
         * [property`StyleManager:`dark] property can be used to query the current
         * effective appearance.
         * 
         * The `ADW_COLOR_SCHEME_PREFER_LIGHT` color scheme results in the application
         * using light appearance unless the system prefers dark colors. This is the
         * default value.
         * 
         * The `ADW_COLOR_SCHEME_PREFER_DARK` color scheme results in the application
         * using dark appearance, but can still switch to the light appearance if the
         * system can prefers it, for example, when the high contrast preference is
         * enabled.
         * 
         * The `ADW_COLOR_SCHEME_FORCE_LIGHT` and `ADW_COLOR_SCHEME_FORCE_DARK` values
         * ignore the system preference entirely. They are useful if the application
         * wants to match its UI to its content or to provide a separate color scheme
         * switcher.
         * 
         * If a per-[class`Gdk`.Display] style manager has its color scheme set to
         * `ADW_COLOR_SCHEME_DEFAULT`, it will inherit the color scheme from the
         * default style manager.
         * 
         * For the default style manager, `ADW_COLOR_SCHEME_DEFAULT` is equivalent to
         * `ADW_COLOR_SCHEME_PREFER_LIGHT`.
         * 
         * The [property`StyleManager:`system-supports-color-schemes] property can be
         * used to check if the current environment provides a color scheme
         * preference.
         */
        colorScheme?: ColorScheme | null
        /**
         * The display the style manager is associated with.
         * 
         * The display will be `NULL` for the style manager returned by
         * [func`StyleManager`.get_default].
         */
        display?: Gdk.Display | null
    }

}

export interface StyleManager {

    // Own properties of Adw-1.Adw.StyleManager

    /**
     * The requested application color scheme.
     * 
     * The effective appearance will be decided based on the application color
     * scheme and the system preferred color scheme. The
     * [property`StyleManager:`dark] property can be used to query the current
     * effective appearance.
     * 
     * The `ADW_COLOR_SCHEME_PREFER_LIGHT` color scheme results in the application
     * using light appearance unless the system prefers dark colors. This is the
     * default value.
     * 
     * The `ADW_COLOR_SCHEME_PREFER_DARK` color scheme results in the application
     * using dark appearance, but can still switch to the light appearance if the
     * system can prefers it, for example, when the high contrast preference is
     * enabled.
     * 
     * The `ADW_COLOR_SCHEME_FORCE_LIGHT` and `ADW_COLOR_SCHEME_FORCE_DARK` values
     * ignore the system preference entirely. They are useful if the application
     * wants to match its UI to its content or to provide a separate color scheme
     * switcher.
     * 
     * If a per-[class`Gdk`.Display] style manager has its color scheme set to
     * `ADW_COLOR_SCHEME_DEFAULT`, it will inherit the color scheme from the
     * default style manager.
     * 
     * For the default style manager, `ADW_COLOR_SCHEME_DEFAULT` is equivalent to
     * `ADW_COLOR_SCHEME_PREFER_LIGHT`.
     * 
     * The [property`StyleManager:`system-supports-color-schemes] property can be
     * used to check if the current environment provides a color scheme
     * preference.
     */
    colorScheme: ColorScheme
    /**
     * Whether the application is using dark appearance.
     * 
     * This property can be used to query the current appearance, as requested via
     * [property`StyleManager:`color-scheme].
     */
    readonly dark: boolean
    /**
     * The display the style manager is associated with.
     * 
     * The display will be `NULL` for the style manager returned by
     * [func`StyleManager`.get_default].
     */
    readonly display: Gdk.Display
    /**
     * Whether the application is using high contrast appearance.
     * 
     * This cannot be overridden by applications.
     */
    readonly highContrast: boolean
    /**
     * Whether the system supports color schemes.
     * 
     * This property can be used to check if the current environment provides a
     * color scheme preference. For example, applications might want to show a
     * separate appearance switcher if it's set to `FALSE`.
     * 
     * See [property`StyleManager:`color-scheme].
     */
    readonly systemSupportsColorSchemes: boolean

    // Owm methods of Adw-1.Adw.StyleManager

    /**
     * Gets the requested application color scheme.
     */
    getColorScheme(): ColorScheme
    /**
     * Gets whether the application is using dark appearance.
     */
    getDark(): boolean
    /**
     * Gets the display the style manager is associated with.
     * 
     * The display will be `NULL` for the style manager returned by
     * [func`StyleManager`.get_default].
     */
    getDisplay(): Gdk.Display
    /**
     * Gets whether the application is using high contrast appearance.
     */
    getHighContrast(): boolean
    /**
     * Gets whether the system supports color schemes.
     */
    getSystemSupportsColorSchemes(): boolean
    /**
     * Sets the requested application color scheme.
     * 
     * The effective appearance will be decided based on the application color
     * scheme and the system preferred color scheme. The
     * [property`StyleManager:`dark] property can be used to query the current
     * effective appearance.
     * @param colorScheme the color scheme
     */
    setColorScheme(colorScheme: ColorScheme): void

    // Class property signals of Adw-1.Adw.StyleManager

    connect(sigName: "notify::color-scheme", callback: any): number
    on(sigName: "notify::color-scheme", callback: any): number
    once(sigName: "notify::color-scheme", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::color-scheme", ...args: any[]): void
    connect(sigName: "notify::dark", callback: any): number
    on(sigName: "notify::dark", callback: any): number
    once(sigName: "notify::dark", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dark", ...args: any[]): void
    connect(sigName: "notify::display", callback: any): number
    on(sigName: "notify::display", callback: any): number
    once(sigName: "notify::display", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::high-contrast", callback: any): number
    on(sigName: "notify::high-contrast", callback: any): number
    once(sigName: "notify::high-contrast", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::high-contrast", ...args: any[]): void
    connect(sigName: "notify::system-supports-color-schemes", callback: any): number
    on(sigName: "notify::system-supports-color-schemes", callback: any): number
    once(sigName: "notify::system-supports-color-schemes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::system-supports-color-schemes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A class for managing application-wide styling.
 * 
 * `AdwStyleManager` provides a way to query and influence the application
 * styles, such as whether to use dark or high contrast appearance.
 * 
 * It allows to set the color scheme via the
 * [property`StyleManager:`color-scheme] property, and to query the current
 * appearance, as well as whether a system-wide color scheme preference exists.
 * @class 
 */
export class StyleManager extends GObject.Object {

    // Own properties of Adw-1.Adw.StyleManager

    static name: string

    // Constructors of Adw-1.Adw.StyleManager

    constructor(config?: StyleManager.ConstructorProperties) 
    _init(config?: StyleManager.ConstructorProperties): void
    /**
     * Gets the default `AdwStyleManager` instance.
     * 
     * It manages all [class`Gdk`.Display] instances unless the style manager for
     * that display has an override.
     * 
     * See [func`StyleManager`.get_for_display].
     */
    static getDefault(): StyleManager
    /**
     * Gets the `AdwStyleManager` instance managing `display`.
     * 
     * It can be used to override styles for that specific display instead of the
     * whole application.
     * 
     * Most applications should use [func`StyleManager`.get_default] instead.
     * @param display a `GdkDisplay`
     */
    static getForDisplay(display: Gdk.Display): StyleManager
}

export module SwipeTracker {

    // Signal callback interfaces

    /**
     * Signal callback interface for `begin-swipe`
     */
    export interface BeginSwipeSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `end-swipe`
     */
    export interface EndSwipeSignalCallback {
        (velocity: number, to: number): void
    }

    /**
     * Signal callback interface for `prepare`
     */
    export interface PrepareSignalCallback {
        (direction: NavigationDirection): void
    }

    /**
     * Signal callback interface for `update-swipe`
     */
    export interface UpdateSwipeSignalCallback {
        (progress: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Orientable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.SwipeTracker

        /**
         * Whether to allow swiping for more than one snap point at a time.
         * 
         * If the value is `FALSE`, each swipe can only move to the adjacent snap
         * points.
         */
        allowLongSwipes?: boolean | null
        /**
         * Whether to allow dragging with mouse pointer.
         */
        allowMouseDrag?: boolean | null
        /**
         * Whether the swipe tracker is enabled.
         * 
         * When it's not enabled, no events will be processed. Usually widgets will
         * want to expose this via a property.
         */
        enabled?: boolean | null
        /**
         * Whether to reverse the swipe direction.
         * 
         * If the swipe tracker is horizontal, it can be used for supporting RTL text
         * direction.
         */
        reversed?: boolean | null
        /**
         * The widget the swipe tracker is attached to.
         */
        swipeable?: Swipeable | null
    }

}

export interface SwipeTracker extends Gtk.Orientable {

    // Own properties of Adw-1.Adw.SwipeTracker

    /**
     * Whether to allow swiping for more than one snap point at a time.
     * 
     * If the value is `FALSE`, each swipe can only move to the adjacent snap
     * points.
     */
    allowLongSwipes: boolean
    /**
     * Whether to allow dragging with mouse pointer.
     */
    allowMouseDrag: boolean
    /**
     * Whether the swipe tracker is enabled.
     * 
     * When it's not enabled, no events will be processed. Usually widgets will
     * want to expose this via a property.
     */
    enabled: boolean
    /**
     * Whether to reverse the swipe direction.
     * 
     * If the swipe tracker is horizontal, it can be used for supporting RTL text
     * direction.
     */
    reversed: boolean
    /**
     * The widget the swipe tracker is attached to.
     */
    readonly swipeable: Swipeable

    // Owm methods of Adw-1.Adw.SwipeTracker

    /**
     * Gets whether to allow swiping for more than one snap point at a time.
     */
    getAllowLongSwipes(): boolean
    /**
     * Gets whether `self` can be dragged with mouse pointer.
     */
    getAllowMouseDrag(): boolean
    /**
     * Gets whether `self` is enabled.
     */
    getEnabled(): boolean
    /**
     * Gets whether `self` is reversing the swipe direction.
     */
    getReversed(): boolean
    /**
     * Get the widget `self` is attached to.
     */
    getSwipeable(): Swipeable
    /**
     * Sets whether to allow swiping for more than one snap point at a time.
     * @param allowLongSwipes whether to allow long swipes
     */
    setAllowLongSwipes(allowLongSwipes: boolean): void
    /**
     * Sets whether `self` can be dragged with mouse pointer.
     * @param allowMouseDrag whether to allow mouse dragging
     */
    setAllowMouseDrag(allowMouseDrag: boolean): void
    /**
     * Sets whether `self` is enabled.
     * @param enabled whether `self` is enabled
     */
    setEnabled(enabled: boolean): void
    /**
     * Sets whether to reverse the swipe direction.
     * @param reversed whether to reverse the swipe direction
     */
    setReversed(reversed: boolean): void
    /**
     * Moves the current progress value by `delta`.
     * 
     * This can be used to adjust the current position if snap points move during
     * the gesture.
     * @param delta the position delta
     */
    shiftPosition(delta: number): void

    // Own signals of Adw-1.Adw.SwipeTracker

    connect(sigName: "begin-swipe", callback: SwipeTracker.BeginSwipeSignalCallback): number
    on(sigName: "begin-swipe", callback: SwipeTracker.BeginSwipeSignalCallback): number
    once(sigName: "begin-swipe", callback: SwipeTracker.BeginSwipeSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "begin-swipe", ...args: any[]): void
    connect(sigName: "end-swipe", callback: SwipeTracker.EndSwipeSignalCallback): number
    on(sigName: "end-swipe", callback: SwipeTracker.EndSwipeSignalCallback): number
    once(sigName: "end-swipe", callback: SwipeTracker.EndSwipeSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "end-swipe", to: number, ...args: any[]): void
    connect(sigName: "prepare", callback: SwipeTracker.PrepareSignalCallback): number
    on(sigName: "prepare", callback: SwipeTracker.PrepareSignalCallback): number
    once(sigName: "prepare", callback: SwipeTracker.PrepareSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "prepare", ...args: any[]): void
    connect(sigName: "update-swipe", callback: SwipeTracker.UpdateSwipeSignalCallback): number
    on(sigName: "update-swipe", callback: SwipeTracker.UpdateSwipeSignalCallback): number
    once(sigName: "update-swipe", callback: SwipeTracker.UpdateSwipeSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "update-swipe", ...args: any[]): void

    // Class property signals of Adw-1.Adw.SwipeTracker

    connect(sigName: "notify::allow-long-swipes", callback: any): number
    on(sigName: "notify::allow-long-swipes", callback: any): number
    once(sigName: "notify::allow-long-swipes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allow-long-swipes", ...args: any[]): void
    connect(sigName: "notify::allow-mouse-drag", callback: any): number
    on(sigName: "notify::allow-mouse-drag", callback: any): number
    once(sigName: "notify::allow-mouse-drag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allow-mouse-drag", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: any): number
    on(sigName: "notify::enabled", callback: any): number
    once(sigName: "notify::enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::reversed", callback: any): number
    on(sigName: "notify::reversed", callback: any): number
    once(sigName: "notify::reversed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reversed", ...args: any[]): void
    connect(sigName: "notify::swipeable", callback: any): number
    on(sigName: "notify::swipeable", callback: any): number
    once(sigName: "notify::swipeable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::swipeable", ...args: any[]): void
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
 * A swipe tracker used in [class`Carousel]`, [class`Flap]` and [class`Leaflet]`.
 * 
 * The `AdwSwipeTracker` object can be used for implementing widgets with swipe
 * gestures. It supports touch-based swipes, pointer dragging, and touchpad
 * scrolling.
 * 
 * The widgets will probably want to expose the [property`SwipeTracker:`enabled]
 * property. If they expect to use horizontal orientation,
 * [property`SwipeTracker:`reversed] can be used for supporting RTL text
 * direction.
 * @class 
 */
export class SwipeTracker extends GObject.Object {

    // Own properties of Adw-1.Adw.SwipeTracker

    static name: string

    // Constructors of Adw-1.Adw.SwipeTracker

    constructor(config?: SwipeTracker.ConstructorProperties) 
    /**
     * Creates a new `AdwSwipeTracker` for `widget`.
     * @constructor 
     * @param swipeable a widget to add the tracker on
     */
    constructor(swipeable: Swipeable) 
    /**
     * Creates a new `AdwSwipeTracker` for `widget`.
     * @constructor 
     * @param swipeable a widget to add the tracker on
     */
    static new(swipeable: Swipeable): SwipeTracker
    _init(config?: SwipeTracker.ConstructorProperties): void
}

export module TabBar {

    // Signal callback interfaces

    /**
     * Signal callback interface for `extra-drag-drop`
     */
    export interface ExtraDragDropSignalCallback {
        (page: TabPage, value: any): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.TabBar

        /**
         * Whether the tabs automatically hide.
         * 
         * If set to `TRUE`, the tab bar disappears when [property`TabBar:`view] has 0
         * or 1 tab, no pinned tabs, and no tab is being transferred.
         * 
         * See [property`TabBar:`tabs-revealed].
         */
        autohide?: boolean | null
        /**
         * The widget shown after the tabs.
         */
        endActionWidget?: Gtk.Widget | null
        /**
         * Whether tabs expand to full width.
         * 
         * If set to `TRUE`, the tabs will always vary width filling the whole width
         * when possible, otherwise tabs will always have the minimum possible size.
         */
        expandTabs?: boolean | null
        /**
         * Whether tabs use inverted layout.
         * 
         * If set to `TRUE`, non-pinned tabs will have the close button at the
         * beginning and the indicator at the end rather than the opposite.
         */
        inverted?: boolean | null
        /**
         * The widget shown before the tabs.
         */
        startActionWidget?: Gtk.Widget | null
        /**
         * The tab view the tab bar controls.
         */
        view?: TabView | null
    }

}

export interface TabBar extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.TabBar

    /**
     * Whether the tabs automatically hide.
     * 
     * If set to `TRUE`, the tab bar disappears when [property`TabBar:`view] has 0
     * or 1 tab, no pinned tabs, and no tab is being transferred.
     * 
     * See [property`TabBar:`tabs-revealed].
     */
    autohide: boolean
    /**
     * The widget shown after the tabs.
     */
    endActionWidget: Gtk.Widget
    /**
     * Whether tabs expand to full width.
     * 
     * If set to `TRUE`, the tabs will always vary width filling the whole width
     * when possible, otherwise tabs will always have the minimum possible size.
     */
    expandTabs: boolean
    /**
     * Whether tabs use inverted layout.
     * 
     * If set to `TRUE`, non-pinned tabs will have the close button at the
     * beginning and the indicator at the end rather than the opposite.
     */
    inverted: boolean
    /**
     * Whether the tab bar is overflowing.
     * 
     * If `TRUE`, all tabs cannot be displayed at once and require scrolling.
     */
    readonly isOverflowing: boolean
    /**
     * The widget shown before the tabs.
     */
    startActionWidget: Gtk.Widget
    /**
     * Whether the tabs are currently revealed.
     * 
     * See [property`TabBar:`autohide].
     */
    readonly tabsRevealed: boolean
    /**
     * The tab view the tab bar controls.
     */
    view: TabView

    // Owm methods of Adw-1.Adw.TabBar

    /**
     * Gets whether the tabs automatically hide.
     */
    getAutohide(): boolean
    /**
     * Gets the widget shown after the tabs.
     */
    getEndActionWidget(): Gtk.Widget | null
    /**
     * Gets whether tabs expand to full width.
     */
    getExpandTabs(): boolean
    /**
     * Gets whether tabs use inverted layout.
     */
    getInverted(): boolean
    /**
     * Gets whether `self` is overflowing.
     */
    getIsOverflowing(): boolean
    /**
     * Gets the widget shown before the tabs.
     */
    getStartActionWidget(): Gtk.Widget | null
    /**
     * Gets whether the tabs are currently revealed.
     */
    getTabsRevealed(): boolean
    /**
     * Gets the tab view `self` controls.
     */
    getView(): TabView | null
    /**
     * Sets whether the tabs automatically hide.
     * @param autohide whether the tabs automatically hide
     */
    setAutohide(autohide: boolean): void
    /**
     * Sets the widget to show after the tabs.
     * @param widget the widget to show after the tabs
     */
    setEndActionWidget(widget: Gtk.Widget | null): void
    /**
     * Sets whether tabs expand to full width.
     * @param expandTabs whether to expand tabs
     */
    setExpandTabs(expandTabs: boolean): void
    /**
     * Sets whether tabs tabs use inverted layout.
     * @param inverted whether tabs use inverted layout
     */
    setInverted(inverted: boolean): void
    /**
     * Sets the widget to show before the tabs.
     * @param widget the widget to show before the tabs
     */
    setStartActionWidget(widget: Gtk.Widget | null): void
    /**
     * Sets the tab view `self` controls.
     * @param view a tab view
     */
    setView(view: TabView | null): void
    /**
     * Sets the supported types for this drop target.
     * 
     * Sets up an extra drop target on tabs.
     * 
     * This allows to drag arbitrary content onto tabs, for example URLs in a web
     * browser.
     * 
     * If a tab is hovered for a certain period of time while dragging the content,
     * it will be automatically selected.
     * 
     * The [signal`TabBar:`:extra-drag-drop] signal can be used to handle the drop.
     * @param actions the supported actions
     * @param types    all supported `GType`s that can be dropped
     */
    setupExtraDropTarget(actions: Gdk.DragAction, types: GObject.GType[] | null): void

    // Own signals of Adw-1.Adw.TabBar

    connect(sigName: "extra-drag-drop", callback: TabBar.ExtraDragDropSignalCallback): number
    on(sigName: "extra-drag-drop", callback: TabBar.ExtraDragDropSignalCallback): number
    once(sigName: "extra-drag-drop", callback: TabBar.ExtraDragDropSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "extra-drag-drop", value: any, ...args: any[]): void

    // Class property signals of Adw-1.Adw.TabBar

    connect(sigName: "notify::autohide", callback: any): number
    on(sigName: "notify::autohide", callback: any): number
    once(sigName: "notify::autohide", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::autohide", ...args: any[]): void
    connect(sigName: "notify::end-action-widget", callback: any): number
    on(sigName: "notify::end-action-widget", callback: any): number
    once(sigName: "notify::end-action-widget", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::end-action-widget", ...args: any[]): void
    connect(sigName: "notify::expand-tabs", callback: any): number
    on(sigName: "notify::expand-tabs", callback: any): number
    once(sigName: "notify::expand-tabs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expand-tabs", ...args: any[]): void
    connect(sigName: "notify::inverted", callback: any): number
    on(sigName: "notify::inverted", callback: any): number
    once(sigName: "notify::inverted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::inverted", ...args: any[]): void
    connect(sigName: "notify::is-overflowing", callback: any): number
    on(sigName: "notify::is-overflowing", callback: any): number
    once(sigName: "notify::is-overflowing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-overflowing", ...args: any[]): void
    connect(sigName: "notify::start-action-widget", callback: any): number
    on(sigName: "notify::start-action-widget", callback: any): number
    once(sigName: "notify::start-action-widget", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::start-action-widget", ...args: any[]): void
    connect(sigName: "notify::tabs-revealed", callback: any): number
    on(sigName: "notify::tabs-revealed", callback: any): number
    once(sigName: "notify::tabs-revealed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tabs-revealed", ...args: any[]): void
    connect(sigName: "notify::view", callback: any): number
    on(sigName: "notify::view", callback: any): number
    once(sigName: "notify::view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::view", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A tab bar for [class`TabView]`.
 * 
 * <picture>
 *   <source srcset="tab-bar-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="tab-bar.png" alt="tab-bar">
 * </picture>
 * 
 * The `AdwTabBar` widget is a tab bar that can be used with conjunction with
 * `AdwTabView`.
 * 
 * `AdwTabBar` can autohide and can optionally contain action widgets on both
 * sides of the tabs.
 * 
 * When there's not enough space to show all the tabs, `AdwTabBar` will scroll
 * them. Pinned tabs always stay visible and aren't a part of the scrollable
 * area.
 * 
 * ## CSS nodes
 * 
 * `AdwTabBar` has a single CSS node with name `tabbar`.
 * @class 
 */
export class TabBar extends Gtk.Widget {

    // Own properties of Adw-1.Adw.TabBar

    static name: string

    // Constructors of Adw-1.Adw.TabBar

    constructor(config?: TabBar.ConstructorProperties) 
    /**
     * Creates a new `AdwTabBar`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwTabBar`.
     * @constructor 
     */
    static new(): TabBar
    _init(config?: TabBar.ConstructorProperties): void
}

export module TabPage {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.TabPage

        /**
         * The child of the page.
         */
        child?: Gtk.Widget | null
        /**
         * The icon of the page.
         * 
         * [class`TabBar]` displays the icon next to the title.
         * 
         * It will not show the icon if [property`TabPage:`loading] is set to `TRUE`,
         * or if the page is pinned and [propertyTabPage:indicator-icon] is set.
         */
        icon?: Gio.Icon | null
        /**
         * Whether the indicator icon is activatable.
         * 
         * If set to `TRUE`, [signal`TabView:`:indicator-activated] will be emitted
         * when the indicator icon is clicked.
         * 
         * If [property`TabPage:`indicator-icon] is not set, does nothing.
         */
        indicatorActivatable?: boolean | null
        /**
         * An indicator icon for the page.
         * 
         * A common use case is an audio or camera indicator in a web browser.
         * 
         * [class`TabBar]` will show it at the beginning of the tab, alongside icon
         * representing [property`TabPage:`icon] or loading spinner.
         * 
         * If the page is pinned, the indicator will be shown instead of icon or
         * spinner.
         * 
         * If [property`TabPage:`indicator-activatable] is set to `TRUE`, the
         * indicator icon can act as a button.
         */
        indicatorIcon?: Gio.Icon | null
        /**
         * Whether the page is loading.
         * 
         * If set to `TRUE`, [class`TabBar]` will display a spinner in place of icon.
         * 
         * If the page is pinned and [property`TabPage:`indicator-icon] is set, the
         * loading status will not be visible.
         */
        loading?: boolean | null
        /**
         * Whether the page needs attention.
         * 
         * [class`TabBar]` will display a glow under the tab representing the page if
         * set to `TRUE`. If the tab is not visible, the corresponding edge of the tab
         * bar will be highlighted.
         */
        needsAttention?: boolean | null
        /**
         * The parent page of the page.
         * 
         * See [method`TabView`.add_page] and [method`TabView`.close_page].
         */
        parent?: TabPage | null
        /**
         * The title of the page.
         * 
         * [class`TabBar]` will display it in the center of the tab unless it's pinned,
         * and will use it as a tooltip unless [property`TabPage:`tooltip] is set.
         */
        title?: string | null
        /**
         * The tooltip of the page.
         * 
         * The tooltip can be marked up with the Pango text markup language.
         * 
         * If not set, [class`TabBar]` will use [property`TabPage:`title] as a tooltip
         * instead.
         */
        tooltip?: string | null
    }

}

export interface TabPage {

    // Own properties of Adw-1.Adw.TabPage

    /**
     * The child of the page.
     */
    readonly child: Gtk.Widget
    /**
     * The icon of the page.
     * 
     * [class`TabBar]` displays the icon next to the title.
     * 
     * It will not show the icon if [property`TabPage:`loading] is set to `TRUE`,
     * or if the page is pinned and [propertyTabPage:indicator-icon] is set.
     */
    icon: Gio.Icon
    /**
     * Whether the indicator icon is activatable.
     * 
     * If set to `TRUE`, [signal`TabView:`:indicator-activated] will be emitted
     * when the indicator icon is clicked.
     * 
     * If [property`TabPage:`indicator-icon] is not set, does nothing.
     */
    indicatorActivatable: boolean
    /**
     * An indicator icon for the page.
     * 
     * A common use case is an audio or camera indicator in a web browser.
     * 
     * [class`TabBar]` will show it at the beginning of the tab, alongside icon
     * representing [property`TabPage:`icon] or loading spinner.
     * 
     * If the page is pinned, the indicator will be shown instead of icon or
     * spinner.
     * 
     * If [property`TabPage:`indicator-activatable] is set to `TRUE`, the
     * indicator icon can act as a button.
     */
    indicatorIcon: Gio.Icon
    /**
     * Whether the page is loading.
     * 
     * If set to `TRUE`, [class`TabBar]` will display a spinner in place of icon.
     * 
     * If the page is pinned and [property`TabPage:`indicator-icon] is set, the
     * loading status will not be visible.
     */
    loading: boolean
    /**
     * Whether the page needs attention.
     * 
     * [class`TabBar]` will display a glow under the tab representing the page if
     * set to `TRUE`. If the tab is not visible, the corresponding edge of the tab
     * bar will be highlighted.
     */
    needsAttention: boolean
    /**
     * The parent page of the page.
     * 
     * See [method`TabView`.add_page] and [method`TabView`.close_page].
     */
    readonly parent: TabPage
    /**
     * Whether the page is pinned.
     * 
     * See [method`TabView`.set_page_pinned].
     */
    readonly pinned: boolean
    /**
     * Whether the page is selected.
     */
    readonly selected: boolean
    /**
     * The title of the page.
     * 
     * [class`TabBar]` will display it in the center of the tab unless it's pinned,
     * and will use it as a tooltip unless [property`TabPage:`tooltip] is set.
     */
    title: string
    /**
     * The tooltip of the page.
     * 
     * The tooltip can be marked up with the Pango text markup language.
     * 
     * If not set, [class`TabBar]` will use [property`TabPage:`title] as a tooltip
     * instead.
     */
    tooltip: string

    // Owm methods of Adw-1.Adw.TabPage

    /**
     * Gets the child of `self`.
     */
    getChild(): Gtk.Widget
    /**
     * Gets the icon of `self`.
     */
    getIcon(): Gio.Icon | null
    /**
     * Gets whether the indicator of `self` is activatable.
     */
    getIndicatorActivatable(): boolean
    /**
     * Gets the indicator icon of `self`.
     */
    getIndicatorIcon(): Gio.Icon | null
    /**
     * Gets whether `self` is loading.
     */
    getLoading(): boolean
    /**
     * Gets whether `self` needs attention.
     */
    getNeedsAttention(): boolean
    /**
     * Gets the parent page of `self`.
     */
    getParent(): TabPage | null
    /**
     * Gets whether `self` is pinned.
     */
    getPinned(): boolean
    /**
     * Gets whether `self` is selected.
     */
    getSelected(): boolean
    /**
     * Gets the title of `self`.
     */
    getTitle(): string
    /**
     * Gets the tooltip of `self`.
     */
    getTooltip(): string | null
    /**
     * Sets the icon of `self`.
     * @param icon the icon of `self`
     */
    setIcon(icon: Gio.Icon | null): void
    /**
     * Sets whether the indicator of `self` is activatable.
     * @param activatable whether the indicator is activatable
     */
    setIndicatorActivatable(activatable: boolean): void
    /**
     * Sets the indicator icon of `self`.
     * @param indicatorIcon the indicator icon of `self`
     */
    setIndicatorIcon(indicatorIcon: Gio.Icon | null): void
    /**
     * Sets wether `self` is loading.
     * @param loading whether `self` is loading
     */
    setLoading(loading: boolean): void
    /**
     * Sets whether `self` needs attention.
     * @param needsAttention whether `self` needs attention
     */
    setNeedsAttention(needsAttention: boolean): void
    /**
     * Sets the title of `self`.
     * @param title the title of `self`
     */
    setTitle(title: string): void
    /**
     * Sets the tooltip of `self`.
     * @param tooltip the tooltip of `self`
     */
    setTooltip(tooltip: string): void

    // Class property signals of Adw-1.Adw.TabPage

    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::icon", callback: any): number
    on(sigName: "notify::icon", callback: any): number
    once(sigName: "notify::icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::indicator-activatable", callback: any): number
    on(sigName: "notify::indicator-activatable", callback: any): number
    once(sigName: "notify::indicator-activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::indicator-activatable", ...args: any[]): void
    connect(sigName: "notify::indicator-icon", callback: any): number
    on(sigName: "notify::indicator-icon", callback: any): number
    once(sigName: "notify::indicator-icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::indicator-icon", ...args: any[]): void
    connect(sigName: "notify::loading", callback: any): number
    on(sigName: "notify::loading", callback: any): number
    once(sigName: "notify::loading", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::loading", ...args: any[]): void
    connect(sigName: "notify::needs-attention", callback: any): number
    on(sigName: "notify::needs-attention", callback: any): number
    once(sigName: "notify::needs-attention", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::needs-attention", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::pinned", callback: any): number
    on(sigName: "notify::pinned", callback: any): number
    once(sigName: "notify::pinned", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pinned", ...args: any[]): void
    connect(sigName: "notify::selected", callback: any): number
    on(sigName: "notify::selected", callback: any): number
    once(sigName: "notify::selected", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selected", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: any): number
    on(sigName: "notify::tooltip", callback: any): number
    once(sigName: "notify::tooltip", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An auxiliary class used by [class`TabView]`.
 * @class 
 */
export class TabPage extends GObject.Object {

    // Own properties of Adw-1.Adw.TabPage

    static name: string

    // Constructors of Adw-1.Adw.TabPage

    constructor(config?: TabPage.ConstructorProperties) 
    _init(config?: TabPage.ConstructorProperties): void
}

export module TabView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `close-page`
     */
    export interface ClosePageSignalCallback {
        (page: TabPage): boolean
    }

    /**
     * Signal callback interface for `create-window`
     */
    export interface CreateWindowSignalCallback {
        (): TabView | null
    }

    /**
     * Signal callback interface for `indicator-activated`
     */
    export interface IndicatorActivatedSignalCallback {
        (page: TabPage): void
    }

    /**
     * Signal callback interface for `page-attached`
     */
    export interface PageAttachedSignalCallback {
        (page: TabPage, position: number): void
    }

    /**
     * Signal callback interface for `page-detached`
     */
    export interface PageDetachedSignalCallback {
        (page: TabPage, position: number): void
    }

    /**
     * Signal callback interface for `page-reordered`
     */
    export interface PageReorderedSignalCallback {
        (page: TabPage, position: number): void
    }

    /**
     * Signal callback interface for `setup-menu`
     */
    export interface SetupMenuSignalCallback {
        (page: TabPage | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.TabView

        /**
         * Default page icon.
         * 
         * If a page doesn't provide its own icon via [property`TabPage:`icon], a
         * default icon may be used instead for contexts where having an icon is
         * necessary.
         * 
         * [class`TabBar]` will use default icon for pinned tabs in case the page is
         * not loading, doesn't have an icon and an indicator. Default icon is never
         * used for tabs that aren't pinned.
         * 
         * By default, the `adw-tab-icon-missing-symbolic` icon is used.
         */
        defaultIcon?: Gio.Icon | null
        /**
         * Tab context menu model.
         * 
         * When a context menu is shown for a tab, it will be constructed from the
         * provided menu model. Use the [signal`TabView:`:setup-menu] signal to set up
         * the menu actions for the particular tab.
         */
        menuModel?: Gio.MenuModel | null
        /**
         * The currently selected page.
         */
        selectedPage?: TabPage | null
    }

}

export interface TabView extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.TabView

    /**
     * Default page icon.
     * 
     * If a page doesn't provide its own icon via [property`TabPage:`icon], a
     * default icon may be used instead for contexts where having an icon is
     * necessary.
     * 
     * [class`TabBar]` will use default icon for pinned tabs in case the page is
     * not loading, doesn't have an icon and an indicator. Default icon is never
     * used for tabs that aren't pinned.
     * 
     * By default, the `adw-tab-icon-missing-symbolic` icon is used.
     */
    defaultIcon: Gio.Icon
    /**
     * Whether a page is being transferred.
     * 
     * This property will be set to `TRUE` when a drag-n-drop tab transfer starts
     * on any `AdwTabView`, and to `FALSE` after it ends.
     * 
     * During the transfer, children cannot receive pointer input and a tab can
     * be safely dropped on the tab view.
     */
    readonly isTransferringPage: boolean
    /**
     * Tab context menu model.
     * 
     * When a context menu is shown for a tab, it will be constructed from the
     * provided menu model. Use the [signal`TabView:`:setup-menu] signal to set up
     * the menu actions for the particular tab.
     */
    menuModel: Gio.MenuModel
    /**
     * The number of pages in the tab view.
     */
    readonly nPages: number
    /**
     * The number of pinned pages in the tab view.
     * 
     * See [method`TabView`.set_page_pinned].
     */
    readonly nPinnedPages: number
    /**
     * A selection model with the tab view's pages.
     * 
     * This can be used to keep an up-to-date view. The model also implements
     * [iface`Gtk`.SelectionModel] and can be used to track and change the selected
     * page.
     */
    readonly pages: Gtk.SelectionModel
    /**
     * The currently selected page.
     */
    selectedPage: TabPage

    // Owm methods of Adw-1.Adw.TabView

    /**
     * Adds `child` to `self` with `parent` as the parent.
     * 
     * This function can be used to automatically position new pages, and to select
     * the correct page when this page is closed while being selected (see
     * [method`TabView`.close_page]).
     * 
     * If `parent` is `NULL`, this function is equivalent to [method`TabView`.append].
     * @param child a widget to add
     * @param parent a parent page for `child`
     */
    addPage(child: Gtk.Widget, parent: TabPage | null): TabPage
    /**
     * Inserts `child` as the last non-pinned page.
     * @param child a widget to add
     */
    append(child: Gtk.Widget): TabPage
    /**
     * Inserts `child` as the last pinned page.
     * @param child a widget to add
     */
    appendPinned(child: Gtk.Widget): TabPage
    /**
     * Requests to close all pages other than `page`.
     * @param page a page of `self`
     */
    closeOtherPages(page: TabPage): void
    /**
     * Requests to close `page`.
     * 
     * Calling this function will result in the [signal`TabView:`:close-page] signal
     * being emitted for `page`. Closing the page can then be confirmed or
     * denied via [method`TabView`.close_page_finish].
     * 
     * If the page is waiting for a [method`TabView`.close_page_finish] call, this
     * function will do nothing.
     * 
     * The default handler for [signal`TabView:`:close-page] will immediately confirm
     * closing the page if it's non-pinned, or reject it if it's pinned. This
     * behavior can be changed by registering your own handler for that signal.
     * 
     * If `page` was selected, another page will be selected instead:
     * 
     * If the [property`TabPage:`parent] value is `NULL`, the next page will be
     * selected when possible, or if the page was already last, the previous page
     * will be selected instead.
     * 
     * If it's not `NULL`, the previous page will be selected if it's a descendant
     * (possibly indirect) of the parent. If both the previous page and the parent
     * are pinned, the parent will be selected instead.
     * @param page a page of `self`
     */
    closePage(page: TabPage): void
    /**
     * Completes a [method`TabView`.close_page] call for `page`.
     * 
     * If `confirm` is `TRUE`, `page` will be closed. If it's `FALSE`, it will be
     * reverted to its previous state and [method`TabView`.close_page] can be called
     * for it again.
     * 
     * This function should not be called unless a custom handler for
     * [signal`TabView:`:close-page] is used.
     * @param page a page of `self`
     * @param confirm whether to confirm or deny closing `page`
     */
    closePageFinish(page: TabPage, confirm: boolean): void
    /**
     * Requests to close all pages after `page`.
     * @param page a page of `self`
     */
    closePagesAfter(page: TabPage): void
    /**
     * Requests to close all pages before `page`.
     * @param page a page of `self`
     */
    closePagesBefore(page: TabPage): void
    /**
     * Gets the default icon of `self`.
     */
    getDefaultIcon(): Gio.Icon
    /**
     * Whether a page is being transferred.
     */
    getIsTransferringPage(): boolean
    /**
     * Gets the tab context menu model for `self`.
     */
    getMenuModel(): Gio.MenuModel | null
    /**
     * Gets the number of pages in `self`.
     */
    getNPages(): number
    /**
     * Gets the number of pinned pages in `self`.
     */
    getNPinnedPages(): number
    /**
     * Gets the [class`TabPage]` representing the child at `position`.
     * @param position the index of the page in `self,` starting from 0
     */
    getNthPage(position: number): TabPage
    /**
     * Gets the [class`TabPage]` object representing `child`.
     * @param child a child in `self`
     */
    getPage(child: Gtk.Widget): TabPage
    /**
     * Finds the position of `page` in `self,` starting from 0.
     * @param page a page of `self`
     */
    getPagePosition(page: TabPage): number
    /**
     * Returns a [iface`Gio`.ListModel] that contains the pages of `self`.
     * 
     * This can be used to keep an up-to-date view. The model also implements
     * [iface`Gtk`.SelectionModel] and can be used to track and change the selected
     * page.
     */
    getPages(): Gtk.SelectionModel
    /**
     * Gets the currently selected page in `self`.
     */
    getSelectedPage(): TabPage | null
    /**
     * Inserts a non-pinned page at `position`.
     * 
     * It's an error to try to insert a page before a pinned page, in that case
     * [method`TabView`.insert_pinned] should be used instead.
     * @param child a widget to add
     * @param position the position to add `child` at, starting from 0
     */
    insert(child: Gtk.Widget, position: number): TabPage
    /**
     * Inserts a pinned page at `position`.
     * 
     * It's an error to try to insert a pinned page after a non-pinned page, in
     * that case [method`TabView`.insert] should be used instead.
     * @param child a widget to add
     * @param position the position to add `child` at, starting from 0
     */
    insertPinned(child: Gtk.Widget, position: number): TabPage
    /**
     * Inserts `child` as the first non-pinned page.
     * @param child a widget to add
     */
    prepend(child: Gtk.Widget): TabPage
    /**
     * Inserts `child` as the first pinned page.
     * @param child a widget to add
     */
    prependPinned(child: Gtk.Widget): TabPage
    /**
     * Reorders `page` to before its previous page if possible.
     * @param page a page of `self`
     */
    reorderBackward(page: TabPage): boolean
    /**
     * Reorders `page` to the first possible position.
     * @param page a page of `self`
     */
    reorderFirst(page: TabPage): boolean
    /**
     * Reorders `page` to after its next page if possible.
     * @param page a page of `self`
     */
    reorderForward(page: TabPage): boolean
    /**
     * Reorders `page` to the last possible position.
     * @param page a page of `self`
     */
    reorderLast(page: TabPage): boolean
    /**
     * Reorders `page` to `position`.
     * 
     * It's a programmer error to try to reorder a pinned page after a non-pinned
     * one, or a non-pinned page before a pinned one.
     * @param page a page of `self`
     * @param position the position to insert the page at, starting at 0
     */
    reorderPage(page: TabPage, position: number): boolean
    /**
     * Selects the page after the currently selected page.
     * 
     * If the last page was already selected, this function does nothing.
     */
    selectNextPage(): boolean
    /**
     * Selects the page before the currently selected page.
     * 
     * If the first page was already selected, this function does nothing.
     */
    selectPreviousPage(): boolean
    /**
     * Sets the default page icon for `self`.
     * @param defaultIcon the default icon
     */
    setDefaultIcon(defaultIcon: Gio.Icon): void
    /**
     * Sets the tab context menu model for `self`.
     * @param menuModel a menu model
     */
    setMenuModel(menuModel: Gio.MenuModel | null): void
    /**
     * Pins or unpins `page`.
     * 
     * Pinned pages are guaranteed to be placed before all non-pinned pages; at any
     * given moment the first [property`TabView:`n-pinned-pages] pages in `self` are
     * guaranteed to be pinned.
     * 
     * When a page is pinned or unpinned, it's automatically reordered: pinning a
     * page moves it after other pinned pages; unpinning a page moves it before
     * other non-pinned pages.
     * 
     * Pinned pages can still be reordered between each other.
     * 
     * [class`TabBar]` will display pinned pages in a compact form, never showing the
     * title or close button, and only showing a single icon, selected in the
     * following order:
     * 
     * 1. [property`TabPage:`indicator-icon]
     * 2. A spinner if [property`TabPage:`loading] is `TRUE`
     * 3. [property`TabPage:`icon]
     * 4. [property`TabView:`default-icon]
     * 
     * Pinned pages cannot be closed by default, see [signal`TabView:`:close-page]
     * for how to override that behavior.
     * 
     * Changes the value of the [property`TabPage:`pinned] property.
     * @param page a page of `self`
     * @param pinned whether `page` should be pinned
     */
    setPagePinned(page: TabPage, pinned: boolean): void
    /**
     * Sets the currently selected page in `self`.
     * @param selectedPage a page in `self`
     */
    setSelectedPage(selectedPage: TabPage): void
    /**
     * Transfers `page` from `self` to `other_view`.
     * 
     * The `page` object will be reused.
     * 
     * It's a programmer error to try to insert a pinned page after a non-pinned
     * one, or a non-pinned page before a pinned one.
     * @param page a page of `self`
     * @param otherView the tab view to transfer the page to
     * @param position the position to insert the page at, starting at 0
     */
    transferPage(page: TabPage, otherView: TabView, position: number): void

    // Own signals of Adw-1.Adw.TabView

    connect(sigName: "close-page", callback: TabView.ClosePageSignalCallback): number
    on(sigName: "close-page", callback: TabView.ClosePageSignalCallback): number
    once(sigName: "close-page", callback: TabView.ClosePageSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "close-page", ...args: any[]): void
    connect(sigName: "create-window", callback: TabView.CreateWindowSignalCallback): number
    on(sigName: "create-window", callback: TabView.CreateWindowSignalCallback): number
    once(sigName: "create-window", callback: TabView.CreateWindowSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "create-window", ...args: any[]): void
    connect(sigName: "indicator-activated", callback: TabView.IndicatorActivatedSignalCallback): number
    on(sigName: "indicator-activated", callback: TabView.IndicatorActivatedSignalCallback): number
    once(sigName: "indicator-activated", callback: TabView.IndicatorActivatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "indicator-activated", ...args: any[]): void
    connect(sigName: "page-attached", callback: TabView.PageAttachedSignalCallback): number
    on(sigName: "page-attached", callback: TabView.PageAttachedSignalCallback): number
    once(sigName: "page-attached", callback: TabView.PageAttachedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "page-attached", position: number, ...args: any[]): void
    connect(sigName: "page-detached", callback: TabView.PageDetachedSignalCallback): number
    on(sigName: "page-detached", callback: TabView.PageDetachedSignalCallback): number
    once(sigName: "page-detached", callback: TabView.PageDetachedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "page-detached", position: number, ...args: any[]): void
    connect(sigName: "page-reordered", callback: TabView.PageReorderedSignalCallback): number
    on(sigName: "page-reordered", callback: TabView.PageReorderedSignalCallback): number
    once(sigName: "page-reordered", callback: TabView.PageReorderedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "page-reordered", position: number, ...args: any[]): void
    connect(sigName: "setup-menu", callback: TabView.SetupMenuSignalCallback): number
    on(sigName: "setup-menu", callback: TabView.SetupMenuSignalCallback): number
    once(sigName: "setup-menu", callback: TabView.SetupMenuSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "setup-menu", ...args: any[]): void

    // Class property signals of Adw-1.Adw.TabView

    connect(sigName: "notify::default-icon", callback: any): number
    on(sigName: "notify::default-icon", callback: any): number
    once(sigName: "notify::default-icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-icon", ...args: any[]): void
    connect(sigName: "notify::is-transferring-page", callback: any): number
    on(sigName: "notify::is-transferring-page", callback: any): number
    once(sigName: "notify::is-transferring-page", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-transferring-page", ...args: any[]): void
    connect(sigName: "notify::menu-model", callback: any): number
    on(sigName: "notify::menu-model", callback: any): number
    once(sigName: "notify::menu-model", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::menu-model", ...args: any[]): void
    connect(sigName: "notify::n-pages", callback: any): number
    on(sigName: "notify::n-pages", callback: any): number
    once(sigName: "notify::n-pages", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::n-pages", ...args: any[]): void
    connect(sigName: "notify::n-pinned-pages", callback: any): number
    on(sigName: "notify::n-pinned-pages", callback: any): number
    once(sigName: "notify::n-pinned-pages", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::n-pinned-pages", ...args: any[]): void
    connect(sigName: "notify::pages", callback: any): number
    on(sigName: "notify::pages", callback: any): number
    once(sigName: "notify::pages", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pages", ...args: any[]): void
    connect(sigName: "notify::selected-page", callback: any): number
    on(sigName: "notify::selected-page", callback: any): number
    once(sigName: "notify::selected-page", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selected-page", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A dynamic tabbed container.
 * 
 * `AdwTabView` is a container which shows one child at a time. While it
 * provides keyboard shortcuts for switching between pages, it does not provide
 * a visible tab bar and relies on external widgets for that, such as
 * [class`TabBar]`.
 * 
 * `AdwTabView` maintains a [class`TabPage]` object for each page, which holds
 * additional per-page properties. You can obtain the `AdwTabPage` for a page
 * with [method`TabView`.get_page], and as the return value for
 * [method`TabView`.append] and other functions for adding children.
 * 
 * `AdwTabView` only aims to be useful for dynamic tabs in multi-window
 * document-based applications, such as web browsers, file managers, text
 * editors or terminals. It does not aim to replace [class`Gtk`.Notebook] for use
 * cases such as tabbed dialogs.
 * 
 * As such, it does not support disabling page reordering or detaching.
 * 
 * `AdwTabView` adds the following shortcuts in the managed scope:
 * 
 * * <kbd>Ctrl</kbd>+<kbd>Page Up</kbd> - switch to the previous page
 * * <kbd>Ctrl</kbd>+<kbd>Page Down</kbd> - switch to the next page
 * * <kbd>Ctrl</kbd>+<kbd>Home</kbd> - switch to the first page
 * * <kbd>Ctrl</kbd>+<kbd>End</kbd> - switch to the last page
 * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Page Up</kbd> - move the current page
 *     backward
 * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Page Down</kbd> - move the current
 *     page forward
 * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Home</kbd> - move the current page at
 *     the start
 * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>End</kbd> - move the current page at
 *      the end
 * * <kbd>Ctrl</kbd>+<kbd>Tab</kbd> - switch to the next page, with looping
 * * <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Tab</kbd> - switch to the previous
 *     page, with looping
 * * <kbd>Alt</kbd>+<kbd>1</kbd>⋯<kbd>9</kbd> - switch to pages 1-9
 * * <kbd>Alt</kbd>+<kbd>0</kbd> - switch to page 10
 * 
 * ## CSS nodes
 * 
 * `AdwTabView` has a main CSS node with the name `tabview`.
 * @class 
 */
export class TabView extends Gtk.Widget {

    // Own properties of Adw-1.Adw.TabView

    static name: string

    // Constructors of Adw-1.Adw.TabView

    constructor(config?: TabView.ConstructorProperties) 
    /**
     * Creates a new `AdwTabView`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwTabView`.
     * @constructor 
     */
    static new(): TabView
    _init(config?: TabView.ConstructorProperties): void
}

export module TimedAnimation {

    // Constructor properties interface

    export interface ConstructorProperties extends Animation.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.TimedAnimation

        /**
         * Whether the animation changes direction on every iteration.
         */
        alternate?: boolean | null
        /**
         * Duration of the animation, in milliseconds.
         * 
         * Describes how much time the animation will take.
         * 
         * If the animation repeats more than once, describes the duration of one
         * iteration.
         */
        duration?: number | null
        /**
         * Easing function used in the animation.
         * 
         * Describes the curve the value is interpolated on.
         * 
         * See [enum`Easing]` for the description of specific easing functions.
         */
        easing?: Easing | null
        /**
         * Number of times the animation will play.
         * 
         * If set to 0, the animation will repeat endlessly.
         */
        repeatCount?: number | null
        /**
         * Whether the animation plays backwards.
         */
        reverse?: boolean | null
        /**
         * The value to animate from.
         * 
         * The animation will start at this value and end at
         * [property`TimedAnimation:`value-to].
         * 
         * If [property`TimedAnimation:`reverse] is `TRUE`, the animation will end at
         * this value instead.
         */
        valueFrom?: number | null
        /**
         * The value to animate to.
         * 
         * The animation will start at [property`TimedAnimation:`value-from] and end at
         * this value.
         * 
         * If [property`TimedAnimation:`reverse] is `TRUE`, the animation will start
         * at this value instead.
         */
        valueTo?: number | null
    }

}

export interface TimedAnimation {

    // Own properties of Adw-1.Adw.TimedAnimation

    /**
     * Whether the animation changes direction on every iteration.
     */
    alternate: boolean
    /**
     * Duration of the animation, in milliseconds.
     * 
     * Describes how much time the animation will take.
     * 
     * If the animation repeats more than once, describes the duration of one
     * iteration.
     */
    duration: number
    /**
     * Easing function used in the animation.
     * 
     * Describes the curve the value is interpolated on.
     * 
     * See [enum`Easing]` for the description of specific easing functions.
     */
    easing: Easing
    /**
     * Number of times the animation will play.
     * 
     * If set to 0, the animation will repeat endlessly.
     */
    repeatCount: number
    /**
     * Whether the animation plays backwards.
     */
    reverse: boolean
    /**
     * The value to animate from.
     * 
     * The animation will start at this value and end at
     * [property`TimedAnimation:`value-to].
     * 
     * If [property`TimedAnimation:`reverse] is `TRUE`, the animation will end at
     * this value instead.
     */
    valueFrom: number
    /**
     * The value to animate to.
     * 
     * The animation will start at [property`TimedAnimation:`value-from] and end at
     * this value.
     * 
     * If [property`TimedAnimation:`reverse] is `TRUE`, the animation will start
     * at this value instead.
     */
    valueTo: number

    // Owm methods of Adw-1.Adw.TimedAnimation

    /**
     * Gets whether `self` changes direction on every iteration.
     */
    getAlternate(): boolean
    /**
     * Gets the duration of `self`.
     */
    getDuration(): number
    /**
     * Gets the easing function `self` uses.
     */
    getEasing(): Easing
    /**
     * Gets the number of times `self` will play.
     */
    getRepeatCount(): number
    /**
     * Gets whether `self` plays backwards.
     */
    getReverse(): boolean
    /**
     * Gets the value `self` will animate from.
     */
    getValueFrom(): number
    /**
     * Gets the value `self` will animate to.
     */
    getValueTo(): number
    /**
     * Sets whether `self` changes direction on every iteration.
     * @param alternate whether `self` alternates
     */
    setAlternate(alternate: boolean): void
    /**
     * Sets the duration of `self`.
     * 
     * If the animation repeats more than once, sets the duration of one iteration.
     * @param duration the duration to use, in milliseconds
     */
    setDuration(duration: number): void
    /**
     * Sets the easing function `self` will use.
     * 
     * See [enum`Easing]` for the description of specific easing functions.
     * @param easing the easing function to use
     */
    setEasing(easing: Easing): void
    /**
     * Sets the number of times `self` will play.
     * 
     * If set to 0, `self` will repeat endlessly.
     * @param repeatCount the number of times `self` will play
     */
    setRepeatCount(repeatCount: number): void
    /**
     * Sets whether `self` plays backwards.
     * @param reverse whether `self` plays backwards
     */
    setReverse(reverse: boolean): void
    /**
     * Sets the value `self` will animate from.
     * @param value the value to animate from
     */
    setValueFrom(value: number): void
    /**
     * Sets the value `self` will animate to.
     * @param value the value to animate to
     */
    setValueTo(value: number): void

    // Class property signals of Adw-1.Adw.TimedAnimation

    connect(sigName: "notify::alternate", callback: any): number
    on(sigName: "notify::alternate", callback: any): number
    once(sigName: "notify::alternate", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::alternate", ...args: any[]): void
    connect(sigName: "notify::duration", callback: any): number
    on(sigName: "notify::duration", callback: any): number
    once(sigName: "notify::duration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::easing", callback: any): number
    on(sigName: "notify::easing", callback: any): number
    once(sigName: "notify::easing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::easing", ...args: any[]): void
    connect(sigName: "notify::repeat-count", callback: any): number
    on(sigName: "notify::repeat-count", callback: any): number
    once(sigName: "notify::repeat-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::repeat-count", ...args: any[]): void
    connect(sigName: "notify::reverse", callback: any): number
    on(sigName: "notify::reverse", callback: any): number
    once(sigName: "notify::reverse", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reverse", ...args: any[]): void
    connect(sigName: "notify::value-from", callback: any): number
    on(sigName: "notify::value-from", callback: any): number
    once(sigName: "notify::value-from", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-from", ...args: any[]): void
    connect(sigName: "notify::value-to", callback: any): number
    on(sigName: "notify::value-to", callback: any): number
    once(sigName: "notify::value-to", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-to", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::target", callback: any): number
    on(sigName: "notify::target", callback: any): number
    once(sigName: "notify::target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::widget", callback: any): number
    on(sigName: "notify::widget", callback: any): number
    once(sigName: "notify::widget", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::widget", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A time-based [class`Animation]`.
 * 
 * `AdwTimedAnimation` implements a simple animation interpolating the given
 * value from [property`TimedAnimation:`value-from] to
 * [property`TimedAnimation:`value-to] over
 * [property`TimedAnimation:`duration] milliseconds using the curve described by
 * [property`TimedAnimation:`easing].
 * 
 * If [property`TimedAnimation:`reverse] is set to `TRUE`, `AdwTimedAnimation`
 * will instead animate from [property`TimedAnimation:`value-to] to
 * [property`TimedAnimation:`value-from], and the easing curve will be inverted.
 * 
 * The animation can repeat a certain amount of times, or endlessly, depending
 * on the [property`TimedAnimation:`repeat-count] value. If
 * [property`TimedAnimation:`alternate] is set to `TRUE`, it will also change the
 * direction every other iteration.
 * @class 
 */
export class TimedAnimation extends Animation {

    // Own properties of Adw-1.Adw.TimedAnimation

    static name: string

    // Constructors of Adw-1.Adw.TimedAnimation

    constructor(config?: TimedAnimation.ConstructorProperties) 
    /**
     * Creates a new `AdwTimedAnimation` on `widget` to animate `target` from `from`
     * to `to`.
     * @constructor 
     * @param widget a widget to create animation on
     * @param from a value to animate from
     * @param to a value to animate to
     * @param duration a duration for the animation
     * @param target a target value to animate
     */
    constructor(widget: Gtk.Widget, from: number, to: number, duration: number, target: AnimationTarget) 
    /**
     * Creates a new `AdwTimedAnimation` on `widget` to animate `target` from `from`
     * to `to`.
     * @constructor 
     * @param widget a widget to create animation on
     * @param from a value to animate from
     * @param to a value to animate to
     * @param duration a duration for the animation
     * @param target a target value to animate
     */
    static new(widget: Gtk.Widget, from: number, to: number, duration: number, target: AnimationTarget): TimedAnimation
    _init(config?: TimedAnimation.ConstructorProperties): void
}

export module Toast {

    // Signal callback interfaces

    /**
     * Signal callback interface for `dismissed`
     */
    export interface DismissedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.Toast

        /**
         * The name of the associated action.
         * 
         * It will be activated when clicking the button.
         * 
         * See [property`Toast:`action-target].
         */
        actionName?: string | null
        /**
         * The parameter for action invocations.
         * 
         * See [property`Toast:`action-name].
         */
        actionTarget?: GLib.Variant | null
        /**
         * The label to show on the button.
         * 
         * Underlines in the button text can be used to indicate a mnemonic.
         * 
         * If set to `NULL`, the button won't be shown.
         * 
         * See [property`Toast:`action-name].
         */
        buttonLabel?: string | null
        /**
         * The custom title widget.
         * 
         * It will be displayed instead of the title if set. In this case,
         * [property`Toast:`title] is ignored.
         * 
         * Setting a custom title will unset [property`Toast:`title].
         */
        customTitle?: Gtk.Widget | null
        /**
         * The priority of the toast.
         * 
         * Priority controls how the toast behaves when another toast is already
         * being displayed.
         * 
         * If the priority is `ADW_TOAST_PRIORITY_NORMAL`, the toast will be queued.
         * 
         * If the priority is `ADW_TOAST_PRIORITY_HIGH`, the toast will be displayed
         * immediately, pushing the previous toast into the queue instead.
         */
        priority?: ToastPriority | null
        /**
         * The timeout of the toast, in seconds.
         * 
         * If timeout is 0, the toast is displayed indefinitely until manually
         * dismissed.
         * 
         * Toasts cannot disappear while being hovered, pressed (on touchscreen), or
         * have keyboard focus inside them.
         */
        timeout?: number | null
        /**
         * The title of the toast.
         * 
         * The title can be marked up with the Pango text markup language.
         * 
         * Setting a title will unset [property`Toast:`custom-title].
         * 
         * If [property`Toast:`custom-title] is set, it will be used instead.
         */
        title?: string | null
    }

}

export interface Toast {

    // Own properties of Adw-1.Adw.Toast

    /**
     * The name of the associated action.
     * 
     * It will be activated when clicking the button.
     * 
     * See [property`Toast:`action-target].
     */
    actionName: string
    /**
     * The parameter for action invocations.
     * 
     * See [property`Toast:`action-name].
     */
    actionTarget: GLib.Variant
    /**
     * The label to show on the button.
     * 
     * Underlines in the button text can be used to indicate a mnemonic.
     * 
     * If set to `NULL`, the button won't be shown.
     * 
     * See [property`Toast:`action-name].
     */
    buttonLabel: string
    /**
     * The custom title widget.
     * 
     * It will be displayed instead of the title if set. In this case,
     * [property`Toast:`title] is ignored.
     * 
     * Setting a custom title will unset [property`Toast:`title].
     */
    customTitle: Gtk.Widget
    /**
     * The priority of the toast.
     * 
     * Priority controls how the toast behaves when another toast is already
     * being displayed.
     * 
     * If the priority is `ADW_TOAST_PRIORITY_NORMAL`, the toast will be queued.
     * 
     * If the priority is `ADW_TOAST_PRIORITY_HIGH`, the toast will be displayed
     * immediately, pushing the previous toast into the queue instead.
     */
    priority: ToastPriority
    /**
     * The timeout of the toast, in seconds.
     * 
     * If timeout is 0, the toast is displayed indefinitely until manually
     * dismissed.
     * 
     * Toasts cannot disappear while being hovered, pressed (on touchscreen), or
     * have keyboard focus inside them.
     */
    timeout: number
    /**
     * The title of the toast.
     * 
     * The title can be marked up with the Pango text markup language.
     * 
     * Setting a title will unset [property`Toast:`custom-title].
     * 
     * If [property`Toast:`custom-title] is set, it will be used instead.
     */
    title: string

    // Owm methods of Adw-1.Adw.Toast

    /**
     * Dismisses `self`.
     */
    dismiss(): void
    /**
     * Gets the name of the associated action.
     */
    getActionName(): string | null
    /**
     * Gets the parameter for action invocations.
     */
    getActionTargetValue(): GLib.Variant | null
    /**
     * Gets the label to show on the button.
     */
    getButtonLabel(): string | null
    /**
     * Gets the custom title widget of `self`.
     */
    getCustomTitle(): Gtk.Widget | null
    /**
     * Gets priority for `self`.
     */
    getPriority(): ToastPriority
    /**
     * Gets timeout for `self`.
     */
    getTimeout(): number
    /**
     * Gets the title that will be displayed on the toast.
     * 
     * If a custom title has been set with [method`Adw`.Toast.set_custom_title]
     * the return value will be %NULL.
     */
    getTitle(): string | null
    /**
     * Sets the name of the associated action.
     * @param actionName the action name
     */
    setActionName(actionName: string | null): void
    /**
     * Sets the parameter for action invocations.
     * 
     * If the `action_target` variant has a floating reference this function
     * will sink it.
     * @param actionTarget the action target
     */
    setActionTargetValue(actionTarget: GLib.Variant | null): void
    /**
     * Sets the label to show on the button.
     * 
     * It set to `NULL`, the button won't be shown.
     * @param buttonLabel a button label
     */
    setButtonLabel(buttonLabel: string | null): void
    /**
     * Sets the custom title widget of `self`.
     * @param widget the custom title widget
     */
    setCustomTitle(widget: Gtk.Widget | null): void
    /**
     * Sets the action name and its parameter.
     * 
     * `detailed_action_name` is a string in the format accepted by
     * [func`Gio`.Action.parse_detailed_name].
     * @param detailedActionName the detailed action name
     */
    setDetailedActionName(detailedActionName: string | null): void
    /**
     * Sets priority for `self`.
     * 
     * Priority controls how the toast behaves when another toast is already
     * being displayed.
     * 
     * If `priority` is `ADW_TOAST_PRIORITY_NORMAL`, the toast will be queued.
     * 
     * If `priority` is `ADW_TOAST_PRIORITY_HIGH`, the toast will be displayed immediately,
     * pushing the previous toast into the queue instead.
     * @param priority the priority
     */
    setPriority(priority: ToastPriority): void
    /**
     * Sets timeout for `self`.
     * 
     * If `timeout` is 0, the toast is displayed indefinitely until manually
     * dismissed.
     * 
     * Toasts cannot disappear while being hovered, pressed (on touchscreen), or
     * have keyboard focus inside them.
     * @param timeout the timeout
     */
    setTimeout(timeout: number): void
    /**
     * Sets the title that will be displayed on the toast.
     * @param title a title
     */
    setTitle(title: string): void

    // Own signals of Adw-1.Adw.Toast

    connect(sigName: "dismissed", callback: Toast.DismissedSignalCallback): number
    on(sigName: "dismissed", callback: Toast.DismissedSignalCallback): number
    once(sigName: "dismissed", callback: Toast.DismissedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "dismissed", ...args: any[]): void

    // Class property signals of Adw-1.Adw.Toast

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
    connect(sigName: "notify::button-label", callback: any): number
    on(sigName: "notify::button-label", callback: any): number
    once(sigName: "notify::button-label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::button-label", ...args: any[]): void
    connect(sigName: "notify::custom-title", callback: any): number
    on(sigName: "notify::custom-title", callback: any): number
    once(sigName: "notify::custom-title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::custom-title", ...args: any[]): void
    connect(sigName: "notify::priority", callback: any): number
    on(sigName: "notify::priority", callback: any): number
    once(sigName: "notify::priority", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::priority", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: any): number
    on(sigName: "notify::timeout", callback: any): number
    once(sigName: "notify::timeout", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A helper object for [class`ToastOverlay]`.
 * 
 * Toasts are meant to be passed into [method`ToastOverlay`.add_toast] as
 * follows:
 * 
 * ```c
 * adw_toast_overlay_add_toast (overlay, adw_toast_new (_("Simple Toast"));
 * ```
 * 
 * <picture>
 *   <source srcset="toast-simple-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="toast-simple.png" alt="toast-simple">
 * </picture>
 * 
 * Toasts always have a close button. They emit the [signal`Toast:`:dismissed]
 * signal when disappearing.
 * 
 * [property`Toast:`timeout] determines how long the toast stays on screen, while
 * [property`Toast:`priority] determines how it behaves if another toast is
 * already being displayed.
 * 
 * [property`Toast:`custom-title] can be used to replace the title label with a
 * custom widget.
 * 
 * ## Actions
 * 
 * Toasts can have one button on them, with a label and an attached
 * [iface`Gio`.Action].
 * 
 * ```c
 * AdwToast *toast = adw_toast_new (_("Toast with Action"));
 * 
 * adw_toast_set_button_label (toast, _("_Example"));
 * adw_toast_set_action_name (toast, "win.example");
 * 
 * adw_toast_overlay_add_toast (overlay, toast);
 * ```
 * 
 * <picture>
 *   <source srcset="toast-action-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="toast-action.png" alt="toast-action">
 * </picture>
 * 
 * ## Modifying toasts
 * 
 * Toasts can be modified after they have been shown. For this, an `AdwToast`
 * reference must be kept around while the toast is visible.
 * 
 * A common use case for this is using toasts as undo prompts that stack with
 * each other, allowing to batch undo the last deleted items:
 * 
 * ```c
 * 
 * static void
 * toast_undo_cb (GtkWidget  *sender,
 *                const char *action,
 *                GVariant   *param)
 * {
 *   // Undo the deletion
 * }
 * 
 * static void
 * dismissed_cb (MyWindow *self)
 * {
 *   self->undo_toast = NULL;
 * 
 *   // Permanently delete the items
 * }
 * 
 * static void
 * delete_item (MyWindow *self,
 *              MyItem   *item)
 * {
 *   g_autofree char *title = NULL;
 *   int n_items;
 * 
 *   // Mark the item as waiting for deletion
 *   n_items = ... // The number of waiting items
 * 
 *   if (!self->undo_toast) {
 *     self->undo_toast = adw_toast_new_format (_("‘%s’ deleted"), ...);
 * 
 *     adw_toast_set_priority (self->undo_toast, ADW_TOAST_PRIORITY_HIGH);
 *     adw_toast_set_button_label (self->undo_toast, _("_Undo"));
 *     adw_toast_set_action_name (self->undo_toast, "toast.undo");
 * 
 *     g_signal_connect_swapped (self->undo_toast, "dismissed",
 *                               G_CALLBACK (dismissed_cb), self);
 * 
 *     adw_toast_overlay_add_toast (self->toast_overlay, self->undo_toast);
 * 
 *     return;
 *   }
 * 
 *   title =
 *     g_strdup_printf (ngettext ("<span font_features='tnum=1'>%d</span> item deleted",
 *                                "<span font_features='tnum=1'>%d</span> items deleted",
 *                                n_items), n_items);
 * 
 *   adw_toast_set_title (self->undo_toast, title);
 * }
 * 
 * static void
 * my_window_class_init (MyWindowClass *klass)
 * {
 *   GtkWidgetClass *widget_class = GTK_WIDGET_CLASS (klass);
 * 
 *   gtk_widget_class_install_action (widget_class, "toast.undo", NULL, toast_undo_cb);
 * }
 * ```
 * 
 * <picture>
 *   <source srcset="toast-undo-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="toast-undo.png" alt="toast-undo">
 * </picture>
 * @class 
 */
export class Toast extends GObject.Object {

    // Own properties of Adw-1.Adw.Toast

    static name: string

    // Constructors of Adw-1.Adw.Toast

    constructor(config?: Toast.ConstructorProperties) 
    /**
     * Creates a new `AdwToast`.
     * 
     * The toast will use `title` as its title.
     * 
     * `title` can be marked up with the Pango text markup language.
     * @constructor 
     * @param title the title to be displayed
     */
    constructor(title: string) 
    /**
     * Creates a new `AdwToast`.
     * 
     * The toast will use `title` as its title.
     * 
     * `title` can be marked up with the Pango text markup language.
     * @constructor 
     * @param title the title to be displayed
     */
    static new(title: string): Toast
    _init(config?: Toast.ConstructorProperties): void
}

export module ToastOverlay {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ToastOverlay

        /**
         * The child widget.
         */
        child?: Gtk.Widget | null
    }

}

export interface ToastOverlay extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.ToastOverlay

    /**
     * The child widget.
     */
    child: Gtk.Widget

    // Owm methods of Adw-1.Adw.ToastOverlay

    /**
     * Displays `toast`.
     * 
     * Only one toast can be shown at a time; if a toast is already being displayed,
     * either `toast` or the original toast will be placed in a queue, depending on
     * the priority of `toast`. See [property`Toast:`priority].
     * @param toast a toast
     */
    addToast(toast: Toast): void
    /**
     * Gets the child widget of `self`.
     */
    getChild(): Gtk.Widget | null
    /**
     * Sets the child widget of `self`.
     * @param child the child widget
     */
    setChild(child: Gtk.Widget | null): void

    // Class property signals of Adw-1.Adw.ToastOverlay

    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A widget showing toasts above its content.
 * 
 * <picture>
 *   <source srcset="toast-overlay-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="toast-overlay.png" alt="toast-overlay">
 * </picture>
 * 
 * Toasts can be shown with [method`ToastOverlay`.add_toast].
 * 
 * See [class`Toast]` for details.
 * 
 * ## CSS nodes
 * 
 * ```
 * toastoverlay
 * ├── [child]
 * ├── toast
 * ┊   ├── widget
 * ┊   │   ├── [label.heading]
 *     │   ╰── [custom title]
 *     ├── [button]
 *     ╰── button.circular.flat
 * ```
 * 
 * `AdwToastOverlay`'s CSS node is called `toastoverlay`. It contains the child,
 * as well as zero or more `toast` subnodes.
 * 
 * Each of the `toast` nodes contains a `widget` subnode, optionally a `button`
 * subnode, and another `button` subnode with `.circular` and `.flat` style
 * classes.
 * 
 * The `widget` subnode contains a `label` subnode with the `.heading` style
 * class, or a custom widget provided by the application.
 * 
 * ## Accessibility
 * 
 * `AdwToastOverlay` uses the `GTK_ACCESSIBLE_ROLE_TAB_GROUP` role.
 * @class 
 */
export class ToastOverlay extends Gtk.Widget {

    // Own properties of Adw-1.Adw.ToastOverlay

    static name: string

    // Constructors of Adw-1.Adw.ToastOverlay

    constructor(config?: ToastOverlay.ConstructorProperties) 
    /**
     * Creates a new `AdwToastOverlay`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwToastOverlay`.
     * @constructor 
     */
    static new(): ToastOverlay
    _init(config?: ToastOverlay.ConstructorProperties): void
}

export module ViewStack {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ViewStack

        /**
         * Whether the stack allocates the same width for all children.
         * 
         * If it's `FALSE`, the stack may change width when a different child becomes
         * visible.
         */
        hhomogeneous?: boolean | null
        /**
         * Whether the stack allocates the same height for all children.
         * 
         * If it's `FALSE`, the stack may change height when a different child becomes
         * visible.
         */
        vhomogeneous?: boolean | null
        /**
         * The widget currently visible in the stack.
         */
        visibleChild?: Gtk.Widget | null
        /**
         * The name of the widget currently visible in the stack.
         * 
         * See [property`ViewStack:`visible-child].
         */
        visibleChildName?: string | null
    }

}

export interface ViewStack extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.ViewStack

    /**
     * Whether the stack allocates the same width for all children.
     * 
     * If it's `FALSE`, the stack may change width when a different child becomes
     * visible.
     */
    hhomogeneous: boolean
    /**
     * A selection model with the stack's pages.
     * 
     * This can be used to keep an up-to-date view. The model also implements
     * [iface`Gtk`.SelectionModel] and can be used to track and change the visible
     * page.
     */
    readonly pages: Gtk.SelectionModel
    /**
     * Whether the stack allocates the same height for all children.
     * 
     * If it's `FALSE`, the stack may change height when a different child becomes
     * visible.
     */
    vhomogeneous: boolean
    /**
     * The widget currently visible in the stack.
     */
    visibleChild: Gtk.Widget
    /**
     * The name of the widget currently visible in the stack.
     * 
     * See [property`ViewStack:`visible-child].
     */
    visibleChildName: string

    // Owm methods of Adw-1.Adw.ViewStack

    /**
     * Adds a child to `self`.
     * @param child the widget to add
     */
    add(child: Gtk.Widget): ViewStackPage
    /**
     * Adds a child to `self`.
     * 
     * The child is identified by the `name`.
     * @param child the widget to add
     * @param name the name for `child`
     */
    addNamed(child: Gtk.Widget, name: string | null): ViewStackPage
    /**
     * Adds a child to `self`.
     * 
     * The child is identified by the `name`. The `title` will be used by
     * [class`ViewSwitcher]` to represent `child,` so it should be short.
     * @param child the widget to add
     * @param name the name for `child`
     * @param title a human-readable title for `child`
     */
    addTitled(child: Gtk.Widget, name: string | null, title: string): ViewStackPage
    /**
     * Finds the child with `name` in `self`.
     * @param name the name of the child to find
     */
    getChildByName(name: string): Gtk.Widget | null
    /**
     * Gets whether `self` is horizontally homogeneous.
     */
    getHhomogeneous(): boolean
    /**
     * Gets the [class`ViewStackPage]` object for `child`.
     * @param child a child of `self`
     */
    getPage(child: Gtk.Widget): ViewStackPage
    /**
     * Returns a [iface`Gio`.ListModel] that contains the pages of the stack.
     * 
     * This can be used to keep an up-to-date view. The model also implements
     * [iface`Gtk`.SelectionModel] and can be used to track and change the visible
     * page.
     */
    getPages(): Gtk.SelectionModel
    /**
     * Gets whether `self` is vertically homogeneous.
     */
    getVhomogeneous(): boolean
    /**
     * Gets the currently visible child of `self,` .
     */
    getVisibleChild(): Gtk.Widget | null
    /**
     * Returns the name of the currently visible child of `self`.
     */
    getVisibleChildName(): string | null
    /**
     * Removes a child widget from `self`.
     * @param child the child to remove
     */
    remove(child: Gtk.Widget): void
    /**
     * Sets `self` to be horizontally homogeneous or not.
     * @param hhomogeneous whether to make `self` horizontally homogeneous
     */
    setHhomogeneous(hhomogeneous: boolean): void
    /**
     * Sets `self` to be vertically homogeneous or not.
     * @param vhomogeneous whether to make `self` vertically homogeneous
     */
    setVhomogeneous(vhomogeneous: boolean): void
    /**
     * Makes `child` the visible child of `self`.
     * @param child a child of `self`
     */
    setVisibleChild(child: Gtk.Widget): void
    /**
     * Makes the child with `name` visible.
     * @param name the name of the child
     */
    setVisibleChildName(name: string): void

    // Class property signals of Adw-1.Adw.ViewStack

    connect(sigName: "notify::hhomogeneous", callback: any): number
    on(sigName: "notify::hhomogeneous", callback: any): number
    once(sigName: "notify::hhomogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hhomogeneous", ...args: any[]): void
    connect(sigName: "notify::pages", callback: any): number
    on(sigName: "notify::pages", callback: any): number
    once(sigName: "notify::pages", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pages", ...args: any[]): void
    connect(sigName: "notify::vhomogeneous", callback: any): number
    on(sigName: "notify::vhomogeneous", callback: any): number
    once(sigName: "notify::vhomogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vhomogeneous", ...args: any[]): void
    connect(sigName: "notify::visible-child", callback: any): number
    on(sigName: "notify::visible-child", callback: any): number
    once(sigName: "notify::visible-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible-child", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A view container for [class`ViewSwitcher]`.
 * 
 * `AdwViewStack` is a container which only shows one page at a time.
 * It is typically used to hold an application's main views.
 * 
 * It doesn't provide a way to transition between pages.
 * Instead, a separate widget such as [class`ViewSwitcher]` can be used with
 * `AdwViewStack` to provide this functionality.
 * 
 * `AdwViewStack` pages can have a title, an icon, an attention request, and a
 * numbered badge that [class`ViewSwitcher]` will use to let users identify which
 * page is which. Set them using the [property`ViewStackPage:`title],
 * [property`ViewStackPage:`icon-name],
 * [property`ViewStackPage:`needs-attention], and
 * [property`ViewStackPage:`badge-number] properties.
 * 
 * Unlike [class`Gtk`.Stack], transitions between views are not animated.
 * 
 * `AdwViewStack` maintains a [class`ViewStackPage]` object for each added child,
 * which holds additional per-child properties. You obtain the
 * [class`ViewStackPage]` for a child with [method`ViewStack`.get_page] and you
 * can obtain a [iface`Gtk`.SelectionModel] containing all the pages with
 * [method`ViewStack`.get_pages].
 * 
 * ## AdwViewStack as GtkBuildable
 * 
 * To set child-specific properties in a .ui file, create
 * [class`ViewStackPage]` objects explicitly, and set the child widget as a
 * property on it:
 * 
 * ```xml
 *   <object class="AdwViewStack" id="stack">
 *     <child>
 *       <object class="AdwViewStackPage">
 *         <property name="name">overview</property>
 *         <property name="title">Overview</property>
 *         <property name="child">
 *           <object class="AdwStatusPage">
 *             <property name="title">Welcome!</property>
 *           </object>
 *         </property>
 *       </object>
 *     </child>
 *   </object>
 * ```
 * 
 * ## CSS nodes
 * 
 * `AdwViewStack` has a single CSS node named `stack`.
 * @class 
 */
export class ViewStack extends Gtk.Widget {

    // Own properties of Adw-1.Adw.ViewStack

    static name: string

    // Constructors of Adw-1.Adw.ViewStack

    constructor(config?: ViewStack.ConstructorProperties) 
    /**
     * Creates a new `AdwViewStack`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwViewStack`.
     * @constructor 
     */
    static new(): ViewStack
    _init(config?: ViewStack.ConstructorProperties): void
}

export module ViewStackPage {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ViewStackPage

        /**
         * A number associated with the page.
         * 
         * [class`ViewSwitcher]` can display it as a badge next to the page icon. It is
         * commonly used to display a number of unread items within the page.
         * 
         * It can be used together with [property`ViewStack{`age}:needs-attention].
         */
        badgeNumber?: number | null
        /**
         * The child of the page.
         */
        child?: Gtk.Widget | null
        /**
         * The icon name of the child page.
         */
        iconName?: string | null
        /**
         * The name of the child page.
         */
        name?: string | null
        /**
         * Whether the page requires the user attention.
         * 
         * [class`ViewSwitcher]` will display it as a dot next to the page icon.
         */
        needsAttention?: boolean | null
        /**
         * The title of the child page.
         */
        title?: string | null
        /**
         * Whether an embedded underline in the title indicates a mnemonic.
         */
        useUnderline?: boolean | null
        /**
         * Whether this page is visible.
         * 
         * This is independent from the [property`Gtk`.Widget:visible] property of
         * [property`ViewStackPage:`child].
         */
        visible?: boolean | null
    }

}

export interface ViewStackPage {

    // Own properties of Adw-1.Adw.ViewStackPage

    /**
     * A number associated with the page.
     * 
     * [class`ViewSwitcher]` can display it as a badge next to the page icon. It is
     * commonly used to display a number of unread items within the page.
     * 
     * It can be used together with [property`ViewStack{`age}:needs-attention].
     */
    badgeNumber: number
    /**
     * The child of the page.
     */
    readonly child: Gtk.Widget
    /**
     * The icon name of the child page.
     */
    iconName: string
    /**
     * The name of the child page.
     */
    name: string
    /**
     * Whether the page requires the user attention.
     * 
     * [class`ViewSwitcher]` will display it as a dot next to the page icon.
     */
    needsAttention: boolean
    /**
     * The title of the child page.
     */
    title: string
    /**
     * Whether an embedded underline in the title indicates a mnemonic.
     */
    useUnderline: boolean
    /**
     * Whether this page is visible.
     * 
     * This is independent from the [property`Gtk`.Widget:visible] property of
     * [property`ViewStackPage:`child].
     */
    visible: boolean

    // Owm methods of Adw-1.Adw.ViewStackPage

    /**
     * Gets the badge number for this page.
     */
    getBadgeNumber(): number
    /**
     * Gets the stack child to which `self` belongs.
     */
    getChild(): Gtk.Widget
    /**
     * Gets the icon name of the page.
     */
    getIconName(): string | null
    /**
     * Gets the name of the page.
     */
    getName(): string | null
    /**
     * Gets whether the page is marked as “needs attention”.
     */
    getNeedsAttention(): boolean
    /**
     * Gets the page title.
     */
    getTitle(): string | null
    /**
     * Gets whether underlines in the page title indicate mnemonics.
     */
    getUseUnderline(): boolean
    /**
     * Gets whether `self` is visible in its `AdwViewStack`.
     * 
     * This is independent from the [property`Gtk`.Widget:visible]
     * property of its widget.
     */
    getVisible(): boolean
    /**
     * Sets the badge number for this page.
     * @param badgeNumber the new value to set
     */
    setBadgeNumber(badgeNumber: number): void
    /**
     * Sets the icon name of the page.
     * @param iconName the icon name
     */
    setIconName(iconName: string | null): void
    /**
     * Sets the name of the page.
     * @param name the page name
     */
    setName(name: string | null): void
    /**
     * Sets whether the page is marked as “needs attention”.
     * @param needsAttention the new value to set
     */
    setNeedsAttention(needsAttention: boolean): void
    /**
     * Sets the page title.
     * @param title the page title
     */
    setTitle(title: string | null): void
    /**
     * Sets whether underlines in the page title indicate mnemonics.
     * @param useUnderline the new value to set
     */
    setUseUnderline(useUnderline: boolean): void
    /**
     * Sets whether `page` is visible in its `AdwViewStack`.
     * @param visible whether `self` is visible
     */
    setVisible(visible: boolean): void

    // Class property signals of Adw-1.Adw.ViewStackPage

    connect(sigName: "notify::badge-number", callback: any): number
    on(sigName: "notify::badge-number", callback: any): number
    once(sigName: "notify::badge-number", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::badge-number", ...args: any[]): void
    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::needs-attention", callback: any): number
    on(sigName: "notify::needs-attention", callback: any): number
    once(sigName: "notify::needs-attention", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::needs-attention", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: any): number
    on(sigName: "notify::use-underline", callback: any): number
    once(sigName: "notify::use-underline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
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

/**
 * An auxiliary class used by [class`ViewStack]`.
 * @class 
 */
export class ViewStackPage extends GObject.Object {

    // Own properties of Adw-1.Adw.ViewStackPage

    static name: string

    // Constructors of Adw-1.Adw.ViewStackPage

    constructor(config?: ViewStackPage.ConstructorProperties) 
    _init(config?: ViewStackPage.ConstructorProperties): void
}

export module ViewSwitcher {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ViewSwitcher

        /**
         * The policy to determine which mode to use.
         */
        policy?: ViewSwitcherPolicy | null
        /**
         * The stack the view switcher controls.
         */
        stack?: ViewStack | null
    }

}

export interface ViewSwitcher extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.ViewSwitcher

    /**
     * The policy to determine which mode to use.
     */
    policy: ViewSwitcherPolicy
    /**
     * The stack the view switcher controls.
     */
    stack: ViewStack

    // Owm methods of Adw-1.Adw.ViewSwitcher

    /**
     * Gets the policy of `self`.
     */
    getPolicy(): ViewSwitcherPolicy
    /**
     * Gets the stack controlled by `self`.
     */
    getStack(): ViewStack | null
    /**
     * Sets the policy of `self`.
     * @param policy the new policy
     */
    setPolicy(policy: ViewSwitcherPolicy): void
    /**
     * Sets the stack controlled by `self`.
     * @param stack a stack
     */
    setStack(stack: ViewStack | null): void

    // Class property signals of Adw-1.Adw.ViewSwitcher

    connect(sigName: "notify::policy", callback: any): number
    on(sigName: "notify::policy", callback: any): number
    once(sigName: "notify::policy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::policy", ...args: any[]): void
    connect(sigName: "notify::stack", callback: any): number
    on(sigName: "notify::stack", callback: any): number
    once(sigName: "notify::stack", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stack", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An adaptive view switcher.
 * 
 * <picture>
 *   <source srcset="view-switcher-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="view-switcher.png" alt="view-switcher">
 * </picture>
 * 
 * An adaptive view switcher designed to switch between multiple views
 * contained in a [class`ViewStack]` in a similar fashion to
 * [class`Gtk`.StackSwitcher].
 * 
 * `AdwViewSwitcher` buttons always have an icon and a label. They can be
 * displayed side by side, or icon on top of the label. This can be controlled
 * via the [property`ViewSwitcher:`policy] property.
 * 
 * Most applications should be using [class`ViewSwitcherBar]` and
 * [class`ViewSwitcherTitle]`.
 * 
 * ## CSS nodes
 * 
 * `AdwViewSwitcher` has a single CSS node with name `viewswitcher`. It can have
 * the style classes `.wide` and `.narrow`, matching its policy.
 * 
 * ## Accessibility
 * 
 * `AdwViewSwitcher` uses the `GTK_ACCESSIBLE_ROLE_TAB_LIST` role and uses the
 * `GTK_ACCESSIBLE_ROLE_TAB` for its buttons.
 * @class 
 */
export class ViewSwitcher extends Gtk.Widget {

    // Own properties of Adw-1.Adw.ViewSwitcher

    static name: string

    // Constructors of Adw-1.Adw.ViewSwitcher

    constructor(config?: ViewSwitcher.ConstructorProperties) 
    /**
     * Creates a new `AdwViewSwitcher`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwViewSwitcher`.
     * @constructor 
     */
    static new(): ViewSwitcher
    _init(config?: ViewSwitcher.ConstructorProperties): void
}

export module ViewSwitcherBar {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ViewSwitcherBar

        /**
         * Whether the bar should be revealed or hidden.
         */
        reveal?: boolean | null
        /**
         * The stack the view switcher controls.
         */
        stack?: ViewStack | null
    }

}

export interface ViewSwitcherBar extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.ViewSwitcherBar

    /**
     * Whether the bar should be revealed or hidden.
     */
    reveal: boolean
    /**
     * The stack the view switcher controls.
     */
    stack: ViewStack

    // Owm methods of Adw-1.Adw.ViewSwitcherBar

    /**
     * Gets whether `self` should be revealed or hidden.
     */
    getReveal(): boolean
    /**
     * Gets the stack controlled by `self`.
     */
    getStack(): ViewStack | null
    /**
     * Sets whether `self` should be revealed or hidden.
     * @param reveal whether to reveal `self`
     */
    setReveal(reveal: boolean): void
    /**
     * Sets the stack controlled by `self`.
     * @param stack a stack
     */
    setStack(stack: ViewStack | null): void

    // Class property signals of Adw-1.Adw.ViewSwitcherBar

    connect(sigName: "notify::reveal", callback: any): number
    on(sigName: "notify::reveal", callback: any): number
    once(sigName: "notify::reveal", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reveal", ...args: any[]): void
    connect(sigName: "notify::stack", callback: any): number
    on(sigName: "notify::stack", callback: any): number
    once(sigName: "notify::stack", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stack", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A view switcher action bar.
 * 
 * <picture>
 *   <source srcset="view-switcher-bar-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="view-switcher-bar.png" alt="view-switcher-bar">
 * </picture>
 * 
 * An action bar letting you switch between multiple views contained in a
 * [class`ViewStack]`, via an [class`ViewSwitcher]`. It is designed to be put at
 * the bottom of a window and to be revealed only on really narrow windows, e.g.
 * on mobile phones. It can't be revealed if there are less than two pages.
 * 
 * `AdwViewSwitcherBar` is intended to be used together with
 * [class`ViewSwitcherTitle]`.
 * 
 * A common use case is to bind the [property`ViewSwitcherBar:`reveal] property
 * to [property`ViewSwitcherTitle:`title-visible] to automatically reveal the
 * view switcher bar when the title label is displayed in place of the view
 * switcher, as follows:
 * 
 * ```xml
 * <object class="GtkWindow">
 *   <child type="titlebar">
 *     <object class="AdwHeaderBar">
 *       <property name="centering-policy">strict</property>
 *       <child type="title">
 *         <object class="AdwViewSwitcherTitle" id="title">
 *           <property name="stack">stack</property>
 *         </object>
 *       </child>
 *     </object>
 *   </child>
 *   <child>
 *     <object class="GtkBox">
 *       <property name="orientation">vertical</property>
 *       <child>
 *         <object class="AdwViewStack" id="stack"/>
 *       </child>
 *       <child>
 *         <object class="AdwViewSwitcherBar">
 *           <property name="stack">stack</property>
 *           <binding name="reveal">
 *             <lookup name="title-visible">title</lookup>
 *           </binding>
 *         </object>
 *       </child>
 *     </object>
 *   </child>
 * </object>
 * ```
 * 
 * ## CSS nodes
 * 
 * `AdwViewSwitcherBar` has a single CSS node with name` viewswitcherbar`.
 * @class 
 */
export class ViewSwitcherBar extends Gtk.Widget {

    // Own properties of Adw-1.Adw.ViewSwitcherBar

    static name: string

    // Constructors of Adw-1.Adw.ViewSwitcherBar

    constructor(config?: ViewSwitcherBar.ConstructorProperties) 
    /**
     * Creates a new `AdwViewSwitcherBar`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwViewSwitcherBar`.
     * @constructor 
     */
    static new(): ViewSwitcherBar
    _init(config?: ViewSwitcherBar.ConstructorProperties): void
}

export module ViewSwitcherTitle {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.ViewSwitcherTitle

        /**
         * The stack the view switcher controls.
         */
        stack?: ViewStack | null
        /**
         * The subtitle to display.
         * 
         * The subtitle should give a user additional details.
         */
        subtitle?: string | null
        /**
         * The title to display.
         * 
         * The title should give a user additional details. A good title should not
         * include the application name.
         */
        title?: string | null
        /**
         * Whether the view switcher is enabled.
         * 
         * If it is disabled, the title will be displayed instead. This allows to
         * programmatically hide the view switcher even if it fits in the available
         * space.
         * 
         * This can be used e.g. to ensure the view switcher is hidden below a certain
         * window width, or any other constraint you find suitable.
         */
        viewSwitcherEnabled?: boolean | null
    }

}

export interface ViewSwitcherTitle extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.ViewSwitcherTitle

    /**
     * The stack the view switcher controls.
     */
    stack: ViewStack
    /**
     * The subtitle to display.
     * 
     * The subtitle should give a user additional details.
     */
    subtitle: string
    /**
     * The title to display.
     * 
     * The title should give a user additional details. A good title should not
     * include the application name.
     */
    title: string
    /**
     * Whether the title is currently visible.
     * 
     * If the title is visible, it means the view switcher is hidden an it may be
     * wanted to show an alternative switcher, e.g. a [class`ViewSwitcherBar]`.
     */
    readonly titleVisible: boolean
    /**
     * Whether the view switcher is enabled.
     * 
     * If it is disabled, the title will be displayed instead. This allows to
     * programmatically hide the view switcher even if it fits in the available
     * space.
     * 
     * This can be used e.g. to ensure the view switcher is hidden below a certain
     * window width, or any other constraint you find suitable.
     */
    viewSwitcherEnabled: boolean

    // Owm methods of Adw-1.Adw.ViewSwitcherTitle

    /**
     * Gets the stack controlled by `self`.
     */
    getStack(): ViewStack | null
    /**
     * Gets the subtitle of `self`.
     */
    getSubtitle(): string
    /**
     * Gets the title of `self`.
     */
    getTitle(): string
    /**
     * Gets whether the title of `self` is currently visible.
     */
    getTitleVisible(): boolean
    /**
     * Gets whether `self'`s view switcher is enabled.
     */
    getViewSwitcherEnabled(): boolean
    /**
     * Sets the stack controlled by `self`.
     * @param stack a stack
     */
    setStack(stack: ViewStack | null): void
    /**
     * Sets the subtitle of `self`.
     * @param subtitle a subtitle
     */
    setSubtitle(subtitle: string): void
    /**
     * Sets the title of `self`.
     * @param title a title
     */
    setTitle(title: string): void
    /**
     * Sets whether `self'`s view switcher is enabled.
     * @param enabled whether the view switcher is enabled
     */
    setViewSwitcherEnabled(enabled: boolean): void

    // Class property signals of Adw-1.Adw.ViewSwitcherTitle

    connect(sigName: "notify::stack", callback: any): number
    on(sigName: "notify::stack", callback: any): number
    once(sigName: "notify::stack", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stack", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: any): number
    on(sigName: "notify::subtitle", callback: any): number
    once(sigName: "notify::subtitle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::title-visible", callback: any): number
    on(sigName: "notify::title-visible", callback: any): number
    once(sigName: "notify::title-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title-visible", ...args: any[]): void
    connect(sigName: "notify::view-switcher-enabled", callback: any): number
    on(sigName: "notify::view-switcher-enabled", callback: any): number
    once(sigName: "notify::view-switcher-enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::view-switcher-enabled", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A view switcher title.
 * 
 * <picture>
 *   <source srcset="view-switcher-title-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="view-switcher-title.png" alt="view-switcher-title">
 * </picture>
 * 
 * A widget letting you switch between multiple views contained by a
 * [class`ViewStack]` via an [class`ViewSwitcher]`.
 * 
 * It is designed to be used as the title widget of a [class`HeaderBar]`, and
 * will display the window's title when the window is too narrow to fit the view
 * switcher e.g. on mobile phones, or if there are less than two views.
 * 
 * In order to center the title in narrow windows, the header bar should have
 * [property`HeaderBar:`centering-policy] set to
 * `ADW_CENTERING_POLICY_STRICT`.
 * 
 * `AdwViewSwitcherTitle` is intended to be used together with
 * [class`ViewSwitcherBar]`.
 * 
 * A common use case is to bind the [property`ViewSwitcherBar:`reveal] property
 * to [property`ViewSwitcherTitle:`title-visible] to automatically reveal the
 * view switcher bar when the title label is displayed in place of the view
 * switcher, as follows:
 * 
 * ```xml
 * <object class="GtkWindow">
 *   <child type="titlebar">
 *     <object class="AdwHeaderBar">
 *       <property name="centering-policy">strict</property>
 *       <child type="title">
 *         <object class="AdwViewSwitcherTitle" id="title">
 *           <property name="stack">stack</property>
 *         </object>
 *       </child>
 *     </object>
 *   </child>
 *   <child>
 *     <object class="GtkBox">
 *       <property name="orientation">vertical</property>
 *       <child>
 *         <object class="AdwViewStack" id="stack"/>
 *       </child>
 *       <child>
 *         <object class="AdwViewSwitcherBar">
 *           <property name="stack">stack</property>
 *           <binding name="reveal">
 *             <lookup name="title-visible">title</lookup>
 *           </binding>
 *         </object>
 *       </child>
 *     </object>
 *   </child>
 * </object>
 * ```
 * 
 * ## CSS nodes
 * 
 * `AdwViewSwitcherTitle` has a single CSS node with name `viewswitchertitle`.
 * @class 
 */
export class ViewSwitcherTitle extends Gtk.Widget {

    // Own properties of Adw-1.Adw.ViewSwitcherTitle

    static name: string

    // Constructors of Adw-1.Adw.ViewSwitcherTitle

    constructor(config?: ViewSwitcherTitle.ConstructorProperties) 
    /**
     * Creates a new `AdwViewSwitcherTitle`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwViewSwitcherTitle`.
     * @constructor 
     */
    static new(): ViewSwitcherTitle
    _init(config?: ViewSwitcherTitle.ConstructorProperties): void
}

export module Window {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Native.ConstructorProperties, Gtk.Root.ConstructorProperties, Gtk.ShortcutManager.ConstructorProperties, Gtk.Window.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.Window

        /**
         * The content widget.
         */
        content?: Gtk.Widget | null
    }

}

export interface Window extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Native, Gtk.Root, Gtk.ShortcutManager {

    // Own properties of Adw-1.Adw.Window

    /**
     * The content widget.
     */
    content: Gtk.Widget

    // Own fields of Adw-1.Adw.Window

    parentInstance: any

    // Owm methods of Adw-1.Adw.Window

    /**
     * Gets the content widget of `self`.
     * 
     * This method should always be used instead of [method`Gtk`.Window.get_child].
     */
    getContent(): Gtk.Widget | null
    /**
     * Sets the content widget of `self`.
     * 
     * This method should always be used instead of [method`Gtk`.Window.set_child].
     * @param content the content widget
     */
    setContent(content: Gtk.Widget | null): void

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

    // Class property signals of Adw-1.Adw.Window

    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A freeform window.
 * 
 * <picture>
 *   <source srcset="window-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="window.png" alt="window">
 * </picture>
 * 
 * The `AdwWindow` widget is a subclass of [class`Gtk`.Window] which has no
 * titlebar area. It means [class`Gtk`.HeaderBar] can be used as follows:
 * 
 * ```xml
 * <object class="AdwWindow">
 *   <property name="content">
 *     <object class="GtkBox">
 *       <property name="orientation">vertical</property>
 *       <child>
 *         <object class="GtkHeaderBar"/>
 *       </child>
 *       <child>
 *         <!-- ... -->
 *       </child>
 *     </object>
 *   </property>
 * </object>
 * ```
 * 
 * Using [method`Gtk`.Window.get_titlebar] and [method`Gtk`.Window.set_titlebar]
 * is not supported and will result in a crash.
 * @class 
 */
export class Window extends Gtk.Window {

    // Own properties of Adw-1.Adw.Window

    static name: string

    // Constructors of Adw-1.Adw.Window

    constructor(config?: Window.ConstructorProperties) 
    /**
     * Creates a new `AdwWindow`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `AdwWindow`.
     * @constructor 
     */
    static new(): Window
    _init(config?: Window.ConstructorProperties): void
}

export module WindowTitle {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Adw-1.Adw.WindowTitle

        /**
         * The subtitle to display.
         * 
         * The subtitle should give a user additional details.
         */
        subtitle?: string | null
        /**
         * The title to display.
         * 
         * The title typically identifies the current view or content item, and
         * generally does not use the application name.
         */
        title?: string | null
    }

}

export interface WindowTitle extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Adw-1.Adw.WindowTitle

    /**
     * The subtitle to display.
     * 
     * The subtitle should give a user additional details.
     */
    subtitle: string
    /**
     * The title to display.
     * 
     * The title typically identifies the current view or content item, and
     * generally does not use the application name.
     */
    title: string

    // Owm methods of Adw-1.Adw.WindowTitle

    /**
     * Gets the subtitle of `self`.
     */
    getSubtitle(): string
    /**
     * Gets the title of `self`.
     */
    getTitle(): string
    /**
     * Sets the subtitle of `self`.
     * @param subtitle a subtitle
     */
    setSubtitle(subtitle: string): void
    /**
     * Sets the title of `self`.
     * @param title a title
     */
    setTitle(title: string): void

    // Class property signals of Adw-1.Adw.WindowTitle

    connect(sigName: "notify::subtitle", callback: any): number
    on(sigName: "notify::subtitle", callback: any): number
    once(sigName: "notify::subtitle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A helper widget for setting a window's title and subtitle.
 * 
 * <picture>
 *   <source srcset="window-title-dark.png" media="(prefers-color-scheme: dark)">
 *   <img src="window-title.png" alt="window-title">
 * </picture>
 * 
 * `AdwWindowTitle` shows a title and subtitle. It's intended to be used as the
 * title child of [class`Gtk`.HeaderBar] or [class`HeaderBar]`.
 * 
 * ## CSS nodes
 * 
 * `AdwWindowTitle` has a single CSS node with name `windowtitle`.
 * @class 
 */
export class WindowTitle extends Gtk.Widget {

    // Own properties of Adw-1.Adw.WindowTitle

    static name: string

    // Constructors of Adw-1.Adw.WindowTitle

    constructor(config?: WindowTitle.ConstructorProperties) 
    /**
     * Creates a new `AdwWindowTitle`.
     * @constructor 
     * @param title a title
     * @param subtitle a subtitle
     */
    constructor(title: string, subtitle: string) 
    /**
     * Creates a new `AdwWindowTitle`.
     * @constructor 
     * @param title a title
     * @param subtitle a subtitle
     */
    static new(title: string, subtitle: string): WindowTitle
    _init(config?: WindowTitle.ConstructorProperties): void
}

export interface ActionRowClass {

    // Own fields of Adw-1.Adw.ActionRowClass

    /**
     * The parent class
     * @field 
     */
    parentClass: PreferencesRowClass
    activate: (self: ActionRow) => void
}

export abstract class ActionRowClass {

    // Own properties of Adw-1.Adw.ActionRowClass

    static name: string
}

export interface AnimationClass {
}

export abstract class AnimationClass {

    // Own properties of Adw-1.Adw.AnimationClass

    static name: string
}

export interface AnimationTargetClass {
}

export abstract class AnimationTargetClass {

    // Own properties of Adw-1.Adw.AnimationTargetClass

    static name: string
}

export interface ApplicationClass {

    // Own fields of Adw-1.Adw.ApplicationClass

    /**
     * The parent class
     * @field 
     */
    parentClass: Gtk.ApplicationClass
}

export abstract class ApplicationClass {

    // Own properties of Adw-1.Adw.ApplicationClass

    static name: string
}

export interface ApplicationWindowClass {

    // Own fields of Adw-1.Adw.ApplicationWindowClass

    parentClass: Gtk.ApplicationWindowClass
}

export abstract class ApplicationWindowClass {

    // Own properties of Adw-1.Adw.ApplicationWindowClass

    static name: string
}

export interface AvatarClass {

    // Own fields of Adw-1.Adw.AvatarClass

    parentClass: Gtk.WidgetClass
}

export abstract class AvatarClass {

    // Own properties of Adw-1.Adw.AvatarClass

    static name: string
}

export interface BinClass {

    // Own fields of Adw-1.Adw.BinClass

    parentClass: Gtk.WidgetClass
}

export abstract class BinClass {

    // Own properties of Adw-1.Adw.BinClass

    static name: string
}

export interface ButtonContentClass {

    // Own fields of Adw-1.Adw.ButtonContentClass

    parentClass: Gtk.WidgetClass
}

export abstract class ButtonContentClass {

    // Own properties of Adw-1.Adw.ButtonContentClass

    static name: string
}

export interface CallbackAnimationTargetClass {
}

export abstract class CallbackAnimationTargetClass {

    // Own properties of Adw-1.Adw.CallbackAnimationTargetClass

    static name: string
}

export interface CarouselClass {

    // Own fields of Adw-1.Adw.CarouselClass

    parentClass: Gtk.WidgetClass
}

export abstract class CarouselClass {

    // Own properties of Adw-1.Adw.CarouselClass

    static name: string
}

export interface CarouselIndicatorDotsClass {

    // Own fields of Adw-1.Adw.CarouselIndicatorDotsClass

    parentClass: Gtk.WidgetClass
}

export abstract class CarouselIndicatorDotsClass {

    // Own properties of Adw-1.Adw.CarouselIndicatorDotsClass

    static name: string
}

export interface CarouselIndicatorLinesClass {

    // Own fields of Adw-1.Adw.CarouselIndicatorLinesClass

    parentClass: Gtk.WidgetClass
}

export abstract class CarouselIndicatorLinesClass {

    // Own properties of Adw-1.Adw.CarouselIndicatorLinesClass

    static name: string
}

export interface ClampClass {

    // Own fields of Adw-1.Adw.ClampClass

    parentClass: Gtk.WidgetClass
}

export abstract class ClampClass {

    // Own properties of Adw-1.Adw.ClampClass

    static name: string
}

export interface ClampLayoutClass {

    // Own fields of Adw-1.Adw.ClampLayoutClass

    parentClass: Gtk.LayoutManagerClass
}

export abstract class ClampLayoutClass {

    // Own properties of Adw-1.Adw.ClampLayoutClass

    static name: string
}

export interface ClampScrollableClass {

    // Own fields of Adw-1.Adw.ClampScrollableClass

    parentClass: Gtk.WidgetClass
}

export abstract class ClampScrollableClass {

    // Own properties of Adw-1.Adw.ClampScrollableClass

    static name: string
}

export interface ComboRowClass {

    // Own fields of Adw-1.Adw.ComboRowClass

    /**
     * The parent class
     * @field 
     */
    parentClass: ActionRowClass
}

export abstract class ComboRowClass {

    // Own properties of Adw-1.Adw.ComboRowClass

    static name: string
}

export interface EnumListItemClass {

    // Own fields of Adw-1.Adw.EnumListItemClass

    parentClass: GObject.ObjectClass
}

export abstract class EnumListItemClass {

    // Own properties of Adw-1.Adw.EnumListItemClass

    static name: string
}

export interface EnumListModelClass {

    // Own fields of Adw-1.Adw.EnumListModelClass

    parentClass: GObject.ObjectClass
}

export abstract class EnumListModelClass {

    // Own properties of Adw-1.Adw.EnumListModelClass

    static name: string
}

export interface ExpanderRowClass {

    // Own fields of Adw-1.Adw.ExpanderRowClass

    /**
     * The parent class
     * @field 
     */
    parentClass: PreferencesRowClass
}

export abstract class ExpanderRowClass {

    // Own properties of Adw-1.Adw.ExpanderRowClass

    static name: string
}

export interface FlapClass {

    // Own fields of Adw-1.Adw.FlapClass

    parentClass: Gtk.WidgetClass
}

export abstract class FlapClass {

    // Own properties of Adw-1.Adw.FlapClass

    static name: string
}

export interface HeaderBarClass {

    // Own fields of Adw-1.Adw.HeaderBarClass

    parentClass: Gtk.WidgetClass
}

export abstract class HeaderBarClass {

    // Own properties of Adw-1.Adw.HeaderBarClass

    static name: string
}

export interface LeafletClass {

    // Own fields of Adw-1.Adw.LeafletClass

    parentClass: Gtk.WidgetClass
}

export abstract class LeafletClass {

    // Own properties of Adw-1.Adw.LeafletClass

    static name: string
}

export interface LeafletPageClass {

    // Own fields of Adw-1.Adw.LeafletPageClass

    parentClass: GObject.ObjectClass
}

export abstract class LeafletPageClass {

    // Own properties of Adw-1.Adw.LeafletPageClass

    static name: string
}

export interface PreferencesGroupClass {

    // Own fields of Adw-1.Adw.PreferencesGroupClass

    /**
     * The parent class
     * @field 
     */
    parentClass: Gtk.WidgetClass
}

export abstract class PreferencesGroupClass {

    // Own properties of Adw-1.Adw.PreferencesGroupClass

    static name: string
}

export interface PreferencesPageClass {

    // Own fields of Adw-1.Adw.PreferencesPageClass

    /**
     * The parent class
     * @field 
     */
    parentClass: Gtk.WidgetClass
}

export abstract class PreferencesPageClass {

    // Own properties of Adw-1.Adw.PreferencesPageClass

    static name: string
}

export interface PreferencesRowClass {

    // Own fields of Adw-1.Adw.PreferencesRowClass

    /**
     * The parent class
     * @field 
     */
    parentClass: Gtk.ListBoxRowClass
}

export abstract class PreferencesRowClass {

    // Own properties of Adw-1.Adw.PreferencesRowClass

    static name: string
}

export interface PreferencesWindowClass {

    // Own fields of Adw-1.Adw.PreferencesWindowClass

    /**
     * The parent class
     * @field 
     */
    parentClass: WindowClass
}

export abstract class PreferencesWindowClass {

    // Own properties of Adw-1.Adw.PreferencesWindowClass

    static name: string
}

export interface SplitButtonClass {

    // Own fields of Adw-1.Adw.SplitButtonClass

    parentClass: Gtk.WidgetClass
}

export abstract class SplitButtonClass {

    // Own properties of Adw-1.Adw.SplitButtonClass

    static name: string
}

export interface SpringAnimationClass {
}

export abstract class SpringAnimationClass {

    // Own properties of Adw-1.Adw.SpringAnimationClass

    static name: string
}

export interface SpringParams {

    // Owm methods of Adw-1.Adw.SpringParams

    /**
     * Gets the damping of `self`.
     */
    getDamping(): number
    /**
     * Gets the damping ratio of `self`.
     */
    getDampingRatio(): number
    /**
     * Gets the mass of `self`.
     */
    getMass(): number
    /**
     * Gets the stiffness of `self`.
     */
    getStiffness(): number
    /**
     * Increases the reference count of `self`.
     */
    ref(): SpringParams
    /**
     * Decreases the reference count of `self`.
     * 
     * If the last reference is dropped, the structure is freed.
     */
    unref(): void
}

/**
 * Physical parameters of a spring for [class`SpringAnimation]`.
 * 
 * Any spring can be described by three parameters: mass, stiffness and damping.
 * 
 * An undamped spring will produce an oscillatory motion which will go on
 * forever.
 * 
 * The frequency and amplitude of the oscillations will be determined by the
 * stiffness (how "strong" the spring is) and its mass (how much "inertia" it
 * has).
 * 
 * If damping is larger than 0, the amplitude of that oscillating motion will
 * exponientally decrease over time. If that damping is strong enough that the
 * spring can't complete a full oscillation, it's called an overdamped spring.
 * 
 * If we the spring can oscillate, it's called an underdamped spring.
 * 
 * The value between these two behaviors is called critical damping; a
 * critically damped spring will comes to rest in the minimum possible time
 * without producing oscillations.
 * 
 * The damping can be replaced by damping ratio, which produces the following
 * springs:
 * 
 * * 0: an undamped spring.
 * * Between 0 and 1: an underdamped spring.
 * * 1: a critically damped spring.
 * * Larger than 1: an overdamped spring.
 * 
 * As such
 * @record 
 */
export class SpringParams {

    // Own properties of Adw-1.Adw.SpringParams

    static name: string

    // Constructors of Adw-1.Adw.SpringParams

    /**
     * Creates a new `AdwSpringParams` from `mass,` `stiffness` and `damping_ratio`.
     * 
     * The damping value is calculated from `damping_ratio` and the other two
     * parameters.
     * 
     * * If `damping_ratio` is 0, the spring will not be damped and will oscillate
     *   endlessly.
     * * If `damping_ratio` is between 0 and 1, the spring is underdamped and will
     *   always overshoot.
     * * If `damping_ratio` is 1, the spring is critically damped and will reach its
     *   resting position the quickest way possible.
     * * If `damping_ratio` is larger than 1, the spring is overdamped and will reach
     *   its resting position faster than it can complete an oscillation.
     * 
     * [ctor`SpringParams`.new_full] allows to pass a raw damping value instead.
     * @constructor 
     * @param dampingRatio the damping ratio of the spring
     * @param mass the mass of the spring
     * @param stiffness the stiffness of the spring
     */
    constructor(dampingRatio: number, mass: number, stiffness: number) 
    /**
     * Creates a new `AdwSpringParams` from `mass,` `stiffness` and `damping_ratio`.
     * 
     * The damping value is calculated from `damping_ratio` and the other two
     * parameters.
     * 
     * * If `damping_ratio` is 0, the spring will not be damped and will oscillate
     *   endlessly.
     * * If `damping_ratio` is between 0 and 1, the spring is underdamped and will
     *   always overshoot.
     * * If `damping_ratio` is 1, the spring is critically damped and will reach its
     *   resting position the quickest way possible.
     * * If `damping_ratio` is larger than 1, the spring is overdamped and will reach
     *   its resting position faster than it can complete an oscillation.
     * 
     * [ctor`SpringParams`.new_full] allows to pass a raw damping value instead.
     * @constructor 
     * @param dampingRatio the damping ratio of the spring
     * @param mass the mass of the spring
     * @param stiffness the stiffness of the spring
     */
    static new(dampingRatio: number, mass: number, stiffness: number): SpringParams
    /**
     * Creates a new `AdwSpringParams` from `mass,` `stiffness` and `damping`.
     * 
     * See [ctor`SpringParams`.new] for a simplified constructor using damping ratio
     * instead of `damping`.
     * @constructor 
     * @param damping the damping of the spring
     * @param mass the mass of the spring
     * @param stiffness the stiffness of the spring
     */
    static newFull(damping: number, mass: number, stiffness: number): SpringParams
}

export interface SqueezerClass {

    // Own fields of Adw-1.Adw.SqueezerClass

    parentClass: Gtk.WidgetClass
}

export abstract class SqueezerClass {

    // Own properties of Adw-1.Adw.SqueezerClass

    static name: string
}

export interface SqueezerPageClass {

    // Own fields of Adw-1.Adw.SqueezerPageClass

    parentClass: GObject.ObjectClass
}

export abstract class SqueezerPageClass {

    // Own properties of Adw-1.Adw.SqueezerPageClass

    static name: string
}

export interface StatusPageClass {

    // Own fields of Adw-1.Adw.StatusPageClass

    parentClass: Gtk.WidgetClass
}

export abstract class StatusPageClass {

    // Own properties of Adw-1.Adw.StatusPageClass

    static name: string
}

export interface StyleManagerClass {

    // Own fields of Adw-1.Adw.StyleManagerClass

    parentClass: GObject.ObjectClass
}

export abstract class StyleManagerClass {

    // Own properties of Adw-1.Adw.StyleManagerClass

    static name: string
}

export interface SwipeTrackerClass {

    // Own fields of Adw-1.Adw.SwipeTrackerClass

    parentClass: GObject.ObjectClass
}

export abstract class SwipeTrackerClass {

    // Own properties of Adw-1.Adw.SwipeTrackerClass

    static name: string
}

export interface SwipeableInterface {

    // Own fields of Adw-1.Adw.SwipeableInterface

    /**
     * The parent interface.
     * @field 
     */
    parent: GObject.TypeInterface
    getDistance: (self: Swipeable) => number
    getSnapPoints: (self: Swipeable) => number[]
    getProgress: (self: Swipeable) => number
    getCancelProgress: (self: Swipeable) => number
    getSwipeArea: (self: Swipeable, navigationDirection: NavigationDirection, isDrag: boolean) => /* rect */ Gdk.Rectangle
}

/**
 * An interface for swipeable widgets.
 * @record 
 */
export abstract class SwipeableInterface {

    // Own properties of Adw-1.Adw.SwipeableInterface

    static name: string
}

export interface TabBarClass {

    // Own fields of Adw-1.Adw.TabBarClass

    parentClass: Gtk.WidgetClass
}

export abstract class TabBarClass {

    // Own properties of Adw-1.Adw.TabBarClass

    static name: string
}

export interface TabPageClass {

    // Own fields of Adw-1.Adw.TabPageClass

    parentClass: GObject.ObjectClass
}

export abstract class TabPageClass {

    // Own properties of Adw-1.Adw.TabPageClass

    static name: string
}

export interface TabViewClass {

    // Own fields of Adw-1.Adw.TabViewClass

    parentClass: Gtk.WidgetClass
}

export abstract class TabViewClass {

    // Own properties of Adw-1.Adw.TabViewClass

    static name: string
}

export interface TimedAnimationClass {
}

export abstract class TimedAnimationClass {

    // Own properties of Adw-1.Adw.TimedAnimationClass

    static name: string
}

export interface ToastClass {

    // Own fields of Adw-1.Adw.ToastClass

    parentClass: GObject.ObjectClass
}

export abstract class ToastClass {

    // Own properties of Adw-1.Adw.ToastClass

    static name: string
}

export interface ToastOverlayClass {

    // Own fields of Adw-1.Adw.ToastOverlayClass

    parentClass: Gtk.WidgetClass
}

export abstract class ToastOverlayClass {

    // Own properties of Adw-1.Adw.ToastOverlayClass

    static name: string
}

export interface ViewStackClass {

    // Own fields of Adw-1.Adw.ViewStackClass

    parentClass: Gtk.WidgetClass
}

export abstract class ViewStackClass {

    // Own properties of Adw-1.Adw.ViewStackClass

    static name: string
}

export interface ViewStackPageClass {

    // Own fields of Adw-1.Adw.ViewStackPageClass

    parentClass: GObject.ObjectClass
}

export abstract class ViewStackPageClass {

    // Own properties of Adw-1.Adw.ViewStackPageClass

    static name: string
}

export interface ViewSwitcherBarClass {

    // Own fields of Adw-1.Adw.ViewSwitcherBarClass

    parentClass: Gtk.WidgetClass
}

export abstract class ViewSwitcherBarClass {

    // Own properties of Adw-1.Adw.ViewSwitcherBarClass

    static name: string
}

export interface ViewSwitcherClass {

    // Own fields of Adw-1.Adw.ViewSwitcherClass

    parentClass: Gtk.WidgetClass
}

export abstract class ViewSwitcherClass {

    // Own properties of Adw-1.Adw.ViewSwitcherClass

    static name: string
}

export interface ViewSwitcherTitleClass {

    // Own fields of Adw-1.Adw.ViewSwitcherTitleClass

    parentClass: Gtk.WidgetClass
}

export abstract class ViewSwitcherTitleClass {

    // Own properties of Adw-1.Adw.ViewSwitcherTitleClass

    static name: string
}

export interface WindowClass {

    // Own fields of Adw-1.Adw.WindowClass

    parentClass: Gtk.WindowClass
}

export abstract class WindowClass {

    // Own properties of Adw-1.Adw.WindowClass

    static name: string
}

export interface WindowTitleClass {

    // Own fields of Adw-1.Adw.WindowTitleClass

    parentClass: Gtk.WidgetClass
}

export abstract class WindowTitleClass {

    // Own properties of Adw-1.Adw.WindowTitleClass

    static name: string
}
