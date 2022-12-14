
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GtkSource-5
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

export enum BackgroundPatternType {
    /**
     * no pattern
     */
    NONE,
    /**
     * grid pattern
     */
    GRID,
}
export enum BracketMatchType {
    /**
     * there is no bracket to match.
     */
    NONE,
    /**
     * matching a bracket
     *  failed because the maximum range was reached.
     */
    OUT_OF_RANGE,
    /**
     * a matching bracket was not found.
     */
    NOT_FOUND,
    /**
     * a matching bracket was found.
     */
    FOUND,
}
export enum ChangeCaseType {
    /**
     * change case to lowercase.
     */
    LOWER,
    /**
     * change case to uppercase.
     */
    UPPER,
    /**
     * toggle case of each character.
     */
    TOGGLE,
    /**
     * capitalize each word.
     */
    TITLE,
}
export enum CompletionActivation {
    NONE,
    INTERACTIVE,
    USER_REQUESTED,
}
export enum CompletionColumn {
    ICON,
    BEFORE,
    TYPED_TEXT,
    AFTER,
    COMMENT,
    DETAILS,
}
export enum CompressionType {
    /**
     * plain text.
     */
    NONE,
    /**
     * gzip compression.
     */
    GZIP,
}
/**
 * An error code used with the %GTK_SOURCE_FILE_LOADER_ERROR domain.
 */
export enum FileLoaderError {
    /**
     * The file is too big.
     */
    TOO_BIG,
    /**
     * It is not
     * possible to detect the encoding automatically.
     */
    ENCODING_AUTO_DETECTION_FAILED,
    /**
     * There was an encoding
     * conversion error and it was needed to use a fallback character.
     */
    CONVERSION_FALLBACK,
}
/**
 * An error code used with the %GTK_SOURCE_FILE_SAVER_ERROR domain.
 */
export enum FileSaverError {
    /**
     * The buffer contains invalid
     *   characters.
     */
    INVALID_CHARS,
    /**
     * The file is externally
     *   modified.
     */
    EXTERNALLY_MODIFIED,
}
/**
 * The alignment mode of the renderer, when a cell spans multiple lines (due to
 * text wrapping).
 */
export enum GutterRendererAlignmentMode {
    /**
     * The full cell.
     */
    CELL,
    /**
     * The first line.
     */
    FIRST,
    /**
     * The last line.
     */
    LAST,
}
export enum NewlineType {
    /**
     * line feed, used on UNIX.
     */
    LF,
    /**
     * carriage return, used on Mac.
     */
    CR,
    /**
     * carriage return followed by a line feed, used
     *   on Windows.
     */
    CR_LF,
}
export enum SmartHomeEndType {
    /**
     * smart-home-end disabled.
     */
    DISABLED,
    /**
     * move to the first/last
     * non-whitespace character on the first press of the HOME/END keys and
     * to the beginning/end of the line on the second press.
     */
    BEFORE,
    /**
     * move to the beginning/end of the
     * line on the first press of the HOME/END keys and to the first/last
     * non-whitespace character on the second press.
     */
    AFTER,
    /**
     * always move to the first/last
     * non-whitespace character when the HOME/END keys are pressed.
     */
    ALWAYS,
}
export enum ViewGutterPosition {
    /**
     * the gutter position of the lines
     * renderer
     */
    LINES,
    /**
     * the gutter position of the marks
     * renderer
     */
    MARKS,
}
/**
 * Flags to define the behavior of a [flags`FileSaverFlags]`.
 * @bitfield 
 */
export enum FileSaverFlags {
    /**
     * No flags.
     */
    NONE,
    /**
     * Ignore invalid characters.
     */
    IGNORE_INVALID_CHARS,
    /**
     * Save file despite external modifications.
     */
    IGNORE_MODIFICATION_TIME,
    /**
     * Create a backup before saving the file.
     */
    CREATE_BACKUP,
}
export enum SortFlags {
    /**
     * no flags specified
     */
    NONE,
    /**
     * case sensitive sort
     */
    CASE_SENSITIVE,
    /**
     * sort in reverse order
     */
    REVERSE_ORDER,
    /**
     * remove duplicates
     */
    REMOVE_DUPLICATES,
}
/**
 * #GtkSourceSpaceLocationFlags contains flags for white space locations.
 * 
 * If a line contains only white spaces (no text), the white spaces match both
 * %GTK_SOURCE_SPACE_LOCATION_LEADING and %GTK_SOURCE_SPACE_LOCATION_TRAILING.
 * @bitfield 
 */
export enum SpaceLocationFlags {
    /**
     * No flags.
     */
    NONE,
    /**
     * Leading white spaces on a line, i.e. the
     *   indentation.
     */
    LEADING,
    /**
     * White spaces inside a line of text.
     */
    INSIDE_TEXT,
    /**
     * Trailing white spaces on a line.
     */
    TRAILING,
    /**
     * White spaces anywhere.
     */
    ALL,
}
/**
 * #GtkSourceSpaceTypeFlags contains flags for white space types.
 * @bitfield 
 */
export enum SpaceTypeFlags {
    /**
     * No flags.
     */
    NONE,
    /**
     * Space character.
     */
    SPACE,
    /**
     * Tab character.
     */
    TAB,
    /**
     * Line break character. If the
     *   #GtkSourceBuffer:implicit-trailing-newline property is %TRUE,
     *   #GtkSourceSpaceDrawer also draws a line break at the end of the buffer.
     */
    NEWLINE,
    /**
     * Non-breaking space character.
     */
    NBSP,
    /**
     * All white spaces.
     */
    ALL,
}
/**
 * Gets all encodings.
 */
export function encodingGetAll(): Encoding[]
/**
 * Gets the #GtkSourceEncoding for the current locale.
 * 
 * See also [func`GLib`.get_charset].
 */
export function encodingGetCurrent(): Encoding
/**
 * Gets the list of default candidate encodings to try when loading a file.
 * 
 * See [method`FileLoader`.set_candidate_encodings].
 * 
 * This function returns a different list depending on the current locale (i.e.
 * language, country and default encoding). The UTF-8 encoding and the current
 * locale encoding are guaranteed to be present in the returned list.
 */
export function encodingGetDefaultCandidates(): Encoding[]
/**
 * Gets a #GtkSourceEncoding from a character set such as "UTF-8" or
 * "ISO-8859-1".
 * @param charset a character set.
 */
export function encodingGetFromCharset(charset: string): Encoding | null
export function encodingGetUtf8(): Encoding
export function fileLoaderErrorQuark(): GLib.Quark
export function fileSaverErrorQuark(): GLib.Quark
/**
 * Free the resources allocated by GtkSourceView. For example it unrefs the
 * singleton objects.
 * 
 * It is not mandatory to call this function, it's just to be friendlier to
 * memory debugging tools. This function is meant to be called at the end of
 * main(). It can be called several times.
 */
export function finalize(): void
/**
 * Initializes the GtkSourceView library (e.g. for the internationalization).
 * 
 * This function can be called several times, but is meant to be called at the
 * beginning of main(), before any other GtkSourceView function call.
 */
export function init(): void
/**
 * Simplified version of [func`scheduler_add_full]`.
 * @param callback the callback to execute
 */
export function schedulerAdd(callback: SchedulerCallback): number
/**
 * Adds a new callback that will be executed as time permits on the main thread.
 * 
 * This is useful when you need to do a lot of background work but want to do
 * it incrementally.
 * 
 * `callback` will be provided a deadline that it should complete it's work by
 * (or near) and can be checked using [func`GLib`.get_monotonic_time] for comparison.
 * 
 * Use [func`scheduler_remove]` to remove the handler.
 * @param callback the callback to execute
 */
export function schedulerAddFull(callback: SchedulerCallback): number
/**
 * Removes a scheduler callback previously registered with
 * [func`scheduler_add]` or [func`scheduler_add_full]`.
 * @param handlerId the handler id
 */
export function schedulerRemove(handlerId: number): void
/**
 * Use this function to escape the following characters: `\n`, `\r`, `\t` and `\`.
 * 
 * For a regular expression search, use g_regex_escape_string() instead.
 * 
 * One possible use case is to take the #GtkTextBuffer's selection and put it in a
 * search entry. The selection can contain tabulations, newlines, etc. So it's
 * better to escape those special characters to better fit in the search entry.
 * 
 * See also: [func`utils_unescape_search_text]`.
 * 
 * <warning>
 * Warning: the escape and unescape functions are not reciprocal! For example,
 * escape (unescape (\)) = \\. So avoid cycles such as: search entry -> unescape
 * -> search settings -> escape -> search entry. The original search entry text
 * may be modified.
 * </warning>
 * @param text the text to escape.
 */
export function utilsEscapeSearchText(text: string): string
/**
 * Use this function before [method`SearchSettings`.set_search_text], to
 * unescape the following sequences of characters: `\n`, `\r`, `\t` and `\\`.
 * The purpose is to easily write those characters in a search entry.
 * 
 * Note that unescaping the search text is not needed for regular expression
 * searches.
 * 
 * See also: [func`utils_escape_search_text]`.
 * @param text the text to unescape.
 */
export function utilsUnescapeSearchText(text: string): string
/**
 * This function is called incrementally to process additional background work.
 * A deadline is provided which can be checked using [func`GLib`.get_monotonic_time] so
 * that additional work can be processed each frame.
 * 
 * This is useful for situations where you are incrementally performing
 * background work such as spell checking or semantic syntax highlighting.
 * @callback 
 * @param deadline the time the callback should complete by
 */
export interface SchedulerCallback {
    (deadline: number): boolean
}
export module CompletionProposal {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface CompletionProposal {

    // Class property signals of GtkSource-5.GtkSource.CompletionProposal

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Interface for completion proposals.
 * 
 * This interface is used to denote that an object is capable of being
 * a completion proposal for [class`Completion]`.
 * 
 * Currently, no method or functions are required but additional methods
 * may be added in the future. Proposals created by
 * #GtkSourceCompletionProvider can use [func`GObject`.IMPLEMENT_INTERFACE] to
 * implement this with %NULL for the interface init function.
 * @interface 
 */
export class CompletionProposal extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.CompletionProposal

    static name: string

    // Constructors of GtkSource-5.GtkSource.CompletionProposal

    constructor(config?: CompletionProposal.ConstructorProperties) 
    _init(config?: CompletionProposal.ConstructorProperties): void
}

export module CompletionProvider {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface CompletionProvider {

    // Owm methods of GtkSource-5.GtkSource.CompletionProvider

    // Has conflict: activate(context: CompletionContext, proposal: CompletionProposal): void
    // Has conflict: display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void
    // Has conflict: getPriority(context: CompletionContext): number
    // Has conflict: getTitle(): string | null
    // Has conflict: isTrigger(iter: Gtk.TextIter, ch: string): boolean
    // Has conflict: keyActivates(context: CompletionContext, proposal: CompletionProposal, keyval: number, state: Gdk.ModifierType): boolean
    // Has conflict: listAlternates(context: CompletionContext, proposal: CompletionProposal): CompletionProposal[] | null
    // Has conflict: populateAsync(context: CompletionContext, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: populateFinish(result: Gio.AsyncResult): Gio.ListModel
    // Has conflict: refilter(context: CompletionContext, model: Gio.ListModel): void

    // Own virtual methods of GtkSource-5.GtkSource.CompletionProvider

    /**
     * This function requests `proposal` to be activated by the
     * #GtkSourceCompletionProvider.
     * 
     * What the provider does to activate the proposal is specific to that
     * provider. Many providers may choose to insert a #GtkSourceSnippet with
     * edit points the user may cycle through.
     * 
     * See also: [class`Snippet]`, [class`SnippetChunk]`, [method`View`.push_snippet]
     * @virtual 
     * @param context a #GtkSourceCompletionContext
     * @param proposal a #GtkSourceCompletionProposal
     */
    activate(context: CompletionContext, proposal: CompletionProposal): void
    /**
     * This function requests that the #GtkSourceCompletionProvider prepares
     * `cell` to display the contents of `proposal`.
     * 
     * Based on `cells` column type, you may want to display different information.
     * 
     * This allows for columns of information among completion proposals
     * resulting in better alignment of similar content (icons, return types,
     * method names, and parameter lists).
     * @virtual 
     * @param context a #GtkSourceCompletionContext
     * @param proposal a #GtkSourceCompletionProposal
     * @param cell a #GtkSourceCompletionCell
     */
    display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void
    /**
     * This function should return the priority of `self` in `context`.
     * 
     * The priority is used to sort groups of completion proposals by
     * provider so that higher priority providers results are shown
     * above lower priority providers.
     * 
     * Lower value indicates higher priority.
     * @virtual 
     * @param context a #GtkSourceCompletionContext
     */
    getPriority(context: CompletionContext): number
    /**
     * Gets the title of the completion provider, if any.
     * 
     * Currently, titles are not displayed in the completion results, but may be
     * at some point in the future when non-%NULL.
     * @virtual 
     */
    getTitle(): string | null
    /**
     * This function is used to determine of a character inserted into the text
     * editor should cause a new completion request to be triggered.
     * 
     * An example would be period '.' which might indicate that the user wants
     * to complete method or field names of an object.
     * @virtual 
     * @param iter a #GtkTextIter
     * @param ch a #gunichar of the character inserted
     */
    isTrigger(iter: Gtk.TextIter, ch: string): boolean
    /**
     * This function is used to determine if a key typed by the user should
     * activate `proposal` (resulting in committing the text to the editor).
     * 
     * This is useful when using languages where convention may lead to less
     * typing by the user. One example may be the use of "." or "-" to expand
     * a field access in the C programming language.
     * @virtual 
     * @param context a #GtkSourceCompletionContext
     * @param proposal a #GtkSourceCompletionProposal
     * @param keyval a keyval such as [const`Gdk`.KEY_period]
     * @param state a #GdkModifierType or 0
     */
    keyActivates(context: CompletionContext, proposal: CompletionProposal, keyval: number, state: Gdk.ModifierType): boolean
    /**
     * Providers should return a list of alternates to `proposal` or %NULL if
     * there are no alternates available.
     * 
     * This can be used by the completion view to allow the user to move laterally
     * through similar proposals, such as overrides of methods by the same name.
     * @virtual 
     * @param context a #GtkSourceCompletionContext
     * @param proposal a #GtkSourceCompletionProposal
     */
    listAlternates(context: CompletionContext, proposal: CompletionProposal): CompletionProposal[] | null
    /**
     * Asynchronously requests that the provider populates the completion
     * results for `context`.
     * 
     * For providers that would like to populate a [iface`Gio`.ListModel] while those
     * results are displayed to the user,
     * [method`CompletionContext`.set_proposals_for_provider] may be used
     * to reduce latency until the user sees results.
     * @virtual 
     * @param context a #GtkSourceCompletionContext
     * @param cancellable a #GCancellable or %NULL
     * @param callback a callback to execute upon completion
     */
    populateAsync(context: CompletionContext, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Completes an asynchronous operation to populate a completion provider.
     * @virtual 
     * @param result a #GAsyncResult provided to callback
     */
    populateFinish(result: Gio.AsyncResult): Gio.ListModel
    /**
     * This function can be used to filter results previously provided to
     * the [class`CompletionContext]` by the #GtkSourceCompletionProvider.
     * 
     * This can happen as the user types additional text onto the word so
     * that previously matched items may be removed from the list instead of
     * generating new [iface`Gio`.ListModel] of results.
     * @virtual 
     * @param context a #GtkSourceCompletionContext
     * @param model a #GListModel
     */
    refilter(context: CompletionContext, model: Gio.ListModel): void

    // Class property signals of GtkSource-5.GtkSource.CompletionProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Completion provider interface.
 * 
 * You must implement this interface to provide proposals to [class`Completion]`.
 * 
 * In most cases, implementations of this interface will want to use
 * [vfunc`CompletionProvider`.populate_async] to asynchronously populate the results
 * to avoid blocking the main loop.
 * @interface 
 */
export class CompletionProvider extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.CompletionProvider

    static name: string

    // Constructors of GtkSource-5.GtkSource.CompletionProvider

    constructor(config?: CompletionProvider.ConstructorProperties) 
    _init(config?: CompletionProvider.ConstructorProperties): void
}

export module HoverProvider {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface HoverProvider {

    // Owm methods of GtkSource-5.GtkSource.HoverProvider

    // Has conflict: populateAsync(context: HoverContext, display: HoverDisplay, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: populateFinish(result: Gio.AsyncResult): boolean

    // Own virtual methods of GtkSource-5.GtkSource.HoverProvider

    populate(context: HoverContext, display: HoverDisplay): boolean
    populateAsync(context: HoverContext, display: HoverDisplay, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    populateFinish(result: Gio.AsyncResult): boolean

    // Class property signals of GtkSource-5.GtkSource.HoverProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Interface to populate interactive tooltips.
 * 
 * `GtkSourceHoverProvider` is an interface that should be implemented to extend
 * the contents of a [class`HoverDisplay]`. This is typical in editors that
 * interact external tooling such as those utilizing Language Server Protocol.
 * 
 * If you can populate the [class`HoverDisplay]` synchronously, use
 * [vfunc`HoverProvider`.populate]. Otherwise, interface implementations that
 * may take additional time should use [vfunc`HoverProvider`.populate_async]
 * to avoid blocking the main loop.
 * @interface 
 */
export class HoverProvider extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.HoverProvider

    static name: string

    // Constructors of GtkSource-5.GtkSource.HoverProvider

    constructor(config?: HoverProvider.ConstructorProperties) 
    _init(config?: HoverProvider.ConstructorProperties): void
}

export module Indenter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Indenter {

    // Owm methods of GtkSource-5.GtkSource.Indenter

    // Has conflict: indent(view: View, iter: Gtk.TextIter): /* iter */ Gtk.TextIter
    // Has conflict: isTrigger(view: View, location: Gtk.TextIter, state: Gdk.ModifierType, keyval: number): boolean

    // Own virtual methods of GtkSource-5.GtkSource.Indenter

    /**
     * This function should be implemented to alter the indentation of text
     * within the view.
     * 
     * `view` is provided so that the indenter may retrieve settings such as indentation and tab widths.
     * 
     * `iter` is the location where the indentation was requested. This typically
     * is after having just inserted a newline (\n) character but can be other
     * situations such as a manually requested indentation or reformatting.
     * 
     * See [iface`Indenter`.is_trigger] for how to trigger indentation on
     * various characters inserted into the buffer.
     * 
     * The implementor of this function is expected to keep `iter` valid across
     * calls to the function and should contain the location of the insert mark
     * after calling this function.
     * 
     * The default implementation for this virtual function will copy the
     * indentation of the previous line.
     * @virtual 
     * @param view a #GtkSourceView
     * @param iter the location of the indentation request
     */
    indent(view: View, iter: Gtk.TextIter): /* iter */ Gtk.TextIter
    /**
     * This function is used to determine if a key pressed should cause the
     * indenter to automatically indent.
     * 
     * The default implementation of this virtual method will check to see
     * if `keyval` is [const`Gdk`.KEY_Return] or [const`Gdk`.KEY_KP_Enter] and `state` does
     * not have %GDK_SHIFT_MASK set. This is to allow the user to avoid
     * indentation when Shift+Return is pressed. Other indenters may want
     * to copy this behavior to provide a consistent experience to users.
     * @virtual 
     * @param view a #GtkSourceView
     * @param location the location where `ch` is to be inserted
     * @param state modifier state for the insertion
     * @param keyval the keyval pressed such as [const`Gdk`.KEY_Return]
     */
    isTrigger(view: View, location: Gtk.TextIter, state: Gdk.ModifierType, keyval: number): boolean

    // Class property signals of GtkSource-5.GtkSource.Indenter

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Auto-indentation interface.
 * 
 * By default, [class`View]` can auto-indent as you type when
 * [property`View:`auto-indent] is enabled. The indentation simply copies the
 * previous lines indentation.
 * 
 * This can be changed by implementing `GtkSourceIndenter` and setting the
 * [property`View:`indenter] property.
 * 
 * Implementors of this interface should implement both
 * [vfunc`Indenter`.is_trigger] and [vfunc`Indenter`.indent].
 * 
 * [vfunc`Indenter`.is_trigger] is called upon key-press to
 * determine of the key press should trigger an indentation.  The default
 * implementation of the interface checks to see if the key was
 * [const`Gdk`.KEY_Return] or [const`Gdk`.KEY_KP_Enter] without %GDK_SHIFT_MASK set.
 * 
 * [vfunc`Indenter`.indent] is called after text has been
 * inserted into [class`Buffer]` when
 * [vfunc`Indenter`.is_trigger] returned %TRUE. The [struct`Gtk`.TextIter]
 * is placed directly after the inserted character or characters.
 * 
 * It may be beneficial to move the insertion mark using
 * [method`Gtk`.TextBuffer.select_range] depending on how the indenter changes
 * the indentation.
 * 
 * All changes are encapsulated within a single user action so that the
 * user may undo them using standard undo/redo accelerators.
 * @interface 
 */
export class Indenter extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.Indenter

    static name: string

    // Constructors of GtkSource-5.GtkSource.Indenter

    constructor(config?: Indenter.ConstructorProperties) 
    _init(config?: Indenter.ConstructorProperties): void
}

export module StyleSchemeChooser {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.StyleSchemeChooser

        /**
         * Contains the currently selected style scheme.
         * 
         * The property can be set to change the current selection programmatically.
         */
        styleScheme?: StyleScheme | null
    }

}

export interface StyleSchemeChooser {

    // Own properties of GtkSource-5.GtkSource.StyleSchemeChooser

    /**
     * Contains the currently selected style scheme.
     * 
     * The property can be set to change the current selection programmatically.
     */
    styleScheme: StyleScheme

    // Owm methods of GtkSource-5.GtkSource.StyleSchemeChooser

    // Has conflict: getStyleScheme(): StyleScheme
    // Has conflict: setStyleScheme(scheme: StyleScheme): void

    // Own virtual methods of GtkSource-5.GtkSource.StyleSchemeChooser

    /**
     * Gets the currently-selected scheme.
     * @virtual 
     */
    getStyleScheme(): StyleScheme
    /**
     * Sets the scheme.
     * @virtual 
     * @param scheme a #GtkSourceStyleScheme
     */
    setStyleScheme(scheme: StyleScheme): void

    // Class property signals of GtkSource-5.GtkSource.StyleSchemeChooser

    connect(sigName: "notify::style-scheme", callback: any): number
    on(sigName: "notify::style-scheme", callback: any): number
    once(sigName: "notify::style-scheme", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::style-scheme", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Interface implemented by widgets for choosing style schemes.
 * 
 * `GtkSourceStyleSchemeChooser` is an interface that is implemented by widgets
 * for choosing style schemes.
 * 
 * In GtkSourceView, the main widgets that implement this interface are
 * [class`StyleSchemeChooserWidget]` and [class`StyleSchemeChooserButton]`.
 * @interface 
 */
export class StyleSchemeChooser extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.StyleSchemeChooser

    static name: string

    // Constructors of GtkSource-5.GtkSource.StyleSchemeChooser

    constructor(config?: StyleSchemeChooser.ConstructorProperties) 
    _init(config?: StyleSchemeChooser.ConstructorProperties): void
}

export module Buffer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `bracket-matched`
     */
    export interface BracketMatchedSignalCallback {
        (iter: Gtk.TextIter | null, state: BracketMatchType): void
    }

    /**
     * Signal callback interface for `cursor-moved`
     */
    export interface CursorMovedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `highlight-updated`
     */
    export interface HighlightUpdatedSignalCallback {
        (start: Gtk.TextIter, end: Gtk.TextIter): void
    }

    /**
     * Signal callback interface for `source-mark-updated`
     */
    export interface SourceMarkUpdatedSignalCallback {
        (mark: Gtk.TextMark): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.TextBuffer.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.Buffer

        /**
         * Whether to highlight matching brackets in the buffer.
         */
        highlightMatchingBrackets?: boolean | null
        /**
         * Whether to highlight syntax in the buffer.
         */
        highlightSyntax?: boolean | null
        /**
         * Whether the buffer has an implicit trailing newline. See
         * [method`Buffer`.set_implicit_trailing_newline].
         */
        implicitTrailingNewline?: boolean | null
        language?: Language | null
        /**
         * Style scheme. It contains styles for syntax highlighting, optionally
         * foreground, background, cursor color, current line color, and matching
         * brackets style.
         */
        styleScheme?: StyleScheme | null
    }

}

export interface Buffer {

    // Own properties of GtkSource-5.GtkSource.Buffer

    /**
     * Whether to highlight matching brackets in the buffer.
     */
    highlightMatchingBrackets: boolean
    /**
     * Whether to highlight syntax in the buffer.
     */
    highlightSyntax: boolean
    /**
     * Whether the buffer has an implicit trailing newline. See
     * [method`Buffer`.set_implicit_trailing_newline].
     */
    implicitTrailingNewline: boolean
    language: Language
    /**
     * Style scheme. It contains styles for syntax highlighting, optionally
     * foreground, background, cursor color, current line color, and matching
     * brackets style.
     */
    styleScheme: StyleScheme

    // Own fields of GtkSource-5.GtkSource.Buffer

    parentInstance: any

    // Owm methods of GtkSource-5.GtkSource.Buffer

    /**
     * Moves `iter` to the position of the previous [class`Mark]` of the given
     * category.
     * 
     * Returns %TRUE if `iter` was moved. If `category` is NULL, the
     * previous source mark can be of any category.
     * @param iter an iterator.
     * @param category category to search for, or %NULL
     */
    backwardIterToSourceMark(iter: Gtk.TextIter, category: string | null): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    /**
     * Changes the case of the text between the specified iterators.
     * 
     * Since 5.4, this function will update the position of `start` and
     * `end` to surround the modified text.
     * @param caseType how to change the case.
     * @param start a #GtkTextIter.
     * @param end a #GtkTextIter.
     */
    changeCase(caseType: ChangeCaseType, start: Gtk.TextIter, end: Gtk.TextIter): void
    /**
     * Creates a source mark in the `buffer` of category `category`.
     * 
     * A source mark is a [class`Gtk`.TextMark] but organized into categories.
     * Depending on the category a pixbuf can be specified that will be displayed
     * along the line of the mark.
     * 
     * Like a [class`Gtk`.TextMark], a [class`Mark]` can be anonymous if the
     * passed `name` is %NULL.  Also, the buffer owns the marks so you
     * shouldn't unreference it.
     * 
     * Marks always have left gravity and are moved to the beginning of
     * the line when the user deletes the line they were in.
     * 
     * Typical uses for a source mark are bookmarks, breakpoints, current
     * executing instruction indication in a source file, etc..
     * @param name the name of the mark, or %NULL.
     * @param category a string defining the mark category.
     * @param where location to place the mark.
     */
    createSourceMark(name: string | null, category: string, where: Gtk.TextIter): Mark
    /**
     * Forces buffer to analyze and highlight the given area synchronously.
     * 
     * **Note**:
     * 
     * This is a potentially slow operation and should be used only
     * when you need to make sure that some text not currently
     * visible is highlighted, for instance before printing.
     * @param start start of the area to highlight.
     * @param end end of the area to highlight.
     */
    ensureHighlight(start: Gtk.TextIter, end: Gtk.TextIter): void
    /**
     * Moves `iter` to the position of the next [class`Mark]` of the given
     * `category`.
     * 
     * Returns %TRUE if `iter` was moved. If `category` is NULL, the
     * next source mark can be of any category.
     * @param iter an iterator.
     * @param category category to search for, or %NULL
     */
    forwardIterToSourceMark(iter: Gtk.TextIter, category: string | null): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    /**
     * Get all defined context classes at `iter`.
     * 
     * See the [class`Buffer]` description for the list of default context classes.
     * @param iter a #GtkTextIter.
     */
    getContextClassesAtIter(iter: Gtk.TextIter): string[]
    /**
     * Determines whether bracket match highlighting is activated for the
     * source buffer.
     */
    getHighlightMatchingBrackets(): boolean
    /**
     * Determines whether syntax highlighting is activated in the source
     * buffer.
     */
    getHighlightSyntax(): boolean
    getImplicitTrailingNewline(): boolean
    /**
     * Returns the [class`Language]` associated with the buffer,
     * see [method`Buffer`.set_language].
     * 
     * The returned object should not be unreferenced by the user.
     */
    getLanguage(): Language | null
    /**
     * Returns the list of marks of the given category at `iter`.
     * 
     * If `category` is %NULL it returns all marks at `iter`.
     * @param iter an iterator.
     * @param category category to search for, or %NULL
     */
    getSourceMarksAtIter(iter: Gtk.TextIter, category: string | null): Mark[]
    /**
     * Returns the list of marks of the given category at `line`.
     * 
     * If `category` is %NULL, all marks at `line` are returned.
     * @param line a line number.
     * @param category category to search for, or %NULL
     */
    getSourceMarksAtLine(line: number, category: string | null): Mark[]
    /**
     * Returns the [class`StyleScheme]` associated with the buffer,
     * see [method`Buffer`.set_style_scheme].
     * 
     * The returned object should not be unreferenced by the user.
     */
    getStyleScheme(): StyleScheme | null
    /**
     * Moves backward to the next toggle (on or off) of the context class.
     * 
     * If no matching context class toggles are found, returns %FALSE, otherwise %TRUE.
     * Does not return toggles located at `iter,` only toggles after `iter`. Sets
     * `iter` to the location of the toggle, or to the end of the buffer if no
     * toggle is found.
     * 
     * See the [class`Buffer]` description for the list of default context classes.
     * @param iter a #GtkTextIter.
     * @param contextClass the context class.
     */
    iterBackwardToContextClassToggle(iter: Gtk.TextIter, contextClass: string): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    /**
     * Moves forward to the next toggle (on or off) of the context class.
     * 
     * If no matching context class toggles are found, returns %FALSE, otherwise %TRUE.
     * Does not return toggles located at `iter,` only toggles after `iter`. Sets
     * `iter` to the location of the toggle, or to the end of the buffer if no
     * toggle is found.
     * 
     * See the [class`Buffer]` description for the list of default context classes.
     * @param iter a #GtkTextIter.
     * @param contextClass the context class.
     */
    iterForwardToContextClassToggle(iter: Gtk.TextIter, contextClass: string): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    /**
     * Check if the class `context_class` is set on `iter`.
     * 
     * See the [class`Buffer]` description for the list of default context classes.
     * @param iter a #GtkTextIter.
     * @param contextClass class to search for.
     */
    iterHasContextClass(iter: Gtk.TextIter, contextClass: string): boolean
    /**
     * Joins the lines of text between the specified iterators.
     * @param start a #GtkTextIter.
     * @param end a #GtkTextIter.
     */
    joinLines(start: Gtk.TextIter, end: Gtk.TextIter): void
    /**
     * Remove all marks of `category` between `start` and `end` from the buffer.
     * 
     * If `category` is NULL, all marks in the range will be removed.
     * @param start a #GtkTextIter.
     * @param end a #GtkTextIter.
     * @param category category to search for, or %NULL.
     */
    removeSourceMarks(start: Gtk.TextIter, end: Gtk.TextIter, category: string | null): void
    /**
     * Controls the bracket match highlighting function in the buffer.
     * 
     * If activated, when you position your cursor over a bracket character
     * (a parenthesis, a square bracket, etc.) the matching opening or
     * closing bracket character will be highlighted.
     * @param highlight %TRUE if you want matching brackets highlighted.
     */
    setHighlightMatchingBrackets(highlight: boolean): void
    /**
     * Controls whether syntax is highlighted in the buffer.
     * 
     * If `highlight` is %TRUE, the text will be highlighted according to the syntax
     * patterns specified in the [class`Language]` set with [method`Buffer`.set_language].
     * 
     * If `highlight` is %FALSE, syntax highlighting is disabled and all the
     * [class`Gtk`.TextTag] objects that have been added by the syntax highlighting engine
     * are removed from the buffer.
     * @param highlight %TRUE to enable syntax highlighting, %FALSE to disable it.
     */
    setHighlightSyntax(highlight: boolean): void
    /**
     * Sets whether the `buffer` has an implicit trailing newline.
     * 
     * If an explicit trailing newline is present in a [class`Gtk`.TextBuffer], [class`Gtk`.TextView]
     * shows it as an empty line. This is generally not what the user expects.
     * 
     * If `implicit_trailing_newline` is %TRUE (the default value):
     *  - when a [class`FileLoader]` loads the content of a file into the `buffer,`
     *    the trailing newline (if present in the file) is not inserted into the
     *    `buffer`.
     *  - when a [class`FileSaver]` saves the content of the `buffer` into a file, a
     *    trailing newline is added to the file.
     * 
     * On the other hand, if `implicit_trailing_newline` is %FALSE, the file's
     * content is not modified when loaded into the `buffer,` and the `buffer'`s
     * content is not modified when saved into a file.
     * @param implicitTrailingNewline the new value.
     */
    setImplicitTrailingNewline(implicitTrailingNewline: boolean): void
    /**
     * Associates a [class`Language]` with the buffer.
     * 
     * Note that a [class`Language]` affects not only the syntax highlighting, but
     * also the [context classes](./class.Buffer.html#context-classes). If you want to disable just the
     * syntax highlighting, see [method`Buffer`.set_highlight_syntax].
     * 
     * The buffer holds a reference to `language`.
     * @param language a #GtkSourceLanguage to set, or %NULL.
     */
    setLanguage(language: Language | null): void
    /**
     * Sets a [class`StyleScheme]` to be used by the buffer and the view.
     * 
     * Note that a [class`StyleScheme]` affects not only the syntax highlighting,
     * but also other [class`View]` features such as highlighting the current line,
     * matching brackets, the line numbers, etc.
     * 
     * Instead of setting a %NULL `scheme,` it is better to disable syntax
     * highlighting with [method`Buffer`.set_highlight_syntax], and setting the
     * [class`StyleScheme]` with the "classic" or "tango" ID, because those two
     * style schemes follow more closely the GTK theme (for example for the
     * background color).
     * 
     * The buffer holds a reference to `scheme`.
     * @param scheme a #GtkSourceStyleScheme or %NULL.
     */
    setStyleScheme(scheme: StyleScheme | null): void
    /**
     * Sort the lines of text between the specified iterators.
     * @param start a #GtkTextIter.
     * @param end a #GtkTextIter.
     * @param flags #GtkSourceSortFlags specifying how the sort should behave
     * @param column sort considering the text starting at the given column
     */
    sortLines(start: Gtk.TextIter, end: Gtk.TextIter, flags: SortFlags, column: number): void

    // Own virtual methods of GtkSource-5.GtkSource.Buffer

    bracketMatched(iter: Gtk.TextIter, state: BracketMatchType): void

    // Own signals of GtkSource-5.GtkSource.Buffer

    connect(sigName: "bracket-matched", callback: Buffer.BracketMatchedSignalCallback): number
    on(sigName: "bracket-matched", callback: Buffer.BracketMatchedSignalCallback): number
    once(sigName: "bracket-matched", callback: Buffer.BracketMatchedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "bracket-matched", state: BracketMatchType, ...args: any[]): void
    connect(sigName: "cursor-moved", callback: Buffer.CursorMovedSignalCallback): number
    on(sigName: "cursor-moved", callback: Buffer.CursorMovedSignalCallback): number
    once(sigName: "cursor-moved", callback: Buffer.CursorMovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "cursor-moved", ...args: any[]): void
    connect(sigName: "highlight-updated", callback: Buffer.HighlightUpdatedSignalCallback): number
    on(sigName: "highlight-updated", callback: Buffer.HighlightUpdatedSignalCallback): number
    once(sigName: "highlight-updated", callback: Buffer.HighlightUpdatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "highlight-updated", end: Gtk.TextIter, ...args: any[]): void
    connect(sigName: "source-mark-updated", callback: Buffer.SourceMarkUpdatedSignalCallback): number
    on(sigName: "source-mark-updated", callback: Buffer.SourceMarkUpdatedSignalCallback): number
    once(sigName: "source-mark-updated", callback: Buffer.SourceMarkUpdatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "source-mark-updated", ...args: any[]): void

    // Class property signals of GtkSource-5.GtkSource.Buffer

    connect(sigName: "notify::highlight-matching-brackets", callback: any): number
    on(sigName: "notify::highlight-matching-brackets", callback: any): number
    once(sigName: "notify::highlight-matching-brackets", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::highlight-matching-brackets", ...args: any[]): void
    connect(sigName: "notify::highlight-syntax", callback: any): number
    on(sigName: "notify::highlight-syntax", callback: any): number
    once(sigName: "notify::highlight-syntax", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::highlight-syntax", ...args: any[]): void
    connect(sigName: "notify::implicit-trailing-newline", callback: any): number
    on(sigName: "notify::implicit-trailing-newline", callback: any): number
    once(sigName: "notify::implicit-trailing-newline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::implicit-trailing-newline", ...args: any[]): void
    connect(sigName: "notify::language", callback: any): number
    on(sigName: "notify::language", callback: any): number
    once(sigName: "notify::language", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::style-scheme", callback: any): number
    on(sigName: "notify::style-scheme", callback: any): number
    once(sigName: "notify::style-scheme", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::style-scheme", ...args: any[]): void
    connect(sigName: "notify::can-redo", callback: any): number
    on(sigName: "notify::can-redo", callback: any): number
    once(sigName: "notify::can-redo", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-redo", ...args: any[]): void
    connect(sigName: "notify::can-undo", callback: any): number
    on(sigName: "notify::can-undo", callback: any): number
    once(sigName: "notify::can-undo", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-undo", ...args: any[]): void
    connect(sigName: "notify::cursor-position", callback: any): number
    on(sigName: "notify::cursor-position", callback: any): number
    once(sigName: "notify::cursor-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor-position", ...args: any[]): void
    connect(sigName: "notify::enable-undo", callback: any): number
    on(sigName: "notify::enable-undo", callback: any): number
    once(sigName: "notify::enable-undo", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enable-undo", ...args: any[]): void
    connect(sigName: "notify::has-selection", callback: any): number
    on(sigName: "notify::has-selection", callback: any): number
    once(sigName: "notify::has-selection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-selection", ...args: any[]): void
    connect(sigName: "notify::tag-table", callback: any): number
    on(sigName: "notify::tag-table", callback: any): number
    once(sigName: "notify::tag-table", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tag-table", ...args: any[]): void
    connect(sigName: "notify::text", callback: any): number
    on(sigName: "notify::text", callback: any): number
    once(sigName: "notify::text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Subclass of [class`Gtk`.TextBuffer].
 * 
 * A `GtkSourceBuffer` object is the model for [class`View]` widgets.
 * It extends the [class`Gtk`.TextBuffer] class by adding features useful to display
 * and edit source code such as syntax highlighting and bracket matching.
 * 
 * To create a `GtkSourceBuffer` use [ctor`GtkSource`.Buffer.new] or
 * [ctor`GtkSource`.Buffer.new_with_language]. The second form is just a convenience
 * function which allows you to initially set a [class`Language]`. You can also
 * directly create a [class`View]` and get its [class`Buffer]` with
 * [method`Gtk`.TextView.get_buffer].
 * 
 * The highlighting is enabled by default, but you can disable it with
 * [method`Buffer`.set_highlight_syntax].
 * 
 * # Context Classes:
 * 
 * It is possible to retrieve some information from the syntax highlighting
 * engine. The default context classes that are applied to regions of a
 * `GtkSourceBuffer`:
 * 
 *  - **comment**: the region delimits a comment;
 *  - **no-spell-check**: the region should not be spell checked;
 *  - **path**: the region delimits a path to a file;
 *  - **string**: the region delimits a string.
 * 
 * Custom language definition files can create their own context classes,
 * since the functions like [method`Buffer`.iter_has_context_class] take
 * a string parameter as the context class.
 * 
 * `GtkSourceBuffer` provides an API to access the context classes:
 * [method`Buffer`.iter_has_context_class],
 * [method`Buffer`.get_context_classes_at_iter],
 * [method`Buffer`.iter_forward_to_context_class_toggle] and
 * [method`Buffer`.iter_backward_to_context_class_toggle].
 * 
 * And the [signal`GtkSource`.Buffer::highlight-updated] signal permits to be notified
 * when a context class region changes.
 * 
 * Each context class has also an associated [class`Gtk`.TextTag] with the name
 * `gtksourceview:context-classes:<name>`. For example to
 * retrieve the [class`Gtk`.TextTag] for the string context class, one can write:
 * ```c
 * GtkTextTagTable *tag_table;
 * GtkTextTag *tag;
 * 
 * tag_table = gtk_text_buffer_get_tag_table (buffer);
 * tag = gtk_text_tag_table_lookup (tag_table, "gtksourceview:context-classes:string");
 * ```
 * 
 * The tag must be used for read-only purposes.
 * 
 * Accessing a context class via the associated [class`Gtk`.TextTag] is less
 * convenient than the `GtkSourceBuffer` API, because:
 * 
 *  - The tag doesn't always exist, you need to listen to the
 *    [signal`Gtk`.TextTagTable::tag-added] and [signal`Gtk`.TextTagTable::tag-removed] signals.
 *  - Instead of the [signal`GtkSource`.Buffer::highlight-updated] signal, you can listen
 *    to the [signal`Gtk`.TextBuffer::apply-tag] and [signal`Gtk`.TextBuffer::remove-tag] signals.
 * 
 * A possible use-case for accessing a context class via the associated
 * [class`Gtk`.TextTag] is to read the region but without adding a hard dependency on the
 * GtkSourceView library (for example for a spell-checking library that wants to
 * read the no-spell-check region).
 * @class 
 */
export class Buffer extends Gtk.TextBuffer {

    // Own properties of GtkSource-5.GtkSource.Buffer

    static name: string

    // Constructors of GtkSource-5.GtkSource.Buffer

    constructor(config?: Buffer.ConstructorProperties) 
    /**
     * Creates a new source buffer.
     * @constructor 
     * @param table a #GtkTextTagTable, or %NULL to create a new one.
     */
    constructor(table: Gtk.TextTagTable | null) 
    /**
     * Creates a new source buffer.
     * @constructor 
     * @param table a #GtkTextTagTable, or %NULL to create a new one.
     */
    static new(table: Gtk.TextTagTable | null): Buffer

    // Overloads of new

    /**
     * Creates a new text buffer.
     * @constructor 
     * @param table a tag table, or %NULL to create a new one
     */
    static new(table: Gtk.TextTagTable | null): Gtk.TextBuffer
    /**
     * Creates a new source buffer using the highlighting patterns in `language`.
     * 
     * This is equivalent to creating a new source buffer with
     * a new tag table and then calling [method`Buffer`.set_language].
     * @constructor 
     * @param language a #GtkSourceLanguage.
     */
    static newWithLanguage(language: Language): Buffer
    _init(config?: Buffer.ConstructorProperties): void
}

export module Completion {

    // Signal callback interfaces

    /**
     * Signal callback interface for `hide`
     */
    export interface HideSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `provider-added`
     */
    export interface ProviderAddedSignalCallback {
        (provider: CompletionProvider): void
    }

    /**
     * Signal callback interface for `provider-removed`
     */
    export interface ProviderRemovedSignalCallback {
        (provider: CompletionProvider): void
    }

    /**
     * Signal callback interface for `show`
     */
    export interface ShowSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.Completion

        /**
         * The number of rows to display to the user before scrolling.
         */
        pageSize?: number | null
        /**
         * Determines whether the visibility of the info window should be saved when the
         * completion is hidden, and restored when the completion is shown again.
         */
        rememberInfoVisibility?: boolean | null
        /**
         * Determines whether the first proposal should be selected when the completion
         * is first shown.
         */
        selectOnShow?: boolean | null
        /**
         * The "show-icons" property denotes if icons should be displayed within
         * the list of completions presented to the user.
         */
        showIcons?: boolean | null
        /**
         * The "view" property is the #GtkTextView for which this #GtkSourceCompletion
         * is providing completion features.
         */
        view?: View | null
    }

}

export interface Completion {

    // Own properties of GtkSource-5.GtkSource.Completion

    /**
     * The #GtkTextBuffer for the #GtkSourceCompletion:view.
     * This is a convenience property for providers.
     */
    readonly buffer: Gtk.TextView
    /**
     * The number of rows to display to the user before scrolling.
     */
    pageSize: number
    /**
     * Determines whether the visibility of the info window should be saved when the
     * completion is hidden, and restored when the completion is shown again.
     */
    rememberInfoVisibility: boolean
    /**
     * Determines whether the first proposal should be selected when the completion
     * is first shown.
     */
    selectOnShow: boolean
    /**
     * The "show-icons" property denotes if icons should be displayed within
     * the list of completions presented to the user.
     */
    showIcons: boolean
    /**
     * The "view" property is the #GtkTextView for which this #GtkSourceCompletion
     * is providing completion features.
     */
    readonly view: View

    // Owm methods of GtkSource-5.GtkSource.Completion

    /**
     * Adds a [iface`CompletionProvider]` to the list of providers to be queried
     * for completion results.
     * @param provider a #GtkSourceCompletionProvider
     */
    addProvider(provider: CompletionProvider): void
    blockInteractive(): void
    /**
     * Gets the connected [class`View]`'s [class`Buffer]`
     */
    getBuffer(): Buffer
    getPageSize(): number
    /**
     * Gets the [class`View]` that owns the [class`Completion]`.
     */
    getView(): View
    /**
     * Emits the "hide" signal.
     * 
     * When the "hide" signal is emitted, the completion window will be
     * dismissed.
     */
    hide(): void
    /**
     * Removes a [iface`CompletionProvider]` previously added with
     * [method`Completion`.add_provider].
     * @param provider a #GtkSourceCompletionProvider
     */
    removeProvider(provider: CompletionProvider): void
    setPageSize(pageSize: number): void
    /**
     * Emits the "show" signal.
     * 
     * When the "show" signal is emitted, the completion window will be
     * displayed if there are any results available.
     */
    show(): void
    unblockInteractive(): void

    // Own signals of GtkSource-5.GtkSource.Completion

    connect(sigName: "hide", callback: Completion.HideSignalCallback): number
    on(sigName: "hide", callback: Completion.HideSignalCallback): number
    once(sigName: "hide", callback: Completion.HideSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "hide", ...args: any[]): void
    connect(sigName: "provider-added", callback: Completion.ProviderAddedSignalCallback): number
    on(sigName: "provider-added", callback: Completion.ProviderAddedSignalCallback): number
    once(sigName: "provider-added", callback: Completion.ProviderAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "provider-added", ...args: any[]): void
    connect(sigName: "provider-removed", callback: Completion.ProviderRemovedSignalCallback): number
    on(sigName: "provider-removed", callback: Completion.ProviderRemovedSignalCallback): number
    once(sigName: "provider-removed", callback: Completion.ProviderRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "provider-removed", ...args: any[]): void
    connect(sigName: "show", callback: Completion.ShowSignalCallback): number
    on(sigName: "show", callback: Completion.ShowSignalCallback): number
    once(sigName: "show", callback: Completion.ShowSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "show", ...args: any[]): void

    // Class property signals of GtkSource-5.GtkSource.Completion

    connect(sigName: "notify::buffer", callback: any): number
    on(sigName: "notify::buffer", callback: any): number
    once(sigName: "notify::buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::page-size", callback: any): number
    on(sigName: "notify::page-size", callback: any): number
    once(sigName: "notify::page-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::page-size", ...args: any[]): void
    connect(sigName: "notify::remember-info-visibility", callback: any): number
    on(sigName: "notify::remember-info-visibility", callback: any): number
    once(sigName: "notify::remember-info-visibility", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remember-info-visibility", ...args: any[]): void
    connect(sigName: "notify::select-on-show", callback: any): number
    on(sigName: "notify::select-on-show", callback: any): number
    once(sigName: "notify::select-on-show", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::select-on-show", ...args: any[]): void
    connect(sigName: "notify::show-icons", callback: any): number
    on(sigName: "notify::show-icons", callback: any): number
    once(sigName: "notify::show-icons", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-icons", ...args: any[]): void
    connect(sigName: "notify::view", callback: any): number
    on(sigName: "notify::view", callback: any): number
    once(sigName: "notify::view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Main Completion Object.
 * 
 * The completion system helps the user when they writes some text,
 * such as words, command names, functions, and suchlike. Proposals can
 * be shown, to complete the text the user is writing. Each proposal can
 * contain an additional piece of information (for example
 * documentation), that is displayed when the "Details" button is
 * clicked.
 * 
 * Proposals are created via a [iface`CompletionProvider]`. There can
 * be for example a provider to complete words (see [class`CompletionWords]`),
 * another provider for the completion of
 * function names, etc. To add a provider, call
 * [method`Completion`.add_provider].
 * 
 * When several providers match, they are all shown in the completion
 * window, but one can switch between providers: see the
 * #GtkSourceCompletion::move-page signal. It is also possible to
 * activate the first proposals with key bindings, see the
 * #GtkSourceCompletion:accelerators property.
 * 
 * The [iface`CompletionProposal]` interface represents a proposal.
 * 
 * If a proposal contains extra information (see
 * %GTK_SOURCE_COMPLETION_COLUMN_DETAILS), it will be
 * displayed in a supplemental details window, which appears when
 * the "Details" button is clicked.
 * 
 * Each [class`View]` object is associated with a [class`Completion]`
 * instance. This instance can be obtained with
 * [method`View`.get_completion]. The [class`View]` class contains also the
 * [signal`View:`:show-completion] signal.
 * 
 * A same [iface`CompletionProvider]` object can be used for several
 * `GtkSourceCompletion`'s.
 * @class 
 */
export class Completion extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.Completion

    static name: string

    // Constructors of GtkSource-5.GtkSource.Completion

    constructor(config?: Completion.ConstructorProperties) 
    _init(config?: Completion.ConstructorProperties): void
    /**
     * This will add `<b>` tags around matched characters in `haystack`
     * based on `casefold_query`.
     * @param haystack the string to be highlighted
     * @param casefoldQuery the typed-text used to highlight `haystack`
     */
    static fuzzyHighlight(haystack: string, casefoldQuery: string): Pango.AttrList | null
    /**
     * This helper function can do a fuzzy match for you giving a haystack and
     * casefolded needle.
     * 
     * Casefold your needle using [func`GLib`.utf8_casefold] before
     * running the query.
     * 
     * Score will be set with the score of the match upon success. Otherwise,
     * it will be set to zero.
     * @param haystack the string to be searched.
     * @param casefoldNeedle A g_utf8_casefold() version of the needle.
     */
    static fuzzyMatch(haystack: string | null, casefoldNeedle: string): [ /* returnType */ boolean, /* priority */ number ]
}

export module CompletionCell {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.CompletionCell

        column?: CompletionColumn | null
        markup?: string | null
        paintable?: Gdk.Paintable | null
        text?: string | null
        widget?: Gtk.Widget | null
    }

}

export interface CompletionCell extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of GtkSource-5.GtkSource.CompletionCell

    readonly column: CompletionColumn
    markup: string
    paintable: Gdk.Paintable
    text: string
    widget: Gtk.Widget

    // Owm methods of GtkSource-5.GtkSource.CompletionCell

    getColumn(): CompletionColumn
    /**
     * Gets the child #GtkWidget, if any.
     */
    getWidget(): Gtk.Widget | null
    setGicon(gicon: Gio.Icon): void
    setIconName(iconName: string): void
    setMarkup(markup: string): void
    setPaintable(paintable: Gdk.Paintable): void
    /**
     * Sets the text for the column cell. Use %NULL to unset.
     * @param text the text to set or %NULL
     */
    setText(text: string | null): void
    setTextWithAttributes(text: string, attrs: Pango.AttrList): void
    setWidget(child: Gtk.Widget): void

    // Class property signals of GtkSource-5.GtkSource.CompletionCell

    connect(sigName: "notify::column", callback: any): number
    on(sigName: "notify::column", callback: any): number
    once(sigName: "notify::column", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column", ...args: any[]): void
    connect(sigName: "notify::markup", callback: any): number
    on(sigName: "notify::markup", callback: any): number
    once(sigName: "notify::markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::markup", ...args: any[]): void
    connect(sigName: "notify::paintable", callback: any): number
    on(sigName: "notify::paintable", callback: any): number
    once(sigName: "notify::paintable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::paintable", ...args: any[]): void
    connect(sigName: "notify::text", callback: any): number
    on(sigName: "notify::text", callback: any): number
    once(sigName: "notify::text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::widget", callback: any): number
    on(sigName: "notify::widget", callback: any): number
    once(sigName: "notify::widget", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::widget", ...args: any[]): void
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
 * Widget for single cell of completion proposal.
 * 
 * The `GtkSourceCompletionCell` widget provides a container to display various
 * types of information with the completion display.
 * 
 * Each proposal may consist of multiple cells depending on the complexity of
 * the proposal. For example, programming language proposals may contain a cell
 * for the "left-hand-side" of an operation along with the "typed-text" for a
 * function name and "parameters". They may also optionally set an icon to
 * signify the kind of result.
 * 
 * A [iface`CompletionProvider]` should implement the
 * [vfunc`CompletionProvider`.display] virtual function to control
 * how to convert data from their [iface`CompletionProposal]` to content for
 * the `GtkSourceCompletionCell`.
 * @class 
 */
export class CompletionCell extends Gtk.Widget {

    // Own properties of GtkSource-5.GtkSource.CompletionCell

    static name: string

    // Constructors of GtkSource-5.GtkSource.CompletionCell

    constructor(config?: CompletionCell.ConstructorProperties) 
    _init(config?: CompletionCell.ConstructorProperties): void
}

export module CompletionContext {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.ListModel.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.CompletionContext

        /**
         * The "completion" is the #GtkSourceCompletion that was used to create the context.
         */
        completion?: Completion | null
    }

}

export interface CompletionContext extends Gio.ListModel {

    // Own properties of GtkSource-5.GtkSource.CompletionContext

    /**
     * The "busy" property is %TRUE while the completion context is
     * populating completion proposals.
     */
    readonly busy: boolean
    /**
     * The "completion" is the #GtkSourceCompletion that was used to create the context.
     */
    readonly completion: Completion
    /**
     * The "empty" property is %TRUE when there are no results.
     * 
     * It will be notified when the first result is added or the last
     * result is removed.
     */
    readonly empty: boolean

    // Owm methods of GtkSource-5.GtkSource.CompletionContext

    /**
     * Gets the mode for which the context was activated.
     */
    getActivation(): CompletionActivation
    /**
     * Gets the bounds for the completion, which is the beginning of the
     * current word (taking break characters into account) to the current
     * insertion cursor.
     * 
     * If `begin` is non-%NULL, it will be set to the start position of the
     * current word being completed.
     * 
     * If `end` is non-%NULL, it will be set to the insertion cursor for the
     * current word being completed.
     */
    getBounds(): [ /* returnType */ boolean, /* begin */ Gtk.TextIter, /* end */ Gtk.TextIter ]
    /**
     * Gets the underlying buffer used by the context.
     * 
     * This is a convenience function to get the buffer via the #GtkSourceCompletion
     * property.
     */
    getBuffer(): Buffer | null
    /**
     * Gets the "busy" property. This is set to %TRUE while the completion
     * context is actively fetching proposals from registered
     * #GtkSourceCompletionProvider's.
     */
    getBusy(): boolean
    /**
     * Gets the #GtkSourceCompletion that created the context.
     */
    getCompletion(): Completion | null
    /**
     * Checks if any proposals have been provided to the context.
     * 
     * Out of convenience, this function will return %TRUE if `self` is %NULL.
     */
    getEmpty(): boolean
    /**
     * Gets the language of the underlying buffer, if any.
     */
    getLanguage(): Language | null
    /**
     * Gets the text view for the context.
     */
    getView(): View | null
    /**
     * Gets the word that is being completed up to the position of the insert mark.
     */
    getWord(): string
    /**
     * This function allows providers to update their results for a context
     * outside of a call to [method`CompletionProvider`.populate_async].
     * 
     * This can be used to immediately return results for a provider while it does
     * additional asynchronous work. Doing so will allow the completions to
     * update while the operation is in progress.
     * @param provider an #GtkSourceCompletionProvider
     * @param results a #GListModel or %NULL
     */
    setProposalsForProvider(provider: CompletionProvider, results: Gio.ListModel | null): void

    // Class property signals of GtkSource-5.GtkSource.CompletionContext

    connect(sigName: "notify::busy", callback: any): number
    on(sigName: "notify::busy", callback: any): number
    once(sigName: "notify::busy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::busy", ...args: any[]): void
    connect(sigName: "notify::completion", callback: any): number
    on(sigName: "notify::completion", callback: any): number
    once(sigName: "notify::completion", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::empty", callback: any): number
    on(sigName: "notify::empty", callback: any): number
    once(sigName: "notify::empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::empty", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The context of a completion.
 * 
 * `GtkSourceCompletionContext` contains information about an attept to display
 * completion proposals to the user based on typed text in the [class`View]`.
 * 
 * When typing, [class`Completion]` may use registered
 * [iface`CompletionProvider]` to determine if there may be results which
 * could be displayed. If so, a `GtkSourceCompletionContext` is created with
 * information that is provided to the [iface`CompletionProvider]` to populate
 * results which might be useful to the user.
 * 
 * [iface`CompletionProvider]` are expected to provide [iface`Gio`.ListModel] with
 * [iface`CompletionProposal]` which may be joined together in a list of
 * results for the user. They are also responsible for how the contents are
 * displayed using [class`CompletionCell]` which allows for some level of
 * customization.
 * @class 
 */
export class CompletionContext extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.CompletionContext

    static name: string

    // Constructors of GtkSource-5.GtkSource.CompletionContext

    constructor(config?: CompletionContext.ConstructorProperties) 
    _init(config?: CompletionContext.ConstructorProperties): void
}

export module CompletionSnippets {

    // Constructor properties interface

    export interface ConstructorProperties extends CompletionProvider.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.CompletionSnippets

        priority?: number | null
        title?: string | null
    }

}

export interface CompletionSnippets extends CompletionProvider {

    // Own properties of GtkSource-5.GtkSource.CompletionSnippets

    priority: number
    title: string

    // Own fields of GtkSource-5.GtkSource.CompletionSnippets

    parentInstance: GObject.Object

    // Class property signals of GtkSource-5.GtkSource.CompletionSnippets

    connect(sigName: "notify::priority", callback: any): number
    on(sigName: "notify::priority", callback: any): number
    once(sigName: "notify::priority", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::priority", ...args: any[]): void
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
 * A [iface`CompletionProvider]` for the completion of snippets.
 * 
 * The `GtkSourceCompletionSnippets` is an example of an implementation of
 * the [iface`CompletionProvider]` interface. The proposals are snippets
 * registered with the [class`SnippetManager]`.
 * @class 
 */
export class CompletionSnippets extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.CompletionSnippets

    static name: string

    // Constructors of GtkSource-5.GtkSource.CompletionSnippets

    constructor(config?: CompletionSnippets.ConstructorProperties) 
    constructor() 
    static new(): CompletionSnippets
    _init(config?: CompletionSnippets.ConstructorProperties): void
}

export module CompletionWords {

    // Constructor properties interface

    export interface ConstructorProperties extends CompletionProvider.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.CompletionWords

        minimumWordSize?: number | null
        priority?: number | null
        proposalsBatchSize?: number | null
        scanBatchSize?: number | null
        title?: string | null
    }

}

export interface CompletionWords extends CompletionProvider {

    // Own properties of GtkSource-5.GtkSource.CompletionWords

    minimumWordSize: number
    priority: number
    proposalsBatchSize: number
    scanBatchSize: number
    title: string

    // Own fields of GtkSource-5.GtkSource.CompletionWords

    parentInstance: GObject.Object

    // Owm methods of GtkSource-5.GtkSource.CompletionWords

    /**
     * Registers `buffer` in the `words` provider.
     * @param buffer a #GtkTextBuffer
     */
    register(buffer: Gtk.TextBuffer): void
    /**
     * Unregisters `buffer` from the `words` provider.
     * @param buffer a #GtkTextBuffer
     */
    unregister(buffer: Gtk.TextBuffer): void

    // Class property signals of GtkSource-5.GtkSource.CompletionWords

    connect(sigName: "notify::minimum-word-size", callback: any): number
    on(sigName: "notify::minimum-word-size", callback: any): number
    once(sigName: "notify::minimum-word-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::minimum-word-size", ...args: any[]): void
    connect(sigName: "notify::priority", callback: any): number
    on(sigName: "notify::priority", callback: any): number
    once(sigName: "notify::priority", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::priority", ...args: any[]): void
    connect(sigName: "notify::proposals-batch-size", callback: any): number
    on(sigName: "notify::proposals-batch-size", callback: any): number
    once(sigName: "notify::proposals-batch-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proposals-batch-size", ...args: any[]): void
    connect(sigName: "notify::scan-batch-size", callback: any): number
    on(sigName: "notify::scan-batch-size", callback: any): number
    once(sigName: "notify::scan-batch-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scan-batch-size", ...args: any[]): void
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
 * A [iface`CompletionProvider]` for the completion of words.
 * 
 * The `GtkSourceCompletionWords` is an example of an implementation of
 * the [iface`CompletionProvider]` interface. The proposals are words
 * appearing in the registered [class`Gtk`.TextBuffer]s.
 * @class 
 */
export class CompletionWords extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.CompletionWords

    static name: string

    // Constructors of GtkSource-5.GtkSource.CompletionWords

    constructor(config?: CompletionWords.ConstructorProperties) 
    constructor(title: string | null) 
    static new(title: string | null): CompletionWords
    _init(config?: CompletionWords.ConstructorProperties): void
}

export module File {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.File

        /**
         * The location.
         */
        location?: Gio.File | null
    }

}

export interface File {

    // Own properties of GtkSource-5.GtkSource.File

    /**
     * The compression type.
     */
    readonly compressionType: CompressionType
    /**
     * The character encoding, initially %NULL. After a successful file
     * loading or saving operation, the encoding is non-%NULL.
     */
    readonly encoding: Encoding
    /**
     * The location.
     */
    location: Gio.File
    /**
     * The line ending type.
     */
    readonly newlineType: NewlineType
    /**
     * Whether the file is read-only or not. The value of this property is
     * not updated automatically (there is no file monitors).
     */
    readonly readOnly: boolean

    // Own fields of GtkSource-5.GtkSource.File

    parentInstance: GObject.Object

    // Owm methods of GtkSource-5.GtkSource.File

    /**
     * Checks synchronously the file on disk, to know whether the file is externally
     * modified, or has been deleted, and whether the file is read-only.
     * 
     * #GtkSourceFile doesn't create a [class`Gio`.FileMonitor] to track those properties, so
     * this function needs to be called instead. Creating lots of [class`Gio`.FileMonitor]'s
     * would take lots of resources.
     * 
     * Since this function is synchronous, it is advised to call it only on local
     * files. See [method`File`.is_local].
     */
    checkFileOnDisk(): void
    getCompressionType(): CompressionType
    /**
     * The encoding is initially %NULL. After a successful file loading or saving
     * operation, the encoding is non-%NULL.
     */
    getEncoding(): Encoding
    getLocation(): Gio.File
    getNewlineType(): NewlineType
    /**
     * Returns whether the file has been deleted. If the
     * [property`File:`location] is %NULL, returns %FALSE.
     * 
     * To have an up-to-date value, you must first call
     * [method`File`.check_file_on_disk].
     */
    isDeleted(): boolean
    /**
     * Returns whether the file is externally modified. If the
     * [property`File:`location] is %NULL, returns %FALSE.
     * 
     * To have an up-to-date value, you must first call
     * [method`File`.check_file_on_disk].
     */
    isExternallyModified(): boolean
    /**
     * Returns whether the file is local. If the [property`File:`location] is %NULL,
     * returns %FALSE.
     */
    isLocal(): boolean
    /**
     * Returns whether the file is read-only. If the
     * [property`File:`location] is %NULL, returns %FALSE.
     * 
     * To have an up-to-date value, you must first call
     * [method`File`.check_file_on_disk].
     */
    isReadonly(): boolean
    /**
     * Sets the location.
     * @param location the new #GFile, or %NULL.
     */
    setLocation(location: Gio.File | null): void

    // Class property signals of GtkSource-5.GtkSource.File

    connect(sigName: "notify::compression-type", callback: any): number
    on(sigName: "notify::compression-type", callback: any): number
    once(sigName: "notify::compression-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::compression-type", ...args: any[]): void
    connect(sigName: "notify::encoding", callback: any): number
    on(sigName: "notify::encoding", callback: any): number
    once(sigName: "notify::encoding", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::encoding", ...args: any[]): void
    connect(sigName: "notify::location", callback: any): number
    on(sigName: "notify::location", callback: any): number
    once(sigName: "notify::location", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::newline-type", callback: any): number
    on(sigName: "notify::newline-type", callback: any): number
    once(sigName: "notify::newline-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::newline-type", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * On-disk representation of a [class`Buffer]`.
 * 
 * A `GtkSourceFile` object is the on-disk representation of a [class`Buffer]`.
 * With a `GtkSourceFile`, you can create and configure a [class`FileLoader]`
 * and [class`FileSaver]` which take by default the values of the
 * `GtkSourceFile` properties (except for the file loader which auto-detect some
 * properties). On a successful load or save operation, the `GtkSourceFile`
 * properties are updated. If an operation fails, the `GtkSourceFile` properties
 * have still the previous valid values.
 * @class 
 */
export class File extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.File

    static name: string

    // Constructors of GtkSource-5.GtkSource.File

    constructor(config?: File.ConstructorProperties) 
    constructor() 
    static new(): File
    _init(config?: File.ConstructorProperties): void
}

export module FileLoader {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.FileLoader

        /**
         * The #GtkSourceBuffer to load the contents into. The
         * #GtkSourceFileLoader object has a weak reference to the buffer.
         */
        buffer?: Buffer | null
        /**
         * The #GtkSourceFile. The #GtkSourceFileLoader object has a weak
         * reference to the file.
         */
        file?: File | null
        /**
         * The #GInputStream to load. Useful for reading stdin. If this property
         * is set, the #GtkSourceFileLoader:location property is ignored.
         */
        inputStream?: Gio.InputStream | null
        /**
         * The #GFile to load. If the #GtkSourceFileLoader:input-stream is
         * %NULL, by default the location is taken from the #GtkSourceFile at
         * construction time.
         */
        location?: Gio.File | null
    }

}

export interface FileLoader {

    // Own properties of GtkSource-5.GtkSource.FileLoader

    /**
     * The #GtkSourceBuffer to load the contents into. The
     * #GtkSourceFileLoader object has a weak reference to the buffer.
     */
    readonly buffer: Buffer
    /**
     * The #GtkSourceFile. The #GtkSourceFileLoader object has a weak
     * reference to the file.
     */
    readonly file: File
    /**
     * The #GInputStream to load. Useful for reading stdin. If this property
     * is set, the #GtkSourceFileLoader:location property is ignored.
     */
    readonly inputStream: Gio.InputStream
    /**
     * The #GFile to load. If the #GtkSourceFileLoader:input-stream is
     * %NULL, by default the location is taken from the #GtkSourceFile at
     * construction time.
     */
    readonly location: Gio.File

    // Owm methods of GtkSource-5.GtkSource.FileLoader

    getBuffer(): Buffer
    getCompressionType(): CompressionType
    getEncoding(): Encoding
    getFile(): File
    getInputStream(): Gio.InputStream | null
    getLocation(): Gio.File | null
    getNewlineType(): NewlineType
    /**
     * Loads asynchronously the file or input stream contents into the [class`Buffer]`.
     * 
     * See the [iface`Gio`.AsyncResult] documentation to know how to use this
     * function.
     * @param ioPriority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param progressCallback function to call back with   progress information, or %NULL if progress information is not needed.
     * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
     */
    loadAsync(ioPriority: number, cancellable: Gio.Cancellable | null, progressCallback: Gio.FileProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a file loading started with [method`FileLoader`.load_async].
     * 
     * If the contents has been loaded, the following [class`File]` properties will
     * be updated: the location, the encoding, the newline type and the compression
     * type.
     * @param result a #GAsyncResult.
     */
    loadFinish(result: Gio.AsyncResult): boolean
    /**
     * Sets the candidate encodings for the file loading.
     * 
     * The encodings are tried in the same order as the list.
     * 
     * For convenience, `candidate_encodings` can contain duplicates. Only the first
     * occurrence of a duplicated encoding is kept in the list.
     * 
     * By default the candidate encodings are (in that order in the list):
     * 
     * 1. If set, the [class`File]`'s encoding as returned by [method`File`.get_encoding].
     * 2. The default candidates as returned by [func`Encoding`.get_default_candidates].
     * @param candidateEncodings a list of   #GtkSourceEncoding<!-- -->s.
     */
    setCandidateEncodings(candidateEncodings: Encoding[]): void

    // Class property signals of GtkSource-5.GtkSource.FileLoader

    connect(sigName: "notify::buffer", callback: any): number
    on(sigName: "notify::buffer", callback: any): number
    once(sigName: "notify::buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::file", callback: any): number
    on(sigName: "notify::file", callback: any): number
    once(sigName: "notify::file", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::input-stream", callback: any): number
    on(sigName: "notify::input-stream", callback: any): number
    once(sigName: "notify::input-stream", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::input-stream", ...args: any[]): void
    connect(sigName: "notify::location", callback: any): number
    on(sigName: "notify::location", callback: any): number
    once(sigName: "notify::location", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Load a file into a GtkSourceBuffer.
 * 
 * A `GtkSourceFileLoader` object permits to load the contents of a [iface`Gio`.File] or a
 * [class`Gio`.InputStream] into a [class`Buffer]`.
 * 
 * A file loader should be used only for one load operation, including errors
 * handling. If an error occurs, you can reconfigure the loader and relaunch the
 * operation with [method`FileLoader`.load_async].
 * 
 * Running a `GtkSourceFileLoader` is an undoable action for the
 * [class`Buffer]`.
 * 
 * After a file loading, the buffer is reset to the contents provided by the
 * [iface`Gio`.File] or [class`Gio`.InputStream], so the buffer is set as ???unmodified???, that is,
 * [method`Gtk`.TextBuffer.set_modified] is called with %FALSE. If the contents isn't
 * saved somewhere (for example if you load from stdin), then you should
 * probably call [method`Gtk`.TextBuffer.set_modified] with %TRUE after calling
 * [method`FileLoader`.load_finish].
 * @class 
 */
export class FileLoader extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.FileLoader

    static name: string

    // Constructors of GtkSource-5.GtkSource.FileLoader

    constructor(config?: FileLoader.ConstructorProperties) 
    /**
     * Creates a new `GtkSourceFileLoader` object. The contents is read from the
     * [class`File]`'s location.
     * 
     * If not already done, call [method`File`.set_location] before calling this constructor.
     * The previous location is anyway not needed, because as soon as the file loading begins,
     * the `buffer` is emptied.
     * @constructor 
     * @param buffer the #GtkSourceBuffer to load the contents into.
     * @param file the #GtkSourceFile.
     */
    constructor(buffer: Buffer, file: File) 
    /**
     * Creates a new `GtkSourceFileLoader` object. The contents is read from the
     * [class`File]`'s location.
     * 
     * If not already done, call [method`File`.set_location] before calling this constructor.
     * The previous location is anyway not needed, because as soon as the file loading begins,
     * the `buffer` is emptied.
     * @constructor 
     * @param buffer the #GtkSourceBuffer to load the contents into.
     * @param file the #GtkSourceFile.
     */
    static new(buffer: Buffer, file: File): FileLoader
    /**
     * Creates a new #GtkSourceFileLoader object. The contents is read from `stream`.
     * @constructor 
     * @param buffer the #GtkSourceBuffer to load the contents into.
     * @param file the #GtkSourceFile.
     * @param stream the #GInputStream to load, e.g. stdin.
     */
    static newFromStream(buffer: Buffer, file: File, stream: Gio.InputStream): FileLoader
    _init(config?: FileLoader.ConstructorProperties): void
}

export module FileSaver {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.FileSaver

        /**
         * The #GtkSourceBuffer to save. The #GtkSourceFileSaver object has a
         * weak reference to the buffer.
         */
        buffer?: Buffer | null
        /**
         * The compression type.
         */
        compressionType?: CompressionType | null
        /**
         * The file's encoding.
         */
        encoding?: Encoding | null
        /**
         * The #GtkSourceFile. The #GtkSourceFileSaver object has a weak
         * reference to the file.
         */
        file?: File | null
        /**
         * File saving flags.
         */
        flags?: FileSaverFlags | null
        /**
         * The #GFile where to save the buffer. By default the location is taken
         * from the #GtkSourceFile at construction time.
         */
        location?: Gio.File | null
        /**
         * The newline type.
         */
        newlineType?: NewlineType | null
    }

}

export interface FileSaver {

    // Own properties of GtkSource-5.GtkSource.FileSaver

    /**
     * The #GtkSourceBuffer to save. The #GtkSourceFileSaver object has a
     * weak reference to the buffer.
     */
    readonly buffer: Buffer
    /**
     * The compression type.
     */
    compressionType: CompressionType
    /**
     * The file's encoding.
     */
    encoding: Encoding
    /**
     * The #GtkSourceFile. The #GtkSourceFileSaver object has a weak
     * reference to the file.
     */
    readonly file: File
    /**
     * File saving flags.
     */
    flags: FileSaverFlags
    /**
     * The #GFile where to save the buffer. By default the location is taken
     * from the #GtkSourceFile at construction time.
     */
    readonly location: Gio.File
    /**
     * The newline type.
     */
    newlineType: NewlineType

    // Owm methods of GtkSource-5.GtkSource.FileSaver

    getBuffer(): Buffer
    getCompressionType(): CompressionType
    getEncoding(): Encoding
    getFile(): File
    getFlags(): FileSaverFlags
    getLocation(): Gio.File
    getNewlineType(): NewlineType
    /**
     * Saves asynchronously the buffer into the file.
     * 
     * See the [iface`Gio`.AsyncResult] documentation to know how to use this function.
     * @param ioPriority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param progressCallback function to call back with   progress information, or %NULL if progress information is not needed.
     * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
     */
    saveAsync(ioPriority: number, cancellable: Gio.Cancellable | null, progressCallback: Gio.FileProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a file saving started with [method`FileSaver`.save_async].
     * 
     * If the file has been saved successfully, the following [class`File]`
     * properties will be updated: the location, the encoding, the newline type and
     * the compression type.
     * 
     * Since the 3.20 version, [method`Gtk`.TextBuffer.set_modified] is called with %FALSE
     * if the file has been saved successfully.
     * @param result a #GAsyncResult.
     */
    saveFinish(result: Gio.AsyncResult): boolean
    /**
     * Sets the compression type. By default the compression type is taken from the
     * #GtkSourceFile.
     * @param compressionType the new compression type.
     */
    setCompressionType(compressionType: CompressionType): void
    /**
     * Sets the encoding. If `encoding` is %NULL, the UTF-8 encoding will be set.
     * 
     * By default the encoding is taken from the #GtkSourceFile.
     * @param encoding the new encoding, or %NULL for UTF-8.
     */
    setEncoding(encoding: Encoding | null): void
    setFlags(flags: FileSaverFlags): void
    /**
     * Sets the newline type. By default the newline type is taken from the
     * #GtkSourceFile.
     * @param newlineType the new newline type.
     */
    setNewlineType(newlineType: NewlineType): void

    // Class property signals of GtkSource-5.GtkSource.FileSaver

    connect(sigName: "notify::buffer", callback: any): number
    on(sigName: "notify::buffer", callback: any): number
    once(sigName: "notify::buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::compression-type", callback: any): number
    on(sigName: "notify::compression-type", callback: any): number
    once(sigName: "notify::compression-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::compression-type", ...args: any[]): void
    connect(sigName: "notify::encoding", callback: any): number
    on(sigName: "notify::encoding", callback: any): number
    once(sigName: "notify::encoding", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::encoding", ...args: any[]): void
    connect(sigName: "notify::file", callback: any): number
    on(sigName: "notify::file", callback: any): number
    once(sigName: "notify::file", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::flags", callback: any): number
    on(sigName: "notify::flags", callback: any): number
    once(sigName: "notify::flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::location", callback: any): number
    on(sigName: "notify::location", callback: any): number
    once(sigName: "notify::location", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::newline-type", callback: any): number
    on(sigName: "notify::newline-type", callback: any): number
    once(sigName: "notify::newline-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::newline-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Save a [class`Buffer]` into a file.
 * 
 * A `GtkSourceFileSaver` object permits to save a [class`Buffer]` into a
 * [iface`Gio`.File].
 * 
 * A file saver should be used only for one save operation, including errors
 * handling. If an error occurs, you can reconfigure the saver and relaunch the
 * operation with [method`FileSaver`.save_async].
 * @class 
 */
export class FileSaver extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.FileSaver

    static name: string

    // Constructors of GtkSource-5.GtkSource.FileSaver

    constructor(config?: FileSaver.ConstructorProperties) 
    /**
     * Creates a new #GtkSourceFileSaver object. The `buffer` will be saved to the
     * [class`File]`'s location.
     * 
     * This constructor is suitable for a simple "save" operation, when the `file`
     * already contains a non-%NULL [property`File:`location].
     * @constructor 
     * @param buffer the #GtkSourceBuffer to save.
     * @param file the #GtkSourceFile.
     */
    constructor(buffer: Buffer, file: File) 
    /**
     * Creates a new #GtkSourceFileSaver object. The `buffer` will be saved to the
     * [class`File]`'s location.
     * 
     * This constructor is suitable for a simple "save" operation, when the `file`
     * already contains a non-%NULL [property`File:`location].
     * @constructor 
     * @param buffer the #GtkSourceBuffer to save.
     * @param file the #GtkSourceFile.
     */
    static new(buffer: Buffer, file: File): FileSaver
    /**
     * Creates a new #GtkSourceFileSaver object with a target location.
     * 
     * When the file saving is finished successfully, `target_location` is set to the `file'`s
     * [property`File:`location] property. If an error occurs, the previous valid
     * location is still available in [class`File]`.
     * 
     * This constructor is suitable for a "save as" operation, or for saving a new
     * buffer for the first time.
     * @constructor 
     * @param buffer the #GtkSourceBuffer to save.
     * @param file the #GtkSourceFile.
     * @param targetLocation the #GFile where to save the buffer to.
     */
    static newWithTarget(buffer: Buffer, file: File, targetLocation: Gio.File): FileSaver
    _init(config?: FileSaver.ConstructorProperties): void
}

export module Gutter {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.Gutter

        /**
         * The #GtkSourceView of the gutter.
         */
        view?: View | null
        /**
         * The text window type on which the window is placed.
         */
        windowType?: Gtk.TextWindowType | null
    }

}

export interface Gutter extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of GtkSource-5.GtkSource.Gutter

    /**
     * The #GtkSourceView of the gutter.
     */
    readonly view: View
    /**
     * The text window type on which the window is placed.
     */
    readonly windowType: Gtk.TextWindowType

    // Owm methods of GtkSource-5.GtkSource.Gutter

    getView(): View
    /**
     * Insert `renderer` into the gutter. If `renderer` is yet unowned then gutter
     * claims its ownership. Otherwise just increases renderer's reference count.
     * `renderer` cannot be already inserted to another gutter.
     * @param renderer a gutter renderer (must inherit from #GtkSourceGutterRenderer).
     * @param position the renderer position.
     */
    insert(renderer: GutterRenderer, position: number): boolean
    remove(renderer: GutterRenderer): void
    /**
     * Reorders `renderer` in `gutter` to new `position`.
     * @param renderer a #GtkCellRenderer.
     * @param position the new renderer position.
     */
    reorder(renderer: GutterRenderer, position: number): void

    // Class property signals of GtkSource-5.GtkSource.Gutter

    connect(sigName: "notify::view", callback: any): number
    on(sigName: "notify::view", callback: any): number
    once(sigName: "notify::view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: "notify::window-type", callback: any): number
    on(sigName: "notify::window-type", callback: any): number
    once(sigName: "notify::window-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::window-type", ...args: any[]): void
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
 * Gutter object for [class`View]`.
 * 
 * The `GtkSourceGutter` object represents the left or right gutter of the text
 * view. It is used by [class`View]` to draw the line numbers and
 * [class`Mark]`s that might be present on a line. By packing
 * additional [class`GutterRenderer]` objects in the gutter, you can extend the
 * gutter with your own custom drawings.
 * 
 * To get a `GtkSourceGutter`, use the [method`View`.get_gutter] function.
 * 
 * The gutter works very much the same way as cells rendered in a [class`Gtk`.TreeView].
 * The concept is similar, with the exception that the gutter does not have an
 * underlying [iface`Gtk`.TreeModel]. The builtin line number renderer is at position
 * %GTK_SOURCE_VIEW_GUTTER_POSITION_LINES (-30) and the marks renderer is at
 * %GTK_SOURCE_VIEW_GUTTER_POSITION_MARKS (-20). The gutter sorts the renderers
 * in ascending order, from left to right. So the marks are displayed on the
 * right of the line numbers.
 * @class 
 */
export class Gutter extends Gtk.Widget {

    // Own properties of GtkSource-5.GtkSource.Gutter

    static name: string

    // Constructors of GtkSource-5.GtkSource.Gutter

    constructor(config?: Gutter.ConstructorProperties) 
    _init(config?: Gutter.ConstructorProperties): void
}

export module GutterLines {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface GutterLines {

    // Owm methods of GtkSource-5.GtkSource.GutterLines

    /**
     * Adds the class `name` to `line`.
     * 
     * `name` will be converted to a [alias`GLib`.Quark] as part of this process. A
     * faster version of this function is available via
     * [method`GutterLines`.add_qclass] for situations where the [alias`GLib`.Quark] is
     * known ahead of time.
     * @param line a line number starting from zero
     * @param name a class name
     */
    addClass(line: number, name: string): void
    /**
     * Adds the class denoted by `qname` to `line`.
     * 
     * You may check if a line has `qname` by calling
     * [method`GutterLines`.has_qclass].
     * 
     * You can remove `qname` by calling
     * [method`GutterLines`.remove_qclass].
     * @param line a line number starting from zero
     * @param qname a class name as a #GQuark
     */
    addQclass(line: number, qname: GLib.Quark): void
    /**
     * Gets the [class`Gtk`.TextBuffer] that the `GtkSourceGutterLines` represents.
     */
    getBuffer(): Gtk.TextBuffer
    /**
     * Gets the line number (starting from 0) for the first line that is
     * user visible.
     */
    getFirst(): number
    /**
     * Gets a #GtkTextIter for the current buffer at `line`
     * @param line the line number
     */
    getIterAtLine(line: number): /* iter */ Gtk.TextIter
    /**
     * Gets the line number (starting from 0) for the last line that is
     * user visible.
     */
    getLast(): number
    /**
     * Gets the Y range for a line based on `mode`.
     * 
     * The value for `y` is relative to the renderers widget coordinates.
     * @param line a line number starting from zero
     * @param mode a #GtkSourceGutterRendererAlignmentMode
     */
    getLineYrange(line: number, mode: GutterRendererAlignmentMode): [ /* y */ number, /* height */ number ]
    /**
     * Gets the [class`Gtk`.TextView] that the `GtkSourceGutterLines` represents.
     */
    getView(): Gtk.TextView
    /**
     * Checks to see if the line has any GQuark classes set. This can be
     * used to help renderer implementations avoid work if nothing has
     * been set on the class.
     * @param line a line contained within `lines`
     */
    hasAnyClass(line: number): boolean
    /**
     * Checks to see if [method`GutterLines`.add_class] was called with
     * the `name` for `line`.
     * 
     * A faster version of this function is provided via
     * [method`GutterLines`.has_qclass] for situations where the quark
     * is known ahead of time.
     * @param line a line number starting from zero
     * @param name a class name that may be converted, to a #GQuark
     */
    hasClass(line: number, name: string): boolean
    /**
     * Checks to see if [method`GutterLines`.add_qclass] was called with
     * the quark denoted by `qname` for `line`.
     * @param line a line number starting from zero
     * @param qname a #GQuark containing the class name
     */
    hasQclass(line: number, qname: GLib.Quark): boolean
    /**
     * Checks to see if `line` contains the insertion cursor.
     * @param line a line number starting from zero
     */
    isCursor(line: number): boolean
    /**
     * Checks to see if `line` is marked as prelit. Generally, this means
     * the mouse pointer is over the line within the gutter.
     * @param line a line number starting from zero
     */
    isPrelit(line: number): boolean
    /**
     * Checks to see if the view had a selection and if that selection overlaps
     * `line` in some way.
     * @param line a line number starting from zero
     */
    isSelected(line: number): boolean
    /**
     * Removes the class matching `name` from `line`.
     * 
     * A faster version of this function is available via
     * [method`GutterLines`.remove_qclass] for situations where the
     * #GQuark is known ahead of time.
     * @param line a line number starting from zero
     * @param name a class name
     */
    removeClass(line: number, name: string): void
    /**
     * Reverses a call to [method`GutterLines`.add_qclass] by removing
     * the [alias`GLib`.Quark] matching `qname`.
     * @param line a line number starting from zero
     * @param qname a #GQuark to remove from `line`
     */
    removeQclass(line: number, qname: GLib.Quark): void

    // Class property signals of GtkSource-5.GtkSource.GutterLines

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Collected information about visible lines.
 * 
 * The `GtkSourceGutterLines` object is used to collect information about
 * visible lines.
 * 
 * Use this from your [signal`GutterRenderer:`:query-data] to collect the
 * necessary information on visible lines. Doing so reduces the number of
 * passes through the text btree allowing GtkSourceView to reach more
 * frames-per-second while performing kinetic scrolling.
 * @class 
 */
export class GutterLines extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.GutterLines

    static name: string

    // Constructors of GtkSource-5.GtkSource.GutterLines

    constructor(config?: GutterLines.ConstructorProperties) 
    _init(config?: GutterLines.ConstructorProperties): void
}

export module GutterRenderer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate`
     */
    export interface ActivateSignalCallback {
        (iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number): void
    }

    /**
     * Signal callback interface for `query-activatable`
     */
    export interface QueryActivatableSignalCallback {
        (iter: Gtk.TextIter, area: Gdk.Rectangle): boolean
    }

    /**
     * Signal callback interface for `query-data`
     */
    export interface QueryDataSignalCallback {
        (object: GObject.Object, p0: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.GutterRenderer

        /**
         * The alignment mode of the renderer.
         * 
         * This can be used to indicate that in the case a cell spans multiple lines (due to text wrapping)
         * the alignment should work on either the full cell, the first line or the last line.
         */
        alignmentMode?: GutterRendererAlignmentMode | null
        /**
         * The horizontal alignment of the renderer.
         * 
         * Set to 0 for a left alignment. 1 for a right alignment. And 0.5 for centering the cells.
         * A value lower than 0 doesn't modify the alignment.
         */
        xalign?: number | null
        /**
         * The left and right padding of the renderer.
         */
        xpad?: number | null
        /**
         * The vertical alignment of the renderer.
         * 
         * Set to 0 for a top alignment. 1 for a bottom alignment. And 0.5 for centering the cells.
         * A value lower than 0 doesn't modify the alignment.
         */
        yalign?: number | null
        /**
         * The top and bottom padding of the renderer.
         */
        ypad?: number | null
    }

}

export interface GutterRenderer extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of GtkSource-5.GtkSource.GutterRenderer

    /**
     * The alignment mode of the renderer.
     * 
     * This can be used to indicate that in the case a cell spans multiple lines (due to text wrapping)
     * the alignment should work on either the full cell, the first line or the last line.
     */
    alignmentMode: GutterRendererAlignmentMode
    /**
     * Contains information about the lines to be rendered.
     * 
     * It should be used by #GtkSourceGutterRenderer implementations from [vfunc`Gtk`.Widget.snapshot].
     */
    readonly lines: GutterLines
    /**
     * The view on which the renderer is placed.
     */
    readonly view: Gtk.TextView
    /**
     * The horizontal alignment of the renderer.
     * 
     * Set to 0 for a left alignment. 1 for a right alignment. And 0.5 for centering the cells.
     * A value lower than 0 doesn't modify the alignment.
     */
    xalign: number
    /**
     * The left and right padding of the renderer.
     */
    xpad: number
    /**
     * The vertical alignment of the renderer.
     * 
     * Set to 0 for a top alignment. 1 for a bottom alignment. And 0.5 for centering the cells.
     * A value lower than 0 doesn't modify the alignment.
     */
    yalign: number
    /**
     * The top and bottom padding of the renderer.
     */
    ypad: number

    // Own fields of GtkSource-5.GtkSource.GutterRenderer

    parentInstance: any

    // Owm methods of GtkSource-5.GtkSource.GutterRenderer

    // Has conflict: activate(iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number): void
    /**
     * Locates where to render content that is `width` x `height` based on
     * the renderers alignment and padding.
     * 
     * The location will be placed into `x` and `y` and is relative to the
     * renderer's coordinates.
     * 
     * It is encouraged that renderers use this function when snappshotting
     * to ensure consistent placement of their contents.
     * @param line the line number for content
     * @param width the width of the content to draw
     * @param height the height of the content to draw
     */
    alignCell(line: number, width: number, height: number): [ /* x */ number, /* y */ number ]
    /**
     * Get the alignment mode.
     * 
     * The alignment mode describes the manner in which the
     * renderer is aligned (see [property`GutterRenderer:`xalign] and
     * [property`GutterRenderer:`yalign]).
     */
    getAlignmentMode(): GutterRendererAlignmentMode
    /**
     * Gets the [class`Buffer]` for which the gutter renderer is drawing.
     */
    getBuffer(): Buffer | null
    /**
     * Get the view associated to the gutter renderer
     */
    getView(): View
    /**
     * Gets the `xalign` property.
     * 
     * This may be used to adjust where within the cell rectangle the renderer will draw.
     */
    getXalign(): number
    /**
     * Gets the `xpad` property.
     * 
     * This may be used to adjust the cell rectangle that the renderer will use to draw.
     */
    getXpad(): number
    /**
     * Gets the `yalign` property.
     * 
     * This may be used to adjust where within the cell rectangle the renderer will draw.
     */
    getYalign(): number
    /**
     * Gets the `ypad` property.
     * 
     * This may be used to adjust the cell rectangle that the renderer will use to draw.
     */
    getYpad(): number
    // Has conflict: queryActivatable(iter: Gtk.TextIter, area: Gdk.Rectangle): boolean
    /**
     * Set the alignment mode. The alignment mode describes the manner in which the
     * renderer is aligned (see [property`GutterRenderer:`xalign] and
     * [property`GutterRenderer:`yalign]).
     * @param mode a #GtkSourceGutterRendererAlignmentMode
     */
    setAlignmentMode(mode: GutterRendererAlignmentMode): void
    /**
     * Adjusts the `xalign` property.
     * 
     * This may be used to adjust where within the cell rectangle the renderer will draw.
     * @param xalign the Y padding for the drawing cell
     */
    setXalign(xalign: number): void
    /**
     * Adjusts the `xpad` property.
     * 
     * This may be used to adjust the cell rectangle that the renderer will use to draw.
     * @param xpad the Y padding for the drawing cell
     */
    setXpad(xpad: number): void
    /**
     * Adjusts the `yalign` property.
     * 
     * This may be used to adjust where within the cell rectangle the renderer will draw.
     * @param yalign the Y padding for the drawing cell
     */
    setYalign(yalign: number): void
    /**
     * Adjusts the `ypad` property.
     * 
     * This may be used to adjust the cell rectangle that the renderer will use to draw.
     * @param ypad the Y padding for the drawing cell
     */
    setYpad(ypad: number): void

    // Own virtual methods of GtkSource-5.GtkSource.GutterRenderer

    /**
     * Emits the [signal`GutterRenderer:`:activate] signal of the renderer. This is
     * called from [class`Gutter]` and should never have to be called manually.
     * @virtual 
     * @param iter a #GtkTextIter at the start of the line where the renderer is activated
     * @param area a #GdkRectangle of the cell area where the renderer is activated
     * @param button the button that was pressed
     * @param state a #GdkModifierType
     * @param nPresses the number of button presses
     */
    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number): void

    // Overloads of activate

    /**
     * For widgets that can be ???activated??? (buttons, menu items, etc.),
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
    begin(lines: GutterLines): void
    /**
     * This is called when the text buffer changes for `renderer`.
     * @virtual 
     * @param oldBuffer the old #GtkTextBuffer.
     */
    changeBuffer(oldBuffer: Buffer | null): void
    /**
     * This is called when the text view changes for `renderer`.
     * @virtual 
     * @param oldView the old #GtkTextView.
     */
    changeView(oldView: View | null): void
    end(): void
    /**
     * Get whether the renderer is activatable at the location provided. This is
     * called from [class`Gutter]` to determine whether a renderer is activatable
     * using the mouse pointer.
     * @virtual 
     * @param iter a #GtkTextIter at the start of the line to be activated
     * @param area a #GdkRectangle of the cell area to be activated
     */
    queryActivatable(iter: Gtk.TextIter, area: Gdk.Rectangle): boolean
    queryData(lines: GutterLines, line: number): void
    snapshotLine(snapshot: Gtk.Snapshot, lines: GutterLines, line: number): void

    // Own signals of GtkSource-5.GtkSource.GutterRenderer

    connect(sigName: "activate", callback: GutterRenderer.ActivateSignalCallback): number
    on(sigName: "activate", callback: GutterRenderer.ActivateSignalCallback): number
    once(sigName: "activate", callback: GutterRenderer.ActivateSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "activate", area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number, ...args: any[]): void
    connect(sigName: "query-activatable", callback: GutterRenderer.QueryActivatableSignalCallback): number
    on(sigName: "query-activatable", callback: GutterRenderer.QueryActivatableSignalCallback): number
    once(sigName: "query-activatable", callback: GutterRenderer.QueryActivatableSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "query-activatable", area: Gdk.Rectangle, ...args: any[]): void
    connect(sigName: "query-data", callback: GutterRenderer.QueryDataSignalCallback): number
    on(sigName: "query-data", callback: GutterRenderer.QueryDataSignalCallback): number
    once(sigName: "query-data", callback: GutterRenderer.QueryDataSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "query-data", p0: number, ...args: any[]): void

    // Class property signals of GtkSource-5.GtkSource.GutterRenderer

    connect(sigName: "notify::alignment-mode", callback: any): number
    on(sigName: "notify::alignment-mode", callback: any): number
    once(sigName: "notify::alignment-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::alignment-mode", ...args: any[]): void
    connect(sigName: "notify::lines", callback: any): number
    on(sigName: "notify::lines", callback: any): number
    once(sigName: "notify::lines", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::lines", ...args: any[]): void
    connect(sigName: "notify::view", callback: any): number
    on(sigName: "notify::view", callback: any): number
    once(sigName: "notify::view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: any): number
    on(sigName: "notify::xalign", callback: any): number
    once(sigName: "notify::xalign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: any): number
    on(sigName: "notify::xpad", callback: any): number
    once(sigName: "notify::xpad", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: any): number
    on(sigName: "notify::yalign", callback: any): number
    once(sigName: "notify::yalign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: any): number
    on(sigName: "notify::ypad", callback: any): number
    once(sigName: "notify::ypad", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ypad", ...args: any[]): void
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
 * Gutter cell renderer.
 * 
 * A `GtkSourceGutterRenderer` represents a column in a [class`Gutter]`. The
 * column contains one cell for each visible line of the [class`Gtk`.TextBuffer]. Due to
 * text wrapping, a cell can thus span multiple lines of the [class`Gtk`.TextView]. In
 * this case, [enum`GutterRendererAlignmentMode]` controls the alignment of
 * the cell.
 * 
 * The gutter renderer is a [class`Gtk`.Widget] and is measured using the normal widget
 * measurement facilities. The width of the gutter will be determined by the
 * measurements of the gutter renderers.
 * 
 * The width of a gutter renderer generally takes into account the entire text
 * buffer. For instance, to display the line numbers, if the buffer contains 100
 * lines, the gutter renderer will always set its width such as three digits can
 * be printed, even if only the first 20 lines are shown. Another strategy is to
 * take into account only the visible lines.  In this case, only two digits are
 * necessary to display the line numbers of the first 20 lines. To take another
 * example, the gutter renderer for [class`Mark]`s doesn't need to take
 * into account the text buffer to announce its width. It only depends on the
 * icons size displayed in the gutter column.
 * 
 * When the available size to render a cell is greater than the required size to
 * render the cell contents, the cell contents can be aligned horizontally and
 * vertically with [method`GutterRenderer`.set_alignment_mode].
 * 
 * The cells rendering occurs using [vfunc`Gtk`.Widget.snapshot]. Implementations
 * should use `gtk_source_gutter_renderer_get_lines()` to retrieve information
 * about the lines to be rendered. To help with aligning content which takes
 * into account the padding and alignment of a cell, implementations may call
 * [method`GutterRenderer`.align_cell] for a given line number with the
 * width and height measurement of the content they width to render.
 * @class 
 */
export class GutterRenderer extends Gtk.Widget {

    // Own properties of GtkSource-5.GtkSource.GutterRenderer

    static name: string

    // Constructors of GtkSource-5.GtkSource.GutterRenderer

    constructor(config?: GutterRenderer.ConstructorProperties) 
    _init(config?: GutterRenderer.ConstructorProperties): void
}

export module GutterRendererPixbuf {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, GutterRenderer.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.GutterRendererPixbuf

        gicon?: Gio.Icon | null
        iconName?: string | null
        paintable?: Gdk.Paintable | null
        pixbuf?: GdkPixbuf.Pixbuf | null
    }

}

export interface GutterRendererPixbuf extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of GtkSource-5.GtkSource.GutterRendererPixbuf

    gicon: Gio.Icon
    iconName: string
    paintable: Gdk.Paintable
    pixbuf: GdkPixbuf.Pixbuf

    // Own fields of GtkSource-5.GtkSource.GutterRendererPixbuf

    parentInstance: any

    // Owm methods of GtkSource-5.GtkSource.GutterRendererPixbuf

    /**
     * Get the gicon of the renderer
     */
    getGicon(): Gio.Icon
    getIconName(): string
    /**
     * Gets a [iface`Gdk`.Paintable] that was set with
     * [method`GutterRendererPixbuf`.set_paintable]
     */
    getPaintable(): Gdk.Paintable | null
    /**
     * Get the pixbuf of the renderer.
     */
    getPixbuf(): GdkPixbuf.Pixbuf
    /**
     * Allows overlaying a paintable on top of any other image that
     * has been set for the pixbuf. This will be applied when the
     * widget is next snapshot.
     * @param paintable a #GdkPaintable
     */
    overlayPaintable(paintable: Gdk.Paintable): void
    setGicon(icon: Gio.Icon | null): void
    setIconName(iconName: string | null): void
    setPaintable(paintable: Gdk.Paintable | null): void
    setPixbuf(pixbuf: GdkPixbuf.Pixbuf | null): void

    // Conflicting methods

    /**
     * Emits the [signal`GutterRenderer:`:activate] signal of the renderer. This is
     * called from [class`Gutter]` and should never have to be called manually.
     * @virtual 
     * @param iter a #GtkTextIter at the start of the line where the renderer is activated
     * @param area a #GdkRectangle of the cell area where the renderer is activated
     * @param button the button that was pressed
     * @param state a #GdkModifierType
     * @param nPresses the number of button presses
     */
    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number): void

    // Overloads of activate

    /**
     * For widgets that can be ???activated??? (buttons, menu items, etc.),
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
     * For widgets that can be ???activated??? (buttons, menu items, etc.),
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

    // Class property signals of GtkSource-5.GtkSource.GutterRendererPixbuf

    connect(sigName: "notify::gicon", callback: any): number
    on(sigName: "notify::gicon", callback: any): number
    once(sigName: "notify::gicon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::gicon", ...args: any[]): void
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
    connect(sigName: "notify::pixbuf", callback: any): number
    on(sigName: "notify::pixbuf", callback: any): number
    once(sigName: "notify::pixbuf", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixbuf", ...args: any[]): void
    connect(sigName: "notify::alignment-mode", callback: any): number
    on(sigName: "notify::alignment-mode", callback: any): number
    once(sigName: "notify::alignment-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::alignment-mode", ...args: any[]): void
    connect(sigName: "notify::lines", callback: any): number
    on(sigName: "notify::lines", callback: any): number
    once(sigName: "notify::lines", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::lines", ...args: any[]): void
    connect(sigName: "notify::view", callback: any): number
    on(sigName: "notify::view", callback: any): number
    once(sigName: "notify::view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: any): number
    on(sigName: "notify::xalign", callback: any): number
    once(sigName: "notify::xalign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: any): number
    on(sigName: "notify::xpad", callback: any): number
    once(sigName: "notify::xpad", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: any): number
    on(sigName: "notify::yalign", callback: any): number
    once(sigName: "notify::yalign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: any): number
    on(sigName: "notify::ypad", callback: any): number
    once(sigName: "notify::ypad", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ypad", ...args: any[]): void
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
 * Renders a pixbuf in the gutter.
 * 
 * A `GtkSourceGutterRendererPixbuf` can be used to render an image in a cell of
 * [class`Gutter]`.
 * @class 
 */
export class GutterRendererPixbuf extends GutterRenderer {

    // Own properties of GtkSource-5.GtkSource.GutterRendererPixbuf

    static name: string

    // Constructors of GtkSource-5.GtkSource.GutterRendererPixbuf

    constructor(config?: GutterRendererPixbuf.ConstructorProperties) 
    /**
     * Create a new #GtkSourceGutterRendererPixbuf.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GtkSourceGutterRendererPixbuf.
     * @constructor 
     */
    static new(): GutterRendererPixbuf
    _init(config?: GutterRendererPixbuf.ConstructorProperties): void
}

export module GutterRendererText {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, GutterRenderer.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.GutterRendererText

        markup?: string | null
        text?: string | null
    }

}

export interface GutterRendererText extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of GtkSource-5.GtkSource.GutterRendererText

    markup: string
    text: string

    // Own fields of GtkSource-5.GtkSource.GutterRendererText

    parentInstance: any

    // Owm methods of GtkSource-5.GtkSource.GutterRendererText

    /**
     * Measures the text provided using the pango layout used by the
     * #GtkSourceGutterRendererText.
     * @param text the text to measure.
     */
    measure(text: string): [ /* width */ number, /* height */ number ]

    // Overloads of measure

    /**
     * Measures `widget` in the orientation `orientation` and for the given `for_size`.
     * 
     * As an example, if `orientation` is %GTK_ORIENTATION_HORIZONTAL and `for_size`
     * is 300, this functions will compute the minimum and natural width of `widget`
     * if it is allocated at a height of 300 pixels.
     * 
     * See [GtkWidget???s geometry management section](class.Widget.html#height-for-width-geometry-management) for
     * a more details on implementing `GtkWidgetClass.measure()`.
     * @virtual 
     * @param orientation the orientation to measure
     * @param forSize Size for the opposite of `orientation,` i.e.   if `orientation` is %GTK_ORIENTATION_HORIZONTAL, this is   the height the widget should be measured with. The %GTK_ORIENTATION_VERTICAL   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
     */
    measure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number, /* natural */ number, /* minimumBaseline */ number, /* naturalBaseline */ number ]
    /**
     * Measures the pango markup provided using the pango layout used by the
     * #GtkSourceGutterRendererText.
     * @param markup the pango markup to measure.
     */
    measureMarkup(markup: string): [ /* width */ number, /* height */ number ]
    setMarkup(markup: string, length: number): void
    setText(text: string, length: number): void

    // Conflicting methods

    /**
     * Emits the [signal`GutterRenderer:`:activate] signal of the renderer. This is
     * called from [class`Gutter]` and should never have to be called manually.
     * @virtual 
     * @param iter a #GtkTextIter at the start of the line where the renderer is activated
     * @param area a #GdkRectangle of the cell area where the renderer is activated
     * @param button the button that was pressed
     * @param state a #GdkModifierType
     * @param nPresses the number of button presses
     */
    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number): void

    // Overloads of activate

    /**
     * For widgets that can be ???activated??? (buttons, menu items, etc.),
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
     * For widgets that can be ???activated??? (buttons, menu items, etc.),
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

    // Class property signals of GtkSource-5.GtkSource.GutterRendererText

    connect(sigName: "notify::markup", callback: any): number
    on(sigName: "notify::markup", callback: any): number
    once(sigName: "notify::markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::markup", ...args: any[]): void
    connect(sigName: "notify::text", callback: any): number
    on(sigName: "notify::text", callback: any): number
    once(sigName: "notify::text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::alignment-mode", callback: any): number
    on(sigName: "notify::alignment-mode", callback: any): number
    once(sigName: "notify::alignment-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::alignment-mode", ...args: any[]): void
    connect(sigName: "notify::lines", callback: any): number
    on(sigName: "notify::lines", callback: any): number
    once(sigName: "notify::lines", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::lines", ...args: any[]): void
    connect(sigName: "notify::view", callback: any): number
    on(sigName: "notify::view", callback: any): number
    once(sigName: "notify::view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: any): number
    on(sigName: "notify::xalign", callback: any): number
    once(sigName: "notify::xalign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: any): number
    on(sigName: "notify::xpad", callback: any): number
    once(sigName: "notify::xpad", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: any): number
    on(sigName: "notify::yalign", callback: any): number
    once(sigName: "notify::yalign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: any): number
    on(sigName: "notify::ypad", callback: any): number
    once(sigName: "notify::ypad", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ypad", ...args: any[]): void
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
 * Renders text in the gutter.
 * 
 * A `GtkSourceGutterRendererText` can be used to render text in a cell of
 * [class`Gutter]`.
 * @class 
 */
export class GutterRendererText extends GutterRenderer {

    // Own properties of GtkSource-5.GtkSource.GutterRendererText

    static name: string

    // Constructors of GtkSource-5.GtkSource.GutterRendererText

    constructor(config?: GutterRendererText.ConstructorProperties) 
    /**
     * Create a new #GtkSourceGutterRendererText.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GtkSourceGutterRendererText.
     * @constructor 
     */
    static new(): GutterRendererText
    _init(config?: GutterRendererText.ConstructorProperties): void
}

export module Hover {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.Hover

        /**
         * Contains the number of milliseconds to delay before showing the hover assistant.
         */
        hoverDelay?: number | null
    }

}

export interface Hover {

    // Own properties of GtkSource-5.GtkSource.Hover

    /**
     * Contains the number of milliseconds to delay before showing the hover assistant.
     */
    hoverDelay: number

    // Owm methods of GtkSource-5.GtkSource.Hover

    addProvider(provider: HoverProvider): void
    removeProvider(provider: HoverProvider): void

    // Class property signals of GtkSource-5.GtkSource.Hover

    connect(sigName: "notify::hover-delay", callback: any): number
    on(sigName: "notify::hover-delay", callback: any): number
    once(sigName: "notify::hover-delay", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hover-delay", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Interactive tooltips.
 * 
 * `GtkSourceHover` allows a [class`View]` to provide contextual information.
 * When enabled, if the user hovers over a word in the text editor, a series
 * of registered [iface`HoverProvider]` can populate a [class`HoverDisplay]`
 * with useful information.
 * 
 * To enable call [method`View`.get_hover] and add [iface`HoverProvider]`
 * using [method`Hover`.add_provider]. To disable, remove all registered
 * providers with [method`Hover`.remove_provider].
 * 
 * You can change how long to wait to display the interactive tooltip by
 * setting the [property`Hover:`hover-delay] property in milliseconds.
 * @class 
 */
export class Hover extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.Hover

    static name: string

    // Constructors of GtkSource-5.GtkSource.Hover

    constructor(config?: Hover.ConstructorProperties) 
    _init(config?: Hover.ConstructorProperties): void
}

export module HoverContext {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface HoverContext {

    // Owm methods of GtkSource-5.GtkSource.HoverContext

    /**
     * Gets the current word bounds of the hover.
     * 
     * If `begin` is non-%NULL, it will be set to the start position of the
     * current word being hovered.
     * 
     * If `end` is non-%NULL, it will be set to the end position for the
     * current word being hovered.
     */
    getBounds(): [ /* returnType */ boolean, /* begin */ Gtk.TextIter, /* end */ Gtk.TextIter ]
    /**
     * A convenience function to get the buffer.
     */
    getBuffer(): Buffer
    getIter(iter: Gtk.TextIter): boolean
    getView(): View

    // Class property signals of GtkSource-5.GtkSource.HoverContext

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Context for populating [class`HoverDisplay]` contents.
 * 
 * `GtkSourceHoverContext` contains information about the request to populate
 * contents for a [class`HoverDisplay]`.
 * 
 * It can be used to retrieve the [class`View]`, [class`Buffer]`, and
 * [struct`Gtk`.TextIter] for the regions of text which are being displayed.
 * 
 * Use [method`HoverContext`.get_bounds] to get the word that was
 * requested. [method`HoverContext`.get_iter] will get you the location
 * of the pointer when the request was made.
 * @class 
 */
export class HoverContext extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.HoverContext

    static name: string

    // Constructors of GtkSource-5.GtkSource.HoverContext

    constructor(config?: HoverContext.ConstructorProperties) 
    _init(config?: HoverContext.ConstructorProperties): void
}

export module HoverDisplay {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {
    }

}

export interface HoverDisplay extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Owm methods of GtkSource-5.GtkSource.HoverDisplay

    append(child: Gtk.Widget): void
    insertAfter(child: Gtk.Widget, sibling: Gtk.Widget): void

    // Overloads of insertAfter

    /**
     * Inserts `widget` into the child widget list of `parent`.
     * 
     * It will be placed after `previous_sibling,` or at the beginning if
     * `previous_sibling` is %NULL.
     * 
     * After calling this function, `gtk_widget_get_prev_sibling(widget)`
     * will return `previous_sibling`.
     * 
     * If `parent` is already set as the parent widget of `widget,` this
     * function can also be used to reorder `widget` in the child widget
     * list of `parent`.
     * 
     * This API is primarily meant for widget implementations; if you are
     * just using a widget, you *must* use its own API for adding children.
     * @param parent the parent `GtkWidget` to insert `widget` into
     * @param previousSibling the new previous sibling of `widget`
     */
    insertAfter(parent: Gtk.Widget, previousSibling: Gtk.Widget | null): void
    prepend(child: Gtk.Widget): void
    remove(child: Gtk.Widget): void

    // Class property signals of GtkSource-5.GtkSource.HoverDisplay

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
 * Display for interactive tooltips.
 * 
 * `GtkSourceHoverDisplay` is a [class`Gtk`.Widget] that may be populated with widgets
 * to be displayed to the user in interactive tooltips. The children widgets
 * are packed vertically using a [class`Gtk`.Box].
 * 
 * Implement the [iface`HoverProvider]` interface to be notified of when
 * to populate a `GtkSourceHoverDisplay` on behalf of the user.
 * @class 
 */
export class HoverDisplay extends Gtk.Widget {

    // Own properties of GtkSource-5.GtkSource.HoverDisplay

    static name: string

    // Constructors of GtkSource-5.GtkSource.HoverDisplay

    constructor(config?: HoverDisplay.ConstructorProperties) 
    _init(config?: HoverDisplay.ConstructorProperties): void
}

export module Language {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Language {

    // Own properties of GtkSource-5.GtkSource.Language

    readonly hidden: boolean
    readonly id: string
    readonly name: string
    readonly section: string

    // Owm methods of GtkSource-5.GtkSource.Language

    /**
     * Returns the globs associated to this language.
     * 
     * This is just an utility wrapper around [method`Language`.get_metadata] to
     * retrieve the "globs" metadata property and split it into an array.
     */
    getGlobs(): string[] | null
    /**
     * Returns whether the language should be hidden from the user.
     */
    getHidden(): boolean
    /**
     * Returns the ID of the language.
     * 
     * The ID is not locale-dependent.The returned string is owned by `language`
     * and should not be freed or modified.
     */
    getId(): string
    getMetadata(name: string): string | null
    /**
     * Returns the mime types associated to this language.
     * 
     * This is just an utility wrapper around [method`Language`.get_metadata] to
     * retrieve the "mimetypes" metadata property and split it into an
     * array.
     */
    getMimeTypes(): string[] | null
    /**
     * Returns the localized name of the language.
     * 
     * The returned string is owned by `language` and should not be freed
     * or modified.
     */
    getName(): string
    /**
     * Returns the localized section of the language.
     * 
     * Each language belong to a section (ex. HTML belongs to the
     * Markup section).
     * The returned string is owned by `language` and should not be freed
     * or modified.
     */
    getSection(): string
    /**
     * Returns the ID of the style to use if the specified `style_id`
     * is not present in the current style scheme.
     * @param styleId a style ID.
     */
    getStyleFallback(styleId: string): string | null
    /**
     * Returns the ids of the styles defined by this `language`.
     */
    getStyleIds(): string[] | null
    /**
     * Returns the name of the style with ID `style_id` defined by this `language`.
     * @param styleId a style ID.
     */
    getStyleName(styleId: string): string | null

    // Class property signals of GtkSource-5.GtkSource.Language

    connect(sigName: "notify::hidden", callback: any): number
    on(sigName: "notify::hidden", callback: any): number
    once(sigName: "notify::hidden", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hidden", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::section", callback: any): number
    on(sigName: "notify::section", callback: any): number
    once(sigName: "notify::section", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::section", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Represents a syntax highlighted language.
 * 
 * A `GtkSourceLanguage` represents a programming or markup language, affecting
 * syntax highlighting and [context classes](./class.Buffer.html#context-classes).
 * 
 * Use [class`LanguageManager]` to obtain a `GtkSourceLanguage` instance, and
 * [method`Buffer`.set_language] to apply it to a [class`Buffer]`.
 * @class 
 */
export class Language extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.Language

    static name: string

    // Constructors of GtkSource-5.GtkSource.Language

    constructor(config?: Language.ConstructorProperties) 
    _init(config?: Language.ConstructorProperties): void
}

export module LanguageManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.LanguageManager

        searchPath?: string[] | null
    }

}

export interface LanguageManager {

    // Own properties of GtkSource-5.GtkSource.LanguageManager

    readonly languageIds: string[]
    searchPath: string[]

    // Owm methods of GtkSource-5.GtkSource.LanguageManager

    /**
     * Appends `path` to the list of directories where the `manager` looks for
     * language files.
     * 
     * See [method`LanguageManager`.set_search_path] for details.
     * @param path a directory or a filename.
     */
    appendSearchPath(path: string): void
    /**
     * Gets the [class`Language]` identified by the given `id` in the language
     * manager.
     * @param id a language id.
     */
    getLanguage(id: string): Language | null
    /**
     * Returns the ids of the available languages.
     */
    getLanguageIds(): string[] | null
    /**
     * Gets the list directories where `lm` looks for language files.
     */
    getSearchPath(): string[]
    /**
     * Picks a [class`Language]` for given file name and content type,
     * according to the information in lang files.
     * 
     * Either `filename` or `content_type` may be %NULL. This function can be used as follows:
     * 
     * ```c
     * GtkSourceLanguage *lang;
     * GtkSourceLanguageManager *manager;
     * lm = gtk_source_language_manager_get_default ();
     * lang = gtk_source_language_manager_guess_language (manager, filename, NULL);
     * gtk_source_buffer_set_language (buffer, lang);
     * ```
     * 
     * or
     * 
     * ```c
     * GtkSourceLanguage *lang = NULL;
     * GtkSourceLanguageManager *manager;
     * gboolean result_uncertain;
     * gchar *content_type;
     * 
     * content_type = g_content_type_guess (filename, NULL, 0, &result_uncertain);
     * if (result_uncertain)
     *   {
     *     g_free (content_type);
     *     content_type = NULL;
     *   }
     * 
     * manager = gtk_source_language_manager_get_default ();
     * lang = gtk_source_language_manager_guess_language (manager, filename, content_type);
     * gtk_source_buffer_set_language (buffer, lang);
     * 
     * g_free (content_type);
     * ```
     * 
     * etc. Use [method`Language`.get_mime_types] and [method`Language`.get_globs]
     * if you need full control over file -> language mapping.
     * @param filename a filename in Glib filename encoding, or %NULL.
     * @param contentType a content type (as in GIO API), or %NULL.
     */
    guessLanguage(filename: string | null, contentType: string | null): Language | null
    /**
     * Prepends `path` to the list of directories where the `manager` looks
     * for language files.
     * 
     * See [method`LanguageManager`.set_search_path] for details.
     * @param path a directory or a filename.
     */
    prependSearchPath(path: string): void
    /**
     * Sets the list of directories where the `lm` looks for
     * language files.
     * 
     * If `dirs` is %NULL, the search path is reset to default.
     * 
     * At the moment this function can be called only before the
     * language files are loaded for the first time. In practice
     * to set a custom search path for a `GtkSourceLanguageManager`,
     * you have to call this function right after creating it.
     * 
     * Since GtkSourceView 5.4 this function will allow you to provide
     * paths in the form of "resource:///" URIs to embedded `GResource`s.
     * They must contain the path of a directory within the `GResource`.
     * @param dirs a %NULL-terminated array of   strings or %NULL.
     */
    setSearchPath(dirs: string[] | null): void

    // Class property signals of GtkSource-5.GtkSource.LanguageManager

    connect(sigName: "notify::language-ids", callback: any): number
    on(sigName: "notify::language-ids", callback: any): number
    once(sigName: "notify::language-ids", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::language-ids", ...args: any[]): void
    connect(sigName: "notify::search-path", callback: any): number
    on(sigName: "notify::search-path", callback: any): number
    once(sigName: "notify::search-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::search-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Provides access to [class`Language]`s.
 * 
 * `GtkSourceLanguageManager` is an object which processes language description
 * files and creates and stores [class`Language]` objects, and provides API to
 * access them.
 * 
 * Use [func`LanguageManager`.get_default] to retrieve the default
 * instance of `GtkSourceLanguageManager`, and
 * [method`LanguageManager`.guess_language] to get a [class`Language]` for
 * given file name and content type.
 * @class 
 */
export class LanguageManager extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.LanguageManager

    static name: string

    // Constructors of GtkSource-5.GtkSource.LanguageManager

    constructor(config?: LanguageManager.ConstructorProperties) 
    /**
     * Creates a new language manager.
     * 
     * If you do not need more than one language manager or a private language manager
     * instance then use [func`LanguageManager`.get_default] instead.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new language manager.
     * 
     * If you do not need more than one language manager or a private language manager
     * instance then use [func`LanguageManager`.get_default] instead.
     * @constructor 
     */
    static new(): LanguageManager
    _init(config?: LanguageManager.ConstructorProperties): void
    /**
     * Returns the default #GtkSourceLanguageManager instance.
     */
    static getDefault(): LanguageManager
}

export module Map {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, View.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.Map

        fontDesc?: Pango.FontDescription | null
        view?: View | null
    }

}

export interface Map extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Scrollable {

    // Own properties of GtkSource-5.GtkSource.Map

    fontDesc: Pango.FontDescription
    view: View

    // Own fields of GtkSource-5.GtkSource.Map

    parentInstance: any

    // Owm methods of GtkSource-5.GtkSource.Map

    /**
     * Gets the [property`Map:`view] property, which is the view this widget is mapping.
     */
    getView(): View | null
    /**
     * Sets the view that `map` will be doing the mapping to.
     * @param view a #GtkSourceView
     */
    setView(view: View): void

    // Conflicting methods

    /**
     * Returns the [class`Gutter]` object associated with `window_type` for `view`.
     * 
     * Only %GTK_TEXT_WINDOW_LEFT and %GTK_TEXT_WINDOW_RIGHT are supported,
     * respectively corresponding to the left and right gutter. The line numbers
     * and mark category icons are rendered in the left gutter.
     * @param windowType the gutter window type.
     */
    getGutter(windowType: Gtk.TextWindowType): Gutter

    // Overloads of getGutter

    /**
     * Gets a `GtkWidget` that has previously been set as gutter.
     * 
     * See [method`Gtk`.TextView.set_gutter].
     * 
     * `win` must be one of %GTK_TEXT_WINDOW_LEFT, %GTK_TEXT_WINDOW_RIGHT,
     * %GTK_TEXT_WINDOW_TOP, or %GTK_TEXT_WINDOW_BOTTOM.
     * @param win a `GtkTextWindowType`
     */
    getGutter(win: Gtk.TextWindowType): Gtk.Widget | null
    /**
     * Gets a `GtkWidget` that has previously been set as gutter.
     * 
     * See [method`Gtk`.TextView.set_gutter].
     * 
     * `win` must be one of %GTK_TEXT_WINDOW_LEFT, %GTK_TEXT_WINDOW_RIGHT,
     * %GTK_TEXT_WINDOW_TOP, or %GTK_TEXT_WINDOW_BOTTOM.
     * @param win a `GtkTextWindowType`
     */
    getGutter(win: Gtk.TextWindowType): Gtk.Widget | null

    // Class property signals of GtkSource-5.GtkSource.Map

    connect(sigName: "notify::font-desc", callback: any): number
    on(sigName: "notify::font-desc", callback: any): number
    once(sigName: "notify::font-desc", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::view", callback: any): number
    on(sigName: "notify::view", callback: any): number
    once(sigName: "notify::view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: "notify::auto-indent", callback: any): number
    on(sigName: "notify::auto-indent", callback: any): number
    once(sigName: "notify::auto-indent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::auto-indent", ...args: any[]): void
    connect(sigName: "notify::background-pattern", callback: any): number
    on(sigName: "notify::background-pattern", callback: any): number
    once(sigName: "notify::background-pattern", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::background-pattern", ...args: any[]): void
    connect(sigName: "notify::completion", callback: any): number
    on(sigName: "notify::completion", callback: any): number
    once(sigName: "notify::completion", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::enable-snippets", callback: any): number
    on(sigName: "notify::enable-snippets", callback: any): number
    once(sigName: "notify::enable-snippets", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enable-snippets", ...args: any[]): void
    connect(sigName: "notify::highlight-current-line", callback: any): number
    on(sigName: "notify::highlight-current-line", callback: any): number
    once(sigName: "notify::highlight-current-line", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::highlight-current-line", ...args: any[]): void
    connect(sigName: "notify::indent-on-tab", callback: any): number
    on(sigName: "notify::indent-on-tab", callback: any): number
    once(sigName: "notify::indent-on-tab", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::indent-on-tab", ...args: any[]): void
    connect(sigName: "notify::indent-width", callback: any): number
    on(sigName: "notify::indent-width", callback: any): number
    once(sigName: "notify::indent-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::indent-width", ...args: any[]): void
    connect(sigName: "notify::indenter", callback: any): number
    on(sigName: "notify::indenter", callback: any): number
    once(sigName: "notify::indenter", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::indenter", ...args: any[]): void
    connect(sigName: "notify::insert-spaces-instead-of-tabs", callback: any): number
    on(sigName: "notify::insert-spaces-instead-of-tabs", callback: any): number
    once(sigName: "notify::insert-spaces-instead-of-tabs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::insert-spaces-instead-of-tabs", ...args: any[]): void
    connect(sigName: "notify::right-margin-position", callback: any): number
    on(sigName: "notify::right-margin-position", callback: any): number
    once(sigName: "notify::right-margin-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::right-margin-position", ...args: any[]): void
    connect(sigName: "notify::show-line-marks", callback: any): number
    on(sigName: "notify::show-line-marks", callback: any): number
    once(sigName: "notify::show-line-marks", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-line-marks", ...args: any[]): void
    connect(sigName: "notify::show-line-numbers", callback: any): number
    on(sigName: "notify::show-line-numbers", callback: any): number
    once(sigName: "notify::show-line-numbers", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-line-numbers", ...args: any[]): void
    connect(sigName: "notify::show-right-margin", callback: any): number
    on(sigName: "notify::show-right-margin", callback: any): number
    once(sigName: "notify::show-right-margin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-right-margin", ...args: any[]): void
    connect(sigName: "notify::smart-backspace", callback: any): number
    on(sigName: "notify::smart-backspace", callback: any): number
    once(sigName: "notify::smart-backspace", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smart-backspace", ...args: any[]): void
    connect(sigName: "notify::smart-home-end", callback: any): number
    on(sigName: "notify::smart-home-end", callback: any): number
    once(sigName: "notify::smart-home-end", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smart-home-end", ...args: any[]): void
    connect(sigName: "notify::space-drawer", callback: any): number
    on(sigName: "notify::space-drawer", callback: any): number
    once(sigName: "notify::space-drawer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::space-drawer", ...args: any[]): void
    connect(sigName: "notify::tab-width", callback: any): number
    on(sigName: "notify::tab-width", callback: any): number
    once(sigName: "notify::tab-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tab-width", ...args: any[]): void
    connect(sigName: "notify::accepts-tab", callback: any): number
    on(sigName: "notify::accepts-tab", callback: any): number
    once(sigName: "notify::accepts-tab", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accepts-tab", ...args: any[]): void
    connect(sigName: "notify::bottom-margin", callback: any): number
    on(sigName: "notify::bottom-margin", callback: any): number
    once(sigName: "notify::bottom-margin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bottom-margin", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: any): number
    on(sigName: "notify::buffer", callback: any): number
    once(sigName: "notify::buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::cursor-visible", callback: any): number
    on(sigName: "notify::cursor-visible", callback: any): number
    once(sigName: "notify::cursor-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor-visible", ...args: any[]): void
    connect(sigName: "notify::editable", callback: any): number
    on(sigName: "notify::editable", callback: any): number
    once(sigName: "notify::editable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::extra-menu", callback: any): number
    on(sigName: "notify::extra-menu", callback: any): number
    once(sigName: "notify::extra-menu", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::extra-menu", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: any): number
    on(sigName: "notify::im-module", callback: any): number
    once(sigName: "notify::im-module", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::indent", callback: any): number
    on(sigName: "notify::indent", callback: any): number
    once(sigName: "notify::indent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::indent", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: any): number
    on(sigName: "notify::input-hints", callback: any): number
    once(sigName: "notify::input-hints", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: any): number
    on(sigName: "notify::input-purpose", callback: any): number
    once(sigName: "notify::input-purpose", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::justification", callback: any): number
    on(sigName: "notify::justification", callback: any): number
    once(sigName: "notify::justification", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::justification", ...args: any[]): void
    connect(sigName: "notify::left-margin", callback: any): number
    on(sigName: "notify::left-margin", callback: any): number
    once(sigName: "notify::left-margin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::left-margin", ...args: any[]): void
    connect(sigName: "notify::monospace", callback: any): number
    on(sigName: "notify::monospace", callback: any): number
    once(sigName: "notify::monospace", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::monospace", ...args: any[]): void
    connect(sigName: "notify::overwrite", callback: any): number
    on(sigName: "notify::overwrite", callback: any): number
    once(sigName: "notify::overwrite", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overwrite", ...args: any[]): void
    connect(sigName: "notify::pixels-above-lines", callback: any): number
    on(sigName: "notify::pixels-above-lines", callback: any): number
    once(sigName: "notify::pixels-above-lines", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixels-above-lines", ...args: any[]): void
    connect(sigName: "notify::pixels-below-lines", callback: any): number
    on(sigName: "notify::pixels-below-lines", callback: any): number
    once(sigName: "notify::pixels-below-lines", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixels-below-lines", ...args: any[]): void
    connect(sigName: "notify::pixels-inside-wrap", callback: any): number
    on(sigName: "notify::pixels-inside-wrap", callback: any): number
    once(sigName: "notify::pixels-inside-wrap", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixels-inside-wrap", ...args: any[]): void
    connect(sigName: "notify::right-margin", callback: any): number
    on(sigName: "notify::right-margin", callback: any): number
    once(sigName: "notify::right-margin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::right-margin", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: any): number
    on(sigName: "notify::tabs", callback: any): number
    once(sigName: "notify::tabs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::top-margin", callback: any): number
    on(sigName: "notify::top-margin", callback: any): number
    once(sigName: "notify::top-margin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::top-margin", ...args: any[]): void
    connect(sigName: "notify::wrap-mode", callback: any): number
    on(sigName: "notify::wrap-mode", callback: any): number
    once(sigName: "notify::wrap-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::wrap-mode", ...args: any[]): void
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
 * Widget that displays a map for a specific [class`View]`.
 * 
 * `GtkSourceMap` is a widget that maps the content of a [class`View]` into
 * a smaller view so the user can have a quick overview of the whole document.
 * 
 * This works by connecting a [class`View]` to to the `GtkSourceMap` using
 * the [property`Map:`view] property or [method`Map`.set_view].
 * 
 * `GtkSourceMap` is a [class`View]` object. This means that you can add a
 * [class`GutterRenderer]` to a gutter in the same way you would for a
 * [class`View]`. One example might be a [class`GutterRenderer]` that shows
 * which lines have changed in the document.
 * 
 * Additionally, it is desirable to match the font of the `GtkSourceMap` and
 * the [class`View]` used for editing. Therefore, [property`Map:`font-desc]
 * should be used to set the target font. You will need to adjust this to the
 * desired font size for the map. A 1pt font generally seems to be an
 * appropriate font size. "Monospace 1" is the default. See
 * [method`Pango`.FontDescription.set_size] for how to alter the size of an existing
 * [struct`Pango`.FontDescription].
 * 
 * When FontConfig is available, `GtkSourceMap` will try to use a bundled
 * "block" font to make the map more legible.
 * @class 
 */
export class Map extends View {

    // Own properties of GtkSource-5.GtkSource.Map

    static name: string

    // Constructors of GtkSource-5.GtkSource.Map

    constructor(config?: Map.ConstructorProperties) 
    /**
     * Creates a new `GtkSourceMap`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `GtkSourceMap`.
     * @constructor 
     */
    static new(): Map
    _init(config?: Map.ConstructorProperties): void

    // Conflicting static methods

    static newWithBuffer(...args: any[]): any
}

export module Mark {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.TextMark.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.Mark

        /**
         * The category of the `GtkSourceMark`, classifies the mark and controls
         * which pixbuf is used and with which priority it is drawn.
         */
        category?: string | null
    }

}

export interface Mark {

    // Own properties of GtkSource-5.GtkSource.Mark

    /**
     * The category of the `GtkSourceMark`, classifies the mark and controls
     * which pixbuf is used and with which priority it is drawn.
     */
    readonly category: string

    // Own fields of GtkSource-5.GtkSource.Mark

    parentInstance: any

    // Owm methods of GtkSource-5.GtkSource.Mark

    /**
     * Returns the mark category.
     */
    getCategory(): string
    /**
     * Returns the next `GtkSourceMark` in the buffer or %NULL if the mark
     * was not added to a buffer.
     * 
     *  If there is no next mark, %NULL will be returned.
     * 
     * If `category` is %NULL, looks for marks of any category.
     * @param category a string specifying the mark category, or %NULL.
     */
    next(category: string | null): Mark | null
    /**
     * Returns the previous `GtkSourceMark` in the buffer or %NULL if the mark
     * was not added to a buffer.
     * 
     * If there is no previous mark, %NULL is returned.
     * 
     * If `category` is %NULL, looks for marks of any category
     * @param category a string specifying the mark category, or %NULL.
     */
    prev(category: string): Mark | null

    // Class property signals of GtkSource-5.GtkSource.Mark

    connect(sigName: "notify::category", callback: any): number
    on(sigName: "notify::category", callback: any): number
    once(sigName: "notify::category", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::category", ...args: any[]): void
    connect(sigName: "notify::left-gravity", callback: any): number
    on(sigName: "notify::left-gravity", callback: any): number
    once(sigName: "notify::left-gravity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::left-gravity", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Mark object for [class`Buffer]`.
 * 
 * A `GtkSourceMark` marks a position in the text where you want to display
 * additional info. It is based on [class`Gtk`.TextMark] and thus is still valid after
 * the text has changed though its position may change.
 * 
 * `GtkSourceMark`s are organized in categories which you have to set
 * when you create the mark. Each category can have a priority, a pixbuf and
 * other associated attributes. See [method`View`.set_mark_attributes].
 * The pixbuf will be displayed in the margin at the line where the mark
 * residents if the [property`View:`show-line-marks] property is set to %TRUE. If
 * there are multiple marks in the same line, the pixbufs will be drawn on top
 * of each other. The mark with the highest priority will be drawn on top.
 * @class 
 */
export class Mark extends Gtk.TextMark {

    // Own properties of GtkSource-5.GtkSource.Mark

    static name: string

    // Constructors of GtkSource-5.GtkSource.Mark

    constructor(config?: Mark.ConstructorProperties) 
    /**
     * Creates a text mark.
     * 
     * Add it to a buffer using [method`Gtk`.TextBuffer.add_mark].
     * If name is NULL, the mark is anonymous; otherwise, the mark can be retrieved
     * by name using [method`Gtk`.TextBuffer.get_mark].
     * Normally marks are created using the utility function
     * [method`Buffer`.create_source_mark].
     * @constructor 
     * @param name Name of the #GtkSourceMark or %NULL
     * @param category is used to classify marks according to common characteristics   (e.g. all the marks representing a bookmark could belong to the "bookmark"   category, or all the marks representing a compilation error could belong   to "error" category).
     */
    constructor(name: string | null, category: string) 
    /**
     * Creates a text mark.
     * 
     * Add it to a buffer using [method`Gtk`.TextBuffer.add_mark].
     * If name is NULL, the mark is anonymous; otherwise, the mark can be retrieved
     * by name using [method`Gtk`.TextBuffer.get_mark].
     * Normally marks are created using the utility function
     * [method`Buffer`.create_source_mark].
     * @constructor 
     * @param name Name of the #GtkSourceMark or %NULL
     * @param category is used to classify marks according to common characteristics   (e.g. all the marks representing a bookmark could belong to the "bookmark"   category, or all the marks representing a compilation error could belong   to "error" category).
     */
    static new(name: string | null, category: string): Mark

    // Overloads of new

    /**
     * Creates a text mark.
     * 
     * Add it to a buffer using [method`Gtk`.TextBuffer.add_mark].
     * If `name` is %NULL, the mark is anonymous; otherwise, the mark can be
     * retrieved by name using [method`Gtk`.TextBuffer.get_mark]. If a mark
     * has left gravity, and text is inserted at the mark???s current location,
     * the mark will be moved to the left of the newly-inserted text. If the
     * mark has right gravity (`left_gravity` = %FALSE), the mark will end up
     * on the right of newly-inserted text. The standard left-to-right cursor
     * is a mark with right gravity (when you type, the cursor stays on the
     * right side of the text you???re typing).
     * @constructor 
     * @param name mark name
     * @param leftGravity whether the mark should have left gravity
     */
    static new(name: string | null, leftGravity: boolean): Gtk.TextMark
    _init(config?: Mark.ConstructorProperties): void
}

export module MarkAttributes {

    // Signal callback interfaces

    /**
     * Signal callback interface for `query-tooltip-markup`
     */
    export interface QueryTooltipMarkupSignalCallback {
        (mark: Mark): string
    }

    /**
     * Signal callback interface for `query-tooltip-text`
     */
    export interface QueryTooltipTextSignalCallback {
        (mark: Mark): string
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.MarkAttributes

        /**
         * A color used for background of a line.
         */
        background?: Gdk.RGBA | null
        /**
         * A #GIcon that may be a base of a rendered icon.
         */
        gicon?: Gio.Icon | null
        /**
         * An icon name that may be a base of a rendered icon.
         */
        iconName?: string | null
        /**
         * A #GdkPixbuf that may be a base of a rendered icon.
         */
        pixbuf?: GdkPixbuf.Pixbuf | null
    }

}

export interface MarkAttributes {

    // Own properties of GtkSource-5.GtkSource.MarkAttributes

    /**
     * A color used for background of a line.
     */
    background: Gdk.RGBA
    /**
     * A #GIcon that may be a base of a rendered icon.
     */
    gicon: Gio.Icon
    /**
     * An icon name that may be a base of a rendered icon.
     */
    iconName: string
    /**
     * A #GdkPixbuf that may be a base of a rendered icon.
     */
    pixbuf: GdkPixbuf.Pixbuf

    // Owm methods of GtkSource-5.GtkSource.MarkAttributes

    /**
     * Stores background color in `background`.
     */
    getBackground(): [ /* returnType */ boolean, /* background */ Gdk.RGBA ]
    /**
     * Gets a [iface`Gio`.Icon] to be used as a base for rendered icon.
     * 
     * Note that the icon can be %NULL if it wasn't set earlier.
     */
    getGicon(): Gio.Icon
    /**
     * Gets a name of an icon to be used as a base for rendered icon.
     * 
     * Note that the icon name can be %NULL if it wasn't set earlier.
     */
    getIconName(): string
    /**
     * Gets a [class`GdkPixbuf`.Pixbuf] to be used as a base for rendered icon.
     * 
     * Note that the pixbuf can be %NULL if it wasn't set earlier.
     */
    getPixbuf(): GdkPixbuf.Pixbuf
    /**
     * Queries for a tooltip by emitting a [signal`MarkAttributes:`:query-tooltip-markup] signal.
     * 
     * The tooltip may contain a markup.
     * @param mark a #GtkSourceMark.
     */
    getTooltipMarkup(mark: Mark): string
    /**
     * Queries for a tooltip by emitting a [signal`MarkAttributes:`:query-tooltip-text] signal.
     * 
     * The tooltip is a plain text.
     * @param mark a #GtkSourceMark.
     */
    getTooltipText(mark: Mark): string
    /**
     * Renders an icon of given size.
     * 
     * The base of the icon is set by the last call to one of:
     * 
     * - [method`MarkAttributes`.set_pixbuf]
     * - [method`MarkAttributes`.set_gicon]
     * - [method`MarkAttributes`.set_icon_name]
     * 
     * `size` cannot be lower than 1.
     * @param widget widget of which style settings may be used.
     * @param size size of the rendered icon.
     */
    renderIcon(widget: Gtk.Widget, size: number): Gdk.Paintable
    /**
     * Sets background color to the one given in `background`.
     * @param background a #GdkRGBA.
     */
    setBackground(background: Gdk.RGBA): void
    /**
     * Sets an icon to be used as a base for rendered icon.
     * @param gicon a #GIcon to be used.
     */
    setGicon(gicon: Gio.Icon): void
    /**
     * Sets a name of an icon to be used as a base for rendered icon.
     * @param iconName name of an icon to be used.
     */
    setIconName(iconName: string): void
    /**
     * Sets a pixbuf to be used as a base for rendered icon.
     * @param pixbuf a #GdkPixbuf to be used.
     */
    setPixbuf(pixbuf: GdkPixbuf.Pixbuf): void

    // Own signals of GtkSource-5.GtkSource.MarkAttributes

    connect(sigName: "query-tooltip-markup", callback: MarkAttributes.QueryTooltipMarkupSignalCallback): number
    on(sigName: "query-tooltip-markup", callback: MarkAttributes.QueryTooltipMarkupSignalCallback): number
    once(sigName: "query-tooltip-markup", callback: MarkAttributes.QueryTooltipMarkupSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "query-tooltip-markup", ...args: any[]): void
    connect(sigName: "query-tooltip-text", callback: MarkAttributes.QueryTooltipTextSignalCallback): number
    on(sigName: "query-tooltip-text", callback: MarkAttributes.QueryTooltipTextSignalCallback): number
    once(sigName: "query-tooltip-text", callback: MarkAttributes.QueryTooltipTextSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "query-tooltip-text", ...args: any[]): void

    // Class property signals of GtkSource-5.GtkSource.MarkAttributes

    connect(sigName: "notify::background", callback: any): number
    on(sigName: "notify::background", callback: any): number
    once(sigName: "notify::background", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::background", ...args: any[]): void
    connect(sigName: "notify::gicon", callback: any): number
    on(sigName: "notify::gicon", callback: any): number
    once(sigName: "notify::gicon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::gicon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::pixbuf", callback: any): number
    on(sigName: "notify::pixbuf", callback: any): number
    once(sigName: "notify::pixbuf", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixbuf", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The source mark attributes object.
 * 
 * `GtkSourceMarkAttributes` is an object specifying attributes used by
 * a [class`View]` to visually show lines marked with [class`Mark]`s
 * of a specific category. It allows you to define a background color of a line,
 * an icon shown in gutter and tooltips.
 * 
 * The background color is used as a background of a line where a mark is placed
 * and it can be set with [method`MarkAttributes`.set_background]. To check
 * if any custom background color was defined and what color it is, use
 * [method`MarkAttributes`.get_background].
 * 
 * An icon is a graphic element which is shown in the gutter of a view. An
 * example use is showing a red filled circle in a debugger to show that a
 * breakpoint was set in certain line. To get an icon that will be placed in
 * a gutter, first a base for it must be specified and then
 * [method`MarkAttributes`.render_icon] must be called.
 * There are several ways to specify a base for an icon:
 * 
 * - [method`MarkAttributes`.set_icon_name]
 * - [method`MarkAttributes`.set_gicon]
 * - [method`MarkAttributes`.set_pixbuf]
 * 
 * Using any of the above functions overrides the one used earlier. But note
 * that a getter counterpart of earlier used function can still return some
 * value, but it is just not used when rendering the proper icon.
 * 
 * To provide meaningful tooltips for a given mark of a category, you should
 * connect to [signal`MarkAttributes:`:query-tooltip-text] or
 * [signal`MarkAttributes:`:query-tooltip-markup] where the latter
 * takes precedence.
 * @class 
 */
export class MarkAttributes extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.MarkAttributes

    static name: string

    // Constructors of GtkSource-5.GtkSource.MarkAttributes

    constructor(config?: MarkAttributes.ConstructorProperties) 
    /**
     * Creates a new source mark attributes.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new source mark attributes.
     * @constructor 
     */
    static new(): MarkAttributes
    _init(config?: MarkAttributes.ConstructorProperties): void
}

export module PrintCompositor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.PrintCompositor

        /**
         * Name of the font used for the text body.
         * 
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
         * for a description of the format of the string representation.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        bodyFontName?: string | null
        /**
         * The [class`Buffer]` object to print.
         */
        buffer?: Buffer | null
        /**
         * Name of the font used to print page footer.
         * If this property is unspecified, the text body font is used.
         * 
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
         * for a description of the format of the string representation.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        footerFontName?: string | null
        /**
         * Name of the font used to print page header.
         * If this property is unspecified, the text body font is used.
         * 
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
         * for a description of the format of the string representation.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        headerFontName?: string | null
        /**
         * Whether to print the document with highlighted syntax.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        highlightSyntax?: boolean | null
        /**
         * Name of the font used to print line numbers on the left margin.
         * If this property is unspecified, the text body font is used.
         * 
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
         * for a description of the format of the string representation.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        lineNumbersFontName?: string | null
        /**
         * Whether to print a footer in each page.
         * 
         * Note that by default the footer format is unspecified, and if it is
         * unspecified the footer will not be printed, regardless of the value of
         * this property.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        printFooter?: boolean | null
        /**
         * Whether to print a header in each page.
         * 
         * Note that by default the header format is unspecified, and if it is
         * unspecified the header will not be printed, regardless of the value of
         * this property.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        printHeader?: boolean | null
        /**
         * Interval of printed line numbers.
         * 
         * If this property is set to 0 no numbers will be printed.
         * If greater than 0, a number will be printed every "print-line-numbers"
         * lines (i.e. 1 will print all line numbers).
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        printLineNumbers?: number | null
        /**
         * Width of a tab character expressed in spaces.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        tabWidth?: number | null
        /**
         * Whether to wrap lines never, at word boundaries, or at character boundaries.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the [method`PrintCompositor`.paginate] function.
         */
        wrapMode?: Gtk.WrapMode | null
    }

}

export interface PrintCompositor {

    // Own properties of GtkSource-5.GtkSource.PrintCompositor

    /**
     * Name of the font used for the text body.
     * 
     * Accepted values are strings representing a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
     * for a description of the format of the string representation.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the [method`PrintCompositor`.paginate] function.
     */
    bodyFontName: string
    /**
     * The [class`Buffer]` object to print.
     */
    readonly buffer: Buffer
    /**
     * Name of the font used to print page footer.
     * If this property is unspecified, the text body font is used.
     * 
     * Accepted values are strings representing a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
     * for a description of the format of the string representation.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the [method`PrintCompositor`.paginate] function.
     */
    footerFontName: string
    /**
     * Name of the font used to print page header.
     * If this property is unspecified, the text body font is used.
     * 
     * Accepted values are strings representing a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
     * for a description of the format of the string representation.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the [method`PrintCompositor`.paginate] function.
     */
    headerFontName: string
    /**
     * Whether to print the document with highlighted syntax.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the [method`PrintCompositor`.paginate] function.
     */
    highlightSyntax: boolean
    /**
     * Name of the font used to print line numbers on the left margin.
     * If this property is unspecified, the text body font is used.
     * 
     * Accepted values are strings representing a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
     * for a description of the format of the string representation.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the [method`PrintCompositor`.paginate] function.
     */
    lineNumbersFontName: string
    /**
     * The number of pages in the document or <code>-1</code> if the
     * document has not been completely paginated.
     */
    readonly nPages: number
    /**
     * Whether to print a footer in each page.
     * 
     * Note that by default the footer format is unspecified, and if it is
     * unspecified the footer will not be printed, regardless of the value of
     * this property.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the [method`PrintCompositor`.paginate] function.
     */
    printFooter: boolean
    /**
     * Whether to print a header in each page.
     * 
     * Note that by default the header format is unspecified, and if it is
     * unspecified the header will not be printed, regardless of the value of
     * this property.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the [method`PrintCompositor`.paginate] function.
     */
    printHeader: boolean
    /**
     * Interval of printed line numbers.
     * 
     * If this property is set to 0 no numbers will be printed.
     * If greater than 0, a number will be printed every "print-line-numbers"
     * lines (i.e. 1 will print all line numbers).
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the [method`PrintCompositor`.paginate] function.
     */
    printLineNumbers: number
    /**
     * Width of a tab character expressed in spaces.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the [method`PrintCompositor`.paginate] function.
     */
    tabWidth: number
    /**
     * Whether to wrap lines never, at word boundaries, or at character boundaries.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the [method`PrintCompositor`.paginate] function.
     */
    wrapMode: Gtk.WrapMode

    // Own fields of GtkSource-5.GtkSource.PrintCompositor

    parentInstance: GObject.Object

    // Owm methods of GtkSource-5.GtkSource.PrintCompositor

    /**
     * Draw page `page_nr` for printing on the the Cairo context encapsuled in `context`.
     * 
     * This method has been designed to be called in the handler of the [signal`Gtk`.PrintOperation::draw_page] signal
     * as shown in the following example:
     * 
     * ```c
     * // Signal handler for the GtkPrintOperation::draw_page signal
     * 
     * static void
     * draw_page (GtkPrintOperation *operation,
     *            GtkPrintContext   *context,
     *            gint               page_nr,
     *            gpointer           user_data)
     * {
     *     GtkSourcePrintCompositor *compositor;
     * 
     *     compositor = GTK_SOURCE_PRINT_COMPOSITOR (user_data);
     * 
     *     gtk_source_print_compositor_draw_page (compositor,
     *                                            context,
     *                                            page_nr);
     * }
     * ```
     * @param context the #GtkPrintContext encapsulating the context information that is required when           drawing the page for printing.
     * @param pageNr the number of the page to print.
     */
    drawPage(context: Gtk.PrintContext, pageNr: number): void
    /**
     * Returns the name of the font used to print the text body.
     * 
     * The returned string must be freed with g_free().
     */
    getBodyFontName(): string
    /**
     * Gets the bottom margin in units of `unit`.
     * @param unit the unit for the return value.
     */
    getBottomMargin(unit: Gtk.Unit): number
    /**
     * Gets the [class`Buffer]` associated with the compositor.
     * 
     * The returned object reference is owned by the compositor object and
     * should not be unreferenced.
     */
    getBuffer(): Buffer
    /**
     * Returns the name of the font used to print the page footer.
     * 
     * The returned string must be freed with g_free().
     */
    getFooterFontName(): string
    /**
     * Returns the name of the font used to print the page header.
     * 
     * The returned string must be freed with g_free().
     */
    getHeaderFontName(): string
    /**
     * Determines whether the printed text will be highlighted according to the
     * buffer rules.
     * 
     * Note that highlighting will happen only if the buffer to print has highlighting activated.
     */
    getHighlightSyntax(): boolean
    /**
     * Gets the left margin in units of `unit`.
     * @param unit the unit for the return value.
     */
    getLeftMargin(unit: Gtk.Unit): number
    /**
     * Returns the name of the font used to print line numbers on the left margin.
     * 
     * The returned string must be freed with g_free().
     */
    getLineNumbersFontName(): string
    /**
     * Returns the number of pages in the document or <code>-1</code> if the
     * document has not been completely paginated.
     */
    getNPages(): number
    /**
     * Returns the current fraction of the document pagination that has been completed.
     */
    getPaginationProgress(): number
    /**
     * Determines if a footer is set to be printed for each page.
     * 
     * A footer will be printed if this function returns %TRUE
     * **and** some format strings have been specified
     * with [method`PrintCompositor`.set_footer_format].
     */
    getPrintFooter(): boolean
    /**
     * Determines if a header is set to be printed for each page.
     * 
     * A header will be printed if this function returns %TRUE
     * **and** some format strings have been specified
     * with [method`PrintCompositor`.set_header_format].
     */
    getPrintHeader(): boolean
    /**
     * Returns the interval used for line number printing.
     * 
     * If the value is 0, no line numbers will be printed. The default value is
     * 1 (i.e. numbers printed in all lines).
     */
    getPrintLineNumbers(): number
    /**
     * Gets the right margin in units of `unit`.
     * @param unit the unit for the return value.
     */
    getRightMargin(unit: Gtk.Unit): number
    /**
     * Returns the width of tabulation in characters for printed text.
     */
    getTabWidth(): number
    /**
     * Gets the top margin in units of `unit`.
     * @param unit the unit for the return value.
     */
    getTopMargin(unit: Gtk.Unit): number
    /**
     * Gets the line wrapping mode for the printed text.
     */
    getWrapMode(): Gtk.WrapMode
    /**
     * Specifies a tag whose style should be ignored when compositing the
     * document to the printable page.
     * @param tag a #GtkTextTag
     */
    ignoreTag(tag: Gtk.TextTag): void
    /**
     * Paginate the document associated with the `compositor`.
     * 
     * In order to support non-blocking pagination, document is paginated in small chunks.
     * Each time [method`PrintCompositor`.paginate] is invoked, a chunk of the document
     * is paginated. To paginate the entire document, [method`PrintCompositor`.paginate]
     * must be invoked multiple times.
     * It returns %TRUE if the document has been completely paginated, otherwise it returns %FALSE.
     * 
     * This method has been designed to be invoked in the handler of the [signal`Gtk`.PrintOperation::paginate] signal,
     * as shown in the following example:
     * 
     * ```c
     * // Signal handler for the GtkPrintOperation::paginate signal
     * 
     * static gboolean
     * paginate (GtkPrintOperation *operation,
     *           GtkPrintContext   *context,
     *           gpointer           user_data)
     * {
     *     GtkSourcePrintCompositor *compositor;
     * 
     *     compositor = GTK_SOURCE_PRINT_COMPOSITOR (user_data);
     * 
     *     if (gtk_source_print_compositor_paginate (compositor, context))
     *     {
     *         gint n_pages;
     * 
     *         n_pages = gtk_source_print_compositor_get_n_pages (compositor);
     *         gtk_print_operation_set_n_pages (operation, n_pages);
     * 
     *         return TRUE;
     *     }
     * 
     *     return FALSE;
     * }
     * ```
     * 
     * If you don't need to do pagination in chunks, you can simply do it all in the
     * [signal`Gtk`.PrintOperation::begin-print] handler, and set the number of pages from there, like
     * in the following example:
     * 
     * ```c
     * // Signal handler for the GtkPrintOperation::begin-print signal
     * 
     * static void
     * begin_print (GtkPrintOperation *operation,
     *              GtkPrintContext   *context,
     *              gpointer           user_data)
     * {
     *     GtkSourcePrintCompositor *compositor;
     *     gint n_pages;
     * 
     *     compositor = GTK_SOURCE_PRINT_COMPOSITOR (user_data);
     * 
     *     while (!gtk_source_print_compositor_paginate (compositor, context));
     * 
     *     n_pages = gtk_source_print_compositor_get_n_pages (compositor);
     *     gtk_print_operation_set_n_pages (operation, n_pages);
     * }
     * ```
     * @param context the #GtkPrintContext whose parameters (e.g. paper size, print margins, etc.) are used by the the `compositor` to paginate the document.
     */
    paginate(context: Gtk.PrintContext): boolean
    /**
     * Sets the default font for the printed text.
     * 
     * `font_name` should be a
     * string representation of a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
     * for a description of the format of the string representation.
     * 
     * This function cannot be called anymore after the first call to the
     * [method`PrintCompositor`.paginate] function.
     * @param fontName the name of the default font for the body text.
     */
    setBodyFontName(fontName: string): void
    /**
     * Sets the bottom margin used by `compositor`.
     * @param margin the new bottom margin in units of `unit`.
     * @param unit the units for `margin`.
     */
    setBottomMargin(margin: number, unit: Gtk.Unit): void
    /**
     * Sets the font for printing the page footer.
     * 
     * If %NULL is supplied, the default font (i.e. the one being used for the
     * text) will be used instead.
     * 
     * `font_name` should be a
     * string representation of a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
     * for a description of the format of the string representation.
     * 
     * This function cannot be called anymore after the first call to the
     * [method`PrintCompositor`.paginate] function.
     * @param fontName the name of the font for the footer text, or %NULL.
     */
    setFooterFontName(fontName: string | null): void
    /**
     * See [method`PrintCompositor`.set_header_format] for more information
     * about the parameters.
     * @param separator %TRUE if you want a separator line to be printed.
     * @param left a format string to print on the left of the footer.
     * @param center a format string to print on the center of the footer.
     * @param right a format string to print on the right of the footer.
     */
    setFooterFormat(separator: boolean, left: string | null, center: string | null, right: string | null): void
    /**
     * Sets the font for printing the page header.
     * 
     * If %NULL is supplied, the default font (i.e. the one being used for the
     * text) will be used instead.
     * 
     * `font_name` should be a
     * string representation of a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
     * for a description of the format of the string representation.
     * 
     * This function cannot be called anymore after the first call to the
     * [method`PrintCompositor`.paginate] function.
     * @param fontName the name of the font for header text, or %NULL.
     */
    setHeaderFontName(fontName: string | null): void
    /**
     * Sets strftime like header format strings, to be printed on the
     * left, center and right of the top of each page.
     * 
     * The strings may include strftime(3) codes which will be expanded at print time.
     * A subset of strftime() codes are accepted, see [method`GLib`.DateTime.format]
     * for more details on the accepted format specifiers.
     * Additionally the following format specifiers are accepted:
     * 
     * - #N: the page number
     * - #Q: the page count.
     * 
     * `separator` specifies if a solid line should be drawn to separate
     * the header from the document text.
     * 
     * If %NULL is given for any of the three arguments, that particular
     * string will not be printed.
     * 
     * For the header to be printed, in
     * addition to specifying format strings, you need to enable header
     * printing with [method`PrintCompositor`.set_print_header].
     * 
     * This function cannot be called anymore after the first call to the
     * [method`PrintCompositor`.paginate] function.
     * @param separator %TRUE if you want a separator line to be printed.
     * @param left a format string to print on the left of the header.
     * @param center a format string to print on the center of the header.
     * @param right a format string to print on the right of the header.
     */
    setHeaderFormat(separator: boolean, left: string | null, center: string | null, right: string | null): void
    /**
     * Sets whether the printed text will be highlighted according to the
     * buffer rules.  Both color and font style are applied.
     * 
     * This function cannot be called anymore after the first call to the
     * [method`PrintCompositor`.paginate] function.
     * @param highlight whether syntax should be highlighted.
     */
    setHighlightSyntax(highlight: boolean): void
    /**
     * Sets the left margin used by `compositor`.
     * @param margin the new left margin in units of `unit`.
     * @param unit the units for `margin`.
     */
    setLeftMargin(margin: number, unit: Gtk.Unit): void
    /**
     * Sets the font for printing line numbers on the left margin.
     * 
     * If %NULL is supplied, the default font (i.e. the one being used for the
     * text) will be used instead.
     * 
     * `font_name` should be a
     * string representation of a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See [func`Pango`.FontDescription.from_string]
     * for a description of the format of the string representation.
     * 
     * This function cannot be called anymore after the first call to the
     * [method`PrintCompositor`.paginate] function.
     * @param fontName the name of the font for line numbers, or %NULL.
     */
    setLineNumbersFontName(fontName: string | null): void
    /**
     * Sets whether you want to print a footer in each page.
     * 
     * The footer consists of three pieces of text and an optional line
     * separator, configurable with
     * [method`PrintCompositor`.set_footer_format].
     * 
     * Note that by default the footer format is unspecified, and if it's
     * empty it will not be printed, regardless of this setting.
     * 
     * This function cannot be called anymore after the first call to the
     * [method`PrintCompositor`.paginate] function.
     * @param print %TRUE if you want the footer to be printed.
     */
    setPrintFooter(print: boolean): void
    /**
     * Sets whether you want to print a header in each page.
     * 
     * The header consists of three pieces of text and an optional line
     * separator, configurable with [method`PrintCompositor`.set_header_format].
     * 
     * Note that by default the header format is unspecified, and if it's
     * empty it will not be printed, regardless of this setting.
     * 
     * This function cannot be called anymore after the first call to the
     * [method`PrintCompositor`.paginate] function.
     * @param print %TRUE if you want the header to be printed.
     */
    setPrintHeader(print: boolean): void
    /**
     * Sets the interval for printed line numbers.
     * 
     * If `interval` is 0 no numbers will be printed. If greater than 0, a number will be
     * printed every `interval` lines (i.e. 1 will print all line numbers).
     * 
     * Maximum accepted value for `interval` is 100.
     * 
     * This function cannot be called anymore after the first call to the
     * [method`PrintCompositor`.paginate] function.
     * @param interval interval for printed line numbers.
     */
    setPrintLineNumbers(interval: number): void
    /**
     * Sets the right margin used by `compositor`.
     * @param margin the new right margin in units of `unit`.
     * @param unit the units for `margin`.
     */
    setRightMargin(margin: number, unit: Gtk.Unit): void
    /**
     * Sets the width of tabulation in characters for printed text.
     * 
     * This function cannot be called anymore after the first call to the
     * [method`PrintCompositor`.paginate] function.
     * @param width width of tab in characters.
     */
    setTabWidth(width: number): void
    /**
     * Sets the top margin used by `compositor`.
     * @param margin the new top margin in units of `unit`
     * @param unit the units for `margin`
     */
    setTopMargin(margin: number, unit: Gtk.Unit): void
    /**
     * Sets the line wrapping mode for the printed text.
     * 
     * This function cannot be called anymore after the first call to the
     * [method`PrintCompositor`.paginate] function.
     * @param wrapMode a #GtkWrapMode.
     */
    setWrapMode(wrapMode: Gtk.WrapMode): void

    // Class property signals of GtkSource-5.GtkSource.PrintCompositor

    connect(sigName: "notify::body-font-name", callback: any): number
    on(sigName: "notify::body-font-name", callback: any): number
    once(sigName: "notify::body-font-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::body-font-name", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: any): number
    on(sigName: "notify::buffer", callback: any): number
    once(sigName: "notify::buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::footer-font-name", callback: any): number
    on(sigName: "notify::footer-font-name", callback: any): number
    once(sigName: "notify::footer-font-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::footer-font-name", ...args: any[]): void
    connect(sigName: "notify::header-font-name", callback: any): number
    on(sigName: "notify::header-font-name", callback: any): number
    once(sigName: "notify::header-font-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::header-font-name", ...args: any[]): void
    connect(sigName: "notify::highlight-syntax", callback: any): number
    on(sigName: "notify::highlight-syntax", callback: any): number
    once(sigName: "notify::highlight-syntax", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::highlight-syntax", ...args: any[]): void
    connect(sigName: "notify::line-numbers-font-name", callback: any): number
    on(sigName: "notify::line-numbers-font-name", callback: any): number
    once(sigName: "notify::line-numbers-font-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::line-numbers-font-name", ...args: any[]): void
    connect(sigName: "notify::n-pages", callback: any): number
    on(sigName: "notify::n-pages", callback: any): number
    once(sigName: "notify::n-pages", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::n-pages", ...args: any[]): void
    connect(sigName: "notify::print-footer", callback: any): number
    on(sigName: "notify::print-footer", callback: any): number
    once(sigName: "notify::print-footer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::print-footer", ...args: any[]): void
    connect(sigName: "notify::print-header", callback: any): number
    on(sigName: "notify::print-header", callback: any): number
    once(sigName: "notify::print-header", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::print-header", ...args: any[]): void
    connect(sigName: "notify::print-line-numbers", callback: any): number
    on(sigName: "notify::print-line-numbers", callback: any): number
    once(sigName: "notify::print-line-numbers", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::print-line-numbers", ...args: any[]): void
    connect(sigName: "notify::tab-width", callback: any): number
    on(sigName: "notify::tab-width", callback: any): number
    once(sigName: "notify::tab-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tab-width", ...args: any[]): void
    connect(sigName: "notify::wrap-mode", callback: any): number
    on(sigName: "notify::wrap-mode", callback: any): number
    once(sigName: "notify::wrap-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::wrap-mode", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Compose a [class`Buffer]` for printing.
 * 
 * The `GtkSourcePrintCompositor` object is used to compose a [class`Buffer]`
 * for printing. You can set various configuration options to customize the
 * printed output. `GtkSourcePrintCompositor` is designed to be used with the
 * high-level printing API of gtk+, i.e. [class`Gtk`.PrintOperation].
 * 
 * The margins specified in this object are the layout margins: they define the
 * blank space bordering the printed area of the pages. They must not be
 * confused with the "print margins", i.e. the parts of the page that the
 * printer cannot print on, defined in the [class`Gtk`.PageSetup] objects. If the
 * specified layout margins are smaller than the "print margins", the latter
 * ones are used as a fallback by the `GtkSourcePrintCompositor` object, so that
 * the printed area is not clipped.
 * @class 
 */
export class PrintCompositor extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.PrintCompositor

    static name: string

    // Constructors of GtkSource-5.GtkSource.PrintCompositor

    constructor(config?: PrintCompositor.ConstructorProperties) 
    /**
     * Creates a new print compositor that can be used to print `buffer`.
     * @constructor 
     * @param buffer the #GtkSourceBuffer to print.
     */
    constructor(buffer: Buffer) 
    /**
     * Creates a new print compositor that can be used to print `buffer`.
     * @constructor 
     * @param buffer the #GtkSourceBuffer to print.
     */
    static new(buffer: Buffer): PrintCompositor
    /**
     * Creates a new print compositor that can be used to print the buffer
     * associated with `view`.
     * 
     * This constructor sets some configuration properties to make the
     * printed output match `view` as much as possible.  The properties set are
     * [property`PrintCompositor:`tab-width], [property`PrintCompositor:`highlight-syntax],
     * [property`PrintCompositor:`wrap-mode], [property`PrintCompositor:`body-font-name] and
     * [property`PrintCompositor:`print-line-numbers].
     * @constructor 
     * @param view a #GtkSourceView to get configuration from.
     */
    static newFromView(view: View): PrintCompositor
    _init(config?: PrintCompositor.ConstructorProperties): void
}

export module Region {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.Region

        /**
         * The [class`Gtk`.TextBuffer]. The #GtkSourceRegion has a weak reference to the
         * buffer.
         */
        buffer?: Gtk.TextBuffer | null
    }

}

export interface Region {

    // Own properties of GtkSource-5.GtkSource.Region

    /**
     * The [class`Gtk`.TextBuffer]. The #GtkSourceRegion has a weak reference to the
     * buffer.
     */
    readonly buffer: Gtk.TextBuffer

    // Own fields of GtkSource-5.GtkSource.Region

    parentInstance: GObject.Object

    // Owm methods of GtkSource-5.GtkSource.Region

    /**
     * Adds `region_to_add` to `region`.
     * 
     * `region_to_add` is not modified.
     * @param regionToAdd the #GtkSourceRegion to add to `region,` or %NULL.
     */
    addRegion(regionToAdd: Region | null): void
    /**
     * Adds the subregion delimited by `_start` and `_end` to `region`.
     * @param start the start of the subregion.
     * @param end the end of the subregion.
     */
    addSubregion(start: Gtk.TextIter, end: Gtk.TextIter): void
    /**
     * Gets the `start` and `end` bounds of the `region`.
     */
    getBounds(): [ /* returnType */ boolean, /* start */ Gtk.TextIter, /* end */ Gtk.TextIter ]
    getBuffer(): Gtk.TextBuffer | null
    /**
     * Initializes a [struct`RegionIter]` to the first subregion of `region`.
     * 
     * If `region` is empty, `iter` will be initialized to the end iterator.
     */
    getStartRegionIter(): /* iter */ RegionIter
    /**
     * Returns the intersection between `region1` and `region2`.
     * 
     * `region1` and `region2` are not modified.
     * @param region2 a #GtkSourceRegion, or %NULL.
     */
    intersectRegion(region2: Region | null): Region | null
    /**
     * Returns the intersection between `region` and the subregion delimited by
     * `_start` and `_end`.
     * 
     * `region` is not modified.
     * @param start the start of the subregion.
     * @param end the end of the subregion.
     */
    intersectSubregion(start: Gtk.TextIter, end: Gtk.TextIter): Region | null
    /**
     * Returns whether the `region` is empty.
     * 
     * A %NULL `region` is considered empty.
     */
    isEmpty(): boolean
    /**
     * Subtracts `region_to_subtract` from `region`.
     * 
     * `region_to_subtract` is not modified.
     * @param regionToSubtract the #GtkSourceRegion to subtract from   `region,` or %NULL.
     */
    subtractRegion(regionToSubtract: Region | null): void
    /**
     * Subtracts the subregion delimited by `_start` and `_end` from `region`.
     * @param start the start of the subregion.
     * @param end the end of the subregion.
     */
    subtractSubregion(start: Gtk.TextIter, end: Gtk.TextIter): void
    /**
     * Gets a string represention of `region,` for debugging purposes.
     * 
     * The returned string contains the character offsets of the subregions. It
     * doesn't include a newline character at the end of the string.
     */
    toString(): string | null

    // Class property signals of GtkSource-5.GtkSource.Region

    connect(sigName: "notify::buffer", callback: any): number
    on(sigName: "notify::buffer", callback: any): number
    once(sigName: "notify::buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Region utility.
 * 
 * A `GtkSourceRegion` permits to store a group of subregions of a
 * [class`Gtk`.TextBuffer]. `GtkSourceRegion` stores the subregions with pairs of
 * [class`Gtk`.TextMark]'s, so the region is still valid after insertions and deletions
 * in the [class`Gtk`.TextBuffer].
 * 
 * The [class`Gtk`.TextMark] for the start of a subregion has a left gravity, while the
 * [class`Gtk`.TextMark] for the end of a subregion has a right gravity.
 * 
 * The typical use-case of `GtkSourceRegion` is to scan a [class`Gtk`.TextBuffer] chunk by
 * chunk, not the whole buffer at once to not block the user interface. The
 * `GtkSourceRegion` represents in that case the remaining region to scan. You
 * can listen to the [signal`Gtk`.TextBuffer::insert-text] and
 * [signal`Gtk`.TextBuffer::delete-range] signals to update the `GtkSourceRegion`
 * accordingly.
 * 
 * To iterate through the subregions, you need to use a [struct`RegionIter]`,
 * for example:
 * ```c
 * GtkSourceRegion *region;
 * GtkSourceRegionIter region_iter;
 * 
 * gtk_source_region_get_start_region_iter (region, &region_iter);
 * 
 * while (!gtk_source_region_iter_is_end (&region_iter))
 * {
 *         GtkTextIter subregion_start;
 *         GtkTextIter subregion_end;
 * 
 *         if (!gtk_source_region_iter_get_subregion (&region_iter,
 *                                                    &subregion_start,
 *                                                    &subregion_end))
 *         {
 *                 break;
 *         }
 * 
 *         // Do something useful with the subregion.
 * 
 *         gtk_source_region_iter_next (&region_iter);
 * }
 * ```
 * @class 
 */
export class Region extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.Region

    static name: string

    // Constructors of GtkSource-5.GtkSource.Region

    constructor(config?: Region.ConstructorProperties) 
    constructor(buffer: Gtk.TextBuffer) 
    static new(buffer: Gtk.TextBuffer): Region
    _init(config?: Region.ConstructorProperties): void
}

export module SearchContext {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.SearchContext

        /**
         * The [class`Buffer]` associated to the search context.
         */
        buffer?: Buffer | null
        /**
         * Highlight the search occurrences.
         */
        highlight?: boolean | null
        /**
         * A [class`Style]`, or %NULL for theme's scheme default style.
         */
        matchStyle?: Style | null
        /**
         * The [class`SearchSettings]` associated to the search context.
         * 
         * This property is construct-only since version 4.0.
         */
        settings?: SearchSettings | null
    }

}

export interface SearchContext {

    // Own properties of GtkSource-5.GtkSource.SearchContext

    /**
     * The [class`Buffer]` associated to the search context.
     */
    readonly buffer: Buffer
    /**
     * Highlight the search occurrences.
     */
    highlight: boolean
    /**
     * A [class`Style]`, or %NULL for theme's scheme default style.
     */
    matchStyle: Style
    /**
     * The total number of search occurrences. If the search is disabled,
     * the value is 0. If the buffer is not already fully scanned, the value
     * is -1.
     */
    readonly occurrencesCount: number
    /**
     * If the regex search pattern doesn't follow all the rules, this
     * #GError property will be set. If the pattern is valid, the value is
     * %NULL.
     * 
     * Free with [method`GLib`.Error.free].
     */
    readonly regexError: GLib.Error
    /**
     * The [class`SearchSettings]` associated to the search context.
     * 
     * This property is construct-only since version 4.0.
     */
    readonly settings: SearchSettings

    // Owm methods of GtkSource-5.GtkSource.SearchContext

    /**
     * Synchronous backward search.
     * 
     * It is recommended to use the asynchronous functions instead, to not block the user interface.
     * However, if you are sure that the `buffer` is small, this function is more convenient to use.
     * 
     * If the [property`SearchSettings:`wrap-around] property is %FALSE, this function
     * doesn't try to wrap around.
     * 
     * The `has_wrapped_around` out parameter is set independently of whether a match
     * is found. So if this function returns %FALSE, `has_wrapped_around` will have
     * the same value as the [property`SearchSettings:`wrap-around] property.
     * @param iter start of search.
     */
    backward(iter: Gtk.TextIter): [ /* returnType */ boolean, /* matchStart */ Gtk.TextIter, /* matchEnd */ Gtk.TextIter, /* hasWrappedAround */ boolean ]
    /**
     * The asynchronous version of [method`SearchContext`.backward].
     * 
     * See the [iface`Gio`.AsyncResult] documentation to know how to use this function.
     * 
     * If the operation is cancelled, the `callback` will only be called if
     * `cancellable` was not %NULL. The method takes
     * ownership of `cancellable,` so you can unref it after calling this function.
     * @param iter start of search.
     * @param cancellable a #GCancellable, or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the operation is finished.
     */
    backwardAsync(iter: Gtk.TextIter, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a backward search started with
     * [method`SearchContext`.backward_async].
     * 
     * See the documentation of [method`SearchContext`.backward] for more
     * details.
     * @param result a #GAsyncResult.
     */
    backwardFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* matchStart */ Gtk.TextIter, /* matchEnd */ Gtk.TextIter, /* hasWrappedAround */ boolean ]
    /**
     * Synchronous forward search.
     * 
     * It is recommended to use the asynchronous functions instead, to not block the user interface.
     * However, if you are sure that the `buffer` is small, this function is more convenient to use.
     * 
     * If the [property`SearchSettings:`wrap-around] property is %FALSE, this function
     * doesn't try to wrap around.
     * 
     * The `has_wrapped_around` out parameter is set independently of whether a match
     * is found. So if this function returns %FALSE, `has_wrapped_around` will have
     * the same value as the  [property`SearchSettings:`wrap-around] property.
     * @param iter start of search.
     */
    forward(iter: Gtk.TextIter): [ /* returnType */ boolean, /* matchStart */ Gtk.TextIter, /* matchEnd */ Gtk.TextIter, /* hasWrappedAround */ boolean ]
    /**
     * The asynchronous version of [method`SearchContext`.forward].
     * 
     * See the [iface`Gio`.AsyncResult] documentation to know how to use this function.
     * 
     * If the operation is cancelled, the `callback` will only be called if
     * `cancellable` was not %NULL. The method takes
     * ownership of `cancellable,` so you can unref it after calling this function.
     * @param iter start of search.
     * @param cancellable a #GCancellable, or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the operation is finished.
     */
    forwardAsync(iter: Gtk.TextIter, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a forward search started with [method`SearchContext`.forward_async].
     * 
     * See the documentation of [method`SearchContext`.forward] for more
     * details.
     * @param result a #GAsyncResult.
     */
    forwardFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* matchStart */ Gtk.TextIter, /* matchEnd */ Gtk.TextIter, /* hasWrappedAround */ boolean ]
    getBuffer(): Buffer
    getHighlight(): boolean
    getMatchStyle(): Style
    /**
     * Gets the position of a search occurrence.
     * 
     * If the buffer is not already fully scanned, the position may be unknown,
     * and -1 is returned. If 0 is returned, it means that this part of the buffer
     * has already been scanned, and that `match_start` and `match_end` don't delimit an occurrence.
     * @param matchStart the start of the occurrence.
     * @param matchEnd the end of the occurrence.
     */
    getOccurrencePosition(matchStart: Gtk.TextIter, matchEnd: Gtk.TextIter): number
    /**
     * Gets the total number of search occurrences.
     * 
     * If the buffer is not already fully scanned, the total number of occurrences is
     * unknown, and -1 is returned.
     */
    getOccurrencesCount(): number
    /**
     * Regular expression patterns must follow certain rules. If
     * [property`SearchSettings:`search-text] breaks a rule, the error can be
     * retrieved with this function.
     * 
     * The error domain is [enum`GLib`.RegexError].
     * 
     * Free the return value with [method`GLib`.Error.free].
     */
    getRegexError(): GLib.Error | null
    getSettings(): SearchSettings
    /**
     * Replaces a search match by another text. If `match_start` and `match_end`
     * doesn't correspond to a search match, %FALSE is returned.
     * 
     * `match_start` and `match_end` iters are revalidated to point to the replacement
     * text boundaries.
     * 
     * For a regular expression replacement, you can check if `replace` is valid by
     * calling [func`GLib`.Regex.check_replacement]. The `replace` text can contain
     * backreferences.
     * @param matchStart the start of the match to replace.
     * @param matchEnd the end of the match to replace.
     * @param replace the replacement text.
     * @param replaceLength the length of `replace` in bytes, or -1.
     */
    replace(matchStart: Gtk.TextIter, matchEnd: Gtk.TextIter, replace: string, replaceLength: number): boolean
    /**
     * Replaces all search matches by another text.
     * 
     * It is a synchronous function, so it can block the user interface.
     * 
     * For a regular expression replacement, you can check if `replace` is valid by
     * calling [func`GLib`.Regex.check_replacement]. The `replace` text can contain
     * backreferences.
     * @param replace the replacement text.
     * @param replaceLength the length of `replace` in bytes, or -1.
     */
    replaceAll(replace: string, replaceLength: number): number
    /**
     * Enables or disables the search occurrences highlighting.
     * @param highlight the setting.
     */
    setHighlight(highlight: boolean): void
    /**
     * Set the style to apply on search matches.
     * 
     * If `match_style` is %NULL, default theme's scheme 'match-style' will be used.
     * To enable or disable the search highlighting, use [method`SearchContext`.set_highlight].
     * @param matchStyle a #GtkSourceStyle, or %NULL.
     */
    setMatchStyle(matchStyle: Style | null): void

    // Class property signals of GtkSource-5.GtkSource.SearchContext

    connect(sigName: "notify::buffer", callback: any): number
    on(sigName: "notify::buffer", callback: any): number
    once(sigName: "notify::buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::highlight", callback: any): number
    on(sigName: "notify::highlight", callback: any): number
    once(sigName: "notify::highlight", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::highlight", ...args: any[]): void
    connect(sigName: "notify::match-style", callback: any): number
    on(sigName: "notify::match-style", callback: any): number
    once(sigName: "notify::match-style", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::match-style", ...args: any[]): void
    connect(sigName: "notify::occurrences-count", callback: any): number
    on(sigName: "notify::occurrences-count", callback: any): number
    once(sigName: "notify::occurrences-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::occurrences-count", ...args: any[]): void
    connect(sigName: "notify::regex-error", callback: any): number
    on(sigName: "notify::regex-error", callback: any): number
    once(sigName: "notify::regex-error", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::regex-error", ...args: any[]): void
    connect(sigName: "notify::settings", callback: any): number
    on(sigName: "notify::settings", callback: any): number
    once(sigName: "notify::settings", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::settings", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Search context.
 * 
 * A `GtkSourceSearchContext` is used for the search and replace in a
 * [class`Buffer]`. The search settings are represented by a
 * [class`SearchSettings]` object. There can be a many-to-many relationship
 * between buffers and search settings, with the search contexts in-between: a
 * search settings object can be shared between several search contexts; and a
 * buffer can contain several search contexts at the same time.
 * 
 * The total number of search occurrences can be retrieved with
 * [method`SearchContext`.get_occurrences_count]. To know the position of a
 * certain match, use [method`SearchContext`.get_occurrence_position].
 * 
 * The buffer is scanned asynchronously, so it doesn't block the user interface.
 * For each search, the buffer is scanned at most once. After that, navigating
 * through the occurrences doesn't require to re-scan the buffer entirely.
 * 
 * To search forward, use [method`SearchContext`.forward] or
 * [method`SearchContext`.forward_async] for the asynchronous version.
 * The backward search is done similarly. To replace a search match, or all
 * matches, use [method`SearchContext`.replace] and
 * [method`SearchContext`.replace_all].
 * 
 * The search occurrences are highlighted by default. To disable it, use
 * [method`SearchContext`.set_highlight]. You can enable the search
 * highlighting for several `GtkSourceSearchContext`s attached to the
 * same buffer. Moreover, each of those `GtkSourceSearchContext`s can
 * have a different text style associated. Use
 * [method`SearchContext`.set_match_style] to specify the [class`Style]`
 * to apply on search matches.
 * 
 * Note that the [property`SearchContext:`highlight] and
 * [property`SearchContext:`match-style] properties are in the
 * `GtkSourceSearchContext` class, not [class`SearchSettings]`. Appearance
 * settings should be tied to one, and only one buffer, as different buffers can
 * have different style scheme associated (a [class`SearchSettings]` object
 * can be bound indirectly to several buffers).
 * 
 * The concept of "current match" doesn't exist yet. A way to highlight
 * differently the current match is to select it.
 * 
 * A search occurrence's position doesn't depend on the cursor position or other
 * parameters. Take for instance the buffer "aaaa" with the search text "aa".
 * The two occurrences are at positions [0:2] and [2:4]. If you begin to search
 * at position 1, you will get the occurrence [2:4], not [1:3]. This is a
 * prerequisite for regular expression searches. The pattern ".*" matches the
 * entire line. If the cursor is at the middle of the line, you don't want the
 * rest of the line as the occurrence, you want an entire line. (As a side note,
 * regular expression searches can also match multiple lines.)
 * 
 * In the GtkSourceView source code, there is an example of how to use the
 * search and replace API: see the tests/test-search.c file. It is a mini
 * application for the search and replace, with a basic user interface.
 * @class 
 */
export class SearchContext extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.SearchContext

    static name: string

    // Constructors of GtkSource-5.GtkSource.SearchContext

    constructor(config?: SearchContext.ConstructorProperties) 
    /**
     * Creates a new search context, associated with `buffer,` and customized with
     * `settings`.
     * 
     * If `settings` is %NULL, a new [class`SearchSettings]` object will
     * be created, that you can retrieve with [method`SearchContext`.get_settings].
     * @constructor 
     * @param buffer a #GtkSourceBuffer.
     * @param settings a #GtkSourceSearchSettings, or %NULL.
     */
    constructor(buffer: Buffer, settings: SearchSettings | null) 
    /**
     * Creates a new search context, associated with `buffer,` and customized with
     * `settings`.
     * 
     * If `settings` is %NULL, a new [class`SearchSettings]` object will
     * be created, that you can retrieve with [method`SearchContext`.get_settings].
     * @constructor 
     * @param buffer a #GtkSourceBuffer.
     * @param settings a #GtkSourceSearchSettings, or %NULL.
     */
    static new(buffer: Buffer, settings: SearchSettings | null): SearchContext
    _init(config?: SearchContext.ConstructorProperties): void
}

export module SearchSettings {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.SearchSettings

        /**
         * If %TRUE, a search match must start and end a word. The match can
         * span multiple words.
         */
        atWordBoundaries?: boolean | null
        /**
         * Whether the search is case sensitive.
         */
        caseSensitive?: boolean | null
        /**
         * Search by regular expressions with
         * [property`SearchSettings:`search-text] as the pattern.
         */
        regexEnabled?: boolean | null
        /**
         * A search string, or %NULL if the search is disabled.
         * 
         * If the regular expression search is enabled, [property`SearchSettings:`search-text] is
         * the pattern.
         */
        searchText?: string | null
        /**
         * For a forward search, continue at the beginning of the buffer if no
         * search occurrence is found. For a backward search, continue at the
         * end of the buffer.
         */
        wrapAround?: boolean | null
    }

}

export interface SearchSettings {

    // Own properties of GtkSource-5.GtkSource.SearchSettings

    /**
     * If %TRUE, a search match must start and end a word. The match can
     * span multiple words.
     */
    atWordBoundaries: boolean
    /**
     * Whether the search is case sensitive.
     */
    caseSensitive: boolean
    /**
     * Search by regular expressions with
     * [property`SearchSettings:`search-text] as the pattern.
     */
    regexEnabled: boolean
    /**
     * A search string, or %NULL if the search is disabled.
     * 
     * If the regular expression search is enabled, [property`SearchSettings:`search-text] is
     * the pattern.
     */
    searchText: string
    /**
     * For a forward search, continue at the beginning of the buffer if no
     * search occurrence is found. For a backward search, continue at the
     * end of the buffer.
     */
    wrapAround: boolean

    // Own fields of GtkSource-5.GtkSource.SearchSettings

    parentInstance: GObject.Object

    // Owm methods of GtkSource-5.GtkSource.SearchSettings

    getAtWordBoundaries(): boolean
    getCaseSensitive(): boolean
    getRegexEnabled(): boolean
    /**
     * Gets the text to search.
     * 
     * The return value must not be freed.
     * 
     * You may be interested to call [func`utils_escape_search_text]` after
     * this function.
     */
    getSearchText(): string | null
    getWrapAround(): boolean
    /**
     * Change whether the search is done at word boundaries.
     * 
     * If `at_word_boundaries` is %TRUE, a search match must start and end a word.
     * The match can span multiple words. See also [method`Gtk`.TextIter.starts_word] and
     * [method`Gtk`.TextIter.ends_word].
     * @param atWordBoundaries the setting.
     */
    setAtWordBoundaries(atWordBoundaries: boolean): void
    /**
     * Enables or disables the case sensitivity for the search.
     * @param caseSensitive the setting.
     */
    setCaseSensitive(caseSensitive: boolean): void
    /**
     * Enables or disables whether to search by regular expressions.
     * 
     * If enabled, the [property`SearchSettings:`search-text] property contains the
     * pattern of the regular expression.
     * 
     * [class`SearchContext]` uses #GRegex when regex search is enabled. See the
     * [Regular expression syntax](https://developer.gnome.org/glib/stable/glib-regex-syntax.html)
     * page in the GLib reference manual.
     * @param regexEnabled the setting.
     */
    setRegexEnabled(regexEnabled: boolean): void
    /**
     * Sets the text to search.
     * 
     * If `search_text` is %NULL or is empty, the search will be disabled. A copy of `search_text`
     * will be made, so you can safely free `search_text` after a call to this function.
     * 
     * You may be interested to call [func`utils_unescape_search_text]` before
     * this function.
     * @param searchText the nul-terminated text to search, or %NULL to disable the search.
     */
    setSearchText(searchText: string | null): void
    /**
     * Enables or disables the wrap around search.
     * 
     * If `wrap_around` is %TRUE, the forward search continues at the beginning of the buffer
     * if no search occurrences are found. Similarly, the backward search continues to search at
     * the end of the buffer.
     * @param wrapAround the setting.
     */
    setWrapAround(wrapAround: boolean): void

    // Class property signals of GtkSource-5.GtkSource.SearchSettings

    connect(sigName: "notify::at-word-boundaries", callback: any): number
    on(sigName: "notify::at-word-boundaries", callback: any): number
    once(sigName: "notify::at-word-boundaries", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::at-word-boundaries", ...args: any[]): void
    connect(sigName: "notify::case-sensitive", callback: any): number
    on(sigName: "notify::case-sensitive", callback: any): number
    once(sigName: "notify::case-sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::case-sensitive", ...args: any[]): void
    connect(sigName: "notify::regex-enabled", callback: any): number
    on(sigName: "notify::regex-enabled", callback: any): number
    once(sigName: "notify::regex-enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::regex-enabled", ...args: any[]): void
    connect(sigName: "notify::search-text", callback: any): number
    on(sigName: "notify::search-text", callback: any): number
    once(sigName: "notify::search-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::search-text", ...args: any[]): void
    connect(sigName: "notify::wrap-around", callback: any): number
    on(sigName: "notify::wrap-around", callback: any): number
    once(sigName: "notify::wrap-around", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::wrap-around", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Search settings.
 * 
 * A `GtkSourceSearchSettings` object represents the settings of a search. The
 * search settings can be associated with one or several
 * [class`SearchContext]`s.
 * @class 
 */
export class SearchSettings extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.SearchSettings

    static name: string

    // Constructors of GtkSource-5.GtkSource.SearchSettings

    constructor(config?: SearchSettings.ConstructorProperties) 
    /**
     * Creates a new search settings object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new search settings object.
     * @constructor 
     */
    static new(): SearchSettings
    _init(config?: SearchSettings.ConstructorProperties): void
}

export module Snippet {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.Snippet

        description?: string | null
        languageId?: string | null
        name?: string | null
        trigger?: string | null
    }

}

export interface Snippet {

    // Own properties of GtkSource-5.GtkSource.Snippet

    readonly buffer: Gtk.TextBuffer
    description: string
    readonly focusPosition: number
    languageId: string
    name: string
    trigger: string

    // Owm methods of GtkSource-5.GtkSource.Snippet

    /**
     * Appends `chunk` to the `snippet`.
     * 
     * This may only be called before the snippet has been expanded.
     * @param chunk a #GtkSourceSnippetChunk
     */
    addChunk(chunk: SnippetChunk): void
    /**
     * Does a deep copy of the snippet.
     */
    copy(): Snippet
    /**
     * Gets the context used for expanding the snippet.
     */
    getContext(): SnippetContext | null
    /**
     * Gets the description for the snippet.
     */
    getDescription(): string
    /**
     * Gets the current focus for the snippet.
     * 
     * This is changed as the user tabs through focus locations.
     */
    getFocusPosition(): number
    /**
     * Gets the language-id used for the source snippet.
     * 
     * The language identifier should be one that matches a
     * source language [property`Language:`id] property.
     */
    getLanguageId(): string
    /**
     * Gets the number of chunks in the snippet.
     * 
     * Note that not all chunks are editable.
     */
    getNChunks(): number
    /**
     * Gets the name for the snippet.
     */
    getName(): string
    /**
     * Gets the chunk at `nth`.
     * @param nth the nth chunk to get
     */
    getNthChunk(nth: number): SnippetChunk
    /**
     * Gets the trigger for the source snippet.
     * 
     * A trigger is a word that can be expanded into the full snippet when
     * the user presses Tab.
     */
    getTrigger(): string | null
    /**
     * Sets the description for the snippet.
     * @param description the snippet description
     */
    setDescription(description: string): void
    /**
     * Sets the language identifier for the snippet.
     * 
     * This should match the [property`Language:`id] identifier.
     * @param languageId the language identifier for the snippet
     */
    setLanguageId(languageId: string): void
    /**
     * Sets the name for the snippet.
     * @param name the snippet name
     */
    setName(name: string): void
    /**
     * Sets the trigger for the snippet.
     * @param trigger the trigger word
     */
    setTrigger(trigger: string): void

    // Class property signals of GtkSource-5.GtkSource.Snippet

    connect(sigName: "notify::buffer", callback: any): number
    on(sigName: "notify::buffer", callback: any): number
    once(sigName: "notify::buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::focus-position", callback: any): number
    on(sigName: "notify::focus-position", callback: any): number
    once(sigName: "notify::focus-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-position", ...args: any[]): void
    connect(sigName: "notify::language-id", callback: any): number
    on(sigName: "notify::language-id", callback: any): number
    once(sigName: "notify::language-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::language-id", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::trigger", callback: any): number
    on(sigName: "notify::trigger", callback: any): number
    once(sigName: "notify::trigger", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::trigger", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Quick insertion code snippets.
 * 
 * The `GtkSourceSnippet` represents a series of chunks that can quickly be
 * inserted into the [class`View]`.
 * 
 * Snippets are defined in XML files which are loaded by the
 * [class`SnippetManager]`. Alternatively, applications can create snippets
 * on demand and insert them into the [class`View]` using
 * [method`View`.push_snippet].
 * 
 * Snippet chunks can reference other snippet chunks as well as post-process
 * the values from other chunks such as capitalization.
 * @class 
 */
export class Snippet extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.Snippet

    static name: string

    // Constructors of GtkSource-5.GtkSource.Snippet

    constructor(config?: Snippet.ConstructorProperties) 
    /**
     * Creates a new #GtkSourceSnippet
     * @constructor 
     * @param trigger the trigger word
     * @param languageId the source language
     */
    constructor(trigger: string | null, languageId: string | null) 
    /**
     * Creates a new #GtkSourceSnippet
     * @constructor 
     * @param trigger the trigger word
     * @param languageId the source language
     */
    static new(trigger: string | null, languageId: string | null): Snippet
    /**
     * Parses the snippet formatted `text` into a series of chunks and adds them
     * to a new #GtkSourceSnippet.
     * @constructor 
     * @param text the formatted snippet text to parse
     */
    static newParsed(text: string): Snippet
    _init(config?: Snippet.ConstructorProperties): void
}

export module SnippetChunk {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.SnippetChunk

        context?: SnippetContext | null
        focusPosition?: number | null
        spec?: string | null
        text?: string | null
        textSet?: boolean | null
        tooltipText?: string | null
    }

}

export interface SnippetChunk {

    // Own properties of GtkSource-5.GtkSource.SnippetChunk

    context: SnippetContext
    focusPosition: number
    spec: string
    text: string
    textSet: boolean
    tooltipText: string

    // Owm methods of GtkSource-5.GtkSource.SnippetChunk

    /**
     * Copies the source snippet.
     */
    copy(): SnippetChunk
    /**
     * Gets the context for the snippet insertion.
     */
    getContext(): SnippetContext
    /**
     * Gets the [property`SnippetChunk:`focus-position].
     * 
     * The focus-position is used to determine how many tabs it takes for the
     * snippet to advanced to this chunk.
     * 
     * A focus-position of zero will be the last focus position of the snippet
     * and snippet editing ends when it has been reached.
     * 
     * A focus-position of -1 means the chunk cannot be focused by the user.
     */
    getFocusPosition(): number
    /**
     * Gets the specification for the chunk.
     * 
     * The specification is evaluated for variables when other chunks are edited
     * within the snippet context. If the user has changed the text, the
     * [property`SnippetChunk:`text] and [property`SnippetChunk:`text-set] properties
     * are updated.
     */
    getSpec(): string | null
    /**
     * Gets the [property`SnippetChunk:`text] property.
     * 
     * The text property is updated when the user edits the text of the chunk.
     * If it has not been edited, the [property`SnippetChunk:`spec] property is
     * returned.
     */
    getText(): string
    /**
     * Gets the [property`SnippetChunk:`text-set] property.
     * 
     * This is typically set when the user has edited a snippet chunk.
     */
    getTextSet(): boolean
    getTooltipText(): string
    setContext(context: SnippetContext): void
    /**
     * Sets the [property`SnippetChunk:`focus-position] property.
     * 
     * The focus-position is used to determine how many tabs it takes for the
     * snippet to advanced to this chunk.
     * 
     * A focus-position of zero will be the last focus position of the snippet
     * and snippet editing ends when it has been reached.
     * 
     * A focus-position of -1 means the chunk cannot be focused by the user.
     * @param focusPosition the focus-position
     */
    setFocusPosition(focusPosition: number): void
    /**
     * Sets the specification for the chunk.
     * 
     * The specification is evaluated for variables when other chunks are edited
     * within the snippet context. If the user has changed the text, the
     * [property`SnippetChunk:`text and] [property`SnippetChunk:`text-set] properties
     * are updated.
     * @param spec the new specification for the chunk
     */
    setSpec(spec: string): void
    /**
     * Sets the text for the snippet chunk.
     * 
     * This is usually used by the snippet engine to update the text, but may
     * be useful when creating custom snippets to avoid expansion of any
     * specification.
     * @param text the text of the property
     */
    setText(text: string): void
    /**
     * Sets the [property`SnippetChunk:`text-set] property.
     * 
     * This is typically set when the user has edited a snippet chunk by the
     * snippet engine.
     * @param textSet the property value
     */
    setTextSet(textSet: boolean): void
    setTooltipText(tooltipText: string): void

    // Class property signals of GtkSource-5.GtkSource.SnippetChunk

    connect(sigName: "notify::context", callback: any): number
    on(sigName: "notify::context", callback: any): number
    once(sigName: "notify::context", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::focus-position", callback: any): number
    on(sigName: "notify::focus-position", callback: any): number
    once(sigName: "notify::focus-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-position", ...args: any[]): void
    connect(sigName: "notify::spec", callback: any): number
    on(sigName: "notify::spec", callback: any): number
    once(sigName: "notify::spec", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spec", ...args: any[]): void
    connect(sigName: "notify::text", callback: any): number
    on(sigName: "notify::text", callback: any): number
    once(sigName: "notify::text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::text-set", callback: any): number
    on(sigName: "notify::text-set", callback: any): number
    once(sigName: "notify::text-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-set", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: any): number
    on(sigName: "notify::tooltip-text", callback: any): number
    once(sigName: "notify::tooltip-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A chunk of text within the source snippet.
 * 
 * The `GtkSourceSnippetChunk` represents a single chunk of text that
 * may or may not be an edit point within the snippet. Chunks that are
 * an edit point (also called a tab stop) have the
 * [property`SnippetChunk:`focus-position] property set.
 * @class 
 */
export class SnippetChunk extends GObject.InitiallyUnowned {

    // Own properties of GtkSource-5.GtkSource.SnippetChunk

    static name: string

    // Constructors of GtkSource-5.GtkSource.SnippetChunk

    constructor(config?: SnippetChunk.ConstructorProperties) 
    /**
     * Create a new `GtkSourceSnippetChunk` that can be added to
     * a [class`Snippet]`.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new `GtkSourceSnippetChunk` that can be added to
     * a [class`Snippet]`.
     * @constructor 
     */
    static new(): SnippetChunk
    _init(config?: SnippetChunk.ConstructorProperties): void
}

export module SnippetContext {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SnippetContext {

    // Owm methods of GtkSource-5.GtkSource.SnippetContext

    /**
     * Removes all variables from the context.
     */
    clearVariables(): void
    expand(input: string): string
    /**
     * Gets the current value for a variable named `key`.
     * @param key the name of the variable
     */
    getVariable(key: string): string | null
    /**
     * Sets a constatnt within the context.
     * 
     * This is similar to a variable set with [method`SnippetContext`.set_variable]
     * but is expected to not change during use of the snippet.
     * 
     * Examples would be the date or users name.
     * @param key the constant name
     * @param value the value of the constant
     */
    setConstant(key: string, value: string): void
    setLinePrefix(linePrefix: string): void
    setTabWidth(tabWidth: number): void
    setUseSpaces(useSpaces: boolean): void
    /**
     * Sets a variable within the context.
     * 
     * This variable may be overridden by future updates to the
     * context.
     * @param key the variable name
     * @param value the value for the variable
     */
    setVariable(key: string, value: string): void

    // Own signals of GtkSource-5.GtkSource.SnippetContext

    connect(sigName: "changed", callback: SnippetContext.ChangedSignalCallback): number
    on(sigName: "changed", callback: SnippetContext.ChangedSignalCallback): number
    once(sigName: "changed", callback: SnippetContext.ChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of GtkSource-5.GtkSource.SnippetContext

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Context for expanding [class`SnippetChunk]`.
 * 
 * This class is currently used primary as a hashtable. However, the longer
 * term goal is to have it hold onto a `GjsContext` as well as other languages
 * so that [class`SnippetChunk]` can expand themselves by executing
 * script within the context.
 * 
 * The [class`Snippet]` will build the context and then expand each of the
 * chunks during the insertion/edit phase.
 * @class 
 */
export class SnippetContext extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.SnippetContext

    static name: string

    // Constructors of GtkSource-5.GtkSource.SnippetContext

    constructor(config?: SnippetContext.ConstructorProperties) 
    /**
     * Creates a new #GtkSourceSnippetContext.
     * 
     * Generally, this isn't needed unless you are controlling the
     * expansion of snippets manually.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GtkSourceSnippetContext.
     * 
     * Generally, this isn't needed unless you are controlling the
     * expansion of snippets manually.
     * @constructor 
     */
    static new(): SnippetContext
    _init(config?: SnippetContext.ConstructorProperties): void
}

export module SnippetManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.SnippetManager

        /**
         * Contains a list of directories to search for files containing snippets (*.snippets).
         */
        searchPath?: string[] | null
    }

}

export interface SnippetManager {

    // Own properties of GtkSource-5.GtkSource.SnippetManager

    /**
     * Contains a list of directories to search for files containing snippets (*.snippets).
     */
    searchPath: string[]

    // Owm methods of GtkSource-5.GtkSource.SnippetManager

    /**
     * Gets the list directories where `self` looks for snippet files.
     */
    getSearchPath(): string[]
    /**
     * Queries the known snippets for the first matching `group,` `language_id,`
     * and/or `trigger`.
     * 
     * If `group` or `language_id` are %NULL, they will be ignored.
     * @param group a group name or %NULL
     * @param languageId a #GtkSourceLanguage:id or %NULL
     * @param trigger the trigger for the snippet
     */
    getSnippet(group: string | null, languageId: string | null, trigger: string): Snippet | null
    /**
     * List all the known groups within the snippet manager.
     * 
     * The result should be freed with g_free(), and the individual strings are
     * owned by `self` and should never be freed by the caller.
     */
    listGroups(): string[]
    /**
     * Queries the known snippets for those matching `group,` `language_id,` and/or
     * `trigger_prefix`.
     * 
     * If any of these are %NULL, they will be ignored when filtering the available snippets.
     * 
     * The [iface`Gio`.ListModel] only contains information about the available snippets until
     * [method`Gio`.ListModel.get_item] is called for a specific snippet. This helps reduce
     * the number of [class`GObject`.Object]'s that are created at runtime to those needed by
     * the calling application.
     * @param group a group name or %NULL
     * @param languageId a #GtkSourceLanguage:id or %NULL
     * @param triggerPrefix a prefix for a trigger to activate
     */
    listMatching(group: string | null, languageId: string | null, triggerPrefix: string | null): Gio.ListModel
    /**
     * Sets the list of directories in which the `GtkSourceSnippetManager` looks for
     * snippet files.
     * 
     * If `dirs` is %NULL, the search path is reset to default.
     * 
     * At the moment this function can be called only before the
     * snippet files are loaded for the first time. In practice
     * to set a custom search path for a `GtkSourceSnippetManager`,
     * you have to call this function right after creating it.
     * @param dirs a %NULL-terminated array of   strings or %NULL.
     */
    setSearchPath(dirs: string[] | null): void

    // Class property signals of GtkSource-5.GtkSource.SnippetManager

    connect(sigName: "notify::search-path", callback: any): number
    on(sigName: "notify::search-path", callback: any): number
    once(sigName: "notify::search-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::search-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Provides access to [class`Snippet]`.
 * 
 * `GtkSourceSnippetManager` is an object which processes snippet description
 * files and creates [class`Snippet]` objects.
 * 
 * Use [func`SnippetManager`.get_default] to retrieve the default
 * instance of `GtkSourceSnippetManager`.
 * 
 * Use [method`SnippetManager`.get_snippet] to retrieve snippets for
 * a given snippets.
 * @class 
 */
export class SnippetManager extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.SnippetManager

    static name: string

    // Constructors of GtkSource-5.GtkSource.SnippetManager

    constructor(config?: SnippetManager.ConstructorProperties) 
    _init(config?: SnippetManager.ConstructorProperties): void
    /**
     * Returns the default #GtkSourceSnippetManager instance.
     */
    static getDefault(): SnippetManager
}

export module SpaceDrawer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.SpaceDrawer

        /**
         * Whether the [property`SpaceDrawer:`matrix] property is enabled.
         */
        enableMatrix?: boolean | null
        /**
         * The property is a [struct`GLib`.Variant] property to specify where and
         * what kind of white spaces to draw.
         * 
         * The [struct`GLib`.Variant] is of type `"au"`, an array of unsigned integers. Each
         * integer is a combination of [flags`SpaceTypeFlags]`. There is one
         * integer for each [flags`SpaceLocationFlags]`, in the same order as
         * they are defined in the enum (%GTK_SOURCE_SPACE_LOCATION_NONE and
         * %GTK_SOURCE_SPACE_LOCATION_ALL are not taken into account).
         * 
         * If the array is shorter than the number of locations, then the value
         * for the missing locations will be %GTK_SOURCE_SPACE_TYPE_NONE.
         * 
         * By default, %GTK_SOURCE_SPACE_TYPE_ALL is set for all locations.4
         */
        matrix?: GLib.Variant | null
    }

}

export interface SpaceDrawer {

    // Own properties of GtkSource-5.GtkSource.SpaceDrawer

    /**
     * Whether the [property`SpaceDrawer:`matrix] property is enabled.
     */
    enableMatrix: boolean
    /**
     * The property is a [struct`GLib`.Variant] property to specify where and
     * what kind of white spaces to draw.
     * 
     * The [struct`GLib`.Variant] is of type `"au"`, an array of unsigned integers. Each
     * integer is a combination of [flags`SpaceTypeFlags]`. There is one
     * integer for each [flags`SpaceLocationFlags]`, in the same order as
     * they are defined in the enum (%GTK_SOURCE_SPACE_LOCATION_NONE and
     * %GTK_SOURCE_SPACE_LOCATION_ALL are not taken into account).
     * 
     * If the array is shorter than the number of locations, then the value
     * for the missing locations will be %GTK_SOURCE_SPACE_TYPE_NONE.
     * 
     * By default, %GTK_SOURCE_SPACE_TYPE_ALL is set for all locations.4
     */
    matrix: GLib.Variant

    // Owm methods of GtkSource-5.GtkSource.SpaceDrawer

    /**
     * Binds the [property`SpaceDrawer:`matrix] property to a [class`Gio`.Settings] key.
     * 
     * The [class`Gio`.Settings] key must be of the same type as the
     * [property`SpaceDrawer:`matrix] property, that is, `"au"`.
     * 
     * The [method`Gio`.Settings.bind] function cannot be used, because the default GIO
     * mapping functions don't support [struct`GLib`.Variant] properties (maybe it will be
     * supported by a future GIO version, in which case this function can be
     * deprecated).
     * @param settings a #GSettings object.
     * @param key the `settings` key to bind.
     * @param flags flags for the binding.
     */
    bindMatrixSetting(settings: Gio.Settings, key: string, flags: Gio.SettingsBindFlags): void
    getEnableMatrix(): boolean
    /**
     * Gets the value of the [property`SpaceDrawer:`matrix] property, as a [struct`GLib`.Variant].
     * 
     * An empty array can be returned in case the matrix is a zero matrix.
     * 
     * The [method`SpaceDrawer`.get_types_for_locations] function may be more
     * convenient to use.
     */
    getMatrix(): GLib.Variant
    /**
     * If only one location is specified, this function returns what kind of
     * white spaces are drawn at that location.
     * 
     * The value is retrieved from the [property`SpaceDrawer:`matrix] property.
     * 
     * If several locations are specified, this function returns the logical AND for
     * those locations. Which means that if a certain kind of white space is present
     * in the return value, then that kind of white space is drawn at all the
     * specified `locations`.
     * @param locations one or several #GtkSourceSpaceLocationFlags.
     */
    getTypesForLocations(locations: SpaceLocationFlags): SpaceTypeFlags
    /**
     * Sets whether the [property`SpaceDrawer:`matrix] property is enabled.
     * @param enableMatrix the new value.
     */
    setEnableMatrix(enableMatrix: boolean): void
    /**
     * Sets a new value to the [property`SpaceDrawer:`matrix] property, as a [struct`GLib`.Variant].
     * 
     * If `matrix` is %NULL, then an empty array is set.
     * 
     * If `matrix` is floating, it is consumed.
     * 
     * The [method`SpaceDrawer`.set_types_for_locations] function may be more
     * convenient to use.
     * @param matrix the new matrix value, or %NULL.
     */
    setMatrix(matrix: GLib.Variant | null): void
    /**
     * Modifies the [property`SpaceDrawer:`matrix] property at the specified
     * `locations`.
     * @param locations one or several #GtkSourceSpaceLocationFlags.
     * @param types a combination of #GtkSourceSpaceTypeFlags.
     */
    setTypesForLocations(locations: SpaceLocationFlags, types: SpaceTypeFlags): void

    // Class property signals of GtkSource-5.GtkSource.SpaceDrawer

    connect(sigName: "notify::enable-matrix", callback: any): number
    on(sigName: "notify::enable-matrix", callback: any): number
    once(sigName: "notify::enable-matrix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enable-matrix", ...args: any[]): void
    connect(sigName: "notify::matrix", callback: any): number
    on(sigName: "notify::matrix", callback: any): number
    once(sigName: "notify::matrix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::matrix", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Represent white space characters with symbols.
 * 
 * #GtkSourceSpaceDrawer provides a way to visualize white spaces, by drawing
 * symbols.
 * 
 * Call [method`View`.get_space_drawer] to get the `GtkSourceSpaceDrawer`
 * instance of a certain [class`View]`.
 * 
 * By default, no white spaces are drawn because the
 * [property`SpaceDrawer:`enable-matrix] is %FALSE.
 * 
 * To draw white spaces, [method`SpaceDrawer`.set_types_for_locations] can
 * be called to set the [property`SpaceDrawer:`matrix] property (by default all
 * space types are enabled at all locations). Then call
 * [method`SpaceDrawer`.set_enable_matrix].
 * 
 * For a finer-grained method, there is also the [class`Tag]`'s
 * [property`Tag:`draw-spaces] property.
 * 
 * # Example
 * 
 * To draw non-breaking spaces everywhere and draw all types of trailing spaces
 * except newlines:
 * ```c
 * gtk_source_space_drawer_set_types_for_locations (space_drawer,
 *                                                  GTK_SOURCE_SPACE_LOCATION_ALL,
 *                                                  GTK_SOURCE_SPACE_TYPE_NBSP);
 * 
 * gtk_source_space_drawer_set_types_for_locations (space_drawer,
 *                                                  GTK_SOURCE_SPACE_LOCATION_TRAILING,
 *                                                  GTK_SOURCE_SPACE_TYPE_ALL &
 *                                                  ~GTK_SOURCE_SPACE_TYPE_NEWLINE);
 * 
 * gtk_source_space_drawer_set_enable_matrix (space_drawer, TRUE);
 * ```
 * 
 * # Use-case: draw unwanted white spaces
 * 
 * A possible use-case is to draw only unwanted white spaces. Examples:
 * 
 * - Draw all trailing spaces.
 * - If the indentation and alignment must be done with spaces, draw tabs.
 * 
 * And non-breaking spaces can always be drawn, everywhere, to distinguish them
 * from normal spaces.
 * @class 
 */
export class SpaceDrawer extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.SpaceDrawer

    static name: string

    // Constructors of GtkSource-5.GtkSource.SpaceDrawer

    constructor(config?: SpaceDrawer.ConstructorProperties) 
    /**
     * Creates a new #GtkSourceSpaceDrawer object.
     * 
     * Useful for storing space drawing settings independently of a [class`View]`.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GtkSourceSpaceDrawer object.
     * 
     * Useful for storing space drawing settings independently of a [class`View]`.
     * @constructor 
     */
    static new(): SpaceDrawer
    _init(config?: SpaceDrawer.ConstructorProperties): void
}

export module Style {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.Style

        background?: string | null
        backgroundSet?: boolean | null
        bold?: boolean | null
        boldSet?: boolean | null
        foreground?: string | null
        foregroundSet?: boolean | null
        italic?: boolean | null
        italicSet?: boolean | null
        lineBackground?: string | null
        lineBackgroundSet?: boolean | null
        pangoUnderline?: Pango.Underline | null
        scale?: string | null
        scaleSet?: boolean | null
        strikethrough?: boolean | null
        strikethroughSet?: boolean | null
        underlineColor?: string | null
        underlineColorSet?: boolean | null
        underlineSet?: boolean | null
        weight?: Pango.Weight | null
        weightSet?: boolean | null
    }

}

export interface Style {

    // Own properties of GtkSource-5.GtkSource.Style

    readonly background: string
    readonly backgroundSet: boolean
    readonly bold: boolean
    readonly boldSet: boolean
    readonly foreground: string
    readonly foregroundSet: boolean
    readonly italic: boolean
    readonly italicSet: boolean
    readonly lineBackground: string
    readonly lineBackgroundSet: boolean
    readonly pangoUnderline: Pango.Underline
    readonly scale: string
    readonly scaleSet: boolean
    readonly strikethrough: boolean
    readonly strikethroughSet: boolean
    readonly underlineColor: string
    readonly underlineColorSet: boolean
    readonly underlineSet: boolean
    readonly weight: Pango.Weight
    readonly weightSet: boolean

    // Owm methods of GtkSource-5.GtkSource.Style

    /**
     * This function modifies the [class`Gtk`.TextTag] properties that are related to the
     * #GtkSourceStyle properties. Other [class`Gtk`.TextTag] properties are left untouched.
     * 
     * If `style` is non-%NULL, applies `style` to `tag`.
     * 
     * If `style` is %NULL, the related *-set properties of [class`Gtk`.TextTag] are set to
     * %FALSE.
     * @param tag a #GtkTextTag to apply styles to.
     */
    apply(tag: Gtk.TextTag): void
    /**
     * Creates a copy of `style,` that is a new #GtkSourceStyle instance which
     * has the same attributes set.
     */
    copy(): Style

    // Class property signals of GtkSource-5.GtkSource.Style

    connect(sigName: "notify::background", callback: any): number
    on(sigName: "notify::background", callback: any): number
    once(sigName: "notify::background", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::background", ...args: any[]): void
    connect(sigName: "notify::background-set", callback: any): number
    on(sigName: "notify::background-set", callback: any): number
    once(sigName: "notify::background-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::background-set", ...args: any[]): void
    connect(sigName: "notify::bold", callback: any): number
    on(sigName: "notify::bold", callback: any): number
    once(sigName: "notify::bold", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bold", ...args: any[]): void
    connect(sigName: "notify::bold-set", callback: any): number
    on(sigName: "notify::bold-set", callback: any): number
    once(sigName: "notify::bold-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bold-set", ...args: any[]): void
    connect(sigName: "notify::foreground", callback: any): number
    on(sigName: "notify::foreground", callback: any): number
    once(sigName: "notify::foreground", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::foreground", ...args: any[]): void
    connect(sigName: "notify::foreground-set", callback: any): number
    on(sigName: "notify::foreground-set", callback: any): number
    once(sigName: "notify::foreground-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::foreground-set", ...args: any[]): void
    connect(sigName: "notify::italic", callback: any): number
    on(sigName: "notify::italic", callback: any): number
    once(sigName: "notify::italic", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::italic", ...args: any[]): void
    connect(sigName: "notify::italic-set", callback: any): number
    on(sigName: "notify::italic-set", callback: any): number
    once(sigName: "notify::italic-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::italic-set", ...args: any[]): void
    connect(sigName: "notify::line-background", callback: any): number
    on(sigName: "notify::line-background", callback: any): number
    once(sigName: "notify::line-background", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::line-background", ...args: any[]): void
    connect(sigName: "notify::line-background-set", callback: any): number
    on(sigName: "notify::line-background-set", callback: any): number
    once(sigName: "notify::line-background-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::line-background-set", ...args: any[]): void
    connect(sigName: "notify::pango-underline", callback: any): number
    on(sigName: "notify::pango-underline", callback: any): number
    once(sigName: "notify::pango-underline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pango-underline", ...args: any[]): void
    connect(sigName: "notify::scale", callback: any): number
    on(sigName: "notify::scale", callback: any): number
    once(sigName: "notify::scale", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::scale-set", callback: any): number
    on(sigName: "notify::scale-set", callback: any): number
    once(sigName: "notify::scale-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-set", ...args: any[]): void
    connect(sigName: "notify::strikethrough", callback: any): number
    on(sigName: "notify::strikethrough", callback: any): number
    once(sigName: "notify::strikethrough", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::strikethrough", ...args: any[]): void
    connect(sigName: "notify::strikethrough-set", callback: any): number
    on(sigName: "notify::strikethrough-set", callback: any): number
    once(sigName: "notify::strikethrough-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::strikethrough-set", ...args: any[]): void
    connect(sigName: "notify::underline-color", callback: any): number
    on(sigName: "notify::underline-color", callback: any): number
    once(sigName: "notify::underline-color", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::underline-color", ...args: any[]): void
    connect(sigName: "notify::underline-color-set", callback: any): number
    on(sigName: "notify::underline-color-set", callback: any): number
    once(sigName: "notify::underline-color-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::underline-color-set", ...args: any[]): void
    connect(sigName: "notify::underline-set", callback: any): number
    on(sigName: "notify::underline-set", callback: any): number
    once(sigName: "notify::underline-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::underline-set", ...args: any[]): void
    connect(sigName: "notify::weight", callback: any): number
    on(sigName: "notify::weight", callback: any): number
    once(sigName: "notify::weight", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::weight", ...args: any[]): void
    connect(sigName: "notify::weight-set", callback: any): number
    on(sigName: "notify::weight-set", callback: any): number
    once(sigName: "notify::weight-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::weight-set", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Represents a style.
 * 
 * The `GtkSourceStyle` structure is used to describe text attributes
 * which are set when given style is used.
 * @class 
 */
export class Style extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.Style

    static name: string

    // Constructors of GtkSource-5.GtkSource.Style

    constructor(config?: Style.ConstructorProperties) 
    _init(config?: Style.ConstructorProperties): void
}

export module StyleScheme {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.StyleScheme

        /**
         * Style scheme id, a unique string used to identify the style scheme
         * in [class`StyleSchemeManager]`.
         */
        id?: string | null
    }

}

export interface StyleScheme {

    // Own properties of GtkSource-5.GtkSource.StyleScheme

    /**
     * Style scheme description, a translatable string to present to the user.
     */
    readonly description: string
    /**
     * Style scheme filename or %NULL.
     */
    readonly filename: string
    /**
     * Style scheme id, a unique string used to identify the style scheme
     * in [class`StyleSchemeManager]`.
     */
    readonly id: string
    /**
     * Style scheme name, a translatable string to present to the user.
     */
    readonly name: string

    // Owm methods of GtkSource-5.GtkSource.StyleScheme

    getAuthors(): string[] | null
    getDescription(): string | null
    getFilename(): string | null
    getId(): string
    /**
     * Gets a metadata property from the style scheme.
     * @param name metadata property name.
     */
    getMetadata(name: string): string | null
    getName(): string
    getStyle(styleId: string): Style | null

    // Class property signals of GtkSource-5.GtkSource.StyleScheme

    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::filename", callback: any): number
    on(sigName: "notify::filename", callback: any): number
    once(sigName: "notify::filename", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Controls the appearance of [class`View]`.
 * 
 * #GtkSourceStyleScheme contains all the text styles to be used in
 * [class`View]` and [class`Buffer]`. For instance, it contains text styles
 * for syntax highlighting, it may contain foreground and background color for
 * non-highlighted text, color for the line numbers, current line highlighting,
 * bracket matching, etc.
 * 
 * Style schemes are stored in XML files. The format of a scheme file is
 * documented in the [style scheme reference](./style-reference.html).
 * 
 * The two style schemes with IDs "classic" and "tango" follow more closely the
 * GTK theme (for example for the background color).
 * @class 
 */
export class StyleScheme extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.StyleScheme

    static name: string

    // Constructors of GtkSource-5.GtkSource.StyleScheme

    constructor(config?: StyleScheme.ConstructorProperties) 
    _init(config?: StyleScheme.ConstructorProperties): void
}

export module StyleSchemeChooserButton {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, StyleSchemeChooser.ConstructorProperties, Gtk.Button.ConstructorProperties {
    }

}

export interface StyleSchemeChooserButton extends Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget, StyleSchemeChooser {

    // Own fields of GtkSource-5.GtkSource.StyleSchemeChooserButton

    parentInstance: any

    // Conflicting methods

    activate(): void

    // Overloads of activate

    /**
     * For widgets that can be ???activated??? (buttons, menu items, etc.),
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
     * For widgets that can be ???activated??? (buttons, menu items, etc.),
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

    // Class property signals of GtkSource-5.GtkSource.StyleSchemeChooserButton

    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: any): number
    on(sigName: "notify::has-frame", callback: any): number
    once(sigName: "notify::has-frame", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
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
    connect(sigName: "notify::style-scheme", callback: any): number
    on(sigName: "notify::style-scheme", callback: any): number
    once(sigName: "notify::style-scheme", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::style-scheme", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A button to launch a style scheme selection dialog.
 * 
 * The `GtkSourceStyleSchemeChooserButton` is a button which displays
 * the currently selected style scheme and allows to open a style scheme
 * selection dialog to change the style scheme.
 * It is suitable widget for selecting a style scheme in a preference dialog.
 * 
 * In `GtkSourceStyleSchemeChooserButton`, a [class`StyleSchemeChooserWidget]`
 * is used to provide a dialog for selecting style schemes.
 * @class 
 */
export class StyleSchemeChooserButton extends Gtk.Button {

    // Own properties of GtkSource-5.GtkSource.StyleSchemeChooserButton

    static name: string

    // Constructors of GtkSource-5.GtkSource.StyleSchemeChooserButton

    constructor(config?: StyleSchemeChooserButton.ConstructorProperties) 
    /**
     * Creates a new #GtkSourceStyleSchemeChooserButton.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GtkSourceStyleSchemeChooserButton.
     * @constructor 
     */
    static new(): StyleSchemeChooserButton
    _init(config?: StyleSchemeChooserButton.ConstructorProperties): void
}

export module StyleSchemeChooserWidget {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, StyleSchemeChooser.ConstructorProperties, Gtk.Widget.ConstructorProperties {
    }

}

export interface StyleSchemeChooserWidget extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, StyleSchemeChooser {

    // Own fields of GtkSource-5.GtkSource.StyleSchemeChooserWidget

    parentInstance: any

    // Class property signals of GtkSource-5.GtkSource.StyleSchemeChooserWidget

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
    connect(sigName: "notify::style-scheme", callback: any): number
    on(sigName: "notify::style-scheme", callback: any): number
    once(sigName: "notify::style-scheme", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::style-scheme", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A widget for choosing style schemes.
 * 
 * The `GtkSourceStyleSchemeChooserWidget` widget lets the user select a
 * style scheme. By default, the chooser presents a predefined list
 * of style schemes.
 * 
 * To change the initially selected style scheme,
 * use [method`StyleSchemeChooser`.set_style_scheme].
 * To get the selected style scheme
 * use [method`StyleSchemeChooser`.get_style_scheme].
 * @class 
 */
export class StyleSchemeChooserWidget extends Gtk.Widget {

    // Own properties of GtkSource-5.GtkSource.StyleSchemeChooserWidget

    static name: string

    // Constructors of GtkSource-5.GtkSource.StyleSchemeChooserWidget

    constructor(config?: StyleSchemeChooserWidget.ConstructorProperties) 
    /**
     * Creates a new #GtkSourceStyleSchemeChooserWidget.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GtkSourceStyleSchemeChooserWidget.
     * @constructor 
     */
    static new(): StyleSchemeChooserWidget
    _init(config?: StyleSchemeChooserWidget.ConstructorProperties): void
}

export module StyleSchemeManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.StyleSchemeManager

        searchPath?: string[] | null
    }

}

export interface StyleSchemeManager {

    // Own properties of GtkSource-5.GtkSource.StyleSchemeManager

    readonly schemeIds: string[]
    searchPath: string[]

    // Owm methods of GtkSource-5.GtkSource.StyleSchemeManager

    /**
     * Appends `path` to the list of directories where the `manager` looks for
     * style scheme files.
     * 
     * See [method`StyleSchemeManager`.set_search_path] for details.
     * @param path a directory or a filename.
     */
    appendSearchPath(path: string): void
    /**
     * Mark any currently cached information about the available style schems
     * as invalid.
     * 
     * All the available style schemes will be reloaded next time the `manager` is accessed.
     */
    forceRescan(): void
    /**
     * Looks up style scheme by id.
     * @param schemeId style scheme id to find.
     */
    getScheme(schemeId: string): StyleScheme | null
    /**
     * Returns the ids of the available style schemes.
     */
    getSchemeIds(): string[] | null
    /**
     * Returns the current search path for the `manager`.
     * 
     * See [method`StyleSchemeManager`.set_search_path] for details.
     */
    getSearchPath(): string[]
    /**
     * Prepends `path` to the list of directories where the `manager` looks
     * for style scheme files.
     * 
     * See [method`StyleSchemeManager`.set_search_path] for details.
     * @param path a directory or a filename.
     */
    prependSearchPath(path: string): void
    /**
     * Sets the list of directories where the `manager` looks for
     * style scheme files.
     * 
     * If `path` is %NULL, the search path is reset to default.
     * @param path a %NULL-terminated array of   strings or %NULL.
     */
    setSearchPath(path: string[] | null): void

    // Class property signals of GtkSource-5.GtkSource.StyleSchemeManager

    connect(sigName: "notify::scheme-ids", callback: any): number
    on(sigName: "notify::scheme-ids", callback: any): number
    once(sigName: "notify::scheme-ids", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scheme-ids", ...args: any[]): void
    connect(sigName: "notify::search-path", callback: any): number
    on(sigName: "notify::search-path", callback: any): number
    once(sigName: "notify::search-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::search-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Provides access to [class`StyleScheme]`s.
 * @class 
 */
export class StyleSchemeManager extends GObject.Object {

    // Own properties of GtkSource-5.GtkSource.StyleSchemeManager

    static name: string

    // Constructors of GtkSource-5.GtkSource.StyleSchemeManager

    constructor(config?: StyleSchemeManager.ConstructorProperties) 
    /**
     * Creates a new style manager.
     * 
     * If you do not need more than one style manager
     * then use [func`StyleSchemeManager`.get_default] instead.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new style manager.
     * 
     * If you do not need more than one style manager
     * then use [func`StyleSchemeManager`.get_default] instead.
     * @constructor 
     */
    static new(): StyleSchemeManager
    _init(config?: StyleSchemeManager.ConstructorProperties): void
    /**
     * Returns the default #GtkSourceStyleSchemeManager instance.
     */
    static getDefault(): StyleSchemeManager
}

export module StyleSchemePreview {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate`
     */
    export interface ActivateSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.StyleSchemePreview

        scheme?: StyleScheme | null
        selected?: boolean | null
    }

}

export interface StyleSchemePreview extends Gtk.Accessible, Gtk.Actionable, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of GtkSource-5.GtkSource.StyleSchemePreview

    readonly scheme: StyleScheme
    selected: boolean

    // Owm methods of GtkSource-5.GtkSource.StyleSchemePreview

    /**
     * Gets the #GtkSourceStyleScheme previewed by the widget.
     */
    getScheme(): StyleScheme
    getSelected(): boolean
    setSelected(selected: boolean): void

    // Own signals of GtkSource-5.GtkSource.StyleSchemePreview

    connect(sigName: "activate", callback: StyleSchemePreview.ActivateSignalCallback): number
    on(sigName: "activate", callback: StyleSchemePreview.ActivateSignalCallback): number
    once(sigName: "activate", callback: StyleSchemePreview.ActivateSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "activate", ...args: any[]): void

    // Class property signals of GtkSource-5.GtkSource.StyleSchemePreview

    connect(sigName: "notify::scheme", callback: any): number
    on(sigName: "notify::scheme", callback: any): number
    once(sigName: "notify::scheme", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scheme", ...args: any[]): void
    connect(sigName: "notify::selected", callback: any): number
    on(sigName: "notify::selected", callback: any): number
    once(sigName: "notify::selected", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selected", ...args: any[]): void
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
 * A preview widget for [class`StyleScheme]`.
 * 
 * This widget provides a convenient [class`Gtk`.Widget] to preview a [class`StyleScheme]`.
 * 
 * The [property`StyleSchemePreview:`selected] property can be used to manage
 * the selection state of a single preview widget.
 * @class 
 */
export class StyleSchemePreview extends Gtk.Widget {

    // Own properties of GtkSource-5.GtkSource.StyleSchemePreview

    static name: string

    // Constructors of GtkSource-5.GtkSource.StyleSchemePreview

    constructor(config?: StyleSchemePreview.ConstructorProperties) 
    /**
     * Creates a new #GtkSourceStyleSchemePreview to preview the style scheme
     * provided in `scheme`.
     * @constructor 
     * @param scheme a #GtkSourceStyleScheme
     */
    constructor(scheme: StyleScheme) 
    /**
     * Creates a new #GtkSourceStyleSchemePreview to preview the style scheme
     * provided in `scheme`.
     * @constructor 
     * @param scheme a #GtkSourceStyleScheme
     */
    static new(scheme: StyleScheme): StyleSchemePreview
    _init(config?: StyleSchemePreview.ConstructorProperties): void
}

export module Tag {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.TextTag.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.Tag

        /**
         * Whether to draw white spaces.
         * 
         * This property takes precedence over the value defined by the [class`SpaceDrawer]`'s
         * [property`SpaceDrawer:`matrix] property (only where the tag is applied).
         * 
         * Setting this property also changes [property`Tag:`draw-spaces-set] to
         * %TRUE.
         */
        drawSpaces?: boolean | null
        /**
         * Whether the [property`Tag:`draw-spaces] property is set and must be
         * taken into account.
         */
        drawSpacesSet?: boolean | null
    }

}

export interface Tag {

    // Own properties of GtkSource-5.GtkSource.Tag

    /**
     * Whether to draw white spaces.
     * 
     * This property takes precedence over the value defined by the [class`SpaceDrawer]`'s
     * [property`SpaceDrawer:`matrix] property (only where the tag is applied).
     * 
     * Setting this property also changes [property`Tag:`draw-spaces-set] to
     * %TRUE.
     */
    drawSpaces: boolean
    /**
     * Whether the [property`Tag:`draw-spaces] property is set and must be
     * taken into account.
     */
    drawSpacesSet: boolean

    // Own fields of GtkSource-5.GtkSource.Tag

    parentInstance: any

    // Class property signals of GtkSource-5.GtkSource.Tag

    connect(sigName: "notify::draw-spaces", callback: any): number
    on(sigName: "notify::draw-spaces", callback: any): number
    once(sigName: "notify::draw-spaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::draw-spaces", ...args: any[]): void
    connect(sigName: "notify::draw-spaces-set", callback: any): number
    on(sigName: "notify::draw-spaces-set", callback: any): number
    once(sigName: "notify::draw-spaces-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::draw-spaces-set", ...args: any[]): void
    connect(sigName: "notify::accumulative-margin", callback: any): number
    on(sigName: "notify::accumulative-margin", callback: any): number
    once(sigName: "notify::accumulative-margin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accumulative-margin", ...args: any[]): void
    connect(sigName: "notify::allow-breaks", callback: any): number
    on(sigName: "notify::allow-breaks", callback: any): number
    once(sigName: "notify::allow-breaks", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allow-breaks", ...args: any[]): void
    connect(sigName: "notify::allow-breaks-set", callback: any): number
    on(sigName: "notify::allow-breaks-set", callback: any): number
    once(sigName: "notify::allow-breaks-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allow-breaks-set", ...args: any[]): void
    connect(sigName: "notify::background", callback: any): number
    on(sigName: "notify::background", callback: any): number
    once(sigName: "notify::background", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::background", ...args: any[]): void
    connect(sigName: "notify::background-full-height", callback: any): number
    on(sigName: "notify::background-full-height", callback: any): number
    once(sigName: "notify::background-full-height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::background-full-height", ...args: any[]): void
    connect(sigName: "notify::background-full-height-set", callback: any): number
    on(sigName: "notify::background-full-height-set", callback: any): number
    once(sigName: "notify::background-full-height-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::background-full-height-set", ...args: any[]): void
    connect(sigName: "notify::background-rgba", callback: any): number
    on(sigName: "notify::background-rgba", callback: any): number
    once(sigName: "notify::background-rgba", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::background-rgba", ...args: any[]): void
    connect(sigName: "notify::background-set", callback: any): number
    on(sigName: "notify::background-set", callback: any): number
    once(sigName: "notify::background-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::background-set", ...args: any[]): void
    connect(sigName: "notify::direction", callback: any): number
    on(sigName: "notify::direction", callback: any): number
    once(sigName: "notify::direction", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::direction", ...args: any[]): void
    connect(sigName: "notify::editable", callback: any): number
    on(sigName: "notify::editable", callback: any): number
    once(sigName: "notify::editable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::editable-set", callback: any): number
    on(sigName: "notify::editable-set", callback: any): number
    once(sigName: "notify::editable-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::editable-set", ...args: any[]): void
    connect(sigName: "notify::fallback", callback: any): number
    on(sigName: "notify::fallback", callback: any): number
    once(sigName: "notify::fallback", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fallback", ...args: any[]): void
    connect(sigName: "notify::fallback-set", callback: any): number
    on(sigName: "notify::fallback-set", callback: any): number
    once(sigName: "notify::fallback-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fallback-set", ...args: any[]): void
    connect(sigName: "notify::family", callback: any): number
    on(sigName: "notify::family", callback: any): number
    once(sigName: "notify::family", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::family", ...args: any[]): void
    connect(sigName: "notify::family-set", callback: any): number
    on(sigName: "notify::family-set", callback: any): number
    once(sigName: "notify::family-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::family-set", ...args: any[]): void
    connect(sigName: "notify::font", callback: any): number
    on(sigName: "notify::font", callback: any): number
    once(sigName: "notify::font", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::font", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: any): number
    on(sigName: "notify::font-desc", callback: any): number
    once(sigName: "notify::font-desc", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::font-features", callback: any): number
    on(sigName: "notify::font-features", callback: any): number
    once(sigName: "notify::font-features", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::font-features", ...args: any[]): void
    connect(sigName: "notify::font-features-set", callback: any): number
    on(sigName: "notify::font-features-set", callback: any): number
    once(sigName: "notify::font-features-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::font-features-set", ...args: any[]): void
    connect(sigName: "notify::foreground", callback: any): number
    on(sigName: "notify::foreground", callback: any): number
    once(sigName: "notify::foreground", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::foreground", ...args: any[]): void
    connect(sigName: "notify::foreground-rgba", callback: any): number
    on(sigName: "notify::foreground-rgba", callback: any): number
    once(sigName: "notify::foreground-rgba", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::foreground-rgba", ...args: any[]): void
    connect(sigName: "notify::foreground-set", callback: any): number
    on(sigName: "notify::foreground-set", callback: any): number
    once(sigName: "notify::foreground-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::foreground-set", ...args: any[]): void
    connect(sigName: "notify::indent", callback: any): number
    on(sigName: "notify::indent", callback: any): number
    once(sigName: "notify::indent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::indent", ...args: any[]): void
    connect(sigName: "notify::indent-set", callback: any): number
    on(sigName: "notify::indent-set", callback: any): number
    once(sigName: "notify::indent-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::indent-set", ...args: any[]): void
    connect(sigName: "notify::insert-hyphens", callback: any): number
    on(sigName: "notify::insert-hyphens", callback: any): number
    once(sigName: "notify::insert-hyphens", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::insert-hyphens", ...args: any[]): void
    connect(sigName: "notify::insert-hyphens-set", callback: any): number
    on(sigName: "notify::insert-hyphens-set", callback: any): number
    once(sigName: "notify::insert-hyphens-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::insert-hyphens-set", ...args: any[]): void
    connect(sigName: "notify::invisible", callback: any): number
    on(sigName: "notify::invisible", callback: any): number
    once(sigName: "notify::invisible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::invisible", ...args: any[]): void
    connect(sigName: "notify::invisible-set", callback: any): number
    on(sigName: "notify::invisible-set", callback: any): number
    once(sigName: "notify::invisible-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::invisible-set", ...args: any[]): void
    connect(sigName: "notify::justification", callback: any): number
    on(sigName: "notify::justification", callback: any): number
    once(sigName: "notify::justification", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::justification", ...args: any[]): void
    connect(sigName: "notify::justification-set", callback: any): number
    on(sigName: "notify::justification-set", callback: any): number
    once(sigName: "notify::justification-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::justification-set", ...args: any[]): void
    connect(sigName: "notify::language", callback: any): number
    on(sigName: "notify::language", callback: any): number
    once(sigName: "notify::language", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::language-set", callback: any): number
    on(sigName: "notify::language-set", callback: any): number
    once(sigName: "notify::language-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::language-set", ...args: any[]): void
    connect(sigName: "notify::left-margin", callback: any): number
    on(sigName: "notify::left-margin", callback: any): number
    once(sigName: "notify::left-margin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::left-margin", ...args: any[]): void
    connect(sigName: "notify::left-margin-set", callback: any): number
    on(sigName: "notify::left-margin-set", callback: any): number
    once(sigName: "notify::left-margin-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::left-margin-set", ...args: any[]): void
    connect(sigName: "notify::letter-spacing", callback: any): number
    on(sigName: "notify::letter-spacing", callback: any): number
    once(sigName: "notify::letter-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::letter-spacing", ...args: any[]): void
    connect(sigName: "notify::letter-spacing-set", callback: any): number
    on(sigName: "notify::letter-spacing-set", callback: any): number
    once(sigName: "notify::letter-spacing-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::letter-spacing-set", ...args: any[]): void
    connect(sigName: "notify::line-height", callback: any): number
    on(sigName: "notify::line-height", callback: any): number
    once(sigName: "notify::line-height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::line-height", ...args: any[]): void
    connect(sigName: "notify::line-height-set", callback: any): number
    on(sigName: "notify::line-height-set", callback: any): number
    once(sigName: "notify::line-height-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::line-height-set", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::overline", callback: any): number
    on(sigName: "notify::overline", callback: any): number
    once(sigName: "notify::overline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overline", ...args: any[]): void
    connect(sigName: "notify::overline-rgba", callback: any): number
    on(sigName: "notify::overline-rgba", callback: any): number
    once(sigName: "notify::overline-rgba", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overline-rgba", ...args: any[]): void
    connect(sigName: "notify::overline-rgba-set", callback: any): number
    on(sigName: "notify::overline-rgba-set", callback: any): number
    once(sigName: "notify::overline-rgba-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overline-rgba-set", ...args: any[]): void
    connect(sigName: "notify::overline-set", callback: any): number
    on(sigName: "notify::overline-set", callback: any): number
    once(sigName: "notify::overline-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overline-set", ...args: any[]): void
    connect(sigName: "notify::paragraph-background", callback: any): number
    on(sigName: "notify::paragraph-background", callback: any): number
    once(sigName: "notify::paragraph-background", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::paragraph-background", ...args: any[]): void
    connect(sigName: "notify::paragraph-background-rgba", callback: any): number
    on(sigName: "notify::paragraph-background-rgba", callback: any): number
    once(sigName: "notify::paragraph-background-rgba", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::paragraph-background-rgba", ...args: any[]): void
    connect(sigName: "notify::paragraph-background-set", callback: any): number
    on(sigName: "notify::paragraph-background-set", callback: any): number
    once(sigName: "notify::paragraph-background-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::paragraph-background-set", ...args: any[]): void
    connect(sigName: "notify::pixels-above-lines", callback: any): number
    on(sigName: "notify::pixels-above-lines", callback: any): number
    once(sigName: "notify::pixels-above-lines", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixels-above-lines", ...args: any[]): void
    connect(sigName: "notify::pixels-above-lines-set", callback: any): number
    on(sigName: "notify::pixels-above-lines-set", callback: any): number
    once(sigName: "notify::pixels-above-lines-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixels-above-lines-set", ...args: any[]): void
    connect(sigName: "notify::pixels-below-lines", callback: any): number
    on(sigName: "notify::pixels-below-lines", callback: any): number
    once(sigName: "notify::pixels-below-lines", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixels-below-lines", ...args: any[]): void
    connect(sigName: "notify::pixels-below-lines-set", callback: any): number
    on(sigName: "notify::pixels-below-lines-set", callback: any): number
    once(sigName: "notify::pixels-below-lines-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixels-below-lines-set", ...args: any[]): void
    connect(sigName: "notify::pixels-inside-wrap", callback: any): number
    on(sigName: "notify::pixels-inside-wrap", callback: any): number
    once(sigName: "notify::pixels-inside-wrap", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixels-inside-wrap", ...args: any[]): void
    connect(sigName: "notify::pixels-inside-wrap-set", callback: any): number
    on(sigName: "notify::pixels-inside-wrap-set", callback: any): number
    once(sigName: "notify::pixels-inside-wrap-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixels-inside-wrap-set", ...args: any[]): void
    connect(sigName: "notify::right-margin", callback: any): number
    on(sigName: "notify::right-margin", callback: any): number
    once(sigName: "notify::right-margin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::right-margin", ...args: any[]): void
    connect(sigName: "notify::right-margin-set", callback: any): number
    on(sigName: "notify::right-margin-set", callback: any): number
    once(sigName: "notify::right-margin-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::right-margin-set", ...args: any[]): void
    connect(sigName: "notify::rise", callback: any): number
    on(sigName: "notify::rise", callback: any): number
    once(sigName: "notify::rise", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rise", ...args: any[]): void
    connect(sigName: "notify::rise-set", callback: any): number
    on(sigName: "notify::rise-set", callback: any): number
    once(sigName: "notify::rise-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rise-set", ...args: any[]): void
    connect(sigName: "notify::scale", callback: any): number
    on(sigName: "notify::scale", callback: any): number
    once(sigName: "notify::scale", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::scale-set", callback: any): number
    on(sigName: "notify::scale-set", callback: any): number
    once(sigName: "notify::scale-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-set", ...args: any[]): void
    connect(sigName: "notify::sentence", callback: any): number
    on(sigName: "notify::sentence", callback: any): number
    once(sigName: "notify::sentence", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sentence", ...args: any[]): void
    connect(sigName: "notify::sentence-set", callback: any): number
    on(sigName: "notify::sentence-set", callback: any): number
    once(sigName: "notify::sentence-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sentence-set", ...args: any[]): void
    connect(sigName: "notify::show-spaces", callback: any): number
    on(sigName: "notify::show-spaces", callback: any): number
    once(sigName: "notify::show-spaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-spaces", ...args: any[]): void
    connect(sigName: "notify::show-spaces-set", callback: any): number
    on(sigName: "notify::show-spaces-set", callback: any): number
    once(sigName: "notify::show-spaces-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-spaces-set", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::size-points", callback: any): number
    on(sigName: "notify::size-points", callback: any): number
    once(sigName: "notify::size-points", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size-points", ...args: any[]): void
    connect(sigName: "notify::size-set", callback: any): number
    on(sigName: "notify::size-set", callback: any): number
    once(sigName: "notify::size-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size-set", ...args: any[]): void
    connect(sigName: "notify::stretch", callback: any): number
    on(sigName: "notify::stretch", callback: any): number
    once(sigName: "notify::stretch", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stretch", ...args: any[]): void
    connect(sigName: "notify::stretch-set", callback: any): number
    on(sigName: "notify::stretch-set", callback: any): number
    once(sigName: "notify::stretch-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stretch-set", ...args: any[]): void
    connect(sigName: "notify::strikethrough", callback: any): number
    on(sigName: "notify::strikethrough", callback: any): number
    once(sigName: "notify::strikethrough", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::strikethrough", ...args: any[]): void
    connect(sigName: "notify::strikethrough-rgba", callback: any): number
    on(sigName: "notify::strikethrough-rgba", callback: any): number
    once(sigName: "notify::strikethrough-rgba", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::strikethrough-rgba", ...args: any[]): void
    connect(sigName: "notify::strikethrough-rgba-set", callback: any): number
    on(sigName: "notify::strikethrough-rgba-set", callback: any): number
    once(sigName: "notify::strikethrough-rgba-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::strikethrough-rgba-set", ...args: any[]): void
    connect(sigName: "notify::strikethrough-set", callback: any): number
    on(sigName: "notify::strikethrough-set", callback: any): number
    once(sigName: "notify::strikethrough-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::strikethrough-set", ...args: any[]): void
    connect(sigName: "notify::style", callback: any): number
    on(sigName: "notify::style", callback: any): number
    once(sigName: "notify::style", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::style-set", callback: any): number
    on(sigName: "notify::style-set", callback: any): number
    once(sigName: "notify::style-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::style-set", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: any): number
    on(sigName: "notify::tabs", callback: any): number
    once(sigName: "notify::tabs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::tabs-set", callback: any): number
    on(sigName: "notify::tabs-set", callback: any): number
    once(sigName: "notify::tabs-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tabs-set", ...args: any[]): void
    connect(sigName: "notify::text-transform", callback: any): number
    on(sigName: "notify::text-transform", callback: any): number
    once(sigName: "notify::text-transform", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-transform", ...args: any[]): void
    connect(sigName: "notify::text-transform-set", callback: any): number
    on(sigName: "notify::text-transform-set", callback: any): number
    once(sigName: "notify::text-transform-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-transform-set", ...args: any[]): void
    connect(sigName: "notify::underline", callback: any): number
    on(sigName: "notify::underline", callback: any): number
    once(sigName: "notify::underline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::underline", ...args: any[]): void
    connect(sigName: "notify::underline-rgba", callback: any): number
    on(sigName: "notify::underline-rgba", callback: any): number
    once(sigName: "notify::underline-rgba", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::underline-rgba", ...args: any[]): void
    connect(sigName: "notify::underline-rgba-set", callback: any): number
    on(sigName: "notify::underline-rgba-set", callback: any): number
    once(sigName: "notify::underline-rgba-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::underline-rgba-set", ...args: any[]): void
    connect(sigName: "notify::underline-set", callback: any): number
    on(sigName: "notify::underline-set", callback: any): number
    once(sigName: "notify::underline-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::underline-set", ...args: any[]): void
    connect(sigName: "notify::variant", callback: any): number
    on(sigName: "notify::variant", callback: any): number
    once(sigName: "notify::variant", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::variant", ...args: any[]): void
    connect(sigName: "notify::variant-set", callback: any): number
    on(sigName: "notify::variant-set", callback: any): number
    once(sigName: "notify::variant-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::variant-set", ...args: any[]): void
    connect(sigName: "notify::weight", callback: any): number
    on(sigName: "notify::weight", callback: any): number
    once(sigName: "notify::weight", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::weight", ...args: any[]): void
    connect(sigName: "notify::weight-set", callback: any): number
    on(sigName: "notify::weight-set", callback: any): number
    once(sigName: "notify::weight-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::weight-set", ...args: any[]): void
    connect(sigName: "notify::word", callback: any): number
    on(sigName: "notify::word", callback: any): number
    once(sigName: "notify::word", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::word", ...args: any[]): void
    connect(sigName: "notify::word-set", callback: any): number
    on(sigName: "notify::word-set", callback: any): number
    once(sigName: "notify::word-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::word-set", ...args: any[]): void
    connect(sigName: "notify::wrap-mode", callback: any): number
    on(sigName: "notify::wrap-mode", callback: any): number
    once(sigName: "notify::wrap-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::wrap-mode", ...args: any[]): void
    connect(sigName: "notify::wrap-mode-set", callback: any): number
    on(sigName: "notify::wrap-mode-set", callback: any): number
    once(sigName: "notify::wrap-mode-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::wrap-mode-set", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A tag that can be applied to text in a [class`Buffer]`.
 * 
 * `GtkSourceTag` is a subclass of [class`Gtk`.TextTag] that adds properties useful for
 * the GtkSourceView library.
 * 
 * If, for a certain tag, [class`Gtk`.TextTag] is sufficient, it's better that you create
 * a [class`Gtk`.TextTag], not a [class`Tag]`.
 * @class 
 */
export class Tag extends Gtk.TextTag {

    // Own properties of GtkSource-5.GtkSource.Tag

    static name: string

    // Constructors of GtkSource-5.GtkSource.Tag

    constructor(config?: Tag.ConstructorProperties) 
    /**
     * Creates a `GtkSourceTag`.
     * 
     * Configure the tag using object arguments, i.e. using [method`GObject`.Object.set].
     * 
     * For usual cases, [method`Buffer`.create_source_tag] is more convenient to
     * use.
     * @constructor 
     * @param name tag name, or %NULL.
     */
    constructor(name: string | null) 
    /**
     * Creates a `GtkSourceTag`.
     * 
     * Configure the tag using object arguments, i.e. using [method`GObject`.Object.set].
     * 
     * For usual cases, [method`Buffer`.create_source_tag] is more convenient to
     * use.
     * @constructor 
     * @param name tag name, or %NULL.
     */
    static new(name: string | null): Tag
    _init(config?: Tag.ConstructorProperties): void
}

export module View {

    // Signal callback interfaces

    /**
     * Signal callback interface for `change-case`
     */
    export interface ChangeCaseSignalCallback {
        (caseType: ChangeCaseType): void
    }

    /**
     * Signal callback interface for `change-number`
     */
    export interface ChangeNumberSignalCallback {
        (count: number): void
    }

    /**
     * Signal callback interface for `join-lines`
     */
    export interface JoinLinesSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `line-mark-activated`
     */
    export interface LineMarkActivatedSignalCallback {
        (iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, nPresses: number): void
    }

    /**
     * Signal callback interface for `move-lines`
     */
    export interface MoveLinesSignalCallback {
        (down: boolean): void
    }

    /**
     * Signal callback interface for `move-to-matching-bracket`
     */
    export interface MoveToMatchingBracketSignalCallback {
        (extendSelection: boolean): void
    }

    /**
     * Signal callback interface for `move-words`
     */
    export interface MoveWordsSignalCallback {
        (count: number): void
    }

    /**
     * Signal callback interface for `push-snippet`
     */
    export interface PushSnippetSignalCallback {
        (snippet: Snippet, location: Gtk.TextIter): void
    }

    /**
     * Signal callback interface for `show-completion`
     */
    export interface ShowCompletionSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `smart-home-end`
     */
    export interface SmartHomeEndSignalCallback {
        (iter: Gtk.TextIter, count: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.TextView.ConstructorProperties {

        // Own constructor properties of GtkSource-5.GtkSource.View

        autoIndent?: boolean | null
        /**
         * Draw a specific background pattern on the view.
         */
        backgroundPattern?: BackgroundPatternType | null
        /**
         * The property denotes if snippets should be
         * expanded when the user presses Tab after having typed a word
         * matching the snippets found in [class`SnippetManager]`.
         * 
         * The user may tab through focus-positions of the snippet if any
         * are available by pressing Tab repeatedly until the desired focus
         * position is selected.
         */
        enableSnippets?: boolean | null
        highlightCurrentLine?: boolean | null
        indentOnTab?: boolean | null
        /**
         * Width of an indentation step expressed in number of spaces.
         */
        indentWidth?: number | null
        /**
         * The property is a [iface`Indenter]` to use to indent
         * as the user types into the [class`View]`.
         */
        indenter?: Indenter | null
        insertSpacesInsteadOfTabs?: boolean | null
        /**
         * Position of the right margin.
         */
        rightMarginPosition?: number | null
        /**
         * Whether to display line mark pixbufs
         */
        showLineMarks?: boolean | null
        /**
         * Whether to display line numbers
         */
        showLineNumbers?: boolean | null
        /**
         * Whether to display the right margin.
         */
        showRightMargin?: boolean | null
        /**
         * Whether smart Backspace should be used.
         */
        smartBackspace?: boolean | null
        /**
         * Set the behavior of the HOME and END keys.
         */
        smartHomeEnd?: SmartHomeEndType | null
        /**
         * Width of a tab character expressed in number of spaces.
         */
        tabWidth?: number | null
    }

}

export interface View extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Scrollable {

    // Own properties of GtkSource-5.GtkSource.View

    autoIndent: boolean
    /**
     * Draw a specific background pattern on the view.
     */
    backgroundPattern: BackgroundPatternType
    /**
     * The completion object associated with the view
     */
    readonly completion: Completion
    /**
     * The property denotes if snippets should be
     * expanded when the user presses Tab after having typed a word
     * matching the snippets found in [class`SnippetManager]`.
     * 
     * The user may tab through focus-positions of the snippet if any
     * are available by pressing Tab repeatedly until the desired focus
     * position is selected.
     */
    enableSnippets: boolean
    highlightCurrentLine: boolean
    indentOnTab: boolean
    /**
     * Width of an indentation step expressed in number of spaces.
     */
    indentWidth: number
    /**
     * The property is a [iface`Indenter]` to use to indent
     * as the user types into the [class`View]`.
     */
    indenter: Indenter
    insertSpacesInsteadOfTabs: boolean
    /**
     * Position of the right margin.
     */
    rightMarginPosition: number
    /**
     * Whether to display line mark pixbufs
     */
    showLineMarks: boolean
    /**
     * Whether to display line numbers
     */
    showLineNumbers: boolean
    /**
     * Whether to display the right margin.
     */
    showRightMargin: boolean
    /**
     * Whether smart Backspace should be used.
     */
    smartBackspace: boolean
    /**
     * Set the behavior of the HOME and END keys.
     */
    smartHomeEnd: SmartHomeEndType
    /**
     * The [class`SpaceDrawer]` object associated with the view.4
     */
    readonly spaceDrawer: SpaceDrawer
    /**
     * Width of a tab character expressed in number of spaces.
     */
    tabWidth: number

    // Own fields of GtkSource-5.GtkSource.View

    parentInstance: any

    // Owm methods of GtkSource-5.GtkSource.View

    /**
     * Returns whether auto-indentation of text is enabled.
     */
    getAutoIndent(): boolean
    /**
     * Returns the #GtkSourceBackgroundPatternType specifying if and how
     * the background pattern should be displayed for this `view`.
     */
    getBackgroundPattern(): BackgroundPatternType
    /**
     * Gets the [class`Completion]` associated with `view`.
     * 
     * The returned object is guaranteed to be the same for the lifetime of `view`.
     * Each `GtkSourceView` object has a different [class`Completion]`.
     */
    getCompletion(): Completion
    /**
     * Gets the [property`View:`enable-snippets] property.
     * 
     * If %TRUE, matching snippets found in the [class`SnippetManager]`
     * may be expanded when the user presses Tab after a word in the [class`View]`.
     */
    getEnableSnippets(): boolean
    /**
     * Returns the [class`Gutter]` object associated with `window_type` for `view`.
     * 
     * Only %GTK_TEXT_WINDOW_LEFT and %GTK_TEXT_WINDOW_RIGHT are supported,
     * respectively corresponding to the left and right gutter. The line numbers
     * and mark category icons are rendered in the left gutter.
     * @param windowType the gutter window type.
     */
    getGutter(windowType: Gtk.TextWindowType): Gutter

    // Overloads of getGutter

    /**
     * Gets a `GtkWidget` that has previously been set as gutter.
     * 
     * See [method`Gtk`.TextView.set_gutter].
     * 
     * `win` must be one of %GTK_TEXT_WINDOW_LEFT, %GTK_TEXT_WINDOW_RIGHT,
     * %GTK_TEXT_WINDOW_TOP, or %GTK_TEXT_WINDOW_BOTTOM.
     * @param win a `GtkTextWindowType`
     */
    getGutter(win: Gtk.TextWindowType): Gtk.Widget | null
    /**
     * Returns whether the current line is highlighted.
     */
    getHighlightCurrentLine(): boolean
    /**
     * Gets the [class`Hover]` associated with `view`.
     * 
     * The returned object is guaranteed to be the same for the lifetime of `view`.
     * Each [class`View]` object has a different [class`Hover]`.
     */
    getHover(): Hover
    /**
     * Returns whether when the tab key is pressed the current selection
     * should get indented instead of replaced with the `\t` character.
     */
    getIndentOnTab(): boolean
    /**
     * Returns the number of spaces to use for each step of indent.
     * 
     * See [method`View`.set_indent_width] for details.
     */
    getIndentWidth(): number
    /**
     * Gets the [property`View:`indenter] property.
     */
    getIndenter(): Indenter | null
    /**
     * Returns whether when inserting a tabulator character it should
     * be replaced by a group of space characters.
     */
    getInsertSpacesInsteadOfTabs(): boolean
    /**
     * Gets attributes and priority for the `category`.
     * @param category the category.
     * @param priority place where priority of the category will be stored.
     */
    getMarkAttributes(category: string, priority: number): MarkAttributes
    /**
     * Gets the position of the right margin in the given `view`.
     */
    getRightMarginPosition(): number
    /**
     * Returns whether line marks are displayed beside the text.
     */
    getShowLineMarks(): boolean
    /**
     * Returns whether line numbers are displayed beside the text.
     */
    getShowLineNumbers(): boolean
    /**
     * Returns whether a right margin is displayed.
     */
    getShowRightMargin(): boolean
    /**
     * Returns %TRUE if pressing the Backspace key will try to delete spaces
     * up to the previous tab stop.
     */
    getSmartBackspace(): boolean
    /**
     * Returns a [enum`SmartHomeEndType]` end value specifying
     * how the cursor will move when HOME and END keys are pressed.
     */
    getSmartHomeEnd(): SmartHomeEndType
    /**
     * Gets the [class`SpaceDrawer]` associated with `view`.
     * 
     * The returned object is guaranteed to be the same for the lifetime of `view`.
     * Each [class`View]` object has a different [class`SpaceDrawer]`.
     */
    getSpaceDrawer(): SpaceDrawer
    /**
     * Returns the width of tabulation in characters.
     */
    getTabWidth(): number
    /**
     * Determines the visual column at `iter` taking into consideration the
     * [property`View:`tab-width] of `view`.
     * @param iter a position in `view`.
     */
    getVisualColumn(iter: Gtk.TextIter): number
    /**
     * Inserts one indentation level at the beginning of the specified lines. The
     * empty lines are not indented.
     * @param start #GtkTextIter of the first line to indent
     * @param end #GtkTextIter of the last line to indent
     */
    indentLines(start: Gtk.TextIter, end: Gtk.TextIter): void
    // Has conflict: pushSnippet(snippet: Snippet, location: Gtk.TextIter | null): void
    /**
     * If %TRUE auto-indentation of text is enabled.
     * 
     * When Enter is pressed to create a new line, the auto-indentation inserts the
     * same indentation as the previous line. This is **not** a
     * "smart indentation" where an indentation level is added or removed depending
     * on the context.
     * @param enable whether to enable auto indentation.
     */
    setAutoIndent(enable: boolean): void
    /**
     * Set if and how the background pattern should be displayed.
     * @param backgroundPattern the #GtkSourceBackgroundPatternType.
     */
    setBackgroundPattern(backgroundPattern: BackgroundPatternType): void
    /**
     * Sets the [property`View:`enable-snippets] property.
     * 
     * If `enable_snippets` is %TRUE, matching snippets found in the
     * [class`SnippetManager]` may be expanded when the user presses
     * Tab after a word in the [class`View]`.
     * @param enableSnippets if snippets should be enabled
     */
    setEnableSnippets(enableSnippets: boolean): void
    /**
     * If `highlight` is %TRUE the current line will be highlighted.
     * @param highlight whether to highlight the current line.
     */
    setHighlightCurrentLine(highlight: boolean): void
    /**
     * If %TRUE, when the tab key is pressed when several lines are selected, the
     * selected lines are indented of one level instead of being replaced with a `\t`
     * character. Shift+Tab unindents the selection.
     * 
     * If the first or last line is not selected completely, it is also indented or
     * unindented.
     * 
     * When the selection doesn't span several lines, the tab key always replaces
     * the selection with a normal `\t` character.
     * @param enable whether to indent a block when tab is pressed.
     */
    setIndentOnTab(enable: boolean): void
    /**
     * Sets the number of spaces to use for each step of indent when the tab key is
     * pressed.
     * 
     * If `width` is -1, the value of the [property`View:`tab-width] property
     * will be used.
     * 
     * The [property`View:`indent-width] interacts with the
     * [property`View:`insert-spaces-instead-of-tabs] property and
     * [property`View:`tab-width]. An example will be clearer:
     * 
     * If the [property`View:`indent-width] is 4 and [property`View:`tab-width] is 8 and
     * [property`View:`insert-spaces-instead-of-tabs] is %FALSE, then pressing the tab
     * key at the beginning of a line will insert 4 spaces. So far so good. Pressing
     * the tab key a second time will remove the 4 spaces and insert a `\t` character
     * instead (since [property`View:`tab-width] is 8). On the other hand, if
     * [property`View:`insert-spaces-instead-of-tabs] is %TRUE, the second tab key
     * pressed will insert 4 more spaces for a total of 8 spaces in the
     * [class`Gtk`.TextBuffer].
     * 
     * The test-widget program (available in the GtkSourceView repository) may be
     * useful to better understand the indentation settings (enable the space
     * drawing!).
     * @param width indent width in characters.
     */
    setIndentWidth(width: number): void
    /**
     * Sets the indenter for `view` to `indenter`.
     * 
     * Note that the indenter will not be used unless #GtkSourceView:auto-indent
     * has been set to %TRUE.
     * @param indenter a #GtkSourceIndenter or %NULL
     */
    setIndenter(indenter: Indenter | null): void
    /**
     * If %TRUE a tab key pressed is replaced by a group of space characters.
     * 
     * Of course it is still possible to insert a real `\t` programmatically with the
     * [class`Gtk`.TextBuffer] API.
     * @param enable whether to insert spaces instead of tabs.
     */
    setInsertSpacesInsteadOfTabs(enable: boolean): void
    /**
     * Sets attributes and priority for the `category`.
     * @param category the category.
     * @param attributes mark attributes.
     * @param priority priority of the category.
     */
    setMarkAttributes(category: string, attributes: MarkAttributes, priority: number): void
    /**
     * Sets the position of the right margin in the given `view`.
     * @param pos the width in characters where to position the right margin.
     */
    setRightMarginPosition(pos: number): void
    /**
     * If %TRUE line marks will be displayed beside the text.
     * @param show whether line marks should be displayed.
     */
    setShowLineMarks(show: boolean): void
    /**
     * If %TRUE line numbers will be displayed beside the text.
     * @param show whether line numbers should be displayed.
     */
    setShowLineNumbers(show: boolean): void
    /**
     * If %TRUE a right margin is displayed.
     * @param show whether to show a right margin.
     */
    setShowRightMargin(show: boolean): void
    /**
     * When set to %TRUE, pressing the Backspace key will try to delete spaces
     * up to the previous tab stop.
     * @param smartBackspace whether to enable smart Backspace handling.
     */
    setSmartBackspace(smartBackspace: boolean): void
    /**
     * Set the desired movement of the cursor when HOME and END keys
     * are pressed.
     * @param smartHomeEnd the desired behavior among #GtkSourceSmartHomeEndType.
     */
    setSmartHomeEnd(smartHomeEnd: SmartHomeEndType): void
    /**
     * Sets the width of tabulation in characters.
     * 
     * The #GtkTextBuffer still contains `\t` characters,
     * but they can take a different visual width in a [class`View]` widget.
     * @param width width of tab in characters.
     */
    setTabWidth(width: number): void
    /**
     * Removes one indentation level at the beginning of the
     * specified lines.
     * @param start #GtkTextIter of the first line to indent
     * @param end #GtkTextIter of the last line to indent
     */
    unindentLines(start: Gtk.TextIter, end: Gtk.TextIter): void

    // Own virtual methods of GtkSource-5.GtkSource.View

    lineMarkActivated(iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, nPresses: number): void
    moveLines(down: boolean): void
    moveWords(step: number): void
    /**
     * Inserts a new snippet at `location`
     * 
     * If another snippet was already active, it will be paused and the new
     * snippet will become active. Once the focus positions of `snippet` have
     * been exhausted, editing will return to the previous snippet.
     * @virtual 
     * @param snippet a #GtkSourceSnippet
     * @param location a #GtkTextIter or %NULL for the cursor position
     */
    pushSnippet(snippet: Snippet, location: Gtk.TextIter | null): void
    showCompletion(): void

    // Own signals of GtkSource-5.GtkSource.View

    connect(sigName: "change-case", callback: View.ChangeCaseSignalCallback): number
    on(sigName: "change-case", callback: View.ChangeCaseSignalCallback): number
    once(sigName: "change-case", callback: View.ChangeCaseSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "change-case", ...args: any[]): void
    connect(sigName: "change-number", callback: View.ChangeNumberSignalCallback): number
    on(sigName: "change-number", callback: View.ChangeNumberSignalCallback): number
    once(sigName: "change-number", callback: View.ChangeNumberSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "change-number", ...args: any[]): void
    connect(sigName: "join-lines", callback: View.JoinLinesSignalCallback): number
    on(sigName: "join-lines", callback: View.JoinLinesSignalCallback): number
    once(sigName: "join-lines", callback: View.JoinLinesSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "join-lines", ...args: any[]): void
    connect(sigName: "line-mark-activated", callback: View.LineMarkActivatedSignalCallback): number
    on(sigName: "line-mark-activated", callback: View.LineMarkActivatedSignalCallback): number
    once(sigName: "line-mark-activated", callback: View.LineMarkActivatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "line-mark-activated", button: number, state: Gdk.ModifierType, nPresses: number, ...args: any[]): void
    connect(sigName: "move-lines", callback: View.MoveLinesSignalCallback): number
    on(sigName: "move-lines", callback: View.MoveLinesSignalCallback): number
    once(sigName: "move-lines", callback: View.MoveLinesSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "move-lines", ...args: any[]): void
    connect(sigName: "move-to-matching-bracket", callback: View.MoveToMatchingBracketSignalCallback): number
    on(sigName: "move-to-matching-bracket", callback: View.MoveToMatchingBracketSignalCallback): number
    once(sigName: "move-to-matching-bracket", callback: View.MoveToMatchingBracketSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "move-to-matching-bracket", ...args: any[]): void
    connect(sigName: "move-words", callback: View.MoveWordsSignalCallback): number
    on(sigName: "move-words", callback: View.MoveWordsSignalCallback): number
    once(sigName: "move-words", callback: View.MoveWordsSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "move-words", ...args: any[]): void
    connect(sigName: "push-snippet", callback: View.PushSnippetSignalCallback): number
    on(sigName: "push-snippet", callback: View.PushSnippetSignalCallback): number
    once(sigName: "push-snippet", callback: View.PushSnippetSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "push-snippet", location: Gtk.TextIter, ...args: any[]): void
    connect(sigName: "show-completion", callback: View.ShowCompletionSignalCallback): number
    on(sigName: "show-completion", callback: View.ShowCompletionSignalCallback): number
    once(sigName: "show-completion", callback: View.ShowCompletionSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "show-completion", ...args: any[]): void
    connect(sigName: "smart-home-end", callback: View.SmartHomeEndSignalCallback): number
    on(sigName: "smart-home-end", callback: View.SmartHomeEndSignalCallback): number
    once(sigName: "smart-home-end", callback: View.SmartHomeEndSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "smart-home-end", count: number, ...args: any[]): void

    // Class property signals of GtkSource-5.GtkSource.View

    connect(sigName: "notify::auto-indent", callback: any): number
    on(sigName: "notify::auto-indent", callback: any): number
    once(sigName: "notify::auto-indent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::auto-indent", ...args: any[]): void
    connect(sigName: "notify::background-pattern", callback: any): number
    on(sigName: "notify::background-pattern", callback: any): number
    once(sigName: "notify::background-pattern", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::background-pattern", ...args: any[]): void
    connect(sigName: "notify::completion", callback: any): number
    on(sigName: "notify::completion", callback: any): number
    once(sigName: "notify::completion", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::enable-snippets", callback: any): number
    on(sigName: "notify::enable-snippets", callback: any): number
    once(sigName: "notify::enable-snippets", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enable-snippets", ...args: any[]): void
    connect(sigName: "notify::highlight-current-line", callback: any): number
    on(sigName: "notify::highlight-current-line", callback: any): number
    once(sigName: "notify::highlight-current-line", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::highlight-current-line", ...args: any[]): void
    connect(sigName: "notify::indent-on-tab", callback: any): number
    on(sigName: "notify::indent-on-tab", callback: any): number
    once(sigName: "notify::indent-on-tab", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::indent-on-tab", ...args: any[]): void
    connect(sigName: "notify::indent-width", callback: any): number
    on(sigName: "notify::indent-width", callback: any): number
    once(sigName: "notify::indent-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::indent-width", ...args: any[]): void
    connect(sigName: "notify::indenter", callback: any): number
    on(sigName: "notify::indenter", callback: any): number
    once(sigName: "notify::indenter", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::indenter", ...args: any[]): void
    connect(sigName: "notify::insert-spaces-instead-of-tabs", callback: any): number
    on(sigName: "notify::insert-spaces-instead-of-tabs", callback: any): number
    once(sigName: "notify::insert-spaces-instead-of-tabs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::insert-spaces-instead-of-tabs", ...args: any[]): void
    connect(sigName: "notify::right-margin-position", callback: any): number
    on(sigName: "notify::right-margin-position", callback: any): number
    once(sigName: "notify::right-margin-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::right-margin-position", ...args: any[]): void
    connect(sigName: "notify::show-line-marks", callback: any): number
    on(sigName: "notify::show-line-marks", callback: any): number
    once(sigName: "notify::show-line-marks", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-line-marks", ...args: any[]): void
    connect(sigName: "notify::show-line-numbers", callback: any): number
    on(sigName: "notify::show-line-numbers", callback: any): number
    once(sigName: "notify::show-line-numbers", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-line-numbers", ...args: any[]): void
    connect(sigName: "notify::show-right-margin", callback: any): number
    on(sigName: "notify::show-right-margin", callback: any): number
    once(sigName: "notify::show-right-margin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-right-margin", ...args: any[]): void
    connect(sigName: "notify::smart-backspace", callback: any): number
    on(sigName: "notify::smart-backspace", callback: any): number
    once(sigName: "notify::smart-backspace", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smart-backspace", ...args: any[]): void
    connect(sigName: "notify::smart-home-end", callback: any): number
    on(sigName: "notify::smart-home-end", callback: any): number
    once(sigName: "notify::smart-home-end", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smart-home-end", ...args: any[]): void
    connect(sigName: "notify::space-drawer", callback: any): number
    on(sigName: "notify::space-drawer", callback: any): number
    once(sigName: "notify::space-drawer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::space-drawer", ...args: any[]): void
    connect(sigName: "notify::tab-width", callback: any): number
    on(sigName: "notify::tab-width", callback: any): number
    once(sigName: "notify::tab-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tab-width", ...args: any[]): void
    connect(sigName: "notify::accepts-tab", callback: any): number
    on(sigName: "notify::accepts-tab", callback: any): number
    once(sigName: "notify::accepts-tab", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accepts-tab", ...args: any[]): void
    connect(sigName: "notify::bottom-margin", callback: any): number
    on(sigName: "notify::bottom-margin", callback: any): number
    once(sigName: "notify::bottom-margin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bottom-margin", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: any): number
    on(sigName: "notify::buffer", callback: any): number
    once(sigName: "notify::buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::cursor-visible", callback: any): number
    on(sigName: "notify::cursor-visible", callback: any): number
    once(sigName: "notify::cursor-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor-visible", ...args: any[]): void
    connect(sigName: "notify::editable", callback: any): number
    on(sigName: "notify::editable", callback: any): number
    once(sigName: "notify::editable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::extra-menu", callback: any): number
    on(sigName: "notify::extra-menu", callback: any): number
    once(sigName: "notify::extra-menu", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::extra-menu", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: any): number
    on(sigName: "notify::im-module", callback: any): number
    once(sigName: "notify::im-module", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::indent", callback: any): number
    on(sigName: "notify::indent", callback: any): number
    once(sigName: "notify::indent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::indent", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: any): number
    on(sigName: "notify::input-hints", callback: any): number
    once(sigName: "notify::input-hints", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: any): number
    on(sigName: "notify::input-purpose", callback: any): number
    once(sigName: "notify::input-purpose", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::justification", callback: any): number
    on(sigName: "notify::justification", callback: any): number
    once(sigName: "notify::justification", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::justification", ...args: any[]): void
    connect(sigName: "notify::left-margin", callback: any): number
    on(sigName: "notify::left-margin", callback: any): number
    once(sigName: "notify::left-margin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::left-margin", ...args: any[]): void
    connect(sigName: "notify::monospace", callback: any): number
    on(sigName: "notify::monospace", callback: any): number
    once(sigName: "notify::monospace", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::monospace", ...args: any[]): void
    connect(sigName: "notify::overwrite", callback: any): number
    on(sigName: "notify::overwrite", callback: any): number
    once(sigName: "notify::overwrite", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overwrite", ...args: any[]): void
    connect(sigName: "notify::pixels-above-lines", callback: any): number
    on(sigName: "notify::pixels-above-lines", callback: any): number
    once(sigName: "notify::pixels-above-lines", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixels-above-lines", ...args: any[]): void
    connect(sigName: "notify::pixels-below-lines", callback: any): number
    on(sigName: "notify::pixels-below-lines", callback: any): number
    once(sigName: "notify::pixels-below-lines", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixels-below-lines", ...args: any[]): void
    connect(sigName: "notify::pixels-inside-wrap", callback: any): number
    on(sigName: "notify::pixels-inside-wrap", callback: any): number
    once(sigName: "notify::pixels-inside-wrap", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixels-inside-wrap", ...args: any[]): void
    connect(sigName: "notify::right-margin", callback: any): number
    on(sigName: "notify::right-margin", callback: any): number
    once(sigName: "notify::right-margin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::right-margin", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: any): number
    on(sigName: "notify::tabs", callback: any): number
    once(sigName: "notify::tabs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::top-margin", callback: any): number
    on(sigName: "notify::top-margin", callback: any): number
    once(sigName: "notify::top-margin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::top-margin", ...args: any[]): void
    connect(sigName: "notify::wrap-mode", callback: any): number
    on(sigName: "notify::wrap-mode", callback: any): number
    once(sigName: "notify::wrap-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::wrap-mode", ...args: any[]): void
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
 * Subclass of [class`Gtk`.TextView].
 * 
 * `GtkSourceView` is the main class of the GtkSourceView library.
 * Use a [class`Buffer]` to display text with a `GtkSourceView`.
 * 
 * This class provides:
 * 
 *  - Show the line numbers;
 *  - Show a right margin;
 *  - Highlight the current line;
 *  - Indentation settings;
 *  - Configuration for the Home and End keyboard keys;
 *  - Configure and show line marks;
 *  - And a few other things.
 * 
 * An easy way to test all these features is to use the test-widget mini-program
 * provided in the GtkSourceView repository, in the tests/ directory.
 * 
 * # GtkSourceView as GtkBuildable
 * 
 * The GtkSourceView implementation of the [iface`Gtk`.Buildable] interface exposes the
 * [property`View:`completion] object with the internal-child "completion".
 * 
 * An example of a UI definition fragment with GtkSourceView:
 * ```xml
 * <object class="GtkSourceView" id="source_view">
 *   <property name="tab-width">4</property>
 *   <property name="auto-indent">True</property>
 *   <child internal-child="completion">
 *     <object class="GtkSourceCompletion">
 *       <property name="select-on-show">False</property>
 *     </object>
 *   </child>
 * </object>
 * ```
 * 
 * # Changing the Font
 * 
 * Gtk CSS provides the best way to change the font for a `GtkSourceView` in a
 * manner that allows for components like [class`Map]` to scale the desired
 * font.
 * 
 * ```c
 * GtkCssProvider *provider = gtk_css_provider_new ();
 * gtk_css_provider_load_from_data (provider,
 *                                  "textview { font-family: Monospace; font-size: 8pt; }",
 *                                  -1,
 *                                  NULL);
 * gtk_style_context_add_provider (gtk_widget_get_style_context (view),
 *                                 GTK_STYLE_PROVIDER (provider),
 *                                 GTK_STYLE_PROVIDER_PRIORITY_APPLICATION);
 * g_object_unref (provider);
 * ```
 * 
 * If you need to adjust the font or size of font within a portion of the
 * document only, you should use a [class`Gtk`.TextTag] with the [property`Gtk`.TextTag:family] or
 * [property`Gtk`.TextTag:scale] set so that the font size may be scaled relative to
 * the default font set in CSS.
 * @class 
 */
export class View extends Gtk.TextView {

    // Own properties of GtkSource-5.GtkSource.View

    static name: string

    // Constructors of GtkSource-5.GtkSource.View

    constructor(config?: View.ConstructorProperties) 
    /**
     * Creates a new `GtkSourceView`.
     * 
     * By default, an empty [class`Buffer]` will be lazily created and can be
     * retrieved with [method`Gtk`.TextView.get_buffer].
     * 
     * If you want to specify your own buffer, either override the
     * [vfunc`Gtk`.TextView.create_buffer] factory method, or use
     * [ctor`View`.new_with_buffer].
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `GtkSourceView`.
     * 
     * By default, an empty [class`Buffer]` will be lazily created and can be
     * retrieved with [method`Gtk`.TextView.get_buffer].
     * 
     * If you want to specify your own buffer, either override the
     * [vfunc`Gtk`.TextView.create_buffer] factory method, or use
     * [ctor`View`.new_with_buffer].
     * @constructor 
     */
    static new(): View
    /**
     * Creates a new #GtkSourceView widget displaying the buffer `buffer`.
     * 
     * One buffer can be shared among many widgets.
     * @constructor 
     * @param buffer a #GtkSourceBuffer.
     */
    static newWithBuffer(buffer: Buffer): View

    // Overloads of newWithBuffer

    /**
     * Creates a new `GtkTextView` widget displaying the buffer `buffer`.
     * 
     * One buffer can be shared among many widgets. `buffer` may be %NULL
     * to create a default buffer, in which case this function is equivalent
     * to [ctor`Gtk`.TextView.new]. The text view adds its own reference count
     * to the buffer; it does not take over an existing reference.
     * @constructor 
     * @param buffer a `GtkTextBuffer`
     */
    static newWithBuffer(buffer: Gtk.TextBuffer): Gtk.TextView
    _init(config?: View.ConstructorProperties): void
}

export module VimIMContext {

    // Signal callback interfaces

    /**
     * Signal callback interface for `edit`
     */
    export interface EditSignalCallback {
        (view: View, path: string | null): void
    }

    /**
     * Signal callback interface for `execute-command`
     */
    export interface ExecuteCommandSignalCallback {
        (command: string): boolean
    }

    /**
     * Signal callback interface for `format-text`
     */
    export interface FormatTextSignalCallback {
        (begin: Gtk.TextIter, end: Gtk.TextIter): void
    }

    /**
     * Signal callback interface for `write`
     */
    export interface WriteSignalCallback {
        (view: View, path: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.IMContext.ConstructorProperties {
    }

}

export interface VimIMContext {

    // Own properties of GtkSource-5.GtkSource.VimIMContext

    readonly commandBarText: string
    readonly commandText: string

    // Owm methods of GtkSource-5.GtkSource.VimIMContext

    /**
     * Executes `command` as if it was typed into the command bar by the
     * user except that this does not emit the
     * [signal`VimIMContext:`:execute-command] signal.
     * @param command the command text
     */
    executeCommand(command: string): void
    /**
     * Gets the current command-bar text as it is entered by the user.
     */
    getCommandBarText(): string
    /**
     * Gets the current command text as it is entered by the user.
     */
    getCommandText(): string

    // Own signals of GtkSource-5.GtkSource.VimIMContext

    connect(sigName: "edit", callback: VimIMContext.EditSignalCallback): number
    on(sigName: "edit", callback: VimIMContext.EditSignalCallback): number
    once(sigName: "edit", callback: VimIMContext.EditSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "edit", path: string | null, ...args: any[]): void
    connect(sigName: "execute-command", callback: VimIMContext.ExecuteCommandSignalCallback): number
    on(sigName: "execute-command", callback: VimIMContext.ExecuteCommandSignalCallback): number
    once(sigName: "execute-command", callback: VimIMContext.ExecuteCommandSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "execute-command", ...args: any[]): void
    connect(sigName: "format-text", callback: VimIMContext.FormatTextSignalCallback): number
    on(sigName: "format-text", callback: VimIMContext.FormatTextSignalCallback): number
    once(sigName: "format-text", callback: VimIMContext.FormatTextSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "format-text", end: Gtk.TextIter, ...args: any[]): void
    connect(sigName: "write", callback: VimIMContext.WriteSignalCallback): number
    on(sigName: "write", callback: VimIMContext.WriteSignalCallback): number
    once(sigName: "write", callback: VimIMContext.WriteSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "write", path: string | null, ...args: any[]): void

    // Class property signals of GtkSource-5.GtkSource.VimIMContext

    connect(sigName: "notify::command-bar-text", callback: any): number
    on(sigName: "notify::command-bar-text", callback: any): number
    once(sigName: "notify::command-bar-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::command-bar-text", ...args: any[]): void
    connect(sigName: "notify::command-text", callback: any): number
    on(sigName: "notify::command-text", callback: any): number
    once(sigName: "notify::command-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::command-text", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: any): number
    on(sigName: "notify::input-hints", callback: any): number
    once(sigName: "notify::input-hints", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: any): number
    on(sigName: "notify::input-purpose", callback: any): number
    once(sigName: "notify::input-purpose", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Vim emulation.
 * 
 * The `GtkSourceVimIMContext` is a [class`Gtk`.IMContext] implementation that can
 * be used to provide Vim-like editing controls within a [class`View]`.
 * 
 * The `GtkSourceViMIMContext` will process incoming [class`Gdk`.KeyEvent] as the
 * user types. It should be used in conjunction with a [class`Gtk`.EventControllerKey].
 * 
 * Various features supported by `GtkSourceVimIMContext` include:
 * 
 *  - Normal, Insert, Replace, Visual, and Visual Line modes
 *  - Support for an integrated command bar and current command preview
 *  - Search and replace
 *  - Motions and Text Objects
 *  - History replay
 *  - Jumplists within the current file
 *  - Registers including the system and primary clipboards
 *  - Creation and motion to marks
 *  - Some commonly used Vim commands
 * 
 * It is recommended that applications display the contents of
 * [property`VimIMContext:`command-bar-text] and
 * [property`VimIMContext:`command-text] to the user as they represent the
 * command-bar and current command preview found in Vim.
 * 
 * `GtkSourceVimIMContext` attempts to work with additional [class`Gtk`.IMContext]
 * implementations such as IBus by querying the [class`Gtk`.TextView] before processing
 * the command in states which support it (notably Insert and Replace modes).
 * 
 * ```c
 * GtkEventController *key;
 * GtkSourceView *view;
 * GtkIMContext *im_context;
 * 
 * view = gtk_source_view_new ();
 * im_context = gtk_source_vim_im_context_new ();
 * key = gtk_event_controller_key_new ();
 * 
 * gtk_event_controller_key_set_im_context (GTK_EVENT_CONTROLLER_KEY (key), im_context);
 * gtk_event_controller_set_propagation_phase (key, GTK_PHASE_CAPTURE);
 * gtk_widget_add_controller (GTK_WIDGET (view), key);
 * 
 * g_object_bind_property (im_context, "command-bar-text", command_bar_label, "label", 0);
 * g_object_bind_property (im_context, "command-text", command_label, "label", 0);
 * ```
 * @class 
 */
export class VimIMContext extends Gtk.IMContext {

    // Own properties of GtkSource-5.GtkSource.VimIMContext

    static name: string

    // Constructors of GtkSource-5.GtkSource.VimIMContext

    constructor(config?: VimIMContext.ConstructorProperties) 
    constructor() 
    static new(): VimIMContext
    _init(config?: VimIMContext.ConstructorProperties): void
}

export interface BufferClass {

    // Own fields of GtkSource-5.GtkSource.BufferClass

    parentClass: Gtk.TextBufferClass
    bracketMatched: (buffer: Buffer, iter: Gtk.TextIter, state: BracketMatchType) => void
}

export abstract class BufferClass {

    // Own properties of GtkSource-5.GtkSource.BufferClass

    static name: string
}

export interface CompletionCellClass {

    // Own fields of GtkSource-5.GtkSource.CompletionCellClass

    parentClass: Gtk.WidgetClass
}

export abstract class CompletionCellClass {

    // Own properties of GtkSource-5.GtkSource.CompletionCellClass

    static name: string
}

export interface CompletionClass {

    // Own fields of GtkSource-5.GtkSource.CompletionClass

    parentClass: GObject.ObjectClass
}

export abstract class CompletionClass {

    // Own properties of GtkSource-5.GtkSource.CompletionClass

    static name: string
}

export interface CompletionContextClass {

    // Own fields of GtkSource-5.GtkSource.CompletionContextClass

    parentClass: GObject.ObjectClass
}

export abstract class CompletionContextClass {

    // Own properties of GtkSource-5.GtkSource.CompletionContextClass

    static name: string
}

export interface CompletionProposalInterface {

    // Own fields of GtkSource-5.GtkSource.CompletionProposalInterface

    parentIface: GObject.TypeInterface
}

export abstract class CompletionProposalInterface {

    // Own properties of GtkSource-5.GtkSource.CompletionProposalInterface

    static name: string
}

export interface CompletionProviderInterface {

    // Own fields of GtkSource-5.GtkSource.CompletionProviderInterface

    parentIface: GObject.TypeInterface
    getTitle: (self: CompletionProvider) => string | null
    getPriority: (self: CompletionProvider, context: CompletionContext) => number
    isTrigger: (self: CompletionProvider, iter: Gtk.TextIter, ch: string) => boolean
    keyActivates: (self: CompletionProvider, context: CompletionContext, proposal: CompletionProposal, keyval: number, state: Gdk.ModifierType) => boolean
    populateAsync: (self: CompletionProvider, context: CompletionContext, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    populateFinish: (self: CompletionProvider, result: Gio.AsyncResult) => Gio.ListModel
    refilter: (self: CompletionProvider, context: CompletionContext, model: Gio.ListModel) => void
    display: (self: CompletionProvider, context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell) => void
    activate: (self: CompletionProvider, context: CompletionContext, proposal: CompletionProposal) => void
    listAlternates: (self: CompletionProvider, context: CompletionContext, proposal: CompletionProposal) => CompletionProposal[] | null
}

export abstract class CompletionProviderInterface {

    // Own properties of GtkSource-5.GtkSource.CompletionProviderInterface

    static name: string
}

export interface CompletionSnippetsClass {

    // Own fields of GtkSource-5.GtkSource.CompletionSnippetsClass

    parentClass: GObject.ObjectClass
}

export abstract class CompletionSnippetsClass {

    // Own properties of GtkSource-5.GtkSource.CompletionSnippetsClass

    static name: string
}

export interface CompletionWordsClass {

    // Own fields of GtkSource-5.GtkSource.CompletionWordsClass

    parentClass: GObject.ObjectClass
}

export abstract class CompletionWordsClass {

    // Own properties of GtkSource-5.GtkSource.CompletionWordsClass

    static name: string
}

export interface Encoding {

    // Owm methods of GtkSource-5.GtkSource.Encoding

    /**
     * Used by language bindings.
     */
    copy(): Encoding
    /**
     * Used by language bindings.
     */
    free(): void
    /**
     * Gets the character set of the #GtkSourceEncoding, such as "UTF-8" or
     * "ISO-8859-1".
     */
    getCharset(): string
    /**
     * Gets the name of the #GtkSourceEncoding such as "Unicode" or "Western".
     */
    getName(): string
    toString(): string
}

/**
 * Character encoding.
 * 
 * The #GtkSourceEncoding boxed type represents a character encoding. It is used
 * for example by #GtkSourceFile. Note that the text in GTK widgets is always
 * encoded in UTF-8.
 * @record 
 */
export class Encoding {

    // Own properties of GtkSource-5.GtkSource.Encoding

    static name: string

    // Constructors of GtkSource-5.GtkSource.Encoding

    /**
     * Gets all encodings.
     */
    static getAll(): Encoding[]
    /**
     * Gets the #GtkSourceEncoding for the current locale.
     * 
     * See also [func`GLib`.get_charset].
     */
    static getCurrent(): Encoding
    /**
     * Gets the list of default candidate encodings to try when loading a file.
     * 
     * See [method`FileLoader`.set_candidate_encodings].
     * 
     * This function returns a different list depending on the current locale (i.e.
     * language, country and default encoding). The UTF-8 encoding and the current
     * locale encoding are guaranteed to be present in the returned list.
     */
    static getDefaultCandidates(): Encoding[]
    /**
     * Gets a #GtkSourceEncoding from a character set such as "UTF-8" or
     * "ISO-8859-1".
     * @param charset a character set.
     */
    static getFromCharset(charset: string): Encoding | null
    static getUtf8(): Encoding
}

export interface FileClass {

    // Own fields of GtkSource-5.GtkSource.FileClass

    parentClass: GObject.ObjectClass
}

export abstract class FileClass {

    // Own properties of GtkSource-5.GtkSource.FileClass

    static name: string
}

export interface FileLoaderClass {

    // Own fields of GtkSource-5.GtkSource.FileLoaderClass

    parentClass: GObject.ObjectClass
}

export abstract class FileLoaderClass {

    // Own properties of GtkSource-5.GtkSource.FileLoaderClass

    static name: string
}

export interface FileSaverClass {

    // Own fields of GtkSource-5.GtkSource.FileSaverClass

    parentClass: GObject.ObjectClass
}

export abstract class FileSaverClass {

    // Own properties of GtkSource-5.GtkSource.FileSaverClass

    static name: string
}

export interface GutterClass {

    // Own fields of GtkSource-5.GtkSource.GutterClass

    parentClass: Gtk.WidgetClass
}

export abstract class GutterClass {

    // Own properties of GtkSource-5.GtkSource.GutterClass

    static name: string
}

export interface GutterLinesClass {

    // Own fields of GtkSource-5.GtkSource.GutterLinesClass

    parentClass: GObject.ObjectClass
}

export abstract class GutterLinesClass {

    // Own properties of GtkSource-5.GtkSource.GutterLinesClass

    static name: string
}

export interface GutterRendererClass {

    // Own fields of GtkSource-5.GtkSource.GutterRendererClass

    parentClass: Gtk.WidgetClass
    queryData: (renderer: GutterRenderer, lines: GutterLines, line: number) => void
    begin: (renderer: GutterRenderer, lines: GutterLines) => void
    snapshotLine: (renderer: GutterRenderer, snapshot: Gtk.Snapshot, lines: GutterLines, line: number) => void
    end: (renderer: GutterRenderer) => void
    changeView: (renderer: GutterRenderer, oldView: View | null) => void
    changeBuffer: (renderer: GutterRenderer, oldBuffer: Buffer | null) => void
    queryActivatable: (renderer: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle) => boolean
    activate: (renderer: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number) => void
}

export abstract class GutterRendererClass {

    // Own properties of GtkSource-5.GtkSource.GutterRendererClass

    static name: string
}

export interface GutterRendererPixbufClass {

    // Own fields of GtkSource-5.GtkSource.GutterRendererPixbufClass

    parentClass: GutterRendererClass
}

export abstract class GutterRendererPixbufClass {

    // Own properties of GtkSource-5.GtkSource.GutterRendererPixbufClass

    static name: string
}

export interface GutterRendererTextClass {

    // Own fields of GtkSource-5.GtkSource.GutterRendererTextClass

    parentClass: GutterRendererClass
}

export abstract class GutterRendererTextClass {

    // Own properties of GtkSource-5.GtkSource.GutterRendererTextClass

    static name: string
}

export interface HoverClass {

    // Own fields of GtkSource-5.GtkSource.HoverClass

    parentClass: GObject.ObjectClass
}

export abstract class HoverClass {

    // Own properties of GtkSource-5.GtkSource.HoverClass

    static name: string
}

export interface HoverContextClass {

    // Own fields of GtkSource-5.GtkSource.HoverContextClass

    parentClass: GObject.ObjectClass
}

export abstract class HoverContextClass {

    // Own properties of GtkSource-5.GtkSource.HoverContextClass

    static name: string
}

export interface HoverDisplayClass {

    // Own fields of GtkSource-5.GtkSource.HoverDisplayClass

    parentClass: Gtk.WidgetClass
}

export abstract class HoverDisplayClass {

    // Own properties of GtkSource-5.GtkSource.HoverDisplayClass

    static name: string
}

export interface HoverProviderInterface {

    // Own fields of GtkSource-5.GtkSource.HoverProviderInterface

    parentIface: GObject.TypeInterface
    populate: (self: HoverProvider, context: HoverContext, display: HoverDisplay) => boolean
    populateAsync: (self: HoverProvider, context: HoverContext, display: HoverDisplay, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    populateFinish: (self: HoverProvider, result: Gio.AsyncResult) => boolean
}

export abstract class HoverProviderInterface {

    // Own properties of GtkSource-5.GtkSource.HoverProviderInterface

    static name: string
}

export interface IndenterInterface {

    // Own fields of GtkSource-5.GtkSource.IndenterInterface

    parentIface: GObject.TypeInterface
    isTrigger: (self: Indenter, view: View, location: Gtk.TextIter, state: Gdk.ModifierType, keyval: number) => boolean
    indent: (self: Indenter, view: View, iter: Gtk.TextIter) => /* iter */ Gtk.TextIter
}

/**
 * The virtual function table for #GtkSourceIndenter.
 * @record 
 */
export abstract class IndenterInterface {

    // Own properties of GtkSource-5.GtkSource.IndenterInterface

    static name: string
}

export interface LanguageClass {

    // Own fields of GtkSource-5.GtkSource.LanguageClass

    parentClass: GObject.ObjectClass
}

export abstract class LanguageClass {

    // Own properties of GtkSource-5.GtkSource.LanguageClass

    static name: string
}

export interface LanguageManagerClass {

    // Own fields of GtkSource-5.GtkSource.LanguageManagerClass

    parentClass: GObject.ObjectClass
}

export abstract class LanguageManagerClass {

    // Own properties of GtkSource-5.GtkSource.LanguageManagerClass

    static name: string
}

export interface MapClass {

    // Own fields of GtkSource-5.GtkSource.MapClass

    parentClass: ViewClass
}

export abstract class MapClass {

    // Own properties of GtkSource-5.GtkSource.MapClass

    static name: string
}

export interface MarkAttributesClass {

    // Own fields of GtkSource-5.GtkSource.MarkAttributesClass

    parentClass: GObject.ObjectClass
}

export abstract class MarkAttributesClass {

    // Own properties of GtkSource-5.GtkSource.MarkAttributesClass

    static name: string
}

export interface MarkClass {

    // Own fields of GtkSource-5.GtkSource.MarkClass

    parentClass: Gtk.TextMarkClass
}

export abstract class MarkClass {

    // Own properties of GtkSource-5.GtkSource.MarkClass

    static name: string
}

export interface PrintCompositorClass {

    // Own fields of GtkSource-5.GtkSource.PrintCompositorClass

    parentClass: GObject.ObjectClass
}

export abstract class PrintCompositorClass {

    // Own properties of GtkSource-5.GtkSource.PrintCompositorClass

    static name: string
}

export interface RegionClass {

    // Own fields of GtkSource-5.GtkSource.RegionClass

    parentClass: GObject.ObjectClass
}

export abstract class RegionClass {

    // Own properties of GtkSource-5.GtkSource.RegionClass

    static name: string
}

export interface RegionIter {

    // Owm methods of GtkSource-5.GtkSource.RegionIter

    /**
     * Gets the subregion at this iterator.
     */
    getSubregion(): [ /* returnType */ boolean, /* start */ Gtk.TextIter, /* end */ Gtk.TextIter ]
    isEnd(): boolean
    /**
     * Moves `iter` to the next subregion.
     */
    next(): boolean
}

/**
 * An opaque datatype.
 * 
 * Ignore all its fields and initialize the iter with [method`Region`.get_start_region_iter].
 * @record 
 */
export class RegionIter {

    // Own properties of GtkSource-5.GtkSource.RegionIter

    static name: string
}

export interface SearchContextClass {

    // Own fields of GtkSource-5.GtkSource.SearchContextClass

    parentClass: GObject.ObjectClass
}

export abstract class SearchContextClass {

    // Own properties of GtkSource-5.GtkSource.SearchContextClass

    static name: string
}

export interface SearchSettingsClass {

    // Own fields of GtkSource-5.GtkSource.SearchSettingsClass

    parentClass: GObject.ObjectClass
}

export abstract class SearchSettingsClass {

    // Own properties of GtkSource-5.GtkSource.SearchSettingsClass

    static name: string
}

export interface SnippetChunkClass {

    // Own fields of GtkSource-5.GtkSource.SnippetChunkClass

    parentClass: GObject.InitiallyUnownedClass
}

export abstract class SnippetChunkClass {

    // Own properties of GtkSource-5.GtkSource.SnippetChunkClass

    static name: string
}

export interface SnippetClass {

    // Own fields of GtkSource-5.GtkSource.SnippetClass

    parentClass: GObject.ObjectClass
}

export abstract class SnippetClass {

    // Own properties of GtkSource-5.GtkSource.SnippetClass

    static name: string
}

export interface SnippetContextClass {

    // Own fields of GtkSource-5.GtkSource.SnippetContextClass

    parentClass: GObject.ObjectClass
}

export abstract class SnippetContextClass {

    // Own properties of GtkSource-5.GtkSource.SnippetContextClass

    static name: string
}

export interface SnippetManagerClass {

    // Own fields of GtkSource-5.GtkSource.SnippetManagerClass

    parentClass: GObject.ObjectClass
}

export abstract class SnippetManagerClass {

    // Own properties of GtkSource-5.GtkSource.SnippetManagerClass

    static name: string
}

export interface SpaceDrawerClass {

    // Own fields of GtkSource-5.GtkSource.SpaceDrawerClass

    parentClass: GObject.ObjectClass
}

export abstract class SpaceDrawerClass {

    // Own properties of GtkSource-5.GtkSource.SpaceDrawerClass

    static name: string
}

export interface StyleClass {

    // Own fields of GtkSource-5.GtkSource.StyleClass

    parentClass: GObject.ObjectClass
}

export abstract class StyleClass {

    // Own properties of GtkSource-5.GtkSource.StyleClass

    static name: string
}

export interface StyleSchemeChooserButtonClass {

    // Own fields of GtkSource-5.GtkSource.StyleSchemeChooserButtonClass

    parent: Gtk.ButtonClass
}

export abstract class StyleSchemeChooserButtonClass {

    // Own properties of GtkSource-5.GtkSource.StyleSchemeChooserButtonClass

    static name: string
}

export interface StyleSchemeChooserInterface {

    // Own fields of GtkSource-5.GtkSource.StyleSchemeChooserInterface

    baseInterface: GObject.TypeInterface
    getStyleScheme: (chooser: StyleSchemeChooser) => StyleScheme
    setStyleScheme: (chooser: StyleSchemeChooser, scheme: StyleScheme) => void
}

export abstract class StyleSchemeChooserInterface {

    // Own properties of GtkSource-5.GtkSource.StyleSchemeChooserInterface

    static name: string
}

export interface StyleSchemeChooserWidgetClass {

    // Own fields of GtkSource-5.GtkSource.StyleSchemeChooserWidgetClass

    parent: Gtk.WidgetClass
}

export abstract class StyleSchemeChooserWidgetClass {

    // Own properties of GtkSource-5.GtkSource.StyleSchemeChooserWidgetClass

    static name: string
}

export interface StyleSchemeClass {

    // Own fields of GtkSource-5.GtkSource.StyleSchemeClass

    parentClass: GObject.ObjectClass
}

export abstract class StyleSchemeClass {

    // Own properties of GtkSource-5.GtkSource.StyleSchemeClass

    static name: string
}

export interface StyleSchemeManagerClass {

    // Own fields of GtkSource-5.GtkSource.StyleSchemeManagerClass

    parentClass: GObject.ObjectClass
}

export abstract class StyleSchemeManagerClass {

    // Own properties of GtkSource-5.GtkSource.StyleSchemeManagerClass

    static name: string
}

export interface StyleSchemePreviewClass {

    // Own fields of GtkSource-5.GtkSource.StyleSchemePreviewClass

    parentClass: Gtk.WidgetClass
}

export abstract class StyleSchemePreviewClass {

    // Own properties of GtkSource-5.GtkSource.StyleSchemePreviewClass

    static name: string
}

export interface TagClass {

    // Own fields of GtkSource-5.GtkSource.TagClass

    parentClass: Gtk.TextTagClass
}

export abstract class TagClass {

    // Own properties of GtkSource-5.GtkSource.TagClass

    static name: string
}

export interface ViewClass {

    // Own fields of GtkSource-5.GtkSource.ViewClass

    parentClass: Gtk.TextViewClass
    lineMarkActivated: (view: View, iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, nPresses: number) => void
    showCompletion: (view: View) => void
    moveLines: (view: View, down: boolean) => void
    moveWords: (view: View, step: number) => void
    pushSnippet: (view: View, snippet: Snippet, location: Gtk.TextIter | null) => void
}

export abstract class ViewClass {

    // Own properties of GtkSource-5.GtkSource.ViewClass

    static name: string
}

export interface VimIMContextClass {

    // Own fields of GtkSource-5.GtkSource.VimIMContextClass

    parentClass: Gtk.IMContextClass
}

export abstract class VimIMContextClass {

    // Own properties of GtkSource-5.GtkSource.VimIMContextClass

    static name: string
}
