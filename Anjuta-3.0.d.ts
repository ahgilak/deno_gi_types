
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Anjuta-3.0
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
import type * as Gdl from './Gdl-3.js';

/**
 * Specifies if the entry corresponds to a frame or a button.
 * Buttons are added to the last frame that appears before the button entry
 */
export enum CommandBarEntryType {
    /**
     * This entry should create a frame in the
     * 								action bar. The entry's action name and
     * 								callback are ignored.
     */
    FRAME,
    /**
     * This entry adds a button to the action bar,
     * 								 either to the last frame to appear in the
     * 								 entry list before this entry, or to the top
     * 								 of the bar if no frames were previously
     * 								 added.
     */
    BUTTON,
}
export enum CommandQueueExecuteMode {
    AUTOMATIC,
    MANUAL,
}
/**
 * Possibly errors that can occur during charset conversion
 */
export enum ConvertError {
    /**
     * The charset couldn't be autodetected
     */
    FAILED,
}
export enum LauncherOutputType {
    STDOUT,
    STDERR,
    PTY,
}
/**
 * Possible errors when parsing a plugin file
 */
export enum PluginDescriptionParseError {
    /**
     * Syntax of plugin file is invalid
     */
    SYNTAX,
    /**
     * Invalid escape sequence
     */
    ESCAPES,
    /**
     * Invalid characters
     */
    CHARS,
}
export enum PluginManagerError {
    /**
     * The factory for the plugin couldn't be found
     */
    MISSING_FACTORY,
    /**
     * Unknown error
     */
    ERROR_UNKNOWN,
}
/**
 * Error codes returned by anjuta profile functions.
 */
export enum ProfileError {
    /**
     * Fail to read xml plugins list file.
     */
    URI_READ_FAILED,
    /**
     * Fail to write xml plugins list file.
     */
    URI_WRITE_FAILED,
    PLUGIN_MISSING,
}
export enum ProjectValueType {
    STRING,
    LIST,
    BOOLEAN,
    MAP,
}
export enum SerializerMode {
    READ,
    WRITE,
}
export enum SessionPhase {
    START,
    FIRST,
    NORMAL,
    LAST,
    END,
}
export enum ShellError {
    EXIST,
}
export enum ShellPlacement {
    NONE,
    TOP,
    BOTTOM,
    RIGHT,
    LEFT,
    CENTER,
    FLOATING,
}
export enum ProjectNodeState {
    OK,
    MODIFIED,
    INCOMPLETE,
    LOADING,
    REMOVED,
    CAN_ADD_GROUP,
    CAN_ADD_TARGET,
    CAN_ADD_SOURCE,
    CAN_ADD_MODULE,
    CAN_ADD_PACKAGE,
    CAN_REMOVE,
    CAN_SAVE,
    REMOVE_FILE,
}
export enum ProjectNodeType {
    UNKNOWN,
    SHAREDLIB,
    STATICLIB,
    PROGRAM,
    PYTHON,
    JAVA,
    LISP,
    HEADER,
    MAN,
    INFO,
    GENERIC,
    DATA,
    EXTRA,
    INTLTOOL,
    CONFIGURE,
    IDL,
    MKENUMS,
    GENMARSHAL,
    SCRIPT,
    ROOT_GROUP,
    LT_MODULE,
    PROXY,
    PROJECT,
    PRIMARY,
    EXECUTABLE,
    READ_ONLY,
    FRAME,
    ID_MASK,
    FLAG_MASK,
    TYPE_MASK,
    ROOT,
    GROUP,
    TARGET,
    SOURCE,
    MODULE,
    PACKAGE,
    VARIABLE,
    OBJECT,
}
export enum ProjectPropertyFlags {
    READ_ONLY,
    READ_WRITE,
    HIDDEN,
    STATIC,
}
export enum TokenType {
    NONE,
    EOL,
    COMMA,
    TYPE,
    FIRST,
    FILE,
    MACRO,
    CONTENT,
    ARGUMENT,
    VALUE,
    EOV,
    PARSED,
    KEYWORD,
    OPERATOR,
    NAME,
    VARIABLE,
    DEFINITION,
    STATEMENT,
    NUMBER,
    JUNK,
    COMMENT,
    OPEN_QUOTE,
    CLOSE_QUOTE,
    ESCAPE,
    FUNCTION,
    SPACE,
    START,
    NEXT,
    LAST,
    ITEM,
    STRING,
    ERROR,
    WORD,
    LIST,
    ANY,
    USER,
    FLAGS,
    PUBLIC_FLAGS,
    IRRELEVANT,
    OPEN,
    CLOSE,
    SIGNIFICANT,
    PRIVATE_FLAGS,
    CASE_INSENSITIVE,
    STATIC,
    REMOVED,
    ADDED,
}
export enum VcsStatus {
    MODIFIED,
    ADDED,
    DELETED,
    CONFLICTED,
    UPTODATE,
    LOCKED,
    MISSING,
    UNVERSIONED,
    IGNORED,
    ALL,
}
export const SYSTEM_PROFILE_NAME: string
export const VCS_DEFAULT_STATUS_CODES: number
export function cclosureMarshalVOIDBOXEDENUM(closure: GObject.TClosure, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object | null, marshalData: object | null): void
export function cclosureMarshalVOIDINTINTULONG(closure: GObject.TClosure, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object | null, marshalData: object | null): void
export function cclosureMarshalVOIDINTOBJECT(closure: GObject.TClosure, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object | null, marshalData: object | null): void
export function cclosureMarshalVOIDINTSTRING(closure: GObject.TClosure, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object | null, marshalData: object | null): void
export function cclosureMarshalVOIDPOINTEROBJECT(closure: GObject.TClosure, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object | null, marshalData: object | null): void
export function cclosureMarshalVOIDSTRINGBOXED(closure: GObject.TClosure, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object | null, marshalData: object | null): void
export function cclosureMarshalVOIDSTRINGINT(closure: GObject.TClosure, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object | null, marshalData: object | null): void
export function cclosureMarshalVOIDSTRINGINTSTRING(closure: GObject.TClosure, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object | null, marshalData: object | null): void
export function cclosureMarshalVOIDSTRINGPOINTER(closure: GObject.TClosure, returnValue: any, nParamValues: number, paramValues: any, invocationHint: object | null, marshalData: object | null): void
/**
 * Check if autogen version 5 is installed.
 */
export function checkAutogen(): boolean
export function convertErrorQuark(): GLib.Quark
export function convertFromUtf8(content: string, len: number, encoding: Encoding, newLen: number): string
export function convertToUtf8(content: string, len: number, encoding: Encoding, newLen: number): string
export function encodingGetCurrent(): Encoding
export function encodingGetFromCharset(charset: string): Encoding
export function encodingGetFromIndex(index: number): Encoding
export function encodingGetUtf8(): Encoding
export function pkgConfigGetVersion(package: string): string
export function pkgConfigIgnorePackage(name: string): boolean
export function pluginDescriptionParseErrorQuark(): GLib.Quark
export function pluginManagerErrorQuark(): GLib.Quark
export function profileErrorQuark(): GLib.Quark
export function resGetDataDir(): string
export function resGetDataFile(pixfile: string): string
export function resGetDocDir(): string
export function resGetDocFile(docfile: string): string
export function resGetHelpDir(): string
export function resGetHelpDirLocale(locale: string): string
export function resGetHelpFile(helpfile: string): string
export function resGetHelpFileLocale(helpfile: string, locale: string): string
export function resGetPixmapDir(): string
export function resGetPixmapFile(pixfile: string): string
export function resHelpSearch(word: string): void
export function resUrlShow(url: string): void
export function shellErrorQuark(): GLib.Quark
export function utilColorFromString(val: string, r: number, g: number, b: number): void
export function utilConvertToUtf8(str: string): string
/**
 * Copies `src` to `dest` and shows a dialog error in case is needed.
 * @param src the file where copy
 * @param dest the path to copy the `src`
 * @param showError %TRUE to show a dialog error
 */
export function utilCopyFile(src: string, dest: string, showError: boolean): boolean
export function utilCreateDir(d: string): boolean
export function utilDialogInput(parent: Gtk.Window, label: string, defaultValue: string, value: string): boolean
export function utilDiff(uri: string, text: string): boolean
export function utilEscapeQuotes(str: string): string
export function utilExecuteShell(dir: string, command: string): GLib.Pid
export function utilExecuteTerminalShell(dir: string, command: string): GLib.Pid
/**
 * Create a new file corresponding to arg, unlike g_file_new_for_commandline_arg,
 * keeps symbolic links in path name.
 * @param arg URI or relative or absolute file path
 */
export function utilFileNewForCommandlineArg(arg: string): Gio.File
export function utilGetATmpFile(): string
/**
 * Get current working directory, unlike g_get_current_dir, keeps symbolic links
 * in path name.
 */
export function utilGetCurrentDir(): string
export function utilGetFileInfoMimeType(info: Gio.FileInfo): string
export function utilGetFileMimeType(file: Gio.File): string
export function utilGetLocalPathFromUri(uri: string): string
export function utilGetRealPath(path: string): string
export function utilGetUserMail(): string
export function utilHelpDisplay(parent: Gtk.Widget, docId: string, item: string): void
export function utilInstallFiles(names: string): boolean
/**
 * Return %TRUE if the file is an anjuta project file. It is implemented by
 * checking only the file extension. So it does not check the existence
 * of the file. But it is working on an URI if it does not containt a
 * fragment.
 * @param filename the file name
 */
export function utilIsProjectFile(filename: string): boolean
/**
 * Return %TRUE if the file is an template project file. It is implemented by
 * checking only the file extension. So it does not check the existence
 * of the file. But it is working on an URI if it does not containt a
 * fragment.
 * @param filename the file name
 */
export function utilIsTemplateFile(filename: string): boolean
export function utilPackageIsInstalled(lib: string, show: boolean): boolean
/**
 * Parse arguments from a string to a GList.
 * @param string arguments
 */
export function utilParseArgsFromString(string: string): string[]
export function utilProgIsInstalled(prog: string, show: boolean): boolean
export function utilReplaceHomeDirWithTilde(uri: string): string
export function utilSetAnjutaPrefix(name: string): void
export function utilSetUserMail(id: string): void
/**
 * Expand environment variables $(var_name) and tilde (~) in the input string.
 * @param string input string
 */
export function utilShellExpand(string: string): string
export function utilStrMiddleTruncate(string: string, truncateLength: number): string
export function utilStringFromColor(r: number, g: number, b: number): string
export function utilStringFromType(map: UtilStringMap, type: number): string
export function utilTypeFromString(map: UtilStringMap, str: string): number
export function utilUriGetDirname(uri: string): string
/**
 * Retrieves the user's preferred shell.
 */
export function utilUserShell(): string
/**
 * Retrieves the user's preferred terminal.
 */
export function utilUserTerminal(): string[]
/**
 * This function is called when the autogen process is completed.
 * @callback 
 * @param autogen #AnjutaAutogen object.
 * @param data user data passed to the callback.
 */
export interface AutogenFunc {
    (autogen: Autogen, data: object | null): void
}
/**
 * This function is called each time there is new data from autogen.
 * @callback 
 * @param output data generated by autogen.
 * @param data user data passed to the callback.
 */
export interface AutogenOutputFunc {
    (output: string, data: object | null): void
}
export interface CompletionFilterFunc {
    (item: object | null): boolean
}
export interface CompletionNameFunc {
    (item: object | null): string
}
/**
 * This callback is called when new characters arrive from the launcher
 * execution.
 * @callback 
 * @param launcher a #AnjutaLauncher object
 * @param outputType Type of the output
 * @param chars Characters being outputed
 */
export interface LauncherOutputCallback {
    (launcher: Launcher, outputType: LauncherOutputType, chars: string): void
}
export interface PluginDescriptionLineFunc {
    (df: PluginDescription, key: string, locale: string, value: string, data: object | null): void
}
export interface PluginDescriptionSectionFunc {
    (df: PluginDescription, name: string): void
}
/**
 * The callback to pass to anjuta_plugin_add_watch(). When a `name` value
 * is added to shell by another plugin, this callback will be called.
 * @callback 
 * @param plugin The #AnjutaPlugin based plugin
 * @param name name of value being added.
 * @param value value of value being added.
 */
export interface PluginValueAdded {
    (plugin: Plugin, name: string, value: any): void
}
/**
 * The callback to pass to anjuta_plugin_add_watch(). When the `name` value
 * is removed from the shell (by the plugin exporting this value), this
 * callback will be called.
 * @callback 
 * @param plugin The #AnjutaPlugin based plugin
 * @param name name of value being added.
 */
export interface PluginValueRemoved {
    (plugin: Plugin, name: string): void
}
export interface PreferencesCallback {
    (pr: Preferences, key: string, data: object | null): boolean
}
export interface ProjectNodeForeachFunc {
    (node: ProjectNode): void
}
export interface ProjectNodeTraverseFunc {
    (node: ProjectNode, data: object | null): boolean
}
export interface SavePromptSaveFunc {
    (savePrompt: SavePrompt, item: object | null): boolean
}
export interface TokenForeachFunc {
    (token: Token, data: object | null): void
}
export module Shell {

    // Signal callback interfaces

    /**
     * Signal callback interface for `load-session`
     */
    export interface LoadSessionSignalCallback {
        (object: number, p0: GObject.Object): void
    }

    /**
     * Signal callback interface for `save-prompt`
     */
    export interface SavePromptSignalCallback {
        (object: GObject.Object): void
    }

    /**
     * Signal callback interface for `save-session`
     */
    export interface SaveSessionSignalCallback {
        (object: number, p0: GObject.Object): void
    }

    /**
     * Signal callback interface for `value-added`
     */
    export interface ValueAddedSignalCallback {
        (object: string, p0: any): void
    }

    /**
     * Signal callback interface for `value-removed`
     */
    export interface ValueRemovedSignalCallback {
        (object: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Shell {

    // Owm methods of Anjuta-3.0.Anjuta.Shell

    // Has conflict: addValue(name: string, value: any): void
    /**
     * Adds `widget` in the shell. The `placement` tells where the widget should
     * appear, but generally it will be overridden by the container
     * (dock, notebook, GtkContainer etc.) saved layout.
     * @param widget Then widget to add
     * @param name Name of the widget. None translated string used to identify it in the shell.
     * @param title Translated string which is displayed along side the widget when required (eg. as window title or notebook tab label).
     * @param stockId Icon stock ID. Could be null.
     * @param placement Placement of the widget in shell.
     */
    addWidget(widget: Gtk.Widget, name: string, title: string, stockId: string, placement: ShellPlacement): void
    // Has conflict: addWidgetCustom(widget: Gtk.Widget, name: string, title: string, stockId: string, label: Gtk.Widget, placement: ShellPlacement): void
    // Has conflict: addWidgetFull(widget: Gtk.Widget, name: string, title: string, stockId: string, placement: ShellPlacement, locked: boolean): void
    /**
     * Freezes addition of any UI elements (widgets) in the shell. All widget
     * additions are queued for later additions when freeze count reaches 0.
     * Any number of this function can be called and each call will increase
     * the freeze count. anjuta_shell_thaw() will reduce the freeze count by
     * 1 and real thawing happens when the count reaches 0.
     */
    freeze(): void
    // Has conflict: getObject(ifaceName: string): GObject.Object
    // Has conflict: getPluginManager(): PluginManager
    // Has conflict: getPreferences(): Preferences
    // Has conflict: getProfileManager(): ProfileManager
    // Has conflict: getStatus(): Status
    // Has conflict: getUi(): UI
    // Has conflict: getValue(name: string, value: any): void
    // Has conflict: hideDockableWidget(widget: Gtk.Widget): void
    // Has conflict: iconifyDockableWidget(widget: Gtk.Widget): void
    // Has conflict: maximizeWidget(widgetName: string): void
    // Has conflict: presentWidget(widget: Gtk.Widget): void
    // Has conflict: removeValue(name: string): void
    // Has conflict: removeWidget(widget: Gtk.Widget): void
    // Has conflict: savePrompt(prompt: SavePrompt): void
    // Has conflict: savingPop(): void
    // Has conflict: savingPush(): void
    sessionLoad(sessionDirectory: string): void
    sessionSave(sessionDirectory: string): void
    // Has conflict: showDockableWidget(widget: Gtk.Widget): void
    /**
     * Reduces the freeze count by one and performs pending widget additions
     * when the count reaches 0.
     */
    thaw(): void
    // Has conflict: unmaximize(): void

    // Own virtual methods of Anjuta-3.0.Anjuta.Shell

    /**
     * Sets a value in the shell with the given name. Any previous value will
     * be overridden. "value_added" signal will be emitted. Objects connecting
     * to this signal can then update their data according to the new value.
     * @virtual 
     * @param name Name of the value
     * @param value Value to add
     */
    addValue(name: string, value: any): void
    /**
     * Adds `widget` in the shell. The `placement` tells where the widget should
     * appear, but generally it will be overridden by the container
     * (dock, notebook, GtkContainer etc.) saved layout.
     * 
     * Using this method you can pass a custom widget as label.
     * @virtual 
     * @param widget Then widget to add
     * @param name Name of the widget. None translated string used to identify it in the shell.
     * @param title title of the widget (translated)
     * @param stockId Icon stock ID. Could be null.
     * @param label Label widget to use
     * @param placement Placement of the widget in shell.
     */
    addWidgetCustom(widget: Gtk.Widget, name: string, title: string, stockId: string, label: Gtk.Widget, placement: ShellPlacement): void
    /**
     * Adds `widget` in the shell. The `placement` tells where the widget should
     * appear, but generally it will be overridden by the container
     * (dock, notebook, GtkContainer etc.) saved layout.
     * 
     * Normally just use anjuta_shell_add_widget() because you do not
     * use locking.
     * @virtual 
     * @param widget Then widget to add
     * @param name Name of the widget. None translated string used to identify it in the shell.
     * @param title Translated string which is displayed along side the widget when required (eg. as window title or notebook tab label).
     * @param stockId Icon stock ID. Could be null.
     * @param placement Placement of the widget in shell.
     * @param locked Whether to lock that widget (do not use this, it's only 			useful to some stock plugins
     */
    addWidgetFull(widget: Gtk.Widget, name: string, title: string, stockId: string, placement: ShellPlacement, locked: boolean): void
    /**
     * Searches the currently available plugins to find the one which
     * implements the given interface as primary interface and returns it. If
     * the plugin is not yet loaded, it will be loaded and activated.
     * The returned object is garanteed to be an implementor of the
     * interface (as exported by the plugin metafile). It only searches
     * from the pool of plugin objects loaded in this shell and can only search
     * by primary interface. If there are more objects implementing this primary
     * interface, user might be prompted to select one from them (and might give
     * the option to use it as default for future queries). A typical usage of this
     * function is:
     * <programlisting>
     * GObject *docman =
     *     anjuta_plugins_get_object (shell, "IAnjutaDocumentManager", error);
     * </programlisting>
     * Notice that this function takes the interface name string as string, unlike
     * anjuta_plugins_get_interface() which takes the type directly.
     * @virtual 
     * @param ifaceName The interface implemented by the object to be found
     */
    getObject(ifaceName: string): GObject.Object
    /**
     * Retrieves the #AnjutaPluginManager object associated with the shell.
     * @virtual 
     */
    getPluginManager(): PluginManager
    /**
     * Retrieves the #AnjutaPreferences object associated with the shell.
     * @virtual 
     */
    getPreferences(): Preferences
    /**
     * Retrieves the #AnjutaProfileManager object associated with the shell.
     * @virtual 
     */
    getProfileManager(): ProfileManager
    /**
     * Retrieves the #AnjutaStatus object associated with the shell.
     * @virtual 
     */
    getStatus(): Status
    /**
     * Retrieves the #AnjutaUI object associated with the shell.
     * @virtual 
     */
    getUi(): UI
    /**
     * Gets a value from the shell with the given name. The value will be set
     * in the passed value pointer.
     * @virtual 
     * @param name Name of the value to get
     * @param value Value to get
     */
    getValue(name: string, value: any): void
    /**
     * If the widget is dockable, it hides it.
     * @virtual 
     * @param widget a #GtkWidget to hide.
     */
    hideDockableWidget(widget: Gtk.Widget): void
    /**
     * If the widget is dockable, it iconifies it.
     * @virtual 
     * @param widget a #GtkWidget to iconify.
     */
    iconifyDockableWidget(widget: Gtk.Widget): void
    loadSession(phase: SessionPhase, session: Session): void
    /**
     * Maximizes a widget so it will occupy all the possible space.
     * @virtual 
     * @param widgetName Name of the widget to be maximized.
     */
    maximizeWidget(widgetName: string): void
    /**
     * Make sure the widget is visible to user. If the widget is hidden, it will
     * be shown. If it is not visible to user, it will be made visible.
     * @virtual 
     * @param widget The widget to present
     */
    presentWidget(widget: Gtk.Widget): void
    /**
     * Removes a value from the shell with the given name. "value_removed" signal
     * will be emitted. Objects connecting to this signal can then update their
     * data/internal-state accordingly.
     * @virtual 
     * @param name Name of the value to remove
     */
    removeValue(name: string): void
    /**
     * Removes the widget from shell. The widget should have been added before
     * with #anjuta_shell_add_widget.
     * @virtual 
     * @param widget The widget to remove
     */
    removeWidget(widget: Gtk.Widget): void
    savePrompt(savePrompt: SavePrompt): void
    saveSession(phase: SessionPhase, session: Session): void
    /**
     * Decrease the count of files that need to be saved
     * @virtual 
     */
    savingPop(): void
    /**
     * Increase the count of files that need to be saved
     * @virtual 
     */
    savingPush(): void
    /**
     * If the widget was hidden or iconified, it will make it visible.
     * @virtual 
     * @param widget a #GtkWidget to show.
     */
    showDockableWidget(widget: Gtk.Widget): void
    /**
     * Unmaximizes the UI which was previously maximized by
     * #anjuta_shell_maximize_widget
     * @virtual 
     */
    unmaximize(): void
    valueAdded(name: string, value: any): void
    valueRemoved(name: string): void

    // Own signals of Anjuta-3.0.Anjuta.Shell

    connect(sigName: "load-session", callback: Shell.LoadSessionSignalCallback): number
    on(sigName: "load-session", callback: Shell.LoadSessionSignalCallback): number
    once(sigName: "load-session", callback: Shell.LoadSessionSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "load-session", p0: GObject.Object, ...args: any[]): void
    connect(sigName: "save-prompt", callback: Shell.SavePromptSignalCallback): number
    on(sigName: "save-prompt", callback: Shell.SavePromptSignalCallback): number
    once(sigName: "save-prompt", callback: Shell.SavePromptSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "save-prompt", ...args: any[]): void
    connect(sigName: "save-session", callback: Shell.SaveSessionSignalCallback): number
    on(sigName: "save-session", callback: Shell.SaveSessionSignalCallback): number
    once(sigName: "save-session", callback: Shell.SaveSessionSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "save-session", p0: GObject.Object, ...args: any[]): void
    connect(sigName: "value-added", callback: Shell.ValueAddedSignalCallback): number
    on(sigName: "value-added", callback: Shell.ValueAddedSignalCallback): number
    once(sigName: "value-added", callback: Shell.ValueAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "value-added", p0: any, ...args: any[]): void
    connect(sigName: "value-removed", callback: Shell.ValueRemovedSignalCallback): number
    on(sigName: "value-removed", callback: Shell.ValueRemovedSignalCallback): number
    once(sigName: "value-removed", callback: Shell.ValueRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "value-removed", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.Shell

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Shell extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Shell

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.Shell

    constructor(config?: Shell.ConstructorProperties) 
    _init(config?: Shell.ConstructorProperties): void
}

export module AsyncCommand {

    // Constructor properties interface

    export interface ConstructorProperties extends Command.ConstructorProperties {
    }

}

export interface AsyncCommand {

    // Own fields of Anjuta-3.0.Anjuta.AsyncCommand

    parentInstance: any
    priv: any

    // Owm methods of Anjuta-3.0.Anjuta.AsyncCommand

    /**
     * Locks the command's built-in mutex.
     */
    lock(): void
    /**
     * Unlocks the command's built-in mutex.
     */
    unlock(): void

    // Class property signals of Anjuta-3.0.Anjuta.AsyncCommand

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class AsyncCommand extends Command {

    // Own properties of Anjuta-3.0.Anjuta.AsyncCommand

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.AsyncCommand

    constructor(config?: AsyncCommand.ConstructorProperties) 
    _init(config?: AsyncCommand.ConstructorProperties): void
    static getErrorMessage(command: Command): string
    /**
     * Set the error message this async command resulted in
     * @param command AnjutaAsyncCommand object
     * @param errorMessage The error message that should be used
     */
    static setErrorMessage(command: Command, errorMessage: string): void
}

export module AsyncNotify {

    // Signal callback interfaces

    /**
     * Signal callback interface for `finished`
     */
    export interface FinishedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface AsyncNotify {

    // Own fields of Anjuta-3.0.Anjuta.AsyncNotify

    parentInstance: GObject.Object
    priv: AsyncNotifyPriv

    // Owm methods of Anjuta-3.0.Anjuta.AsyncNotify

    /**
     * Gets the error set on `self`.
     */
    getError(): void
    /**
     * Emits the finished signal. This method should only be used by
     * interface methods themselves, not by clients.
     */
    notifyFinished(): void
    /**
     * Sets the error for an interface call. This method should only be used by
     * interface implementations themselves, not by clients.
     * @param error Error to set
     */
    setError(error: GLib.Error): void

    // Own virtual methods of Anjuta-3.0.Anjuta.AsyncNotify

    finished(): void

    // Own signals of Anjuta-3.0.Anjuta.AsyncNotify

    connect(sigName: "finished", callback: AsyncNotify.FinishedSignalCallback): number
    on(sigName: "finished", callback: AsyncNotify.FinishedSignalCallback): number
    once(sigName: "finished", callback: AsyncNotify.FinishedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.AsyncNotify

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class AsyncNotify extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.AsyncNotify

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.AsyncNotify

    constructor(config?: AsyncNotify.ConstructorProperties) 
    /**
     * Creates a new #AnjutaAsyncNotify object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AnjutaAsyncNotify object.
     * @constructor 
     */
    static new(): AsyncNotify
    _init(config?: AsyncNotify.ConstructorProperties): void
}

export module Autogen {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Autogen {

    // Owm methods of Anjuta-3.0.Anjuta.Autogen

    /**
     * Remove all library pathes.
     */
    clearLibraryPath(): void
    /**
     * Asynchronously execute autogen to generate the output, calling `func` when the
     * process is completed.
     * @param func A function called when autogen is terminated
     */
    execute(func: AutogenFunc | null): boolean
    /**
     * Get the list of all directories searched for files included in the autogen
     * templates.
     */
    getLibraryPaths(): string[]
    /**
     * Read an autogen template file, optionally adding autogen markers.
     * 
     * To be recognized as an autogen template, the first line has to contain:
     * - the start marker
     * - "autogen5 template"
     * - the end marker
     * 
     * These markers are a custom sequence of up to 7 characters delimiting
     * the start and the end of autogen variables and macros.
     * 
     * This function can add this line using the value of `start_marker` and
     * `end_marker`. If this line is already present in the file,
     * `start_marker` and `end_marker` must be %NULL.
     * @param filename name of the input template file
     * @param startMarker start marker string
     * @param endMarker end marker string
     */
    setInputFile(filename: string, startMarker: string | null, endMarker: string | null): boolean
    /**
     * Add a new directory in the list of autogen libraries path.
     * 
     * Autogen can include files. These included file will be searched by default
     * in the same directory than the template file. This functions allows you to
     * add other directories.
     * @param directory A path containing autogen library.
     */
    setLibraryPath(directory: string): void
    /**
     * Define that autogen output should be send to a function as soon as it arrives.
     * @param func Function call each time we get new data from autogen
     */
    setOutputCallback(func: AutogenOutputFunc): boolean
    /**
     * Define the name of the generated file.
     * @param filename name of the generated file
     */
    setOutputFile(filename: string): boolean
    /**
     * Write the autogen definition file. The definition file defined variables
     * those will be used, typically replaced, in the template files.
     * 
     * The hash table keys are the names of the variables. The name can include an
     * index in square bracket, by example "members[0]". All values are strings but
     * but they could include children using braces, by example
     * "{count=2; list="aa bb"}".
     * 
     * The file is created in a temporary directory and removed when the object
     * is destroyed.
     * @param values A hash table containing all definitions
     */
    writeDefinitionFile(values: GLib.HashTable): boolean

    // Class property signals of Anjuta-3.0.Anjuta.Autogen

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A GObject wrapper for running GNU autogen.
 * @class 
 */
export class Autogen extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Autogen

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.Autogen

    constructor(config?: Autogen.ConstructorProperties) 
    /**
     * Create a new autogen object.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new autogen object.
     * @constructor 
     */
    static new(): Autogen
    _init(config?: Autogen.ConstructorProperties): void
}

export module CModule {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.TypePlugin.ConstructorProperties, GObject.TypeModule.ConstructorProperties {
    }

}

export interface CModule extends GObject.TypePlugin {

    // Owm methods of Anjuta-3.0.Anjuta.CModule

    /**
     * Receives the error that occured when the module was loaded
     */
    getLastError(): boolean

    // Conflicting methods

    /**
     * Calls the `use_plugin` function from the #GTypePluginClass of
     * `plugin`.  There should be no need to use this function outside of
     * the GObject type system itself.
     */
    use(): void
    /**
     * Increases the use count of a #GTypeModule by one. If the
     * use count was zero before, the plugin will be loaded.
     * If loading the plugin fails, the use count is reset to
     * its prior value.
     */
    use(): boolean

    // Overloads of use

    /**
     * Calls the `use_plugin` function from the #GTypePluginClass of
     * `plugin`.  There should be no need to use this function outside of
     * the GObject type system itself.
     */
    use(): void

    // Class property signals of Anjuta-3.0.Anjuta.CModule

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CModule extends GObject.TypeModule {

    // Own properties of Anjuta-3.0.Anjuta.CModule

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.CModule

    constructor(config?: CModule.ConstructorProperties) 
    /**
     * Create a new #AnjutaCModule object.
     * @constructor 
     * @param path The full path of the module
     * @param name The name of the module
     */
    constructor(path: string, name: string) 
    /**
     * Create a new #AnjutaCModule object.
     * @constructor 
     * @param path The full path of the module
     * @param name The name of the module
     */
    static new(path: string, name: string): CModule
    _init(config?: CModule.ConstructorProperties): void
}

export module CPluginFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface CPluginFactory {

    // Owm methods of Anjuta-3.0.Anjuta.CPluginFactory

    /**
     * Delete a #AnjutaCPluginFactory object.
     */
    free(): void

    // Class property signals of Anjuta-3.0.Anjuta.CPluginFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CPluginFactory extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.CPluginFactory

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.CPluginFactory

    constructor(config?: CPluginFactory.ConstructorProperties) 
    /**
     * Create a new #AnjutaCPluginFactory object.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #AnjutaCPluginFactory object.
     * @constructor 
     */
    static new(): CPluginFactory
    _init(config?: CPluginFactory.ConstructorProperties): void
}

export module CellRendererCaptionedImage {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.CellRenderer.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.CellRendererCaptionedImage

        pixbuf?: GdkPixbuf.Pixbuf | null
        text?: string | null
    }

}

export interface CellRendererCaptionedImage {

    // Own properties of Anjuta-3.0.Anjuta.CellRendererCaptionedImage

    pixbuf: GdkPixbuf.Pixbuf
    text: string

    // Own fields of Anjuta-3.0.Anjuta.CellRendererCaptionedImage

    parent: Gtk.CellRenderer
    image: Gtk.CellRenderer
    caption: Gtk.CellRenderer

    // Class property signals of Anjuta-3.0.Anjuta.CellRendererCaptionedImage

    connect(sigName: "notify::pixbuf", callback: any): number
    on(sigName: "notify::pixbuf", callback: any): number
    once(sigName: "notify::pixbuf", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixbuf", ...args: any[]): void
    connect(sigName: "notify::text", callback: any): number
    on(sigName: "notify::text", callback: any): number
    once(sigName: "notify::text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::cell-background", callback: any): number
    on(sigName: "notify::cell-background", callback: any): number
    once(sigName: "notify::cell-background", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cell-background", ...args: any[]): void
    connect(sigName: "notify::cell-background-gdk", callback: any): number
    on(sigName: "notify::cell-background-gdk", callback: any): number
    once(sigName: "notify::cell-background-gdk", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cell-background-gdk", ...args: any[]): void
    connect(sigName: "notify::cell-background-rgba", callback: any): number
    on(sigName: "notify::cell-background-rgba", callback: any): number
    once(sigName: "notify::cell-background-rgba", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cell-background-rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background-set", callback: any): number
    on(sigName: "notify::cell-background-set", callback: any): number
    once(sigName: "notify::cell-background-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cell-background-set", ...args: any[]): void
    connect(sigName: "notify::editing", callback: any): number
    on(sigName: "notify::editing", callback: any): number
    once(sigName: "notify::editing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::editing", ...args: any[]): void
    connect(sigName: "notify::height", callback: any): number
    on(sigName: "notify::height", callback: any): number
    once(sigName: "notify::height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-expanded", callback: any): number
    on(sigName: "notify::is-expanded", callback: any): number
    once(sigName: "notify::is-expanded", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-expanded", ...args: any[]): void
    connect(sigName: "notify::is-expander", callback: any): number
    on(sigName: "notify::is-expander", callback: any): number
    once(sigName: "notify::is-expander", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-expander", ...args: any[]): void
    connect(sigName: "notify::mode", callback: any): number
    on(sigName: "notify::mode", callback: any): number
    once(sigName: "notify::mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: any): number
    on(sigName: "notify::sensitive", callback: any): number
    once(sigName: "notify::sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
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

export class CellRendererCaptionedImage extends Gtk.CellRenderer {

    // Own properties of Anjuta-3.0.Anjuta.CellRendererCaptionedImage

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.CellRendererCaptionedImage

    constructor(config?: CellRendererCaptionedImage.ConstructorProperties) 
    constructor() 
    static new(): CellRendererCaptionedImage
    _init(config?: CellRendererCaptionedImage.ConstructorProperties): void
}

export module CellRendererDiff {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.CellRenderer.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.CellRendererDiff

        diff?: string | null
    }

}

export interface CellRendererDiff {

    // Own properties of Anjuta-3.0.Anjuta.CellRendererDiff

    diff: string

    // Own fields of Anjuta-3.0.Anjuta.CellRendererDiff

    parentInstance: any
    priv: CellRendererDiffPrivate

    // Owm methods of Anjuta-3.0.Anjuta.CellRendererDiff

    setDiff(diff: string): void

    // Class property signals of Anjuta-3.0.Anjuta.CellRendererDiff

    connect(sigName: "notify::diff", callback: any): number
    on(sigName: "notify::diff", callback: any): number
    once(sigName: "notify::diff", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::diff", ...args: any[]): void
    connect(sigName: "notify::cell-background", callback: any): number
    on(sigName: "notify::cell-background", callback: any): number
    once(sigName: "notify::cell-background", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cell-background", ...args: any[]): void
    connect(sigName: "notify::cell-background-gdk", callback: any): number
    on(sigName: "notify::cell-background-gdk", callback: any): number
    once(sigName: "notify::cell-background-gdk", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cell-background-gdk", ...args: any[]): void
    connect(sigName: "notify::cell-background-rgba", callback: any): number
    on(sigName: "notify::cell-background-rgba", callback: any): number
    once(sigName: "notify::cell-background-rgba", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cell-background-rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background-set", callback: any): number
    on(sigName: "notify::cell-background-set", callback: any): number
    once(sigName: "notify::cell-background-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cell-background-set", ...args: any[]): void
    connect(sigName: "notify::editing", callback: any): number
    on(sigName: "notify::editing", callback: any): number
    once(sigName: "notify::editing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::editing", ...args: any[]): void
    connect(sigName: "notify::height", callback: any): number
    on(sigName: "notify::height", callback: any): number
    once(sigName: "notify::height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-expanded", callback: any): number
    on(sigName: "notify::is-expanded", callback: any): number
    once(sigName: "notify::is-expanded", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-expanded", ...args: any[]): void
    connect(sigName: "notify::is-expander", callback: any): number
    on(sigName: "notify::is-expander", callback: any): number
    once(sigName: "notify::is-expander", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-expander", ...args: any[]): void
    connect(sigName: "notify::mode", callback: any): number
    on(sigName: "notify::mode", callback: any): number
    once(sigName: "notify::mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: any): number
    on(sigName: "notify::sensitive", callback: any): number
    once(sigName: "notify::sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
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

export class CellRendererDiff extends Gtk.CellRenderer {

    // Own properties of Anjuta-3.0.Anjuta.CellRendererDiff

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.CellRendererDiff

    constructor(config?: CellRendererDiff.ConstructorProperties) 
    constructor() 
    static new(): CellRendererDiff
    _init(config?: CellRendererDiff.ConstructorProperties): void
}

export module CloseButton {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Activatable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Button.ConstructorProperties {
    }

}

export interface CloseButton extends Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {

    // Own fields of Anjuta-3.0.Anjuta.CloseButton

    parent: Gtk.Button & Gtk.Container

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

    // Class property signals of Anjuta-3.0.Anjuta.CloseButton

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CloseButton extends Gtk.Button {

    // Own properties of Anjuta-3.0.Anjuta.CloseButton

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.CloseButton

    constructor(config?: CloseButton.ConstructorProperties) 
    constructor() 
    static new(): CloseButton
    _init(config?: CloseButton.ConstructorProperties): void
}

export module ColumnTextView {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {
    }

}

export interface ColumnTextView extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own fields of Anjuta-3.0.Anjuta.ColumnTextView

    parentInstance: any
    priv: ColumnTextViewPriv

    // Owm methods of Anjuta-3.0.Anjuta.ColumnTextView

    getText(): string

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

    // Class property signals of Anjuta-3.0.Anjuta.ColumnTextView

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

export class ColumnTextView extends Gtk.Box {

    // Own properties of Anjuta-3.0.Anjuta.ColumnTextView

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.ColumnTextView

    constructor(config?: ColumnTextView.ConstructorProperties) 
    constructor() 
    static new(): ColumnTextView

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box???s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: ColumnTextView.ConstructorProperties): void
}

export module Command {

    // Signal callback interfaces

    /**
     * Signal callback interface for `command-finished`
     */
    export interface CommandFinishedSignalCallback {
        (returnCode: number): void
    }

    /**
     * Signal callback interface for `command-started`
     */
    export interface CommandStartedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `data-arrived`
     */
    export interface DataArrivedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `progress`
     */
    export interface ProgressSignalCallback {
        (progress: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Command {

    // Own fields of Anjuta-3.0.Anjuta.Command

    parentInstance: GObject.Object
    priv: CommandPriv

    // Owm methods of Anjuta-3.0.Anjuta.Command

    // Has conflict: cancel(): void
    // Has conflict: getErrorMessage(): string | null
    isRunning(): boolean
    // Has conflict: notifyComplete(returnCode: number): void
    // Has conflict: notifyDataArrived(): void
    // Has conflict: notifyProgress(progress: number): void
    // Has conflict: setErrorMessage(errorMessage: string): void
    // Has conflict: start(): void
    // Has conflict: startAutomaticMonitor(): boolean
    // Has conflict: stopAutomaticMonitor(): void

    // Own virtual methods of Anjuta-3.0.Anjuta.Command

    /**
     * Cancels a running command.
     * @virtual 
     */
    cancel(): void
    commandFinished(returnCode: number): void
    commandStarted(): void
    dataArrived(): void
    /**
     * Get the error message from the command, if there is one. This method is
     * normally used from a ::command-finished handler to report errors to the user
     * when a command finishes.
     * @virtual 
     */
    getErrorMessage(): string | null
    /**
     * Used by base classes derived from #AnjutaCommand to emit the
     * ::command-finished signal. This method should not be used by client code or
     * #AnjutaCommand objects that are not base classes.
     * @virtual 
     * @param returnCode The returned code that is passed to the notify callback
     */
    notifyComplete(returnCode: number): void
    /**
     * Used by base classes derived from #AnjutaCommand to emit the ::data-arrived
     * signal. This method should be used by both base command classes and
     * non-base classes as appropriate.
     * @virtual 
     */
    notifyDataArrived(): void
    /**
     * Emits the ::progress signal. Can be used by both base classes and
     * commands as needed.
     * @virtual 
     * @param progress The of the command that is passed to the notify callback
     */
    notifyProgress(progress: number): void
    progress(progress: number): void
    run(): number
    /**
     * Command objects use this to set error messages when they encounter some kind
     * of failure.
     * @virtual 
     * @param errorMessage Error message.
     */
    setErrorMessage(errorMessage: string): void
    /**
     * Starts a command. Client code can handle data from the command by connecting
     * to the ::data-arrived signal.
     * 
     * #AnjutaCommand subclasses should override this method to determine how they
     * call ::run, which actually does the command's legwork.
     * @virtual 
     */
    start(): void
    /**
     * Sets up any monitoring needed for commands that should start themselves
     * automatically in response to some event.
     * @virtual 
     */
    startAutomaticMonitor(): boolean
    /**
     * Stops automatic monitoring for self executing commands. For commands that
     * do not support self-starting, this function does nothing.
     * @virtual 
     */
    stopAutomaticMonitor(): void

    // Own signals of Anjuta-3.0.Anjuta.Command

    connect(sigName: "command-finished", callback: Command.CommandFinishedSignalCallback): number
    on(sigName: "command-finished", callback: Command.CommandFinishedSignalCallback): number
    once(sigName: "command-finished", callback: Command.CommandFinishedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "command-finished", ...args: any[]): void
    connect(sigName: "command-started", callback: Command.CommandStartedSignalCallback): number
    on(sigName: "command-started", callback: Command.CommandStartedSignalCallback): number
    once(sigName: "command-started", callback: Command.CommandStartedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "command-started", ...args: any[]): void
    connect(sigName: "data-arrived", callback: Command.DataArrivedSignalCallback): number
    on(sigName: "data-arrived", callback: Command.DataArrivedSignalCallback): number
    once(sigName: "data-arrived", callback: Command.DataArrivedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "data-arrived", ...args: any[]): void
    connect(sigName: "progress", callback: Command.ProgressSignalCallback): number
    on(sigName: "progress", callback: Command.ProgressSignalCallback): number
    once(sigName: "progress", callback: Command.ProgressSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "progress", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.Command

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Command extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Command

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.Command

    constructor(config?: Command.ConstructorProperties) 
    _init(config?: Command.ConstructorProperties): void
}

export module CommandBar {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Notebook.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.CommandBar

        maxTextWidth?: number | null
    }

}

export interface CommandBar extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Anjuta-3.0.Anjuta.CommandBar

    readonly maxTextWidth: number

    // Own fields of Anjuta-3.0.Anjuta.CommandBar

    parentInstance: any
    priv: CommandBarPriv

    // Owm methods of Anjuta-3.0.Anjuta.CommandBar

    /**
     * Adds a group of entries to an AnjutaCommandBar.
     * @param groupName A unique name for this group of entries
     * @param entries A list of entries to add
     * @param userData User data to pass to the entry callback
     */
    addActionGroup(groupName: string, entries: CommandBarEntry[], userData: object | null): void
    /**
     * Removes an action group from an AnjutaCommandBar.
     * @param groupName Name of the action group to remove
     */
    removeActionGroup(groupName: string): void
    /**
     * Causes the actions in the given group to become visible, replacing the
     * previously visible group.
     * @param groupName The name of the action group to show
     */
    showActionGroup(groupName: string): void

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

    // Class property signals of Anjuta-3.0.Anjuta.CommandBar

    connect(sigName: "notify::max-text-width", callback: any): number
    on(sigName: "notify::max-text-width", callback: any): number
    once(sigName: "notify::max-text-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-text-width", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CommandBar extends Gtk.Notebook {

    // Own properties of Anjuta-3.0.Anjuta.CommandBar

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.CommandBar

    constructor(config?: CommandBar.ConstructorProperties) 
    /**
     * Creates a new AnjutaCommandBar.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new AnjutaCommandBar.
     * @constructor 
     */
    static new(): CommandBar
    _init(config?: CommandBar.ConstructorProperties): void
}

export module CommandQueue {

    // Signal callback interfaces

    /**
     * Signal callback interface for `finished`
     */
    export interface FinishedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface CommandQueue {

    // Own fields of Anjuta-3.0.Anjuta.CommandQueue

    parentInstance: GObject.Object
    priv: CommandQueuePriv

    // Owm methods of Anjuta-3.0.Anjuta.CommandQueue

    /**
     * Adds a command to the Queue and starts it if there are no other commands
     * waiting
     * @param command The command to add
     */
    push(command: Command): void
    start(): boolean

    // Own virtual methods of Anjuta-3.0.Anjuta.CommandQueue

    finished(): void

    // Own signals of Anjuta-3.0.Anjuta.CommandQueue

    connect(sigName: "finished", callback: CommandQueue.FinishedSignalCallback): number
    on(sigName: "finished", callback: CommandQueue.FinishedSignalCallback): number
    once(sigName: "finished", callback: CommandQueue.FinishedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.CommandQueue

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CommandQueue extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.CommandQueue

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.CommandQueue

    constructor(config?: CommandQueue.ConstructorProperties) 
    constructor(mode: CommandQueueExecuteMode) 
    static new(mode: CommandQueueExecuteMode): CommandQueue
    _init(config?: CommandQueue.ConstructorProperties): void
}

export module Completion {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.Completion

        caseSensitive?: boolean | null
    }

}

export interface Completion {

    // Own properties of Anjuta-3.0.Anjuta.Completion

    caseSensitive: boolean

    // Own fields of Anjuta-3.0.Anjuta.Completion

    parentInstance: GObject.Object
    priv: CompletionPrivate

    // Owm methods of Anjuta-3.0.Anjuta.Completion

    /**
     * Add an item to the completion.
     * @param item the item to be added.
     */
    addItem(item: object | null): void
    /**
     * Clear all items added to the completion.
     */
    clear(): void
    getCaseSensitive(): boolean
    setCaseSensitive(caseSensitive: boolean): void
    setItemDestroyFunc(itemDestroyFunc: GLib.DestroyNotify | null): void

    // Class property signals of Anjuta-3.0.Anjuta.Completion

    connect(sigName: "notify::case-sensitive", callback: any): number
    on(sigName: "notify::case-sensitive", callback: any): number
    once(sigName: "notify::case-sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::case-sensitive", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Completion extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Completion

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.Completion

    constructor(config?: Completion.ConstructorProperties) 
    _init(config?: Completion.ConstructorProperties): void
}

export module Dock {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gdl.Dock.ConstructorProperties {
    }

}

export interface Dock extends Atk.ImplementorIface, Gtk.Buildable {

    // Conflicting properties

    name: any

    // Own fields of Anjuta-3.0.Anjuta.Dock

    parentInstance: any
    priv: any

    // Owm methods of Anjuta-3.0.Anjuta.Dock

    /**
     * Adds a pane, with optional #AnjutaCommandBar entries, to an AnjutaDock. This
     * method adds a pane with no grip that cannot be closed, floating or iconified.
     * @param paneName A unique name for this pane
     * @param paneLabel Label to display in this pane's grip
     * @param stockIcon Stock icon to display in this pane's grip
     * @param pane The #AnjutaDockPane to add to the dock. The dock takes ownership of 	  the pane object.
     * @param placement A #GdlDockPlacement value indicating where the pane should be 		   placed
     * @param entries #AnjutaCommandBar entries 		 for this pane. Can be %NULL
     * @param userData User data to pass to the entry callback
     */
    addPane(paneName: string, paneLabel: string, stockIcon: string, pane: DockPane, placement: Gdl.DockPlacement, entries: CommandBarEntry[] | null, userData: object | null): boolean
    /**
     * Does the same thing as anjuta_dock_add_pane, but allows GDL dock behavior
     * flags to be specified.
     * @param paneName A unique name for this pane
     * @param paneLabel Label to display in this pane's grip
     * @param stockIcon Stock icon to display in this pane's grip
     * @param pane The #AnjutaDockPane to add to the dock. The dock takes ownership of 	  the pane object.
     * @param placement A #GdlDockPlacement value indicating where the pane should be 		   placed
     * @param entries #AnjutaCommandBar entries 		 for this pane. Can be %NULL
     * @param userData User data to pass to the entry callback
     * @param behavior Any combination of #GdlDockItemBehavior flags
     */
    addPaneFull(paneName: string, paneLabel: string, stockIcon: string, pane: DockPane, placement: Gdl.DockPlacement, entries: CommandBarEntry[] | null, userData: object | null, behavior: Gdl.DockItemBehavior): boolean
    getCommandBar(): CommandBar | null
    /**
     * Makes the given pane invisible
     * @param pane Name of the pane to hide
     */
    hidePane(pane: DockPane): void
    /**
     * Presents the pane to the user by making it the currently active pane in its
     * switcher
     * @param pane Pane to present
     */
    presentPane(pane: DockPane): void
    /**
     * `self` An AnjutaDock
     * Removes a pane from a dock
     * @param pane Name of the pane to remove
     */
    removePane(pane: DockPane): void
    /**
     * Adds a pane, with optional #AnjutaCommandBar entries, to an AnjutaDock. This
     * method adds a pane with no grip that cannot be closed, floating or iconified.
     * If there was an old command pane, that pane is removed in favour of the new pane.
     * @param paneName A unique name for this pane
     * @param paneLabel Label to display in this pane's grip
     * @param stockIcon Stock icon to display in this pane's grip
     * @param pane The #AnjutaDockPane to add to the dock. The dock takes ownership of 	  the pane object.
     * @param placement A #GdlDockPlacement value indicating where the pane should be 		   placed
     * @param entries #AnjutaCommandBar entries 		 for this pane. Can be %NULL
     * @param userData User data to pass to the entry callback
     */
    replaceCommandPane(paneName: string, paneLabel: string, stockIcon: string, pane: DockPane, placement: Gdl.DockPlacement, entries: CommandBarEntry[] | null, userData: object | null): void
    /**
     * Associates an #AnjutaCommandBar with this dock. Command bars can be used to
     * provide different sets of commands based on the currently visible pane.
     * @param commandBar An #AnjutaCommandBar to associate with this dock
     */
    setCommandBar(commandBar: CommandBar): void
    /**
     * Makes the given pane visible
     * @param pane Name of the pane to show
     */
    showPane(pane: DockPane): void

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
     * Retrieves the name of the object. This name is used to identify the object.
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
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
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
     * Set the name of the object used to identify it.
     * @param name a name for the object
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
     * Get the top level #GdlDock widget of `object` or %NULL if cannot be found.
     */
    getToplevel(): Gdl.Dock | null

    // Overloads of getToplevel

    /**
     * This function returns the topmost widget in the container hierarchy
     * `widget` is a part of. If `widget` has no parent widgets, it will be
     * returned as the topmost widget. No reference will be added to the
     * returned widget; it should not be unreferenced.
     * 
     * Note the difference in behavior vs. gtk_widget_get_ancestor();
     * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
     * would return
     * %NULL if `widget` wasn???t inside a toplevel window, and if the
     * window was inside a #GtkWindow-derived widget which was in turn
     * inside the toplevel #GtkWindow. While the second case may
     * seem unlikely, it actually happens when a #GtkPlug is embedded
     * inside a #GtkSocket within the same application.
     * 
     * To reliably find the toplevel #GtkWindow, use
     * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
     * on the result. For instance, to get the title of a widget's toplevel
     * window, one might use:
     * 
     * ```c
     * static const char *
     * get_widget_toplevel_title (GtkWidget *widget)
     * {
     *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
     *   if (GTK_IS_WINDOW (toplevel))
     *     {
     *       return gtk_window_get_title (GTK_WINDOW (toplevel));
     *     }
     * 
     *   return NULL;
     * }
     * ```
     * 
     */
    getToplevel(): Gtk.Widget
    /**
     * This function returns the topmost widget in the container hierarchy
     * `widget` is a part of. If `widget` has no parent widgets, it will be
     * returned as the topmost widget. No reference will be added to the
     * returned widget; it should not be unreferenced.
     * 
     * Note the difference in behavior vs. gtk_widget_get_ancestor();
     * `gtk_widget_get_ancestor (widget, GTK_TYPE_WINDOW)`
     * would return
     * %NULL if `widget` wasn???t inside a toplevel window, and if the
     * window was inside a #GtkWindow-derived widget which was in turn
     * inside the toplevel #GtkWindow. While the second case may
     * seem unlikely, it actually happens when a #GtkPlug is embedded
     * inside a #GtkSocket within the same application.
     * 
     * To reliably find the toplevel #GtkWindow, use
     * gtk_widget_get_toplevel() and call GTK_IS_WINDOW()
     * on the result. For instance, to get the title of a widget's toplevel
     * window, one might use:
     * 
     * ```c
     * static const char *
     * get_widget_toplevel_title (GtkWidget *widget)
     * {
     *   GtkWidget *toplevel = gtk_widget_get_toplevel (widget);
     *   if (GTK_IS_WINDOW (toplevel))
     *     {
     *       return gtk_window_get_title (GTK_WINDOW (toplevel));
     *     }
     * 
     *   return NULL;
     * }
     * ```
     * 
     */
    getToplevel(): Gtk.Widget
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

    // Class property signals of Anjuta-3.0.Anjuta.Dock

    connect(sigName: "notify::default-title", callback: any): number
    on(sigName: "notify::default-title", callback: any): number
    once(sigName: "notify::default-title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-title", ...args: any[]): void
    connect(sigName: "notify::floating", callback: any): number
    on(sigName: "notify::floating", callback: any): number
    once(sigName: "notify::floating", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::floating", ...args: any[]): void
    connect(sigName: "notify::floatx", callback: any): number
    on(sigName: "notify::floatx", callback: any): number
    once(sigName: "notify::floatx", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::floatx", ...args: any[]): void
    connect(sigName: "notify::floaty", callback: any): number
    on(sigName: "notify::floaty", callback: any): number
    once(sigName: "notify::floaty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::floaty", ...args: any[]): void
    connect(sigName: "notify::height", callback: any): number
    on(sigName: "notify::height", callback: any): number
    once(sigName: "notify::height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar", callback: any): number
    on(sigName: "notify::skip-taskbar", callback: any): number
    once(sigName: "notify::skip-taskbar", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::skip-taskbar", ...args: any[]): void
    connect(sigName: "notify::width", callback: any): number
    on(sigName: "notify::width", callback: any): number
    once(sigName: "notify::width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::long-name", callback: any): number
    on(sigName: "notify::long-name", callback: any): number
    once(sigName: "notify::long-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::long-name", ...args: any[]): void
    connect(sigName: "notify::master", callback: any): number
    on(sigName: "notify::master", callback: any): number
    once(sigName: "notify::master", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::master", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pixbuf-icon", callback: any): number
    on(sigName: "notify::pixbuf-icon", callback: any): number
    once(sigName: "notify::pixbuf-icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixbuf-icon", ...args: any[]): void
    connect(sigName: "notify::stock-id", callback: any): number
    on(sigName: "notify::stock-id", callback: any): number
    once(sigName: "notify::stock-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stock-id", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Dock extends Gdl.Dock {

    // Own properties of Anjuta-3.0.Anjuta.Dock

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.Dock

    constructor(config?: Dock.ConstructorProperties) 
    /**
     * Creates a new AnjutaDock.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new AnjutaDock.
     * @constructor 
     */
    static new(): Dock
    _init(config?: Dock.ConstructorProperties): void
}

export module DockPane {

    // Signal callback interfaces

    /**
     * Signal callback interface for `multiple-selection-changed`
     */
    export interface MultipleSelectionChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `single-selection-changed`
     */
    export interface SingleSelectionChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.DockPane

        plugin?: Plugin | null
    }

}

export interface DockPane {

    // Own properties of Anjuta-3.0.Anjuta.DockPane

    plugin: Plugin

    // Own fields of Anjuta-3.0.Anjuta.DockPane

    parentInstance: GObject.Object
    priv: DockPanePriv

    // Owm methods of Anjuta-3.0.Anjuta.DockPane

    /**
     * Emits the multiple-selection-changed signal.
     */
    notifyMultipleSelectionChanged(): void
    /**
     * Emits the single-selection-changed signal.
     */
    notifySingleSelectionChanged(): void
    // Has conflict: refresh(): void

    // Own virtual methods of Anjuta-3.0.Anjuta.DockPane

    multipleSelectionChanged(): void
    /**
     * Refreshes the given pane. Subclasses only need to override this method if
     * needed.
     * @virtual 
     */
    refresh(): void
    singleSelectionChanged(): void

    // Own signals of Anjuta-3.0.Anjuta.DockPane

    connect(sigName: "multiple-selection-changed", callback: DockPane.MultipleSelectionChangedSignalCallback): number
    on(sigName: "multiple-selection-changed", callback: DockPane.MultipleSelectionChangedSignalCallback): number
    once(sigName: "multiple-selection-changed", callback: DockPane.MultipleSelectionChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "multiple-selection-changed", ...args: any[]): void
    connect(sigName: "single-selection-changed", callback: DockPane.SingleSelectionChangedSignalCallback): number
    on(sigName: "single-selection-changed", callback: DockPane.SingleSelectionChangedSignalCallback): number
    once(sigName: "single-selection-changed", callback: DockPane.SingleSelectionChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "single-selection-changed", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.DockPane

    connect(sigName: "notify::plugin", callback: any): number
    on(sigName: "notify::plugin", callback: any): number
    once(sigName: "notify::plugin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::plugin", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DockPane extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.DockPane

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.DockPane

    constructor(config?: DockPane.ConstructorProperties) 
    _init(config?: DockPane.ConstructorProperties): void
}

export module DropEntry {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.CellEditable.ConstructorProperties, Gtk.Editable.ConstructorProperties, Entry.ConstructorProperties {
    }

}

export interface DropEntry extends Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {

    // Own fields of Anjuta-3.0.Anjuta.DropEntry

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
     * Copies the contents of the currently selected content in the editable and
     * puts it on the clipboard.
     */
    copyClipboard(): void
    copyClipboard(): void

    // Overloads of copyClipboard

    /**
     * Copies the contents of the currently selected content in the editable and
     * puts it on the clipboard.
     */
    copyClipboard(): void
    /**
     * Removes the contents of the currently selected content in the editable and
     * puts it on the clipboard.
     */
    cutClipboard(): void
    cutClipboard(): void

    // Overloads of cutClipboard

    /**
     * Removes the contents of the currently selected content in the editable and
     * puts it on the clipboard.
     */
    cutClipboard(): void
    /**
     * Pastes the content of the clipboard to the current position of the
     * cursor in the editable.
     */
    pasteClipboard(): void
    pasteClipboard(): void

    // Overloads of pasteClipboard

    /**
     * Pastes the content of the clipboard to the current position of the
     * cursor in the editable.
     */
    pasteClipboard(): void

    // Class property signals of Anjuta-3.0.Anjuta.DropEntry

    connect(sigName: "notify::help-text", callback: any): number
    on(sigName: "notify::help-text", callback: any): number
    once(sigName: "notify::help-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::help-text", ...args: any[]): void
    connect(sigName: "notify::activates-default", callback: any): number
    on(sigName: "notify::activates-default", callback: any): number
    once(sigName: "notify::activates-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activates-default", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: any): number
    on(sigName: "notify::buffer", callback: any): number
    once(sigName: "notify::buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::caps-lock-warning", callback: any): number
    on(sigName: "notify::caps-lock-warning", callback: any): number
    once(sigName: "notify::caps-lock-warning", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::caps-lock-warning", ...args: any[]): void
    connect(sigName: "notify::completion", callback: any): number
    on(sigName: "notify::completion", callback: any): number
    once(sigName: "notify::completion", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::cursor-position", callback: any): number
    on(sigName: "notify::cursor-position", callback: any): number
    once(sigName: "notify::cursor-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor-position", ...args: any[]): void
    connect(sigName: "notify::editable", callback: any): number
    on(sigName: "notify::editable", callback: any): number
    once(sigName: "notify::editable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::enable-emoji-completion", callback: any): number
    on(sigName: "notify::enable-emoji-completion", callback: any): number
    once(sigName: "notify::enable-emoji-completion", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enable-emoji-completion", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: any): number
    on(sigName: "notify::has-frame", callback: any): number
    once(sigName: "notify::has-frame", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: any): number
    on(sigName: "notify::im-module", callback: any): number
    once(sigName: "notify::im-module", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::inner-border", callback: any): number
    on(sigName: "notify::inner-border", callback: any): number
    once(sigName: "notify::inner-border", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::inner-border", ...args: any[]): void
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
    connect(sigName: "notify::invisible-char", callback: any): number
    on(sigName: "notify::invisible-char", callback: any): number
    once(sigName: "notify::invisible-char", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::invisible-char", ...args: any[]): void
    connect(sigName: "notify::invisible-char-set", callback: any): number
    on(sigName: "notify::invisible-char-set", callback: any): number
    once(sigName: "notify::invisible-char-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::invisible-char-set", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: any): number
    on(sigName: "notify::max-length", callback: any): number
    once(sigName: "notify::max-length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: any): number
    on(sigName: "notify::max-width-chars", callback: any): number
    once(sigName: "notify::max-width-chars", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::overwrite-mode", callback: any): number
    on(sigName: "notify::overwrite-mode", callback: any): number
    once(sigName: "notify::overwrite-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overwrite-mode", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: any): number
    on(sigName: "notify::placeholder-text", callback: any): number
    once(sigName: "notify::placeholder-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::populate-all", callback: any): number
    on(sigName: "notify::populate-all", callback: any): number
    once(sigName: "notify::populate-all", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::populate-all", ...args: any[]): void
    connect(sigName: "notify::primary-icon-activatable", callback: any): number
    on(sigName: "notify::primary-icon-activatable", callback: any): number
    once(sigName: "notify::primary-icon-activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: any): number
    on(sigName: "notify::primary-icon-gicon", callback: any): number
    once(sigName: "notify::primary-icon-gicon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: any): number
    on(sigName: "notify::primary-icon-name", callback: any): number
    once(sigName: "notify::primary-icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-pixbuf", callback: any): number
    on(sigName: "notify::primary-icon-pixbuf", callback: any): number
    once(sigName: "notify::primary-icon-pixbuf", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::primary-icon-sensitive", callback: any): number
    on(sigName: "notify::primary-icon-sensitive", callback: any): number
    once(sigName: "notify::primary-icon-sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::primary-icon-stock", callback: any): number
    on(sigName: "notify::primary-icon-stock", callback: any): number
    once(sigName: "notify::primary-icon-stock", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::primary-icon-storage-type", callback: any): number
    on(sigName: "notify::primary-icon-storage-type", callback: any): number
    once(sigName: "notify::primary-icon-storage-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: any): number
    on(sigName: "notify::primary-icon-tooltip-markup", callback: any): number
    once(sigName: "notify::primary-icon-tooltip-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: any): number
    on(sigName: "notify::primary-icon-tooltip-text", callback: any): number
    once(sigName: "notify::primary-icon-tooltip-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::progress-fraction", callback: any): number
    on(sigName: "notify::progress-fraction", callback: any): number
    once(sigName: "notify::progress-fraction", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::progress-fraction", ...args: any[]): void
    connect(sigName: "notify::progress-pulse-step", callback: any): number
    on(sigName: "notify::progress-pulse-step", callback: any): number
    once(sigName: "notify::progress-pulse-step", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::progress-pulse-step", ...args: any[]): void
    connect(sigName: "notify::scroll-offset", callback: any): number
    on(sigName: "notify::scroll-offset", callback: any): number
    once(sigName: "notify::scroll-offset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scroll-offset", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-activatable", callback: any): number
    on(sigName: "notify::secondary-icon-activatable", callback: any): number
    once(sigName: "notify::secondary-icon-activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: any): number
    on(sigName: "notify::secondary-icon-gicon", callback: any): number
    once(sigName: "notify::secondary-icon-gicon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: any): number
    on(sigName: "notify::secondary-icon-name", callback: any): number
    once(sigName: "notify::secondary-icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-pixbuf", callback: any): number
    on(sigName: "notify::secondary-icon-pixbuf", callback: any): number
    once(sigName: "notify::secondary-icon-pixbuf", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-sensitive", callback: any): number
    on(sigName: "notify::secondary-icon-sensitive", callback: any): number
    once(sigName: "notify::secondary-icon-sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-stock", callback: any): number
    on(sigName: "notify::secondary-icon-stock", callback: any): number
    once(sigName: "notify::secondary-icon-stock", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-storage-type", callback: any): number
    on(sigName: "notify::secondary-icon-storage-type", callback: any): number
    once(sigName: "notify::secondary-icon-storage-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: any): number
    on(sigName: "notify::secondary-icon-tooltip-markup", callback: any): number
    once(sigName: "notify::secondary-icon-tooltip-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: any): number
    on(sigName: "notify::secondary-icon-tooltip-text", callback: any): number
    once(sigName: "notify::secondary-icon-tooltip-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::selection-bound", callback: any): number
    on(sigName: "notify::selection-bound", callback: any): number
    once(sigName: "notify::selection-bound", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selection-bound", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: any): number
    on(sigName: "notify::shadow-type", callback: any): number
    once(sigName: "notify::shadow-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::show-emoji-icon", callback: any): number
    on(sigName: "notify::show-emoji-icon", callback: any): number
    once(sigName: "notify::show-emoji-icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-emoji-icon", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: any): number
    on(sigName: "notify::tabs", callback: any): number
    once(sigName: "notify::tabs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::text", callback: any): number
    on(sigName: "notify::text", callback: any): number
    once(sigName: "notify::text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::text-length", callback: any): number
    on(sigName: "notify::text-length", callback: any): number
    once(sigName: "notify::text-length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-length", ...args: any[]): void
    connect(sigName: "notify::truncate-multiline", callback: any): number
    on(sigName: "notify::truncate-multiline", callback: any): number
    once(sigName: "notify::truncate-multiline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::truncate-multiline", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: any): number
    on(sigName: "notify::visibility", callback: any): number
    once(sigName: "notify::visibility", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::width-chars", callback: any): number
    on(sigName: "notify::width-chars", callback: any): number
    once(sigName: "notify::width-chars", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: any): number
    on(sigName: "notify::xalign", callback: any): number
    once(sigName: "notify::xalign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::xalign", ...args: any[]): void
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

export class DropEntry extends Entry {

    // Own properties of Anjuta-3.0.Anjuta.DropEntry

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.DropEntry

    constructor(config?: DropEntry.ConstructorProperties) 
    constructor() 
    static new(): DropEntry
    _init(config?: DropEntry.ConstructorProperties): void
}

export module Entry {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.CellEditable.ConstructorProperties, Gtk.Editable.ConstructorProperties, Gtk.Entry.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.Entry

        helpText?: string | null
    }

}

export interface Entry extends Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {

    // Own properties of Anjuta-3.0.Anjuta.Entry

    helpText: string

    // Own fields of Anjuta-3.0.Anjuta.Entry

    parentInstance: any
    priv: EntryPriv

    // Owm methods of Anjuta-3.0.Anjuta.Entry

    dupText(): string
    getText(): string
    isShowingHelpText(): boolean
    /**
     * Sets the text on the entry, showing the help text if the text is empty.
     * @param text The new text
     */
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
     * Copies the contents of the currently selected content in the editable and
     * puts it on the clipboard.
     */
    copyClipboard(): void
    copyClipboard(): void

    // Overloads of copyClipboard

    /**
     * Copies the contents of the currently selected content in the editable and
     * puts it on the clipboard.
     */
    copyClipboard(): void
    /**
     * Removes the contents of the currently selected content in the editable and
     * puts it on the clipboard.
     */
    cutClipboard(): void
    cutClipboard(): void

    // Overloads of cutClipboard

    /**
     * Removes the contents of the currently selected content in the editable and
     * puts it on the clipboard.
     */
    cutClipboard(): void
    /**
     * Pastes the content of the clipboard to the current position of the
     * cursor in the editable.
     */
    pasteClipboard(): void
    pasteClipboard(): void

    // Overloads of pasteClipboard

    /**
     * Pastes the content of the clipboard to the current position of the
     * cursor in the editable.
     */
    pasteClipboard(): void

    // Class property signals of Anjuta-3.0.Anjuta.Entry

    connect(sigName: "notify::help-text", callback: any): number
    on(sigName: "notify::help-text", callback: any): number
    once(sigName: "notify::help-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::help-text", ...args: any[]): void
    connect(sigName: "notify::activates-default", callback: any): number
    on(sigName: "notify::activates-default", callback: any): number
    once(sigName: "notify::activates-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activates-default", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: any): number
    on(sigName: "notify::buffer", callback: any): number
    once(sigName: "notify::buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::caps-lock-warning", callback: any): number
    on(sigName: "notify::caps-lock-warning", callback: any): number
    once(sigName: "notify::caps-lock-warning", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::caps-lock-warning", ...args: any[]): void
    connect(sigName: "notify::completion", callback: any): number
    on(sigName: "notify::completion", callback: any): number
    once(sigName: "notify::completion", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::cursor-position", callback: any): number
    on(sigName: "notify::cursor-position", callback: any): number
    once(sigName: "notify::cursor-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor-position", ...args: any[]): void
    connect(sigName: "notify::editable", callback: any): number
    on(sigName: "notify::editable", callback: any): number
    once(sigName: "notify::editable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::enable-emoji-completion", callback: any): number
    on(sigName: "notify::enable-emoji-completion", callback: any): number
    once(sigName: "notify::enable-emoji-completion", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enable-emoji-completion", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: any): number
    on(sigName: "notify::has-frame", callback: any): number
    once(sigName: "notify::has-frame", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: any): number
    on(sigName: "notify::im-module", callback: any): number
    once(sigName: "notify::im-module", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::inner-border", callback: any): number
    on(sigName: "notify::inner-border", callback: any): number
    once(sigName: "notify::inner-border", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::inner-border", ...args: any[]): void
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
    connect(sigName: "notify::invisible-char", callback: any): number
    on(sigName: "notify::invisible-char", callback: any): number
    once(sigName: "notify::invisible-char", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::invisible-char", ...args: any[]): void
    connect(sigName: "notify::invisible-char-set", callback: any): number
    on(sigName: "notify::invisible-char-set", callback: any): number
    once(sigName: "notify::invisible-char-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::invisible-char-set", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: any): number
    on(sigName: "notify::max-length", callback: any): number
    once(sigName: "notify::max-length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: any): number
    on(sigName: "notify::max-width-chars", callback: any): number
    once(sigName: "notify::max-width-chars", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::overwrite-mode", callback: any): number
    on(sigName: "notify::overwrite-mode", callback: any): number
    once(sigName: "notify::overwrite-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overwrite-mode", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: any): number
    on(sigName: "notify::placeholder-text", callback: any): number
    once(sigName: "notify::placeholder-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::populate-all", callback: any): number
    on(sigName: "notify::populate-all", callback: any): number
    once(sigName: "notify::populate-all", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::populate-all", ...args: any[]): void
    connect(sigName: "notify::primary-icon-activatable", callback: any): number
    on(sigName: "notify::primary-icon-activatable", callback: any): number
    once(sigName: "notify::primary-icon-activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: any): number
    on(sigName: "notify::primary-icon-gicon", callback: any): number
    once(sigName: "notify::primary-icon-gicon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: any): number
    on(sigName: "notify::primary-icon-name", callback: any): number
    once(sigName: "notify::primary-icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-pixbuf", callback: any): number
    on(sigName: "notify::primary-icon-pixbuf", callback: any): number
    once(sigName: "notify::primary-icon-pixbuf", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::primary-icon-sensitive", callback: any): number
    on(sigName: "notify::primary-icon-sensitive", callback: any): number
    once(sigName: "notify::primary-icon-sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::primary-icon-stock", callback: any): number
    on(sigName: "notify::primary-icon-stock", callback: any): number
    once(sigName: "notify::primary-icon-stock", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::primary-icon-storage-type", callback: any): number
    on(sigName: "notify::primary-icon-storage-type", callback: any): number
    once(sigName: "notify::primary-icon-storage-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: any): number
    on(sigName: "notify::primary-icon-tooltip-markup", callback: any): number
    once(sigName: "notify::primary-icon-tooltip-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: any): number
    on(sigName: "notify::primary-icon-tooltip-text", callback: any): number
    once(sigName: "notify::primary-icon-tooltip-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::progress-fraction", callback: any): number
    on(sigName: "notify::progress-fraction", callback: any): number
    once(sigName: "notify::progress-fraction", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::progress-fraction", ...args: any[]): void
    connect(sigName: "notify::progress-pulse-step", callback: any): number
    on(sigName: "notify::progress-pulse-step", callback: any): number
    once(sigName: "notify::progress-pulse-step", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::progress-pulse-step", ...args: any[]): void
    connect(sigName: "notify::scroll-offset", callback: any): number
    on(sigName: "notify::scroll-offset", callback: any): number
    once(sigName: "notify::scroll-offset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scroll-offset", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-activatable", callback: any): number
    on(sigName: "notify::secondary-icon-activatable", callback: any): number
    once(sigName: "notify::secondary-icon-activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: any): number
    on(sigName: "notify::secondary-icon-gicon", callback: any): number
    once(sigName: "notify::secondary-icon-gicon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: any): number
    on(sigName: "notify::secondary-icon-name", callback: any): number
    once(sigName: "notify::secondary-icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-pixbuf", callback: any): number
    on(sigName: "notify::secondary-icon-pixbuf", callback: any): number
    once(sigName: "notify::secondary-icon-pixbuf", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-sensitive", callback: any): number
    on(sigName: "notify::secondary-icon-sensitive", callback: any): number
    once(sigName: "notify::secondary-icon-sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-stock", callback: any): number
    on(sigName: "notify::secondary-icon-stock", callback: any): number
    once(sigName: "notify::secondary-icon-stock", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-storage-type", callback: any): number
    on(sigName: "notify::secondary-icon-storage-type", callback: any): number
    once(sigName: "notify::secondary-icon-storage-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: any): number
    on(sigName: "notify::secondary-icon-tooltip-markup", callback: any): number
    once(sigName: "notify::secondary-icon-tooltip-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: any): number
    on(sigName: "notify::secondary-icon-tooltip-text", callback: any): number
    once(sigName: "notify::secondary-icon-tooltip-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::selection-bound", callback: any): number
    on(sigName: "notify::selection-bound", callback: any): number
    once(sigName: "notify::selection-bound", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selection-bound", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: any): number
    on(sigName: "notify::shadow-type", callback: any): number
    once(sigName: "notify::shadow-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::show-emoji-icon", callback: any): number
    on(sigName: "notify::show-emoji-icon", callback: any): number
    once(sigName: "notify::show-emoji-icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-emoji-icon", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: any): number
    on(sigName: "notify::tabs", callback: any): number
    once(sigName: "notify::tabs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::text", callback: any): number
    on(sigName: "notify::text", callback: any): number
    once(sigName: "notify::text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::text-length", callback: any): number
    on(sigName: "notify::text-length", callback: any): number
    once(sigName: "notify::text-length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-length", ...args: any[]): void
    connect(sigName: "notify::truncate-multiline", callback: any): number
    on(sigName: "notify::truncate-multiline", callback: any): number
    once(sigName: "notify::truncate-multiline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::truncate-multiline", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: any): number
    on(sigName: "notify::visibility", callback: any): number
    once(sigName: "notify::visibility", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::width-chars", callback: any): number
    on(sigName: "notify::width-chars", callback: any): number
    once(sigName: "notify::width-chars", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: any): number
    on(sigName: "notify::xalign", callback: any): number
    once(sigName: "notify::xalign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::xalign", ...args: any[]): void
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

export class Entry extends Gtk.Entry {

    // Own properties of Anjuta-3.0.Anjuta.Entry

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.Entry

    constructor(config?: Entry.ConstructorProperties) 
    /**
     * Creates a new AnjutaEntry.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new AnjutaEntry.
     * @constructor 
     */
    static new(): Entry
    _init(config?: Entry.ConstructorProperties): void
}

export module EnvironmentEditor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Bin.ConstructorProperties {
    }

}

export interface EnvironmentEditor extends Atk.ImplementorIface, Gtk.Buildable {

    // Owm methods of Anjuta-3.0.Anjuta.EnvironmentEditor

    reset(): void
    setVariable(variable: string): void

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

    // Own virtual methods of Anjuta-3.0.Anjuta.EnvironmentEditor

    changed(): void

    // Own signals of Anjuta-3.0.Anjuta.EnvironmentEditor

    connect(sigName: "changed", callback: EnvironmentEditor.ChangedSignalCallback): number
    on(sigName: "changed", callback: EnvironmentEditor.ChangedSignalCallback): number
    once(sigName: "changed", callback: EnvironmentEditor.ChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.EnvironmentEditor

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

export class EnvironmentEditor extends Gtk.Bin {

    // Own properties of Anjuta-3.0.Anjuta.EnvironmentEditor

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.EnvironmentEditor

    constructor(config?: EnvironmentEditor.ConstructorProperties) 
    constructor() 
    static new(): EnvironmentEditor
    _init(config?: EnvironmentEditor.ConstructorProperties): void
}

export module FileDropEntry {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.CellEditable.ConstructorProperties, Gtk.Editable.ConstructorProperties, DropEntry.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.FileDropEntry

        relativePath?: string | null
    }

}

export interface FileDropEntry extends Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {

    // Own properties of Anjuta-3.0.Anjuta.FileDropEntry

    relativePath: string

    // Own fields of Anjuta-3.0.Anjuta.FileDropEntry

    parentInstance: any
    priv: any

    // Owm methods of Anjuta-3.0.Anjuta.FileDropEntry

    setRelativePath(path: string): void

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
     * Copies the contents of the currently selected content in the editable and
     * puts it on the clipboard.
     */
    copyClipboard(): void
    copyClipboard(): void

    // Overloads of copyClipboard

    /**
     * Copies the contents of the currently selected content in the editable and
     * puts it on the clipboard.
     */
    copyClipboard(): void
    /**
     * Removes the contents of the currently selected content in the editable and
     * puts it on the clipboard.
     */
    cutClipboard(): void
    cutClipboard(): void

    // Overloads of cutClipboard

    /**
     * Removes the contents of the currently selected content in the editable and
     * puts it on the clipboard.
     */
    cutClipboard(): void
    /**
     * Pastes the content of the clipboard to the current position of the
     * cursor in the editable.
     */
    pasteClipboard(): void
    pasteClipboard(): void

    // Overloads of pasteClipboard

    /**
     * Pastes the content of the clipboard to the current position of the
     * cursor in the editable.
     */
    pasteClipboard(): void

    // Class property signals of Anjuta-3.0.Anjuta.FileDropEntry

    connect(sigName: "notify::relative-path", callback: any): number
    on(sigName: "notify::relative-path", callback: any): number
    once(sigName: "notify::relative-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::relative-path", ...args: any[]): void
    connect(sigName: "notify::help-text", callback: any): number
    on(sigName: "notify::help-text", callback: any): number
    once(sigName: "notify::help-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::help-text", ...args: any[]): void
    connect(sigName: "notify::activates-default", callback: any): number
    on(sigName: "notify::activates-default", callback: any): number
    once(sigName: "notify::activates-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activates-default", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: any): number
    on(sigName: "notify::buffer", callback: any): number
    once(sigName: "notify::buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::caps-lock-warning", callback: any): number
    on(sigName: "notify::caps-lock-warning", callback: any): number
    once(sigName: "notify::caps-lock-warning", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::caps-lock-warning", ...args: any[]): void
    connect(sigName: "notify::completion", callback: any): number
    on(sigName: "notify::completion", callback: any): number
    once(sigName: "notify::completion", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::cursor-position", callback: any): number
    on(sigName: "notify::cursor-position", callback: any): number
    once(sigName: "notify::cursor-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor-position", ...args: any[]): void
    connect(sigName: "notify::editable", callback: any): number
    on(sigName: "notify::editable", callback: any): number
    once(sigName: "notify::editable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::enable-emoji-completion", callback: any): number
    on(sigName: "notify::enable-emoji-completion", callback: any): number
    once(sigName: "notify::enable-emoji-completion", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enable-emoji-completion", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: any): number
    on(sigName: "notify::has-frame", callback: any): number
    once(sigName: "notify::has-frame", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: any): number
    on(sigName: "notify::im-module", callback: any): number
    once(sigName: "notify::im-module", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::inner-border", callback: any): number
    on(sigName: "notify::inner-border", callback: any): number
    once(sigName: "notify::inner-border", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::inner-border", ...args: any[]): void
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
    connect(sigName: "notify::invisible-char", callback: any): number
    on(sigName: "notify::invisible-char", callback: any): number
    once(sigName: "notify::invisible-char", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::invisible-char", ...args: any[]): void
    connect(sigName: "notify::invisible-char-set", callback: any): number
    on(sigName: "notify::invisible-char-set", callback: any): number
    once(sigName: "notify::invisible-char-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::invisible-char-set", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: any): number
    on(sigName: "notify::max-length", callback: any): number
    once(sigName: "notify::max-length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: any): number
    on(sigName: "notify::max-width-chars", callback: any): number
    once(sigName: "notify::max-width-chars", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::overwrite-mode", callback: any): number
    on(sigName: "notify::overwrite-mode", callback: any): number
    once(sigName: "notify::overwrite-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overwrite-mode", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: any): number
    on(sigName: "notify::placeholder-text", callback: any): number
    once(sigName: "notify::placeholder-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::populate-all", callback: any): number
    on(sigName: "notify::populate-all", callback: any): number
    once(sigName: "notify::populate-all", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::populate-all", ...args: any[]): void
    connect(sigName: "notify::primary-icon-activatable", callback: any): number
    on(sigName: "notify::primary-icon-activatable", callback: any): number
    once(sigName: "notify::primary-icon-activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: any): number
    on(sigName: "notify::primary-icon-gicon", callback: any): number
    once(sigName: "notify::primary-icon-gicon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: any): number
    on(sigName: "notify::primary-icon-name", callback: any): number
    once(sigName: "notify::primary-icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-pixbuf", callback: any): number
    on(sigName: "notify::primary-icon-pixbuf", callback: any): number
    once(sigName: "notify::primary-icon-pixbuf", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::primary-icon-sensitive", callback: any): number
    on(sigName: "notify::primary-icon-sensitive", callback: any): number
    once(sigName: "notify::primary-icon-sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::primary-icon-stock", callback: any): number
    on(sigName: "notify::primary-icon-stock", callback: any): number
    once(sigName: "notify::primary-icon-stock", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::primary-icon-storage-type", callback: any): number
    on(sigName: "notify::primary-icon-storage-type", callback: any): number
    once(sigName: "notify::primary-icon-storage-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: any): number
    on(sigName: "notify::primary-icon-tooltip-markup", callback: any): number
    once(sigName: "notify::primary-icon-tooltip-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: any): number
    on(sigName: "notify::primary-icon-tooltip-text", callback: any): number
    once(sigName: "notify::primary-icon-tooltip-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::progress-fraction", callback: any): number
    on(sigName: "notify::progress-fraction", callback: any): number
    once(sigName: "notify::progress-fraction", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::progress-fraction", ...args: any[]): void
    connect(sigName: "notify::progress-pulse-step", callback: any): number
    on(sigName: "notify::progress-pulse-step", callback: any): number
    once(sigName: "notify::progress-pulse-step", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::progress-pulse-step", ...args: any[]): void
    connect(sigName: "notify::scroll-offset", callback: any): number
    on(sigName: "notify::scroll-offset", callback: any): number
    once(sigName: "notify::scroll-offset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scroll-offset", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-activatable", callback: any): number
    on(sigName: "notify::secondary-icon-activatable", callback: any): number
    once(sigName: "notify::secondary-icon-activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: any): number
    on(sigName: "notify::secondary-icon-gicon", callback: any): number
    once(sigName: "notify::secondary-icon-gicon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: any): number
    on(sigName: "notify::secondary-icon-name", callback: any): number
    once(sigName: "notify::secondary-icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-pixbuf", callback: any): number
    on(sigName: "notify::secondary-icon-pixbuf", callback: any): number
    once(sigName: "notify::secondary-icon-pixbuf", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-sensitive", callback: any): number
    on(sigName: "notify::secondary-icon-sensitive", callback: any): number
    once(sigName: "notify::secondary-icon-sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-stock", callback: any): number
    on(sigName: "notify::secondary-icon-stock", callback: any): number
    once(sigName: "notify::secondary-icon-stock", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-storage-type", callback: any): number
    on(sigName: "notify::secondary-icon-storage-type", callback: any): number
    once(sigName: "notify::secondary-icon-storage-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: any): number
    on(sigName: "notify::secondary-icon-tooltip-markup", callback: any): number
    once(sigName: "notify::secondary-icon-tooltip-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: any): number
    on(sigName: "notify::secondary-icon-tooltip-text", callback: any): number
    once(sigName: "notify::secondary-icon-tooltip-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::selection-bound", callback: any): number
    on(sigName: "notify::selection-bound", callback: any): number
    once(sigName: "notify::selection-bound", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selection-bound", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: any): number
    on(sigName: "notify::shadow-type", callback: any): number
    once(sigName: "notify::shadow-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::show-emoji-icon", callback: any): number
    on(sigName: "notify::show-emoji-icon", callback: any): number
    once(sigName: "notify::show-emoji-icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-emoji-icon", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: any): number
    on(sigName: "notify::tabs", callback: any): number
    once(sigName: "notify::tabs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::text", callback: any): number
    on(sigName: "notify::text", callback: any): number
    once(sigName: "notify::text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::text-length", callback: any): number
    on(sigName: "notify::text-length", callback: any): number
    once(sigName: "notify::text-length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-length", ...args: any[]): void
    connect(sigName: "notify::truncate-multiline", callback: any): number
    on(sigName: "notify::truncate-multiline", callback: any): number
    once(sigName: "notify::truncate-multiline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::truncate-multiline", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: any): number
    on(sigName: "notify::visibility", callback: any): number
    once(sigName: "notify::visibility", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::width-chars", callback: any): number
    on(sigName: "notify::width-chars", callback: any): number
    once(sigName: "notify::width-chars", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: any): number
    on(sigName: "notify::xalign", callback: any): number
    once(sigName: "notify::xalign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::xalign", ...args: any[]): void
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

export class FileDropEntry extends DropEntry {

    // Own properties of Anjuta-3.0.Anjuta.FileDropEntry

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.FileDropEntry

    constructor(config?: FileDropEntry.ConstructorProperties) 
    constructor() 
    static new(): FileDropEntry
    _init(config?: FileDropEntry.ConstructorProperties): void
}

export module FileList {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.FileList

        relativePath?: string | null
        showAddButton?: boolean | null
    }

}

export interface FileList extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Anjuta-3.0.Anjuta.FileList

    relativePath: string
    showAddButton: boolean

    // Own fields of Anjuta-3.0.Anjuta.FileList

    parentInstance: any
    priv: FileListPriv

    // Owm methods of Anjuta-3.0.Anjuta.FileList

    clear(): void
    setRelativePath(path: string): void

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

    // Class property signals of Anjuta-3.0.Anjuta.FileList

    connect(sigName: "notify::relative-path", callback: any): number
    on(sigName: "notify::relative-path", callback: any): number
    once(sigName: "notify::relative-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::relative-path", ...args: any[]): void
    connect(sigName: "notify::show-add-button", callback: any): number
    on(sigName: "notify::show-add-button", callback: any): number
    once(sigName: "notify::show-add-button", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-add-button", ...args: any[]): void
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

export class FileList extends Gtk.Box {

    // Own properties of Anjuta-3.0.Anjuta.FileList

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.FileList

    constructor(config?: FileList.ConstructorProperties) 
    constructor() 
    static new(): FileList

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box???s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: FileList.ConstructorProperties): void
}

export module LanguageProvider {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface LanguageProvider {

    // Own fields of Anjuta-3.0.Anjuta.LanguageProvider

    parent: GObject.Object
    priv: LanguageProviderPriv

    // Owm methods of Anjuta-3.0.Anjuta.LanguageProvider

    /**
     * Complete the function name
     * @param iprov IAnjutaProvider object
     * @param iter the cursor
     * @param data the ProposalData
     */
    activate(iprov: GObject.Object, iter: GObject.Object, data: object | null): void
    /**
     * Searches for a calltip context
     * @param itip whether a tooltip is crrently shown
     * @param iter current cursor position
     * @param scopeContextCh language-specific context characters                    the end is marked with a '0' character
     */
    getCalltipContext(itip: GObject.Object, iter: GObject.Object, scopeContextCh: string): string
    /**
     * Search for the current typed word
     * @param editor IAnjutaEditor object
     * @param iter current cursor position
     * @param startIter return location for the start_iter (if a preword was found)
     * @param wordCharacters 
     */
    getPreWord(editor: GObject.Object, iter: GObject.Object, startIter: GObject.Object, wordCharacters: string): string | null
    /**
     * Install the settings for AnjutaLanguageProvider
     * @param ieditor IAnjutaEditor object
     * @param settings the settings
     */
    install(ieditor: GObject.Object, settings: Gio.Settings): void
    /**
     * Show completion for the context at position `iter`. The provider should
     * call anjuta_language_provider_proposals here to add proposals to the list.
     * @param iprov IAnjutaProvider object
     * @param cursor the text iter where the provider should be populated
     */
    populate(iprov: GObject.Object, cursor: GObject.Object): void

    // Class property signals of Anjuta-3.0.Anjuta.LanguageProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class LanguageProvider extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.LanguageProvider

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.LanguageProvider

    constructor(config?: LanguageProvider.ConstructorProperties) 
    _init(config?: LanguageProvider.ConstructorProperties): void
}

export module Launcher {

    // Signal callback interfaces

    /**
     * Signal callback interface for `busy`
     */
    export interface BusySignalCallback {
        (busy: boolean): void
    }

    /**
     * Signal callback interface for `child-exited`
     */
    export interface ChildExitedSignalCallback {
        (childPid: number, status: number, time: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Launcher {

    // Own fields of Anjuta-3.0.Anjuta.Launcher

    parent: GObject.Object
    priv: LauncherPriv

    // Owm methods of Anjuta-3.0.Anjuta.Launcher

    /**
     * Gets the Process ID of the child being executed.
     */
    getChildPid(): number
    /**
     * Tells if the laucher is currently executing any command.
     */
    isBusy(): boolean
    /**
     * Resets the launcher and kills (SIGTERM) current process, if it is still
     * executing.
     */
    reset(): void
    /**
     * Sends a string to TTY input of the process currently being executed.
     * Mostly useful for entering passwords and other inputs which are directly
     * read from TTY input of the process.
     * @param inputStr The string to send to PTY of the process.
     */
    sendPtyin(inputStr: string): void
    /**
     * Sends a string to Standard input of the process currently being executed.
     * @param inputStr The string to send to STDIN of the process.
     */
    sendStdin(inputStr: string): void
    /**
     * Sends a EOF to Standard input of the process currently being executed.
     */
    sendStdinEof(): void
    /**
     * Sets if output should buffered or not. By default, it is buffered.
     * @param buffered buffer output.
     */
    setBufferedOutput(buffered: boolean): boolean
    /**
     * Set if output is checked for a password prompti. A special dialog box
     * is use to enter it in this case. By default, this behavior is enabled.
     * @param checkPasswd check for password.
     */
    setCheckPasswdPrompt(checkPasswd: boolean): boolean
    /**
     * Sets the character set to use for Input/Output with the process.
     * @param charset Character set to use for Input/Output with the process.
     */
    setEncoding(charset: string): void
    /**
     * Sets if input (those given in STDIN) should enabled or disabled. By default,
     * it is disabled.
     * @param echoOn Echo ON flag.
     */
    setTerminalEcho(echoOn: boolean): boolean
    /**
     * When this flag is set, al i/o channels are closed and the child-exit
     * signal is emitted as soon as the child exit. By default, or when this
     * flag is clear, the launcher object wait until the i/o channels are
     * closed.
     * @param terminateOnExit terminate on exit flag
     */
    setTerminateOnExit(terminateOnExit: boolean): boolean
    /**
     * Sends a kernel signal to the process that is being executed.
     * @param sig kernel signal ID (e.g. SIGTERM).
     */
    signal(sig: number): void

    // Own virtual methods of Anjuta-3.0.Anjuta.Launcher

    busy(busyFlag: boolean): void
    childExited(childPid: number, exitStatus: number, timeTakenInSeconds: number): void

    // Own signals of Anjuta-3.0.Anjuta.Launcher

    connect(sigName: "busy", callback: Launcher.BusySignalCallback): number
    on(sigName: "busy", callback: Launcher.BusySignalCallback): number
    once(sigName: "busy", callback: Launcher.BusySignalCallback): number
    off(handlerId: number): number
    emit(sigName: "busy", ...args: any[]): void
    connect(sigName: "child-exited", callback: Launcher.ChildExitedSignalCallback): number
    on(sigName: "child-exited", callback: Launcher.ChildExitedSignalCallback): number
    once(sigName: "child-exited", callback: Launcher.ChildExitedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "child-exited", status: number, time: number, ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.Launcher

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Launcher extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Launcher

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.Launcher

    constructor(config?: Launcher.ConstructorProperties) 
    /**
     * Sets if input (those given in STDIN) should enabled or disabled. By default,
     * it is disabled.
     * @constructor 
     */
    constructor() 
    /**
     * Sets if input (those given in STDIN) should enabled or disabled. By default,
     * it is disabled.
     * @constructor 
     */
    static new(): Launcher
    _init(config?: Launcher.ConstructorProperties): void
}

export module PkgConfigChooser {

    // Signal callback interfaces

    /**
     * Signal callback interface for `package-activated`
     */
    export interface PackageActivatedSignalCallback {
        (package: string): void
    }

    /**
     * Signal callback interface for `package-deactivated`
     */
    export interface PackageDeactivatedSignalCallback {
        (package: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.TreeView.ConstructorProperties {
    }

}

export interface PkgConfigChooser extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own fields of Anjuta-3.0.Anjuta.PkgConfigChooser

    parentInstance: any
    priv: PkgConfigChooserPrivate

    // Owm methods of Anjuta-3.0.Anjuta.PkgConfigChooser

    getSelectedPackage(): string
    showActiveColumn(showColumn: boolean): void
    showActiveOnly(showSelected: boolean): void

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

    // Own virtual methods of Anjuta-3.0.Anjuta.PkgConfigChooser

    packageActivated(package: string): void
    packageDeactivated(package: string): void

    // Own signals of Anjuta-3.0.Anjuta.PkgConfigChooser

    connect(sigName: "package-activated", callback: PkgConfigChooser.PackageActivatedSignalCallback): number
    on(sigName: "package-activated", callback: PkgConfigChooser.PackageActivatedSignalCallback): number
    once(sigName: "package-activated", callback: PkgConfigChooser.PackageActivatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "package-activated", ...args: any[]): void
    connect(sigName: "package-deactivated", callback: PkgConfigChooser.PackageDeactivatedSignalCallback): number
    on(sigName: "package-deactivated", callback: PkgConfigChooser.PackageDeactivatedSignalCallback): number
    once(sigName: "package-deactivated", callback: PkgConfigChooser.PackageDeactivatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "package-deactivated", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.PkgConfigChooser

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

export class PkgConfigChooser extends Gtk.TreeView {

    // Own properties of Anjuta-3.0.Anjuta.PkgConfigChooser

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.PkgConfigChooser

    constructor(config?: PkgConfigChooser.ConstructorProperties) 
    constructor() 
    static new(): PkgConfigChooser
    _init(config?: PkgConfigChooser.ConstructorProperties): void
}

export module PkgScanner {

    // Constructor properties interface

    export interface ConstructorProperties extends AsyncCommand.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.PkgScanner

        package?: string | null
        version?: string | null
    }

}

export interface PkgScanner {

    // Own properties of Anjuta-3.0.Anjuta.PkgScanner

    package: string
    version: string

    // Own fields of Anjuta-3.0.Anjuta.PkgScanner

    parentInstance: any
    priv: any

    // Owm methods of Anjuta-3.0.Anjuta.PkgScanner

    getPackage(): string
    getVersion(): string

    // Class property signals of Anjuta-3.0.Anjuta.PkgScanner

    connect(sigName: "notify::package", callback: any): number
    on(sigName: "notify::package", callback: any): number
    once(sigName: "notify::package", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::package", ...args: any[]): void
    connect(sigName: "notify::version", callback: any): number
    on(sigName: "notify::version", callback: any): number
    once(sigName: "notify::version", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PkgScanner extends AsyncCommand {

    // Own properties of Anjuta-3.0.Anjuta.PkgScanner

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.PkgScanner

    constructor(config?: PkgScanner.ConstructorProperties) 
    constructor(package: string, version: string) 
    static new(package: string, version: string): PkgScanner
    _init(config?: PkgScanner.ConstructorProperties): void
}

export module Plugin {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activated`
     */
    export interface ActivatedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `deactivated`
     */
    export interface DeactivatedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.Plugin

        /**
         * The #AnjutaShell object associated with this plugin
         */
        shell?: Shell | null
    }

}

export interface Plugin {

    // Own fields of Anjuta-3.0.Anjuta.Plugin

    parent: GObject.Object
    shell: Shell

    // Owm methods of Anjuta-3.0.Anjuta.Plugin

    // Has conflict: activate(): boolean
    /**
     * Adds a watch for `name` value. When the value is added in shell, the `added`
     * callback will be called and when it is removed, the `removed` callback will
     * be called. The returned ID is used to remove the watch later.
     * @param name Name of the value to watch.
     * @param added Callback to call when the value is added.
     * @param removed Callback to call when the value is removed.
     */
    addWatch(name: string, added: PluginValueAdded, removed: PluginValueRemoved): number
    // Has conflict: deactivate(): boolean
    getShell(): Shell
    /**
     * Returns %TRUE if the plugin has been activated.
     */
    isActive(): boolean
    /**
     * Removes the watch represented by `id` (which was returned by
     * anjuta_plugin_add_watch()).
     * @param id Watch id to remove.
     * @param sendRemove If true, calls value_removed callback.
     */
    removeWatch(id: number, sendRemove: boolean): void

    // Own virtual methods of Anjuta-3.0.Anjuta.Plugin

    /**
     * Activates the plugin by calling activate() virtual method. All plugins
     * should derive their classes from this virtual class and implement this
     * method.
     * If the plugin implements IAnjutaPreferences, it is prompted to install
     * it's preferences.
     * @virtual 
     */
    activate(): boolean
    activated(): void
    /**
     * Deactivates the plugin by calling deactivate() virtual method. All plugins
     * should derive their classes from this virtual class and implement this
     * method.
     * @virtual 
     */
    deactivate(): boolean
    deactivated(): void

    // Own signals of Anjuta-3.0.Anjuta.Plugin

    connect(sigName: "activated", callback: Plugin.ActivatedSignalCallback): number
    on(sigName: "activated", callback: Plugin.ActivatedSignalCallback): number
    once(sigName: "activated", callback: Plugin.ActivatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "activated", ...args: any[]): void
    connect(sigName: "deactivated", callback: Plugin.DeactivatedSignalCallback): number
    on(sigName: "deactivated", callback: Plugin.DeactivatedSignalCallback): number
    once(sigName: "deactivated", callback: Plugin.DeactivatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "deactivated", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.Plugin

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Plugin extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Plugin

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.Plugin

    constructor(config?: Plugin.ConstructorProperties) 
    _init(config?: Plugin.ConstructorProperties): void
}

export module PluginHandle {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface PluginHandle {

    // Own properties of Anjuta-3.0.Anjuta.PluginHandle

    readonly about: string
    readonly canLoad: boolean
    readonly canUnload: boolean
    readonly checked: boolean
    readonly dependencies: object
    readonly dependencyNames: object
    readonly dependents: object
    readonly description: object
    readonly iconPath: string
    readonly id: string
    readonly interfaces: object
    readonly language: string
    readonly name: string
    readonly path: string
    readonly resident: boolean
    readonly resolvePass: number
    readonly userActivatable: boolean

    // Own fields of Anjuta-3.0.Anjuta.PluginHandle

    parentInstance: GObject.Object
    priv: PluginHandlePriv

    // Owm methods of Anjuta-3.0.Anjuta.PluginHandle

    getAbout(): string
    getCanLoad(): boolean
    getCanUnload(): boolean
    getChecked(): boolean
    getDescription(): PluginDescription
    getIconPath(): string
    getId(): string
    getLanguage(): string
    getName(): string
    getPath(): string
    getResident(): boolean
    getResolvePass(): number
    getUserActivatable(): boolean
    setCanLoad(canLoad: boolean): void
    setCanUnload(canUnload: boolean): void
    setChecked(checked: boolean): void
    setResolvePass(resolvePass: boolean): void
    unresolveDependencies(): void

    // Class property signals of Anjuta-3.0.Anjuta.PluginHandle

    connect(sigName: "notify::about", callback: any): number
    on(sigName: "notify::about", callback: any): number
    once(sigName: "notify::about", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::about", ...args: any[]): void
    connect(sigName: "notify::can-load", callback: any): number
    on(sigName: "notify::can-load", callback: any): number
    once(sigName: "notify::can-load", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-load", ...args: any[]): void
    connect(sigName: "notify::can-unload", callback: any): number
    on(sigName: "notify::can-unload", callback: any): number
    once(sigName: "notify::can-unload", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-unload", ...args: any[]): void
    connect(sigName: "notify::checked", callback: any): number
    on(sigName: "notify::checked", callback: any): number
    once(sigName: "notify::checked", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::checked", ...args: any[]): void
    connect(sigName: "notify::dependencies", callback: any): number
    on(sigName: "notify::dependencies", callback: any): number
    once(sigName: "notify::dependencies", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dependencies", ...args: any[]): void
    connect(sigName: "notify::dependency-names", callback: any): number
    on(sigName: "notify::dependency-names", callback: any): number
    once(sigName: "notify::dependency-names", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dependency-names", ...args: any[]): void
    connect(sigName: "notify::dependents", callback: any): number
    on(sigName: "notify::dependents", callback: any): number
    once(sigName: "notify::dependents", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dependents", ...args: any[]): void
    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::icon-path", callback: any): number
    on(sigName: "notify::icon-path", callback: any): number
    once(sigName: "notify::icon-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-path", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::interfaces", callback: any): number
    on(sigName: "notify::interfaces", callback: any): number
    once(sigName: "notify::interfaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interfaces", ...args: any[]): void
    connect(sigName: "notify::language", callback: any): number
    on(sigName: "notify::language", callback: any): number
    once(sigName: "notify::language", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::path", callback: any): number
    on(sigName: "notify::path", callback: any): number
    once(sigName: "notify::path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::resident", callback: any): number
    on(sigName: "notify::resident", callback: any): number
    once(sigName: "notify::resident", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resident", ...args: any[]): void
    connect(sigName: "notify::resolve-pass", callback: any): number
    on(sigName: "notify::resolve-pass", callback: any): number
    once(sigName: "notify::resolve-pass", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resolve-pass", ...args: any[]): void
    connect(sigName: "notify::user-activatable", callback: any): number
    on(sigName: "notify::user-activatable", callback: any): number
    once(sigName: "notify::user-activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user-activatable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PluginHandle extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.PluginHandle

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.PluginHandle

    constructor(config?: PluginHandle.ConstructorProperties) 
    constructor(pluginDescPath: string) 
    static new(pluginDescPath: string): PluginHandle
    _init(config?: PluginHandle.ConstructorProperties): void
}

export module PluginManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `plugin-activated`
     */
    export interface PluginActivatedSignalCallback {
        (object: object | null, p0: Plugin): void
    }

    /**
     * Signal callback interface for `plugin-deactivated`
     */
    export interface PluginDeactivatedSignalCallback {
        (object: object | null, p0: Plugin): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.PluginManager

        shell?: GObject.Object | null
        status?: Status | null
    }

}

export interface PluginManager {

    // Own properties of Anjuta-3.0.Anjuta.PluginManager

    readonly activatedPlugins: object
    readonly availablePlugins: object
    readonly profiles: object
    shell: GObject.Object
    status: Status

    // Own fields of Anjuta-3.0.Anjuta.PluginManager

    parentInstance: GObject.Object
    priv: PluginManagerPriv

    // Owm methods of Anjuta-3.0.Anjuta.PluginManager

    /**
     * Get the list of plugins loaded when there is a choice between several
     * ones without asking the user.
     * 
     * The list format is returned as a string with the format detailed in
     * anjuta_plugin_manager_set_remembered_plugins().
     */
    getRememberedPlugins(): string
    /**
     * Searches if a currently loaded plugins implements
     * the given interface.
     * @param ifaceName The interface implemented by the object to be found
     */
    isActivePlugin(ifaceName: string): boolean
    /**
     * Set the list of plugins loaded when there is a choice between several
     * ones without asking the user.
     * The list is a string composed of elements separated by ';'. Each element
     * is defined with "key=value", where key is the list of possible plugins and
     * the value is the choosen plugin.
     * 
     * By the example the following element
     * <programlisting>
     *   anjuta-symbol-browser:SymbolBrowserPlugin,anjuta-symbol-db:SymbolDBPlugin,=anjuta-symbol-db:SymbolDBPlugin;
     * </programlisting>
     * means if Anjuta has to choose between SymbolBrowserPlugin and
     * SymbolDBPlugin, it will choose SymbolDBPlugin.
     * @param rememberedPlugins A list of prefered plugins
     */
    setRememberedPlugins(rememberedPlugins: string): void
    /**
     * Unload all plugins. Do not take care of the dependencies because all plugins
     * are unloaded anyway.
     */
    unloadAllPlugins(): void
    /**
     * Unload the corresponding plugin. The plugin has to be loaded.
     * @param pluginObject A #AnjutaPlugin object
     */
    unloadPlugin(pluginObject: GObject.Object): boolean
    /**
     * Unload the plugin corresponding to the given handle. If the plugin is
     * already unloaded, nothing will be done.
     * @param handle A #AnjutaPluginHandle
     */
    unloadPluginByHandle(handle: PluginHandle): boolean

    // Own virtual methods of Anjuta-3.0.Anjuta.PluginManager

    pluginActivated(handle: PluginHandle, plugin: GObject.Object): void
    pluginDeactivated(handle: PluginHandle, plugin: GObject.Object): void

    // Own signals of Anjuta-3.0.Anjuta.PluginManager

    connect(sigName: "plugin-activated", callback: PluginManager.PluginActivatedSignalCallback): number
    on(sigName: "plugin-activated", callback: PluginManager.PluginActivatedSignalCallback): number
    once(sigName: "plugin-activated", callback: PluginManager.PluginActivatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "plugin-activated", p0: Plugin, ...args: any[]): void
    connect(sigName: "plugin-deactivated", callback: PluginManager.PluginDeactivatedSignalCallback): number
    on(sigName: "plugin-deactivated", callback: PluginManager.PluginDeactivatedSignalCallback): number
    once(sigName: "plugin-deactivated", callback: PluginManager.PluginDeactivatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "plugin-deactivated", p0: Plugin, ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.PluginManager

    connect(sigName: "notify::activated-plugins", callback: any): number
    on(sigName: "notify::activated-plugins", callback: any): number
    once(sigName: "notify::activated-plugins", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activated-plugins", ...args: any[]): void
    connect(sigName: "notify::available-plugins", callback: any): number
    on(sigName: "notify::available-plugins", callback: any): number
    once(sigName: "notify::available-plugins", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::available-plugins", ...args: any[]): void
    connect(sigName: "notify::profiles", callback: any): number
    on(sigName: "notify::profiles", callback: any): number
    once(sigName: "notify::profiles", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::profiles", ...args: any[]): void
    connect(sigName: "notify::shell", callback: any): number
    on(sigName: "notify::shell", callback: any): number
    once(sigName: "notify::shell", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::shell", ...args: any[]): void
    connect(sigName: "notify::status", callback: any): number
    on(sigName: "notify::status", callback: any): number
    once(sigName: "notify::status", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PluginManager extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.PluginManager

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.PluginManager

    constructor(config?: PluginManager.ConstructorProperties) 
    _init(config?: PluginManager.ConstructorProperties): void
}

export module Preferences {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Preferences {

    // Own fields of Anjuta-3.0.Anjuta.Preferences

    parent: GObject.Object

    // Owm methods of Anjuta-3.0.Anjuta.Preferences

    addFromBuilder(builder: Gtk.Builder, settings: Gio.Settings, gladeWidgetName: string, stitle: string, iconFilename: string): void
    isDialogCreated(): boolean
    /**
     * This will register all the properties names of the format described above
     * without considering the UI. Useful if you have the widgets shown elsewhere
     * but you want them to be part of preferences system.
     * @param builder GtkBuilder object containing the properties widgets.
     * @param settings 
     * @param parent Parent widget in the builder object
     */
    registerAllPropertiesFromBuilderXml(builder: Gtk.Builder, settings: Gio.Settings, parent: Gtk.Widget): void
    /**
     * This registers only one widget. The widget could be shown elsewhere.
     * The widget needs to fulfill the properties described in
     * #anjuta_preferences_add_page documentation.
     * @param settings the #GSettings object associated with that property
     * @param object Widget to register
     * @param key Property key
     */
    registerProperty(settings: Gio.Settings, object: Gtk.Widget, key: string): boolean
    removePage(pageName: string): void

    // Class property signals of Anjuta-3.0.Anjuta.Preferences

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Preferences extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Preferences

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.Preferences

    constructor(config?: Preferences.ConstructorProperties) 
    /**
     * Creates a new #AnjutaPreferences object
     * @constructor 
     * @param pluginManager #AnjutaPluginManager to be used
     * @param commonSchemaId Common schema id used for key starting with .
     */
    constructor(pluginManager: PluginManager, commonSchemaId: string) 
    /**
     * Creates a new #AnjutaPreferences object
     * @constructor 
     * @param pluginManager #AnjutaPluginManager to be used
     * @param commonSchemaId Common schema id used for key starting with .
     */
    static new(pluginManager: PluginManager, commonSchemaId: string): Preferences
    _init(config?: Preferences.ConstructorProperties): void
}

export module PreferencesDialog {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Dialog.ConstructorProperties {
    }

}

export interface PreferencesDialog extends Atk.ImplementorIface, Gtk.Buildable {

    // Conflicting properties

    readonly window: Gtk.Window & Gdk.Window & Gdk.Window

    // Own fields of Anjuta-3.0.Anjuta.PreferencesDialog

    parent: Gtk.Dialog & Gtk.Container
    priv: any

    // Owm methods of Anjuta-3.0.Anjuta.PreferencesDialog

    /**
     * Adds a widget page in preferences dialog. Name and icon appears
     * on the left icon list where differnt pages are selected.
     * @param name Name of the preferences page.
     * @param title Title of the page
     * @param icon Icon file name.
     * @param page page widget.
     */
    addPage(name: string, title: string, icon: GdkPixbuf.Pixbuf, page: Gtk.Widget): void
    /**
     * Removes a preferences page.
     * @param title Name of the preferences page.
     */
    removePage(title: string): void

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

    // Class property signals of Anjuta-3.0.Anjuta.PreferencesDialog

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

export class PreferencesDialog extends Gtk.Dialog {

    // Own properties of Anjuta-3.0.Anjuta.PreferencesDialog

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.PreferencesDialog

    constructor(config?: PreferencesDialog.ConstructorProperties) 
    /**
     * Creates a new #AnjutaPreferencesDialog object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #AnjutaPreferencesDialog object.
     * @constructor 
     */
    static new(): PreferencesDialog

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
    _init(config?: PreferencesDialog.ConstructorProperties): void
}

export module Profile {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `descoped`
     */
    export interface DescopedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `plugin-added`
     */
    export interface PluginAddedSignalCallback {
        (plugin: object | null): void
    }

    /**
     * Signal callback interface for `plugin-removed`
     */
    export interface PluginRemovedSignalCallback {
        (plugin: object | null): void
    }

    /**
     * Signal callback interface for `scoped`
     */
    export interface ScopedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.Profile

        pluginManager?: PluginManager | null
        profileName?: string | null
        syncFile?: Gio.File | null
    }

}

export interface Profile {

    // Own properties of Anjuta-3.0.Anjuta.Profile

    pluginManager: PluginManager
    profileName: string
    syncFile: Gio.File

    // Own fields of Anjuta-3.0.Anjuta.Profile

    parentInstance: GObject.Object
    priv: ProfilePriv

    // Owm methods of Anjuta-3.0.Anjuta.Profile

    /**
     * Add one plugin into the profile plugin list.
     * @param plugin a #AnjutaPluginHandle.
     */
    addPlugin(plugin: PluginHandle): void
    /**
     * Add all plugins inscribed in the xml file into the profile plugin list.
     * @param profileXmlFile xml file containing plugin list.
     * @param excludeFromSync %TRUE if these plugins shouldn't be saved in user session.
     */
    addPluginsFromXml(profileXmlFile: Gio.File, excludeFromSync: boolean): boolean
    /**
     * Get the profile name.
     */
    getName(): string
    /**
     * Check if a plugin is included in the profile plugin list.
     * @param plugin a #AnjutaPluginHandle
     */
    hasPlugin(plugin: PluginHandle): boolean
    /**
     * Load the profile
     */
    load(): boolean
    /**
     * Remove one plugin from the profile plugin list.
     * @param plugin a #AnjutaPluginHandle.
     */
    removePlugin(plugin: PluginHandle): void
    /**
     * Define the file used to save plugins list.
     * @param syncFile file used to save profile.
     */
    setSyncFile(syncFile: Gio.File): void
    /**
     * Save the current plugins list in the xml file set with anjuta_profile_set_sync_file().
     */
    sync(): boolean
    /**
     * Unload the profile
     */
    unload(): boolean

    // Own virtual methods of Anjuta-3.0.Anjuta.Profile

    changed(): void
    descoped(): void
    pluginAdded(plugin: PluginHandle): void
    pluginRemoved(plugin: PluginHandle): void
    scoped(): void

    // Own signals of Anjuta-3.0.Anjuta.Profile

    connect(sigName: "changed", callback: Profile.ChangedSignalCallback): number
    on(sigName: "changed", callback: Profile.ChangedSignalCallback): number
    once(sigName: "changed", callback: Profile.ChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "descoped", callback: Profile.DescopedSignalCallback): number
    on(sigName: "descoped", callback: Profile.DescopedSignalCallback): number
    once(sigName: "descoped", callback: Profile.DescopedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "descoped", ...args: any[]): void
    connect(sigName: "plugin-added", callback: Profile.PluginAddedSignalCallback): number
    on(sigName: "plugin-added", callback: Profile.PluginAddedSignalCallback): number
    once(sigName: "plugin-added", callback: Profile.PluginAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "plugin-added", ...args: any[]): void
    connect(sigName: "plugin-removed", callback: Profile.PluginRemovedSignalCallback): number
    on(sigName: "plugin-removed", callback: Profile.PluginRemovedSignalCallback): number
    once(sigName: "plugin-removed", callback: Profile.PluginRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "plugin-removed", ...args: any[]): void
    connect(sigName: "scoped", callback: Profile.ScopedSignalCallback): number
    on(sigName: "scoped", callback: Profile.ScopedSignalCallback): number
    once(sigName: "scoped", callback: Profile.ScopedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "scoped", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.Profile

    connect(sigName: "notify::plugin-manager", callback: any): number
    on(sigName: "notify::plugin-manager", callback: any): number
    once(sigName: "notify::plugin-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::plugin-manager", ...args: any[]): void
    connect(sigName: "notify::profile-name", callback: any): number
    on(sigName: "notify::profile-name", callback: any): number
    once(sigName: "notify::profile-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::profile-name", ...args: any[]): void
    connect(sigName: "notify::sync-file", callback: any): number
    on(sigName: "notify::sync-file", callback: any): number
    once(sigName: "notify::sync-file", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sync-file", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Stores a plugin list.
 * @class 
 */
export class Profile extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Profile

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.Profile

    constructor(config?: Profile.ConstructorProperties) 
    /**
     * Create a new profile.
     * @constructor 
     * @param name the new profile name.
     * @param pluginManager the #AnjutaPluginManager used by this profile.
     */
    constructor(name: string, pluginManager: PluginManager) 
    /**
     * Create a new profile.
     * @constructor 
     * @param name the new profile name.
     * @param pluginManager the #AnjutaPluginManager used by this profile.
     */
    static new(name: string, pluginManager: PluginManager): Profile
    _init(config?: Profile.ConstructorProperties): void
}

export module ProfileManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `profile-popped`
     */
    export interface ProfilePoppedSignalCallback {
        (profile: Profile): void
    }

    /**
     * Signal callback interface for `profile-pushed`
     */
    export interface ProfilePushedSignalCallback {
        (profile: Profile): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.ProfileManager

        pluginManager?: PluginManager | null
    }

}

export interface ProfileManager {

    // Own properties of Anjuta-3.0.Anjuta.ProfileManager

    pluginManager: PluginManager

    // Own fields of Anjuta-3.0.Anjuta.ProfileManager

    parentInstance: GObject.Object
    priv: ProfileManagerPriv

    // Owm methods of Anjuta-3.0.Anjuta.ProfileManager

    /**
     * Close the #AnjutaProfileManager causing "descoped" to be emitted and
     * all queued and previous profiles to be released. This function is to be used
     * when destroying an Anjuta instance.
     */
    close(): void
    /**
     * Freeze the plugin manager. In this state, plugins can be added and removed
     * from the stack without triggering any change in the current profile. It is
     * possible to freeze the manager several times but it will be back in its normal
     * state only after as much call of anjuta_profile_manager_thaw().
     */
    freeze(): void
    /**
     * Return the current profile.
     */
    getCurrent(): Profile | null
    /**
     * Remove a profile from the profile manager stack. If the manager is not
     * frozen, only the current profile can be removed. It will be unloaded and
     * the previous profile will be loaded.
     * If the manager is frozen, the current profile or the last pushed profile
     * can be removed.
     * @param profile the #AnjutaProfile to remove.
     */
    pop(profile: Profile): boolean
    /**
     * Add a new profile at the top of the profile manager stack. If the profile
     * manager is not frozen, this new profile will be loaded immediatly and
     * become the current profile.
     * @param profile the new #AnjutaProfile.
     */
    push(profile: Profile): boolean
    /**
     * Put back the plugin manager in its normal mode after calling
     * anjuta_profile_manager_freeze(). It will load a new profile if one has been
     * added while the manager was frozen.
     */
    thaw(): boolean

    // Own virtual methods of Anjuta-3.0.Anjuta.ProfileManager

    profilePopped(profile: Profile): void
    profilePushed(profile: Profile): void

    // Own signals of Anjuta-3.0.Anjuta.ProfileManager

    connect(sigName: "profile-popped", callback: ProfileManager.ProfilePoppedSignalCallback): number
    on(sigName: "profile-popped", callback: ProfileManager.ProfilePoppedSignalCallback): number
    once(sigName: "profile-popped", callback: ProfileManager.ProfilePoppedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "profile-popped", ...args: any[]): void
    connect(sigName: "profile-pushed", callback: ProfileManager.ProfilePushedSignalCallback): number
    on(sigName: "profile-pushed", callback: ProfileManager.ProfilePushedSignalCallback): number
    once(sigName: "profile-pushed", callback: ProfileManager.ProfilePushedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "profile-pushed", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.ProfileManager

    connect(sigName: "notify::plugin-manager", callback: any): number
    on(sigName: "notify::plugin-manager", callback: any): number
    once(sigName: "notify::plugin-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::plugin-manager", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Stores stack of #AnjutaProfile.
 * @class 
 */
export class ProfileManager extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.ProfileManager

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.ProfileManager

    constructor(config?: ProfileManager.ConstructorProperties) 
    /**
     * Create a new profile manager.
     * @constructor 
     * @param pluginManager the #AnjutaPluginManager used by all profiles.
     */
    constructor(pluginManager: PluginManager) 
    /**
     * Create a new profile manager.
     * @constructor 
     * @param pluginManager the #AnjutaPluginManager used by all profiles.
     */
    static new(pluginManager: PluginManager): ProfileManager
    _init(config?: ProfileManager.ConstructorProperties): void
}

export module ProjectNode {

    // Signal callback interfaces

    /**
     * Signal callback interface for `loaded`
     */
    export interface LoadedSignalCallback {
        (object: object | null, p0: GLib.Error): void
    }

    /**
     * Signal callback interface for `updated`
     */
    export interface UpdatedSignalCallback {
        (object: object | null, p0: GLib.Error): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.ProjectNode

        file?: Gio.File | null
        name?: string | null
        state?: ProjectNodeState | null
        type?: ProjectNodeType | null
    }

}

export interface ProjectNode {

    // Own properties of Anjuta-3.0.Anjuta.ProjectNode

    file: Gio.File
    name: string
    state: ProjectNodeState
    type: ProjectNodeType

    // Own fields of Anjuta-3.0.Anjuta.ProjectNode

    parentInstance: GObject.InitiallyUnowned

    // Owm methods of Anjuta-3.0.Anjuta.ProjectNode

    append(node: ProjectNode): ProjectNode
    check(): void
    childrenForeach(func: ProjectNodeForeachFunc): void
    childrenTraverse(func: ProjectNodeTraverseFunc): ProjectNode
    clearState(state: ProjectNodeState): boolean
    dump(): void
    firstChild(): ProjectNode
    foreach(order: GLib.TraverseType, func: ProjectNodeForeachFunc): void
    getFile(): Gio.File
    getFullType(): ProjectNodeType
    getGroupFromFile(directory: Gio.File): ProjectNode
    getMapProperty(id: string, name: string): ProjectProperty
    getName(): string
    getNodeType(): ProjectNodeType
    getProperties(): ProjectProperty[]
    getPropertiesInfo(): ProjectPropertyInfo[]
    getProperty(id: string): ProjectProperty

    // Overloads of getProperty

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    getPropertyInfo(id: string): ProjectPropertyInfo
    getSourceFromFile(file: Gio.File): ProjectNode
    getState(): ProjectNodeState
    insertAfter(sibling: ProjectNode | null, node: ProjectNode): ProjectNode
    insertBefore(sibling: ProjectNode | null, node: ProjectNode): ProjectNode
    insertProperty(info: ProjectPropertyInfo, property: ProjectProperty): ProjectProperty
    insertPropertyInfo(info: ProjectPropertyInfo): ProjectPropertyInfo
    lastChild(): ProjectNode
    nextSibling(): ProjectNode
    nthChild(n: number): ProjectNode
    parent(): ProjectNode
    parentType(type: ProjectNodeType): ProjectNode
    prepend(node: ProjectNode): ProjectNode
    prevSibling(): ProjectNode
    remove(): ProjectNode
    removeProperty(property: ProjectProperty): ProjectProperty
    root(): ProjectNode
    setState(state: ProjectNodeState): boolean
    traverse(order: GLib.TraverseType, func: ProjectNodeTraverseFunc): ProjectNode

    // Own signals of Anjuta-3.0.Anjuta.ProjectNode

    connect(sigName: "loaded", callback: ProjectNode.LoadedSignalCallback): number
    on(sigName: "loaded", callback: ProjectNode.LoadedSignalCallback): number
    once(sigName: "loaded", callback: ProjectNode.LoadedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "loaded", p0: GLib.Error, ...args: any[]): void
    connect(sigName: "updated", callback: ProjectNode.UpdatedSignalCallback): number
    on(sigName: "updated", callback: ProjectNode.UpdatedSignalCallback): number
    once(sigName: "updated", callback: ProjectNode.UpdatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "updated", p0: GLib.Error, ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.ProjectNode

    connect(sigName: "notify::file", callback: any): number
    on(sigName: "notify::file", callback: any): number
    once(sigName: "notify::file", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file", ...args: any[]): void
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
    connect(sigName: "notify::type", callback: any): number
    on(sigName: "notify::type", callback: any): number
    once(sigName: "notify::type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #AnjutaProjectNode struct contains private data only, and should
 * accessed using the functions below.
 * @class 
 */
export class ProjectNode extends GObject.InitiallyUnowned {

    // Own properties of Anjuta-3.0.Anjuta.ProjectNode

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.ProjectNode

    constructor(config?: ProjectNode.ConstructorProperties) 
    _init(config?: ProjectNode.ConstructorProperties): void
}

export module SavePrompt {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.MessageDialog.ConstructorProperties {
    }

}

export interface SavePrompt extends Atk.ImplementorIface, Gtk.Buildable {

    // Conflicting properties

    readonly window: Gtk.Window & Gdk.Window & Gdk.Window
    parentInstance: any

    // Own fields of Anjuta-3.0.Anjuta.SavePrompt

    parent: Gtk.MessageDialog & Gtk.Container
    priv: any

    // Owm methods of Anjuta-3.0.Anjuta.SavePrompt

    getItemsCount(): number

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

    // Class property signals of Anjuta-3.0.Anjuta.SavePrompt

    connect(sigName: "notify::buttons", callback: any): number
    on(sigName: "notify::buttons", callback: any): number
    once(sigName: "notify::buttons", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buttons", ...args: any[]): void
    connect(sigName: "notify::image", callback: any): number
    on(sigName: "notify::image", callback: any): number
    once(sigName: "notify::image", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::message-area", callback: any): number
    on(sigName: "notify::message-area", callback: any): number
    once(sigName: "notify::message-area", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::message-area", ...args: any[]): void
    connect(sigName: "notify::message-type", callback: any): number
    on(sigName: "notify::message-type", callback: any): number
    once(sigName: "notify::message-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::message-type", ...args: any[]): void
    connect(sigName: "notify::secondary-text", callback: any): number
    on(sigName: "notify::secondary-text", callback: any): number
    once(sigName: "notify::secondary-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-text", ...args: any[]): void
    connect(sigName: "notify::secondary-use-markup", callback: any): number
    on(sigName: "notify::secondary-use-markup", callback: any): number
    once(sigName: "notify::secondary-use-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secondary-use-markup", ...args: any[]): void
    connect(sigName: "notify::text", callback: any): number
    on(sigName: "notify::text", callback: any): number
    once(sigName: "notify::text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::use-markup", callback: any): number
    on(sigName: "notify::use-markup", callback: any): number
    once(sigName: "notify::use-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-markup", ...args: any[]): void
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

export class SavePrompt extends Gtk.MessageDialog {

    // Own properties of Anjuta-3.0.Anjuta.SavePrompt

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.SavePrompt

    constructor(config?: SavePrompt.ConstructorProperties) 
    constructor(parent: Gtk.Window) 
    static new(parent: Gtk.Window): SavePrompt

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
    _init(config?: SavePrompt.ConstructorProperties): void
}

export module Serializer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.Serializer

        filepath?: string | null
        mode?: SerializerMode | null
    }

}

export interface Serializer {

    // Own properties of Anjuta-3.0.Anjuta.Serializer

    readonly filepath: string
    readonly mode: SerializerMode

    // Own fields of Anjuta-3.0.Anjuta.Serializer

    parent: GObject.Object
    priv: SerializerPrivate

    // Owm methods of Anjuta-3.0.Anjuta.Serializer

    readFloat(name: string, value: number): boolean
    readInt(name: string, value: number): boolean
    readString(name: string, value: string, replace: boolean): boolean
    writeFloat(name: string, value: number): boolean
    writeInt(name: string, value: number): boolean
    writeString(name: string, value: string): boolean

    // Class property signals of Anjuta-3.0.Anjuta.Serializer

    connect(sigName: "notify::filepath", callback: any): number
    on(sigName: "notify::filepath", callback: any): number
    once(sigName: "notify::filepath", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::filepath", ...args: any[]): void
    connect(sigName: "notify::mode", callback: any): number
    on(sigName: "notify::mode", callback: any): number
    once(sigName: "notify::mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Serializer extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Serializer

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.Serializer

    constructor(config?: Serializer.ConstructorProperties) 
    constructor(filepath: string, mode: SerializerMode) 
    static new(filepath: string, mode: SerializerMode): Serializer
    _init(config?: Serializer.ConstructorProperties): void
}

export module Session {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Session {

    // Own fields of Anjuta-3.0.Anjuta.Session

    parent: GObject.Object
    priv: SessionPriv

    // Owm methods of Anjuta-3.0.Anjuta.Session

    /**
     * Clears the session.
     */
    clear(): void
    /**
     * Clears the given section in session object.
     * @param section Section to clear.
     */
    clearSection(section: string): void
    /**
     * Return a GFile corresponding to the URI and and optional fragment,
     * normally read from a session key.
     * The path is expected to be relative to the session directory but it works
     * with an absolute URI, in this case it returns the same file than
     * g_file_new_for_uri.
     * It is useful to keep only relative file paths in a session file to be able
     * to copy the whole project without breaking references.
     * @param uri a relative URI from a key
     * @param fragment fragment part of the URI if existing, can be %NULL
     */
    getFileFromRelativeUri(uri: string, fragment: string | null): Gio.File
    /**
     * Get a float `value` of `key` in given `section`.
     * @param section Section.
     * @param key Key name.
     */
    getFloat(section: string, key: string): number
    /**
     * Get an integer `value` of `key` in given `section`.
     * @param section Section.
     * @param key Key name.
     */
    getInt(section: string, key: string): number
    /**
     * Return an URI relative to the session directory file with an optional
     * fragment.
     * It is useful to keep only relative file paths in a session file to be able
     * to copy the whole project without breaking references.
     * @param file a GFile
     * @param fragment an optional fragment
     */
    getRelativeUriFromFile(file: Gio.File, fragment: string): string
    /**
     * Returns the directory corresponding to this session object.
     */
    getSessionDirectory(): string
    /**
     * Gets the session filename corresponding to this session object.
     */
    getSessionFilename(): string
    /**
     * Get a string `value` of `key` in given `section`.
     * @param section Section.
     * @param key Key name.
     */
    getString(section: string, key: string): string
    /**
     * Set a float `value` to `key` in given `section`.
     * @param section Section.
     * @param key Key name.
     * @param value Key value
     */
    setFloat(section: string, key: string, value: number): void
    /**
     * Set an integer `value` to `key` in given `section`.
     * @param section Section.
     * @param key Key name.
     * @param value Key value
     */
    setInt(section: string, key: string, value: number): void
    /**
     * Set a string `value` to `key` in given `section`.
     * @param section Section.
     * @param key Key name.
     * @param value Key value
     */
    setString(section: string, key: string, value: string): void
    /**
     * Synchronizes session object with session file
     */
    sync(): void

    // Class property signals of Anjuta-3.0.Anjuta.Session

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Session extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.Session

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.Session

    constructor(config?: Session.ConstructorProperties) 
    /**
     * Created a new session object. `session_directory` is the directory
     * where session information will be stored or loaded in case of existing
     * session.
     * @constructor 
     * @param sessionDirectory Directory where session is loaded from/saved to.
     */
    constructor(sessionDirectory: string) 
    /**
     * Created a new session object. `session_directory` is the directory
     * where session information will be stored or loaded in case of existing
     * session.
     * @constructor 
     * @param sessionDirectory Directory where session is loaded from/saved to.
     */
    static new(sessionDirectory: string): Session
    _init(config?: Session.ConstructorProperties): void
}

export module Status {

    // Signal callback interfaces

    /**
     * Signal callback interface for `busy`
     */
    export interface BusySignalCallback {
        (object: boolean): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {
    }

}

export interface Status extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own fields of Anjuta-3.0.Anjuta.Status

    parent: Gtk.Box & Gtk.Container
    priv: StatusPriv

    // Owm methods of Anjuta-3.0.Anjuta.Status

    addWidget(widget: Gtk.Widget): void
    busyPop(): void
    busyPush(): void
    clearStack(): void
    disableSplash(disableSplash: boolean): void
    pop(): void
    progressAddTicks(ticks: number): void
    progressIncrementTicks(ticks: number, text: string): void
    progressPulse(text: string): void
    progressReset(): void
    progressTick(icon: GdkPixbuf.Pixbuf, text: string): void
    setSplash(splashFile: string, splashProgressPosition: number): void
    setTitle(title: string): void
    setTitleWindow(window: Gtk.Widget): void

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

    // Own virtual methods of Anjuta-3.0.Anjuta.Status

    busy(state: boolean): void

    // Own signals of Anjuta-3.0.Anjuta.Status

    connect(sigName: "busy", callback: Status.BusySignalCallback): number
    on(sigName: "busy", callback: Status.BusySignalCallback): number
    once(sigName: "busy", callback: Status.BusySignalCallback): number
    off(handlerId: number): number
    emit(sigName: "busy", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.Status

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

export class Status extends Gtk.Box {

    // Own properties of Anjuta-3.0.Anjuta.Status

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.Status

    constructor(config?: Status.ConstructorProperties) 
    constructor() 
    static new(): Status

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box???s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: Status.ConstructorProperties): void
}

export module SyncCommand {

    // Constructor properties interface

    export interface ConstructorProperties extends Command.ConstructorProperties {
    }

}

export interface SyncCommand {

    // Own fields of Anjuta-3.0.Anjuta.SyncCommand

    parentInstance: any

    // Class property signals of Anjuta-3.0.Anjuta.SyncCommand

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SyncCommand extends Command {

    // Own properties of Anjuta-3.0.Anjuta.SyncCommand

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.SyncCommand

    constructor(config?: SyncCommand.ConstructorProperties) 
    _init(config?: SyncCommand.ConstructorProperties): void
}

export module Tabber {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Container.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.Tabber

        notebook?: GObject.Object | null
    }

}

export interface Tabber extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Anjuta-3.0.Anjuta.Tabber

    readonly notebook: GObject.Object

    // Own fields of Anjuta-3.0.Anjuta.Tabber

    parentInstance: any
    priv: TabberPriv

    // Owm methods of Anjuta-3.0.Anjuta.Tabber

    /**
     * Append a tab to the AnjutaTabber widget
     * @param tabLabel widget used as tab label
     */
    addTab(tabLabel: Gtk.Widget): void
    /**
     * Prepend a tab to the AnjutaTabber widget
     * @param tabLabel widget used as tab label
     */
    prependTab(tabLabel: Gtk.Widget): void

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

    // Class property signals of Anjuta-3.0.Anjuta.Tabber

    connect(sigName: "notify::notebook", callback: any): number
    on(sigName: "notify::notebook", callback: any): number
    once(sigName: "notify::notebook", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::notebook", ...args: any[]): void
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

export class Tabber extends Gtk.Container {

    // Own properties of Anjuta-3.0.Anjuta.Tabber

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.Tabber

    constructor(config?: Tabber.ConstructorProperties) 
    /**
     * Creates a new AnjutaTabber widget
     * @constructor 
     * @param notebook the GtkNotebook the tabber should be associated with
     */
    constructor(notebook: Gtk.Notebook) 
    /**
     * Creates a new AnjutaTabber widget
     * @constructor 
     * @param notebook the GtkNotebook the tabber should be associated with
     */
    static new(notebook: Gtk.Notebook): Tabber
    _init(config?: Tabber.ConstructorProperties): void
}

export module TokenFile {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface TokenFile {

    // Owm methods of Anjuta-3.0.Anjuta.TokenFile

    free(): void
    getTokenLocation(location: TokenFileLocation, token: Token): boolean
    /**
     * Returns the position of the token in the file. This position is a number
     * which doesn't correspond to a line number or a character but respect the
     * order of token in the file.
     * @param token token
     */
    getTokenPosition(token: Token): number
    isDirty(): boolean
    move(newFile: Gio.File): void
    save(): boolean
    unload(): boolean
    /**
     * Update the file with all changed token starting from `token`. The function can
     * return an error if the token is not in the file.
     * @param token Token to update.
     */
    update(token: Token): boolean

    // Class property signals of Anjuta-3.0.Anjuta.TokenFile

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class TokenFile extends GObject.Object {

    // Own properties of Anjuta-3.0.Anjuta.TokenFile

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.TokenFile

    constructor(config?: TokenFile.ConstructorProperties) 
    constructor(file: Gio.File) 
    static new(file: Gio.File): TokenFile
    _init(config?: TokenFile.ConstructorProperties): void
}

export module TreeComboBox {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `popdown`
     */
    export interface PopdownSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `popup`
     */
    export interface PopupSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Activatable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.CellLayout.ConstructorProperties, Gtk.ToggleButton.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.TreeComboBox

        model?: Gtk.TreeModel | null
    }

}

export interface TreeComboBox extends Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable, Gtk.CellLayout {

    // Own properties of Anjuta-3.0.Anjuta.TreeComboBox

    model: Gtk.TreeModel

    // Own fields of Anjuta-3.0.Anjuta.TreeComboBox

    parent: Gtk.ToggleButton & Gtk.Container

    // Owm methods of Anjuta-3.0.Anjuta.TreeComboBox

    getActiveIter(iter: Gtk.TreeIter): boolean
    setActive(index: number): void

    // Overloads of setActive

    /**
     * Sets the status of the toggle button. Set to %TRUE if you want the
     * GtkToggleButton to be ???pressed in???, and %FALSE to raise it.
     * This action causes the #GtkToggleButton::toggled signal and the
     * #GtkButton::clicked signal to be emitted.
     * @param isActive %TRUE or %FALSE.
     */
    setActive(isActive: boolean): void
    setActiveIter(iter: Gtk.TreeIter): void
    setInvalidText(str: string): void
    setModel(model: Gtk.TreeModel): void
    setValidFunction(func: Gtk.TreeModelFilterVisibleFunc): void

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

    // Own virtual methods of Anjuta-3.0.Anjuta.TreeComboBox

    changed(): void

    // Own signals of Anjuta-3.0.Anjuta.TreeComboBox

    connect(sigName: "changed", callback: TreeComboBox.ChangedSignalCallback): number
    on(sigName: "changed", callback: TreeComboBox.ChangedSignalCallback): number
    once(sigName: "changed", callback: TreeComboBox.ChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "popdown", callback: TreeComboBox.PopdownSignalCallback): number
    on(sigName: "popdown", callback: TreeComboBox.PopdownSignalCallback): number
    once(sigName: "popdown", callback: TreeComboBox.PopdownSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "popdown", ...args: any[]): void
    connect(sigName: "popup", callback: TreeComboBox.PopupSignalCallback): number
    on(sigName: "popup", callback: TreeComboBox.PopupSignalCallback): number
    once(sigName: "popup", callback: TreeComboBox.PopupSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "popup", ...args: any[]): void

    // Class property signals of Anjuta-3.0.Anjuta.TreeComboBox

    connect(sigName: "notify::model", callback: any): number
    on(sigName: "notify::model", callback: any): number
    once(sigName: "notify::model", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::active", callback: any): number
    on(sigName: "notify::active", callback: any): number
    once(sigName: "notify::active", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::draw-indicator", callback: any): number
    on(sigName: "notify::draw-indicator", callback: any): number
    once(sigName: "notify::draw-indicator", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::draw-indicator", ...args: any[]): void
    connect(sigName: "notify::inconsistent", callback: any): number
    on(sigName: "notify::inconsistent", callback: any): number
    once(sigName: "notify::inconsistent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::inconsistent", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class TreeComboBox extends Gtk.ToggleButton {

    // Own properties of Anjuta-3.0.Anjuta.TreeComboBox

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.TreeComboBox

    constructor(config?: TreeComboBox.ConstructorProperties) 
    constructor() 
    static new(): TreeComboBox
    _init(config?: TreeComboBox.ConstructorProperties): void
}

export module UI {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Buildable.ConstructorProperties, Gtk.UIManager.ConstructorProperties {
    }

}

export interface UI extends Gtk.Buildable {

    // Own fields of Anjuta-3.0.Anjuta.UI

    parent: Gtk.UIManager & GObject.Object
    priv: UIPrivate

    // Owm methods of Anjuta-3.0.Anjuta.UI

    /**
     * Activates the action `action_name` in the #GtkActionGroup `action_group`.
     * "ActionGroupName/ActionName". Note that it will only work if the group has
     * been added using methods in #AnjutaUI.
     * @param actionGroup Action group.
     * @param actionName Action name.
     */
    activateActionByGroup(actionGroup: Gtk.ActionGroup, actionName: string): void
    /**
     * Activates the action represented by `action_path`. The path is in the form
     * "ActionGroupName/ActionName". Note that it will only work if the group has
     * been added using methods in #AnjutaUI.
     * @param actionPath Path of the action in the form "GroupName/ActionName"
     */
    activateActionByPath(actionPath: string): void
    /**
     * This is similar to anjuta_ui_add_action_group_entries(), except that
     * it adds #GtkActionGroup object `action_group` directly. All actions in this
     * group are automatically registered in #AnjutaUI and can be retrieved
     * normally with anjuta_ui_get_action().
     * @param actionGroupName Untranslated name of the action group.
     * @param actionGroupLabel Translated label of the action group.
     * @param actionGroup #GtkActionGroup object to add.
     * @param canCustomize 
     */
    addActionGroup(actionGroupName: string, actionGroupLabel: string, actionGroup: Gtk.ActionGroup, canCustomize: boolean): void
    /**
     * #GtkAction objects are created from the #GtkActionEntry structures and
     * added to the UI Manager. "activate" signal of #GtkAction is connected for
     * all the action objects using the callback in the entry structure and the
     * `user_data` passed here.
     * 
     * This group of actions are registered with the name `action_group_name`
     * in #AnjutaUI. A #GtkAction object from this action group can be later
     * retrieved by anjuta_ui_get_action() using `action_group_name` and action name.
     * `action_group_label` is used as the display name for the action group in
     * UI manager dialog where action shortcuts are configured.
     * @param actionGroupName Untranslated name of the action group.
     * @param actionGroupLabel Translated label of the action group.
     * @param entries An array of action entries.
     * @param translationDomain The translation domain used to translated the entries. It is usually the GETTEXT_PACKAGE macro in a project.
     * @param canCustomize If true the actions are customizable by user.
     * @param userData User data to pass to action objects. This is the data that will come as user_data in "activate" signal of the actions.
     */
    addActionGroupEntries(actionGroupName: string, actionGroupLabel: string, entries: Gtk.ActionEntry[], translationDomain: string, canCustomize: boolean, userData: object | null): Gtk.ActionGroup
    /**
     * This is similar to anjuta_ui_add_action_group_entries(), except that
     * it adds #GtkToggleAction objects after creating them from the `entries`.
     * @param actionGroupName Untranslated name of the action group.
     * @param actionGroupLabel Translated label of the action group.
     * @param entries An array of action entries.
     * @param translationDomain The translation domain used to translated the entries. It is usually the GETTEXT_PACKAGE macro in a project.
     * @param canCustomize 
     * @param userData User data to pass to action objects. This is the data that will come as user_data in "activate" signal of the actions.
     */
    addToggleActionGroupEntries(actionGroupName: string, actionGroupLabel: string, entries: Gtk.ToggleActionEntry[], translationDomain: string, canCustomize: boolean, userData: object | null): Gtk.ActionGroup
    /**
     * Dumps the current UI XML tree in STDOUT. Useful for debugging.
     */
    dumpTree(): void
    /**
     * Creates an accel editor widget and returns it. It should be added to
     * container and displayed to users.
     */
    getAccelEditor(): Gtk.Widget
    /**
     * Returns the #GtkAccelGroup object associated with this UI manager.
     */
    getAccelGroup(): Gtk.AccelGroup
    /**
     * Returns the action object with the name `action_name` in `action_group_name`.
     * Note that it will be only sucessully returned if the group has been added
     * using methods in #AnjutaUI.
     * @param actionGroupName Group name.
     * @param actionName Action name.
     */
    getAction(actionGroupName: string, actionName: string): Gtk.Action

    // Overloads of getAction

    /**
     * Looks up an action by following a path. See gtk_ui_manager_get_widget()
     * for more information about paths.
     * @virtual 
     * @param path a path
     */
    getAction(path: string): Gtk.Action
    /**
     * This returns the IconFactory object. All icons should be registered using
     * this icon factory. Read the documentation for #GtkIconFactory on how to
     * use it.
     */
    getIconFactory(): Gtk.IconFactory
    /**
     * Merges XML UI definition in `ui_filename`. UI elements defined in the xml
     * are merged with existing UI elements in UI manager. The format of the
     * file content is the standard XML UI definition tree. For more detail,
     * read the documentation for #GtkUIManager.
     * @param uiFilename UI file to merge into UI manager.
     */
    merge(uiFilename: string): number
    /**
     * Removes a previous added action group. All actions in this group are
     * also unregistered from UI manager.
     * @param actionGroup #GtkActionGroup object to remove.
     */
    removeActionGroup(actionGroup: Gtk.ActionGroup): void
    unloadAccels(): void
    /**
     * Unmerges UI with the ID value `id` (returned by anjuta_ui_merge() when
     * it was merged. For more detail, read the documentation for #GtkUIManager.
     * @param id Merge ID returned by anjuta_ui_merge().
     */
    unmerge(id: number): void

    // Class property signals of Anjuta-3.0.Anjuta.UI

    connect(sigName: "notify::add-tearoffs", callback: any): number
    on(sigName: "notify::add-tearoffs", callback: any): number
    once(sigName: "notify::add-tearoffs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::add-tearoffs", ...args: any[]): void
    connect(sigName: "notify::ui", callback: any): number
    on(sigName: "notify::ui", callback: any): number
    once(sigName: "notify::ui", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ui", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class UI extends Gtk.UIManager {

    // Own properties of Anjuta-3.0.Anjuta.UI

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.UI

    constructor(config?: UI.ConstructorProperties) 
    /**
     * Creates a new instance of #AnjutaUI.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new instance of #AnjutaUI.
     * @constructor 
     */
    static new(): UI

    // Overloads of new

    /**
     * Creates a new ui manager object.
     * @constructor 
     */
    static new(): Gtk.UIManager
    _init(config?: UI.ConstructorProperties): void
    static loadAccels(filename: string): void
    static saveAccels(filename: string): void
}

export module VcsStatusTreeView {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.TreeView.ConstructorProperties {

        // Own constructor properties of Anjuta-3.0.Anjuta.VcsStatusTreeView

        conflictedSelectable?: boolean | null
        showStatus?: boolean | null
        statusCodes?: VcsStatus | null
    }

}

export interface VcsStatusTreeView extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of Anjuta-3.0.Anjuta.VcsStatusTreeView

    readonly conflictedSelectable: boolean
    showStatus: boolean
    readonly statusCodes: VcsStatus

    // Own fields of Anjuta-3.0.Anjuta.VcsStatusTreeView

    parentInstance: any
    priv: VcsStatusTreeViewPriv

    // Owm methods of Anjuta-3.0.Anjuta.VcsStatusTreeView

    add(path: string, status: VcsStatus, selected: boolean): void

    // Overloads of add

    /**
     * Adds `widget` to `container`. Typically used for simple containers
     * such as #GtkWindow, #GtkFrame, or #GtkButton; for more complicated
     * layout containers such as #GtkBox or #GtkGrid, this function will
     * pick default packing parameters that may not be correct.  So
     * consider functions such as gtk_box_pack_start() and
     * gtk_grid_attach() as an alternative to gtk_container_add() in
     * those cases. A widget may be added to only one container at a time;
     * you can???t place the same widget inside two different containers.
     * 
     * Note that some containers, such as #GtkScrolledWindow or #GtkListBox,
     * may add intermediate children between the added widget and the
     * container.
     * @virtual 
     * @param widget a widget to be placed inside `container`
     */
    add(widget: Gtk.Widget): void
    destroy(): void

    // Overloads of destroy

    /**
     * Destroys a widget.
     * 
     * When a widget is destroyed all references it holds on other objects
     * will be released:
     * 
     *  - if the widget is inside a container, it will be removed from its
     *  parent
     *  - if the widget is a container, all its children will be destroyed,
     *  recursively
     *  - if the widget is a top level, it will be removed from the list
     *  of top level widgets that GTK+ maintains internally
     * 
     * It's expected that all references held on the widget will also
     * be released; you should connect to the #GtkWidget::destroy signal
     * if you hold a reference to `widget` and you wish to remove it when
     * this function is called. It is not necessary to do so if you are
     * implementing a #GtkContainer, as you'll be able to use the
     * #GtkContainerClass.remove() virtual function for that.
     * 
     * It's important to notice that gtk_widget_destroy() will only cause
     * the `widget` to be finalized if no additional references, acquired
     * using g_object_ref(), are held on it. In case additional references
     * are in place, the `widget` will be in an "inert" state after calling
     * this function; `widget` will still point to valid memory, allowing you
     * to release the references you hold, but you may not query the widget's
     * own state.
     * 
     * You should typically call this function on top level widgets, and
     * rarely on child widgets.
     * 
     * See also: gtk_container_remove()
     * @virtual 
     */
    destroy(): void
    selectAll(): void

    // Overloads of selectAll

    selectAll(): boolean
    unselectAll(): void

    // Overloads of unselectAll

    unselectAll(): boolean

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

    // Class property signals of Anjuta-3.0.Anjuta.VcsStatusTreeView

    connect(sigName: "notify::conflicted-selectable", callback: any): number
    on(sigName: "notify::conflicted-selectable", callback: any): number
    once(sigName: "notify::conflicted-selectable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::conflicted-selectable", ...args: any[]): void
    connect(sigName: "notify::show-status", callback: any): number
    on(sigName: "notify::show-status", callback: any): number
    once(sigName: "notify::show-status", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-status", ...args: any[]): void
    connect(sigName: "notify::status-codes", callback: any): number
    on(sigName: "notify::status-codes", callback: any): number
    once(sigName: "notify::status-codes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::status-codes", ...args: any[]): void
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

export class VcsStatusTreeView extends Gtk.TreeView {

    // Own properties of Anjuta-3.0.Anjuta.VcsStatusTreeView

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.VcsStatusTreeView

    constructor(config?: VcsStatusTreeView.ConstructorProperties) 
    constructor() 
    static new(): VcsStatusTreeView
    _init(config?: VcsStatusTreeView.ConstructorProperties): void
}

export interface AsyncCommandClass {

    // Own fields of Anjuta-3.0.Anjuta.AsyncCommandClass

    parentClass: CommandClass
}

export abstract class AsyncCommandClass {

    // Own properties of Anjuta-3.0.Anjuta.AsyncCommandClass

    static name: string
}

export interface AsyncCommandPriv {
}

export class AsyncCommandPriv {

    // Own properties of Anjuta-3.0.Anjuta.AsyncCommandPriv

    static name: string
}

export interface AsyncNotifyClass {

    // Own fields of Anjuta-3.0.Anjuta.AsyncNotifyClass

    parentClass: GObject.ObjectClass
    finished: (self: AsyncNotify) => void
}

export abstract class AsyncNotifyClass {

    // Own properties of Anjuta-3.0.Anjuta.AsyncNotifyClass

    static name: string
}

export interface AsyncNotifyPriv {
}

export class AsyncNotifyPriv {

    // Own properties of Anjuta-3.0.Anjuta.AsyncNotifyPriv

    static name: string
}

export interface AutogenClass {
}

export abstract class AutogenClass {

    // Own properties of Anjuta-3.0.Anjuta.AutogenClass

    static name: string
}

export interface CModuleClass {
}

export abstract class CModuleClass {

    // Own properties of Anjuta-3.0.Anjuta.CModuleClass

    static name: string
}

export interface CPluginFactoryClass {
}

export abstract class CPluginFactoryClass {

    // Own properties of Anjuta-3.0.Anjuta.CPluginFactoryClass

    static name: string
}

export interface CellRendererCaptionedImageClass {

    // Own fields of Anjuta-3.0.Anjuta.CellRendererCaptionedImageClass

    parentClass: Gtk.CellRendererClass
}

export abstract class CellRendererCaptionedImageClass {

    // Own properties of Anjuta-3.0.Anjuta.CellRendererCaptionedImageClass

    static name: string
}

export interface CellRendererDiffClass {

    // Own fields of Anjuta-3.0.Anjuta.CellRendererDiffClass

    parentClass: Gtk.CellRendererClass
}

export abstract class CellRendererDiffClass {

    // Own properties of Anjuta-3.0.Anjuta.CellRendererDiffClass

    static name: string
}

export interface CellRendererDiffPrivate {
}

export class CellRendererDiffPrivate {

    // Own properties of Anjuta-3.0.Anjuta.CellRendererDiffPrivate

    static name: string
}

export interface CloseButtonClass {

    // Own fields of Anjuta-3.0.Anjuta.CloseButtonClass

    parentClass: Gtk.ButtonClass
    priv: CloseButtonClassPrivate
}

export abstract class CloseButtonClass {

    // Own properties of Anjuta-3.0.Anjuta.CloseButtonClass

    static name: string
}

export interface CloseButtonClassPrivate {
}

export class CloseButtonClassPrivate {

    // Own properties of Anjuta-3.0.Anjuta.CloseButtonClassPrivate

    static name: string
}

export interface ColumnTextViewClass {

    // Own fields of Anjuta-3.0.Anjuta.ColumnTextViewClass

    parentClass: Gtk.BoxClass
}

export abstract class ColumnTextViewClass {

    // Own properties of Anjuta-3.0.Anjuta.ColumnTextViewClass

    static name: string
}

export interface ColumnTextViewPriv {
}

export class ColumnTextViewPriv {

    // Own properties of Anjuta-3.0.Anjuta.ColumnTextViewPriv

    static name: string
}

export interface CommandBarClass {

    // Own fields of Anjuta-3.0.Anjuta.CommandBarClass

    parentClass: Gtk.NotebookClass
}

export abstract class CommandBarClass {

    // Own properties of Anjuta-3.0.Anjuta.CommandBarClass

    static name: string
}

export interface CommandBarEntry {

    // Own fields of Anjuta-3.0.Anjuta.CommandBarEntry

    /**
     * The type of action
     * @field 
     */
    type: CommandBarEntryType
    /**
     * The name of the action for this entry
     * @field 
     */
    actionName: string
    /**
     * The display label for this entry
     * @field 
     */
    label: string
    tooltip: string
    /**
     * The stock icon to display for this entry
     * @field 
     */
    stockIcon: string
    /**
     * Function to call when this entry's action is activated
     * @field 
     */
    callback: GObject.Callback
}

/**
 * AnjutaCommandBarEntry is used to add a set of frames and actions to a command
 * bar.
 * @record 
 */
export class CommandBarEntry {

    // Own properties of Anjuta-3.0.Anjuta.CommandBarEntry

    static name: string
}

export interface CommandBarPriv {
}

export class CommandBarPriv {

    // Own properties of Anjuta-3.0.Anjuta.CommandBarPriv

    static name: string
}

export interface CommandClass {

    // Own fields of Anjuta-3.0.Anjuta.CommandClass

    parentClass: GObject.ObjectClass
    run: (self: Command) => number
    start: (self: Command) => void
    cancel: (self: Command) => void
    notifyDataArrived: (self: Command) => void
    notifyComplete: (self: Command, returnCode: number) => void
    notifyProgress: (self: Command, progress: number) => void
    setErrorMessage: (self: Command, errorMessage: string) => void
    getErrorMessage: (self: Command) => string | null
    startAutomaticMonitor: (self: Command) => boolean
    stopAutomaticMonitor: (self: Command) => void
    dataArrived: (command: Command) => void
    commandStarted: (command: Command) => void
    commandFinished: (command: Command, returnCode: number) => void
    progress: (command: Command, progress: number) => void
}

export abstract class CommandClass {

    // Own properties of Anjuta-3.0.Anjuta.CommandClass

    static name: string
}

export interface CommandPriv {
}

export class CommandPriv {

    // Own properties of Anjuta-3.0.Anjuta.CommandPriv

    static name: string
}

export interface CommandQueueClass {

    // Own fields of Anjuta-3.0.Anjuta.CommandQueueClass

    parentClass: GObject.ObjectClass
    finished: (queue: CommandQueue) => void
}

export abstract class CommandQueueClass {

    // Own properties of Anjuta-3.0.Anjuta.CommandQueueClass

    static name: string
}

export interface CommandQueuePriv {
}

export class CommandQueuePriv {

    // Own properties of Anjuta-3.0.Anjuta.CommandQueuePriv

    static name: string
}

export interface CompletionClass {

    // Own fields of Anjuta-3.0.Anjuta.CompletionClass

    parentClass: GObject.ObjectClass
}

export abstract class CompletionClass {

    // Own properties of Anjuta-3.0.Anjuta.CompletionClass

    static name: string
}

export interface CompletionPrivate {
}

export class CompletionPrivate {

    // Own properties of Anjuta-3.0.Anjuta.CompletionPrivate

    static name: string
}

export interface DockClass {

    // Own fields of Anjuta-3.0.Anjuta.DockClass

    parentClass: Gdl.DockClass
}

export abstract class DockClass {

    // Own properties of Anjuta-3.0.Anjuta.DockClass

    static name: string
}

export interface DockPaneClass {

    // Own fields of Anjuta-3.0.Anjuta.DockPaneClass

    parentClass: GObject.ObjectClass
    refresh: (self: DockPane) => void
    singleSelectionChanged: (self: DockPane) => void
    multipleSelectionChanged: (self: DockPane) => void
}

export abstract class DockPaneClass {

    // Own properties of Anjuta-3.0.Anjuta.DockPaneClass

    static name: string
}

export interface DockPanePriv {
}

export class DockPanePriv {

    // Own properties of Anjuta-3.0.Anjuta.DockPanePriv

    static name: string
}

export interface DockPriv {
}

export class DockPriv {

    // Own properties of Anjuta-3.0.Anjuta.DockPriv

    static name: string
}

export interface DropEntryClass {

    // Own fields of Anjuta-3.0.Anjuta.DropEntryClass

    parentClass: EntryClass
}

export abstract class DropEntryClass {

    // Own properties of Anjuta-3.0.Anjuta.DropEntryClass

    static name: string
}

export interface Encoding {

    // Owm methods of Anjuta-3.0.Anjuta.Encoding

    /**
     * Makes a copy of the given encoding.
     * This function is used by language bindings.
     */
    copy(): Encoding
    /**
     * Frees the resources allocated by the given encoding.
     * This function is used by language bindings.
     */
    free(): void
    getCharset(): string
    getName(): string
    toString(): string
}

export class Encoding {

    // Own properties of Anjuta-3.0.Anjuta.Encoding

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.Encoding

    static getCurrent(): Encoding
    static getFromCharset(charset: string): Encoding
    static getFromIndex(index: number): Encoding
    static getUtf8(): Encoding
}

export interface EntryClass {

    // Own fields of Anjuta-3.0.Anjuta.EntryClass

    parentClass: Gtk.EntryClass
}

export abstract class EntryClass {

    // Own properties of Anjuta-3.0.Anjuta.EntryClass

    static name: string
}

export interface EntryPriv {
}

export class EntryPriv {

    // Own properties of Anjuta-3.0.Anjuta.EntryPriv

    static name: string
}

export interface EnvironmentEditorClass {

    // Own fields of Anjuta-3.0.Anjuta.EnvironmentEditorClass

    parentClass: Gtk.BinClass
    changed: (self: EnvironmentEditor) => void
}

export abstract class EnvironmentEditorClass {

    // Own properties of Anjuta-3.0.Anjuta.EnvironmentEditorClass

    static name: string
}

export interface FileDropEntryClass {

    // Own fields of Anjuta-3.0.Anjuta.FileDropEntryClass

    parentClass: DropEntryClass
}

export abstract class FileDropEntryClass {

    // Own properties of Anjuta-3.0.Anjuta.FileDropEntryClass

    static name: string
}

export interface FileDropEntryPriv {
}

export class FileDropEntryPriv {

    // Own properties of Anjuta-3.0.Anjuta.FileDropEntryPriv

    static name: string
}

export interface FileListClass {

    // Own fields of Anjuta-3.0.Anjuta.FileListClass

    parentClass: Gtk.BoxClass
}

export abstract class FileListClass {

    // Own properties of Anjuta-3.0.Anjuta.FileListClass

    static name: string
}

export interface FileListPriv {
}

export class FileListPriv {

    // Own properties of Anjuta-3.0.Anjuta.FileListPriv

    static name: string
}

export interface LanguageProposalData {

    // Own fields of Anjuta-3.0.Anjuta.LanguageProposalData

    /**
     * Name of the object
     * @field 
     */
    name: string
    /**
     * Info about the object
     * @field 
     */
    info: string
    /**
     * If this is a function
     * @field 
     */
    isFunc: boolean
    /**
     * If the function has at least one parameters
     * @field 
     */
    hasPara: boolean

    // Owm methods of Anjuta-3.0.Anjuta.LanguageProposalData

    /**
     * Free the given proposal data
     */
    free(): void
}

export class LanguageProposalData {

    // Own properties of Anjuta-3.0.Anjuta.LanguageProposalData

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.LanguageProposalData

    constructor(name: string) 
    static new(name: string): LanguageProposalData
}

export interface LanguageProviderClass {

    // Own fields of Anjuta-3.0.Anjuta.LanguageProviderClass

    parentClass: GObject.ObjectClass
}

export abstract class LanguageProviderClass {

    // Own properties of Anjuta-3.0.Anjuta.LanguageProviderClass

    static name: string
}

export interface LanguageProviderPriv {
}

export class LanguageProviderPriv {

    // Own properties of Anjuta-3.0.Anjuta.LanguageProviderPriv

    static name: string
}

export interface LauncherClass {

    // Own fields of Anjuta-3.0.Anjuta.LauncherClass

    parentClass: GObject.ObjectClass
    childExited: (launcher: Launcher, childPid: number, exitStatus: number, timeTakenInSeconds: number) => void
    busy: (launcher: Launcher, busyFlag: boolean) => void
}

export abstract class LauncherClass {

    // Own properties of Anjuta-3.0.Anjuta.LauncherClass

    static name: string
}

export interface LauncherPriv {
}

export class LauncherPriv {

    // Own properties of Anjuta-3.0.Anjuta.LauncherPriv

    static name: string
}

export interface PkgConfigChooserClass {

    // Own fields of Anjuta-3.0.Anjuta.PkgConfigChooserClass

    parentClass: Gtk.TreeViewClass
    packageActivated: (self: PkgConfigChooser, package: string) => void
    packageDeactivated: (self: PkgConfigChooser, package: string) => void
}

export abstract class PkgConfigChooserClass {

    // Own properties of Anjuta-3.0.Anjuta.PkgConfigChooserClass

    static name: string
}

export interface PkgConfigChooserPrivate {
}

export class PkgConfigChooserPrivate {

    // Own properties of Anjuta-3.0.Anjuta.PkgConfigChooserPrivate

    static name: string
}

export interface PkgScannerClass {

    // Own fields of Anjuta-3.0.Anjuta.PkgScannerClass

    parentClass: AsyncCommandClass
}

export abstract class PkgScannerClass {

    // Own properties of Anjuta-3.0.Anjuta.PkgScannerClass

    static name: string
}

export interface PkgScannerPrivate {
}

export class PkgScannerPrivate {

    // Own properties of Anjuta-3.0.Anjuta.PkgScannerPrivate

    static name: string
}

export interface PluginClass {

    // Own fields of Anjuta-3.0.Anjuta.PluginClass

    parentClass: GObject.ObjectClass
    activated: (plugin: Plugin) => void
    deactivated: (plugin: Plugin) => void
    activate: (plugin: Plugin) => boolean
    deactivate: (plugin: Plugin) => boolean
}

export abstract class PluginClass {

    // Own properties of Anjuta-3.0.Anjuta.PluginClass

    static name: string
}

export interface PluginDescription {

    // Owm methods of Anjuta-3.0.Anjuta.PluginDescription

    copy(): PluginDescription
    /**
     * Frees the #AnjutaPluginDescription instance.
     */
    free(): void
    /**
     * Returns the value of key as boolean in the given section.
     * @param section Section name.
     * @param keyname Key name.
     * @param val Pointer to value to store retured value.
     */
    getBoolean(section: string, keyname: string, val: boolean): boolean
    /**
     * Returns the value of key as integer in the given section.
     * @param section Section name.
     * @param keyname Key name.
     * @param val Pointer to value to store retured value.
     */
    getInteger(section: string, keyname: string, val: number): boolean
    /**
     * Returns the value of key in the given section in current locale.
     * @param section Section name.
     * @param keyname Key name.
     * @param val Pointer to value to store retured value.
     */
    getLocaleString(section: string, keyname: string, val: string): boolean
    /**
     * Retrieves the value of a key (in the given section) for the given locale.
     * The value returned in `val` must be freed after use.
     * @param sectionName Name of the section.
     * @param keyname Name of the key.
     * @param locale The locale for which the value is to be retrieved.
     */
    getRaw(sectionName: string, keyname: string, locale: string): [ /* returnType */ boolean, /* val */ string ]
    /**
     * Returns the value of key in the given section.
     * @param section Section name.
     * @param keyname Key name.
     * @param val Pointer to value to store retured value.
     */
    getString(section: string, keyname: string, val: string): boolean
    /**
     * Override the value of a key in the description. This can be removed using
     * the function anjuta_plugin_description_remove().
     * @param sectionName Section name.
     * @param keyname Key name.
     * @param val Pointer to value to store retured value.
     */
    override(sectionName: string, keyname: string, val: string): boolean
    /**
     * Remove a key from the description.
     * @param sectionName Section name.
     * @param keyname Key name.
     */
    remove(sectionName: string, keyname: string): boolean
    /**
     * Converts the description detains into string format, usually for
     * saving it in a file.
     */
    toString(): string | null
}

export class PluginDescription {

    // Own properties of Anjuta-3.0.Anjuta.PluginDescription

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.PluginDescription

    constructor(filename: string) 
    static new(filename: string): PluginDescription
    /**
     * Parses the given plugin description data (usally read from the plugin
     * description file and creates an instance of #AnjutaPluginDescription.
     * The format of the content string is similar to .ini format.
     * @constructor 
     * @param data The data to parse. The format of the data is .ini style.
     */
    static newFromString(data: string): PluginDescription
}

export interface PluginHandleClass {

    // Own fields of Anjuta-3.0.Anjuta.PluginHandleClass

    parentClass: GObject.ObjectClass
}

export abstract class PluginHandleClass {

    // Own properties of Anjuta-3.0.Anjuta.PluginHandleClass

    static name: string
}

export interface PluginHandlePriv {
}

export class PluginHandlePriv {

    // Own properties of Anjuta-3.0.Anjuta.PluginHandlePriv

    static name: string
}

export interface PluginManagerClass {

    // Own fields of Anjuta-3.0.Anjuta.PluginManagerClass

    parentClass: GObject.ObjectClass
    pluginActivated: (self: PluginManager, handle: PluginHandle, plugin: GObject.Object) => void
    pluginDeactivated: (self: PluginManager, handle: PluginHandle, plugin: GObject.Object) => void
}

export abstract class PluginManagerClass {

    // Own properties of Anjuta-3.0.Anjuta.PluginManagerClass

    static name: string
}

export interface PluginManagerPriv {
}

export class PluginManagerPriv {

    // Own properties of Anjuta-3.0.Anjuta.PluginManagerPriv

    static name: string
}

export interface PluginPrivate {
}

export class PluginPrivate {

    // Own properties of Anjuta-3.0.Anjuta.PluginPrivate

    static name: string
}

export interface PreferencesClass {

    // Own fields of Anjuta-3.0.Anjuta.PreferencesClass

    parent: GObject.ObjectClass
}

export abstract class PreferencesClass {

    // Own properties of Anjuta-3.0.Anjuta.PreferencesClass

    static name: string
}

export interface PreferencesDialogClass {

    // Own fields of Anjuta-3.0.Anjuta.PreferencesDialogClass

    parent: Gtk.DialogClass
}

export abstract class PreferencesDialogClass {

    // Own properties of Anjuta-3.0.Anjuta.PreferencesDialogClass

    static name: string
}

export interface PreferencesDialogPrivate {
}

export class PreferencesDialogPrivate {

    // Own properties of Anjuta-3.0.Anjuta.PreferencesDialogPrivate

    static name: string
}

export interface PreferencesPriv {
}

export class PreferencesPriv {

    // Own properties of Anjuta-3.0.Anjuta.PreferencesPriv

    static name: string
}

export interface ProfileClass {

    // Own fields of Anjuta-3.0.Anjuta.ProfileClass

    parentClass: GObject.ObjectClass
    pluginAdded: (self: Profile, plugin: PluginHandle) => void
    pluginRemoved: (self: Profile, plugin: PluginHandle) => void
    changed: (self: Profile) => void
    descoped: (self: Profile) => void
    scoped: (self: Profile) => void
}

export abstract class ProfileClass {

    // Own properties of Anjuta-3.0.Anjuta.ProfileClass

    static name: string
}

export interface ProfileManagerClass {

    // Own fields of Anjuta-3.0.Anjuta.ProfileManagerClass

    parentClass: GObject.ObjectClass
    profilePushed: (self: ProfileManager, profile: Profile) => void
    profilePopped: (self: ProfileManager, profile: Profile) => void
}

export abstract class ProfileManagerClass {

    // Own properties of Anjuta-3.0.Anjuta.ProfileManagerClass

    static name: string
}

export interface ProfileManagerPriv {
}

export class ProfileManagerPriv {

    // Own properties of Anjuta-3.0.Anjuta.ProfileManagerPriv

    static name: string
}

export interface ProfilePriv {
}

export class ProfilePriv {

    // Own properties of Anjuta-3.0.Anjuta.ProfilePriv

    static name: string
}

export interface ProjectNodeClass {

    // Own fields of Anjuta-3.0.Anjuta.ProjectNodeClass

    parentClass: GObject.InitiallyUnownedClass
    updated: (error: GLib.Error) => void
    loaded: (error: GLib.Error) => void
}

export abstract class ProjectNodeClass {

    // Own properties of Anjuta-3.0.Anjuta.ProjectNodeClass

    static name: string
}

export interface ProjectNodeInfo {

    // Own fields of Anjuta-3.0.Anjuta.ProjectNodeInfo

    type: ProjectNodeType
    name: string
    mimeType: string
    propertyHelpId: string

    // Owm methods of Anjuta-3.0.Anjuta.ProjectNodeInfo

    copy(): ProjectNodeInfo
    free(): void
    mime(): string
}

export class ProjectNodeInfo {

    // Own properties of Anjuta-3.0.Anjuta.ProjectNodeInfo

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.ProjectNodeInfo

    constructor(type: ProjectNodeType, name: string, mimeType: string) 
    static new(type: ProjectNodeType, name: string, mimeType: string): ProjectNodeInfo
}

export interface ProjectProperty {

    // Own fields of Anjuta-3.0.Anjuta.ProjectProperty

    name: string
    value: string
    info: ProjectPropertyInfo
    userData: object

    // Owm methods of Anjuta-3.0.Anjuta.ProjectProperty

    copy(): ProjectProperty
    free(): void
}

export class ProjectProperty {

    // Own properties of Anjuta-3.0.Anjuta.ProjectProperty

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.ProjectProperty

    constructor(value: string, name: string | null, userData: object | null) 
    static new(value: string, name: string | null, userData: object | null): ProjectProperty
}

export interface ProjectPropertyInfo {

    // Own fields of Anjuta-3.0.Anjuta.ProjectPropertyInfo

    id: string
    name: string
    type: ProjectValueType
    flags: ProjectPropertyFlags
    description: string
    defaultValue: ProjectProperty
    userData: object

    // Owm methods of Anjuta-3.0.Anjuta.ProjectPropertyInfo

    copy(): ProjectPropertyInfo
    free(): void
}

export class ProjectPropertyInfo {

    // Own properties of Anjuta-3.0.Anjuta.ProjectPropertyInfo

    static name: string

    // Constructors of Anjuta-3.0.Anjuta.ProjectPropertyInfo

    constructor(id: string, name: string, type: ProjectValueType, flags: ProjectPropertyFlags, description: string, defaultValue: ProjectProperty, userData: object | null) 
    static new(id: string, name: string, type: ProjectValueType, flags: ProjectPropertyFlags, description: string, defaultValue: ProjectProperty, userData: object | null): ProjectPropertyInfo
}

export interface Property {
}

export class Property {

    // Own properties of Anjuta-3.0.Anjuta.Property

    static name: string
}

export interface SavePromptClass {

    // Own fields of Anjuta-3.0.Anjuta.SavePromptClass

    parentClass: Gtk.MessageDialogClass
}

export abstract class SavePromptClass {

    // Own properties of Anjuta-3.0.Anjuta.SavePromptClass

    static name: string
}

export interface SavePromptPrivate {
}

export class SavePromptPrivate {

    // Own properties of Anjuta-3.0.Anjuta.SavePromptPrivate

    static name: string
}

export interface SerializerClass {

    // Own fields of Anjuta-3.0.Anjuta.SerializerClass

    parentClass: GObject.ObjectClass
}

export abstract class SerializerClass {

    // Own properties of Anjuta-3.0.Anjuta.SerializerClass

    static name: string
}

export interface SerializerPrivate {
}

export class SerializerPrivate {

    // Own properties of Anjuta-3.0.Anjuta.SerializerPrivate

    static name: string
}

export interface SessionClass {

    // Own fields of Anjuta-3.0.Anjuta.SessionClass

    parentClass: GObject.ObjectClass
}

export abstract class SessionClass {

    // Own properties of Anjuta-3.0.Anjuta.SessionClass

    static name: string
}

export interface SessionPriv {
}

export class SessionPriv {

    // Own properties of Anjuta-3.0.Anjuta.SessionPriv

    static name: string
}

export interface ShellIface {

    // Own fields of Anjuta-3.0.Anjuta.ShellIface

    gIface: GObject.TypeInterface
    valueAdded: (shell: Shell, name: string, value: any) => void
    valueRemoved: (shell: Shell, name: string) => void
    saveSession: (shell: Shell, phase: SessionPhase, session: Session) => void
    loadSession: (shell: Shell, phase: SessionPhase, session: Session) => void
    savePrompt: (shell: Shell, savePrompt: SavePrompt) => void
    getStatus: (shell: Shell) => Status
    getUi: (shell: Shell) => UI
    getPreferences: (shell: Shell) => Preferences
    getPluginManager: (shell: Shell) => PluginManager
    getProfileManager: (shell: Shell) => ProfileManager
    addWidgetFull: (shell: Shell, widget: Gtk.Widget, name: string, title: string, stockId: string, placement: ShellPlacement, locked: boolean) => void
    addWidgetCustom: (shell: Shell, widget: Gtk.Widget, name: string, title: string, stockId: string, label: Gtk.Widget, placement: ShellPlacement) => void
    removeWidget: (shell: Shell, widget: Gtk.Widget) => void
    presentWidget: (shell: Shell, widget: Gtk.Widget) => void
    iconifyDockableWidget: (shell: Shell, widget: Gtk.Widget) => void
    hideDockableWidget: (shell: Shell, widget: Gtk.Widget) => void
    showDockableWidget: (shell: Shell, widget: Gtk.Widget) => void
    maximizeWidget: (shell: Shell, widgetName: string) => void
    unmaximize: (shell: Shell) => void
    addValue: (shell: Shell, name: string, value: any) => void
    getValue: (shell: Shell, name: string, value: any) => void
    removeValue: (shell: Shell, name: string) => void
    savingPush: (shell: Shell) => void
    savingPop: (shell: Shell) => void
    getObject: (shell: Shell, ifaceName: string) => GObject.Object
}

export abstract class ShellIface {

    // Own properties of Anjuta-3.0.Anjuta.ShellIface

    static name: string
}

export interface StatusClass {

    // Own fields of Anjuta-3.0.Anjuta.StatusClass

    parentClass: Gtk.BoxClass
    busy: (status: Status, state: boolean) => void
}

export abstract class StatusClass {

    // Own properties of Anjuta-3.0.Anjuta.StatusClass

    static name: string
}

export interface StatusPriv {
}

export class StatusPriv {

    // Own properties of Anjuta-3.0.Anjuta.StatusPriv

    static name: string
}

export interface SyncCommandClass {

    // Own fields of Anjuta-3.0.Anjuta.SyncCommandClass

    parentClass: CommandClass
}

export abstract class SyncCommandClass {

    // Own properties of Anjuta-3.0.Anjuta.SyncCommandClass

    static name: string
}

export interface TabberClass {

    // Own fields of Anjuta-3.0.Anjuta.TabberClass

    parentClass: Gtk.ContainerClass
}

export abstract class TabberClass {

    // Own properties of Anjuta-3.0.Anjuta.TabberClass

    static name: string
}

export interface TabberPriv {
}

export class TabberPriv {

    // Own properties of Anjuta-3.0.Anjuta.TabberPriv

    static name: string
}

export interface Token {

    // Owm methods of Anjuta-3.0.Anjuta.Token

    check(): boolean
    clearFlags(flags: number): void
    compare(tokenb: Token): boolean
    dump(): void
    dumpLink(): void
    evaluate(): string
    evaluateName(): string
    getFlags(): number
    getLength(): number
    getString(): string
    getType(): number
    isEmpty(): boolean
    removeItem(): void
    setFlags(flags: number): void
    setLength(length: number): void
    setString(value: string, length: number): void
    setType(type: number): void
}

export class Token {

    // Own properties of Anjuta-3.0.Anjuta.Token

    static name: string
}

export interface TokenFileClass {
}

export abstract class TokenFileClass {

    // Own properties of Anjuta-3.0.Anjuta.TokenFileClass

    static name: string
}

export interface TokenFileLocation {

    // Own fields of Anjuta-3.0.Anjuta.TokenFileLocation

    filename: string
    line: number
    column: number
}

export class TokenFileLocation {

    // Own properties of Anjuta-3.0.Anjuta.TokenFileLocation

    static name: string
}

export interface TokenStream {

    // Owm methods of Anjuta-3.0.Anjuta.TokenStream

    /**
     * Append an already existing token in the output stream.
     * @param token a #AnjutaToken object.
     */
    appendToken(token: Token): void
    /**
     * Return the current directory.
     */
    getCurrentDirectory(): Gio.File
    /**
     * Return the current file.
     */
    getCurrentFile(): Gio.File
    /**
     * Return the parent stream
     */
    getParent(): TokenStream | null
    /**
     * Return the root token for the output stream.
     */
    getRoot(): Token
    /**
     * Destroy the stream object and return the parent stream if it exists.
     */
    pop(): TokenStream | null
    /**
     * Read token from the input stream and write the content as a C string in the
     * buffer passed as argument.
     * @param buffer a character buffer to fill with token data.
     * @param maxSize the size of the buffer.
     */
    read(buffer: string, maxSize: number): number
}

export class TokenStream {

    // Own properties of Anjuta-3.0.Anjuta.TokenStream

    static name: string
}

export interface TokenStyle {

    // Owm methods of Anjuta-3.0.Anjuta.TokenStyle

    format(list: Token): void
    free(): void
    update(list: Token): void
}

export class TokenStyle {

    // Own properties of Anjuta-3.0.Anjuta.TokenStyle

    static name: string
}

export interface TreeComboBoxClass {

    // Own fields of Anjuta-3.0.Anjuta.TreeComboBoxClass

    changed: (combo: TreeComboBox) => void
}

export abstract class TreeComboBoxClass {

    // Own properties of Anjuta-3.0.Anjuta.TreeComboBoxClass

    static name: string
}

export interface TreeComboBoxPrivate {
}

export class TreeComboBoxPrivate {

    // Own properties of Anjuta-3.0.Anjuta.TreeComboBoxPrivate

    static name: string
}

export interface UIClass {

    // Own fields of Anjuta-3.0.Anjuta.UIClass

    parent: Gtk.UIManagerClass
}

export abstract class UIClass {

    // Own properties of Anjuta-3.0.Anjuta.UIClass

    static name: string
}

export interface UIPrivate {
}

export class UIPrivate {

    // Own properties of Anjuta-3.0.Anjuta.UIPrivate

    static name: string
}

export interface UtilStringMap {

    // Own fields of Anjuta-3.0.Anjuta.UtilStringMap

    type: number
    name: string
}

export class UtilStringMap {

    // Own properties of Anjuta-3.0.Anjuta.UtilStringMap

    static name: string
}

export interface VcsStatusTreeViewClass {

    // Own fields of Anjuta-3.0.Anjuta.VcsStatusTreeViewClass

    parentClass: Gtk.TreeViewClass
}

export abstract class VcsStatusTreeViewClass {

    // Own properties of Anjuta-3.0.Anjuta.VcsStatusTreeViewClass

    static name: string
}

export interface VcsStatusTreeViewPriv {
}

export class VcsStatusTreeViewPriv {

    // Own properties of Anjuta-3.0.Anjuta.VcsStatusTreeViewPriv

    static name: string
}

    export type GluePlugin = GObject.TypeModule