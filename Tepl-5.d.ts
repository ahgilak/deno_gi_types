
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Tepl-5
 */

import type * as GtkSource from './GtkSource-4.js';
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
import type * as Amtk from './Amtk-5.js';

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
export enum SelectionType {
    /**
     * No selection.
     */
    NO_SELECTION,
    /**
     * The start and end selection bounds are on
     *   the same line.
     */
    ON_SAME_LINE,
    /**
     * The selection spans multiple lines.
     */
    MULTIPLE_LINES,
}
/**
 * Flags to define the behavior of a #TeplFileSaver.
 * @bitfield 
 */
export enum FileSaverFlags {
    /**
     * No flags.
     */
    NONE,
    /**
     * Create a backup before saving the file.
     */
    CREATE_BACKUP,
}
/**
 * The folding state at a certain line in the #GtkTextBuffer.
 * 
 * Since #TeplGutterRendererFolds has a flat view of the folding tree, some
 * states can be combined; for example, %TEPL_GUTTER_RENDERER_FOLDS_STATE_END
 * and %TEPL_GUTTER_RENDERER_FOLDS_STATE_CONTINUE.
 * @bitfield 
 */
export enum GutterRendererFoldsState {
    /**
     * No code folding here.
     */
    NONE,
    /**
     * Start of currently folded
     *   fold region.
     */
    START_FOLDED,
    /**
     * Start of currently opened
     *   fold region.
     */
    START_OPENED,
    /**
     * Fold region continues.
     */
    CONTINUE,
    /**
     * End of fold region.
     */
    END,
}
/**
 * Free the resources allocated by Tepl. For example it unrefs the singleton
 * objects.
 * 
 * This function also calls amtk_finalize() and gtk_source_finalize().
 * 
 * It is not mandatory to call this function, it's just to be friendlier to
 * memory debugging tools. This function is meant to be called at the end of
 * main(). It can be called several times.
 */
export function finalize(): void
/**
 * Initializes the Tepl library (e.g. for the internationalization).
 * 
 * This function can be called several times, but is meant to be called at the
 * beginning of main(), before any other Tepl function call.
 * 
 * This function also calls amtk_init() and gtk_source_init().
 */
export function init(): void
/**
 * When a %G_IO_ERROR_CANT_CREATE_BACKUP error occurs while saving `location,`
 * offer two possible actions:
 * - Save anyway: %GTK_RESPONSE_YES.
 * - Don't save: %GTK_RESPONSE_CANCEL.
 * @param location the #GFile for which the backup failed to be created.
 * @param error must be a %G_IO_ERROR_CANT_CREATE_BACKUP.
 */
export function ioErrorInfoBarCantCreateBackup(location: Gio.File, error: GLib.Error): InfoBar
/**
 * Creates a warning about `location` having changed on disk. The possible
 * actions:
 * - Depending on `document_modified,` "Reload" or "Drop changes and reload":
 *   %GTK_RESPONSE_OK.
 * - A close button as added with gtk_info_bar_set_show_close_button().
 * @param location the #GFile for which there has been an external modification.
 * @param documentModified whether the document (e.g. the #GtkTextBuffer) has   unsaved modifications.
 */
export function ioErrorInfoBarExternallyModified(location: Gio.File, documentModified: boolean): InfoBar
/**
 * Creates a warning about `location` being already open in another window,
 * offering two possible actions:
 * - Edit anyway: %GTK_RESPONSE_YES.
 * - Don't edit: %GTK_RESPONSE_CANCEL.
 * @param location the #GFile already open in another window.
 */
export function ioErrorInfoBarFileAlreadyOpen(location: Gio.File): InfoBar
/**
 * For file saving, creates a warning about invalid characters that can corrupt
 * the file. Possible actions:
 * - Save anyway: %GTK_RESPONSE_YES.
 * - Don't save: %GTK_RESPONSE_CANCEL.
 * @param location where to save the document.
 */
export function ioErrorInfoBarInvalidCharacters(location: Gio.File): InfoBar
/**
 * Gets the indentation, as a string, of the line at `iter`. `iter` can be
 * anywhere in the line.
 * 
 * Possible use-case: to implement an action that inserts some text in a
 * #GtkTextBuffer. If the text to insert spans multiple lines, it is usually
 * desired to keep the same indentation level.
 * @param iter a #GtkTextIter.
 */
export function iterGetLineIndentation(iter: Gtk.TextIter): string
/**
 * Appends #GtkMenuItem's to `menu_shell` for the following #GAction's:
 * - `"win.tepl-cut"`
 * - `"win.tepl-copy"`
 * - `"win.tepl-paste"`
 * - `"win.tepl-delete"`
 * - `"win.tepl-select-all"`
 * 
 * See the [list of GActions implemented in
 * TeplApplicationWindow][tepl-application-window-gactions]. This function
 * correctly uses the %AMTK_FACTORY_IGNORE_ACCELS_FOR_APP flag to create the
 * #GtkMenuItem's.
 * @param menuShell a #GtkMenuShell.
 */
export function menuShellAppendEditActions(menuShell: Gtk.MenuShell): void
/**
 * This function will generate CSS suitable for the GTK CSS engine based on the
 * properties of the #PangoFontDescription.
 * 
 * The returned string contains only the CSS declarations, it is not a complete
 * CSS rule set. So the selector and curly braces are not present. Each
 * declaration, including the last one, ends with a semicolon.
 * @param desc a #PangoFontDescription.
 */
export function pangoFontDescriptionToCss(desc: Pango.FontDescription): string
/**
 * A #GBindingTransformFunc to transform between these two #GValue types:
 * - A #GValue of type #gboolean.
 * - A #GValue of type #GVariant, with the #GVariant of type boolean.
 * 
 * For convenience, this function works in both directions (hence the “smart”),
 * it introspects the types of `from_value` and `to_value`.
 * 
 * Note that if `from_value` and `to_value` are of the same #GValue type, this
 * function won't work and you shouldn't use a custom #GBindingTransformFunc in
 * the first place.
 * @param binding a #GBinding.
 * @param fromValue the #GValue containing the value to transform.
 * @param toValue the #GValue in which to store the transformed value.
 * @param userData data passed to the transform function.
 */
export function utilsBindingTransformFuncSmartBool(binding: GObject.Binding, fromValue: any, toValue: any, userData: object | null): boolean
export function utilsCreateCloseButton(): Gtk.Widget
/**
 * Synchronously creates parent directories of `file,` so that `file` can be
 * saved.
 * @param file a file
 * @param cancellable optional #GCancellable object, %NULL to ignore.
 */
export function utilsCreateParentDirectories(file: Gio.File, cancellable: Gio.Cancellable | null): boolean
/**
 * Parse and break an uri apart in its individual components like the uri
 * scheme, user info, host, port and path. The return value pointer can be
 * %NULL to ignore certain parts of the uri. If the function returns %TRUE, then
 * all return value pointers should be freed using g_free().
 * @param uri the uri to decode
 */
export function utilsDecodeUri(uri: string): [ /* returnType */ boolean, /* scheme */ string, /* user */ string, /* host */ string, /* port */ string, /* path */ string ]
/**
 * The asynchronous version of g_file_query_exists(). When the operation is
 * finished, `callback` will be called. You can then call
 * tepl_utils_file_query_exists_finish() to get the result of the operation.
 * @param file a #GFile.
 * @param cancellable a #GCancellable.
 * @param callback the callback to call when the operation is finished.
 */
export function utilsFileQueryExistsAsync(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Finishes the operation started with tepl_utils_file_query_exists_async().
 * There is no output #GError parameter, so you should check if the operation
 * has been cancelled (in which case %FALSE will be returned).
 * @param file a #GFile.
 * @param result a #GAsyncResult.
 */
export function utilsFileQueryExistsFinish(file: Gio.File, result: Gio.AsyncResult): boolean
/**
 * Examples:
 * - "file.pdf" returns ".pdf".
 * - "file.PDF" returns ".pdf".
 * - "file.tar.gz" returns ".gz".
 * - "path/to/file.pdf" returns ".pdf".
 * - "file" (without an extension) returns "" (the empty string).
 * @param filename a filename.
 */
export function utilsGetFileExtension(filename: string): string
/**
 * Returns `filename` without its extension. With the “extension” having the same
 * definition as in tepl_utils_get_file_extension(); in other words it returns
 * the other part of `filename`.
 * @param filename a filename.
 */
export function utilsGetFileShortname(filename: string): string
/**
 * Removes all rows of `list_box,` to obtain an empty #GtkListBox.
 * @param listBox a #GtkListBox.
 */
export function utilsListBoxClear(listBox: Gtk.ListBox): void
/**
 * Gets an array of all the #GtkListBoxRow childen of `list_box` for which
 * `filter_func` returns %TRUE. The elements in the array are sorted by
 * increasing index order (as returned by gtk_list_box_row_get_index()).
 * @param listBox a #GtkListBox.
 * @param filterFunc non-%NULL callback function.
 */
export function utilsListBoxGetFilteredChildren(listBox: Gtk.ListBox, filterFunc: Gtk.ListBoxFilterFunc): [ /* returnType */ Gtk.ListBoxRow[] | null, /* nFilteredChildren */ number ]
/**
 * This function has the same semantics as gtk_list_box_get_row_at_index(), but
 * it takes into account only the rows for which `filter_func` returns %TRUE.
 * 
 * As an example, if `index` is 0, it returns the first #GtkListBoxRow for which
 * `filter_func` returns %TRUE.
 * @param listBox a #GtkListBox.
 * @param index the index of the row, starting at 0. The index is among the filtered   rows only.
 * @param filterFunc non-%NULL callback function.
 */
export function utilsListBoxGetRowAtIndexWithFilter(listBox: Gtk.ListBox, index: number, filterFunc: Gtk.ListBoxFilterFunc): Gtk.ListBoxRow | null
/**
 * Scrolls to a specific #GtkListBoxRow.
 * 
 * Before using this function, tepl_utils_list_box_setup_scrolling() must have
 * been called.
 * @param listBox a #GtkListBox.
 * @param row a #GtkListBoxRow.
 */
export function utilsListBoxScrollToRow(listBox: Gtk.ListBox, row: Gtk.ListBoxRow): void
/**
 * Calls tepl_utils_list_box_scroll_to_row() on the row returned by
 * gtk_list_box_get_selected_row(). This function assumes that there is either
 * zero or one selected row.
 * 
 * Before using this function, tepl_utils_list_box_setup_scrolling() must have
 * been called.
 * @param listBox a #GtkListBox.
 */
export function utilsListBoxScrollToSelectedRow(listBox: Gtk.ListBox): void
/**
 * Setup vertical scrolling between `list_box` and `scrolled_window,` to be able
 * to use tepl_utils_list_box_scroll_to_row() afterwards.
 * 
 * This function is intended to be called only once per #GtkListBox, when
 * initializing the `list_box` and `scrolled_window` widgets.
 * @param listBox a #GtkListBox.
 * @param scrolledWindow a #GtkScrolledWindow.
 */
export function utilsListBoxSetupScrolling(listBox: Gtk.ListBox, scrolledWindow: Gtk.ScrolledWindow): void
/**
 * The same as g_markup_escape_text(), but with an implementation that fully
 * supports round-trip integrity. I.e. when #GMarkupParser or any other XML
 * parser will decode/unescape the string, the exact same string as `src` will be
 * brought back. As long as `src` is a valid UTF-8 string.
 * 
 * The other difference with g_markup_escape_text() is that the `length`
 * parameter is not present for tepl_utils_markup_escape_text().
 * 
 * # g_markup_escape_text() doesn't fully support round-trip integrity
 * 
 * In fact, g_markup_escape_text() doesn't escape the tabstop, newline and
 * carriage return characters. And the #GMarkupParser correctly processes
 * whitespace and line endings according to the [XML rules for normalization of
 * line endings and attribute values](https://www.w3.org/TR/xml/#AVNormalize).
 * 
 * For example `"\t"` (a tab) after a round-trip through g_markup_escape_text()
 * and #GMarkupParser becomes a simple space.
 * @param src a nul-terminated UTF-8 string.
 */
export function utilsMarkupEscapeText(src: string): string | null
/**
 * Replaces the home directory with a tilde, if the home directory is present in
 * the `filename`.
 * @param filename the filename.
 */
export function utilsReplaceHomeDirWithTilde(filename: string): string
/**
 * Like tepl_utils_str_middle_truncate() but the “…” character is at the end.
 * @param str a UTF-8 string.
 * @param truncateLength truncate the string at that length, in UTF-8 characters   (not bytes).
 */
export function utilsStrEndTruncate(str: string, truncateLength: number): string
/**
 * If `str` is longer than `truncate_length,` then this function returns `str`
 * truncated in the middle with a “…” character. Otherwise it just returns a
 * copy of `str`.
 * @param str a UTF-8 string.
 * @param truncateLength truncate the string at that length, in UTF-8 characters   (not bytes).
 */
export function utilsStrMiddleTruncate(str: string, truncateLength: number): string
/**
 * Replaces all occurences of `search` by `replacement`.
 * 
 * The function does only one pass, for example:
 * |[
 * tepl_utils_str_replace ("aaaa", "aa", "a");
 * ```
 * 
 * returns "aa", not "a".
 * @param string a string
 * @param search the search string
 * @param replacement the replacement string
 */
export function utilsStrReplace(string: string, search: string, replacement: string): string
export module LanguageChooser {

    // Signal callback interfaces

    /**
     * Signal callback interface for `language-activated`
     */
    export interface LanguageActivatedSignalCallback {
        (language: GtkSource.Language | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface LanguageChooser {

    // Owm methods of Tepl-5.Tepl.LanguageChooser

    // Has conflict: selectLanguage(language: GtkSource.Language | null): void

    // Own virtual methods of Tepl-5.Tepl.LanguageChooser

    languageActivated(language: GtkSource.Language): void
    /**
     * Selects `language` in the list of available languages.
     * @virtual 
     * @param language a #GtkSourceLanguage, or %NULL for "Plain Text".
     */
    selectLanguage(language: GtkSource.Language | null): void

    // Own signals of Tepl-5.Tepl.LanguageChooser

    connect(sigName: "language-activated", callback: LanguageChooser.LanguageActivatedSignalCallback): number
    on(sigName: "language-activated", callback: LanguageChooser.LanguageActivatedSignalCallback): number
    once(sigName: "language-activated", callback: LanguageChooser.LanguageActivatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "language-activated", ...args: any[]): void

    // Class property signals of Tepl-5.Tepl.LanguageChooser

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class LanguageChooser extends GObject.Object {

    // Own properties of Tepl-5.Tepl.LanguageChooser

    static name: string

    // Constructors of Tepl-5.Tepl.LanguageChooser

    constructor(config?: LanguageChooser.ConstructorProperties) 
    _init(config?: LanguageChooser.ConstructorProperties): void
}

export module TabGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tepl-5.Tepl.TabGroup

        /**
         * The #TeplTab currently shown.
         */
        activeTab?: Tab | null
    }

}

export interface TabGroup {

    // Own properties of Tepl-5.Tepl.TabGroup

    /**
     * The #TeplBuffer of the active tab.
     */
    readonly activeBuffer: Buffer
    /**
     * The #TeplTab currently shown.
     */
    activeTab: Tab
    /**
     * The #TeplView of the active tab.
     */
    readonly activeView: View

    // Owm methods of Tepl-5.Tepl.TabGroup

    /**
     * Appends `tab` to `tab_group`.
     * @param tab a #TeplTab.
     * @param jumpTo whether to set `tab` as the active tab after appending it.
     */
    appendTab(tab: Tab, jumpTo: boolean): void
    /**
     * Convenience function.
     */
    getActiveBuffer(): Buffer | null
    // Has conflict: getActiveTab(): Tab | null
    /**
     * Convenience function.
     */
    getActiveView(): View | null
    /**
     * Convenience function.
     */
    getBuffers(): Buffer[]
    // Has conflict: getTabs(): Tab[]
    /**
     * Convenience function.
     */
    getViews(): View[]
    // Has conflict: setActiveTab(tab: Tab): void

    // Own virtual methods of Tepl-5.Tepl.TabGroup

    appendTabVfunc(tab: Tab): void
    getActiveTab(): Tab | null
    /**
     * Gets the list of #TeplTab's contained in `tab_group`.
     * 
     * If `tab_group` contains non-#TeplTab children, those will not be present in the
     * returned list. In other words, it is <emphasis>not</emphasis> guaranteed that
     * the index of a #TeplTab in the returned #GList has the same child index in
     * the `tab_group` container.
     * @virtual 
     */
    getTabs(): Tab[]
    /**
     * Sets the #TeplTabGroup:active-tab. `tab` must be part of `tab_group`.
     * @virtual 
     * @param tab a #TeplTab part of `tab_group`.
     */
    setActiveTab(tab: Tab): void

    // Class property signals of Tepl-5.Tepl.TabGroup

    connect(sigName: "notify::active-buffer", callback: any): number
    on(sigName: "notify::active-buffer", callback: any): number
    once(sigName: "notify::active-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active-buffer", ...args: any[]): void
    connect(sigName: "notify::active-tab", callback: any): number
    on(sigName: "notify::active-tab", callback: any): number
    once(sigName: "notify::active-tab", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active-tab", ...args: any[]): void
    connect(sigName: "notify::active-view", callback: any): number
    on(sigName: "notify::active-view", callback: any): number
    once(sigName: "notify::active-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class TabGroup extends GObject.Object {

    // Own properties of Tepl-5.Tepl.TabGroup

    static name: string

    // Constructors of Tepl-5.Tepl.TabGroup

    constructor(config?: TabGroup.ConstructorProperties) 
    _init(config?: TabGroup.ConstructorProperties): void
}

export module AbstractFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface AbstractFactory {

    // Own fields of Tepl-5.Tepl.AbstractFactory

    parent: GObject.Object

    // Owm methods of Tepl-5.Tepl.AbstractFactory

    // Has conflict: createFile(): File
    // Has conflict: createMainWindow(app: Gtk.Application): Gtk.ApplicationWindow | null
    // Has conflict: createMetadataManagerFile(): Gio.File | null
    // Has conflict: createTab(): Tab
    // Has conflict: createTabLabel(tab: Tab): Gtk.Widget | null
    /**
     * Sets the #TeplAbstractFactory singleton. This should be called early in
     * main(), for example just after calling tepl_init().
     * 
     * This function must be called only once, before the first call to
     * tepl_abstract_factory_get_singleton().
     * 
     * Tepl takes ownership of the `factory` reference.
     */
    setSingleton(): void

    // Own virtual methods of Tepl-5.Tepl.AbstractFactory

    createFile(): File
    /**
     * Creates a main #GtkApplicationWindow in the sense of
     * tepl_application_window_is_main_window().
     * @virtual 
     * @param app a #GtkApplication.
     */
    createMainWindow(app: Gtk.Application): Gtk.ApplicationWindow | null
    /**
     * Creates a new #GFile that is then intended to be used as an argument to
     * tepl_metadata_manager_load_from_disk() and
     * tepl_metadata_manager_save_to_disk(). This function just creates the #GFile
     * object, it doesn't call any #TeplMetadataManager function.
     * @virtual 
     */
    createMetadataManagerFile(): Gio.File | null
    createTab(): Tab
    /**
     * Creates a new tab label for `tab,` suitable for gtk_notebook_set_tab_label().
     * @virtual 
     * @param tab a #TeplTab.
     */
    createTabLabel(tab: Tab): Gtk.Widget | null

    // Class property signals of Tepl-5.Tepl.AbstractFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class AbstractFactory extends GObject.Object {

    // Own properties of Tepl-5.Tepl.AbstractFactory

    static name: string

    // Constructors of Tepl-5.Tepl.AbstractFactory

    constructor(config?: AbstractFactory.ConstructorProperties) 
    _init(config?: AbstractFactory.ConstructorProperties): void
    /**
     * Gets the #TeplAbstractFactory singleton instance.
     * 
     * If tepl_abstract_factory_set_singleton() has not been called, the singleton
     * is created with a #TeplAbstractFactory instance.
     */
    static getSingleton(): AbstractFactory
}

export module Application {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tepl-5.Tepl.Application

        /**
         * The #GtkApplication.
         */
        application?: Gtk.Application | null
    }

}

export interface Application {

    // Own properties of Tepl-5.Tepl.Application

    /**
     * The #GtkApplication.
     */
    readonly application: Gtk.Application

    // Own fields of Tepl-5.Tepl.Application

    parent: GObject.Object
    priv: ApplicationPrivate

    // Owm methods of Tepl-5.Tepl.Application

    /**
     * Like gtk_application_get_active_window(), but returns the main window in the
     * sense of tepl_application_window_is_main_window().
     */
    getActiveMainWindow(): Gtk.ApplicationWindow | null
    /**
     * Returns an initially empty #AmtkActionInfoStore reserved for the
     * application-specific actions. Libraries should not add #AmtkActionInfo's to
     * this store. Libraries should provide their own store if they want to share
     * #AmtkActionInfo's.
     */
    getAppActionInfoStore(): Amtk.ActionInfoStore
    getApplication(): Gtk.Application
    /**
     * The returned #AmtkActionInfoStore contains #AmtkActionInfo's for all the
     * #GAction's listed in the [class description of
     * TeplApplicationWindow][tepl-application-window-gactions] and the [class
     * description of TeplApplication][tepl-application-gactions].
     */
    getTeplActionInfoStore(): Amtk.ActionInfoStore
    /**
     * Connects a generic function handler for the #GApplication::activate signal.
     * 
     * If no main windows exist, it creates one with
     * tepl_abstract_factory_create_main_window(). If a main window already exists,
     * it calls gtk_window_present() on the most recently focused window of the
     * application.
     */
    handleActivate(): void
    /**
     * This function:
     * - Connects to the #GApplication::startup signal to call
     *   tepl_metadata_manager_load_from_disk().
     * - Connects to the #GApplication::shutdown signal to call
     *   tepl_metadata_manager_save_to_disk() with `trim` set to %TRUE.
     * 
     * It gets the #GFile by calling
     * tepl_abstract_factory_create_metadata_manager_file().
     */
    handleMetadata(): void
    /**
     * Connects a generic function handler for the #GApplication::open signal.
     * 
     * It calls tepl_application_window_open_file() for each #GFile to open, on the
     * active main window as returned by tepl_application_get_active_main_window().
     * If the active main window is %NULL, it creates one with
     * tepl_abstract_factory_create_main_window().
     */
    handleOpen(): void
    /**
     * Calls g_application_open() with a single file and an empty hint.
     * @param file a #GFile.
     */
    openSimple(file: Gio.File): void

    // Class property signals of Tepl-5.Tepl.Application

    connect(sigName: "notify::application", callback: any): number
    on(sigName: "notify::application", callback: any): number
    once(sigName: "notify::application", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Application extends GObject.Object {

    // Own properties of Tepl-5.Tepl.Application

    static name: string

    // Constructors of Tepl-5.Tepl.Application

    constructor(config?: Application.ConstructorProperties) 
    _init(config?: Application.ConstructorProperties): void
    /**
     * Convenience function that calls g_application_get_default() followed by
     * tepl_application_get_from_gtk_application(). The object returned by
     * g_application_get_default() must be a #GtkApplication.
     */
    static getDefault(): Application
    /**
     * Returns the #TeplApplication of `gtk_app`. The returned object is guaranteed
     * to be the same for the lifetime of `gtk_app`.
     * @param gtkApp a #GtkApplication.
     */
    static getFromGtkApplication(gtkApp: Gtk.Application): Application
}

export module ApplicationWindow {

    // Constructor properties interface

    export interface ConstructorProperties extends TabGroup.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Tepl-5.Tepl.ApplicationWindow

        /**
         * The #GtkApplicationWindow.
         */
        applicationWindow?: Gtk.ApplicationWindow | null
        /**
         * Whether to handle the #GtkWindow:title. The title is probably not
         * appropriate if a #GtkHeaderBar is used, the title is meant to be used
         * only for applications with a traditional UI.
         * 
         * If %TRUE, the title will contain:
         * - the #TeplBuffer:tepl-full-title of the active buffer.
         * - if the active view is not #GtkTextView:editable, the
         *   `"[Read-Only]"` string.
         * - the application name as returned by g_get_application_name().
         * 
         * If the active view is %NULL, the title contains only the application
         * name.
         */
        handleTitle?: boolean | null
    }

}

export interface ApplicationWindow extends TabGroup {

    // Own properties of Tepl-5.Tepl.ApplicationWindow

    /**
     * The #GtkApplicationWindow.
     */
    readonly applicationWindow: Gtk.ApplicationWindow
    /**
     * Whether to handle the #GtkWindow:title. The title is probably not
     * appropriate if a #GtkHeaderBar is used, the title is meant to be used
     * only for applications with a traditional UI.
     * 
     * If %TRUE, the title will contain:
     * - the #TeplBuffer:tepl-full-title of the active buffer.
     * - if the active view is not #GtkTextView:editable, the
     *   `"[Read-Only]"` string.
     * - the application name as returned by g_get_application_name().
     * 
     * If the active view is %NULL, the title contains only the application
     * name.
     */
    handleTitle: boolean

    // Own fields of Tepl-5.Tepl.ApplicationWindow

    parent: GObject.Object
    priv: ApplicationWindowPrivate

    // Owm methods of Tepl-5.Tepl.ApplicationWindow

    getApplicationWindow(): Gtk.ApplicationWindow
    getHandleTitle(): boolean
    /**
     * Gets the #GtkWindowGroup in which `tepl_window` resides.
     * 
     * You should call this function only on main windows, to add secondary windows
     * to the #GtkWindowGroup.
     */
    getWindowGroup(): Gtk.WindowGroup
    /**
     * Opens a file in `tepl_window`. If the active tab is untouched (see
     * tepl_buffer_is_untouched()), then the file is loaded in that tab. Otherwise a
     * new tab is created.
     * 
     * This function is asynchronous, the file loading is done with the
     * tepl_tab_load_file() function. There is no way to know when the file loading
     * is finished.
     * @param location a #GFile.
     * @param jumpTo whether to set the tab where the file is loaded as the active tab.
     */
    openFile(location: Gio.File, jumpTo: boolean): void
    /**
     * Sets the #TeplApplicationWindow:handle-title property.
     * @param handleTitle the new value.
     */
    setHandleTitle(handleTitle: boolean): void
    /**
     * Sets the #TeplTabGroup of `tepl_window`. This function can be called only
     * once, it is not possible to change the #TeplTabGroup afterwards (this
     * restriction may be lifted in the future if there is a compelling use-case).
     * 
     * #TeplApplicationWindow implements the #TeplTabGroup interface by delegating
     * the requests to `tab_group`.
     * @param tabGroup a #TeplTabGroup.
     */
    setTabGroup(tabGroup: TabGroup): void

    // Class property signals of Tepl-5.Tepl.ApplicationWindow

    connect(sigName: "notify::application-window", callback: any): number
    on(sigName: "notify::application-window", callback: any): number
    once(sigName: "notify::application-window", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::application-window", ...args: any[]): void
    connect(sigName: "notify::handle-title", callback: any): number
    on(sigName: "notify::handle-title", callback: any): number
    once(sigName: "notify::handle-title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::handle-title", ...args: any[]): void
    connect(sigName: "notify::active-buffer", callback: any): number
    on(sigName: "notify::active-buffer", callback: any): number
    once(sigName: "notify::active-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active-buffer", ...args: any[]): void
    connect(sigName: "notify::active-tab", callback: any): number
    on(sigName: "notify::active-tab", callback: any): number
    once(sigName: "notify::active-tab", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active-tab", ...args: any[]): void
    connect(sigName: "notify::active-view", callback: any): number
    on(sigName: "notify::active-view", callback: any): number
    once(sigName: "notify::active-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ApplicationWindow extends GObject.Object {

    // Own properties of Tepl-5.Tepl.ApplicationWindow

    static name: string

    // Constructors of Tepl-5.Tepl.ApplicationWindow

    constructor(config?: ApplicationWindow.ConstructorProperties) 
    _init(config?: ApplicationWindow.ConstructorProperties): void
    /**
     * Returns the #TeplApplicationWindow of `gtk_window`. The returned object is
     * guaranteed to be the same for the lifetime of `gtk_window`.
     * @param gtkWindow a #GtkApplicationWindow.
     */
    static getFromGtkApplicationWindow(gtkWindow: Gtk.ApplicationWindow): ApplicationWindow
    /**
     * Returns %TRUE iff `gtk_window` has an associated #TeplTabGroup (i.e. if
     * tepl_application_window_set_tab_group() has been called).
     * 
     * This function takes a #GtkApplicationWindow parameter to avoid creating the
     * #TeplApplicationWindow object if it hasn't been created.
     * @param gtkWindow a #GtkApplicationWindow.
     */
    static isMainWindow(gtkWindow: Gtk.ApplicationWindow): boolean
}

export module Buffer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `tepl-cursor-moved`
     */
    export interface TeplCursorMovedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GtkSource.Buffer.ConstructorProperties {

        // Own constructor properties of Tepl-5.Tepl.Buffer

        /**
         * The #GtkSourceBuffer:style-scheme ID, as a string. This property is
         * useful for binding it to a #GSettings key.
         * 
         * When the #GtkSourceBuffer:style-scheme is %NULL,
         * #TeplBuffer:tepl-style-scheme-id contains the empty string.
         */
        teplStyleSchemeId?: string | null
    }

}

export interface Buffer {

    // Own properties of Tepl-5.Tepl.Buffer

    /**
     * The full title. See tepl_buffer_get_full_title().
     */
    readonly teplFullTitle: string
    /**
     * The short title. See tepl_buffer_get_short_title().
     */
    readonly teplShortTitle: string
    /**
     * The #GtkSourceBuffer:style-scheme ID, as a string. This property is
     * useful for binding it to a #GSettings key.
     * 
     * When the #GtkSourceBuffer:style-scheme is %NULL,
     * #TeplBuffer:tepl-style-scheme-id contains the empty string.
     */
    teplStyleSchemeId: string

    // Conflicting properties

    priv: any & Gtk.TextBufferPrivate

    // Own fields of Tepl-5.Tepl.Buffer

    parentInstance: any

    // Owm methods of Tepl-5.Tepl.Buffer

    /**
     * Returns the #TeplFile of `buffer`. The returned object is guaranteed to be the
     * same for the lifetime of `buffer`.
     * 
     * #TeplBuffer creates the #TeplFile with tepl_abstract_factory_create_file().
     */
    getFile(): File
    /**
     * Returns a title suitable for a #GtkWindow title. It contains (in that order):
     * - the #TeplBuffer:tepl-short-title;
     * - the directory path in parenthesis if the #TeplFile:location isn't
     *   %NULL.
     */
    getFullTitle(): string
    /**
     * Returns the #TeplMetadata of `buffer`. The returned object is guaranteed to be
     * the same for the lifetime of `buffer`.
     */
    getMetadata(): Metadata
    getSelectionType(): SelectionType
    /**
     * Returns a title suitable for a tab label. It contains (in that order):
     * - '*' if the buffer is modified;
     * - the #TeplFile:short-name.
     */
    getShortTitle(): string
    getStyleSchemeId(): string
    /**
     * Returns whether `buffer` is untouched.
     * 
     * This function is for example useful to know if we can re-use this buffer to
     * load a file, instead of opening a new tab or window.
     * 
     * For this function to return %TRUE, the `buffer` must be empty, non-modified,
     * the undo/redo #GtkSourceBuffer history must be empty, and the
     * #TeplFile:location must be %NULL.
     */
    isUntouched(): boolean
    /**
     * Calls tepl_metadata_manager_copy_from() for #TeplFile:location (if not %NULL)
     * to the associated #TeplMetadata of `buffer`.
     */
    loadMetadataFromMetadataManager(): void
    /**
     * Calls tepl_metadata_manager_merge_into() for #TeplFile:location (if not
     * %NULL) from the associated #TeplMetadata of `buffer`.
     */
    saveMetadataIntoMetadataManager(): void
    /**
     * Sets the #TeplBuffer:tepl-style-scheme-id property.
     * 
     * The #GtkSourceStyleScheme is taken from the default
     * #GtkSourceStyleSchemeManager as returned by
     * gtk_source_style_scheme_manager_get_default().
     * @param styleSchemeId the new value.
     */
    setStyleSchemeId(styleSchemeId: string): void

    // Own virtual methods of Tepl-5.Tepl.Buffer

    teplCursorMoved(): void

    // Own signals of Tepl-5.Tepl.Buffer

    connect(sigName: "tepl-cursor-moved", callback: Buffer.TeplCursorMovedSignalCallback): number
    on(sigName: "tepl-cursor-moved", callback: Buffer.TeplCursorMovedSignalCallback): number
    once(sigName: "tepl-cursor-moved", callback: Buffer.TeplCursorMovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "tepl-cursor-moved", ...args: any[]): void

    // Class property signals of Tepl-5.Tepl.Buffer

    connect(sigName: "notify::tepl-full-title", callback: any): number
    on(sigName: "notify::tepl-full-title", callback: any): number
    once(sigName: "notify::tepl-full-title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tepl-full-title", ...args: any[]): void
    connect(sigName: "notify::tepl-short-title", callback: any): number
    on(sigName: "notify::tepl-short-title", callback: any): number
    once(sigName: "notify::tepl-short-title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tepl-short-title", ...args: any[]): void
    connect(sigName: "notify::tepl-style-scheme-id", callback: any): number
    on(sigName: "notify::tepl-style-scheme-id", callback: any): number
    once(sigName: "notify::tepl-style-scheme-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tepl-style-scheme-id", ...args: any[]): void
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

export class Buffer extends GtkSource.Buffer {

    // Own properties of Tepl-5.Tepl.Buffer

    static name: string

    // Constructors of Tepl-5.Tepl.Buffer

    constructor(config?: Buffer.ConstructorProperties) 
    constructor() 
    static new(): Buffer

    // Overloads of new

    /**
     * Creates a new source buffer.
     * @constructor 
     * @param table a #GtkTextTagTable, or %NULL to create a new one.
     */
    static new(table: Gtk.TextTagTable | null): GtkSource.Buffer
    /**
     * Creates a new text buffer.
     * @constructor 
     * @param table a tag table, or %NULL to create a new one
     */
    static new(table: Gtk.TextTagTable | null): Gtk.TextBuffer
    _init(config?: Buffer.ConstructorProperties): void
}

export module File {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tepl-5.Tepl.File

        /**
         * The location.
         */
        location?: Gio.File | null
    }

}

export interface File {

    // Own properties of Tepl-5.Tepl.File

    /**
     * The location.
     */
    location: Gio.File
    /**
     * The line ending type.
     */
    readonly newlineType: NewlineType
    /**
     * The file short name. See tepl_file_get_short_name().
     */
    readonly shortName: string

    // Own fields of Tepl-5.Tepl.File

    parent: GObject.Object
    priv: FilePrivate

    // Owm methods of Tepl-5.Tepl.File

    /**
     * If the #TeplFile:location isn't %NULL, adds its URI to the default
     * #GtkRecentManager with gtk_recent_manager_add_item().
     */
    addUriToRecentManager(): void
    getLocation(): Gio.File
    getNewlineType(): NewlineType
    /**
     * Gets the `file` short name. If the #TeplFile:location isn't %NULL,
     * returns its display-name (see #G_FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME).
     * Otherwise returns "Untitled File N", with N the Nth untitled file of the
     * application, starting at 1. When an untitled file is closed or its location
     * is set, its untitled number is released and can be used by a later file.
     */
    getShortName(): string
    /**
     * Sets the location.
     * @param location the new #GFile, or %NULL.
     */
    setLocation(location: Gio.File | null): void

    // Class property signals of Tepl-5.Tepl.File

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
    connect(sigName: "notify::short-name", callback: any): number
    on(sigName: "notify::short-name", callback: any): number
    once(sigName: "notify::short-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::short-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class File extends GObject.Object {

    // Own properties of Tepl-5.Tepl.File

    static name: string

    // Constructors of Tepl-5.Tepl.File

    constructor(config?: File.ConstructorProperties) 
    constructor() 
    static new(): File
    _init(config?: File.ConstructorProperties): void
    /**
     * Calls either gtk_native_dialog_set_modal() or gtk_window_set_modal()
     * depending on the `chooser` type.
     * @param chooser a #GtkFileChooser.
     * @param modal the new value.
     */
    static chooserSetModal(chooser: Gtk.FileChooser, modal: boolean): void
    /**
     * Sets or unsets a parent #GtkWindow for the `chooser` dialog. It calls the
     * right functions depending on the type of `chooser`.
     * @param chooser a #GtkFileChooser.
     * @param parent a #GtkWindow, or %NULL.
     */
    static chooserSetParent(chooser: Gtk.FileChooser, parent: Gtk.Window | null): void
    /**
     * Calls gtk_native_dialog_show() or gtk_window_present() depending on the type
     * of `chooser`.
     * @param chooser a #GtkFileChooser.
     */
    static chooserShow(chooser: Gtk.FileChooser): void
}

export module FileLoader {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tepl-5.Tepl.FileLoader

        /**
         * The #TeplBuffer to load the content into. The #TeplFileLoader object
         * has a weak reference to the buffer.
         */
        buffer?: Buffer | null
        /**
         * The #TeplFile. The #TeplFileLoader object has a weak
         * reference to the file.
         */
        file?: File | null
        /**
         * The #GFile to load. By default the location is taken from the
         * #TeplFile at construction time.
         */
        location?: Gio.File | null
    }

}

export interface FileLoader {

    // Own properties of Tepl-5.Tepl.FileLoader

    /**
     * The #TeplBuffer to load the content into. The #TeplFileLoader object
     * has a weak reference to the buffer.
     */
    readonly buffer: Buffer
    /**
     * The #TeplFile. The #TeplFileLoader object has a weak
     * reference to the file.
     */
    readonly file: File
    /**
     * The #GFile to load. By default the location is taken from the
     * #TeplFile at construction time.
     */
    readonly location: Gio.File

    // Own fields of Tepl-5.Tepl.FileLoader

    parent: GObject.Object
    priv: FileLoaderPrivate

    // Owm methods of Tepl-5.Tepl.FileLoader

    getBuffer(): Buffer | null
    getFile(): File | null
    getLocation(): Gio.File | null
    /**
     * Loads asynchronously the file content into the #TeplBuffer.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * @param ioPriority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
     */
    loadAsync(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a file loading started with tepl_file_loader_load_async().
     * @param result a #GAsyncResult.
     */
    loadFinish(result: Gio.AsyncResult): boolean

    // Class property signals of Tepl-5.Tepl.FileLoader

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

    // Own properties of Tepl-5.Tepl.FileLoader

    static name: string

    // Constructors of Tepl-5.Tepl.FileLoader

    constructor(config?: FileLoader.ConstructorProperties) 
    /**
     * Creates a new #TeplFileLoader object. The content is read from the #TeplFile
     * location.
     * 
     * If not already done, call tepl_file_set_location() before calling this
     * constructor. The previous location is anyway not needed, because as soon as
     * the file loading begins, the `buffer` is emptied. Setting the #TeplFile
     * location directly permits to update the UI, to display the good location when
     * the file is loading.
     * @constructor 
     * @param buffer the #TeplBuffer to load the content into.
     * @param file the #TeplFile.
     */
    constructor(buffer: Buffer, file: File) 
    /**
     * Creates a new #TeplFileLoader object. The content is read from the #TeplFile
     * location.
     * 
     * If not already done, call tepl_file_set_location() before calling this
     * constructor. The previous location is anyway not needed, because as soon as
     * the file loading begins, the `buffer` is emptied. Setting the #TeplFile
     * location directly permits to update the UI, to display the good location when
     * the file is loading.
     * @constructor 
     * @param buffer the #TeplBuffer to load the content into.
     * @param file the #TeplFile.
     */
    static new(buffer: Buffer, file: File): FileLoader
    _init(config?: FileLoader.ConstructorProperties): void
}

export module FileSaver {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tepl-5.Tepl.FileSaver

        /**
         * The #TeplBuffer to save. The #TeplFileSaver object has a weak
         * reference to the buffer.
         */
        buffer?: Buffer | null
        /**
         * The #TeplFile. The #TeplFileSaver object has a weak reference to the
         * file.
         */
        file?: File | null
        /**
         * File saving flags.
         */
        flags?: FileSaverFlags | null
        /**
         * The #GFile where to save the buffer. By default the location is taken
         * from the #TeplFile at construction time.
         */
        location?: Gio.File | null
        /**
         * The newline type.
         */
        newlineType?: NewlineType | null
    }

}

export interface FileSaver {

    // Own properties of Tepl-5.Tepl.FileSaver

    /**
     * The #TeplBuffer to save. The #TeplFileSaver object has a weak
     * reference to the buffer.
     */
    readonly buffer: Buffer
    /**
     * The #TeplFile. The #TeplFileSaver object has a weak reference to the
     * file.
     */
    readonly file: File
    /**
     * File saving flags.
     */
    flags: FileSaverFlags
    /**
     * The #GFile where to save the buffer. By default the location is taken
     * from the #TeplFile at construction time.
     */
    readonly location: Gio.File
    /**
     * The newline type.
     */
    newlineType: NewlineType

    // Own fields of Tepl-5.Tepl.FileSaver

    object: GObject.Object
    priv: FileSaverPrivate

    // Owm methods of Tepl-5.Tepl.FileSaver

    getBuffer(): Buffer
    getFile(): File
    getFlags(): FileSaverFlags
    getLocation(): Gio.File
    getNewlineType(): NewlineType
    /**
     * Saves asynchronously the buffer into the file. See the #GAsyncResult
     * documentation to know how to use this function.
     * @param ioPriority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
     */
    saveAsync(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a file saving started with tepl_file_saver_save_async().
     * 
     * If the file has been saved successfully, the following #TeplFile
     * properties will be updated: the location and the newline type.
     * 
     * gtk_text_buffer_set_modified() is called with %FALSE if the file has been
     * saved successfully.
     * @param result a #GAsyncResult.
     */
    saveFinish(result: Gio.AsyncResult): boolean
    setFlags(flags: FileSaverFlags): void
    /**
     * Sets the newline type. By default the newline type is taken from the
     * #TeplFile.
     * @param newlineType the new newline type.
     */
    setNewlineType(newlineType: NewlineType): void

    // Class property signals of Tepl-5.Tepl.FileSaver

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

    // Own properties of Tepl-5.Tepl.FileSaver

    static name: string

    // Constructors of Tepl-5.Tepl.FileSaver

    constructor(config?: FileSaver.ConstructorProperties) 
    /**
     * Creates a new #TeplFileSaver object. The `buffer` will be saved to the
     * #TeplFile's location.
     * 
     * This constructor is suitable for a simple "save" operation, when the `file`
     * already contains a non-%NULL #TeplFile:location.
     * @constructor 
     * @param buffer the #TeplBuffer to save.
     * @param file the #TeplFile.
     */
    constructor(buffer: Buffer, file: File) 
    /**
     * Creates a new #TeplFileSaver object. The `buffer` will be saved to the
     * #TeplFile's location.
     * 
     * This constructor is suitable for a simple "save" operation, when the `file`
     * already contains a non-%NULL #TeplFile:location.
     * @constructor 
     * @param buffer the #TeplBuffer to save.
     * @param file the #TeplFile.
     */
    static new(buffer: Buffer, file: File): FileSaver
    /**
     * Creates a new #TeplFileSaver object with a target location. When the
     * file saving is finished successfully, `target_location` is set to the `file'`s
     * #TeplFile:location property. If an error occurs, the previous valid
     * location is still available in #TeplFile.
     * 
     * This constructor is suitable for a "save as" operation, or for saving a new
     * buffer for the first time.
     * @constructor 
     * @param buffer the #TeplBuffer to save.
     * @param file the #TeplFile.
     * @param targetLocation the #GFile where to save the buffer to.
     */
    static newWithTarget(buffer: Buffer, file: File, targetLocation: Gio.File): FileSaver
    _init(config?: FileSaver.ConstructorProperties): void
}

export module FoldRegion {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tepl-5.Tepl.FoldRegion

        /**
         * The #GtkTextBuffer where the fold region is applied. The
         * #TeplFoldRegion object has a weak reference to the buffer.
         */
        buffer?: Gtk.TextBuffer | null
        /**
         * Whether the #TeplFoldRegion is folded or not.
         */
        folded?: boolean | null
    }

}

export interface FoldRegion {

    // Own properties of Tepl-5.Tepl.FoldRegion

    /**
     * The #GtkTextBuffer where the fold region is applied. The
     * #TeplFoldRegion object has a weak reference to the buffer.
     */
    readonly buffer: Gtk.TextBuffer
    /**
     * Whether the #TeplFoldRegion is folded or not.
     */
    folded: boolean

    // Own fields of Tepl-5.Tepl.FoldRegion

    parentInstance: GObject.Object

    // Owm methods of Tepl-5.Tepl.FoldRegion

    /**
     * Obtains iterators pointing to the start and end of the #TeplFoldRegion.
     */
    getBounds(): [ /* returnType */ boolean, /* start */ Gtk.TextIter, /* end */ Gtk.TextIter ]
    getBuffer(): Gtk.TextBuffer | null
    getFolded(): boolean
    /**
     * Sets the start and end of the #TeplFoldRegion.
     * @param start a #GtkTextIter.
     * @param end a #GtkTextIter.
     */
    setBounds(start: Gtk.TextIter, end: Gtk.TextIter): void
    /**
     * Folds or unfolds the region.
     * @param folded the new value.
     */
    setFolded(folded: boolean): void

    // Class property signals of Tepl-5.Tepl.FoldRegion

    connect(sigName: "notify::buffer", callback: any): number
    on(sigName: "notify::buffer", callback: any): number
    once(sigName: "notify::buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::folded", callback: any): number
    on(sigName: "notify::folded", callback: any): number
    once(sigName: "notify::folded", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::folded", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FoldRegion extends GObject.Object {

    // Own properties of Tepl-5.Tepl.FoldRegion

    static name: string

    // Constructors of Tepl-5.Tepl.FoldRegion

    constructor(config?: FoldRegion.ConstructorProperties) 
    constructor(buffer: Gtk.TextBuffer, start: Gtk.TextIter, end: Gtk.TextIter) 
    static new(buffer: Gtk.TextBuffer, start: Gtk.TextIter, end: Gtk.TextIter): FoldRegion
    _init(config?: FoldRegion.ConstructorProperties): void
}

export module GotoLineBar {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Grid.ConstructorProperties {
    }

}

export interface GotoLineBar extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own fields of Tepl-5.Tepl.GotoLineBar

    parent: Gtk.Grid & Gtk.Container
    priv: GotoLineBarPrivate

    // Owm methods of Tepl-5.Tepl.GotoLineBar

    /**
     * Calls gtk_widget_grab_focus() to the #GtkSearchEntry of `bar`.
     */
    grabFocusToEntry(): void
    /**
     * Sets the #TeplView. tepl_view_goto_line() will be called on `view` when the
     * user types a line number in the #GtkSearchEntry of `bar`.
     * 
     * Only one #TeplView can be associated per #TeplGotoLineBar.
     * @param view a #TeplView.
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

    // Class property signals of Tepl-5.Tepl.GotoLineBar

    connect(sigName: "notify::baseline-row", callback: any): number
    on(sigName: "notify::baseline-row", callback: any): number
    once(sigName: "notify::baseline-row", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: any): number
    on(sigName: "notify::column-homogeneous", callback: any): number
    once(sigName: "notify::column-homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: any): number
    on(sigName: "notify::column-spacing", callback: any): number
    once(sigName: "notify::column-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: any): number
    on(sigName: "notify::row-homogeneous", callback: any): number
    once(sigName: "notify::row-homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: any): number
    on(sigName: "notify::row-spacing", callback: any): number
    once(sigName: "notify::row-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
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

export class GotoLineBar extends Gtk.Grid {

    // Own properties of Tepl-5.Tepl.GotoLineBar

    static name: string

    // Constructors of Tepl-5.Tepl.GotoLineBar

    constructor(config?: GotoLineBar.ConstructorProperties) 
    constructor() 
    static new(): GotoLineBar

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    _init(config?: GotoLineBar.ConstructorProperties): void
}

export module GutterRendererFolds {

    // Constructor properties interface

    export interface ConstructorProperties extends GtkSource.GutterRenderer.ConstructorProperties {
    }

}

export interface GutterRendererFolds {

    // Own fields of Tepl-5.Tepl.GutterRendererFolds

    parentInstance: GtkSource.GutterRenderer

    // Owm methods of Tepl-5.Tepl.GutterRendererFolds

    /**
     * Sets the folding state of the next cell to be drawn.
     * 
     * This function is intended to be called from a subclass' draw method before
     * chaining-up to its parent's draw method.
     * @param state a #TeplGutterRendererFoldsState.
     */
    setState(state: GutterRendererFoldsState): void

    // Class property signals of Tepl-5.Tepl.GutterRendererFolds

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

export class GutterRendererFolds extends GtkSource.GutterRenderer {

    // Own properties of Tepl-5.Tepl.GutterRendererFolds

    static name: string

    // Constructors of Tepl-5.Tepl.GutterRendererFolds

    constructor(config?: GutterRendererFolds.ConstructorProperties) 
    constructor() 
    static new(): GutterRendererFolds
    _init(config?: GutterRendererFolds.ConstructorProperties): void
}

export module InfoBar {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.InfoBar.ConstructorProperties {
    }

}

export interface InfoBar extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parent: Gtk.Box & Gtk.Container & Gtk.Container

    // Own fields of Tepl-5.Tepl.InfoBar

    parentInstance: any

    // Owm methods of Tepl-5.Tepl.InfoBar

    /**
     * Calls gtk_info_bar_set_show_close_button(), and additionnally closes the
     * `info_bar` when the #GtkInfoBar::response signal is received with the
     * `response_id` %GTK_RESPONSE_CLOSE.
     */
    addCloseButton(): void
    /**
     * Adds `content` to `info_bar`.
     * 
     * #TeplInfoBar has an internal container, to be able to add the icon and add
     * primary or secondary messages. The internal container is added to the content
     * area, as returned by gtk_info_bar_get_content_area(). So if you use a
     * #TeplInfoBar and you need to add a custom #GtkWidget, it is better to use
     * this function instead of adding the #GtkWidget directly to the content area.
     * @param content a #GtkWidget.
     */
    addContentWidget(content: Gtk.Widget): void
    /**
     * Adds an icon on the left, determined by the message type. So before calling
     * this function, gtk_info_bar_set_message_type() must have been called.
     * 
     * The icon is not updated when the message type changes. Another #TeplInfoBar
     * must be created in that case.
     */
    addIcon(): void
    /**
     * Adds a primary message.
     * @param primaryMsg a primary message.
     */
    addPrimaryMessage(primaryMsg: string): void
    /**
     * Adds a secondary message.
     * @param secondaryMsg a secondary message.
     */
    addSecondaryMessage(secondaryMsg: string): void
    /**
     * Sets the desired orientation (horizontal or vertical) for the action area as
     * returned by gtk_info_bar_get_action_area(). The action area is where the
     * buttons are placed.
     * 
     * The default value for a #TeplInfoBar is %GTK_ORIENTATION_VERTICAL. The reason
     * is because with a small #GtkWindow, if 3 or more buttons are shown
     * horizontally, there is not enough space for the text. And it can be worse
     * when the button labels are translated to another language. When the buttons
     * are packed vertically, there is usually no problem. A vertical action area
     * also follows the original design of #GtkInfoBar.
     * @param buttonsOrientation the desired orientation.
     */
    setButtonsOrientation(buttonsOrientation: Gtk.Orientation): void

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

    // Class property signals of Tepl-5.Tepl.InfoBar

    connect(sigName: "notify::message-type", callback: any): number
    on(sigName: "notify::message-type", callback: any): number
    once(sigName: "notify::message-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::message-type", ...args: any[]): void
    connect(sigName: "notify::revealed", callback: any): number
    on(sigName: "notify::revealed", callback: any): number
    once(sigName: "notify::revealed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::revealed", ...args: any[]): void
    connect(sigName: "notify::show-close-button", callback: any): number
    on(sigName: "notify::show-close-button", callback: any): number
    once(sigName: "notify::show-close-button", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-close-button", ...args: any[]): void
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

export class InfoBar extends Gtk.InfoBar {

    // Own properties of Tepl-5.Tepl.InfoBar

    static name: string

    // Constructors of Tepl-5.Tepl.InfoBar

    constructor(config?: InfoBar.ConstructorProperties) 
    constructor() 
    static new(): InfoBar

    // Overloads of new

    /**
     * Creates a new #GtkInfoBar object.
     * @constructor 
     */
    static new(): Gtk.InfoBar
    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    /**
     * Creates a new #TeplInfoBar with an icon (depending on `msg_type)`, a primary
     * message and a secondary message.
     * @constructor 
     * @param msgType the message type.
     * @param primaryMsg the primary message.
     * @param secondaryMsg the secondary message, or %NULL.
     */
    static newSimple(msgType: Gtk.MessageType, primaryMsg: string, secondaryMsg: string | null): InfoBar
    _init(config?: InfoBar.ConstructorProperties): void
    /**
     * Utility function to create a #GtkLabel suitable for a #GtkInfoBar. The
     * wrapping and alignment is configured. The label is also set as selectable,
     * for example to copy an error message and search an explanation on the web.
     */
    static createLabel(): Gtk.Label
}

export module LanguageChooserDialog {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, LanguageChooser.ConstructorProperties, Gtk.Dialog.ConstructorProperties {
    }

}

export interface LanguageChooserDialog extends Atk.ImplementorIface, Gtk.Buildable, LanguageChooser {

    // Conflicting properties

    readonly window: Gtk.Window & Gdk.Window & Gdk.Window

    // Own fields of Tepl-5.Tepl.LanguageChooserDialog

    parent: Gtk.Dialog & Gtk.Container
    priv: any

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
    close(): void

    // Overloads of close

    /**
     * Requests that the window is closed, similar to what happens
     * when a window manager close button is clicked.
     * 
     * This function can be used with close buttons in custom
     * titlebars.
     */
    close(): void
    /**
     * Requests that the window is closed, similar to what happens
     * when a window manager close button is clicked.
     * 
     * This function can be used with close buttons in custom
     * titlebars.
     */
    close(): void
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

    // Class property signals of Tepl-5.Tepl.LanguageChooserDialog

    connect(sigName: "notify::use-header-bar", callback: any): number
    on(sigName: "notify::use-header-bar", callback: any): number
    once(sigName: "notify::use-header-bar", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
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

export class LanguageChooserDialog extends Gtk.Dialog {

    // Own properties of Tepl-5.Tepl.LanguageChooserDialog

    static name: string

    // Constructors of Tepl-5.Tepl.LanguageChooserDialog

    constructor(config?: LanguageChooserDialog.ConstructorProperties) 
    constructor(parent: Gtk.Window | null) 
    static new(parent: Gtk.Window | null): LanguageChooserDialog

    // Overloads of new

    /**
     * Creates a new dialog box.
     * 
     * Widgets should not be packed into this #GtkWindow
     * directly, but into the `vbox` and `action_area,` as described above.
     * @constructor 
     */
    static new(): Gtk.Dialog
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
    _init(config?: LanguageChooserDialog.ConstructorProperties): void
}

export module LanguageChooserWidget {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, LanguageChooser.ConstructorProperties, Gtk.Grid.ConstructorProperties {
    }

}

export interface LanguageChooserWidget extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, LanguageChooser {

    // Own fields of Tepl-5.Tepl.LanguageChooserWidget

    parent: Gtk.Grid & Gtk.Container
    priv: LanguageChooserWidgetPrivate

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

    // Class property signals of Tepl-5.Tepl.LanguageChooserWidget

    connect(sigName: "notify::baseline-row", callback: any): number
    on(sigName: "notify::baseline-row", callback: any): number
    once(sigName: "notify::baseline-row", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: any): number
    on(sigName: "notify::column-homogeneous", callback: any): number
    once(sigName: "notify::column-homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: any): number
    on(sigName: "notify::column-spacing", callback: any): number
    once(sigName: "notify::column-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: any): number
    on(sigName: "notify::row-homogeneous", callback: any): number
    once(sigName: "notify::row-homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: any): number
    on(sigName: "notify::row-spacing", callback: any): number
    once(sigName: "notify::row-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
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

export class LanguageChooserWidget extends Gtk.Grid {

    // Own properties of Tepl-5.Tepl.LanguageChooserWidget

    static name: string

    // Constructors of Tepl-5.Tepl.LanguageChooserWidget

    constructor(config?: LanguageChooserWidget.ConstructorProperties) 
    constructor() 
    static new(): LanguageChooserWidget

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    _init(config?: LanguageChooserWidget.ConstructorProperties): void
}

export module Metadata {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Metadata {

    // Own fields of Tepl-5.Tepl.Metadata

    parent: GObject.Object
    priv: MetadataPrivate

    // Owm methods of Tepl-5.Tepl.Metadata

    /**
     * Gets the value of a metadata stored in the `metadata` object memory.
     * 
     * `key` must follow [the requirements explained in the class
     * description][tepl-metadata-keys-requirements].
     * @param key a key.
     */
    get(key: string): string | null
    /**
     * Sets or unsets `key`. This function just stores the new metadata value in the
     * `metadata` object memory.
     * 
     * `key` must follow [the requirements explained in the class
     * description][tepl-metadata-keys-requirements].
     * @param key a key.
     * @param value a nul-terminated UTF-8 string, or %NULL to unset the key.
     */
    set(key: string, value: string | null): void

    // Class property signals of Tepl-5.Tepl.Metadata

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Metadata extends GObject.Object {

    // Own properties of Tepl-5.Tepl.Metadata

    static name: string

    // Constructors of Tepl-5.Tepl.Metadata

    constructor(config?: Metadata.ConstructorProperties) 
    constructor() 
    static new(): Metadata
    _init(config?: Metadata.ConstructorProperties): void
}

export module MetadataManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MetadataManager {

    // Own fields of Tepl-5.Tepl.MetadataManager

    parent: GObject.Object
    priv: MetadataManagerPrivate

    // Owm methods of Tepl-5.Tepl.MetadataManager

    /**
     * Copies the metadata stored in `from_manager` for `for_location` into
     * `to_metadata`.
     * 
     * If `to_metadata` already contains a key that is also present in `from_manager,`
     * the value in `to_metadata` is overwritten.
     * 
     * If `to_metadata` already contains a key that is not present in `from_manager,`
     * the key/value pair is kept in `to_metadata,` it is not erased.
     * @param forLocation a #GFile.
     * @param toMetadata a #TeplMetadata.
     */
    copyFrom(forLocation: Gio.File, toMetadata: Metadata): void
    /**
     * Loads synchronously all the metadata from `from_file` into `manager`.
     * 
     * A good moment to call this function is on application startup, see the
     * #GApplication::startup signal.
     * @param fromFile the #GFile to load metadata from.
     */
    loadFromDisk(fromFile: Gio.File): boolean
    /**
     * Merges the metadata from `from_metadata` into `into_manager` for `for_location`.
     * 
     * If a key from `from_metadata` has been set to %NULL, the key/value pair is
     * removed from `into_manager`. In other words that key/value pair will not be
     * saved at all when calling tepl_metadata_manager_save_to_disk().
     * 
     * If `into_manager` already contains a key that is not present in
     * `from_metadata,` the key/value pair is kept in `into_manager,` it is not
     * erased.
     * @param forLocation a #GFile.
     * @param fromMetadata a #TeplMetadata.
     */
    mergeInto(forLocation: Gio.File, fromMetadata: Metadata): void
    /**
     * Saves synchronously all the metadata from `manager` to `to_file`. The parent
     * directories of `to_file` are created if needed.
     * 
     * A good moment to call this function is on application shutdown, see the
     * #GApplication::shutdown signal.
     * @param toFile the #GFile to save metadata to.
     * @param trim if %TRUE, tepl_metadata_manager_trim() is called with -1.
     */
    saveToDisk(toFile: Gio.File, trim: boolean): boolean
    /**
     * The purpose of having a maximum size is to avoid that the file on disk grows
     * indefinitely.
     * 
     * `max_number_of_locations` is the maximum number of #GFile locations for which
     * metadata are kept. This function discards the least recently accessed
     * metadata if needed.
     * 
     * If `max_number_of_locations` is -1, a default internal value is used that
     * should fit most applications' needs.
     * @param maxNumberOfLocations the maximum size, or -1 for the default value.
     */
    trim(maxNumberOfLocations: number): void

    // Class property signals of Tepl-5.Tepl.MetadataManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MetadataManager extends GObject.Object {

    // Own properties of Tepl-5.Tepl.MetadataManager

    static name: string

    // Constructors of Tepl-5.Tepl.MetadataManager

    constructor(config?: MetadataManager.ConstructorProperties) 
    _init(config?: MetadataManager.ConstructorProperties): void
    static getSingleton(): MetadataManager
}

export module Notebook {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, TabGroup.ConstructorProperties, Gtk.Notebook.ConstructorProperties {
    }

}

export interface Notebook extends Atk.ImplementorIface, Gtk.Buildable, TabGroup {

    // Own fields of Tepl-5.Tepl.Notebook

    parent: Gtk.Notebook & Gtk.Container
    priv: NotebookPrivate

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

    // Class property signals of Tepl-5.Tepl.Notebook

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
    connect(sigName: "notify::tab-pos", callback: any): number
    on(sigName: "notify::tab-pos", callback: any): number
    once(sigName: "notify::tab-pos", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tab-pos", ...args: any[]): void
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
    connect(sigName: "notify::active-buffer", callback: any): number
    on(sigName: "notify::active-buffer", callback: any): number
    once(sigName: "notify::active-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active-buffer", ...args: any[]): void
    connect(sigName: "notify::active-tab", callback: any): number
    on(sigName: "notify::active-tab", callback: any): number
    once(sigName: "notify::active-tab", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active-tab", ...args: any[]): void
    connect(sigName: "notify::active-view", callback: any): number
    on(sigName: "notify::active-view", callback: any): number
    once(sigName: "notify::active-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Notebook extends Gtk.Notebook {

    // Own properties of Tepl-5.Tepl.Notebook

    static name: string

    // Constructors of Tepl-5.Tepl.Notebook

    constructor(config?: Notebook.ConstructorProperties) 
    constructor() 
    static new(): Notebook
    _init(config?: Notebook.ConstructorProperties): void
}

export module Panel {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Grid.ConstructorProperties {
    }

}

export interface Panel extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own fields of Tepl-5.Tepl.Panel

    parent: Gtk.Grid & Gtk.Container
    priv: PanelPrivate

    // Owm methods of Tepl-5.Tepl.Panel

    /**
     * The equivalent of gtk_stack_add_titled(), with an optional `icon_name` to set
     * the “icon-name” #GtkStack child property.
     * @param component the child #GtkWidget to add to the #GtkStack of `panel`.
     * @param name the name for `component`.
     * @param title a human-readable title for `component`.
     * @param iconName the icon name for `component,` or %NULL.
     */
    addComponent(component: Gtk.Widget, name: string, title: string, iconName: string | null): void
    getStack(): Gtk.Stack
    /**
     * Provides a #GSettings key for saving and restoring the
     * #GtkStack:visible-child-name property of the #GtkStack belonging to `panel`.
     * 
     * This function just stores `settings` and `setting_key` for further use by
     * tepl_panel_restore_state_from_gsettings() and
     * tepl_panel_save_state_to_gsettings().
     * 
     * Note that only one `settings/``setting_key` pair is stored by `panel` for
     * further use, if you call this function twice on the same `panel,` the second
     * call overrides the first one.
     * @param settings a #GSettings object.
     * @param settingKey a #GSettings key of type string.
     */
    provideActiveComponentGsetting(settings: Gio.Settings, settingKey: string): void
    /**
     * Restores the state of `panel` according to the provided #GSettings.
     * 
     * This function must be called when all components have been added to the
     * #GtkStack of `panel`.
     */
    restoreStateFromGsettings(): void
    /**
     * Saves the current state of `panel` to the provided #GSettings.
     */
    saveStateToGsettings(): void

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

    // Class property signals of Tepl-5.Tepl.Panel

    connect(sigName: "notify::baseline-row", callback: any): number
    on(sigName: "notify::baseline-row", callback: any): number
    once(sigName: "notify::baseline-row", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: any): number
    on(sigName: "notify::column-homogeneous", callback: any): number
    once(sigName: "notify::column-homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: any): number
    on(sigName: "notify::column-spacing", callback: any): number
    once(sigName: "notify::column-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: any): number
    on(sigName: "notify::row-homogeneous", callback: any): number
    once(sigName: "notify::row-homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: any): number
    on(sigName: "notify::row-spacing", callback: any): number
    once(sigName: "notify::row-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
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

export class Panel extends Gtk.Grid {

    // Own properties of Tepl-5.Tepl.Panel

    static name: string

    // Constructors of Tepl-5.Tepl.Panel

    constructor(config?: Panel.ConstructorProperties) 
    /**
     * Creates a new #TeplPanel containing only an empty #GtkStack that can be
     * retrieved with tepl_panel_get_stack().
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #TeplPanel containing only an empty #GtkStack that can be
     * retrieved with tepl_panel_get_stack().
     * @constructor 
     */
    static new(): Panel

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    /**
     * Creates a new #TeplPanel intended to be used as a side panel added on the
     * left side inside a #GtkWindow.
     * 
     * It contains:
     * - A #GtkStackSwitcher.
     * - A close button that hides the #TeplPanel when clicked.
     * - A #GtkStack that can be retrieved with tepl_panel_get_stack().
     * @constructor 
     */
    static newForLeftSidePanel(): Panel
    _init(config?: Panel.ConstructorProperties): void
}

export module SpaceDrawerPrefs {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Grid.ConstructorProperties {
    }

}

export interface SpaceDrawerPrefs extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own fields of Tepl-5.Tepl.SpaceDrawerPrefs

    parent: Gtk.Grid & Gtk.Container
    priv: SpaceDrawerPrefsPrivate

    // Owm methods of Tepl-5.Tepl.SpaceDrawerPrefs

    /**
     * Gets the #GtkSourceSpaceDrawer associated with `prefs`. The returned object is
     * guaranteed to be the same for the lifetime of `prefs`. Each
     * #TeplSpaceDrawerPrefs object has a different #GtkSourceSpaceDrawer.
     */
    getSpaceDrawer(): GtkSource.SpaceDrawer

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

    // Class property signals of Tepl-5.Tepl.SpaceDrawerPrefs

    connect(sigName: "notify::baseline-row", callback: any): number
    on(sigName: "notify::baseline-row", callback: any): number
    once(sigName: "notify::baseline-row", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: any): number
    on(sigName: "notify::column-homogeneous", callback: any): number
    once(sigName: "notify::column-homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: any): number
    on(sigName: "notify::column-spacing", callback: any): number
    once(sigName: "notify::column-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: any): number
    on(sigName: "notify::row-homogeneous", callback: any): number
    once(sigName: "notify::row-homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: any): number
    on(sigName: "notify::row-spacing", callback: any): number
    once(sigName: "notify::row-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
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

export class SpaceDrawerPrefs extends Gtk.Grid {

    // Own properties of Tepl-5.Tepl.SpaceDrawerPrefs

    static name: string

    // Constructors of Tepl-5.Tepl.SpaceDrawerPrefs

    constructor(config?: SpaceDrawerPrefs.ConstructorProperties) 
    constructor() 
    static new(): SpaceDrawerPrefs

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    _init(config?: SpaceDrawerPrefs.ConstructorProperties): void
}

export module Statusbar {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Statusbar.ConstructorProperties {
    }

}

export interface Statusbar extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own fields of Tepl-5.Tepl.Statusbar

    parent: Gtk.Statusbar & Gtk.Container
    priv: StatusbarPrivate

    // Owm methods of Tepl-5.Tepl.Statusbar

    /**
     * The reverse action of tepl_statusbar_show_cursor_position(). This function
     * hides the text used to show the line and column numbers.
     */
    hideCursorPosition(): void
    /**
     * Calls tepl_statusbar_show_cursor_position() and
     * tepl_statusbar_hide_cursor_position() according to the
     * #TeplTabGroup:active-view of `tab_group,` and the
     * #TeplBuffer::tepl-cursor-moved signal.
     * 
     * For the column number it uses the gtk_source_view_get_visual_column()
     * function.
     * 
     * This function can be called only once, it is not possible to change the
     * #TeplTabGroup afterwards (this restriction may be lifted in the future if
     * there is a compelling use-case).
     * @param tabGroup a #TeplTabGroup.
     */
    setTabGroup(tabGroup: TabGroup): void
    /**
     * Shows the line and column numbers on the right side of the `statusbar`. (So
     * messages added with gtk_statusbar_push() are still visible after calling this
     * function).
     * @param line the line number, must be >= 1.
     * @param column the column number, must be >= 1.
     */
    showCursorPosition(line: number, column: number): void

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
     * Forces the removal of a message from a statusbar’s stack.
     * The exact `context_id` and `message_id` must be specified.
     * @param contextId a context identifier
     * @param messageId a message identifier, as returned by gtk_statusbar_push()
     */
    remove(contextId: number, messageId: number): void

    // Overloads of remove

    /**
     * Removes `widget` from `container`. `widget` must be inside `container`.
     * Note that `container` will own a reference to `widget,` and that this
     * may be the last reference held; so removing a widget from its
     * container can destroy that widget. If you want to use `widget`
     * again, you need to add a reference to it before removing it from
     * a container, using g_object_ref(). If you don’t want to use `widget`
     * again it’s usually more efficient to simply destroy it directly
     * using gtk_widget_destroy() since this will remove it from the
     * container and help break any circular reference count cycles.
     * @virtual 
     * @param widget a current child of `container`
     */
    remove(widget: Gtk.Widget): void
    /**
     * Removes `widget` from `container`. `widget` must be inside `container`.
     * Note that `container` will own a reference to `widget,` and that this
     * may be the last reference held; so removing a widget from its
     * container can destroy that widget. If you want to use `widget`
     * again, you need to add a reference to it before removing it from
     * a container, using g_object_ref(). If you don’t want to use `widget`
     * again it’s usually more efficient to simply destroy it directly
     * using gtk_widget_destroy() since this will remove it from the
     * container and help break any circular reference count cycles.
     * @virtual 
     * @param widget a current child of `container`
     */
    remove(widget: Gtk.Widget): void
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

    // Class property signals of Tepl-5.Tepl.Statusbar

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

export class Statusbar extends Gtk.Statusbar {

    // Own properties of Tepl-5.Tepl.Statusbar

    static name: string

    // Constructors of Tepl-5.Tepl.Statusbar

    constructor(config?: Statusbar.ConstructorProperties) 
    constructor() 
    static new(): Statusbar

    // Overloads of new

    /**
     * Creates a new #GtkStatusbar ready for messages.
     * @constructor 
     */
    static new(): Gtk.Statusbar
    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: Statusbar.ConstructorProperties): void
}

export module StyleSchemeChooserWidget {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, GtkSource.StyleSchemeChooser.ConstructorProperties, Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Tepl-5.Tepl.StyleSchemeChooserWidget

        /**
         * The #GtkSourceStyleSchemeChooser:style-scheme ID, as a string. This
         * property is useful for binding it to a #GSettings key.
         * 
         * When the #GtkSourceStyleSchemeChooser:style-scheme is %NULL, this
         * property contains the empty string.
         */
        teplStyleSchemeId?: string | null
    }

}

export interface StyleSchemeChooserWidget extends Atk.ImplementorIface, Gtk.Buildable, GtkSource.StyleSchemeChooser {

    // Own properties of Tepl-5.Tepl.StyleSchemeChooserWidget

    /**
     * The #GtkSourceStyleSchemeChooser:style-scheme ID, as a string. This
     * property is useful for binding it to a #GSettings key.
     * 
     * When the #GtkSourceStyleSchemeChooser:style-scheme is %NULL, this
     * property contains the empty string.
     */
    teplStyleSchemeId: string

    // Own fields of Tepl-5.Tepl.StyleSchemeChooserWidget

    parent: Gtk.Bin & Gtk.Container
    priv: StyleSchemeChooserWidgetPrivate

    // Owm methods of Tepl-5.Tepl.StyleSchemeChooserWidget

    getStyleSchemeId(): string
    /**
     * Sets the #TeplStyleSchemeChooserWidget:tepl-style-scheme-id property.
     * 
     * The #GtkSourceStyleScheme is taken from the default
     * #GtkSourceStyleSchemeManager as returned by
     * gtk_source_style_scheme_manager_get_default().
     * @param styleSchemeId the new value.
     */
    setStyleSchemeId(styleSchemeId: string): void

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

    // Class property signals of Tepl-5.Tepl.StyleSchemeChooserWidget

    connect(sigName: "notify::tepl-style-scheme-id", callback: any): number
    on(sigName: "notify::tepl-style-scheme-id", callback: any): number
    once(sigName: "notify::tepl-style-scheme-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tepl-style-scheme-id", ...args: any[]): void
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

    // Own properties of Tepl-5.Tepl.StyleSchemeChooserWidget

    static name: string

    // Constructors of Tepl-5.Tepl.StyleSchemeChooserWidget

    constructor(config?: StyleSchemeChooserWidget.ConstructorProperties) 
    constructor() 
    static new(): StyleSchemeChooserWidget
    _init(config?: StyleSchemeChooserWidget.ConstructorProperties): void
}

export module Tab {

    // Signal callback interfaces

    /**
     * Signal callback interface for `close-request`
     */
    export interface CloseRequestSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, TabGroup.ConstructorProperties, Gtk.Grid.ConstructorProperties {

        // Own constructor properties of Tepl-5.Tepl.Tab

        /**
         * The #TeplView contained in the tab. When this property is set, the
         * ::pack_view virtual function is called.
         */
        view?: View | null
    }

}

export interface Tab extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, TabGroup {

    // Own properties of Tepl-5.Tepl.Tab

    /**
     * The #TeplView contained in the tab. When this property is set, the
     * ::pack_view virtual function is called.
     */
    readonly view: View

    // Own fields of Tepl-5.Tepl.Tab

    parent: Gtk.Grid & Gtk.Container
    priv: TabPrivate

    // Owm methods of Tepl-5.Tepl.Tab

    /**
     * Attaches `info_bar` to `tab`.
     * 
     * This function calls the ::pack_info_bar virtual function.
     * @param infoBar a #GtkInfoBar.
     */
    addInfoBar(infoBar: Gtk.InfoBar): void
    /**
     * A convenience function that calls gtk_text_view_get_buffer() on the
     * #TeplTab:view associated with the `tab`.
     */
    getBuffer(): Buffer
    /**
     * Gets the #TeplGotoLineBar widget belonging to `tab`. The #TeplGotoLineBar must
     * not be destroyed by the application, the purpose of this function is to
     * show/hide the widget.
     */
    getGotoLineBar(): GotoLineBar
    getView(): View
    /**
     * Unconditionally loads a file in `tab,` regardless if there are unsaved changes
     * in the #GtkTextBuffer. The previous buffer content is lost.
     * 
     * This function is asynchronous, there is no way to know when the file loading
     * is finished.
     * @param location a #GFile.
     */
    loadFile(location: Gio.File): void
    /**
     * Shows a #GtkFileChooser to save the `tab` to a different location, creates an
     * appropriate #TeplFileSaver and asynchronously runs it.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
     */
    saveAsAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * The same as tepl_tab_save_as_async(), but without callback.
     * 
     * This function is useful when you don't need to know:
     * - when the operation is finished;
     * - and whether the operation ran successfully.
     */
    saveAsAsyncSimple(): void
    /**
     * Finishes a tab saving started with tepl_tab_save_as_async().
     * @param result a #GAsyncResult.
     */
    saveAsFinish(result: Gio.AsyncResult): boolean
    /**
     * Saves asynchronously the content of the `tab`. The #TeplFile:location must not
     * be %NULL.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
     */
    saveAsync(callback: Gio.AsyncReadyCallback | null): void
    /**
     * The same as tepl_tab_save_async(), but without callback.
     * 
     * This function is useful when you don't need to know:
     * - when the operation is finished;
     * - and whether the operation ran successfully.
     */
    saveAsyncSimple(): void
    /**
     * Finishes a tab saving started with tepl_tab_save_async().
     * @param result a #GAsyncResult.
     */
    saveFinish(result: Gio.AsyncResult): boolean

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

    // Own virtual methods of Tepl-5.Tepl.Tab

    closeRequest(): void
    packGotoLineBar(gotoLineBar: GotoLineBar): void
    packInfoBar(infoBar: Gtk.InfoBar): void
    packView(view: View): void

    // Own signals of Tepl-5.Tepl.Tab

    connect(sigName: "close-request", callback: Tab.CloseRequestSignalCallback): number
    on(sigName: "close-request", callback: Tab.CloseRequestSignalCallback): number
    once(sigName: "close-request", callback: Tab.CloseRequestSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "close-request", ...args: any[]): void

    // Class property signals of Tepl-5.Tepl.Tab

    connect(sigName: "notify::view", callback: any): number
    on(sigName: "notify::view", callback: any): number
    once(sigName: "notify::view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: "notify::baseline-row", callback: any): number
    on(sigName: "notify::baseline-row", callback: any): number
    once(sigName: "notify::baseline-row", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: any): number
    on(sigName: "notify::column-homogeneous", callback: any): number
    once(sigName: "notify::column-homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: any): number
    on(sigName: "notify::column-spacing", callback: any): number
    once(sigName: "notify::column-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: any): number
    on(sigName: "notify::row-homogeneous", callback: any): number
    once(sigName: "notify::row-homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: any): number
    on(sigName: "notify::row-spacing", callback: any): number
    once(sigName: "notify::row-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
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
    connect(sigName: "notify::active-buffer", callback: any): number
    on(sigName: "notify::active-buffer", callback: any): number
    once(sigName: "notify::active-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active-buffer", ...args: any[]): void
    connect(sigName: "notify::active-tab", callback: any): number
    on(sigName: "notify::active-tab", callback: any): number
    once(sigName: "notify::active-tab", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active-tab", ...args: any[]): void
    connect(sigName: "notify::active-view", callback: any): number
    on(sigName: "notify::active-view", callback: any): number
    once(sigName: "notify::active-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Tab extends Gtk.Grid {

    // Own properties of Tepl-5.Tepl.Tab

    static name: string

    // Constructors of Tepl-5.Tepl.Tab

    constructor(config?: Tab.ConstructorProperties) 
    /**
     * Creates a new #TeplTab with a new #TeplView. The new #TeplView can be
     * retrieved afterwards with tepl_tab_get_view().
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #TeplTab with a new #TeplView. The new #TeplView can be
     * retrieved afterwards with tepl_tab_get_view().
     * @constructor 
     */
    static new(): Tab

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    static newWithView(view: View): Tab
    _init(config?: Tab.ConstructorProperties): void
}

export module TabLabel {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Grid.ConstructorProperties {

        // Own constructor properties of Tepl-5.Tepl.TabLabel

        /**
         * The associated #TeplTab. #TeplTabLabel has a weak reference to the
         * #TeplTab.
         */
        tab?: Tab | null
    }

}

export interface TabLabel extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Tepl-5.Tepl.TabLabel

    /**
     * The associated #TeplTab. #TeplTabLabel has a weak reference to the
     * #TeplTab.
     */
    readonly tab: Tab

    // Own fields of Tepl-5.Tepl.TabLabel

    parent: Gtk.Grid & Gtk.Container
    priv: TabLabelPrivate

    // Owm methods of Tepl-5.Tepl.TabLabel

    getTab(): Tab | null
    /**
     * Asks #TeplTabLabel to update its tooltip. The ::get_tooltip_markup virtual
     * function is called and the result is set with
     * gtk_widget_set_tooltip_markup().
     */
    updateTooltip(): void

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

    // Own virtual methods of Tepl-5.Tepl.TabLabel

    getTooltipMarkup(): string

    // Overloads of getTooltipMarkup

    /**
     * Gets the contents of the tooltip for `widget`.
     */
    getTooltipMarkup(): string | null

    // Class property signals of Tepl-5.Tepl.TabLabel

    connect(sigName: "notify::tab", callback: any): number
    on(sigName: "notify::tab", callback: any): number
    once(sigName: "notify::tab", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tab", ...args: any[]): void
    connect(sigName: "notify::baseline-row", callback: any): number
    on(sigName: "notify::baseline-row", callback: any): number
    once(sigName: "notify::baseline-row", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: any): number
    on(sigName: "notify::column-homogeneous", callback: any): number
    once(sigName: "notify::column-homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: any): number
    on(sigName: "notify::column-spacing", callback: any): number
    once(sigName: "notify::column-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: any): number
    on(sigName: "notify::row-homogeneous", callback: any): number
    once(sigName: "notify::row-homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: any): number
    on(sigName: "notify::row-spacing", callback: any): number
    once(sigName: "notify::row-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
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

export class TabLabel extends Gtk.Grid {

    // Own properties of Tepl-5.Tepl.TabLabel

    static name: string

    // Constructors of Tepl-5.Tepl.TabLabel

    constructor(config?: TabLabel.ConstructorProperties) 
    constructor(tab: Tab) 
    static new(tab: Tab): TabLabel

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    _init(config?: TabLabel.ConstructorProperties): void
}

export module View {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, GtkSource.View.ConstructorProperties {
    }

}

export interface View extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Conflicting properties

    parent: Gtk.TextView & Gtk.Container & Gtk.Container

    // Own fields of Tepl-5.Tepl.View

    parentInstance: any

    // Owm methods of Tepl-5.Tepl.View

    /**
     * Copies the clipboard.
     */
    copyClipboard(): void

    // Overloads of copyClipboard

    copyClipboard(): void
    /**
     * Cuts the clipboard and then scrolls to the cursor position.
     */
    cutClipboard(): void

    // Overloads of cutClipboard

    cutClipboard(): void
    /**
     * Deletes the text currently selected in the #GtkTextBuffer associated
     * to the view and then scrolls to the cursor position.
     */
    deleteSelection(): void
    /**
     * Places the cursor at the position returned by
     * gtk_text_buffer_get_iter_at_line(), and scrolls to that position.
     * @param line a line number, counting from 0.
     */
    gotoLine(line: number): boolean
    /**
     * Places the cursor at the position returned by
     * gtk_text_buffer_get_iter_at_line_offset(), and scrolls to that position.
     * @param line a line number, counting from 0.
     * @param lineOffset the line offset, in characters (not bytes).
     */
    gotoLineOffset(line: number, lineOffset: number): boolean
    /**
     * Pastes the clipboard and then scrolls to the cursor position.
     */
    pasteClipboard(): void

    // Overloads of pasteClipboard

    pasteClipboard(): void
    /**
     * Scrolls the `view` to the cursor position.
     */
    scrollToCursor(): void
    /**
     * Selects all the text.
     */
    selectAll(): void
    /**
     * Selects the lines between `start_line` and `end_line` included, counting from
     * zero. And then scrolls to the cursor.
     * 
     * Possible use-case: line numbers coming from a compilation output, to go to
     * the place where a warning or error occurred.
     * @param startLine start of the region to select.
     * @param endLine end of the region to select.
     */
    selectLines(startLine: number, endLine: number): void

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

    // Class property signals of Tepl-5.Tepl.View

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

export class View extends GtkSource.View {

    // Own properties of Tepl-5.Tepl.View

    static name: string

    // Constructors of Tepl-5.Tepl.View

    constructor(config?: View.ConstructorProperties) 
    /**
     * Creates a new #TeplView.
     * 
     * By default, an empty #TeplBuffer will be lazily created and can be retrieved
     * with gtk_text_view_get_buffer().
     * 
     * If you want to specify your own buffer, either override the
     * #GtkTextViewClass create_buffer factory method, or use
     * tepl_view_new_with_buffer().
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #TeplView.
     * 
     * By default, an empty #TeplBuffer will be lazily created and can be retrieved
     * with gtk_text_view_get_buffer().
     * 
     * If you want to specify your own buffer, either override the
     * #GtkTextViewClass create_buffer factory method, or use
     * tepl_view_new_with_buffer().
     * @constructor 
     */
    static new(): View
    /**
     * Creates a new #TeplView widget displaying the buffer `buffer`.
     * @constructor 
     * @param buffer a #GtkSourceBuffer or a subclass of it.
     */
    static newWithBuffer(buffer: GtkSource.Buffer): View

    // Overloads of newWithBuffer

    /**
     * Creates a new #GtkSourceView widget displaying the buffer
     * `buffer`. One buffer can be shared among many widgets.
     * @constructor 
     * @param buffer a #GtkSourceBuffer.
     */
    static newWithBuffer(buffer: GtkSource.Buffer): GtkSource.View
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

export interface AbstractFactoryClass {

    // Own fields of Tepl-5.Tepl.AbstractFactoryClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
    createMainWindow: (factory: AbstractFactory, app: Gtk.Application) => Gtk.ApplicationWindow | null
    createTab: (factory: AbstractFactory) => Tab
    createTabLabel: (factory: AbstractFactory, tab: Tab) => Gtk.Widget | null
    createFile: (factory: AbstractFactory) => File
    createMetadataManagerFile: (factory: AbstractFactory) => Gio.File | null
}

export abstract class AbstractFactoryClass {

    // Own properties of Tepl-5.Tepl.AbstractFactoryClass

    static name: string
}

export interface ApplicationClass {

    // Own fields of Tepl-5.Tepl.ApplicationClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class ApplicationClass {

    // Own properties of Tepl-5.Tepl.ApplicationClass

    static name: string
}

export interface ApplicationPrivate {
}

export class ApplicationPrivate {

    // Own properties of Tepl-5.Tepl.ApplicationPrivate

    static name: string
}

export interface ApplicationWindowClass {

    // Own fields of Tepl-5.Tepl.ApplicationWindowClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class ApplicationWindowClass {

    // Own properties of Tepl-5.Tepl.ApplicationWindowClass

    static name: string
}

export interface ApplicationWindowPrivate {
}

export class ApplicationWindowPrivate {

    // Own properties of Tepl-5.Tepl.ApplicationWindowPrivate

    static name: string
}

export interface BufferClass {

    // Own fields of Tepl-5.Tepl.BufferClass

    parentClass: GtkSource.BufferClass
    teplCursorMoved: (buffer: Buffer) => void
    padding: object[]
}

export abstract class BufferClass {

    // Own properties of Tepl-5.Tepl.BufferClass

    static name: string
}

export interface FileClass {

    // Own fields of Tepl-5.Tepl.FileClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class FileClass {

    // Own properties of Tepl-5.Tepl.FileClass

    static name: string
}

export interface FileLoaderClass {

    // Own fields of Tepl-5.Tepl.FileLoaderClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class FileLoaderClass {

    // Own properties of Tepl-5.Tepl.FileLoaderClass

    static name: string
}

export interface FileLoaderPrivate {
}

export class FileLoaderPrivate {

    // Own properties of Tepl-5.Tepl.FileLoaderPrivate

    static name: string
}

export interface FilePrivate {
}

export class FilePrivate {

    // Own properties of Tepl-5.Tepl.FilePrivate

    static name: string
}

export interface FileSaverClass {

    // Own fields of Tepl-5.Tepl.FileSaverClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class FileSaverClass {

    // Own properties of Tepl-5.Tepl.FileSaverClass

    static name: string
}

export interface FileSaverPrivate {
}

export class FileSaverPrivate {

    // Own properties of Tepl-5.Tepl.FileSaverPrivate

    static name: string
}

export interface FoldRegionClass {

    // Own fields of Tepl-5.Tepl.FoldRegionClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class FoldRegionClass {

    // Own properties of Tepl-5.Tepl.FoldRegionClass

    static name: string
}

export interface GotoLineBarClass {

    // Own fields of Tepl-5.Tepl.GotoLineBarClass

    parentClass: Gtk.GridClass
    padding: object[]
}

export abstract class GotoLineBarClass {

    // Own properties of Tepl-5.Tepl.GotoLineBarClass

    static name: string
}

export interface GotoLineBarPrivate {
}

export class GotoLineBarPrivate {

    // Own properties of Tepl-5.Tepl.GotoLineBarPrivate

    static name: string
}

export interface GutterRendererFoldsClass {

    // Own fields of Tepl-5.Tepl.GutterRendererFoldsClass

    parentClass: GtkSource.GutterRendererClass
    padding: object[]
}

export abstract class GutterRendererFoldsClass {

    // Own properties of Tepl-5.Tepl.GutterRendererFoldsClass

    static name: string
}

export interface InfoBarClass {

    // Own fields of Tepl-5.Tepl.InfoBarClass

    parentClass: Gtk.InfoBarClass
    padding: object[]
}

export abstract class InfoBarClass {

    // Own properties of Tepl-5.Tepl.InfoBarClass

    static name: string
}

export interface LanguageChooserDialogClass {

    // Own fields of Tepl-5.Tepl.LanguageChooserDialogClass

    parentClass: Gtk.DialogClass
    padding: object[]
}

export abstract class LanguageChooserDialogClass {

    // Own properties of Tepl-5.Tepl.LanguageChooserDialogClass

    static name: string
}

export interface LanguageChooserDialogPrivate {
}

export class LanguageChooserDialogPrivate {

    // Own properties of Tepl-5.Tepl.LanguageChooserDialogPrivate

    static name: string
}

export interface LanguageChooserInterface {

    // Own fields of Tepl-5.Tepl.LanguageChooserInterface

    /**
     * The parent interface.
     * @field 
     */
    parentInterface: GObject.TypeInterface
    selectLanguage: (chooser: LanguageChooser, language: GtkSource.Language | null) => void
    languageActivated: (chooser: LanguageChooser, language: GtkSource.Language) => void
}

/**
 * The virtual function table for #TeplLanguageChooser.
 * @record 
 */
export abstract class LanguageChooserInterface {

    // Own properties of Tepl-5.Tepl.LanguageChooserInterface

    static name: string
}

export interface LanguageChooserWidgetClass {

    // Own fields of Tepl-5.Tepl.LanguageChooserWidgetClass

    parentClass: Gtk.GridClass
    padding: object[]
}

export abstract class LanguageChooserWidgetClass {

    // Own properties of Tepl-5.Tepl.LanguageChooserWidgetClass

    static name: string
}

export interface LanguageChooserWidgetPrivate {
}

export class LanguageChooserWidgetPrivate {

    // Own properties of Tepl-5.Tepl.LanguageChooserWidgetPrivate

    static name: string
}

export interface MetadataClass {

    // Own fields of Tepl-5.Tepl.MetadataClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class MetadataClass {

    // Own properties of Tepl-5.Tepl.MetadataClass

    static name: string
}

export interface MetadataManagerClass {

    // Own fields of Tepl-5.Tepl.MetadataManagerClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class MetadataManagerClass {

    // Own properties of Tepl-5.Tepl.MetadataManagerClass

    static name: string
}

export interface MetadataManagerPrivate {
}

export class MetadataManagerPrivate {

    // Own properties of Tepl-5.Tepl.MetadataManagerPrivate

    static name: string
}

export interface MetadataPrivate {
}

export class MetadataPrivate {

    // Own properties of Tepl-5.Tepl.MetadataPrivate

    static name: string
}

export interface NotebookClass {

    // Own fields of Tepl-5.Tepl.NotebookClass

    parentClass: Gtk.NotebookClass
    padding: object[]
}

export abstract class NotebookClass {

    // Own properties of Tepl-5.Tepl.NotebookClass

    static name: string
}

export interface NotebookPrivate {
}

export class NotebookPrivate {

    // Own properties of Tepl-5.Tepl.NotebookPrivate

    static name: string
}

export interface PanelClass {

    // Own fields of Tepl-5.Tepl.PanelClass

    parentClass: Gtk.GridClass
    padding: object[]
}

export abstract class PanelClass {

    // Own properties of Tepl-5.Tepl.PanelClass

    static name: string
}

export interface PanelPrivate {
}

export class PanelPrivate {

    // Own properties of Tepl-5.Tepl.PanelPrivate

    static name: string
}

export interface SpaceDrawerPrefsClass {

    // Own fields of Tepl-5.Tepl.SpaceDrawerPrefsClass

    parentClass: Gtk.GridClass
    padding: object[]
}

export abstract class SpaceDrawerPrefsClass {

    // Own properties of Tepl-5.Tepl.SpaceDrawerPrefsClass

    static name: string
}

export interface SpaceDrawerPrefsPrivate {
}

export class SpaceDrawerPrefsPrivate {

    // Own properties of Tepl-5.Tepl.SpaceDrawerPrefsPrivate

    static name: string
}

export interface StatusbarClass {

    // Own fields of Tepl-5.Tepl.StatusbarClass

    parentClass: Gtk.StatusbarClass
    padding: object[]
}

export abstract class StatusbarClass {

    // Own properties of Tepl-5.Tepl.StatusbarClass

    static name: string
}

export interface StatusbarPrivate {
}

export class StatusbarPrivate {

    // Own properties of Tepl-5.Tepl.StatusbarPrivate

    static name: string
}

export interface StyleSchemeChooserWidgetClass {

    // Own fields of Tepl-5.Tepl.StyleSchemeChooserWidgetClass

    parentClass: Gtk.BinClass
    padding: object[]
}

export abstract class StyleSchemeChooserWidgetClass {

    // Own properties of Tepl-5.Tepl.StyleSchemeChooserWidgetClass

    static name: string
}

export interface StyleSchemeChooserWidgetPrivate {
}

export class StyleSchemeChooserWidgetPrivate {

    // Own properties of Tepl-5.Tepl.StyleSchemeChooserWidgetPrivate

    static name: string
}

export interface TabClass {

    // Own fields of Tepl-5.Tepl.TabClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gtk.GridClass
    packView: (tab: Tab, view: View) => void
    packInfoBar: (tab: Tab, infoBar: Gtk.InfoBar) => void
    packGotoLineBar: (tab: Tab, gotoLineBar: GotoLineBar) => void
    closeRequest: (tab: Tab) => void
}

export abstract class TabClass {

    // Own properties of Tepl-5.Tepl.TabClass

    static name: string
}

export interface TabGroupInterface {

    // Own fields of Tepl-5.Tepl.TabGroupInterface

    /**
     * The parent interface.
     * @field 
     */
    parentInterface: GObject.TypeInterface
    getTabs: (tabGroup: TabGroup) => Tab[]
    getActiveTab: (tabGroup: TabGroup) => Tab | null
    setActiveTab: (tabGroup: TabGroup, tab: Tab) => void
    appendTabVfunc: (tabGroup: TabGroup, tab: Tab) => void
}

/**
 * The virtual function table for #TeplTabGroup. When implementing one of the
 * vfunc, you can assume that the pre-conditions are already checked (the
 * parameters are valid).
 * @record 
 */
export abstract class TabGroupInterface {

    // Own properties of Tepl-5.Tepl.TabGroupInterface

    static name: string
}

export interface TabLabelClass {

    // Own fields of Tepl-5.Tepl.TabLabelClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gtk.GridClass
    getTooltipMarkup: (tabLabel: TabLabel) => string
}

export abstract class TabLabelClass {

    // Own properties of Tepl-5.Tepl.TabLabelClass

    static name: string
}

export interface TabLabelPrivate {
}

export class TabLabelPrivate {

    // Own properties of Tepl-5.Tepl.TabLabelPrivate

    static name: string
}

export interface TabPrivate {
}

export class TabPrivate {

    // Own properties of Tepl-5.Tepl.TabPrivate

    static name: string
}

export interface ViewClass {

    // Own fields of Tepl-5.Tepl.ViewClass

    parentClass: GtkSource.ViewClass
    padding: object[]
}

export abstract class ViewClass {

    // Own properties of Tepl-5.Tepl.ViewClass

    static name: string
}