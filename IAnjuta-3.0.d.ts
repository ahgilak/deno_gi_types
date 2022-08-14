
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * IAnjuta-3.0
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
import type * as Anjuta from './Anjuta-3.0.js';
import type * as Gdl from './Gdl-3.js';

/**
 * The enumeration is used to speficy the disered build operation
 */
export enum BuildableCommand {
    /**
     * Compile source
     */
    COMMAND_COMPILE,
    /**
     * Build file (normally using make)
     */
    COMMAND_BUILD,
    /**
     * make dist
     */
    COMMAND_BUILD_TARBALL,
    /**
     * make install
     */
    COMMAND_INSTALL,
    /**
     * ./configure
     */
    COMMAND_CONFIGURE,
    /**
     * ./autogen.sh
     */
    COMMAND_GENERATE,
    /**
     * make clean
     */
    COMMAND_CLEAN,
    /**
     * ./hello
     */
    COMMAND_EXECUTE,
    /**
     * check whether object files are up-to-date
     */
    COMMAND_IS_BUILT,
    COMMAND_AUTORECONF,
    /**
     * make distclean
     */
    COMMAND_DISTCLEAN,
    /**
     * make check
     */
    COMMAND_CHECK,
    /**
     * size of enum
     */
    N_COMMANDS,
}
/**
 * Possible build errors
 */
export enum BuilderError {
    /**
     * Build succeeded
     */
    SUCCEED,
    /**
     * Build failed
     */
    FAILED,
    /**
     * Build was canceld
     */
    CANCELED,
    /**
     * Build aborted
     */
    ABORTED,
    /**
     * Build interruped
     */
    INTERRUPTED,
    /**
     * Build interruped
     */
    TERMINATED,
    /**
     * The specified target is unknown
     */
    UNKNOWN_TARGET,
    /**
     * Unknown Error
     */
    UNKNOWN_ERROR,
    /**
     * Other Error (no unknown ;-))
     */
    OTHER_ERROR,
}
/**
 * Defines which breakpoint characteristics are supported by the debugger
 * backend.
 */
export enum DebuggerBreakpointMethod {
    /**
     * Allow to set breakpoint on address
     */
    SET_AT_ADDRESS,
    /**
     * Allow to set breakpoint on function name
     */
    SET_AT_FUNCTION,
    /**
     * Allow to disable breakpoint
     */
    ENABLE,
    /**
     * Allow to ignore breakpoint
     */
    IGNORE,
    /**
     * Allow to add a condition on breakpoint
     */
    CONDITION,
}
/**
 * This enumeration defined various characteristics of the breakpoint.
 */
export enum DebuggerBreakpointType {
    /**
     * Set for removed breakpoint
     */
    REMOVED,
    /**
     * Set for changed breakpoint
     */
    UPDATED,
    /**
     * Set on source line
     */
    ON_LINE,
    /**
     * Set on an addresse
     */
    ON_ADDRESS,
    /**
     * Set on a function name
     */
    ON_FUNCTION,
    /**
     * Set on read access
     */
    ON_READ,
    /**
     * Set on write access
     */
    ON_WRITE,
    /**
     * Has enable information
     */
    WITH_ENABLE,
    /**
     * Has ignore information,
     */
    WITH_IGNORE,
    /**
     * Has counter information
     */
    WITH_TIME,
    /**
     * Has a condition
     */
    WITH_CONDITION,
    /**
     * Temporary breakpoint, automatically removed when triggered
     */
    WITH_TEMPORARY,
    /**
     * Pending breakpoint
     */
    WITH_PENDING,
}
/**
 * This enumeration is used to defined the error returned by the debugger
 * backend.
 */
export enum DebuggerError {
    /**
     * No error
     */
    OK,
    /**
     * Debugger is not ready to execute the command
     */
    NOT_READY,
    /**
     * Debugger is not is running state
     */
    NOT_RUNNING,
    /**
     * Debugger is not is stopped state
     */
    NOT_STOPPED,
    /**
     * Debugger is not is loaded state
     */
    NOT_LOADED,
    /**
     * Debugger is not in started state
     */
    NOT_STARTED,
    /**
     * Debugger is not connected:
     */
    NOT_CONNECTED,
    /**
     * Corresponding function is not implemented
     */
    NOT_IMPLEMENTED,
    /**
     * Operation has been cancelled
     */
    CANCEL,
    /**
     * Debugger cannot create variable
     */
    UNABLE_TO_CREATE_VARIABLE,
    /**
     * Debugger cannot access memory
     */
    UNABLE_TO_ACCESS_MEMORY,
    /**
     * Debugger cannot open file
     */
    UNABLE_TO_OPEN_FILE,
    /**
     * Debugger cannot debug such file
     */
    UNSUPPORTED_FILE_TYPE,
    /**
     * Debugger is too old
     */
    UNSUPPORTED_VERSION,
    /**
     * Debugger cannot be found
     */
    UNABLE_TO_FIND_DEBUGGER,
    /**
     * Command has already been executed
     */
    ALREADY_DONE,
    /**
     * Program cannot be found
     */
    PROGRAM_NOT_FOUND,
    /**
     * Unable to connect to debugger
     */
    UNABLE_TO_CONNECT,
    /**
     * Unknown error
     */
    UNKNOWN_ERROR,
    /**
     * other error
     */
    OTHER_ERROR,
}
/**
 * This enumeration is used to defined the kind of output in
 * #IAnjutaDebuggerOutputCallback
 */
export enum DebuggerOutputType {
    /**
     * Output from debugger
     */
    OUTPUT,
    /**
     * Warning from debugger
     */
    WARNING_OUTPUT,
    /**
     * Error from debugger
     */
    ERROR_OUTPUT,
    /**
     * Additional message from debugger
     */
    INFO_OUTPUT,
}
/**
 * This enumeration is used to defined the different state of the debugger.
 */
export enum DebuggerState {
    /**
     * Debugger is executing a command, it can enter in another
     *                         at the end of the command.
     */
    BUSY,
    /**
     * Debugger is stopped.
     */
    STOPPED,
    /**
     * Debugger is started but no program is loaded.
     */
    STARTED,
    /**
     * Debugger is started and has a program loaded.
     */
    PROGRAM_LOADED,
    /**
     * Debugger is started and has a program stopped.
     */
    PROGRAM_STOPPED,
    /**
     * Debugger is started and has a program running.
     */
    PROGRAM_RUNNING,
}
export enum DocumentManagerError {
    DOESNT_EXIST,
}
/**
 * This enumeration is used to specify the type of text. Note that not all
 * editors implement this.
 */
export enum EditorAttribute {
    /**
     * Normal text
     */
    TEXT,
    /**
     * A keyword of the programming language
     */
    KEYWORD,
    /**
     * A comment
     */
    COMMENT,
    /**
     * A string
     */
    STRING,
}
export enum EditorError {
    DOESNT_EXIST,
}
/**
 * This enumeration is used to specify the type of text. Note that not all
 * editors implement this.
 */
export enum EditorLineModeType {
    /**
     * Line-Feed (Unix)
     */
    LF,
    /**
     * Carat return (Max)
     */
    CR,
    /**
     * Caret return + line-feed (Windows)
     */
    CRLF,
}
/**
 * Possible build errors
 */
export enum EnvironmentError {
    CONFIG,
    OTHER_ERROR,
}
/**
 * This enumeration is used to specify the appearance of the indicator
 */
export enum IndicableIndicator {
    /**
     * No indicator
     */
    NONE,
    /**
     * Important indicator
     */
    IMPORTANT,
    /**
     * Warning indicator
     */
    WARNING,
    /**
     * Critical indicator
     */
    CRITICAL,
}
export enum MarkableError {
    INVALID_LOCATION,
}
/**
 * This enumeration is used to specify the pixmap used for the marker
 */
export enum MarkableMarker {
    /**
     * Mark a particular line
     */
    LINEMARKER,
    /**
     * A bookmark
     */
    BOOKMARK,
    /**
     * An (error) message
     */
    MESSAGE,
    /**
     * a disabled breakpoint
     */
    BREAKPOINT_DISABLED,
    /**
     * a enabled breakpoint
     */
    BREAKPOINT_ENABLED,
    /**
     * Marks the program counter position
     */
    PROGRAM_COUNTER,
}
export enum MessageManagerError {
    DOESNT_EXIST,
}
/**
 * Speficy the type ot the message added to the message view
 */
export enum MessageViewType {
    /**
     * Normal message
     */
    TYPE_NORMAL,
    /**
     * Info message (highlighed)
     */
    TYPE_INFO,
    /**
     * Warning message
     */
    TYPE_WARNING,
    /**
     * Error message
     */
    TYPE_ERROR,
}
/**
 * These enumeration is used to specify errors.
 */
export enum PluginFactoryError {
    OK,
    /**
     * Module file location is
     * missing in .plugin file
     */
    MISSING_LOCATION,
    /**
     * Plugin type (just after
     * double colon following location) is missing in .plugin file
     */
    MISSING_TYPE,
    /**
     * Module file name not found,
     * plugin module is probably not installed
     */
    MISSING_MODULE,
    /**
     * Module file cannot be
     * loaded, not a shared library perhaps
     */
    INVALID_MODULE,
    /**
     * Module does not contain
     * registration function, library is not an anjuta plugin or
     * is not for the right version
     */
    MISSING_FUNCTION,
    /**
     * Module has not registered
     * 	plugin type, library is not an anjuta plugin or not for
     * the right version
     */
    INVALID_TYPE,
    /**
     * Another error
     */
    UNKNOWN_ERROR,
}
export enum ProjectError {
    ERROR_SUCCESS,
    ERROR_DOESNT_EXIST,
    ERROR_ALREADY_EXISTS,
    ERROR_VALIDATION_FAILED,
    ERROR_PROJECT_MALFORMED,
    ERROR_WRONG_PARENT,
    ERROR_NOT_SUPPORTED,
    ERROR_GENERAL_FAILURE,
}
export enum ProjectProbe {
    PROBE_FILES,
    PROBE_MAKE_FILES,
    PROBE_PROJECT_FILES,
}
/**
 * Symbol Fields. Used to define and retrieve results from query. Each of
 * these fields are either integer or string. Use the right method to
 * retrieve them. That is, for integer use ianjuta_symbol_get_int(),
 * for string use ianjuta_symbol_get_string(), and for boolean use
 * ianjuta_symbol_get_boolean(). Some fields can be in both forms,
 * e.g. #IANJUTA_SYMBOL_FIELD_TYPE.
 */
export enum SymbolField {
    /**
     * Integer. A unique ID of the symbol
     */
    FIELD_ID,
    /**
     * String. Name of the symbol
     */
    FIELD_NAME,
    /**
     * Integer. The file line number where the symbol is found.
     */
    FIELD_FILE_POS,
    FILED_SCOPE_DEF_ID,
    /**
     * Boolean: TRUE if symbol is within file scope,
     *     otherwise FALSE.
     */
    FIELD_FILE_SCOPE,
    /**
     * String. Signature of a method, if symbol is a funtion.
     *     Namely, the arguments list of the funtion.
     */
    FIELD_SIGNATURE,
    /**
     * String. Return type of a method, if symbol is a function.
     */
    FIELD_RETURNTYPE,
    /**
     * Both string and Integer. Type attribute of a symbol.
     *     In string form, it is name of the type in string form.
     *     In integer form, it is IAnjutaSymbolType enumerator value.
     */
    FIELD_TYPE,
    /**
     * type_name attribute of a symbol.
     *     If a type could be "class" then its type_name may be "MyFooClass" etc.
     */
    FIELD_TYPE_NAME,
    /**
     * String. The relative path to the file where the symbol is found.
     */
    FIELD_FILE_PATH,
    /**
     * String. The project name to which the symbol belongs to.
     */
    FIELD_PROJECT_NAME,
    /**
     * String. The project version to which the symbol belongs to.
     */
    FIELD_PROJECT_VERSION,
    /**
     * String. Implementation attribute of a symbol. It may be
     *     "pure virtual", "virtual", etc.
     */
    FIELD_IMPLEMENTATION,
    /**
     * String. Access attribute of a symbol.
     *     It may be "public", "private" etc.
     */
    FIELD_ACCESS,
    /**
     * Kind attribute of a symbol, such as
     *     "enumerator", "namespace", "class" etc.
     */
    FIELD_KIND,
    /**
     * Boolean. TRUE if symbol is
     *     a scope container, such as namespace, class, struct etc., otherwise
     *     FALSE.
     */
    FIELD_IS_CONTAINER,
    /**
     * The end marker.
     */
    FIELD_END,
}
/**
 * Sets the database to use for the query. System database is where
 * all system library symbols are found. While project database is where
 * currently open project's symbols are found.
 */
export enum SymbolQueryDb {
    /**
     * Select project database.
     */
    DB_PROJECT,
    /**
     * Select system database.
     */
    DB_SYSTEM,
}
/**
 * Defines file scope of symbols to query.
 */
export enum SymbolQueryFileScope {
    /**
     * Ignore file scope
     */
    SEARCH_FS_IGNORE,
    /**
     * Only public symbols visible to rest of project.
     */
    SEARCH_FS_PUBLIC,
    /**
     * Only private symbols visible inside a file.
     */
    SEARCH_FS_PRIVATE,
}
/**
 * This parameter determines the mode of query execution. By default,
 * IANJUTA_SYMBOL_QUERY_MODE_SYNC is selected.
 */
export enum SymbolQueryMode {
    /**
     * Syncronous query. The result is immediately
     *     available as retrun value of search call.
     */
    MODE_SYNC,
    /**
     * Asynchronous query. The search call
     *     return immediately and result delievered as a signal later. The actual
     *     query is done in a separate thread.
     */
    MODE_ASYNC,
    /**
     * If the database is busy
     *     scanning, then the query is performed later when database is ready.
     *     It returns NULL and result is delivered through async-result signal.
     *     Only query can stay queued, so calling search multiple times would
     *     result in only the last one being active.
     */
    MODE_QUEUED,
}
/**
 * Names of query that defined what kind of query it is.
 */
export enum SymbolQueryName {
    /**
     * Query to perform basic substring search.
     */
    SEARCH,
    /**
     * Query to get all symbols
     */
    SEARCH_ALL,
    /**
     * Query to perform substring search in a file.
     */
    SEARCH_FILE,
    /**
     * Query to perform substring search in a scope.
     */
    SEARCH_IN_SCOPE,
    /**
     * Query to find the symbol of given ID.
     */
    SEARCH_ID,
    /**
     * Query to find members of a scope (eg. class).
     */
    SEARCH_MEMBERS,
    /**
     * Query to get parents of a class.
     */
    SEARCH_CLASS_PARENTS,
    /**
     * Query to find scope name of a file position.
     */
    SEARCH_SCOPE,
    /**
     * Query to get the parent scope of a symbol.
     */
    SEARCH_PARENT_SCOPE,
    /**
     * Query to get the parent scope of a symbol in the file.
     */
    SEARCH_PARENT_SCOPE_FILE,
}
export enum SymbolType {
    /**
     * None spedified.
     */
    TYPE_NONE,
    /**
     * Unknown type.
     */
    TYPE_UNDEF,
    /**
     * Class declaration
     */
    TYPE_CLASS,
    /**
     * Enum declaration
     */
    TYPE_ENUM,
    /**
     * Enumerator value
     */
    TYPE_ENUMERATOR,
    /**
     * Field (Java only)
     */
    TYPE_FIELD,
    /**
     * Function definition
     */
    TYPE_FUNCTION,
    /**
     * Interface (Java only)
     */
    TYPE_INTERFACE,
    /**
     * Member variable of class/struct
     */
    TYPE_MEMBER,
    /**
     * Class method (Java only)
     */
    TYPE_METHOD,
    /**
     * Namespace declaration
     */
    TYPE_NAMESPACE,
    /**
     * Package (Java only)
     */
    TYPE_PACKAGE,
    /**
     * Function prototype
     */
    TYPE_PROTOTYPE,
    /**
     * Struct declaration
     */
    TYPE_STRUCT,
    /**
     * Typedef
     */
    TYPE_TYPEDEF,
    /**
     * Union
     */
    TYPE_UNION,
    /**
     * Variable
     */
    TYPE_VARIABLE,
    /**
     * Extern or forward declaration
     */
    TYPE_EXTERNVAR,
    /**
     * Macro (without arguments)
     */
    TYPE_MACRO,
    /**
     * Parameterized macro
     */
    TYPE_MACRO_WITH_ARG,
    /**
     * File (Pseudo tag)
     */
    TYPE_FILE,
    /**
     * Other (non C/C++/Java tag)
     */
    TYPE_OTHER,
    /**
     * types which are subjected to create a scope.
     */
    TYPE_SCOPE_CONTAINER,
    /**
     * Maximum value, used as end marker.
     */
    TYPE_MAX,
}
/**
 * These enumeration is used to specify errors.
 */
export enum VcsError {
    UNKOWN_ERROR,
}
/**
 * Name of debugging configutation.
 */
export const BUILDER_CONFIGURATION_DEBUG: string
/**
 * Name of optimized configutation.
 */
export const BUILDER_CONFIGURATION_OPTIMIZED: string
/**
 * Name of profiling configutation.
 */
export const BUILDER_CONFIGURATION_PROFILING: string
/**
 * Build directory uri. It is the same than the project_root_uri for
 * in source build.
 */
export const BUILDER_ROOT_URI: string
/**
 * Anjuta shell value set by document manager to the current document
 */
export const DOCUMENT_MANAGER_CURRENT_DOCUMENT: string
/**
 * Integer key, defines the number a space for one indentation step.
 */
export const EDITOR_INDENT_WIDTH_KEY: string
/**
 * Schema id used to store common editor settings.
 */
export const EDITOR_PREF_SCHEMA: string
/**
 * Integer key, defines the size of a tabulation in spaces.
 */
export const EDITOR_TAB_WIDTH_KEY: string
/**
 * Boolean key, true is tabs has to be used for indenting.
 */
export const EDITOR_USE_TABS_KEY: string
/**
 * Anjuta shell value set by file manager to the selected file.
 */
export const FILE_MANAGER_SELECTED_FILE: string
/**
 * Boolean key, true is adding '(' after function call autocompletion
 */
export const LANGUAGE_PROVIDER_PREF_AUTOCOMPLETE_BRACE_AFTER_FUNC: string
/**
 * Boolean key, true is adding ')' after function call autocompletion
 */
export const LANGUAGE_PROVIDER_PREF_AUTOCOMPLETE_CLOSEBRACE_AFTER_FUNC: string
/**
 * Boolean key, true is code completion is enable.
 */
export const LANGUAGE_PROVIDER_PREF_AUTOCOMPLETE_ENABLE: string
/**
 * Boolean key, true is adding a space after function call autocompletion
 */
export const LANGUAGE_PROVIDER_PREF_AUTOCOMPLETE_SPACE_AFTER_FUNC: string
/**
 * Boolean key, true is calltips has to be shown.
 */
export const LANGUAGE_PROVIDER_PREF_CALLTIP_ENABLE: string
/**
 * Anjuta shell value set by project manager to the current project object
 * which implement #IAnjutaProject interface.
 */
export const PROJECT_MANAGER_CURRENT_PROJECT: string
/**
 * Anjuta shell value set by project manager to the current uri.
 */
export const PROJECT_MANAGER_CURRENT_URI: string
/**
 * Anjuta shell value set by project manager to the project root uri.
 */
export const PROJECT_MANAGER_PROJECT_ROOT_URI: string
export function buildableErrorQuark(): GLib.Quark
export function builderErrorQuark(): GLib.Quark
export function debugManagerErrorQuark(): GLib.Quark
export function debuggerBreakpointErrorQuark(): GLib.Quark
export function debuggerErrorQuark(): GLib.Quark
export function debuggerInstructionErrorQuark(): GLib.Quark
export function debuggerMemoryErrorQuark(): GLib.Quark
export function debuggerRegisterErrorQuark(): GLib.Quark
export function debuggerVariableErrorQuark(): GLib.Quark
export function documentErrorQuark(): GLib.Quark
export function documentManagerErrorQuark(): GLib.Quark
export function editorAssistErrorQuark(): GLib.Quark
export function editorCellErrorQuark(): GLib.Quark
export function editorCellStyleErrorQuark(): GLib.Quark
export function editorCommentErrorQuark(): GLib.Quark
export function editorConvertErrorQuark(): GLib.Quark
export function editorErrorQuark(): GLib.Quark
export function editorFactoryErrorQuark(): GLib.Quark
export function editorFoldsErrorQuark(): GLib.Quark
export function editorGladeSignalErrorQuark(): GLib.Quark
export function editorGotoErrorQuark(): GLib.Quark
export function editorHoverErrorQuark(): GLib.Quark
export function editorLanguageErrorQuark(): GLib.Quark
export function editorLineModeErrorQuark(): GLib.Quark
export function editorSearchErrorQuark(): GLib.Quark
export function editorSelectionErrorQuark(): GLib.Quark
export function editorTipErrorQuark(): GLib.Quark
export function editorViewErrorQuark(): GLib.Quark
export function editorZoomErrorQuark(): GLib.Quark
export function environmentErrorQuark(): GLib.Quark
export function fileErrorQuark(): GLib.Quark
export function fileLoaderErrorQuark(): GLib.Quark
export function fileManagerErrorQuark(): GLib.Quark
export function fileSavableErrorQuark(): GLib.Quark
export function gladeErrorQuark(): GLib.Quark
export function helpErrorQuark(): GLib.Quark
export function indenterErrorQuark(): GLib.Quark
export function indicableErrorQuark(): GLib.Quark
export function iterableErrorQuark(): GLib.Quark
export function iterableTreeErrorQuark(): GLib.Quark
export function languageErrorQuark(): GLib.Quark
export function languageProviderErrorQuark(): GLib.Quark
export function loaderErrorQuark(): GLib.Quark
export function markableErrorQuark(): GLib.Quark
export function messageManagerErrorQuark(): GLib.Quark
export function messageViewErrorQuark(): GLib.Quark
export function pluginFactoryErrorQuark(): GLib.Quark
export function preferencesErrorQuark(): GLib.Quark
export function printErrorQuark(): GLib.Quark
export function projectBackendErrorQuark(): GLib.Quark
export function projectChooserErrorQuark(): GLib.Quark
export function projectErrorQuark(): GLib.Quark
export function projectManagerErrorQuark(): GLib.Quark
export function providerErrorQuark(): GLib.Quark
export function snippetsManagerErrorQuark(): GLib.Quark
export function streamErrorQuark(): GLib.Quark
export function streamLoaderErrorQuark(): GLib.Quark
export function streamSavableErrorQuark(): GLib.Quark
export function symbolErrorQuark(): GLib.Quark
export function symbolManagerErrorQuark(): GLib.Quark
export function symbolQueryErrorQuark(): GLib.Quark
export function terminalErrorQuark(): GLib.Quark
export function todoErrorQuark(): GLib.Quark
export function vcsErrorQuark(): GLib.Quark
export function wizardErrorQuark(): GLib.Quark
export interface BuilderCallback {
    (sender: GObject.Object, command: BuilderHandle, err: GLib.Error): void
}
/**
 * This callback function is used to return a #IAnjutaBreakpointItem.
 * @callback 
 * @param data a #IAnjutaBreakpointItem object
 * @param err error
 */
export interface DebuggerBreakpointCallback {
    (data: DebuggerBreakpointItem, err: GLib.Error): void
}
/**
 * This callback function is used only by #ianjuta_debugger_callback with a
 * NULL data.
 * @callback 
 * @param data data
 * @param err error
 */
export interface DebuggerCallback {
    (data: object | null, err: GLib.Error): void
}
/**
 * This callback function is used by several debugger functions. The data is
 * a string
 * @callback 
 * @param value string
 * @param err error
 */
export interface DebuggerGCharCallback {
    (value: string, err: GLib.Error): void
}
/**
 * This callback function is used to return a #IAnjutaDebuggerInstructionDisassembly.
 * @callback 
 * @param data a #IAnjutaDebuggerInstructionDisassembly object
 * @param err error
 */
export interface DebuggerInstructionCallback {
    (data: DebuggerInstructionDisassembly, err: GLib.Error): void
}
/**
 * This callback function is used to return a #IAnjutaDebuggerMemoryBlock.
 * @callback 
 * @param data a #IAnjutaDebuggerMemoryBlock object
 * @param err error
 */
export interface DebuggerMemoryCallback {
    (data: DebuggerMemoryBlock, err: GLib.Error): void
}
/**
 * This callback function is used only by #ianjuta_debugger_callback with a
 * NULL data.
 * @callback 
 * @param type kind of output
 * @param output string
 */
export interface DebuggerOutputCallback {
    (type: DebuggerOutputType, output: string): void
}
/**
 * This callback function is used to return a #IAnjutaDebuggerVariableObject.
 * @callback 
 * @param data a #IAnjutaDebuggerVariableObject object
 * @param err error
 */
export interface DebuggerVariableCallback {
    (data: DebuggerVariableObject, err: GLib.Error): void
}
/**
 * Called when diff data comes from ianjuta_vcs_diff.
 * @callback 
 * @param file File being diffed
 * @param diff Diff data
 */
export interface VcsDiffCallback {
    (file: Gio.File, diff: string): void
}
/**
 * Callback called for each status record returned by
 * ianjuta_vcs_query_status.
 * @callback 
 * @param file File representing the file for which status is given
 * @param status #AnjutaVcsStatus for the file represented by `file`.
 */
export interface VcsStatusCallback {
    (file: Gio.File, status: Anjuta.VcsStatus): void
}
export module Buildable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Buildable {

    // Owm methods of IAnjuta-3.0.IAnjuta.Buildable

    // Has conflict: build(uri: string): void
    // Has conflict: clean(uri: string): void
    // Has conflict: configure(uri: string): void
    // Has conflict: execute(uri: string): void
    // Has conflict: generate(uri: string): void
    // Has conflict: getCommand(commandId: BuildableCommand): string
    // Has conflict: install(uri: string): void
    // Has conflict: resetCommands(): void
    // Has conflict: setCommand(commandId: BuildableCommand, command: string): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Buildable

    /**
     * fixme
     * @virtual 
     * @param uri fixme
     */
    build(uri: string): void
    /**
     * fixme
     * @virtual 
     * @param uri fixme
     */
    clean(uri: string): void
    /**
     * fixme
     * @virtual 
     * @param uri fixme
     */
    configure(uri: string): void
    /**
     * fixme
     * @virtual 
     * @param uri fixme
     */
    execute(uri: string): void
    /**
     * fixme
     * @virtual 
     * @param uri fixme
     */
    generate(uri: string): void
    /**
     * Retrieves the currently set command override.
     * @virtual 
     * @param commandId Command to get override.
     */
    getCommand(commandId: BuildableCommand): string
    /**
     * fixme
     * @virtual 
     * @param uri fixme
     */
    install(uri: string): void
    /**
     * Resets the command overrides to defaults.
     * @virtual 
     */
    resetCommands(): void
    /**
     * Overrides the default command for the given command.
     * @virtual 
     * @param commandId Command to override.
     * @param command Build command to override.
     */
    setCommand(commandId: BuildableCommand, command: string): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Buildable

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Buildable extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Buildable

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.Buildable

    constructor(config?: Buildable.ConstructorProperties) 
    _init(config?: Buildable.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Builder {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Builder {

    // Owm methods of IAnjuta-3.0.IAnjuta.Builder

    // Has conflict: cancel(handle: BuilderHandle): void
    // Has conflict: getUriConfiguration(uri: string): string
    // Has conflict: listConfiguration(): string[]

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Builder

    /**
     * Cancel specified command. The callback function will not
     * be called.
     * @virtual 
     * @param handle handle of the command to cancel
     */
    cancel(handle: BuilderHandle): void
    /**
     * Get the configuration corresponding to the target uri.
     * @virtual 
     * @param uri target uri
     */
    getUriConfiguration(uri: string): string
    /**
     * List all defined configuration. These names returned are
     * the internal non localized names for the following
     * predefined configuration: Debug, Profiling, Optimized.
     * The default configuration has no name and is not returned.
     * @virtual 
     */
    listConfiguration(): string[]

    // Class property signals of IAnjuta-3.0.IAnjuta.Builder

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Builder extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Builder

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.Builder

    constructor(config?: Builder.ConstructorProperties) 
    _init(config?: Builder.ConstructorProperties): void
}

export module DebugManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `breakpoint-changed`
     */
    export interface BreakpointChangedSignalCallback {
        (object: object | null): void
    }

    /**
     * Signal callback interface for `debugger-started`
     */
    export interface DebuggerStartedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `debugger-stopped`
     */
    export interface DebuggerStoppedSignalCallback {
        (object: GLib.Error): void
    }

    /**
     * Signal callback interface for `frame-changed`
     */
    export interface FrameChangedSignalCallback {
        (object: number, p0: number): void
    }

    /**
     * Signal callback interface for `location-changed`
     */
    export interface LocationChangedSignalCallback {
        (object: number, p0: string, p1: number): void
    }

    /**
     * Signal callback interface for `program-exited`
     */
    export interface ProgramExitedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `program-loaded`
     */
    export interface ProgramLoadedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `program-moved`
     */
    export interface ProgramMovedSignalCallback {
        (object: number, p0: number, p1: number, p2: string, p3: number): void
    }

    /**
     * Signal callback interface for `program-running`
     */
    export interface ProgramRunningSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `program-started`
     */
    export interface ProgramStartedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `program-stopped`
     */
    export interface ProgramStoppedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `program-unloaded`
     */
    export interface ProgramUnloadedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `sharedlib-event`
     */
    export interface SharedlibEventSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `signal-received`
     */
    export interface SignalReceivedSignalCallback {
        (object: string, p0: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DebugManager {

    // Owm methods of IAnjuta-3.0.IAnjuta.DebugManager

    // Has conflict: quit(): boolean
    // Has conflict: start(uri: string): boolean
    // Has conflict: startRemote(server: string, uri: string): boolean

    // Own virtual methods of IAnjuta-3.0.IAnjuta.DebugManager

    breakpointChanged(breakpoint: DebuggerBreakpointItem): void
    debuggerStarted(): void
    debuggerStopped(err: GLib.Error): void
    frameChanged(frame: number, thread: number): void
    locationChanged(address: number, uri: string, line: number): void
    programExited(): void
    programLoaded(): void
    programMoved(pid: number, tid: number, address: number, file: string, line: number): void
    programRunning(): void
    programStarted(): void
    programStopped(): void
    programUnloaded(): void
    /**
     * Quit the debugger, can wait until the debugger is ready.
     * @virtual 
     */
    quit(): boolean
    sharedlibEvent(): void
    signalReceived(name: string, description: string): void
    /**
     * Start the debugger of the given uri
     * @virtual 
     * @param uri uri of the target
     */
    start(uri: string): boolean
    /**
     * Start the debugger of the given uri
     * @virtual 
     * @param server server (IP address:port)
     * @param uri uri of the local target
     */
    startRemote(server: string, uri: string): boolean

    // Own signals of IAnjuta-3.0.IAnjuta.DebugManager

    connect(sigName: "breakpoint-changed", callback: DebugManager.BreakpointChangedSignalCallback): number
    on(sigName: "breakpoint-changed", callback: DebugManager.BreakpointChangedSignalCallback): number
    once(sigName: "breakpoint-changed", callback: DebugManager.BreakpointChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "breakpoint-changed", ...args: any[]): void
    connect(sigName: "debugger-started", callback: DebugManager.DebuggerStartedSignalCallback): number
    on(sigName: "debugger-started", callback: DebugManager.DebuggerStartedSignalCallback): number
    once(sigName: "debugger-started", callback: DebugManager.DebuggerStartedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "debugger-started", ...args: any[]): void
    connect(sigName: "debugger-stopped", callback: DebugManager.DebuggerStoppedSignalCallback): number
    on(sigName: "debugger-stopped", callback: DebugManager.DebuggerStoppedSignalCallback): number
    once(sigName: "debugger-stopped", callback: DebugManager.DebuggerStoppedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "debugger-stopped", ...args: any[]): void
    connect(sigName: "frame-changed", callback: DebugManager.FrameChangedSignalCallback): number
    on(sigName: "frame-changed", callback: DebugManager.FrameChangedSignalCallback): number
    once(sigName: "frame-changed", callback: DebugManager.FrameChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "frame-changed", p0: number, ...args: any[]): void
    connect(sigName: "location-changed", callback: DebugManager.LocationChangedSignalCallback): number
    on(sigName: "location-changed", callback: DebugManager.LocationChangedSignalCallback): number
    once(sigName: "location-changed", callback: DebugManager.LocationChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "location-changed", p0: string, p1: number, ...args: any[]): void
    connect(sigName: "program-exited", callback: DebugManager.ProgramExitedSignalCallback): number
    on(sigName: "program-exited", callback: DebugManager.ProgramExitedSignalCallback): number
    once(sigName: "program-exited", callback: DebugManager.ProgramExitedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "program-exited", ...args: any[]): void
    connect(sigName: "program-loaded", callback: DebugManager.ProgramLoadedSignalCallback): number
    on(sigName: "program-loaded", callback: DebugManager.ProgramLoadedSignalCallback): number
    once(sigName: "program-loaded", callback: DebugManager.ProgramLoadedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "program-loaded", ...args: any[]): void
    connect(sigName: "program-moved", callback: DebugManager.ProgramMovedSignalCallback): number
    on(sigName: "program-moved", callback: DebugManager.ProgramMovedSignalCallback): number
    once(sigName: "program-moved", callback: DebugManager.ProgramMovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "program-moved", p0: number, p1: number, p2: string, p3: number, ...args: any[]): void
    connect(sigName: "program-running", callback: DebugManager.ProgramRunningSignalCallback): number
    on(sigName: "program-running", callback: DebugManager.ProgramRunningSignalCallback): number
    once(sigName: "program-running", callback: DebugManager.ProgramRunningSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "program-running", ...args: any[]): void
    connect(sigName: "program-started", callback: DebugManager.ProgramStartedSignalCallback): number
    on(sigName: "program-started", callback: DebugManager.ProgramStartedSignalCallback): number
    once(sigName: "program-started", callback: DebugManager.ProgramStartedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "program-started", ...args: any[]): void
    connect(sigName: "program-stopped", callback: DebugManager.ProgramStoppedSignalCallback): number
    on(sigName: "program-stopped", callback: DebugManager.ProgramStoppedSignalCallback): number
    once(sigName: "program-stopped", callback: DebugManager.ProgramStoppedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "program-stopped", ...args: any[]): void
    connect(sigName: "program-unloaded", callback: DebugManager.ProgramUnloadedSignalCallback): number
    on(sigName: "program-unloaded", callback: DebugManager.ProgramUnloadedSignalCallback): number
    once(sigName: "program-unloaded", callback: DebugManager.ProgramUnloadedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "program-unloaded", ...args: any[]): void
    connect(sigName: "sharedlib-event", callback: DebugManager.SharedlibEventSignalCallback): number
    on(sigName: "sharedlib-event", callback: DebugManager.SharedlibEventSignalCallback): number
    once(sigName: "sharedlib-event", callback: DebugManager.SharedlibEventSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "sharedlib-event", ...args: any[]): void
    connect(sigName: "signal-received", callback: DebugManager.SignalReceivedSignalCallback): number
    on(sigName: "signal-received", callback: DebugManager.SignalReceivedSignalCallback): number
    once(sigName: "signal-received", callback: DebugManager.SignalReceivedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "signal-received", p0: string, ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.DebugManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DebugManager extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.DebugManager

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.DebugManager

    constructor(config?: DebugManager.ConstructorProperties) 
    _init(config?: DebugManager.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Debugger {

    // Signal callback interfaces

    /**
     * Signal callback interface for `debugger-ready`
     */
    export interface DebuggerReadySignalCallback {
        (object: DebuggerState): void
    }

    /**
     * Signal callback interface for `debugger-started`
     */
    export interface DebuggerStartedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `debugger-stopped`
     */
    export interface DebuggerStoppedSignalCallback {
        (object: GLib.Error): void
    }

    /**
     * Signal callback interface for `frame-changed`
     */
    export interface FrameChangedSignalCallback {
        (object: number, p0: number): void
    }

    /**
     * Signal callback interface for `program-exited`
     */
    export interface ProgramExitedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `program-loaded`
     */
    export interface ProgramLoadedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `program-moved`
     */
    export interface ProgramMovedSignalCallback {
        (object: number, p0: number, p1: number, p2: string, p3: number): void
    }

    /**
     * Signal callback interface for `program-running`
     */
    export interface ProgramRunningSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `program-stopped`
     */
    export interface ProgramStoppedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `sharedlib-event`
     */
    export interface SharedlibEventSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `signal-received`
     */
    export interface SignalReceivedSignalCallback {
        (object: string, p0: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Debugger {

    // Owm methods of IAnjuta-3.0.IAnjuta.Debugger

    // Has conflict: abort(): boolean
    // Has conflict: attach(pid: number, sourceSearchDirectories: string[]): boolean
    // Has conflict: connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    // Has conflict: disableLog(): void
    // Has conflict: enableLog(log: MessageView): void
    // Has conflict: exit(): boolean
    // Has conflict: getState(): DebuggerState
    // Has conflict: handleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    // Has conflict: interrupt(): boolean
    // Has conflict: load(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
    // Has conflict: quit(): boolean
    // Has conflict: run(): boolean
    // Has conflict: runFrom(file: string, line: number): boolean
    // Has conflict: runTo(file: string, line: number): boolean
    // Has conflict: sendCommand(command: string): boolean
    // Has conflict: setEnvironment(env: string): boolean
    // Has conflict: setFrame(frame: number): boolean
    // Has conflict: setThread(thread: number): boolean
    // Has conflict: setWorkingDirectory(dir: string): boolean
    // Has conflict: start(args: string, terminal: boolean, stop: boolean): boolean
    // Has conflict: stepIn(): boolean
    // Has conflict: stepOut(): boolean
    // Has conflict: stepOver(): boolean
    // Has conflict: unload(): boolean

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Debugger

    /**
     * Quit the debugger as fast as possible.
     * @virtual 
     */
    abort(): boolean
    /**
     * Attach to an already running process.
     * @virtual 
     * @param pid pid of the process to debug
     * @param sourceSearchDirectories List of directories to search for 		      source files.
     */
    attach(pid: number, sourceSearchDirectories: string[]): boolean
    // Has conflict: connect(server: string, args: string, terminal: boolean, stop: boolean): boolean
    debuggerReady(state: DebuggerState): void
    debuggerStarted(): void
    debuggerStopped(err: GLib.Error): void
    /**
     * Disable debugger log.
     * @virtual 
     */
    disableLog(): void
    /**
     * Log all debuggers commands, mainly useful for debugging.
     * @virtual 
     * @param log MessageView used by log
     */
    enableLog(log: MessageView): void
    /**
     * Exit from the currently loaded program.
     * @virtual 
     */
    exit(): boolean
    frameChanged(frame: number, thread: number): void
    /**
     * Get the current state of the debugger
     * @virtual 
     */
    getState(): DebuggerState
    /**
     * It defines how to handle signal received by the program.
     * @virtual 
     * @param name signal name
     * @param stop TRUE if we need to stop signal
     * @param print TRUE if we display a message when the signal is emitted
     * @param ignore TRUE if we ignore the signal
     */
    handleSignal(name: string, stop: boolean, print: boolean, ignore: boolean): boolean
    /**
     * Interrupt the program currently running.
     * @virtual 
     */
    interrupt(): boolean
    /**
     * Load a program in the debugger.
     * @virtual 
     * @param file filename
     * @param mimeType mime type of the file
     * @param sourceSearchDirectories List of directories to search for 		      source files.
     */
    load(file: string, mimeType: string, sourceSearchDirectories: string[]): boolean
    programExited(): void
    programLoaded(): void
    programMoved(pid: number, tid: number, address: number, file: string, line: number): void
    programRunning(): void
    programStopped(): void
    /**
     * Quit the debugger, can wait until the debugger is ready.
     * @virtual 
     */
    quit(): boolean
    /**
     * Run the program currently loaded.
     * @virtual 
     */
    run(): boolean
    /**
     * Execute the program from a new position.
     * This function is optional.
     * @virtual 
     * @param file target file name
     * @param line target line in file
     */
    runFrom(file: string, line: number): boolean
    /**
     * Execute the currently loaded program until it reachs the target
     * line.
     * @virtual 
     * @param file target file name
     * @param line target line in file
     */
    runTo(file: string, line: number): boolean
    /**
     * Send a command directly to the debugger. Warning, changing the
     * debugger states, by sending a run command by example, will
     * probably gives some troubles in the debug manager.
     * @virtual 
     * @param command command
     */
    sendCommand(command: string): boolean
    /**
     * Set environment variable
     * @virtual 
     * @param env List environment variable
     */
    setEnvironment(env: string): boolean
    /**
     * Set the current frame.
     * @virtual 
     * @param frame frame number
     */
    setFrame(frame: number): boolean
    /**
     * Set the current thread.
     * @virtual 
     * @param thread thread number
     */
    setThread(thread: number): boolean
    /**
     * Set program working directory.
     * @virtual 
     * @param dir working program directory
     */
    setWorkingDirectory(dir: string): boolean
    sharedlibEvent(): void
    signalReceived(name: string, description: string): void
    /**
     * Start a loaded program under debugger control.
     * @virtual 
     * @param args command line argument of the program
     * @param terminal TRUE if the program need a terminal
     * @param stop TRUE if program is stopped at the beginning
     */
    start(args: string, terminal: boolean, stop: boolean): boolean
    /**
     * Execute a single C instruction of the program currently loaded.
     * @virtual 
     */
    stepIn(): boolean
    /**
     * Execute the currently loaded program until it goes out of the
     * current procedure.
     * @virtual 
     */
    stepOut(): boolean
    /**
     * Execute one C instruction, without entering in procedure, of
     * the program currently loaded.
     * @virtual 
     */
    stepOver(): boolean
    /**
     * Unload a program.
     * @virtual 
     */
    unload(): boolean

    // Own signals of IAnjuta-3.0.IAnjuta.Debugger

    connect(sigName: "debugger-ready", callback: Debugger.DebuggerReadySignalCallback): number
    on(sigName: "debugger-ready", callback: Debugger.DebuggerReadySignalCallback): number
    once(sigName: "debugger-ready", callback: Debugger.DebuggerReadySignalCallback): number
    off(handlerId: number): number
    emit(sigName: "debugger-ready", ...args: any[]): void
    connect(sigName: "debugger-started", callback: Debugger.DebuggerStartedSignalCallback): number
    on(sigName: "debugger-started", callback: Debugger.DebuggerStartedSignalCallback): number
    once(sigName: "debugger-started", callback: Debugger.DebuggerStartedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "debugger-started", ...args: any[]): void
    connect(sigName: "debugger-stopped", callback: Debugger.DebuggerStoppedSignalCallback): number
    on(sigName: "debugger-stopped", callback: Debugger.DebuggerStoppedSignalCallback): number
    once(sigName: "debugger-stopped", callback: Debugger.DebuggerStoppedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "debugger-stopped", ...args: any[]): void
    connect(sigName: "frame-changed", callback: Debugger.FrameChangedSignalCallback): number
    on(sigName: "frame-changed", callback: Debugger.FrameChangedSignalCallback): number
    once(sigName: "frame-changed", callback: Debugger.FrameChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "frame-changed", p0: number, ...args: any[]): void
    connect(sigName: "program-exited", callback: Debugger.ProgramExitedSignalCallback): number
    on(sigName: "program-exited", callback: Debugger.ProgramExitedSignalCallback): number
    once(sigName: "program-exited", callback: Debugger.ProgramExitedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "program-exited", ...args: any[]): void
    connect(sigName: "program-loaded", callback: Debugger.ProgramLoadedSignalCallback): number
    on(sigName: "program-loaded", callback: Debugger.ProgramLoadedSignalCallback): number
    once(sigName: "program-loaded", callback: Debugger.ProgramLoadedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "program-loaded", ...args: any[]): void
    connect(sigName: "program-moved", callback: Debugger.ProgramMovedSignalCallback): number
    on(sigName: "program-moved", callback: Debugger.ProgramMovedSignalCallback): number
    once(sigName: "program-moved", callback: Debugger.ProgramMovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "program-moved", p0: number, p1: number, p2: string, p3: number, ...args: any[]): void
    connect(sigName: "program-running", callback: Debugger.ProgramRunningSignalCallback): number
    on(sigName: "program-running", callback: Debugger.ProgramRunningSignalCallback): number
    once(sigName: "program-running", callback: Debugger.ProgramRunningSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "program-running", ...args: any[]): void
    connect(sigName: "program-stopped", callback: Debugger.ProgramStoppedSignalCallback): number
    on(sigName: "program-stopped", callback: Debugger.ProgramStoppedSignalCallback): number
    once(sigName: "program-stopped", callback: Debugger.ProgramStoppedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "program-stopped", ...args: any[]): void
    connect(sigName: "sharedlib-event", callback: Debugger.SharedlibEventSignalCallback): number
    on(sigName: "sharedlib-event", callback: Debugger.SharedlibEventSignalCallback): number
    once(sigName: "sharedlib-event", callback: Debugger.SharedlibEventSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "sharedlib-event", ...args: any[]): void
    connect(sigName: "signal-received", callback: Debugger.SignalReceivedSignalCallback): number
    on(sigName: "signal-received", callback: Debugger.SignalReceivedSignalCallback): number
    once(sigName: "signal-received", callback: Debugger.SignalReceivedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "signal-received", p0: string, ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Debugger

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Debugger extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Debugger

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.Debugger

    constructor(config?: Debugger.ConstructorProperties) 
    _init(config?: Debugger.ConstructorProperties): void
}

export module DebuggerBreakpoint {

    // Constructor properties interface

    export interface ConstructorProperties extends Debugger.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface DebuggerBreakpoint extends Debugger {

    // Owm methods of IAnjuta-3.0.IAnjuta.DebuggerBreakpoint

    // Has conflict: implementBreakpoint(): number

    // Own virtual methods of IAnjuta-3.0.IAnjuta.DebuggerBreakpoint

    /**
     * Return all implemented methods.
     * @virtual 
     */
    implementBreakpoint(): number

    // Class property signals of IAnjuta-3.0.IAnjuta.DebuggerBreakpoint

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DebuggerBreakpoint extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerBreakpoint

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.DebuggerBreakpoint

    constructor(config?: DebuggerBreakpoint.ConstructorProperties) 
    _init(config?: DebuggerBreakpoint.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module DebuggerInstruction {

    // Constructor properties interface

    export interface ConstructorProperties extends Debugger.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface DebuggerInstruction extends Debugger {

    // Owm methods of IAnjuta-3.0.IAnjuta.DebuggerInstruction

    // Has conflict: runFromAddress(address: number): boolean
    // Has conflict: runToAddress(address: number): boolean
    // Has conflict: stepInInstruction(): boolean
    // Has conflict: stepOverInstruction(): boolean

    // Own virtual methods of IAnjuta-3.0.IAnjuta.DebuggerInstruction

    /**
     * Restart the program starting from address address
     * @virtual 
     * @param address Run from this addresss
     */
    runFromAddress(address: number): boolean
    /**
     * Start the program until it reachs the address address
     * @virtual 
     * @param address Run to this addresss
     */
    runToAddress(address: number): boolean
    /**
     * Execute one assembler instruction in the program.
     * @virtual 
     */
    stepInInstruction(): boolean
    /**
     * Execute one assembler instruction in the program, if the instruction
     * is a function call, continues until the function returns.
     * @virtual 
     */
    stepOverInstruction(): boolean

    // Class property signals of IAnjuta-3.0.IAnjuta.DebuggerInstruction

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DebuggerInstruction extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerInstruction

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.DebuggerInstruction

    constructor(config?: DebuggerInstruction.ConstructorProperties) 
    _init(config?: DebuggerInstruction.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module DebuggerMemory {

    // Constructor properties interface

    export interface ConstructorProperties extends Debugger.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface DebuggerMemory extends Debugger {

    // Class property signals of IAnjuta-3.0.IAnjuta.DebuggerMemory

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DebuggerMemory extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerMemory

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.DebuggerMemory

    constructor(config?: DebuggerMemory.ConstructorProperties) 
    _init(config?: DebuggerMemory.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module DebuggerRegister {

    // Constructor properties interface

    export interface ConstructorProperties extends Debugger.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface DebuggerRegister extends Debugger {

    // Owm methods of IAnjuta-3.0.IAnjuta.DebuggerRegister

    // Has conflict: writeRegister(value: DebuggerRegisterData): boolean

    // Own virtual methods of IAnjuta-3.0.IAnjuta.DebuggerRegister

    /**
     * Change the value of one register. Only the num and value field are used.
     * @virtual 
     * @param value Modified register with a new value
     */
    writeRegister(value: DebuggerRegisterData): boolean

    // Class property signals of IAnjuta-3.0.IAnjuta.DebuggerRegister

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DebuggerRegister extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerRegister

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.DebuggerRegister

    constructor(config?: DebuggerRegister.ConstructorProperties) 
    _init(config?: DebuggerRegister.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module DebuggerVariable {

    // Constructor properties interface

    export interface ConstructorProperties extends Debugger.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface DebuggerVariable extends Debugger {

    // Owm methods of IAnjuta-3.0.IAnjuta.DebuggerVariable

    // Has conflict: assign(name: string, value: string): boolean
    // Has conflict: destroy(name: string): boolean

    // Own virtual methods of IAnjuta-3.0.IAnjuta.DebuggerVariable

    /**
     * Set the value of one variable or child object.
     * @virtual 
     * @param name Variable name
     * @param value Variable value
     */
    assign(name: string, value: string): boolean
    /**
     * Delete a previously created variable or child object
     * including its own children.
     * @virtual 
     * @param name Variable name
     */
    destroy(name: string): boolean

    // Class property signals of IAnjuta-3.0.IAnjuta.DebuggerVariable

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DebuggerVariable extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerVariable

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.DebuggerVariable

    constructor(config?: DebuggerVariable.ConstructorProperties) 
    _init(config?: DebuggerVariable.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Document {

    // Signal callback interfaces

    /**
     * Signal callback interface for `update-ui`
     */
    export interface UpdateUiSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Document {

    // Owm methods of IAnjuta-3.0.IAnjuta.Document

    // Has conflict: beginUndoAction(): void
    // Has conflict: canRedo(): boolean
    // Has conflict: canUndo(): boolean
    // Has conflict: clear(): void
    // Has conflict: copy(): void
    // Has conflict: cut(): void
    // Has conflict: endUndoAction(): void
    // Has conflict: getFilename(): string
    // Has conflict: grabFocus(): void
    // Has conflict: paste(): void
    // Has conflict: redo(): void
    // Has conflict: undo(): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Document

    /**
     * Begins the mark of undoable action. Calls to this are stacked and
     * each must be ended with ianjuta_document_end_action().
     * @virtual 
     */
    beginUndoAction(): void
    /**
     * Can the editor redo the last operation?
     * @virtual 
     */
    canRedo(): boolean
    /**
     * Can the editor undo the last operation?
     * @virtual 
     */
    canUndo(): boolean
    /**
     * Clear selection
     * @virtual 
     */
    clear(): void
    /**
     * Copy selection to clipboard.
     * @virtual 
     */
    copy(): void
    /**
     * Cut selection to clipboard.
     * @virtual 
     */
    cut(): void
    /**
     * Ends the mark of undoable action.
     * @virtual 
     */
    endUndoAction(): void
    /**
     * Allows obtaining of the filename the editor was loaded from.
     * @virtual 
     */
    getFilename(): string
    /**
     * Grabs the focus.
     * @virtual 
     */
    grabFocus(): void
    /**
     * Paste clipboard at current position.
     * @virtual 
     */
    paste(): void
    /**
     * Redo last undo operation
     * @virtual 
     */
    redo(): void
    /**
     * Undo last operation
     * @virtual 
     */
    undo(): void
    updateUi(): void

    // Own signals of IAnjuta-3.0.IAnjuta.Document

    connect(sigName: "update-ui", callback: Document.UpdateUiSignalCallback): number
    on(sigName: "update-ui", callback: Document.UpdateUiSignalCallback): number
    once(sigName: "update-ui", callback: Document.UpdateUiSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "update-ui", ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Document

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Document extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Document

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.Document

    constructor(config?: Document.ConstructorProperties) 
    _init(config?: Document.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module DocumentManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `document-added`
     */
    export interface DocumentAddedSignalCallback {
        (doc: Document): void
    }

    /**
     * Signal callback interface for `document-removed`
     */
    export interface DocumentRemovedSignalCallback {
        (doc: Document): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DocumentManager {

    // Owm methods of IAnjuta-3.0.IAnjuta.DocumentManager

    // Has conflict: addBookmark(file: Gio.File, line: number): void
    // Has conflict: addBuffer(name: string, content: string): Editor
    // Has conflict: addDocument(document: Document): void
    // Has conflict: findDocumentWithFile(file: Gio.File): Document
    // Has conflict: getCurrentDocument(): Document
    // Has conflict: getDocWidgets(): Gtk.Widget[]
    // Has conflict: getFile(filename: string): Gio.File
    // Has conflict: gotoFileLine(file: Gio.File, lineno: number): Editor
    // Has conflict: gotoFileLineMark(file: Gio.File, lineno: number, mark: boolean): Editor
    // Has conflict: removeDocument(document: Document, saveBefore: boolean): boolean
    // Has conflict: setCurrentDocument(document: Document): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.DocumentManager

    addBookmark(file: Gio.File, line: number): void
    /**
     * Creates a new editor buffer of the given name and sets the given
     * content as its initial content.
     * @virtual 
     * @param name Name of the editor buffer.
     * @param content Initial content of the buffer.
     */
    addBuffer(name: string, content: string): Editor
    /**
     * Adds a document to the document manager. This will open a new
     * Notebook tab and show the document there
     * @virtual 
     * @param document the document to add
     */
    addDocument(document: Document): void
    documentAdded(doc: Document): void
    documentRemoved(doc: Document): void
    /**
     * Finds the document that has the file  loaded. Only
     * the editor that matches the file will be searched.
     * @virtual 
     * @param file The file to find.
     */
    findDocumentWithFile(file: Gio.File): Document
    /**
     * Gets the current document.
     * @virtual 
     */
    getCurrentDocument(): Document
    /**
     * Gets a list of widgets for open documents. Each widget is
     * a GTK_WIDGET(IAnjutaDocument*)
     * @virtual 
     */
    getDocWidgets(): Gtk.Widget[]
    /**
     * Given the short filename, finds the file of the filename, if the
     * editor that has it loaded is found. If there is no editor that has
     * this file opened, returns NULL.
     * @virtual 
     * @param filename short filename
     */
    getFile(filename: string): Gio.File
    /**
     * Loads the given file if not loaded yet, set its editor as current editor
     * and moves cursor to the given line in the editor.
     * @virtual 
     * @param file file to go to.
     * @param lineno the line number in the file to go to.
     */
    gotoFileLine(file: Gio.File, lineno: number): Editor
    /**
     * Loads the given file if not loaded yet, set its editor as current editor
     * and moves cursor to the given line in the editor. Optionally also marks
     * the line with line marker if `mark` is given TRUE.
     * @virtual 
     * @param file file to go to.
     * @param lineno the line number in the file to go to.
     * @param mark TRUE if the line should be marked with a marker.
     */
    gotoFileLineMark(file: Gio.File, lineno: number, mark: boolean): Editor
    /**
     * Closes and removes the given document. If `save_before` is TRUE, also
     * saves the document before closing.
     * @virtual 
     * @param document Document to close.
     * @param saveBefore If true, saves the document before closing.
     */
    removeDocument(document: Document, saveBefore: boolean): boolean
    /**
     * Sets the given document as current document.
     * @virtual 
     * @param document the document to set as current.
     */
    setCurrentDocument(document: Document): void

    // Own signals of IAnjuta-3.0.IAnjuta.DocumentManager

    connect(sigName: "document-added", callback: DocumentManager.DocumentAddedSignalCallback): number
    on(sigName: "document-added", callback: DocumentManager.DocumentAddedSignalCallback): number
    once(sigName: "document-added", callback: DocumentManager.DocumentAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "document-added", ...args: any[]): void
    connect(sigName: "document-removed", callback: DocumentManager.DocumentRemovedSignalCallback): number
    on(sigName: "document-removed", callback: DocumentManager.DocumentRemovedSignalCallback): number
    once(sigName: "document-removed", callback: DocumentManager.DocumentRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "document-removed", ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.DocumentManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DocumentManager extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.DocumentManager

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.DocumentManager

    constructor(config?: DocumentManager.ConstructorProperties) 
    _init(config?: DocumentManager.ConstructorProperties): void
}

export module Editor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `backspace`
     */
    export interface BackspaceSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (added: Iterable, length: boolean, lines: number, text: number, obj: string): void
    }

    /**
     * Signal callback interface for `char-added`
     */
    export interface CharAddedSignalCallback {
        (ch: Iterable, obj: number): void
    }

    /**
     * Signal callback interface for `code-changed`
     */
    export interface CodeChangedSignalCallback {
        (code: Iterable, obj: string): void
    }

    /**
     * Signal callback interface for `cursor-moved`
     */
    export interface CursorMovedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `glade-callback-add`
     */
    export interface GladeCallbackAddSignalCallback {
        (signalName: string, handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string): void
    }

    /**
     * Signal callback interface for `glade-member-add`
     */
    export interface GladeMemberAddSignalCallback {
        (widgetName: string, filename: string, obj: string): void
    }

    /**
     * Signal callback interface for `line-marks-gutter-clicked`
     */
    export interface LineMarksGutterClickedSignalCallback {
        (doubleClick: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.Editor

    // Has conflict: append(text: string, length: number): void
    // Has conflict: erase(positionStart: Iterable, positionEnd: Iterable): void
    // Has conflict: eraseAll(): void
    // Has conflict: getColumn(): number
    // Has conflict: getCurrentWord(): string
    // Has conflict: getEndPosition(): Iterable
    // Has conflict: getIndentsize(): number
    // Has conflict: getLength(): number
    // Has conflict: getLineBeginPosition(line: number): Iterable
    // Has conflict: getLineEndPosition(line: number): Iterable
    // Has conflict: getLineFromPosition(position: Iterable): number
    // Has conflict: getLineno(): number
    // Has conflict: getOffset(): number
    // Has conflict: getOverwrite(): boolean
    // Has conflict: getPosition(): Iterable
    // Has conflict: getStartPosition(): Iterable
    // Has conflict: getTabsize(): number
    // Has conflict: getText(begin: Iterable, end: Iterable): string
    // Has conflict: getTextAll(): string
    // Has conflict: getUseSpaces(): boolean
    // Has conflict: gotoEnd(): void
    // Has conflict: gotoLine(lineno: number): void
    // Has conflict: gotoPosition(position: Iterable): void
    // Has conflict: gotoStart(): void
    // Has conflict: insert(position: Iterable, text: string, length: number): void
    // Has conflict: setAutoIndent(autoIndent: boolean): void
    // Has conflict: setIndentsize(indentsize: number): void
    // Has conflict: setPopupMenu(menu: Gtk.Widget): void
    // Has conflict: setTabsize(tabsize: number): void
    // Has conflict: setUseSpaces(useSpaces: boolean): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Editor

    /**
     * Appends `length` characters from `text` buffer at the end of editor
     * buffer. If `length` is -1, the whole `text` is used. `length` is in bytes.
     * @virtual 
     * @param text Text to append.
     * @param length Length of `text` to use.
     */
    append(text: string, length: number): void
    backspace(): void
    changed(position: Iterable, added: boolean, length: number, lines: number, text: string): void
    charAdded(position: Iterable, ch: number): void
    codeChanged(position: Iterable, code: string): void
    cursorMoved(): void
    erase(positionStart: Iterable, positionEnd: Iterable): void
    /**
     * Empties the whole editor buffer. There will be zero characters.
     * After the erase operation, none of the active iters are guranteed
     * to be valid.
     * @virtual 
     */
    eraseAll(): void
    getColumn(): number
    /**
     * Obtains the word on which carat is currently on.
     * @virtual 
     */
    getCurrentWord(): string
    /**
     * Gets the iter positioned at the end of the editor buffer. The
     * returned iter is the end-iter which does not point to any valid
     * character in the buffer (it is pointed one step beyond the last
     * valid character).
     * @virtual 
     */
    getEndPosition(): Iterable
    /**
     * Returns the indentation size in spaces currently used by the
     * editor.
     * @virtual 
     */
    getIndentsize(): number
    /**
     * Get length of complete text in editor. This will be the total
     * number of bytes in the file or buffer.
     * @virtual 
     */
    getLength(): number
    /**
     * fixme
     * @virtual 
     * @param line fixme
     */
    getLineBeginPosition(line: number): Iterable
    /**
     * fixme
     * @virtual 
     * @param line fixme
     */
    getLineEndPosition(line: number): Iterable
    getLineFromPosition(position: Iterable): number
    /**
     * Obtains current line number on which carat is.
     * @virtual 
     */
    getLineno(): number
    getOffset(): number
    /**
     * Obtains editor overwirte mode: TRUE = Override, FALSE = Insert.
     * @virtual 
     */
    getOverwrite(): boolean
    /**
     * Get current caret position.
     * @virtual 
     */
    getPosition(): Iterable
    /**
     * Gets the iter positioned at the start of the editor buffer.
     * @virtual 
     */
    getStartPosition(): Iterable
    /**
     * Returns the tabsize (in spaces) currently used by the editor.
     * @virtual 
     */
    getTabsize(): number
    /**
     * Gets text characters beginning from `begin` (including char
     * pointed by `begin)` and ending with `end` (excluding character
     * pointed by `end)`. The characters returned are utf-8 encoded.
     * The iterators `begin` and `end` could be in either order. The returned
     * text, however, is in right order. If both `begin` and `end` points
     * to the same position, NULL is returned.
     * @virtual 
     * @param begin Begining iterator
     * @param end End iterator
     */
    getText(begin: Iterable, end: Iterable): string
    /**
     * Gets all text characters in the editor.
     * The characters returned are utf-8 encoded.
     * @virtual 
     */
    getTextAll(): string
    /**
     * Returns if the editor uses spaces for filling up tab characters.
     * @virtual 
     */
    getUseSpaces(): boolean
    gladeCallbackAdd(widgetTypename: string, signalName: string, handlerName: string, object: string, swap: boolean, after: boolean, filename: string): void
    gladeMemberAdd(widgetTypename: string, widgetName: string, filename: string): void
    /**
     * Carat is moved to the end of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     * @virtual 
     */
    gotoEnd(): void
    /**
     * Carat is moved to the given `lineno` line and text view is scrolled to
     * bring it in viewable area of the editor.
     * @virtual 
     * @param lineno line number where carat will be moved.
     */
    gotoLine(lineno: number): void
    /**
     * Carat is moved to the given `position` and text view is scrolled to
     * bring `position` in viewable area of the editor.
     * @virtual 
     * @param position Character position where carat will be moved.
     */
    gotoPosition(position: Iterable): void
    /**
     * Carat is moved to the begining of editor and text view is scrolled to
     * bring it in viewable area of the editor.
     * @virtual 
     */
    gotoStart(): void
    /**
     * Inserts `length` characters from `text` buffer at given `position` of
     * editor buffer. If `length` is -1, the whole `text` is used.
     * @virtual 
     * @param position Character position in editor where insert will take place.
     * @param text Text to append.
     * @param length Length of `text` to use.
     */
    insert(position: Iterable, text: string, length: number): void
    lineMarksGutterClicked(location: number): void
    /**
     * Sets whether the editor should auto-indent itself. A plugin that does
     * custom auto-indent can set this to false and override the preferences
     * setting
     * @virtual 
     * @param autoIndent TRUE to enable auto-indent, FALSE to disable
     */
    setAutoIndent(autoIndent: boolean): void
    /**
     * Sets the indentation size of the editor.
     * @virtual 
     * @param indentsize Indentation size in spaces
     */
    setIndentsize(indentsize: number): void
    /**
     * Set Editor popup menu. This is the menu shown in the editor when one
     * right-clicks on it.
     * @virtual 
     * @param menu Popupmenu
     */
    setPopupMenu(menu: Gtk.Widget): void
    /**
     * Sets the tabsize of the editor.
     * @virtual 
     * @param tabsize Tabsize in spaces
     */
    setTabsize(tabsize: number): void
    setUseSpaces(useSpaces: boolean): void

    // Own signals of IAnjuta-3.0.IAnjuta.Editor

    connect(sigName: "backspace", callback: Editor.BackspaceSignalCallback): number
    on(sigName: "backspace", callback: Editor.BackspaceSignalCallback): number
    once(sigName: "backspace", callback: Editor.BackspaceSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "backspace", ...args: any[]): void
    connect(sigName: "changed", callback: Editor.ChangedSignalCallback): number
    on(sigName: "changed", callback: Editor.ChangedSignalCallback): number
    once(sigName: "changed", callback: Editor.ChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "changed", length: boolean, lines: number, text: number, obj: string, ...args: any[]): void
    connect(sigName: "char-added", callback: Editor.CharAddedSignalCallback): number
    on(sigName: "char-added", callback: Editor.CharAddedSignalCallback): number
    once(sigName: "char-added", callback: Editor.CharAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "char-added", obj: number, ...args: any[]): void
    connect(sigName: "code-changed", callback: Editor.CodeChangedSignalCallback): number
    on(sigName: "code-changed", callback: Editor.CodeChangedSignalCallback): number
    once(sigName: "code-changed", callback: Editor.CodeChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "code-changed", obj: string, ...args: any[]): void
    connect(sigName: "cursor-moved", callback: Editor.CursorMovedSignalCallback): number
    on(sigName: "cursor-moved", callback: Editor.CursorMovedSignalCallback): number
    once(sigName: "cursor-moved", callback: Editor.CursorMovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "cursor-moved", ...args: any[]): void
    connect(sigName: "glade-callback-add", callback: Editor.GladeCallbackAddSignalCallback): number
    on(sigName: "glade-callback-add", callback: Editor.GladeCallbackAddSignalCallback): number
    once(sigName: "glade-callback-add", callback: Editor.GladeCallbackAddSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "glade-callback-add", handlerName: string, object: string, swap: string, after: boolean, filename: boolean, obj: string, ...args: any[]): void
    connect(sigName: "glade-member-add", callback: Editor.GladeMemberAddSignalCallback): number
    on(sigName: "glade-member-add", callback: Editor.GladeMemberAddSignalCallback): number
    once(sigName: "glade-member-add", callback: Editor.GladeMemberAddSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "glade-member-add", filename: string, obj: string, ...args: any[]): void
    connect(sigName: "line-marks-gutter-clicked", callback: Editor.LineMarksGutterClickedSignalCallback): number
    on(sigName: "line-marks-gutter-clicked", callback: Editor.LineMarksGutterClickedSignalCallback): number
    once(sigName: "line-marks-gutter-clicked", callback: Editor.LineMarksGutterClickedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "line-marks-gutter-clicked", ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Editor

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Editor extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Editor

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.Editor

    constructor(config?: Editor.ConstructorProperties) 
    _init(config?: Editor.ConstructorProperties): void
}

export module EditorAssist {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cancelled`
     */
    export interface CancelledSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Editor.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface EditorAssist extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorAssist

    // Has conflict: add(provider: Provider): void
    // Has conflict: invoke(provider: Provider): void
    // Has conflict: proposals(provider: Provider, proposals: EditorAssistProposal[], preWord: string, finished: boolean): void
    // Has conflict: remove(provider: Provider): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorAssist

    add(provider: Provider): void
    cancelled(): void
    invoke(provider: Provider): void
    /**
     * Add the list of proposals for the current population. You can add
     * proposals async as long as the last call sets finished to TRUE. That
     * is usually called by the IAnjutaProvider after it was triggered by
     * ianjuta_provider_populate()
     * @virtual 
     * @param provider a IAnjutaProvider
     * @param proposals a list of IAnjutaProposals
     * @param preWord the word before the cursor
     * @param finished whether is was the last call in an async operation
     */
    proposals(provider: Provider, proposals: EditorAssistProposal[], preWord: string, finished: boolean): void
    remove(provider: Provider): void

    // Own signals of IAnjuta-3.0.IAnjuta.EditorAssist

    connect(sigName: "cancelled", callback: EditorAssist.CancelledSignalCallback): number
    on(sigName: "cancelled", callback: EditorAssist.CancelledSignalCallback): number
    once(sigName: "cancelled", callback: EditorAssist.CancelledSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "cancelled", ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorAssist

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EditorAssist extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorAssist

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.EditorAssist

    constructor(config?: EditorAssist.ConstructorProperties) 
    _init(config?: EditorAssist.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module EditorCell {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface EditorCell {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorCell

    // Has conflict: getAttribute(): EditorAttribute
    // Has conflict: getChar(charIndex: number): number
    // Has conflict: getCharacter(): string
    // Has conflict: getLength(): number

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorCell

    getAttribute(): EditorAttribute
    /**
     * Returns the byte of the unicode character in this cell at given
     * index `char_index`. `char_index` can vary from 0 to length of the
     * unicode string minus 1. Out of range index is not allowed
     * (asserted) and return is undefined.
     * 
     * Since there is dynamic allocation of unicode character string
     * involved in ianjuta_editor_cell_get_character(), this function
     * is mainly useful for fast iteration (such as copying data).
     * @virtual 
     * @param charIndex 
     */
    getChar(charIndex: number): number
    /**
     * Returns the unicode character in this cell. A NULL terminated
     * string is returned that is the multibyte unicode character.
     * NULL is returned if the cell does not have any character.
     * @virtual 
     */
    getCharacter(): string
    /**
     * Gets the length of the cell in bytes. That is, length of the
     * unicode character.
     * @virtual 
     */
    getLength(): number

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorCell

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EditorCell extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorCell

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.EditorCell

    constructor(config?: EditorCell.ConstructorProperties) 
    _init(config?: EditorCell.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module EditorCellStyle {

    // Constructor properties interface

    export interface ConstructorProperties extends EditorCell.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface EditorCellStyle extends EditorCell {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorCellStyle

    // Has conflict: getBackgroundColor(): string
    // Has conflict: getColor(): string
    // Has conflict: getFontDescription(): string

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorCellStyle

    getBackgroundColor(): string
    getColor(): string
    getFontDescription(): string

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorCellStyle

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EditorCellStyle extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorCellStyle

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.EditorCellStyle

    constructor(config?: EditorCellStyle.ConstructorProperties) 
    _init(config?: EditorCellStyle.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module EditorComment {

    // Constructor properties interface

    export interface ConstructorProperties extends Editor.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface EditorComment extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorComment

    // Has conflict: block(): void
    // Has conflict: box(): void
    // Has conflict: stream(): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorComment

    /**
     * Comment/Uncomment out selected block
     * @virtual 
     */
    block(): void
    /**
     * Comment/Uncomment out selected block
     * @virtual 
     */
    box(): void
    /**
     * Comment/Uncomment out selected block
     * @virtual 
     */
    stream(): void

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorComment

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EditorComment extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorComment

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.EditorComment

    constructor(config?: EditorComment.ConstructorProperties) 
    _init(config?: EditorComment.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module EditorConvert {

    // Constructor properties interface

    export interface ConstructorProperties extends Editor.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface EditorConvert extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorConvert

    // Has conflict: toLower(startPosition: Iterable, endPosition: Iterable): void
    // Has conflict: toUpper(startPosition: Iterable, endPosition: Iterable): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorConvert

    /**
     * change characters from start position to end position to lowercase
     * @virtual 
     * @param startPosition Start position.
     * @param endPosition End position.
     */
    toLower(startPosition: Iterable, endPosition: Iterable): void
    /**
     * change characters from start position to end position to uppercase.
     * @virtual 
     * @param startPosition Start position.
     * @param endPosition End position.
     */
    toUpper(startPosition: Iterable, endPosition: Iterable): void

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorConvert

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EditorConvert extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorConvert

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.EditorConvert

    constructor(config?: EditorConvert.ConstructorProperties) 
    _init(config?: EditorConvert.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module EditorFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface EditorFactory {

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EditorFactory extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorFactory

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.EditorFactory

    constructor(config?: EditorFactory.ConstructorProperties) 
    _init(config?: EditorFactory.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module EditorFolds {

    // Constructor properties interface

    export interface ConstructorProperties extends Editor.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface EditorFolds extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorFolds

    // Has conflict: closeAll(): void
    // Has conflict: openAll(): void
    // Has conflict: toggleCurrent(): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorFolds

    closeAll(): void
    openAll(): void
    toggleCurrent(): void

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorFolds

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EditorFolds extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorFolds

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.EditorFolds

    constructor(config?: EditorFolds.ConstructorProperties) 
    _init(config?: EditorFolds.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module EditorGladeSignal {

    // Signal callback interfaces

    /**
     * Signal callback interface for `drop`
     */
    export interface DropSignalCallback {
        (iter: Iterable, signalData: string): void
    }

    /**
     * Signal callback interface for `drop-possible`
     */
    export interface DropPossibleSignalCallback {
        (iter: Iterable): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Editor.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface EditorGladeSignal extends Editor {

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorGladeSignal

    drop(iterator: Iterable, signalData: string): void
    dropPossible(iterator: Iterable): boolean

    // Own signals of IAnjuta-3.0.IAnjuta.EditorGladeSignal

    connect(sigName: "drop", callback: EditorGladeSignal.DropSignalCallback): number
    on(sigName: "drop", callback: EditorGladeSignal.DropSignalCallback): number
    once(sigName: "drop", callback: EditorGladeSignal.DropSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "drop", signalData: string, ...args: any[]): void
    connect(sigName: "drop-possible", callback: EditorGladeSignal.DropPossibleSignalCallback): number
    on(sigName: "drop-possible", callback: EditorGladeSignal.DropPossibleSignalCallback): number
    once(sigName: "drop-possible", callback: EditorGladeSignal.DropPossibleSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "drop-possible", ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorGladeSignal

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EditorGladeSignal extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorGladeSignal

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.EditorGladeSignal

    constructor(config?: EditorGladeSignal.ConstructorProperties) 
    _init(config?: EditorGladeSignal.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module EditorGoto {

    // Constructor properties interface

    export interface ConstructorProperties extends Editor.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface EditorGoto extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorGoto

    // Has conflict: endBlock(): void
    // Has conflict: matchingBrace(): void
    // Has conflict: startBlock(): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorGoto

    /**
     * Moves cursor to the end of the current block
     * @virtual 
     */
    endBlock(): void
    /**
     * Moves cursor to matching brace
     * @virtual 
     */
    matchingBrace(): void
    /**
     * Moves cursor to the start of the current block
     * @virtual 
     */
    startBlock(): void

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorGoto

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EditorGoto extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorGoto

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.EditorGoto

    constructor(config?: EditorGoto.ConstructorProperties) 
    _init(config?: EditorGoto.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module EditorHover {

    // Signal callback interfaces

    /**
     * Signal callback interface for `hover-leave`
     */
    export interface HoverLeaveSignalCallback {
        (position: Iterable): void
    }

    /**
     * Signal callback interface for `hover-over`
     */
    export interface HoverOverSignalCallback {
        (position: Iterable): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Editor.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface EditorHover extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorHover

    // Has conflict: display(position: Iterable, info: string): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorHover

    /**
     * Show `info` as tooltip
     * @virtual 
     * @param position 
     * @param info String to display
     */
    display(position: Iterable, info: string): void
    hoverLeave(position: Iterable): void
    hoverOver(position: Iterable): void

    // Own signals of IAnjuta-3.0.IAnjuta.EditorHover

    connect(sigName: "hover-leave", callback: EditorHover.HoverLeaveSignalCallback): number
    on(sigName: "hover-leave", callback: EditorHover.HoverLeaveSignalCallback): number
    once(sigName: "hover-leave", callback: EditorHover.HoverLeaveSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "hover-leave", ...args: any[]): void
    connect(sigName: "hover-over", callback: EditorHover.HoverOverSignalCallback): number
    on(sigName: "hover-over", callback: EditorHover.HoverOverSignalCallback): number
    once(sigName: "hover-over", callback: EditorHover.HoverOverSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "hover-over", ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorHover

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EditorHover extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorHover

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.EditorHover

    constructor(config?: EditorHover.ConstructorProperties) 
    _init(config?: EditorHover.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module EditorLanguage {

    // Signal callback interfaces

    /**
     * Signal callback interface for `language-changed`
     */
    export interface LanguageChangedSignalCallback {
        (language: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Editor.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface EditorLanguage extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorLanguage

    // Has conflict: getLanguage(): string
    // Has conflict: getLanguageName(language: string): string
    // Has conflict: getSupportedLanguages(): string[]
    // Has conflict: setLanguage(language: string): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorLanguage

    /**
     * Return the name of the currently used language
     * @virtual 
     */
    getLanguage(): string
    getLanguageName(language: string): string
    /**
     * Return a list of languages supported by the editor
     * Note: These list contains the names in the form
     * the editor implementation knows them
     * @virtual 
     */
    getSupportedLanguages(): string[]
    languageChanged(language: string): void
    /**
     * Force the editor to use a given language
     * @virtual 
     * @param language Language
     */
    setLanguage(language: string): void

    // Own signals of IAnjuta-3.0.IAnjuta.EditorLanguage

    connect(sigName: "language-changed", callback: EditorLanguage.LanguageChangedSignalCallback): number
    on(sigName: "language-changed", callback: EditorLanguage.LanguageChangedSignalCallback): number
    once(sigName: "language-changed", callback: EditorLanguage.LanguageChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "language-changed", ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorLanguage

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EditorLanguage extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorLanguage

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.EditorLanguage

    constructor(config?: EditorLanguage.ConstructorProperties) 
    _init(config?: EditorLanguage.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module EditorLineMode {

    // Constructor properties interface

    export interface ConstructorProperties extends Editor.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface EditorLineMode extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorLineMode

    // Has conflict: convert(mode: EditorLineModeType): void
    // Has conflict: fix(): void
    // Has conflict: get(): EditorLineModeType
    // Has conflict: set(mode: EditorLineModeType): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorLineMode

    /**
     * Set the line ending mode to the given `mode` and convert all line end
     * characters in the buffer to `mode` line end characters.
     * @virtual 
     * @param mode Line mode to convert.
     */
    convert(mode: EditorLineModeType): void
    /**
     * Convert EOL characters to majority of line mode. This is helpful
     * when the buffer contains mixed line modes and we want to fix it.
     * @virtual 
     */
    fix(): void
    /**
     * Get current line ending mode. It is auto-detected from the
     * buffer contents.
     * @virtual 
     */
    get(): EditorLineModeType
    /**
     * Set the line ending mode to the given `mode`. Existing line end
     * characters in the buffer are not touched. Only the newly added
     * texts will have `mode` line end characters.
     * @virtual 
     * @param mode Line mode to set.
     */
    set(mode: EditorLineModeType): void

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorLineMode

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EditorLineMode extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorLineMode

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.EditorLineMode

    constructor(config?: EditorLineMode.ConstructorProperties) 
    _init(config?: EditorLineMode.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module EditorSearch {

    // Constructor properties interface

    export interface ConstructorProperties extends Editor.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface EditorSearch extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorSearch

    // Has conflict: backward(search: string, caseSensitive: boolean, start: EditorCell, end: EditorCell): [ /* returnType */ boolean, /* resultStart */ EditorCell, /* resultEnd */ EditorCell ]
    // Has conflict: forward(search: string, caseSensitive: boolean, start: EditorCell, end: EditorCell): [ /* returnType */ boolean, /* resultStart */ EditorCell, /* resultEnd */ EditorCell ]

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorSearch

    /**
     * Search backward from end to start
     * @virtual 
     * @param search String to search for
     * @param caseSensitive 
     * @param start Where to search from
     * @param end Where to stop searching
     */
    backward(search: string, caseSensitive: boolean, start: EditorCell, end: EditorCell): [ /* returnType */ boolean, /* resultStart */ EditorCell, /* resultEnd */ EditorCell ]
    /**
     * Search forward from start to end
     * @virtual 
     * @param search String to search for
     * @param caseSensitive 
     * @param start Where to search from
     * @param end Where to stop searching
     */
    forward(search: string, caseSensitive: boolean, start: EditorCell, end: EditorCell): [ /* returnType */ boolean, /* resultStart */ EditorCell, /* resultEnd */ EditorCell ]

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorSearch

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EditorSearch extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorSearch

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.EditorSearch

    constructor(config?: EditorSearch.ConstructorProperties) 
    _init(config?: EditorSearch.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module EditorSelection {

    // Constructor properties interface

    export interface ConstructorProperties extends Editor.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface EditorSelection extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorSelection

    // Has conflict: get(): string
    // Has conflict: hasSelection(): boolean
    // Has conflict: replace(text: string, length: number): void
    // Has conflict: selectAll(): void
    // Has conflict: selectBlock(): void
    // Has conflict: selectFunction(): void
    // Has conflict: set(start: Iterable, end: Iterable, scroll: boolean): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorSelection

    /**
     * Gets curerntly selected text in editor.
     * @virtual 
     */
    get(): string
    /**
     * Returns TRUE if editor has any text selected. The selection
     * positions can be retrieved with ianjuta_editor_selection_get_start()
     * and ianjuta_editor_selection_get_end().
     * @virtual 
     */
    hasSelection(): boolean
    /**
     * Replaces currently selected text with the `text`. Only `length` amount
     * of characters are used from `text` buffer to replace.
     * @virtual 
     * @param text Replacement text.
     * @param length Length of the text to used in `text`.
     */
    replace(text: string, length: number): void
    selectAll(): void
    /**
     * Selects current block of code. The definition of block of code
     * depends on highlight mode used (programming language). Some
     * highlight mode does not have block concept, in that case this
     * method does not do anything.
     * @virtual 
     */
    selectBlock(): void
    /**
     * Select current function block. The definition of function block
     * depends on highlight mode used (programming language). Some
     * highlight mode does not have function concept, in that case this
     * method does not do anything.
     * @virtual 
     */
    selectFunction(): void
    /**
     * Select characters between start and end. Start and end don't have to
     * be ordered.
     * @virtual 
     * @param start Begin of selection
     * @param end End of selection
     * @param scroll Scroll selection onscreen
     */
    set(start: Iterable, end: Iterable, scroll: boolean): void

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorSelection

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EditorSelection extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorSelection

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.EditorSelection

    constructor(config?: EditorSelection.ConstructorProperties) 
    _init(config?: EditorSelection.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module EditorTip {

    // Constructor properties interface

    export interface ConstructorProperties extends Editor.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface EditorTip extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorTip

    // Has conflict: cancel(): void
    // Has conflict: show(tips: string[], position: Iterable): void
    // Has conflict: visible(): boolean

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorTip

    /**
     * Cancels the last shown tooltip
     * @virtual 
     */
    cancel(): void
    /**
     * Show tips showing more information on current context. No user feedback
     * is required when tips are shown. `position` indicates
     * the position before which is the known context and after which are
     * the suggestions. Usually the editor would use this to
     * align the choices displayed such that the carat is just at this
     * position when the choices are displayed.
     * @virtual 
     * @param tips list of alternative tips.
     * @param position Tip position.
     */
    show(tips: string[], position: Iterable): void
    visible(): boolean

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorTip

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EditorTip extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorTip

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.EditorTip

    constructor(config?: EditorTip.ConstructorProperties) 
    _init(config?: EditorTip.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module EditorView {

    // Constructor properties interface

    export interface ConstructorProperties extends Editor.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface EditorView extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorView

    // Has conflict: create(): void
    // Has conflict: getCount(): number
    // Has conflict: removeCurrent(): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorView

    /**
     * Creates a new view for the editor. The newly created view gets
     * the user focus and scrolls to the same location as last view.
     * @virtual 
     */
    create(): void
    /**
     * Total number of views currently present. It will never be less
     * than 1. Invalid return values are considered error condition.
     * @virtual 
     */
    getCount(): number
    /**
     * Removes currently focused editor view. It does not remove the
     * last view of the editor. That is, if currently there is only
     * one view of the editor, this function does nothing.
     * @virtual 
     */
    removeCurrent(): void

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorView

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EditorView extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorView

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.EditorView

    constructor(config?: EditorView.ConstructorProperties) 
    _init(config?: EditorView.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module EditorZoom {

    // Constructor properties interface

    export interface ConstructorProperties extends Editor.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface EditorZoom extends Editor {

    // Owm methods of IAnjuta-3.0.IAnjuta.EditorZoom

    // Has conflict: in(): void
    // Has conflict: out(): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.EditorZoom

    /**
     * Zoom in
     * @virtual 
     */
    in(): void
    /**
     * Zoom out
     * @virtual 
     */
    out(): void

    // Class property signals of IAnjuta-3.0.IAnjuta.EditorZoom

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EditorZoom extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorZoom

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.EditorZoom

    constructor(config?: EditorZoom.ConstructorProperties) 
    _init(config?: EditorZoom.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Environment {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Environment {

    // Owm methods of IAnjuta-3.0.IAnjuta.Environment

    // Has conflict: getRealDirectory(dir: string): string
    // Has conflict: override(dirp: string, argvp: string, envp: string): boolean

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Environment

    /**
     * Convert a directory in the environment to a directory outside.
     * It is useful when the environment use chroot. Take care that
     * the input directory string is freed using g_free but and you need to
     * free the output string when not needed.
     * @virtual 
     * @param dir A directory path in the environment
     */
    getRealDirectory(dir: string): string
    /**
     * Override a command to work in another build environment
     * @virtual 
     * @param dirp a pointer on the working directory
     * @param argvp a pointer on a NULL terminated string array     containing the command name in argv[0] and all    its argument
     * @param envp a pointer on a NULL terminated string array    containing all additional environment variable    used by the command
     */
    override(dirp: string, argvp: string, envp: string): boolean

    // Class property signals of IAnjuta-3.0.IAnjuta.Environment

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Environment extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Environment

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.Environment

    constructor(config?: Environment.ConstructorProperties) 
    _init(config?: Environment.ConstructorProperties): void
}

export module File {

    // Signal callback interfaces

    /**
     * Signal callback interface for `opened`
     */
    export interface OpenedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface File {

    // Owm methods of IAnjuta-3.0.IAnjuta.File

    // Has conflict: getFile(): Gio.File
    // Has conflict: open(file: Gio.File): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.File

    /**
     * Returns the file that was opened with ianjuta_file_open().
     * @virtual 
     */
    getFile(): Gio.File
    /**
     * The implementor opens the given file.
     * @virtual 
     * @param file file to open.
     */
    open(file: Gio.File): void
    opened(): void

    // Own signals of IAnjuta-3.0.IAnjuta.File

    connect(sigName: "opened", callback: File.OpenedSignalCallback): number
    on(sigName: "opened", callback: File.OpenedSignalCallback): number
    once(sigName: "opened", callback: File.OpenedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "opened", ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.File

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class File extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.File

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.File

    constructor(config?: File.ConstructorProperties) 
    _init(config?: File.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module FileLoader {

    // Constructor properties interface

    export interface ConstructorProperties extends Loader.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface FileLoader extends Loader {

    // Owm methods of IAnjuta-3.0.IAnjuta.FileLoader

    // Has conflict: peekInterface(file: Gio.File): string

    // Own virtual methods of IAnjuta-3.0.IAnjuta.FileLoader

    peekInterface(file: Gio.File): string

    // Class property signals of IAnjuta-3.0.IAnjuta.FileLoader

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FileLoader extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.FileLoader

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.FileLoader

    constructor(config?: FileLoader.ConstructorProperties) 
    _init(config?: FileLoader.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module FileManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `section-changed`
     */
    export interface SectionChangedSignalCallback {
        (err: Gio.File): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface FileManager {

    // Owm methods of IAnjuta-3.0.IAnjuta.FileManager

    // Has conflict: setRoot(rootUri: string): void
    // Has conflict: setSelected(file: Gio.File): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.FileManager

    sectionChanged(file: Gio.File): void
    /**
     * fixme
     * @virtual 
     * @param rootUri fixme
     */
    setRoot(rootUri: string): void
    /**
     * fixme.
     * @virtual 
     * @param file File to select
     */
    setSelected(file: Gio.File): void

    // Own signals of IAnjuta-3.0.IAnjuta.FileManager

    connect(sigName: "section-changed", callback: FileManager.SectionChangedSignalCallback): number
    on(sigName: "section-changed", callback: FileManager.SectionChangedSignalCallback): number
    once(sigName: "section-changed", callback: FileManager.SectionChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "section-changed", ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.FileManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FileManager extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.FileManager

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.FileManager

    constructor(config?: FileManager.ConstructorProperties) 
    _init(config?: FileManager.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module FileSavable {

    // Signal callback interfaces

    /**
     * Signal callback interface for `saved`
     */
    export interface SavedSignalCallback {
        (file: Gio.File): void
    }

    /**
     * Signal callback interface for `update-save-ui`
     */
    export interface UpdateSaveUiSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends File.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface FileSavable extends File {

    // Owm methods of IAnjuta-3.0.IAnjuta.FileSavable

    // Has conflict: isConflict(): boolean
    // Has conflict: isDirty(): boolean
    // Has conflict: isReadOnly(): boolean
    // Has conflict: save(): void
    // Has conflict: saveAs(file: Gio.File): void
    // Has conflict: setDirty(dirty: boolean): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.FileSavable

    /**
     * Return is the file is in conflict. It means the file
     * has been modified externally and the user needs to
     * tell which version he wants to use.
     * @virtual 
     */
    isConflict(): boolean
    /**
     * Returns the dirty status of the content.
     * @virtual 
     */
    isDirty(): boolean
    /**
     * Return is the file is read-only
     * @virtual 
     */
    isReadOnly(): boolean
    /**
     * Saves the content to the original file from which it was loaded.
     * The signal saved is always emitted even if the save fails.
     * @virtual 
     */
    save(): void
    /**
     * Saves the content to a different File.
     * The signal saved is always emitted even if the save fails.
     * @virtual 
     * @param file File to save the content.
     */
    saveAs(file: Gio.File): void
    saved(file: Gio.File): void
    /**
     * if `dirty` is TRUE, sets dirty for the content. Save point will be
     * left and the content will be considered not saved. Otherwise,
     * content will considered saved and save-point will be entered.
     * @virtual 
     * @param dirty Whether the file was edited or not
     */
    setDirty(dirty: boolean): void
    updateSaveUi(): void

    // Own signals of IAnjuta-3.0.IAnjuta.FileSavable

    connect(sigName: "saved", callback: FileSavable.SavedSignalCallback): number
    on(sigName: "saved", callback: FileSavable.SavedSignalCallback): number
    once(sigName: "saved", callback: FileSavable.SavedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "saved", ...args: any[]): void
    connect(sigName: "update-save-ui", callback: FileSavable.UpdateSaveUiSignalCallback): number
    on(sigName: "update-save-ui", callback: FileSavable.UpdateSaveUiSignalCallback): number
    once(sigName: "update-save-ui", callback: FileSavable.UpdateSaveUiSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "update-save-ui", ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.FileSavable

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FileSavable extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.FileSavable

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.FileSavable

    constructor(config?: FileSavable.ConstructorProperties) 
    _init(config?: FileSavable.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Glade {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Glade {

    // Owm methods of IAnjuta-3.0.IAnjuta.Glade

    // Has conflict: addAssociation(master: string, slave: string): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Glade

    addAssociation(master: string, slave: string): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Glade

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Glade extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Glade

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.Glade

    constructor(config?: Glade.ConstructorProperties) 
    _init(config?: Glade.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Help {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Help {

    // Owm methods of IAnjuta-3.0.IAnjuta.Help

    // Has conflict: search(query: string): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Help

    /**
     * Search for string `query` in the help and display the result
     * @virtual 
     * @param query string to search in the help
     */
    search(query: string): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Help

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Help extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Help

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.Help

    constructor(config?: Help.ConstructorProperties) 
    _init(config?: Help.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Indenter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Indenter {

    // Owm methods of IAnjuta-3.0.IAnjuta.Indenter

    // Has conflict: indent(start: Iterable, end: Iterable): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Indenter

    /**
     * Indent the area between `start` and `end` according to the indentation rules
     * of the programming language. Usually implemented by language support plugins.
     * Only one indenter can be loaded at a time.
     * Note: Indenters always affect full lines, so start and end will be moved
     * according to the next line start/end.
     * @virtual 
     * @param start Start of the area to indent
     * @param end End of the area to indent
     */
    indent(start: Iterable, end: Iterable): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Indenter

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Indenter extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Indenter

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.Indenter

    constructor(config?: Indenter.ConstructorProperties) 
    _init(config?: Indenter.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Indicable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Indicable {

    // Owm methods of IAnjuta-3.0.IAnjuta.Indicable

    // Has conflict: clear(): void
    // Has conflict: set(beginLocation: Iterable, endLocation: Iterable, indicator: IndicableIndicator): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Indicable

    /**
     * Clear all indicators
     * @virtual 
     */
    clear(): void
    /**
     * Set an indicator
     * @virtual 
     * @param beginLocation Location where the indication should start
     * @param endLocation Location where the indication should end
     * @param indicator the indicator to use
     */
    set(beginLocation: Iterable, endLocation: Iterable, indicator: IndicableIndicator): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Indicable

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Indicable extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Indicable

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.Indicable

    constructor(config?: Indicable.ConstructorProperties) 
    _init(config?: Indicable.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Iterable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Iterable {

    // Owm methods of IAnjuta-3.0.IAnjuta.Iterable

    // Has conflict: assign(srcIter: Iterable): void
    // Has conflict: clone(): Iterable
    // Has conflict: compare(iter2: Iterable): number
    // Has conflict: diff(iter2: Iterable): number
    // Has conflict: first(): boolean
    // Has conflict: getLength(): number
    // Has conflict: getPosition(): number
    // Has conflict: last(): boolean
    // Has conflict: next(): boolean
    // Has conflict: previous(): boolean
    // Has conflict: setPosition(position: number): boolean

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Iterable

    /**
     * Assigns the iter position from `src_iter`.
     * @virtual 
     * @param srcIter Source iter from which to copy the assignment.
     */
    assign(srcIter: Iterable): void
    /**
     * Clones the iterable. The returned iterable object must be unreffed
     * when done.
     * @virtual 
     */
    clone(): Iterable
    /**
     * Compares the position of `iter2` with this `obj`. Returns -1
     * value if this `obj` is smaller than `iter2`. Returns +1 value
     * if this `obj` is larger than `iter2`. And returns 0 if both are equal.
     * If you want difference of the iter positions, use
     * #ianjuta_iterable_diff(). This method is meant for fast comparision.
     * @virtual 
     * @param iter2 Second iter to compare.
     */
    compare(iter2: Iterable): number
    /**
     * Compares the position of `iter2` with this `obj` and returns difference
     * in position of the two (`obj` - `iter2`).
     * @virtual 
     * @param iter2 Second iter to differenciate.
     */
    diff(iter2: Iterable): number
    /**
     * Set iter to first element position. Returns FALSE if
     * there is no element in the iterable (hence does not have first).
     * The iter points to the first valid item.
     * @virtual 
     */
    first(): boolean
    /**
     * Length of the iterable (number of elements indexable by it).
     * @virtual 
     */
    getLength(): number
    /**
     * Index of the current iter in the iterable. It will be
     * from 0 to length - 1 (ianjuta_iter_get_length()) if iter is pointed
     * at valid element. It will return -1 if iter is pointed at end-iter.
     * @virtual 
     */
    getPosition(): number
    /**
     * Set iter position to end-iter (one past last element) position.
     * Returns FALSE if there is no element in the iterable (already
     * at end-iter).
     * @virtual 
     */
    last(): boolean
    /**
     * Set the iter position to next element position. Iter can go until one
     * item past the last item and lands in end-iter. end-iter does not point
     * to any valid item and signifies end of the list. Returns FALSE if iter
     * was already at end-iter (iter can not go past it) and remains pointed
     * to the end-iter.
     * @virtual 
     */
    next(): boolean
    /**
     * Set the iter position to previous element position. Returns FALSE if
     * there is no previous element and the iter remains pointed to the first
     * element.
     * @virtual 
     */
    previous(): boolean
    /**
     * Sets the current position of the iter to `position`. The given `position`
     * must be from 0 to length - 1 (#ianjuta_iter_get_length()) to point to
     * a valid element. Passing `position` < 0 will set it to end-iter. It
     * returns TRUE for the above cases. FLASE will be returned, if
     * out-of-range `position` is passed (`position` > length - 1) and iter is
     * set to end-iter.
     * @virtual 
     * @param position New position for the iter.
     */
    setPosition(position: number): boolean

    // Class property signals of IAnjuta-3.0.IAnjuta.Iterable

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Iterable extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Iterable

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.Iterable

    constructor(config?: Iterable.ConstructorProperties) 
    _init(config?: Iterable.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module IterableTree {

    // Constructor properties interface

    export interface ConstructorProperties extends Iterable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface IterableTree extends Iterable {

    // Owm methods of IAnjuta-3.0.IAnjuta.IterableTree

    // Has conflict: children(): boolean
    // Has conflict: hasChildren(): boolean
    // Has conflict: parent(): boolean

    // Own virtual methods of IAnjuta-3.0.IAnjuta.IterableTree

    /**
     * Iter position set to first child of current iter. If there is no
     * children, return NULL (iter position is not changed).
     * @virtual 
     */
    children(): boolean
    /**
     * Returns true if current iter has children
     * @virtual 
     */
    hasChildren(): boolean
    /**
     * Set iter position to parent of curernt iter. If there is no parent,
     * returns FALSE (current iter position is not changed)
     * @virtual 
     */
    parent(): boolean

    // Class property signals of IAnjuta-3.0.IAnjuta.IterableTree

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IterableTree extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.IterableTree

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.IterableTree

    constructor(config?: IterableTree.ConstructorProperties) 
    _init(config?: IterableTree.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Language {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Language {

    // Owm methods of IAnjuta-3.0.IAnjuta.Language

    // Has conflict: getFromEditor(editor: EditorLanguage): LanguageId
    // Has conflict: getFromMimeType(mimeType: string): LanguageId
    // Has conflict: getFromString(string: string): LanguageId
    // Has conflict: getLanguages(): number[]
    // Has conflict: getMakeTarget(id: LanguageId): string
    // Has conflict: getName(id: LanguageId): string
    // Has conflict: getNameFromEditor(editor: EditorLanguage): string

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Language

    /**
     * Conviniece method to get the id directly from the editor
     * @virtual 
     * @param editor An object implementing IAnjutaEditorLanguage
     */
    getFromEditor(editor: EditorLanguage): LanguageId
    getFromMimeType(mimeType: string): LanguageId
    getFromString(string: string): LanguageId
    getLanguages(): number[]
    getMakeTarget(id: LanguageId): string
    getName(id: LanguageId): string
    /**
     * Conviniece method to get the name directly from the editor
     * @virtual 
     * @param editor An object implementing IAnjutaEditorLanguage
     */
    getNameFromEditor(editor: EditorLanguage): string

    // Class property signals of IAnjuta-3.0.IAnjuta.Language

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Language extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Language

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.Language

    constructor(config?: Language.ConstructorProperties) 
    _init(config?: Language.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module LanguageProvider {

    // Constructor properties interface

    export interface ConstructorProperties extends Provider.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface LanguageProvider extends Provider {

    // Owm methods of IAnjuta-3.0.IAnjuta.LanguageProvider

    // Has conflict: getCalltipCache(callContext: string): string[]
    // Has conflict: getCalltipContext(iter: Iterable): string
    // Has conflict: newCalltip(callContext: string, iter: Iterable): void
    // Has conflict: populateCompletions(iter: Iterable): Iterable | null

    // Own virtual methods of IAnjuta-3.0.IAnjuta.LanguageProvider

    /**
     * Searches for a calltip in the cache
     * @virtual 
     * @param callContext name of the method to show a calltip
     */
    getCalltipCache(callContext: string): string[]
    /**
     * Searches for a calltip context
     * @virtual 
     * @param iter current cursor position
     */
    getCalltipContext(iter: Iterable): string
    /**
     * Creates a new calltip
     * @virtual 
     * @param callContext name of the method to create a new calltip
     * @param iter current cursor position
     */
    newCalltip(callContext: string, iter: Iterable): void
    /**
     * Show completion for the context at position `iter`. The provider should
     * call ianjuta_editor_assist_proposals here to add proposals to the list.
     * 
     * Note that this is called after every character typed and the list of proposals
     * has to be completely renewed.
     * @virtual 
     * @param iter the text iter where the provider should be populated
     */
    populateCompletions(iter: Iterable): Iterable | null

    // Class property signals of IAnjuta-3.0.IAnjuta.LanguageProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class LanguageProvider extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.LanguageProvider

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.LanguageProvider

    constructor(config?: LanguageProvider.ConstructorProperties) 
    _init(config?: LanguageProvider.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Loader {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Loader {

    // Class property signals of IAnjuta-3.0.IAnjuta.Loader

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Loader extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Loader

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.Loader

    constructor(config?: Loader.ConstructorProperties) 
    _init(config?: Loader.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Markable {

    // Signal callback interfaces

    /**
     * Signal callback interface for `marker-clicked`
     */
    export interface MarkerClickedSignalCallback {
        (doubleClick: boolean, location: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Markable {

    // Owm methods of IAnjuta-3.0.IAnjuta.Markable

    // Has conflict: deleteAllMarkers(marker: MarkableMarker): void
    // Has conflict: isMarkerSet(location: number, marker: MarkableMarker): boolean
    // Has conflict: locationFromHandle(handle: number): number
    // Has conflict: mark(location: number, marker: MarkableMarker, tooltip: string | null): number
    // Has conflict: unmark(location: number, marker: MarkableMarker): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Markable

    /**
     * Delete the `marker` from all locations.
     * @virtual 
     * @param marker Marker to delete.
     */
    deleteAllMarkers(marker: MarkableMarker): void
    /**
     * Check if the `marker` is set at the given `location`.
     * @virtual 
     * @param location Location to check.
     * @param marker Marker to check.
     */
    isMarkerSet(location: number, marker: MarkableMarker): boolean
    /**
     * Location where a marker is set could have moved by some operation in
     * the implementation. To retrieve the correct location where the marker
     * has moved, pass the handle retured by ianjuta_markable_mark() to this
     * method.
     * @virtual 
     * @param handle Handle of location.
     */
    locationFromHandle(handle: number): number
    /**
     * Marks the specified location with the given marker type. Location is
     * implementation depenedent. For example, for an editor location means
     * lines where markers are set.
     * @virtual 
     * @param location Location at which the marker to set.
     * @param marker Type of marker to be used
     * @param tooltip optional tooltip displayed with the marker
     */
    mark(location: number, marker: MarkableMarker, tooltip: string | null): number
    markerClicked(doubleClick: boolean, location: number): void
    /**
     * Clears the `marker` at given `location`.
     * @virtual 
     * @param location Location where the marker is set.
     * @param marker The marker to unset.
     */
    unmark(location: number, marker: MarkableMarker): void

    // Own signals of IAnjuta-3.0.IAnjuta.Markable

    connect(sigName: "marker-clicked", callback: Markable.MarkerClickedSignalCallback): number
    on(sigName: "marker-clicked", callback: Markable.MarkerClickedSignalCallback): number
    once(sigName: "marker-clicked", callback: Markable.MarkerClickedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "marker-clicked", location: number, ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Markable

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Markable extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Markable

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.Markable

    constructor(config?: Markable.ConstructorProperties) 
    _init(config?: Markable.ConstructorProperties): void
}

export module MessageManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MessageManager {

    // Owm methods of IAnjuta-3.0.IAnjuta.MessageManager

    // Has conflict: removeView(view: MessageView): void
    // Has conflict: setCurrentView(view: MessageView): void
    // Has conflict: setViewIcon(view: MessageView, icon: GdkPixbuf.PixbufAnimation): void
    // Has conflict: setViewIconFromStock(view: MessageView, icon: string): void
    // Has conflict: setViewTitle(view: MessageView, title: string): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.MessageManager

    /**
     * Remove view from the message-manager. The view
     * will become invalid.
     * @virtual 
     * @param view The view to remove
     */
    removeView(view: MessageView): void
    /**
     * Set view to be on top of the notebook.
     * @virtual 
     * @param view A message view
     */
    setCurrentView(view: MessageView): void
    /**
     * Sets the icon of view.
     * @virtual 
     * @param view A message view
     * @param icon Sets the icon of view.
     */
    setViewIcon(view: MessageView, icon: GdkPixbuf.PixbufAnimation): void
    /**
     * Sets the icon of view.
     * @virtual 
     * @param view A message view
     * @param icon Sets the icon of view.
     */
    setViewIconFromStock(view: MessageView, icon: string): void
    /**
     * Sets the title of view.
     * @virtual 
     * @param view A message view
     * @param title Sets the title of view.
     */
    setViewTitle(view: MessageView, title: string): void

    // Class property signals of IAnjuta-3.0.IAnjuta.MessageManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MessageManager extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.MessageManager

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.MessageManager

    constructor(config?: MessageManager.ConstructorProperties) 
    _init(config?: MessageManager.ConstructorProperties): void
}

export module MessageView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `buffer-flushed`
     */
    export interface BufferFlushedSignalCallback {
        (line: string): void
    }

    /**
     * Signal callback interface for `message-clicked`
     */
    export interface MessageClickedSignalCallback {
        (message: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MessageView {

    // Owm methods of IAnjuta-3.0.IAnjuta.MessageView

    // Has conflict: append(type: MessageViewType, summary: string, details: string): void
    // Has conflict: bufferAppend(text: string): void
    // Has conflict: clear(): void
    // Has conflict: getCurrentMessage(): string
    // Has conflict: selectNext(): void
    // Has conflict: selectPrevious(): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.MessageView

    /**
     * Append the message with summary displayed and details displayed as tooltip
     * @virtual 
     * @param type type of the message
     * @param summary summary of the message
     * @param details details of the message
     */
    append(type: MessageViewType, summary: string, details: string): void
    /**
     * Appends the text in buffer. Flushes the buffer where a newline is found.
     * by emiiting buffer_flushed signal. The string is expected to be utf8.
     * @virtual 
     * @param text text to show as message
     */
    bufferAppend(text: string): void
    bufferFlushed(line: string): void
    /**
     * Clear all messages in buffer
     * @virtual 
     */
    clear(): void
    /**
     * Get the currently selected message
     * @virtual 
     */
    getCurrentMessage(): string
    messageClicked(message: string): void
    /**
     * Select next message (of type INFO, WARNING or ERROR)
     * @virtual 
     */
    selectNext(): void
    /**
     * Select previous message
     * @virtual 
     */
    selectPrevious(): void

    // Own signals of IAnjuta-3.0.IAnjuta.MessageView

    connect(sigName: "buffer-flushed", callback: MessageView.BufferFlushedSignalCallback): number
    on(sigName: "buffer-flushed", callback: MessageView.BufferFlushedSignalCallback): number
    once(sigName: "buffer-flushed", callback: MessageView.BufferFlushedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "buffer-flushed", ...args: any[]): void
    connect(sigName: "message-clicked", callback: MessageView.MessageClickedSignalCallback): number
    on(sigName: "message-clicked", callback: MessageView.MessageClickedSignalCallback): number
    once(sigName: "message-clicked", callback: MessageView.MessageClickedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "message-clicked", ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.MessageView

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MessageView extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.MessageView

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.MessageView

    constructor(config?: MessageView.ConstructorProperties) 
    _init(config?: MessageView.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module PluginFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface PluginFactory {

    // Class property signals of IAnjuta-3.0.IAnjuta.PluginFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PluginFactory extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.PluginFactory

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.PluginFactory

    constructor(config?: PluginFactory.ConstructorProperties) 
    _init(config?: PluginFactory.ConstructorProperties): void
}

export module Preferences {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Preferences {

    // Owm methods of IAnjuta-3.0.IAnjuta.Preferences

    // Has conflict: merge(prefs: Anjuta.Preferences): void
    // Has conflict: unmerge(prefs: Anjuta.Preferences): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Preferences

    /**
     * When called, the plugin should install it's preferences
     * @virtual 
     * @param prefs AnjutaPreferences to install to
     */
    merge(prefs: Anjuta.Preferences): void
    /**
     * When called, the plugin should uninstall it's preferences
     * @virtual 
     * @param prefs AnjutaPreferences to install to
     */
    unmerge(prefs: Anjuta.Preferences): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Preferences

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Preferences extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Preferences

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.Preferences

    constructor(config?: Preferences.ConstructorProperties) 
    _init(config?: Preferences.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Print {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Print {

    // Owm methods of IAnjuta-3.0.IAnjuta.Print

    // Has conflict: print(): void
    // Has conflict: printPreview(): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Print

    /**
     * Print the plugin (the file in case of the editor). In most cases this will show
     * a print dialog
     * @virtual 
     */
    print(): void
    /**
     * Show print preview dialog
     * @virtual 
     */
    printPreview(): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Print

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Print extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Print

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.Print

    constructor(config?: Print.ConstructorProperties) 
    _init(config?: Print.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Project {

    // Signal callback interfaces

    /**
     * Signal callback interface for `file-changed`
     */
    export interface FileChangedSignalCallback {
        (node: object | null): void
    }

    /**
     * Signal callback interface for `node-changed`
     */
    export interface NodeChangedSignalCallback {
        (node: object | null, error: GLib.Error): void
    }

    /**
     * Signal callback interface for `node-loaded`
     */
    export interface NodeLoadedSignalCallback {
        (node: object | null, error: GLib.Error): void
    }

    /**
     * Signal callback interface for `node-saved`
     */
    export interface NodeSavedSignalCallback {
        (node: object | null, error: GLib.Error): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Project {

    // Owm methods of IAnjuta-3.0.IAnjuta.Project

    // Has conflict: addNodeAfter(parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file: Gio.File | null, name: string | null): Anjuta.ProjectNode
    // Has conflict: addNodeBefore(parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file: Gio.File | null, name: string | null): Anjuta.ProjectNode
    // Has conflict: getNodeInfo(): Anjuta.ProjectNodeInfo[]
    // Has conflict: getRoot(): Anjuta.ProjectNode
    // Has conflict: isLoaded(): boolean
    // Has conflict: loadNode(node: Anjuta.ProjectNode): boolean
    // Has conflict: removeNode(node: Anjuta.ProjectNode): boolean
    // Has conflict: removeProperty(node: Anjuta.ProjectNode, id: string, name: string | null): boolean
    // Has conflict: saveNode(node: Anjuta.ProjectNode): boolean
    // Has conflict: setProperty(node: Anjuta.ProjectNode, id: string, name: string | null, value: string): Anjuta.ProjectProperty | null

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Project

    /**
     * Create a new node and insert it after sibling
     * @virtual 
     * @param parent Parent
     * @param sibling Sibling
     * @param type Node type
     * @param file Optional file object for the node
     * @param name Optional name for the node
     */
    addNodeAfter(parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file: Gio.File | null, name: string | null): Anjuta.ProjectNode
    /**
     * Create a new node and insert it before sibling
     * @virtual 
     * @param parent Parent
     * @param sibling Sibling
     * @param type Node type
     * @param file Optional file object for the node
     * @param name Optional name for the node
     */
    addNodeBefore(parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file: Gio.File | null, name: string | null): Anjuta.ProjectNode
    fileChanged(node: object | null): void
    /**
     * Return a list of possible node;
     * @virtual 
     */
    getNodeInfo(): Anjuta.ProjectNodeInfo[]
    /**
     * Get root_node
     * @virtual 
     */
    getRoot(): Anjuta.ProjectNode
    /**
     * Return TRUE if the project is loaded;
     * @virtual 
     */
    isLoaded(): boolean
    /**
     * Reload a project node
     * @virtual 
     * @param node Project node to reload
     */
    loadNode(node: Anjuta.ProjectNode): boolean
    nodeChanged(node: object | null, error: GLib.Error): void
    nodeLoaded(node: object | null, error: GLib.Error): void
    nodeSaved(node: object | null, error: GLib.Error): void
    /**
     * Remove a node
     * @virtual 
     * @param node Node
     */
    removeNode(node: Anjuta.ProjectNode): boolean
    /**
     * Remove a property of the node
     * @virtual 
     * @param node Node
     * @param id Property
     * @param name Name for map property
     */
    removeProperty(node: Anjuta.ProjectNode, id: string, name: string | null): boolean
    /**
     * Save a project node
     * @virtual 
     * @param node Project node to save
     */
    saveNode(node: Anjuta.ProjectNode): boolean
    /**
     * Change a properties on node.
     * @virtual 
     * @param node Node
     * @param id Property
     * @param name Name for map property
     * @param value Value
     */
    setProperty(node: Anjuta.ProjectNode, id: string, name: string | null, value: string): Anjuta.ProjectProperty | null

    // Overloads of setProperty

    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty<T = any>(propertyName: string, value: T): void

    // Own signals of IAnjuta-3.0.IAnjuta.Project

    connect(sigName: "file-changed", callback: Project.FileChangedSignalCallback): number
    on(sigName: "file-changed", callback: Project.FileChangedSignalCallback): number
    once(sigName: "file-changed", callback: Project.FileChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "file-changed", ...args: any[]): void
    connect(sigName: "node-changed", callback: Project.NodeChangedSignalCallback): number
    on(sigName: "node-changed", callback: Project.NodeChangedSignalCallback): number
    once(sigName: "node-changed", callback: Project.NodeChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "node-changed", error: GLib.Error, ...args: any[]): void
    connect(sigName: "node-loaded", callback: Project.NodeLoadedSignalCallback): number
    on(sigName: "node-loaded", callback: Project.NodeLoadedSignalCallback): number
    once(sigName: "node-loaded", callback: Project.NodeLoadedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "node-loaded", error: GLib.Error, ...args: any[]): void
    connect(sigName: "node-saved", callback: Project.NodeSavedSignalCallback): number
    on(sigName: "node-saved", callback: Project.NodeSavedSignalCallback): number
    once(sigName: "node-saved", callback: Project.NodeSavedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "node-saved", error: GLib.Error, ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Project

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Project extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Project

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.Project

    constructor(config?: Project.ConstructorProperties) 
    _init(config?: Project.ConstructorProperties): void
}

export module ProjectBackend {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ProjectBackend {

    // Owm methods of IAnjuta-3.0.IAnjuta.ProjectBackend

    // Has conflict: newProject(file: Gio.File): Project
    // Has conflict: probe(directory: Gio.File): number

    // Own virtual methods of IAnjuta-3.0.IAnjuta.ProjectBackend

    /**
     * Create a new Anjuta project.
     * @virtual 
     * @param file Project file or directory
     */
    newProject(file: Gio.File): Project
    /**
     * Check if the directory contains a project supported by this
     * backend.
     * @virtual 
     * @param directory Project file or directory
     */
    probe(directory: Gio.File): number

    // Class property signals of IAnjuta-3.0.IAnjuta.ProjectBackend

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ProjectBackend extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.ProjectBackend

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.ProjectBackend

    constructor(config?: ProjectBackend.ConstructorProperties) 
    _init(config?: ProjectBackend.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module ProjectChooser {

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

export interface ProjectChooser {

    // Owm methods of IAnjuta-3.0.IAnjuta.ProjectChooser

    // Has conflict: getSelected(): Gio.File
    // Has conflict: setProjectModel(manager: ProjectManager, childType: Anjuta.ProjectNodeType): boolean

    // Own virtual methods of IAnjuta-3.0.IAnjuta.ProjectChooser

    changed(): void
    /**
     * Gets the currently selected element in the project chooser.
     * @virtual 
     */
    getSelected(): Gio.File
    /**
     * Initialize a project chooser button allowing to select a parent node
     * where you can add the nodes of type child_type.
     * As special cases with
     * <variablelist>
     *   <varlistentry>
     *     <term>ANJUTA_PROJECT_ROOT</term>
     *     <listitem><para>all nodes are included</para></listitem>
     *   </varlistentry>
     *   <varlistentry>
     *     <term>ANJUTA_PROJECT_MODULE</term>
     *     <listitem><para>only modules are included, this can be used
     *     to add a new package. While ANJUTA_PROJECT_PACKAGE allows you
     *     to select a target using a package.</para></listitem>
     *   </varlistentry>
     * </variablelist>
     * @virtual 
     * @param manager A project manager
     * @param childType Select one element type: source, group or target
     */
    setProjectModel(manager: ProjectManager, childType: Anjuta.ProjectNodeType): boolean

    // Own signals of IAnjuta-3.0.IAnjuta.ProjectChooser

    connect(sigName: "changed", callback: ProjectChooser.ChangedSignalCallback): number
    on(sigName: "changed", callback: ProjectChooser.ChangedSignalCallback): number
    once(sigName: "changed", callback: ProjectChooser.ChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.ProjectChooser

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ProjectChooser extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.ProjectChooser

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.ProjectChooser

    constructor(config?: ProjectChooser.ConstructorProperties) 
    _init(config?: ProjectChooser.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module ProjectManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `element-added`
     */
    export interface ElementAddedSignalCallback {
        (object: Gio.File): void
    }

    /**
     * Signal callback interface for `element-removed`
     */
    export interface ElementRemovedSignalCallback {
        (object: Gio.File): void
    }

    /**
     * Signal callback interface for `element-selected`
     */
    export interface ElementSelectedSignalCallback {
        (object: Gio.File): void
    }

    /**
     * Signal callback interface for `project-loaded`
     */
    export interface ProjectLoadedSignalCallback {
        (object: GLib.Error): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ProjectManager {

    // Owm methods of IAnjuta-3.0.IAnjuta.ProjectManager

    // Has conflict: addGroup(name: string, defaultGroup: Gio.File | null): Gio.File
    // Has conflict: addSource(name: string, defaultTarget: Gio.File | null): Gio.File
    // Has conflict: addSourceQuiet(name: string, target: Gio.File): Gio.File
    // Has conflict: addSources(names: string[], defaultTarget: Gio.File | null): Gio.File[]
    // Has conflict: addTarget(name: string, defaultGroup: Gio.File | null): Gio.File
    // Has conflict: getCapabilities(): number
    // Has conflict: getChildren(parent: Gio.File, childrenType: number): Gio.File[]
    // Has conflict: getCurrentProject(): Project
    // Has conflict: getElements(elementType: Anjuta.ProjectNodeType): Gio.File[]
    // Has conflict: getPackages(): string[]
    // Has conflict: getSelected(): Gio.File
    // Has conflict: getTargetType(target: Gio.File): Anjuta.ProjectNodeType
    // Has conflict: getTargets(targetType: Anjuta.ProjectNodeType): Gio.File[]
    // Has conflict: isOpen(): boolean
    // Has conflict: removeFile(file: Gio.File): boolean

    // Own virtual methods of IAnjuta-3.0.IAnjuta.ProjectManager

    /**
     * Prompts the user to add a new group to the project. The user can select
     * a parent group different from the one set as default.
     * @virtual 
     * @param name Group name or URI.
     * @param defaultGroup A #GFile corresponding to the default parent group or 				%NULL if don't care.
     */
    addGroup(name: string, defaultGroup: Gio.File | null): Gio.File
    /**
     * Prompts the user to add a file to the project. If the user selects
     * multiple files only the first source file is returned.
     * 
     * You can add non existing file. In this case the element_added
     * signal will be emitted with a non existing file. So it is
     * up to the caller to reemit this signal later when the file
     * is created.
     * @virtual 
     * @param name Source name or URI.
     * @param defaultTarget A #GFile corresponding to the default target or group or 				%NULL if you don't care.
     */
    addSource(name: string, defaultTarget: Gio.File | null): Gio.File
    /**
     * Adds a file to the project without prompting the user.
     * 
     * You can add non existing file. In this case the element_added
     * signal will be emitted with a non existing file. So it is
     * up to the caller to reemit this signal later when the file
     * is created.
     * @virtual 
     * @param name Source name or URI.
     * @param target A #GFile corresponding to the parent target or group.
     */
    addSourceQuiet(name: string, target: Gio.File): Gio.File
    /**
     * Prompts the user to add several files to the project. Depending on the
     * project backend, it can be possible that the source files must
     * be located in a particular directory.
     * 
     * You can add non existing file. In this case the element_added
     * signal will be emitted with a non existing file. So it is
     * up to the caller to reemit this signal later when the file
     * is created.
     * @virtual 
     * @param names Sources name or URI to add.
     * @param defaultTarget A #GFile corresponding to the default target or group or 				%NULL if don't care.
     */
    addSources(names: string[], defaultTarget: Gio.File | null): Gio.File[]
    /**
     * Prompts the user to add a new target to the project. The user can select
     * a parent group different from the one set as default.
     * @virtual 
     * @param name Target name or URI.
     * @param defaultGroup A #GFile corresponding to the default parent group or 				%NULL if don't care.
     */
    addTarget(name: string, defaultGroup: Gio.File | null): Gio.File
    elementAdded(element: Gio.File): void
    elementRemoved(element: Gio.File): void
    elementSelected(element: Gio.File): void
    /**
     * Gets the capabilites of project whether it can add group, target
     * sources etc.
     * @virtual 
     */
    getCapabilities(): number
    /**
     * Recursively gets the list of all children below the corresponding
     * parent having the specify type.
     * @virtual 
     * @param parent A #GFile corresponding to the parent.
     * @param childrenType Select one element type: source, group or target
     */
    getChildren(parent: Gio.File, childrenType: number): Gio.File[]
    /**
     * Gets the current project.
     * @virtual 
     */
    getCurrentProject(): Project
    /**
     * Get a list of all elements of this type in the project.
     * @virtual 
     * @param elementType Select one element type: source, group or target
     */
    getElements(elementType: Anjuta.ProjectNodeType): Gio.File[]
    getPackages(): string[]
    /**
     * Gets the currently selected element in the project manager view.
     * @virtual 
     */
    getSelected(): Gio.File
    /**
     * Get the type of the corresponding target: program, library...
     * @virtual 
     * @param target A #GFile corresponding to a target
     */
    getTargetType(target: Gio.File): Anjuta.ProjectNodeType
    /**
     * Get a list of targets in the project with the corresponding type.
     * @virtual 
     * @param targetType type of the target
     */
    getTargets(targetType: Anjuta.ProjectNodeType): Gio.File[]
    /**
     * Gets whether a project is currently opened.
     * @virtual 
     */
    isOpen(): boolean
    projectLoaded(error: GLib.Error): void
    /**
     * Remove a source file from the project. If the file is used in several
     * targets, it is removed from all targets. The file could be removed from
     * the disk.
     * @virtual 
     * @param file A #GFile that will be removed from the project
     */
    removeFile(file: Gio.File): boolean

    // Own signals of IAnjuta-3.0.IAnjuta.ProjectManager

    connect(sigName: "element-added", callback: ProjectManager.ElementAddedSignalCallback): number
    on(sigName: "element-added", callback: ProjectManager.ElementAddedSignalCallback): number
    once(sigName: "element-added", callback: ProjectManager.ElementAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "element-added", ...args: any[]): void
    connect(sigName: "element-removed", callback: ProjectManager.ElementRemovedSignalCallback): number
    on(sigName: "element-removed", callback: ProjectManager.ElementRemovedSignalCallback): number
    once(sigName: "element-removed", callback: ProjectManager.ElementRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "element-removed", ...args: any[]): void
    connect(sigName: "element-selected", callback: ProjectManager.ElementSelectedSignalCallback): number
    on(sigName: "element-selected", callback: ProjectManager.ElementSelectedSignalCallback): number
    once(sigName: "element-selected", callback: ProjectManager.ElementSelectedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "element-selected", ...args: any[]): void
    connect(sigName: "project-loaded", callback: ProjectManager.ProjectLoadedSignalCallback): number
    on(sigName: "project-loaded", callback: ProjectManager.ProjectLoadedSignalCallback): number
    once(sigName: "project-loaded", callback: ProjectManager.ProjectLoadedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "project-loaded", ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.ProjectManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ProjectManager extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.ProjectManager

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.ProjectManager

    constructor(config?: ProjectManager.ConstructorProperties) 
    _init(config?: ProjectManager.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Provider {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Provider {

    // Owm methods of IAnjuta-3.0.IAnjuta.Provider

    // Has conflict: activate(iter: Iterable, data: object | null): void
    // Has conflict: getName(): string
    // Has conflict: getStartIter(): Iterable
    // Has conflict: populate(iter: Iterable): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Provider

    /**
     * Show completion for the context at position `iter`
     * @virtual 
     * @param iter position where the completion occurs
     * @param data data assigned to the proposal
     */
    activate(iter: Iterable, data: object | null): void
    /**
     * Return a (translatable) name for the provider
     * @virtual 
     */
    getName(): string
    /**
     * Get the iter where the current completion started
     * @virtual 
     */
    getStartIter(): Iterable
    /**
     * Show completion for the context at position `iter`. The provider should
     * call ianjuta_editor_assist_proposals here to add proposals to the list.
     * 
     * Note that this is called after every character typed and the list of proposals
     * has to be completely renewed.
     * @virtual 
     * @param iter the text iter where the provider should be populated
     */
    populate(iter: Iterable): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Provider

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Provider extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Provider

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.Provider

    constructor(config?: Provider.ConstructorProperties) 
    _init(config?: Provider.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module SnippetsManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SnippetsManager {

    // Owm methods of IAnjuta-3.0.IAnjuta.SnippetsManager

    // Has conflict: insert(key: string, editingSession: boolean): boolean

    // Own virtual methods of IAnjuta-3.0.IAnjuta.SnippetsManager

    /**
     * Insert snippet in the current editor.
     * @virtual 
     * @param key Trigger-key of the snippet
     * @param editingSession If after inserting the snippet there should be an editing session. Mark as FALSE if not interested in the dynamic capabilities of the snippet.
     */
    insert(key: string, editingSession: boolean): boolean

    // Class property signals of IAnjuta-3.0.IAnjuta.SnippetsManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SnippetsManager extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.SnippetsManager

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.SnippetsManager

    constructor(config?: SnippetsManager.ConstructorProperties) 
    _init(config?: SnippetsManager.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Stream {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Stream {

    // Owm methods of IAnjuta-3.0.IAnjuta.Stream

    // Has conflict: open(stream: object | null): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Stream

    /**
     * The implementor opens the given stream.
     * @virtual 
     * @param stream Stream to open from.
     */
    open(stream: object | null): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Stream

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Stream extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Stream

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.Stream

    constructor(config?: Stream.ConstructorProperties) 
    _init(config?: Stream.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module StreamLoader {

    // Constructor properties interface

    export interface ConstructorProperties extends Loader.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface StreamLoader extends Loader {

    // Owm methods of IAnjuta-3.0.IAnjuta.StreamLoader

    // Has conflict: peekInterface(stream: object | null): string

    // Own virtual methods of IAnjuta-3.0.IAnjuta.StreamLoader

    /**
     * Peeks the stream and determines the interface which can load
     * this stream.
     * @virtual 
     * @param stream Stream to load
     */
    peekInterface(stream: object | null): string

    // Class property signals of IAnjuta-3.0.IAnjuta.StreamLoader

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class StreamLoader extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.StreamLoader

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.StreamLoader

    constructor(config?: StreamLoader.ConstructorProperties) 
    _init(config?: StreamLoader.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module StreamSavable {

    // Constructor properties interface

    export interface ConstructorProperties extends Stream.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface StreamSavable extends Stream {

    // Owm methods of IAnjuta-3.0.IAnjuta.StreamSavable

    // Has conflict: save(stream: object | null): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.StreamSavable

    save(stream: object | null): void

    // Class property signals of IAnjuta-3.0.IAnjuta.StreamSavable

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class StreamSavable extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.StreamSavable

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.StreamSavable

    constructor(config?: StreamSavable.ConstructorProperties) 
    _init(config?: StreamSavable.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Symbol {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Symbol {

    // Owm methods of IAnjuta-3.0.IAnjuta.Symbol

    // Has conflict: getBoolean(field: SymbolField): boolean
    // Has conflict: getIcon(): GdkPixbuf.Pixbuf
    // Has conflict: getInt(field: SymbolField): number
    // Has conflict: getString(field: SymbolField): string
    // Has conflict: getSymType(): SymbolType

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Symbol

    /**
     * Retreives the boolean value of a boolean `field`.
     * @virtual 
     * @param field The field to retrieve.
     */
    getBoolean(field: SymbolField): boolean
    /**
     * A convenience method to get a small icon (16x16) representing the symbol
     * kind. You *need* a query with fields #IANJUTA_SYMBOL_FIELD_ACCESS and
     * #IANJUTA_SYMBOL_FIELD_KIND selected.
     * @virtual 
     */
    getIcon(): GdkPixbuf.Pixbuf
    /**
     * Retreives the integer value of an integer `field`.
     * @virtual 
     * @param field The field to retrieve.
     */
    getInt(field: SymbolField): number
    /**
     * Retreives the string value of a string `field`.
     * @virtual 
     * @param field The field to retrieve.
     */
    getString(field: SymbolField): string
    /**
     * A convenience method to get value of #IANJUTA_SYMBOL_FIELD_TYPE
     * field typecasted to IAnjutaSymbolType. Numerical value is unchanged.
     * @virtual 
     */
    getSymType(): SymbolType

    // Class property signals of IAnjuta-3.0.IAnjuta.Symbol

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Symbol extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Symbol

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.Symbol

    constructor(config?: Symbol.ConstructorProperties) 
    _init(config?: Symbol.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module SymbolManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `prj-scan-end`
     */
    export interface PrjScanEndSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `sys-scan-end`
     */
    export interface SysScanEndSignalCallback {
        (object: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SymbolManager {

    // Owm methods of IAnjuta-3.0.IAnjuta.SymbolManager

    // Has conflict: activatePackage(pkgName: string, pkgVersion: string): boolean
    // Has conflict: deactivateAll(): void
    // Has conflict: deactivatePackage(pkgName: string, pkgVersion: string): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.SymbolManager

    /**
     * Activates the package for searches in the global symbol database.
     * @virtual 
     * @param pkgName Name of the package to activate. The colon char must be avoided.
     * @param pkgVersion Version of the package. The colon char must be avoided.
     */
    activatePackage(pkgName: string, pkgVersion: string): boolean
    /**
     * Deactivates all activate packages
     * @virtual 
     */
    deactivateAll(): void
    /**
     * Deactivates the package if it was found. If package is NULL, deactivate all
     * packages.
     * @virtual 
     * @param pkgName name of the package. The colon char must be avoided.
     * @param pkgVersion Version of the package. The colon char must be avoided.
     */
    deactivatePackage(pkgName: string, pkgVersion: string): void
    prjScanEnd(processId: number): void
    sysScanEnd(processId: number): void

    // Own signals of IAnjuta-3.0.IAnjuta.SymbolManager

    connect(sigName: "prj-scan-end", callback: SymbolManager.PrjScanEndSignalCallback): number
    on(sigName: "prj-scan-end", callback: SymbolManager.PrjScanEndSignalCallback): number
    once(sigName: "prj-scan-end", callback: SymbolManager.PrjScanEndSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "prj-scan-end", ...args: any[]): void
    connect(sigName: "sys-scan-end", callback: SymbolManager.SysScanEndSignalCallback): number
    on(sigName: "sys-scan-end", callback: SymbolManager.SysScanEndSignalCallback): number
    once(sigName: "sys-scan-end", callback: SymbolManager.SysScanEndSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "sys-scan-end", ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.SymbolManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SymbolManager extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.SymbolManager

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.SymbolManager

    constructor(config?: SymbolManager.ConstructorProperties) 
    _init(config?: SymbolManager.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module SymbolQuery {

    // Signal callback interfaces

    /**
     * Signal callback interface for `async-result`
     */
    export interface AsyncResultSignalCallback {
        (object: GObject.Object): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SymbolQuery {

    // Owm methods of IAnjuta-3.0.IAnjuta.SymbolQuery

    // Has conflict: cancel(): void
    // Has conflict: setFields(nFields: number, fields: SymbolField): void
    // Has conflict: setFileScope(filescopeSearch: SymbolQueryFileScope): void
    // Has conflict: setFilters(filters: SymbolType, includeTypes: boolean): void
    // Has conflict: setGroupBy(field: SymbolField): void
    // Has conflict: setLimit(limit: number): void
    // Has conflict: setMode(mode: SymbolQueryMode): void
    // Has conflict: setOffset(offset: number): void
    // Has conflict: setOrderBy(field: SymbolField): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.SymbolQuery

    asyncResult(result: GObject.Object): void
    cancel(): void
    /**
     * Sets the fields of Query.
     * @virtual 
     * @param nFields Then number of fields to retrieve.
     * @param fields The fields to retrieve in the query. The array length must   be `n_fields`.
     */
    setFields(nFields: number, fields: SymbolField): void
    /**
     * Sets the filescope search of Query.
     * @virtual 
     * @param filescopeSearch The filescope to search.
     */
    setFileScope(filescopeSearch: SymbolQueryFileScope): void
    /**
     * Sets the bit mask of symbol type filters. if `include_types` is TRUE,
     * symbols satisfying the given symbol types are selected, otherwise
     * they are excluded.
     * @virtual 
     * @param filters The mode of query.
     * @param includeTypes TRUE if filter is positive, FALSE if reversed.
     */
    setFilters(filters: SymbolType, includeTypes: boolean): void
    /**
     * Sets the field with which result of query is grouped. As a result
     * there will be no duplicates of with this field.
     * @virtual 
     * @param field The field to group results.
     */
    setGroupBy(field: SymbolField): void
    /**
     * Sets the limit of Query results. No more than `limit` results are
     * returned.
     * @virtual 
     * @param limit The limit of query.
     */
    setLimit(limit: number): void
    /**
     * Sets the mode of Query.
     * @virtual 
     * @param mode The mode of query.
     */
    setMode(mode: SymbolQueryMode): void
    /**
     * Sets the offset index of Query results.
     * @virtual 
     * @param offset Offset of the resultset.
     */
    setOffset(offset: number): void
    /**
     * Sets the field with which result of query is ordered.
     * @virtual 
     * @param field The field to order the result.
     */
    setOrderBy(field: SymbolField): void

    // Own signals of IAnjuta-3.0.IAnjuta.SymbolQuery

    connect(sigName: "async-result", callback: SymbolQuery.AsyncResultSignalCallback): number
    on(sigName: "async-result", callback: SymbolQuery.AsyncResultSignalCallback): number
    once(sigName: "async-result", callback: SymbolQuery.AsyncResultSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "async-result", ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.SymbolQuery

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SymbolQuery extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.SymbolQuery

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.SymbolQuery

    constructor(config?: SymbolQuery.ConstructorProperties) 
    _init(config?: SymbolQuery.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Terminal {

    // Signal callback interfaces

    /**
     * Signal callback interface for `child-exited`
     */
    export interface ChildExitedSignalCallback {
        (object: number, p0: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Terminal {

    // Owm methods of IAnjuta-3.0.IAnjuta.Terminal

    // Has conflict: executeCommand(directory: string, command: string, environment: string[]): number

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Terminal

    childExited(pid: number, status: number): void
    /**
     * Run the command in a terminal, setting the working directory
     * and environment variables.
     * @virtual 
     * @param directory Working directory
     * @param command Command executed followed by arguments
     * @param environment List of additional environment variables
     */
    executeCommand(directory: string, command: string, environment: string[]): number

    // Own signals of IAnjuta-3.0.IAnjuta.Terminal

    connect(sigName: "child-exited", callback: Terminal.ChildExitedSignalCallback): number
    on(sigName: "child-exited", callback: Terminal.ChildExitedSignalCallback): number
    once(sigName: "child-exited", callback: Terminal.ChildExitedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "child-exited", p0: number, ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Terminal

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Terminal extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Terminal

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.Terminal

    constructor(config?: Terminal.ConstructorProperties) 
    _init(config?: Terminal.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Todo {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Todo {

    // Owm methods of IAnjuta-3.0.IAnjuta.Todo

    // Has conflict: load(file: Gio.File): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Todo

    load(file: Gio.File): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Todo

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Todo extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Todo

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.Todo

    constructor(config?: Todo.ConstructorProperties) 
    _init(config?: Todo.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Vcs {

    // Signal callback interfaces

    /**
     * Signal callback interface for `status-changed`
     */
    export interface StatusChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Vcs {

    // Owm methods of IAnjuta-3.0.IAnjuta.Vcs

    // Has conflict: add(files: Gio.File[], notify: Anjuta.AsyncNotify): void
    // Has conflict: checkout(repositoryLocation: string, dest: Gio.File, cancel: Gio.Cancellable | null, notify: Anjuta.AsyncNotify): void
    // Has conflict: remove(files: Gio.File[], notify: Anjuta.AsyncNotify): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Vcs

    /**
     * Add files to the VCS repository.
     * @virtual 
     * @param files List of List of files, represented as #Gfile objects, to add
     * @param notify #AnjutaAsyncNotify object for finish notification and error reporting.
     */
    add(files: Gio.File[], notify: Anjuta.AsyncNotify): void
    /**
     * Check out a copy of a code repository.
     * @virtual 
     * @param repositoryLocation Location of repository to check out
     * @param dest Destination of checked out copy
     * @param cancel An optional #GCancellable object to cancel the operation, or NULL
     * @param notify #AnjutaAsyncNotify object for finish notification and error reporting.
     */
    checkout(repositoryLocation: string, dest: Gio.File, cancel: Gio.Cancellable | null, notify: Anjuta.AsyncNotify): void
    /**
     * Remove files from the VCS repository.
     * @virtual 
     * @param files List of files, represented as #Gfile objects, to remove
     * @param notify #AnjutaAsyncNotify object for finish notification and error reporting.
     */
    remove(files: Gio.File[], notify: Anjuta.AsyncNotify): void
    statusChanged(): void

    // Own signals of IAnjuta-3.0.IAnjuta.Vcs

    connect(sigName: "status-changed", callback: Vcs.StatusChangedSignalCallback): number
    on(sigName: "status-changed", callback: Vcs.StatusChangedSignalCallback): number
    once(sigName: "status-changed", callback: Vcs.StatusChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "status-changed", ...args: any[]): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Vcs

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Vcs extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Vcs

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.Vcs

    constructor(config?: Vcs.ConstructorProperties) 
    _init(config?: Vcs.ConstructorProperties): void
}

export module Wizard {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Wizard {

    // Owm methods of IAnjuta-3.0.IAnjuta.Wizard

    // Has conflict: activate(): void

    // Own virtual methods of IAnjuta-3.0.IAnjuta.Wizard

    /**
     * Called when the wizard should start after some user action
     * @virtual 
     */
    activate(): void

    // Class property signals of IAnjuta-3.0.IAnjuta.Wizard

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Wizard extends GObject.Object {

    // Own properties of IAnjuta-3.0.IAnjuta.Wizard

    static name: string

    // Constructors of IAnjuta-3.0.IAnjuta.Wizard

    constructor(config?: Wizard.ConstructorProperties) 
    _init(config?: Wizard.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export interface BuildableIface {

    // Own fields of IAnjuta-3.0.IAnjuta.BuildableIface

    gIface: GObject.TypeInterface
    build: (obj: Buildable, uri: string) => void
    clean: (obj: Buildable, uri: string) => void
    configure: (obj: Buildable, uri: string) => void
    execute: (obj: Buildable, uri: string) => void
    generate: (obj: Buildable, uri: string) => void
    getCommand: (obj: Buildable, commandId: BuildableCommand) => string
    install: (obj: Buildable, uri: string) => void
    resetCommands: (obj: Buildable) => void
    setCommand: (obj: Buildable, commandId: BuildableCommand, command: string) => void
}

export abstract class BuildableIface {

    // Own properties of IAnjuta-3.0.IAnjuta.BuildableIface

    static name: string
}

export interface BuilderIface {

    // Own fields of IAnjuta-3.0.IAnjuta.BuilderIface

    gIface: GObject.TypeInterface
    cancel: (obj: Builder, handle: BuilderHandle) => void
    getUriConfiguration: (obj: Builder, uri: string) => string
    listConfiguration: (obj: Builder) => string[]
}

export abstract class BuilderIface {

    // Own properties of IAnjuta-3.0.IAnjuta.BuilderIface

    static name: string
}

export interface DebugManagerIface {

    // Own fields of IAnjuta-3.0.IAnjuta.DebugManagerIface

    gIface: GObject.TypeInterface
    breakpointChanged: (obj: DebugManager, breakpoint: DebuggerBreakpointItem) => void
    debuggerStarted: (obj: DebugManager) => void
    debuggerStopped: (obj: DebugManager, err: GLib.Error) => void
    frameChanged: (obj: DebugManager, frame: number, thread: number) => void
    locationChanged: (obj: DebugManager, address: number, uri: string, line: number) => void
    programExited: (obj: DebugManager) => void
    programLoaded: (obj: DebugManager) => void
    programMoved: (obj: DebugManager, pid: number, tid: number, address: number, file: string, line: number) => void
    programRunning: (obj: DebugManager) => void
    programStarted: (obj: DebugManager) => void
    programStopped: (obj: DebugManager) => void
    programUnloaded: (obj: DebugManager) => void
    sharedlibEvent: (obj: DebugManager) => void
    signalReceived: (obj: DebugManager, name: string, description: string) => void
    quit: (obj: DebugManager) => boolean
    start: (obj: DebugManager, uri: string) => boolean
    startRemote: (obj: DebugManager, server: string, uri: string) => boolean
}

export abstract class DebugManagerIface {

    // Own properties of IAnjuta-3.0.IAnjuta.DebugManagerIface

    static name: string
}

export interface DebuggerBreakpointIface {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerBreakpointIface

    gIface: DebuggerIface
    implementBreakpoint: (obj: DebuggerBreakpoint) => number
}

export abstract class DebuggerBreakpointIface {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerBreakpointIface

    static name: string
}

export interface DebuggerBreakpointItem {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerBreakpointItem

    /**
     * type see #IAnjutaBreakpointType enumeration
     * @field 
     */
    type: number
    /**
     * unique identifier
     * @field 
     */
    id: number
    /**
     * source file where is the breakpoint
     * @field 
     */
    file: string
    /**
     * corresponding source file line number
     * @field 
     */
    line: number
    /**
     * corresponding function name
     * @field 
     */
    function_: string
    /**
     * corresponding address
     * @field 
     */
    address: number
    /**
     * TRUE if the breakpoint is enabled
     * @field 
     */
    enable: boolean
    /**
     * TRUE if the breakpoint is ignored
     * @field 
     */
    ignore: number
    /**
     * Count how many time the breakpoint is triggered
     * @field 
     */
    times: number
    /**
     * Additional condition for triggering the breakpoint
     * @field 
     */
    condition: string
    /**
     * TRUE if the breakpoint is temporary
     * @field 
     */
    temporary: boolean
    /**
     * TRUE if the breakpoint is pending
     * @field 
     */
    pending: boolean
}

/**
 * This structure keeps all information about a breakpoint.
 * @record 
 */
export class DebuggerBreakpointItem {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerBreakpointItem

    static name: string
}

export interface DebuggerFrame {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerFrame

    /**
     * Thread identifier.
     * @field 
     */
    thread: number
    /**
     * Level of the frame, 0 is the topmost one.
     * @field 
     */
    level: number
    /**
     * List of argument of the caller.
     * @field 
     */
    args: string
    /**
     * Source file name where is the program counter.
     * @field 
     */
    file: string
    /**
     * Line number in the file above.
     * @field 
     */
    line: number
    /**
     * Function name where is the program counter.
     * @field 
     */
    function_: string
    /**
     * Library name where is the program counter.
     * @field 
     */
    library: string
    /**
     * Address of the program counter.
     * @field 
     */
    address: number
}

/**
 * This structure keeps all information about a stack frame.
 * @record 
 */
export class DebuggerFrame {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerFrame

    static name: string
}

export interface DebuggerIface {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerIface

    gIface: GObject.TypeInterface
    debuggerReady: (obj: Debugger, state: DebuggerState) => void
    debuggerStarted: (obj: Debugger) => void
    debuggerStopped: (obj: Debugger, err: GLib.Error) => void
    frameChanged: (obj: Debugger, frame: number, thread: number) => void
    programExited: (obj: Debugger) => void
    programLoaded: (obj: Debugger) => void
    programMoved: (obj: Debugger, pid: number, tid: number, address: number, file: string, line: number) => void
    programRunning: (obj: Debugger) => void
    programStopped: (obj: Debugger) => void
    sharedlibEvent: (obj: Debugger) => void
    signalReceived: (obj: Debugger, name: string, description: string) => void
    abort: (obj: Debugger) => boolean
    attach: (obj: Debugger, pid: number, sourceSearchDirectories: string[]) => boolean
    // Has conflict: connect: (obj: Debugger, server: string, args: string, terminal: boolean, stop: boolean) => boolean
    disableLog: (obj: Debugger) => void
    enableLog: (obj: Debugger, log: MessageView) => void
    exit: (obj: Debugger) => boolean
    getState: (obj: Debugger) => DebuggerState
    handleSignal: (obj: Debugger, name: string, stop: boolean, print: boolean, ignore: boolean) => boolean
    interrupt: (obj: Debugger) => boolean
    load: (obj: Debugger, file: string, mimeType: string, sourceSearchDirectories: string[]) => boolean
    quit: (obj: Debugger) => boolean
    run: (obj: Debugger) => boolean
    runFrom: (obj: Debugger, file: string, line: number) => boolean
    runTo: (obj: Debugger, file: string, line: number) => boolean
    sendCommand: (obj: Debugger, command: string) => boolean
    setEnvironment: (obj: Debugger, env: string) => boolean
    setFrame: (obj: Debugger, frame: number) => boolean
    setThread: (obj: Debugger, thread: number) => boolean
    setWorkingDirectory: (obj: Debugger, dir: string) => boolean
    start: (obj: Debugger, args: string, terminal: boolean, stop: boolean) => boolean
    stepIn: (obj: Debugger) => boolean
    stepOut: (obj: Debugger) => boolean
    stepOver: (obj: Debugger) => boolean
    unload: (obj: Debugger) => boolean
}

export abstract class DebuggerIface {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerIface

    static name: string
}

export interface DebuggerInstructionALine {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerInstructionALine

    /**
     * Address of the line
     * @field 
     */
    address: number
    /**
     * Optional label
     * @field 
     */
    label: string
    /**
     * Diassembled instruction on the line
     * @field 
     */
    text: string
}

/**
 * Defines a disassembled line
 * @record 
 */
export class DebuggerInstructionALine {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerInstructionALine

    static name: string
}

export interface DebuggerInstructionDisassembly {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerInstructionDisassembly

    /**
     * Number of line
     * @field 
     */
    size: number
    /**
     * Array of all lines
     * @field 
     */
    data: DebuggerInstructionALine[]
}

/**
 * Represents a block of diassembled instructions
 * @record 
 */
export class DebuggerInstructionDisassembly {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerInstructionDisassembly

    static name: string
}

export interface DebuggerInstructionIface {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerInstructionIface

    gIface: DebuggerIface
    runFromAddress: (obj: DebuggerInstruction, address: number) => boolean
    runToAddress: (obj: DebuggerInstruction, address: number) => boolean
    stepInInstruction: (obj: DebuggerInstruction) => boolean
    stepOverInstruction: (obj: DebuggerInstruction) => boolean
}

export abstract class DebuggerInstructionIface {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerInstructionIface

    static name: string
}

export interface DebuggerMemoryBlock {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerMemoryBlock

    address: number
    length: number
    data: string
}

export class DebuggerMemoryBlock {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerMemoryBlock

    static name: string
}

export interface DebuggerMemoryIface {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerMemoryIface

    gIface: DebuggerIface
}

export abstract class DebuggerMemoryIface {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerMemoryIface

    static name: string
}

export interface DebuggerRegisterData {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerRegisterData

    /**
     * register identifier
     * @field 
     */
    num: number
    /**
     * register name
     * @field 
     */
    name: string
    /**
     * register value
     * @field 
     */
    value: string
}

/**
 * Defines a register data.
 * @record 
 */
export class DebuggerRegisterData {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerRegisterData

    static name: string
}

export interface DebuggerRegisterIface {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerRegisterIface

    gIface: DebuggerIface
    writeRegister: (obj: DebuggerRegister, value: DebuggerRegisterData) => boolean
}

export abstract class DebuggerRegisterIface {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerRegisterIface

    static name: string
}

export interface DebuggerVariableIface {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerVariableIface

    gIface: DebuggerIface
    assign: (obj: DebuggerVariable, name: string, value: string) => boolean
    destroy: (obj: DebuggerVariable, name: string) => boolean
}

export abstract class DebuggerVariableIface {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerVariableIface

    static name: string
}

export interface DebuggerVariableObject {

    // Own fields of IAnjuta-3.0.IAnjuta.DebuggerVariableObject

    /**
     * unique variable object name created by backend
     * @field 
     */
    name: string
    /**
     * corresponding variable name or expression
     * @field 
     */
    expression: string
    /**
     * variable type
     * @field 
     */
    type: string
    /**
     * variable value
     * @field 
     */
    value: string
    /**
     * TRUE if the variable has changed
     * @field 
     */
    changed: boolean
    /**
     * TRUE if the variable is outside current scope
     * @field 
     */
    exited: boolean
    /**
     * TRUE if the variable has been removed
     * @field 
     */
    deleted: boolean
    /**
     * Number of variable children, -1 if unknown
     * @field 
     */
    children: number
    /**
     * TRUE if the children value is wrong
     * @field 
     */
    hasMore: boolean
}

/**
 * Defines a variable object.
 * @record 
 */
export class DebuggerVariableObject {

    // Own properties of IAnjuta-3.0.IAnjuta.DebuggerVariableObject

    static name: string
}

export interface DocumentIface {

    // Own fields of IAnjuta-3.0.IAnjuta.DocumentIface

    gIface: GObject.TypeInterface
    updateUi: (obj: Document) => void
    beginUndoAction: (obj: Document) => void
    canRedo: (obj: Document) => boolean
    canUndo: (obj: Document) => boolean
    clear: (obj: Document) => void
    copy: (obj: Document) => void
    cut: (obj: Document) => void
    endUndoAction: (obj: Document) => void
    getFilename: (obj: Document) => string
    grabFocus: (obj: Document) => void
    paste: (obj: Document) => void
    redo: (obj: Document) => void
    undo: (obj: Document) => void
}

export abstract class DocumentIface {

    // Own properties of IAnjuta-3.0.IAnjuta.DocumentIface

    static name: string
}

export interface DocumentManagerIface {

    // Own fields of IAnjuta-3.0.IAnjuta.DocumentManagerIface

    gIface: GObject.TypeInterface
    documentAdded: (obj: DocumentManager, doc: Document) => void
    documentRemoved: (obj: DocumentManager, doc: Document) => void
    addBookmark: (obj: DocumentManager, file: Gio.File, line: number) => void
    addBuffer: (obj: DocumentManager, name: string, content: string) => Editor
    addDocument: (obj: DocumentManager, document: Document) => void
    findDocumentWithFile: (obj: DocumentManager, file: Gio.File) => Document
    getCurrentDocument: (obj: DocumentManager) => Document
    getDocWidgets: (obj: DocumentManager) => Gtk.Widget[]
    getFile: (obj: DocumentManager, filename: string) => Gio.File
    gotoFileLine: (obj: DocumentManager, file: Gio.File, lineno: number) => Editor
    gotoFileLineMark: (obj: DocumentManager, file: Gio.File, lineno: number, mark: boolean) => Editor
    removeDocument: (obj: DocumentManager, document: Document, saveBefore: boolean) => boolean
    setCurrentDocument: (obj: DocumentManager, document: Document) => void
}

export abstract class DocumentManagerIface {

    // Own properties of IAnjuta-3.0.IAnjuta.DocumentManagerIface

    static name: string
}

export interface EditorAssistIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorAssistIface

    gIface: EditorIface
    cancelled: (obj: EditorAssist) => void
    add: (obj: EditorAssist, provider: Provider) => void
    invoke: (obj: EditorAssist, provider: Provider) => void
    proposals: (obj: EditorAssist, provider: Provider, proposals: EditorAssistProposal[], preWord: string, finished: boolean) => void
    remove: (obj: EditorAssist, provider: Provider) => void
}

export abstract class EditorAssistIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorAssistIface

    static name: string
}

export interface EditorAssistProposal {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorAssistProposal

    label: string
    markup: string
    info: string
    text: string
    icon: GdkPixbuf.Pixbuf
    data: object
}

export class EditorAssistProposal {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorAssistProposal

    static name: string
}

export interface EditorCellIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorCellIface

    gIface: GObject.TypeInterface
    getAttribute: (obj: EditorCell) => EditorAttribute
    getChar: (obj: EditorCell, charIndex: number) => number
    getCharacter: (obj: EditorCell) => string
    getLength: (obj: EditorCell) => number
}

export abstract class EditorCellIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorCellIface

    static name: string
}

export interface EditorCellStyleIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorCellStyleIface

    gIface: EditorCellIface
    getBackgroundColor: (obj: EditorCellStyle) => string
    getColor: (obj: EditorCellStyle) => string
    getFontDescription: (obj: EditorCellStyle) => string
}

export abstract class EditorCellStyleIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorCellStyleIface

    static name: string
}

export interface EditorCommentIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorCommentIface

    gIface: EditorIface
    block: (obj: EditorComment) => void
    box: (obj: EditorComment) => void
    stream: (obj: EditorComment) => void
}

export abstract class EditorCommentIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorCommentIface

    static name: string
}

export interface EditorConvertIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorConvertIface

    gIface: EditorIface
    toLower: (obj: EditorConvert, startPosition: Iterable, endPosition: Iterable) => void
    toUpper: (obj: EditorConvert, startPosition: Iterable, endPosition: Iterable) => void
}

export abstract class EditorConvertIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorConvertIface

    static name: string
}

export interface EditorFactoryIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorFactoryIface

    gIface: GObject.TypeInterface
}

export abstract class EditorFactoryIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorFactoryIface

    static name: string
}

export interface EditorFoldsIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorFoldsIface

    gIface: EditorIface
    closeAll: (obj: EditorFolds) => void
    openAll: (obj: EditorFolds) => void
    toggleCurrent: (obj: EditorFolds) => void
}

export abstract class EditorFoldsIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorFoldsIface

    static name: string
}

export interface EditorGladeSignalIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorGladeSignalIface

    gIface: EditorIface
    drop: (obj: EditorGladeSignal, iterator: Iterable, signalData: string) => void
    dropPossible: (obj: EditorGladeSignal, iterator: Iterable) => boolean
}

export abstract class EditorGladeSignalIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorGladeSignalIface

    static name: string
}

export interface EditorGotoIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorGotoIface

    gIface: EditorIface
    endBlock: (obj: EditorGoto) => void
    matchingBrace: (obj: EditorGoto) => void
    startBlock: (obj: EditorGoto) => void
}

export abstract class EditorGotoIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorGotoIface

    static name: string
}

export interface EditorHoverIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorHoverIface

    gIface: EditorIface
    hoverLeave: (obj: EditorHover, position: Iterable) => void
    hoverOver: (obj: EditorHover, position: Iterable) => void
    display: (obj: EditorHover, position: Iterable, info: string) => void
}

export abstract class EditorHoverIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorHoverIface

    static name: string
}

export interface EditorIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorIface

    gIface: GObject.TypeInterface
    backspace: (obj: Editor) => void
    changed: (obj: Editor, position: Iterable, added: boolean, length: number, lines: number, text: string) => void
    charAdded: (obj: Editor, position: Iterable, ch: number) => void
    codeChanged: (obj: Editor, position: Iterable, code: string) => void
    cursorMoved: (obj: Editor) => void
    gladeCallbackAdd: (obj: Editor, widgetTypename: string, signalName: string, handlerName: string, object: string, swap: boolean, after: boolean, filename: string) => void
    gladeMemberAdd: (obj: Editor, widgetTypename: string, widgetName: string, filename: string) => void
    lineMarksGutterClicked: (obj: Editor, location: number) => void
    append: (obj: Editor, text: string, length: number) => void
    erase: (obj: Editor, positionStart: Iterable, positionEnd: Iterable) => void
    eraseAll: (obj: Editor) => void
    getColumn: (obj: Editor) => number
    getCurrentWord: (obj: Editor) => string
    getEndPosition: (obj: Editor) => Iterable
    getIndentsize: (obj: Editor) => number
    getLength: (obj: Editor) => number
    getLineBeginPosition: (obj: Editor, line: number) => Iterable
    getLineEndPosition: (obj: Editor, line: number) => Iterable
    getLineFromPosition: (obj: Editor, position: Iterable) => number
    getLineno: (obj: Editor) => number
    getOffset: (obj: Editor) => number
    getOverwrite: (obj: Editor) => boolean
    getPosition: (obj: Editor) => Iterable
    getStartPosition: (obj: Editor) => Iterable
    getTabsize: (obj: Editor) => number
    getText: (obj: Editor, begin: Iterable, end: Iterable) => string
    getTextAll: (obj: Editor) => string
    getUseSpaces: (obj: Editor) => boolean
    gotoEnd: (obj: Editor) => void
    gotoLine: (obj: Editor, lineno: number) => void
    gotoPosition: (obj: Editor, position: Iterable) => void
    gotoStart: (obj: Editor) => void
    insert: (obj: Editor, position: Iterable, text: string, length: number) => void
    setAutoIndent: (obj: Editor, autoIndent: boolean) => void
    setIndentsize: (obj: Editor, indentsize: number) => void
    setPopupMenu: (obj: Editor, menu: Gtk.Widget) => void
    setTabsize: (obj: Editor, tabsize: number) => void
    setUseSpaces: (obj: Editor, useSpaces: boolean) => void
}

export abstract class EditorIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorIface

    static name: string
}

export interface EditorLanguageIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorLanguageIface

    gIface: EditorIface
    languageChanged: (obj: EditorLanguage, language: string) => void
    getLanguage: (obj: EditorLanguage) => string
    getLanguageName: (obj: EditorLanguage, language: string) => string
    getSupportedLanguages: (obj: EditorLanguage) => string[]
    setLanguage: (obj: EditorLanguage, language: string) => void
}

export abstract class EditorLanguageIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorLanguageIface

    static name: string
}

export interface EditorLineModeIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorLineModeIface

    gIface: EditorIface
    convert: (obj: EditorLineMode, mode: EditorLineModeType) => void
    fix: (obj: EditorLineMode) => void
    get: (obj: EditorLineMode) => EditorLineModeType
    set: (obj: EditorLineMode, mode: EditorLineModeType) => void
}

export abstract class EditorLineModeIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorLineModeIface

    static name: string
}

export interface EditorSearchIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorSearchIface

    gIface: EditorIface
    backward: (obj: EditorSearch, search: string, caseSensitive: boolean, start: EditorCell, end: EditorCell) => [ /* returnType */ boolean, /* resultStart */ EditorCell, /* resultEnd */ EditorCell ]
    forward: (obj: EditorSearch, search: string, caseSensitive: boolean, start: EditorCell, end: EditorCell) => [ /* returnType */ boolean, /* resultStart */ EditorCell, /* resultEnd */ EditorCell ]
}

export abstract class EditorSearchIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorSearchIface

    static name: string
}

export interface EditorSelectionIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorSelectionIface

    gIface: EditorIface
    get: (obj: EditorSelection) => string
    hasSelection: (obj: EditorSelection) => boolean
    replace: (obj: EditorSelection, text: string, length: number) => void
    selectAll: (obj: EditorSelection) => void
    selectBlock: (obj: EditorSelection) => void
    selectFunction: (obj: EditorSelection) => void
    set: (obj: EditorSelection, start: Iterable, end: Iterable, scroll: boolean) => void
}

export abstract class EditorSelectionIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorSelectionIface

    static name: string
}

export interface EditorTipIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorTipIface

    gIface: EditorIface
    cancel: (obj: EditorTip) => void
    show: (obj: EditorTip, tips: string[], position: Iterable) => void
    visible: (obj: EditorTip) => boolean
}

export abstract class EditorTipIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorTipIface

    static name: string
}

export interface EditorViewIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorViewIface

    gIface: EditorIface
    create: (obj: EditorView) => void
    getCount: (obj: EditorView) => number
    removeCurrent: (obj: EditorView) => void
}

export abstract class EditorViewIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorViewIface

    static name: string
}

export interface EditorZoomIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EditorZoomIface

    gIface: EditorIface
    in_: (obj: EditorZoom) => void
    out: (obj: EditorZoom) => void
}

export abstract class EditorZoomIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EditorZoomIface

    static name: string
}

export interface EnvironmentIface {

    // Own fields of IAnjuta-3.0.IAnjuta.EnvironmentIface

    gIface: GObject.TypeInterface
    getRealDirectory: (obj: Environment, dir: string) => string
    override: (obj: Environment, dirp: string, argvp: string, envp: string) => boolean
}

export abstract class EnvironmentIface {

    // Own properties of IAnjuta-3.0.IAnjuta.EnvironmentIface

    static name: string
}

export interface FileIface {

    // Own fields of IAnjuta-3.0.IAnjuta.FileIface

    gIface: GObject.TypeInterface
    opened: (obj: File) => void
    getFile: (obj: File) => Gio.File
    open: (obj: File, file: Gio.File) => void
}

export abstract class FileIface {

    // Own properties of IAnjuta-3.0.IAnjuta.FileIface

    static name: string
}

export interface FileLoaderIface {

    // Own fields of IAnjuta-3.0.IAnjuta.FileLoaderIface

    gIface: LoaderIface
    peekInterface: (obj: FileLoader, file: Gio.File) => string
}

export abstract class FileLoaderIface {

    // Own properties of IAnjuta-3.0.IAnjuta.FileLoaderIface

    static name: string
}

export interface FileManagerIface {

    // Own fields of IAnjuta-3.0.IAnjuta.FileManagerIface

    gIface: GObject.TypeInterface
    sectionChanged: (obj: FileManager, file: Gio.File) => void
    setRoot: (obj: FileManager, rootUri: string) => void
    setSelected: (obj: FileManager, file: Gio.File) => void
}

export abstract class FileManagerIface {

    // Own properties of IAnjuta-3.0.IAnjuta.FileManagerIface

    static name: string
}

export interface FileSavableIface {

    // Own fields of IAnjuta-3.0.IAnjuta.FileSavableIface

    gIface: FileIface
    saved: (obj: FileSavable, file: Gio.File) => void
    updateSaveUi: (obj: FileSavable) => void
    isConflict: (obj: FileSavable) => boolean
    isDirty: (obj: FileSavable) => boolean
    isReadOnly: (obj: FileSavable) => boolean
    save: (obj: FileSavable) => void
    saveAs: (obj: FileSavable, file: Gio.File) => void
    setDirty: (obj: FileSavable, dirty: boolean) => void
}

export abstract class FileSavableIface {

    // Own properties of IAnjuta-3.0.IAnjuta.FileSavableIface

    static name: string
}

export interface GladeIface {

    // Own fields of IAnjuta-3.0.IAnjuta.GladeIface

    gIface: GObject.TypeInterface
    addAssociation: (obj: Glade, master: string, slave: string) => void
}

export abstract class GladeIface {

    // Own properties of IAnjuta-3.0.IAnjuta.GladeIface

    static name: string
}

export interface HelpIface {

    // Own fields of IAnjuta-3.0.IAnjuta.HelpIface

    gIface: GObject.TypeInterface
    search: (obj: Help, query: string) => void
}

export abstract class HelpIface {

    // Own properties of IAnjuta-3.0.IAnjuta.HelpIface

    static name: string
}

export interface IndenterIface {

    // Own fields of IAnjuta-3.0.IAnjuta.IndenterIface

    gIface: GObject.TypeInterface
    indent: (obj: Indenter, start: Iterable, end: Iterable) => void
}

export abstract class IndenterIface {

    // Own properties of IAnjuta-3.0.IAnjuta.IndenterIface

    static name: string
}

export interface IndicableIface {

    // Own fields of IAnjuta-3.0.IAnjuta.IndicableIface

    gIface: GObject.TypeInterface
    clear: (obj: Indicable) => void
    set: (obj: Indicable, beginLocation: Iterable, endLocation: Iterable, indicator: IndicableIndicator) => void
}

export abstract class IndicableIface {

    // Own properties of IAnjuta-3.0.IAnjuta.IndicableIface

    static name: string
}

export interface IterableIface {

    // Own fields of IAnjuta-3.0.IAnjuta.IterableIface

    gIface: GObject.TypeInterface
    assign: (obj: Iterable, srcIter: Iterable) => void
    clone: (obj: Iterable) => Iterable
    compare: (obj: Iterable, iter2: Iterable) => number
    diff: (obj: Iterable, iter2: Iterable) => number
    first: (obj: Iterable) => boolean
    getLength: (obj: Iterable) => number
    getPosition: (obj: Iterable) => number
    last: (obj: Iterable) => boolean
    next: (obj: Iterable) => boolean
    previous: (obj: Iterable) => boolean
    setPosition: (obj: Iterable, position: number) => boolean
}

export abstract class IterableIface {

    // Own properties of IAnjuta-3.0.IAnjuta.IterableIface

    static name: string
}

export interface IterableTreeIface {

    // Own fields of IAnjuta-3.0.IAnjuta.IterableTreeIface

    gIface: IterableIface
    children: (obj: IterableTree) => boolean
    hasChildren: (obj: IterableTree) => boolean
    parent: (obj: IterableTree) => boolean
}

export abstract class IterableTreeIface {

    // Own properties of IAnjuta-3.0.IAnjuta.IterableTreeIface

    static name: string
}

export interface LanguageIface {

    // Own fields of IAnjuta-3.0.IAnjuta.LanguageIface

    gIface: GObject.TypeInterface
    getFromEditor: (obj: Language, editor: EditorLanguage) => LanguageId
    getFromMimeType: (obj: Language, mimeType: string) => LanguageId
    getFromString: (obj: Language, string: string) => LanguageId
    getLanguages: (obj: Language) => number[]
    getMakeTarget: (obj: Language, id: LanguageId) => string
    getName: (obj: Language, id: LanguageId) => string
    getNameFromEditor: (obj: Language, editor: EditorLanguage) => string
}

export abstract class LanguageIface {

    // Own properties of IAnjuta-3.0.IAnjuta.LanguageIface

    static name: string
}

export interface LanguageProviderIface {

    // Own fields of IAnjuta-3.0.IAnjuta.LanguageProviderIface

    gIface: ProviderIface
    getCalltipCache: (obj: LanguageProvider, callContext: string) => string[]
    getCalltipContext: (obj: LanguageProvider, iter: Iterable) => string
    newCalltip: (obj: LanguageProvider, callContext: string, iter: Iterable) => void
    populateCompletions: (obj: LanguageProvider, iter: Iterable) => Iterable | null
}

export abstract class LanguageProviderIface {

    // Own properties of IAnjuta-3.0.IAnjuta.LanguageProviderIface

    static name: string
}

export interface LoaderIface {

    // Own fields of IAnjuta-3.0.IAnjuta.LoaderIface

    gIface: GObject.TypeInterface
}

export abstract class LoaderIface {

    // Own properties of IAnjuta-3.0.IAnjuta.LoaderIface

    static name: string
}

export interface MarkableIface {

    // Own fields of IAnjuta-3.0.IAnjuta.MarkableIface

    gIface: GObject.TypeInterface
    markerClicked: (obj: Markable, doubleClick: boolean, location: number) => void
    deleteAllMarkers: (obj: Markable, marker: MarkableMarker) => void
    isMarkerSet: (obj: Markable, location: number, marker: MarkableMarker) => boolean
    locationFromHandle: (obj: Markable, handle: number) => number
    mark: (obj: Markable, location: number, marker: MarkableMarker, tooltip: string | null) => number
    unmark: (obj: Markable, location: number, marker: MarkableMarker) => void
}

export abstract class MarkableIface {

    // Own properties of IAnjuta-3.0.IAnjuta.MarkableIface

    static name: string
}

export interface MessageManagerIface {

    // Own fields of IAnjuta-3.0.IAnjuta.MessageManagerIface

    gIface: GObject.TypeInterface
    removeView: (obj: MessageManager, view: MessageView) => void
    setCurrentView: (obj: MessageManager, view: MessageView) => void
    setViewIcon: (obj: MessageManager, view: MessageView, icon: GdkPixbuf.PixbufAnimation) => void
    setViewIconFromStock: (obj: MessageManager, view: MessageView, icon: string) => void
    setViewTitle: (obj: MessageManager, view: MessageView, title: string) => void
}

export abstract class MessageManagerIface {

    // Own properties of IAnjuta-3.0.IAnjuta.MessageManagerIface

    static name: string
}

export interface MessageViewIface {

    // Own fields of IAnjuta-3.0.IAnjuta.MessageViewIface

    gIface: GObject.TypeInterface
    bufferFlushed: (obj: MessageView, line: string) => void
    messageClicked: (obj: MessageView, message: string) => void
    append: (obj: MessageView, type: MessageViewType, summary: string, details: string) => void
    bufferAppend: (obj: MessageView, text: string) => void
    clear: (obj: MessageView) => void
    getCurrentMessage: (obj: MessageView) => string
    selectNext: (obj: MessageView) => void
    selectPrevious: (obj: MessageView) => void
}

export abstract class MessageViewIface {

    // Own properties of IAnjuta-3.0.IAnjuta.MessageViewIface

    static name: string
}

export interface PluginFactoryIface {

    // Own fields of IAnjuta-3.0.IAnjuta.PluginFactoryIface

    gIface: GObject.TypeInterface
}

export abstract class PluginFactoryIface {

    // Own properties of IAnjuta-3.0.IAnjuta.PluginFactoryIface

    static name: string
}

export interface PreferencesIface {

    // Own fields of IAnjuta-3.0.IAnjuta.PreferencesIface

    gIface: GObject.TypeInterface
    merge: (obj: Preferences, prefs: Anjuta.Preferences) => void
    unmerge: (obj: Preferences, prefs: Anjuta.Preferences) => void
}

export abstract class PreferencesIface {

    // Own properties of IAnjuta-3.0.IAnjuta.PreferencesIface

    static name: string
}

export interface PrintIface {

    // Own fields of IAnjuta-3.0.IAnjuta.PrintIface

    gIface: GObject.TypeInterface
    print: (obj: Print) => void
    printPreview: (obj: Print) => void
}

export abstract class PrintIface {

    // Own properties of IAnjuta-3.0.IAnjuta.PrintIface

    static name: string
}

export interface ProjectBackendIface {

    // Own fields of IAnjuta-3.0.IAnjuta.ProjectBackendIface

    gIface: GObject.TypeInterface
    newProject: (obj: ProjectBackend, file: Gio.File) => Project
    probe: (obj: ProjectBackend, directory: Gio.File) => number
}

export abstract class ProjectBackendIface {

    // Own properties of IAnjuta-3.0.IAnjuta.ProjectBackendIface

    static name: string
}

export interface ProjectChooserIface {

    // Own fields of IAnjuta-3.0.IAnjuta.ProjectChooserIface

    gIface: GObject.TypeInterface
    changed: (obj: ProjectChooser) => void
    getSelected: (obj: ProjectChooser) => Gio.File
    setProjectModel: (obj: ProjectChooser, manager: ProjectManager, childType: Anjuta.ProjectNodeType) => boolean
}

export abstract class ProjectChooserIface {

    // Own properties of IAnjuta-3.0.IAnjuta.ProjectChooserIface

    static name: string
}

export interface ProjectIface {

    // Own fields of IAnjuta-3.0.IAnjuta.ProjectIface

    gIface: GObject.TypeInterface
    fileChanged: (obj: Project, node: object | null) => void
    nodeChanged: (obj: Project, node: object | null, error: GLib.Error) => void
    nodeLoaded: (obj: Project, node: object | null, error: GLib.Error) => void
    nodeSaved: (obj: Project, node: object | null, error: GLib.Error) => void
    addNodeAfter: (obj: Project, parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file: Gio.File | null, name: string | null) => Anjuta.ProjectNode
    addNodeBefore: (obj: Project, parent: Anjuta.ProjectNode, sibling: Anjuta.ProjectNode | null, type: Anjuta.ProjectNodeType, file: Gio.File | null, name: string | null) => Anjuta.ProjectNode
    getNodeInfo: (obj: Project) => Anjuta.ProjectNodeInfo[]
    getRoot: (obj: Project) => Anjuta.ProjectNode
    isLoaded: (obj: Project) => boolean
    loadNode: (obj: Project, node: Anjuta.ProjectNode) => boolean
    removeNode: (obj: Project, node: Anjuta.ProjectNode) => boolean
    removeProperty: (obj: Project, node: Anjuta.ProjectNode, id: string, name: string | null) => boolean
    saveNode: (obj: Project, node: Anjuta.ProjectNode) => boolean
    setProperty: (obj: Project, node: Anjuta.ProjectNode, id: string, name: string | null, value: string) => Anjuta.ProjectProperty | null
}

export abstract class ProjectIface {

    // Own properties of IAnjuta-3.0.IAnjuta.ProjectIface

    static name: string
}

export interface ProjectManagerIface {

    // Own fields of IAnjuta-3.0.IAnjuta.ProjectManagerIface

    gIface: GObject.TypeInterface
    elementAdded: (obj: ProjectManager, element: Gio.File) => void
    elementRemoved: (obj: ProjectManager, element: Gio.File) => void
    elementSelected: (obj: ProjectManager, element: Gio.File) => void
    projectLoaded: (obj: ProjectManager, error: GLib.Error) => void
    addGroup: (obj: ProjectManager, name: string, defaultGroup: Gio.File | null) => Gio.File
    addSource: (obj: ProjectManager, name: string, defaultTarget: Gio.File | null) => Gio.File
    addSourceQuiet: (obj: ProjectManager, name: string, target: Gio.File) => Gio.File
    addSources: (obj: ProjectManager, names: string[], defaultTarget: Gio.File | null) => Gio.File[]
    addTarget: (obj: ProjectManager, name: string, defaultGroup: Gio.File | null) => Gio.File
    getCapabilities: (obj: ProjectManager) => number
    getChildren: (obj: ProjectManager, parent: Gio.File, childrenType: number) => Gio.File[]
    getCurrentProject: (obj: ProjectManager) => Project
    getElements: (obj: ProjectManager, elementType: Anjuta.ProjectNodeType) => Gio.File[]
    getPackages: (obj: ProjectManager) => string[]
    getSelected: (obj: ProjectManager) => Gio.File
    getTargetType: (obj: ProjectManager, target: Gio.File) => Anjuta.ProjectNodeType
    getTargets: (obj: ProjectManager, targetType: Anjuta.ProjectNodeType) => Gio.File[]
    isOpen: (obj: ProjectManager) => boolean
    removeFile: (obj: ProjectManager, file: Gio.File) => boolean
}

export abstract class ProjectManagerIface {

    // Own properties of IAnjuta-3.0.IAnjuta.ProjectManagerIface

    static name: string
}

export interface ProviderIface {

    // Own fields of IAnjuta-3.0.IAnjuta.ProviderIface

    gIface: GObject.TypeInterface
    activate: (obj: Provider, iter: Iterable, data: object | null) => void
    getName: (obj: Provider) => string
    getStartIter: (obj: Provider) => Iterable
    populate: (obj: Provider, iter: Iterable) => void
}

export abstract class ProviderIface {

    // Own properties of IAnjuta-3.0.IAnjuta.ProviderIface

    static name: string
}

export interface SnippetsManagerIface {

    // Own fields of IAnjuta-3.0.IAnjuta.SnippetsManagerIface

    gIface: GObject.TypeInterface
    insert: (obj: SnippetsManager, key: string, editingSession: boolean) => boolean
}

export abstract class SnippetsManagerIface {

    // Own properties of IAnjuta-3.0.IAnjuta.SnippetsManagerIface

    static name: string
}

export interface StreamIface {

    // Own fields of IAnjuta-3.0.IAnjuta.StreamIface

    gIface: GObject.TypeInterface
    open: (obj: Stream, stream: object | null) => void
}

export abstract class StreamIface {

    // Own properties of IAnjuta-3.0.IAnjuta.StreamIface

    static name: string
}

export interface StreamLoaderIface {

    // Own fields of IAnjuta-3.0.IAnjuta.StreamLoaderIface

    gIface: LoaderIface
    peekInterface: (obj: StreamLoader, stream: object | null) => string
}

export abstract class StreamLoaderIface {

    // Own properties of IAnjuta-3.0.IAnjuta.StreamLoaderIface

    static name: string
}

export interface StreamSavableIface {

    // Own fields of IAnjuta-3.0.IAnjuta.StreamSavableIface

    gIface: StreamIface
    save: (obj: StreamSavable, stream: object | null) => void
}

export abstract class StreamSavableIface {

    // Own properties of IAnjuta-3.0.IAnjuta.StreamSavableIface

    static name: string
}

export interface SymbolIface {

    // Own fields of IAnjuta-3.0.IAnjuta.SymbolIface

    gIface: GObject.TypeInterface
    getBoolean: (obj: Symbol, field: SymbolField) => boolean
    getIcon: (obj: Symbol) => GdkPixbuf.Pixbuf
    getInt: (obj: Symbol, field: SymbolField) => number
    getString: (obj: Symbol, field: SymbolField) => string
    getSymType: (obj: Symbol) => SymbolType
}

export abstract class SymbolIface {

    // Own properties of IAnjuta-3.0.IAnjuta.SymbolIface

    static name: string
}

export interface SymbolManagerIface {

    // Own fields of IAnjuta-3.0.IAnjuta.SymbolManagerIface

    gIface: GObject.TypeInterface
    prjScanEnd: (obj: SymbolManager, processId: number) => void
    sysScanEnd: (obj: SymbolManager, processId: number) => void
    activatePackage: (obj: SymbolManager, pkgName: string, pkgVersion: string) => boolean
    deactivateAll: (obj: SymbolManager) => void
    deactivatePackage: (obj: SymbolManager, pkgName: string, pkgVersion: string) => void
}

export abstract class SymbolManagerIface {

    // Own properties of IAnjuta-3.0.IAnjuta.SymbolManagerIface

    static name: string
}

export interface SymbolQueryIface {

    // Own fields of IAnjuta-3.0.IAnjuta.SymbolQueryIface

    gIface: GObject.TypeInterface
    asyncResult: (obj: SymbolQuery, result: GObject.Object) => void
    cancel: (obj: SymbolQuery) => void
    setFields: (obj: SymbolQuery, nFields: number, fields: SymbolField) => void
    setFileScope: (obj: SymbolQuery, filescopeSearch: SymbolQueryFileScope) => void
    setFilters: (obj: SymbolQuery, filters: SymbolType, includeTypes: boolean) => void
    setGroupBy: (obj: SymbolQuery, field: SymbolField) => void
    setLimit: (obj: SymbolQuery, limit: number) => void
    setMode: (obj: SymbolQuery, mode: SymbolQueryMode) => void
    setOffset: (obj: SymbolQuery, offset: number) => void
    setOrderBy: (obj: SymbolQuery, field: SymbolField) => void
}

export abstract class SymbolQueryIface {

    // Own properties of IAnjuta-3.0.IAnjuta.SymbolQueryIface

    static name: string
}

export interface TerminalIface {

    // Own fields of IAnjuta-3.0.IAnjuta.TerminalIface

    gIface: GObject.TypeInterface
    childExited: (obj: Terminal, pid: number, status: number) => void
    executeCommand: (obj: Terminal, directory: string, command: string, environment: string[]) => number
}

export abstract class TerminalIface {

    // Own properties of IAnjuta-3.0.IAnjuta.TerminalIface

    static name: string
}

export interface TodoIface {

    // Own fields of IAnjuta-3.0.IAnjuta.TodoIface

    gIface: GObject.TypeInterface
    load: (obj: Todo, file: Gio.File) => void
}

export abstract class TodoIface {

    // Own properties of IAnjuta-3.0.IAnjuta.TodoIface

    static name: string
}

export interface VcsIface {

    // Own fields of IAnjuta-3.0.IAnjuta.VcsIface

    gIface: GObject.TypeInterface
    statusChanged: (obj: Vcs) => void
    add: (obj: Vcs, files: Gio.File[], notify: Anjuta.AsyncNotify) => void
    checkout: (obj: Vcs, repositoryLocation: string, dest: Gio.File, cancel: Gio.Cancellable | null, notify: Anjuta.AsyncNotify) => void
    remove: (obj: Vcs, files: Gio.File[], notify: Anjuta.AsyncNotify) => void
}

export abstract class VcsIface {

    // Own properties of IAnjuta-3.0.IAnjuta.VcsIface

    static name: string
}

export interface WizardIface {

    // Own fields of IAnjuta-3.0.IAnjuta.WizardIface

    gIface: GObject.TypeInterface
    activate: (obj: Wizard) => void
}

export abstract class WizardIface {

    // Own properties of IAnjuta-3.0.IAnjuta.WizardIface

    static name: string
}

    export type BuilderHandle = object
    export type LanguageId = number