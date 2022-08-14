
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GnomeAutoarGtk-0.1
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
import type * as GnomeAutoar from './GnomeAutoar-0.1.js';

/**
 * Gets the selected archive format of the widget created by
 * autoar_gtk_chooser_advanced_new().
 * @param advanced a #GtkGrid returned by autoar_gtk_chooser_advanced_new()
 * @param format the place to store the #AutoarFormat selected by the user
 * @param filter the place to store the #AutoarFilter selected by the user
 */
export function chooserAdvancedGet(advanced: Gtk.Widget, format: number, filter: number): boolean
/**
 * Create a #GtkGrid with two lists. One list shows all available formats,
 * and the other list shows all available filters.
 * @param defaultFormat an #AutoarFormat
 * @param defaultFilter an #AutoarFilter
 */
export function chooserAdvancedNew(defaultFormat: GnomeAutoar.Format, defaultFilter: GnomeAutoar.Filter): Gtk.Widget
/**
 * Gets the selected archive format of the widget created by
 * autoar_gtk_chooser_simple_new().
 * @param simple a #GtkComboBox returned by autoar_gtk_chooser_simple_new()
 * @param format the place to store the #AutoarFormat selected by the user
 * @param filter the place to store the #AutoarFilter selected by the user
 */
export function chooserSimpleGet(simple: Gtk.Widget, format: number, filter: number): boolean
/**
 * Create a #GtkComboBox with a list of common archive format. There is also
 * an option called "Other format…", which will use
 * autoar_gtk_chooser_advanced_new() and
 * autoar_gtk_chooser_advanced_get() to select less common archive
 * format. Arguments `default_format` and `default_filter` are the default archive
 * format selected on the returned widget. You may want to get the preferred
 * format of users using autoar_pref_get_default_format() and
 * autoar_pref_get_default_filter(), or just set them to 1 to select
 * the default archive format.
 * @param defaultFormat an #AutoarFormat
 * @param defaultFilter an #AutoarFilter
 */
export function chooserSimpleNew(defaultFormat: GnomeAutoar.Format, defaultFilter: GnomeAutoar.Filter): Gtk.Widget