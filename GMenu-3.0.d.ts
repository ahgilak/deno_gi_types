
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GMenu-3.0
 */

import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

export enum TreeItemType {
    INVALID,
    DIRECTORY,
    ENTRY,
    SEPARATOR,
    HEADER,
    ALIAS,
}
export enum TreeFlags {
    NONE,
    INCLUDE_EXCLUDED,
    SHOW_EMPTY,
    INCLUDE_NODISPLAY,
    SHOW_ALL_SEPARATORS,
    SORT_DISPLAY_NAME,
    INCLUDE_UNALLOCATED,
}
export module Tree {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GMenu-3.0.GMenu.Tree

        /**
         * Flags controlling the content of the menu.
         */
        flags?: TreeFlags | null
        /**
         * The name of the menu file; must be a basename or a relative path. The file
         * will be looked up in $XDG_CONFIG_DIRS/menus/. See the Desktop Menu
         * specification.
         */
        menuBasename?: string | null
        /**
         * The full path of the menu file. If set, GMenuTree:menu-basename will get
         * ignored.
         */
        menuPath?: string | null
    }

}

export interface Tree {

    // Own properties of GMenu-3.0.GMenu.Tree

    /**
     * Flags controlling the content of the menu.
     */
    readonly flags: TreeFlags
    /**
     * The name of the menu file; must be a basename or a relative path. The file
     * will be looked up in $XDG_CONFIG_DIRS/menus/. See the Desktop Menu
     * specification.
     */
    readonly menuBasename: string
    /**
     * The full path of the menu file. If set, GMenuTree:menu-basename will get
     * ignored.
     */
    readonly menuPath: string

    // Owm methods of GMenu-3.0.GMenu.Tree

    /**
     * This function is only available if the tree has been loaded via
     * gmenu_tree_load_sync() or a variant thereof.
     */
    getCanonicalMenuPath(): string
    getDirectoryFromPath(path: string): TreeDirectory
    /**
     * Look up the entry corresponding to the given "desktop file id".
     * @param id a desktop file ID
     */
    getEntryById(id: string): TreeEntry
    /**
     * Get the root directory; you must have loaded the tree first (at
     * least once) via gmenu_tree_load_sync() or a variant thereof.
     */
    getRootDirectory(): TreeDirectory
    /**
     * Synchronously load the menu contents.  This function
     * performs a significant amount of blocking I/O if the
     * tree has not been loaded yet.
     */
    loadSync(): boolean

    // Own signals of GMenu-3.0.GMenu.Tree

    connect(sigName: "changed", callback: Tree.ChangedSignalCallback): number
    on(sigName: "changed", callback: Tree.ChangedSignalCallback): number
    once(sigName: "changed", callback: Tree.ChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of GMenu-3.0.GMenu.Tree

    connect(sigName: "notify::flags", callback: any): number
    on(sigName: "notify::flags", callback: any): number
    once(sigName: "notify::flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::menu-basename", callback: any): number
    on(sigName: "notify::menu-basename", callback: any): number
    once(sigName: "notify::menu-basename", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::menu-basename", ...args: any[]): void
    connect(sigName: "notify::menu-path", callback: any): number
    on(sigName: "notify::menu-path", callback: any): number
    once(sigName: "notify::menu-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::menu-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Tree extends GObject.Object {

    // Own properties of GMenu-3.0.GMenu.Tree

    static name: string

    // Constructors of GMenu-3.0.GMenu.Tree

    constructor(config?: Tree.ConstructorProperties) 
    constructor(menuBasename: string, flags: TreeFlags) 
    static new(menuBasename: string, flags: TreeFlags): Tree
    static newForPath(menuPath: string, flags: TreeFlags): Tree
    _init(config?: Tree.ConstructorProperties): void
    static itemRef(item: object | null): object | null
    static itemUnref(item: object | null): void
}

export interface TreeAlias {

    // Owm methods of GMenu-3.0.GMenu.TreeAlias

    getAliasedDirectory(): TreeDirectory
    getAliasedEntry(): TreeEntry
    getAliasedItemType(): TreeItemType
    getDirectory(): TreeDirectory
    getParent(): TreeDirectory
    /**
     * Grab the tree associated with a #GMenuTreeAlias.
     */
    getTree(): Tree
}

export class TreeAlias {

    // Own properties of GMenu-3.0.GMenu.TreeAlias

    static name: string
}

export interface TreeClass {

    // Own fields of GMenu-3.0.GMenu.TreeClass

    parentClass: GObject.ObjectClass
}

export abstract class TreeClass {

    // Own properties of GMenu-3.0.GMenu.TreeClass

    static name: string
}

export interface TreeDirectory {

    // Owm methods of GMenu-3.0.GMenu.TreeDirectory

    getComment(): string
    getDesktopFilePath(): string
    getGenericName(): string
    /**
     * Gets the icon for the directory.
     */
    getIcon(): Gio.Icon
    getIsNodisplay(): boolean
    getMenuId(): string
    getName(): string
    getParent(): TreeDirectory
    /**
     * Grab the tree associated with a #GMenuTreeItem.
     */
    getTree(): Tree
    iter(): TreeIter
    makePath(entry: TreeEntry): string
}

export class TreeDirectory {

    // Own properties of GMenu-3.0.GMenu.TreeDirectory

    static name: string
}

export interface TreeEntry {

    // Owm methods of GMenu-3.0.GMenu.TreeEntry

    getAppInfo(): Gio.DesktopAppInfo
    getDesktopFileId(): string
    getDesktopFilePath(): string
    getIsExcluded(): boolean
    getIsNodisplayRecurse(): boolean
    getIsUnallocated(): boolean
    getParent(): TreeDirectory
    /**
     * Grab the tree associated with a #GMenuTreeEntry.
     */
    getTree(): Tree
}

export class TreeEntry {

    // Own properties of GMenu-3.0.GMenu.TreeEntry

    static name: string
}

export interface TreeHeader {

    // Owm methods of GMenu-3.0.GMenu.TreeHeader

    getDirectory(): TreeDirectory
    getParent(): TreeDirectory
    /**
     * Grab the tree associated with a #GMenuTreeHeader.
     */
    getTree(): Tree
}

export class TreeHeader {

    // Own properties of GMenu-3.0.GMenu.TreeHeader

    static name: string
}

export interface TreeIter {

    // Owm methods of GMenu-3.0.GMenu.TreeIter

    /**
     * This method may only be called if gmenu_tree_iter_next()
     * returned GMENU_TREE_ITEM_ALIAS.
     */
    getAlias(): TreeAlias
    /**
     * This method may only be called if gmenu_tree_iter_next()
     * returned GMENU_TREE_ITEM_DIRECTORY.
     */
    getDirectory(): TreeDirectory
    /**
     * This method may only be called if gmenu_tree_iter_next()
     * returned GMENU_TREE_ITEM_ENTRY.
     */
    getEntry(): TreeEntry
    /**
     * This method may only be called if gmenu_tree_iter_next()
     * returned GMENU_TREE_ITEM_HEADER.
     */
    getHeader(): TreeHeader
    /**
     * This method may only be called if gmenu_tree_iter_next()
     * returned #GMENU_TREE_ITEM_SEPARATOR.
     */
    getSeparator(): TreeSeparator
    /**
     * Change the iterator to the next item, and return its type.  If
     * there are no more items, %GMENU_TREE_ITEM_INVALID is returned.
     */
    next(): TreeItemType
}

export class TreeIter {

    // Own properties of GMenu-3.0.GMenu.TreeIter

    static name: string
}

export interface TreeSeparator {

    // Owm methods of GMenu-3.0.GMenu.TreeSeparator

    getParent(): TreeDirectory
    /**
     * Grab the tree associated with a #GMenuTreeSeparator.
     */
    getTree(): Tree
}

export class TreeSeparator {

    // Own properties of GMenu-3.0.GMenu.TreeSeparator

    static name: string
}
