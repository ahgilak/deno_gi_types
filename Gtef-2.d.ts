
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gtef-2
 */

import type * as GtkSource from './GtkSource-3.0.js';
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
 * An error code used with the %GTEF_FILE_LOADER_ERROR domain.
 */
export enum FileLoaderError {
    /**
     * The file is too big.
     */
    TOO_BIG,
    /**
     * It is not possible to
     *   detect the encoding automatically.
     */
    ENCODING_AUTO_DETECTION_FAILED,
}
/**
 * An error code used with the %GTEF_FILE_SAVER_ERROR domain.
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
 * Flags to define the behavior of a #GtefFileSaver.
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
/**
 * The folding state at a certain line in the #GtkTextBuffer.
 * 
 * Since #GtefGutterRendererFolds has a flat view of the folding tree, some
 * states can be combined; for example, %GTEF_GUTTER_RENDERER_FOLDS_STATE_END
 * and %GTEF_GUTTER_RENDERER_FOLDS_STATE_CONTINUE.
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
 * A wrapper function for g_action_map_add_action_entries() that checks
 * duplicates.
 * 
 * This function first checks - for each entry - that the `action_map` doesn't
 * already contain a #GAction with the same name. A warning is printed if an old
 * action will be dropped. In any case, it then calls
 * g_action_map_add_action_entries() with the same arguments as passed to this
 * function.
 * 
 * This function also checks if there are duplicates in the `entries` array
 * itself.
 * @param actionMap a #GActionMap.
 * @param entries a pointer to           the first item in an array of #GActionEntry structs.
 * @param userData the user data for signal connections.
 */
export function actionMapAddActionEntriesCheckDups(actionMap: Gio.ActionMap, entries: Gio.ActionEntry[], userData: object | null): void
/**
 * Gets a list of all encodings known by #GtefEncoding.
 */
export function encodingGetAll(): Encoding[]
/**
 * Gets the list of default candidate encodings to try when loading a file. See
 * gtk_source_file_loader_set_candidate_encodings().
 * 
 * This function returns a different list depending on the current locale (i.e.
 * language, country and default encoding). The UTF-8 encoding and the current
 * locale encoding are guaranteed to be present in the returned list.
 */
export function encodingGetDefaultCandidates(): Encoding[]
export function fileLoaderErrorQuark(): GLib.Quark
export function fileSaverErrorQuark(): GLib.Quark
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
export function menuItemGetLongDescription(menuItem: Gtk.MenuItem): string | null
/**
 * Sets an icon to a #GtkMenuItem.
 * 
 * If the child widget of `item` is already a #GtkBox, all #GtkImage widgets
 * inside that box are first destroyed. A #GtkImage for `icon_name` is then
 * inserted to the box.
 * 
 * If the child widget of `item` is not a #GtkBox (it's usually the
 * #GtkAccelLabel), it is replaced by a new #GtkBox and the initial child widget
 * is inserted to the #GtkBox, alongside the icon.
 * 
 * As a consequence, if you want to call functions on the #GtkAccelLabel, it's
 * easier to do it before calling this function.
 * @param item a #GtkMenuItem.
 * @param iconName an icon name.
 */
export function menuItemSetIconName(item: Gtk.MenuItem, iconName: string): void
/**
 * Sets the long description of `menu_item`. A possible use-case is to display it
 * in a #GtkStatusbar, or as a tooltip.
 * @param menuItem a #GtkMenuItem.
 * @param longDescription the long description, or %NULL to unset it.
 */
export function menuItemSetLongDescription(menuItem: Gtk.MenuItem, longDescription: string | null): void
/**
 * This function initializes the metadata manager.
 * 
 * The `metadata_path` must be different for each process. It is advised for your
 * application to rely on #GApplication process uniqueness.
 * 
 * A good place to store the metadata is in a sub-directory of the user data
 * directory. See g_get_user_data_dir().
 * @param metadataPath the filename where the metadata is stored.
 */
export function metadataManagerInit(metadataPath: string): void
/**
 * This function saves synchronously metadata if they need to be saved, and
 * frees the internal data of the metadata manager.
 */
export function metadataManagerShutdown(): void
/**
 * Gets the URI of `item`. `item` must be a child of `menu`. `menu` must be a
 * #GtkRecentChooserMenu.
 * 
 * This function has been written because the value returned by
 * gtk_recent_chooser_get_current_uri() is not updated when #GtkMenuItem's of a
 * #GtkRecentChooserMenu are selected/deselected.
 * @param menu a #GtkRecentChooserMenu.
 * @param item a #GtkMenuItem.
 */
export function utilsRecentChooserMenuGetItemUri(menu: Gtk.RecentChooserMenu, item: Gtk.MenuItem): string
export module ActionInfoCentralStore {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ActionInfoCentralStore {

    // Own fields of Gtef-2.Gtef.ActionInfoCentralStore

    parent: GObject.Object
    priv: ActionInfoCentralStorePrivate

    // Owm methods of Gtef-2.Gtef.ActionInfoCentralStore

    lookup(actionName: string): ActionInfo

    // Class property signals of Gtef-2.Gtef.ActionInfoCentralStore

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ActionInfoCentralStore extends GObject.Object {

    // Own properties of Gtef-2.Gtef.ActionInfoCentralStore

    static name: string

    // Constructors of Gtef-2.Gtef.ActionInfoCentralStore

    constructor(config?: ActionInfoCentralStore.ConstructorProperties) 
    _init(config?: ActionInfoCentralStore.ConstructorProperties): void
    static getInstance(): ActionInfoCentralStore
}

export module ActionInfoStore {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gtef-2.Gtef.ActionInfoStore

        /**
         * The associated #GtkApplication. #GtefActionInfoStore has a weak
         * reference to the #GtkApplication.
         */
        application?: Gtk.Application | null
    }

}

export interface ActionInfoStore {

    // Own properties of Gtef-2.Gtef.ActionInfoStore

    /**
     * The associated #GtkApplication. #GtefActionInfoStore has a weak
     * reference to the #GtkApplication.
     */
    readonly application: Gtk.Application

    // Own fields of Gtef-2.Gtef.ActionInfoStore

    parent: GObject.Object
    priv: ActionInfoStorePrivate

    // Owm methods of Gtef-2.Gtef.ActionInfoStore

    /**
     * Inserts `info` into `store` and into the #GtefActionInfoCentralStore. Both the
     * `store` and central store must <emphasis>not</emphasis> already contain a
     * #GtefActionInfo with the same action name. The stores take their own
     * reference on `info`.
     * @param info a #GtefActionInfo.
     */
    add(info: ActionInfo): void
    /**
     * Calls gtef_action_info_store_add() for each entry.
     * 
     * If `translation_domain` is not %NULL, g_dgettext() is used to translate the
     * `label` and `tooltip` of each entry before setting them to the #GtefActionInfo.
     * 
     * An API similar to g_action_map_add_action_entries().
     * @param entries a pointer to the first item in an array of #GtefActionInfoEntry structs.
     * @param translationDomain a gettext domain, or %NULL.
     */
    addEntries(entries: ActionInfoEntry[], translationDomain: string | null): void
    /**
     * Checks that all #GtefActionInfo's of `store` have been used by
     * gtef_action_info_store_create_menu_item(). If not, a warning is printed and
     * might indicate dead code.
     * 
     * You probably want to call this function on the store returned by
     * gtef_application_get_app_action_info_store(). But it can also be useful for a
     * store provided by a library, to easily see which actions you don't use.
     */
    checkAllUsed(): void
    /**
     * Creates a new #GtkMenuItem for `action_name`. The `store` must contain a
     * #GtefActionInfo for `action_name`.
     * 
     * gtk_actionable_set_action_name() is called on the menu item with
     * `action_name`. The label is set with the #GtkMenuItem:use-underline property
     * enabled. The first accelerator is set to the #GtkAccelLabel of the menu item.
     * The icon is set. And the tooltip is set with
     * gtef_menu_item_set_long_description().
     * 
     * If #GtefActionInfoStore:application is non-%NULL, this function also calls
     * gtk_application_set_accels_for_action() with the accelerators returned by
     * gtef_action_info_get_accels() (this will erase previously set accelerators
     * for that action, if any).
     * @param actionName an action name.
     */
    createMenuItem(actionName: string): Gtk.Widget
    getApplication(): Gtk.Application | null
    lookup(actionName: string): ActionInfo

    // Class property signals of Gtef-2.Gtef.ActionInfoStore

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

export class ActionInfoStore extends GObject.Object {

    // Own properties of Gtef-2.Gtef.ActionInfoStore

    static name: string

    // Constructors of Gtef-2.Gtef.ActionInfoStore

    constructor(config?: ActionInfoStore.ConstructorProperties) 
    /**
     * Creates a new #GtefActionInfoStore object. Associating a #GtkApplication is
     * optional.
     * @constructor 
     * @param application a #GtkApplication, or %NULL.
     */
    constructor(application: Gtk.Application | null) 
    /**
     * Creates a new #GtefActionInfoStore object. Associating a #GtkApplication is
     * optional.
     * @constructor 
     * @param application a #GtkApplication, or %NULL.
     */
    static new(application: Gtk.Application | null): ActionInfoStore
    _init(config?: ActionInfoStore.ConstructorProperties): void
}

export module Application {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gtef-2.Gtef.Application

        /**
         * The #GtkApplication.
         */
        application?: Gtk.Application | null
    }

}

export interface Application {

    // Own properties of Gtef-2.Gtef.Application

    /**
     * The #GtkApplication.
     */
    readonly application: Gtk.Application

    // Own fields of Gtef-2.Gtef.Application

    parent: GObject.Object
    priv: ApplicationPrivate

    // Owm methods of Gtef-2.Gtef.Application

    /**
     * Returns an initially empty #GtefActionInfoStore reserved for the
     * application-specific actions. Libraries should not add #GtefActionInfo's to
     * this store. Libraries should provide their own store if they want to share
     * #GtefActionInfo's.
     */
    getAppActionInfoStore(): ActionInfoStore
    getApplication(): Gtk.Application
    /**
     * Calls g_application_open() with a single file and an empty hint.
     * @param file a #GFile.
     */
    openSimple(file: Gio.File): void

    // Class property signals of Gtef-2.Gtef.Application

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

    // Own properties of Gtef-2.Gtef.Application

    static name: string

    // Constructors of Gtef-2.Gtef.Application

    constructor(config?: Application.ConstructorProperties) 
    _init(config?: Application.ConstructorProperties): void
    /**
     * Convenience function that calls g_application_get_default() followed by
     * gtef_application_get_from_gtk_application(). The object returned by
     * g_application_get_default() must be a #GtkApplication.
     */
    static getDefault(): Application
    /**
     * Returns the #GtefApplication of `gtk_app`. The returned object is guaranteed
     * to be the same for the lifetime of `gtk_app`.
     * @param gtkApp a #GtkApplication.
     */
    static getFromGtkApplication(gtkApp: Gtk.Application): Application
}

export module ApplicationWindow {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gtef-2.Gtef.ApplicationWindow

        /**
         * The #GtkApplicationWindow.
         */
        applicationWindow?: Gtk.ApplicationWindow | null
        /**
         * The #GtkStatusbar. %NULL by default.
         */
        statusbar?: Gtk.Statusbar | null
    }

}

export interface ApplicationWindow {

    // Own properties of Gtef-2.Gtef.ApplicationWindow

    /**
     * The #GtkApplicationWindow.
     */
    readonly applicationWindow: Gtk.ApplicationWindow
    /**
     * The #GtkStatusbar. %NULL by default.
     */
    statusbar: Gtk.Statusbar

    // Own fields of Gtef-2.Gtef.ApplicationWindow

    parent: GObject.Object
    priv: ApplicationWindowPrivate

    // Owm methods of Gtef-2.Gtef.ApplicationWindow

    /**
     * Connect to the #GtefMenuShell::menu-item-selected and
     * #GtefMenuShell::menu-item-deselected signals of `gtef_menu_shell` to push/pop
     * the long description of #GtkMenuItem's to the
     * #GtefApplicationWindow:statusbar.
     * 
     * The long description is retrieved with gtef_menu_item_get_long_description().
     * So gtef_menu_item_set_long_description() must have been called, which is the
     * case if the #GtkMenuItem has been created with the functions available in
     * #GtefActionInfoStore.
     * @param gtefMenuShell a #GtefMenuShell.
     */
    connectMenuToStatusbar(gtefMenuShell: MenuShell): void
    /**
     * An alternative to gtk_recent_chooser_set_show_tips(). Shows the full path in
     * the #GtefApplicationWindow:statusbar when a #GtkMenuItem of `menu` is
     * selected.
     * 
     * The full path is retrieved with
     * gtef_utils_recent_chooser_menu_get_item_uri().
     * @param menu a #GtkRecentChooserMenu.
     */
    connectRecentChooserMenuToStatusbar(menu: Gtk.RecentChooserMenu): void
    /**
     * Creates a #GtkMenuItem with a simple and generic #GtkRecentChooserMenu as
     * submenu.
     * 
     * The #GtkRecentChooser is configured to show files only recently used with the
     * current application, as returned by g_get_application_name(). If recent files
     * are added to the default #GtkRecentManager with
     * gtk_recent_manager_add_item(), the files will normally show up in the
     * #GtkRecentChooserMenu.
     * 
     * The #GtkRecentChooserMenu is connected to the statusbar with
     * gtef_application_window_connect_recent_chooser_menu_to_statusbar().
     * 
     * When the #GtkRecentChooser::item-activated signal is emitted,
     * gtef_application_open_simple() is called, so the #GApplication must have the
     * %G_APPLICATION_HANDLES_OPEN flag set.
     */
    createOpenRecentMenuItem(): Gtk.Widget
    getApplicationWindow(): Gtk.ApplicationWindow
    getStatusbar(): Gtk.Statusbar | null
    /**
     * Sets the #GtefApplicationWindow:statusbar property.
     * @param statusbar a #GtkStatusbar, or %NULL.
     */
    setStatusbar(statusbar: Gtk.Statusbar | null): void

    // Class property signals of Gtef-2.Gtef.ApplicationWindow

    connect(sigName: "notify::application-window", callback: any): number
    on(sigName: "notify::application-window", callback: any): number
    once(sigName: "notify::application-window", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::application-window", ...args: any[]): void
    connect(sigName: "notify::statusbar", callback: any): number
    on(sigName: "notify::statusbar", callback: any): number
    once(sigName: "notify::statusbar", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::statusbar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ApplicationWindow extends GObject.Object {

    // Own properties of Gtef-2.Gtef.ApplicationWindow

    static name: string

    // Constructors of Gtef-2.Gtef.ApplicationWindow

    constructor(config?: ApplicationWindow.ConstructorProperties) 
    _init(config?: ApplicationWindow.ConstructorProperties): void
    /**
     * Returns the #GtefApplicationWindow of `gtk_window`. The returned object is
     * guaranteed to be the same for the lifetime of `gtk_window`.
     * @param gtkWindow a #GtkApplicationWindow.
     */
    static getFromGtkApplicationWindow(gtkWindow: Gtk.ApplicationWindow): ApplicationWindow
}

export module Buffer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `gtef-cursor-moved`
     */
    export interface GtefCursorMovedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GtkSource.Buffer.ConstructorProperties {

        // Own constructor properties of Gtef-2.Gtef.Buffer

        /**
         * The #GtkSourceBuffer:style-scheme ID, as a string. This property is
         * useful for binding it to a #GSettings key.
         * 
         * When the #GtkSourceBuffer:style-scheme is %NULL,
         * #GtefBuffer:gtef-style-scheme-id contains the empty string.
         */
        gtefStyleSchemeId?: string | null
    }

}

export interface Buffer {

    // Own properties of Gtef-2.Gtef.Buffer

    /**
     * The #GtkSourceBuffer:style-scheme ID, as a string. This property is
     * useful for binding it to a #GSettings key.
     * 
     * When the #GtkSourceBuffer:style-scheme is %NULL,
     * #GtefBuffer:gtef-style-scheme-id contains the empty string.
     */
    gtefStyleSchemeId: string
    /**
     * The buffer title. See gtef_buffer_get_title().
     */
    readonly gtefTitle: string

    // Conflicting properties

    priv: any & Gtk.TextBufferPrivate

    // Own fields of Gtef-2.Gtef.Buffer

    parentInstance: any

    // Owm methods of Gtef-2.Gtef.Buffer

    /**
     * Returns the #GtefFile of `buffer`. The returned object is guaranteed to be the
     * same for the lifetime of `buffer`.
     */
    getFile(): File
    getSelectionType(): SelectionType
    getStyleSchemeId(): string
    /**
     * Returns a title suitable for a #GtkWindow title. It contains (in that order):
     * - '*' if the buffer is modified;
     * - the #GtefFile:short-name;
     * - the directory path in parenthesis if the #GtefFile:location isn't
     *   %NULL.
     */
    getTitle(): string
    /**
     * Returns whether `buffer` is untouched.
     * 
     * This function is for example useful to know if we can re-use this buffer to
     * load a file, instead of opening a new tab or window.
     * 
     * For this function to return %TRUE, the `buffer` must be empty, non-modified,
     * the undo/redo #GtkSourceBuffer history must be empty, and the
     * #GtefFile:location must be %NULL.
     */
    isUntouched(): boolean
    /**
     * Sets the #GtefBuffer:gtef-style-scheme-id property.
     * 
     * The #GtkSourceStyleScheme is taken from the default
     * #GtkSourceStyleSchemeManager as returned by
     * gtk_source_style_scheme_manager_get_default().
     * @param styleSchemeId the new value.
     */
    setStyleSchemeId(styleSchemeId: string): void

    // Own virtual methods of Gtef-2.Gtef.Buffer

    gtefCursorMoved(): void

    // Own signals of Gtef-2.Gtef.Buffer

    connect(sigName: "gtef-cursor-moved", callback: Buffer.GtefCursorMovedSignalCallback): number
    on(sigName: "gtef-cursor-moved", callback: Buffer.GtefCursorMovedSignalCallback): number
    once(sigName: "gtef-cursor-moved", callback: Buffer.GtefCursorMovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "gtef-cursor-moved", ...args: any[]): void

    // Class property signals of Gtef-2.Gtef.Buffer

    connect(sigName: "notify::gtef-style-scheme-id", callback: any): number
    on(sigName: "notify::gtef-style-scheme-id", callback: any): number
    once(sigName: "notify::gtef-style-scheme-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::gtef-style-scheme-id", ...args: any[]): void
    connect(sigName: "notify::gtef-title", callback: any): number
    on(sigName: "notify::gtef-title", callback: any): number
    once(sigName: "notify::gtef-title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::gtef-title", ...args: any[]): void
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

    // Own properties of Gtef-2.Gtef.Buffer

    static name: string

    // Constructors of Gtef-2.Gtef.Buffer

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

        // Own constructor properties of Gtef-2.Gtef.File

        /**
         * The location.
         */
        location?: Gio.File | null
    }

}

export interface File {

    // Own properties of Gtef-2.Gtef.File

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
    /**
     * The file short name. See gtef_file_get_short_name().
     */
    readonly shortName: string

    // Own fields of Gtef-2.Gtef.File

    parentInstance: GObject.Object

    // Owm methods of Gtef-2.Gtef.File

    /**
     * Checks synchronously the file on disk, to know whether the file is externally
     * modified, or has been deleted, and whether the file is read-only.
     * 
     * #GtefFile doesn't create a #GFileMonitor to track those properties, so
     * this function needs to be called instead. Creating lots of #GFileMonitor's
     * would take lots of resources.
     * 
     * Since this function is synchronous, it is advised to call it only on local
     * files. See gtef_file_is_local().
     */
    checkFileOnDisk(): void
    getCompressionType(): CompressionType
    /**
     * The encoding is initially %NULL. After a successful file loading or saving
     * operation, the encoding is non-%NULL.
     */
    getEncoding(): Encoding
    getFileMetadata(): FileMetadata
    getLocation(): Gio.File
    getNewlineType(): NewlineType
    /**
     * Gets the `file` short name. If the #GtefFile:location isn't %NULL,
     * returns its display-name (see #G_FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME).
     * Otherwise returns "Untitled File N", with N the Nth untitled file of the
     * application, starting at 1. When an untitled file is closed, its number is
     * released and can be used by a later untitled file.
     */
    getShortName(): string
    /**
     * Returns whether the file has been deleted. If the
     * #GtefFile:location is %NULL, returns %FALSE.
     * 
     * To have an up-to-date value, you must first call
     * gtef_file_check_file_on_disk().
     */
    isDeleted(): boolean
    /**
     * Returns whether the file is externally modified. If the
     * #GtefFile:location is %NULL, returns %FALSE.
     * 
     * To have an up-to-date value, you must first call
     * gtef_file_check_file_on_disk().
     */
    isExternallyModified(): boolean
    /**
     * Returns whether the file is local. If the #GtefFile:location is %NULL,
     * returns %FALSE.
     */
    isLocal(): boolean
    /**
     * Returns whether the file is read-only. If the
     * #GtefFile:location is %NULL, returns %FALSE.
     * 
     * To have an up-to-date value, you must first call
     * gtef_file_check_file_on_disk().
     */
    isReadonly(): boolean
    /**
     * Sets the location.
     * @param location the new #GFile, or %NULL.
     */
    setLocation(location: Gio.File | null): void

    // Class property signals of Gtef-2.Gtef.File

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

    // Own properties of Gtef-2.Gtef.File

    static name: string

    // Constructors of Gtef-2.Gtef.File

    constructor(config?: File.ConstructorProperties) 
    constructor() 
    static new(): File
    _init(config?: File.ConstructorProperties): void
}

export module FileLoader {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gtef-2.Gtef.FileLoader

        /**
         * The #GtefBuffer to load the content into. The #GtefFileLoader object
         * has a weak reference to the buffer.
         */
        buffer?: Buffer | null
        /**
         * The chunk size, in bytes. The content is loaded chunk by chunk. It
         * permits to avoid allocating a too big contiguous memory area, as well
         * as reporting progress information after each chunk read.
         * 
         * A small chunk size is better when loading a remote file with a slow
         * connection. For local files, the chunk size can be larger.
         */
        chunkSize?: number | null
        /**
         * The #GtefFile. The #GtefFileLoader object has a weak
         * reference to the file.
         */
        file?: File | null
        /**
         * The #GFile to load. By default the location is taken from the
         * #GtefFile at construction time.
         */
        location?: Gio.File | null
        /**
         * The maximum content size, in bytes. Keep in mind that all the
         * content is loaded in memory, and when loaded into a #GtkTextBuffer
         * it takes more memory than just the content size.
         * 
         * Set to -1 for unlimited size.
         */
        maxSize?: number | null
    }

}

export interface FileLoader {

    // Own properties of Gtef-2.Gtef.FileLoader

    /**
     * The #GtefBuffer to load the content into. The #GtefFileLoader object
     * has a weak reference to the buffer.
     */
    readonly buffer: Buffer
    /**
     * The chunk size, in bytes. The content is loaded chunk by chunk. It
     * permits to avoid allocating a too big contiguous memory area, as well
     * as reporting progress information after each chunk read.
     * 
     * A small chunk size is better when loading a remote file with a slow
     * connection. For local files, the chunk size can be larger.
     */
    chunkSize: number
    /**
     * The #GtefFile. The #GtefFileLoader object has a weak
     * reference to the file.
     */
    readonly file: File
    /**
     * The #GFile to load. By default the location is taken from the
     * #GtefFile at construction time.
     */
    readonly location: Gio.File
    /**
     * The maximum content size, in bytes. Keep in mind that all the
     * content is loaded in memory, and when loaded into a #GtkTextBuffer
     * it takes more memory than just the content size.
     * 
     * Set to -1 for unlimited size.
     */
    maxSize: number

    // Own fields of Gtef-2.Gtef.FileLoader

    parentInstance: GObject.Object

    // Owm methods of Gtef-2.Gtef.FileLoader

    getBuffer(): Buffer | null
    getChunkSize(): number
    getEncoding(): Encoding | null
    getFile(): File | null
    getLocation(): Gio.File | null
    getMaxSize(): number
    getNewlineType(): NewlineType
    /**
     * Loads asynchronously the file content into the #GtefBuffer.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * @param ioPriority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param progressCallback function to call back with   progress information, or %NULL if progress information is not needed.
     * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
     */
    loadAsync(ioPriority: number, cancellable: Gio.Cancellable | null, progressCallback: Gio.FileProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a file loading started with gtef_file_loader_load_async().
     * @param result a #GAsyncResult.
     */
    loadFinish(result: Gio.AsyncResult): boolean
    setChunkSize(chunkSize: number): void
    setMaxSize(maxSize: number): void

    // Class property signals of Gtef-2.Gtef.FileLoader

    connect(sigName: "notify::buffer", callback: any): number
    on(sigName: "notify::buffer", callback: any): number
    once(sigName: "notify::buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::chunk-size", callback: any): number
    on(sigName: "notify::chunk-size", callback: any): number
    once(sigName: "notify::chunk-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::chunk-size", ...args: any[]): void
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
    connect(sigName: "notify::max-size", callback: any): number
    on(sigName: "notify::max-size", callback: any): number
    once(sigName: "notify::max-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FileLoader extends GObject.Object {

    // Own properties of Gtef-2.Gtef.FileLoader

    static name: string

    // Constructors of Gtef-2.Gtef.FileLoader

    constructor(config?: FileLoader.ConstructorProperties) 
    /**
     * Creates a new #GtefFileLoader object. The content is read from the #GtefFile
     * location.
     * 
     * If not already done, call gtef_file_set_location() before calling this
     * constructor. The previous location is anyway not needed, because as soon as
     * the file loading begins, the `buffer` is emptied. Setting the #GtefFile
     * location directly permits to update the UI, to display the good location when
     * the file is loading.
     * @constructor 
     * @param buffer the #GtefBuffer to load the content into.
     * @param file the #GtefFile.
     */
    constructor(buffer: Buffer, file: File) 
    /**
     * Creates a new #GtefFileLoader object. The content is read from the #GtefFile
     * location.
     * 
     * If not already done, call gtef_file_set_location() before calling this
     * constructor. The previous location is anyway not needed, because as soon as
     * the file loading begins, the `buffer` is emptied. Setting the #GtefFile
     * location directly permits to update the UI, to display the good location when
     * the file is loading.
     * @constructor 
     * @param buffer the #GtefBuffer to load the content into.
     * @param file the #GtefFile.
     */
    static new(buffer: Buffer, file: File): FileLoader
    _init(config?: FileLoader.ConstructorProperties): void
}

export module FileMetadata {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gtef-2.Gtef.FileMetadata

        /**
         * The #GtefFile that the metadata belong to.
         */
        file?: File | null
    }

}

export interface FileMetadata {

    // Own properties of Gtef-2.Gtef.FileMetadata

    /**
     * The #GtefFile that the metadata belong to.
     */
    readonly file: File

    // Own fields of Gtef-2.Gtef.FileMetadata

    parentInstance: GObject.Object

    // Owm methods of Gtef-2.Gtef.FileMetadata

    /**
     * Gets the value of a metadata stored in the `metadata` object memory.
     * @param key the name of the metadata.
     */
    get(key: string): string | null
    getFile(): File
    /**
     * Loads synchronously the metadata from #GtefFile:location. The loaded
     * metadata values can then be accessed with gtef_file_metadata_get().
     * 
     * If the metadata are loaded successfully, this function deletes all previous
     * metadata stored in the `metadata` object memory.
     * 
     * The file at #GtefFile:location, if non-%NULL, must exist on the
     * filesystem, otherwise an error is returned.
     * 
     * If #GtefFile:location is %NULL, %FALSE is simply returned.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    load(cancellable: Gio.Cancellable | null): boolean
    /**
     * The asynchronous version of gtef_file_metadata_load().
     * 
     * If the metadata is loaded from the metadata manager (i.e. not with GVfs),
     * this function loads the metadata synchronously. A future version might fix
     * this.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * @param ioPriority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
     */
    loadAsync(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the metadata loading started with gtef_file_metadata_load_async().
     * @param result a #GAsyncResult.
     */
    loadFinish(result: Gio.AsyncResult): boolean
    /**
     * Saves synchronously the metadata for #GtefFile:location.
     * 
     * The file at #GtefFile:location, if non-%NULL, must exist on the
     * filesystem, otherwise an error is returned.
     * 
     * If #GtefFile:location is %NULL, %FALSE is simply returned.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    save(cancellable: Gio.Cancellable | null): boolean
    /**
     * The asynchronous version of gtef_file_metadata_save().
     * 
     * If the metadata is saved with the metadata manager (i.e. not with GVfs), this
     * function saves the metadata synchronously. A future version might fix this.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * @param ioPriority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
     */
    saveAsync(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the metadata saving started with gtef_file_metadata_save_async().
     * @param result a #GAsyncResult.
     */
    saveFinish(result: Gio.AsyncResult): boolean
    /**
     * Sets the value of a metadata. It's preferable that `key` starts with a
     * namespace, to not get metadata conflicts between applications.
     * 
     * This function just stores the new metadata value in the `metadata` object
     * memory.
     * @param key the name of the metadata.
     * @param value the value of the metadata, or %NULL to unset.
     */
    set(key: string, value: string | null): void

    // Class property signals of Gtef-2.Gtef.FileMetadata

    connect(sigName: "notify::file", callback: any): number
    on(sigName: "notify::file", callback: any): number
    once(sigName: "notify::file", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FileMetadata extends GObject.Object {

    // Own properties of Gtef-2.Gtef.FileMetadata

    static name: string

    // Constructors of Gtef-2.Gtef.FileMetadata

    constructor(config?: FileMetadata.ConstructorProperties) 
    constructor(file: File) 
    static new(file: File): FileMetadata
    _init(config?: FileMetadata.ConstructorProperties): void
}

export module FileSaver {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gtef-2.Gtef.FileSaver

        /**
         * The #GtefBuffer to save. The #GtefFileSaver object has a weak
         * reference to the buffer.
         */
        buffer?: GtkSource.Buffer | null
        /**
         * The compression type.
         */
        compressionType?: GtkSource.CompressionType | null
        /**
         * The file's encoding.
         */
        encoding?: Encoding | null
        /**
         * The #GtefFile. The #GtefFileSaver object has a weak
         * reference to the file.
         */
        file?: File | null
        /**
         * File saving flags.
         */
        flags?: FileSaverFlags | null
        /**
         * The #GFile where to save the buffer. By default the location is taken
         * from the #GtefFile at construction time.
         */
        location?: Gio.File | null
        /**
         * The newline type.
         */
        newlineType?: GtkSource.NewlineType | null
    }

}

export interface FileSaver {

    // Own properties of Gtef-2.Gtef.FileSaver

    /**
     * The #GtefBuffer to save. The #GtefFileSaver object has a weak
     * reference to the buffer.
     */
    readonly buffer: GtkSource.Buffer
    /**
     * The compression type.
     */
    compressionType: GtkSource.CompressionType
    /**
     * The file's encoding.
     */
    encoding: Encoding
    /**
     * The #GtefFile. The #GtefFileSaver object has a weak
     * reference to the file.
     */
    readonly file: File
    /**
     * File saving flags.
     */
    flags: FileSaverFlags
    /**
     * The #GFile where to save the buffer. By default the location is taken
     * from the #GtefFile at construction time.
     */
    readonly location: Gio.File
    /**
     * The newline type.
     */
    newlineType: GtkSource.NewlineType

    // Own fields of Gtef-2.Gtef.FileSaver

    object: GObject.Object
    priv: FileSaverPrivate

    // Owm methods of Gtef-2.Gtef.FileSaver

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
     * Finishes a file saving started with gtef_file_saver_save_async().
     * 
     * If the file has been saved successfully, the following #GtefFile
     * properties will be updated: the location, the encoding, the newline type and
     * the compression type.
     * 
     * gtk_text_buffer_set_modified() is called with %FALSE if the file has been
     * saved successfully.
     * @param result a #GAsyncResult.
     */
    saveFinish(result: Gio.AsyncResult): boolean
    /**
     * Sets the compression type. By default the compression type is taken from the
     * #GtefFile.
     * @param compressionType the new compression type.
     */
    setCompressionType(compressionType: CompressionType): void
    /**
     * Sets the encoding. If `encoding` is %NULL, the UTF-8 encoding will be set.
     * By default the encoding is taken from the #GtefFile.
     * @param encoding the new encoding, or %NULL for UTF-8.
     */
    setEncoding(encoding: Encoding | null): void
    setFlags(flags: FileSaverFlags): void
    /**
     * Sets the newline type. By default the newline type is taken from the
     * #GtefFile.
     * @param newlineType the new newline type.
     */
    setNewlineType(newlineType: NewlineType): void

    // Class property signals of Gtef-2.Gtef.FileSaver

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

    // Own properties of Gtef-2.Gtef.FileSaver

    static name: string

    // Constructors of Gtef-2.Gtef.FileSaver

    constructor(config?: FileSaver.ConstructorProperties) 
    /**
     * Creates a new #GtefFileSaver object. The `buffer` will be saved to the
     * #GtefFile's location.
     * 
     * This constructor is suitable for a simple "save" operation, when the `file`
     * already contains a non-%NULL #GtefFile:location.
     * @constructor 
     * @param buffer the #GtefBuffer to save.
     * @param file the #GtefFile.
     */
    constructor(buffer: Buffer, file: File) 
    /**
     * Creates a new #GtefFileSaver object. The `buffer` will be saved to the
     * #GtefFile's location.
     * 
     * This constructor is suitable for a simple "save" operation, when the `file`
     * already contains a non-%NULL #GtefFile:location.
     * @constructor 
     * @param buffer the #GtefBuffer to save.
     * @param file the #GtefFile.
     */
    static new(buffer: Buffer, file: File): FileSaver
    /**
     * Creates a new #GtefFileSaver object with a target location. When the
     * file saving is finished successfully, `target_location` is set to the `file'`s
     * #GtefFile:location property. If an error occurs, the previous valid
     * location is still available in #GtefFile.
     * 
     * This constructor adds %GTEF_FILE_SAVER_FLAGS_IGNORE_MODIFICATION_TIME to the
     * #GtefFileSaver:flags property.
     * 
     * This constructor is suitable for a "save as" operation, or for saving a new
     * buffer for the first time.
     * @constructor 
     * @param buffer the #GtefBuffer to save.
     * @param file the #GtefFile.
     * @param targetLocation the #GFile where to save the buffer to.
     */
    static newWithTarget(buffer: Buffer, file: File, targetLocation: Gio.File): FileSaver
    _init(config?: FileSaver.ConstructorProperties): void
}

export module FoldRegion {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gtef-2.Gtef.FoldRegion

        /**
         * The #GtkTextBuffer where the fold region is applied. The
         * #GtefFoldRegion object has a weak reference to the buffer.
         */
        buffer?: Gtk.TextBuffer | null
        /**
         * Whether the #GtefFoldRegion is folded or not.
         */
        folded?: boolean | null
    }

}

export interface FoldRegion {

    // Own properties of Gtef-2.Gtef.FoldRegion

    /**
     * The #GtkTextBuffer where the fold region is applied. The
     * #GtefFoldRegion object has a weak reference to the buffer.
     */
    readonly buffer: Gtk.TextBuffer
    /**
     * Whether the #GtefFoldRegion is folded or not.
     */
    folded: boolean

    // Own fields of Gtef-2.Gtef.FoldRegion

    parentInstance: GObject.Object

    // Owm methods of Gtef-2.Gtef.FoldRegion

    /**
     * Obtains iterators pointing to the start and end of the #GtefFoldRegion.
     */
    getBounds(): [ /* returnType */ boolean, /* start */ Gtk.TextIter, /* end */ Gtk.TextIter ]
    getBuffer(): Gtk.TextBuffer | null
    getFolded(): boolean
    /**
     * Sets the start and end of the #GtefFoldRegion.
     * @param start a #GtkTextIter.
     * @param end a #GtkTextIter.
     */
    setBounds(start: Gtk.TextIter, end: Gtk.TextIter): void
    /**
     * Folds or unfolds the region.
     * @param folded the new value.
     */
    setFolded(folded: boolean): void

    // Class property signals of Gtef-2.Gtef.FoldRegion

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

    // Own properties of Gtef-2.Gtef.FoldRegion

    static name: string

    // Constructors of Gtef-2.Gtef.FoldRegion

    constructor(config?: FoldRegion.ConstructorProperties) 
    constructor(buffer: Gtk.TextBuffer, start: Gtk.TextIter, end: Gtk.TextIter) 
    static new(buffer: Gtk.TextBuffer, start: Gtk.TextIter, end: Gtk.TextIter): FoldRegion
    _init(config?: FoldRegion.ConstructorProperties): void
}

export module GutterRendererFolds {

    // Constructor properties interface

    export interface ConstructorProperties extends GtkSource.GutterRenderer.ConstructorProperties {
    }

}

export interface GutterRendererFolds {

    // Own fields of Gtef-2.Gtef.GutterRendererFolds

    parentInstance: GtkSource.GutterRenderer

    // Owm methods of Gtef-2.Gtef.GutterRendererFolds

    /**
     * Sets the folding state of the next cell to be drawn.
     * 
     * This function is intended to be called from a subclass' draw method before
     * chaining-up to its parent's draw method.
     * @param state a #GtefGutterRendererFoldsState.
     */
    setState(state: GutterRendererFoldsState): void

    // Class property signals of Gtef-2.Gtef.GutterRendererFolds

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

    // Own properties of Gtef-2.Gtef.GutterRendererFolds

    static name: string

    // Constructors of Gtef-2.Gtef.GutterRendererFolds

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

    // Own fields of Gtef-2.Gtef.InfoBar

    parentInstance: any

    // Owm methods of Gtef-2.Gtef.InfoBar

    /**
     * Calls gtk_info_bar_set_show_close_button(), and additionnally closes the
     * `info_bar` when the #GtkInfoBar::response signal is received with the
     * `response_id` %GTK_RESPONSE_CLOSE.
     */
    addCloseButton(): void
    /**
     * Adds `content` to `info_bar`.
     * 
     * #GtefInfoBar has an internal container, to be able to add the icon and add
     * primary or secondary messages. The internal container is added to the content
     * area, as returned by gtk_info_bar_get_content_area(). So if you use a
     * #GtefInfoBar and you need to add a custom #GtkWidget, it is better to use
     * this function instead of adding the #GtkWidget directly to the content area.
     * @param content a #GtkWidget.
     */
    addContentWidget(content: Gtk.Widget): void
    /**
     * Adds an icon on the left, determined by the message type. So before calling
     * this function, gtk_info_bar_set_message_type() must have been called.
     * 
     * The icon is not updated when the message type changes. Another #GtefInfoBar
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

    // Class property signals of Gtef-2.Gtef.InfoBar

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

    // Own properties of Gtef-2.Gtef.InfoBar

    static name: string

    // Constructors of Gtef-2.Gtef.InfoBar

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
     * @param orientation the box???s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    /**
     * Creates a new #GtefInfoBar with an icon (depending on `msg_type)`, a primary
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

export module MenuShell {

    // Signal callback interfaces

    /**
     * Signal callback interface for `menu-item-deselected`
     */
    export interface MenuItemDeselectedSignalCallback {
        (menuItem: Gtk.MenuItem): void
    }

    /**
     * Signal callback interface for `menu-item-selected`
     */
    export interface MenuItemSelectedSignalCallback {
        (menuItem: Gtk.MenuItem): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gtef-2.Gtef.MenuShell

        /**
         * The #GtkMenuShell.
         */
        menuShell?: Gtk.MenuShell | null
    }

}

export interface MenuShell {

    // Own properties of Gtef-2.Gtef.MenuShell

    /**
     * The #GtkMenuShell.
     */
    readonly menuShell: Gtk.MenuShell

    // Own fields of Gtef-2.Gtef.MenuShell

    parent: GObject.Object
    priv: MenuShellPrivate

    // Owm methods of Gtef-2.Gtef.MenuShell

    getMenuShell(): Gtk.MenuShell

    // Own virtual methods of Gtef-2.Gtef.MenuShell

    menuItemDeselected(menuItem: Gtk.MenuItem): void
    menuItemSelected(menuItem: Gtk.MenuItem): void

    // Own signals of Gtef-2.Gtef.MenuShell

    connect(sigName: "menu-item-deselected", callback: MenuShell.MenuItemDeselectedSignalCallback): number
    on(sigName: "menu-item-deselected", callback: MenuShell.MenuItemDeselectedSignalCallback): number
    once(sigName: "menu-item-deselected", callback: MenuShell.MenuItemDeselectedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "menu-item-deselected", ...args: any[]): void
    connect(sigName: "menu-item-selected", callback: MenuShell.MenuItemSelectedSignalCallback): number
    on(sigName: "menu-item-selected", callback: MenuShell.MenuItemSelectedSignalCallback): number
    once(sigName: "menu-item-selected", callback: MenuShell.MenuItemSelectedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "menu-item-selected", ...args: any[]): void

    // Class property signals of Gtef-2.Gtef.MenuShell

    connect(sigName: "notify::menu-shell", callback: any): number
    on(sigName: "notify::menu-shell", callback: any): number
    once(sigName: "notify::menu-shell", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::menu-shell", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MenuShell extends GObject.Object {

    // Own properties of Gtef-2.Gtef.MenuShell

    static name: string

    // Constructors of Gtef-2.Gtef.MenuShell

    constructor(config?: MenuShell.ConstructorProperties) 
    _init(config?: MenuShell.ConstructorProperties): void
    /**
     * Returns the #GtefMenuShell of `gtk_menu_shell`. The returned object is
     * guaranteed to be the same for the lifetime of `gtk_menu_shell`.
     * @param gtkMenuShell a #GtkMenuShell.
     */
    static getFromGtkMenuShell(gtkMenuShell: Gtk.MenuShell): MenuShell
}

export module Tab {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Grid.ConstructorProperties {
    }

}

export interface Tab extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own fields of Gtef-2.Gtef.Tab

    parentInstance: any

    // Owm methods of Gtef-2.Gtef.Tab

    /**
     * Attaches `info_bar` to `tab,` above the main widget.
     * 
     * If several info bars are added, the first one will be at the top, the second
     * one below the first info bar, etc. With the main widget of `tab` at the
     * bottom.
     * @param infoBar a #GtkInfoBar.
     */
    addInfoBar(infoBar: Gtk.InfoBar): void

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

    // Class property signals of Gtef-2.Gtef.Tab

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

export class Tab extends Gtk.Grid {

    // Own properties of Gtef-2.Gtef.Tab

    static name: string

    // Constructors of Gtef-2.Gtef.Tab

    constructor(config?: Tab.ConstructorProperties) 
    constructor(mainWidget: Gtk.Widget) 
    static new(mainWidget: Gtk.Widget): Tab

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    _init(config?: Tab.ConstructorProperties): void
}

export module View {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, GtkSource.View.ConstructorProperties {
    }

}

export interface View extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Conflicting properties

    parent: Gtk.TextView & Gtk.Container & Gtk.Container

    // Own fields of Gtef-2.Gtef.View

    parentInstance: any

    // Owm methods of Gtef-2.Gtef.View

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
     * Returns the widget???s window if it is realized, %NULL otherwise
     */
    getWindow(): Gdk.Window | null
    /**
     * Returns the widget???s window if it is realized, %NULL otherwise
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

    // Class property signals of Gtef-2.Gtef.View

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

export class View extends GtkSource.View {

    // Own properties of Gtef-2.Gtef.View

    static name: string

    // Constructors of Gtef-2.Gtef.View

    constructor(config?: View.ConstructorProperties) 
    constructor() 
    static new(): View
    _init(config?: View.ConstructorProperties): void

    // Conflicting static methods

    static newWithBuffer(...args: any[]): any
}

export interface ActionInfo {

    // Owm methods of Gtef-2.Gtef.ActionInfo

    copy(): ActionInfo
    /**
     * Returns the accelerators. This function never returns %NULL, it always
     * returns a %NULL-terminated array, to be suitable for
     * gtk_application_set_accels_for_action().
     */
    getAccels(): string[]
    getActionName(): string | null
    getIconName(): string | null
    getLabel(): string | null
    getTooltip(): string | null
    /**
     * Increments the reference count of `info` by one.
     */
    ref(): ActionInfo
    /**
     * A function similar to gtk_application_set_accels_for_action().
     * 
     * `accels` must not be %NULL, it must be a %NULL-terminated array, to be
     * consistent with gtk_application_set_accels_for_action().
     * @param accels a %NULL-terminated array of accelerators in the format understood by gtk_accelerator_parse().
     */
    setAccels(accels: string[]): void
    /**
     * Sets the action name, for example `"win.save"`.
     * @param actionName the action name.
     */
    setActionName(actionName: string): void
    setIconName(iconName: string | null): void
    setLabel(label: string | null): void
    setTooltip(tooltip: string | null): void
    /**
     * Decrements the reference count of `info` by one. If the reference count drops
     * to 0, `info` is freed.
     */
    unref(): void
}

export class ActionInfo {

    // Own properties of Gtef-2.Gtef.ActionInfo

    static name: string

    // Constructors of Gtef-2.Gtef.ActionInfo

    constructor() 
    static new(): ActionInfo
    /**
     * Creates a new #GtefActionInfo from a #GtefActionInfoEntry.
     * 
     * If `translation_domain` is not %NULL, g_dgettext() is used to translate the
     * `label` and `tooltip` before setting them to the #GtefActionInfo.
     * @constructor 
     * @param infoEntry a #GtefActionInfoEntry.
     * @param translationDomain a gettext domain, or %NULL.
     */
    static newFromEntry(infoEntry: ActionInfoEntry, translationDomain: string | null): ActionInfo
}

export interface ActionInfoCentralStoreClass {

    // Own fields of Gtef-2.Gtef.ActionInfoCentralStoreClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class ActionInfoCentralStoreClass {

    // Own properties of Gtef-2.Gtef.ActionInfoCentralStoreClass

    static name: string
}

export interface ActionInfoCentralStorePrivate {
}

export class ActionInfoCentralStorePrivate {

    // Own properties of Gtef-2.Gtef.ActionInfoCentralStorePrivate

    static name: string
}

export interface ActionInfoEntry {

    // Own fields of Gtef-2.Gtef.ActionInfoEntry

    /**
     * the action name.
     * @field 
     */
    actionName: string
    /**
     * the icon name, or %NULL.
     * @field 
     */
    iconName: string
    /**
     * the label (i.e. a short description), or %NULL.
     * @field 
     */
    label: string
    /**
     * the accelerator, in the format understood by gtk_accelerator_parse().
     * Or %NULL.
     * @field 
     */
    accel: string
    /**
     * the tooltip (i.e. a long description), or %NULL.
     * @field 
     */
    tooltip: string
}

/**
 * This struct defines a set of information for a single action. It is for use
 * with gtef_action_info_store_add_entries().
 * 
 * Like #GActionEntry, it is permissible to use an incomplete initialiser in
 * order to leave some of the later values as %NULL. Additional optional fields
 * may be added in the future.
 * @record 
 */
export class ActionInfoEntry {

    // Own properties of Gtef-2.Gtef.ActionInfoEntry

    static name: string
}

export interface ActionInfoStoreClass {

    // Own fields of Gtef-2.Gtef.ActionInfoStoreClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class ActionInfoStoreClass {

    // Own properties of Gtef-2.Gtef.ActionInfoStoreClass

    static name: string
}

export interface ActionInfoStorePrivate {
}

export class ActionInfoStorePrivate {

    // Own properties of Gtef-2.Gtef.ActionInfoStorePrivate

    static name: string
}

export interface ApplicationClass {

    // Own fields of Gtef-2.Gtef.ApplicationClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class ApplicationClass {

    // Own properties of Gtef-2.Gtef.ApplicationClass

    static name: string
}

export interface ApplicationPrivate {
}

export class ApplicationPrivate {

    // Own properties of Gtef-2.Gtef.ApplicationPrivate

    static name: string
}

export interface ApplicationWindowClass {

    // Own fields of Gtef-2.Gtef.ApplicationWindowClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class ApplicationWindowClass {

    // Own properties of Gtef-2.Gtef.ApplicationWindowClass

    static name: string
}

export interface ApplicationWindowPrivate {
}

export class ApplicationWindowPrivate {

    // Own properties of Gtef-2.Gtef.ApplicationWindowPrivate

    static name: string
}

export interface BufferClass {

    // Own fields of Gtef-2.Gtef.BufferClass

    parentClass: GtkSource.BufferClass
    gtefCursorMoved: (buffer: Buffer) => void
    padding: object[]
}

export abstract class BufferClass {

    // Own properties of Gtef-2.Gtef.BufferClass

    static name: string
}

export interface Encoding {

    // Owm methods of Gtef-2.Gtef.Encoding

    copy(): Encoding
    equals(enc2: Encoding | null): boolean
    free(): void
    /**
     * Gets the character set of the #GtefEncoding, such as "UTF-8" or "ISO-8859-1".
     */
    getCharset(): string
    /**
     * Gets the name of the #GtefEncoding such as "Unicode" or "Western".
     */
    getName(): string
    isUtf8(): boolean
    /**
     * Returns the encoding name with the charset in parenthesis, for example
     * "Unicode (UTF-8)". If the name is unknown, just the charset is returned.
     */
    toString(): string
}

export class Encoding {

    // Own properties of Gtef-2.Gtef.Encoding

    static name: string

    // Constructors of Gtef-2.Gtef.Encoding

    /**
     * Creates a new #GtefEncoding from a character set such as "UTF-8" or
     * "ISO-8859-1".
     * @constructor 
     * @param charset a character set.
     */
    constructor(charset: string) 
    /**
     * Creates a new #GtefEncoding from a character set such as "UTF-8" or
     * "ISO-8859-1".
     * @constructor 
     * @param charset a character set.
     */
    static new(charset: string): Encoding
    /**
     * Creates a new #GtefEncoding from the current locale, as returned by
     * g_get_charset().
     * @constructor 
     */
    static newFromLocale(): Encoding
    /**
     * Creates a new #GtefEncoding with the "UTF-8" character set.
     * @constructor 
     */
    static newUtf8(): Encoding
    /**
     * Gets a list of all encodings known by #GtefEncoding.
     */
    static getAll(): Encoding[]
    /**
     * Gets the list of default candidate encodings to try when loading a file. See
     * gtk_source_file_loader_set_candidate_encodings().
     * 
     * This function returns a different list depending on the current locale (i.e.
     * language, country and default encoding). The UTF-8 encoding and the current
     * locale encoding are guaranteed to be present in the returned list.
     */
    static getDefaultCandidates(): Encoding[]
}

export interface FileClass {

    // Own fields of Gtef-2.Gtef.FileClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class FileClass {

    // Own properties of Gtef-2.Gtef.FileClass

    static name: string
}

export interface FileLoaderClass {

    // Own fields of Gtef-2.Gtef.FileLoaderClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class FileLoaderClass {

    // Own properties of Gtef-2.Gtef.FileLoaderClass

    static name: string
}

export interface FileMetadataClass {

    // Own fields of Gtef-2.Gtef.FileMetadataClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class FileMetadataClass {

    // Own properties of Gtef-2.Gtef.FileMetadataClass

    static name: string
}

export interface FileSaverClass {

    // Own fields of Gtef-2.Gtef.FileSaverClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class FileSaverClass {

    // Own properties of Gtef-2.Gtef.FileSaverClass

    static name: string
}

export interface FileSaverPrivate {
}

export class FileSaverPrivate {

    // Own properties of Gtef-2.Gtef.FileSaverPrivate

    static name: string
}

export interface FoldRegionClass {

    // Own fields of Gtef-2.Gtef.FoldRegionClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class FoldRegionClass {

    // Own properties of Gtef-2.Gtef.FoldRegionClass

    static name: string
}

export interface GutterRendererFoldsClass {

    // Own fields of Gtef-2.Gtef.GutterRendererFoldsClass

    parentClass: GtkSource.GutterRendererClass
    padding: object[]
}

export abstract class GutterRendererFoldsClass {

    // Own properties of Gtef-2.Gtef.GutterRendererFoldsClass

    static name: string
}

export interface InfoBarClass {

    // Own fields of Gtef-2.Gtef.InfoBarClass

    parentClass: Gtk.InfoBarClass
    padding: object[]
}

export abstract class InfoBarClass {

    // Own properties of Gtef-2.Gtef.InfoBarClass

    static name: string
}

export interface MenuShellClass {

    // Own fields of Gtef-2.Gtef.MenuShellClass

    parentClass: GObject.ObjectClass
    menuItemSelected: (gtefMenuShell: MenuShell, menuItem: Gtk.MenuItem) => void
    menuItemDeselected: (gtefMenuShell: MenuShell, menuItem: Gtk.MenuItem) => void
    padding: object[]
}

export abstract class MenuShellClass {

    // Own properties of Gtef-2.Gtef.MenuShellClass

    static name: string
}

export interface MenuShellPrivate {
}

export class MenuShellPrivate {

    // Own properties of Gtef-2.Gtef.MenuShellPrivate

    static name: string
}

export interface TabClass {

    // Own fields of Gtef-2.Gtef.TabClass

    parentClass: Gtk.GridClass
    padding: object[]
}

export abstract class TabClass {

    // Own properties of Gtef-2.Gtef.TabClass

    static name: string
}

export interface ViewClass {

    // Own fields of Gtef-2.Gtef.ViewClass

    parentClass: GtkSource.ViewClass
    padding: object[]
}

export abstract class ViewClass {

    // Own properties of Gtef-2.Gtef.ViewClass

    static name: string
}
