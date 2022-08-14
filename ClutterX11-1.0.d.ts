
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ClutterX11-1.0
 */

import type * as xlib from './xlib-2.0.js';
import type * as Clutter from './Clutter-1.0.js';
import type * as cairo from './cairo-1.0.js';
import type * as Json from './Json-1.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as GL from './GL-1.0.js';
import type * as CoglPango from './CoglPango-1.0.js';
import type * as PangoCairo from './PangoCairo-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as Cogl from './Cogl-1.0.js';
import type * as Atk from './Atk-1.0.js';

/**
 * Return values for the #ClutterX11FilterFunc function.
 */
export enum FilterReturn {
    /**
     * The event was not handled, continues the
     *   processing
     */
    CONTINUE,
    /**
     * Native event translated into a Clutter
     *   event, stops the processing
     */
    TRANSLATE,
    /**
     * Remove the event, stops the processing
     */
    REMOVE,
}
/**
 * Disables the internal polling of X11 events in the main loop.
 * 
 * Libraries or applications calling this function will be responsible of
 * polling all X11 events.
 * 
 * You also must call clutter_x11_handle_event() to let Clutter process
 * events and maintain its internal state.
 * 
 * This function can only be called before calling clutter_init().
 * 
 * Even with event handling disabled, Clutter will still select
 * all the events required to maintain its internal state on the stage
 * Window; compositors using Clutter and input regions to pass events
 * through to application windows should not rely on an empty input
 * region, and should instead clear it themselves explicitly using the
 * XFixes extension.
 * 
 * This function should not be normally used by applications.
 */
export function disableEventRetrieval(): void
/**
 * Enables the use of the XInput extension if present on connected
 * XServer and support built into Clutter. XInput allows for multiple
 * pointing devices to be used.
 * 
 * This function must be called before clutter_init().
 * 
 * Since XInput might not be supported by the X server, you might
 * want to use clutter_x11_has_xinput() to see if support was enabled.
 */
export function enableXinput(): void
/**
 * Retrieves the group for the modifiers set in `event`
 * @param event a #ClutterEvent of type %CLUTTER_KEY_PRESS or %CLUTTER_KEY_RELEASE
 */
export function eventGetKeyGroup(event: Clutter.Event): number
/**
 * Retrieves the touch detail froma #ClutterEventSequence.
 * @param sequence a #ClutterEventSequence
 */
export function eventSequenceGetTouchDetail(sequence: Clutter.EventSequence): number
/**
 * Retrieves the pointer to the default display.
 */
export function getDefaultDisplay(): xlib.Display
/**
 * Gets the number of the default X Screen object.
 */
export function getDefaultScreen(): number
/**
 * Retrieves a pointer to the list of input devices
 */
export function getInputDevices(): Clutter.InputDevice[]
/**
 * Gets the stage for a particular X window.
 * @param win an X Window ID
 */
export function getStageFromWindow(win: xlib.Window): Clutter.Stage
/**
 * Retrieves whether the Clutter X11 backend is using ARGB visuals by default
 */
export function getUseArgbVisual(): boolean
/**
 * Retrieves whether the Clutter X11 backend will create stereo
 * stages if possible.
 */
export function getUseStereoStage(): boolean
/**
 * This function processes a single X event; it can be used to hook
 * into external X11 event processing (for example, a GDK filter
 * function).
 * 
 * If clutter_x11_disable_event_retrieval() has been called, you must
 * let this function process events to update Clutter's internal state.
 * @param xevent pointer to XEvent structure
 */
export function handleEvent(xevent: xlib.XEvent): FilterReturn
/**
 * Retrieves whether Clutter is running on an X11 server with the
 * XComposite extension
 */
export function hasCompositeExtension(): boolean
/**
 * Queries the X11 backend to check if event collection has been disabled.
 */
export function hasEventRetrieval(): boolean
/**
 * Gets whether Clutter has XInput support.
 */
export function hasXinput(): boolean
/**
 * Sets the display connection Clutter should use; must be called
 * before clutter_init(), clutter_init_with_args() or other functions
 * pertaining Clutter's initialization process.
 * 
 * If you are parsing the command line arguments by retrieving Clutter's
 * #GOptionGroup with clutter_get_option_group() and calling
 * g_option_context_parse() yourself, you should also call
 * clutter_x11_set_display() before g_option_context_parse().
 * @param xdpy pointer to a X display connection.
 */
export function setDisplay(xdpy: xlib.Display): void
/**
 * Target the #ClutterStage to use an existing external X Window
 * @param stage a #ClutterStage
 * @param xwindow an existing X Window id
 */
export function setStageForeign(stage: Clutter.Stage, xwindow: xlib.Window): boolean
/**
 * Sets whether the Clutter X11 backend should request ARGB visuals by default
 * or not.
 * 
 * By default, Clutter requests RGB visuals.
 * 
 * If no ARGB visuals are found, the X11 backend will fall back to
 * requesting a RGB visual instead.
 * 
 * ARGB visuals are required for the #ClutterStage:use-alpha property to work.
 * 
 * This function can only be called once, and before clutter_init() is
 * called.
 * @param useArgb %TRUE if ARGB visuals should be requested by default
 */
export function setUseArgbVisual(useArgb: boolean): void
/**
 * Sets whether the backend object for Clutter stages, will,
 * if possible, be created with the ability to support stereo drawing
 * (drawing separate images for the left and right eyes).
 * 
 * This function must be called before clutter_init() is called.
 * During paint callbacks, cogl_framebuffer_is_stereo() can be called
 * on the framebuffer retrieved by cogl_get_draw_framebuffer() to
 * determine if stereo support was successfully enabled, and
 * cogl_framebuffer_set_stereo_mode() to determine which buffers
 * will be drawn to.
 * 
 * Note that this function *does not* cause the stage to be drawn
 * multiple times with different perspective transformations and thus
 * appear in 3D, it simply enables individual ClutterActors to paint
 * different images for the left and and right eye.
 * @param useStereo %TRUE if the stereo stages should be used if possible.
 */
export function setUseStereoStage(useStereo: boolean): void
/**
 * Traps every X error until clutter_x11_untrap_x_errors() is called.
 */
export function trapXErrors(): void
/**
 * Removes the X error trap and returns the current status.
 */
export function untrapXErrors(): number
/**
 * Filter function for X11 native events.
 * @callback 
 * @param xev Native X11 event structure
 * @param cev Clutter event structure
 */
export interface FilterFunc {
    (xev: xlib.XEvent, cev: Clutter.Event): FilterReturn
}
export module TexturePixmap {

    // Signal callback interfaces

    /**
     * Signal callback interface for `queue-damage-redraw`
     */
    export interface QueueDamageRedrawSignalCallback {
        (x: number, y: number, width: number, height: number): void
    }

    /**
     * Signal callback interface for `update-area`
     */
    export interface UpdateAreaSignalCallback {
        (x: number, y: number, width: number, height: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Clutter.Texture.ConstructorProperties {

        // Own constructor properties of ClutterX11-1.0.ClutterX11.TexturePixmap

        automaticUpdates?: boolean | null
        pixmap?: number | null
        window?: number | null
        windowRedirectAutomatic?: boolean | null
    }

}

export interface TexturePixmap extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of ClutterX11-1.0.ClutterX11.TexturePixmap

    automaticUpdates: boolean
    readonly destroyed: boolean
    pixmap: number
    readonly pixmapDepth: number
    readonly pixmapHeight: number
    readonly pixmapWidth: number
    window: number
    readonly windowMapped: boolean
    readonly windowOverrideRedirect: boolean
    windowRedirectAutomatic: boolean
    readonly windowX: number
    readonly windowY: number

    // Owm methods of ClutterX11-1.0.ClutterX11.TexturePixmap

    /**
     * Enables or disables the automatic updates ot `texture` in case the backing
     * pixmap or window is damaged
     * @param setting %TRUE to enable automatic updates
     */
    setAutomatic(setting: boolean): void
    /**
     * Sets the X Pixmap to which the texture should be bound.
     * @param pixmap the X Pixmap to which the texture should be bound
     */
    setPixmap(pixmap: xlib.Pixmap): void
    /**
     * Sets up a suitable pixmap for the window, using the composite and damage
     * extensions if possible, and then calls
     * clutter_x11_texture_pixmap_set_pixmap().
     * 
     * If you want to display a window in a #ClutterTexture, you probably want
     * this function, or its older sister, clutter_glx_texture_pixmap_set_window().
     * 
     * This function has no effect unless the XComposite extension is available.
     * @param window the X window to which the texture should be bound
     * @param automatic %TRUE for automatic window updates, %FALSE for manual.
     */
    setWindow(window: xlib.Window, automatic: boolean): void
    /**
     * Resets the texture's pixmap from its window, perhaps in response to the
     * pixmap's invalidation as the window changed size.
     */
    syncWindow(): void
    // Has conflict: updateArea(x: number, y: number, width: number, height: number): void

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

    // Own virtual methods of ClutterX11-1.0.ClutterX11.TexturePixmap

    /**
     * Performs the actual binding of texture to the current content of
     * the pixmap. Can be called to update the texture if the pixmap
     * content has changed.
     * @virtual 
     * @param x the X coordinate of the area to update
     * @param y the Y coordinate of the area to update
     * @param width the width of the area to update
     * @param height the height of the area to update
     */
    updateArea(x: number, y: number, width: number, height: number): void

    // Own signals of ClutterX11-1.0.ClutterX11.TexturePixmap

    connect(sigName: "queue-damage-redraw", callback: TexturePixmap.QueueDamageRedrawSignalCallback): number
    on(sigName: "queue-damage-redraw", callback: TexturePixmap.QueueDamageRedrawSignalCallback): number
    once(sigName: "queue-damage-redraw", callback: TexturePixmap.QueueDamageRedrawSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "queue-damage-redraw", y: number, width: number, height: number, ...args: any[]): void
    connect(sigName: "update-area", callback: TexturePixmap.UpdateAreaSignalCallback): number
    on(sigName: "update-area", callback: TexturePixmap.UpdateAreaSignalCallback): number
    once(sigName: "update-area", callback: TexturePixmap.UpdateAreaSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "update-area", y: number, width: number, height: number, ...args: any[]): void

    // Class property signals of ClutterX11-1.0.ClutterX11.TexturePixmap

    connect(sigName: "notify::automatic-updates", callback: any): number
    on(sigName: "notify::automatic-updates", callback: any): number
    once(sigName: "notify::automatic-updates", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::automatic-updates", ...args: any[]): void
    connect(sigName: "notify::destroyed", callback: any): number
    on(sigName: "notify::destroyed", callback: any): number
    once(sigName: "notify::destroyed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::destroyed", ...args: any[]): void
    connect(sigName: "notify::pixmap", callback: any): number
    on(sigName: "notify::pixmap", callback: any): number
    once(sigName: "notify::pixmap", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixmap", ...args: any[]): void
    connect(sigName: "notify::pixmap-depth", callback: any): number
    on(sigName: "notify::pixmap-depth", callback: any): number
    once(sigName: "notify::pixmap-depth", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixmap-depth", ...args: any[]): void
    connect(sigName: "notify::pixmap-height", callback: any): number
    on(sigName: "notify::pixmap-height", callback: any): number
    once(sigName: "notify::pixmap-height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixmap-height", ...args: any[]): void
    connect(sigName: "notify::pixmap-width", callback: any): number
    on(sigName: "notify::pixmap-width", callback: any): number
    once(sigName: "notify::pixmap-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixmap-width", ...args: any[]): void
    connect(sigName: "notify::window", callback: any): number
    on(sigName: "notify::window", callback: any): number
    once(sigName: "notify::window", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::window-mapped", callback: any): number
    on(sigName: "notify::window-mapped", callback: any): number
    once(sigName: "notify::window-mapped", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::window-mapped", ...args: any[]): void
    connect(sigName: "notify::window-override-redirect", callback: any): number
    on(sigName: "notify::window-override-redirect", callback: any): number
    once(sigName: "notify::window-override-redirect", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::window-override-redirect", ...args: any[]): void
    connect(sigName: "notify::window-redirect-automatic", callback: any): number
    on(sigName: "notify::window-redirect-automatic", callback: any): number
    once(sigName: "notify::window-redirect-automatic", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::window-redirect-automatic", ...args: any[]): void
    connect(sigName: "notify::window-x", callback: any): number
    on(sigName: "notify::window-x", callback: any): number
    once(sigName: "notify::window-x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::window-x", ...args: any[]): void
    connect(sigName: "notify::window-y", callback: any): number
    on(sigName: "notify::window-y", callback: any): number
    once(sigName: "notify::window-y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::window-y", ...args: any[]): void
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
 * The #ClutterX11TexturePixmap structure contains only private data
 * @class 
 */
export class TexturePixmap extends Clutter.Texture {

    // Own properties of ClutterX11-1.0.ClutterX11.TexturePixmap

    static name: string

    // Constructors of ClutterX11-1.0.ClutterX11.TexturePixmap

    constructor(config?: TexturePixmap.ConstructorProperties) 
    /**
     * Creates a new #ClutterX11TexturePixmap which can be used to display the
     * contents of an X11 Pixmap inside a Clutter scene graph
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #ClutterX11TexturePixmap which can be used to display the
     * contents of an X11 Pixmap inside a Clutter scene graph
     * @constructor 
     */
    static new(): TexturePixmap
    /**
     * Creates a new #ClutterX11TexturePixmap for `pixmap`
     * @constructor 
     * @param pixmap the X Pixmap to which this texture should be bound
     */
    static newWithPixmap(pixmap: xlib.Pixmap): TexturePixmap
    /**
     * Creates a new #ClutterX11TexturePixmap for `window`
     * @constructor 
     * @param window the X window to which this texture should be bound
     */
    static newWithWindow(window: xlib.Window): TexturePixmap
    _init(config?: TexturePixmap.ConstructorProperties): void
}

export interface TexturePixmapClass {

    // Own fields of ClutterX11-1.0.ClutterX11.TexturePixmapClass

    updateArea: (texture: TexturePixmap, x: number, y: number, width: number, height: number) => void
}

/**
 * The #ClutterX11TexturePixmapClass structure contains only private data
 * @record 
 */
export abstract class TexturePixmapClass {

    // Own properties of ClutterX11-1.0.ClutterX11.TexturePixmapClass

    static name: string
}

export interface TexturePixmapPrivate {
}

export class TexturePixmapPrivate {

    // Own properties of ClutterX11-1.0.ClutterX11.TexturePixmapPrivate

    static name: string
}

export interface XInputDevice {
}

export class XInputDevice {

    // Own properties of ClutterX11-1.0.ClutterX11.XInputDevice

    static name: string
}
