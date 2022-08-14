
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gedit-3.0
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

export enum TabState {
    STATE_NORMAL,
    STATE_LOADING,
    STATE_REVERTING,
    STATE_SAVING,
    STATE_PRINTING,
    STATE_SHOWING_PRINT_PREVIEW,
    STATE_LOADING_ERROR,
    STATE_REVERTING_ERROR,
    STATE_SAVING_ERROR,
    STATE_GENERIC_ERROR,
    STATE_CLOSING,
    STATE_EXTERNALLY_MODIFIED_NOTIFICATION,
    NUM_OF_STATES,
}
/**
 * Enumeration of debug sections.
 * 
 * Debugging output for a section is enabled by setting an environment variable
 * of the same name. For example, setting the <code>GEDIT_DEBUG_PLUGINS</code>
 * environment variable enables all debugging output for the %GEDIT_DEBUG_PLUGINS
 * section. Setting the special environment variable <code>GEDIT_DEBUG</code>
 * enables output for all sections.
 * @bitfield 
 */
export enum DebugSection {
    NO_DEBUG,
    DEBUG_VIEW,
    DEBUG_PREFS,
    DEBUG_WINDOW,
    DEBUG_PANEL,
    DEBUG_PLUGINS,
    DEBUG_TAB,
    DEBUG_DOCUMENT,
    DEBUG_COMMANDS,
    DEBUG_APP,
    DEBUG_UTILS,
    DEBUG_METADATA,
}
export enum WindowState {
    NORMAL,
    SAVING,
    PRINTING,
    LOADING,
    ERROR,
}
/**
 * Loads `location`. Ignores non-existing locations.
 * @param window a #GeditWindow
 * @param location a #GFile to load
 * @param encoding the #GtkSourceEncoding of `location`
 * @param linePos the line position to place the cursor
 * @param columnPos the line column to place the cursor
 */
export function commandsLoadLocation(window: Window, location: Gio.File, encoding: GtkSource.Encoding | null, linePos: number, columnPos: number): void
/**
 * Loads `locations`. Ignore non-existing locations.
 * @param window a #GeditWindow
 * @param locations the locations to load
 * @param encoding the #GtkSourceEncoding
 * @param linePos the line position to place the cursor
 * @param columnPos the line column to place the cursor
 */
export function commandsLoadLocations(window: Window, locations: Gio.File[], encoding: GtkSource.Encoding | null, linePos: number, columnPos: number): Document[]
/**
 * Asynchronously save all documents belonging to `window`. The result of the
 * operation is not available, so it's difficult to know whether all the
 * documents are correctly saved.
 * @param window a #GeditWindow.
 */
export function commandsSaveAllDocuments(window: Window): void
/**
 * Asynchronously save `document`. `document` must belong to `window`. If you need
 * the result of the operation, use gedit_commands_save_document_async().
 * @param window a #GeditWindow.
 * @param document the #GeditDocument to save.
 */
export function commandsSaveDocument(window: Window, document: Document): void
/**
 * Asynchronously save the `document`. `document` must belong to `window`. The
 * source object of the async task is `document` (which will be the first
 * parameter of the #GAsyncReadyCallback).
 * 
 * When the operation is finished, `callback` will be called. You can then call
 * gedit_commands_save_document_finish() to get the result of the operation.
 * @param document the #GeditDocument to save.
 * @param window a #GeditWindow.
 * @param cancellable optional #GCancellable object, %NULL to ignore.
 * @param callback a #GAsyncReadyCallback to call when the operation   is finished.
 */
export function commandsSaveDocumentAsync(document: Document, window: Window, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Finishes an asynchronous document saving operation started with
 * gedit_commands_save_document_async().
 * 
 * Note that there is no error parameter because the errors are already handled
 * by gedit.
 * @param document a #GeditDocument.
 * @param result a #GAsyncResult.
 */
export function commandsSaveDocumentFinish(document: Document, result: Gio.AsyncResult): boolean
/**
 * If `section` is enabled, then logs the trace information `file,` `line,` and
 * `function`.
 * @param section debug section.
 * @param file file name.
 * @param line line number.
 * @param function_ name of the function that is calling gedit_debug().
 */
export function debug(section: DebugSection, file: string, line: number, function_: string): void
/**
 * Initializes the debugging subsystem of gedit.
 * 
 * The function checks for the existence of certain environment variables to
 * determine whether to enable output for a debug section. To enable output
 * for a specific debug section, set an environment variable of the same name;
 * e.g. to enable output for the %GEDIT_DEBUG_PLUGINS section, set a
 * <code>GEDIT_DEBUG_PLUGINS</code> environment variable. To enable output
 * for all debug sections, set the <code>GEDIT_DEBUG</code> environment
 * variable.
 * 
 * This function must be called before any of the other debug functions are
 * called. It must only be called once.
 */
export function debugInit(): void
/**
 * If the section %GEDIT_DEBUG_PLUGINS is enabled, then logs the trace
 * information `file,` `line,` and `function` along with `message`.
 * 
 * This function may be overridden by GObject Introspection language bindings
 * to be more language-specific.
 * 
 * <emphasis>Python</emphasis>
 * 
 * A PyGObject override is provided that has the following signature:
 * <informalexample>
 *   <programlisting>
 *     def debug_plugin_message(format_str, *format_args):
 *         #...
 *   </programlisting>
 * </informalexample>
 * 
 * It automatically supplies parameters `file,` `line,` and `function,` and it
 * formats <code>format_str</code> with the given format arguments. The syntax
 * of the format string is the usual Python string formatting syntax described
 * by <ulink url="http://docs.python.org/library/stdtypes.html#string-formatting">5.6.2. String Formatting Operations</ulink>.
 * @param file file name.
 * @param line line number.
 * @param function_ name of the function that is calling gedit_debug_plugin_message().
 * @param message a message.
 */
export function debugPluginMessage(file: string, line: number, function_: string, message: string): void
export function utilsBasenameForDisplay(location: Gio.File): string
/**
 * Parse and break an uri apart in its individual components like the uri
 * scheme, user info, port, host and path. The return value pointer can be
 * %NULL to ignore certain parts of the uri. If the function returns %TRUE, then
 * all return value pointers should be freed using g_free
 * @param uri the uri to decode
 */
export function utilsDecodeUri(uri: string): [ /* returnType */ boolean, /* scheme */ string, /* user */ string, /* host */ string, /* port */ string, /* path */ string ]
/**
 * Create a list of valid uri's from a uri-list drop.
 * @param selectionData the #GtkSelectionData from drag_data_received
 */
export function utilsDropGetUris(selectionData: Gtk.SelectionData): string[]
export function utilsGetCompressionTypeFromContentType(contentType: string): GtkSource.CompressionType
export function utilsIsValidLocation(location: Gio.File): boolean
/**
 * Returns a string suitable to be displayed in the UI indicating
 * the name of the directory where the file is located.
 * For remote files it may also contain the hostname etc.
 * For local files it tries to replace the home dir with ~.
 * @param location the location
 */
export function utilsLocationGetDirnameForDisplay(location: Gio.File): string
export function utilsMenuPositionUnderTreeView(treeView: Gtk.TreeView, rect: Gdk.Rectangle): boolean
export function utilsNewlineTypeToString(newlineType: GtkSource.NewlineType): string
export function utilsReplaceHomeDirWithTilde(uri: string): string
/**
 * This function sets up name and description
 * for a specified gtk widget.
 * @param widget The Gtk widget for which name/description to be set
 * @param name Atk name string
 * @param description Atk description string
 */
export function utilsSetAtkNameDescription(widget: Gtk.Widget, name: string, description: string): void
export function utilsSetDirectSaveFilename(context: Gdk.DragContext): string
export function utilsStrEndTruncate(string: string, truncateLength: number): string
export function utilsStrMiddleTruncate(string: string, truncateLength: number): string
export interface MessageBusForeach {
    (objectPath: string, method: string): void
}
/**
 * Callback signature used for connecting callback functions to be called
 * when a message is received (see gedit_message_bus_connect()).
 * @callback 
 * @param bus the #GeditMessageBus on which the message was sent
 * @param message the #GeditMessage which was sent
 */
export interface MessageCallback {
    (bus: MessageBus, message: Message): void
}
export module AppActivatable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gedit-3.0.Gedit.AppActivatable

        /**
         * The app property contains the gedit app for this
         * #GeditAppActivatable instance.
         */
        app?: App | null
    }

}

export interface AppActivatable {

    // Own properties of Gedit-3.0.Gedit.AppActivatable

    /**
     * The app property contains the gedit app for this
     * #GeditAppActivatable instance.
     */
    readonly app: App

    // Owm methods of Gedit-3.0.Gedit.AppActivatable

    // Has conflict: activate(): void
    // Has conflict: deactivate(): void
    /**
     * Gets the #GeditMenuExtension for the menu `extension_point`. Note that
     * the extension point could be in different menus (gear menu, app menu, etc)
     * depending on the platform.
     * @param extensionPoint the extension point section of the menu to get.
     */
    extendMenu(extensionPoint: string): MenuExtension

    // Own virtual methods of Gedit-3.0.Gedit.AppActivatable

    /**
     * Activates the extension on the application.
     * @virtual 
     */
    activate(): void
    /**
     * Deactivates the extension from the application.
     * @virtual 
     */
    deactivate(): void

    // Class property signals of Gedit-3.0.Gedit.AppActivatable

    connect(sigName: "notify::app", callback: any): number
    on(sigName: "notify::app", callback: any): number
    once(sigName: "notify::app", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::app", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class AppActivatable extends GObject.Object {

    // Own properties of Gedit-3.0.Gedit.AppActivatable

    static name: string

    // Constructors of Gedit-3.0.Gedit.AppActivatable

    constructor(config?: AppActivatable.ConstructorProperties) 
    _init(config?: AppActivatable.ConstructorProperties): void
}

export module ViewActivatable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gedit-3.0.Gedit.ViewActivatable

        /**
         * The window property contains the gedit window for this
         * #GeditViewActivatable instance.
         */
        view?: View | null
    }

}

export interface ViewActivatable {

    // Own properties of Gedit-3.0.Gedit.ViewActivatable

    /**
     * The window property contains the gedit window for this
     * #GeditViewActivatable instance.
     */
    readonly view: View

    // Owm methods of Gedit-3.0.Gedit.ViewActivatable

    // Has conflict: activate(): void
    // Has conflict: deactivate(): void

    // Own virtual methods of Gedit-3.0.Gedit.ViewActivatable

    /**
     * Activates the extension on the window property.
     * @virtual 
     */
    activate(): void
    /**
     * Deactivates the extension on the window property.
     * @virtual 
     */
    deactivate(): void

    // Class property signals of Gedit-3.0.Gedit.ViewActivatable

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

export class ViewActivatable extends GObject.Object {

    // Own properties of Gedit-3.0.Gedit.ViewActivatable

    static name: string

    // Constructors of Gedit-3.0.Gedit.ViewActivatable

    constructor(config?: ViewActivatable.ConstructorProperties) 
    _init(config?: ViewActivatable.ConstructorProperties): void
}

export module WindowActivatable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gedit-3.0.Gedit.WindowActivatable

        /**
         * The window property contains the gedit window for this
         * #GeditWindowActivatable instance.
         */
        window?: Window | null
    }

}

export interface WindowActivatable {

    // Own properties of Gedit-3.0.Gedit.WindowActivatable

    /**
     * The window property contains the gedit window for this
     * #GeditWindowActivatable instance.
     */
    readonly window: Window

    // Owm methods of Gedit-3.0.Gedit.WindowActivatable

    // Has conflict: activate(): void
    // Has conflict: deactivate(): void
    // Has conflict: updateState(): void

    // Own virtual methods of Gedit-3.0.Gedit.WindowActivatable

    /**
     * Activates the extension on the window property.
     * @virtual 
     */
    activate(): void
    /**
     * Deactivates the extension on the window property.
     * @virtual 
     */
    deactivate(): void
    /**
     * Triggers an update of the extension internal state to take into account
     * state changes in the window, due to some event or user action.
     * @virtual 
     */
    updateState(): void

    // Class property signals of Gedit-3.0.Gedit.WindowActivatable

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

export class WindowActivatable extends GObject.Object {

    // Own properties of Gedit-3.0.Gedit.WindowActivatable

    static name: string

    // Constructors of Gedit-3.0.Gedit.WindowActivatable

    constructor(config?: WindowActivatable.ConstructorProperties) 
    _init(config?: WindowActivatable.ConstructorProperties): void
}

export module App {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.ActionGroup.ConstructorProperties, Gio.ActionMap.ConstructorProperties, Gtk.Application.ConstructorProperties {
    }

}

export interface App extends Gio.ActionGroup, Gio.ActionMap {

    // Own fields of Gedit-3.0.Gedit.App

    parentInstance: Gtk.Application

    // Owm methods of Gedit-3.0.Gedit.App

    /**
     * Create a new #GeditWindow part of `app`.
     * @param screen 
     */
    createWindow(screen: Gdk.Screen | null): Window
    /**
     * Returns all the documents currently open in #GeditApp.
     */
    getDocuments(): Document[]
    /**
     * Returns all #GeditWindows currently open in #GeditApp.
     * This differs from gtk_application_get_windows() since it does not
     * include the preferences dialog and other auxiliary windows.
     */
    getMainWindows(): Window[]
    /**
     * Returns all the views currently present in #GeditApp.
     */
    getViews(): View[]
    // Has conflict: processWindowEvent(window: Window, event: Gdk.Event): boolean
    // Has conflict: setWindowTitle(window: Window, title: string): void
    // Has conflict: showHelp(parent: Gtk.Window, name: string, linkId: string): boolean

    // Own virtual methods of Gedit-3.0.Gedit.App

    helpLinkId(name: string, linkId: string): string
    processWindowEvent(window: Window, event: Gdk.Event): boolean
    setWindowTitle(window: Window, title: string): void
    showHelp(parent: Gtk.Window, name: string, linkId: string): boolean

    // Class property signals of Gedit-3.0.Gedit.App

    connect(sigName: "notify::active-window", callback: any): number
    on(sigName: "notify::active-window", callback: any): number
    once(sigName: "notify::active-window", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active-window", ...args: any[]): void
    connect(sigName: "notify::app-menu", callback: any): number
    on(sigName: "notify::app-menu", callback: any): number
    once(sigName: "notify::app-menu", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::app-menu", ...args: any[]): void
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

export class App extends Gtk.Application {

    // Own properties of Gedit-3.0.Gedit.App

    static name: string

    // Constructors of Gedit-3.0.Gedit.App

    constructor(config?: App.ConstructorProperties) 
    _init(config?: App.ConstructorProperties): void

    // Conflicting static methods

    static new(...args: any[]): any
}

export module Document {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cursor-moved`
     */
    export interface CursorMovedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `load`
     */
    export interface LoadSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `loaded`
     */
    export interface LoadedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `save`
     */
    export interface SaveSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `saved`
     */
    export interface SavedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GtkSource.Buffer.ConstructorProperties {

        // Own constructor properties of Gedit-3.0.Gedit.Document

        /**
         * The document's content type.
         */
        contentType?: string | null
        /**
         * Whether to use GVFS metadata. If %FALSE, use the gedit metadata
         * manager that stores the metadata in an XML file in the user cache
         * directory.
         * 
         * <warning>
         * The property is used internally by gedit. It must not be used in a
         * gedit plugin. The property can be modified or removed at any time.
         * </warning>
         */
        useGvfsMetadata?: boolean | null
    }

}

export interface Document {

    // Own properties of Gedit-3.0.Gedit.Document

    /**
     * The document's content type.
     */
    contentType: string
    /**
     * <warning>
     * The property is used internally by gedit. It must not be used in a
     * gedit plugin. The property can be modified or removed at any time.
     * </warning>
     */
    readonly emptySearch: boolean
    /**
     * The document's MIME type.
     */
    readonly mimeType: string
    /**
     * The document's short name.
     */
    readonly shortname: string
    /**
     * Whether to use GVFS metadata. If %FALSE, use the gedit metadata
     * manager that stores the metadata in an XML file in the user cache
     * directory.
     * 
     * <warning>
     * The property is used internally by gedit. It must not be used in a
     * gedit plugin. The property can be modified or removed at any time.
     * </warning>
     */
    readonly useGvfsMetadata: boolean

    // Conflicting properties

    priv: any & Gtk.TextBufferPrivate

    // Own fields of Gedit-3.0.Gedit.Document

    parentInstance: any

    // Owm methods of Gedit-3.0.Gedit.Document

    getContentType(): string
    /**
     * Gets the associated #GtkSourceFile. You should use it only for reading
     * purposes, not for creating a #GtkSourceFileLoader or #GtkSourceFileSaver,
     * because gedit does some extra work when loading or saving a file and
     * maintains an internal state. If you use in a plugin a file loader or saver on
     * the returned #GtkSourceFile, the internal state of gedit won't be updated.
     * 
     * If you want to save the #GeditDocument to a secondary file, you can create a
     * new #GtkSourceFile and use a #GtkSourceFileSaver.
     */
    getFile(): GtkSource.File
    getLanguage(): GtkSource.Language

    // Overloads of getLanguage

    /**
     * Returns the #GtkSourceLanguage associated with the buffer,
     * see gtk_source_buffer_set_language().  The returned object should not be
     * unreferenced by the user.
     */
    getLanguage(): GtkSource.Language | null
    /**
     * Gets the metadata assigned to `key`.
     * @param key name of the key
     */
    getMetadata(key: string): string
    /**
     * Note: this never returns %NULL.
     */
    getMimeType(): string
    /**
     * Gets the search context. Use this function only if you have used
     * gedit_document_set_search_context() before. You should not alter other search
     * contexts, so you have to verify that the returned search context is yours.
     * One way to verify that is to compare the search settings object, or to mark
     * the search context with g_object_set_data().
     */
    getSearchContext(): GtkSource.SearchContext
    /**
     * Note: this never returns %NULL.
     */
    getShortNameForDisplay(): string
    gotoLine(line: number): boolean
    gotoLineOffset(line: number, lineOffset: number): boolean
    isUntitled(): boolean
    isUntouched(): boolean
    setLanguage(lang: GtkSource.Language | null): void
    /**
     * Sets the new search context for the document. Use this function only when the
     * search occurrences are highlighted. So this function should not be used for
     * background searches. The purpose is to have only one highlighted search
     * context at a time in the document.
     * 
     * After using this function, you should unref the `search_context`. The `doc`
     * should be the only owner of the `search_context,` so that the Clear Highlight
     * action works. If you need the `search_context` after calling this function,
     * use gedit_document_get_search_context().
     * @param searchContext the new #GtkSourceSearchContext
     */
    setSearchContext(searchContext: GtkSource.SearchContext | null): void

    // Own virtual methods of Gedit-3.0.Gedit.Document

    cursorMoved(): void
    load(): void
    loaded(): void
    save(): void
    saved(): void

    // Own signals of Gedit-3.0.Gedit.Document

    connect(sigName: "cursor-moved", callback: Document.CursorMovedSignalCallback): number
    on(sigName: "cursor-moved", callback: Document.CursorMovedSignalCallback): number
    once(sigName: "cursor-moved", callback: Document.CursorMovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "cursor-moved", ...args: any[]): void
    connect(sigName: "load", callback: Document.LoadSignalCallback): number
    on(sigName: "load", callback: Document.LoadSignalCallback): number
    once(sigName: "load", callback: Document.LoadSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "load", ...args: any[]): void
    connect(sigName: "loaded", callback: Document.LoadedSignalCallback): number
    on(sigName: "loaded", callback: Document.LoadedSignalCallback): number
    once(sigName: "loaded", callback: Document.LoadedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "loaded", ...args: any[]): void
    connect(sigName: "save", callback: Document.SaveSignalCallback): number
    on(sigName: "save", callback: Document.SaveSignalCallback): number
    once(sigName: "save", callback: Document.SaveSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "save", ...args: any[]): void
    connect(sigName: "saved", callback: Document.SavedSignalCallback): number
    on(sigName: "saved", callback: Document.SavedSignalCallback): number
    once(sigName: "saved", callback: Document.SavedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "saved", ...args: any[]): void

    // Class property signals of Gedit-3.0.Gedit.Document

    connect(sigName: "notify::content-type", callback: any): number
    on(sigName: "notify::content-type", callback: any): number
    once(sigName: "notify::content-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::empty-search", callback: any): number
    on(sigName: "notify::empty-search", callback: any): number
    once(sigName: "notify::empty-search", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::empty-search", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: any): number
    on(sigName: "notify::mime-type", callback: any): number
    once(sigName: "notify::mime-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::shortname", callback: any): number
    on(sigName: "notify::shortname", callback: any): number
    once(sigName: "notify::shortname", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::shortname", ...args: any[]): void
    connect(sigName: "notify::use-gvfs-metadata", callback: any): number
    on(sigName: "notify::use-gvfs-metadata", callback: any): number
    once(sigName: "notify::use-gvfs-metadata", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-gvfs-metadata", ...args: any[]): void
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

export class Document extends GtkSource.Buffer {

    // Own properties of Gedit-3.0.Gedit.Document

    static name: string

    // Constructors of Gedit-3.0.Gedit.Document

    constructor(config?: Document.ConstructorProperties) 
    constructor() 
    static new(): Document

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
    _init(config?: Document.ConstructorProperties): void
}

export module EncodingsComboBox {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.CellEditable.ConstructorProperties, Gtk.CellLayout.ConstructorProperties, Gtk.ComboBox.ConstructorProperties {

        // Own constructor properties of Gedit-3.0.Gedit.EncodingsComboBox

        /**
         * Whether the combo box should be used for saving a content. If
         * %FALSE, the combo box is used for loading a content (e.g. a file)
         * and the row "Automatically Detected" is added.
         */
        saveMode?: boolean | null
    }

}

export interface EncodingsComboBox extends Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {

    // Own properties of Gedit-3.0.Gedit.EncodingsComboBox

    /**
     * Whether the combo box should be used for saving a content. If
     * %FALSE, the combo box is used for loading a content (e.g. a file)
     * and the row "Automatically Detected" is added.
     */
    saveMode: boolean

    // Conflicting properties

    parentInstance: any

    // Owm methods of Gedit-3.0.Gedit.EncodingsComboBox

    getSelectedEncoding(): GtkSource.Encoding
    /**
     * Sets the selected encoding.
     * @param encoding the #GtkSourceEncoding.
     */
    setSelectedEncoding(encoding: GtkSource.Encoding): void

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

    // Class property signals of Gedit-3.0.Gedit.EncodingsComboBox

    connect(sigName: "notify::save-mode", callback: any): number
    on(sigName: "notify::save-mode", callback: any): number
    once(sigName: "notify::save-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::save-mode", ...args: any[]): void
    connect(sigName: "notify::active", callback: any): number
    on(sigName: "notify::active", callback: any): number
    once(sigName: "notify::active", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::active-id", callback: any): number
    on(sigName: "notify::active-id", callback: any): number
    once(sigName: "notify::active-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active-id", ...args: any[]): void
    connect(sigName: "notify::add-tearoffs", callback: any): number
    on(sigName: "notify::add-tearoffs", callback: any): number
    once(sigName: "notify::add-tearoffs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::add-tearoffs", ...args: any[]): void
    connect(sigName: "notify::button-sensitivity", callback: any): number
    on(sigName: "notify::button-sensitivity", callback: any): number
    once(sigName: "notify::button-sensitivity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::button-sensitivity", ...args: any[]): void
    connect(sigName: "notify::cell-area", callback: any): number
    on(sigName: "notify::cell-area", callback: any): number
    once(sigName: "notify::cell-area", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cell-area", ...args: any[]): void
    connect(sigName: "notify::column-span-column", callback: any): number
    on(sigName: "notify::column-span-column", callback: any): number
    once(sigName: "notify::column-span-column", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-span-column", ...args: any[]): void
    connect(sigName: "notify::entry-text-column", callback: any): number
    on(sigName: "notify::entry-text-column", callback: any): number
    once(sigName: "notify::entry-text-column", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::entry-text-column", ...args: any[]): void
    connect(sigName: "notify::has-entry", callback: any): number
    on(sigName: "notify::has-entry", callback: any): number
    once(sigName: "notify::has-entry", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-entry", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: any): number
    on(sigName: "notify::has-frame", callback: any): number
    once(sigName: "notify::has-frame", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::id-column", callback: any): number
    on(sigName: "notify::id-column", callback: any): number
    once(sigName: "notify::id-column", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id-column", ...args: any[]): void
    connect(sigName: "notify::model", callback: any): number
    on(sigName: "notify::model", callback: any): number
    once(sigName: "notify::model", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::popup-fixed-width", callback: any): number
    on(sigName: "notify::popup-fixed-width", callback: any): number
    once(sigName: "notify::popup-fixed-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::popup-fixed-width", ...args: any[]): void
    connect(sigName: "notify::popup-shown", callback: any): number
    on(sigName: "notify::popup-shown", callback: any): number
    once(sigName: "notify::popup-shown", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::popup-shown", ...args: any[]): void
    connect(sigName: "notify::row-span-column", callback: any): number
    on(sigName: "notify::row-span-column", callback: any): number
    once(sigName: "notify::row-span-column", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-span-column", ...args: any[]): void
    connect(sigName: "notify::tearoff-title", callback: any): number
    on(sigName: "notify::tearoff-title", callback: any): number
    once(sigName: "notify::tearoff-title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tearoff-title", ...args: any[]): void
    connect(sigName: "notify::wrap-width", callback: any): number
    on(sigName: "notify::wrap-width", callback: any): number
    once(sigName: "notify::wrap-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::wrap-width", ...args: any[]): void
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
    connect(sigName: "notify::editing-canceled", callback: any): number
    on(sigName: "notify::editing-canceled", callback: any): number
    once(sigName: "notify::editing-canceled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::editing-canceled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EncodingsComboBox extends Gtk.ComboBox {

    // Own properties of Gedit-3.0.Gedit.EncodingsComboBox

    static name: string

    // Constructors of Gedit-3.0.Gedit.EncodingsComboBox

    constructor(config?: EncodingsComboBox.ConstructorProperties) 
    /**
     * Creates a new encodings combo box object. If `save_mode` is %FALSE, it means
     * that the combo box is used for loading a content (e.g. a file), so the row
     * "Automatically Detected" is added. For saving a content, the encoding must be
     * provided.
     * @constructor 
     * @param saveMode whether the combo box is used for saving a content.
     */
    constructor(saveMode: boolean) 
    /**
     * Creates a new encodings combo box object. If `save_mode` is %FALSE, it means
     * that the combo box is used for loading a content (e.g. a file), so the row
     * "Automatically Detected" is added. For saving a content, the encoding must be
     * provided.
     * @constructor 
     * @param saveMode whether the combo box is used for saving a content.
     */
    static new(saveMode: boolean): EncodingsComboBox

    // Overloads of new

    /**
     * Creates a new empty #GtkComboBox.
     * @constructor 
     */
    static new(): Gtk.ComboBox
    _init(config?: EncodingsComboBox.ConstructorProperties): void
}

export module MenuExtension {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gedit-3.0.Gedit.MenuExtension

        menu?: Gio.Menu | null
    }

}

export interface MenuExtension {

    // Own properties of Gedit-3.0.Gedit.MenuExtension

    readonly menu: Gio.Menu

    // Owm methods of Gedit-3.0.Gedit.MenuExtension

    appendMenuItem(item: Gio.MenuItem): void
    prependMenuItem(item: Gio.MenuItem): void
    removeItems(): void

    // Class property signals of Gedit-3.0.Gedit.MenuExtension

    connect(sigName: "notify::menu", callback: any): number
    on(sigName: "notify::menu", callback: any): number
    once(sigName: "notify::menu", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::menu", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MenuExtension extends GObject.Object {

    // Own properties of Gedit-3.0.Gedit.MenuExtension

    static name: string

    // Constructors of Gedit-3.0.Gedit.MenuExtension

    constructor(config?: MenuExtension.ConstructorProperties) 
    constructor(menu: Gio.Menu) 
    static new(menu: Gio.Menu): MenuExtension
    _init(config?: MenuExtension.ConstructorProperties): void
}

export module Message {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gedit-3.0.Gedit.Message

        /**
         * The messages method.
         */
        method?: string | null
        objectPath?: string | null
    }

}

export interface Message {

    // Own properties of Gedit-3.0.Gedit.Message

    /**
     * The messages method.
     */
    method: string
    objectPath: string

    // Own fields of Gedit-3.0.Gedit.Message

    parent: GObject.Object
    priv: MessagePrivate

    // Owm methods of Gedit-3.0.Gedit.Message

    /**
     * Get the message method.
     */
    getMethod(): string
    /**
     * Get the message object path.
     */
    getObjectPath(): string
    /**
     * Check if a message has a certain property.
     * @param propname the property name
     */
    has(propname: string): boolean

    // Class property signals of Gedit-3.0.Gedit.Message

    connect(sigName: "notify::method", callback: any): number
    on(sigName: "notify::method", callback: any): number
    once(sigName: "notify::method", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::method", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Message extends GObject.Object {

    // Own properties of Gedit-3.0.Gedit.Message

    static name: string

    // Constructors of Gedit-3.0.Gedit.Message

    constructor(config?: Message.ConstructorProperties) 
    _init(config?: Message.ConstructorProperties): void
    /**
     * Returns whether `object_path` is a valid object path
     * @param objectPath the object path
     */
    static isValidObjectPath(objectPath: string | null): boolean
    static typeCheck(gtype: GObject.GType, propname: string, valueType: GObject.GType): boolean
    static typeHas(gtype: GObject.GType, propname: string): boolean
    /**
     * Get the string identifier for `method` at `object_path`.
     * @param objectPath the object path
     * @param method the method
     */
    static typeIdentifier(objectPath: string | null, method: string | null): string
}

export module MessageBus {

    // Signal callback interfaces

    /**
     * Signal callback interface for `dispatch`
     */
    export interface DispatchSignalCallback {
        (message: Message): void
    }

    /**
     * Signal callback interface for `registered`
     */
    export interface RegisteredSignalCallback {
        (objectPath: string, method: string): void
    }

    /**
     * Signal callback interface for `unregistered`
     */
    export interface UnregisteredSignalCallback {
        (objectPath: string, method: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MessageBus {

    // Own fields of Gedit-3.0.Gedit.MessageBus

    parent: GObject.Object
    priv: MessageBusPrivate

    // Owm methods of Gedit-3.0.Gedit.MessageBus

    /**
     * Blocks evoking the callback specified by `id`. Unblock the callback by
     * using gedit_message_bus_unblock().
     * @param id the callback id
     */
    block(id: number): void
    /**
     * Blocks evoking the callback that matches provided `callback` and `user_data`.
     * Unblock the callback using gedit_message_bus_unblock_by_func().
     * @param objectPath the object path
     * @param method the method
     * @param callback the callback to block
     */
    blockByFunc(objectPath: string, method: string, callback: MessageCallback): void
    // Has conflict: connect(objectPath: string, method: string, callback: MessageCallback): number
    /**
     * Disconnects a previously connected message callback.
     * @param id the callback id as returned by gedit_message_bus_connect()
     */
    disconnect(id: number): void
    /**
     * Disconnects a previously connected message callback by matching the
     * provided callback function and user_data. See also
     * gedit_message_bus_disconnect().
     * @param objectPath the object path
     * @param method the method
     * @param callback the connected callback
     */
    disconnectByFunc(objectPath: string, method: string, callback: MessageCallback): void
    /**
     * Calls `func` for each message type registered on the bus
     * @param func the callback function
     */
    foreach(func: MessageBusForeach): void
    /**
     * Check whether a message type `method` at `object_path` is registered on the
     * bus.
     * @param objectPath the object path
     * @param method the method
     */
    isRegistered(objectPath: string, method: string): boolean
    /**
     * Get the registered #GeditMessageType for `method` at `object_path`. The
     * returned #GeditMessageType is owned by the bus and should not be unreffed.
     * @param objectPath the object path
     * @param method the method
     */
    lookup(objectPath: string, method: string): GObject.GType
    /**
     * Register a message on the bus. A message must be registered on the bus before
     * it can be send. This function registers the type for `method` at
     * `object_path`.
     * 
     * This function emits a #GeditMessageBus::registered signal.
     * @param messageType the message type
     * @param objectPath the object path
     * @param method the method to register
     */
    register(messageType: GObject.GType, objectPath: string, method: string): void
    /**
     * This sends the provided `message` asynchronously over the bus. To send
     * a message synchronously, use gedit_message_bus_send_message_sync(). The
     * convenience function gedit_message_bus_send() can be used to easily send
     * a message without constructing the message object explicitly first.
     * @param message the message to send
     */
    sendMessage(message: Message): void
    /**
     * This sends the provided `message` synchronously over the bus. To send
     * a message asynchronously, use gedit_message_bus_send_message(). The
     * convenience function gedit_message_bus_send_sync() can be used to easily send
     * a message without constructing the message object explicitly first.
     * @param message the message to send
     */
    sendMessageSync(message: Message): void
    /**
     * Unblocks the callback specified by `id`.
     * @param id the callback id
     */
    unblock(id: number): void
    /**
     * Unblocks the callback that matches provided `callback` and `user_data`.
     * @param objectPath the object path
     * @param method the method
     * @param callback the callback to block
     */
    unblockByFunc(objectPath: string, method: string, callback: MessageCallback): void
    /**
     * Unregisters a previously registered message type. This is especially useful
     * for plugins which should unregister message types when they are deactivated.
     * 
     * This function emits the #GeditMessageBus::unregistered signal.
     * @param objectPath the object path
     * @param method the method
     */
    unregister(objectPath: string, method: string): void
    /**
     * Unregisters all message types for `object_path`. This is especially useful for
     * plugins which should unregister message types when they are deactivated.
     * 
     * This function emits the #GeditMessageBus::unregistered signal for all
     * unregistered message types.
     * @param objectPath the object path
     */
    unregisterAll(objectPath: string): void

    // Own virtual methods of Gedit-3.0.Gedit.MessageBus

    dispatch(message: Message): void
    registered(objectPath: string, method: string): void
    unregistered(objectPath: string, method: string): void

    // Own signals of Gedit-3.0.Gedit.MessageBus

    connect(sigName: "dispatch", callback: MessageBus.DispatchSignalCallback): number
    on(sigName: "dispatch", callback: MessageBus.DispatchSignalCallback): number
    once(sigName: "dispatch", callback: MessageBus.DispatchSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "dispatch", ...args: any[]): void
    connect(sigName: "registered", callback: MessageBus.RegisteredSignalCallback): number
    on(sigName: "registered", callback: MessageBus.RegisteredSignalCallback): number
    once(sigName: "registered", callback: MessageBus.RegisteredSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "registered", method: string, ...args: any[]): void
    connect(sigName: "unregistered", callback: MessageBus.UnregisteredSignalCallback): number
    on(sigName: "unregistered", callback: MessageBus.UnregisteredSignalCallback): number
    once(sigName: "unregistered", callback: MessageBus.UnregisteredSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "unregistered", method: string, ...args: any[]): void

    // Class property signals of Gedit-3.0.Gedit.MessageBus

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MessageBus extends GObject.Object {

    // Own properties of Gedit-3.0.Gedit.MessageBus

    static name: string

    // Constructors of Gedit-3.0.Gedit.MessageBus

    constructor(config?: MessageBus.ConstructorProperties) 
    /**
     * Create a new message bus. Use gedit_message_bus_get_default() to get the
     * default, application wide, message bus. Creating a new bus is useful for
     * associating a specific bus with for instance a #GeditWindow.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new message bus. Use gedit_message_bus_get_default() to get the
     * default, application wide, message bus. Creating a new bus is useful for
     * associating a specific bus with for instance a #GeditWindow.
     * @constructor 
     */
    static new(): MessageBus
    _init(config?: MessageBus.ConstructorProperties): void
    /**
     * Get the default application #GeditMessageBus.
     */
    static getDefault(): MessageBus
}

export module ProgressInfoBar {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.InfoBar.ConstructorProperties {

        // Own constructor properties of Gedit-3.0.Gedit.ProgressInfoBar

        hasCancelButton?: boolean | null
    }

}

export interface ProgressInfoBar extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gedit-3.0.Gedit.ProgressInfoBar

    readonly hasCancelButton: boolean

    // Conflicting properties

    parent: Gtk.Box & Gtk.Container & Gtk.Container

    // Owm methods of Gedit-3.0.Gedit.ProgressInfoBar

    pulse(): void
    setFraction(fraction: number): void
    setIconName(iconName: string): void
    setMarkup(markup: string): void
    setText(text: string): void

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

    // Class property signals of Gedit-3.0.Gedit.ProgressInfoBar

    connect(sigName: "notify::has-cancel-button", callback: any): number
    on(sigName: "notify::has-cancel-button", callback: any): number
    once(sigName: "notify::has-cancel-button", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-cancel-button", ...args: any[]): void
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

export class ProgressInfoBar extends Gtk.InfoBar {

    // Own properties of Gedit-3.0.Gedit.ProgressInfoBar

    static name: string

    // Constructors of Gedit-3.0.Gedit.ProgressInfoBar

    constructor(config?: ProgressInfoBar.ConstructorProperties) 
    constructor(iconName: string, markup: string, hasCancel: boolean) 
    static new(iconName: string, markup: string, hasCancel: boolean): ProgressInfoBar

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
    _init(config?: ProgressInfoBar.ConstructorProperties): void
}

export module Statusbar {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Statusbar.ConstructorProperties {
    }

}

export interface Statusbar extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Owm methods of Gedit-3.0.Gedit.Statusbar

    clearOverwrite(): void
    /**
     * Sets the overwrite mode on the statusbar.
     * @param overwrite if the overwrite mode is set
     */
    setOverwrite(overwrite: boolean): void
    setWindowState(state: WindowState, numOfErrors: number): void

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

    // Class property signals of Gedit-3.0.Gedit.Statusbar

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

    // Own properties of Gedit-3.0.Gedit.Statusbar

    static name: string

    // Constructors of Gedit-3.0.Gedit.Statusbar

    constructor(config?: Statusbar.ConstructorProperties) 
    /**
     * Creates a new #GeditStatusbar.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GeditStatusbar.
     * @constructor 
     */
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

export module Tab {

    // Signal callback interfaces

    /**
     * Signal callback interface for `drop-uris`
     */
    export interface DropUrisSignalCallback {
        (object: string[]): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Gedit-3.0.Gedit.Tab

        autosave?: boolean | null
        autosaveInterval?: number | null
    }

}

export interface Tab extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gedit-3.0.Gedit.Tab

    autosave: boolean
    autosaveInterval: number
    readonly canClose: boolean
    readonly name: any
    readonly state: TabState

    // Owm methods of Gedit-3.0.Gedit.Tab

    /**
     * Gets the current state for the autosave feature
     */
    getAutoSaveEnabled(): boolean
    /**
     * Gets the current interval for the autosaves
     */
    getAutoSaveInterval(): number
    /**
     * Gets the #GeditDocument associated to `tab`.
     */
    getDocument(): Document
    /**
     * Gets the #GeditTabState of `tab`.
     */
    getState(): TabState

    // Overloads of getState

    /**
     * Returns the widget’s state. See gtk_widget_set_state().
     */
    getState(): Gtk.StateType
    /**
     * Gets the #GeditView inside `tab`.
     */
    getView(): View
    /**
     * Enables or disables the autosave feature. It does not install an
     * autosave timeout if the document is new or is read-only
     * @param enable enable (%TRUE) or disable (%FALSE) auto save
     */
    setAutoSaveEnabled(enable: boolean): void
    /**
     * Sets the interval for the autosave feature.
     * @param interval the new interval
     */
    setAutoSaveInterval(interval: number): void
    setInfoBar(infoBar: Gtk.Widget): void

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

    // Own signals of Gedit-3.0.Gedit.Tab

    connect(sigName: "drop-uris", callback: Tab.DropUrisSignalCallback): number
    on(sigName: "drop-uris", callback: Tab.DropUrisSignalCallback): number
    once(sigName: "drop-uris", callback: Tab.DropUrisSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "drop-uris", ...args: any[]): void

    // Class property signals of Gedit-3.0.Gedit.Tab

    connect(sigName: "notify::autosave", callback: any): number
    on(sigName: "notify::autosave", callback: any): number
    once(sigName: "notify::autosave", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::autosave", ...args: any[]): void
    connect(sigName: "notify::autosave-interval", callback: any): number
    on(sigName: "notify::autosave-interval", callback: any): number
    once(sigName: "notify::autosave-interval", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::autosave-interval", ...args: any[]): void
    connect(sigName: "notify::can-close", callback: any): number
    on(sigName: "notify::can-close", callback: any): number
    once(sigName: "notify::can-close", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-close", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
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

export class Tab extends Gtk.Box {

    // Own properties of Gedit-3.0.Gedit.Tab

    static name: string

    // Constructors of Gedit-3.0.Gedit.Tab

    constructor(config?: Tab.ConstructorProperties) 
    _init(config?: Tab.ConstructorProperties): void
    /**
     * Gets the #GeditTab associated with `doc`.
     * @param doc a #GeditDocument
     */
    static getFromDocument(doc: Document): Tab
}

export module View {

    // Signal callback interfaces

    /**
     * Signal callback interface for `drop-uris`
     */
    export interface DropUrisSignalCallback {
        (uriList: string[]): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, GtkSource.View.ConstructorProperties {
    }

}

export interface View extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Conflicting properties

    parent: Gtk.TextView & Gtk.Container & Gtk.Container
    parentInstance: any

    // Own fields of Gedit-3.0.Gedit.View

    view: GtkSource.View

    // Owm methods of Gedit-3.0.Gedit.View

    copyClipboard(): void

    // Overloads of copyClipboard

    copyClipboard(): void
    cutClipboard(): void

    // Overloads of cutClipboard

    cutClipboard(): void
    /**
     * Deletes the text currently selected in the #GtkTextBuffer associated
     * to the view and scroll to the cursor position.
     */
    deleteSelection(): void
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
     * If `default_font` is #TRUE, resets the font of the `view` to the default font.
     * Otherwise sets it to `font_name`.
     * @param defaultFont whether to reset to the default font
     * @param fontName the name of the font to use
     */
    setFont(defaultFont: boolean, fontName: string): void

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

    // Own virtual methods of Gedit-3.0.Gedit.View

    dropUris(uriList: string): void

    // Own signals of Gedit-3.0.Gedit.View

    connect(sigName: "drop-uris", callback: View.DropUrisSignalCallback): number
    on(sigName: "drop-uris", callback: View.DropUrisSignalCallback): number
    once(sigName: "drop-uris", callback: View.DropUrisSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "drop-uris", ...args: any[]): void

    // Class property signals of Gedit-3.0.Gedit.View

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

    // Own properties of Gedit-3.0.Gedit.View

    static name: string

    // Constructors of Gedit-3.0.Gedit.View

    constructor(config?: View.ConstructorProperties) 
    /**
     * Creates a new #GeditView object displaying the `doc` document.
     * `doc` cannot be %NULL.
     * @constructor 
     * @param doc a #GeditDocument
     */
    constructor(doc: Document) 
    /**
     * Creates a new #GeditView object displaying the `doc` document.
     * `doc` cannot be %NULL.
     * @constructor 
     * @param doc a #GeditDocument
     */
    static new(doc: Document): View

    // Overloads of new

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
    static new(): GtkSource.View
    _init(config?: View.ConstructorProperties): void

    // Conflicting static methods

    static newWithBuffer(...args: any[]): any
}

export module Window {

    // Signal callback interfaces

    /**
     * Signal callback interface for `active-tab-changed`
     */
    export interface ActiveTabChangedSignalCallback {
        (object: Tab): void
    }

    /**
     * Signal callback interface for `active-tab-state-changed`
     */
    export interface ActiveTabStateChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `tab-added`
     */
    export interface TabAddedSignalCallback {
        (object: Tab): void
    }

    /**
     * Signal callback interface for `tab-removed`
     */
    export interface TabRemovedSignalCallback {
        (object: Tab): void
    }

    /**
     * Signal callback interface for `tabs-reordered`
     */
    export interface TabsReorderedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gio.ActionGroup.ConstructorProperties, Gio.ActionMap.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ApplicationWindow.ConstructorProperties {
    }

}

export interface Window extends Atk.ImplementorIface, Gio.ActionGroup, Gio.ActionMap, Gtk.Buildable {

    // Own properties of Gedit-3.0.Gedit.Window

    readonly state: WindowState

    // Conflicting properties

    parentInstance: any

    // Own fields of Gedit-3.0.Gedit.Window

    readonly window: Gtk.ApplicationWindow & Gdk.Window

    // Owm methods of Gedit-3.0.Gedit.Window

    /**
     * Closes all opened tabs.
     */
    closeAllTabs(): void
    /**
     * Closes the `tab`.
     * @param tab the #GeditTab to close
     */
    closeTab(tab: Tab): void
    /**
     * Closes all tabs specified by `tabs`.
     * @param tabs a list of #GeditTab
     */
    closeTabs(tabs: Tab[]): void
    /**
     * Creates a new #GeditTab and adds the new tab to the #GtkNotebook.
     * In case `jump_to` is %TRUE the #GtkNotebook switches to that new #GeditTab.
     * @param jumpTo %TRUE to set the new #GeditTab as active
     */
    createTab(jumpTo: boolean): Tab
    /**
     * Creates a new #GeditTab loading the document specified by `uri`.
     * In case `jump_to` is %TRUE the #GtkNotebook swithes to that new #GeditTab.
     * Whether `create` is %TRUE, creates a new empty document if location does
     * not refer to an existing file
     * @param location the location of the document
     * @param encoding a #GtkSourceEncoding, or %NULL
     * @param linePos the line position to visualize
     * @param columnPos the column position to visualize
     * @param create %TRUE to create a new document in case `uri` does exist
     * @param jumpTo %TRUE to set the new #GeditTab as active
     */
    createTabFromLocation(location: Gio.File, encoding: GtkSource.Encoding | null, linePos: number, columnPos: number, create: boolean, jumpTo: boolean): Tab
    createTabFromStream(stream: Gio.InputStream, encoding: GtkSource.Encoding | null, linePos: number, columnPos: number, jumpTo: boolean): Tab
    /**
     * Gets the active #GeditDocument.
     */
    getActiveDocument(): Document
    /**
     * Gets the active #GeditTab in the `window`.
     */
    getActiveTab(): Tab
    /**
     * Gets the active #GeditView.
     */
    getActiveView(): View
    /**
     * Gets the bottom panel of the `window`.
     */
    getBottomPanel(): Gtk.Widget
    /**
     * Gets a newly allocated list with all the documents in the window.
     * This list must be freed.
     */
    getDocuments(): Document[]
    /**
     * Gets the #GtkWindowGroup in which `window` resides.
     */
    getGroup(): Gtk.WindowGroup
    /**
     * Gets the #GeditMessageBus associated with `window`. The returned reference
     * is owned by the window and should not be unreffed.
     */
    getMessageBus(): MessageBus
    /**
     * Gets the side panel of the `window`.
     */
    getSidePanel(): Gtk.Widget
    /**
     * Retrieves the state of the `window`.
     */
    getState(): WindowState

    // Overloads of getState

    /**
     * Returns the widget’s state. See gtk_widget_set_state().
     */
    getState(): Gtk.StateType
    /**
     * Gets the #GeditStatusbar of the `window`.
     */
    getStatusbar(): Gtk.Widget
    /**
     * Gets the #GeditTab that matches with the given `location`.
     * @param location a #GFile
     */
    getTabFromLocation(location: Gio.File): Tab
    /**
     * Gets the list of documents that need to be saved before closing the window.
     */
    getUnsavedDocuments(): Document[]
    /**
     * Gets a list with all the views in the window. This list must be freed.
     */
    getViews(): View[]
    /**
     * Switches to the tab that matches with `tab`.
     * @param tab a #GeditTab
     */
    setActiveTab(tab: Tab): void

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

    // Own virtual methods of Gedit-3.0.Gedit.Window

    activeTabChanged(tab: Tab): void
    activeTabStateChanged(): void
    tabAdded(tab: Tab): void
    tabRemoved(tab: Tab): void
    tabsReordered(): void

    // Own signals of Gedit-3.0.Gedit.Window

    connect(sigName: "active-tab-changed", callback: Window.ActiveTabChangedSignalCallback): number
    on(sigName: "active-tab-changed", callback: Window.ActiveTabChangedSignalCallback): number
    once(sigName: "active-tab-changed", callback: Window.ActiveTabChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "active-tab-changed", ...args: any[]): void
    connect(sigName: "active-tab-state-changed", callback: Window.ActiveTabStateChangedSignalCallback): number
    on(sigName: "active-tab-state-changed", callback: Window.ActiveTabStateChangedSignalCallback): number
    once(sigName: "active-tab-state-changed", callback: Window.ActiveTabStateChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "active-tab-state-changed", ...args: any[]): void
    connect(sigName: "tab-added", callback: Window.TabAddedSignalCallback): number
    on(sigName: "tab-added", callback: Window.TabAddedSignalCallback): number
    once(sigName: "tab-added", callback: Window.TabAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "tab-added", ...args: any[]): void
    connect(sigName: "tab-removed", callback: Window.TabRemovedSignalCallback): number
    on(sigName: "tab-removed", callback: Window.TabRemovedSignalCallback): number
    once(sigName: "tab-removed", callback: Window.TabRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "tab-removed", ...args: any[]): void
    connect(sigName: "tabs-reordered", callback: Window.TabsReorderedSignalCallback): number
    on(sigName: "tabs-reordered", callback: Window.TabsReorderedSignalCallback): number
    once(sigName: "tabs-reordered", callback: Window.TabsReorderedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "tabs-reordered", ...args: any[]): void

    // Class property signals of Gedit-3.0.Gedit.Window

    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
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

export class Window extends Gtk.ApplicationWindow {

    // Own properties of Gedit-3.0.Gedit.Window

    static name: string

    // Constructors of Gedit-3.0.Gedit.Window

    constructor(config?: Window.ConstructorProperties) 
    _init(config?: Window.ConstructorProperties): void

    // Conflicting static methods

    static new(...args: any[]): any
}

export interface AppActivatableInterface {

    // Own fields of Gedit-3.0.Gedit.AppActivatableInterface

    gIface: GObject.TypeInterface
    activate: (activatable: AppActivatable) => void
    deactivate: (activatable: AppActivatable) => void
}

export abstract class AppActivatableInterface {

    // Own properties of Gedit-3.0.Gedit.AppActivatableInterface

    static name: string
}

export interface AppClass {

    // Own fields of Gedit-3.0.Gedit.AppClass

    parentClass: Gtk.ApplicationClass
    showHelp: (app: App, parent: Gtk.Window, name: string, linkId: string) => boolean
    helpLinkId: (app: App, name: string, linkId: string) => string
    setWindowTitle: (app: App, window: Window, title: string) => void
    processWindowEvent: (app: App, window: Window, event: Gdk.Event) => boolean
}

export abstract class AppClass {

    // Own properties of Gedit-3.0.Gedit.AppClass

    static name: string
}

export interface DocumentClass {

    // Own fields of Gedit-3.0.Gedit.DocumentClass

    parentClass: GtkSource.BufferClass
    cursorMoved: (document: Document) => void
    load: (document: Document) => void
    loaded: (document: Document) => void
    save: (document: Document) => void
    saved: (document: Document) => void
}

export abstract class DocumentClass {

    // Own properties of Gedit-3.0.Gedit.DocumentClass

    static name: string
}

export interface EncodingsComboBoxClass {

    // Own fields of Gedit-3.0.Gedit.EncodingsComboBoxClass

    parentClass: Gtk.ComboBoxClass
}

export abstract class EncodingsComboBoxClass {

    // Own properties of Gedit-3.0.Gedit.EncodingsComboBoxClass

    static name: string
}

export interface MenuExtensionClass {

    // Own fields of Gedit-3.0.Gedit.MenuExtensionClass

    parentClass: GObject.ObjectClass
}

export abstract class MenuExtensionClass {

    // Own properties of Gedit-3.0.Gedit.MenuExtensionClass

    static name: string
}

export interface MessageBusClass {

    // Own fields of Gedit-3.0.Gedit.MessageBusClass

    parentClass: GObject.ObjectClass
    dispatch: (bus: MessageBus, message: Message) => void
    registered: (bus: MessageBus, objectPath: string, method: string) => void
    unregistered: (bus: MessageBus, objectPath: string, method: string) => void
}

export abstract class MessageBusClass {

    // Own properties of Gedit-3.0.Gedit.MessageBusClass

    static name: string
}

export interface MessageBusPrivate {
}

export class MessageBusPrivate {

    // Own properties of Gedit-3.0.Gedit.MessageBusPrivate

    static name: string
}

export interface MessageClass {

    // Own fields of Gedit-3.0.Gedit.MessageClass

    parentClass: GObject.ObjectClass
}

export abstract class MessageClass {

    // Own properties of Gedit-3.0.Gedit.MessageClass

    static name: string
}

export interface MessagePrivate {
}

export class MessagePrivate {

    // Own properties of Gedit-3.0.Gedit.MessagePrivate

    static name: string
}

export interface ProgressInfoBarClass {

    // Own fields of Gedit-3.0.Gedit.ProgressInfoBarClass

    parentClass: Gtk.InfoBarClass
}

export abstract class ProgressInfoBarClass {

    // Own properties of Gedit-3.0.Gedit.ProgressInfoBarClass

    static name: string
}

export interface StatusbarClass {

    // Own fields of Gedit-3.0.Gedit.StatusbarClass

    parentClass: Gtk.StatusbarClass
}

export abstract class StatusbarClass {

    // Own properties of Gedit-3.0.Gedit.StatusbarClass

    static name: string
}

export interface TabClass {

    // Own fields of Gedit-3.0.Gedit.TabClass

    parentClass: Gtk.BoxClass
}

export abstract class TabClass {

    // Own properties of Gedit-3.0.Gedit.TabClass

    static name: string
}

export interface ViewActivatableInterface {

    // Own fields of Gedit-3.0.Gedit.ViewActivatableInterface

    gIface: GObject.TypeInterface
    activate: (activatable: ViewActivatable) => void
    deactivate: (activatable: ViewActivatable) => void
}

export abstract class ViewActivatableInterface {

    // Own properties of Gedit-3.0.Gedit.ViewActivatableInterface

    static name: string
}

export interface ViewClass {

    // Own fields of Gedit-3.0.Gedit.ViewClass

    parentClass: GtkSource.ViewClass
    dropUris: (view: View, uriList: string) => void
    padding: object
}

export abstract class ViewClass {

    // Own properties of Gedit-3.0.Gedit.ViewClass

    static name: string
}

export interface ViewPrivate {
}

export class ViewPrivate {

    // Own properties of Gedit-3.0.Gedit.ViewPrivate

    static name: string
}

export interface WindowActivatableInterface {

    // Own fields of Gedit-3.0.Gedit.WindowActivatableInterface

    gIface: GObject.TypeInterface
    activate: (activatable: WindowActivatable) => void
    deactivate: (activatable: WindowActivatable) => void
    updateState: (activatable: WindowActivatable) => void
}

export abstract class WindowActivatableInterface {

    // Own properties of Gedit-3.0.Gedit.WindowActivatableInterface

    static name: string
}

export interface WindowClass {

    // Own fields of Gedit-3.0.Gedit.WindowClass

    parentClass: Gtk.ApplicationWindowClass
    tabAdded: (window: Window, tab: Tab) => void
    tabRemoved: (window: Window, tab: Tab) => void
    tabsReordered: (window: Window) => void
    activeTabChanged: (window: Window, tab: Tab) => void
    activeTabStateChanged: (window: Window) => void
}

export abstract class WindowClass {

    // Own properties of Gedit-3.0.Gedit.WindowClass

    static name: string
}

export interface WindowPrivate {
}

export class WindowPrivate {

    // Own properties of Gedit-3.0.Gedit.WindowPrivate

    static name: string
}
