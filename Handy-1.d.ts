
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Handy-1
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
     *   [class`StyleManager]` returned by [func`StyleManager`.get_default], it's
     *   equivalent to `HDY_COLOR_SCHEME_FORCE_LIGHT`.
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
     *   light colors.
     */
    PREFER_DARK,
    /**
     * Always use dark appearance.
     */
    FORCE_DARK,
}
/**
 * Describes the possible transitions in a [class`Deck]` widget.
 * 
 * New values may be added to this enumeration over time.
 */
export enum DeckTransitionType {
    /**
     * Cover the old page or uncover the new page,
     *   sliding from or towards the end according to orientation, text direction
     *   and children order
     */
    OVER,
    /**
     * Uncover the new page or cover the old page,
     *   sliding from or towards the start according to orientation, text direction
     *   and children order
     */
    UNDER,
    /**
     * Slide from left, right, up or down according
     *   to the orientation, text direction and the children order
     */
    SLIDE,
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
 * These enumeration values describe the possible transitions between children
 * in a [class`Flap]` widget, as well as which areas can be swiped via
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
 * Describes the child types handled by [class`HeaderGroup]`.
 * 
 * New values may be added to this enumeration over time.
 */
export enum HeaderGroupChildType {
    /**
     * The child is a [class`HeaderBar]`
     */
    HEADER_BAR,
    /**
     * The child is a
     *   [class`Gtk`.HeaderBar]
     */
    GTK_HEADER_BAR,
    /**
     * The child is a
     *   [class`HeaderGroup]`
     */
    HEADER_GROUP,
}
/**
 * Describes the possible transitions in a [class`Leaflet]` widget.
 * 
 * New values may be added to this enumeration over time.
 */
export enum LeafletTransitionType {
    /**
     * Cover the old page or uncover the new
     *   page, sliding from or towards the end according to orientation, text
     *   direction and children order
     */
    OVER,
    /**
     * Uncover the new page or cover the old
     *   page, sliding from or towards the start according to orientation, text
     *   direction and children order
     */
    UNDER,
    /**
     * Slide from left, right, up or down
     *   according to the orientation, text direction and the children order
     */
    SLIDE,
}
/**
 * Describes the direction of a swipe navigation gesture.
 */
export enum NavigationDirection {
    /**
     * Corresponds to start or top, depending on
     *   orientation and text direction
     */
    BACK,
    /**
     * Corresponds to end or bottom, depending on
     *   orientation and text direction
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
 * Describes the adaptive modes of [class`ViewSwitcher]`.
 */
export enum ViewSwitcherPolicy {
    /**
     * Automatically adapt to the best fitting mode
     */
    AUTO,
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
 * Computes the ease out for a value.
 * @param t the term
 */
export function easeOutCubic(t: number): number
/**
 * Returns the name of a [class`EnumValueObject]`.
 * 
 * This is a default implementation of [callback`ComboRowGetEnumValueNameFunc]`
 * to be used with [method`ComboRow`.set_for_enum]. If the enumeration has a
 * nickname, it will return it, otherwise it will return its name.
 * @param value the value from the enum from which to get a name
 * @param userData unused user data
 */
export function enumValueRowName(value: EnumValueObject, userData: object | null): string
/**
 * Checks whether animations are enabled for `widget`.
 * 
 * This should be used when implementing an animated widget to know whether to
 * animate it or not.
 * @param widget a widget
 */
export function getEnableAnimations(widget: Gtk.Widget): boolean
/**
 * Initializes Libhandy.
 * 
 * Call this function just after initializing GTK, if you are using
 * [class`Gtk`.Application] it means it must be called when the
 * [signal`Gio`.Application::startup] signal is emitted.
 * 
 * If Libhandy has already been initialized, the function will simply return.
 * 
 * This makes sure translations, types, themes, and icons for the Handy library
 * are set up properly.
 */
export function init(): void
/**
 * Callback for loading an [class`Avatar]`'s image.
 * 
 * The returned [class`GdkPixbuf`.Pixbuf] is expected to be square with width and
 * height set to `size`. The image is cropped to a circle without any scaling or
 * transformation.
 * @callback 
 * @param size the required size of the avatar
 */
export interface AvatarImageLoadFunc {
    (size: number): GdkPixbuf.Pixbuf | null
}
/**
 * Callback for getting the name of a row from an enum.
 * 
 * Called for combo rows that are bound to an enumeration with
 * [method`ComboRow`.set_for_enum] for each value from that enumeration.
 * 
 * See also: [func`enum_value_row_name]`.
 * @callback 
 * @param value the value from the enum from which to get a name
 */
export interface ComboRowGetEnumValueNameFunc {
    (value: EnumValueObject): string
}
/**
 * Callback for getting the name of a row.
 * 
 * Called for combo rows that are bound to a [iface`Gio`.ListModel] with
 * [method`ComboRow`.bind_name_model] for each item that gets added to the model.
 * @callback 
 * @param item the item from the model from which to get a name
 */
export interface ComboRowGetNameFunc {
    (item: GObject.Object): string
}
export module Swipeable {

    // Signal callback interfaces

    /**
     * Signal callback interface for `child-switched`
     */
    export interface ChildSwitchedSignalCallback {
        (index: number, duration: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Swipeable extends Gtk.Widget {

    // Owm methods of Handy-1.Handy.Swipeable

    /**
     * Emits [signal`Swipeable:`:child-switched] signal.
     * 
     * This should be called when the widget switches visible child widget.
     * 
     * `duration` can be 0 if the child is switched without animation.
     * @param index the index of the child to switch to
     * @param duration animation duration, in milliseconds
     */
    emitChildSwitched(index: number, duration: number): void
    // Has conflict: getCancelProgress(): number
    // Has conflict: getDistance(): number
    // Has conflict: getProgress(): number
    // Has conflict: getSnapPoints(): number[]
    // Has conflict: getSwipeArea(navigationDirection: NavigationDirection, isDrag: boolean): /* rect */ Gdk.Rectangle
    // Has conflict: getSwipeTracker(): SwipeTracker
    // Has conflict: switchChild(index: number, duration: number): void

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

    // Own virtual methods of Handy-1.Handy.Swipeable

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
     * Swipe area is only considered for direct swipes (as in, not initiated by
     * [class`SwipeGroup]`).
     * 
     * If not implemented, the default implementation returns the allocation of
     * `self,` allowing swipes from anywhere.
     * @virtual 
     * @param navigationDirection the direction of the swipe
     * @param isDrag whether the swipe is caused by a dragging gesture
     */
    getSwipeArea(navigationDirection: NavigationDirection, isDrag: boolean): /* rect */ Gdk.Rectangle
    /**
     * Gets the [class`SwipeTracker]` used by this swipeable widget.
     * @virtual 
     */
    getSwipeTracker(): SwipeTracker
    /**
     * Switches to child with index `index`.
     * 
     * See [signal`Swipeable:`:child-switched].
     * @virtual 
     * @param index the index of the child to switch to
     * @param duration animation duration, in milliseconds
     */
    switchChild(index: number, duration: number): void

    // Own signals of Handy-1.Handy.Swipeable

    connect(sigName: "child-switched", callback: Swipeable.ChildSwitchedSignalCallback): number
    on(sigName: "child-switched", callback: Swipeable.ChildSwitchedSignalCallback): number
    once(sigName: "child-switched", callback: Swipeable.ChildSwitchedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "child-switched", duration: number, ...args: any[]): void

    // Class property signals of Handy-1.Handy.Swipeable

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
 * An interface for swipeable widgets.
 * 
 * The `HdySwipeable` interface is implemented by all swipeable widgets. They
 * can be synced using [class`SwipeGroup]`.
 * 
 * See [class`SwipeTracker]` for details about implementing it.
 * @interface 
 */
export class Swipeable extends GObject.Object {

    // Own properties of Handy-1.Handy.Swipeable

    static name: string

    // Constructors of Handy-1.Handy.Swipeable

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

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, PreferencesRow.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.ActionRow

        /**
         * The activatable widget for this row.
         * 
         * The widget is activated, either by clicking on it, by calling
         * [method`ActionRow`.activate], or via mnemonics in the title or the subtitle.
         * See the [property`ActionRow:`use-underline] property to enable mnemonics.
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
        /**
         * Whether embedded underlines in the title or subtitle indicates a mnemonic.
         * 
         * If true, an underline in the text of the title or subtitle labels indicates
         * the next character should be used for the mnemonic accelerator key.
         */
        useUnderline?: boolean | null
    }

}

export interface ActionRow extends Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {

    // Own properties of Handy-1.Handy.ActionRow

    /**
     * The activatable widget for this row.
     * 
     * The widget is activated, either by clicking on it, by calling
     * [method`ActionRow`.activate], or via mnemonics in the title or the subtitle.
     * See the [property`ActionRow:`use-underline] property to enable mnemonics.
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
    /**
     * Whether embedded underlines in the title or subtitle indicates a mnemonic.
     * 
     * If true, an underline in the text of the title or subtitle labels indicates
     * the next character should be used for the mnemonic accelerator key.
     */
    useUnderline: boolean

    // Own fields of Handy-1.Handy.ActionRow

    parentInstance: any

    // Owm methods of Handy-1.Handy.ActionRow

    // Has conflict: activate(): void
    /**
     * Adds a prefix widget to `self`.
     * @param widget the prefix widget
     */
    addPrefix(widget: Gtk.Widget): void
    /**
     * Gets the widget activated when `self` is activated.
     */
    getActivatableWidget(): Gtk.Widget | null
    /**
     * Gets the icon name for `self`.
     */
    getIconName(): string
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
     * Gets whether an embedded underline in the title or subtitle indicates a
     * mnemonic.
     */
    getUseUnderline(): boolean
    /**
     * Sets the widget to activate when `self` is activated.
     * @param widget the target widget
     */
    setActivatableWidget(widget: Gtk.Widget | null): void
    /**
     * Sets the icon name for `self`.
     * @param iconName the icon name
     */
    setIconName(iconName: string): void
    /**
     * Sets the subtitle for `self`.
     * @param subtitle the subtitle
     */
    setSubtitle(subtitle: string | null): void
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
    /**
     * Sets whether an embedded underline in the title or subtitle indicates a
     * mnemonic.
     * @param useUnderline `TRUE` if underlines in the text indicate mnemonics
     */
    setUseUnderline(useUnderline: boolean): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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

    // Own virtual methods of Handy-1.Handy.ActionRow

    /**
     * Activates `self`.
     * @virtual 
     */
    activate(): void

    // Overloads of activate

    /**
     * For widgets that can be ???activated??? (buttons, menu items, etc.)
     * this function activates them. Activation is what happens when you
     * press Enter on a widget during key navigation. If `widget` isn't
     * activatable, the function returns %FALSE.
     */
    activate(): boolean
    activate(): void

    // Own signals of Handy-1.Handy.ActionRow

    connect(sigName: "activated", callback: ActionRow.ActivatedSignalCallback): number
    on(sigName: "activated", callback: ActionRow.ActivatedSignalCallback): number
    once(sigName: "activated", callback: ActionRow.ActivatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "activated", ...args: any[]): void

    // Class property signals of Handy-1.Handy.ActionRow

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
    connect(sigName: "notify::use-underline", callback: any): number
    on(sigName: "notify::use-underline", callback: any): number
    once(sigName: "notify::use-underline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: any): number
    on(sigName: "notify::activatable", callback: any): number
    once(sigName: "notify::activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: any): number
    on(sigName: "notify::selectable", callback: any): number
    once(sigName: "notify::selectable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selectable", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A [class`Gtk`.ListBoxRow] used to present actions.
 * 
 * The `HdyActionRow` widget can have a title, a subtitle and an icon. The row
 * can receive additional widgets at its end, or prefix widgets at its start.
 * 
 * It is convenient to present a preference and its related actions.
 * 
 * `HdyActionRow` is unactivatable by default, giving it an activatable widget
 * will automatically make it activatable, but unsetting it won't change the
 * row's activatability.
 * 
 * ## HdyActionRow as GtkBuildable
 * 
 * The `HdyActionRow` implementation of the [iface`Gtk`.Buildable] interface
 * supports adding a child at its end by specifying ???suffix??? or omitting the
 * ???type??? attribute of a <child> element.
 * 
 * It also supports adding a child as a prefix widget by specifying ???prefix??? as
 * the ???type??? attribute of a <child> element.
 * 
 * ## CSS nodes
 * 
 * `HdyActionRow` has a main CSS node with name `row`.
 * 
 * It contains the subnode `box.header` for its main horizontal box, and
 * `box.title` for the vertical box containing the title and subtitle labels.
 * 
 * It contains subnodes `label.title` and `label.subtitle` representing
 * respectively the title label and subtitle label.
 * @class 
 */
export class ActionRow extends PreferencesRow {

    // Own properties of Handy-1.Handy.ActionRow

    static name: string

    // Constructors of Handy-1.Handy.ActionRow

    constructor(config?: ActionRow.ConstructorProperties) 
    /**
     * Creates a new `HdyActionRow`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyActionRow`.
     * @constructor 
     */
    static new(): ActionRow
    _init(config?: ActionRow.ConstructorProperties): void
}

export module ApplicationWindow {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gio.ActionGroup.ConstructorProperties, Gio.ActionMap.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ApplicationWindow.ConstructorProperties {
    }

}

export interface ApplicationWindow extends Atk.ImplementorIface, Gio.ActionGroup, Gio.ActionMap, Gtk.Buildable {

    // Own fields of Handy-1.Handy.ApplicationWindow

    parentInstance: any

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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Handy-1.Handy.ApplicationWindow

    connect(sigName: "notify::show-menubar", callback: any): number
    on(sigName: "notify::show-menubar", callback: any): number
    once(sigName: "notify::show-menubar", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-menubar", ...args: any[]): void
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
 * A freeform application window.
 * 
 * `HdyApplicationWindow` is a [class`Gtk`.ApplicationWindow] subclass providing
 * the same features as [class`Window]`.
 * 
 * See [class`Window]` for details.
 * 
 * Using [method`Gtk`.Application.set_app_menu] and
 * [method`Gtk`.Application.set_menubar] is not supported and may result in
 * visual glitches.
 * @class 
 */
export class ApplicationWindow extends Gtk.ApplicationWindow {

    // Own properties of Handy-1.Handy.ApplicationWindow

    static name: string

    // Constructors of Handy-1.Handy.ApplicationWindow

    constructor(config?: ApplicationWindow.ConstructorProperties) 
    /**
     * Creates a new `HdyApplicationWindow`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyApplicationWindow`.
     * @constructor 
     */
    static new(): ApplicationWindow

    // Overloads of new

    /**
     * Creates a new #GtkApplicationWindow.
     * @constructor 
     * @param application a #GtkApplication
     */
    static new(application: Gtk.Application): Gtk.ApplicationWindow
    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you???re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called ???popups???.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don???t use #GTK_WINDOW_POPUP.
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
    _init(config?: ApplicationWindow.ConstructorProperties): void
}

export module Avatar {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.DrawingArea.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.Avatar

        /**
         * The name of an icon to use as a fallback.
         * 
         * If no name is set, the avatar-default-symbolic icon will be used. If the
         * name doesn't match a valid icon, it is an error and no icon will be
         * displayed. If the icon theme is changed, the image will be updated
         * automatically.
         */
        iconName?: string | null
        /**
         * A [iface`Gio`.LoadableIcon] used to load the avatar.
         */
        loadableIcon?: Gio.LoadableIcon | null
        /**
         * Whether to show the initials or the fallback icon on the generated avatar.
         */
        showInitials?: boolean | null
        /**
         * The avatar size of the avatar.
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

export interface Avatar extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.Avatar

    /**
     * The name of an icon to use as a fallback.
     * 
     * If no name is set, the avatar-default-symbolic icon will be used. If the
     * name doesn't match a valid icon, it is an error and no icon will be
     * displayed. If the icon theme is changed, the image will be updated
     * automatically.
     */
    iconName: string
    /**
     * A [iface`Gio`.LoadableIcon] used to load the avatar.
     */
    loadableIcon: Gio.LoadableIcon
    /**
     * Whether to show the initials or the fallback icon on the generated avatar.
     */
    showInitials: boolean
    /**
     * The avatar size of the avatar.
     */
    size: number
    /**
     * Sets the text used to generate the fallback initials and color.
     * 
     * It's only used to generate the color if [property`Avatar:`show-initials] is
     * `FALSE`.
     */
    text: string

    // Owm methods of Handy-1.Handy.Avatar

    /**
     * Renders `self` into a [class`GdkPixbuf`.Pixbuf] at `size` and `scale_factor`.
     * 
     * This can be used to export the fallback avatar.
     * @param size the size of the pixbuf
     * @param scaleFactor the scale factor
     */
    drawToPixbuf(size: number, scaleFactor: number): GdkPixbuf.Pixbuf
    /**
     * Renders asynchronously `self` into a pixbuf at `size` and `scale_factor`.
     * 
     * This can be used to export the fallback avatar.
     * @param size the size of the pixbuf
     * @param scaleFactor the scale factor
     * @param cancellable a cancellable
     * @param callback a [callback`Gio`.AsyncReadyCallback] to call when   the avatar is generated
     */
    drawToPixbufAsync(size: number, scaleFactor: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous draw of an avatar to a pixbuf.
     * @param asyncResult a [iface`Gio`.AsyncResult]
     */
    drawToPixbufFinish(asyncResult: Gio.AsyncResult): GdkPixbuf.Pixbuf
    /**
     * Gets the name of an icon to use as a fallback.
     */
    getIconName(): string | null
    /**
     * Gets the [iface`Gio`.LoadableIcon] set via [method`Avatar`.set_loadable_icon].
     */
    getLoadableIcon(): Gio.LoadableIcon | null
    /**
     * Gets whether initials are used instead of an icon on the fallback avatar.
     */
    getShowInitials(): boolean
    /**
     * Gets the size of the avatar.
     */
    getSize(): number
    /**
     * Gets the text used to generate the fallback initials and color.
     */
    getText(): string | null
    /**
     * Sets the name of an icon to use as a fallback.
     * 
     * If no name is set, `avatar-default-symbolic` will be used.
     * @param iconName the name of the icon from the icon theme
     */
    setIconName(iconName: string | null): void
    /**
     * A callback which is called when the custom image needs to be reloaded.
     * 
     * It will be called on [property`Avatar:`size] or
     * [property`Gtk`.Widget:scale-factor] changes.
     * @param loadImage callback to set a custom image
     */
    setImageLoadFunc(loadImage: AvatarImageLoadFunc | null): void
    /**
     * Sets the [iface`Gio`.LoadableIcon] to use as an avatar.
     * 
     * The previous avatar is displayed till the new avatar is loaded, to
     * immediately remove the custom avatar set the loadable-icon to `NULL`.
     * 
     * The [iface`Gio`.LoadableIcon] set via this function is preferred over a set
     * [callback`AvatarImageLoadFunc]`.
     * @param icon a [iface`Gio`.LoadableIcon]
     */
    setLoadableIcon(icon: Gio.LoadableIcon | null): void
    /**
     * Sets whether to use initials instead of an icon on the fallback avatar.
     * @param showInitials whether to use initials instead of an icon as fallback
     */
    setShowInitials(showInitials: boolean): void
    /**
     * Sets the size of the avatar.
     * @param size the size to be used for the avatar
     */
    setSize(size: number): void
    /**
     * Set the text used to generate the fallback initials color.
     * @param text the text used to get the initials and color
     */
    setText(text: string | null): void

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

    // Class property signals of Handy-1.Handy.Avatar

    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::loadable-icon", callback: any): number
    on(sigName: "notify::loadable-icon", callback: any): number
    once(sigName: "notify::loadable-icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::loadable-icon", ...args: any[]): void
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
 * A widget displaying an image, with a generated fallback.
 * 
 * `HdyAvatar` is a widget to display a round avatar.
 * 
 * A provided image is made round before displaying, if no image is given this
 * widget generates a round fallback with the initials of the
 * [property`Avatar:`text] on top of a colored background.
 * 
 * The color is picked based on the hash of the [property`Avatar:`text].
 * 
 * If [property`Avatar:`show-initials] is set to `FALSE`,
 * `avatar-default-symbolic` is shown instead of the initials.
 * 
 * Use [method`Avatar`.set_loadable_icon] or [property`Avatar:`loadable-icon] to
 * set a custom image.
 * 
 * ## CSS nodes
 * 
 * `HdyAvatar` has a single CSS node with name `avatar`.
 * @class 
 */
export class Avatar extends Gtk.DrawingArea {

    // Own properties of Handy-1.Handy.Avatar

    static name: string

    // Constructors of Handy-1.Handy.Avatar

    constructor(config?: Avatar.ConstructorProperties) 
    /**
     * Creates a new `HdyAvatar`.
     * @constructor 
     * @param size the size of the avatar
     * @param text the text used to get the initials and color
     * @param showInitials whether to use initials instead of an icon as fallback
     */
    constructor(size: number, text: string | null, showInitials: boolean) 
    /**
     * Creates a new `HdyAvatar`.
     * @constructor 
     * @param size the size of the avatar
     * @param text the text used to get the initials and color
     * @param showInitials whether to use initials instead of an icon as fallback
     */
    static new(size: number, text: string | null, showInitials: boolean): Avatar

    // Overloads of new

    /**
     * Creates a new drawing area.
     * @constructor 
     */
    static new(): Gtk.DrawingArea
    _init(config?: Avatar.ConstructorProperties): void
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

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Swipeable.ConstructorProperties, Gtk.EventBox.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.Carousel

        /**
         * Whether to allow swiping for more than one page at a time.
         * 
         * If the value is `FALSE`, each swipe can only move to the adjacent pages.
         */
        allowLongSwipes?: boolean | null
        /**
         * Sets whether the [class`Carousel]` can be dragged with mouse pointer.
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
         * Animation duration used by [method`Carousel`.scroll_to], in milliseconds.
         */
        animationDuration?: number | null
        /**
         * Whether the carousel can be navigated.
         * 
         * This can be used to temporarily disable a `HdyCarousel` to only allow
         * navigating it in a certain state.
         */
        interactive?: boolean | null
        /**
         * Page reveal duration, in milliseconds.
         */
        revealDuration?: number | null
        /**
         * Spacing between pages in pixels.
         */
        spacing?: number | null
    }

}

export interface Carousel extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Swipeable {

    // Own properties of Handy-1.Handy.Carousel

    /**
     * Whether to allow swiping for more than one page at a time.
     * 
     * If the value is `FALSE`, each swipe can only move to the adjacent pages.
     */
    allowLongSwipes: boolean
    /**
     * Sets whether the [class`Carousel]` can be dragged with mouse pointer.
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
     * Animation duration used by [method`Carousel`.scroll_to], in milliseconds.
     */
    animationDuration: number
    /**
     * Whether the carousel can be navigated.
     * 
     * This can be used to temporarily disable a `HdyCarousel` to only allow
     * navigating it in a certain state.
     */
    interactive: boolean
    /**
     * The number of pages in a [class`Carousel]`.
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
     * Spacing between pages in pixels.
     */
    spacing: number

    // Owm methods of Handy-1.Handy.Carousel

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
     * Gets animation duration used by [method`Carousel`.scroll_to].
     */
    getAnimationDuration(): number
    /**
     * Gets whether `self` can be navigated.
     */
    getInteractive(): boolean
    /**
     * Gets the number of pages in `self`.
     */
    getNPages(): number
    /**
     * Gets current scroll position in `self`. It's unitless, 1 matches 1 page.
     */
    getPosition(): number
    /**
     * Gets duration of the animation used when adding or removing pages, in
     * milliseconds.
     */
    getRevealDuration(): number
    /**
     * Gets spacing between pages in pixels.
     */
    getSpacing(): number
    /**
     * Inserts `child` into `self` at position `position`.
     * 
     * If position is -1, or larger than the number of pages, `child` will be
     * appended to the end.
     * @param child a widget to add
     * @param position the position to insert `child` in
     */
    insert(child: Gtk.Widget, position: number): void
    /**
     * Prepends `child` to `self`.
     * @param child a widget to add
     */
    prepend(child: Gtk.Widget): void
    /**
     * Moves `child` into position `position`.
     * 
     * If position is -1, or larger than the number of pages, `child` will be moved
     * to the end.
     * @param child a widget to add
     * @param position the position to move `child` to
     */
    reorder(child: Gtk.Widget, position: number): void
    /**
     * Scrolls to `widget` position with an animation.
     * 
     * [property`Carousel:`animation-duration] property can be used for controlling
     * the duration.
     * @param widget a child of `self`
     */
    scrollTo(widget: Gtk.Widget): void
    /**
     * Scrolls to `widget` position with an animation.
     * @param widget a child of `self`
     * @param duration animation duration, in milliseconds
     */
    scrollToFull(widget: Gtk.Widget, duration: number): void
    /**
     * Sets whether to allow swiping for more than one page at a time.
     * @param allowLongSwipes whether to allow long swipes
     */
    setAllowLongSwipes(allowLongSwipes: boolean): void
    /**
     * Sets whether `self` can be dragged with mouse pointer.
     * 
     * If `allow_mouse_drag` is `FALSE`, dragging is only available on touch.
     * @param allowMouseDrag whether `self` can be dragged with mouse pointer
     */
    setAllowMouseDrag(allowMouseDrag: boolean): void
    /**
     * Sets whether `self` will respond to scroll wheel events.
     * @param allowScrollWheel whether `self` will respond to scroll wheel events
     */
    setAllowScrollWheel(allowScrollWheel: boolean): void
    /**
     * Sets animation duration used by [method`Carousel`.scroll_to].
     * @param duration animation duration, in milliseconds
     */
    setAnimationDuration(duration: number): void
    /**
     * Sets whether `self` can be navigated.
     * 
     * This can be used to temporarily disable a [class`Carousel]` to only allow
     * swiping in a certain state.
     * @param interactive whether `self` can be swiped
     */
    setInteractive(interactive: boolean): void
    /**
     * Sets duration of the animation used when adding or removing pages, in
     * milliseconds.
     * @param revealDuration the new reveal duration value
     */
    setRevealDuration(revealDuration: number): void
    /**
     * Sets spacing between pages in pixels.
     * @param spacing the new spacing value
     */
    setSpacing(spacing: number): void

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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Own signals of Handy-1.Handy.Carousel

    connect(sigName: "page-changed", callback: Carousel.PageChangedSignalCallback): number
    on(sigName: "page-changed", callback: Carousel.PageChangedSignalCallback): number
    once(sigName: "page-changed", callback: Carousel.PageChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "page-changed", ...args: any[]): void

    // Class property signals of Handy-1.Handy.Carousel

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
    connect(sigName: "notify::animation-duration", callback: any): number
    on(sigName: "notify::animation-duration", callback: any): number
    once(sigName: "notify::animation-duration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::animation-duration", ...args: any[]): void
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
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
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
 * The `HdyCarousel` widget can be used to display a set of pages with
 * swipe-based navigation between them.
 * 
 * [class`CarouselIndicatorDots]` and [class`CarouselIndicatorLines]` can be used
 * to provide page indicators for `HdyCarousel`.
 * 
 * ## CSS nodes
 * 
 * `HdyCarousel` has a single CSS node with name `carousel`.
 * @class 
 */
export class Carousel extends Gtk.EventBox {

    // Own properties of Handy-1.Handy.Carousel

    static name: string

    // Constructors of Handy-1.Handy.Carousel

    constructor(config?: Carousel.ConstructorProperties) 
    /**
     * Creates a new `HdyCarousel`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyCarousel`.
     * @constructor 
     */
    static new(): Carousel
    _init(config?: Carousel.ConstructorProperties): void
}

export module CarouselIndicatorDots {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.DrawingArea.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.CarouselIndicatorDots

        /**
         * The [class`Carousel]` the indicator uses.
         */
        carousel?: Carousel | null
    }

}

export interface CarouselIndicatorDots extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Handy-1.Handy.CarouselIndicatorDots

    /**
     * The [class`Carousel]` the indicator uses.
     */
    carousel: Carousel

    // Owm methods of Handy-1.Handy.CarouselIndicatorDots

    /**
     * Get the [class`Carousel]` the indicator uses.
     */
    getCarousel(): Carousel | null
    /**
     * Sets the [class`Carousel]` to use.
     * @param carousel a carousel
     */
    setCarousel(carousel: Carousel | null): void

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

    // Class property signals of Handy-1.Handy.CarouselIndicatorDots

    connect(sigName: "notify::carousel", callback: any): number
    on(sigName: "notify::carousel", callback: any): number
    once(sigName: "notify::carousel", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::carousel", ...args: any[]): void
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
 * A dots indicator for [class`Carousel]`.
 * 
 * The `HdyCarouselIndicatorDots` widget shows a set of dots for each page of a
 * given [class`Carousel]`. The dot representing the carousel's active page is
 * larger and more opaque than the others, the transition to the active and
 * inactive state is gradual to match the carousel's position.
 * 
 * See also [class`CarouselIndicatorLines]`.
 * 
 * ## CSS nodes
 * 
 * `HdyCarouselIndicatorDots` has a single CSS node with name
 * `carouselindicatordots`.
 * @class 
 */
export class CarouselIndicatorDots extends Gtk.DrawingArea {

    // Own properties of Handy-1.Handy.CarouselIndicatorDots

    static name: string

    // Constructors of Handy-1.Handy.CarouselIndicatorDots

    constructor(config?: CarouselIndicatorDots.ConstructorProperties) 
    /**
     * Creates a new `HdyCarouselIndicatorDots`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyCarouselIndicatorDots`.
     * @constructor 
     */
    static new(): CarouselIndicatorDots
    _init(config?: CarouselIndicatorDots.ConstructorProperties): void
}

export module CarouselIndicatorLines {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.DrawingArea.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.CarouselIndicatorLines

        /**
         * The displayed carousel.
         */
        carousel?: Carousel | null
    }

}

export interface CarouselIndicatorLines extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Handy-1.Handy.CarouselIndicatorLines

    /**
     * The displayed carousel.
     */
    carousel: Carousel

    // Owm methods of Handy-1.Handy.CarouselIndicatorLines

    /**
     * Gets the displayed carousel.
     */
    getCarousel(): Carousel | null
    /**
     * Sets the [class`Carousel]` to use.
     * @param carousel a carousel
     */
    setCarousel(carousel: Carousel | null): void

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

    // Class property signals of Handy-1.Handy.CarouselIndicatorLines

    connect(sigName: "notify::carousel", callback: any): number
    on(sigName: "notify::carousel", callback: any): number
    once(sigName: "notify::carousel", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::carousel", ...args: any[]): void
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
 * A lines indicator for [class`Carousel]`.
 * 
 * The `HdyCarouselIndicatorLines` widget shows a set of lines for each page of
 * a given [class`Carousel]`. The carousel's active page is shown as another line
 * that moves between them to match the carousel's position.
 * 
 * See also [class`CarouselIndicatorDots]`.
 * 
 * ## CSS nodes
 * 
 * `HdyCarouselIndicatorLines` has a single CSS node with name
 * `carouselindicatorlines`.
 * @class 
 */
export class CarouselIndicatorLines extends Gtk.DrawingArea {

    // Own properties of Handy-1.Handy.CarouselIndicatorLines

    static name: string

    // Constructors of Handy-1.Handy.CarouselIndicatorLines

    constructor(config?: CarouselIndicatorLines.ConstructorProperties) 
    /**
     * Creates a new `HdyCarouselIndicatorLines`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyCarouselIndicatorLines`.
     * @constructor 
     */
    static new(): CarouselIndicatorLines
    _init(config?: CarouselIndicatorLines.ConstructorProperties): void
}

export module Clamp {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.Clamp

        /**
         * The maximum size to allocate the children.
         * 
         * It is the width if the clamp is horizontal, or the height if it is
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

export interface Clamp extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Handy-1.Handy.Clamp

    /**
     * The maximum size to allocate the children.
     * 
     * It is the width if the clamp is horizontal, or the height if it is
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

    // Owm methods of Handy-1.Handy.Clamp

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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Handy-1.Handy.Clamp

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
 * A widget constraining its child to a given size.
 * 
 * The `HdyClamp` widget constrains the size of the widget it contains to a
 * given maximum size. It will constrain the width if it is horizontal, or the
 * height if it is vertical. The expansion of the child from its minimum to its
 * maximum size is eased out for a smooth transition.
 * 
 * If the child requires more than the requested maximum size, it will be
 * allocated the minimum size it can fit in instead.
 * 
 * ## CSS nodes
 * 
 * `HdyClamp` has a single CSS node with name `clamp`.
 * 
 * The node will get the style classes `.large` when its child reached its
 * maximum size, `.small` when the clamp allocates its full size to its child,
 * `.medium` in-between, or none if it didn't compute its size yet.
 * @class 
 */
export class Clamp extends Gtk.Bin {

    // Own properties of Handy-1.Handy.Clamp

    static name: string

    // Constructors of Handy-1.Handy.Clamp

    constructor(config?: Clamp.ConstructorProperties) 
    /**
     * Creates a new `HdyClamp`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyClamp`.
     * @constructor 
     */
    static new(): Clamp
    _init(config?: Clamp.ConstructorProperties): void
}

export module ComboRow {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, ActionRow.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.ComboRow

        /**
         * The index of the selected item in its [iface`Gio`.ListModel].
         */
        selectedIndex?: number | null
        /**
         * Whether to use the current value as the subtitle.
         * 
         * If you use a custom widget creation function, you will need to give the row
         * a name conversion closure with [method`ComboRow`.set_get_name_func].
         * 
         * If `TRUE`, you should not access [property`ActionRow:`subtitle].
         */
        useSubtitle?: boolean | null
    }

}

export interface ComboRow extends Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {

    // Own properties of Handy-1.Handy.ComboRow

    /**
     * The index of the selected item in its [iface`Gio`.ListModel].
     */
    selectedIndex: number
    /**
     * Whether to use the current value as the subtitle.
     * 
     * If you use a custom widget creation function, you will need to give the row
     * a name conversion closure with [method`ComboRow`.set_get_name_func].
     * 
     * If `TRUE`, you should not access [property`ActionRow:`subtitle].
     */
    useSubtitle: boolean

    // Own fields of Handy-1.Handy.ComboRow

    parentInstance: any

    // Owm methods of Handy-1.Handy.ComboRow

    /**
     * Binds `model` to `self`.
     * 
     * If `self` was already bound to a model, that previous binding is destroyed.
     * 
     * The contents of `self` are cleared and then filled with widgets that represent
     * items from `model`. `self` is updated whenever `model` changes. If `model` is
     * `NULL`, `self` is left empty.
     * @param model the [iface`Gio`.ListModel] to be bound to `self`
     * @param createListWidgetFunc a function that creates   widgets for items to display in the list, or `NULL` in case you also passed   `NULL` as `model`
     * @param createCurrentWidgetFunc a function that creates   widgets for items to display as the selected item, or `NULL` in case you   also passed `NULL` as `model`
     */
    bindModel(model: Gio.ListModel | null, createListWidgetFunc: Gtk.ListBoxCreateWidgetFunc | null, createCurrentWidgetFunc: Gtk.ListBoxCreateWidgetFunc | null): void
    /**
     * Binds `model` to `self`.
     * 
     * If `self` was already bound to a model, that previous binding is destroyed.
     * 
     * The contents of `self` are cleared and then filled with widgets that represent
     * items from `model`. `self` is updated whenever `model` changes. If `model` is
     * `NULL`, `self` is left empty.
     * 
     * This is more convenient to use than [method`ComboRow`.bind_model] if you want
     * to represent items of the model with names.
     * @param model the [iface`Gio`.ListModel] to be bound to `self`
     * @param getNameFunc a function that creates names for items, or   `NULL` in case you also passed `NULL` as `model`
     */
    bindNameModel(model: Gio.ListModel | null, getNameFunc: ComboRowGetNameFunc | null): void
    /**
     * Gets the model bound to `self`.
     */
    getModel(): Gio.ListModel | null
    /**
     * Gets the index of the selected item in its [iface`Gio`.ListModel].
     */
    getSelectedIndex(): number
    /**
     * Gets whether the current value of `self` should be displayed as its subtitle.
     */
    getUseSubtitle(): boolean
    /**
     * Creates a model for `enum_type` and binds it to `self`.
     * 
     * The items of the model will be [class`EnumValueObject]` objects.
     * 
     * If `self` was already bound to a model, that previous binding is destroyed.
     * 
     * The contents of `self` are cleared and then filled with widgets that represent
     * items from `model`. `self` is updated whenever `model` changes. If `model` is
     * `NULL`, `self` is left empty.
     * 
     * This is more convenient to use than [method`ComboRow`.bind_name_model] if you
     * want to represent values of an enumeration with names.
     * 
     * See [func`enum_value_row_name]`.
     * @param enumType the enumeration [alias`GLib`.Type] to be bound to `self`
     * @param getNameFunc a function that creates names for items, or   `NULL` in case you also passed `NULL` as `model`
     */
    setForEnum(enumType: GObject.GType, getNameFunc: ComboRowGetEnumValueNameFunc | null): void
    /**
     * Sets a closure to convert items into names.
     * 
     * See [property`ComboRow:`use-subtitle].
     * @param getNameFunc a function that creates names for items, or   `NULL` in case you also passed `NULL` as `model`
     */
    setGetNameFunc(getNameFunc: ComboRowGetNameFunc | null): void
    /**
     * Sets the index of the selected item in its [iface`Gio`.ListModel].
     * @param selectedIndex the index of the selected item
     */
    setSelectedIndex(selectedIndex: number): void
    /**
     * Sets whether the current value of `self` should be displayed as its subtitle.
     * 
     * If `TRUE`, you should not access [property`ActionRow:`subtitle].
     * @param useSubtitle `TRUE` to set the current value as the subtitle
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
     * For widgets that can be ???activated??? (buttons, menu items, etc.)
     * this function activates them. Activation is what happens when you
     * press Enter on a widget during key navigation. If `widget` isn't
     * activatable, the function returns %FALSE.
     */
    activate(): boolean
    activate(): void
    /**
     * For widgets that can be ???activated??? (buttons, menu items, etc.)
     * this function activates them. Activation is what happens when you
     * press Enter on a widget during key navigation. If `widget` isn't
     * activatable, the function returns %FALSE.
     */
    activate(): boolean
    activate(): void

    // Overloads of activate

    /**
     * For widgets that can be ???activated??? (buttons, menu items, etc.)
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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

    // Class property signals of Handy-1.Handy.ComboRow

    connect(sigName: "notify::selected-index", callback: any): number
    on(sigName: "notify::selected-index", callback: any): number
    once(sigName: "notify::selected-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selected-index", ...args: any[]): void
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
    connect(sigName: "notify::use-underline", callback: any): number
    on(sigName: "notify::use-underline", callback: any): number
    once(sigName: "notify::use-underline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: any): number
    on(sigName: "notify::activatable", callback: any): number
    once(sigName: "notify::activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: any): number
    on(sigName: "notify::selectable", callback: any): number
    once(sigName: "notify::selectable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selectable", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A [class`Gtk`.ListBoxRow] used to choose from a list of items.
 * 
 * The `HdyComboRow` widget allows the user to choose from a list of valid
 * choices. The row displays the selected choice. When activated, the row
 * displays a popover which allows the user to make a new choice.
 * 
 * The [class`ComboRow]` uses the model-view pattern; the list of valid choices
 * is specified in the form of a [iface`Gio`.ListModel], and the display of the
 * choices can be adapted to the data in the model via widget creation
 * functions.
 * 
 * `HdyComboRow` is [property`Gtk`.ListBoxRow:activatable] if a model is set.
 * 
 * ## CSS nodes
 * 
 * `HdyComboRow` has a main CSS node with name `row`.
 * 
 * Its popover has the node name popover with the `.combo` style class, it
 * contains a [class`Gtk`.ScrolledWindow], which in turn contains a
 * [class`Gtk`.ListBox], both are accessible via their regular nodes.
 * 
 * A checkmark of node and style class `image.checkmark` in the popover denotes
 * the current item.
 * @class 
 */
export class ComboRow extends ActionRow {

    // Own properties of Handy-1.Handy.ComboRow

    static name: string

    // Constructors of Handy-1.Handy.ComboRow

    constructor(config?: ComboRow.ConstructorProperties) 
    /**
     * Creates a new `HdyComboRow`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyComboRow`.
     * @constructor 
     */
    static new(): ComboRow
    _init(config?: ComboRow.ConstructorProperties): void
}

export module Deck {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Swipeable.ConstructorProperties, Gtk.Container.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.Deck

        /**
         * Whether swipe gestures allow switching to the previous child.
         */
        canSwipeBack?: boolean | null
        /**
         * Whether swipe gestures allow switching to the next child.
         */
        canSwipeForward?: boolean | null
        /**
         * Horizontally homogeneous sizing.
         */
        hhomogeneous?: boolean | null
        /**
         * Whether or not the size should smoothly change when changing between
         * differently sized children.
         */
        interpolateSize?: boolean | null
        /**
         * The transition animation duration, in milliseconds.
         */
        transitionDuration?: number | null
        /**
         * The type of animation that will be used for transitions between children.
         * 
         * The transition type can be changed without problems at runtime, so it is
         * possible to change the animation based on the child that is about to become
         * current.
         */
        transitionType?: DeckTransitionType | null
        /**
         * Vertically homogeneous sizing.
         */
        vhomogeneous?: boolean | null
        /**
         * The widget currently visible.
         * 
         * The transition is determined by [property`Deck:`transition-type] and
         * [property`Deck:`transition-duration]. The transition can be cancelled by the
         * user, in which case visible child will change back to the previously
         * visible child.
         */
        visibleChild?: Gtk.Widget | null
        /**
         * The name of the widget currently visible.
         */
        visibleChildName?: string | null
    }

}

export interface Deck extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Swipeable {

    // Own properties of Handy-1.Handy.Deck

    /**
     * Whether swipe gestures allow switching to the previous child.
     */
    canSwipeBack: boolean
    /**
     * Whether swipe gestures allow switching to the next child.
     */
    canSwipeForward: boolean
    /**
     * Horizontally homogeneous sizing.
     */
    hhomogeneous: boolean
    /**
     * Whether or not the size should smoothly change when changing between
     * differently sized children.
     */
    interpolateSize: boolean
    /**
     * The transition animation duration, in milliseconds.
     */
    transitionDuration: number
    /**
     * Whether or not the transition is currently running.
     */
    readonly transitionRunning: boolean
    /**
     * The type of animation that will be used for transitions between children.
     * 
     * The transition type can be changed without problems at runtime, so it is
     * possible to change the animation based on the child that is about to become
     * current.
     */
    transitionType: DeckTransitionType
    /**
     * Vertically homogeneous sizing.
     */
    vhomogeneous: boolean
    /**
     * The widget currently visible.
     * 
     * The transition is determined by [property`Deck:`transition-type] and
     * [property`Deck:`transition-duration]. The transition can be cancelled by the
     * user, in which case visible child will change back to the previously
     * visible child.
     */
    visibleChild: Gtk.Widget
    /**
     * The name of the widget currently visible.
     */
    visibleChildName: string

    // Own fields of Handy-1.Handy.Deck

    parentInstance: any

    // Owm methods of Handy-1.Handy.Deck

    /**
     * Finds the previous or next navigatable child.
     * 
     * Gets the previous or next child. This will be the same widget
     * [method`Deck`.navigate] will navigate to.
     * 
     * If there's no child to navigate to, `NULL` will be returned instead.
     * @param direction the direction
     */
    getAdjacentChild(direction: NavigationDirection): Gtk.Widget | null
    /**
     * Gets whether swipe gestures for navigating backward are enabled.
     */
    getCanSwipeBack(): boolean
    /**
     * Gets whether swipe gestures for navigating forward enabled.
     */
    getCanSwipeForward(): boolean
    /**
     * Finds the child of `self` with `name`.
     * 
     * Returns `NULL` if there is no child with this name.
     * @param name the name of the child to find
     */
    getChildByName(name: string): Gtk.Widget | null
    /**
     * Gets whether `self` is homogeneous for the given orientation.
     * @param orientation the orientation
     */
    getHomogeneous(orientation: Gtk.Orientation): boolean
    /**
     * Gets whether `self` will interpolate its size when changing the visible child.
     */
    getInterpolateSize(): boolean
    /**
     * Gets the mode transition animation duration for `self`.
     */
    getTransitionDuration(): number
    /**
     * Gets whether a transition is currently running for `self`.
     */
    getTransitionRunning(): boolean
    /**
     * Gets the type of animation used for transitions between children.
     */
    getTransitionType(): DeckTransitionType
    /**
     * Gets the visible child widget.
     */
    getVisibleChild(): Gtk.Widget
    /**
     * Gets the name of the currently visible child widget.
     */
    getVisibleChildName(): string
    /**
     * Inserts `child` in the position after `sibling` in the list of children.
     * 
     * If `sibling` is `NULL`, inserts `child` at the first position.
     * @param child the widget to insert
     * @param sibling the sibling after which to insert `child`
     */
    insertChildAfter(child: Gtk.Widget, sibling: Gtk.Widget | null): void
    /**
     * Navigates to the previous or next child.
     * 
     * The switch is similar to performing a swipe gesture to go in `direction`.
     * @param direction the direction
     */
    navigate(direction: NavigationDirection): boolean
    /**
     * Inserts `child` at the first position in `self`.
     * @param child the widget to prepend
     */
    prepend(child: Gtk.Widget): void
    /**
     * Moves `child` to the position after `sibling` in the list of children.
     * 
     * If `sibling` is `NULL`, move `child` to the first position.
     * @param child the widget to move, must be a child of `self`
     * @param sibling the sibling to move `child` after
     */
    reorderChildAfter(child: Gtk.Widget, sibling: Gtk.Widget | null): void
    /**
     * Sets whether swipe gestures for navigating backward are enabled.
     * @param canSwipeBack the new value
     */
    setCanSwipeBack(canSwipeBack: boolean): void
    /**
     * Sets whether swipe gestures for navigating forward are enabled.
     * @param canSwipeForward the new value
     */
    setCanSwipeForward(canSwipeForward: boolean): void
    /**
     * Sets whether `self` is homogeneous for a given orientation.
     * 
     * If set to `FALSE`, different children can have different size along the
     * opposite orientation.
     * @param orientation the orientation
     * @param homogeneous `TRUE` to make `self` homogeneous
     */
    setHomogeneous(orientation: Gtk.Orientation, homogeneous: boolean): void
    /**
     * Sets whether `self` will interpolate its size when changing the visible child.
     * 
     * `self` will interpolate its size between the current one and the one it'll
     * take after changing the visible child, according to the set transition
     * duration.
     * @param interpolateSize the new value
     */
    setInterpolateSize(interpolateSize: boolean): void
    /**
     * Sets the mode transition animation duration for `self`.
     * @param duration the new duration, in milliseconds
     */
    setTransitionDuration(duration: number): void
    /**
     * Sets the type of animation used for transitions between children.
     * 
     * The transition type can be changed without problems at runtime, so it is
     * possible to change the animation based on the child that is about to become
     * current.
     * @param transition the new transition type
     */
    setTransitionType(transition: DeckTransitionType): void
    /**
     * Sets the currently visible widget.
     * @param visibleChild the new child
     */
    setVisibleChild(visibleChild: Gtk.Widget): void
    /**
     * Makes the child with the name `name` visible.
     * 
     * See [method`Deck`.set_visible_child] for more details.
     * @param name the name of a child
     */
    setVisibleChildName(name: string): void

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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Handy-1.Handy.Deck

    connect(sigName: "notify::can-swipe-back", callback: any): number
    on(sigName: "notify::can-swipe-back", callback: any): number
    once(sigName: "notify::can-swipe-back", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-swipe-back", ...args: any[]): void
    connect(sigName: "notify::can-swipe-forward", callback: any): number
    on(sigName: "notify::can-swipe-forward", callback: any): number
    once(sigName: "notify::can-swipe-forward", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-swipe-forward", ...args: any[]): void
    connect(sigName: "notify::hhomogeneous", callback: any): number
    on(sigName: "notify::hhomogeneous", callback: any): number
    once(sigName: "notify::hhomogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hhomogeneous", ...args: any[]): void
    connect(sigName: "notify::interpolate-size", callback: any): number
    on(sigName: "notify::interpolate-size", callback: any): number
    once(sigName: "notify::interpolate-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interpolate-size", ...args: any[]): void
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
 * A swipeable widget showing one of the visible children at a time.
 * 
 * The `HdyDeck` widget displays one of the visible children, similar to a
 * [class`Gtk`.Stack]. The children are strictly ordered and can be navigated
 * using swipe gestures.
 * 
 * The ???over??? and ???under??? stack the children one on top of the other, while the
 * ???slide??? transition puts the children side by side. While navigating to a
 * child on the side or below can be performed by swiping the current child
 * away, navigating to an upper child requires dragging it from the edge where
 * it resides. This doesn't affect non-dragging swipes.
 * 
 * The ???over??? and ???under??? transitions can draw their shadow on top of the
 * window's transparent areas, like the rounded corners. This is a side-effect
 * of allowing shadows to be drawn on top of OpenGL areas. It can be mitigated
 * by using [class`Window]` or [class`ApplicationWindow]` as they will crop
 * anything drawn beyond the rounded corners.
 * 
 * The child property `navigatable` can be set on `HdyDeck` children to
 * determine whether they can be navigated to when folded. If `FALSE`, the child
 * will be ignored by [method`Deck`.get_adjacent_child], [method`Deck`.navigate],
 * and swipe gestures. This can be used used to prevent switching to widgets
 * like separators.
 * 
 * ## CSS nodes
 * 
 * `HdyDeck` has a single CSS node with name `deck`.
 * @class 
 */
export class Deck extends Gtk.Container {

    // Own properties of Handy-1.Handy.Deck

    static name: string

    // Constructors of Handy-1.Handy.Deck

    constructor(config?: Deck.ConstructorProperties) 
    /**
     * Creates a new `HdyDeck`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyDeck`.
     * @constructor 
     */
    static new(): Deck
    _init(config?: Deck.ConstructorProperties): void
}

export module EnumValueObject {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface EnumValueObject {

    // Owm methods of Handy-1.Handy.EnumValueObject

    /**
     * Gets the name of `self`.
     */
    getName(): string
    /**
     * Gets the nick of `self`.
     */
    getNick(): string
    /**
     * Gets the value of `self`.
     */
    getValue(): number

    // Class property signals of Handy-1.Handy.EnumValueObject

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An object representing an [struct`GObject`.EnumValue].
 * 
 * The `HdyEnumValueObject` object represents a [struct`GObject`.EnumValue],
 * allowing it to be used with [iface`Gio`.ListModel].
 * @class 
 */
export class EnumValueObject extends GObject.Object {

    // Own properties of Handy-1.Handy.EnumValueObject

    static name: string

    // Constructors of Handy-1.Handy.EnumValueObject

    constructor(config?: EnumValueObject.ConstructorProperties) 
    /**
     * Creates a new `HdyEnumValueObject`.
     * @constructor 
     * @param enumValue 
     */
    constructor(enumValue: GObject.EnumValue) 
    /**
     * Creates a new `HdyEnumValueObject`.
     * @constructor 
     * @param enumValue 
     */
    static new(enumValue: GObject.EnumValue): EnumValueObject
    _init(config?: EnumValueObject.ConstructorProperties): void
}

export module ExpanderRow {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, PreferencesRow.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.ExpanderRow

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
        /**
         * Whether an embedded underline in the title or subtitle labels indicates a
         * mnemonic.
         */
        useUnderline?: boolean | null
    }

}

export interface ExpanderRow extends Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {

    // Own properties of Handy-1.Handy.ExpanderRow

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
    /**
     * Whether an embedded underline in the title or subtitle labels indicates a
     * mnemonic.
     */
    useUnderline: boolean

    // Own fields of Handy-1.Handy.ExpanderRow

    parentInstance: any

    // Owm methods of Handy-1.Handy.ExpanderRow

    /**
     * Adds an action widget to `self`.
     * @param widget the action widget
     */
    addAction(widget: Gtk.Widget): void
    /**
     * Adds a prefix widget to `self`.
     * @param widget the prefix widget
     */
    addPrefix(widget: Gtk.Widget): void
    /**
     * Gets whether the expansion of `self` is enabled.
     */
    getEnableExpansion(): boolean
    getExpanded(): boolean
    /**
     * Gets the icon name for `self`.
     */
    getIconName(): string
    /**
     * Gets whether the switch enabling the expansion of `self` is visible.
     */
    getShowEnableSwitch(): boolean
    /**
     * Gets the subtitle for `self`.
     */
    getSubtitle(): string | null
    /**
     * Gets whether an embedded underline in the title or subtitle labels indicates
     * a mnemonic.
     */
    getUseUnderline(): boolean
    /**
     * Sets whether the expansion of `self` is enabled.
     * @param enableExpansion `TRUE` to enable the expansion
     */
    setEnableExpansion(enableExpansion: boolean): void
    setExpanded(expanded: boolean): void
    /**
     * Sets the icon name for `self`.
     * @param iconName the icon name
     */
    setIconName(iconName: string): void
    /**
     * Sets whether the switch enabling the expansion of `self` is visible.
     * @param showEnableSwitch `TRUE` to show the switch enabling the expansion
     */
    setShowEnableSwitch(showEnableSwitch: boolean): void
    /**
     * Sets the subtitle for `self`.
     * @param subtitle the subtitle
     */
    setSubtitle(subtitle: string | null): void
    /**
     * Sets whether an embedded underline in the title or subtitle labels indicates
     * a mnemonic.
     * @param useUnderline `TRUE` if underlines in the text indicate mnemonics
     */
    setUseUnderline(useUnderline: boolean): void

    // Conflicting methods

    /**
     * For widgets that can be ???activated??? (buttons, menu items, etc.)
     * this function activates them. Activation is what happens when you
     * press Enter on a widget during key navigation. If `widget` isn't
     * activatable, the function returns %FALSE.
     */
    activate(): boolean
    activate(): void

    // Overloads of activate

    /**
     * For widgets that can be ???activated??? (buttons, menu items, etc.)
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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

    // Class property signals of Handy-1.Handy.ExpanderRow

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
    connect(sigName: "notify::use-underline", callback: any): number
    on(sigName: "notify::use-underline", callback: any): number
    once(sigName: "notify::use-underline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: any): number
    on(sigName: "notify::activatable", callback: any): number
    once(sigName: "notify::activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: any): number
    on(sigName: "notify::selectable", callback: any): number
    once(sigName: "notify::selectable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selectable", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A [class`Gtk`.ListBoxRow] used to reveal widgets.
 * 
 * The `HdyExpanderRow` widget allows the user to reveal or hide widgets below
 * it. It also allows the user to enable the expansion of the row, allowing to
 * disable all that the row contains.
 * 
 * ## HdyExpanderRow as GtkBuildable
 * 
 * The `HdyExpanderRow` implementation of the [iface`Gtk`.Buildable] interface
 * supports adding a child as an action widget by specifying ???action??? as the
 * ???type??? attribute of a <child> element.
 * 
 * It also supports adding it as a prefix widget by specifying ???prefix??? as the
 * ???type??? attribute of a <child> element.
 * 
 * ## CSS nodes
 * 
 * `HdyExpanderRow` has a main CSS node with name `row`, and the `.expander`
 * style class. It has the `.empty` style class when it contains no children.
 * 
 * It contains the subnodes `row.header` for its main embedded row,
 * `list.nested` for the list it can expand, and `image.expander-row-arrow` for
 * its arrow.
 * 
 * When expanded, `HdyExpanderRow` will add the
 * `.checked-expander-row-previous-sibling` style class to its previous sibling,
 * and remove it when retracted.
 * @class 
 */
export class ExpanderRow extends PreferencesRow {

    // Own properties of Handy-1.Handy.ExpanderRow

    static name: string

    // Constructors of Handy-1.Handy.ExpanderRow

    constructor(config?: ExpanderRow.ConstructorProperties) 
    /**
     * Creates a new `HdyExpanderRow`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyExpanderRow`.
     * @constructor 
     */
    static new(): ExpanderRow
    _init(config?: ExpanderRow.ConstructorProperties): void
}

export module Flap {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Swipeable.ConstructorProperties, Gtk.Container.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.Flap

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
         * If `GTK_PACK_START`, the flap is displayed before the content, if
         * `GTK_PACK_END`, it's displayed after the content.
         */
        flapPosition?: Gtk.PackType | null
        /**
         * The fold transition animation duration, in milliseconds.
         */
        foldDuration?: number | null
        /**
         * The current fold policy.
         * 
         * See [enum`FlapFoldPolicy]` for available policies.
         */
        foldPolicy?: FlapFoldPolicy | null
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
         * The reveal transition animation duration, in milliseconds.
         */
        revealDuration?: number | null
        /**
         * Whether the flap widget is revealed.
         */
        revealFlap?: boolean | null
        /**
         * The separator widget.
         * 
         * It's displayed between content and flap when there's no shadow to display.
         * When exactly it's visible depends on the [property`Flap:`transition-type]
         * value. If `NULL`, no separator will be used.
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
         * will be seen through it with `HDY_FLAP_TRANSITION_TYPE_OVER` transitions;
         * add the `.background` style class to it if this is unwanted.
         */
        transitionType?: FlapTransitionType | null
    }

}

export interface Flap extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Swipeable {

    // Own properties of Handy-1.Handy.Flap

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
     * If `GTK_PACK_START`, the flap is displayed before the content, if
     * `GTK_PACK_END`, it's displayed after the content.
     */
    flapPosition: Gtk.PackType
    /**
     * The fold transition animation duration, in milliseconds.
     */
    foldDuration: number
    /**
     * The current fold policy.
     * 
     * See [enum`FlapFoldPolicy]` for available policies.
     */
    foldPolicy: FlapFoldPolicy
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
     * The reveal transition animation duration, in milliseconds.
     */
    revealDuration: number
    /**
     * Whether the flap widget is revealed.
     */
    revealFlap: boolean
    /**
     * The current reveal transition progress.
     * 
     * 0 means fully hidden, 1 means fully revealed. See
     * [property`Flap:`reveal-flap].
     */
    readonly revealProgress: number
    /**
     * The separator widget.
     * 
     * It's displayed between content and flap when there's no shadow to display.
     * When exactly it's visible depends on the [property`Flap:`transition-type]
     * value. If `NULL`, no separator will be used.
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
     * will be seen through it with `HDY_FLAP_TRANSITION_TYPE_OVER` transitions;
     * add the `.background` style class to it if this is unwanted.
     */
    transitionType: FlapTransitionType

    // Owm methods of Handy-1.Handy.Flap

    /**
     * Gets the content widget for `self`
     */
    getContent(): Gtk.Widget | null
    /**
     * Gets the flap widget for `self`
     */
    getFlap(): Gtk.Widget | null
    /**
     * Gets the flap position for `self`.
     */
    getFlapPosition(): Gtk.PackType
    /**
     * Gets the amount of time that fold transitions will take.
     */
    getFoldDuration(): number
    /**
     * Gets the current fold policy of `self`.
     */
    getFoldPolicy(): FlapFoldPolicy
    /**
     * Gets whether `self` is currently folded.
     */
    getFolded(): boolean
    /**
     * Gets whether `self` is locked.
     */
    getLocked(): boolean
    /**
     * Gets whether the `self` is modal.
     */
    getModal(): boolean
    /**
     * Gets the amount of time that reveal transitions will take.
     */
    getRevealDuration(): number
    /**
     * Gets whether the flap widget is revealed for `self`.
     */
    getRevealFlap(): boolean
    /**
     * Gets the current reveal transition progress for `self`.
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
     * 
     * It is always displayed when unfolded, and partially visible when folded.
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
     * Sets the duration that fold transitions will take.
     * @param duration the new duration, in milliseconds
     */
    setFoldDuration(duration: number): void
    /**
     * Sets the current fold policy for `self`.
     * @param policy a fold policy
     */
    setFoldPolicy(policy: FlapFoldPolicy): void
    /**
     * Sets whether `self` is locked.
     * 
     * If `FALSE`, folding `self` when the flap is revealed automatically closes it,
     * and unfolding it when the flap is not revealed opens it. If `TRUE`,
     * [property`Flap:`reveal-flap] value never changes on its own.
     * @param locked the new value
     */
    setLocked(locked: boolean): void
    /**
     * Sets whether the `self` can be closed with a click.
     * 
     * If `modal` is `TRUE`, clicking the content widget while flap is revealed, or
     * pressing the <kbd>Esc</kbd> key, will close the flap. If `FALSE`, clicks are
     * passed through to the content widget.
     * @param modal whether `self` can be closed with a click
     */
    setModal(modal: boolean): void
    /**
     * Sets the duration that reveal transitions in `self` will take.
     * @param duration the new duration, in milliseconds
     */
    setRevealDuration(duration: number): void
    /**
     * Sets whether the flap widget is revealed for `self`.
     * @param revealFlap `TRUE` to reveal the flap widget, `FALSE` otherwise
     */
    setRevealFlap(revealFlap: boolean): void
    /**
     * Sets the separator widget for `self`.
     * @param separator the separator widget
     */
    setSeparator(separator: Gtk.Widget | null): void
    /**
     * Sets whether `self` can be closed with a swipe gesture.
     * 
     * The area that can be swiped depends on the [property`Flap:`transition-type] value.
     * @param swipeToClose whether `self` can be closed with a swipe gesture
     */
    setSwipeToClose(swipeToClose: boolean): void
    /**
     * Sets whether `self` can be opened with a swipe gesture.
     * 
     * The area that can be swiped depends on the [property`Flap:`transition-type]
     * value.
     * @param swipeToOpen whether `self` can be opened with a swipe gesture
     */
    setSwipeToOpen(swipeToOpen: boolean): void
    /**
     * Sets the type of animation used for reveal and fold transitions in `self`.
     * @param transitionType the new transition type
     */
    setTransitionType(transitionType: FlapTransitionType): void

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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Handy-1.Handy.Flap

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
    connect(sigName: "notify::reveal-duration", callback: any): number
    on(sigName: "notify::reveal-duration", callback: any): number
    once(sigName: "notify::reveal-duration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reveal-duration", ...args: any[]): void
    connect(sigName: "notify::reveal-flap", callback: any): number
    on(sigName: "notify::reveal-flap", callback: any): number
    once(sigName: "notify::reveal-flap", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reveal-flap", ...args: any[]): void
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
 * An adaptive container acting like a box or an overlay.
 * 
 * The `HdyFlap` widget can display its children like a [class`Gtk`.Box] does or
 * like a [class`Gtk`.Overlay] does, according to the
 * [property`Flap:`fold-policy] value.
 * 
 * `HdyFlap` has at most three children: [property`Flap:`content],
 * [property`Flap:`flap] and [property`Flap:`separator]. Content is the primary
 * child, flap is displayed next to it when unfolded, or overlays it when
 * folded. Flap can be shown or hidden by changing the
 * [property`Flap:`reveal-flap] value, as well as via swipe gestures if
 * [property`Flap:`swipe-to-open] and/or [property`Flap:`swipe-to-close] are set
 * to `TRUE`.
 * 
 * Optionally, a separator can be provided, which would be displayed between the
 * content and the flap when there's no shadow to separate them, depending on
 * the transition type.
 * 
 * [property`Flap:`flap] is transparent by default; add the `.background` style
 * class to it if this is unwanted.
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
 * ## HdyFlap as GtkBuildable
 * 
 * The `HdyFlap` implementation of the [iface`Gtk`.Buildable] interface supports
 * setting the flap child by specifying ???flap??? as the ???type??? attribute of a
 * <child> element, and separator by specifying ???separator???. Specifying
 * ???content??? child type or omitting it results in setting the content child.
 * 
 * ## CSS nodes
 * 
 * `HdyFlap` has a single CSS node with name `flap`. The node will get the style
 * classes `.folded` when it is folded, and `.unfolded` when it's not.
 * @class 
 */
export class Flap extends Gtk.Container {

    // Own properties of Handy-1.Handy.Flap

    static name: string

    // Constructors of Handy-1.Handy.Flap

    constructor(config?: Flap.ConstructorProperties) 
    /**
     * Creates a new `HdyFlap`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyFlap`.
     * @constructor 
     */
    static new(): Flap
    _init(config?: Flap.ConstructorProperties): void
}

export module HeaderBar {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Container.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.HeaderBar

        /**
         * The policy for aligning the center widget.
         */
        centeringPolicy?: CenteringPolicy | null
        /**
         * Custom title widget to display.
         */
        customTitle?: Gtk.Widget | null
        /**
         * The decoration layout for buttons.
         * 
         * If this property is not set, the
         * [property`Gtk`.Settings:gtk-decoration-layout] setting is used.
         * 
         * There can be valid reasons for overriding the setting, such as a header bar
         * design that does not allow for buttons to take room on the right, or only
         * offers room for a single close button. Split header bars are another example
         * for overriding the setting.
         * 
         * The format of the string is button names, separated by commas. A colon
         * separates the buttons that should appear on the start from those on the
         * end. Recognized button names are minimize, maximize, close, icon (the
         * window icon) and menu (a menu button for the fallback app menu).
         * 
         * For example, ???menu:minimize,maximize,close??? specifies a menu on the left, and
         * minimize, maximize and close buttons on the right.
         */
        decorationLayout?: string | null
        /**
         * Whether [property`HeaderBar:`decoration-layout] is set.
         */
        decorationLayoutSet?: boolean | null
        /**
         * Whether to reserve space for a subtitle, even if none is currently set.
         */
        hasSubtitle?: boolean | null
        /**
         * Whether the size should smoothly change when changing between children.
         * 
         * If `TRUE`, the header bar will interpolate its size between the one of the
         * previous visible child and the one of the new visible child, according to
         * the set transition duration and the orientation, e.g. if the orientation is
         * horizontal, it will interpolate the its height.
         */
        interpolateSize?: boolean | null
        /**
         * Whether to show window decorations.
         * 
         * Which buttons are actually shown and where is determined by the
         * [property`HeaderBar:`decoration-layout] property, and by the state of the
         * window (e.g. a close button will not be shown if the window can't be
         * closed).
         */
        showCloseButton?: boolean | null
        /**
         * The amount of space between children.
         */
        spacing?: number | null
        /**
         * The subtitle to display.
         */
        subtitle?: string | null
        /**
         * The title to display.
         */
        title?: string | null
        /**
         * The transition duration, in milliseconds.
         */
        transitionDuration?: number | null
    }

}

export interface HeaderBar extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.HeaderBar

    /**
     * The policy for aligning the center widget.
     */
    centeringPolicy: CenteringPolicy
    /**
     * Custom title widget to display.
     */
    customTitle: Gtk.Widget
    /**
     * The decoration layout for buttons.
     * 
     * If this property is not set, the
     * [property`Gtk`.Settings:gtk-decoration-layout] setting is used.
     * 
     * There can be valid reasons for overriding the setting, such as a header bar
     * design that does not allow for buttons to take room on the right, or only
     * offers room for a single close button. Split header bars are another example
     * for overriding the setting.
     * 
     * The format of the string is button names, separated by commas. A colon
     * separates the buttons that should appear on the start from those on the
     * end. Recognized button names are minimize, maximize, close, icon (the
     * window icon) and menu (a menu button for the fallback app menu).
     * 
     * For example, ???menu:minimize,maximize,close??? specifies a menu on the left, and
     * minimize, maximize and close buttons on the right.
     */
    decorationLayout: string
    /**
     * Whether [property`HeaderBar:`decoration-layout] is set.
     */
    decorationLayoutSet: boolean
    /**
     * Whether to reserve space for a subtitle, even if none is currently set.
     */
    hasSubtitle: boolean
    /**
     * Whether the size should smoothly change when changing between children.
     * 
     * If `TRUE`, the header bar will interpolate its size between the one of the
     * previous visible child and the one of the new visible child, according to
     * the set transition duration and the orientation, e.g. if the orientation is
     * horizontal, it will interpolate the its height.
     */
    interpolateSize: boolean
    /**
     * Whether to show window decorations.
     * 
     * Which buttons are actually shown and where is determined by the
     * [property`HeaderBar:`decoration-layout] property, and by the state of the
     * window (e.g. a close button will not be shown if the window can't be
     * closed).
     */
    showCloseButton: boolean
    /**
     * The amount of space between children.
     */
    spacing: number
    /**
     * The subtitle to display.
     */
    subtitle: string
    /**
     * The title to display.
     */
    title: string
    /**
     * The transition duration, in milliseconds.
     */
    transitionDuration: number
    /**
     * Whether or not the transition is currently running.
     */
    readonly transitionRunning: boolean

    // Own fields of Handy-1.Handy.HeaderBar

    parentInstance: any

    // Owm methods of Handy-1.Handy.HeaderBar

    /**
     * Gets the policy `self` follows to horizontally align its center widget.
     */
    getCenteringPolicy(): CenteringPolicy
    /**
     * Retrieves the custom title widget of the header.
     */
    getCustomTitle(): Gtk.Widget | null
    /**
     * Gets the decoration layout.
     */
    getDecorationLayout(): string
    /**
     * Gets whether space is reserved for a subtitle, regardless if one is currently
     * set or not.
     */
    getHasSubtitle(): boolean
    /**
     * Gets whether `self` should interpolate its size on visible child change.
     */
    getInterpolateSize(): boolean
    /**
     * Gets whether this header bar shows the standard window decorations.
     */
    getShowCloseButton(): boolean
    /**
     * Gets the subtitle of the header.
     */
    getSubtitle(): string | null
    /**
     * Retrieves the title of the header.
     */
    getTitle(): string | null
    /**
     * Gets the amount of time that transitions between pages will take.
     */
    getTransitionDuration(): number
    /**
     * Gets whether the `self` is currently in a transition from one page to another.
     */
    getTransitionRunning(): boolean
    /**
     * Adds `child` to `self,` packed with reference to the end of the `self`.
     * @param child the widget to be added to `self`
     */
    packEnd(child: Gtk.Widget): void
    /**
     * Adds `child` to `self,` packed with reference to the start of the `self`.
     * @param child the widget to be added to `self`
     */
    packStart(child: Gtk.Widget): void
    /**
     * Sets the policy `self` must follow to horizontally align its center widget.
     * @param centeringPolicy the centering policy
     */
    setCenteringPolicy(centeringPolicy: CenteringPolicy): void
    /**
     * Sets a custom title for the header bar.
     * 
     * The title should help a user identify the current view. This supersedes any
     * title set by [method`HeaderBar`.set_title] or [method`HeaderBar`.set_subtitle].
     * To achieve the same style as the builtin title and subtitle, use the `.title`
     * and `.subtitle` style classes.
     * 
     * You should set the custom title to `NULL`, for the header title label to be
     * visible again.
     * @param titleWidget a custom widget to use for a title
     */
    setCustomTitle(titleWidget: Gtk.Widget | null): void
    /**
     * Sets the decoration layout for this header bar.
     * @param layout a decoration layout
     */
    setDecorationLayout(layout: string | null): void
    /**
     * Sets whether space is reserved for a subtitle, even if none is currently set.
     * @param setting `TRUE` to reserve space for a subtitle
     */
    setHasSubtitle(setting: boolean): void
    /**
     * Sets whether `self` should interpolate its size on visible child change.
     * @param interpolateSize `TRUE` to interpolate the size
     */
    setInterpolateSize(interpolateSize: boolean): void
    /**
     * Sets whether this header bar shows the standard window decorations.
     * @param setting `TRUE` to show standard window decorations
     */
    setShowCloseButton(setting: boolean): void
    /**
     * Sets the subtitle of the header bar.
     * 
     * The title should give a user an additional detail to help them identify the
     * current view.
     * 
     * Note that [class`HeaderBar]` by default reserves room for the subtitle, even
     * if none is currently set. If this is not desired, set the
     * [property`HeaderBar:`has-subtitle] property to `FALSE`.
     * @param subtitle a subtitle
     */
    setSubtitle(subtitle: string | null): void
    /**
     * Sets the title of the [class`HeaderBar]`.
     * 
     * The title should help a user identify the current view. A good title should
     * not include the application name.
     * @param title a title
     */
    setTitle(title: string | null): void
    /**
     * Sets the duration that transitions between pages will take.
     * @param duration the new duration, in milliseconds
     */
    setTransitionDuration(duration: number): void

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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Handy-1.Handy.HeaderBar

    connect(sigName: "notify::centering-policy", callback: any): number
    on(sigName: "notify::centering-policy", callback: any): number
    once(sigName: "notify::centering-policy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::centering-policy", ...args: any[]): void
    connect(sigName: "notify::custom-title", callback: any): number
    on(sigName: "notify::custom-title", callback: any): number
    once(sigName: "notify::custom-title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::custom-title", ...args: any[]): void
    connect(sigName: "notify::decoration-layout", callback: any): number
    on(sigName: "notify::decoration-layout", callback: any): number
    once(sigName: "notify::decoration-layout", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::decoration-layout", ...args: any[]): void
    connect(sigName: "notify::decoration-layout-set", callback: any): number
    on(sigName: "notify::decoration-layout-set", callback: any): number
    once(sigName: "notify::decoration-layout-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::decoration-layout-set", ...args: any[]): void
    connect(sigName: "notify::has-subtitle", callback: any): number
    on(sigName: "notify::has-subtitle", callback: any): number
    once(sigName: "notify::has-subtitle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-subtitle", ...args: any[]): void
    connect(sigName: "notify::interpolate-size", callback: any): number
    on(sigName: "notify::interpolate-size", callback: any): number
    once(sigName: "notify::interpolate-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interpolate-size", ...args: any[]): void
    connect(sigName: "notify::show-close-button", callback: any): number
    on(sigName: "notify::show-close-button", callback: any): number
    once(sigName: "notify::show-close-button", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-close-button", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
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
 * A title bar widget.
 * 
 * `HdyHeaderBar` is similar to [class`Gtk`.HeaderBar] but is designed to fix
 * some of its shortcomings for adaptive applications.
 * 
 * `HdyHeaderBar` doesn't force the custom title widget to be vertically
 * centered, hence allowing it to fill up the whole height, which is e.g. needed
 * for [class`ViewSwitcher]`.
 * 
 * When used in a mobile dialog, `HdyHeaderBar` will replace its window
 * decorations by a back button allowing to close it. It doesn't have to be its
 * direct child and you can use any complex contraption you like as the dialog's
 * titlebar.
 * 
 * `HdyHeaderBar` can be used in window's content area rather than titlebar, and
 * will still be draggable and will handle right click, middle click and double
 * click as expected from a titlebar. This is particularly useful with
 * [class`Window]` or [class`ApplicationWindow]`.
 * 
 * ## CSS nodes
 * 
 * `HdyHeaderBar` has a single CSS node with name `headerbar`.
 * @class 
 */
export class HeaderBar extends Gtk.Container {

    // Own properties of Handy-1.Handy.HeaderBar

    static name: string

    // Constructors of Handy-1.Handy.HeaderBar

    constructor(config?: HeaderBar.ConstructorProperties) 
    /**
     * Creates a new `HdyHeaderBar`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyHeaderBar`.
     * @constructor 
     */
    static new(): HeaderBar
    _init(config?: HeaderBar.ConstructorProperties): void
}

export module HeaderGroup {

    // Signal callback interfaces

    /**
     * Signal callback interface for `update-decoration-layouts`
     */
    export interface UpdateDecorationLayoutsSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Buildable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.HeaderGroup

        /**
         * Whether the elements of the group should all receive the full decoration.
         * 
         * This is useful in conjunction with [property`Leaflet:`folded] when the
         * leaflet contains the header bars of the group, as you want them all to
         * display the complete decoration when the leaflet is folded.
         */
        decorateAll?: boolean | null
    }

}

export interface HeaderGroup extends Gtk.Buildable {

    // Own properties of Handy-1.Handy.HeaderGroup

    /**
     * Whether the elements of the group should all receive the full decoration.
     * 
     * This is useful in conjunction with [property`Leaflet:`folded] when the
     * leaflet contains the header bars of the group, as you want them all to
     * display the complete decoration when the leaflet is folded.
     */
    decorateAll: boolean

    // Owm methods of Handy-1.Handy.HeaderGroup

    /**
     * Adds `header_bar` to `self`.
     * 
     * When the widget is destroyed or no longer referenced elsewhere, it will be
     * removed from the header group.
     * @param headerBar the header bar to add
     */
    addGtkHeaderBar(headerBar: Gtk.HeaderBar): void
    /**
     * Adds `header_bar` to `self`.
     * 
     * When the widget is destroyed or no longer referenced elsewhere, it will be
     * removed from the header group.
     * @param headerBar the header bar to add
     */
    addHeaderBar(headerBar: HeaderBar): void
    /**
     * Adds `header_group` to `self`.
     * 
     * When the nested group is no longer referenced elsewhere, it will be removed
     * from the header group.
     * @param headerGroup the header group to add
     */
    addHeaderGroup(headerGroup: HeaderGroup): void
    /**
     * Returns the list of children associated with `self`.
     */
    getChildren(): HeaderGroupChild[]
    /**
     * Gets whether the elements of the group should all receive the full
     * decoration.
     */
    getDecorateAll(): boolean
    /**
     * Removes `child` from `self`.
     * @param child the header group child to remove
     */
    removeChild(child: HeaderGroupChild): void
    /**
     * Removes `header_bar` from `self`.
     * @param headerBar the header bar to remove
     */
    removeGtkHeaderBar(headerBar: Gtk.HeaderBar): void
    /**
     * Removes `header_bar` from `self`.
     * @param headerBar the header bar to remove
     */
    removeHeaderBar(headerBar: HeaderBar): void
    /**
     * Removes a nested `HdyHeaderGroup` from `self`.
     * @param headerGroup the header group to remove
     */
    removeHeaderGroup(headerGroup: HeaderGroup): void
    /**
     * Sets whether the elements of the group should all receive the full
     * decoration.
     * @param decorateAll whether the elements of the group should all receive the full   decoration
     */
    setDecorateAll(decorateAll: boolean): void

    // Own signals of Handy-1.Handy.HeaderGroup

    connect(sigName: "update-decoration-layouts", callback: HeaderGroup.UpdateDecorationLayoutsSignalCallback): number
    on(sigName: "update-decoration-layouts", callback: HeaderGroup.UpdateDecorationLayoutsSignalCallback): number
    once(sigName: "update-decoration-layouts", callback: HeaderGroup.UpdateDecorationLayoutsSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "update-decoration-layouts", ...args: any[]): void

    // Class property signals of Handy-1.Handy.HeaderGroup

    connect(sigName: "notify::decorate-all", callback: any): number
    on(sigName: "notify::decorate-all", callback: any): number
    once(sigName: "notify::decorate-all", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::decorate-all", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An object handling composite title bars.
 * 
 * The `HdyHeaderGroup` object handles the header bars of a composite title bar.
 * It splits the window decoration across the header bars, giving the left side
 * of the decorations to the leftmost header bar, and the right side of the
 * decorations to the rightmost header bar. See
 * [method`HeaderBar`.set_decoration_layout].
 * 
 * The [property`HeaderGroup:`decorate-all] property can be used in conjunction
 * with [property`Leaflet:`folded] when the title bar is split across the pages
 * of a [class`Leaflet]` to automatically display the decorations on all the
 * pages when the leaflet is folded.
 * 
 * You can nest header groups, which is convenient when you nest leaflets too:
 * 
 * ```xml
 * <object class="HdyHeaderGroup" id="inner_header_group">
 *   <property name="decorate-all" bind-source="inner_leaflet" bind-property="folded" bind-flags="sync-create"/>
 *   <headerbars>
 *     <headerbar name="inner_header_bar_1"/>
 *     <headerbar name="inner_header_bar_2"/>
 *   </headerbars>
 * </object>
 * <object class="HdyHeaderGroup" id="outer_header_group">
 *   <property name="decorate-all" bind-source="outer_leaflet" bind-property="folded" bind-flags="sync-create"/>
 *   <headerbars>
 *     <headerbar name="inner_header_group"/>
 *     <headerbar name="outer_header_bar"/>
 *   </headerbars>
 * </object>
 * ```
 * @class 
 */
export class HeaderGroup extends GObject.Object {

    // Own properties of Handy-1.Handy.HeaderGroup

    static name: string

    // Constructors of Handy-1.Handy.HeaderGroup

    constructor(config?: HeaderGroup.ConstructorProperties) 
    /**
     * Creates a new `HdyHeaderGroup`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyHeaderGroup`.
     * @constructor 
     */
    static new(): HeaderGroup
    _init(config?: HeaderGroup.ConstructorProperties): void
}

export module HeaderGroupChild {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface HeaderGroupChild {

    // Owm methods of Handy-1.Handy.HeaderGroupChild

    /**
     * Gets the child type.
     */
    getChildType(): HeaderGroupChildType
    /**
     * Gets the child [class`Gtk`.HeaderBar].
     * 
     * Use [method`HeaderGroupChild`.get_child_type] to check the child type.
     */
    getGtkHeaderBar(): Gtk.HeaderBar
    /**
     * Gets the child [class`HeaderBar]`.
     * 
     * Use [method`HeaderGroupChild`.get_child_type] to check the child type.
     */
    getHeaderBar(): HeaderBar
    /**
     * Gets the child [class`HeaderGroup]`.
     * 
     * Use [method`HeaderGroupChild`.get_child_type] to check the child type.
     */
    getHeaderGroup(): HeaderGroup

    // Class property signals of Handy-1.Handy.HeaderGroupChild

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A child object for [class`HeaderGroup]`.
 * @class 
 */
export class HeaderGroupChild extends GObject.Object {

    // Own properties of Handy-1.Handy.HeaderGroupChild

    static name: string

    // Constructors of Handy-1.Handy.HeaderGroupChild

    constructor(config?: HeaderGroupChild.ConstructorProperties) 
    _init(config?: HeaderGroupChild.ConstructorProperties): void
}

export module Keypad {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.Keypad

        /**
         * The amount of space between two consecutive columns.
         */
        columnSpacing?: number | null
        /**
         * The widget for the lower end corner of `self`.
         */
        endAction?: Gtk.Widget | null
        /**
         * The entry widget connected to the keypad.
         * 
         * The entry will block any input not possible to type with the keypad.
         */
        entry?: Gtk.Entry | null
        /**
         * Whether standard letters should be displayed below the digits on the
         * buttons.
         */
        lettersVisible?: boolean | null
        /**
         * The amount of space between two consecutive rows.
         */
        rowSpacing?: number | null
        /**
         * The widget for the lower start corner of `self`.
         */
        startAction?: Gtk.Widget | null
        /**
         * Whether to display symbols.
         * 
         * This includes hash and asterisk buttons, and the plus symbol at the bottom
         * of its 0 button.
         */
        symbolsVisible?: boolean | null
    }

}

export interface Keypad extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.Keypad

    /**
     * The amount of space between two consecutive columns.
     */
    columnSpacing: number
    /**
     * The widget for the lower end corner of `self`.
     */
    endAction: Gtk.Widget
    /**
     * The entry widget connected to the keypad.
     * 
     * The entry will block any input not possible to type with the keypad.
     */
    entry: Gtk.Entry
    /**
     * Whether standard letters should be displayed below the digits on the
     * buttons.
     */
    lettersVisible: boolean
    /**
     * The amount of space between two consecutive rows.
     */
    rowSpacing: number
    /**
     * The widget for the lower start corner of `self`.
     */
    startAction: Gtk.Widget
    /**
     * Whether to display symbols.
     * 
     * This includes hash and asterisk buttons, and the plus symbol at the bottom
     * of its 0 button.
     */
    symbolsVisible: boolean

    // Own fields of Handy-1.Handy.Keypad

    parentInstance: any

    // Owm methods of Handy-1.Handy.Keypad

    /**
     * Returns the amount of space between the columns of `self`.
     */
    getColumnSpacing(): number
    /**
     * Gets the widget for the lower right corner (or left, in RTL locales).
     */
    getEndAction(): Gtk.Widget | null
    /**
     * Gets the connected entry.
     */
    getEntry(): Gtk.Entry
    /**
     * Gets whether standard letters are displayed below the digits on the buttons.
     */
    getLettersVisible(): boolean
    /**
     * Returns the amount of space between the rows of `self`.
     */
    getRowSpacing(): number
    /**
     * Gets the widget for the lower left corner (or right, in RTL locales).
     */
    getStartAction(): Gtk.Widget | null
    /**
     * Gets whether symbols are displayed.
     */
    getSymbolsVisible(): boolean
    /**
     * Sets the amount of space between columns of `self`.
     * @param spacing the amount of space to insert between columns
     */
    setColumnSpacing(spacing: number): void
    /**
     * Sets the widget for the lower right corner (or left, in RTL locales).
     * @param endAction the end action widget
     */
    setEndAction(endAction: Gtk.Widget | null): void
    /**
     * Binds `entry` to `self`.
     * @param entry an entry
     */
    setEntry(entry: Gtk.Entry | null): void
    /**
     * Sets whether standard letters are displayed below the digits on the buttons.
     * @param lettersVisible whether the letters below the digits should be visible
     */
    setLettersVisible(lettersVisible: boolean): void
    /**
     * Sets the amount of space between rows of `self`.
     * @param spacing the amount of space to insert between rows
     */
    setRowSpacing(spacing: number): void
    /**
     * Sets the widget for the lower left corner (or right, in RTL locales).
     * @param startAction the start action widget
     */
    setStartAction(startAction: Gtk.Widget | null): void
    /**
     * Sets whether standard letters are displayed below the digits on the buttons.
     * @param symbolsVisible whether the hash, plus, and asterisk symbols should be visible
     */
    setSymbolsVisible(symbolsVisible: boolean): void

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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Handy-1.Handy.Keypad

    connect(sigName: "notify::column-spacing", callback: any): number
    on(sigName: "notify::column-spacing", callback: any): number
    once(sigName: "notify::column-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::end-action", callback: any): number
    on(sigName: "notify::end-action", callback: any): number
    once(sigName: "notify::end-action", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::end-action", ...args: any[]): void
    connect(sigName: "notify::entry", callback: any): number
    on(sigName: "notify::entry", callback: any): number
    once(sigName: "notify::entry", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::entry", ...args: any[]): void
    connect(sigName: "notify::letters-visible", callback: any): number
    on(sigName: "notify::letters-visible", callback: any): number
    once(sigName: "notify::letters-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::letters-visible", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: any): number
    on(sigName: "notify::row-spacing", callback: any): number
    once(sigName: "notify::row-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::start-action", callback: any): number
    on(sigName: "notify::start-action", callback: any): number
    once(sigName: "notify::start-action", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::start-action", ...args: any[]): void
    connect(sigName: "notify::symbols-visible", callback: any): number
    on(sigName: "notify::symbols-visible", callback: any): number
    once(sigName: "notify::symbols-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::symbols-visible", ...args: any[]): void
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
 * A keypad for dialing numbers
 * 
 * The `HdyKeypad` widget is a keypad for entering numbers such as phone numbers
 * or PIN codes.
 * 
 * ## CSS nodes
 * 
 * `HdyKeypad` has a single CSS node with name `keypad`.
 * @class 
 */
export class Keypad extends Gtk.Bin {

    // Own properties of Handy-1.Handy.Keypad

    static name: string

    // Constructors of Handy-1.Handy.Keypad

    constructor(config?: Keypad.ConstructorProperties) 
    /**
     * Creates a new `HdyKeypad`.
     * @constructor 
     * @param symbolsVisible whether the hash, plus, and asterisk symbols should be visible
     * @param lettersVisible whether the letters below the digits should be visible
     */
    constructor(symbolsVisible: boolean, lettersVisible: boolean) 
    /**
     * Creates a new `HdyKeypad`.
     * @constructor 
     * @param symbolsVisible whether the hash, plus, and asterisk symbols should be visible
     * @param lettersVisible whether the letters below the digits should be visible
     */
    static new(symbolsVisible: boolean, lettersVisible: boolean): Keypad
    _init(config?: Keypad.ConstructorProperties): void
}

export module Leaflet {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Swipeable.ConstructorProperties, Gtk.Container.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.Leaflet

        /**
         * Whether swipe gestures allow switching to the previous navigatable child.
         */
        canSwipeBack?: boolean | null
        /**
         * Whether swipe gestures allow switching to the next navigatable child.
         */
        canSwipeForward?: boolean | null
        /**
         * The child transition animation duration, in milliseconds.
         */
        childTransitionDuration?: number | null
        /**
         * Whether to allocate the same width for all children when folded.
         */
        hhomogeneousFolded?: boolean | null
        /**
         * Whether to allocate the same width for all children when unfolded.
         */
        hhomogeneousUnfolded?: boolean | null
        /**
         * Whether the size should smoothly change when changing between children.
         */
        interpolateSize?: boolean | null
        /**
         * The mode transition animation duration, in milliseconds.
         */
        modeTransitionDuration?: number | null
        /**
         * The animation type used for transitions between modes and children.
         * 
         * The transition type can be changed without problems at runtime, so it is
         * possible to change the animation based on the mode or child that is about
         * to become current.
         */
        transitionType?: LeafletTransitionType | null
        /**
         * Whether to allocates the same height for all children when folded.
         */
        vhomogeneousFolded?: boolean | null
        /**
         * Whether to allocate the same height for all children when unfolded.
         */
        vhomogeneousUnfolded?: boolean | null
        /**
         * The widget currently visible when the leaflet is folded.
         * 
         * The transition is determined by [property`Leaflet:`transition-type] and
         * [property`Leaflet:`child-transition-duration]. The transition can be
         * cancelled by the user, in which case visible child will change back to the
         * previously visible child.
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

export interface Leaflet extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, Swipeable {

    // Own properties of Handy-1.Handy.Leaflet

    /**
     * Whether swipe gestures allow switching to the previous navigatable child.
     */
    canSwipeBack: boolean
    /**
     * Whether swipe gestures allow switching to the next navigatable child.
     */
    canSwipeForward: boolean
    /**
     * The child transition animation duration, in milliseconds.
     */
    childTransitionDuration: number
    /**
     * Whether a child transition is currently running.
     */
    readonly childTransitionRunning: boolean
    /**
     * Whether the leaflet is folded.
     * 
     * The leaflet will be folded if the size allocated to it is smaller than the
     * sum of the natural size of its children, it will be unfolded otherwise.
     */
    readonly folded: boolean
    /**
     * Whether to allocate the same width for all children when folded.
     */
    hhomogeneousFolded: boolean
    /**
     * Whether to allocate the same width for all children when unfolded.
     */
    hhomogeneousUnfolded: boolean
    /**
     * Whether the size should smoothly change when changing between children.
     */
    interpolateSize: boolean
    /**
     * The mode transition animation duration, in milliseconds.
     */
    modeTransitionDuration: number
    /**
     * The animation type used for transitions between modes and children.
     * 
     * The transition type can be changed without problems at runtime, so it is
     * possible to change the animation based on the mode or child that is about
     * to become current.
     */
    transitionType: LeafletTransitionType
    /**
     * Whether to allocates the same height for all children when folded.
     */
    vhomogeneousFolded: boolean
    /**
     * Whether to allocate the same height for all children when unfolded.
     */
    vhomogeneousUnfolded: boolean
    /**
     * The widget currently visible when the leaflet is folded.
     * 
     * The transition is determined by [property`Leaflet:`transition-type] and
     * [property`Leaflet:`child-transition-duration]. The transition can be
     * cancelled by the user, in which case visible child will change back to the
     * previously visible child.
     */
    visibleChild: Gtk.Widget
    /**
     * The name of the widget currently visible when the leaflet is folded.
     * 
     * See [property`Leaflet:`visible-child].
     */
    visibleChildName: string

    // Own fields of Handy-1.Handy.Leaflet

    parentInstance: any

    // Owm methods of Handy-1.Handy.Leaflet

    /**
     * Finds the previous or next navigatable child.
     * 
     * This will be the same widget [method`Leaflet`.navigate] will navigate to.
     * 
     * If there's no child to navigate to, `NULL` will be returned instead.
     * @param direction the direction
     */
    getAdjacentChild(direction: NavigationDirection): Gtk.Widget | null
    /**
     * Gets whether swipe gestures switch to the previous navigatable child.
     */
    getCanSwipeBack(): boolean
    /**
     * Gets whether swipe gestures switch to the next navigatable child.
     */
    getCanSwipeForward(): boolean
    /**
     * Finds the child of `self` with the name given as the argument.
     * 
     * Returns `NULL` if there is no child with this name.
     * @param name the name of the child to find
     */
    getChildByName(name: string): Gtk.Widget | null
    /**
     * Gets the amount of time that transitions between children will take.
     */
    getChildTransitionDuration(): number
    /**
     * Returns whether `self` is currently in a transition from one page to another.
     */
    getChildTransitionRunning(): boolean
    /**
     * Gets whether `self` is folded.
     */
    getFolded(): boolean
    /**
     * Gets whether `self` is homogeneous for the given fold and orientation.
     * @param folded the fold
     * @param orientation the orientation
     */
    getHomogeneous(folded: boolean, orientation: Gtk.Orientation): boolean
    /**
     * Gets whether to interpolate between the sizes of children on page switches.
     */
    getInterpolateSize(): boolean
    /**
     * Gets the amount of time that transitions between modes in `self` will take.
     */
    getModeTransitionDuration(): number
    /**
     * Gets the animation type that will be used for transitions between modes and
     * children.
     */
    getTransitionType(): LeafletTransitionType
    /**
     * Gets the visible child widget.
     */
    getVisibleChild(): Gtk.Widget
    /**
     * Gets the name of the currently visible child widget.
     */
    getVisibleChildName(): string
    /**
     * Inserts `child` in the position after `sibling` in the list of children.
     * 
     * If `sibling` is `NULL`, inserts `child` at the first position.
     * @param child the widget to insert
     * @param sibling the sibling after which to insert `child`
     */
    insertChildAfter(child: Gtk.Widget, sibling: Gtk.Widget | null): void
    /**
     * Navigates to the previous or next navigatable child.
     * 
     * The switch is similar to performing a swipe gesture to go in `direction`.
     * @param direction the direction
     */
    navigate(direction: NavigationDirection): boolean
    /**
     * Inserts `child` at the first position in `self`.
     * @param child the widget to prepend
     */
    prepend(child: Gtk.Widget): void
    /**
     * Moves `child` to the position after `sibling` in the list of children.
     * 
     * If `sibling` is `NULL`, move `child` to the first position.
     * @param child the widget to move, must be a child of `self`
     * @param sibling the sibling to move `child` after
     */
    reorderChildAfter(child: Gtk.Widget, sibling: Gtk.Widget | null): void
    /**
     * Sets whether swipe gestures switch to the previous navigatable child.
     * @param canSwipeBack the new value
     */
    setCanSwipeBack(canSwipeBack: boolean): void
    /**
     * Sets whether swipe gestures switch to the next navigatable child.
     * @param canSwipeForward the new value
     */
    setCanSwipeForward(canSwipeForward: boolean): void
    /**
     * Sets the duration that transitions between children in `self` will take.
     * @param duration the new duration, in milliseconds
     */
    setChildTransitionDuration(duration: number): void
    /**
     * Sets whether to be homogeneous for the given fold and orientation.
     * 
     * If it is homogeneous, the [class`Leaflet]` will request the same
     * width or height for all its children depending on the orientation. If it
     * isn't and it is folded, the leaflet may change width or height when a
     * different child becomes visible.
     * @param folded the fold
     * @param orientation the orientation
     * @param homogeneous `TRUE` to make `self` homogeneous
     */
    setHomogeneous(folded: boolean, orientation: Gtk.Orientation, homogeneous: boolean): void
    /**
     * Sets whether `self` will interpolate its size when changing the visible child.
     * 
     * If the [property`Leaflet:`interpolate-size] property is set to `TRUE`, `self`
     * will interpolate its size between the current one and the one it'll take
     * after changing the visible child, according to the set transition duration.
     * @param interpolateSize the new value
     */
    setInterpolateSize(interpolateSize: boolean): void
    /**
     * Sets the duration that transitions between modes in `self` will take.
     * @param duration the new duration, in milliseconds
     */
    setModeTransitionDuration(duration: number): void
    /**
     * Sets the animation type that will be used for transitions between modes and
     * children.
     * 
     * The transition type can be changed without problems at runtime, so it is
     * possible to change the animation based on the mode or child that is about to
     * become current.
     * @param transition the new transition type
     */
    setTransitionType(transition: LeafletTransitionType): void
    /**
     * Sets the currently visible widget when the leaflet is folded.
     * @param visibleChild the new child
     */
    setVisibleChild(visibleChild: Gtk.Widget): void
    /**
     * Makes the child with the name `name` visible.
     * 
     * See [method`Leaflet`.set_visible_child] for more details.
     * @param name the name of a child
     */
    setVisibleChildName(name: string): void

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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Handy-1.Handy.Leaflet

    connect(sigName: "notify::can-swipe-back", callback: any): number
    on(sigName: "notify::can-swipe-back", callback: any): number
    once(sigName: "notify::can-swipe-back", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-swipe-back", ...args: any[]): void
    connect(sigName: "notify::can-swipe-forward", callback: any): number
    on(sigName: "notify::can-swipe-forward", callback: any): number
    once(sigName: "notify::can-swipe-forward", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-swipe-forward", ...args: any[]): void
    connect(sigName: "notify::child-transition-duration", callback: any): number
    on(sigName: "notify::child-transition-duration", callback: any): number
    once(sigName: "notify::child-transition-duration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-transition-duration", ...args: any[]): void
    connect(sigName: "notify::child-transition-running", callback: any): number
    on(sigName: "notify::child-transition-running", callback: any): number
    once(sigName: "notify::child-transition-running", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-transition-running", ...args: any[]): void
    connect(sigName: "notify::folded", callback: any): number
    on(sigName: "notify::folded", callback: any): number
    once(sigName: "notify::folded", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::folded", ...args: any[]): void
    connect(sigName: "notify::hhomogeneous-folded", callback: any): number
    on(sigName: "notify::hhomogeneous-folded", callback: any): number
    once(sigName: "notify::hhomogeneous-folded", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hhomogeneous-folded", ...args: any[]): void
    connect(sigName: "notify::hhomogeneous-unfolded", callback: any): number
    on(sigName: "notify::hhomogeneous-unfolded", callback: any): number
    once(sigName: "notify::hhomogeneous-unfolded", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hhomogeneous-unfolded", ...args: any[]): void
    connect(sigName: "notify::interpolate-size", callback: any): number
    on(sigName: "notify::interpolate-size", callback: any): number
    once(sigName: "notify::interpolate-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interpolate-size", ...args: any[]): void
    connect(sigName: "notify::mode-transition-duration", callback: any): number
    on(sigName: "notify::mode-transition-duration", callback: any): number
    once(sigName: "notify::mode-transition-duration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mode-transition-duration", ...args: any[]): void
    connect(sigName: "notify::transition-type", callback: any): number
    on(sigName: "notify::transition-type", callback: any): number
    once(sigName: "notify::transition-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transition-type", ...args: any[]): void
    connect(sigName: "notify::vhomogeneous-folded", callback: any): number
    on(sigName: "notify::vhomogeneous-folded", callback: any): number
    once(sigName: "notify::vhomogeneous-folded", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vhomogeneous-folded", ...args: any[]): void
    connect(sigName: "notify::vhomogeneous-unfolded", callback: any): number
    on(sigName: "notify::vhomogeneous-unfolded", callback: any): number
    once(sigName: "notify::vhomogeneous-unfolded", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vhomogeneous-unfolded", ...args: any[]): void
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
 * An adaptive container acting like a box or a stack.
 * 
 * The `HdyLeaflet` widget can display its children like a [class`Gtk`.Box] does
 * or like a [class`Gtk`.Stack] does, adapting to size changes by switching
 * between the two modes.
 * 
 * When there is enough space the children are displayed side by side, otherwise
 * only one is displayed and the leaflet is said to be ???folded???. The threshold
 * is dictated by the preferred minimum sizes of the children. When a leaflet is
 * folded, the children can be navigated using swipe gestures.
 * 
 * The ???over??? and ???under??? transition types stack the children one on top of the
 * other, while the ???slide??? transition puts the children side by side. While
 * navigating to a child on the side or below can be performed by swiping the
 * current child away, navigating to an upper child requires dragging it from
 * the edge where it resides. This doesn't affect non-dragging swipes.
 * 
 * The ???over??? and ???under??? transitions can draw their shadow on top of the
 * window's transparent areas, like the rounded corners. This is a side-effect
 * of allowing shadows to be drawn on top of OpenGL areas. It can be mitigated
 * by using [class`Window]` or [class`ApplicationWindow]` as they will crop
 * anything drawn beyond the rounded corners.
 * 
 * The child property `navigatable` can be set on `HdyLeaflet` children to
 * determine whether they can be navigated to when folded. If `FALSE`, the child
 * will be ignored by [method`Leaflet`.get_adjacent_child],
 * [method`Leaflet`.navigate], and swipe gestures. This can be used used to
 * prevent switching to widgets like separators.
 * 
 * ## CSS nodes
 * 
 * `HdyLeaflet` has a single CSS node with name `leaflet`. The node will get the
 * style classes `.folded` when it is folded, `.unfolded` when it's not, or none
 * if it didn't compute its fold yet.
 * @class 
 */
export class Leaflet extends Gtk.Container {

    // Own properties of Handy-1.Handy.Leaflet

    static name: string

    // Constructors of Handy-1.Handy.Leaflet

    constructor(config?: Leaflet.ConstructorProperties) 
    /**
     * Creates a new `HdyLeaflet`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyLeaflet`.
     * @constructor 
     */
    static new(): Leaflet
    _init(config?: Leaflet.ConstructorProperties): void
}

export module PreferencesGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.PreferencesGroup

        /**
         * The description for this group of preferences.
         */
        description?: string | null
        /**
         * The title for this group of preferences.
         */
        title?: string | null
        /**
         * Whether to use markup for the title and description.
         */
        useMarkup?: boolean | null
    }

}

export interface PreferencesGroup extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.PreferencesGroup

    /**
     * The description for this group of preferences.
     */
    description: string
    /**
     * The title for this group of preferences.
     */
    title: string
    /**
     * Whether to use markup for the title and description.
     */
    useMarkup: boolean

    // Own fields of Handy-1.Handy.PreferencesGroup

    parentInstance: any

    // Owm methods of Handy-1.Handy.PreferencesGroup

    getDescription(): string
    /**
     * Gets the title of `self`.
     */
    getTitle(): string
    /**
     * Gets whether `self` uses markup for the title and description.
     */
    getUseMarkup(): boolean
    /**
     * Sets the description for `self`.
     * @param description the description
     */
    setDescription(description: string): void
    /**
     * Sets the title for `self`.
     * @param title the title
     */
    setTitle(title: string): void
    /**
     * Sets whether `self` uses markup for the title and description.
     * @param useMarkup whether to use markup
     */
    setUseMarkup(useMarkup: boolean): void

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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Handy-1.Handy.PreferencesGroup

    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::use-markup", callback: any): number
    on(sigName: "notify::use-markup", callback: any): number
    once(sigName: "notify::use-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-markup", ...args: any[]): void
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
 * A group of preference rows.
 * 
 * A `HdyPreferencesGroup` represents a group or tightly related preferences,
 * which in turn are represented by [class`PreferencesRow]`.
 * 
 * To summarize the role of the preferences it gathers, a group can have both a
 * title and a description. The title will be used by [class`PreferencesWindow]`
 * to let the user look for a preference.
 * 
 * ## CSS nodes
 * 
 * `HdyPreferencesGroup` has a single CSS node with name `preferencesgroup`.
 * @class 
 */
export class PreferencesGroup extends Gtk.Bin {

    // Own properties of Handy-1.Handy.PreferencesGroup

    static name: string

    // Constructors of Handy-1.Handy.PreferencesGroup

    constructor(config?: PreferencesGroup.ConstructorProperties) 
    /**
     * Creates a new `HdyPreferencesGroup`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyPreferencesGroup`.
     * @constructor 
     */
    static new(): PreferencesGroup
    _init(config?: PreferencesGroup.ConstructorProperties): void
}

export module PreferencesPage {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.PreferencesPage

        /**
         * The icon name for this page of preferences.
         */
        iconName?: string | null
        /**
         * The title for this page of preferences.
         */
        title?: string | null
    }

}

export interface PreferencesPage extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.PreferencesPage

    /**
     * The icon name for this page of preferences.
     */
    iconName: string
    /**
     * The title for this page of preferences.
     */
    title: string

    // Own fields of Handy-1.Handy.PreferencesPage

    parentInstance: any

    // Owm methods of Handy-1.Handy.PreferencesPage

    /**
     * Gets the icon name for `self`.
     */
    getIconName(): string | null
    /**
     * Gets the title of `self`.
     */
    getTitle(): string | null
    /**
     * Sets the icon name for `self`.
     * @param iconName the icon name
     */
    setIconName(iconName: string | null): void
    /**
     * Sets the title of `self`.
     * @param title the title of the page
     */
    setTitle(title: string | null): void

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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Handy-1.Handy.PreferencesPage

    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
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
 * A page from [class`PreferencesWindow]`.
 * 
 * The `HdyPreferencesPage` widget gathers preferences groups into a single page
 * of a preferences window.
 * 
 * ## CSS nodes
 * 
 * `HdyPreferencesPage` has a single CSS node with name `preferencespage`.
 * @class 
 */
export class PreferencesPage extends Gtk.Bin {

    // Own properties of Handy-1.Handy.PreferencesPage

    static name: string

    // Constructors of Handy-1.Handy.PreferencesPage

    constructor(config?: PreferencesPage.ConstructorProperties) 
    /**
     * Creates a new `HdyPreferencesPage`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyPreferencesPage`.
     * @constructor 
     */
    static new(): PreferencesPage
    _init(config?: PreferencesPage.ConstructorProperties): void
}

export module PreferencesRow {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ListBoxRow.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.PreferencesRow

        /**
         * The title of the preference represented by this row.
         */
        title?: string | null
        /**
         * Whether an embedded underline in the title indicates a mnemonic.
         */
        useUnderline?: boolean | null
    }

}

export interface PreferencesRow extends Atk.ImplementorIface, Gtk.Actionable, Gtk.Buildable {

    // Own properties of Handy-1.Handy.PreferencesRow

    /**
     * The title of the preference represented by this row.
     */
    title: string
    /**
     * Whether an embedded underline in the title indicates a mnemonic.
     */
    useUnderline: boolean

    // Own fields of Handy-1.Handy.PreferencesRow

    parentInstance: any

    // Owm methods of Handy-1.Handy.PreferencesRow

    /**
     * Gets the title of the preference represented by `self`.
     */
    getTitle(): string | null
    /**
     * Gets whether an embedded underline in the title indicates a mnemonic.
     */
    getUseUnderline(): boolean
    /**
     * Sets the title of the preference represented by `self`.
     * @param title the title
     */
    setTitle(title: string | null): void
    /**
     * Sets whether an embedded underline in the title indicates a mnemonic.
     * @param useUnderline `TRUE` if underlines in the text indicate mnemonics
     */
    setUseUnderline(useUnderline: boolean): void

    // Conflicting methods

    activate(): void

    // Overloads of activate

    /**
     * For widgets that can be ???activated??? (buttons, menu items, etc.)
     * this function activates them. Activation is what happens when you
     * press Enter on a widget during key navigation. If `widget` isn't
     * activatable, the function returns %FALSE.
     */
    activate(): boolean
    /**
     * For widgets that can be ???activated??? (buttons, menu items, etc.)
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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

    // Class property signals of Handy-1.Handy.PreferencesRow

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
    connect(sigName: "notify::activatable", callback: any): number
    on(sigName: "notify::activatable", callback: any): number
    once(sigName: "notify::activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: any): number
    on(sigName: "notify::selectable", callback: any): number
    once(sigName: "notify::selectable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selectable", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A [class`Gtk`.ListBoxRow] used to present preferences.
 * 
 * The `HdyPreferencesRow` widget has a title that [class`PreferencesWindow]`
 * will use to let the user look for a preference. It doesn't present the title
 * in any way and lets you present the preference as you please.
 * 
 * [class`ActionRow]` and its derivatives are convenient to use as preference
 * rows as they take care of presenting the preference's title while letting you
 * compose the inputs of the preference around it.
 * @class 
 */
export class PreferencesRow extends Gtk.ListBoxRow {

    // Own properties of Handy-1.Handy.PreferencesRow

    static name: string

    // Constructors of Handy-1.Handy.PreferencesRow

    constructor(config?: PreferencesRow.ConstructorProperties) 
    /**
     * Creates a new `HdyPreferencesRow`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyPreferencesRow`.
     * @constructor 
     */
    static new(): PreferencesRow
    _init(config?: PreferencesRow.ConstructorProperties): void
}

export module PreferencesWindow {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Window.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.PreferencesWindow

        /**
         * Whether the window allows closing the subpage via a swipe gesture.
         */
        canSwipeBack?: boolean | null
        /**
         * Whether search is enabled.
         */
        searchEnabled?: boolean | null
    }

}

export interface PreferencesWindow extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.PreferencesWindow

    /**
     * Whether the window allows closing the subpage via a swipe gesture.
     */
    canSwipeBack: boolean
    /**
     * Whether search is enabled.
     */
    searchEnabled: boolean

    // Own fields of Handy-1.Handy.PreferencesWindow

    parentInstance: any

    // Owm methods of Handy-1.Handy.PreferencesWindow

    /**
     * Closes the current subpage.
     * 
     * If there is no presented subpage, this does nothing.
     */
    closeSubpage(): void
    /**
     * Gets whether swipe gestures allow switching from a subpage to the
     * preferences.
     */
    getCanSwipeBack(): boolean
    /**
     * Gets whether search is enabled for `self`.
     */
    getSearchEnabled(): boolean
    /**
     * Sets `subpage` as the window's subpage and opens it.
     * 
     * The transition can be cancelled by the user, in which case visible child will
     * change back to the previously visible child.
     * @param subpage the subpage
     */
    presentSubpage(subpage: Gtk.Widget): void
    /**
     * Sets whether swipe gestures allow switching from a subpage to the
     * preferences.
     * @param canSwipeBack the new value
     */
    setCanSwipeBack(canSwipeBack: boolean): void
    /**
     * Sets whether search is enabled for `self`.
     * @param searchEnabled `TRUE` to enable search, `FALSE` to disable it
     */
    setSearchEnabled(searchEnabled: boolean): void

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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Handy-1.Handy.PreferencesWindow

    connect(sigName: "notify::can-swipe-back", callback: any): number
    on(sigName: "notify::can-swipe-back", callback: any): number
    once(sigName: "notify::can-swipe-back", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-swipe-back", ...args: any[]): void
    connect(sigName: "notify::search-enabled", callback: any): number
    on(sigName: "notify::search-enabled", callback: any): number
    once(sigName: "notify::search-enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::search-enabled", ...args: any[]): void
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
 * A window to present an application's preferences.
 * 
 * The `HdyPreferencesWindow` widget presents an application's preferences
 * gathered into pages and groups. The preferences are searchable by the user.
 * 
 * ## CSS nodes
 * 
 * `HdyPreferencesWindow` has a main CSS node with the name `window` and the
 * style class `.preferences`.
 * @class 
 */
export class PreferencesWindow extends Window {

    // Own properties of Handy-1.Handy.PreferencesWindow

    static name: string

    // Constructors of Handy-1.Handy.PreferencesWindow

    constructor(config?: PreferencesWindow.ConstructorProperties) 
    /**
     * Creates a new `HdyPreferencesWindow`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyPreferencesWindow`.
     * @constructor 
     */
    static new(): PreferencesWindow

    // Overloads of new

    /**
     * Creates a new `HdyWindow`.
     * @constructor 
     */
    static new(): Window
    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you???re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called ???popups???.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don???t use #GTK_WINDOW_POPUP.
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
    _init(config?: PreferencesWindow.ConstructorProperties): void
}

export module SearchBar {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.SearchBar

        /**
         * Whether the search mode is on and the search bar shown.
         */
        searchModeEnabled?: boolean | null
        /**
         * Whether to show the close button in the toolbar.
         */
        showCloseButton?: boolean | null
    }

}

export interface SearchBar extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.SearchBar

    /**
     * Whether the search mode is on and the search bar shown.
     */
    searchModeEnabled: boolean
    /**
     * Whether to show the close button in the toolbar.
     */
    showCloseButton: boolean

    // Own fields of Handy-1.Handy.SearchBar

    parentInstance: any

    // Owm methods of Handy-1.Handy.SearchBar

    /**
     * Sets the entry widget passed as the one to be used in this search bar.
     * 
     * The entry should be a descendant of the search bar. This is only required if
     * the entry isn???t the direct child of the search bar (as in our main example).
     * @param entry an entry
     */
    connectEntry(entry: Gtk.Entry): void
    /**
     * Gets whether the search mode is on.
     */
    getSearchMode(): boolean
    /**
     * Gets whether the close button is shown.
     */
    getShowCloseButton(): boolean
    /**
     * Handles key press events.
     * 
     * This function should be called when the top-level window which contains the
     * search bar received a key event.
     * 
     * If the key event is handled by the search bar, the bar will be shown, the
     * entry populated with the entered text and `GDK_EVENT_STOP` will be returned.
     * The caller should ensure that events are not propagated further.
     * 
     * If no entry has been connected to the search bar, using
     * [method`SearchBar`.connect_entry], this function will return immediately with
     * a warning.
     * 
     * ## Showing the search bar on key presses
     * 
     * ```c
     * static gboolean
     * on_key_press_event (GtkWidget *widget,
     *                     GdkEvent  *event,
     *                     gpointer   user_data)
     * {
     *   HdySearchBar *bar = HDY_SEARCH_BAR (user_data);
     *   return hdy_search_bar_handle_event (self, event);
     * }
     * 
     * static void
     * create_toplevel (void)
     * {
     *   GtkWidget *window = gtk_window_new (GTK_WINDOW_TOPLEVEL);
     *   GtkWindow *search_bar = hdy_search_bar_new ();
     * 
     *   // Add more widgets to the window...
     * 
     *   g_signal_connect (window,
     *                    "key-press-event",
     *                     G_CALLBACK (on_key_press_event),
     *                     search_bar);
     * }
     * ```
     * @param event a [struct`Gdk`.Event] containing key press events
     */
    handleEvent(event: Gdk.Event): boolean
    /**
     * Switches the search mode on or off.
     * @param searchMode the new state of the search mode
     */
    setSearchMode(searchMode: boolean): void
    /**
     * Shows or hides the close button.
     * 
     * Applications that already have a ???search??? toggle button should not show a
     * close button in their search bar, as it duplicates the role of the toggle
     * button.
     * @param visible whether the close button will be shown or not
     */
    setShowCloseButton(visible: boolean): void

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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Handy-1.Handy.SearchBar

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

/**
 * A toolbar to integrate a search entry with.
 * 
 * `HdySearchBar` is a container made to have a search entry (possibly with
 * additional connex widgets, such as drop-down menus, or buttons) built-in. The
 * search bar would appear when a search is started through typing on the
 * keyboard, or the application???s search mode is toggled on.
 * 
 * For keyboard presses to start a search, events will need to be forwarded from
 * the top-level window that contains the search bar. See
 * [method`SearchBar`.handle_event] for example code. Common shortcuts such as
 * <kbd>Ctrl</kbd>+<kbd>F</kbd> should be handled as an application action, or
 * through the menu items.
 * 
 * You will also need to tell the search bar about which entry you are using as
 * your search entry using [method`SearchBar`.connect_entry]. The following
 * example shows you how to create a more complex search entry.
 * 
 * `HdySearchBar` is very similar to [class`Gtk`.SearchBar], the main difference
 * being that it allows the search entry to fill all the available space. This
 * allows you to control your search entry's width with a [class`Clamp]`.
 * 
 * ## CSS nodes
 * 
 * `HdySearchBar` has a single CSS node with name `searchbar`.
 * @class 
 */
export class SearchBar extends Gtk.Bin {

    // Own properties of Handy-1.Handy.SearchBar

    static name: string

    // Constructors of Handy-1.Handy.SearchBar

    constructor(config?: SearchBar.ConstructorProperties) 
    /**
     * Creates a new `HdySearchBar.
     * 
     * You will need to tell it about which widget is going to be your text entry
     * using [method`SearchBar`.connect_entry].
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdySearchBar.
     * 
     * You will need to tell it about which widget is going to be your text entry
     * using [method`SearchBar`.connect_entry].
     * @constructor 
     */
    static new(): SearchBar
    _init(config?: SearchBar.ConstructorProperties): void
}

export module Squeezer {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Container.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.Squeezer

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
         * The animation duration, in milliseconds.
         */
        transitionDuration?: number | null
        /**
         * The type of animation used for transitions between children.
         * 
         * Available types include various kinds of fades and slides.
         * 
         * The transition type can be changed without problems at runtime, so it is
         * possible to change the animation based on the child that is about to become
         * current.
         */
        transitionType?: SqueezerTransitionType | null
        /**
         * The horizontal alignment, from 0 (start) to 1 (end).
         * 
         * The xalign property determines the horizontal alignment of the children
         * inside the squeezer's size allocation. Compare this to
         * [property`Gtk`.Widget:halign], which determines how the squeezer's size
         * allocation is positioned in the space available for the squeezer.
         * 
         * This will affect the position of children too wide to fit in the squeezer
         * as they are fading out.
         */
        xalign?: number | null
        /**
         * The vertical alignment, from 0 (start) to 1 (end).
         * 
         * The yalign property determines the vertical alignment of the children
         * inside the squeezer's size allocation. Compare this to
         * [property`Gtk`.Widget:valign], which determines how the squeezer's size
         * allocation is positioned in the space available for the squeezer.
         * 
         * This will affect the position of children too tall to fit in the squeezer
         * as they are fading out.
         */
        yalign?: number | null
    }

}

export interface Squeezer extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Handy-1.Handy.Squeezer

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
     * The animation duration, in milliseconds.
     */
    transitionDuration: number
    /**
     * Whether a transition is currently running.
     */
    readonly transitionRunning: boolean
    /**
     * The type of animation used for transitions between children.
     * 
     * Available types include various kinds of fades and slides.
     * 
     * The transition type can be changed without problems at runtime, so it is
     * possible to change the animation based on the child that is about to become
     * current.
     */
    transitionType: SqueezerTransitionType
    /**
     * The currently visible child.
     */
    readonly visibleChild: Gtk.Widget
    /**
     * The horizontal alignment, from 0 (start) to 1 (end).
     * 
     * The xalign property determines the horizontal alignment of the children
     * inside the squeezer's size allocation. Compare this to
     * [property`Gtk`.Widget:halign], which determines how the squeezer's size
     * allocation is positioned in the space available for the squeezer.
     * 
     * This will affect the position of children too wide to fit in the squeezer
     * as they are fading out.
     */
    xalign: number
    /**
     * The vertical alignment, from 0 (start) to 1 (end).
     * 
     * The yalign property determines the vertical alignment of the children
     * inside the squeezer's size allocation. Compare this to
     * [property`Gtk`.Widget:valign], which determines how the squeezer's size
     * allocation is positioned in the space available for the squeezer.
     * 
     * This will affect the position of children too tall to fit in the squeezer
     * as they are fading out.
     */
    yalign: number

    // Owm methods of Handy-1.Handy.Squeezer

    /**
     * Gets whether `child` is enabled.
     * 
     * See [method`Squeezer`.set_child_enabled].
     * @param child a child of `self`
     */
    getChildEnabled(child: Gtk.Widget): boolean
    /**
     * Gets whether `self` is homogeneous.
     */
    getHomogeneous(): boolean
    /**
     * Gets whether `self` should interpolate its size on visible child change.
     */
    getInterpolateSize(): boolean
    /**
     * Gets the amount of time that transitions between children will take.
     */
    getTransitionDuration(): number
    /**
     * Gets whether a transition is currently running for `self`.
     */
    getTransitionRunning(): boolean
    /**
     * Gets the animation type that will be used for transitions between children.
     */
    getTransitionType(): SqueezerTransitionType
    /**
     * Gets the currently visible child of `self`.
     */
    getVisibleChild(): Gtk.Widget | null
    /**
     * Gets the horizontal alignment.
     */
    getXalign(): number
    /**
     * Gets the vertical alignment.
     */
    getYalign(): number
    /**
     * Sets whether `child` is enabled.
     * 
     * If a child is disabled, it will be ignored when looking for the child fitting
     * the available size best. This allows to programmatically and prematurely hide
     * a child of `self` even if it fits in the available space.
     * 
     * This can be used e.g. to ensure a certain child is hidden below a certain
     * window width, or any other constraint you find suitable.
     * @param child a child of `self`
     * @param enabled whether to enable the child
     */
    setChildEnabled(child: Gtk.Widget, enabled: boolean): void
    /**
     * Sets whether all children have the same size for the opposite orientation.
     * @param homogeneous `TRUE` to make `self` homogeneous
     */
    setHomogeneous(homogeneous: boolean): void
    /**
     * Sets whether `self` should interpolate its size on visible child change.
     * @param interpolateSize `TRUE` to interpolate the size
     */
    setInterpolateSize(interpolateSize: boolean): void
    /**
     * Sets the duration that transitions between children in `self` will take.
     * @param duration the new duration, in milliseconds
     */
    setTransitionDuration(duration: number): void
    /**
     * Sets the animation type that will be used for transitions between children.
     * @param transition the new transition type
     */
    setTransitionType(transition: SqueezerTransitionType): void
    /**
     * Sets the horizontal alignment.
     * @param xalign the new xalign value, between 0 and 1
     */
    setXalign(xalign: number): void
    /**
     * Sets the vertical alignment.
     * @param yalign the new yalign value, between 0 and 1
     */
    setYalign(yalign: number): void

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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Handy-1.Handy.Squeezer

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
 * A best fit container.
 * 
 * The `HdySqueezer` widget is a container which only shows the first of its
 * children that fits in the available size. It is convenient to offer different
 * widgets to represent the same data with different levels of detail, making
 * the widget seem to squeeze itself to fit in the available space.
 * 
 * Transitions between children can be animated as fades. This can be controlled
 * with [method`Squeezer`.set_transition_type].
 * 
 * ## CSS nodes
 * 
 * `HdySqueezer` has a single CSS node with name `squeezer`.
 * @class 
 */
export class Squeezer extends Gtk.Container {

    // Own properties of Handy-1.Handy.Squeezer

    static name: string

    // Constructors of Handy-1.Handy.Squeezer

    constructor(config?: Squeezer.ConstructorProperties) 
    /**
     * Creates a new `HdySqueezer`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdySqueezer`.
     * @constructor 
     */
    static new(): Squeezer
    _init(config?: Squeezer.ConstructorProperties): void
}

export module StatusPage {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.StatusPage

        /**
         * The description to be displayed below the title.
         */
        description?: string | null
        /**
         * The name of the icon to be used.
         */
        iconName?: string | null
        /**
         * The title to be displayed below the icon.
         */
        title?: string | null
    }

}

export interface StatusPage extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.StatusPage

    /**
     * The description to be displayed below the title.
     */
    description: string
    /**
     * The name of the icon to be used.
     */
    iconName: string
    /**
     * The title to be displayed below the icon.
     */
    title: string

    // Owm methods of Handy-1.Handy.StatusPage

    /**
     * Gets the description for `self`.
     */
    getDescription(): string | null
    /**
     * Gets the icon name for `self`.
     */
    getIconName(): string | null
    /**
     * Gets the title for `self`.
     */
    getTitle(): string | null
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
     * Sets the title for `self`.
     * @param title the title
     */
    setTitle(title: string | null): void

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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Handy-1.Handy.StatusPage

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
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
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
 * A page used for empty/error states and similar use-cases.
 * 
 * The `HdyStatusPage` widget can have an icon, a title, a description and a
 * custom widget which is displayed below them.
 * 
 * ## CSS nodes
 * 
 * `HdyStatusPage` has a main CSS node with name `statuspage`.
 * @class 
 */
export class StatusPage extends Gtk.Bin {

    // Own properties of Handy-1.Handy.StatusPage

    static name: string

    // Constructors of Handy-1.Handy.StatusPage

    constructor(config?: StatusPage.ConstructorProperties) 
    /**
     * Creates a new `HdyStatusPage`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyStatusPage`.
     * @constructor 
     */
    static new(): StatusPage
    _init(config?: StatusPage.ConstructorProperties): void
}

export module StyleManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.StyleManager

        /**
         * The requested application color scheme.
         * 
         * The effective appearance will be decided based on the application color
         * scheme and the system preferred color scheme. The
         * [property`StyleManager:`dark] property can be used to query the current
         * effective appearance.
         * 
         * The `HDY_COLOR_SCHEME_PREFER_LIGHT` color scheme results in the application
         * using light appearance unless the system prefers dark colors. This is the
         * default value.
         * 
         * The `HDY_COLOR_SCHEME_PREFER_DARK` color scheme results in the application
         * using dark appearance, but can still switch to the light appearance if the
         * system can prefers it, for example, when the high contrast preference is
         * enabled.
         * 
         * The `HDY_COLOR_SCHEME_FORCE_LIGHT` and `HDY_COLOR_SCHEME_FORCE_DARK` values
         * ignore the system preference entirely, they are useful if the application
         * wants to match its UI to its content or to provide a separate color scheme
         * switcher.
         * 
         * If a per-[class`Gdk`.Display] style manager has its color scheme set to
         * `HDY_COLOR_SCHEME_DEFAULT`, it will inherit the color scheme from the
         * default style manager.
         * 
         * For the default style manager, `HDY_COLOR_SCHEME_DEFAULT` is equivalent to
         * `HDY_COLOR_SCHEME_FORCE_LIGHT`.
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

    // Own properties of Handy-1.Handy.StyleManager

    /**
     * The requested application color scheme.
     * 
     * The effective appearance will be decided based on the application color
     * scheme and the system preferred color scheme. The
     * [property`StyleManager:`dark] property can be used to query the current
     * effective appearance.
     * 
     * The `HDY_COLOR_SCHEME_PREFER_LIGHT` color scheme results in the application
     * using light appearance unless the system prefers dark colors. This is the
     * default value.
     * 
     * The `HDY_COLOR_SCHEME_PREFER_DARK` color scheme results in the application
     * using dark appearance, but can still switch to the light appearance if the
     * system can prefers it, for example, when the high contrast preference is
     * enabled.
     * 
     * The `HDY_COLOR_SCHEME_FORCE_LIGHT` and `HDY_COLOR_SCHEME_FORCE_DARK` values
     * ignore the system preference entirely, they are useful if the application
     * wants to match its UI to its content or to provide a separate color scheme
     * switcher.
     * 
     * If a per-[class`Gdk`.Display] style manager has its color scheme set to
     * `HDY_COLOR_SCHEME_DEFAULT`, it will inherit the color scheme from the
     * default style manager.
     * 
     * For the default style manager, `HDY_COLOR_SCHEME_DEFAULT` is equivalent to
     * `HDY_COLOR_SCHEME_FORCE_LIGHT`.
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
     * It's only set at startup and cannot change its value later.
     * 
     * See [property`StyleManager:`color-scheme].
     */
    readonly systemSupportsColorSchemes: boolean

    // Owm methods of Handy-1.Handy.StyleManager

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

    // Class property signals of Handy-1.Handy.StyleManager

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
 * `HdyStyleManager` provides a way to query and influence the application
 * styles, such as whether to use dark or high contrast appearance.
 * 
 * It allows to set the color scheme via the
 * [property`StyleManager:`color-scheme] property, and to query the current
 * appearance, as well as whether a system-wide color scheme preference exists.
 * 
 * Important: [property`Gtk`.Settings:gtk-application-prefer-dark-theme] should
 * not be used together with `HdyStyleManager` and will result in a warning.
 * Color schemes should be used instead.
 * @class 
 */
export class StyleManager extends GObject.Object {

    // Own properties of Handy-1.Handy.StyleManager

    static name: string

    // Constructors of Handy-1.Handy.StyleManager

    constructor(config?: StyleManager.ConstructorProperties) 
    _init(config?: StyleManager.ConstructorProperties): void
    /**
     * Gets the default [class`StyleManager]` instance.
     * 
     * It manages all [class`Gdk`.Display] instances unless the style manager for
     * that display has an override.
     * 
     * See [func`StyleManager`.get_for_display].
     */
    static getDefault(): StyleManager
    /**
     * Gets the [class`StyleManager]` instance managing `display`.
     * 
     * It can be used to override styles for that specific display instead of the
     * whole application.
     * 
     * Most applications should use [func`StyleManager`.get_default] instead.
     * @param display a display
     */
    static getForDisplay(display: Gdk.Display): StyleManager
}

export module SwipeGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Buildable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface SwipeGroup extends Gtk.Buildable {

    // Owm methods of Handy-1.Handy.SwipeGroup

    /**
     * Adds a swipeable to `self`.
     * 
     * When the widget is destroyed or no longer referenced elsewhere, it will be
     * removed from the swipe group.
     * @param swipeable the [iface`Swipeable]` to add
     */
    addSwipeable(swipeable: Swipeable): void
    /**
     * Gets the list of swipeables associated with `self`.
     */
    getSwipeables(): Swipeable[]
    /**
     * Removes a widget from a [class`SwipeGroup]`.
     * @param swipeable the [iface`Swipeable]` to remove
     */
    removeSwipeable(swipeable: Swipeable): void

    // Class property signals of Handy-1.Handy.SwipeGroup

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An object for syncing swipeable widgets.
 * 
 * The `HdySwipeGroup` object can be used to sync multiple swipeable widgets
 * that implement the [iface`Swipeable]` interface, such as [class`Carousel]`, so
 * that animating one of them also animates all the other widgets in the group.
 * 
 * This can be useful for syncing widgets between a window's titlebar and
 * content area.
 * 
 * ## HdySwipeGroup as GtkBuildable
 * 
 * `HdySwipeGroup` can be created in an UI definition. The list of swipeable
 * widgets is specified with a &lt;swipeables&gt; element containing multiple
 * &lt;swipeable&gt; elements with their ???name??? attribute specifying the id of
 * the widgets.
 * 
 * ```xml
 * <object class="HdySwipeGroup">
 *   <swipeables>
 *     <swipeable name="carousel1"/>
 *     <swipeable name="carousel2"/>
 *   </swipeables>
 * </object>
 * ```
 * 
 * `HdySwipeGroup` has been deprecated, [class`Window]` and
 * [class`ApplicationWindow]` allow using a single leaflet for both content and
 * header bar, without the need to sync them.
 * @class 
 */
export class SwipeGroup extends GObject.Object {

    // Own properties of Handy-1.Handy.SwipeGroup

    static name: string

    // Constructors of Handy-1.Handy.SwipeGroup

    constructor(config?: SwipeGroup.ConstructorProperties) 
    /**
     * Creates a new `HdySwipeGroup`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdySwipeGroup`.
     * @constructor 
     */
    static new(): SwipeGroup
    _init(config?: SwipeGroup.ConstructorProperties): void
}

export module SwipeTracker {

    // Signal callback interfaces

    /**
     * Signal callback interface for `begin-swipe`
     */
    export interface BeginSwipeSignalCallback {
        (direction: NavigationDirection, direct: boolean): void
    }

    /**
     * Signal callback interface for `end-swipe`
     */
    export interface EndSwipeSignalCallback {
        (duration: number, to: number): void
    }

    /**
     * Signal callback interface for `update-swipe`
     */
    export interface UpdateSwipeSignalCallback {
        (progress: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Orientable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.SwipeTracker

        /**
         * Whether to allow swiping for more than one snap point at a time.
         * 
         * If the value is `FALSE`, each swipe can only move to the adjacent snap
         * points.
         */
        allowLongSwipes?: boolean | null
        /**
         * Whether to allow dragging with mouse pointer.
         * 
         * This should usually be `FALSE`.
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
         * The widget the swipe tracker is attached to. Must not be `NULL`.
         */
        swipeable?: Swipeable | null
    }

}

export interface SwipeTracker extends Gtk.Orientable {

    // Own properties of Handy-1.Handy.SwipeTracker

    /**
     * Whether to allow swiping for more than one snap point at a time.
     * 
     * If the value is `FALSE`, each swipe can only move to the adjacent snap
     * points.
     */
    allowLongSwipes: boolean
    /**
     * Whether to allow dragging with mouse pointer.
     * 
     * This should usually be `FALSE`.
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
     * The widget the swipe tracker is attached to. Must not be `NULL`.
     */
    readonly swipeable: Swipeable

    // Owm methods of Handy-1.Handy.SwipeTracker

    /**
     * Whether to allow swiping for more than one snap point at a time.
     * 
     * If the value is `FALSE`, each swipe can only move to the adjacent snap
     * points.
     */
    getAllowLongSwipes(): boolean
    /**
     * Get whether `self` can be dragged with mouse pointer.
     */
    getAllowMouseDrag(): boolean
    /**
     * Get whether `self` is enabled.
     */
    getEnabled(): boolean
    /**
     * Get whether `self` is reversing the swipe direction.
     */
    getReversed(): boolean
    /**
     * Get `self'`s swipeable widget.
     */
    getSwipeable(): Swipeable
    /**
     * Sets whether to allow swiping for more than one snap point at a time.
     * 
     * If the value is `FALSE`, each swipe can only move to the adjacent snap
     * points.
     * @param allowLongSwipes whether to allow long swipes
     */
    setAllowLongSwipes(allowLongSwipes: boolean): void
    /**
     * Set whether `self` can be dragged with mouse pointer.
     * 
     * This should usually be `FALSE`.
     * @param allowMouseDrag whether to allow mouse dragging
     */
    setAllowMouseDrag(allowMouseDrag: boolean): void
    /**
     * Set whether `self` is enabled.
     * @param enabled whether to enable to swipe tracker
     */
    setEnabled(enabled: boolean): void
    /**
     * Set whether to reverse the swipe direction.
     * 
     * If `self` is horizontal, can be used for supporting RTL text direction.
     * @param reversed whether to reverse the swipe direction
     */
    setReversed(reversed: boolean): void
    /**
     * Move the current progress value by `delta`.
     * 
     * This can be used to adjust the current position if snap points move during
     * the gesture.
     * @param delta the position delta
     */
    shiftPosition(delta: number): void

    // Own signals of Handy-1.Handy.SwipeTracker

    connect(sigName: "begin-swipe", callback: SwipeTracker.BeginSwipeSignalCallback): number
    on(sigName: "begin-swipe", callback: SwipeTracker.BeginSwipeSignalCallback): number
    once(sigName: "begin-swipe", callback: SwipeTracker.BeginSwipeSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "begin-swipe", direct: boolean, ...args: any[]): void
    connect(sigName: "end-swipe", callback: SwipeTracker.EndSwipeSignalCallback): number
    on(sigName: "end-swipe", callback: SwipeTracker.EndSwipeSignalCallback): number
    once(sigName: "end-swipe", callback: SwipeTracker.EndSwipeSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "end-swipe", to: number, ...args: any[]): void
    connect(sigName: "update-swipe", callback: SwipeTracker.UpdateSwipeSignalCallback): number
    on(sigName: "update-swipe", callback: SwipeTracker.UpdateSwipeSignalCallback): number
    once(sigName: "update-swipe", callback: SwipeTracker.UpdateSwipeSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "update-swipe", ...args: any[]): void

    // Class property signals of Handy-1.Handy.SwipeTracker

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
 * Swipe tracker used in [class`Carousel]` and [class`Leaflet]`.
 * 
 * The `HdySwipeTracker` object can be used for implementing widgets with swipe
 * gestures. It supports touch-based swipes, pointer dragging, and touchpad
 * scrolling.
 * 
 * The widgets will probably want to expose [property`SwipeTracker:`enabled]
 * property. If they expect to use horizontal orientation,
 * [property`SwipeTracker:`reversed] property can be used for supporting RTL text
 * direction.
 * @class 
 */
export class SwipeTracker extends GObject.Object {

    // Own properties of Handy-1.Handy.SwipeTracker

    static name: string

    // Constructors of Handy-1.Handy.SwipeTracker

    constructor(config?: SwipeTracker.ConstructorProperties) 
    /**
     * Creates a new `HdySwipeTracker` object on `widget`.
     * @constructor 
     * @param swipeable a swipeable to add the tracker on
     */
    constructor(swipeable: Swipeable) 
    /**
     * Creates a new `HdySwipeTracker` object on `widget`.
     * @constructor 
     * @param swipeable a swipeable to add the tracker on
     */
    static new(swipeable: Swipeable): SwipeTracker
    _init(config?: SwipeTracker.ConstructorProperties): void
}

export module TabBar {

    // Signal callback interfaces

    /**
     * Signal callback interface for `extra-drag-data-received`
     */
    export interface ExtraDragDataReceivedSignalCallback {
        (page: TabPage, context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.TabBar

        /**
         * Whether tabs automatically hide.
         * 
         * If set to `TRUE`, the tab bar disappears when the associated
         * [class`TabView]` has 0 or 1 tab, no pinned tabs, and no tab is being
         * transferred.
         * 
         * See [property`TabBar:`tabs-revealed].
         */
        autohide?: boolean | null
        /**
         * The widget shown after the tabs.
         */
        endActionWidget?: Gtk.Widget | null
        /**
         * Whether tabs should expand.
         * 
         * If set to `TRUE`, the tabs will always vary width filling the whole width
         * when possible, otherwise tabs will always have the minimum possible size.
         */
        expandTabs?: boolean | null
        /**
         * Extra drag destination targets.
         * 
         * Allows to drag arbitrary content onto tabs, for example URLs in a web
         * browser.
         * 
         * If a tab is hovered for a certain period of time while dragging the
         * content, it will be automatically selected.
         * 
         * After content is dropped, the [signal`TabBar:`:extra-drag-data-received]
         * signal can be used to retrieve and process the drag data.
         */
        extraDragDestTargets?: Gtk.TargetList | null
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
         * The [class`TabView]` the tab bar controls.
         */
        view?: TabView | null
    }

}

export interface TabBar extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.TabBar

    /**
     * Whether tabs automatically hide.
     * 
     * If set to `TRUE`, the tab bar disappears when the associated
     * [class`TabView]` has 0 or 1 tab, no pinned tabs, and no tab is being
     * transferred.
     * 
     * See [property`TabBar:`tabs-revealed].
     */
    autohide: boolean
    /**
     * The widget shown after the tabs.
     */
    endActionWidget: Gtk.Widget
    /**
     * Whether tabs should expand.
     * 
     * If set to `TRUE`, the tabs will always vary width filling the whole width
     * when possible, otherwise tabs will always have the minimum possible size.
     */
    expandTabs: boolean
    /**
     * Extra drag destination targets.
     * 
     * Allows to drag arbitrary content onto tabs, for example URLs in a web
     * browser.
     * 
     * If a tab is hovered for a certain period of time while dragging the
     * content, it will be automatically selected.
     * 
     * After content is dropped, the [signal`TabBar:`:extra-drag-data-received]
     * signal can be used to retrieve and process the drag data.
     */
    extraDragDestTargets: Gtk.TargetList
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
     * If set to `TRUE`, all tabs cannot be displayed at once and require
     * scrolling.
     */
    readonly isOverflowing: boolean
    /**
     * The widget shown before the tabs.
     */
    startActionWidget: Gtk.Widget
    /**
     * Whether tabs are currently revealed.
     * 
     * See [property`TabBar:`autohide].
     */
    readonly tabsRevealed: boolean
    /**
     * The [class`TabView]` the tab bar controls.
     */
    view: TabView

    // Owm methods of Handy-1.Handy.TabBar

    /**
     * Gets whether the tabs automatically hide.
     */
    getAutohide(): boolean
    /**
     * Gets the widget shown after the tabs.
     */
    getEndActionWidget(): Gtk.Widget | null
    /**
     * Gets whether tabs should expand.
     */
    getExpandTabs(): boolean
    /**
     * Gets extra drag destination targets.
     */
    getExtraDragDestTargets(): Gtk.TargetList | null
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
     * Gets the value of the [property`TabBar:`tabs-revealed] property.
     */
    getTabsRevealed(): boolean
    /**
     * Gets the [class`TabView]` `self` controls.
     */
    getView(): TabView | null
    /**
     * Sets whether the tabs automatically hide.
     * 
     * If `autohide` is `TRUE`, the tab bar disappears when the associated
     * [class`TabView]` has 0 or 1 tab, no pinned tabs, and no tab is being
     * transferred.
     * 
     * Autohide is enabled by default.
     * 
     * See [property`TabBar:`tabs-revealed].
     * @param autohide whether the tabs automatically hide
     */
    setAutohide(autohide: boolean): void
    /**
     * Sets the widget to show after the tabs.
     * @param widget the widget to show after the tabs
     */
    setEndActionWidget(widget: Gtk.Widget | null): void
    /**
     * Sets whether tabs should expand.
     * 
     * If `expand_tabs` is `TRUE`, the tabs will always vary width filling the whole
     * width when possible, otherwise tabs will always have the minimum possible
     * size.
     * 
     * Expand is enabled by default.
     * @param expandTabs whether to expand tabs
     */
    setExpandTabs(expandTabs: boolean): void
    /**
     * Sets extra drag destination targets.
     * 
     * This allows to drag arbitrary content onto tabs, for example URLs in a web
     * browser.
     * 
     * If a tab is hovered for a certain period of time while dragging the content,
     * it will be automatically selected.
     * 
     * After content is dropped, the [signal`TabBar:`:extra-drag-data-received]
     * signal can be used to retrieve and process the drag data.
     * @param extraDragDestTargets extra drag targets
     */
    setExtraDragDestTargets(extraDragDestTargets: Gtk.TargetList | null): void
    /**
     * Sets whether tabs tabs use inverted layout.
     * 
     * If `inverted` is `TRUE`, non-pinned tabs will have the close button at the
     * beginning and the indicator at the end rather than the opposite.
     * @param inverted whether tabs use inverted layout
     */
    setInverted(inverted: boolean): void
    /**
     * Sets the widget to show before the tabs.
     * @param widget the widget to show before the tabs
     */
    setStartActionWidget(widget: Gtk.Widget | null): void
    /**
     * Sets the [class`TabView]` `self` controls.
     * @param view a tab view
     */
    setView(view: TabView | null): void

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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Own signals of Handy-1.Handy.TabBar

    connect(sigName: "extra-drag-data-received", callback: TabBar.ExtraDragDataReceivedSignalCallback): number
    on(sigName: "extra-drag-data-received", callback: TabBar.ExtraDragDataReceivedSignalCallback): number
    once(sigName: "extra-drag-data-received", callback: TabBar.ExtraDragDataReceivedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "extra-drag-data-received", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number, ...args: any[]): void

    // Class property signals of Handy-1.Handy.TabBar

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
    connect(sigName: "notify::extra-drag-dest-targets", callback: any): number
    on(sigName: "notify::extra-drag-dest-targets", callback: any): number
    once(sigName: "notify::extra-drag-dest-targets", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::extra-drag-dest-targets", ...args: any[]): void
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
 * A tab bar for [class`TabView]`.
 * 
 * The `HdyTabBar` widget is a tab bar that can be used with conjunction with
 * [class`TabView]`.
 * 
 * `HdyTabBar` can autohide and can optionally contain action widgets on both
 * sides of the tabs.
 * 
 * When there's not enough space to show all the tabs, `HdyTabBar` will scroll
 * them. Pinned tabs always stay visible and aren't a part of the scrollable
 * area.
 * 
 * ## CSS nodes
 * 
 * `HdyTabBar` has a single CSS node with name `tabbar`.
 * @class 
 */
export class TabBar extends Gtk.Bin {

    // Own properties of Handy-1.Handy.TabBar

    static name: string

    // Constructors of Handy-1.Handy.TabBar

    constructor(config?: TabBar.ConstructorProperties) 
    /**
     * Creates a new `HdyTabBar` widget.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyTabBar` widget.
     * @constructor 
     */
    static new(): TabBar
    _init(config?: TabBar.ConstructorProperties): void
}

export module TabPage {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.TabPage

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
         * [class`TabPage]` will show it at the beginning of the tab, alongside icon
         * representing [property`TabPage:`icon] or loading spinner.
         * 
         * If the page is pinned, the indicator will be shown instead of icon or
         * spinner.
         * 
         * If [property`TabPage:`indicator-activatable] is set to `TRUE`, the indicator
         * icon can act as a button.
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

    // Own properties of Handy-1.Handy.TabPage

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
     * [class`TabPage]` will show it at the beginning of the tab, alongside icon
     * representing [property`TabPage:`icon] or loading spinner.
     * 
     * If the page is pinned, the indicator will be shown instead of icon or
     * spinner.
     * 
     * If [property`TabPage:`indicator-activatable] is set to `TRUE`, the indicator
     * icon can act as a button.
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

    // Owm methods of Handy-1.Handy.TabPage

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
    getTitle(): string | null
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
    setTitle(title: string | null): void
    /**
     * Sets the tooltip of `self`.
     * @param tooltip the tooltip of `self`
     */
    setTooltip(tooltip: string | null): void

    // Class property signals of Handy-1.Handy.TabPage

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

    // Own properties of Handy-1.Handy.TabPage

    static name: string

    // Constructors of Handy-1.Handy.TabPage

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
        (page: TabPage): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.TabView

        /**
         * Default page icon.
         * 
         * If a page doesn't provide its own icon via [property`TabPage:`icon], default
         * icon may be used instead for contexts where having an icon is necessary.
         * 
         * [class`TabBar]` will use default icon for pinned tabs in case the page is
         * not loading, doesn't have an icon and an indicator. Default icon is never
         * used for tabs that aren't pinned.
         */
        defaultIcon?: Gio.Icon | null
        /**
         * Tab context menu model.
         * 
         * When a context menu is shown for a tab, it will be constructed from the
         * provided menu model. Use [signal`TabView:`:setup-menu] signal to set up the
         * menu actions for the particular tab.
         */
        menuModel?: Gio.MenuModel | null
        /**
         * The currently selected page.
         */
        selectedPage?: TabPage | null
        /**
         * Tab shortcut widget.
         * 
         * Has the following shortcuts:
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
         * * <kbd>Alt</kbd>+<kbd>1</kbd>???<kbd>9</kbd> - switch to pages 1-9
         * * <kbd>Alt</kbd>+<kbd>0</kbd> - switch to page 10
         * 
         * These shortcuts are always available on `self,` this property is useful if
         * they should be available globally.
         */
        shortcutWidget?: Gtk.Widget | null
    }

}

export interface TabView extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.TabView

    /**
     * Default page icon.
     * 
     * If a page doesn't provide its own icon via [property`TabPage:`icon], default
     * icon may be used instead for contexts where having an icon is necessary.
     * 
     * [class`TabBar]` will use default icon for pinned tabs in case the page is
     * not loading, doesn't have an icon and an indicator. Default icon is never
     * used for tabs that aren't pinned.
     */
    defaultIcon: Gio.Icon
    /**
     * Whether a page is being transferred.
     * 
     * This property will be set to `TRUE` when a drag-n-drop tab transfer starts
     * on any [class`TabView]`, and to `FALSE` after it ends.
     * 
     * During the transfer, children cannot receive pointer input and a tab can be
     * safely dropped on the tab view.
     */
    readonly isTransferringPage: boolean
    /**
     * Tab context menu model.
     * 
     * When a context menu is shown for a tab, it will be constructed from the
     * provided menu model. Use [signal`TabView:`:setup-menu] signal to set up the
     * menu actions for the particular tab.
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
     * The currently selected page.
     */
    selectedPage: TabPage
    /**
     * Tab shortcut widget.
     * 
     * Has the following shortcuts:
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
     * * <kbd>Alt</kbd>+<kbd>1</kbd>???<kbd>9</kbd> - switch to pages 1-9
     * * <kbd>Alt</kbd>+<kbd>0</kbd> - switch to page 10
     * 
     * These shortcuts are always available on `self,` this property is useful if
     * they should be available globally.
     */
    shortcutWidget: Gtk.Widget

    // Owm methods of Handy-1.Handy.TabView

    /**
     * Adds `child` to `self` with `parent` as the parent.
     * 
     * This function can be used to automatically position new pages, and to select
     * the correct page when this page is closed while being selected (see
     * [method`TabView`.close_page].
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
     * Calling this function will result in [signal`TabView:`:close-page] signal
     * being emitted for `page`. Closing the page can then be confirmed or denied via
     * [method`TabView`.close_page_finish].
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
     * If `confirm` is `TRUE`, `page` will be closed. If it's `FALSE`, ite will be
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
     * Gets default icon of `self`.
     */
    getDefaultIcon(): Gio.Icon
    /**
     * Whether a page is being transferred.
     * 
     * Gets the value of [property`TabView:`is-transferring-page] property.
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
     * 
     * See [method`TabView`.set_page_pinned].
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
     * Returns a [iface`Gio`.ListModel] containing the pages of `self`.
     * 
     * This model can be used to keep an up to date view of the pages.
     */
    getPages(): Gio.ListModel
    /**
     * Gets the currently selected page in `self`.
     */
    getSelectedPage(): TabPage | null
    /**
     * Gets the shortcut widget for `self`.
     */
    getShortcutWidget(): Gtk.Widget | null
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
     * It's an error to try to insert a pinned page after a non-pinned page, in that
     * case [method`TabView`.insert] should be used instead.
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
     * Sets default page icon for `self`.
     * 
     * If a page doesn't provide its own icon via [property`TabPage:`icon], default
     * icon may be used instead for contexts where having an icon is necessary.
     * 
     * [class`TabBar]` will use default icon for pinned tabs in case the page is not
     * loading, doesn't have an icon and an indicator. Default icon is never used
     * for tabs that aren't pinned.
     * 
     * By default, `hdy-tab-icon-missing-symbolic` icon is used.
     * @param defaultIcon the default icon
     */
    setDefaultIcon(defaultIcon: Gio.Icon): void
    /**
     * Sets the tab context menu model for `self`.
     * 
     * When a context menu is shown for a tab, it will be constructed from the
     * provided menu model. Use [signal`TabView:`:setup-menu] signal to set up the
     * menu actions for the particular tab.
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
     * Sets the shortcut widget for `self`.
     * @param widget a shortcut widget
     */
    setShortcutWidget(widget: Gtk.Widget | null): void
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Own signals of Handy-1.Handy.TabView

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

    // Class property signals of Handy-1.Handy.TabView

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
    connect(sigName: "notify::selected-page", callback: any): number
    on(sigName: "notify::selected-page", callback: any): number
    once(sigName: "notify::selected-page", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selected-page", ...args: any[]): void
    connect(sigName: "notify::shortcut-widget", callback: any): number
    on(sigName: "notify::shortcut-widget", callback: any): number
    once(sigName: "notify::shortcut-widget", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::shortcut-widget", ...args: any[]): void
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
 * A dynamic tabbed container.
 * 
 * `HdyTabView` is a container which shows one child at a time. While it
 * provides keyboard shortcuts for switching between pages, it does not provide
 * a visible tab bar and relies on external widgets for that, such as
 * [class`TabBar]`.
 * 
 * `HdyTabView` maintains a [class`TabPage]` object for each page,which holds
 * additional per-page properties. You can obtain the [class`TabPage]` for a page
 * with [method`TabView`.get_page], and as return value for
 * [method`TabView`.append] and other functions for adding children.
 * 
 * `HdyTabView` only aims to be useful for dynamic tabs in multi-window
 * document-based applications, such as web browsers, file managers, text
 * editors or terminals. It does not aim to replace [class`Gtk`.Notebook] for use
 * cases such as tabbed dialogs.
 * 
 * As such, it does not support disabling page reordering or detaching, or
 * adding children via [iface`Gtk`.Buildable].
 * 
 * ## CSS nodes
 * 
 * `HdyTabView` has a main CSS node with the name `tabview`.
 * 
 * It contains the subnode overlay, which contains subnodes stack and widget.
 * The stack subnode contains the added pages.
 * 
 * ```
 * tabview
 * ????????? overlay
 *     ????????? stack
 *     ???   ????????? [ Children ]
 *     ????????? widget
 * ```
 * @class 
 */
export class TabView extends Gtk.Bin {

    // Own properties of Handy-1.Handy.TabView

    static name: string

    // Constructors of Handy-1.Handy.TabView

    constructor(config?: TabView.ConstructorProperties) 
    /**
     * Creates a new `HdyTabView`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyTabView`.
     * @constructor 
     */
    static new(): TabView
    _init(config?: TabView.ConstructorProperties): void
}

export module TitleBar {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.TitleBar

        /**
         * Whether or not the title bar is in selection mode.
         */
        selectionMode?: boolean | null
    }

}

export interface TitleBar extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.TitleBar

    /**
     * Whether or not the title bar is in selection mode.
     */
    selectionMode: boolean

    // Owm methods of Handy-1.Handy.TitleBar

    /**
     * Returns whether whether `self` is in selection mode.
     */
    getSelectionMode(): boolean
    /**
     * Sets whether `self` is in selection mode.
     * @param selectionMode `TRUE` to enable the selection mode
     */
    setSelectionMode(selectionMode: boolean): void

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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Handy-1.Handy.TitleBar

    connect(sigName: "notify::selection-mode", callback: any): number
    on(sigName: "notify::selection-mode", callback: any): number
    once(sigName: "notify::selection-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selection-mode", ...args: any[]): void
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
 * A simple title bar container.
 * 
 * `HdyTitleBar` is meant to be used as the top-level widget of your window's
 * title bar. It will be drawn with the same style as a [class`Gtk`.HeaderBar]
 * but it won't force a widget layout on you: you can put whatever widget you
 * want in it, including a [class`Gtk`.HeaderBar].
 * 
 * `HdyTitleBar` becomes really useful when you want to animate header bars,
 * like an adaptive application using [class`Leaflet]` would do.
 * 
 * `HdyTitleBar` has been deprecated, header bars can be animated without it
 * when placed inside [class`Window]` or [class`ApplicationWindow]`.
 * 
 * ## CSS nodes
 * 
 * `HdyTitleBar` has a single CSS node with name `headerbar`.
 * @class 
 */
export class TitleBar extends Gtk.Bin {

    // Own properties of Handy-1.Handy.TitleBar

    static name: string

    // Constructors of Handy-1.Handy.TitleBar

    constructor(config?: TitleBar.ConstructorProperties) 
    /**
     * Creates a new `HdyTitleBar`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyTitleBar`.
     * @constructor 
     */
    static new(): TitleBar
    _init(config?: TitleBar.ConstructorProperties): void
}

export module ValueObject {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.ValueObject

        /**
         * The contained value.
         */
        value?: any | null
    }

}

export interface ValueObject {

    // Own properties of Handy-1.Handy.ValueObject

    /**
     * The contained value.
     */
    readonly value: any

    // Owm methods of Handy-1.Handy.ValueObject

    /**
     * Copy data from the contained [struct`GObject`.Value] into `dest`.
     * @param dest value with correct type to copy into
     */
    copyValue(dest: any): void
    /**
     * Gets a copy of the contained string if the value is of type `G_TYPE_STRING`.
     */
    dupString(): string
    /**
     * Returns the contained string if the value is of type `G_TYPE_STRING`.
     */
    getString(): string
    /**
     * Return the contained value.
     */
    getValue(): any

    // Class property signals of Handy-1.Handy.ValueObject

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
 * An object representing a [struct`GObject`.Value].
 * 
 * The `HdyValueObject` object represents a [struct`GObject`.Value], allowing it
 * to be used with [iface`Gio`.ListModel].
 * @class 
 */
export class ValueObject extends GObject.Object {

    // Own properties of Handy-1.Handy.ValueObject

    static name: string

    // Constructors of Handy-1.Handy.ValueObject

    constructor(config?: ValueObject.ConstructorProperties) 
    /**
     * Creates a new `HdyValueObject`.
     * @constructor 
     * @param value the value to store
     */
    constructor(value: any) 
    /**
     * Creates a new `HdyValueObject`.
     * @constructor 
     * @param value the value to store
     */
    static new(value: any): ValueObject
    _init(config?: ValueObject.ConstructorProperties): void
}

export module ViewSwitcher {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.ViewSwitcher

        /**
         * The preferred place to ellipsize the string.
         * 
         * If the narrow mode label does not have enough room to display the entire
         * string, specified as a [enum`Pango`.EllipsizeMode].
         * 
         * Note that setting this property to a value other than
         * `PANGO_ELLIPSIZE_NONE` has the side-effect that the label requests only
         * enough space to display the ellipsis.
         */
        narrowEllipsize?: Pango.EllipsizeMode | null
        /**
         * The policy to determine which mode to use.
         */
        policy?: ViewSwitcherPolicy | null
        /**
         * The [class`Gtk`.Stack] the view switcher controls.
         */
        stack?: Gtk.Stack | null
    }

}

export interface ViewSwitcher extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.ViewSwitcher

    /**
     * The preferred place to ellipsize the string.
     * 
     * If the narrow mode label does not have enough room to display the entire
     * string, specified as a [enum`Pango`.EllipsizeMode].
     * 
     * Note that setting this property to a value other than
     * `PANGO_ELLIPSIZE_NONE` has the side-effect that the label requests only
     * enough space to display the ellipsis.
     */
    narrowEllipsize: Pango.EllipsizeMode
    /**
     * The policy to determine which mode to use.
     */
    policy: ViewSwitcherPolicy
    /**
     * The [class`Gtk`.Stack] the view switcher controls.
     */
    stack: Gtk.Stack

    // Owm methods of Handy-1.Handy.ViewSwitcher

    /**
     * Get the ellipsizing position of the narrow mode label.
     */
    getNarrowEllipsize(): Pango.EllipsizeMode
    /**
     * Gets the policy of `self`.
     */
    getPolicy(): ViewSwitcherPolicy
    /**
     * Gets the stack controlled by `self`.
     */
    getStack(): Gtk.Stack | null
    /**
     * Sets the mode used to ellipsize the text in narrow mode.
     * @param mode a [enum`Pango`.EllipsizeMode]
     */
    setNarrowEllipsize(mode: Pango.EllipsizeMode): void
    /**
     * Sets the policy of `self`.
     * @param policy the new policy
     */
    setPolicy(policy: ViewSwitcherPolicy): void
    /**
     * Sets the [class`Gtk`.Stack] to control.
     * @param stack a stack
     */
    setStack(stack: Gtk.Stack | null): void

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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Handy-1.Handy.ViewSwitcher

    connect(sigName: "notify::narrow-ellipsize", callback: any): number
    on(sigName: "notify::narrow-ellipsize", callback: any): number
    once(sigName: "notify::narrow-ellipsize", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::narrow-ellipsize", ...args: any[]): void
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
 * An adaptive view switcher.
 * 
 * An adaptive view switcher, designed to switch between multiple views in a
 * similar fashion than a [class`Gtk`.StackSwitcher].
 * 
 * Depending on the available width, the view switcher can adapt from a wide
 * mode showing the view's icon and title side by side, to a narrow mode showing
 * the view's icon and title one on top of the other, in a more compact way.
 * This can be controlled via the policy property.
 * 
 * To look good in a header bar, an `HdyViewSwitcher` requires to fill its full
 * height. Contrary to [class`Gtk`.HeaderBar], [class`HeaderBar]` doesn't force a
 * vertical alignment on its title widget, so we recommend it over
 * [class`Gtk`.HeaderBar].
 * 
 * ## CSS nodes
 * 
 * `HdyViewSwitcher` has a single CSS node with name `viewswitcher`.
 * @class 
 */
export class ViewSwitcher extends Gtk.Bin {

    // Own properties of Handy-1.Handy.ViewSwitcher

    static name: string

    // Constructors of Handy-1.Handy.ViewSwitcher

    constructor(config?: ViewSwitcher.ConstructorProperties) 
    /**
     * Creates a new `HdyViewSwitcher`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyViewSwitcher`.
     * @constructor 
     */
    static new(): ViewSwitcher
    _init(config?: ViewSwitcher.ConstructorProperties): void
}

export module ViewSwitcherBar {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.ViewSwitcherBar

        /**
         * The policy used to determine which mode to use.
         */
        policy?: ViewSwitcherPolicy | null
        /**
         * Whether the bar should be revealed or hidden.
         */
        reveal?: boolean | null
        /**
         * The [class`Gtk`.Stack] the [class`ViewSwitcher]` controls.
         */
        stack?: Gtk.Stack | null
    }

}

export interface ViewSwitcherBar extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.ViewSwitcherBar

    /**
     * The policy used to determine which mode to use.
     */
    policy: ViewSwitcherPolicy
    /**
     * Whether the bar should be revealed or hidden.
     */
    reveal: boolean
    /**
     * The [class`Gtk`.Stack] the [class`ViewSwitcher]` controls.
     */
    stack: Gtk.Stack

    // Owm methods of Handy-1.Handy.ViewSwitcherBar

    /**
     * Gets the policy of `self`.
     */
    getPolicy(): ViewSwitcherPolicy
    /**
     * Gets whether `self` should be revealed or hidden.
     */
    getReveal(): boolean
    /**
     * Get the [class`Gtk`.Stack] being controlled by the [class`ViewSwitcher]`.
     */
    getStack(): Gtk.Stack | null
    /**
     * Sets the policy of `self`.
     * @param policy the new policy
     */
    setPolicy(policy: ViewSwitcherPolicy): void
    /**
     * Sets whether `self` should be revealed or not.
     * @param reveal `TRUE` to reveal `self`
     */
    setReveal(reveal: boolean): void
    /**
     * Sets the [class`Gtk`.Stack] to control.
     * @param stack a stack
     */
    setStack(stack: Gtk.Stack | null): void

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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Handy-1.Handy.ViewSwitcherBar

    connect(sigName: "notify::policy", callback: any): number
    on(sigName: "notify::policy", callback: any): number
    once(sigName: "notify::policy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::policy", ...args: any[]): void
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
 * A view switcher action bar.
 * 
 * An action bar letting you switch between multiple views offered by a
 * [class`Gtk`.Stack], via an [class`ViewSwitcher]`. It is designed to be put at
 * the bottom of a window and to be revealed only on really narrow windows e.g.
 * on mobile phones. It can't be revealed if there are less than two pages.
 * 
 * `HdyViewSwitcherBar` is intended to be used together with
 * [class`ViewSwitcherTitle]`.
 * 
 * A common use case is to bind the [property`ViewSwitcherBar:`reveal] property
 * to [property`ViewSwitcherTitle:`title-visible] to automatically reveal the
 * view switcher bar when the title label is displayed in place of the view
 * switcher, as follows:
 * 
 * ```xml
 * <object class="GtkWindow"/>
 *   <child type="titlebar">
 *     <object class="HdyHeaderBar">
 *       <property name="centering-policy">strict</property>
 *       <child type="title">
 *         <object class="HdyViewSwitcherTitle"
 *                 id="view_switcher_title">
 *           <property name="stack">stack</property>
 *         </object>
 *       </child>
 *     </object>
 *   </child>
 *   <child>
 *     <object class="GtkBox">
 *       <child>
 *         <object class="GtkStack" id="stack"/>
 *       </child>
 *       <child>
 *         <object class="HdyViewSwitcherBar">
 *           <property name="stack">stack</property>
 *           <property name="reveal"
 *                     bind-source="view_switcher_title"
 *                     bind-property="title-visible"
 *                     bind-flags="sync-create"/>
 *         </object>
 *       </child>
 *     </object>
 *   </child>
 * </object>
 * ```
 * 
 * ## CSS nodes
 * 
 * `HdyViewSwitcherBar` has a single CSS node with name `viewswitcherbar`.
 * @class 
 */
export class ViewSwitcherBar extends Gtk.Bin {

    // Own properties of Handy-1.Handy.ViewSwitcherBar

    static name: string

    // Constructors of Handy-1.Handy.ViewSwitcherBar

    constructor(config?: ViewSwitcherBar.ConstructorProperties) 
    /**
     * Creates a new `HdyViewSwitcherBar`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyViewSwitcherBar`.
     * @constructor 
     */
    static new(): ViewSwitcherBar
    _init(config?: ViewSwitcherBar.ConstructorProperties): void
}

export module ViewSwitcherTitle {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Handy-1.Handy.ViewSwitcherTitle

        /**
         * The policy used to determine which mode to use.
         */
        policy?: ViewSwitcherPolicy | null
        /**
         * The [class`Gtk`.Stack] the [class`ViewSwitcher]` controls.
         */
        stack?: Gtk.Stack | null
        /**
         * The subtitle of the [class`ViewSwitcher]`.
         * 
         * The subtitle should give a user additional details.
         */
        subtitle?: string | null
        /**
         * The title of the [class`ViewSwitcher]`.
         * 
         * The title should give a user additional details. A good title should not
         * include the application name.
         */
        title?: string | null
        /**
         * Whether the bar should be revealed or hidden.
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

export interface ViewSwitcherTitle extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Handy-1.Handy.ViewSwitcherTitle

    /**
     * The policy used to determine which mode to use.
     */
    policy: ViewSwitcherPolicy
    /**
     * The [class`Gtk`.Stack] the [class`ViewSwitcher]` controls.
     */
    stack: Gtk.Stack
    /**
     * The subtitle of the [class`ViewSwitcher]`.
     * 
     * The subtitle should give a user additional details.
     */
    subtitle: string
    /**
     * The title of the [class`ViewSwitcher]`.
     * 
     * The title should give a user additional details. A good title should not
     * include the application name.
     */
    title: string
    /**
     * Whether the bar should be revealed or hidden.
     */
    readonly titleVisible: boolean
    /**
     * Whether the bar should be revealed or hidden.
     * 
     * If it is disabled, the title will be displayed instead. This allows to
     * programmatically hide the view switcher even if it fits in the available
     * space.
     * 
     * This can be used e.g. to ensure the view switcher is hidden below a certain
     * window width, or any other constraint you find suitable.
     */
    viewSwitcherEnabled: boolean

    // Owm methods of Handy-1.Handy.ViewSwitcherTitle

    /**
     * Gets the policy of `self`.
     */
    getPolicy(): ViewSwitcherPolicy
    /**
     * Gets the stack controlled by `self`.
     */
    getStack(): Gtk.Stack | null
    /**
     * Gets the subtitle of `self`.
     */
    getSubtitle(): string | null
    /**
     * Gets the title of `self`.
     */
    getTitle(): string | null
    /**
     * Gets whether the title of `self` is currently visible.
     */
    getTitleVisible(): boolean
    /**
     * Gets whether `self'`s view switcher is enabled.
     */
    getViewSwitcherEnabled(): boolean
    /**
     * Sets the policy of `self`.
     * @param policy the new policy
     */
    setPolicy(policy: ViewSwitcherPolicy): void
    /**
     * Sets the [class`Gtk`.Stack] to control.
     * @param stack a stack
     */
    setStack(stack: Gtk.Stack | null): void
    /**
     * Sets the subtitle of `self`.
     * @param subtitle a subtitle
     */
    setSubtitle(subtitle: string | null): void
    /**
     * Sets the title of `self`.
     * @param title a title
     */
    setTitle(title: string | null): void
    /**
     * Sets whether `self'`s view switcher is enabled.
     * @param enabled `TRUE` to enable the view switcher, `FALSE` to disable it
     */
    setViewSwitcherEnabled(enabled: boolean): void

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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Handy-1.Handy.ViewSwitcherTitle

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
 * A view switcher title.
 * 
 * A widget letting you switch between multiple views contained by a
 * [class`Gtk`.Stack], via an [class`ViewSwitcher]`.
 * 
 * It is designed to be used as the title widget of a [class`HeaderBar]`, and
 * will display the window's title when the window is too narrow to fit the view
 * switcher e.g. on mobile phones, or if there are less than two views.
 * 
 * `HdyViewSwitcherTitle` is intended to be used together with
 * [class`ViewSwitcherBar]`.
 * 
 * A common use case is to bind the [property`ViewSwitcherBar:`reveal] property
 * to [property`ViewSwitcherTitle:`title-visible] to automatically reveal the
 * view switcher bar when the title label is displayed in place of the view
 * switcher, as follows:
 * 
 * ```xml
 * <object class="GtkWindow"/>
 *   <child type="titlebar">
 *     <object class="HdyHeaderBar">
 *       <property name="centering-policy">strict</property>
 *       <child type="title">
 *         <object class="HdyViewSwitcherTitle"
 *                 id="view_switcher_title">
 *           <property name="stack">stack</property>
 *         </object>
 *       </child>
 *     </object>
 *   </child>
 *   <child>
 *     <object class="GtkBox">
 *       <child>
 *         <object class="GtkStack" id="stack"/>
 *       </child>
 *       <child>
 *         <object class="HdyViewSwitcherBar">
 *           <property name="stack">stack</property>
 *           <property name="reveal"
 *                     bind-source="view_switcher_title"
 *                     bind-property="title-visible"
 *                     bind-flags="sync-create"/>
 *         </object>
 *       </child>
 *     </object>
 *   </child>
 * </object>
 * ```
 * 
 * ## CSS nodes
 * 
 * `HdyViewSwitcherTitle` has a single CSS node with name `viewswitchertitle`.
 * @class 
 */
export class ViewSwitcherTitle extends Gtk.Bin {

    // Own properties of Handy-1.Handy.ViewSwitcherTitle

    static name: string

    // Constructors of Handy-1.Handy.ViewSwitcherTitle

    constructor(config?: ViewSwitcherTitle.ConstructorProperties) 
    /**
     * Creates a new `HdyViewSwitcherTitle`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyViewSwitcherTitle`.
     * @constructor 
     */
    static new(): ViewSwitcherTitle
    _init(config?: ViewSwitcherTitle.ConstructorProperties): void
}

export module Window {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Window.ConstructorProperties {
    }

}

export interface Window extends Atk.ImplementorIface, Gtk.Buildable {

    // Own fields of Handy-1.Handy.Window

    parentInstance: any

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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Handy-1.Handy.Window

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
 * A freeform window.
 * 
 * The `HdyWindow` widget is a subclass of [class`Gtk`.Window] which has no
 * titlebar area and provides rounded corners on all sides, ensuring they can
 * never be overlapped by the content. This makes it safe to use headerbars in
 * the content area as follows:
 * 
 * ```xml
 * <object class="HdyWindow"/>
 *   <child>
 *     <object class="GtkBox">
 *       <property name="visible">True</property>
 *       <property name="orientation">vertical</property>
 *       <child>
 *         <object class="HdyHeaderBar">
 *           <property name="visible">True</property>
 *           <property name="show-close-button">True</property>
 *         </object>
 *       </child>
 *       <child>
 *         <!-- ... -->
 *       </child>
 *     </object>
 *   </child>
 * </object>
 * ```
 * 
 * It's recommended to use [class`HeaderBar]` with `HdyWindow`, as unlike
 * [class`Gtk`.HeaderBar] it remains draggable inside the window. Otherwise,
 * [class`WindowHandle]` can be used.
 * 
 * `HdyWindow` allows to easily implement titlebar autohiding by putting the
 * headerbar inside a [class`Gtk`.Revealer], and to show titlebar above content
 * by putting it into a [class`Gtk`.Overlay] instead of [class`Gtk`.Box].
 * 
 * If the window has a [class`Gtk`.GLArea], it may bring a slight performance
 * regression when the window is not fullscreen, tiled or maximized.
 * 
 * Using [method`Gtk`.Window.get_titlebar] and [method`Gtk`.Window.set_titlebar]
 * is not supported and will result in a crash.
 * 
 * ## CSS nodes
 * 
 * `HdyWindow` has a main CSS node with the name `window` and style classes
 * `.background`, `.csd` and `.unified`.
 * 
 * The `.solid-csd` style class on the main node is used for client-side
 * decorations without invisible borders.
 * 
 * `HdyWindow` also represents window states with the following style classes on
 * the main node: `.tiled`, `.maximized`, `.fullscreen`.
 * 
 * It contains the subnodes decoration for window shadow and/or border,
 * decoration-overlay for the sheen on top of the window, `widget.titlebar`, and
 * deck, which contains the child inside the window.
 * @class 
 */
export class Window extends Gtk.Window {

    // Own properties of Handy-1.Handy.Window

    static name: string

    // Constructors of Handy-1.Handy.Window

    constructor(config?: Window.ConstructorProperties) 
    /**
     * Creates a new `HdyWindow`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyWindow`.
     * @constructor 
     */
    static new(): Window

    // Overloads of new

    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you???re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called ???popups???.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don???t use #GTK_WINDOW_POPUP.
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

export module WindowHandle {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.EventBox.ConstructorProperties {
    }

}

export interface WindowHandle extends Atk.ImplementorIface, Gtk.Buildable {

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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Handy-1.Handy.WindowHandle

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
 * A bin that acts like a titlebar.
 * 
 * `HdyWindowHandle` is a [class`Gtk`.Bin] subclass that can be dragged to move
 * its [class`Gtk`.Window], and handles right click, middle click and double
 * click as expected from a titlebar. This is particularly useful with
 * [class`Window]` or [class`ApplicationWindow]`.
 * 
 * It isn't necessary to use `HdyWindowHandle` if you use [class`HeaderBar]`.
 * 
 * It can be safely nested or used in the actual window titlebar.
 * 
 * ## CSS nodes
 * 
 * `HdyWindowHandle` has a single CSS node with name `windowhandle`.
 * @class 
 */
export class WindowHandle extends Gtk.EventBox {

    // Own properties of Handy-1.Handy.WindowHandle

    static name: string

    // Constructors of Handy-1.Handy.WindowHandle

    constructor(config?: WindowHandle.ConstructorProperties) 
    /**
     * Creates a new `HdyWindowHandle`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `HdyWindowHandle`.
     * @constructor 
     */
    static new(): WindowHandle
    _init(config?: WindowHandle.ConstructorProperties): void
}

export interface ActionRowClass {

    // Own fields of Handy-1.Handy.ActionRowClass

    /**
     * the parent class
     * @field 
     */
    parentClass: Gtk.ListBoxRowClass
    activate: (self: ActionRow) => void
}

export abstract class ActionRowClass {

    // Own properties of Handy-1.Handy.ActionRowClass

    static name: string
}

export interface ApplicationWindowClass {

    // Own fields of Handy-1.Handy.ApplicationWindowClass

    parentClass: Gtk.ApplicationWindowClass
}

export abstract class ApplicationWindowClass {

    // Own properties of Handy-1.Handy.ApplicationWindowClass

    static name: string
}

export interface AvatarClass {

    // Own fields of Handy-1.Handy.AvatarClass

    parentClass: Gtk.DrawingAreaClass
}

export abstract class AvatarClass {

    // Own properties of Handy-1.Handy.AvatarClass

    static name: string
}

export interface CarouselClass {

    // Own fields of Handy-1.Handy.CarouselClass

    parentClass: Gtk.EventBoxClass
}

export abstract class CarouselClass {

    // Own properties of Handy-1.Handy.CarouselClass

    static name: string
}

export interface CarouselIndicatorDotsClass {

    // Own fields of Handy-1.Handy.CarouselIndicatorDotsClass

    parentClass: Gtk.DrawingAreaClass
}

export abstract class CarouselIndicatorDotsClass {

    // Own properties of Handy-1.Handy.CarouselIndicatorDotsClass

    static name: string
}

export interface CarouselIndicatorLinesClass {

    // Own fields of Handy-1.Handy.CarouselIndicatorLinesClass

    parentClass: Gtk.DrawingAreaClass
}

export abstract class CarouselIndicatorLinesClass {

    // Own properties of Handy-1.Handy.CarouselIndicatorLinesClass

    static name: string
}

export interface ClampClass {

    // Own fields of Handy-1.Handy.ClampClass

    parentClass: Gtk.BinClass
}

export abstract class ClampClass {

    // Own properties of Handy-1.Handy.ClampClass

    static name: string
}

export interface ComboRowClass {

    // Own fields of Handy-1.Handy.ComboRowClass

    /**
     * the parent class
     * @field 
     */
    parentClass: ActionRowClass
}

export abstract class ComboRowClass {

    // Own properties of Handy-1.Handy.ComboRowClass

    static name: string
}

export interface DeckClass {

    // Own fields of Handy-1.Handy.DeckClass

    /**
     * the parent class
     * @field 
     */
    parentClass: Gtk.ContainerClass
}

export abstract class DeckClass {

    // Own properties of Handy-1.Handy.DeckClass

    static name: string
}

export interface EnumValueObjectClass {

    // Own fields of Handy-1.Handy.EnumValueObjectClass

    parentClass: GObject.ObjectClass
}

export abstract class EnumValueObjectClass {

    // Own properties of Handy-1.Handy.EnumValueObjectClass

    static name: string
}

export interface ExpanderRowClass {

    // Own fields of Handy-1.Handy.ExpanderRowClass

    /**
     * the parent class
     * @field 
     */
    parentClass: PreferencesRowClass
}

export abstract class ExpanderRowClass {

    // Own properties of Handy-1.Handy.ExpanderRowClass

    static name: string
}

export interface FlapClass {

    // Own fields of Handy-1.Handy.FlapClass

    parentClass: Gtk.ContainerClass
}

export abstract class FlapClass {

    // Own properties of Handy-1.Handy.FlapClass

    static name: string
}

export interface HeaderBarClass {

    // Own fields of Handy-1.Handy.HeaderBarClass

    /**
     * the parent class
     * @field 
     */
    parentClass: Gtk.ContainerClass
}

export abstract class HeaderBarClass {

    // Own properties of Handy-1.Handy.HeaderBarClass

    static name: string
}

export interface HeaderGroupChildClass {

    // Own fields of Handy-1.Handy.HeaderGroupChildClass

    parentClass: GObject.ObjectClass
}

export abstract class HeaderGroupChildClass {

    // Own properties of Handy-1.Handy.HeaderGroupChildClass

    static name: string
}

export interface HeaderGroupClass {

    // Own fields of Handy-1.Handy.HeaderGroupClass

    parentClass: GObject.ObjectClass
}

export abstract class HeaderGroupClass {

    // Own properties of Handy-1.Handy.HeaderGroupClass

    static name: string
}

export interface KeypadClass {

    // Own fields of Handy-1.Handy.KeypadClass

    /**
     * the parent class
     * @field 
     */
    parentClass: Gtk.BinClass
}

export abstract class KeypadClass {

    // Own properties of Handy-1.Handy.KeypadClass

    static name: string
}

export interface LeafletClass {

    // Own fields of Handy-1.Handy.LeafletClass

    /**
     * the parent class
     * @field 
     */
    parentClass: Gtk.ContainerClass
}

export abstract class LeafletClass {

    // Own properties of Handy-1.Handy.LeafletClass

    static name: string
}

export interface PreferencesGroupClass {

    // Own fields of Handy-1.Handy.PreferencesGroupClass

    /**
     * the parent class
     * @field 
     */
    parentClass: Gtk.BinClass
}

export abstract class PreferencesGroupClass {

    // Own properties of Handy-1.Handy.PreferencesGroupClass

    static name: string
}

export interface PreferencesPageClass {

    // Own fields of Handy-1.Handy.PreferencesPageClass

    /**
     * the parent class
     * @field 
     */
    parentClass: Gtk.BinClass
}

export abstract class PreferencesPageClass {

    // Own properties of Handy-1.Handy.PreferencesPageClass

    static name: string
}

export interface PreferencesRowClass {

    // Own fields of Handy-1.Handy.PreferencesRowClass

    /**
     * the parent class
     * @field 
     */
    parentClass: Gtk.ListBoxRowClass
}

export abstract class PreferencesRowClass {

    // Own properties of Handy-1.Handy.PreferencesRowClass

    static name: string
}

export interface PreferencesWindowClass {

    // Own fields of Handy-1.Handy.PreferencesWindowClass

    /**
     * the parent class
     * @field 
     */
    parentClass: WindowClass
}

export abstract class PreferencesWindowClass {

    // Own properties of Handy-1.Handy.PreferencesWindowClass

    static name: string
}

export interface SearchBarClass {

    // Own fields of Handy-1.Handy.SearchBarClass

    parentClass: Gtk.BinClass
}

export abstract class SearchBarClass {

    // Own properties of Handy-1.Handy.SearchBarClass

    static name: string
}

export interface SqueezerClass {

    // Own fields of Handy-1.Handy.SqueezerClass

    parentClass: Gtk.ContainerClass
}

export abstract class SqueezerClass {

    // Own properties of Handy-1.Handy.SqueezerClass

    static name: string
}

export interface StatusPageClass {

    // Own fields of Handy-1.Handy.StatusPageClass

    parentClass: Gtk.BinClass
}

export abstract class StatusPageClass {

    // Own properties of Handy-1.Handy.StatusPageClass

    static name: string
}

export interface StyleManagerClass {

    // Own fields of Handy-1.Handy.StyleManagerClass

    parentClass: GObject.ObjectClass
}

export abstract class StyleManagerClass {

    // Own properties of Handy-1.Handy.StyleManagerClass

    static name: string
}

export interface SwipeGroupClass {

    // Own fields of Handy-1.Handy.SwipeGroupClass

    parentClass: GObject.ObjectClass
}

export abstract class SwipeGroupClass {

    // Own properties of Handy-1.Handy.SwipeGroupClass

    static name: string
}

export interface SwipeTrackerClass {

    // Own fields of Handy-1.Handy.SwipeTrackerClass

    parentClass: GObject.ObjectClass
}

export abstract class SwipeTrackerClass {

    // Own properties of Handy-1.Handy.SwipeTrackerClass

    static name: string
}

export interface SwipeableInterface {

    // Own fields of Handy-1.Handy.SwipeableInterface

    /**
     * the parent interface
     * @field 
     */
    parent: GObject.TypeInterface
    switchChild: (self: Swipeable, index: number, duration: number) => void
    getSwipeTracker: (self: Swipeable) => SwipeTracker
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

    // Own properties of Handy-1.Handy.SwipeableInterface

    static name: string
}

export interface TabBarClass {

    // Own fields of Handy-1.Handy.TabBarClass

    parentClass: Gtk.BinClass
}

export abstract class TabBarClass {

    // Own properties of Handy-1.Handy.TabBarClass

    static name: string
}

export interface TabPageClass {

    // Own fields of Handy-1.Handy.TabPageClass

    parentClass: GObject.ObjectClass
}

export abstract class TabPageClass {

    // Own properties of Handy-1.Handy.TabPageClass

    static name: string
}

export interface TabViewClass {

    // Own fields of Handy-1.Handy.TabViewClass

    parentClass: Gtk.BinClass
}

export abstract class TabViewClass {

    // Own properties of Handy-1.Handy.TabViewClass

    static name: string
}

export interface TitleBarClass {

    // Own fields of Handy-1.Handy.TitleBarClass

    parentClass: Gtk.BinClass
}

export abstract class TitleBarClass {

    // Own properties of Handy-1.Handy.TitleBarClass

    static name: string
}

export interface ValueObjectClass {

    // Own fields of Handy-1.Handy.ValueObjectClass

    parentClass: GObject.ObjectClass
}

export abstract class ValueObjectClass {

    // Own properties of Handy-1.Handy.ValueObjectClass

    static name: string
}

export interface ViewSwitcherBarClass {

    // Own fields of Handy-1.Handy.ViewSwitcherBarClass

    parentClass: Gtk.BinClass
}

export abstract class ViewSwitcherBarClass {

    // Own properties of Handy-1.Handy.ViewSwitcherBarClass

    static name: string
}

export interface ViewSwitcherClass {

    // Own fields of Handy-1.Handy.ViewSwitcherClass

    parentClass: Gtk.BinClass
}

export abstract class ViewSwitcherClass {

    // Own properties of Handy-1.Handy.ViewSwitcherClass

    static name: string
}

export interface ViewSwitcherTitleClass {

    // Own fields of Handy-1.Handy.ViewSwitcherTitleClass

    parentClass: Gtk.BinClass
}

export abstract class ViewSwitcherTitleClass {

    // Own properties of Handy-1.Handy.ViewSwitcherTitleClass

    static name: string
}

export interface WindowClass {

    // Own fields of Handy-1.Handy.WindowClass

    parentClass: Gtk.WindowClass
}

export abstract class WindowClass {

    // Own properties of Handy-1.Handy.WindowClass

    static name: string
}

export interface WindowHandleClass {

    // Own fields of Handy-1.Handy.WindowHandleClass

    parentClass: Gtk.EventBoxClass
}

export abstract class WindowHandleClass {

    // Own properties of Handy-1.Handy.WindowHandleClass

    static name: string
}
