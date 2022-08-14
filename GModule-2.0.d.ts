
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GModule-2.0
 */

import type * as GLib from './GLib-2.0.js';
import type * as GObject from './GObject-2.0.js';

/**
 * Errors returned by g_module_open_full().
 */
export enum ModuleError {
    /**
     * there was an error loading or opening a module file
     */
    FAILED,
    /**
     * a module returned an error from its `g_module_check_init()` function
     */
    CHECK_FAILED,
}
/**
 * Flags passed to g_module_open().
 * Note that these flags are not supported on all platforms.
 * @bitfield 
 */
export enum ModuleFlags {
    /**
     * specifies that symbols are only resolved when
     *     needed. The default action is to bind all symbols when the module
     *     is loaded.
     */
    LAZY,
    /**
     * specifies that symbols in the module should
     *     not be added to the global name space. The default action on most
     *     platforms is to place symbols in the module in the global name space,
     *     which may cause conflicts with existing symbols.
     */
    LOCAL,
    /**
     * mask for all flags.
     */
    MASK,
}
/**
 * A portable way to build the filename of a module. The platform-specific
 * prefix and suffix are added to the filename, if needed, and the result
 * is added to the directory, using the correct separator character.
 * 
 * The directory should specify the directory where the module can be found.
 * It can be %NULL or an empty string to indicate that the module is in a
 * standard platform-specific directory, though this is not recommended
 * since the wrong module may be found.
 * 
 * For example, calling g_module_build_path() on a Linux system with a
 * `directory` of `/lib` and a `module_name` of "mylibrary" will return
 * `/lib/libmylibrary.so`. On a Windows system, using `\Windows` as the
 * directory it will return `\Windows\mylibrary.dll`.
 * @param directory the directory where the module is. This can be     %NULL or the empty string to indicate that the standard platform-specific     directories will be used, though that is not recommended
 * @param moduleName the name of the module
 */
export function moduleBuildPath(directory: string | null, moduleName: string): string
/**
 * Gets a string describing the last module error.
 */
export function moduleError(): string
export function moduleErrorQuark(): GLib.Quark
/**
 * Checks if modules are supported on the current platform.
 */
export function moduleSupported(): boolean
/**
 * Specifies the type of the module initialization function.
 * If a module contains a function named g_module_check_init() it is called
 * automatically when the module is loaded. It is passed the #GModule structure
 * and should return %NULL on success or a string describing the initialization
 * error.
 * @callback 
 * @param module the #GModule corresponding to the module which has just been loaded
 */
export interface ModuleCheckInit {
    (module: Module): string
}
/**
 * Specifies the type of the module function called when it is unloaded.
 * If a module contains a function named g_module_unload() it is called
 * automatically when the module is unloaded.
 * It is passed the #GModule structure.
 * @callback 
 * @param module the #GModule about to be unloaded
 */
export interface ModuleUnload {
    (module: Module): void
}
export interface Module {

    // Owm methods of GModule-2.0.GModule.Module

    /**
     * Closes a module.
     */
    close(): boolean
    /**
     * Ensures that a module will never be unloaded.
     * Any future g_module_close() calls on the module will be ignored.
     */
    makeResident(): void
    /**
     * Returns the filename that the module was opened with.
     * 
     * If `module` refers to the application itself, "main" is returned.
     */
    name(): string
    /**
     * Gets a symbol pointer from a module, such as one exported
     * by %G_MODULE_EXPORT. Note that a valid symbol can be %NULL.
     * @param symbolName the name of the symbol to find
     */
    symbol(symbolName: string): [ /* returnType */ boolean, /* symbol */ object | null ]
}

/**
 * The #GModule struct is an opaque data structure to represent a
 * [dynamically-loaded module][glib-Dynamic-Loading-of-Modules].
 * It should only be accessed via the following functions.
 * @record 
 */
export class Module {

    // Own properties of GModule-2.0.GModule.Module

    static name: string

    // Constructors of GModule-2.0.GModule.Module

    /**
     * A portable way to build the filename of a module. The platform-specific
     * prefix and suffix are added to the filename, if needed, and the result
     * is added to the directory, using the correct separator character.
     * 
     * The directory should specify the directory where the module can be found.
     * It can be %NULL or an empty string to indicate that the module is in a
     * standard platform-specific directory, though this is not recommended
     * since the wrong module may be found.
     * 
     * For example, calling g_module_build_path() on a Linux system with a
     * `directory` of `/lib` and a `module_name` of "mylibrary" will return
     * `/lib/libmylibrary.so`. On a Windows system, using `\Windows` as the
     * directory it will return `\Windows\mylibrary.dll`.
     * @param directory the directory where the module is. This can be     %NULL or the empty string to indicate that the standard platform-specific     directories will be used, though that is not recommended
     * @param moduleName the name of the module
     */
    static buildPath(directory: string | null, moduleName: string): string
    /**
     * Gets a string describing the last module error.
     */
    static error(): string
    static errorQuark(): GLib.Quark
    /**
     * Checks if modules are supported on the current platform.
     */
    static supported(): boolean
}
