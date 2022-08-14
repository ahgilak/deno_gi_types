
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Caribou-1.0
 */

import type * as Gdk from './Gdk-3.0.js';
import type * as cairo from './cairo-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GdkPixbuf from './GdkPixbuf-2.0.js';
import type * as GModule from './GModule-2.0.js';

export enum ModifierState {
    NONE,
    LATCHED,
    LOCKED,
}
export enum ScanGrouping {
    NONE,
    SUBGROUPS,
    ROWS,
    LINEAR,
}
export interface KeyButtonCallback {
    (keybuttoncode: number, pressed: boolean): void
}
export module IScannableItem {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Caribou-1.0.Caribou.IScannableItem

        scanStepping?: boolean | null
        scanSelected?: boolean | null
    }

}

export interface IScannableItem extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.IScannableItem

    scanStepping: boolean
    scanSelected: boolean

    // Owm methods of Caribou-1.0.Caribou.IScannableItem

    // Has conflict: getScanStepping(): boolean
    // Has conflict: setScanStepping(value: boolean): void
    // Has conflict: getScanSelected(): boolean
    // Has conflict: setScanSelected(value: boolean): void

    // Own virtual methods of Caribou-1.0.Caribou.IScannableItem

    getScanStepping(): boolean
    setScanStepping(value: boolean): void
    getScanSelected(): boolean
    setScanSelected(value: boolean): void

    // Class property signals of Caribou-1.0.Caribou.IScannableItem

    connect(sigName: "notify::scan-stepping", callback: any): number
    on(sigName: "notify::scan-stepping", callback: any): number
    once(sigName: "notify::scan-stepping", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scan-stepping", ...args: any[]): void
    connect(sigName: "notify::scan-selected", callback: any): number
    on(sigName: "notify::scan-selected", callback: any): number
    once(sigName: "notify::scan-selected", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scan-selected", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IScannableItem {

    // Own properties of Caribou-1.0.Caribou.IScannableItem

    static name: string

    // Constructors of Caribou-1.0.Caribou.IScannableItem

    constructor(config?: IScannableItem.ConstructorProperties) 
    _init(config?: IScannableItem.ConstructorProperties): void
}

export module IScannableGroup {

    // Signal callback interfaces

    /**
     * Signal callback interface for `selected-item-changed`
     */
    export interface SelectedItemChangedSignalCallback {
        (selectedItem?: IScannableItem | null): void
    }

    /**
     * Signal callback interface for `step-item-changed`
     */
    export interface StepItemChangedSignalCallback {
        (stepItem?: IScannableItem | null): void
    }

    /**
     * Signal callback interface for `scan-cleared`
     */
    export interface ScanClearedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Caribou-1.0.Caribou.IScannableGroup

        scanGrouping?: ScanGrouping | null
    }

}

export interface IScannableGroup extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.IScannableGroup

    scanGrouping: ScanGrouping

    // Owm methods of Caribou-1.0.Caribou.IScannableGroup

    // Has conflict: childSelect(): IScannableItem | null
    // Has conflict: scanReset(): void
    // Has conflict: getScanChildren(): IScannableItem[]
    // Has conflict: childStep(cycles: number): IScannableItem | null
    // Has conflict: getStepPath(): IScannableItem[]
    // Has conflict: getSelectedPath(): IScannableItem[]
    // Has conflict: getScanGrouping(): ScanGrouping
    // Has conflict: setScanGrouping(value: ScanGrouping): void

    // Own virtual methods of Caribou-1.0.Caribou.IScannableGroup

    childSelect(): IScannableItem | null
    scanReset(): void
    getScanChildren(): IScannableItem[]
    childStep(cycles: number): IScannableItem | null
    getStepPath(): IScannableItem[]
    getSelectedPath(): IScannableItem[]
    getScanGrouping(): ScanGrouping
    setScanGrouping(value: ScanGrouping): void

    // Own signals of Caribou-1.0.Caribou.IScannableGroup

    connect(sigName: "selected-item-changed", callback: IScannableGroup.SelectedItemChangedSignalCallback): number
    on(sigName: "selected-item-changed", callback: IScannableGroup.SelectedItemChangedSignalCallback): number
    once(sigName: "selected-item-changed", callback: IScannableGroup.SelectedItemChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "selected-item-changed", ...args: any[]): void
    connect(sigName: "step-item-changed", callback: IScannableGroup.StepItemChangedSignalCallback): number
    on(sigName: "step-item-changed", callback: IScannableGroup.StepItemChangedSignalCallback): number
    once(sigName: "step-item-changed", callback: IScannableGroup.StepItemChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "step-item-changed", ...args: any[]): void
    connect(sigName: "scan-cleared", callback: IScannableGroup.ScanClearedSignalCallback): number
    on(sigName: "scan-cleared", callback: IScannableGroup.ScanClearedSignalCallback): number
    once(sigName: "scan-cleared", callback: IScannableGroup.ScanClearedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "scan-cleared", ...args: any[]): void

    // Class property signals of Caribou-1.0.Caribou.IScannableGroup

    connect(sigName: "notify::scan-grouping", callback: any): number
    on(sigName: "notify::scan-grouping", callback: any): number
    once(sigName: "notify::scan-grouping", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scan-grouping", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IScannableGroup {

    // Own properties of Caribou-1.0.Caribou.IScannableGroup

    static name: string

    // Constructors of Caribou-1.0.Caribou.IScannableGroup

    constructor(config?: IScannableGroup.ConstructorProperties) 
    _init(config?: IScannableGroup.ConstructorProperties): void
}

export module IKeyboardObject {

    // Signal callback interfaces

    /**
     * Signal callback interface for `key-clicked`
     */
    export interface KeyClickedSignalCallback {
        (key: KeyModel): void
    }

    /**
     * Signal callback interface for `key-pressed`
     */
    export interface KeyPressedSignalCallback {
        (key: KeyModel): void
    }

    /**
     * Signal callback interface for `key-released`
     */
    export interface KeyReleasedSignalCallback {
        (key: KeyModel): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface IKeyboardObject extends GObject.Object {

    // Owm methods of Caribou-1.0.Caribou.IKeyboardObject

    // Has conflict: getChildren(): IKeyboardObject[]
    // Has conflict: getKeys(): KeyModel[]

    // Own virtual methods of Caribou-1.0.Caribou.IKeyboardObject

    getChildren(): IKeyboardObject[]
    getKeys(): KeyModel[]

    // Own signals of Caribou-1.0.Caribou.IKeyboardObject

    connect(sigName: "key-clicked", callback: IKeyboardObject.KeyClickedSignalCallback): number
    on(sigName: "key-clicked", callback: IKeyboardObject.KeyClickedSignalCallback): number
    once(sigName: "key-clicked", callback: IKeyboardObject.KeyClickedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "key-clicked", ...args: any[]): void
    connect(sigName: "key-pressed", callback: IKeyboardObject.KeyPressedSignalCallback): number
    on(sigName: "key-pressed", callback: IKeyboardObject.KeyPressedSignalCallback): number
    once(sigName: "key-pressed", callback: IKeyboardObject.KeyPressedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "key-pressed", ...args: any[]): void
    connect(sigName: "key-released", callback: IKeyboardObject.KeyReleasedSignalCallback): number
    on(sigName: "key-released", callback: IKeyboardObject.KeyReleasedSignalCallback): number
    once(sigName: "key-released", callback: IKeyboardObject.KeyReleasedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "key-released", ...args: any[]): void

    // Class property signals of Caribou-1.0.Caribou.IKeyboardObject

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IKeyboardObject {

    // Own properties of Caribou-1.0.Caribou.IKeyboardObject

    static name: string

    // Constructors of Caribou-1.0.Caribou.IKeyboardObject

    constructor(config?: IKeyboardObject.ConstructorProperties) 
    _init(config?: IKeyboardObject.ConstructorProperties): void
}

export module DisplayAdapter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `modifiers-changed`
     */
    export interface ModifiersChangedSignalCallback {
        (modifiers: number): void
    }

    /**
     * Signal callback interface for `group-changed`
     */
    export interface GroupChangedSignalCallback {
        (gid: number, group: string, variant: string): void
    }

    /**
     * Signal callback interface for `config-changed`
     */
    export interface ConfigChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Caribou-1.0.Caribou.DisplayAdapter

        display?: Gdk.Display | null
    }

}

export interface DisplayAdapter {

    // Own properties of Caribou-1.0.Caribou.DisplayAdapter

    readonly display: Gdk.Display

    // Owm methods of Caribou-1.0.Caribou.DisplayAdapter

    // Has conflict: keyvalPress(keyval: number): void
    // Has conflict: keyvalRelease(keyval: number): void
    // Has conflict: modLock(mask: number): void
    // Has conflict: modUnlock(mask: number): void
    // Has conflict: modLatch(mask: number): void
    // Has conflict: modUnlatch(mask: number): void
    // Has conflict: getCurrentGroup(): [ /* returnType */ number, /* groupName */ string, /* variantName */ string ]
    // Has conflict: getGroups(): [ /* groupNames */ string[], /* variantNames */ string[] ]
    // Has conflict: registerKeyFunc(keyval: number, func?: KeyButtonCallback | null): void
    // Has conflict: registerButtonFunc(button: number, func?: KeyButtonCallback | null): void
    getDisplay(): Gdk.Display

    // Own virtual methods of Caribou-1.0.Caribou.DisplayAdapter

    keyvalPress(keyval: number): void
    keyvalRelease(keyval: number): void
    modLock(mask: number): void
    modUnlock(mask: number): void
    modLatch(mask: number): void
    modUnlatch(mask: number): void
    getCurrentGroup(): [ /* returnType */ number, /* groupName */ string, /* variantName */ string ]
    getGroups(): [ /* groupNames */ string[], /* variantNames */ string[] ]
    registerKeyFunc(keyval: number, func?: KeyButtonCallback | null): void
    registerButtonFunc(button: number, func?: KeyButtonCallback | null): void

    // Own signals of Caribou-1.0.Caribou.DisplayAdapter

    connect(sigName: "modifiers-changed", callback: DisplayAdapter.ModifiersChangedSignalCallback): number
    on(sigName: "modifiers-changed", callback: DisplayAdapter.ModifiersChangedSignalCallback): number
    once(sigName: "modifiers-changed", callback: DisplayAdapter.ModifiersChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "modifiers-changed", ...args: any[]): void
    connect(sigName: "group-changed", callback: DisplayAdapter.GroupChangedSignalCallback): number
    on(sigName: "group-changed", callback: DisplayAdapter.GroupChangedSignalCallback): number
    once(sigName: "group-changed", callback: DisplayAdapter.GroupChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "group-changed", group: string, variant: string, ...args: any[]): void
    connect(sigName: "config-changed", callback: DisplayAdapter.ConfigChangedSignalCallback): number
    on(sigName: "config-changed", callback: DisplayAdapter.ConfigChangedSignalCallback): number
    once(sigName: "config-changed", callback: DisplayAdapter.ConfigChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "config-changed", ...args: any[]): void

    // Class property signals of Caribou-1.0.Caribou.DisplayAdapter

    connect(sigName: "notify::display", callback: any): number
    on(sigName: "notify::display", callback: any): number
    once(sigName: "notify::display", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DisplayAdapter extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.DisplayAdapter

    static name: string

    // Constructors of Caribou-1.0.Caribou.DisplayAdapter

    constructor(config?: DisplayAdapter.ConstructorProperties) 
    _init(config?: DisplayAdapter.ConstructorProperties): void
    static setDefault(adapter: DisplayAdapter): boolean
    static getDefault(): DisplayAdapter
}

export module NullAdapter {

    // Constructor properties interface

    export interface ConstructorProperties extends DisplayAdapter.ConstructorProperties {
    }

}

export interface NullAdapter {

    // Class property signals of Caribou-1.0.Caribou.NullAdapter

    connect(sigName: "notify::display", callback: any): number
    on(sigName: "notify::display", callback: any): number
    once(sigName: "notify::display", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class NullAdapter extends DisplayAdapter {

    // Own properties of Caribou-1.0.Caribou.NullAdapter

    static name: string

    // Constructors of Caribou-1.0.Caribou.NullAdapter

    constructor(config?: NullAdapter.ConstructorProperties) 
    constructor() 
    static new(): NullAdapter
    _init(config?: NullAdapter.ConstructorProperties): void
}

export module XAdapter {

    // Constructor properties interface

    export interface ConstructorProperties extends DisplayAdapter.ConstructorProperties {
    }

}

export interface XAdapter {

    // Class property signals of Caribou-1.0.Caribou.XAdapter

    connect(sigName: "notify::display", callback: any): number
    on(sigName: "notify::display", callback: any): number
    once(sigName: "notify::display", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XAdapter extends DisplayAdapter {

    // Own properties of Caribou-1.0.Caribou.XAdapter

    static name: string

    // Constructors of Caribou-1.0.Caribou.XAdapter

    constructor(config?: XAdapter.ConstructorProperties) 
    constructor() 
    static new(): XAdapter
    _init(config?: XAdapter.ConstructorProperties): void
}

export module KeyboardModel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `group-added`
     */
    export interface GroupAddedSignalCallback {
        (name: string): void
    }

    /**
     * Signal callback interface for `group-removed`
     */
    export interface GroupRemovedSignalCallback {
        (name: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends IKeyboardObject.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Caribou-1.0.Caribou.KeyboardModel

        activeGroup?: string | null
        keyboardType?: string | null
        keyboardFile?: string | null
    }

}

export interface KeyboardModel extends IKeyboardObject {

    // Own properties of Caribou-1.0.Caribou.KeyboardModel

    activeGroup: string
    readonly keyboardType: string
    readonly keyboardFile: string

    // Owm methods of Caribou-1.0.Caribou.KeyboardModel

    getGroups(): string[]
    getGroup(groupName: string): GroupModel
    getActiveGroup(): string
    getKeyboardType(): string
    getKeyboardFile(): string

    // Own signals of Caribou-1.0.Caribou.KeyboardModel

    connect(sigName: "group-added", callback: KeyboardModel.GroupAddedSignalCallback): number
    on(sigName: "group-added", callback: KeyboardModel.GroupAddedSignalCallback): number
    once(sigName: "group-added", callback: KeyboardModel.GroupAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "group-added", ...args: any[]): void
    connect(sigName: "group-removed", callback: KeyboardModel.GroupRemovedSignalCallback): number
    on(sigName: "group-removed", callback: KeyboardModel.GroupRemovedSignalCallback): number
    once(sigName: "group-removed", callback: KeyboardModel.GroupRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "group-removed", ...args: any[]): void

    // Class property signals of Caribou-1.0.Caribou.KeyboardModel

    connect(sigName: "notify::active-group", callback: any): number
    on(sigName: "notify::active-group", callback: any): number
    once(sigName: "notify::active-group", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active-group", ...args: any[]): void
    connect(sigName: "notify::keyboard-type", callback: any): number
    on(sigName: "notify::keyboard-type", callback: any): number
    once(sigName: "notify::keyboard-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::keyboard-type", ...args: any[]): void
    connect(sigName: "notify::keyboard-file", callback: any): number
    on(sigName: "notify::keyboard-file", callback: any): number
    once(sigName: "notify::keyboard-file", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::keyboard-file", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class KeyboardModel extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.KeyboardModel

    static name: string

    // Constructors of Caribou-1.0.Caribou.KeyboardModel

    constructor(config?: KeyboardModel.ConstructorProperties) 
    constructor() 
    static new(): KeyboardModel
    _init(config?: KeyboardModel.ConstructorProperties): void
}

export module KeyboardService {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface KeyboardService {

    // Owm methods of Caribou-1.0.Caribou.KeyboardService

    // Has conflict: setCursorLocation(x: number, y: number, w: number, h: number): void
    // Has conflict: setEntryLocation(x: number, y: number, w: number, h: number): void
    // Has conflict: show(timestamp: number): void
    // Has conflict: hide(timestamp: number): void
    registerKeyboard(name: string): void
    // Has conflict: nameLost(name: string): void

    // Own virtual methods of Caribou-1.0.Caribou.KeyboardService

    setCursorLocation(x: number, y: number, w: number, h: number): void
    setEntryLocation(x: number, y: number, w: number, h: number): void
    show(timestamp: number): void
    hide(timestamp: number): void
    nameLost(name: string): void

    // Class property signals of Caribou-1.0.Caribou.KeyboardService

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class KeyboardService extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.KeyboardService

    static name: string

    // Constructors of Caribou-1.0.Caribou.KeyboardService

    constructor(config?: KeyboardService.ConstructorProperties) 
    _init(config?: KeyboardService.ConstructorProperties): void
}

export module GroupModel {

    // Constructor properties interface

    export interface ConstructorProperties extends IKeyboardObject.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Caribou-1.0.Caribou.GroupModel

        activeLevel?: string | null
    }

}

export interface GroupModel extends IKeyboardObject {

    // Own properties of Caribou-1.0.Caribou.GroupModel

    activeLevel: string

    // Own fields of Caribou-1.0.Caribou.GroupModel

    group: string
    variant: string

    // Owm methods of Caribou-1.0.Caribou.GroupModel

    getLevels(): string[]
    getLevel(levelName: string): LevelModel
    getActiveLevel(): string

    // Class property signals of Caribou-1.0.Caribou.GroupModel

    connect(sigName: "notify::active-level", callback: any): number
    on(sigName: "notify::active-level", callback: any): number
    once(sigName: "notify::active-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active-level", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class GroupModel extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.GroupModel

    static name: string

    // Constructors of Caribou-1.0.Caribou.GroupModel

    constructor(config?: GroupModel.ConstructorProperties) 
    constructor(group: string, variant: string) 
    static new(group: string, variant: string): GroupModel
    _init(config?: GroupModel.ConstructorProperties): void
    static createGroupName(group: string, variant: string): string
}

export module LevelModel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `level-toggled`
     */
    export interface LevelToggledSignalCallback {
        (newLevel: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends IKeyboardObject.ConstructorProperties, ScannableGroup.ConstructorProperties {

        // Own constructor properties of Caribou-1.0.Caribou.LevelModel

        mode?: string | null
    }

}

export interface LevelModel extends IKeyboardObject {

    // Own properties of Caribou-1.0.Caribou.LevelModel

    mode: string

    // Owm methods of Caribou-1.0.Caribou.LevelModel

    getRows(): RowModel[]
    getMode(): string

    // Conflicting methods

    getScanChildren(): IScannableItem[]

    // Overloads of getScanChildren

    getScanChildren(): IScannableItem[]
    getScanChildren(): IScannableItem[]
    childSelect(): IScannableItem | null

    // Overloads of childSelect

    childSelect(): IScannableItem | null
    childSelect(): IScannableItem | null

    // Own signals of Caribou-1.0.Caribou.LevelModel

    connect(sigName: "level-toggled", callback: LevelModel.LevelToggledSignalCallback): number
    on(sigName: "level-toggled", callback: LevelModel.LevelToggledSignalCallback): number
    once(sigName: "level-toggled", callback: LevelModel.LevelToggledSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "level-toggled", ...args: any[]): void

    // Class property signals of Caribou-1.0.Caribou.LevelModel

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

export class LevelModel extends ScannableGroup {

    // Own properties of Caribou-1.0.Caribou.LevelModel

    static name: string

    // Constructors of Caribou-1.0.Caribou.LevelModel

    constructor(config?: LevelModel.ConstructorProperties) 
    constructor(mode: string) 
    static new(mode: string): LevelModel
    _init(config?: LevelModel.ConstructorProperties): void
}

export module RowModel {

    // Constructor properties interface

    export interface ConstructorProperties extends IScannableItem.ConstructorProperties, IKeyboardObject.ConstructorProperties, ScannableGroup.ConstructorProperties {
    }

}

export interface RowModel extends IScannableItem, IKeyboardObject {

    // Owm methods of Caribou-1.0.Caribou.RowModel

    getColumns(): ColumnModel[]

    // Conflicting methods

    getScanChildren(): IScannableItem[]

    // Overloads of getScanChildren

    getScanChildren(): IScannableItem[]
    getScanChildren(): IScannableItem[]
    childSelect(): IScannableItem | null

    // Overloads of childSelect

    childSelect(): IScannableItem | null
    childSelect(): IScannableItem | null

    // Class property signals of Caribou-1.0.Caribou.RowModel

    connect(sigName: "notify::scan-stepping", callback: any): number
    on(sigName: "notify::scan-stepping", callback: any): number
    once(sigName: "notify::scan-stepping", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scan-stepping", ...args: any[]): void
    connect(sigName: "notify::scan-selected", callback: any): number
    on(sigName: "notify::scan-selected", callback: any): number
    once(sigName: "notify::scan-selected", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scan-selected", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class RowModel extends ScannableGroup {

    // Own properties of Caribou-1.0.Caribou.RowModel

    static name: string

    // Constructors of Caribou-1.0.Caribou.RowModel

    constructor(config?: RowModel.ConstructorProperties) 
    constructor() 
    static new(): RowModel
    _init(config?: RowModel.ConstructorProperties): void
}

export module KeyModel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `key-hold-end`
     */
    export interface KeyHoldEndSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `key-hold`
     */
    export interface KeyHoldSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends IScannableItem.ConstructorProperties, IKeyboardObject.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Caribou-1.0.Caribou.KeyModel

        align?: string | null
        width?: number | null
        toggle?: string | null
        repeatable?: boolean | null
        isModifier?: boolean | null
        showSubkeys?: boolean | null
        name?: string | null
        keyval?: number | null
        text?: string | null
        label?: string | null
    }

}

export interface KeyModel extends IScannableItem, IKeyboardObject {

    // Own properties of Caribou-1.0.Caribou.KeyModel

    align: string
    width: number
    toggle: string
    repeatable: boolean
    isModifier: boolean
    showSubkeys: boolean
    name: string
    keyval: number
    text: string
    label: string

    // Own fields of Caribou-1.0.Caribou.KeyModel

    modifierState: ModifierState

    // Owm methods of Caribou-1.0.Caribou.KeyModel

    press(): void
    release(): void
    getExtendedKeys(): KeyModel[]
    activate(): void
    getAlign(): string
    setAlign(value: string): void
    getWidth(): number
    setWidth(value: number): void
    getToggle(): string
    setToggle(value: string): void
    getRepeatable(): boolean
    setRepeatable(value: boolean): void
    getIsModifier(): boolean
    setIsModifier(value: boolean): void
    getShowSubkeys(): boolean
    getName(): string
    getKeyval(): number
    getText(): string | null
    getLabel(): string
    setLabel(value: string): void

    // Own signals of Caribou-1.0.Caribou.KeyModel

    connect(sigName: "key-hold-end", callback: KeyModel.KeyHoldEndSignalCallback): number
    on(sigName: "key-hold-end", callback: KeyModel.KeyHoldEndSignalCallback): number
    once(sigName: "key-hold-end", callback: KeyModel.KeyHoldEndSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "key-hold-end", ...args: any[]): void
    connect(sigName: "key-hold", callback: KeyModel.KeyHoldSignalCallback): number
    on(sigName: "key-hold", callback: KeyModel.KeyHoldSignalCallback): number
    once(sigName: "key-hold", callback: KeyModel.KeyHoldSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "key-hold", ...args: any[]): void

    // Class property signals of Caribou-1.0.Caribou.KeyModel

    connect(sigName: "notify::align", callback: any): number
    on(sigName: "notify::align", callback: any): number
    once(sigName: "notify::align", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::align", ...args: any[]): void
    connect(sigName: "notify::width", callback: any): number
    on(sigName: "notify::width", callback: any): number
    once(sigName: "notify::width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::toggle", callback: any): number
    on(sigName: "notify::toggle", callback: any): number
    once(sigName: "notify::toggle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::toggle", ...args: any[]): void
    connect(sigName: "notify::repeatable", callback: any): number
    on(sigName: "notify::repeatable", callback: any): number
    once(sigName: "notify::repeatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::repeatable", ...args: any[]): void
    connect(sigName: "notify::is-modifier", callback: any): number
    on(sigName: "notify::is-modifier", callback: any): number
    once(sigName: "notify::is-modifier", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-modifier", ...args: any[]): void
    connect(sigName: "notify::show-subkeys", callback: any): number
    on(sigName: "notify::show-subkeys", callback: any): number
    once(sigName: "notify::show-subkeys", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-subkeys", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::keyval", callback: any): number
    on(sigName: "notify::keyval", callback: any): number
    once(sigName: "notify::keyval", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::keyval", ...args: any[]): void
    connect(sigName: "notify::text", callback: any): number
    on(sigName: "notify::text", callback: any): number
    once(sigName: "notify::text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::scan-stepping", callback: any): number
    on(sigName: "notify::scan-stepping", callback: any): number
    once(sigName: "notify::scan-stepping", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scan-stepping", ...args: any[]): void
    connect(sigName: "notify::scan-selected", callback: any): number
    on(sigName: "notify::scan-selected", callback: any): number
    once(sigName: "notify::scan-selected", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scan-selected", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class KeyModel extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.KeyModel

    static name: string

    // Constructors of Caribou-1.0.Caribou.KeyModel

    constructor(config?: KeyModel.ConstructorProperties) 
    constructor(name: string, text?: string | null) 
    static new(name: string, text?: string | null): KeyModel
    _init(config?: KeyModel.ConstructorProperties): void
}

export module ColumnModel {

    // Constructor properties interface

    export interface ConstructorProperties extends IScannableItem.ConstructorProperties, IKeyboardObject.ConstructorProperties, ScannableGroup.ConstructorProperties {
    }

}

export interface ColumnModel extends IScannableItem, IKeyboardObject {

    // Owm methods of Caribou-1.0.Caribou.ColumnModel

    getKey(index: number): KeyModel
    firstKey(): KeyModel

    // Conflicting methods

    getScanChildren(): IScannableItem[]

    // Overloads of getScanChildren

    getScanChildren(): IScannableItem[]
    getScanChildren(): IScannableItem[]
    childSelect(): IScannableItem | null

    // Overloads of childSelect

    childSelect(): IScannableItem | null
    childSelect(): IScannableItem | null

    // Class property signals of Caribou-1.0.Caribou.ColumnModel

    connect(sigName: "notify::scan-stepping", callback: any): number
    on(sigName: "notify::scan-stepping", callback: any): number
    once(sigName: "notify::scan-stepping", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scan-stepping", ...args: any[]): void
    connect(sigName: "notify::scan-selected", callback: any): number
    on(sigName: "notify::scan-selected", callback: any): number
    once(sigName: "notify::scan-selected", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scan-selected", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ColumnModel extends ScannableGroup {

    // Own properties of Caribou-1.0.Caribou.ColumnModel

    static name: string

    // Constructors of Caribou-1.0.Caribou.ColumnModel

    constructor(config?: ColumnModel.ConstructorProperties) 
    constructor() 
    static new(): ColumnModel
    _init(config?: ColumnModel.ConstructorProperties): void
}

export module Scanner {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Caribou-1.0.Caribou.Scanner

        bindSettings?: boolean | null
        scanGrouping?: number | null
        scanEnabled?: boolean | null
        stepTime?: number | null
        switchDevice?: string | null
        keyboardKey?: string | null
        mouseButton?: number | null
        scanCycles?: number | null
        autorestart?: boolean | null
        inverseScanning?: boolean | null
    }

}

export interface Scanner {

    // Own properties of Caribou-1.0.Caribou.Scanner

    readonly bindSettings: boolean
    scanGrouping: number
    scanEnabled: boolean
    stepTime: number
    switchDevice: string
    keyboardKey: string
    mouseButton: number
    scanCycles: number
    autorestart: boolean
    inverseScanning: boolean

    // Owm methods of Caribou-1.0.Caribou.Scanner

    setKeyboard(keyboard: KeyboardModel): void
    reset(): void
    getBindSettings(): boolean
    getScanGrouping(): number
    setScanGrouping(value: number): void
    getScanEnabled(): boolean
    setScanEnabled(value: boolean): void
    getStepTime(): number
    setStepTime(value: number): void
    getSwitchDevice(): string
    setSwitchDevice(value: string): void
    getKeyboardKey(): string
    setKeyboardKey(value: string): void
    getMouseButton(): number
    setMouseButton(value: number): void
    getScanCycles(): number
    setScanCycles(value: number): void
    getAutorestart(): boolean
    setAutorestart(value: boolean): void
    getInverseScanning(): boolean
    setInverseScanning(value: boolean): void

    // Class property signals of Caribou-1.0.Caribou.Scanner

    connect(sigName: "notify::bind-settings", callback: any): number
    on(sigName: "notify::bind-settings", callback: any): number
    once(sigName: "notify::bind-settings", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bind-settings", ...args: any[]): void
    connect(sigName: "notify::scan-grouping", callback: any): number
    on(sigName: "notify::scan-grouping", callback: any): number
    once(sigName: "notify::scan-grouping", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scan-grouping", ...args: any[]): void
    connect(sigName: "notify::scan-enabled", callback: any): number
    on(sigName: "notify::scan-enabled", callback: any): number
    once(sigName: "notify::scan-enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scan-enabled", ...args: any[]): void
    connect(sigName: "notify::step-time", callback: any): number
    on(sigName: "notify::step-time", callback: any): number
    once(sigName: "notify::step-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::step-time", ...args: any[]): void
    connect(sigName: "notify::switch-device", callback: any): number
    on(sigName: "notify::switch-device", callback: any): number
    once(sigName: "notify::switch-device", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::switch-device", ...args: any[]): void
    connect(sigName: "notify::keyboard-key", callback: any): number
    on(sigName: "notify::keyboard-key", callback: any): number
    once(sigName: "notify::keyboard-key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::keyboard-key", ...args: any[]): void
    connect(sigName: "notify::mouse-button", callback: any): number
    on(sigName: "notify::mouse-button", callback: any): number
    once(sigName: "notify::mouse-button", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mouse-button", ...args: any[]): void
    connect(sigName: "notify::scan-cycles", callback: any): number
    on(sigName: "notify::scan-cycles", callback: any): number
    once(sigName: "notify::scan-cycles", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scan-cycles", ...args: any[]): void
    connect(sigName: "notify::autorestart", callback: any): number
    on(sigName: "notify::autorestart", callback: any): number
    once(sigName: "notify::autorestart", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::autorestart", ...args: any[]): void
    connect(sigName: "notify::inverse-scanning", callback: any): number
    on(sigName: "notify::inverse-scanning", callback: any): number
    once(sigName: "notify::inverse-scanning", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::inverse-scanning", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Scanner extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.Scanner

    static name: string

    // Constructors of Caribou-1.0.Caribou.Scanner

    constructor(config?: Scanner.ConstructorProperties) 
    constructor() 
    static new(): Scanner
    _init(config?: Scanner.ConstructorProperties): void
}

export module ScannableGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends IScannableGroup.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface ScannableGroup extends IScannableGroup {

    // Owm methods of Caribou-1.0.Caribou.ScannableGroup

    // Has conflict: getScanChildren(): IScannableItem[]
    // Has conflict: childSelect(): IScannableItem | null

    // Own virtual methods of Caribou-1.0.Caribou.ScannableGroup

    getScanChildren(): IScannableItem[]

    // Overloads of getScanChildren

    getScanChildren(): IScannableItem[]
    childSelect(): IScannableItem | null

    // Overloads of childSelect

    childSelect(): IScannableItem | null

    // Class property signals of Caribou-1.0.Caribou.ScannableGroup

    connect(sigName: "notify::scan-grouping", callback: any): number
    on(sigName: "notify::scan-grouping", callback: any): number
    once(sigName: "notify::scan-grouping", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scan-grouping", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ScannableGroup extends GObject.Object {

    // Own properties of Caribou-1.0.Caribou.ScannableGroup

    static name: string

    // Constructors of Caribou-1.0.Caribou.ScannableGroup

    constructor(config?: ScannableGroup.ConstructorProperties) 
    _init(config?: ScannableGroup.ConstructorProperties): void
}

export interface DisplayAdapterClass {

    // Own fields of Caribou-1.0.Caribou.DisplayAdapterClass

    keyvalPress: (keyval: number) => void
    keyvalRelease: (keyval: number) => void
    modLock: (mask: number) => void
    modUnlock: (mask: number) => void
    modLatch: (mask: number) => void
    modUnlatch: (mask: number) => void
    getCurrentGroup: () => [ /* returnType */ number, /* groupName */ string, /* variantName */ string ]
    getGroups: () => [ /* groupNames */ string[], /* variantNames */ string[] ]
    registerKeyFunc: (keyval: number, func?: KeyButtonCallback | null) => void
    registerButtonFunc: (button: number, func?: KeyButtonCallback | null) => void
}

export abstract class DisplayAdapterClass {

    // Own properties of Caribou-1.0.Caribou.DisplayAdapterClass

    static name: string
}

export interface DisplayAdapterPrivate {
}

export class DisplayAdapterPrivate {

    // Own properties of Caribou-1.0.Caribou.DisplayAdapterPrivate

    static name: string
}

export interface NullAdapterClass {
}

export abstract class NullAdapterClass {

    // Own properties of Caribou-1.0.Caribou.NullAdapterClass

    static name: string
}

export interface NullAdapterPrivate {
}

export class NullAdapterPrivate {

    // Own properties of Caribou-1.0.Caribou.NullAdapterPrivate

    static name: string
}

export interface XAdapterClass {
}

export abstract class XAdapterClass {

    // Own properties of Caribou-1.0.Caribou.XAdapterClass

    static name: string
}

export interface XAdapterPrivate {
}

export class XAdapterPrivate {

    // Own properties of Caribou-1.0.Caribou.XAdapterPrivate

    static name: string
}

export interface KeyboardModelClass {
}

export abstract class KeyboardModelClass {

    // Own properties of Caribou-1.0.Caribou.KeyboardModelClass

    static name: string
}

export interface KeyboardModelPrivate {
}

export class KeyboardModelPrivate {

    // Own properties of Caribou-1.0.Caribou.KeyboardModelPrivate

    static name: string
}

export interface KeyboardServiceClass {

    // Own fields of Caribou-1.0.Caribou.KeyboardServiceClass

    setCursorLocation: (x: number, y: number, w: number, h: number) => void
    setEntryLocation: (x: number, y: number, w: number, h: number) => void
    show: (timestamp: number) => void
    hide: (timestamp: number) => void
    nameLost: (name: string) => void
}

export abstract class KeyboardServiceClass {

    // Own properties of Caribou-1.0.Caribou.KeyboardServiceClass

    static name: string
}

export interface KeyboardServicePrivate {
}

export class KeyboardServicePrivate {

    // Own properties of Caribou-1.0.Caribou.KeyboardServicePrivate

    static name: string
}

export interface GroupModelClass {
}

export abstract class GroupModelClass {

    // Own properties of Caribou-1.0.Caribou.GroupModelClass

    static name: string
}

export interface GroupModelPrivate {
}

export class GroupModelPrivate {

    // Own properties of Caribou-1.0.Caribou.GroupModelPrivate

    static name: string
}

export interface LevelModelClass {
}

export abstract class LevelModelClass {

    // Own properties of Caribou-1.0.Caribou.LevelModelClass

    static name: string
}

export interface LevelModelPrivate {
}

export class LevelModelPrivate {

    // Own properties of Caribou-1.0.Caribou.LevelModelPrivate

    static name: string
}

export interface RowModelClass {
}

export abstract class RowModelClass {

    // Own properties of Caribou-1.0.Caribou.RowModelClass

    static name: string
}

export interface RowModelPrivate {
}

export class RowModelPrivate {

    // Own properties of Caribou-1.0.Caribou.RowModelPrivate

    static name: string
}

export interface KeyModelClass {
}

export abstract class KeyModelClass {

    // Own properties of Caribou-1.0.Caribou.KeyModelClass

    static name: string
}

export interface KeyModelPrivate {
}

export class KeyModelPrivate {

    // Own properties of Caribou-1.0.Caribou.KeyModelPrivate

    static name: string
}

export interface ColumnModelClass {
}

export abstract class ColumnModelClass {

    // Own properties of Caribou-1.0.Caribou.ColumnModelClass

    static name: string
}

export interface ColumnModelPrivate {
}

export class ColumnModelPrivate {

    // Own properties of Caribou-1.0.Caribou.ColumnModelPrivate

    static name: string
}

export interface ScannerClass {
}

export abstract class ScannerClass {

    // Own properties of Caribou-1.0.Caribou.ScannerClass

    static name: string
}

export interface ScannerPrivate {
}

export class ScannerPrivate {

    // Own properties of Caribou-1.0.Caribou.ScannerPrivate

    static name: string
}

export interface ScannableGroupClass {

    // Own fields of Caribou-1.0.Caribou.ScannableGroupClass

    getScanChildren: () => IScannableItem[]
    childSelect: () => IScannableItem | null
}

export abstract class ScannableGroupClass {

    // Own properties of Caribou-1.0.Caribou.ScannableGroupClass

    static name: string
}

export interface ScannableGroupPrivate {
}

export class ScannableGroupPrivate {

    // Own properties of Caribou-1.0.Caribou.ScannableGroupPrivate

    static name: string
}

export interface IScannableItemIface {

    // Own fields of Caribou-1.0.Caribou.IScannableItemIface

    getScanStepping: () => boolean
    setScanStepping: (value: boolean) => void
    getScanSelected: () => boolean
    setScanSelected: (value: boolean) => void
}

export abstract class IScannableItemIface {

    // Own properties of Caribou-1.0.Caribou.IScannableItemIface

    static name: string
}

export interface IScannableGroupIface {

    // Own fields of Caribou-1.0.Caribou.IScannableGroupIface

    childSelect: () => IScannableItem | null
    scanReset: () => void
    getScanChildren: () => IScannableItem[]
    childStep: (cycles: number) => IScannableItem | null
    getStepPath: () => IScannableItem[]
    getSelectedPath: () => IScannableItem[]
    getScanGrouping: () => ScanGrouping
    setScanGrouping: (value: ScanGrouping) => void
}

export abstract class IScannableGroupIface {

    // Own properties of Caribou-1.0.Caribou.IScannableGroupIface

    static name: string
}

export interface IKeyboardObjectIface {

    // Own fields of Caribou-1.0.Caribou.IKeyboardObjectIface

    getChildren: () => IKeyboardObject[]
    getKeys: () => KeyModel[]
}

export abstract class IKeyboardObjectIface {

    // Own properties of Caribou-1.0.Caribou.IKeyboardObjectIface

    static name: string
}
