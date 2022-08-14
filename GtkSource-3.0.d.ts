
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GtkSource-3.0
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
/**
 * An error code used with %GTK_SOURCE_COMPLETION_ERROR in a #GError returned
 * from a completion-related function.
 */
export enum CompletionError {
    /**
     * The #GtkSourceCompletionProvider
     * is already bound to the #GtkSourceCompletion object.
     */
    ALREADY_BOUND,
    /**
     * The #GtkSourceCompletionProvider is
     * not bound to the #GtkSourceCompletion object.
     */
    NOT_BOUND,
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
export enum CompletionActivation {
    /**
     * None.
     */
    NONE,
    /**
     * Interactive activation. By
     * default, it occurs on each insertion in the #GtkTextBuffer. This can be
     * blocked temporarily with gtk_source_completion_block_interactive().
     */
    INTERACTIVE,
    /**
     * User requested activation.
     * By default, it occurs when the user presses
     * <keycombo><keycap>Control</keycap><keycap>space</keycap></keycombo>.
     */
    USER_REQUESTED,
}
/**
 * GtkSourceDrawSpacesFlags determine what kind of spaces whould be drawn. If none
 * of GTK_SOURCE_DRAW_SPACES_LEADING, GTK_SOURCE_DRAW_SPACES_TEXT or
 * GTK_SOURCE_DRAW_SPACES_TRAILING is specified, whitespaces at any position in
 * the line will be drawn (i.e. it has the same effect as specifying all of them).
 * @bitfield 
 */
export enum DrawSpacesFlags {
    /**
     * whether the space character should be drawn.
     */
    SPACE,
    /**
     * whether the tab character should be drawn.
     */
    TAB,
    /**
     * whether the line breaks should be drawn. If
     *   the #GtkSourceBuffer:implicit-trailing-newline property is %TRUE, a line
     *   break is also drawn at the end of the buffer.
     */
    NEWLINE,
    /**
     * whether the non-breaking whitespaces should be drawn.
     */
    NBSP,
    /**
     * whether leading whitespaces should be drawn.
     */
    LEADING,
    /**
     * whether whitespaces inside text should be drawn.
     */
    TEXT,
    /**
     * whether trailing whitespaces should be drawn.
     */
    TRAILING,
    /**
     * wheter all kind of spaces should be drawn.
     */
    ALL,
}
/**
 * Flags to define the behavior of a #GtkSourceFileSaver.
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
export enum GutterRendererState {
    /**
     * normal state
     */
    NORMAL,
    /**
     * area in the renderer represents the
     * line on which the insert cursor is currently positioned
     */
    CURSOR,
    /**
     * the mouse pointer is currently
     * over the activatable area of the renderer
     */
    PRELIT,
    /**
     * area in the renderer represents
     * a line in the buffer which contains part of the selection
     */
    SELECTED,
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
export function completionErrorQuark(): GLib.Quark
/**
 * Gets all encodings.
 */
export function encodingGetAll(): Encoding[]
/**
 * Gets the #GtkSourceEncoding for the current locale. See also g_get_charset().
 */
export function encodingGetCurrent(): Encoding
/**
 * Gets the list of default candidate encodings to try when loading a file. See
 * gtk_source_file_loader_set_candidate_encodings().
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
 * Use this function to escape the following characters: `\n`, `\r`, `\t` and `\`.
 * 
 * For a regular expression search, use g_regex_escape_string() instead.
 * 
 * One possible use case is to take the #GtkTextBuffer's selection and put it in a
 * search entry. The selection can contain tabulations, newlines, etc. So it's
 * better to escape those special characters to better fit in the search entry.
 * 
 * See also: gtk_source_utils_unescape_search_text().
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
 * Use this function before gtk_source_search_settings_set_search_text(), to
 * unescape the following sequences of characters: `\n`, `\r`, `\t` and `\\`.
 * The purpose is to easily write those characters in a search entry.
 * 
 * Note that unescaping the search text is not needed for regular expression
 * searches.
 * 
 * See also: gtk_source_utils_escape_search_text().
 * @param text the text to unescape.
 */
export function utilsUnescapeSearchText(text: string): string
export module CompletionProposal {

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

export interface CompletionProposal {

    // Owm methods of GtkSource-3.0.GtkSource.CompletionProposal

    // Has conflict: changed(): void
    // Has conflict: equal(other: CompletionProposal): boolean
    // Has conflict: getGicon(): Gio.Icon | null
    // Has conflict: getIcon(): GdkPixbuf.Pixbuf | null
    // Has conflict: getIconName(): string | null
    // Has conflict: getInfo(): string | null
    // Has conflict: getLabel(): string
    // Has conflict: getMarkup(): string
    // Has conflict: getText(): string
    // Has conflict: hash(): number

    // Own virtual methods of GtkSource-3.0.GtkSource.CompletionProposal

    /**
     * Emits the "changed" signal on `proposal`. This should be called by
     * implementations whenever the name, icon or info of the proposal has
     * changed.
     * @virtual 
     */
    changed(): void
    /**
     * Get whether two proposal objects are the same.  This is used to (together
     * with gtk_source_completion_proposal_hash()) to match proposals in the
     * completion model. By default, it uses direct equality (g_direct_equal()).
     * @virtual 
     * @param other a #GtkSourceCompletionProposal.
     */
    equal(other: CompletionProposal): boolean
    /**
     * Gets the #GIcon for the icon of `proposal`.
     * @virtual 
     */
    getGicon(): Gio.Icon | null
    /**
     * Gets the #GdkPixbuf for the icon of `proposal`.
     * @virtual 
     */
    getIcon(): GdkPixbuf.Pixbuf | null
    /**
     * Gets the icon name of `proposal`.
     * @virtual 
     */
    getIconName(): string | null
    /**
     * Gets extra information associated to the proposal. This information will be
     * used to present the user with extra, detailed information about the
     * selected proposal. The returned string must be freed with g_free().
     * @virtual 
     */
    getInfo(): string | null
    /**
     * Gets the label of `proposal`. The label is shown in the list of proposals as
     * plain text. If you need any markup (such as bold or italic text), you have
     * to implement gtk_source_completion_proposal_get_markup(). The returned string
     * must be freed with g_free().
     * @virtual 
     */
    getLabel(): string
    /**
     * Gets the label of `proposal` with markup. The label is shown in the list of
     * proposals and may contain markup. This will be used instead of
     * gtk_source_completion_proposal_get_label() if implemented. The returned string
     * must be freed with g_free().
     * @virtual 
     */
    getMarkup(): string
    /**
     * Gets the text of `proposal`. The text that is inserted into
     * the text buffer when the proposal is activated by the default activation.
     * You are free to implement a custom activation handler in the provider and
     * not implement this function. For more information, see
     * gtk_source_completion_provider_activate_proposal(). The returned string must
     * be freed with g_free().
     * @virtual 
     */
    getText(): string
    /**
     * Get the hash value of `proposal`. This is used to (together with
     * gtk_source_completion_proposal_equal()) to match proposals in the completion
     * model. By default, it uses a direct hash (g_direct_hash()).
     * @virtual 
     */
    hash(): number

    // Own signals of GtkSource-3.0.GtkSource.CompletionProposal

    connect(sigName: "changed", callback: CompletionProposal.ChangedSignalCallback): number
    on(sigName: "changed", callback: CompletionProposal.ChangedSignalCallback): number
    once(sigName: "changed", callback: CompletionProposal.ChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of GtkSource-3.0.GtkSource.CompletionProposal

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CompletionProposal extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.CompletionProposal

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.CompletionProposal

    constructor(config?: CompletionProposal.ConstructorProperties) 
    _init(config?: CompletionProposal.ConstructorProperties): void
}

export module CompletionProvider {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface CompletionProvider {

    // Owm methods of GtkSource-3.0.GtkSource.CompletionProvider

    // Has conflict: activateProposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean
    // Has conflict: getActivation(): CompletionActivation
    // Has conflict: getGicon(): Gio.Icon | null
    // Has conflict: getIcon(): GdkPixbuf.Pixbuf | null
    // Has conflict: getIconName(): string | null
    // Has conflict: getInfoWidget(proposal: CompletionProposal): Gtk.Widget | null
    // Has conflict: getInteractiveDelay(): number
    // Has conflict: getName(): string
    // Has conflict: getPriority(): number
    // Has conflict: getStartIter(context: CompletionContext, proposal: CompletionProposal): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    // Has conflict: match(context: CompletionContext): boolean
    // Has conflict: populate(context: CompletionContext): void
    // Has conflict: updateInfo(proposal: CompletionProposal, info: CompletionInfo): void

    // Own virtual methods of GtkSource-3.0.GtkSource.CompletionProvider

    /**
     * Activate `proposal` at `iter`. When this functions returns %FALSE, the default
     * activation of `proposal` will take place which replaces the word at `iter`
     * with the text of `proposal` (see gtk_source_completion_proposal_get_text()).
     * 
     * Here is how the default activation selects the boundaries of the word to
     * replace. The end of the word is `iter`. For the start of the word, it depends
     * on whether a start iter is defined for `proposal` (see
     * gtk_source_completion_provider_get_start_iter()). If a start iter is defined,
     * the start of the word is the start iter. Else, the word (as long as possible)
     * will contain only alphanumerical and the "_" characters.
     * @virtual 
     * @param proposal a #GtkSourceCompletionProposal.
     * @param iter a #GtkTextIter.
     */
    activateProposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean
    /**
     * Get with what kind of activation the provider should be activated.
     * @virtual 
     */
    getActivation(): CompletionActivation
    /**
     * Gets the #GIcon for the icon of `provider`.
     * @virtual 
     */
    getGicon(): Gio.Icon | null
    /**
     * Get the #GdkPixbuf for the icon of the `provider`.
     * @virtual 
     */
    getIcon(): GdkPixbuf.Pixbuf | null
    /**
     * Gets the icon name of `provider`.
     * @virtual 
     */
    getIconName(): string | null
    /**
     * Get a customized info widget to show extra information of a proposal.
     * This allows for customized widgets on a proposal basis, although in general
     * providers will have the same custom widget for all their proposals and
     * `proposal` can be ignored. The implementation of this function is optional.
     * 
     * If this function is not implemented, the default widget is a #GtkLabel. The
     * return value of gtk_source_completion_proposal_get_info() is used as the
     * content of the #GtkLabel.
     * 
     * <note>
     *   <para>
     *     If implemented, gtk_source_completion_provider_update_info()
     *     <emphasis>must</emphasis> also be implemented.
     *   </para>
     * </note>
     * @virtual 
     * @param proposal a currently selected #GtkSourceCompletionProposal.
     */
    getInfoWidget(proposal: CompletionProposal): Gtk.Widget | null
    /**
     * Get the delay in milliseconds before starting interactive completion for
     * this provider. A value of -1 indicates to use the default value as set
     * by the #GtkSourceCompletion:auto-complete-delay property.
     * @virtual 
     */
    getInteractiveDelay(): number
    /**
     * Get the name of the provider. This should be a translatable name for
     * display to the user. For example: _("Document word completion provider"). The
     * returned string must be freed with g_free().
     * @virtual 
     */
    getName(): string
    /**
     * Get the provider priority. The priority determines the order in which
     * proposals appear in the completion popup. Higher priorities are sorted
     * before lower priorities. The default priority is 0.
     * @virtual 
     */
    getPriority(): number
    /**
     * Get the #GtkTextIter at which the completion for `proposal` starts. When
     * implemented, this information is used to position the completion window
     * accordingly when a proposal is selected in the completion window. The
     * `proposal` text inside the completion window is aligned on `iter`.
     * 
     * If this function is not implemented, the word boundary is taken to position
     * the completion window. See gtk_source_completion_provider_activate_proposal()
     * for an explanation on the word boundaries.
     * 
     * When the `proposal` is activated, the default handler uses `iter` as the start
     * of the word to replace. See
     * gtk_source_completion_provider_activate_proposal() for more information.
     * @virtual 
     * @param context a #GtkSourceCompletionContext.
     * @param proposal a #GtkSourceCompletionProposal.
     */
    getStartIter(context: CompletionContext, proposal: CompletionProposal): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    /**
     * Get whether the provider match the context of completion detailed in
     * `context`.
     * @virtual 
     * @param context a #GtkSourceCompletionContext.
     */
    match(context: CompletionContext): boolean
    /**
     * Populate `context` with proposals from `provider` added with the
     * gtk_source_completion_context_add_proposals() function.
     * @virtual 
     * @param context a #GtkSourceCompletionContext.
     */
    populate(context: CompletionContext): void
    /**
     * Update extra information shown in `info` for `proposal`.
     * 
     * <note>
     *   <para>
     *     This function <emphasis>must</emphasis> be implemented when
     *     gtk_source_completion_provider_get_info_widget() is implemented.
     *   </para>
     * </note>
     * @virtual 
     * @param proposal a #GtkSourceCompletionProposal.
     * @param info a #GtkSourceCompletionInfo.
     */
    updateInfo(proposal: CompletionProposal, info: CompletionInfo): void

    // Class property signals of GtkSource-3.0.GtkSource.CompletionProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CompletionProvider extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.CompletionProvider

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.CompletionProvider

    constructor(config?: CompletionProvider.ConstructorProperties) 
    _init(config?: CompletionProvider.ConstructorProperties): void
}

export module StyleSchemeChooser {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.StyleSchemeChooser

        /**
         * The :style-scheme property contains the currently selected style
         * scheme. The property can be set to change
         * the current selection programmatically.
         */
        styleScheme?: StyleScheme | null
    }

}

export interface StyleSchemeChooser {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemeChooser

    /**
     * The :style-scheme property contains the currently selected style
     * scheme. The property can be set to change
     * the current selection programmatically.
     */
    styleScheme: StyleScheme

    // Owm methods of GtkSource-3.0.GtkSource.StyleSchemeChooser

    // Has conflict: getStyleScheme(): StyleScheme
    // Has conflict: setStyleScheme(scheme: StyleScheme): void

    // Own virtual methods of GtkSource-3.0.GtkSource.StyleSchemeChooser

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

    // Class property signals of GtkSource-3.0.GtkSource.StyleSchemeChooser

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

export class StyleSchemeChooser extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemeChooser

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.StyleSchemeChooser

    constructor(config?: StyleSchemeChooser.ConstructorProperties) 
    _init(config?: StyleSchemeChooser.ConstructorProperties): void
}

export module UndoManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `can-redo-changed`
     */
    export interface CanRedoChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `can-undo-changed`
     */
    export interface CanUndoChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface UndoManager {

    // Owm methods of GtkSource-3.0.GtkSource.UndoManager

    // Has conflict: beginNotUndoableAction(): void
    // Has conflict: canRedo(): boolean
    // Has conflict: canRedoChanged(): void
    // Has conflict: canUndo(): boolean
    // Has conflict: canUndoChanged(): void
    // Has conflict: endNotUndoableAction(): void
    // Has conflict: redo(): void
    // Has conflict: undo(): void

    // Own virtual methods of GtkSource-3.0.GtkSource.UndoManager

    /**
     * Begin a not undoable action on the buffer. All changes between this call
     * and the call to gtk_source_undo_manager_end_not_undoable_action() cannot
     * be undone. This function should be re-entrant.
     * @virtual 
     */
    beginNotUndoableAction(): void
    /**
     * Get whether there are redo operations available.
     * @virtual 
     */
    canRedo(): boolean
    /**
     * Emits the #GtkSourceUndoManager::can-redo-changed signal.
     * @virtual 
     */
    canRedoChanged(): void
    /**
     * Get whether there are undo operations available.
     * @virtual 
     */
    canUndo(): boolean
    /**
     * Emits the #GtkSourceUndoManager::can-undo-changed signal.
     * @virtual 
     */
    canUndoChanged(): void
    /**
     * Ends a not undoable action on the buffer.
     * @virtual 
     */
    endNotUndoableAction(): void
    /**
     * Perform a single redo. Calling this function when there are no redo operations
     * available is an error. Use gtk_source_undo_manager_can_redo() to find out
     * if there are redo operations available.
     * @virtual 
     */
    redo(): void
    /**
     * Perform a single undo. Calling this function when there are no undo operations
     * available is an error. Use gtk_source_undo_manager_can_undo() to find out
     * if there are undo operations available.
     * @virtual 
     */
    undo(): void

    // Own signals of GtkSource-3.0.GtkSource.UndoManager

    connect(sigName: "can-redo-changed", callback: UndoManager.CanRedoChangedSignalCallback): number
    on(sigName: "can-redo-changed", callback: UndoManager.CanRedoChangedSignalCallback): number
    once(sigName: "can-redo-changed", callback: UndoManager.CanRedoChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "can-redo-changed", ...args: any[]): void
    connect(sigName: "can-undo-changed", callback: UndoManager.CanUndoChangedSignalCallback): number
    on(sigName: "can-undo-changed", callback: UndoManager.CanUndoChangedSignalCallback): number
    once(sigName: "can-undo-changed", callback: UndoManager.CanUndoChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "can-undo-changed", ...args: any[]): void

    // Class property signals of GtkSource-3.0.GtkSource.UndoManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class UndoManager extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.UndoManager

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.UndoManager

    constructor(config?: UndoManager.ConstructorProperties) 
    _init(config?: UndoManager.ConstructorProperties): void
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
     * Signal callback interface for `highlight-updated`
     */
    export interface HighlightUpdatedSignalCallback {
        (start: Gtk.TextIter, end: Gtk.TextIter): void
    }

    /**
     * Signal callback interface for `redo`
     */
    export interface RedoSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `source-mark-updated`
     */
    export interface SourceMarkUpdatedSignalCallback {
        (mark: Gtk.TextMark): void
    }

    /**
     * Signal callback interface for `undo`
     */
    export interface UndoSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.TextBuffer.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.Buffer

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
         * gtk_source_buffer_set_implicit_trailing_newline().
         */
        implicitTrailingNewline?: boolean | null
        language?: Language | null
        /**
         * Number of undo levels for the buffer. -1 means no limit. This property
         * will only affect the default undo manager.
         */
        maxUndoLevels?: number | null
        /**
         * Style scheme. It contains styles for syntax highlighting, optionally
         * foreground, background, cursor color, current line color, and matching
         * brackets style.
         */
        styleScheme?: StyleScheme | null
        undoManager?: UndoManager | null
    }

}

export interface Buffer {

    // Own properties of GtkSource-3.0.GtkSource.Buffer

    readonly canRedo: boolean
    readonly canUndo: boolean
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
     * gtk_source_buffer_set_implicit_trailing_newline().
     */
    implicitTrailingNewline: boolean
    language: Language
    /**
     * Number of undo levels for the buffer. -1 means no limit. This property
     * will only affect the default undo manager.
     */
    maxUndoLevels: number
    /**
     * Style scheme. It contains styles for syntax highlighting, optionally
     * foreground, background, cursor color, current line color, and matching
     * brackets style.
     */
    styleScheme: StyleScheme
    undoManager: UndoManager

    // Own fields of GtkSource-3.0.GtkSource.Buffer

    parentInstance: any
    priv: any

    // Owm methods of GtkSource-3.0.GtkSource.Buffer

    /**
     * Moves `iter` to the position of the previous #GtkSourceMark of the given
     * category. Returns %TRUE if `iter` was moved. If `category` is NULL, the
     * previous source mark can be of any category.
     * @param iter an iterator.
     * @param category category to search for, or %NULL
     */
    backwardIterToSourceMark(iter: Gtk.TextIter, category: string | null): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    /**
     * Marks the beginning of a not undoable action on the buffer,
     * disabling the undo manager.  Typically you would call this function
     * before initially setting the contents of the buffer (e.g. when
     * loading a file in a text editor).
     * 
     * You may nest gtk_source_buffer_begin_not_undoable_action() /
     * gtk_source_buffer_end_not_undoable_action() blocks.
     */
    beginNotUndoableAction(): void
    /**
     * Changes the case of the text between the specified iterators.
     * @param caseType how to change the case.
     * @param start a #GtkTextIter.
     * @param end a #GtkTextIter.
     */
    changeCase(caseType: ChangeCaseType, start: Gtk.TextIter, end: Gtk.TextIter): void
    /**
     * Creates a source mark in the `buffer` of category `category`.  A source mark is
     * a #GtkTextMark but organised into categories. Depending on the category
     * a pixbuf can be specified that will be displayed along the line of the mark.
     * 
     * Like a #GtkTextMark, a #GtkSourceMark can be anonymous if the
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
     * Marks the end of a not undoable action on the buffer.  When the
     * last not undoable block is closed through the call to this
     * function, the list of undo actions is cleared and the undo manager
     * is re-enabled.
     */
    endNotUndoableAction(): void
    /**
     * Forces buffer to analyze and highlight the given area synchronously.
     * 
     * <note>
     *   <para>
     *     This is a potentially slow operation and should be used only
     *     when you need to make sure that some text not currently
     *     visible is highlighted, for instance before printing.
     *   </para>
     * </note>
     * @param start start of the area to highlight.
     * @param end end of the area to highlight.
     */
    ensureHighlight(start: Gtk.TextIter, end: Gtk.TextIter): void
    /**
     * Moves `iter` to the position of the next #GtkSourceMark of the given
     * `category`. Returns %TRUE if `iter` was moved. If `category` is NULL, the
     * next source mark can be of any category.
     * @param iter an iterator.
     * @param category category to search for, or %NULL
     */
    forwardIterToSourceMark(iter: Gtk.TextIter, category: string | null): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    /**
     * Get all defined context classes at `iter`.
     * 
     * See the #GtkSourceBuffer description for the list of default context classes.
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
     * Returns the #GtkSourceLanguage associated with the buffer,
     * see gtk_source_buffer_set_language().  The returned object should not be
     * unreferenced by the user.
     */
    getLanguage(): Language | null
    /**
     * Determines the number of undo levels the buffer will track for buffer edits.
     */
    getMaxUndoLevels(): number
    /**
     * Returns the list of marks of the given category at `iter`. If `category`
     * is %NULL it returns all marks at `iter`.
     * @param iter an iterator.
     * @param category category to search for, or %NULL
     */
    getSourceMarksAtIter(iter: Gtk.TextIter, category: string | null): Mark[]
    /**
     * Returns the list of marks of the given category at `line`.
     * If `category` is %NULL, all marks at `line` are returned.
     * @param line a line number.
     * @param category category to search for, or %NULL
     */
    getSourceMarksAtLine(line: number, category: string | null): Mark[]
    /**
     * Returns the #GtkSourceStyleScheme associated with the buffer,
     * see gtk_source_buffer_set_style_scheme().
     * The returned object should not be unreferenced by the user.
     */
    getStyleScheme(): StyleScheme | null
    /**
     * Returns the #GtkSourceUndoManager associated with the buffer,
     * see gtk_source_buffer_set_undo_manager().  The returned object should not be
     * unreferenced by the user.
     */
    getUndoManager(): UndoManager | null
    /**
     * Moves backward to the next toggle (on or off) of the context class. If no
     * matching context class toggles are found, returns %FALSE, otherwise %TRUE.
     * Does not return toggles located at `iter,` only toggles after `iter`. Sets
     * `iter` to the location of the toggle, or to the end of the buffer if no
     * toggle is found.
     * 
     * See the #GtkSourceBuffer description for the list of default context classes.
     * @param iter a #GtkTextIter.
     * @param contextClass the context class.
     */
    iterBackwardToContextClassToggle(iter: Gtk.TextIter, contextClass: string): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    /**
     * Moves forward to the next toggle (on or off) of the context class. If no
     * matching context class toggles are found, returns %FALSE, otherwise %TRUE.
     * Does not return toggles located at `iter,` only toggles after `iter`. Sets
     * `iter` to the location of the toggle, or to the end of the buffer if no
     * toggle is found.
     * 
     * See the #GtkSourceBuffer description for the list of default context classes.
     * @param iter a #GtkTextIter.
     * @param contextClass the context class.
     */
    iterForwardToContextClassToggle(iter: Gtk.TextIter, contextClass: string): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    /**
     * Check if the class `context_class` is set on `iter`.
     * 
     * See the #GtkSourceBuffer description for the list of default context classes.
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
    // Has conflict: redo(): void
    /**
     * Remove all marks of `category` between `start` and `end` from the buffer.
     * If `category` is NULL, all marks in the range will be removed.
     * @param start a #GtkTextIter.
     * @param end a #GtkTextIter.
     * @param category category to search for, or %NULL.
     */
    removeSourceMarks(start: Gtk.TextIter, end: Gtk.TextIter, category: string | null): void
    /**
     * Controls the bracket match highlighting function in the buffer.  If
     * activated, when you position your cursor over a bracket character
     * (a parenthesis, a square bracket, etc.) the matching opening or
     * closing bracket character will be highlighted.
     * @param highlight %TRUE if you want matching brackets highlighted.
     */
    setHighlightMatchingBrackets(highlight: boolean): void
    /**
     * Controls whether syntax is highlighted in the buffer.
     * 
     * If `highlight` is %TRUE, the text will be highlighted according to the syntax
     * patterns specified in the #GtkSourceLanguage set with
     * gtk_source_buffer_set_language().
     * 
     * If `highlight` is %FALSE, syntax highlighting is disabled and all the
     * #GtkTextTag objects that have been added by the syntax highlighting engine
     * are removed from the buffer.
     * @param highlight %TRUE to enable syntax highlighting, %FALSE to disable it.
     */
    setHighlightSyntax(highlight: boolean): void
    /**
     * Sets whether the `buffer` has an implicit trailing newline.
     * 
     * If an explicit trailing newline is present in a #GtkTextBuffer, #GtkTextView
     * shows it as an empty line. This is generally not what the user expects.
     * 
     * If `implicit_trailing_newline` is %TRUE (the default value):
     *  - when a #GtkSourceFileLoader loads the content of a file into the `buffer,`
     *    the trailing newline (if present in the file) is not inserted into the
     *    `buffer`.
     *  - when a #GtkSourceFileSaver saves the content of the `buffer` into a file, a
     *    trailing newline is added to the file.
     * 
     * On the other hand, if `implicit_trailing_newline` is %FALSE, the file's
     * content is not modified when loaded into the `buffer,` and the `buffer'`s
     * content is not modified when saved into a file.
     * @param implicitTrailingNewline the new value.
     */
    setImplicitTrailingNewline(implicitTrailingNewline: boolean): void
    /**
     * Associates a #GtkSourceLanguage with the buffer.
     * 
     * Note that a #GtkSourceLanguage affects not only the syntax highlighting, but
     * also the [context classes][context-classes]. If you want to disable just the
     * syntax highlighting, see gtk_source_buffer_set_highlight_syntax().
     * 
     * The buffer holds a reference to `language`.
     * @param language a #GtkSourceLanguage to set, or %NULL.
     */
    setLanguage(language: Language | null): void
    /**
     * Sets the number of undo levels for user actions the buffer will
     * track.  If the number of user actions exceeds the limit set by this
     * function, older actions will be discarded.
     * 
     * If `max_undo_levels` is -1, the undo/redo is unlimited.
     * 
     * If `max_undo_levels` is 0, the undo/redo is disabled.
     * @param maxUndoLevels the desired maximum number of undo levels.
     */
    setMaxUndoLevels(maxUndoLevels: number): void
    /**
     * Sets a #GtkSourceStyleScheme to be used by the buffer and the view.
     * 
     * Note that a #GtkSourceStyleScheme affects not only the syntax highlighting,
     * but also other #GtkSourceView features such as highlighting the current line,
     * matching brackets, the line numbers, etc.
     * 
     * Instead of setting a %NULL `scheme,` it is better to disable syntax
     * highlighting with gtk_source_buffer_set_highlight_syntax(), and setting the
     * #GtkSourceStyleScheme with the "classic" or "tango" ID, because those two
     * style schemes follow more closely the GTK+ theme (for example for the
     * background color).
     * 
     * The buffer holds a reference to `scheme`.
     * @param scheme a #GtkSourceStyleScheme or %NULL.
     */
    setStyleScheme(scheme: StyleScheme | null): void
    /**
     * Set the buffer undo manager. If `manager` is %NULL the default undo manager
     * will be set.
     * @param manager A #GtkSourceUndoManager or %NULL.
     */
    setUndoManager(manager: UndoManager | null): void
    /**
     * Sort the lines of text between the specified iterators.
     * @param start a #GtkTextIter.
     * @param end a #GtkTextIter.
     * @param flags #GtkSourceSortFlags specifying how the sort should behave
     * @param column sort considering the text starting at the given column
     */
    sortLines(start: Gtk.TextIter, end: Gtk.TextIter, flags: SortFlags, column: number): void
    // Has conflict: undo(): void

    // Own virtual methods of GtkSource-3.0.GtkSource.Buffer

    bracketMatched(iter: Gtk.TextIter, state: BracketMatchType): void
    /**
     * Redoes the last undo operation.  Use gtk_source_buffer_can_redo()
     * to check whether a call to this function will have any effect.
     * 
     * This function emits the #GtkSourceBuffer::redo signal.
     * @virtual 
     */
    redo(): void
    /**
     * Undoes the last user action which modified the buffer.  Use
     * gtk_source_buffer_can_undo() to check whether a call to this
     * function will have any effect.
     * 
     * This function emits the #GtkSourceBuffer::undo signal.
     * @virtual 
     */
    undo(): void

    // Own signals of GtkSource-3.0.GtkSource.Buffer

    connect(sigName: "bracket-matched", callback: Buffer.BracketMatchedSignalCallback): number
    on(sigName: "bracket-matched", callback: Buffer.BracketMatchedSignalCallback): number
    once(sigName: "bracket-matched", callback: Buffer.BracketMatchedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "bracket-matched", state: BracketMatchType, ...args: any[]): void
    connect(sigName: "highlight-updated", callback: Buffer.HighlightUpdatedSignalCallback): number
    on(sigName: "highlight-updated", callback: Buffer.HighlightUpdatedSignalCallback): number
    once(sigName: "highlight-updated", callback: Buffer.HighlightUpdatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "highlight-updated", end: Gtk.TextIter, ...args: any[]): void
    connect(sigName: "redo", callback: Buffer.RedoSignalCallback): number
    on(sigName: "redo", callback: Buffer.RedoSignalCallback): number
    once(sigName: "redo", callback: Buffer.RedoSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "redo", ...args: any[]): void
    connect(sigName: "source-mark-updated", callback: Buffer.SourceMarkUpdatedSignalCallback): number
    on(sigName: "source-mark-updated", callback: Buffer.SourceMarkUpdatedSignalCallback): number
    once(sigName: "source-mark-updated", callback: Buffer.SourceMarkUpdatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "source-mark-updated", ...args: any[]): void
    connect(sigName: "undo", callback: Buffer.UndoSignalCallback): number
    on(sigName: "undo", callback: Buffer.UndoSignalCallback): number
    once(sigName: "undo", callback: Buffer.UndoSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "undo", ...args: any[]): void

    // Class property signals of GtkSource-3.0.GtkSource.Buffer

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
    connect(sigName: "notify::max-undo-levels", callback: any): number
    on(sigName: "notify::max-undo-levels", callback: any): number
    once(sigName: "notify::max-undo-levels", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-undo-levels", ...args: any[]): void
    connect(sigName: "notify::style-scheme", callback: any): number
    on(sigName: "notify::style-scheme", callback: any): number
    once(sigName: "notify::style-scheme", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::style-scheme", ...args: any[]): void
    connect(sigName: "notify::undo-manager", callback: any): number
    on(sigName: "notify::undo-manager", callback: any): number
    once(sigName: "notify::undo-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::undo-manager", ...args: any[]): void
    connect(sigName: "notify::copy-target-list", callback: any): number
    on(sigName: "notify::copy-target-list", callback: any): number
    once(sigName: "notify::copy-target-list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::copy-target-list", ...args: any[]): void
    connect(sigName: "notify::cursor-position", callback: any): number
    on(sigName: "notify::cursor-position", callback: any): number
    once(sigName: "notify::cursor-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor-position", ...args: any[]): void
    connect(sigName: "notify::has-selection", callback: any): number
    on(sigName: "notify::has-selection", callback: any): number
    once(sigName: "notify::has-selection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-selection", ...args: any[]): void
    connect(sigName: "notify::paste-target-list", callback: any): number
    on(sigName: "notify::paste-target-list", callback: any): number
    once(sigName: "notify::paste-target-list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::paste-target-list", ...args: any[]): void
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

export class Buffer extends Gtk.TextBuffer {

    // Own properties of GtkSource-3.0.GtkSource.Buffer

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.Buffer

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
     * Creates a new source buffer using the highlighting patterns in
     * `language`.  This is equivalent to creating a new source buffer with
     * a new tag table and then calling gtk_source_buffer_set_language().
     * @constructor 
     * @param language a #GtkSourceLanguage.
     */
    static newWithLanguage(language: Language): Buffer
    _init(config?: Buffer.ConstructorProperties): void
}

export module Completion {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate-proposal`
     */
    export interface ActivateProposalSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `hide`
     */
    export interface HideSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `move-cursor`
     */
    export interface MoveCursorSignalCallback {
        (step: Gtk.ScrollStep, num: number): void
    }

    /**
     * Signal callback interface for `move-page`
     */
    export interface MovePageSignalCallback {
        (step: Gtk.ScrollStep, num: number): void
    }

    /**
     * Signal callback interface for `populate-context`
     */
    export interface PopulateContextSignalCallback {
        (context: CompletionContext): void
    }

    /**
     * Signal callback interface for `show`
     */
    export interface ShowSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Buildable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.Completion

        /**
         * Number of keyboard accelerators to show for the first proposals. For
         * example, to activate the first proposal, the user can press
         * <keycombo><keycap>Alt</keycap><keycap>1</keycap></keycombo>.
         */
        accelerators?: number | null
        /**
         * Determines the popup delay (in milliseconds) at which the completion
         * will be shown for interactive completion.
         */
        autoCompleteDelay?: number | null
        /**
         * The scroll page size of the proposals in the completion window. In
         * other words, when <keycap>PageDown</keycap> or
         * <keycap>PageUp</keycap> is pressed, the selected
         * proposal becomes the one which is located one page size backward or
         * forward.
         * 
         * See also the #GtkSourceCompletion::move-cursor signal.
         */
        proposalPageSize?: number | null
        /**
         * The scroll page size of the provider pages in the completion window.
         * 
         * See the #GtkSourceCompletion::move-page signal.
         */
        providerPageSize?: number | null
        /**
         * Determines whether the visibility of the info window should be
         * saved when the completion is hidden, and restored when the completion
         * is shown again.
         */
        rememberInfoVisibility?: boolean | null
        /**
         * Determines whether the first proposal should be selected when the
         * completion is first shown.
         */
        selectOnShow?: boolean | null
        /**
         * Determines whether provider headers should be shown in the proposal
         * list. It can be useful to disable when there is only one provider.
         */
        showHeaders?: boolean | null
        /**
         * Determines whether provider and proposal icons should be shown in
         * the completion popup.
         */
        showIcons?: boolean | null
        /**
         * The #GtkSourceView bound to the completion object.
         */
        view?: View | null
    }

}

export interface Completion extends Gtk.Buildable {

    // Own properties of GtkSource-3.0.GtkSource.Completion

    /**
     * Number of keyboard accelerators to show for the first proposals. For
     * example, to activate the first proposal, the user can press
     * <keycombo><keycap>Alt</keycap><keycap>1</keycap></keycombo>.
     */
    accelerators: number
    /**
     * Determines the popup delay (in milliseconds) at which the completion
     * will be shown for interactive completion.
     */
    autoCompleteDelay: number
    /**
     * The scroll page size of the proposals in the completion window. In
     * other words, when <keycap>PageDown</keycap> or
     * <keycap>PageUp</keycap> is pressed, the selected
     * proposal becomes the one which is located one page size backward or
     * forward.
     * 
     * See also the #GtkSourceCompletion::move-cursor signal.
     */
    proposalPageSize: number
    /**
     * The scroll page size of the provider pages in the completion window.
     * 
     * See the #GtkSourceCompletion::move-page signal.
     */
    providerPageSize: number
    /**
     * Determines whether the visibility of the info window should be
     * saved when the completion is hidden, and restored when the completion
     * is shown again.
     */
    rememberInfoVisibility: boolean
    /**
     * Determines whether the first proposal should be selected when the
     * completion is first shown.
     */
    selectOnShow: boolean
    /**
     * Determines whether provider headers should be shown in the proposal
     * list. It can be useful to disable when there is only one provider.
     */
    showHeaders: boolean
    /**
     * Determines whether provider and proposal icons should be shown in
     * the completion popup.
     */
    showIcons: boolean
    /**
     * The #GtkSourceView bound to the completion object.
     */
    readonly view: View

    // Own fields of GtkSource-3.0.GtkSource.Completion

    parentInstance: GObject.Object
    priv: CompletionPrivate

    // Owm methods of GtkSource-3.0.GtkSource.Completion

    /**
     * Add a new #GtkSourceCompletionProvider to the completion object. This will
     * add a reference `provider,` so make sure to unref your own copy when you
     * no longer need it.
     * @param provider a #GtkSourceCompletionProvider.
     */
    addProvider(provider: CompletionProvider): boolean
    /**
     * Block interactive completion. This can be used to disable interactive
     * completion when inserting or deleting text from the buffer associated with
     * the completion. Use gtk_source_completion_unblock_interactive() to enable
     * interactive completion again.
     * 
     * This function may be called multiple times. It will continue to block
     * interactive completion until gtk_source_completion_unblock_interactive()
     * has been called the same number of times.
     */
    blockInteractive(): void
    /**
     * Create a new #GtkSourceCompletionContext for `completion`. The position where
     * the completion occurs can be specified by `position`. If `position` is %NULL,
     * the current cursor position will be used.
     * @param position a #GtkTextIter, or %NULL.
     */
    createContext(position: Gtk.TextIter | null): CompletionContext
    /**
     * The info widget is the window where the completion displays optional extra
     * information of the proposal.
     */
    getInfoWindow(): CompletionInfo
    /**
     * Get list of providers registered on `completion`. The returned list is owned
     * by the completion and should not be freed.
     */
    getProviders(): CompletionProvider[]
    /**
     * The #GtkSourceView associated with `completion,` or %NULL if the view has been
     * destroyed.
     */
    getView(): View | null
    // Has conflict: hide(): void
    /**
     * Move the completion window to a specific iter.
     * @param iter a #GtkTextIter.
     */
    moveWindow(iter: Gtk.TextIter): void
    /**
     * Remove `provider` from the completion.
     * @param provider a #GtkSourceCompletionProvider.
     */
    removeProvider(provider: CompletionProvider): boolean
    // Has conflict: show(providers: CompletionProvider[] | null, context: CompletionContext): boolean
    /**
     * Unblock interactive completion. This can be used after using
     * gtk_source_completion_block_interactive() to enable interactive completion
     * again.
     */
    unblockInteractive(): void

    // Own virtual methods of GtkSource-3.0.GtkSource.Completion

    activateProposal(): void
    /**
     * Hides the completion if it is active (visible).
     * @virtual 
     */
    hide(): void
    moveCursor(step: Gtk.ScrollStep, num: number): void
    movePage(step: Gtk.ScrollStep, num: number): void
    populateContext(context: CompletionContext): void
    proposalActivated(provider: CompletionProvider, proposal: CompletionProposal): boolean
    show(): void

    // Own signals of GtkSource-3.0.GtkSource.Completion

    connect(sigName: "activate-proposal", callback: Completion.ActivateProposalSignalCallback): number
    on(sigName: "activate-proposal", callback: Completion.ActivateProposalSignalCallback): number
    once(sigName: "activate-proposal", callback: Completion.ActivateProposalSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "activate-proposal", ...args: any[]): void
    connect(sigName: "hide", callback: Completion.HideSignalCallback): number
    on(sigName: "hide", callback: Completion.HideSignalCallback): number
    once(sigName: "hide", callback: Completion.HideSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "hide", ...args: any[]): void
    connect(sigName: "move-cursor", callback: Completion.MoveCursorSignalCallback): number
    on(sigName: "move-cursor", callback: Completion.MoveCursorSignalCallback): number
    once(sigName: "move-cursor", callback: Completion.MoveCursorSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "move-cursor", num: number, ...args: any[]): void
    connect(sigName: "move-page", callback: Completion.MovePageSignalCallback): number
    on(sigName: "move-page", callback: Completion.MovePageSignalCallback): number
    once(sigName: "move-page", callback: Completion.MovePageSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "move-page", num: number, ...args: any[]): void
    connect(sigName: "populate-context", callback: Completion.PopulateContextSignalCallback): number
    on(sigName: "populate-context", callback: Completion.PopulateContextSignalCallback): number
    once(sigName: "populate-context", callback: Completion.PopulateContextSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "populate-context", ...args: any[]): void
    connect(sigName: "show", callback: Completion.ShowSignalCallback): number
    on(sigName: "show", callback: Completion.ShowSignalCallback): number
    once(sigName: "show", callback: Completion.ShowSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "show", ...args: any[]): void

    // Class property signals of GtkSource-3.0.GtkSource.Completion

    connect(sigName: "notify::accelerators", callback: any): number
    on(sigName: "notify::accelerators", callback: any): number
    once(sigName: "notify::accelerators", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accelerators", ...args: any[]): void
    connect(sigName: "notify::auto-complete-delay", callback: any): number
    on(sigName: "notify::auto-complete-delay", callback: any): number
    once(sigName: "notify::auto-complete-delay", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::auto-complete-delay", ...args: any[]): void
    connect(sigName: "notify::proposal-page-size", callback: any): number
    on(sigName: "notify::proposal-page-size", callback: any): number
    once(sigName: "notify::proposal-page-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proposal-page-size", ...args: any[]): void
    connect(sigName: "notify::provider-page-size", callback: any): number
    on(sigName: "notify::provider-page-size", callback: any): number
    once(sigName: "notify::provider-page-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::provider-page-size", ...args: any[]): void
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
    connect(sigName: "notify::show-headers", callback: any): number
    on(sigName: "notify::show-headers", callback: any): number
    once(sigName: "notify::show-headers", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-headers", ...args: any[]): void
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

export class Completion extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.Completion

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.Completion

    constructor(config?: Completion.ConstructorProperties) 
    _init(config?: Completion.ConstructorProperties): void
}

export module CompletionContext {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cancelled`
     */
    export interface CancelledSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.CompletionContext

        /**
         * The completion activation
         */
        activation?: CompletionActivation | null
        /**
         * The #GtkSourceCompletion associated with the context.
         */
        completion?: Completion | null
        /**
         * The #GtkTextIter at which the completion is invoked.
         */
        iter?: Gtk.TextIter | null
    }

}

export interface CompletionContext {

    // Own properties of GtkSource-3.0.GtkSource.CompletionContext

    /**
     * The completion activation
     */
    activation: CompletionActivation
    /**
     * The #GtkSourceCompletion associated with the context.
     */
    readonly completion: Completion
    /**
     * The #GtkTextIter at which the completion is invoked.
     */
    iter: Gtk.TextIter

    // Own fields of GtkSource-3.0.GtkSource.CompletionContext

    parent: GObject.InitiallyUnowned
    priv: CompletionContextPrivate

    // Owm methods of GtkSource-3.0.GtkSource.CompletionContext

    /**
     * Providers can use this function to add proposals to the completion. They
     * can do so asynchronously by means of the `finished` argument. Providers must
     * ensure that they always call this function with `finished` set to %TRUE
     * once each population (even if no proposals need to be added).
     * Population occurs when the gtk_source_completion_provider_populate()
     * function is called.
     * @param provider a #GtkSourceCompletionProvider.
     * @param proposals The list of proposals to add.
     * @param finished Whether the provider is finished adding proposals.
     */
    addProposals(provider: CompletionProvider, proposals: CompletionProposal[] | null, finished: boolean): void
    /**
     * Get the context activation.
     */
    getActivation(): CompletionActivation
    /**
     * Get the iter at which the completion was invoked. Providers can use this
     * to determine how and if to match proposals.
     */
    getIter(): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]

    // Own virtual methods of GtkSource-3.0.GtkSource.CompletionContext

    cancelled(): void

    // Own signals of GtkSource-3.0.GtkSource.CompletionContext

    connect(sigName: "cancelled", callback: CompletionContext.CancelledSignalCallback): number
    on(sigName: "cancelled", callback: CompletionContext.CancelledSignalCallback): number
    once(sigName: "cancelled", callback: CompletionContext.CancelledSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "cancelled", ...args: any[]): void

    // Class property signals of GtkSource-3.0.GtkSource.CompletionContext

    connect(sigName: "notify::activation", callback: any): number
    on(sigName: "notify::activation", callback: any): number
    once(sigName: "notify::activation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activation", ...args: any[]): void
    connect(sigName: "notify::completion", callback: any): number
    on(sigName: "notify::completion", callback: any): number
    once(sigName: "notify::completion", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::iter", callback: any): number
    on(sigName: "notify::iter", callback: any): number
    once(sigName: "notify::iter", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::iter", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CompletionContext extends GObject.InitiallyUnowned {

    // Own properties of GtkSource-3.0.GtkSource.CompletionContext

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.CompletionContext

    constructor(config?: CompletionContext.ConstructorProperties) 
    _init(config?: CompletionContext.ConstructorProperties): void
}

export module CompletionInfo {

    // Signal callback interfaces

    /**
     * Signal callback interface for `before-show`
     */
    export interface BeforeShowSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Window.ConstructorProperties {
    }

}

export interface CompletionInfo extends Atk.ImplementorIface, Gtk.Buildable {

    // Own fields of GtkSource-3.0.GtkSource.CompletionInfo

    parent: Gtk.Window & Gtk.Container
    priv: any

    // Owm methods of GtkSource-3.0.GtkSource.CompletionInfo

    /**
     * Get the current content widget.
     */
    getWidget(): Gtk.Widget
    /**
     * Moves the #GtkSourceCompletionInfo to `iter`. If `iter` is %NULL `info` is
     * moved to the cursor position. Moving will respect the #GdkGravity setting
     * of the info window and will ensure the line at `iter` is not occluded by
     * the window.
     * @param view a #GtkTextView on which the info window should be positioned.
     * @param iter a #GtkTextIter.
     */
    moveToIter(view: Gtk.TextView, iter: Gtk.TextIter | null): void
    /**
     * Sets the content widget of the info window. See that the previous widget will
     * lose a reference and it can be destroyed, so if you do not want this to
     * happen you must use g_object_ref() before calling this method.
     * @param widget a #GtkWidget.
     */
    setWidget(widget: Gtk.Widget | null): void

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

    // Own virtual methods of GtkSource-3.0.GtkSource.CompletionInfo

    beforeShow(): void

    // Own signals of GtkSource-3.0.GtkSource.CompletionInfo

    connect(sigName: "before-show", callback: CompletionInfo.BeforeShowSignalCallback): number
    on(sigName: "before-show", callback: CompletionInfo.BeforeShowSignalCallback): number
    once(sigName: "before-show", callback: CompletionInfo.BeforeShowSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "before-show", ...args: any[]): void

    // Class property signals of GtkSource-3.0.GtkSource.CompletionInfo

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

export class CompletionInfo extends Gtk.Window {

    // Own properties of GtkSource-3.0.GtkSource.CompletionInfo

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.CompletionInfo

    constructor(config?: CompletionInfo.ConstructorProperties) 
    constructor() 
    static new(): CompletionInfo

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
    _init(config?: CompletionInfo.ConstructorProperties): void
}

export module CompletionItem {

    // Constructor properties interface

    export interface ConstructorProperties extends CompletionProposal.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.CompletionItem

        /**
         * The #GIcon for the icon to be shown for this proposal.
         */
        gicon?: Gio.Icon | null
        /**
         * The #GdkPixbuf for the icon to be shown for this proposal.
         */
        icon?: GdkPixbuf.Pixbuf | null
        /**
         * The icon name for the icon to be shown for this proposal.
         */
        iconName?: string | null
        /**
         * Optional extra information to be shown for this proposal.
         */
        info?: string | null
        /**
         * Label to be shown for this proposal.
         */
        label?: string | null
        /**
         * Label with markup to be shown for this proposal.
         */
        markup?: string | null
        /**
         * Proposal text.
         */
        text?: string | null
    }

}

export interface CompletionItem extends CompletionProposal {

    // Own properties of GtkSource-3.0.GtkSource.CompletionItem

    /**
     * The #GIcon for the icon to be shown for this proposal.
     */
    gicon: Gio.Icon
    /**
     * The #GdkPixbuf for the icon to be shown for this proposal.
     */
    icon: GdkPixbuf.Pixbuf
    /**
     * The icon name for the icon to be shown for this proposal.
     */
    iconName: string
    /**
     * Optional extra information to be shown for this proposal.
     */
    info: string
    /**
     * Label to be shown for this proposal.
     */
    label: string
    /**
     * Label with markup to be shown for this proposal.
     */
    markup: string
    /**
     * Proposal text.
     */
    text: string

    // Own fields of GtkSource-3.0.GtkSource.CompletionItem

    parent: GObject.Object
    priv: CompletionItemPrivate

    // Owm methods of GtkSource-3.0.GtkSource.CompletionItem

    setGicon(gicon: Gio.Icon | null): void
    setIcon(icon: GdkPixbuf.Pixbuf | null): void
    setIconName(iconName: string | null): void
    setInfo(info: string | null): void
    setLabel(label: string | null): void
    setMarkup(markup: string | null): void
    setText(text: string | null): void

    // Class property signals of GtkSource-3.0.GtkSource.CompletionItem

    connect(sigName: "notify::gicon", callback: any): number
    on(sigName: "notify::gicon", callback: any): number
    once(sigName: "notify::gicon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::gicon", ...args: any[]): void
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
    connect(sigName: "notify::info", callback: any): number
    on(sigName: "notify::info", callback: any): number
    once(sigName: "notify::info", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::info", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CompletionItem extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.CompletionItem

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.CompletionItem

    constructor(config?: CompletionItem.ConstructorProperties) 
    /**
     * Create a new #GtkSourceCompletionItem with label `label,` icon `icon` and
     * extra information `info`. Both `icon` and `info` can be %NULL in which case
     * there will be no icon shown and no extra information available.
     * @constructor 
     * @param label The item label.
     * @param text The item text.
     * @param icon The item icon.
     * @param info The item extra information.
     */
    constructor(label: string, text: string, icon: GdkPixbuf.Pixbuf | null, info: string | null) 
    /**
     * Create a new #GtkSourceCompletionItem with label `label,` icon `icon` and
     * extra information `info`. Both `icon` and `info` can be %NULL in which case
     * there will be no icon shown and no extra information available.
     * @constructor 
     * @param label The item label.
     * @param text The item text.
     * @param icon The item icon.
     * @param info The item extra information.
     */
    static new(label: string, text: string, icon: GdkPixbuf.Pixbuf | null, info: string | null): CompletionItem
    /**
     * Creates a new #GtkSourceCompletionItem from a stock item. If `label` is %NULL,
     * the stock label will be used.
     * @constructor 
     * @param label The item label.
     * @param text The item text.
     * @param stock The stock icon.
     * @param info The item extra information.
     */
    static newFromStock(label: string | null, text: string, stock: string, info: string | null): CompletionItem
    /**
     * Create a new #GtkSourceCompletionItem with markup label `markup,` icon
     * `icon` and extra information `info`. Both `icon` and `info` can be %NULL in
     * which case there will be no icon shown and no extra information available.
     * @constructor 
     * @param markup The item markup label.
     * @param text The item text.
     * @param icon The item icon.
     * @param info The item extra information.
     */
    static newWithMarkup(markup: string, text: string, icon: GdkPixbuf.Pixbuf | null, info: string | null): CompletionItem
    _init(config?: CompletionItem.ConstructorProperties): void
    /**
     * Creates a new #GtkSourceCompletionItem. The desired properties need to be set
     * afterwards.
     */
    static new2(): CompletionItem
}

export module CompletionWords {

    // Constructor properties interface

    export interface ConstructorProperties extends CompletionProvider.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.CompletionWords

        /**
         * The type of activation.
         */
        activation?: CompletionActivation | null
        icon?: GdkPixbuf.Pixbuf | null
        interactiveDelay?: number | null
        minimumWordSize?: number | null
        name?: string | null
        priority?: number | null
        proposalsBatchSize?: number | null
        scanBatchSize?: number | null
    }

}

export interface CompletionWords extends CompletionProvider {

    // Own properties of GtkSource-3.0.GtkSource.CompletionWords

    /**
     * The type of activation.
     */
    activation: CompletionActivation
    icon: GdkPixbuf.Pixbuf
    interactiveDelay: number
    minimumWordSize: number
    name: string
    priority: number
    proposalsBatchSize: number
    scanBatchSize: number

    // Own fields of GtkSource-3.0.GtkSource.CompletionWords

    parent: GObject.Object
    priv: CompletionWordsPrivate

    // Owm methods of GtkSource-3.0.GtkSource.CompletionWords

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

    // Class property signals of GtkSource-3.0.GtkSource.CompletionWords

    connect(sigName: "notify::activation", callback: any): number
    on(sigName: "notify::activation", callback: any): number
    once(sigName: "notify::activation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activation", ...args: any[]): void
    connect(sigName: "notify::icon", callback: any): number
    on(sigName: "notify::icon", callback: any): number
    once(sigName: "notify::icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::interactive-delay", callback: any): number
    on(sigName: "notify::interactive-delay", callback: any): number
    once(sigName: "notify::interactive-delay", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interactive-delay", ...args: any[]): void
    connect(sigName: "notify::minimum-word-size", callback: any): number
    on(sigName: "notify::minimum-word-size", callback: any): number
    once(sigName: "notify::minimum-word-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::minimum-word-size", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CompletionWords extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.CompletionWords

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.CompletionWords

    constructor(config?: CompletionWords.ConstructorProperties) 
    constructor(name: string | null, icon: GdkPixbuf.Pixbuf | null) 
    static new(name: string | null, icon: GdkPixbuf.Pixbuf | null): CompletionWords
    _init(config?: CompletionWords.ConstructorProperties): void
}

export module File {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.File

        /**
         * The location.
         */
        location?: Gio.File | null
    }

}

export interface File {

    // Own properties of GtkSource-3.0.GtkSource.File

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

    // Own fields of GtkSource-3.0.GtkSource.File

    parent: GObject.Object
    priv: FilePrivate

    // Owm methods of GtkSource-3.0.GtkSource.File

    /**
     * Checks synchronously the file on disk, to know whether the file is externally
     * modified, or has been deleted, and whether the file is read-only.
     * 
     * #GtkSourceFile doesn't create a #GFileMonitor to track those properties, so
     * this function needs to be called instead. Creating lots of #GFileMonitor's
     * would take lots of resources.
     * 
     * Since this function is synchronous, it is advised to call it only on local
     * files. See gtk_source_file_is_local().
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
     * #GtkSourceFile:location is %NULL, returns %FALSE.
     * 
     * To have an up-to-date value, you must first call
     * gtk_source_file_check_file_on_disk().
     */
    isDeleted(): boolean
    /**
     * Returns whether the file is externally modified. If the
     * #GtkSourceFile:location is %NULL, returns %FALSE.
     * 
     * To have an up-to-date value, you must first call
     * gtk_source_file_check_file_on_disk().
     */
    isExternallyModified(): boolean
    /**
     * Returns whether the file is local. If the #GtkSourceFile:location is %NULL,
     * returns %FALSE.
     */
    isLocal(): boolean
    /**
     * Returns whether the file is read-only. If the
     * #GtkSourceFile:location is %NULL, returns %FALSE.
     * 
     * To have an up-to-date value, you must first call
     * gtk_source_file_check_file_on_disk().
     */
    isReadonly(): boolean
    /**
     * Sets the location.
     * @param location the new #GFile, or %NULL.
     */
    setLocation(location: Gio.File | null): void

    // Class property signals of GtkSource-3.0.GtkSource.File

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

export class File extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.File

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.File

    constructor(config?: File.ConstructorProperties) 
    constructor() 
    static new(): File
    _init(config?: File.ConstructorProperties): void
}

export module FileLoader {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.FileLoader

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

    // Own properties of GtkSource-3.0.GtkSource.FileLoader

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

    // Own fields of GtkSource-3.0.GtkSource.FileLoader

    parent: GObject.Object
    priv: FileLoaderPrivate

    // Owm methods of GtkSource-3.0.GtkSource.FileLoader

    getBuffer(): Buffer
    getCompressionType(): CompressionType
    getEncoding(): Encoding
    getFile(): File
    getInputStream(): Gio.InputStream | null
    getLocation(): Gio.File | null
    getNewlineType(): NewlineType
    /**
     * Loads asynchronously the file or input stream contents into the
     * #GtkSourceBuffer. See the #GAsyncResult documentation to know how to use this
     * function.
     * @param ioPriority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param progressCallback function to call back with   progress information, or %NULL if progress information is not needed.
     * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
     */
    loadAsync(ioPriority: number, cancellable: Gio.Cancellable | null, progressCallback: Gio.FileProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a file loading started with gtk_source_file_loader_load_async().
     * 
     * If the contents has been loaded, the following #GtkSourceFile properties will
     * be updated: the location, the encoding, the newline type and the compression
     * type.
     * @param result a #GAsyncResult.
     */
    loadFinish(result: Gio.AsyncResult): boolean
    /**
     * Sets the candidate encodings for the file loading. The encodings are tried in
     * the same order as the list.
     * 
     * For convenience, `candidate_encodings` can contain duplicates. Only the first
     * occurrence of a duplicated encoding is kept in the list.
     * 
     * By default the candidate encodings are (in that order in the list):
     * 1. If set, the #GtkSourceFile's encoding as returned by
     * gtk_source_file_get_encoding().
     * 2. The default candidates as returned by
     * gtk_source_encoding_get_default_candidates().
     * @param candidateEncodings a list of   #GtkSourceEncoding<!-- -->s.
     */
    setCandidateEncodings(candidateEncodings: Encoding[]): void

    // Class property signals of GtkSource-3.0.GtkSource.FileLoader

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

export class FileLoader extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.FileLoader

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.FileLoader

    constructor(config?: FileLoader.ConstructorProperties) 
    /**
     * Creates a new #GtkSourceFileLoader object. The contents is read from the
     * #GtkSourceFile's location. If not already done, call
     * gtk_source_file_set_location() before calling this constructor. The previous
     * location is anyway not needed, because as soon as the file loading begins,
     * the `buffer` is emptied.
     * @constructor 
     * @param buffer the #GtkSourceBuffer to load the contents into.
     * @param file the #GtkSourceFile.
     */
    constructor(buffer: Buffer, file: File) 
    /**
     * Creates a new #GtkSourceFileLoader object. The contents is read from the
     * #GtkSourceFile's location. If not already done, call
     * gtk_source_file_set_location() before calling this constructor. The previous
     * location is anyway not needed, because as soon as the file loading begins,
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

        // Own constructor properties of GtkSource-3.0.GtkSource.FileSaver

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

    // Own properties of GtkSource-3.0.GtkSource.FileSaver

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

    // Own fields of GtkSource-3.0.GtkSource.FileSaver

    object: GObject.Object
    priv: FileSaverPrivate

    // Owm methods of GtkSource-3.0.GtkSource.FileSaver

    getBuffer(): Buffer
    getCompressionType(): CompressionType
    getEncoding(): Encoding
    getFile(): File
    getFlags(): FileSaverFlags
    getLocation(): Gio.File
    getNewlineType(): NewlineType
    /**
     * Saves asynchronously the buffer into the file. See the #GAsyncResult
     * documentation to know how to use this function.
     * @param ioPriority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param progressCallback function to call back with   progress information, or %NULL if progress information is not needed.
     * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
     */
    saveAsync(ioPriority: number, cancellable: Gio.Cancellable | null, progressCallback: Gio.FileProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a file saving started with gtk_source_file_saver_save_async().
     * 
     * If the file has been saved successfully, the following #GtkSourceFile
     * properties will be updated: the location, the encoding, the newline type and
     * the compression type.
     * 
     * Since the 3.20 version, gtk_text_buffer_set_modified() is called with %FALSE
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

    // Class property signals of GtkSource-3.0.GtkSource.FileSaver

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

export class FileSaver extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.FileSaver

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.FileSaver

    constructor(config?: FileSaver.ConstructorProperties) 
    /**
     * Creates a new #GtkSourceFileSaver object. The `buffer` will be saved to the
     * #GtkSourceFile's location.
     * 
     * This constructor is suitable for a simple "save" operation, when the `file`
     * already contains a non-%NULL #GtkSourceFile:location.
     * @constructor 
     * @param buffer the #GtkSourceBuffer to save.
     * @param file the #GtkSourceFile.
     */
    constructor(buffer: Buffer, file: File) 
    /**
     * Creates a new #GtkSourceFileSaver object. The `buffer` will be saved to the
     * #GtkSourceFile's location.
     * 
     * This constructor is suitable for a simple "save" operation, when the `file`
     * already contains a non-%NULL #GtkSourceFile:location.
     * @constructor 
     * @param buffer the #GtkSourceBuffer to save.
     * @param file the #GtkSourceFile.
     */
    static new(buffer: Buffer, file: File): FileSaver
    /**
     * Creates a new #GtkSourceFileSaver object with a target location. When the
     * file saving is finished successfully, `target_location` is set to the `file'`s
     * #GtkSourceFile:location property. If an error occurs, the previous valid
     * location is still available in #GtkSourceFile.
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

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.Gutter

        /**
         * The #GtkSourceView of the gutter.
         */
        view?: View | null
        /**
         * The text window type on which the window is placed.
         */
        windowType?: Gtk.TextWindowType | null
        /**
         * The x-padding.
         */
        xpad?: number | null
        /**
         * The y-padding.
         */
        ypad?: number | null
    }

}

export interface Gutter {

    // Own properties of GtkSource-3.0.GtkSource.Gutter

    /**
     * The #GtkSourceView of the gutter.
     */
    readonly view: View
    /**
     * The text window type on which the window is placed.
     */
    readonly windowType: Gtk.TextWindowType
    /**
     * The x-padding.
     */
    xpad: number
    /**
     * The y-padding.
     */
    ypad: number

    // Own fields of GtkSource-3.0.GtkSource.Gutter

    parent: GObject.Object
    priv: GutterPrivate

    // Owm methods of GtkSource-3.0.GtkSource.Gutter

    getPadding(xpad: number, ypad: number): void
    /**
     * Finds the #GtkSourceGutterRenderer at (x, y).
     * @param x The x position to get identified.
     * @param y The y position to get identified.
     */
    getRendererAtPos(x: number, y: number): GutterRenderer | null
    getView(): View
    /**
     * Get the #GdkWindow of the gutter. The window will only be available when the
     * gutter has at least one, non-zero width, cell renderer packed.
     */
    getWindow(): Gdk.Window
    getWindowType(): Gtk.TextWindowType
    /**
     * Insert `renderer` into the gutter. If `renderer` is yet unowned then gutter
     * claims its ownership. Otherwise just increases renderer's reference count.
     * `renderer` cannot be already inserted to another gutter.
     * @param renderer a gutter renderer (must inherit from #GtkSourceGutterRenderer).
     * @param position the renderer position.
     */
    insert(renderer: GutterRenderer, position: number): boolean
    /**
     * Invalidates the drawable area of the gutter. You can use this to force a
     * redraw of the gutter if something has changed and needs to be redrawn.
     */
    queueDraw(): void
    /**
     * Removes `renderer` from `gutter`.
     * @param renderer a #GtkSourceGutterRenderer.
     */
    remove(renderer: GutterRenderer): void
    /**
     * Reorders `renderer` in `gutter` to new `position`.
     * @param renderer a #GtkCellRenderer.
     * @param position the new renderer position.
     */
    reorder(renderer: GutterRenderer, position: number): void
    setPadding(xpad: number, ypad: number): void

    // Class property signals of GtkSource-3.0.GtkSource.Gutter

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
    connect(sigName: "notify::xpad", callback: any): number
    on(sigName: "notify::xpad", callback: any): number
    once(sigName: "notify::xpad", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: any): number
    on(sigName: "notify::ypad", callback: any): number
    once(sigName: "notify::ypad", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Gutter extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.Gutter

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.Gutter

    constructor(config?: Gutter.ConstructorProperties) 
    _init(config?: Gutter.ConstructorProperties): void
}

export module GutterRenderer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate`
     */
    export interface ActivateSignalCallback {
        (iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    }

    /**
     * Signal callback interface for `query-activatable`
     */
    export interface QueryActivatableSignalCallback {
        (iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean
    }

    /**
     * Signal callback interface for `query-data`
     */
    export interface QueryDataSignalCallback {
        (start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    }

    /**
     * Signal callback interface for `query-tooltip`
     */
    export interface QueryTooltipSignalCallback {
        (iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean
    }

    /**
     * Signal callback interface for `queue-draw`
     */
    export interface QueueDrawSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.GutterRenderer

        /**
         * The alignment mode of the renderer. This can be used to indicate
         * that in the case a cell spans multiple lines (due to text wrapping)
         * the alignment should work on either the full cell, the first line
         * or the last line.
         */
        alignmentMode?: GutterRendererAlignmentMode | null
        backgroundRgba?: Gdk.RGBA | null
        backgroundSet?: boolean | null
        size?: number | null
        /**
         * The visibility of the renderer.
         */
        visible?: boolean | null
        /**
         * The horizontal alignment of the renderer. Set to 0 for a left
         * alignment. 1 for a right alignment. And 0.5 for centering the cells.
         * A value lower than 0 doesn't modify the alignment.
         */
        xalign?: number | null
        /**
         * The left and right padding of the renderer.
         */
        xpad?: number | null
        /**
         * The vertical alignment of the renderer. Set to 0 for a top
         * alignment. 1 for a bottom alignment. And 0.5 for centering the cells.
         * A value lower than 0 doesn't modify the alignment.
         */
        yalign?: number | null
        /**
         * The top and bottom padding of the renderer.
         */
        ypad?: number | null
    }

}

export interface GutterRenderer {

    // Own properties of GtkSource-3.0.GtkSource.GutterRenderer

    /**
     * The alignment mode of the renderer. This can be used to indicate
     * that in the case a cell spans multiple lines (due to text wrapping)
     * the alignment should work on either the full cell, the first line
     * or the last line.
     */
    alignmentMode: GutterRendererAlignmentMode
    backgroundRgba: Gdk.RGBA
    backgroundSet: boolean
    size: number
    /**
     * The view on which the renderer is placed.
     */
    readonly view: Gtk.TextView
    /**
     * The visibility of the renderer.
     */
    visible: boolean
    /**
     * The window type of the view on which the renderer is placed (left,
     * or right).
     */
    readonly windowType: Gtk.TextWindowType
    /**
     * The horizontal alignment of the renderer. Set to 0 for a left
     * alignment. 1 for a right alignment. And 0.5 for centering the cells.
     * A value lower than 0 doesn't modify the alignment.
     */
    xalign: number
    /**
     * The left and right padding of the renderer.
     */
    xpad: number
    /**
     * The vertical alignment of the renderer. Set to 0 for a top
     * alignment. 1 for a bottom alignment. And 0.5 for centering the cells.
     * A value lower than 0 doesn't modify the alignment.
     */
    yalign: number
    /**
     * The top and bottom padding of the renderer.
     */
    ypad: number

    // Own fields of GtkSource-3.0.GtkSource.GutterRenderer

    parent: GObject.InitiallyUnowned

    // Owm methods of GtkSource-3.0.GtkSource.GutterRenderer

    // Has conflict: activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    // Has conflict: begin(cr: cairo.Context, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void
    // Has conflict: draw(cr: cairo.Context, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    // Has conflict: end(): void
    /**
     * Get the x-alignment and y-alignment of the gutter renderer.
     */
    getAlignment(): [ /* xalign */ number, /* yalign */ number ]
    /**
     * Get the alignment mode. The alignment mode describes the manner in which the
     * renderer is aligned (see :xalign and :yalign).
     */
    getAlignmentMode(): GutterRendererAlignmentMode
    /**
     * Get the background color of the renderer.
     */
    getBackground(): [ /* returnType */ boolean, /* color */ Gdk.RGBA ]
    /**
     * Get the x-padding and y-padding of the gutter renderer.
     */
    getPadding(): [ /* xpad */ number, /* ypad */ number ]
    /**
     * Get the size of the renderer.
     */
    getSize(): number
    /**
     * Get the view associated to the gutter renderer
     */
    getView(): Gtk.TextView
    /**
     * Get whether the gutter renderer is visible.
     */
    getVisible(): boolean
    /**
     * Get the #GtkTextWindowType associated with the gutter renderer.
     */
    getWindowType(): Gtk.TextWindowType
    // Has conflict: queryActivatable(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean
    // Has conflict: queryData(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    // Has conflict: queryTooltip(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean
    // Has conflict: queueDraw(): void
    /**
     * Set the alignment of the gutter renderer. Both `xalign` and `yalign` can be
     * -1, which means the values will not be changed (this allows changing only
     * one of the values).
     * 
     * `xalign` is the horizontal alignment. Set to 0 for a left alignment. 1 for a
     * right alignment. And 0.5 for centering the cells. `yalign` is the vertical
     * alignment. Set to 0 for a top alignment. 1 for a bottom alignment.
     * @param xalign the x-alignment
     * @param yalign the y-alignment
     */
    setAlignment(xalign: number, yalign: number): void
    /**
     * Set the alignment mode. The alignment mode describes the manner in which the
     * renderer is aligned (see :xalign and :yalign).
     * @param mode a #GtkSourceGutterRendererAlignmentMode
     */
    setAlignmentMode(mode: GutterRendererAlignmentMode): void
    /**
     * Set the background color of the renderer. If `color` is set to %NULL, the
     * renderer will not have a background color.
     * @param color a #GdkRGBA or %NULL
     */
    setBackground(color: Gdk.RGBA | null): void
    /**
     * Set the padding of the gutter renderer. Both `xpad` and `ypad` can be
     * -1, which means the values will not be changed (this allows changing only
     * one of the values).
     * 
     * `xpad` is the left and right padding. `ypad` is the top and bottom padding.
     * @param xpad the x-padding
     * @param ypad the y-padding
     */
    setPadding(xpad: number, ypad: number): void
    /**
     * Sets the size of the renderer. A value of -1 specifies that the size
     * is to be determined dynamically.
     * @param size the size
     */
    setSize(size: number): void
    /**
     * Set whether the gutter renderer is visible.
     * @param visible the visibility
     */
    setVisible(visible: boolean): void

    // Own virtual methods of GtkSource-3.0.GtkSource.GutterRenderer

    /**
     * Emits the #GtkSourceGutterRenderer::activate signal of the renderer. This is
     * called from #GtkSourceGutter and should never have to be called manually.
     * @virtual 
     * @param iter a #GtkTextIter at the start of the line where the renderer is activated
     * @param area a #GdkRectangle of the cell area where the renderer is activated
     * @param event the event that triggered the activation
     */
    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    /**
     * Called when drawing a region begins. The region to be drawn is indicated
     * by `start` and `end`. The purpose is to allow the implementation to precompute
     * some state before the draw method is called for each cell.
     * @virtual 
     * @param cr a #cairo_t
     * @param backgroundArea a #GdkRectangle
     * @param cellArea a #GdkRectangle
     * @param start a #GtkTextIter
     * @param end a #GtkTextIter
     */
    begin(cr: cairo.Context, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void
    /**
     * This is called when the text buffer changes for `renderer`.
     * @virtual 
     * @param oldBuffer the old #GtkTextBuffer.
     */
    changeBuffer(oldBuffer: Gtk.TextBuffer | null): void
    /**
     * This is called when the text view changes for `renderer`.
     * @virtual 
     * @param oldView the old #GtkTextView.
     */
    changeView(oldView: Gtk.TextView | null): void
    /**
     * Main renderering method. Implementations should implement this method to draw
     * onto the cairo context. The `background_area` indicates the total area of the
     * cell to be drawn. The `cell_area` indicates the area where content can be
     * drawn (text, images, etc).
     * 
     * The `background_area` is the `cell_area` plus the padding on each side (two
     * times the #GtkSourceGutterRenderer:xpad horizontally and two times the
     * #GtkSourceGutterRenderer:ypad vertically, so that the `cell_area` is centered
     * inside `background_area)`.
     * 
     * The `state` argument indicates the current state of the renderer and should
     * be taken into account to properly draw the different possible states
     * (cursor, prelit, selected) if appropriate.
     * @virtual 
     * @param cr the cairo render context
     * @param backgroundArea a #GdkRectangle indicating the total area to be drawn
     * @param cellArea a #GdkRectangle indicating the area to draw content
     * @param start a #GtkTextIter
     * @param end a #GtkTextIter
     * @param state a #GtkSourceGutterRendererState
     */
    draw(cr: cairo.Context, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    /**
     * Called when drawing a region of lines has ended.
     * @virtual 
     */
    end(): void
    /**
     * Get whether the renderer is activatable at the location in `event`. This is
     * called from #GtkSourceGutter to determine whether a renderer is activatable
     * using the mouse pointer.
     * @virtual 
     * @param iter a #GtkTextIter at the start of the line to be activated
     * @param area a #GdkRectangle of the cell area to be activated
     * @param event the event that triggered the query
     */
    queryActivatable(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean
    /**
     * Emit the #GtkSourceGutterRenderer::query-data signal. This function is called
     * to query for data just before rendering a cell. This is called from the
     * #GtkSourceGutter.  Implementations can override the default signal handler or
     * can connect a signal handler externally to the
     * #GtkSourceGutterRenderer::query-data signal.
     * @virtual 
     * @param start a #GtkTextIter.
     * @param end a #GtkTextIter.
     * @param state a #GtkSourceGutterRendererState.
     */
    queryData(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    /**
     * Emits the #GtkSourceGutterRenderer::query-tooltip signal. This function is
     * called from #GtkSourceGutter. Implementations can override the default signal
     * handler or can connect to the signal externally.
     * @virtual 
     * @param iter a #GtkTextIter.
     * @param area a #GdkRectangle.
     * @param x The x position of the tooltip.
     * @param y The y position of the tooltip.
     * @param tooltip a #GtkTooltip.
     */
    queryTooltip(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean
    /**
     * Emits the #GtkSourceGutterRenderer::queue-draw signal of the renderer. Call
     * this from an implementation to inform that the renderer has changed such that
     * it needs to redraw.
     * @virtual 
     */
    queueDraw(): void

    // Own signals of GtkSource-3.0.GtkSource.GutterRenderer

    connect(sigName: "activate", callback: GutterRenderer.ActivateSignalCallback): number
    on(sigName: "activate", callback: GutterRenderer.ActivateSignalCallback): number
    once(sigName: "activate", callback: GutterRenderer.ActivateSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "activate", area: Gdk.Rectangle, event: Gdk.Event, ...args: any[]): void
    connect(sigName: "query-activatable", callback: GutterRenderer.QueryActivatableSignalCallback): number
    on(sigName: "query-activatable", callback: GutterRenderer.QueryActivatableSignalCallback): number
    once(sigName: "query-activatable", callback: GutterRenderer.QueryActivatableSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "query-activatable", area: Gdk.Rectangle, event: Gdk.Event, ...args: any[]): void
    connect(sigName: "query-data", callback: GutterRenderer.QueryDataSignalCallback): number
    on(sigName: "query-data", callback: GutterRenderer.QueryDataSignalCallback): number
    once(sigName: "query-data", callback: GutterRenderer.QueryDataSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "query-data", end: Gtk.TextIter, state: GutterRendererState, ...args: any[]): void
    connect(sigName: "query-tooltip", callback: GutterRenderer.QueryTooltipSignalCallback): number
    on(sigName: "query-tooltip", callback: GutterRenderer.QueryTooltipSignalCallback): number
    once(sigName: "query-tooltip", callback: GutterRenderer.QueryTooltipSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "query-tooltip", area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip, ...args: any[]): void
    connect(sigName: "queue-draw", callback: GutterRenderer.QueueDrawSignalCallback): number
    on(sigName: "queue-draw", callback: GutterRenderer.QueueDrawSignalCallback): number
    once(sigName: "queue-draw", callback: GutterRenderer.QueueDrawSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "queue-draw", ...args: any[]): void

    // Class property signals of GtkSource-3.0.GtkSource.GutterRenderer

    connect(sigName: "notify::alignment-mode", callback: any): number
    on(sigName: "notify::alignment-mode", callback: any): number
    once(sigName: "notify::alignment-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::alignment-mode", ...args: any[]): void
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
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::view", callback: any): number
    on(sigName: "notify::view", callback: any): number
    once(sigName: "notify::view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: "notify::visible", callback: any): number
    on(sigName: "notify::visible", callback: any): number
    once(sigName: "notify::visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::window-type", callback: any): number
    on(sigName: "notify::window-type", callback: any): number
    once(sigName: "notify::window-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::window-type", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class GutterRenderer extends GObject.InitiallyUnowned {

    // Own properties of GtkSource-3.0.GtkSource.GutterRenderer

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.GutterRenderer

    constructor(config?: GutterRenderer.ConstructorProperties) 
    _init(config?: GutterRenderer.ConstructorProperties): void
}

export module GutterRendererPixbuf {

    // Constructor properties interface

    export interface ConstructorProperties extends GutterRenderer.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.GutterRendererPixbuf

        gicon?: Gio.Icon | null
        iconName?: string | null
        pixbuf?: GdkPixbuf.Pixbuf | null
        /**
         * The stock id.
         */
        stockId?: string | null
    }

}

export interface GutterRendererPixbuf {

    // Own properties of GtkSource-3.0.GtkSource.GutterRendererPixbuf

    gicon: Gio.Icon
    iconName: string
    pixbuf: GdkPixbuf.Pixbuf
    /**
     * The stock id.
     */
    stockId: string

    // Owm methods of GtkSource-3.0.GtkSource.GutterRendererPixbuf

    /**
     * Get the gicon of the renderer
     */
    getGicon(): Gio.Icon
    getIconName(): string
    /**
     * Get the pixbuf of the renderer.
     */
    getPixbuf(): GdkPixbuf.Pixbuf
    getStockId(): string
    setGicon(icon: Gio.Icon | null): void
    setIconName(iconName: string | null): void
    setPixbuf(pixbuf: GdkPixbuf.Pixbuf | null): void
    setStockId(stockId: string | null): void

    // Class property signals of GtkSource-3.0.GtkSource.GutterRendererPixbuf

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
    connect(sigName: "notify::stock-id", callback: any): number
    on(sigName: "notify::stock-id", callback: any): number
    once(sigName: "notify::stock-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stock-id", ...args: any[]): void
    connect(sigName: "notify::alignment-mode", callback: any): number
    on(sigName: "notify::alignment-mode", callback: any): number
    once(sigName: "notify::alignment-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::alignment-mode", ...args: any[]): void
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
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::view", callback: any): number
    on(sigName: "notify::view", callback: any): number
    once(sigName: "notify::view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: "notify::visible", callback: any): number
    on(sigName: "notify::visible", callback: any): number
    once(sigName: "notify::visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::window-type", callback: any): number
    on(sigName: "notify::window-type", callback: any): number
    once(sigName: "notify::window-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::window-type", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class GutterRendererPixbuf extends GutterRenderer {

    // Own properties of GtkSource-3.0.GtkSource.GutterRendererPixbuf

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.GutterRendererPixbuf

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

    export interface ConstructorProperties extends GutterRenderer.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.GutterRendererText

        markup?: string | null
        text?: string | null
    }

}

export interface GutterRendererText {

    // Own properties of GtkSource-3.0.GtkSource.GutterRendererText

    markup: string
    text: string

    // Owm methods of GtkSource-3.0.GtkSource.GutterRendererText

    /**
     * Measures the text provided using the pango layout used by the
     * #GtkSourceGutterRendererText.
     * @param text the text to measure.
     */
    measure(text: string): [ /* width */ number, /* height */ number ]
    /**
     * Measures the pango markup provided using the pango layout used by the
     * #GtkSourceGutterRendererText.
     * @param markup the pango markup to measure.
     */
    measureMarkup(markup: string): [ /* width */ number, /* height */ number ]
    setMarkup(markup: string, length: number): void
    setText(text: string, length: number): void

    // Class property signals of GtkSource-3.0.GtkSource.GutterRendererText

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
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::view", callback: any): number
    on(sigName: "notify::view", callback: any): number
    once(sigName: "notify::view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: "notify::visible", callback: any): number
    on(sigName: "notify::visible", callback: any): number
    once(sigName: "notify::visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::window-type", callback: any): number
    on(sigName: "notify::window-type", callback: any): number
    once(sigName: "notify::window-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::window-type", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class GutterRendererText extends GutterRenderer {

    // Own properties of GtkSource-3.0.GtkSource.GutterRendererText

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.GutterRendererText

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

export module Language {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Language {

    // Own properties of GtkSource-3.0.GtkSource.Language

    readonly hidden: boolean
    readonly id: string
    readonly name: string
    readonly section: string

    // Own fields of GtkSource-3.0.GtkSource.Language

    parentInstance: GObject.Object
    priv: LanguagePrivate

    // Owm methods of GtkSource-3.0.GtkSource.Language

    /**
     * Returns the globs associated to this language. This is just
     * an utility wrapper around gtk_source_language_get_metadata() to
     * retrieve the "globs" metadata property and split it into an array.
     */
    getGlobs(): string[] | null
    /**
     * Returns whether the language should be hidden from the user.
     */
    getHidden(): boolean
    /**
     * Returns the ID of the language. The ID is not locale-dependent.
     * The returned string is owned by `language` and should not be freed
     * or modified.
     */
    getId(): string
    getMetadata(name: string): string | null
    /**
     * Returns the mime types associated to this language. This is just
     * an utility wrapper around gtk_source_language_get_metadata() to
     * retrieve the "mimetypes" metadata property and split it into an
     * array.
     */
    getMimeTypes(): string[] | null
    /**
     * Returns the localized name of the language.
     * The returned string is owned by `language` and should not be freed
     * or modified.
     */
    getName(): string
    /**
     * Returns the localized section of the language.
     * Each language belong to a section (ex. HTML belogs to the
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

    // Class property signals of GtkSource-3.0.GtkSource.Language

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

export class Language extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.Language

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.Language

    constructor(config?: Language.ConstructorProperties) 
    _init(config?: Language.ConstructorProperties): void
}

export module LanguageManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.LanguageManager

        searchPath?: string[] | null
    }

}

export interface LanguageManager {

    // Own properties of GtkSource-3.0.GtkSource.LanguageManager

    readonly languageIds: string[]
    searchPath: string[]

    // Own fields of GtkSource-3.0.GtkSource.LanguageManager

    parentInstance: GObject.Object
    priv: LanguageManagerPrivate

    // Owm methods of GtkSource-3.0.GtkSource.LanguageManager

    /**
     * Gets the #GtkSourceLanguage identified by the given `id` in the language
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
     * Picks a #GtkSourceLanguage for given file name and content type,
     * according to the information in lang files. Either `filename` or
     * `content_type` may be %NULL. This function can be used as follows:
     * 
     * <informalexample><programlisting>
     *   GtkSourceLanguage *lang;
     *   lang = gtk_source_language_manager_guess_language (filename, NULL);
     *   gtk_source_buffer_set_language (buffer, lang);
     * </programlisting></informalexample>
     * 
     * or
     * 
     * <informalexample><programlisting>
     *   GtkSourceLanguage *lang = NULL;
     *   gboolean result_uncertain;
     *   gchar *content_type;
     * 
     *   content_type = g_content_type_guess (filename, NULL, 0, &result_uncertain);
     *   if (result_uncertain)
     *     {
     *       g_free (content_type);
     *       content_type = NULL;
     *     }
     * 
     *   lang = gtk_source_language_manager_guess_language (manager, filename, content_type);
     *   gtk_source_buffer_set_language (buffer, lang);
     * 
     *   g_free (content_type);
     * </programlisting></informalexample>
     * 
     * etc. Use gtk_source_language_get_mime_types() and gtk_source_language_get_globs()
     * if you need full control over file -> language mapping.
     * @param filename a filename in Glib filename encoding, or %NULL.
     * @param contentType a content type (as in GIO API), or %NULL.
     */
    guessLanguage(filename: string | null, contentType: string | null): Language | null
    /**
     * Sets the list of directories where the `lm` looks for
     * language files.
     * If `dirs` is %NULL, the search path is reset to default.
     * 
     * <note>
     *   <para>
     *     At the moment this function can be called only before the
     *     language files are loaded for the first time. In practice
     *     to set a custom search path for a #GtkSourceLanguageManager,
     *     you have to call this function right after creating it.
     *   </para>
     * </note>
     * @param dirs  a %NULL-terminated array of strings or %NULL.
     */
    setSearchPath(dirs: string[] | null): void

    // Class property signals of GtkSource-3.0.GtkSource.LanguageManager

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

export class LanguageManager extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.LanguageManager

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.LanguageManager

    constructor(config?: LanguageManager.ConstructorProperties) 
    /**
     * Creates a new language manager. If you do not need more than one language
     * manager or a private language manager instance then use
     * gtk_source_language_manager_get_default() instead.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new language manager. If you do not need more than one language
     * manager or a private language manager instance then use
     * gtk_source_language_manager_get_default() instead.
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

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, View.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.Map

        fontDesc?: Pango.FontDescription | null
        view?: View | null
    }

}

export interface Map extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of GtkSource-3.0.GtkSource.Map

    fontDesc: Pango.FontDescription
    view: View

    // Conflicting properties

    parent: Gtk.TextView & Gtk.Container & Gtk.Container

    // Own fields of GtkSource-3.0.GtkSource.Map

    parentInstance: any

    // Owm methods of GtkSource-3.0.GtkSource.Map

    /**
     * Gets the #GtkSourceMap:view property, which is the view this widget is mapping.
     */
    getView(): View | null
    /**
     * Sets the view that `map` will be doing the mapping to.
     * @param view a #GtkSourceView
     */
    setView(view: View): void

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
     * Retrieves the #GdkWindow corresponding to an area of the text view;
     * possible windows include the overall widget window, child windows
     * on the left, right, top, bottom, and the window that displays the
     * text buffer. Windows are %NULL and nonexistent if their width or
     * height is 0, and are nonexistent before the widget has been
     * realized.
     * @param win window to get
     */
    getWindow(win: Gtk.TextWindowType): Gdk.Window | null

    // Overloads of getWindow

    /**
     * Returns the widget’s window if it is realized, %NULL otherwise
     */
    getWindow(): Gdk.Window | null
    /**
     * Returns the widget’s window if it is realized, %NULL otherwise
     */
    getWindow(): Gdk.Window | null
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

    // Class property signals of GtkSource-3.0.GtkSource.Map

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
    connect(sigName: "notify::draw-spaces", callback: any): number
    on(sigName: "notify::draw-spaces", callback: any): number
    once(sigName: "notify::draw-spaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::draw-spaces", ...args: any[]): void
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
    connect(sigName: "notify::populate-all", callback: any): number
    on(sigName: "notify::populate-all", callback: any): number
    once(sigName: "notify::populate-all", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::populate-all", ...args: any[]): void
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

export class Map extends View {

    // Own properties of GtkSource-3.0.GtkSource.Map

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.Map

    constructor(config?: Map.ConstructorProperties) 
    /**
     * Creates a new #GtkSourceMap.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GtkSourceMap.
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

        // Own constructor properties of GtkSource-3.0.GtkSource.Mark

        /**
         * The category of the #GtkSourceMark, classifies the mark and controls
         * which pixbuf is used and with which priority it is drawn.
         */
        category?: string | null
    }

}

export interface Mark {

    // Own properties of GtkSource-3.0.GtkSource.Mark

    /**
     * The category of the #GtkSourceMark, classifies the mark and controls
     * which pixbuf is used and with which priority it is drawn.
     */
    readonly category: string

    // Own fields of GtkSource-3.0.GtkSource.Mark

    parentInstance: any
    priv: MarkPrivate

    // Owm methods of GtkSource-3.0.GtkSource.Mark

    /**
     * Returns the mark category.
     */
    getCategory(): string
    /**
     * Returns the next #GtkSourceMark in the buffer or %NULL if the mark
     * was not added to a buffer. If there is no next mark, %NULL will be returned.
     * 
     * If `category` is %NULL, looks for marks of any category.
     * @param category a string specifying the mark category, or %NULL.
     */
    next(category: string | null): Mark | null
    /**
     * Returns the previous #GtkSourceMark in the buffer or %NULL if the mark
     * was not added to a buffer. If there is no previous mark, %NULL is returned.
     * 
     * If `category` is %NULL, looks for marks of any category
     * @param category a string specifying the mark category, or %NULL.
     */
    prev(category: string): Mark | null

    // Class property signals of GtkSource-3.0.GtkSource.Mark

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

export class Mark extends Gtk.TextMark {

    // Own properties of GtkSource-3.0.GtkSource.Mark

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.Mark

    constructor(config?: Mark.ConstructorProperties) 
    /**
     * Creates a text mark. Add it to a buffer using gtk_text_buffer_add_mark().
     * If name is NULL, the mark is anonymous; otherwise, the mark can be retrieved
     * by name using gtk_text_buffer_get_mark().
     * Normally marks are created using the utility function
     * gtk_source_buffer_create_source_mark().
     * @constructor 
     * @param name Name of the #GtkSourceMark, can be NULL when not using a name
     * @param category is used to classify marks according to common characteristics (e.g. all the marks representing a bookmark could belong to the "bookmark" category, or all the marks representing a compilation error could belong to "error" category).
     */
    constructor(name: string, category: string) 
    /**
     * Creates a text mark. Add it to a buffer using gtk_text_buffer_add_mark().
     * If name is NULL, the mark is anonymous; otherwise, the mark can be retrieved
     * by name using gtk_text_buffer_get_mark().
     * Normally marks are created using the utility function
     * gtk_source_buffer_create_source_mark().
     * @constructor 
     * @param name Name of the #GtkSourceMark, can be NULL when not using a name
     * @param category is used to classify marks according to common characteristics (e.g. all the marks representing a bookmark could belong to the "bookmark" category, or all the marks representing a compilation error could belong to "error" category).
     */
    static new(name: string, category: string): Mark

    // Overloads of new

    /**
     * Creates a text mark. Add it to a buffer using gtk_text_buffer_add_mark().
     * If `name` is %NULL, the mark is anonymous; otherwise, the mark can be
     * retrieved by name using gtk_text_buffer_get_mark(). If a mark has left
     * gravity, and text is inserted at the mark’s current location, the mark
     * will be moved to the left of the newly-inserted text. If the mark has
     * right gravity (`left_gravity` = %FALSE), the mark will end up on the
     * right of newly-inserted text. The standard left-to-right cursor is a
     * mark with right gravity (when you type, the cursor stays on the right
     * side of the text you’re typing).
     * @constructor 
     * @param name mark name or %NULL
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

        // Own constructor properties of GtkSource-3.0.GtkSource.MarkAttributes

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
        /**
         * A stock id that may be a base of a rendered icon.
         */
        stockId?: string | null
    }

}

export interface MarkAttributes {

    // Own properties of GtkSource-3.0.GtkSource.MarkAttributes

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
    /**
     * A stock id that may be a base of a rendered icon.
     */
    stockId: string

    // Owm methods of GtkSource-3.0.GtkSource.MarkAttributes

    /**
     * Stores background color in `background`.
     */
    getBackground(): [ /* returnType */ boolean, /* background */ Gdk.RGBA ]
    /**
     * Gets a #GIcon to be used as a base for rendered icon. Note that the icon can
     * be %NULL if it wasn't set earlier.
     */
    getGicon(): Gio.Icon
    /**
     * Gets a name of an icon to be used as a base for rendered icon. Note that the
     * icon name can be %NULL if it wasn't set earlier.
     */
    getIconName(): string
    /**
     * Gets a #GdkPixbuf to be used as a base for rendered icon. Note that the
     * pixbuf can be %NULL if it wasn't set earlier.
     */
    getPixbuf(): GdkPixbuf.Pixbuf
    /**
     * Gets a stock id of an icon used by this attributes. Note that the stock id can
     * be %NULL if it wasn't set earlier.
     */
    getStockId(): string
    /**
     * Queries for a tooltip by emitting
     * a #GtkSourceMarkAttributes::query-tooltip-markup signal. The tooltip may contain
     * a markup.
     * @param mark a #GtkSourceMark.
     */
    getTooltipMarkup(mark: Mark): string
    /**
     * Queries for a tooltip by emitting
     * a #GtkSourceMarkAttributes::query-tooltip-text signal. The tooltip is a plain
     * text.
     * @param mark a #GtkSourceMark.
     */
    getTooltipText(mark: Mark): string
    /**
     * Renders an icon of given size. The base of the icon is set by the last call
     * to one of: gtk_source_mark_attributes_set_pixbuf(),
     * gtk_source_mark_attributes_set_gicon(),
     * gtk_source_mark_attributes_set_icon_name() or
     * gtk_source_mark_attributes_set_stock_id(). `size` cannot be lower than 1.
     * @param widget widget of which style settings may be used.
     * @param size size of the rendered icon.
     */
    renderIcon(widget: Gtk.Widget, size: number): GdkPixbuf.Pixbuf
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
    /**
     * Sets stock id to be used as a base for rendered icon.
     * @param stockId a stock id.
     */
    setStockId(stockId: string): void

    // Own signals of GtkSource-3.0.GtkSource.MarkAttributes

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

    // Class property signals of GtkSource-3.0.GtkSource.MarkAttributes

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
    connect(sigName: "notify::stock-id", callback: any): number
    on(sigName: "notify::stock-id", callback: any): number
    once(sigName: "notify::stock-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stock-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MarkAttributes extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.MarkAttributes

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.MarkAttributes

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

        // Own constructor properties of GtkSource-3.0.GtkSource.PrintCompositor

        /**
         * Name of the font used for the text body.
         * 
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
         * for a description of the format of the string representation.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        bodyFontName?: string | null
        /**
         * The GtkSourceBuffer object to print.
         */
        buffer?: Buffer | null
        /**
         * Name of the font used to print page footer.
         * If this property is unspecified, the text body font is used.
         * 
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
         * for a description of the format of the string representation.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        footerFontName?: string | null
        /**
         * Name of the font used to print page header.
         * If this property is unspecified, the text body font is used.
         * 
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
         * for a description of the format of the string representation.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        headerFontName?: string | null
        /**
         * Whether to print the document with highlighted syntax.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        highlightSyntax?: boolean | null
        /**
         * Name of the font used to print line numbers on the left margin.
         * If this property is unspecified, the text body font is used.
         * 
         * Accepted values are strings representing a font description Pango can understand.
         * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
         * for a description of the format of the string representation.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
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
         * call to the gtk_source_print_compositor_paginate() function.
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
         * call to the gtk_source_print_compositor_paginate() function.
         */
        printHeader?: boolean | null
        /**
         * Interval of printed line numbers. If this property is set to 0 no
         * numbers will be printed.  If greater than 0, a number will be
         * printed every "print-line-numbers" lines (i.e. 1 will print all line numbers).
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        printLineNumbers?: number | null
        /**
         * Width of a tab character expressed in spaces.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        tabWidth?: number | null
        /**
         * Whether to wrap lines never, at word boundaries, or at character boundaries.
         * 
         * The value of this property cannot be changed anymore after the first
         * call to the gtk_source_print_compositor_paginate() function.
         */
        wrapMode?: Gtk.WrapMode | null
    }

}

export interface PrintCompositor {

    // Own properties of GtkSource-3.0.GtkSource.PrintCompositor

    /**
     * Name of the font used for the text body.
     * 
     * Accepted values are strings representing a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
     * for a description of the format of the string representation.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    bodyFontName: string
    /**
     * The GtkSourceBuffer object to print.
     */
    readonly buffer: Buffer
    /**
     * Name of the font used to print page footer.
     * If this property is unspecified, the text body font is used.
     * 
     * Accepted values are strings representing a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
     * for a description of the format of the string representation.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    footerFontName: string
    /**
     * Name of the font used to print page header.
     * If this property is unspecified, the text body font is used.
     * 
     * Accepted values are strings representing a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
     * for a description of the format of the string representation.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    headerFontName: string
    /**
     * Whether to print the document with highlighted syntax.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    highlightSyntax: boolean
    /**
     * Name of the font used to print line numbers on the left margin.
     * If this property is unspecified, the text body font is used.
     * 
     * Accepted values are strings representing a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
     * for a description of the format of the string representation.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
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
     * call to the gtk_source_print_compositor_paginate() function.
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
     * call to the gtk_source_print_compositor_paginate() function.
     */
    printHeader: boolean
    /**
     * Interval of printed line numbers. If this property is set to 0 no
     * numbers will be printed.  If greater than 0, a number will be
     * printed every "print-line-numbers" lines (i.e. 1 will print all line numbers).
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    printLineNumbers: number
    /**
     * Width of a tab character expressed in spaces.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    tabWidth: number
    /**
     * Whether to wrap lines never, at word boundaries, or at character boundaries.
     * 
     * The value of this property cannot be changed anymore after the first
     * call to the gtk_source_print_compositor_paginate() function.
     */
    wrapMode: Gtk.WrapMode

    // Own fields of GtkSource-3.0.GtkSource.PrintCompositor

    parentInstance: GObject.Object
    priv: PrintCompositorPrivate

    // Owm methods of GtkSource-3.0.GtkSource.PrintCompositor

    /**
     * Draw page `page_nr` for printing on the the Cairo context encapsuled in `context`.
     * 
     * This method has been designed to be called in the handler of the #GtkPrintOperation::draw_page signal
     * as shown in the following example:
     * 
     * <informalexample><programlisting>
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
     * </programlisting></informalexample>
     * @param context the #GtkPrintContext encapsulating the context information that is required when           drawing the page for printing.
     * @param pageNr the number of the page to print.
     */
    drawPage(context: Gtk.PrintContext, pageNr: number): void
    /**
     * Returns the name of the font used to print the text body. The returned string
     * must be freed with g_free().
     */
    getBodyFontName(): string
    /**
     * Gets the bottom margin in units of `unit`.
     * @param unit the unit for the return value.
     */
    getBottomMargin(unit: Gtk.Unit): number
    /**
     * Gets the #GtkSourceBuffer associated with the compositor. The returned
     * object reference is owned by the compositor object and
     * should not be unreferenced.
     */
    getBuffer(): Buffer
    /**
     * Returns the name of the font used to print the page footer.
     * The returned string must be freed with g_free().
     */
    getFooterFontName(): string
    /**
     * Returns the name of the font used to print the page header.
     * The returned string must be freed with g_free().
     */
    getHeaderFontName(): string
    /**
     * Determines whether the printed text will be highlighted according to the
     * buffer rules.  Note that highlighting will happen
     * only if the buffer to print has highlighting activated.
     */
    getHighlightSyntax(): boolean
    /**
     * Gets the left margin in units of `unit`.
     * @param unit the unit for the return value.
     */
    getLeftMargin(unit: Gtk.Unit): number
    /**
     * Returns the name of the font used to print line numbers on the left margin.
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
     * Determines if a footer is set to be printed for each page.  A
     * footer will be printed if this function returns %TRUE
     * <emphasis>and</emphasis> some format strings have been specified
     * with gtk_source_print_compositor_set_footer_format().
     */
    getPrintFooter(): boolean
    /**
     * Determines if a header is set to be printed for each page.  A
     * header will be printed if this function returns %TRUE
     * <emphasis>and</emphasis> some format strings have been specified
     * with gtk_source_print_compositor_set_header_format().
     */
    getPrintHeader(): boolean
    /**
     * Returns the interval used for line number printing.  If the
     * value is 0, no line numbers will be printed.  The default value is
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
     * Paginate the document associated with the `compositor`.
     * 
     * In order to support non-blocking pagination, document is paginated in small chunks.
     * Each time gtk_source_print_compositor_paginate() is invoked, a chunk of the document
     * is paginated. To paginate the entire document, gtk_source_print_compositor_paginate()
     * must be invoked multiple times.
     * It returns %TRUE if the document has been completely paginated, otherwise it returns %FALSE.
     * 
     * This method has been designed to be invoked in the handler of the #GtkPrintOperation::paginate signal,
     * as shown in the following example:
     * 
     * <informalexample><programlisting>
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
     * </programlisting></informalexample>
     * 
     * If you don't need to do pagination in chunks, you can simply do it all in the
     * #GtkPrintOperation::begin-print handler, and set the number of pages from there, like
     * in the following example:
     * 
     * <informalexample><programlisting>
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
     * </programlisting></informalexample>
     * @param context the #GtkPrintContext whose parameters (e.g. paper size, print margins, etc.) are used by the the `compositor` to paginate the document.
     */
    paginate(context: Gtk.PrintContext): boolean
    /**
     * Sets the default font for the printed text.
     * 
     * `font_name` should be a
     * string representation of a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
     * for a description of the format of the string representation.
     * 
     * This function cannot be called anymore after the first call to the
     * gtk_source_print_compositor_paginate() function.
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
     * Sets the font for printing the page footer. If
     * %NULL is supplied, the default font (i.e. the one being used for the
     * text) will be used instead.
     * 
     * `font_name` should be a
     * string representation of a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
     * for a description of the format of the string representation.
     * 
     * This function cannot be called anymore after the first call to the
     * gtk_source_print_compositor_paginate() function.
     * @param fontName the name of the font for the footer text, or %NULL.
     */
    setFooterFontName(fontName: string | null): void
    /**
     * See gtk_source_print_compositor_set_header_format() for more information
     * about the parameters.
     * @param separator %TRUE if you want a separator line to be printed.
     * @param left a format string to print on the left of the footer.
     * @param center a format string to print on the center of the footer.
     * @param right a format string to print on the right of the footer.
     */
    setFooterFormat(separator: boolean, left: string | null, center: string | null, right: string | null): void
    /**
     * Sets the font for printing the page header. If
     * %NULL is supplied, the default font (i.e. the one being used for the
     * text) will be used instead.
     * 
     * `font_name` should be a
     * string representation of a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
     * for a description of the format of the string representation.
     * 
     * This function cannot be called anymore after the first call to the
     * gtk_source_print_compositor_paginate() function.
     * @param fontName the name of the font for header text, or %NULL.
     */
    setHeaderFontName(fontName: string | null): void
    /**
     * Sets strftime like header format strings, to be printed on the
     * left, center and right of the top of each page.  The strings may
     * include strftime(3) codes which will be expanded at print time.
     * A subset of strftime() codes are accepted, see g_date_time_format()
     * for more details on the accepted format specifiers.
     * Additionally the following format specifiers are accepted:
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
     * printing with gtk_source_print_compositor_set_print_header().
     * 
     * This function cannot be called anymore after the first call to the
     * gtk_source_print_compositor_paginate() function.
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
     * gtk_source_print_compositor_paginate() function.
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
     * Sets the font for printing line numbers on the left margin.  If
     * %NULL is supplied, the default font (i.e. the one being used for the
     * text) will be used instead.
     * 
     * `font_name` should be a
     * string representation of a font description Pango can understand.
     * (e.g. &quot;Monospace 10&quot;). See pango_font_description_from_string()
     * for a description of the format of the string representation.
     * 
     * This function cannot be called anymore after the first call to the
     * gtk_source_print_compositor_paginate() function.
     * @param fontName the name of the font for line numbers, or %NULL.
     */
    setLineNumbersFontName(fontName: string | null): void
    /**
     * Sets whether you want to print a footer in each page.  The
     * footer consists of three pieces of text and an optional line
     * separator, configurable with
     * gtk_source_print_compositor_set_footer_format().
     * 
     * Note that by default the footer format is unspecified, and if it's
     * empty it will not be printed, regardless of this setting.
     * 
     * This function cannot be called anymore after the first call to the
     * gtk_source_print_compositor_paginate() function.
     * @param print %TRUE if you want the footer to be printed.
     */
    setPrintFooter(print: boolean): void
    /**
     * Sets whether you want to print a header in each page.  The
     * header consists of three pieces of text and an optional line
     * separator, configurable with
     * gtk_source_print_compositor_set_header_format().
     * 
     * Note that by default the header format is unspecified, and if it's
     * empty it will not be printed, regardless of this setting.
     * 
     * This function cannot be called anymore after the first call to the
     * gtk_source_print_compositor_paginate() function.
     * @param print %TRUE if you want the header to be printed.
     */
    setPrintHeader(print: boolean): void
    /**
     * Sets the interval for printed line numbers.  If `interval` is 0 no
     * numbers will be printed.  If greater than 0, a number will be
     * printed every `interval` lines (i.e. 1 will print all line numbers).
     * 
     * Maximum accepted value for `interval` is 100.
     * 
     * This function cannot be called anymore after the first call to the
     * gtk_source_print_compositor_paginate() function.
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
     * gtk_source_print_compositor_paginate() function.
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
     * gtk_source_print_compositor_paginate() function.
     * @param wrapMode a #GtkWrapMode.
     */
    setWrapMode(wrapMode: Gtk.WrapMode): void

    // Class property signals of GtkSource-3.0.GtkSource.PrintCompositor

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

export class PrintCompositor extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.PrintCompositor

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.PrintCompositor

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
     * This constructor sets some configuration properties to make the
     * printed output match `view` as much as possible.  The properties set are
     * #GtkSourcePrintCompositor:tab-width, #GtkSourcePrintCompositor:highlight-syntax,
     * #GtkSourcePrintCompositor:wrap-mode, #GtkSourcePrintCompositor:body-font-name and
     * #GtkSourcePrintCompositor:print-line-numbers.
     * @constructor 
     * @param view a #GtkSourceView to get configuration from.
     */
    static newFromView(view: View): PrintCompositor
    _init(config?: PrintCompositor.ConstructorProperties): void
}

export module Region {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.Region

        /**
         * The #GtkTextBuffer. The #GtkSourceRegion has a weak reference to the
         * buffer.
         */
        buffer?: Gtk.TextBuffer | null
    }

}

export interface Region {

    // Own properties of GtkSource-3.0.GtkSource.Region

    /**
     * The #GtkTextBuffer. The #GtkSourceRegion has a weak reference to the
     * buffer.
     */
    readonly buffer: Gtk.TextBuffer

    // Own fields of GtkSource-3.0.GtkSource.Region

    parentInstance: GObject.Object

    // Owm methods of GtkSource-3.0.GtkSource.Region

    /**
     * Adds `region_to_add` to `region`. `region_to_add` is not modified.
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
     * Initializes a #GtkSourceRegionIter to the first subregion of `region`. If
     * `region` is empty, `iter` will be initialized to the end iterator.
     */
    getStartRegionIter(): /* iter */ RegionIter
    /**
     * Returns the intersection between `region1` and `region2`. `region1` and
     * `region2` are not modified.
     * @param region2 a #GtkSourceRegion, or %NULL.
     */
    intersectRegion(region2: Region | null): Region | null
    /**
     * Returns the intersection between `region` and the subregion delimited by
     * `_start` and `_end`. `region` is not modified.
     * @param start the start of the subregion.
     * @param end the end of the subregion.
     */
    intersectSubregion(start: Gtk.TextIter, end: Gtk.TextIter): Region | null
    /**
     * Returns whether the `region` is empty. A %NULL `region` is considered empty.
     */
    isEmpty(): boolean
    /**
     * Subtracts `region_to_subtract` from `region`. `region_to_subtract` is not
     * modified.
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

    // Class property signals of GtkSource-3.0.GtkSource.Region

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

export class Region extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.Region

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.Region

    constructor(config?: Region.ConstructorProperties) 
    constructor(buffer: Gtk.TextBuffer) 
    static new(buffer: Gtk.TextBuffer): Region
    _init(config?: Region.ConstructorProperties): void
}

export module SearchContext {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.SearchContext

        /**
         * The #GtkSourceBuffer associated to the search context.
         */
        buffer?: Buffer | null
        /**
         * Highlight the search occurrences.
         */
        highlight?: boolean | null
        /**
         * A #GtkSourceStyle, or %NULL for theme's scheme default style.
         */
        matchStyle?: Style | null
        /**
         * The #GtkSourceSearchSettings associated to the search context.
         */
        settings?: SearchSettings | null
    }

}

export interface SearchContext {

    // Own properties of GtkSource-3.0.GtkSource.SearchContext

    /**
     * The #GtkSourceBuffer associated to the search context.
     */
    readonly buffer: Buffer
    /**
     * Highlight the search occurrences.
     */
    highlight: boolean
    /**
     * A #GtkSourceStyle, or %NULL for theme's scheme default style.
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
     * property will be set. If the pattern is valid, the value is %NULL.
     * 
     * Free with g_error_free().
     */
    readonly regexError: object
    /**
     * The #GtkSourceSearchSettings associated to the search context.
     */
    settings: SearchSettings

    // Own fields of GtkSource-3.0.GtkSource.SearchContext

    parent: GObject.Object
    priv: SearchContextPrivate

    // Owm methods of GtkSource-3.0.GtkSource.SearchContext

    /**
     * Synchronous backward search. It is recommended to use the asynchronous
     * functions instead, to not block the user interface. However, if you are sure
     * that the `buffer` is small, this function is more convenient to use.
     * @param iter start of search.
     */
    backward(iter: Gtk.TextIter): [ /* returnType */ boolean, /* matchStart */ Gtk.TextIter, /* matchEnd */ Gtk.TextIter ]
    /**
     * Synchronous backward search. It is recommended to use the asynchronous
     * functions instead, to not block the user interface. However, if you are sure
     * that the `buffer` is small, this function is more convenient to use.
     * 
     * The difference with gtk_source_search_context_backward() is that the
     * `has_wrapped_around` out parameter has been added for convenience.
     * 
     * If the #GtkSourceSearchSettings:wrap-around property is %FALSE, this function
     * doesn't try to wrap around.
     * 
     * The `has_wrapped_around` out parameter is set independently of whether a match
     * is found. So if this function returns %FALSE, `has_wrapped_around` will have
     * the same value as the #GtkSourceSearchSettings:wrap-around property.
     * @param iter start of search.
     */
    backward2(iter: Gtk.TextIter): [ /* returnType */ boolean, /* matchStart */ Gtk.TextIter, /* matchEnd */ Gtk.TextIter, /* hasWrappedAround */ boolean ]
    /**
     * The asynchronous version of gtk_source_search_context_backward2().
     * 
     * See the documentation of gtk_source_search_context_backward2() for more
     * details.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * 
     * If the operation is cancelled, the `callback` will only be called if
     * `cancellable` was not %NULL. gtk_source_search_context_backward_async() takes
     * ownership of `cancellable,` so you can unref it after calling this function.
     * @param iter start of search.
     * @param cancellable a #GCancellable, or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the operation is finished.
     */
    backwardAsync(iter: Gtk.TextIter, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a backward search started with
     * gtk_source_search_context_backward_async().
     * @param result a #GAsyncResult.
     */
    backwardFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* matchStart */ Gtk.TextIter, /* matchEnd */ Gtk.TextIter ]
    /**
     * Finishes a backward search started with
     * gtk_source_search_context_backward_async().
     * 
     * See the documentation of gtk_source_search_context_backward2() for more
     * details.
     * @param result a #GAsyncResult.
     */
    backwardFinish2(result: Gio.AsyncResult): [ /* returnType */ boolean, /* matchStart */ Gtk.TextIter, /* matchEnd */ Gtk.TextIter, /* hasWrappedAround */ boolean ]
    /**
     * Synchronous forward search. It is recommended to use the asynchronous
     * functions instead, to not block the user interface. However, if you are sure
     * that the `buffer` is small, this function is more convenient to use.
     * @param iter start of search.
     */
    forward(iter: Gtk.TextIter): [ /* returnType */ boolean, /* matchStart */ Gtk.TextIter, /* matchEnd */ Gtk.TextIter ]
    /**
     * Synchronous forward search. It is recommended to use the asynchronous
     * functions instead, to not block the user interface. However, if you are sure
     * that the `buffer` is small, this function is more convenient to use.
     * 
     * The difference with gtk_source_search_context_forward() is that the
     * `has_wrapped_around` out parameter has been added for convenience.
     * 
     * If the #GtkSourceSearchSettings:wrap-around property is %FALSE, this function
     * doesn't try to wrap around.
     * 
     * The `has_wrapped_around` out parameter is set independently of whether a match
     * is found. So if this function returns %FALSE, `has_wrapped_around` will have
     * the same value as the #GtkSourceSearchSettings:wrap-around property.
     * @param iter start of search.
     */
    forward2(iter: Gtk.TextIter): [ /* returnType */ boolean, /* matchStart */ Gtk.TextIter, /* matchEnd */ Gtk.TextIter, /* hasWrappedAround */ boolean ]
    /**
     * The asynchronous version of gtk_source_search_context_forward2().
     * 
     * See the documentation of gtk_source_search_context_forward2() for more
     * details.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * 
     * If the operation is cancelled, the `callback` will only be called if
     * `cancellable` was not %NULL. gtk_source_search_context_forward_async() takes
     * ownership of `cancellable,` so you can unref it after calling this function.
     * @param iter start of search.
     * @param cancellable a #GCancellable, or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the operation is finished.
     */
    forwardAsync(iter: Gtk.TextIter, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a forward search started with
     * gtk_source_search_context_forward_async().
     * @param result a #GAsyncResult.
     */
    forwardFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* matchStart */ Gtk.TextIter, /* matchEnd */ Gtk.TextIter ]
    /**
     * Finishes a forward search started with
     * gtk_source_search_context_forward_async().
     * 
     * See the documentation of gtk_source_search_context_forward2() for more
     * details.
     * @param result a #GAsyncResult.
     */
    forwardFinish2(result: Gio.AsyncResult): [ /* returnType */ boolean, /* matchStart */ Gtk.TextIter, /* matchEnd */ Gtk.TextIter, /* hasWrappedAround */ boolean ]
    getBuffer(): Buffer
    getHighlight(): boolean
    getMatchStyle(): Style
    /**
     * Gets the position of a search occurrence. If the buffer is not already fully
     * scanned, the position may be unknown, and -1 is returned. If 0 is returned,
     * it means that this part of the buffer has already been scanned, and that
     * `match_start` and `match_end` don't delimit an occurrence.
     * @param matchStart the start of the occurrence.
     * @param matchEnd the end of the occurrence.
     */
    getOccurrencePosition(matchStart: Gtk.TextIter, matchEnd: Gtk.TextIter): number
    /**
     * Gets the total number of search occurrences. If the buffer is not already
     * fully scanned, the total number of occurrences is unknown, and -1 is
     * returned.
     */
    getOccurrencesCount(): number
    /**
     * Regular expression patterns must follow certain rules. If
     * #GtkSourceSearchSettings:search-text breaks a rule, the error can be retrieved
     * with this function. The error domain is #G_REGEX_ERROR.
     * 
     * Free the return value with g_error_free().
     */
    getRegexError(): GLib.Error | null
    getSettings(): SearchSettings
    /**
     * Replaces a search match by another text. If `match_start` and `match_end`
     * doesn't correspond to a search match, %FALSE is returned.
     * 
     * For a regular expression replacement, you can check if `replace` is valid by
     * calling g_regex_check_replacement(). The `replace` text can contain
     * backreferences; read the g_regex_replace() documentation for more details.
     * @param matchStart the start of the match to replace.
     * @param matchEnd the end of the match to replace.
     * @param replace the replacement text.
     * @param replaceLength the length of `replace` in bytes, or -1.
     */
    replace(matchStart: Gtk.TextIter, matchEnd: Gtk.TextIter, replace: string, replaceLength: number): boolean
    /**
     * Replaces a search match by another text. If `match_start` and `match_end`
     * doesn't correspond to a search match, %FALSE is returned.
     * 
     * Unlike with gtk_source_search_context_replace(), the `match_start` and
     * `match_end` iters are revalidated to point to the replacement text boundaries.
     * 
     * For a regular expression replacement, you can check if `replace` is valid by
     * calling g_regex_check_replacement(). The `replace` text can contain
     * backreferences; read the g_regex_replace() documentation for more details.
     * @param matchStart the start of the match to replace.
     * @param matchEnd the end of the match to replace.
     * @param replace the replacement text.
     * @param replaceLength the length of `replace` in bytes, or -1.
     */
    replace2(matchStart: Gtk.TextIter, matchEnd: Gtk.TextIter, replace: string, replaceLength: number): boolean
    /**
     * Replaces all search matches by another text. It is a synchronous function, so
     * it can block the user interface.
     * 
     * For a regular expression replacement, you can check if `replace` is valid by
     * calling g_regex_check_replacement(). The `replace` text can contain
     * backreferences; read the g_regex_replace() documentation for more details.
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
     * Set the style to apply on search matches. If `match_style` is %NULL, default
     * theme's scheme 'match-style' will be used.
     * To enable or disable the search highlighting, use
     * gtk_source_search_context_set_highlight().
     * @param matchStyle a #GtkSourceStyle, or %NULL.
     */
    setMatchStyle(matchStyle: Style | null): void
    /**
     * Associate a #GtkSourceSearchSettings with the search context. If `settings` is
     * %NULL, a new one will be created.
     * 
     * The search context holds a reference to `settings`.
     * @param settings the new #GtkSourceSearchSettings, or %NULL.
     */
    setSettings(settings: SearchSettings | null): void

    // Class property signals of GtkSource-3.0.GtkSource.SearchContext

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

export class SearchContext extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.SearchContext

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.SearchContext

    constructor(config?: SearchContext.ConstructorProperties) 
    /**
     * Creates a new search context, associated with `buffer,` and customized with
     * `settings`. If `settings` is %NULL, a new #GtkSourceSearchSettings object will
     * be created, that you can retrieve with
     * gtk_source_search_context_get_settings().
     * @constructor 
     * @param buffer a #GtkSourceBuffer.
     * @param settings a #GtkSourceSearchSettings, or %NULL.
     */
    constructor(buffer: Buffer, settings: SearchSettings | null) 
    /**
     * Creates a new search context, associated with `buffer,` and customized with
     * `settings`. If `settings` is %NULL, a new #GtkSourceSearchSettings object will
     * be created, that you can retrieve with
     * gtk_source_search_context_get_settings().
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

        // Own constructor properties of GtkSource-3.0.GtkSource.SearchSettings

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
         * #GtkSourceSearchSettings:search-text as the pattern.
         */
        regexEnabled?: boolean | null
        /**
         * A search string, or %NULL if the search is disabled. If the regular
         * expression search is enabled, #GtkSourceSearchSettings:search-text is
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

    // Own properties of GtkSource-3.0.GtkSource.SearchSettings

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
     * #GtkSourceSearchSettings:search-text as the pattern.
     */
    regexEnabled: boolean
    /**
     * A search string, or %NULL if the search is disabled. If the regular
     * expression search is enabled, #GtkSourceSearchSettings:search-text is
     * the pattern.
     */
    searchText: string
    /**
     * For a forward search, continue at the beginning of the buffer if no
     * search occurrence is found. For a backward search, continue at the
     * end of the buffer.
     */
    wrapAround: boolean

    // Own fields of GtkSource-3.0.GtkSource.SearchSettings

    parent: GObject.Object
    priv: SearchSettingsPrivate

    // Owm methods of GtkSource-3.0.GtkSource.SearchSettings

    getAtWordBoundaries(): boolean
    getCaseSensitive(): boolean
    getRegexEnabled(): boolean
    /**
     * Gets the text to search. The return value must not be freed.
     * 
     * You may be interested to call gtk_source_utils_escape_search_text() after
     * this function.
     */
    getSearchText(): string | null
    getWrapAround(): boolean
    /**
     * Change whether the search is done at word boundaries. If `at_word_boundaries`
     * is %TRUE, a search match must start and end a word. The match can span
     * multiple words. See also gtk_text_iter_starts_word() and
     * gtk_text_iter_ends_word().
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
     * If enabled, the #GtkSourceSearchSettings:search-text property contains the
     * pattern of the regular expression.
     * 
     * #GtkSourceSearchContext uses #GRegex when regex search is enabled. See the
     * [Regular expression syntax](https://developer.gnome.org/glib/stable/glib-regex-syntax.html)
     * page in the GLib reference manual.
     * @param regexEnabled the setting.
     */
    setRegexEnabled(regexEnabled: boolean): void
    /**
     * Sets the text to search. If `search_text` is %NULL or is empty, the search
     * will be disabled. A copy of `search_text` will be made, so you can safely free
     * `search_text` after a call to this function.
     * 
     * You may be interested to call gtk_source_utils_unescape_search_text() before
     * this function.
     * @param searchText the nul-terminated text to search, or %NULL to disable the search.
     */
    setSearchText(searchText: string | null): void
    /**
     * Enables or disables the wrap around search. If `wrap_around` is %TRUE, the
     * forward search continues at the beginning of the buffer if no search
     * occurrences are found. Similarly, the backward search continues to search at
     * the end of the buffer.
     * @param wrapAround the setting.
     */
    setWrapAround(wrapAround: boolean): void

    // Class property signals of GtkSource-3.0.GtkSource.SearchSettings

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

export class SearchSettings extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.SearchSettings

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.SearchSettings

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

export module SpaceDrawer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.SpaceDrawer

        /**
         * Whether the #GtkSourceSpaceDrawer:matrix property is enabled.
         */
        enableMatrix?: boolean | null
        /**
         * The :matrix property is a #GVariant property to specify where and
         * what kind of white spaces to draw.
         * 
         * The #GVariant is of type `"au"`, an array of unsigned integers. Each
         * integer is a combination of #GtkSourceSpaceTypeFlags. There is one
         * integer for each #GtkSourceSpaceLocationFlags, in the same order as
         * they are defined in the enum (%GTK_SOURCE_SPACE_LOCATION_NONE and
         * %GTK_SOURCE_SPACE_LOCATION_ALL are not taken into account).
         * 
         * If the array is shorter than the number of locations, then the value
         * for the missing locations will be %GTK_SOURCE_SPACE_TYPE_NONE.
         * 
         * By default, %GTK_SOURCE_SPACE_TYPE_ALL is set for all locations.
         */
        matrix?: GLib.Variant | null
    }

}

export interface SpaceDrawer {

    // Own properties of GtkSource-3.0.GtkSource.SpaceDrawer

    /**
     * Whether the #GtkSourceSpaceDrawer:matrix property is enabled.
     */
    enableMatrix: boolean
    /**
     * The :matrix property is a #GVariant property to specify where and
     * what kind of white spaces to draw.
     * 
     * The #GVariant is of type `"au"`, an array of unsigned integers. Each
     * integer is a combination of #GtkSourceSpaceTypeFlags. There is one
     * integer for each #GtkSourceSpaceLocationFlags, in the same order as
     * they are defined in the enum (%GTK_SOURCE_SPACE_LOCATION_NONE and
     * %GTK_SOURCE_SPACE_LOCATION_ALL are not taken into account).
     * 
     * If the array is shorter than the number of locations, then the value
     * for the missing locations will be %GTK_SOURCE_SPACE_TYPE_NONE.
     * 
     * By default, %GTK_SOURCE_SPACE_TYPE_ALL is set for all locations.
     */
    matrix: GLib.Variant

    // Own fields of GtkSource-3.0.GtkSource.SpaceDrawer

    parent: GObject.Object
    priv: SpaceDrawerPrivate

    // Owm methods of GtkSource-3.0.GtkSource.SpaceDrawer

    /**
     * Binds the #GtkSourceSpaceDrawer:matrix property to a #GSettings key.
     * 
     * The #GSettings key must be of the same type as the
     * #GtkSourceSpaceDrawer:matrix property, that is, `"au"`.
     * 
     * The g_settings_bind() function cannot be used, because the default GIO
     * mapping functions don't support #GVariant properties (maybe it will be
     * supported by a future GIO version, in which case this function can be
     * deprecated).
     * @param settings a #GSettings object.
     * @param key the `settings` key to bind.
     * @param flags flags for the binding.
     */
    bindMatrixSetting(settings: Gio.Settings, key: string, flags: Gio.SettingsBindFlags): void
    getEnableMatrix(): boolean
    /**
     * Gets the value of the #GtkSourceSpaceDrawer:matrix property, as a #GVariant.
     * An empty array can be returned in case the matrix is a zero matrix.
     * 
     * The gtk_source_space_drawer_get_types_for_locations() function may be more
     * convenient to use.
     */
    getMatrix(): GLib.Variant
    /**
     * If only one location is specified, this function returns what kind of
     * white spaces are drawn at that location. The value is retrieved from the
     * #GtkSourceSpaceDrawer:matrix property.
     * 
     * If several locations are specified, this function returns the logical AND for
     * those locations. Which means that if a certain kind of white space is present
     * in the return value, then that kind of white space is drawn at all the
     * specified `locations`.
     * @param locations one or several #GtkSourceSpaceLocationFlags.
     */
    getTypesForLocations(locations: SpaceLocationFlags): SpaceTypeFlags
    /**
     * Sets whether the #GtkSourceSpaceDrawer:matrix property is enabled.
     * @param enableMatrix the new value.
     */
    setEnableMatrix(enableMatrix: boolean): void
    /**
     * Sets a new value to the #GtkSourceSpaceDrawer:matrix property, as a
     * #GVariant. If `matrix` is %NULL, then an empty array is set.
     * 
     * If `matrix` is floating, it is consumed.
     * 
     * The gtk_source_space_drawer_set_types_for_locations() function may be more
     * convenient to use.
     * @param matrix the new matrix value, or %NULL.
     */
    setMatrix(matrix: GLib.Variant | null): void
    /**
     * Modifies the #GtkSourceSpaceDrawer:matrix property at the specified
     * `locations`.
     * @param locations one or several #GtkSourceSpaceLocationFlags.
     * @param types a combination of #GtkSourceSpaceTypeFlags.
     */
    setTypesForLocations(locations: SpaceLocationFlags, types: SpaceTypeFlags): void

    // Class property signals of GtkSource-3.0.GtkSource.SpaceDrawer

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

export class SpaceDrawer extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.SpaceDrawer

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.SpaceDrawer

    constructor(config?: SpaceDrawer.ConstructorProperties) 
    /**
     * Creates a new #GtkSourceSpaceDrawer object. Useful for storing space drawing
     * settings independently of a #GtkSourceView.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GtkSourceSpaceDrawer object. Useful for storing space drawing
     * settings independently of a #GtkSourceView.
     * @constructor 
     */
    static new(): SpaceDrawer
    _init(config?: SpaceDrawer.ConstructorProperties): void
}

export module Style {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.Style

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
        underline?: boolean | null
        underlineColor?: string | null
        underlineColorSet?: boolean | null
        underlineSet?: boolean | null
    }

}

export interface Style {

    // Own properties of GtkSource-3.0.GtkSource.Style

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
    readonly underline: boolean
    readonly underlineColor: string
    readonly underlineColorSet: boolean
    readonly underlineSet: boolean

    // Owm methods of GtkSource-3.0.GtkSource.Style

    /**
     * This function modifies the #GtkTextTag properties that are related to the
     * #GtkSourceStyle properties. Other #GtkTextTag properties are left untouched.
     * 
     * If `style` is non-%NULL, applies `style` to `tag`.
     * 
     * If `style` is %NULL, the related *-set properties of #GtkTextTag are set to
     * %FALSE.
     * @param tag a #GtkTextTag to apply styles to.
     */
    apply(tag: Gtk.TextTag): void
    /**
     * Creates a copy of `style,` that is a new #GtkSourceStyle instance which
     * has the same attributes set.
     */
    copy(): Style

    // Class property signals of GtkSource-3.0.GtkSource.Style

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
    connect(sigName: "notify::underline", callback: any): number
    on(sigName: "notify::underline", callback: any): number
    once(sigName: "notify::underline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::underline", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Style extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.Style

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.Style

    constructor(config?: Style.ConstructorProperties) 
    _init(config?: Style.ConstructorProperties): void
}

export module StyleScheme {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.StyleScheme

        /**
         * Style scheme id, a unique string used to identify the style scheme
         * in #GtkSourceStyleSchemeManager.
         */
        id?: string | null
    }

}

export interface StyleScheme {

    // Own properties of GtkSource-3.0.GtkSource.StyleScheme

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
     * in #GtkSourceStyleSchemeManager.
     */
    readonly id: string
    /**
     * Style scheme name, a translatable string to present to the user.
     */
    readonly name: string

    // Own fields of GtkSource-3.0.GtkSource.StyleScheme

    base: GObject.Object
    priv: StyleSchemePrivate

    // Owm methods of GtkSource-3.0.GtkSource.StyleScheme

    getAuthors(): string[] | null
    getDescription(): string | null
    getFilename(): string | null
    getId(): string
    getName(): string
    getStyle(styleId: string): Style | null

    // Class property signals of GtkSource-3.0.GtkSource.StyleScheme

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

export class StyleScheme extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.StyleScheme

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.StyleScheme

    constructor(config?: StyleScheme.ConstructorProperties) 
    _init(config?: StyleScheme.ConstructorProperties): void
}

export module StyleSchemeChooserButton {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Activatable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, StyleSchemeChooser.ConstructorProperties, Gtk.Button.ConstructorProperties {
    }

}

export interface StyleSchemeChooserButton extends Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable, StyleSchemeChooser {

    // Own fields of GtkSource-3.0.GtkSource.StyleSchemeChooserButton

    parent: Gtk.Button & Gtk.Container

    // Conflicting methods

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
     * For widgets that can be “activated” (buttons, menu items, etc.)
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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

    // Class property signals of GtkSource-3.0.GtkSource.StyleSchemeChooserButton

    connect(sigName: "notify::always-show-image", callback: any): number
    on(sigName: "notify::always-show-image", callback: any): number
    once(sigName: "notify::always-show-image", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::always-show-image", ...args: any[]): void
    connect(sigName: "notify::image", callback: any): number
    on(sigName: "notify::image", callback: any): number
    once(sigName: "notify::image", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::image-position", callback: any): number
    on(sigName: "notify::image-position", callback: any): number
    once(sigName: "notify::image-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::image-position", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relief", callback: any): number
    on(sigName: "notify::relief", callback: any): number
    once(sigName: "notify::relief", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::relief", ...args: any[]): void
    connect(sigName: "notify::use-stock", callback: any): number
    on(sigName: "notify::use-stock", callback: any): number
    once(sigName: "notify::use-stock", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-stock", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: any): number
    on(sigName: "notify::use-underline", callback: any): number
    once(sigName: "notify::use-underline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
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
    connect(sigName: "notify::related-action", callback: any): number
    on(sigName: "notify::related-action", callback: any): number
    once(sigName: "notify::related-action", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::related-action", ...args: any[]): void
    connect(sigName: "notify::use-action-appearance", callback: any): number
    on(sigName: "notify::use-action-appearance", callback: any): number
    once(sigName: "notify::use-action-appearance", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-action-appearance", ...args: any[]): void
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

export class StyleSchemeChooserButton extends Gtk.Button {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemeChooserButton

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.StyleSchemeChooserButton

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

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, StyleSchemeChooser.ConstructorProperties, Gtk.Bin.ConstructorProperties {
    }

}

export interface StyleSchemeChooserWidget extends Atk.ImplementorIface, Gtk.Buildable, StyleSchemeChooser {

    // Own fields of GtkSource-3.0.GtkSource.StyleSchemeChooserWidget

    parent: Gtk.Bin & Gtk.Container

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

    // Class property signals of GtkSource-3.0.GtkSource.StyleSchemeChooserWidget

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

export class StyleSchemeChooserWidget extends Gtk.Bin {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemeChooserWidget

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.StyleSchemeChooserWidget

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

        // Own constructor properties of GtkSource-3.0.GtkSource.StyleSchemeManager

        searchPath?: string[] | null
    }

}

export interface StyleSchemeManager {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemeManager

    readonly schemeIds: string[]
    searchPath: string[]

    // Own fields of GtkSource-3.0.GtkSource.StyleSchemeManager

    parent: GObject.Object
    priv: StyleSchemeManagerPrivate

    // Owm methods of GtkSource-3.0.GtkSource.StyleSchemeManager

    /**
     * Appends `path` to the list of directories where the `manager` looks for
     * style scheme files.
     * See gtk_source_style_scheme_manager_set_search_path() for details.
     * @param path a directory or a filename.
     */
    appendSearchPath(path: string): void
    /**
     * Mark any currently cached information about the available style scehems
     * as invalid. All the available style schemes will be reloaded next time
     * the `manager` is accessed.
     */
    forceRescan(): void
    /**
     * Looks up style scheme by id.
     * @param schemeId style scheme id to find.
     */
    getScheme(schemeId: string): StyleScheme
    /**
     * Returns the ids of the available style schemes.
     */
    getSchemeIds(): string[] | null
    /**
     * Returns the current search path for the `manager`.
     * See gtk_source_style_scheme_manager_set_search_path() for details.
     */
    getSearchPath(): string[]
    /**
     * Prepends `path` to the list of directories where the `manager` looks
     * for style scheme files.
     * See gtk_source_style_scheme_manager_set_search_path() for details.
     * @param path a directory or a filename.
     */
    prependSearchPath(path: string): void
    /**
     * Sets the list of directories where the `manager` looks for
     * style scheme files.
     * If `path` is %NULL, the search path is reset to default.
     * @param path  a %NULL-terminated array of strings or %NULL.
     */
    setSearchPath(path: string[] | null): void

    // Class property signals of GtkSource-3.0.GtkSource.StyleSchemeManager

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

export class StyleSchemeManager extends GObject.Object {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemeManager

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.StyleSchemeManager

    constructor(config?: StyleSchemeManager.ConstructorProperties) 
    /**
     * Creates a new style manager. If you do not need more than one style
     * manager then use gtk_source_style_scheme_manager_get_default() instead.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new style manager. If you do not need more than one style
     * manager then use gtk_source_style_scheme_manager_get_default() instead.
     * @constructor 
     */
    static new(): StyleSchemeManager
    _init(config?: StyleSchemeManager.ConstructorProperties): void
    /**
     * Returns the default #GtkSourceStyleSchemeManager instance.
     */
    static getDefault(): StyleSchemeManager
}

export module Tag {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.TextTag.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.Tag

        /**
         * Whether to draw white spaces. This property takes precedence over the value
         * defined by the GtkSourceSpaceDrawer's #GtkSourceSpaceDrawer:matrix property
         * (only where the tag is applied).
         * 
         * Setting this property also changes #GtkSourceTag:draw-spaces-set to
         * %TRUE.
         */
        drawSpaces?: boolean | null
        /**
         * Whether the #GtkSourceTag:draw-spaces property is set and must be
         * taken into account.
         */
        drawSpacesSet?: boolean | null
    }

}

export interface Tag {

    // Own properties of GtkSource-3.0.GtkSource.Tag

    /**
     * Whether to draw white spaces. This property takes precedence over the value
     * defined by the GtkSourceSpaceDrawer's #GtkSourceSpaceDrawer:matrix property
     * (only where the tag is applied).
     * 
     * Setting this property also changes #GtkSourceTag:draw-spaces-set to
     * %TRUE.
     */
    drawSpaces: boolean
    /**
     * Whether the #GtkSourceTag:draw-spaces property is set and must be
     * taken into account.
     */
    drawSpacesSet: boolean

    // Own fields of GtkSource-3.0.GtkSource.Tag

    parentInstance: any

    // Class property signals of GtkSource-3.0.GtkSource.Tag

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
    connect(sigName: "notify::background-gdk", callback: any): number
    on(sigName: "notify::background-gdk", callback: any): number
    once(sigName: "notify::background-gdk", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::background-gdk", ...args: any[]): void
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
    connect(sigName: "notify::foreground-gdk", callback: any): number
    on(sigName: "notify::foreground-gdk", callback: any): number
    once(sigName: "notify::foreground-gdk", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::foreground-gdk", ...args: any[]): void
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
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::paragraph-background", callback: any): number
    on(sigName: "notify::paragraph-background", callback: any): number
    once(sigName: "notify::paragraph-background", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::paragraph-background", ...args: any[]): void
    connect(sigName: "notify::paragraph-background-gdk", callback: any): number
    on(sigName: "notify::paragraph-background-gdk", callback: any): number
    once(sigName: "notify::paragraph-background-gdk", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::paragraph-background-gdk", ...args: any[]): void
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

export class Tag extends Gtk.TextTag {

    // Own properties of GtkSource-3.0.GtkSource.Tag

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.Tag

    constructor(config?: Tag.ConstructorProperties) 
    /**
     * Creates a #GtkSourceTag. Configure the tag using object arguments,
     * i.e. using g_object_set().
     * 
     * For usual cases, gtk_source_buffer_create_source_tag() is more convenient to
     * use.
     * @constructor 
     * @param name tag name, or %NULL.
     */
    constructor(name: string | null) 
    /**
     * Creates a #GtkSourceTag. Configure the tag using object arguments,
     * i.e. using g_object_set().
     * 
     * For usual cases, gtk_source_buffer_create_source_tag() is more convenient to
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
        (iter: Gtk.TextIter, event: Gdk.Event): void
    }

    /**
     * Signal callback interface for `move-lines`
     */
    export interface MoveLinesSignalCallback {
        (copy: boolean, count: number): void
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
     * Signal callback interface for `redo`
     */
    export interface RedoSignalCallback {
        (): void
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

    /**
     * Signal callback interface for `undo`
     */
    export interface UndoSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.TextView.ConstructorProperties {

        // Own constructor properties of GtkSource-3.0.GtkSource.View

        autoIndent?: boolean | null
        /**
         * Draw a specific background pattern on the view.
         */
        backgroundPattern?: BackgroundPatternType | null
        /**
         * Set if and how the spaces should be visualized.
         * 
         * For a finer-grained method, there is also the GtkSourceTag's
         * #GtkSourceTag:draw-spaces property.
         */
        drawSpaces?: DrawSpacesFlags | null
        highlightCurrentLine?: boolean | null
        indentOnTab?: boolean | null
        /**
         * Width of an indentation step expressed in number of spaces.
         */
        indentWidth?: number | null
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

export interface View extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of GtkSource-3.0.GtkSource.View

    // Has conflict: autoIndent: boolean
    /**
     * Draw a specific background pattern on the view.
     */
    backgroundPattern: BackgroundPatternType
    /**
     * The completion object associated with the view
     */
    readonly completion: Completion
    /**
     * Set if and how the spaces should be visualized.
     * 
     * For a finer-grained method, there is also the GtkSourceTag's
     * #GtkSourceTag:draw-spaces property.
     */
    drawSpaces: DrawSpacesFlags
    highlightCurrentLine: boolean
    indentOnTab: boolean
    /**
     * Width of an indentation step expressed in number of spaces.
     */
    indentWidth: number
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
     * The #GtkSourceSpaceDrawer object associated with the view.
     */
    readonly spaceDrawer: SpaceDrawer
    /**
     * Width of a tab character expressed in number of spaces.
     */
    tabWidth: number

    // Conflicting properties

    parentInstance: any

    // Own fields of GtkSource-3.0.GtkSource.View

    parent: Gtk.TextView & Gtk.Container
    priv: ViewPrivate

    // Owm methods of GtkSource-3.0.GtkSource.View

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
     * Gets the #GtkSourceCompletion associated with `view`. The returned object is
     * guaranteed to be the same for the lifetime of `view`. Each #GtkSourceView
     * object has a different #GtkSourceCompletion.
     */
    getCompletion(): Completion
    /**
     * Returns the #GtkSourceDrawSpacesFlags specifying if and how spaces
     * should be displayed for this `view`.
     */
    getDrawSpaces(): DrawSpacesFlags
    /**
     * Returns the #GtkSourceGutter object associated with `window_type` for `view`.
     * Only GTK_TEXT_WINDOW_LEFT and GTK_TEXT_WINDOW_RIGHT are supported,
     * respectively corresponding to the left and right gutter. The line numbers
     * and mark category icons are rendered in the left gutter.
     * @param windowType the gutter window type.
     */
    getGutter(windowType: Gtk.TextWindowType): Gutter
    /**
     * Returns whether the current line is highlighted.
     */
    getHighlightCurrentLine(): boolean
    /**
     * Returns whether when the tab key is pressed the current selection
     * should get indented instead of replaced with the \t character.
     */
    getIndentOnTab(): boolean
    /**
     * Returns the number of spaces to use for each step of indent.
     * See gtk_source_view_set_indent_width() for details.
     */
    getIndentWidth(): number
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
     * Returns a #GtkSourceSmartHomeEndType end value specifying
     * how the cursor will move when HOME and END keys are pressed.
     */
    getSmartHomeEnd(): SmartHomeEndType
    /**
     * Gets the #GtkSourceSpaceDrawer associated with `view`. The returned object is
     * guaranteed to be the same for the lifetime of `view`. Each #GtkSourceView
     * object has a different #GtkSourceSpaceDrawer.
     */
    getSpaceDrawer(): SpaceDrawer
    /**
     * Returns the width of tabulation in characters.
     */
    getTabWidth(): number
    /**
     * Determines the visual column at `iter` taking into consideration the
     * #GtkSourceView:tab-width of `view`.
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
    /**
     * If %TRUE auto-indentation of text is enabled.
     * 
     * When Enter is pressed to create a new line, the auto-indentation inserts the
     * same indentation as the previous line. This is <emphasis>not</emphasis> a
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
     * Set if and how the spaces should be visualized. Specifying `flags` as 0 will
     * disable display of spaces.
     * 
     * For a finer-grained method, there is also the GtkSourceTag's
     * #GtkSourceTag:draw-spaces property.
     * @param flags #GtkSourceDrawSpacesFlags specifing how white spaces should be displayed
     */
    setDrawSpaces(flags: DrawSpacesFlags): void
    /**
     * If `highlight` is %TRUE the current line will be highlighted.
     * @param highlight whether to highlight the current line.
     */
    setHighlightCurrentLine(highlight: boolean): void
    /**
     * If %TRUE, when the tab key is pressed when several lines are selected, the
     * selected lines are indented of one level instead of being replaced with a \t
     * character. Shift+Tab unindents the selection.
     * 
     * If the first or last line is not selected completely, it is also indented or
     * unindented.
     * 
     * When the selection doesn't span several lines, the tab key always replaces
     * the selection with a normal \t character.
     * @param enable whether to indent a block when tab is pressed.
     */
    setIndentOnTab(enable: boolean): void
    /**
     * Sets the number of spaces to use for each step of indent when the tab key is
     * pressed. If `width` is -1, the value of the #GtkSourceView:tab-width property
     * will be used.
     * 
     * The #GtkSourceView:indent-width interacts with the
     * #GtkSourceView:insert-spaces-instead-of-tabs property and
     * #GtkSourceView:tab-width. An example will be clearer: if the
     * #GtkSourceView:indent-width is 4 and
     * #GtkSourceView:tab-width is 8 and
     * #GtkSourceView:insert-spaces-instead-of-tabs is %FALSE, then pressing the tab
     * key at the beginning of a line will insert 4 spaces. So far so good. Pressing
     * the tab key a second time will remove the 4 spaces and insert a \t character
     * instead (since #GtkSourceView:tab-width is 8). On the other hand, if
     * #GtkSourceView:insert-spaces-instead-of-tabs is %TRUE, the second tab key
     * pressed will insert 4 more spaces for a total of 8 spaces in the
     * #GtkTextBuffer.
     * 
     * The test-widget program (available in the GtkSourceView repository) may be
     * useful to better understand the indentation settings (enable the space
     * drawing!).
     * @param width indent width in characters.
     */
    setIndentWidth(width: number): void
    /**
     * If %TRUE a tab key pressed is replaced by a group of space characters. Of
     * course it is still possible to insert a real \t programmatically with the
     * #GtkTextBuffer API.
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
     * Sets the width of tabulation in characters. The #GtkTextBuffer still contains
     * \t characters, but they can take a different visual width in a #GtkSourceView
     * widget.
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
     * Retrieves the #GdkWindow corresponding to an area of the text view;
     * possible windows include the overall widget window, child windows
     * on the left, right, top, bottom, and the window that displays the
     * text buffer. Windows are %NULL and nonexistent if their width or
     * height is 0, and are nonexistent before the widget has been
     * realized.
     * @param win window to get
     */
    getWindow(win: Gtk.TextWindowType): Gdk.Window | null

    // Overloads of getWindow

    /**
     * Returns the widget’s window if it is realized, %NULL otherwise
     */
    getWindow(): Gdk.Window | null
    /**
     * Returns the widget’s window if it is realized, %NULL otherwise
     */
    getWindow(): Gdk.Window | null
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

    // Own virtual methods of GtkSource-3.0.GtkSource.View

    lineMarkActivated(iter: Gtk.TextIter, event: Gdk.Event): void
    moveLines(copy: boolean, step: number): void
    moveWords(step: number): void
    redo(): void
    showCompletion(): void
    undo(): void

    // Own signals of GtkSource-3.0.GtkSource.View

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
    emit(sigName: "line-mark-activated", event: Gdk.Event, ...args: any[]): void
    connect(sigName: "move-lines", callback: View.MoveLinesSignalCallback): number
    on(sigName: "move-lines", callback: View.MoveLinesSignalCallback): number
    once(sigName: "move-lines", callback: View.MoveLinesSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "move-lines", count: number, ...args: any[]): void
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
    connect(sigName: "redo", callback: View.RedoSignalCallback): number
    on(sigName: "redo", callback: View.RedoSignalCallback): number
    once(sigName: "redo", callback: View.RedoSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "redo", ...args: any[]): void
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
    connect(sigName: "undo", callback: View.UndoSignalCallback): number
    on(sigName: "undo", callback: View.UndoSignalCallback): number
    once(sigName: "undo", callback: View.UndoSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "undo", ...args: any[]): void

    // Class property signals of GtkSource-3.0.GtkSource.View

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
    connect(sigName: "notify::draw-spaces", callback: any): number
    on(sigName: "notify::draw-spaces", callback: any): number
    once(sigName: "notify::draw-spaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::draw-spaces", ...args: any[]): void
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
    connect(sigName: "notify::populate-all", callback: any): number
    on(sigName: "notify::populate-all", callback: any): number
    once(sigName: "notify::populate-all", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::populate-all", ...args: any[]): void
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

export class View extends Gtk.TextView {

    // Own properties of GtkSource-3.0.GtkSource.View

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.View

    constructor(config?: View.ConstructorProperties) 
    /**
     * Creates a new #GtkSourceView.
     * 
     * By default, an empty #GtkSourceBuffer will be lazily created and can be
     * retrieved with gtk_text_view_get_buffer().
     * 
     * If you want to specify your own buffer, either override the
     * #GtkTextViewClass create_buffer factory method, or use
     * gtk_source_view_new_with_buffer().
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GtkSourceView.
     * 
     * By default, an empty #GtkSourceBuffer will be lazily created and can be
     * retrieved with gtk_text_view_get_buffer().
     * 
     * If you want to specify your own buffer, either override the
     * #GtkTextViewClass create_buffer factory method, or use
     * gtk_source_view_new_with_buffer().
     * @constructor 
     */
    static new(): View
    /**
     * Creates a new #GtkSourceView widget displaying the buffer
     * `buffer`. One buffer can be shared among many widgets.
     * @constructor 
     * @param buffer a #GtkSourceBuffer.
     */
    static newWithBuffer(buffer: Buffer): View

    // Overloads of newWithBuffer

    /**
     * Creates a new #GtkTextView widget displaying the buffer
     * `buffer`. One buffer can be shared among many widgets.
     * `buffer` may be %NULL to create a default buffer, in which case
     * this function is equivalent to gtk_text_view_new(). The
     * text view adds its own reference count to the buffer; it does not
     * take over an existing reference.
     * @constructor 
     * @param buffer a #GtkTextBuffer
     */
    static newWithBuffer(buffer: Gtk.TextBuffer): Gtk.TextView
    _init(config?: View.ConstructorProperties): void
}

export interface BufferClass {

    // Own fields of GtkSource-3.0.GtkSource.BufferClass

    parentClass: Gtk.TextBufferClass
    undo: (buffer: Buffer) => void
    redo: (buffer: Buffer) => void
    bracketMatched: (buffer: Buffer, iter: Gtk.TextIter, state: BracketMatchType) => void
}

export abstract class BufferClass {

    // Own properties of GtkSource-3.0.GtkSource.BufferClass

    static name: string
}

export interface BufferPrivate {
}

export class BufferPrivate {

    // Own properties of GtkSource-3.0.GtkSource.BufferPrivate

    static name: string
}

export interface CompletionClass {

    // Own fields of GtkSource-3.0.GtkSource.CompletionClass

    parentClass: GObject.ObjectClass
    proposalActivated: (completion: Completion, provider: CompletionProvider, proposal: CompletionProposal) => boolean
    show: (completion: Completion) => void
    hide: (completion: Completion) => void
    populateContext: (completion: Completion, context: CompletionContext) => void
    moveCursor: (completion: Completion, step: Gtk.ScrollStep, num: number) => void
    movePage: (completion: Completion, step: Gtk.ScrollStep, num: number) => void
    activateProposal: (completion: Completion) => void
}

export abstract class CompletionClass {

    // Own properties of GtkSource-3.0.GtkSource.CompletionClass

    static name: string
}

export interface CompletionContextClass {

    // Own fields of GtkSource-3.0.GtkSource.CompletionContextClass

    parentClass: GObject.InitiallyUnownedClass
    cancelled: (context: CompletionContext) => void
}

export abstract class CompletionContextClass {

    // Own properties of GtkSource-3.0.GtkSource.CompletionContextClass

    static name: string
}

export interface CompletionContextPrivate {
}

export class CompletionContextPrivate {

    // Own properties of GtkSource-3.0.GtkSource.CompletionContextPrivate

    static name: string
}

export interface CompletionInfoClass {

    // Own fields of GtkSource-3.0.GtkSource.CompletionInfoClass

    parentClass: Gtk.WindowClass
    beforeShow: (info: CompletionInfo) => void
}

export abstract class CompletionInfoClass {

    // Own properties of GtkSource-3.0.GtkSource.CompletionInfoClass

    static name: string
}

export interface CompletionInfoPrivate {
}

export class CompletionInfoPrivate {

    // Own properties of GtkSource-3.0.GtkSource.CompletionInfoPrivate

    static name: string
}

export interface CompletionItemClass {

    // Own fields of GtkSource-3.0.GtkSource.CompletionItemClass

    parentClass: GObject.ObjectClass
}

export abstract class CompletionItemClass {

    // Own properties of GtkSource-3.0.GtkSource.CompletionItemClass

    static name: string
}

export interface CompletionItemPrivate {
}

export class CompletionItemPrivate {

    // Own properties of GtkSource-3.0.GtkSource.CompletionItemPrivate

    static name: string
}

export interface CompletionPrivate {
}

export class CompletionPrivate {

    // Own properties of GtkSource-3.0.GtkSource.CompletionPrivate

    static name: string
}

export interface CompletionProposalIface {

    // Own fields of GtkSource-3.0.GtkSource.CompletionProposalIface

    /**
     * The parent interface.
     * @field 
     */
    parent: GObject.TypeInterface
    getLabel: (proposal: CompletionProposal) => string
    getMarkup: (proposal: CompletionProposal) => string
    getText: (proposal: CompletionProposal) => string
    getIcon: (proposal: CompletionProposal) => GdkPixbuf.Pixbuf | null
    getIconName: (proposal: CompletionProposal) => string | null
    getGicon: (proposal: CompletionProposal) => Gio.Icon | null
    getInfo: (proposal: CompletionProposal) => string | null
    hash: (proposal: CompletionProposal) => number
    equal: (proposal: CompletionProposal, other: CompletionProposal) => boolean
    changed: (proposal: CompletionProposal) => void
}

/**
 * The virtual function table for #GtkSourceCompletionProposal.
 * @record 
 */
export abstract class CompletionProposalIface {

    // Own properties of GtkSource-3.0.GtkSource.CompletionProposalIface

    static name: string
}

export interface CompletionProviderIface {

    // Own fields of GtkSource-3.0.GtkSource.CompletionProviderIface

    /**
     * The parent interface.
     * @field 
     */
    gIface: GObject.TypeInterface
    getName: (provider: CompletionProvider) => string
    getIcon: (provider: CompletionProvider) => GdkPixbuf.Pixbuf | null
    getIconName: (provider: CompletionProvider) => string | null
    getGicon: (provider: CompletionProvider) => Gio.Icon | null
    populate: (provider: CompletionProvider, context: CompletionContext) => void
    match: (provider: CompletionProvider, context: CompletionContext) => boolean
    getActivation: (provider: CompletionProvider) => CompletionActivation
    getInfoWidget: (provider: CompletionProvider, proposal: CompletionProposal) => Gtk.Widget | null
    updateInfo: (provider: CompletionProvider, proposal: CompletionProposal, info: CompletionInfo) => void
    getStartIter: (provider: CompletionProvider, context: CompletionContext, proposal: CompletionProposal) => [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    activateProposal: (provider: CompletionProvider, proposal: CompletionProposal, iter: Gtk.TextIter) => boolean
    getInteractiveDelay: (provider: CompletionProvider) => number
    getPriority: (provider: CompletionProvider) => number
}

/**
 * The virtual function table for #GtkSourceCompletionProvider.
 * @record 
 */
export abstract class CompletionProviderIface {

    // Own properties of GtkSource-3.0.GtkSource.CompletionProviderIface

    static name: string
}

export interface CompletionWordsClass {

    // Own fields of GtkSource-3.0.GtkSource.CompletionWordsClass

    parentClass: GObject.ObjectClass
}

export abstract class CompletionWordsClass {

    // Own properties of GtkSource-3.0.GtkSource.CompletionWordsClass

    static name: string
}

export interface CompletionWordsPrivate {
}

export class CompletionWordsPrivate {

    // Own properties of GtkSource-3.0.GtkSource.CompletionWordsPrivate

    static name: string
}

export interface Encoding {

    // Owm methods of GtkSource-3.0.GtkSource.Encoding

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

export class Encoding {

    // Own properties of GtkSource-3.0.GtkSource.Encoding

    static name: string

    // Constructors of GtkSource-3.0.GtkSource.Encoding

    /**
     * Gets all encodings.
     */
    static getAll(): Encoding[]
    /**
     * Gets the #GtkSourceEncoding for the current locale. See also g_get_charset().
     */
    static getCurrent(): Encoding
    /**
     * Gets the list of default candidate encodings to try when loading a file. See
     * gtk_source_file_loader_set_candidate_encodings().
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

    // Own fields of GtkSource-3.0.GtkSource.FileClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class FileClass {

    // Own properties of GtkSource-3.0.GtkSource.FileClass

    static name: string
}

export interface FileLoaderClass {

    // Own fields of GtkSource-3.0.GtkSource.FileLoaderClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class FileLoaderClass {

    // Own properties of GtkSource-3.0.GtkSource.FileLoaderClass

    static name: string
}

export interface FileLoaderPrivate {
}

export class FileLoaderPrivate {

    // Own properties of GtkSource-3.0.GtkSource.FileLoaderPrivate

    static name: string
}

export interface FilePrivate {
}

export class FilePrivate {

    // Own properties of GtkSource-3.0.GtkSource.FilePrivate

    static name: string
}

export interface FileSaverClass {

    // Own fields of GtkSource-3.0.GtkSource.FileSaverClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class FileSaverClass {

    // Own properties of GtkSource-3.0.GtkSource.FileSaverClass

    static name: string
}

export interface FileSaverPrivate {
}

export class FileSaverPrivate {

    // Own properties of GtkSource-3.0.GtkSource.FileSaverPrivate

    static name: string
}

export interface GutterClass {

    // Own fields of GtkSource-3.0.GtkSource.GutterClass

    parentClass: GObject.ObjectClass
}

export abstract class GutterClass {

    // Own properties of GtkSource-3.0.GtkSource.GutterClass

    static name: string
}

export interface GutterPrivate {
}

export class GutterPrivate {

    // Own properties of GtkSource-3.0.GtkSource.GutterPrivate

    static name: string
}

export interface GutterRendererClass {

    // Own fields of GtkSource-3.0.GtkSource.GutterRendererClass

    parentClass: GObject.InitiallyUnownedClass
    begin: (renderer: GutterRenderer, cr: cairo.Context, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter) => void
    draw: (renderer: GutterRenderer, cr: cairo.Context, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void
    end: (renderer: GutterRenderer) => void
    changeView: (renderer: GutterRenderer, oldView: Gtk.TextView | null) => void
    changeBuffer: (renderer: GutterRenderer, oldBuffer: Gtk.TextBuffer | null) => void
    queryActivatable: (renderer: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean
    activate: (renderer: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void
    queueDraw: (renderer: GutterRenderer) => void
    queryTooltip: (renderer: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean
    queryData: (renderer: GutterRenderer, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void
}

export abstract class GutterRendererClass {

    // Own properties of GtkSource-3.0.GtkSource.GutterRendererClass

    static name: string
}

export interface GutterRendererPixbufClass {
}

export abstract class GutterRendererPixbufClass {

    // Own properties of GtkSource-3.0.GtkSource.GutterRendererPixbufClass

    static name: string
}

export interface GutterRendererPixbufPrivate {
}

export class GutterRendererPixbufPrivate {

    // Own properties of GtkSource-3.0.GtkSource.GutterRendererPixbufPrivate

    static name: string
}

export interface GutterRendererPrivate {
}

export class GutterRendererPrivate {

    // Own properties of GtkSource-3.0.GtkSource.GutterRendererPrivate

    static name: string
}

export interface GutterRendererTextClass {
}

export abstract class GutterRendererTextClass {

    // Own properties of GtkSource-3.0.GtkSource.GutterRendererTextClass

    static name: string
}

export interface GutterRendererTextPrivate {
}

export class GutterRendererTextPrivate {

    // Own properties of GtkSource-3.0.GtkSource.GutterRendererTextPrivate

    static name: string
}

export interface LanguageClass {

    // Own fields of GtkSource-3.0.GtkSource.LanguageClass

    parentClass: GObject.ObjectClass
}

export abstract class LanguageClass {

    // Own properties of GtkSource-3.0.GtkSource.LanguageClass

    static name: string
}

export interface LanguageManagerClass {

    // Own fields of GtkSource-3.0.GtkSource.LanguageManagerClass

    parentClass: GObject.ObjectClass
}

export abstract class LanguageManagerClass {

    // Own properties of GtkSource-3.0.GtkSource.LanguageManagerClass

    static name: string
}

export interface LanguageManagerPrivate {
}

export class LanguageManagerPrivate {

    // Own properties of GtkSource-3.0.GtkSource.LanguageManagerPrivate

    static name: string
}

export interface LanguagePrivate {
}

export class LanguagePrivate {

    // Own properties of GtkSource-3.0.GtkSource.LanguagePrivate

    static name: string
}

export interface MapClass {

    // Own fields of GtkSource-3.0.GtkSource.MapClass

    parentClass: ViewClass
    padding: object[]
}

export abstract class MapClass {

    // Own properties of GtkSource-3.0.GtkSource.MapClass

    static name: string
}

export interface MarkAttributesClass {
}

export abstract class MarkAttributesClass {

    // Own properties of GtkSource-3.0.GtkSource.MarkAttributesClass

    static name: string
}

export interface MarkAttributesPrivate {
}

export class MarkAttributesPrivate {

    // Own properties of GtkSource-3.0.GtkSource.MarkAttributesPrivate

    static name: string
}

export interface MarkClass {

    // Own fields of GtkSource-3.0.GtkSource.MarkClass

    parentClass: Gtk.TextMarkClass
}

export abstract class MarkClass {

    // Own properties of GtkSource-3.0.GtkSource.MarkClass

    static name: string
}

export interface MarkPrivate {
}

export class MarkPrivate {

    // Own properties of GtkSource-3.0.GtkSource.MarkPrivate

    static name: string
}

export interface PrintCompositorClass {

    // Own fields of GtkSource-3.0.GtkSource.PrintCompositorClass

    parentClass: GObject.ObjectClass
}

export abstract class PrintCompositorClass {

    // Own properties of GtkSource-3.0.GtkSource.PrintCompositorClass

    static name: string
}

export interface PrintCompositorPrivate {
}

export class PrintCompositorPrivate {

    // Own properties of GtkSource-3.0.GtkSource.PrintCompositorPrivate

    static name: string
}

export interface RegionClass {

    // Own fields of GtkSource-3.0.GtkSource.RegionClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class RegionClass {

    // Own properties of GtkSource-3.0.GtkSource.RegionClass

    static name: string
}

export interface RegionIter {

    // Owm methods of GtkSource-3.0.GtkSource.RegionIter

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
 * #GtkSourceRegionIter is an opaque datatype; ignore all its fields.
 * Initialize the iter with gtk_source_region_get_start_region_iter().
 * @record 
 */
export class RegionIter {

    // Own properties of GtkSource-3.0.GtkSource.RegionIter

    static name: string
}

export interface SearchContextClass {

    // Own fields of GtkSource-3.0.GtkSource.SearchContextClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class SearchContextClass {

    // Own properties of GtkSource-3.0.GtkSource.SearchContextClass

    static name: string
}

export interface SearchContextPrivate {
}

export class SearchContextPrivate {

    // Own properties of GtkSource-3.0.GtkSource.SearchContextPrivate

    static name: string
}

export interface SearchSettingsClass {

    // Own fields of GtkSource-3.0.GtkSource.SearchSettingsClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class SearchSettingsClass {

    // Own properties of GtkSource-3.0.GtkSource.SearchSettingsClass

    static name: string
}

export interface SearchSettingsPrivate {
}

export class SearchSettingsPrivate {

    // Own properties of GtkSource-3.0.GtkSource.SearchSettingsPrivate

    static name: string
}

export interface SpaceDrawerClass {

    // Own fields of GtkSource-3.0.GtkSource.SpaceDrawerClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class SpaceDrawerClass {

    // Own properties of GtkSource-3.0.GtkSource.SpaceDrawerClass

    static name: string
}

export interface SpaceDrawerPrivate {
}

export class SpaceDrawerPrivate {

    // Own properties of GtkSource-3.0.GtkSource.SpaceDrawerPrivate

    static name: string
}

export interface StyleClass {
}

export abstract class StyleClass {

    // Own properties of GtkSource-3.0.GtkSource.StyleClass

    static name: string
}

export interface StyleSchemeChooserButtonClass {

    // Own fields of GtkSource-3.0.GtkSource.StyleSchemeChooserButtonClass

    parent: Gtk.ButtonClass
}

export abstract class StyleSchemeChooserButtonClass {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemeChooserButtonClass

    static name: string
}

export interface StyleSchemeChooserInterface {

    // Own fields of GtkSource-3.0.GtkSource.StyleSchemeChooserInterface

    baseInterface: GObject.TypeInterface
    getStyleScheme: (chooser: StyleSchemeChooser) => StyleScheme
    setStyleScheme: (chooser: StyleSchemeChooser, scheme: StyleScheme) => void
    padding: object[]
}

export abstract class StyleSchemeChooserInterface {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemeChooserInterface

    static name: string
}

export interface StyleSchemeChooserWidgetClass {

    // Own fields of GtkSource-3.0.GtkSource.StyleSchemeChooserWidgetClass

    parent: Gtk.BinClass
}

export abstract class StyleSchemeChooserWidgetClass {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemeChooserWidgetClass

    static name: string
}

export interface StyleSchemeClass {

    // Own fields of GtkSource-3.0.GtkSource.StyleSchemeClass

    baseClass: GObject.ObjectClass
}

export abstract class StyleSchemeClass {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemeClass

    static name: string
}

export interface StyleSchemeManagerClass {

    // Own fields of GtkSource-3.0.GtkSource.StyleSchemeManagerClass

    parentClass: GObject.ObjectClass
}

export abstract class StyleSchemeManagerClass {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemeManagerClass

    static name: string
}

export interface StyleSchemeManagerPrivate {
}

export class StyleSchemeManagerPrivate {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemeManagerPrivate

    static name: string
}

export interface StyleSchemePrivate {
}

export class StyleSchemePrivate {

    // Own properties of GtkSource-3.0.GtkSource.StyleSchemePrivate

    static name: string
}

export interface TagClass {

    // Own fields of GtkSource-3.0.GtkSource.TagClass

    parentClass: Gtk.TextTagClass
    padding: object[]
}

export abstract class TagClass {

    // Own properties of GtkSource-3.0.GtkSource.TagClass

    static name: string
}

export interface UndoManagerIface {

    // Own fields of GtkSource-3.0.GtkSource.UndoManagerIface

    parent: GObject.TypeInterface
    canUndo: (manager: UndoManager) => boolean
    canRedo: (manager: UndoManager) => boolean
    undo: (manager: UndoManager) => void
    redo: (manager: UndoManager) => void
    beginNotUndoableAction: (manager: UndoManager) => void
    endNotUndoableAction: (manager: UndoManager) => void
    canUndoChanged: (manager: UndoManager) => void
    canRedoChanged: (manager: UndoManager) => void
}

export abstract class UndoManagerIface {

    // Own properties of GtkSource-3.0.GtkSource.UndoManagerIface

    static name: string
}

export interface ViewClass {

    // Own fields of GtkSource-3.0.GtkSource.ViewClass

    parentClass: Gtk.TextViewClass
    undo: (view: View) => void
    redo: (view: View) => void
    lineMarkActivated: (view: View, iter: Gtk.TextIter, event: Gdk.Event) => void
    showCompletion: (view: View) => void
    moveLines: (view: View, copy: boolean, step: number) => void
    moveWords: (view: View, step: number) => void
}

export abstract class ViewClass {

    // Own properties of GtkSource-3.0.GtkSource.ViewClass

    static name: string
}

export interface ViewPrivate {
}

export class ViewPrivate {

    // Own properties of GtkSource-3.0.GtkSource.ViewPrivate

    static name: string
}
