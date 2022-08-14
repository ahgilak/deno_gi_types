
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ClutterGdk-1.0
 */

import type * as Gdk from './Gdk-3.0.js';
import type * as cairo from './cairo-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GdkPixbuf from './GdkPixbuf-2.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as Clutter from './Clutter-1.0.js';
import type * as Json from './Json-1.0.js';
import type * as GL from './GL-1.0.js';
import type * as CoglPango from './CoglPango-1.0.js';
import type * as PangoCairo from './PangoCairo-1.0.js';
import type * as Cogl from './Cogl-1.0.js';
import type * as Atk from './Atk-1.0.js';

/**
 * Disable the event retrieval in Clutter.
 * 
 * Callers of this function have to set up an event filter using the
 * GDK API, and call clutter_gdk_handle_event().
 * 
 * This function should only be used when embedding Clutter into
 * a GDK based toolkit.
 */
export function disableEventRetrieval(): void
/**
 * Retrieves the pointer to the default display.
 */
export function getDefaultDisplay(): Gdk.Display
/**
 * Gets the stage for a particular X window.
 * @param window a #GtkWindow
 */
export function getStageFromWindow(window: Gdk.Window): Clutter.Stage
/**
 * Gets the stages GdkWindow.
 * @param stage a #ClutterStage
 */
export function getStageWindow(stage: Clutter.Stage): Gdk.Window
/**
 * Retrieves the #GdkVisual used by Clutter.
 * 
 * This function should be used when embedding Clutter inside GDK-based
 * foreign toolkits, to ensure that the visual applied to the #GdkWindow
 * used to render the #ClutterStage is the correct one.
 */
export function getVisual(): Gdk.Visual
/**
 * This function processes a single GDK event; it can be used to hook
 * into external event processing
 * @param event a #GdkEvent
 */
export function handleEvent(event: Gdk.Event): Gdk.FilterReturn
/**
 * Sets the display connection Clutter should use; must be called
 * before clutter_init(), clutter_init_with_args() or other functions
 * pertaining Clutter's initialization process.
 * 
 * If you are parsing the command line arguments by retrieving Clutter's
 * #GOptionGroup with clutter_get_option_group() and calling
 * g_option_context_parse() yourself, you should also call
 * clutter_gdk_set_display() before g_option_context_parse().
 * @param display pointer to a GDK display connection.
 */
export function setDisplay(display: Gdk.Display): void
/**
 * Target the #ClutterStage to use an existing external #GdkWindow
 * @param stage a #ClutterStage
 * @param window an existing #GdkWindow
 */
export function setStageForeign(stage: Clutter.Stage, window: Gdk.Window): boolean