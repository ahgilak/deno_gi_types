
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Nautilus-3.0
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

/**
 * Return values for asynchronous operations performed by the extension.
 * See nautilus_info_provider_update_file_info().
 */
export enum OperationResult {
    /**
     * the operation succeeded, and the extension
     *  is done with the request.
     */
    COMPLETE,
    /**
     * the operation failed.
     */
    FAILED,
    /**
     * the extension has begin an async operation.
     *  When this value is returned, the extension must set the handle parameter
     *  and call the callback closure when the operation is complete.
     */
    IN_PROGRESS,
}
export function fileInfoCreate(location: Gio.File): FileInfo
export function fileInfoCreateForUri(uri: string): FileInfo
export function fileInfoListCopy(files: FileInfo[]): FileInfo[]
export function fileInfoListFree(files: FileInfo[]): void
export function fileInfoLookup(location: Gio.File): FileInfo | null
export function fileInfoLookupForUri(uri: string): FileInfo | null
export function infoProviderUpdateCompleteInvoke(updateComplete: GObject.TClosure, provider: InfoProvider, handle: OperationHandle, result: OperationResult): void
export module ColumnProvider {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ColumnProvider {

    // Owm methods of Nautilus-3.0.Nautilus.ColumnProvider

    getColumns(): Column[] | null

    // Class property signals of Nautilus-3.0.Nautilus.ColumnProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ColumnProvider extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.ColumnProvider

    static name: string

    // Constructors of Nautilus-3.0.Nautilus.ColumnProvider

    constructor(config?: ColumnProvider.ConstructorProperties) 
    _init(config?: ColumnProvider.ConstructorProperties): void
}

export module FileInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface FileInfo {

    // Owm methods of Nautilus-3.0.Nautilus.FileInfo

    // Has conflict: addEmblem(emblemName: string): void
    // Has conflict: addStringAttribute(attributeName: string, value: string): void
    // Has conflict: canWrite(): boolean
    // Has conflict: getActivationUri(): string
    // Has conflict: getFileType(): Gio.FileType
    // Has conflict: getLocation(): Gio.File
    // Has conflict: getMimeType(): string
    // Has conflict: getMount(): Gio.Mount | null
    // Has conflict: getName(): string
    // Has conflict: getParentInfo(): FileInfo | null
    // Has conflict: getParentLocation(): Gio.File | null
    // Has conflict: getParentUri(): string
    // Has conflict: getStringAttribute(attributeName: string): string
    // Has conflict: getUri(): string
    // Has conflict: getUriScheme(): string
    // Has conflict: invalidateExtensionInfo(): void
    // Has conflict: isDirectory(): boolean
    // Has conflict: isGone(): boolean
    // Has conflict: isMimeType(mimeType: string): boolean

    // Own virtual methods of Nautilus-3.0.Nautilus.FileInfo

    addEmblem(emblemName: string): void
    addStringAttribute(attributeName: string, value: string): void
    canWrite(): boolean
    getActivationUri(): string
    getFileType(): Gio.FileType
    getLocation(): Gio.File
    getMimeType(): string
    getMount(): Gio.Mount | null
    getName(): string
    /**
     * It's not safe to call this recursively multiple times, as it works
     * only for files already cached by Nautilus.
     * @virtual 
     */
    getParentInfo(): FileInfo | null
    getParentLocation(): Gio.File | null
    getParentUri(): string
    getStringAttribute(attributeName: string): string
    getUri(): string
    getUriScheme(): string
    invalidateExtensionInfo(): void
    isDirectory(): boolean
    isGone(): boolean
    isMimeType(mimeType: string): boolean

    // Class property signals of Nautilus-3.0.Nautilus.FileInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FileInfo extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.FileInfo

    static name: string

    // Constructors of Nautilus-3.0.Nautilus.FileInfo

    constructor(config?: FileInfo.ConstructorProperties) 
    _init(config?: FileInfo.ConstructorProperties): void
    static create(location: Gio.File): FileInfo
    static createForUri(uri: string): FileInfo
    static listCopy(files: FileInfo[]): FileInfo[]
    static listFree(files: FileInfo[]): void
    static lookup(location: Gio.File): FileInfo | null
    static lookupForUri(uri: string): FileInfo | null
}

export module InfoProvider {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface InfoProvider {

    // Owm methods of Nautilus-3.0.Nautilus.InfoProvider

    cancelUpdate(handle: OperationHandle): void
    updateFileInfo(file: FileInfo, updateComplete: GObject.TClosure, handle: OperationHandle): OperationResult

    // Class property signals of Nautilus-3.0.Nautilus.InfoProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class InfoProvider extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.InfoProvider

    static name: string

    // Constructors of Nautilus-3.0.Nautilus.InfoProvider

    constructor(config?: InfoProvider.ConstructorProperties) 
    _init(config?: InfoProvider.ConstructorProperties): void
    static updateCompleteInvoke(updateComplete: GObject.TClosure, provider: InfoProvider, handle: OperationHandle, result: OperationResult): void
}

export module LocationWidgetProvider {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface LocationWidgetProvider {

    // Owm methods of Nautilus-3.0.Nautilus.LocationWidgetProvider

    getWidget(uri: string, window: Gtk.Widget): Gtk.Widget | null

    // Class property signals of Nautilus-3.0.Nautilus.LocationWidgetProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class LocationWidgetProvider extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.LocationWidgetProvider

    static name: string

    // Constructors of Nautilus-3.0.Nautilus.LocationWidgetProvider

    constructor(config?: LocationWidgetProvider.ConstructorProperties) 
    _init(config?: LocationWidgetProvider.ConstructorProperties): void
}

export module MenuProvider {

    // Signal callback interfaces

    /**
     * Signal callback interface for `items-updated`
     */
    export interface ItemsUpdatedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MenuProvider {

    // Owm methods of Nautilus-3.0.Nautilus.MenuProvider

    /**
     * Emits #NautilusMenuProvider::items-updated.
     */
    emitItemsUpdatedSignal(): void
    getBackgroundItems(window: Gtk.Widget, currentFolder: FileInfo): MenuItem[] | null
    getFileItems(window: Gtk.Widget, files: FileInfo[]): MenuItem[] | null

    // Own signals of Nautilus-3.0.Nautilus.MenuProvider

    connect(sigName: "items-updated", callback: MenuProvider.ItemsUpdatedSignalCallback): number
    on(sigName: "items-updated", callback: MenuProvider.ItemsUpdatedSignalCallback): number
    once(sigName: "items-updated", callback: MenuProvider.ItemsUpdatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "items-updated", ...args: any[]): void

    // Class property signals of Nautilus-3.0.Nautilus.MenuProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MenuProvider extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.MenuProvider

    static name: string

    // Constructors of Nautilus-3.0.Nautilus.MenuProvider

    constructor(config?: MenuProvider.ConstructorProperties) 
    _init(config?: MenuProvider.ConstructorProperties): void
}

export module PropertyPageProvider {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface PropertyPageProvider {

    // Owm methods of Nautilus-3.0.Nautilus.PropertyPageProvider

    /**
     * This function is called by Nautilus when it wants property page
     * items from the extension.
     * 
     * This function is called in the main thread before a property page
     * is shown, so it should return quickly.
     * @param files a #GList of #NautilusFileInfo
     */
    getPages(files: FileInfo[]): PropertyPage[] | null

    // Class property signals of Nautilus-3.0.Nautilus.PropertyPageProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PropertyPageProvider extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.PropertyPageProvider

    static name: string

    // Constructors of Nautilus-3.0.Nautilus.PropertyPageProvider

    constructor(config?: PropertyPageProvider.ConstructorProperties) 
    _init(config?: PropertyPageProvider.ConstructorProperties): void
}

export module Column {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Nautilus-3.0.Nautilus.Column

        attribute?: string | null
        defaultSortOrder?: Gtk.SortType | null
        description?: string | null
        label?: string | null
        name?: string | null
        xalign?: number | null
    }

}

export interface Column {

    // Own properties of Nautilus-3.0.Nautilus.Column

    attribute: string
    readonly attributeQ: number
    defaultSortOrder: Gtk.SortType
    description: string
    label: string
    readonly name: string
    xalign: number

    // Class property signals of Nautilus-3.0.Nautilus.Column

    connect(sigName: "notify::attribute", callback: any): number
    on(sigName: "notify::attribute", callback: any): number
    once(sigName: "notify::attribute", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attribute", ...args: any[]): void
    connect(sigName: "notify::attribute-q", callback: any): number
    on(sigName: "notify::attribute-q", callback: any): number
    once(sigName: "notify::attribute-q", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attribute-q", ...args: any[]): void
    connect(sigName: "notify::default-sort-order", callback: any): number
    on(sigName: "notify::default-sort-order", callback: any): number
    once(sigName: "notify::default-sort-order", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-sort-order", ...args: any[]): void
    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: any): number
    on(sigName: "notify::xalign", callback: any): number
    once(sigName: "notify::xalign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Column extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.Column

    static name: string

    // Constructors of Nautilus-3.0.Nautilus.Column

    constructor(config?: Column.ConstructorProperties) 
    constructor(name: string, attribute: string, label: string, description: string) 
    static new(name: string, attribute: string, label: string, description: string): Column
    _init(config?: Column.ConstructorProperties): void
}

export module Menu {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Menu {

    // Owm methods of Nautilus-3.0.Nautilus.Menu

    appendItem(item: MenuItem): void
    getItems(): MenuItem[] | null

    // Class property signals of Nautilus-3.0.Nautilus.Menu

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Menu extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.Menu

    static name: string

    // Constructors of Nautilus-3.0.Nautilus.Menu

    constructor(config?: Menu.ConstructorProperties) 
    constructor() 
    static new(): Menu
    _init(config?: Menu.ConstructorProperties): void
}

export module MenuItem {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate`
     */
    export interface ActivateSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Nautilus-3.0.Nautilus.MenuItem

        icon?: string | null
        label?: string | null
        menu?: Menu | null
        name?: string | null
        priority?: boolean | null
        sensitive?: boolean | null
        tip?: string | null
    }

}

export interface MenuItem {

    // Own properties of Nautilus-3.0.Nautilus.MenuItem

    icon: string
    label: string
    menu: Menu
    readonly name: string
    priority: boolean
    sensitive: boolean
    tip: string

    // Own fields of Nautilus-3.0.Nautilus.MenuItem

    parentInstance: GObject.Object

    // Owm methods of Nautilus-3.0.Nautilus.MenuItem

    // Has conflict: activate(): void
    /**
     * Attaches a menu to the given #NautilusMenuItem.
     * @param menu pointer to a #NautilusMenu to attach to the button
     */
    setSubmenu(menu: Menu): void

    // Own virtual methods of Nautilus-3.0.Nautilus.MenuItem

    /**
     * Emits #NautilusMenuItem::activate.
     * @virtual 
     */
    activate(): void

    // Own signals of Nautilus-3.0.Nautilus.MenuItem

    connect(sigName: "activate", callback: MenuItem.ActivateSignalCallback): number
    on(sigName: "activate", callback: MenuItem.ActivateSignalCallback): number
    once(sigName: "activate", callback: MenuItem.ActivateSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "activate", ...args: any[]): void

    // Class property signals of Nautilus-3.0.Nautilus.MenuItem

    connect(sigName: "notify::icon", callback: any): number
    on(sigName: "notify::icon", callback: any): number
    once(sigName: "notify::icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::menu", callback: any): number
    on(sigName: "notify::menu", callback: any): number
    once(sigName: "notify::menu", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::menu", ...args: any[]): void
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
    connect(sigName: "notify::sensitive", callback: any): number
    on(sigName: "notify::sensitive", callback: any): number
    once(sigName: "notify::sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tip", callback: any): number
    on(sigName: "notify::tip", callback: any): number
    once(sigName: "notify::tip", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tip", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MenuItem extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.MenuItem

    static name: string

    // Constructors of Nautilus-3.0.Nautilus.MenuItem

    constructor(config?: MenuItem.ConstructorProperties) 
    /**
     * Creates a new menu item that can be added to the toolbar or to a contextual menu.
     * @constructor 
     * @param name the identifier for the menu item
     * @param label the user-visible label of the menu item
     * @param tip the tooltip of the menu item
     * @param icon the name of the icon to display in the menu item
     */
    constructor(name: string, label: string, tip: string | null, icon: string | null) 
    /**
     * Creates a new menu item that can be added to the toolbar or to a contextual menu.
     * @constructor 
     * @param name the identifier for the menu item
     * @param label the user-visible label of the menu item
     * @param tip the tooltip of the menu item
     * @param icon the name of the icon to display in the menu item
     */
    static new(name: string, label: string, tip: string | null, icon: string | null): MenuItem
    _init(config?: MenuItem.ConstructorProperties): void
    static listFree(itemList: MenuItem[]): void
}

export module PropertyPage {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Nautilus-3.0.Nautilus.PropertyPage

        label?: Gtk.Widget | null
        name?: string | null
        page?: Gtk.Widget | null
    }

}

export interface PropertyPage {

    // Own properties of Nautilus-3.0.Nautilus.PropertyPage

    label: Gtk.Widget
    readonly name: string
    page: Gtk.Widget

    // Class property signals of Nautilus-3.0.Nautilus.PropertyPage

    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::page", callback: any): number
    on(sigName: "notify::page", callback: any): number
    once(sigName: "notify::page", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PropertyPage extends GObject.Object {

    // Own properties of Nautilus-3.0.Nautilus.PropertyPage

    static name: string

    // Constructors of Nautilus-3.0.Nautilus.PropertyPage

    constructor(config?: PropertyPage.ConstructorProperties) 
    constructor(name: string, label: Gtk.Widget, page: Gtk.Widget) 
    static new(name: string, label: Gtk.Widget, page: Gtk.Widget): PropertyPage
    _init(config?: PropertyPage.ConstructorProperties): void
}

export interface ColumnClass {

    // Own fields of Nautilus-3.0.Nautilus.ColumnClass

    parentClass: GObject.ObjectClass
}

export abstract class ColumnClass {

    // Own properties of Nautilus-3.0.Nautilus.ColumnClass

    static name: string
}

export interface ColumnProviderInterface {

    // Own fields of Nautilus-3.0.Nautilus.ColumnProviderInterface

    /**
     * The parent interface.
     * @field 
     */
    gIface: GObject.TypeInterface
}

/**
 * Interface for extensions to provide additional list view columns.
 * @record 
 */
export class ColumnProviderInterface {

    // Own properties of Nautilus-3.0.Nautilus.ColumnProviderInterface

    static name: string
}

export interface File {
}

export class File {

    // Own properties of Nautilus-3.0.Nautilus.File

    static name: string
}

export interface FileInfoInterface {

    // Own fields of Nautilus-3.0.Nautilus.FileInfoInterface

    /**
     * The parent interface.
     * @field 
     */
    gIface: GObject.TypeInterface
    isGone: (fileInfo: FileInfo) => boolean
    getName: (fileInfo: FileInfo) => string
    getUri: (fileInfo: FileInfo) => string
    getParentUri: (fileInfo: FileInfo) => string
    getUriScheme: (fileInfo: FileInfo) => string
    getMimeType: (fileInfo: FileInfo) => string
    isMimeType: (fileInfo: FileInfo, mimeType: string) => boolean
    isDirectory: (fileInfo: FileInfo) => boolean
    addEmblem: (fileInfo: FileInfo, emblemName: string) => void
    getStringAttribute: (fileInfo: FileInfo, attributeName: string) => string
    addStringAttribute: (fileInfo: FileInfo, attributeName: string, value: string) => void
    invalidateExtensionInfo: (fileInfo: FileInfo) => void
    getActivationUri: (fileInfo: FileInfo) => string
    getFileType: (fileInfo: FileInfo) => Gio.FileType
    getLocation: (fileInfo: FileInfo) => Gio.File
    getParentLocation: (fileInfo: FileInfo) => Gio.File | null
    getParentInfo: (fileInfo: FileInfo) => FileInfo | null
    getMount: (fileInfo: FileInfo) => Gio.Mount | null
    canWrite: (fileInfo: FileInfo) => boolean
}

/**
 * Interface for extensions to provide additional menu items.
 * @record 
 */
export abstract class FileInfoInterface {

    // Own properties of Nautilus-3.0.Nautilus.FileInfoInterface

    static name: string
}

export interface InfoProviderInterface {

    // Own fields of Nautilus-3.0.Nautilus.InfoProviderInterface

    /**
     * The parent interface.
     * @field 
     */
    gIface: GObject.TypeInterface
    updateFileInfo: (provider: InfoProvider, file: FileInfo, updateComplete: GObject.TClosure, handle: OperationHandle) => OperationResult
    cancelUpdate: (provider: InfoProvider, handle: OperationHandle) => void
}

/**
 * Interface for extensions to provide additional information about files.
 * @record 
 */
export class InfoProviderInterface {

    // Own properties of Nautilus-3.0.Nautilus.InfoProviderInterface

    static name: string
}

export interface LocationWidgetProviderInterface {

    // Own fields of Nautilus-3.0.Nautilus.LocationWidgetProviderInterface

    /**
     * The parent interface.
     * @field 
     */
    gIface: GObject.TypeInterface
}

/**
 * Interface for extensions to provide additional location widgets.
 * @record 
 */
export class LocationWidgetProviderInterface {

    // Own properties of Nautilus-3.0.Nautilus.LocationWidgetProviderInterface

    static name: string
}

export interface MenuClass {

    // Own fields of Nautilus-3.0.Nautilus.MenuClass

    parentClass: GObject.ObjectClass
}

export abstract class MenuClass {

    // Own properties of Nautilus-3.0.Nautilus.MenuClass

    static name: string
}

export interface MenuItemClass {

    // Own fields of Nautilus-3.0.Nautilus.MenuItemClass

    parent: GObject.ObjectClass
    activate: (item: MenuItem) => void
}

export abstract class MenuItemClass {

    // Own properties of Nautilus-3.0.Nautilus.MenuItemClass

    static name: string
}

export interface MenuProviderInterface {

    // Own fields of Nautilus-3.0.Nautilus.MenuProviderInterface

    /**
     * The parent interface.
     * @field 
     */
    gIface: GObject.TypeInterface
}

/**
 * Interface for extensions to provide additional menu items.
 * @record 
 */
export class MenuProviderInterface {

    // Own properties of Nautilus-3.0.Nautilus.MenuProviderInterface

    static name: string
}

export interface OperationHandle {
}

/**
 * Handle for asynchronous interfaces. These are opaque handles that must
 * be unique within an extension object. These are returned by operations
 * that return #NAUTILUS_OPERATION_IN_PROGRESS.
 * @record 
 */
export class OperationHandle {

    // Own properties of Nautilus-3.0.Nautilus.OperationHandle

    static name: string
}

export interface PropertyPageClass {

    // Own fields of Nautilus-3.0.Nautilus.PropertyPageClass

    parentClass: GObject.ObjectClass
}

export abstract class PropertyPageClass {

    // Own properties of Nautilus-3.0.Nautilus.PropertyPageClass

    static name: string
}

export interface PropertyPageProviderInterface {

    // Own fields of Nautilus-3.0.Nautilus.PropertyPageProviderInterface

    /**
     * The parent interface.
     * @field 
     */
    gIface: GObject.TypeInterface
}

/**
 * Interface for extensions to provide additional property pages.
 * @record 
 */
export class PropertyPageProviderInterface {

    // Own properties of Nautilus-3.0.Nautilus.PropertyPageProviderInterface

    static name: string
}
