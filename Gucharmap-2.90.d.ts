
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gucharmap-2.90
 */

import type * as Pango from './Pango-1.0.js';
import type * as cairo from './cairo-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Gtk from './Gtk-3.0.js';
import type * as xlib from './xlib-2.0.js';
import type * as Gdk from './Gdk-3.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GdkPixbuf from './GdkPixbuf-2.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as Atk from './Atk-1.0.js';

export enum CharmapPageType {
    CHARTABLE,
    DETAILS,
}
export enum UnicodeVersion {
    UNASSIGNED,
    TODO_1_1,
    TODO_2_0,
    TODO_2_1,
    TODO_3_0,
    TODO_3_1,
    TODO_3_2,
    TODO_4_0,
    TODO_4_1,
    TODO_5_0,
    TODO_5_1,
    TODO_5_2,
    TODO_6_0,
    TODO_6_1,
    TODO_6_2,
    TODO_6_3,
    TODO_7_0,
    TODO_8_0,
    LATEST,
}
export function getNameslistColons(uc: string): string[]
export function getNameslistEquals(uc: string): string[]
export function getNameslistExes(uc: string): string
export function getNameslistPounds(uc: string): string[]
export function getNameslistStars(uc: string): string[]
export function getUnicodeCategoryName(uc: string): string
export function getUnicodeDataName(uc: string): string
export function getUnicodeDataNameCount(): number
export function getUnicodeKCantonese(uc: string): string
export function getUnicodeKDefinition(uc: string): string
export function getUnicodeKJapaneseKun(uc: string): string
export function getUnicodeKJapaneseOn(uc: string): string
export function getUnicodeKKorean(uc: string): string
export function getUnicodeKMandarin(uc: string): string
export function getUnicodeKTang(uc: string): string
export function getUnicodeName(uc: string): string
export function getUnicodeVersion(uc: string): UnicodeVersion
export function getUnihanCount(): number
/**
 * Determines if a given character is assigned in the Unicode
 * standard.
 * @param uc a Unicode character
 */
export function unicharIsdefined(uc: string): boolean
/**
 * Determines whether a character is printable and not a space
 * (returns %FALSE for control characters, format characters, and
 * spaces). g_unichar_isprint() is similar, but returns %TRUE for
 * spaces. Given some UTF-8 text, obtain a character value with
 * g_utf8_get_char().
 * @param uc a Unicode character
 */
export function unicharIsgraph(uc: string): boolean
/**
 * Converts a single character to UTF-8 suitable for rendering. Check the
 * source to see what this means. ;-)
 * @param uc a unicode character
 * @param outbuf output buffer, must have at least 10 bytes of space.          If %NULL, the length will be computed and returned          and nothing will be written to `outbuf`.
 */
export function unicharToPrintableUtf8(uc: string, outbuf: string): number
/**
 * Classifies a Unicode character by type.
 * @param uc a Unicode character
 */
export function unicharType(uc: string): GLib.UnicodeType
export function unicharValidate(uc: string): boolean
/**
 * Determines a character that's commonly used in the current
 * locale's script.
 */
export function unicodeGetLocaleCharacter(): string
export function unicodeGetScriptForChar(wc: string): string
/**
 * Returns an array of untranslated script names.
 * 
 * The strings in the array are owned by gucharmap and should not be
 * modified or free; the array itself however is allocated and should
 * be freed with g_free().
 */
export function unicodeListScripts(): string[]
export function unicodeVersionToString(version: UnicodeVersion): string
export module BlockChaptersModel {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Buildable.ConstructorProperties, Gtk.TreeDragDest.ConstructorProperties, Gtk.TreeDragSource.ConstructorProperties, Gtk.TreeModel.ConstructorProperties, Gtk.TreeSortable.ConstructorProperties, ChaptersModel.ConstructorProperties {
    }

}

export interface BlockChaptersModel extends Gtk.Buildable, Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable {

    // Own fields of Gucharmap-2.90.Gucharmap.BlockChaptersModel

    parent: ChaptersModel & GObject.Object

    // Class property signals of Gucharmap-2.90.Gucharmap.BlockChaptersModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class BlockChaptersModel extends ChaptersModel {

    // Own properties of Gucharmap-2.90.Gucharmap.BlockChaptersModel

    static name: string

    // Constructors of Gucharmap-2.90.Gucharmap.BlockChaptersModel

    constructor(config?: BlockChaptersModel.ConstructorProperties) 
    constructor() 
    static new(): BlockChaptersModel

    // Overloads of new

    /**
     * Non-vararg creation function.  Used primarily by language bindings.
     * @constructor 
     * @param types an array of #GType types for the columns, from first to last
     */
    static new(types: GObject.GType[]): Gtk.ListStore
    _init(config?: BlockChaptersModel.ConstructorProperties): void
}

export module BlockCodepointList {

    // Constructor properties interface

    export interface ConstructorProperties extends CodepointList.ConstructorProperties {

        // Own constructor properties of Gucharmap-2.90.Gucharmap.BlockCodepointList

        firstCodepoint?: number | null
        lastCodepoint?: number | null
    }

}

export interface BlockCodepointList {

    // Own properties of Gucharmap-2.90.Gucharmap.BlockCodepointList

    readonly firstCodepoint: number
    readonly lastCodepoint: number

    // Own fields of Gucharmap-2.90.Gucharmap.BlockCodepointList

    parentInstance: any

    // Class property signals of Gucharmap-2.90.Gucharmap.BlockCodepointList

    connect(sigName: "notify::first-codepoint", callback: any): number
    on(sigName: "notify::first-codepoint", callback: any): number
    once(sigName: "notify::first-codepoint", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-codepoint", ...args: any[]): void
    connect(sigName: "notify::last-codepoint", callback: any): number
    on(sigName: "notify::last-codepoint", callback: any): number
    once(sigName: "notify::last-codepoint", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-codepoint", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class BlockCodepointList extends CodepointList {

    // Own properties of Gucharmap-2.90.Gucharmap.BlockCodepointList

    static name: string

    // Constructors of Gucharmap-2.90.Gucharmap.BlockCodepointList

    constructor(config?: BlockCodepointList.ConstructorProperties) 
    /**
     * Creates a new codepoint list for the range `start`..`end`.
     * @constructor 
     * @param start the first codepoint
     * @param end the last codepoint
     */
    constructor(start: string, end: string) 
    /**
     * Creates a new codepoint list for the range `start`..`end`.
     * @constructor 
     * @param start the first codepoint
     * @param end the last codepoint
     */
    static new(start: string, end: string): BlockCodepointList
    _init(config?: BlockCodepointList.ConstructorProperties): void
}

export module ChaptersModel {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Buildable.ConstructorProperties, Gtk.TreeDragDest.ConstructorProperties, Gtk.TreeDragSource.ConstructorProperties, Gtk.TreeModel.ConstructorProperties, Gtk.TreeSortable.ConstructorProperties, Gtk.ListStore.ConstructorProperties {
    }

}

export interface ChaptersModel extends Gtk.Buildable, Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable {

    // Own fields of Gucharmap-2.90.Gucharmap.ChaptersModel

    parentInstance: Gtk.ListStore

    // Owm methods of Gucharmap-2.90.Gucharmap.ChaptersModel

    // Has conflict: characterToIter(wc: string): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    // Has conflict: getBookCodepointList(): CodepointList
    // Has conflict: getCodepointList(iter: Gtk.TreeIter): CodepointList
    getTitle(): string
    idToIter(id: string): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]

    // Own virtual methods of Gucharmap-2.90.Gucharmap.ChaptersModel

    characterToIter(wc: string): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    getBookCodepointList(): CodepointList
    /**
     * Creates a new #GucharmapCodepointList representing the characters in the
     * current chapter.
     * @virtual 
     * @param iter a #GtkTreeIter
     */
    getCodepointList(iter: Gtk.TreeIter): CodepointList

    // Class property signals of Gucharmap-2.90.Gucharmap.ChaptersModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ChaptersModel extends Gtk.ListStore {

    // Own properties of Gucharmap-2.90.Gucharmap.ChaptersModel

    static name: string

    // Constructors of Gucharmap-2.90.Gucharmap.ChaptersModel

    constructor(config?: ChaptersModel.ConstructorProperties) 
    _init(config?: ChaptersModel.ConstructorProperties): void
}

export module ChaptersView {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.TreeView.ConstructorProperties {
    }

}

export interface ChaptersView extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own fields of Gucharmap-2.90.Gucharmap.ChaptersView

    parentInstance: any

    // Owm methods of Gucharmap-2.90.Gucharmap.ChaptersView

    getBookCodepointList(): CodepointList
    /**
     * Creates a new #GucharmapCodepointList representing the characters in the
     * current chapter.
     */
    getCodepointList(): CodepointList
    /**
     * Gets the #GucharmapChaptersModel of #view.
     */
    getModel(): ChaptersModel

    // Overloads of getModel

    /**
     * Returns the model the #GtkTreeView is based on.  Returns %NULL if the
     * model is unset.
     */
    getModel(): Gtk.TreeModel | null
    getSelected(): string
    next(): void
    /**
     * Moves to the previous chapter if applicable.
     */
    previous(): void
    selectCharacter(wc: string): boolean
    selectLocale(): boolean
    setModel(model: ChaptersModel): void

    // Overloads of setModel

    /**
     * Sets the model for a #GtkTreeView.  If the `tree_view` already has a model
     * set, it will remove it before setting the new model.  If `model` is %NULL,
     * then it will unset the old model.
     * @param model The model.
     */
    setModel(model: Gtk.TreeModel | null): void
    setSelected(name: string): boolean

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

    // Class property signals of Gucharmap-2.90.Gucharmap.ChaptersView

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

export class ChaptersView extends Gtk.TreeView {

    // Own properties of Gucharmap-2.90.Gucharmap.ChaptersView

    static name: string

    // Constructors of Gucharmap-2.90.Gucharmap.ChaptersView

    constructor(config?: ChaptersView.ConstructorProperties) 
    /**
     * Creates a new #GucharmapChaptersView object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GucharmapChaptersView object.
     * @constructor 
     */
    static new(): ChaptersView
    _init(config?: ChaptersView.ConstructorProperties): void
}

export module Charmap {

    // Signal callback interfaces

    /**
     * Signal callback interface for `link-clicked`
     */
    export interface LinkClickedSignalCallback {
        (object: number, p0: number): void
    }

    /**
     * Signal callback interface for `status-message`
     */
    export interface StatusMessageSignalCallback {
        (object: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Paned.ConstructorProperties {

        // Own constructor properties of Gucharmap-2.90.Gucharmap.Charmap

        activeChapter?: string | null
        activeCharacter?: number | null
        activePage?: number | null
        chaptersModel?: ChaptersModel | null
        fontDesc?: Pango.FontDescription | null
        /**
         * Whether font fallback is enabled.
         */
        fontFallback?: boolean | null
        snapPower2?: boolean | null
    }

}

export interface Charmap extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gucharmap-2.90.Gucharmap.Charmap

    activeChapter: string
    activeCharacter: number
    readonly activeCodepointList: CodepointList
    activePage: number
    chaptersModel: ChaptersModel
    fontDesc: Pango.FontDescription
    /**
     * Whether font fallback is enabled.
     */
    fontFallback: boolean
    snapPower2: boolean

    // Own fields of Gucharmap-2.90.Gucharmap.Charmap

    parent: Gtk.Paned & Gtk.Container

    // Owm methods of Gucharmap-2.90.Gucharmap.Charmap

    getActiveChapter(): string
    getActiveCharacter(): string
    /**
     * Gets the `GucharmapCodepointList` associated with the #GucharmapChartable of
     * `charmap`.
     */
    getActiveCodepointList(): CodepointList
    getActivePage(): number
    getBookCodepointList(): CodepointList
    /**
     * Gets the #GucharmapChaptersModel associated with the #GucharmapChaptersView
     * of `charmap`.
     */
    getChaptersModel(): ChaptersModel
    /**
     * Gets the #GucharmapChaptersView of `charmap`
     */
    getChaptersView(): ChaptersView
    getChaptersVisible(): boolean
    getChartable(): Chartable
    getFontDesc(): Pango.FontDescription
    getFontFallback(): boolean
    getPageVisible(page: number): boolean
    /**
     * Returns whether the number of columns the character table shows is
     * always a power of 2.
     */
    getSnapPow2(): boolean
    nextChapter(): void
    previousChapter(): void
    setActiveChapter(chapter: string): void
    setActiveCharacter(uc: string): void
    setActivePage(page: number): void
    setChaptersModel(model: ChaptersModel): void
    setChaptersVisible(visible: boolean): void
    /**
     * Sets `font_desc` as the font to use to display the character table.
     * @param fontDesc a #PangoFontDescription
     */
    setFontDesc(fontDesc: Pango.FontDescription): void
    setFontFallback(enableFontFallback: boolean): void
    setPageVisible(page: number, visible: boolean): void
    /**
     * Sets whether the number columns the character table shows should
     * always be a power of 2.
     * @param snap whether to enable or disable snapping
     */
    setSnapPow2(snap: boolean): void

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

    // Own virtual methods of Gucharmap-2.90.Gucharmap.Charmap

    linkClicked(oldCharacter: string, newCharacter: string): void
    statusMessage(message: string): void

    // Own signals of Gucharmap-2.90.Gucharmap.Charmap

    connect(sigName: "link-clicked", callback: Charmap.LinkClickedSignalCallback): number
    on(sigName: "link-clicked", callback: Charmap.LinkClickedSignalCallback): number
    once(sigName: "link-clicked", callback: Charmap.LinkClickedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "link-clicked", p0: number, ...args: any[]): void
    connect(sigName: "status-message", callback: Charmap.StatusMessageSignalCallback): number
    on(sigName: "status-message", callback: Charmap.StatusMessageSignalCallback): number
    once(sigName: "status-message", callback: Charmap.StatusMessageSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "status-message", ...args: any[]): void

    // Class property signals of Gucharmap-2.90.Gucharmap.Charmap

    connect(sigName: "notify::active-chapter", callback: any): number
    on(sigName: "notify::active-chapter", callback: any): number
    once(sigName: "notify::active-chapter", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active-chapter", ...args: any[]): void
    connect(sigName: "notify::active-character", callback: any): number
    on(sigName: "notify::active-character", callback: any): number
    once(sigName: "notify::active-character", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active-character", ...args: any[]): void
    connect(sigName: "notify::active-codepoint-list", callback: any): number
    on(sigName: "notify::active-codepoint-list", callback: any): number
    once(sigName: "notify::active-codepoint-list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active-codepoint-list", ...args: any[]): void
    connect(sigName: "notify::active-page", callback: any): number
    on(sigName: "notify::active-page", callback: any): number
    once(sigName: "notify::active-page", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active-page", ...args: any[]): void
    connect(sigName: "notify::chapters-model", callback: any): number
    on(sigName: "notify::chapters-model", callback: any): number
    once(sigName: "notify::chapters-model", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::chapters-model", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: any): number
    on(sigName: "notify::font-desc", callback: any): number
    once(sigName: "notify::font-desc", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::font-fallback", callback: any): number
    on(sigName: "notify::font-fallback", callback: any): number
    once(sigName: "notify::font-fallback", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::font-fallback", ...args: any[]): void
    connect(sigName: "notify::snap-power-2", callback: any): number
    on(sigName: "notify::snap-power-2", callback: any): number
    once(sigName: "notify::snap-power-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::snap-power-2", ...args: any[]): void
    connect(sigName: "notify::max-position", callback: any): number
    on(sigName: "notify::max-position", callback: any): number
    once(sigName: "notify::max-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-position", ...args: any[]): void
    connect(sigName: "notify::min-position", callback: any): number
    on(sigName: "notify::min-position", callback: any): number
    once(sigName: "notify::min-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::min-position", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::position-set", callback: any): number
    on(sigName: "notify::position-set", callback: any): number
    once(sigName: "notify::position-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position-set", ...args: any[]): void
    connect(sigName: "notify::wide-handle", callback: any): number
    on(sigName: "notify::wide-handle", callback: any): number
    once(sigName: "notify::wide-handle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::wide-handle", ...args: any[]): void
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

export class Charmap extends Gtk.Paned {

    // Own properties of Gucharmap-2.90.Gucharmap.Charmap

    static name: string

    // Constructors of Gucharmap-2.90.Gucharmap.Charmap

    constructor(config?: Charmap.ConstructorProperties) 
    constructor() 
    static new(): Charmap

    // Overloads of new

    /**
     * Creates a new #GtkPaned widget.
     * @constructor 
     * @param orientation the paned’s orientation.
     */
    static new(orientation: Gtk.Orientation): Gtk.Paned
    _init(config?: Charmap.ConstructorProperties): void
}

export module Chartable {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate`
     */
    export interface ActivateSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `copy-clipboard`
     */
    export interface CopyClipboardSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `move-cursor`
     */
    export interface MoveCursorSignalCallback {
        (object: Gtk.MovementStep, p0: number): boolean
    }

    /**
     * Signal callback interface for `paste-clipboard`
     */
    export interface PasteClipboardSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `status-message`
     */
    export interface StatusMessageSignalCallback {
        (object: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.DrawingArea.ConstructorProperties {

        // Own constructor properties of Gucharmap-2.90.Gucharmap.Chartable

        activeCharacter?: number | null
        codepointList?: CodepointList | null
        fontDesc?: Pango.FontDescription | null
        /**
         * Whether font fallback is enabled.
         */
        fontFallback?: boolean | null
        snapPower2?: boolean | null
        zoomEnabled?: boolean | null
    }

}

export interface Chartable extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of Gucharmap-2.90.Gucharmap.Chartable

    activeCharacter: number
    codepointList: CodepointList
    fontDesc: Pango.FontDescription
    /**
     * Whether font fallback is enabled.
     */
    fontFallback: boolean
    snapPower2: boolean
    zoomEnabled: boolean
    readonly zoomShowing: boolean

    // Own fields of Gucharmap-2.90.Gucharmap.Chartable

    parentInstance: any

    // Owm methods of Gucharmap-2.90.Gucharmap.Chartable

    getActiveCharacter(): string
    getCodepointList(): CodepointList
    getFontDesc(): Pango.FontDescription
    getFontFallback(): boolean
    /**
     * Returns whether the number of columns the character table shows is
     * always a power of 2.
     */
    getSnapPow2(): boolean
    getZoomEnabled(): boolean
    /**
     * Sets `wc` as the selected character.
     * @param wc a unicode character (UTF-32)
     */
    setActiveCharacter(wc: string): void
    /**
     * Sets the codepoint list to show in the character table.
     * @param codepointList a #GucharmapCodepointList
     */
    setCodepointList(codepointList: CodepointList): void
    /**
     * Sets `font_desc` as the font to use to display the character table.
     * @param fontDesc a #PangoFontDescription
     */
    setFontDesc(fontDesc: Pango.FontDescription): void
    setFontFallback(enableFontFallback: boolean): void
    /**
     * Sets whether the number columns the character table shows should
     * always be a power of 2.
     * @param snap whether to enable or disable snapping
     */
    setSnapPow2(snap: boolean): void
    /**
     * Enables or disables the zoom popup.
     * @param enabled whether to enable zoom mode
     */
    setZoomEnabled(enabled: boolean): void

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

    // Own virtual methods of Gucharmap-2.90.Gucharmap.Chartable

    activate(): void

    // Overloads of activate

    /**
     * For widgets that can be “activated” (buttons, menu items, etc.)
     * this function activates them. Activation is what happens when you
     * press Enter on a widget during key navigation. If `widget` isn't
     * activatable, the function returns %FALSE.
     */
    activate(): boolean
    copyClipboard(): void
    moveCursor(step: Gtk.MovementStep, count: number): boolean
    pasteClipboard(): void
    setActiveChar(ch: number): void
    setScrollAdjustments(hadjustment: Gtk.Adjustment, vadjustment: Gtk.Adjustment): void
    statusMessage(message: string): void

    // Own signals of Gucharmap-2.90.Gucharmap.Chartable

    connect(sigName: "activate", callback: Chartable.ActivateSignalCallback): number
    on(sigName: "activate", callback: Chartable.ActivateSignalCallback): number
    once(sigName: "activate", callback: Chartable.ActivateSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "activate", ...args: any[]): void
    connect(sigName: "copy-clipboard", callback: Chartable.CopyClipboardSignalCallback): number
    on(sigName: "copy-clipboard", callback: Chartable.CopyClipboardSignalCallback): number
    once(sigName: "copy-clipboard", callback: Chartable.CopyClipboardSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "copy-clipboard", ...args: any[]): void
    connect(sigName: "move-cursor", callback: Chartable.MoveCursorSignalCallback): number
    on(sigName: "move-cursor", callback: Chartable.MoveCursorSignalCallback): number
    once(sigName: "move-cursor", callback: Chartable.MoveCursorSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "move-cursor", p0: number, ...args: any[]): void
    connect(sigName: "paste-clipboard", callback: Chartable.PasteClipboardSignalCallback): number
    on(sigName: "paste-clipboard", callback: Chartable.PasteClipboardSignalCallback): number
    once(sigName: "paste-clipboard", callback: Chartable.PasteClipboardSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "paste-clipboard", ...args: any[]): void
    connect(sigName: "status-message", callback: Chartable.StatusMessageSignalCallback): number
    on(sigName: "status-message", callback: Chartable.StatusMessageSignalCallback): number
    once(sigName: "status-message", callback: Chartable.StatusMessageSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "status-message", ...args: any[]): void

    // Class property signals of Gucharmap-2.90.Gucharmap.Chartable

    connect(sigName: "notify::active-character", callback: any): number
    on(sigName: "notify::active-character", callback: any): number
    once(sigName: "notify::active-character", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active-character", ...args: any[]): void
    connect(sigName: "notify::codepoint-list", callback: any): number
    on(sigName: "notify::codepoint-list", callback: any): number
    once(sigName: "notify::codepoint-list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::codepoint-list", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: any): number
    on(sigName: "notify::font-desc", callback: any): number
    once(sigName: "notify::font-desc", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::font-fallback", callback: any): number
    on(sigName: "notify::font-fallback", callback: any): number
    once(sigName: "notify::font-fallback", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::font-fallback", ...args: any[]): void
    connect(sigName: "notify::snap-power-2", callback: any): number
    on(sigName: "notify::snap-power-2", callback: any): number
    once(sigName: "notify::snap-power-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::snap-power-2", ...args: any[]): void
    connect(sigName: "notify::zoom-enabled", callback: any): number
    on(sigName: "notify::zoom-enabled", callback: any): number
    once(sigName: "notify::zoom-enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::zoom-enabled", ...args: any[]): void
    connect(sigName: "notify::zoom-showing", callback: any): number
    on(sigName: "notify::zoom-showing", callback: any): number
    once(sigName: "notify::zoom-showing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::zoom-showing", ...args: any[]): void
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

export class Chartable extends Gtk.DrawingArea {

    // Own properties of Gucharmap-2.90.Gucharmap.Chartable

    static name: string

    // Constructors of Gucharmap-2.90.Gucharmap.Chartable

    constructor(config?: Chartable.ConstructorProperties) 
    constructor() 
    static new(): Chartable
    _init(config?: Chartable.ConstructorProperties): void
}

export module ChartableAccessible {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.Action.ConstructorProperties, Atk.Component.ConstructorProperties, Atk.Document.ConstructorProperties, Atk.EditableText.ConstructorProperties, Atk.Hypertext.ConstructorProperties, Atk.Image.ConstructorProperties, Atk.Selection.ConstructorProperties, Atk.Table.ConstructorProperties, Atk.TableCell.ConstructorProperties, Atk.Text.ConstructorProperties, Atk.Value.ConstructorProperties, Atk.Window.ConstructorProperties, Atk.NoOpObject.ConstructorProperties {
    }

}

export interface ChartableAccessible extends Atk.Action, Atk.Component, Atk.Document, Atk.EditableText, Atk.Hypertext, Atk.Image, Atk.Selection, Atk.Table, Atk.TableCell, Atk.Text, Atk.Value, Atk.Window {

    // Conflicting properties

    parent: Atk.Object & GObject.Object & GObject.Object

    // Conflicting methods

    /**
     * Returns a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     */
    getDescription(i: number): string | null
    /**
     * Gets the accessible description of the accessible.
     * @virtual 
     */
    getDescription(): string
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     */
    getName(i: number): string | null
    /**
     * Gets the accessible name of the accessible.
     * @virtual 
     */
    getName(): string
    /**
     * Sets a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    setDescription(i: number, desc: string): boolean
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @virtual 
     * @param description a character string to be set as the accessible description
     */
    setDescription(description: string): void
    /**
     * Gets the layer of the component.
     * @virtual 
     */
    getLayer(): Atk.Layer
    /**
     * Gets the layer of the accessible.
     * @virtual 
     */
    getLayer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     * @virtual 
     */
    getMdiZorder(): number
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     * @virtual 
     */
    getMdiZorder(): number
    /**
     * Gets the position of `component` in the form of
     * a point specifying `component'`s top-left corner.
     * 
     * If the position can not be obtained (e.g. a non-embedded plug or missing
     * support), x and y are set to -1.
     * @virtual 
     * @param coordType specifies whether the coordinates are relative to the screen or to the components top level window
     */
    getPosition(coordType: Atk.CoordType): [ /* x */ number, /* y */ number ]
    /**
     * Retrieves the tabular position of this cell.
     * @virtual 
     */
    getPosition(): [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    /**
     * Gets an AtkAttributeSet which describes document-wide
     *          attributes as name-value pairs.
     */
    getAttributes(): Atk.AttributeSet
    /**
     * Get a list of properties applied to this object as a whole, as an #AtkAttributeSet consisting of
     * name-value pairs. As such these attributes may be considered weakly-typed properties or annotations,
     * as distinct from strongly-typed object data available via other get/set methods.
     * Not all objects have explicit "name-value pair" #AtkAttributeSet properties.
     * @virtual 
     */
    getAttributes(): Atk.AttributeSet
    /**
     * Adds the specified accessible child of the object to the
     * object's selection.
     * @virtual 
     * @param i a #gint specifying the child index.
     */
    addSelection(i: number): boolean
    /**
     * Adds a selection bounded by the specified offsets.
     * @virtual 
     * @param startOffset the starting character offset of the selected region
     * @param endOffset the offset of the first character after the selected region.
     */
    addSelection(startOffset: number, endOffset: number): boolean
    /**
     * Removes the specified child of the object from the object's selection.
     * @virtual 
     * @param i a #gint specifying the index in the selection set.  (e.g. the ith selection as opposed to the ith child).
     */
    removeSelection(i: number): boolean
    /**
     * Removes the specified selection.
     * @virtual 
     * @param selectionNum The selection number.  The selected regions are assigned numbers that correspond to how far the region is from the start of the text.  The selected region closest to the beginning of the text region is assigned the number 0, etc.  Note that adding, moving or deleting a selected region can change the numbering.
     */
    removeSelection(selectionNum: number): boolean

    // Class property signals of Gucharmap-2.90.Gucharmap.ChartableAccessible

    connect(sigName: "notify::accessible-component-layer", callback: any): number
    on(sigName: "notify::accessible-component-layer", callback: any): number
    once(sigName: "notify::accessible-component-layer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    once(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: any): number
    on(sigName: "notify::accessible-description", callback: any): number
    once(sigName: "notify::accessible-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    once(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: any): number
    on(sigName: "notify::accessible-name", callback: any): number
    once(sigName: "notify::accessible-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: any): number
    on(sigName: "notify::accessible-table-caption", callback: any): number
    once(sigName: "notify::accessible-table-caption", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: any): number
    on(sigName: "notify::accessible-table-caption-object", callback: any): number
    once(sigName: "notify::accessible-table-caption-object", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: any): number
    on(sigName: "notify::accessible-table-column-description", callback: any): number
    once(sigName: "notify::accessible-table-column-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: any): number
    on(sigName: "notify::accessible-table-column-header", callback: any): number
    once(sigName: "notify::accessible-table-column-header", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: any): number
    on(sigName: "notify::accessible-table-row-description", callback: any): number
    once(sigName: "notify::accessible-table-row-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: any): number
    on(sigName: "notify::accessible-table-row-header", callback: any): number
    once(sigName: "notify::accessible-table-row-header", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: any): number
    on(sigName: "notify::accessible-table-summary", callback: any): number
    once(sigName: "notify::accessible-table-summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: any): number
    on(sigName: "notify::accessible-value", callback: any): number
    once(sigName: "notify::accessible-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ChartableAccessible extends Atk.NoOpObject {

    // Own properties of Gucharmap-2.90.Gucharmap.ChartableAccessible

    static name: string

    // Constructors of Gucharmap-2.90.Gucharmap.ChartableAccessible

    constructor(config?: ChartableAccessible.ConstructorProperties) 
    constructor(chartable: Chartable) 
    static new(chartable: Chartable): ChartableAccessible

    // Overloads of new

    /**
     * Provides a default (non-functioning stub) #AtkObject.
     * Application maintainers should not use this method.
     * @constructor 
     * @param obj a #GObject
     */
    static new(obj: GObject.Object): Atk.NoOpObject
    _init(config?: ChartableAccessible.ConstructorProperties): void
}

export module ChartableCellAccessible {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.Action.ConstructorProperties, Atk.Component.ConstructorProperties, Atk.Object.ConstructorProperties {
    }

}

export interface ChartableCellAccessible extends Atk.Action, Atk.Component {

    // Own fields of Gucharmap-2.90.Gucharmap.ChartableCellAccessible

    parent: Atk.Object & GObject.Object
    widget: Gtk.Widget
    index: number
    stateSet: Atk.StateSet
    activateDescription: string
    actionIdleHandler: number

    // Owm methods of Gucharmap-2.90.Gucharmap.ChartableCellAccessible

    addState(stateType: Atk.StateType, emitSignal: boolean): boolean
    initialise(widget: Gtk.Widget, parent: Atk.Object, index: number): void
    removeState(stateType: Atk.StateType, emitSignal: boolean): boolean

    // Conflicting methods

    /**
     * Returns a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     */
    getDescription(i: number): string | null
    /**
     * Gets the accessible description of the accessible.
     * @virtual 
     */
    getDescription(): string
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     */
    getName(i: number): string | null
    /**
     * Gets the accessible name of the accessible.
     * @virtual 
     */
    getName(): string
    /**
     * Sets a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    setDescription(i: number, desc: string): boolean
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @virtual 
     * @param description a character string to be set as the accessible description
     */
    setDescription(description: string): void
    /**
     * Gets the layer of the component.
     * @virtual 
     */
    getLayer(): Atk.Layer
    /**
     * Gets the layer of the accessible.
     * @virtual 
     */
    getLayer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     * @virtual 
     */
    getMdiZorder(): number
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     * @virtual 
     */
    getMdiZorder(): number

    // Class property signals of Gucharmap-2.90.Gucharmap.ChartableCellAccessible

    connect(sigName: "notify::accessible-component-layer", callback: any): number
    on(sigName: "notify::accessible-component-layer", callback: any): number
    once(sigName: "notify::accessible-component-layer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    once(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: any): number
    on(sigName: "notify::accessible-description", callback: any): number
    once(sigName: "notify::accessible-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    once(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: any): number
    on(sigName: "notify::accessible-name", callback: any): number
    once(sigName: "notify::accessible-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: any): number
    on(sigName: "notify::accessible-table-caption", callback: any): number
    once(sigName: "notify::accessible-table-caption", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: any): number
    on(sigName: "notify::accessible-table-caption-object", callback: any): number
    once(sigName: "notify::accessible-table-caption-object", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: any): number
    on(sigName: "notify::accessible-table-column-description", callback: any): number
    once(sigName: "notify::accessible-table-column-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: any): number
    on(sigName: "notify::accessible-table-column-header", callback: any): number
    once(sigName: "notify::accessible-table-column-header", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: any): number
    on(sigName: "notify::accessible-table-row-description", callback: any): number
    once(sigName: "notify::accessible-table-row-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: any): number
    on(sigName: "notify::accessible-table-row-header", callback: any): number
    once(sigName: "notify::accessible-table-row-header", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: any): number
    on(sigName: "notify::accessible-table-summary", callback: any): number
    once(sigName: "notify::accessible-table-summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: any): number
    on(sigName: "notify::accessible-value", callback: any): number
    once(sigName: "notify::accessible-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ChartableCellAccessible extends Atk.Object {

    // Own properties of Gucharmap-2.90.Gucharmap.ChartableCellAccessible

    static name: string

    // Constructors of Gucharmap-2.90.Gucharmap.ChartableCellAccessible

    constructor(config?: ChartableCellAccessible.ConstructorProperties) 
    constructor() 
    static new(): ChartableCellAccessible
    _init(config?: ChartableCellAccessible.ConstructorProperties): void
}

export module CodepointList {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface CodepointList {

    // Own fields of Gucharmap-2.90.Gucharmap.CodepointList

    parentInstance: GObject.Object

    // Owm methods of Gucharmap-2.90.Gucharmap.CodepointList

    // Has conflict: getChar(index: number): string
    // Has conflict: getIndex(wc: string): number
    // Has conflict: getLastIndex(): number

    // Own virtual methods of Gucharmap-2.90.Gucharmap.CodepointList

    getChar(index: number): string
    getIndex(wc: string): number
    getLastIndex(): number

    // Class property signals of Gucharmap-2.90.Gucharmap.CodepointList

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CodepointList extends GObject.Object {

    // Own properties of Gucharmap-2.90.Gucharmap.CodepointList

    static name: string

    // Constructors of Gucharmap-2.90.Gucharmap.CodepointList

    constructor(config?: CodepointList.ConstructorProperties) 
    _init(config?: CodepointList.ConstructorProperties): void
}

export module ScriptChaptersModel {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Buildable.ConstructorProperties, Gtk.TreeDragDest.ConstructorProperties, Gtk.TreeDragSource.ConstructorProperties, Gtk.TreeModel.ConstructorProperties, Gtk.TreeSortable.ConstructorProperties, ChaptersModel.ConstructorProperties {
    }

}

export interface ScriptChaptersModel extends Gtk.Buildable, Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable {

    // Own fields of Gucharmap-2.90.Gucharmap.ScriptChaptersModel

    parent: ChaptersModel & GObject.Object

    // Class property signals of Gucharmap-2.90.Gucharmap.ScriptChaptersModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ScriptChaptersModel extends ChaptersModel {

    // Own properties of Gucharmap-2.90.Gucharmap.ScriptChaptersModel

    static name: string

    // Constructors of Gucharmap-2.90.Gucharmap.ScriptChaptersModel

    constructor(config?: ScriptChaptersModel.ConstructorProperties) 
    constructor() 
    static new(): ScriptChaptersModel

    // Overloads of new

    /**
     * Non-vararg creation function.  Used primarily by language bindings.
     * @constructor 
     * @param types an array of #GType types for the columns, from first to last
     */
    static new(types: GObject.GType[]): Gtk.ListStore
    _init(config?: ScriptChaptersModel.ConstructorProperties): void
}

export module ScriptCodepointList {

    // Constructor properties interface

    export interface ConstructorProperties extends CodepointList.ConstructorProperties {
    }

}

export interface ScriptCodepointList {

    // Own fields of Gucharmap-2.90.Gucharmap.ScriptCodepointList

    parent: CodepointList

    // Owm methods of Gucharmap-2.90.Gucharmap.ScriptCodepointList

    /**
     * Appends the characters in `script` to the codepoint list.
     * @param script the script name
     */
    appendScript(script: string): boolean
    /**
     * Sets the script for the codepoint list.
     * @param script the script name
     */
    setScript(script: string): boolean
    /**
     * Sets multiple scripts for the codepoint list. Codepoints are sorted
     * according to their order in `scripts`.
     * @param scripts NULL-terminated array of script names
     */
    setScripts(scripts: string): boolean

    // Class property signals of Gucharmap-2.90.Gucharmap.ScriptCodepointList

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ScriptCodepointList extends CodepointList {

    // Own properties of Gucharmap-2.90.Gucharmap.ScriptCodepointList

    static name: string

    // Constructors of Gucharmap-2.90.Gucharmap.ScriptCodepointList

    constructor(config?: ScriptCodepointList.ConstructorProperties) 
    /**
     * Creates a new script codepoint list. The default script is Latin.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new script codepoint list. The default script is Latin.
     * @constructor 
     */
    static new(): ScriptCodepointList
    _init(config?: ScriptCodepointList.ConstructorProperties): void
}

export interface BlockChaptersModelClass {

    // Own fields of Gucharmap-2.90.Gucharmap.BlockChaptersModelClass

    parentClass: ChaptersModelClass
}

export abstract class BlockChaptersModelClass {

    // Own properties of Gucharmap-2.90.Gucharmap.BlockChaptersModelClass

    static name: string
}

export interface BlockChaptersModelPrivate {
}

export class BlockChaptersModelPrivate {

    // Own properties of Gucharmap-2.90.Gucharmap.BlockChaptersModelPrivate

    static name: string
}

export interface BlockCodepointListClass {

    // Own fields of Gucharmap-2.90.Gucharmap.BlockCodepointListClass

    parentClass: CodepointListClass
}

export abstract class BlockCodepointListClass {

    // Own properties of Gucharmap-2.90.Gucharmap.BlockCodepointListClass

    static name: string
}

export interface BlockCodepointListPrivate {
}

export class BlockCodepointListPrivate {

    // Own properties of Gucharmap-2.90.Gucharmap.BlockCodepointListPrivate

    static name: string
}

export interface ChaptersModelClass {

    // Own fields of Gucharmap-2.90.Gucharmap.ChaptersModelClass

    parentClass: Gtk.ListStoreClass
    title: string
    characterToIter: (chapters: ChaptersModel, wc: string) => [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    getCodepointList: (chapters: ChaptersModel, iter: Gtk.TreeIter) => CodepointList
    getBookCodepointList: (chapters: ChaptersModel) => CodepointList
}

export abstract class ChaptersModelClass {

    // Own properties of Gucharmap-2.90.Gucharmap.ChaptersModelClass

    static name: string
}

export interface ChaptersModelPrivate {

    // Own fields of Gucharmap-2.90.Gucharmap.ChaptersModelPrivate

    bookList: CodepointList
}

export class ChaptersModelPrivate {

    // Own properties of Gucharmap-2.90.Gucharmap.ChaptersModelPrivate

    static name: string
}

export interface ChaptersViewClass {

    // Own fields of Gucharmap-2.90.Gucharmap.ChaptersViewClass

    parentClass: Gtk.TreeViewClass
}

export abstract class ChaptersViewClass {

    // Own properties of Gucharmap-2.90.Gucharmap.ChaptersViewClass

    static name: string
}

export interface ChaptersViewPrivate {
}

export class ChaptersViewPrivate {

    // Own properties of Gucharmap-2.90.Gucharmap.ChaptersViewPrivate

    static name: string
}

export interface CharmapClass {

    // Own fields of Gucharmap-2.90.Gucharmap.CharmapClass

    parentClass: Gtk.PanedClass
    statusMessage: (charmap: Charmap, message: string) => void
    linkClicked: (charmap: Charmap, oldCharacter: string, newCharacter: string) => void
}

export abstract class CharmapClass {

    // Own properties of Gucharmap-2.90.Gucharmap.CharmapClass

    static name: string
}

export interface CharmapPrivate {
}

export class CharmapPrivate {

    // Own properties of Gucharmap-2.90.Gucharmap.CharmapPrivate

    static name: string
}

export interface ChartableAccessibleClass {
}

export abstract class ChartableAccessibleClass {

    // Own properties of Gucharmap-2.90.Gucharmap.ChartableAccessibleClass

    static name: string
}

export interface ChartableCellAccessibleClass {

    // Own fields of Gucharmap-2.90.Gucharmap.ChartableCellAccessibleClass

    parentClass: Atk.ObjectClass
}

export abstract class ChartableCellAccessibleClass {

    // Own properties of Gucharmap-2.90.Gucharmap.ChartableCellAccessibleClass

    static name: string
}

export interface ChartableClass {

    // Own fields of Gucharmap-2.90.Gucharmap.ChartableClass

    parentClass: Gtk.DrawingAreaClass
    setScrollAdjustments: (chartable: Chartable, hadjustment: Gtk.Adjustment, vadjustment: Gtk.Adjustment) => void
    moveCursor: (chartable: Chartable, step: Gtk.MovementStep, count: number) => boolean
    activate: (chartable: Chartable) => void
    copyClipboard: (chartable: Chartable) => void
    pasteClipboard: (chartable: Chartable) => void
    setActiveChar: (chartable: Chartable, ch: number) => void
    statusMessage: (chartable: Chartable, message: string) => void
}

export abstract class ChartableClass {

    // Own properties of Gucharmap-2.90.Gucharmap.ChartableClass

    static name: string
}

export interface ChartablePrivate {

    // Own fields of Gucharmap-2.90.Gucharmap.ChartablePrivate

    vadjustment: Gtk.Adjustment
    vadjustmentChangedHandlerId: number
    hadjustment: Gtk.Adjustment
    hscrollPolicy: number
    vscrollPolicy: number
    fontDesc: Pango.FontDescription
    minimalColumnWidth: number
    minimalRowHeight: number
    nPaddedColumns: number
    nPaddedRows: number
    rows: number
    cols: number
    pageSize: number
    pageFirstCell: number
    activeCell: number
    pangoLayout: Pango.Layout
    zoomWindow: Gtk.Widget
    zoomImageWidth: number
    zoomImageHeight: number
    clickX: number
    clickY: number
    targetList: Gtk.TargetList
    codepointList: CodepointList
    lastCell: number
    codepointListChanged: boolean
    snapPow2Enabled: number
    zoomModeEnabled: number
    fontFallback: number
}

export class ChartablePrivate {

    // Own properties of Gucharmap-2.90.Gucharmap.ChartablePrivate

    static name: string
}

export interface CodepointListClass {

    // Own fields of Gucharmap-2.90.Gucharmap.CodepointListClass

    parentClass: GObject.ObjectClass
    getLastIndex: (list: CodepointList) => number
    getChar: (list: CodepointList, index: number) => string
    getIndex: (list: CodepointList, wc: string) => number
}

export abstract class CodepointListClass {

    // Own properties of Gucharmap-2.90.Gucharmap.CodepointListClass

    static name: string
}

export interface CodepointListPrivate {
}

export class CodepointListPrivate {

    // Own properties of Gucharmap-2.90.Gucharmap.CodepointListPrivate

    static name: string
}

export interface ScriptChaptersModelClass {

    // Own fields of Gucharmap-2.90.Gucharmap.ScriptChaptersModelClass

    parentClass: ChaptersModelClass
}

export abstract class ScriptChaptersModelClass {

    // Own properties of Gucharmap-2.90.Gucharmap.ScriptChaptersModelClass

    static name: string
}

export interface ScriptChaptersModelPrivate {
}

export class ScriptChaptersModelPrivate {

    // Own properties of Gucharmap-2.90.Gucharmap.ScriptChaptersModelPrivate

    static name: string
}

export interface ScriptCodepointListClass {

    // Own fields of Gucharmap-2.90.Gucharmap.ScriptCodepointListClass

    parentClass: CodepointListClass
}

export abstract class ScriptCodepointListClass {

    // Own properties of Gucharmap-2.90.Gucharmap.ScriptCodepointListClass

    static name: string
}

export interface ScriptCodepointListPrivate {
}

export class ScriptCodepointListPrivate {

    // Own properties of Gucharmap-2.90.Gucharmap.ScriptCodepointListPrivate

    static name: string
}
