
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gitg-1.0
 */

import type * as cairo from './cairo-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Gee from './Gee-0.8.js';
import type * as Gio from './Gio-2.0.js';
import type * as Gdk from './Gdk-3.0.js';
import type * as GdkPixbuf from './GdkPixbuf-2.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as Ggit from './Ggit-1.0.js';
import type * as Gtk from './Gtk-3.0.js';
import type * as xlib from './xlib-2.0.js';
import type * as Atk from './Atk-1.0.js';

export enum AuthenticationLifeTime {
    FORGET,
    SESSION,
    FOREVER,
}
export enum CommitModelColumns {
    SHA1,
    SUBJECT,
    MESSAGE,
    AUTHOR,
    AUTHOR_NAME,
    AUTHOR_EMAIL,
    AUTHOR_DATE,
    COMMITTER,
    COMMITTER_NAME,
    COMMITTER_EMAIL,
    COMMITTER_DATE,
    COMMIT,
    NUM,
}
export enum RefType {
    NONE,
    BRANCH,
    REMOTE,
    TAG,
    STASH,
}
export enum RefState {
    NONE,
    SELECTED,
    PRELIGHT,
}
export enum RemoteState {
    DISCONNECTED,
    CONNECTING,
    CONNECTED,
    TRANSFERRING,
}
export enum SelectionMode {
    NORMAL,
    SELECTION,
}
export enum SidebarHint {
    NONE,
    HEADER,
    SEPARATOR,
    DUMMY,
}
export enum SidebarColumn {
    HINT,
    SECTION,
    ITEM,
}
export enum CredentialsError {
    CANCELLED,
}
export enum DateError {
    INVALID_FORMAT,
}
export enum InitError {
    THREADS_UNSAFE,
}
export enum RemoteError {
    ALREADY_CONNECTED,
    ALREADY_CONNECTING,
    ALREADY_DISCONNECTED,
    STILL_CONNECTING,
}
export enum StageError {
    PRE_COMMIT_HOOK_FAILED,
    COMMIT_MSG_HOOK_FAILED,
    NOTHING_TO_COMMIT,
    INDEX_ENTRY_NOT_FOUND,
}
export enum PatchSetType {
    ADD,
    REMOVE,
}
export enum LaneTag {
    NONE,
    START,
    END,
    SIGN_STASH,
    SIGN_STAGED,
    SIGN_UNSTAGED,
    HIDDEN,
}
export enum StageCommitOptions {
    NONE,
    SIGN_OFF,
    AMEND,
    SKIP_HOOKS,
}
export function commitModelColumnsType(): GObject.GType
export function init(): void
export module Branch {

    // Constructor properties interface

    export interface ConstructorProperties extends Ggit.Branch.ConstructorProperties, Ref.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Branch extends Ggit.Branch, Ref {

    // Conflicting properties

    parentInstance: any

    // Owm methods of Gitg-1.0.Gitg.Branch

    // Has conflict: getUpstream(): Ref

    // Conflicting methods

    getOwner(): Repository

    // Overloads of getOwner

    /**
     * Gets the repository where `ref` resides.
     */
    getOwner(): Ggit.Repository | null
    /**
     * Gets the repository where `ref` resides.
     */
    getOwner(): Ggit.Repository | null

    // Own virtual methods of Gitg-1.0.Gitg.Branch

    getUpstream(): Ref

    // Overloads of getUpstream

    /**
     * Gets the reference supporting the remote tracking branch,
     * given a local branch reference.
     */
    getUpstream(): Ggit.Ref | null

    // Class property signals of Gitg-1.0.Gitg.Branch

    connect(sigName: "notify::d-parsed-name", callback: any): number
    on(sigName: "notify::d-parsed-name", callback: any): number
    once(sigName: "notify::d-parsed-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::d-parsed-name", ...args: any[]): void
    connect(sigName: "notify::d-pushes", callback: any): number
    on(sigName: "notify::d-pushes", callback: any): number
    once(sigName: "notify::d-pushes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::d-pushes", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::working", callback: any): number
    on(sigName: "notify::working", callback: any): number
    once(sigName: "notify::working", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::working", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Branch extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.Branch

    static name: string

    // Constructors of Gitg-1.0.Gitg.Branch

    constructor(config?: Branch.ConstructorProperties) 
    _init(config?: Branch.ConstructorProperties): void
}

export module Ref {

    // Constructor properties interface

    export interface ConstructorProperties extends Ggit.Ref.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gitg-1.0.Gitg.Ref

        dParsedName?: ParsedRefName | null
        dPushes?: Ref[] | null
        state?: RefState | null
        working?: boolean | null
    }

}

export interface Ref extends Ggit.Ref {

    // Own properties of Gitg-1.0.Gitg.Ref

    dParsedName: ParsedRefName
    dPushes: Ref[]
    state: RefState
    working: boolean

    // Conflicting properties

    parentInstance: any

    // Owm methods of Gitg-1.0.Gitg.Ref

    // Has conflict: getOwner(): Repository
    // Has conflict: getDParsedName(): ParsedRefName
    // Has conflict: setDParsedName(value: ParsedRefName): void
    // Has conflict: getDPushes(): Ref[] | null
    // Has conflict: setDPushes(value: Ref[] | null): void
    // Has conflict: getState(): RefState
    // Has conflict: setState(value: RefState): void
    // Has conflict: getWorking(): boolean
    // Has conflict: setWorking(value: boolean): void
    getParsedName(): ParsedRefName
    getPushes(): Ref[]

    // Own virtual methods of Gitg-1.0.Gitg.Ref

    getOwner(): Repository

    // Overloads of getOwner

    /**
     * Gets the repository where `ref` resides.
     */
    getOwner(): Ggit.Repository | null
    getDParsedName(): ParsedRefName
    setDParsedName(value: ParsedRefName): void
    getDPushes(): Ref[] | null
    setDPushes(value: Ref[] | null): void
    getState(): RefState
    setState(value: RefState): void
    getWorking(): boolean
    setWorking(value: boolean): void

    // Class property signals of Gitg-1.0.Gitg.Ref

    connect(sigName: "notify::d-parsed-name", callback: any): number
    on(sigName: "notify::d-parsed-name", callback: any): number
    once(sigName: "notify::d-parsed-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::d-parsed-name", ...args: any[]): void
    connect(sigName: "notify::d-pushes", callback: any): number
    on(sigName: "notify::d-pushes", callback: any): number
    once(sigName: "notify::d-pushes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::d-pushes", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::working", callback: any): number
    on(sigName: "notify::working", callback: any): number
    once(sigName: "notify::working", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::working", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Ref extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.Ref

    static name: string

    // Constructors of Gitg-1.0.Gitg.Ref

    constructor(config?: Ref.ConstructorProperties) 
    _init(config?: Ref.ConstructorProperties): void
}

export module CredentialsProvider {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface CredentialsProvider extends GObject.Object {

    // Owm methods of Gitg-1.0.Gitg.CredentialsProvider

    // Has conflict: credentials(url: string, usernameFromUrl: string | null, allowedTypes: Ggit.Credtype): Ggit.Cred | null

    // Own virtual methods of Gitg-1.0.Gitg.CredentialsProvider

    credentials(url: string, usernameFromUrl: string | null, allowedTypes: Ggit.Credtype): Ggit.Cred | null

    // Class property signals of Gitg-1.0.Gitg.CredentialsProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CredentialsProvider {

    // Own properties of Gitg-1.0.Gitg.CredentialsProvider

    static name: string

    // Constructors of Gitg-1.0.Gitg.CredentialsProvider

    constructor(config?: CredentialsProvider.ConstructorProperties) 
    _init(config?: CredentialsProvider.ConstructorProperties): void
}

export module SidebarItem {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activated`
     */
    export interface ActivatedSignalCallback {
        (numclick: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SidebarItem extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.SidebarItem

    readonly text: string
    readonly iconName: string

    // Owm methods of Gitg-1.0.Gitg.SidebarItem

    // Has conflict: activate(numclick: number): void
    // Has conflict: getText(): string
    // Has conflict: getIconName(): string | null

    // Own virtual methods of Gitg-1.0.Gitg.SidebarItem

    activate(numclick: number): void
    getText(): string
    getIconName(): string | null

    // Own signals of Gitg-1.0.Gitg.SidebarItem

    connect(sigName: "activated", callback: SidebarItem.ActivatedSignalCallback): number
    on(sigName: "activated", callback: SidebarItem.ActivatedSignalCallback): number
    once(sigName: "activated", callback: SidebarItem.ActivatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "activated", ...args: any[]): void

    // Class property signals of Gitg-1.0.Gitg.SidebarItem

    connect(sigName: "notify::text", callback: any): number
    on(sigName: "notify::text", callback: any): number
    once(sigName: "notify::text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SidebarItem {

    // Own properties of Gitg-1.0.Gitg.SidebarItem

    static name: string

    // Constructors of Gitg-1.0.Gitg.SidebarItem

    constructor(config?: SidebarItem.ConstructorProperties) 
    _init(config?: SidebarItem.ConstructorProperties): void
}

export module StageStatusItem {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface StageStatusItem extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.StageStatusItem

    readonly path: string
    readonly isStaged: boolean
    readonly isUnstaged: boolean
    readonly isUntracked: boolean
    readonly iconName: string

    // Owm methods of Gitg-1.0.Gitg.StageStatusItem

    // Has conflict: getPath(): string
    // Has conflict: getIsStaged(): boolean
    // Has conflict: getIsUnstaged(): boolean
    // Has conflict: getIsUntracked(): boolean
    // Has conflict: getIconName(): string | null

    // Own virtual methods of Gitg-1.0.Gitg.StageStatusItem

    getPath(): string
    getIsStaged(): boolean
    getIsUnstaged(): boolean
    getIsUntracked(): boolean
    getIconName(): string | null

    // Class property signals of Gitg-1.0.Gitg.StageStatusItem

    connect(sigName: "notify::path", callback: any): number
    on(sigName: "notify::path", callback: any): number
    once(sigName: "notify::path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::is-staged", callback: any): number
    on(sigName: "notify::is-staged", callback: any): number
    once(sigName: "notify::is-staged", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-staged", ...args: any[]): void
    connect(sigName: "notify::is-unstaged", callback: any): number
    on(sigName: "notify::is-unstaged", callback: any): number
    once(sigName: "notify::is-unstaged", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-unstaged", ...args: any[]): void
    connect(sigName: "notify::is-untracked", callback: any): number
    on(sigName: "notify::is-untracked", callback: any): number
    once(sigName: "notify::is-untracked", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-untracked", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class StageStatusItem {

    // Own properties of Gitg-1.0.Gitg.StageStatusItem

    static name: string

    // Constructors of Gitg-1.0.Gitg.StageStatusItem

    constructor(config?: StageStatusItem.ConstructorProperties) 
    _init(config?: StageStatusItem.ConstructorProperties): void
}

export interface Async {

    // Own fields of Gitg-1.0.Gitg.Async

    refCount: number
}

export class Async {

    // Own properties of Gitg-1.0.Gitg.Async

    static name: string

    // Constructors of Gitg-1.0.Gitg.Async

    constructor() 
    static new(): Async
    static thread(func: any, callback: Gio.AsyncReadyCallback | null): void
    static threadFinish(res: Gio.AsyncResult): void
    static threadTry(func: any, callback: Gio.AsyncReadyCallback | null): void
    static threadTryFinish(res: Gio.AsyncResult): void
}

export module AuthenticationDialog {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Dialog.ConstructorProperties {
    }

}

export interface AuthenticationDialog {

    // Own properties of Gitg-1.0.Gitg.AuthenticationDialog

    readonly username: string
    readonly password: string
    readonly lifeTime: AuthenticationLifeTime

    // Conflicting properties

    readonly window: Gtk.Window & Gdk.Window & Gdk.Window

    // Owm methods of Gitg-1.0.Gitg.AuthenticationDialog

    getUsername(): string
    getPassword(): string
    getLifeTime(): AuthenticationLifeTime

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

    // Class property signals of Gitg-1.0.Gitg.AuthenticationDialog

    connect(sigName: "notify::username", callback: any): number
    on(sigName: "notify::username", callback: any): number
    once(sigName: "notify::username", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: "notify::password", callback: any): number
    on(sigName: "notify::password", callback: any): number
    once(sigName: "notify::password", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::life-time", callback: any): number
    on(sigName: "notify::life-time", callback: any): number
    once(sigName: "notify::life-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::life-time", ...args: any[]): void
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

export class AuthenticationDialog extends Gtk.Dialog {

    // Own properties of Gitg-1.0.Gitg.AuthenticationDialog

    static name: string

    // Constructors of Gitg-1.0.Gitg.AuthenticationDialog

    constructor(config?: AuthenticationDialog.ConstructorProperties) 
    constructor(url: string, username: string | null, failed: boolean) 
    static new(url: string, username: string | null, failed: boolean): AuthenticationDialog

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
    _init(config?: AuthenticationDialog.ConstructorProperties): void
}

export module AvatarCache {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface AvatarCache {

    // Owm methods of Gitg-1.0.Gitg.AvatarCache

    load(email: string, size: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    loadFinish(res: Gio.AsyncResult): GdkPixbuf.Pixbuf | null

    // Class property signals of Gitg-1.0.Gitg.AvatarCache

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class AvatarCache extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.AvatarCache

    static name: string

    // Constructors of Gitg-1.0.Gitg.AvatarCache

    constructor(config?: AvatarCache.ConstructorProperties) 
    _init(config?: AvatarCache.ConstructorProperties): void
    static default(): AvatarCache
}

export module BranchBase {

    // Constructor properties interface

    export interface ConstructorProperties extends Ref.ConstructorProperties, Branch.ConstructorProperties, Ggit.Branch.ConstructorProperties {
    }

}

export interface BranchBase extends Ref, Branch {

    // Conflicting properties

    parentInstance: any

    // Conflicting methods

    getOwner(): Repository

    // Overloads of getOwner

    /**
     * Gets the repository where `ref` resides.
     */
    getOwner(): Ggit.Repository | null
    /**
     * Gets the repository where `ref` resides.
     */
    getOwner(): Ggit.Repository | null
    getUpstream(): Ref

    // Overloads of getUpstream

    /**
     * Gets the reference supporting the remote tracking branch,
     * given a local branch reference.
     */
    getUpstream(): Ggit.Ref | null
    /**
     * Gets the reference supporting the remote tracking branch,
     * given a local branch reference.
     */
    getUpstream(): Ggit.Ref | null

    // Class property signals of Gitg-1.0.Gitg.BranchBase

    connect(sigName: "notify::native", callback: any): number
    on(sigName: "notify::native", callback: any): number
    once(sigName: "notify::native", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::d-parsed-name", callback: any): number
    on(sigName: "notify::d-parsed-name", callback: any): number
    once(sigName: "notify::d-parsed-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::d-parsed-name", ...args: any[]): void
    connect(sigName: "notify::d-pushes", callback: any): number
    on(sigName: "notify::d-pushes", callback: any): number
    once(sigName: "notify::d-pushes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::d-pushes", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::working", callback: any): number
    on(sigName: "notify::working", callback: any): number
    once(sigName: "notify::working", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::working", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class BranchBase extends Ggit.Branch {

    // Own properties of Gitg-1.0.Gitg.BranchBase

    static name: string

    // Constructors of Gitg-1.0.Gitg.BranchBase

    constructor(config?: BranchBase.ConstructorProperties) 
    constructor() 
    static new(): BranchBase
    _init(config?: BranchBase.ConstructorProperties): void
}

export module CellRendererLanes {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.CellRendererText.ConstructorProperties {

        // Own constructor properties of Gitg-1.0.Gitg.CellRendererLanes

        commit?: Commit | null
        nextCommit?: Commit | null
        laneWidth?: number | null
        dotWidth?: number | null
        labels?: Ref[] | null
    }

}

export interface CellRendererLanes {

    // Own properties of Gitg-1.0.Gitg.CellRendererLanes

    commit: Commit
    nextCommit: Commit
    laneWidth: number
    dotWidth: number
    labels: Ref[]

    // Owm methods of Gitg-1.0.Gitg.CellRendererLanes

    getRefAtPos(widget: Gtk.Widget, x: number, cellW: number): [ /* returnType */ Ref | null, /* hotX */ number ]
    getCommit(): Commit | null
    setCommit(value: Commit | null): void
    getNextCommit(): Commit | null
    setNextCommit(value: Commit | null): void
    getLaneWidth(): number
    setLaneWidth(value: number): void
    getDotWidth(): number
    setDotWidth(value: number): void
    getLabels(): Ref[]
    setLabels(value: Ref[]): void

    // Class property signals of Gitg-1.0.Gitg.CellRendererLanes

    connect(sigName: "notify::commit", callback: any): number
    on(sigName: "notify::commit", callback: any): number
    once(sigName: "notify::commit", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::commit", ...args: any[]): void
    connect(sigName: "notify::next-commit", callback: any): number
    on(sigName: "notify::next-commit", callback: any): number
    once(sigName: "notify::next-commit", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-commit", ...args: any[]): void
    connect(sigName: "notify::lane-width", callback: any): number
    on(sigName: "notify::lane-width", callback: any): number
    once(sigName: "notify::lane-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::lane-width", ...args: any[]): void
    connect(sigName: "notify::dot-width", callback: any): number
    on(sigName: "notify::dot-width", callback: any): number
    once(sigName: "notify::dot-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dot-width", ...args: any[]): void
    connect(sigName: "notify::labels", callback: any): number
    on(sigName: "notify::labels", callback: any): number
    once(sigName: "notify::labels", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::labels", ...args: any[]): void
    connect(sigName: "notify::align-set", callback: any): number
    on(sigName: "notify::align-set", callback: any): number
    once(sigName: "notify::align-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::align-set", ...args: any[]): void
    connect(sigName: "notify::alignment", callback: any): number
    on(sigName: "notify::alignment", callback: any): number
    once(sigName: "notify::alignment", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::alignment", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::background", callback: any): number
    on(sigName: "notify::background", callback: any): number
    once(sigName: "notify::background", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::background", ...args: any[]): void
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
    connect(sigName: "notify::ellipsize", callback: any): number
    on(sigName: "notify::ellipsize", callback: any): number
    once(sigName: "notify::ellipsize", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ellipsize", ...args: any[]): void
    connect(sigName: "notify::ellipsize-set", callback: any): number
    on(sigName: "notify::ellipsize-set", callback: any): number
    once(sigName: "notify::ellipsize-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ellipsize-set", ...args: any[]): void
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
    connect(sigName: "notify::markup", callback: any): number
    on(sigName: "notify::markup", callback: any): number
    once(sigName: "notify::markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::markup", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: any): number
    on(sigName: "notify::max-width-chars", callback: any): number
    once(sigName: "notify::max-width-chars", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: any): number
    on(sigName: "notify::placeholder-text", callback: any): number
    once(sigName: "notify::placeholder-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
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
    connect(sigName: "notify::single-paragraph-mode", callback: any): number
    on(sigName: "notify::single-paragraph-mode", callback: any): number
    once(sigName: "notify::single-paragraph-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::single-paragraph-mode", ...args: any[]): void
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
    connect(sigName: "notify::text", callback: any): number
    on(sigName: "notify::text", callback: any): number
    once(sigName: "notify::text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::underline", callback: any): number
    on(sigName: "notify::underline", callback: any): number
    once(sigName: "notify::underline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::underline", ...args: any[]): void
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
    connect(sigName: "notify::width-chars", callback: any): number
    on(sigName: "notify::width-chars", callback: any): number
    once(sigName: "notify::width-chars", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::wrap-mode", callback: any): number
    on(sigName: "notify::wrap-mode", callback: any): number
    once(sigName: "notify::wrap-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::wrap-mode", ...args: any[]): void
    connect(sigName: "notify::wrap-width", callback: any): number
    on(sigName: "notify::wrap-width", callback: any): number
    once(sigName: "notify::wrap-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::wrap-width", ...args: any[]): void
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

export class CellRendererLanes extends Gtk.CellRendererText {

    // Own properties of Gitg-1.0.Gitg.CellRendererLanes

    static name: string

    // Constructors of Gitg-1.0.Gitg.CellRendererLanes

    constructor(config?: CellRendererLanes.ConstructorProperties) 
    constructor() 
    static new(): CellRendererLanes

    // Overloads of new

    /**
     * Creates a new #GtkCellRendererText. Adjust how text is drawn using
     * object properties. Object properties can be
     * set globally (with g_object_set()). Also, with #GtkTreeViewColumn,
     * you can bind a property to a value in a #GtkTreeModel. For example,
     * you can bind the “text” property on the cell renderer to a string
     * value in the model, thus rendering a different string in each row
     * of the #GtkTreeView
     * @constructor 
     */
    static new(): Gtk.CellRendererText
    _init(config?: CellRendererLanes.ConstructorProperties): void
}

export module Color {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Color {

    // Own properties of Gitg-1.0.Gitg.Color

    readonly r: number
    readonly g: number
    readonly b: number

    // Own fields of Gitg-1.0.Gitg.Color

    idx: number

    // Owm methods of Gitg-1.0.Gitg.Color

    components(): [ /* r */ number, /* g */ number, /* b */ number ]
    nextIndex(): Color
    copy(): Color
    getR(): number
    getG(): number
    getB(): number

    // Class property signals of Gitg-1.0.Gitg.Color

    connect(sigName: "notify::r", callback: any): number
    on(sigName: "notify::r", callback: any): number
    once(sigName: "notify::r", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::r", ...args: any[]): void
    connect(sigName: "notify::g", callback: any): number
    on(sigName: "notify::g", callback: any): number
    once(sigName: "notify::g", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g", ...args: any[]): void
    connect(sigName: "notify::b", callback: any): number
    on(sigName: "notify::b", callback: any): number
    once(sigName: "notify::b", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::b", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Color extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.Color

    static name: string

    // Constructors of Gitg-1.0.Gitg.Color

    constructor(config?: Color.ConstructorProperties) 
    constructor() 
    static new(): Color
    _init(config?: Color.ConstructorProperties): void
    static reset(): void
    static next(): Color
}

export module CommitListView {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Buildable.ConstructorProperties, Gtk.TreeView.ConstructorProperties {
    }

}

export interface CommitListView extends Gtk.Buildable {

    // Owm methods of Gitg-1.0.Gitg.CommitListView

    findCellAtPos(column: Gtk.TreeViewColumn, path: Gtk.TreePath, x: number): [ /* returnType */ Gtk.CellRenderer | null, /* width */ number ]

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

    // Class property signals of Gitg-1.0.Gitg.CommitListView

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CommitListView extends Gtk.TreeView {

    // Own properties of Gitg-1.0.Gitg.CommitListView

    static name: string

    // Constructors of Gitg-1.0.Gitg.CommitListView

    constructor(config?: CommitListView.ConstructorProperties) 
    constructor(model: CommitModel) 
    static new(model: CommitModel): CommitListView

    // Overloads of new

    /**
     * Creates a new #GtkTreeView widget.
     * @constructor 
     */
    static new(): Gtk.TreeView
    static forRepository(repository: Repository): CommitListView
    _init(config?: CommitListView.ConstructorProperties): void
}

export module CommitModel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `started`
     */
    export interface StartedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `update`
     */
    export interface UpdateSignalCallback {
        (added: number): void
    }

    /**
     * Signal callback interface for `finished`
     */
    export interface FinishedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `begin-clear`
     */
    export interface BeginClearSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `end-clear`
     */
    export interface EndClearSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.TreeModel.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gitg-1.0.Gitg.CommitModel

        limit?: number | null
        sortMode?: Ggit.SortMode | null
        repository?: Repository | null
    }

}

export interface CommitModel extends Gtk.TreeModel {

    // Own properties of Gitg-1.0.Gitg.CommitModel

    limit: number
    sortMode: Ggit.SortMode
    repository: Repository

    // Owm methods of Gitg-1.0.Gitg.CommitModel

    getPermanentLanes(): Ggit.OId[]
    setPermanentLanes(value: Ggit.OId[]): void
    reload(): void
    size(): number
    get(idx: number): Commit | null
    setInclude(ids: Ggit.OId[]): void
    getInclude(): Ggit.OId[]
    setExclude(ids: Ggit.OId[]): void
    commitFromIter(iter: Gtk.TreeIter): Commit | null
    pathFromCommit(commit: Commit): Gtk.TreePath | null
    commitFromPath(path: Gtk.TreePath): Commit | null
    getLimit(): number
    setLimit(value: number): void
    getSortMode(): Ggit.SortMode
    setSortMode(value: Ggit.SortMode): void
    getRepository(): Repository
    setRepository(value: Repository): void

    // Own signals of Gitg-1.0.Gitg.CommitModel

    connect(sigName: "started", callback: CommitModel.StartedSignalCallback): number
    on(sigName: "started", callback: CommitModel.StartedSignalCallback): number
    once(sigName: "started", callback: CommitModel.StartedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "started", ...args: any[]): void
    connect(sigName: "update", callback: CommitModel.UpdateSignalCallback): number
    on(sigName: "update", callback: CommitModel.UpdateSignalCallback): number
    once(sigName: "update", callback: CommitModel.UpdateSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "update", ...args: any[]): void
    connect(sigName: "finished", callback: CommitModel.FinishedSignalCallback): number
    on(sigName: "finished", callback: CommitModel.FinishedSignalCallback): number
    once(sigName: "finished", callback: CommitModel.FinishedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "finished", ...args: any[]): void
    connect(sigName: "begin-clear", callback: CommitModel.BeginClearSignalCallback): number
    on(sigName: "begin-clear", callback: CommitModel.BeginClearSignalCallback): number
    once(sigName: "begin-clear", callback: CommitModel.BeginClearSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "begin-clear", ...args: any[]): void
    connect(sigName: "end-clear", callback: CommitModel.EndClearSignalCallback): number
    on(sigName: "end-clear", callback: CommitModel.EndClearSignalCallback): number
    once(sigName: "end-clear", callback: CommitModel.EndClearSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "end-clear", ...args: any[]): void

    // Class property signals of Gitg-1.0.Gitg.CommitModel

    connect(sigName: "notify::limit", callback: any): number
    on(sigName: "notify::limit", callback: any): number
    once(sigName: "notify::limit", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::limit", ...args: any[]): void
    connect(sigName: "notify::sort-mode", callback: any): number
    on(sigName: "notify::sort-mode", callback: any): number
    once(sigName: "notify::sort-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sort-mode", ...args: any[]): void
    connect(sigName: "notify::repository", callback: any): number
    on(sigName: "notify::repository", callback: any): number
    once(sigName: "notify::repository", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::repository", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CommitModel extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.CommitModel

    static name: string

    // Constructors of Gitg-1.0.Gitg.CommitModel

    constructor(config?: CommitModel.ConstructorProperties) 
    constructor(repository: Repository | null) 
    static new(repository: Repository | null): CommitModel
    _init(config?: CommitModel.ConstructorProperties): void
}

export module Commit {

    // Constructor properties interface

    export interface ConstructorProperties extends Ggit.Commit.ConstructorProperties {

        // Own constructor properties of Gitg-1.0.Gitg.Commit

        tag?: LaneTag | null
        mylane?: number | null
    }

}

export interface Commit {

    // Own properties of Gitg-1.0.Gitg.Commit

    tag: LaneTag
    mylane: number
    readonly lane: Lane
    readonly formatPatchName: string
    readonly committerDateForDisplay: string
    readonly authorDateForDisplay: string

    // Conflicting properties

    parentInstance: any

    // Owm methods of Gitg-1.0.Gitg.Commit

    getLanes(): Lane[]
    insertLane(lane: Lane, idx: number): Lane[]
    removeLane(lane: Lane): Lane[]
    updateLanes(lanes: Lane[], mylane: number): void
    getDiff(options: Ggit.DiffOptions | null, parent: number): Ggit.Diff
    getNote(): Ggit.Note
    getTag(): LaneTag
    setTag(value: LaneTag): void
    getMylane(): number
    setMylane(value: number): void
    getLane(): Lane
    getFormatPatchName(): string
    getCommitterDateForDisplay(): string
    getAuthorDateForDisplay(): string

    // Class property signals of Gitg-1.0.Gitg.Commit

    connect(sigName: "notify::tag", callback: any): number
    on(sigName: "notify::tag", callback: any): number
    once(sigName: "notify::tag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tag", ...args: any[]): void
    connect(sigName: "notify::mylane", callback: any): number
    on(sigName: "notify::mylane", callback: any): number
    once(sigName: "notify::mylane", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mylane", ...args: any[]): void
    connect(sigName: "notify::lane", callback: any): number
    on(sigName: "notify::lane", callback: any): number
    once(sigName: "notify::lane", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::lane", ...args: any[]): void
    connect(sigName: "notify::format-patch-name", callback: any): number
    on(sigName: "notify::format-patch-name", callback: any): number
    once(sigName: "notify::format-patch-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::format-patch-name", ...args: any[]): void
    connect(sigName: "notify::committer-date-for-display", callback: any): number
    on(sigName: "notify::committer-date-for-display", callback: any): number
    once(sigName: "notify::committer-date-for-display", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::committer-date-for-display", ...args: any[]): void
    connect(sigName: "notify::author-date-for-display", callback: any): number
    on(sigName: "notify::author-date-for-display", callback: any): number
    once(sigName: "notify::author-date-for-display", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::author-date-for-display", ...args: any[]): void
    connect(sigName: "notify::native", callback: any): number
    on(sigName: "notify::native", callback: any): number
    once(sigName: "notify::native", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Commit extends Ggit.Commit {

    // Own properties of Gitg-1.0.Gitg.Commit

    static name: string

    // Constructors of Gitg-1.0.Gitg.Commit

    constructor(config?: Commit.ConstructorProperties) 
    constructor() 
    static new(): Commit
    _init(config?: Commit.ConstructorProperties): void
}

export interface CredentialsManager {

    // Own fields of Gitg-1.0.Gitg.CredentialsManager

    refCount: number

    // Owm methods of Gitg-1.0.Gitg.CredentialsManager

    credentials(url: string, username: string | null, allowedTypes: Ggit.Credtype): Ggit.Cred | null
}

export class CredentialsManager {

    // Own properties of Gitg-1.0.Gitg.CredentialsManager

    static name: string

    // Constructors of Gitg-1.0.Gitg.CredentialsManager

    constructor(config: Ggit.Config | null, window: Gtk.Window, saveUserInConfig: boolean) 
    static new(config: Ggit.Config | null, window: Gtk.Window, saveUserInConfig: boolean): CredentialsManager
}

export module Date {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gitg-1.0.Gitg.Date

        dateString?: string | null
    }

}

export interface Date extends Gio.Initable {

    // Own properties of Gitg-1.0.Gitg.Date

    dateString: string
    readonly date: GLib.DateTime

    // Owm methods of Gitg-1.0.Gitg.Date

    forDisplay(): string
    getDateString(): string
    setDateString(value: string): void
    getDate(): GLib.DateTime

    // Class property signals of Gitg-1.0.Gitg.Date

    connect(sigName: "notify::date-string", callback: any): number
    on(sigName: "notify::date-string", callback: any): number
    once(sigName: "notify::date-string", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::date-string", ...args: any[]): void
    connect(sigName: "notify::date", callback: any): number
    on(sigName: "notify::date", callback: any): number
    once(sigName: "notify::date", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Date extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.Date

    static name: string

    // Constructors of Gitg-1.0.Gitg.Date

    constructor(config?: Date.ConstructorProperties) 
    constructor(date: string) 
    static new(date: string): Date
    static forDateTime(dt: GLib.DateTime): Date
    _init(config?: Date.ConstructorProperties): void
    static parse(date: string): GLib.DateTime
}

export module DiffStat {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.DrawingArea.ConstructorProperties {

        // Own constructor properties of Gitg-1.0.Gitg.DiffStat

        added?: number | null
        removed?: number | null
    }

}

export interface DiffStat {

    // Own properties of Gitg-1.0.Gitg.DiffStat

    added: number
    removed: number

    // Owm methods of Gitg-1.0.Gitg.DiffStat

    getAdded(): number
    setAdded(value: number): void
    getRemoved(): number
    setRemoved(value: number): void

    // Conflicting methods

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

    // Class property signals of Gitg-1.0.Gitg.DiffStat

    connect(sigName: "notify::added", callback: any): number
    on(sigName: "notify::added", callback: any): number
    once(sigName: "notify::added", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::added", ...args: any[]): void
    connect(sigName: "notify::removed", callback: any): number
    on(sigName: "notify::removed", callback: any): number
    once(sigName: "notify::removed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::removed", ...args: any[]): void
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

export class DiffStat extends Gtk.DrawingArea {

    // Own properties of Gitg-1.0.Gitg.DiffStat

    static name: string

    // Constructors of Gitg-1.0.Gitg.DiffStat

    constructor(config?: DiffStat.ConstructorProperties) 
    constructor() 
    static new(): DiffStat

    // Overloads of new

    /**
     * Creates a new drawing area.
     * @constructor 
     */
    static new(): Gtk.DrawingArea
    _init(config?: DiffStat.ConstructorProperties): void
}

export module DiffViewOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Toolbar.ConstructorProperties {

        // Own constructor properties of Gitg-1.0.Gitg.DiffViewOptions

        contextLines?: number | null
        view?: DiffView | null
    }

}

export interface DiffViewOptions {

    // Own properties of Gitg-1.0.Gitg.DiffViewOptions

    contextLines: number
    view: DiffView

    // Owm methods of Gitg-1.0.Gitg.DiffViewOptions

    getContextLines(): number
    setContextLines(value: number): void
    getView(): DiffView | null
    setView(value: DiffView | null): void

    // Conflicting methods

    /**
     * Retrieves the icon size for the toolbar. See gtk_toolbar_set_icon_size().
     */
    getIconSize(): Gtk.IconSize

    // Overloads of getIconSize

    getIconSize(): Gtk.IconSize
    getIconSize(): Gtk.IconSize
    /**
     * Returns the relief style of buttons on `toolbar`. See
     * gtk_button_set_relief().
     */
    getReliefStyle(): Gtk.ReliefStyle

    // Overloads of getReliefStyle

    /**
     * Returns the relief style of buttons on `shell`. Tool items must not call this
     * function directly, but rely on gtk_tool_item_get_relief_style() instead.
     * @virtual 
     */
    getReliefStyle(): Gtk.ReliefStyle
    /**
     * Returns the relief style of buttons on `shell`. Tool items must not call this
     * function directly, but rely on gtk_tool_item_get_relief_style() instead.
     * @virtual 
     */
    getReliefStyle(): Gtk.ReliefStyle
    /**
     * Retrieves whether the toolbar has text, icons, or both . See
     * gtk_toolbar_set_style().
     */
    getStyle(): Gtk.ToolbarStyle

    // Overloads of getStyle

    /**
     * Retrieves whether the tool shell has text, icons, or both. Tool items must
     * not call this function directly, but rely on gtk_tool_item_get_toolbar_style()
     * instead.
     * @virtual 
     */
    getStyle(): Gtk.ToolbarStyle
    /**
     * Simply an accessor function that returns `widget->`style.
     */
    getStyle(): Gtk.Style
    /**
     * Retrieves whether the tool shell has text, icons, or both. Tool items must
     * not call this function directly, but rely on gtk_tool_item_get_toolbar_style()
     * instead.
     * @virtual 
     */
    getStyle(): Gtk.ToolbarStyle

    // Overloads of getStyle

    /**
     * Simply an accessor function that returns `widget->`style.
     */
    getStyle(): Gtk.Style
    /**
     * Simply an accessor function that returns `widget->`style.
     */
    getStyle(): Gtk.Style
    /**
     * Alters the view of `toolbar` to display either icons only, text only, or both.
     * @param style the new style for `toolbar`.
     */
    setStyle(style: Gtk.ToolbarStyle): void

    // Overloads of setStyle

    /**
     * Used to set the #GtkStyle for a widget (`widget->`style). Since
     * GTK 3, this function does nothing, the passed in style is ignored.
     * @param style a #GtkStyle, or %NULL to remove the effect     of a previous call to gtk_widget_set_style() and go back to     the default style
     */
    setStyle(style: Gtk.Style | null): void
    /**
     * Used to set the #GtkStyle for a widget (`widget->`style). Since
     * GTK 3, this function does nothing, the passed in style is ignored.
     * @param style a #GtkStyle, or %NULL to remove the effect     of a previous call to gtk_widget_set_style() and go back to     the default style
     */
    setStyle(style: Gtk.Style | null): void
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
     * Retrieves the orientation of the `orientable`.
     */
    getOrientation(): Gtk.Orientation
    /**
     * Retrieves the current orientation for the tool shell. Tool items must not
     * call this function directly, but rely on gtk_tool_item_get_orientation()
     * instead.
     * @virtual 
     */
    getOrientation(): Gtk.Orientation
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

    // Class property signals of Gitg-1.0.Gitg.DiffViewOptions

    connect(sigName: "notify::context-lines", callback: any): number
    on(sigName: "notify::context-lines", callback: any): number
    once(sigName: "notify::context-lines", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::context-lines", ...args: any[]): void
    connect(sigName: "notify::view", callback: any): number
    on(sigName: "notify::view", callback: any): number
    once(sigName: "notify::view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: "notify::icon-size", callback: any): number
    on(sigName: "notify::icon-size", callback: any): number
    once(sigName: "notify::icon-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-size", ...args: any[]): void
    connect(sigName: "notify::icon-size-set", callback: any): number
    on(sigName: "notify::icon-size-set", callback: any): number
    once(sigName: "notify::icon-size-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-size-set", ...args: any[]): void
    connect(sigName: "notify::show-arrow", callback: any): number
    on(sigName: "notify::show-arrow", callback: any): number
    once(sigName: "notify::show-arrow", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-arrow", ...args: any[]): void
    connect(sigName: "notify::toolbar-style", callback: any): number
    on(sigName: "notify::toolbar-style", callback: any): number
    once(sigName: "notify::toolbar-style", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::toolbar-style", ...args: any[]): void
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

export class DiffViewOptions extends Gtk.Toolbar {

    // Own properties of Gitg-1.0.Gitg.DiffViewOptions

    static name: string

    // Constructors of Gitg-1.0.Gitg.DiffViewOptions

    constructor(config?: DiffViewOptions.ConstructorProperties) 
    constructor(view: DiffView | null) 
    static new(view: DiffView | null): DiffViewOptions

    // Overloads of new

    /**
     * Creates a new toolbar.
     * @constructor 
     */
    static new(): Gtk.Toolbar
    _init(config?: DiffViewOptions.ConstructorProperties): void
}

export module DiffView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `options-changed`
     */
    export interface OptionsChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Grid.ConstructorProperties {

        // Own constructor properties of Gitg-1.0.Gitg.DiffView

        hasSelection?: boolean | null
        diff?: Ggit.Diff | null
        commit?: Commit | null
        wrapLines?: boolean | null
        staged?: boolean | null
        unstaged?: boolean | null
        showParents?: boolean | null
        defaultCollapseAll?: boolean | null
        useGravatar?: boolean | null
        tabWidth?: number | null
        handleSelection?: boolean | null
        highlight?: boolean | null
        repository?: Repository | null
        newIsWorkdir?: boolean | null
        ignoreWhitespace?: boolean | null
        changesInline?: boolean | null
        contextLines?: number | null
    }

}

export interface DiffView {

    // Own properties of Gitg-1.0.Gitg.DiffView

    readonly options: Ggit.DiffOptions
    hasSelection: boolean
    diff: Ggit.Diff
    commit: Commit
    wrapLines: boolean
    staged: boolean
    unstaged: boolean
    showParents: boolean
    defaultCollapseAll: boolean
    useGravatar: boolean
    tabWidth: number
    handleSelection: boolean
    highlight: boolean
    repository: Repository
    newIsWorkdir: boolean
    ignoreWhitespace: boolean
    changesInline: boolean
    contextLines: number

    // Owm methods of Gitg-1.0.Gitg.DiffView

    applyLinkTags(buffer: Gtk.TextBuffer, regex: GLib.Regex, replacement: string | null, customColorLink: Gdk.RGBA, isCustomColor: boolean, isCustomLink: boolean): void
    followIfLink(texview: Gtk.Widget, iter: Gtk.TextIter): void
    getSelection(): PatchSet[]
    getOptions(): Ggit.DiffOptions
    getHasSelection(): boolean
    getDiff(): Ggit.Diff | null
    setDiff(value: Ggit.Diff | null): void
    getCommit(): Commit | null
    setCommit(value: Commit | null): void
    getWrapLines(): boolean
    setWrapLines(value: boolean): void
    getStaged(): boolean
    setStaged(value: boolean): void
    getUnstaged(): boolean
    setUnstaged(value: boolean): void
    getShowParents(): boolean
    setShowParents(value: boolean): void
    getDefaultCollapseAll(): boolean
    setDefaultCollapseAll(value: boolean): void
    getUseGravatar(): boolean
    setUseGravatar(value: boolean): void
    getTabWidth(): number
    setTabWidth(value: number): void
    getHandleSelection(): boolean
    setHandleSelection(value: boolean): void
    getHighlight(): boolean
    setHighlight(value: boolean): void
    getRepository(): Repository | null
    setRepository(value: Repository | null): void
    getNewIsWorkdir(): boolean
    setNewIsWorkdir(value: boolean): void
    getIgnoreWhitespace(): boolean
    setIgnoreWhitespace(value: boolean): void
    getChangesInline(): boolean
    setChangesInline(value: boolean): void
    getContextLines(): number
    setContextLines(value: number): void

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

    // Own virtual methods of Gitg-1.0.Gitg.DiffView

    optionsChanged(): void

    // Own signals of Gitg-1.0.Gitg.DiffView

    connect(sigName: "options-changed", callback: DiffView.OptionsChangedSignalCallback): number
    on(sigName: "options-changed", callback: DiffView.OptionsChangedSignalCallback): number
    once(sigName: "options-changed", callback: DiffView.OptionsChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "options-changed", ...args: any[]): void

    // Class property signals of Gitg-1.0.Gitg.DiffView

    connect(sigName: "notify::options", callback: any): number
    on(sigName: "notify::options", callback: any): number
    once(sigName: "notify::options", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: "notify::has-selection", callback: any): number
    on(sigName: "notify::has-selection", callback: any): number
    once(sigName: "notify::has-selection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-selection", ...args: any[]): void
    connect(sigName: "notify::diff", callback: any): number
    on(sigName: "notify::diff", callback: any): number
    once(sigName: "notify::diff", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::diff", ...args: any[]): void
    connect(sigName: "notify::commit", callback: any): number
    on(sigName: "notify::commit", callback: any): number
    once(sigName: "notify::commit", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::commit", ...args: any[]): void
    connect(sigName: "notify::wrap-lines", callback: any): number
    on(sigName: "notify::wrap-lines", callback: any): number
    once(sigName: "notify::wrap-lines", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::wrap-lines", ...args: any[]): void
    connect(sigName: "notify::staged", callback: any): number
    on(sigName: "notify::staged", callback: any): number
    once(sigName: "notify::staged", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::staged", ...args: any[]): void
    connect(sigName: "notify::unstaged", callback: any): number
    on(sigName: "notify::unstaged", callback: any): number
    once(sigName: "notify::unstaged", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unstaged", ...args: any[]): void
    connect(sigName: "notify::show-parents", callback: any): number
    on(sigName: "notify::show-parents", callback: any): number
    once(sigName: "notify::show-parents", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-parents", ...args: any[]): void
    connect(sigName: "notify::default-collapse-all", callback: any): number
    on(sigName: "notify::default-collapse-all", callback: any): number
    once(sigName: "notify::default-collapse-all", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-collapse-all", ...args: any[]): void
    connect(sigName: "notify::use-gravatar", callback: any): number
    on(sigName: "notify::use-gravatar", callback: any): number
    once(sigName: "notify::use-gravatar", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-gravatar", ...args: any[]): void
    connect(sigName: "notify::tab-width", callback: any): number
    on(sigName: "notify::tab-width", callback: any): number
    once(sigName: "notify::tab-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tab-width", ...args: any[]): void
    connect(sigName: "notify::handle-selection", callback: any): number
    on(sigName: "notify::handle-selection", callback: any): number
    once(sigName: "notify::handle-selection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::handle-selection", ...args: any[]): void
    connect(sigName: "notify::highlight", callback: any): number
    on(sigName: "notify::highlight", callback: any): number
    once(sigName: "notify::highlight", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::highlight", ...args: any[]): void
    connect(sigName: "notify::repository", callback: any): number
    on(sigName: "notify::repository", callback: any): number
    once(sigName: "notify::repository", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::repository", ...args: any[]): void
    connect(sigName: "notify::new-is-workdir", callback: any): number
    on(sigName: "notify::new-is-workdir", callback: any): number
    once(sigName: "notify::new-is-workdir", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::new-is-workdir", ...args: any[]): void
    connect(sigName: "notify::ignore-whitespace", callback: any): number
    on(sigName: "notify::ignore-whitespace", callback: any): number
    once(sigName: "notify::ignore-whitespace", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ignore-whitespace", ...args: any[]): void
    connect(sigName: "notify::changes-inline", callback: any): number
    on(sigName: "notify::changes-inline", callback: any): number
    once(sigName: "notify::changes-inline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::changes-inline", ...args: any[]): void
    connect(sigName: "notify::context-lines", callback: any): number
    on(sigName: "notify::context-lines", callback: any): number
    once(sigName: "notify::context-lines", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::context-lines", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DiffView extends Gtk.Grid {

    // Own properties of Gitg-1.0.Gitg.DiffView

    static name: string

    // Constructors of Gitg-1.0.Gitg.DiffView

    constructor(config?: DiffView.ConstructorProperties) 
    constructor() 
    static new(): DiffView

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    _init(config?: DiffView.ConstructorProperties): void
}

export module FontManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface FontManager {

    // Class property signals of Gitg-1.0.Gitg.FontManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FontManager extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.FontManager

    static name: string

    // Constructors of Gitg-1.0.Gitg.FontManager

    constructor(config?: FontManager.ConstructorProperties) 
    constructor(textView: Gtk.TextView, plugin: boolean) 
    static new(textView: Gtk.TextView, plugin: boolean): FontManager
    _init(config?: FontManager.ConstructorProperties): void
}

export module Hook {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gitg-1.0.Gitg.Hook

        environment?: Gee.HashMap | null
        name?: string | null
        workingDirectory?: Gio.File | null
    }

}

export interface Hook {

    // Own properties of Gitg-1.0.Gitg.Hook

    environment: Gee.HashMap
    name: string
    workingDirectory: Gio.File
    readonly output: string[]

    // Owm methods of Gitg-1.0.Gitg.Hook

    addArgument(arg: string): void
    existsIn(repository: Ggit.Repository): boolean
    runSync(repository: Ggit.Repository): number
    run(repository: Ggit.Repository, callback: Gio.AsyncReadyCallback | null): void
    runFinish(res: Gio.AsyncResult): number
    getEnvironment(): Gee.HashMap
    setEnvironment(value: Gee.HashMap): void
    getName(): string
    setName(value: string): void
    getWorkingDirectory(): Gio.File | null
    setWorkingDirectory(value: Gio.File | null): void
    getOutput(): string[]

    // Class property signals of Gitg-1.0.Gitg.Hook

    connect(sigName: "notify::environment", callback: any): number
    on(sigName: "notify::environment", callback: any): number
    once(sigName: "notify::environment", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::environment", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::working-directory", callback: any): number
    on(sigName: "notify::working-directory", callback: any): number
    once(sigName: "notify::working-directory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::working-directory", ...args: any[]): void
    connect(sigName: "notify::output", callback: any): number
    on(sigName: "notify::output", callback: any): number
    once(sigName: "notify::output", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::output", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Hook extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.Hook

    static name: string

    // Constructors of Gitg-1.0.Gitg.Hook

    constructor(config?: Hook.ConstructorProperties) 
    constructor(name: string) 
    static new(name: string): Hook
    _init(config?: Hook.ConstructorProperties): void
}

export interface LabelRenderer {

    // Own fields of Gitg-1.0.Gitg.LabelRenderer

    refCount: number
}

export class LabelRenderer {

    // Own properties of Gitg-1.0.Gitg.LabelRenderer

    static name: string

    // Constructors of Gitg-1.0.Gitg.LabelRenderer

    constructor() 
    static new(): LabelRenderer
    static width(widget: Gtk.Widget, font: object | null, labels: Ref[]): number
    static draw(widget: Gtk.Widget, font: Pango.FontDescription, context: cairo.Context, labels: Ref[], area: Gdk.Rectangle): void
    static getRefAtPos(widget: Gtk.Widget, font: Pango.FontDescription, labels: Ref[], x: number): [ /* returnType */ Ref | null, /* hotX */ number ]
    static renderRef(widget: Gtk.Widget, font: Pango.FontDescription, r: Ref, height: number, minwidth: number): GdkPixbuf.Pixbuf
}

export module Lanes {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gitg-1.0.Gitg.Lanes

        inactiveMax?: number | null
        inactiveCollapse?: number | null
        inactiveGap?: number | null
        inactiveEnabled?: boolean | null
        missCommits?: Gee.LinkedList | null
    }

}

export interface Lanes {

    // Own properties of Gitg-1.0.Gitg.Lanes

    inactiveMax: number
    inactiveCollapse: number
    inactiveGap: number
    inactiveEnabled: boolean
    missCommits: Gee.LinkedList

    // Owm methods of Gitg-1.0.Gitg.Lanes

    reset(reserved: Ggit.OId[] | null, roots: Gee.HashSet | null): void
    next(next: Commit, saveMiss: boolean): [ /* returnType */ boolean, /* lanes */ Lane[], /* nextpos */ number ]
    getInactiveMax(): number
    setInactiveMax(value: number): void
    getInactiveCollapse(): number
    setInactiveCollapse(value: number): void
    getInactiveGap(): number
    setInactiveGap(value: number): void
    getInactiveEnabled(): boolean
    setInactiveEnabled(value: boolean): void
    getMissCommits(): Gee.LinkedList
    setMissCommits(value: Gee.LinkedList): void

    // Class property signals of Gitg-1.0.Gitg.Lanes

    connect(sigName: "notify::inactive-max", callback: any): number
    on(sigName: "notify::inactive-max", callback: any): number
    once(sigName: "notify::inactive-max", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::inactive-max", ...args: any[]): void
    connect(sigName: "notify::inactive-collapse", callback: any): number
    on(sigName: "notify::inactive-collapse", callback: any): number
    once(sigName: "notify::inactive-collapse", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::inactive-collapse", ...args: any[]): void
    connect(sigName: "notify::inactive-gap", callback: any): number
    on(sigName: "notify::inactive-gap", callback: any): number
    once(sigName: "notify::inactive-gap", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::inactive-gap", ...args: any[]): void
    connect(sigName: "notify::inactive-enabled", callback: any): number
    on(sigName: "notify::inactive-enabled", callback: any): number
    once(sigName: "notify::inactive-enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::inactive-enabled", ...args: any[]): void
    connect(sigName: "notify::miss-commits", callback: any): number
    on(sigName: "notify::miss-commits", callback: any): number
    once(sigName: "notify::miss-commits", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::miss-commits", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Lanes extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.Lanes

    static name: string

    // Constructors of Gitg-1.0.Gitg.Lanes

    constructor(config?: Lanes.ConstructorProperties) 
    constructor() 
    static new(): Lanes
    _init(config?: Lanes.ConstructorProperties): void
}

export module Lane {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Lane {

    // Own fields of Gitg-1.0.Gitg.Lane

    color: Color
    from: number[]
    tag: LaneTag
    boundaryId: Ggit.OId | null

    // Owm methods of Gitg-1.0.Gitg.Lane

    copy(): Lane
    dup(): Lane

    // Class property signals of Gitg-1.0.Gitg.Lane

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Lane extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.Lane

    static name: string

    // Constructors of Gitg-1.0.Gitg.Lane

    constructor(config?: Lane.ConstructorProperties) 
    constructor() 
    static new(): Lane
    static withColor(color: Color | null): Lane
    _init(config?: Lane.ConstructorProperties): void
}

export module ProgressBin {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Bin.ConstructorProperties {

        // Own constructor properties of Gitg-1.0.Gitg.ProgressBin

        fraction?: number | null
    }

}

export interface ProgressBin {

    // Own properties of Gitg-1.0.Gitg.ProgressBin

    fraction: number

    // Owm methods of Gitg-1.0.Gitg.ProgressBin

    getFraction(): number
    setFraction(value: number): void

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

    // Class property signals of Gitg-1.0.Gitg.ProgressBin

    connect(sigName: "notify::fraction", callback: any): number
    on(sigName: "notify::fraction", callback: any): number
    once(sigName: "notify::fraction", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fraction", ...args: any[]): void
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

export class ProgressBin extends Gtk.Bin {

    // Own properties of Gitg-1.0.Gitg.ProgressBin

    static name: string

    // Constructors of Gitg-1.0.Gitg.ProgressBin

    constructor(config?: ProgressBin.ConstructorProperties) 
    constructor() 
    static new(): ProgressBin
    _init(config?: ProgressBin.ConstructorProperties): void
}

export module RefBase {

    // Constructor properties interface

    export interface ConstructorProperties extends Ref.ConstructorProperties, Ggit.Ref.ConstructorProperties {
    }

}

export interface RefBase extends Ref {

    // Conflicting properties

    parentInstance: any

    // Conflicting methods

    getOwner(): Repository

    // Overloads of getOwner

    /**
     * Gets the repository where `ref` resides.
     */
    getOwner(): Ggit.Repository | null
    /**
     * Gets the repository where `ref` resides.
     */
    getOwner(): Ggit.Repository | null

    // Class property signals of Gitg-1.0.Gitg.RefBase

    connect(sigName: "notify::native", callback: any): number
    on(sigName: "notify::native", callback: any): number
    once(sigName: "notify::native", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::d-parsed-name", callback: any): number
    on(sigName: "notify::d-parsed-name", callback: any): number
    once(sigName: "notify::d-parsed-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::d-parsed-name", ...args: any[]): void
    connect(sigName: "notify::d-pushes", callback: any): number
    on(sigName: "notify::d-pushes", callback: any): number
    once(sigName: "notify::d-pushes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::d-pushes", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::working", callback: any): number
    on(sigName: "notify::working", callback: any): number
    once(sigName: "notify::working", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::working", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class RefBase extends Ggit.Ref {

    // Own properties of Gitg-1.0.Gitg.RefBase

    static name: string

    // Constructors of Gitg-1.0.Gitg.RefBase

    constructor(config?: RefBase.ConstructorProperties) 
    constructor() 
    static new(): RefBase
    _init(config?: RefBase.ConstructorProperties): void
}

export module ParsedRefName {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gitg-1.0.Gitg.ParsedRefName

        rtype?: RefType | null
    }

}

export interface ParsedRefName {

    // Own properties of Gitg-1.0.Gitg.ParsedRefName

    rtype: RefType
    readonly name: string
    readonly shortname: string
    readonly remoteName: string
    readonly remoteBranch: string
    readonly prefix: string

    // Owm methods of Gitg-1.0.Gitg.ParsedRefName

    getRtype(): RefType
    getName(): string
    getShortname(): string
    getRemoteName(): string | null
    getRemoteBranch(): string | null
    getPrefix(): string | null

    // Class property signals of Gitg-1.0.Gitg.ParsedRefName

    connect(sigName: "notify::rtype", callback: any): number
    on(sigName: "notify::rtype", callback: any): number
    once(sigName: "notify::rtype", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rtype", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::shortname", callback: any): number
    on(sigName: "notify::shortname", callback: any): number
    once(sigName: "notify::shortname", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::shortname", ...args: any[]): void
    connect(sigName: "notify::remote-name", callback: any): number
    on(sigName: "notify::remote-name", callback: any): number
    once(sigName: "notify::remote-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remote-name", ...args: any[]): void
    connect(sigName: "notify::remote-branch", callback: any): number
    on(sigName: "notify::remote-branch", callback: any): number
    once(sigName: "notify::remote-branch", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remote-branch", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: any): number
    on(sigName: "notify::prefix", callback: any): number
    once(sigName: "notify::prefix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ParsedRefName extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.ParsedRefName

    static name: string

    // Constructors of Gitg-1.0.Gitg.ParsedRefName

    constructor(config?: ParsedRefName.ConstructorProperties) 
    constructor(name: string) 
    static new(name: string): ParsedRefName
    _init(config?: ParsedRefName.ConstructorProperties): void
}

export module Remote {

    // Signal callback interfaces

    /**
     * Signal callback interface for `tip-updated`
     */
    export interface TipUpdatedSignalCallback {
        (refname: string, a: Ggit.OId, b: Ggit.OId): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Ggit.Remote.ConstructorProperties {

        // Own constructor properties of Gitg-1.0.Gitg.Remote

        state?: RemoteState | null
        fetchSpecs?: string[] | null
        pushSpecs?: string[] | null
        credentialsProvider?: CredentialsProvider | null
    }

}

export interface Remote {

    // Own properties of Gitg-1.0.Gitg.Remote

    readonly transferProgress: number
    state: RemoteState
    fetchSpecs: string[]
    pushSpecs: string[]
    credentialsProvider: CredentialsProvider

    // Conflicting properties

    parentInstance: any

    // Owm methods of Gitg-1.0.Gitg.Remote

    // Has conflict: connect(direction: Ggit.Direction, callbacks: Ggit.RemoteCallbacks | null, callback: Gio.AsyncReadyCallback | null): void
    connectFinish(res: Gio.AsyncResult): void
    disconnect(callback: Gio.AsyncReadyCallback | null): void

    // Overloads of disconnect

    /**
     * Closes the connection to the remote and frees the underlying
     * transport.
     */
    disconnect(): void
    disconnectFinish(res: Gio.AsyncResult): void
    download(callbacks: Ggit.RemoteCallbacks | null, callback: Gio.AsyncReadyCallback | null): void

    // Overloads of download

    /**
     * Connect to the remote if not yet connected, negotiate with the remote
     * about which objects are missing and download the resulting packfile and
     * its index.
     * @param specs the ref specs.
     * @param fetchOptions a #GgitFetchOptions.
     */
    download(specs: string[] | null, fetchOptions: Ggit.FetchOptions): boolean
    downloadFinish(res: Gio.AsyncResult): void
    push(branch: string, callbacks: Ggit.RemoteCallbacks | null, callback: Gio.AsyncReadyCallback | null): void

    // Overloads of push

    /**
     * Connect to the remote if not yet connected, negotiate with the remote
     * about which objects are missing, create a packfile with the missing
     * objects and send it.
     * @param specs the ref specs.
     * @param pushOptions a #GgitPushOptions.
     */
    push(specs: string[] | null, pushOptions: Ggit.PushOptions): boolean
    pushFinish(res: Gio.AsyncResult): void
    fetch(message: string | null, callbacks: Ggit.RemoteCallbacks | null, callback: Gio.AsyncReadyCallback | null): void
    fetchFinish(res: Gio.AsyncResult): void
    getTransferProgress(): number
    getState(): RemoteState
    getFetchSpecs(): string[] | null
    setFetchSpecs(value: string[] | null): void
    getPushSpecs(): string[] | null
    setPushSpecs(value: string[] | null): void
    getCredentialsProvider(): CredentialsProvider | null
    setCredentialsProvider(value: CredentialsProvider | null): void

    // Own signals of Gitg-1.0.Gitg.Remote

    connect(sigName: "tip-updated", callback: Remote.TipUpdatedSignalCallback): number
    on(sigName: "tip-updated", callback: Remote.TipUpdatedSignalCallback): number
    once(sigName: "tip-updated", callback: Remote.TipUpdatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "tip-updated", a: Ggit.OId, b: Ggit.OId, ...args: any[]): void

    // Class property signals of Gitg-1.0.Gitg.Remote

    connect(sigName: "notify::transfer-progress", callback: any): number
    on(sigName: "notify::transfer-progress", callback: any): number
    once(sigName: "notify::transfer-progress", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transfer-progress", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::fetch-specs", callback: any): number
    on(sigName: "notify::fetch-specs", callback: any): number
    once(sigName: "notify::fetch-specs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fetch-specs", ...args: any[]): void
    connect(sigName: "notify::push-specs", callback: any): number
    on(sigName: "notify::push-specs", callback: any): number
    once(sigName: "notify::push-specs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::push-specs", ...args: any[]): void
    connect(sigName: "notify::credentials-provider", callback: any): number
    on(sigName: "notify::credentials-provider", callback: any): number
    once(sigName: "notify::credentials-provider", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::credentials-provider", ...args: any[]): void
    connect(sigName: "notify::native", callback: any): number
    on(sigName: "notify::native", callback: any): number
    once(sigName: "notify::native", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Remote extends Ggit.Remote {

    // Own properties of Gitg-1.0.Gitg.Remote

    static name: string

    // Constructors of Gitg-1.0.Gitg.Remote

    constructor(config?: Remote.ConstructorProperties) 
    constructor() 
    static new(): Remote

    // Overloads of new

    /**
     * Creates a remote with the default refspecs in memory. You can use
     * this when you have a URL instead of a remote's name.
     * @constructor 
     * @param repository a #GgitRepository.
     * @param name the remote's name.
     * @param url the remote repository's URL.
     */
    static new(repository: Ggit.Repository, name: string, url: string): Ggit.Remote
    _init(config?: Remote.ConstructorProperties): void
}

export module RepositoryListBox {

    // Signal callback interfaces

    /**
     * Signal callback interface for `repository-activated`
     */
    export interface RepositoryActivatedSignalCallback {
        (repository: Repository): void
    }

    /**
     * Signal callback interface for `show-error`
     */
    export interface ShowErrorSignalCallback {
        (primaryMessage: string, secondaryMessage: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.ListBox.ConstructorProperties {

        // Own constructor properties of Gitg-1.0.Gitg.RepositoryListBox

        mode?: SelectionMode | null
        bookmarksFromRecentFiles?: boolean | null
        location?: Gio.File | null
    }

}

export interface RepositoryListBox {

    // Own properties of Gitg-1.0.Gitg.RepositoryListBox

    mode: SelectionMode
    bookmarksFromRecentFiles: boolean
    location: Gio.File
    readonly hasSelection: boolean

    // Conflicting properties

    parentInstance: any

    // Owm methods of Gitg-1.0.Gitg.RepositoryListBox

    populateBookmarks(): void
    endCloning(row: RepositoryListBoxRow, repository: Repository | null): void
    beginCloning(location: Gio.File): RepositoryListBoxRow | null
    addRepository(repository: Repository, visited: GLib.DateTime | null): RepositoryListBoxRow | null
    getSelection(): RepositoryListBoxRow[]
    filterText(text: string | null): void
    getMode(): SelectionMode
    setMode(value: SelectionMode): void
    getBookmarksFromRecentFiles(): boolean
    setBookmarksFromRecentFiles(value: boolean): void
    getLocation(): Gio.File | null
    setLocation(value: Gio.File | null): void
    getHasSelection(): boolean

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

    // Own signals of Gitg-1.0.Gitg.RepositoryListBox

    connect(sigName: "repository-activated", callback: RepositoryListBox.RepositoryActivatedSignalCallback): number
    on(sigName: "repository-activated", callback: RepositoryListBox.RepositoryActivatedSignalCallback): number
    once(sigName: "repository-activated", callback: RepositoryListBox.RepositoryActivatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "repository-activated", ...args: any[]): void
    connect(sigName: "show-error", callback: RepositoryListBox.ShowErrorSignalCallback): number
    on(sigName: "show-error", callback: RepositoryListBox.ShowErrorSignalCallback): number
    once(sigName: "show-error", callback: RepositoryListBox.ShowErrorSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "show-error", secondaryMessage: string, ...args: any[]): void

    // Class property signals of Gitg-1.0.Gitg.RepositoryListBox

    connect(sigName: "notify::mode", callback: any): number
    on(sigName: "notify::mode", callback: any): number
    once(sigName: "notify::mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::bookmarks-from-recent-files", callback: any): number
    on(sigName: "notify::bookmarks-from-recent-files", callback: any): number
    once(sigName: "notify::bookmarks-from-recent-files", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bookmarks-from-recent-files", ...args: any[]): void
    connect(sigName: "notify::location", callback: any): number
    on(sigName: "notify::location", callback: any): number
    once(sigName: "notify::location", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::has-selection", callback: any): number
    on(sigName: "notify::has-selection", callback: any): number
    once(sigName: "notify::has-selection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-selection", ...args: any[]): void
    connect(sigName: "notify::activate-on-single-click", callback: any): number
    on(sigName: "notify::activate-on-single-click", callback: any): number
    once(sigName: "notify::activate-on-single-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activate-on-single-click", ...args: any[]): void
    connect(sigName: "notify::selection-mode", callback: any): number
    on(sigName: "notify::selection-mode", callback: any): number
    once(sigName: "notify::selection-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selection-mode", ...args: any[]): void
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

export class RepositoryListBox extends Gtk.ListBox {

    // Own properties of Gitg-1.0.Gitg.RepositoryListBox

    static name: string

    // Constructors of Gitg-1.0.Gitg.RepositoryListBox

    constructor(config?: RepositoryListBox.ConstructorProperties) 
    constructor() 
    static new(): RepositoryListBox

    // Overloads of new

    /**
     * Creates a new #GtkListBox container.
     * @constructor 
     */
    static new(): Gtk.ListBox
    _init(config?: RepositoryListBox.ConstructorProperties): void
}

export module RepositoryListBoxRow {

    // Signal callback interfaces

    /**
     * Signal callback interface for `request-remove`
     */
    export interface RequestRemoveSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.ListBoxRow.ConstructorProperties {

        // Own constructor properties of Gitg-1.0.Gitg.RepositoryListBoxRow

        mode?: SelectionMode | null
        selected?: boolean | null
        repository?: Repository | null
        canRemove?: boolean | null
        time?: GLib.DateTime | null
        fraction?: number | null
        repositoryName?: string | null
        dirname?: string | null
        branchName?: string | null
        loading?: boolean | null
    }

}

export interface RepositoryListBoxRow {

    // Own properties of Gitg-1.0.Gitg.RepositoryListBoxRow

    mode: SelectionMode
    selected: boolean
    repository: Repository
    canRemove: boolean
    time: GLib.DateTime
    fraction: number
    repositoryName: string
    dirname: string
    branchName: string
    loading: boolean

    // Conflicting properties

    parentInstance: any

    // Owm methods of Gitg-1.0.Gitg.RepositoryListBoxRow

    getMode(): SelectionMode
    setMode(value: SelectionMode): void
    getSelected(): boolean
    setSelected(value: boolean): void
    getRepository(): Repository | null
    setRepository(value: Repository | null): void
    getCanRemove(): boolean
    setCanRemove(value: boolean): void
    getTime(): GLib.DateTime
    setTime(value: GLib.DateTime): void
    setFraction(value: number): void
    getRepositoryName(): string | null
    setRepositoryName(value: string | null): void
    getDirname(): string | null
    setDirname(value: string | null): void
    getBranchName(): string | null
    setBranchName(value: string | null): void
    getLoading(): boolean
    setLoading(value: boolean): void

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

    // Own signals of Gitg-1.0.Gitg.RepositoryListBoxRow

    connect(sigName: "request-remove", callback: RepositoryListBoxRow.RequestRemoveSignalCallback): number
    on(sigName: "request-remove", callback: RepositoryListBoxRow.RequestRemoveSignalCallback): number
    once(sigName: "request-remove", callback: RepositoryListBoxRow.RequestRemoveSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "request-remove", ...args: any[]): void

    // Class property signals of Gitg-1.0.Gitg.RepositoryListBoxRow

    connect(sigName: "notify::mode", callback: any): number
    on(sigName: "notify::mode", callback: any): number
    once(sigName: "notify::mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::selected", callback: any): number
    on(sigName: "notify::selected", callback: any): number
    once(sigName: "notify::selected", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selected", ...args: any[]): void
    connect(sigName: "notify::repository", callback: any): number
    on(sigName: "notify::repository", callback: any): number
    once(sigName: "notify::repository", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::repository", ...args: any[]): void
    connect(sigName: "notify::can-remove", callback: any): number
    on(sigName: "notify::can-remove", callback: any): number
    once(sigName: "notify::can-remove", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-remove", ...args: any[]): void
    connect(sigName: "notify::time", callback: any): number
    on(sigName: "notify::time", callback: any): number
    once(sigName: "notify::time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::time", ...args: any[]): void
    connect(sigName: "notify::fraction", callback: any): number
    on(sigName: "notify::fraction", callback: any): number
    once(sigName: "notify::fraction", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fraction", ...args: any[]): void
    connect(sigName: "notify::repository-name", callback: any): number
    on(sigName: "notify::repository-name", callback: any): number
    once(sigName: "notify::repository-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::repository-name", ...args: any[]): void
    connect(sigName: "notify::dirname", callback: any): number
    on(sigName: "notify::dirname", callback: any): number
    once(sigName: "notify::dirname", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dirname", ...args: any[]): void
    connect(sigName: "notify::branch-name", callback: any): number
    on(sigName: "notify::branch-name", callback: any): number
    once(sigName: "notify::branch-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::branch-name", ...args: any[]): void
    connect(sigName: "notify::loading", callback: any): number
    on(sigName: "notify::loading", callback: any): number
    once(sigName: "notify::loading", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::loading", ...args: any[]): void
    connect(sigName: "notify::activatable", callback: any): number
    on(sigName: "notify::activatable", callback: any): number
    once(sigName: "notify::activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: any): number
    on(sigName: "notify::selectable", callback: any): number
    once(sigName: "notify::selectable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selectable", ...args: any[]): void
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

export class RepositoryListBoxRow extends Gtk.ListBoxRow {

    // Own properties of Gitg-1.0.Gitg.RepositoryListBoxRow

    static name: string

    // Constructors of Gitg-1.0.Gitg.RepositoryListBoxRow

    constructor(config?: RepositoryListBoxRow.ConstructorProperties) 
    constructor(repository: Repository | null, dirname: string) 
    static new(repository: Repository | null, dirname: string): RepositoryListBoxRow

    // Overloads of new

    /**
     * Creates a new #GtkListBoxRow, to be used as a child of a #GtkListBox.
     * @constructor 
     */
    static new(): Gtk.ListBoxRow
    _init(config?: RepositoryListBoxRow.ConstructorProperties): void
}

export module Repository {

    // Constructor properties interface

    export interface ConstructorProperties extends Ggit.Repository.ConstructorProperties {
    }

}

export interface Repository {

    // Own properties of Gitg-1.0.Gitg.Repository

    readonly name: string
    readonly stage: Stage

    // Conflicting properties

    parentInstance: any

    // Owm methods of Gitg-1.0.Gitg.Repository

    clearRefsCache(): void
    refsForId(id: Ggit.OId): Ref[]
    lookup(tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify, id: Ggit.OId): object | null

    // Overloads of lookup

    /**
     * Lookups a reference to one of the objects in the `repository`.
     * 
     * The generated reference must be freed with g_object_unref().
     * 
     * The `gtype` must match the type of the object
     * in the odb; the method will fail otherwise.
     * The special value %G_TYPE_NONE may be passed to let
     * the method guess the object's type.
     * @param oid a #GgitOId.
     * @param gtype a #GType.
     */
    lookup(oid: Ggit.OId, gtype: GObject.GType): Ggit.Object | null
    lookupReference(name: string): Ref

    // Overloads of lookupReference

    /**
     * Lookups a reference by its name in `repository`. The returned #GgitRef must
     * be freed with g_object_unref().
     * @param name the long name for the reference (e.g. HEAD, ref/heads/master, refs/tags/v0.1.0, ...).
     */
    lookupReference(name: string): Ggit.Ref | null
    lookupReferenceDwim(shortName: string): Ref

    // Overloads of lookupReferenceDwim

    /**
     * Lookups a reference by its short name in `repository` applying the git precendence
     * rules to the given shorthand to determine which reference the user is referring to.
     * The returned #GgitRef must be freed with g_object_unref().
     * @param shortName the short name for the reference (e.g. master, v0.1.0, ...).
     */
    lookupReferenceDwim(shortName: string): Ggit.Ref | null
    createBranch(name: string, obj: Ggit.Object, flags: Ggit.CreateFlags): Branch

    // Overloads of createBranch

    /**
     * Creates a new branch pointing at a target commit.
     * @param branchName the name of the branch.
     * @param target a #GgitObject.
     * @param flags a #GgitCreateFlags.
     */
    createBranch(branchName: string, target: Ggit.Object, flags: Ggit.CreateFlags): Ggit.Branch | null
    createReference(name: string, oid: Ggit.OId, message: string): Ref

    // Overloads of createReference

    /**
     * Creates a new object id reference.
     * 
     * The reference will be created in the repository and written
     * to the disk. The returned value must be freed with g_object_unref().
     * @param name the name for the new #GgitRef.
     * @param oid the #GgitOId pointed to by the reference.
     * @param logMessage The one line long message to be appended to the reflog.
     */
    createReference(name: string, oid: Ggit.OId, logMessage: string): Ggit.Ref | null
    createSymbolicReference(name: string, target: string, message: string): Ref

    // Overloads of createSymbolicReference

    /**
     * Creates a new symbolic reference.
     * 
     * The reference will be created in the repository and written
     * to the disk. The returned value must be freed with g_object_unref().
     * @param name the name for the new #GgitRef.
     * @param target the full name to the reference.
     * @param logMessage The one line long message to be appended to the reflog.
     */
    createSymbolicReference(name: string, target: string, logMessage: string): Ggit.Ref | null
    getHead(): Ref

    // Overloads of getHead

    /**
     * Get and resolves the current HEAD reference of the repository. Note that the
     * returned ref is already resolved (if HEAD is symbolic). If you want to
     * retrieve the symbolic ref called HEAD, then use #ggit_repository_lookup_reference
     * instead.
     */
    getHead(): Ggit.Ref | null
    getSignatureWithEnvironment(env: Gee.Map, envname: string): Ggit.Signature
    getName(): string | null
    getStage(): Stage

    // Class property signals of Gitg-1.0.Gitg.Repository

    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::stage", callback: any): number
    on(sigName: "notify::stage", callback: any): number
    once(sigName: "notify::stage", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stage", ...args: any[]): void
    connect(sigName: "notify::clone-options", callback: any): number
    on(sigName: "notify::clone-options", callback: any): number
    once(sigName: "notify::clone-options", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::clone-options", ...args: any[]): void
    connect(sigName: "notify::head", callback: any): number
    on(sigName: "notify::head", callback: any): number
    once(sigName: "notify::head", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::head", ...args: any[]): void
    connect(sigName: "notify::init", callback: any): number
    on(sigName: "notify::init", callback: any): number
    once(sigName: "notify::init", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::init", ...args: any[]): void
    connect(sigName: "notify::is-bare", callback: any): number
    on(sigName: "notify::is-bare", callback: any): number
    once(sigName: "notify::is-bare", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-bare", ...args: any[]): void
    connect(sigName: "notify::location", callback: any): number
    on(sigName: "notify::location", callback: any): number
    once(sigName: "notify::location", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::url", callback: any): number
    on(sigName: "notify::url", callback: any): number
    once(sigName: "notify::url", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::workdir", callback: any): number
    on(sigName: "notify::workdir", callback: any): number
    once(sigName: "notify::workdir", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::workdir", ...args: any[]): void
    connect(sigName: "notify::native", callback: any): number
    on(sigName: "notify::native", callback: any): number
    once(sigName: "notify::native", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Repository extends Ggit.Repository {

    // Own properties of Gitg-1.0.Gitg.Repository

    static name: string

    // Constructors of Gitg-1.0.Gitg.Repository

    constructor(config?: Repository.ConstructorProperties) 
    constructor(location: Gio.File, workdir: Gio.File | null) 
    static new(location: Gio.File, workdir: Gio.File | null): Repository
    _init(config?: Repository.ConstructorProperties): void
    static initRepository(location: Gio.File, isBare: boolean): Repository

    // Overloads of initRepository

    /**
     * Creates a new git repository in the given folder.
     * @param location the location of the repository.
     * @param isBare if %TRUE, a git repository without a working directory is created           at the pointed path. If %FALSE, provided path will be considered as the working           directory into which the .git directory will be created.
     */
    static initRepository(location: Gio.File, isBare: boolean): Ggit.Repository | null
}

export interface Resource {

    // Own fields of Gitg-1.0.Gitg.Resource

    refCount: number
}

export class Resource {

    // Own properties of Gitg-1.0.Gitg.Resource

    static name: string

    // Constructors of Gitg-1.0.Gitg.Resource

    constructor() 
    static new(): Resource
    static loadCss(id: string): Gtk.CssProvider | null
}

export module SidebarStore {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.TreeStore.ConstructorProperties {
    }

}

export interface SidebarStore {

    // Own properties of Gitg-1.0.Gitg.SidebarStore

    readonly clearing: boolean

    // Owm methods of Gitg-1.0.Gitg.SidebarStore

    appendDummy(text: string): SidebarStore
    append(item: SidebarItem): SidebarStore

    // Overloads of append

    /**
     * Appends a new row to `tree_store`.  If `parent` is non-%NULL, then it will append the
     * new row after the last child of `parent,` otherwise it will append a row to
     * the top level.  `iter` will be changed to point to this new row.  The row will
     * be empty after this function is called.  To fill in values, you need to call
     * gtk_tree_store_set() or gtk_tree_store_set_value().
     * @param parent A valid #GtkTreeIter, or %NULL
     */
    append(parent: Gtk.TreeIter | null): /* iter */ Gtk.TreeIter
    beginHeader(text: string, id: number): SidebarStoreSidebarHeader
    endHeader(): SidebarStore
    beginSection(): number
    endSection(): void
    clear(): void
    itemForIter(iter: Gtk.TreeIter): SidebarItem
    activate(iter: Gtk.TreeIter, numclick: number): void
    getClearing(): boolean

    // Class property signals of Gitg-1.0.Gitg.SidebarStore

    connect(sigName: "notify::clearing", callback: any): number
    on(sigName: "notify::clearing", callback: any): number
    once(sigName: "notify::clearing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::clearing", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SidebarStore extends Gtk.TreeStore {

    // Own properties of Gitg-1.0.Gitg.SidebarStore

    static name: string

    // Constructors of Gitg-1.0.Gitg.SidebarStore

    constructor(config?: SidebarStore.ConstructorProperties) 
    constructor() 
    static new(): SidebarStore

    // Overloads of new

    /**
     * Non vararg creation function.  Used primarily by language bindings.
     * @constructor 
     * @param types an array of #GType types for the columns, from first to last
     */
    static new(types: GObject.GType[]): Gtk.TreeStore
    _init(config?: SidebarStore.ConstructorProperties): void
}

export module SidebarStoreSidebarText {

    // Constructor properties interface

    export interface ConstructorProperties extends SidebarItem.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface SidebarStoreSidebarText extends SidebarItem {

    // Class property signals of Gitg-1.0.Gitg.SidebarStoreSidebarText

    connect(sigName: "notify::text", callback: any): number
    on(sigName: "notify::text", callback: any): number
    once(sigName: "notify::text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SidebarStoreSidebarText extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.SidebarStoreSidebarText

    static name: string

    // Constructors of Gitg-1.0.Gitg.SidebarStoreSidebarText

    constructor(config?: SidebarStoreSidebarText.ConstructorProperties) 
    constructor(text: string) 
    static new(text: string): SidebarStoreSidebarText
    _init(config?: SidebarStoreSidebarText.ConstructorProperties): void
}

export module SidebarStoreSidebarHeader {

    // Constructor properties interface

    export interface ConstructorProperties extends SidebarStoreSidebarText.ConstructorProperties {
    }

}

export interface SidebarStoreSidebarHeader {

    // Own properties of Gitg-1.0.Gitg.SidebarStoreSidebarHeader

    readonly id: number

    // Owm methods of Gitg-1.0.Gitg.SidebarStoreSidebarHeader

    getId(): number

    // Class property signals of Gitg-1.0.Gitg.SidebarStoreSidebarHeader

    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SidebarStoreSidebarHeader extends SidebarStoreSidebarText {

    // Own properties of Gitg-1.0.Gitg.SidebarStoreSidebarHeader

    static name: string

    // Constructors of Gitg-1.0.Gitg.SidebarStoreSidebarHeader

    constructor(config?: SidebarStoreSidebarHeader.ConstructorProperties) 
    constructor(text: string, id: number) 
    static new(text: string, id: number): SidebarStoreSidebarHeader

    // Overloads of new

    static new(text: string): SidebarStoreSidebarText
    _init(config?: SidebarStoreSidebarHeader.ConstructorProperties): void
}

export module Sidebar {

    // Signal callback interfaces

    /**
     * Signal callback interface for `deselected`
     */
    export interface DeselectedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `populate-popup`
     */
    export interface PopulatePopupSignalCallback {
        (menu: Gtk.Menu): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.TreeView.ConstructorProperties {

        // Own constructor properties of Gitg-1.0.Gitg.Sidebar

        model: any
    }

}

export interface Sidebar {

    // Own properties of Gitg-1.0.Gitg.Sidebar

    model: any

    // Owm methods of Gitg-1.0.Gitg.Sidebar

    // Has conflict: selectFunction(sel: Gtk.TreeSelection, model: Gtk.TreeModel, path: Gtk.TreePath, cursel: boolean): boolean
    // Has conflict: selectionChanged(sel: Gtk.TreeSelection): void
    getSelectedIter(): [ /* returnType */ boolean, /* iter */ Gtk.TreeIter ]
    getSelectedItem(tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify): object | null
    getSelectedItems(tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify): [ /* returnType */ object[], /* resultLength1 */ number ]
    select(item: SidebarItem): void
    isSelected(item: SidebarItem): boolean
    getModel(): SidebarStore

    // Overloads of getModel

    /**
     * Returns the model the #GtkTreeView is based on.  Returns %NULL if the
     * model is unset.
     */
    getModel(): Gtk.TreeModel | null
    setModel(value: SidebarStore): void

    // Overloads of setModel

    /**
     * Sets the model for a #GtkTreeView.  If the `tree_view` already has a model
     * set, it will remove it before setting the new model.  If `model` is %NULL,
     * then it will unset the old model.
     * @param model The model.
     */
    setModel(model: Gtk.TreeModel | null): void

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

    // Own virtual methods of Gitg-1.0.Gitg.Sidebar

    selectFunction(sel: Gtk.TreeSelection, model: Gtk.TreeModel, path: Gtk.TreePath, cursel: boolean): boolean
    selectionChanged(sel: Gtk.TreeSelection): void

    // Own signals of Gitg-1.0.Gitg.Sidebar

    connect(sigName: "deselected", callback: Sidebar.DeselectedSignalCallback): number
    on(sigName: "deselected", callback: Sidebar.DeselectedSignalCallback): number
    once(sigName: "deselected", callback: Sidebar.DeselectedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "deselected", ...args: any[]): void
    connect(sigName: "populate-popup", callback: Sidebar.PopulatePopupSignalCallback): number
    on(sigName: "populate-popup", callback: Sidebar.PopulatePopupSignalCallback): number
    once(sigName: "populate-popup", callback: Sidebar.PopulatePopupSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "populate-popup", ...args: any[]): void

    // Class property signals of Gitg-1.0.Gitg.Sidebar

    connect(sigName: "notify::model", callback: any): number
    on(sigName: "notify::model", callback: any): number
    once(sigName: "notify::model", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::model", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Sidebar extends Gtk.TreeView {

    // Own properties of Gitg-1.0.Gitg.Sidebar

    static name: string

    // Constructors of Gitg-1.0.Gitg.Sidebar

    constructor(config?: Sidebar.ConstructorProperties) 
    constructor() 
    static new(): Sidebar

    // Overloads of new

    /**
     * Creates a new #GtkTreeView widget.
     * @constructor 
     */
    static new(): Gtk.TreeView
    _init(config?: Sidebar.ConstructorProperties): void
}

export module StageStatusFile {

    // Constructor properties interface

    export interface ConstructorProperties extends StageStatusItem.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface StageStatusFile extends StageStatusItem {

    // Own properties of Gitg-1.0.Gitg.StageStatusFile

    readonly flags: Ggit.StatusFlags

    // Owm methods of Gitg-1.0.Gitg.StageStatusFile

    getFlags(): Ggit.StatusFlags

    // Class property signals of Gitg-1.0.Gitg.StageStatusFile

    connect(sigName: "notify::flags", callback: any): number
    on(sigName: "notify::flags", callback: any): number
    once(sigName: "notify::flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::path", callback: any): number
    on(sigName: "notify::path", callback: any): number
    once(sigName: "notify::path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::is-staged", callback: any): number
    on(sigName: "notify::is-staged", callback: any): number
    once(sigName: "notify::is-staged", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-staged", ...args: any[]): void
    connect(sigName: "notify::is-unstaged", callback: any): number
    on(sigName: "notify::is-unstaged", callback: any): number
    once(sigName: "notify::is-unstaged", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-unstaged", ...args: any[]): void
    connect(sigName: "notify::is-untracked", callback: any): number
    on(sigName: "notify::is-untracked", callback: any): number
    once(sigName: "notify::is-untracked", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-untracked", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class StageStatusFile extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.StageStatusFile

    static name: string

    // Constructors of Gitg-1.0.Gitg.StageStatusFile

    constructor(config?: StageStatusFile.ConstructorProperties) 
    constructor(path: string, flags: Ggit.StatusFlags) 
    static new(path: string, flags: Ggit.StatusFlags): StageStatusFile
    _init(config?: StageStatusFile.ConstructorProperties): void
}

export module StageStatusSubmodule {

    // Constructor properties interface

    export interface ConstructorProperties extends StageStatusItem.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface StageStatusSubmodule extends StageStatusItem {

    // Own properties of Gitg-1.0.Gitg.StageStatusSubmodule

    readonly submodule: Ggit.Submodule
    readonly isDirty: boolean
    readonly flags: Ggit.SubmoduleStatus

    // Owm methods of Gitg-1.0.Gitg.StageStatusSubmodule

    getSubmodule(): Ggit.Submodule
    getIsDirty(): boolean
    getFlags(): Ggit.SubmoduleStatus

    // Class property signals of Gitg-1.0.Gitg.StageStatusSubmodule

    connect(sigName: "notify::submodule", callback: any): number
    on(sigName: "notify::submodule", callback: any): number
    once(sigName: "notify::submodule", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::submodule", ...args: any[]): void
    connect(sigName: "notify::is-dirty", callback: any): number
    on(sigName: "notify::is-dirty", callback: any): number
    once(sigName: "notify::is-dirty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-dirty", ...args: any[]): void
    connect(sigName: "notify::flags", callback: any): number
    on(sigName: "notify::flags", callback: any): number
    once(sigName: "notify::flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::path", callback: any): number
    on(sigName: "notify::path", callback: any): number
    once(sigName: "notify::path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::is-staged", callback: any): number
    on(sigName: "notify::is-staged", callback: any): number
    once(sigName: "notify::is-staged", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-staged", ...args: any[]): void
    connect(sigName: "notify::is-unstaged", callback: any): number
    on(sigName: "notify::is-unstaged", callback: any): number
    once(sigName: "notify::is-unstaged", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-unstaged", ...args: any[]): void
    connect(sigName: "notify::is-untracked", callback: any): number
    on(sigName: "notify::is-untracked", callback: any): number
    once(sigName: "notify::is-untracked", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-untracked", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class StageStatusSubmodule extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.StageStatusSubmodule

    static name: string

    // Constructors of Gitg-1.0.Gitg.StageStatusSubmodule

    constructor(config?: StageStatusSubmodule.ConstructorProperties) 
    constructor(submodule: Ggit.Submodule) 
    static new(submodule: Ggit.Submodule): StageStatusSubmodule
    _init(config?: StageStatusSubmodule.ConstructorProperties): void
}

export module StageStatusEnumerator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface StageStatusEnumerator {

    // Owm methods of Gitg-1.0.Gitg.StageStatusEnumerator

    cancel(): void
    nextItems(num: number, callback: Gio.AsyncReadyCallback | null): void
    nextItemsFinish(res: Gio.AsyncResult): StageStatusItem[]

    // Class property signals of Gitg-1.0.Gitg.StageStatusEnumerator

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class StageStatusEnumerator extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.StageStatusEnumerator

    static name: string

    // Constructors of Gitg-1.0.Gitg.StageStatusEnumerator

    constructor(config?: StageStatusEnumerator.ConstructorProperties) 
    _init(config?: StageStatusEnumerator.ConstructorProperties): void
}

export interface PatchSet {

    // Own fields of Gitg-1.0.Gitg.PatchSet

    refCount: number
    filename: string
    patches: PatchSetPatch[]
    patchesLength1: number

    // Owm methods of Gitg-1.0.Gitg.PatchSet

    reversed(): PatchSet
}

export class PatchSet {

    // Own properties of Gitg-1.0.Gitg.PatchSet

    static name: string

    // Constructors of Gitg-1.0.Gitg.PatchSet

    constructor() 
    static new(): PatchSet
}

export module Stage {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Stage {

    // Owm methods of Gitg-1.0.Gitg.Stage

    refresh(callback: Gio.AsyncReadyCallback | null): void
    refreshFinish(res: Gio.AsyncResult): void
    getHeadTree(callback: Gio.AsyncReadyCallback | null): void
    getHeadTreeFinish(res: Gio.AsyncResult): Ggit.Tree | null
    fileStatus(options: Ggit.StatusOptions | null): StageStatusEnumerator
    preCommitHook(author: Ggit.Signature, callback: Gio.AsyncReadyCallback | null): void
    preCommitHookFinish(res: Gio.AsyncResult): void
    commitIndex(index: Ggit.Index, reference: Ggit.Ref, message: string, author: Ggit.Signature, committer: Ggit.Signature, parents: Ggit.OId[] | null, options: StageCommitOptions, callback: Gio.AsyncReadyCallback | null): void
    commitIndexFinish(res: Gio.AsyncResult): Ggit.OId | null
    commitTree(treeoid: Ggit.OId, reference: Ggit.Ref, message: string, author: Ggit.Signature, committer: Ggit.Signature, parents: Ggit.OId[] | null, options: StageCommitOptions, callback: Gio.AsyncReadyCallback | null): void
    commitTreeFinish(res: Gio.AsyncResult): Ggit.OId | null
    commit(message: string, author: Ggit.Signature, committer: Ggit.Signature, options: StageCommitOptions, callback: Gio.AsyncReadyCallback | null): void
    commitFinish(res: Gio.AsyncResult): Ggit.OId | null
    revert(file: Gio.File, callback: Gio.AsyncReadyCallback | null): void
    revertFinish(res: Gio.AsyncResult): void
    revertPath(path: string, callback: Gio.AsyncReadyCallback | null): void
    revertPathFinish(res: Gio.AsyncResult): void
    revertPatch(patch: PatchSet, callback: Gio.AsyncReadyCallback | null): void
    revertPatchFinish(res: Gio.AsyncResult): void
    delete(file: Gio.File, callback: Gio.AsyncReadyCallback | null): void
    deleteFinish(res: Gio.AsyncResult): void
    deletePath(path: string, callback: Gio.AsyncReadyCallback | null): void
    deletePathFinish(res: Gio.AsyncResult): void
    stage(file: Gio.File, callback: Gio.AsyncReadyCallback | null): void
    stageFinish(res: Gio.AsyncResult): void
    stagePath(path: string, callback: Gio.AsyncReadyCallback | null): void
    stagePathFinish(res: Gio.AsyncResult): void
    stageCommit(path: string, commit: Ggit.Commit, callback: Gio.AsyncReadyCallback | null): void
    stageCommitFinish(res: Gio.AsyncResult): void
    stagePatch(patch: PatchSet, callback: Gio.AsyncReadyCallback | null): void
    stagePatchFinish(res: Gio.AsyncResult): void
    unstage(file: Gio.File, callback: Gio.AsyncReadyCallback | null): void
    unstageFinish(res: Gio.AsyncResult): void
    unstagePath(path: string, callback: Gio.AsyncReadyCallback | null): void
    unstagePathFinish(res: Gio.AsyncResult): void
    unstagePatch(patch: PatchSet, callback: Gio.AsyncReadyCallback | null): void
    unstagePatchFinish(res: Gio.AsyncResult): void
    diffIndexAll(files: StageStatusItem[] | null, defopts: Ggit.DiffOptions | null, callback: Gio.AsyncReadyCallback | null): void
    diffIndexAllFinish(res: Gio.AsyncResult): Ggit.Diff | null
    diffIndex(f: StageStatusItem, defopts: Ggit.DiffOptions | null, callback: Gio.AsyncReadyCallback | null): void
    diffIndexFinish(res: Gio.AsyncResult): Ggit.Diff | null
    diffWorkdirAll(files: StageStatusItem[], defopts: Ggit.DiffOptions | null, callback: Gio.AsyncReadyCallback | null): void
    diffWorkdirAllFinish(res: Gio.AsyncResult): Ggit.Diff | null
    diffWorkdir(f: StageStatusItem, defopts: Ggit.DiffOptions | null, callback: Gio.AsyncReadyCallback | null): void
    diffWorkdirFinish(res: Gio.AsyncResult): Ggit.Diff | null

    // Class property signals of Gitg-1.0.Gitg.Stage

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Stage extends GObject.Object {

    // Own properties of Gitg-1.0.Gitg.Stage

    static name: string

    // Constructors of Gitg-1.0.Gitg.Stage

    constructor(config?: Stage.ConstructorProperties) 
    _init(config?: Stage.ConstructorProperties): void
}

export interface TextConv {

    // Own fields of Gitg-1.0.Gitg.TextConv

    refCount: number
}

export class TextConv {

    // Own properties of Gitg-1.0.Gitg.TextConv

    static name: string

    // Constructors of Gitg-1.0.Gitg.TextConv

    constructor() 
    static new(): TextConv
    static hasTextconvCommand(repository: Repository, file: Ggit.DiffFile): boolean
    static getTextconvContent(repository: Repository, file: Ggit.DiffFile): Uint8Array
    static getTextconvContentFromRaw(repository: Repository, file: Ggit.DiffFile, rawContent: Uint8Array | null): Uint8Array
}

export module Theme {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties {
    }

}

export interface Theme {

    // Owm methods of Gitg-1.0.Gitg.Theme

    isThemeDark(): boolean

    // Conflicting methods

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

    // Class property signals of Gitg-1.0.Gitg.Theme

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

export class Theme extends Gtk.Widget {

    // Own properties of Gitg-1.0.Gitg.Theme

    static name: string

    // Constructors of Gitg-1.0.Gitg.Theme

    constructor(config?: Theme.ConstructorProperties) 
    constructor() 
    static new(): Theme
    _init(config?: Theme.ConstructorProperties): void
    static instance(): Theme
}

export interface Utils {

    // Own fields of Gitg-1.0.Gitg.Utils

    refCount: number
}

export class Utils {

    // Own properties of Gitg-1.0.Gitg.Utils

    static name: string

    // Constructors of Gitg-1.0.Gitg.Utils

    constructor() 
    static new(): Utils
    static replaceHomeDirWithTilde(file: Gio.File): string
    static expandHomeDir(path: string): string
}

export interface WhenMapped {

    // Own fields of Gitg-1.0.Gitg.WhenMapped

    refCount: number

    // Owm methods of Gitg-1.0.Gitg.WhenMapped

    update(mapped: any, lifetime: GObject.Object | null): void
}

export class WhenMapped {

    // Own properties of Gitg-1.0.Gitg.WhenMapped

    static name: string

    // Constructors of Gitg-1.0.Gitg.WhenMapped

    constructor(widget: Gtk.Widget) 
    static new(widget: Gtk.Widget): WhenMapped
}

export interface AsyncClass {
}

export abstract class AsyncClass {

    // Own properties of Gitg-1.0.Gitg.AsyncClass

    static name: string
}

export interface AsyncPrivate {
}

export class AsyncPrivate {

    // Own properties of Gitg-1.0.Gitg.AsyncPrivate

    static name: string
}

export interface AuthenticationDialogClass {
}

export abstract class AuthenticationDialogClass {

    // Own properties of Gitg-1.0.Gitg.AuthenticationDialogClass

    static name: string
}

export interface AuthenticationDialogPrivate {
}

export class AuthenticationDialogPrivate {

    // Own properties of Gitg-1.0.Gitg.AuthenticationDialogPrivate

    static name: string
}

export interface AvatarCacheClass {
}

export abstract class AvatarCacheClass {

    // Own properties of Gitg-1.0.Gitg.AvatarCacheClass

    static name: string
}

export interface AvatarCachePrivate {
}

export class AvatarCachePrivate {

    // Own properties of Gitg-1.0.Gitg.AvatarCachePrivate

    static name: string
}

export interface BranchBaseClass {
}

export abstract class BranchBaseClass {

    // Own properties of Gitg-1.0.Gitg.BranchBaseClass

    static name: string
}

export interface BranchBasePrivate {
}

export class BranchBasePrivate {

    // Own properties of Gitg-1.0.Gitg.BranchBasePrivate

    static name: string
}

export interface CellRendererLanesClass {
}

export abstract class CellRendererLanesClass {

    // Own properties of Gitg-1.0.Gitg.CellRendererLanesClass

    static name: string
}

export interface CellRendererLanesPrivate {
}

export class CellRendererLanesPrivate {

    // Own properties of Gitg-1.0.Gitg.CellRendererLanesPrivate

    static name: string
}

export interface ColorClass {
}

export abstract class ColorClass {

    // Own properties of Gitg-1.0.Gitg.ColorClass

    static name: string
}

export interface ColorPrivate {
}

export class ColorPrivate {

    // Own properties of Gitg-1.0.Gitg.ColorPrivate

    static name: string
}

export interface CommitListViewClass {
}

export abstract class CommitListViewClass {

    // Own properties of Gitg-1.0.Gitg.CommitListViewClass

    static name: string
}

export interface CommitListViewPrivate {
}

export class CommitListViewPrivate {

    // Own properties of Gitg-1.0.Gitg.CommitListViewPrivate

    static name: string
}

export interface CommitModelClass {
}

export abstract class CommitModelClass {

    // Own properties of Gitg-1.0.Gitg.CommitModelClass

    static name: string
}

export interface CommitModelPrivate {
}

export class CommitModelPrivate {

    // Own properties of Gitg-1.0.Gitg.CommitModelPrivate

    static name: string
}

export interface CommitClass {
}

export abstract class CommitClass {

    // Own properties of Gitg-1.0.Gitg.CommitClass

    static name: string
}

export interface CommitPrivate {
}

export class CommitPrivate {

    // Own properties of Gitg-1.0.Gitg.CommitPrivate

    static name: string
}

export interface CredentialsManagerClass {
}

export abstract class CredentialsManagerClass {

    // Own properties of Gitg-1.0.Gitg.CredentialsManagerClass

    static name: string
}

export interface CredentialsManagerPrivate {
}

export class CredentialsManagerPrivate {

    // Own properties of Gitg-1.0.Gitg.CredentialsManagerPrivate

    static name: string
}

export interface DateClass {
}

export abstract class DateClass {

    // Own properties of Gitg-1.0.Gitg.DateClass

    static name: string
}

export interface DatePrivate {
}

export class DatePrivate {

    // Own properties of Gitg-1.0.Gitg.DatePrivate

    static name: string
}

export interface DiffStatClass {
}

export abstract class DiffStatClass {

    // Own properties of Gitg-1.0.Gitg.DiffStatClass

    static name: string
}

export interface DiffStatPrivate {
}

export class DiffStatPrivate {

    // Own properties of Gitg-1.0.Gitg.DiffStatPrivate

    static name: string
}

export interface DiffViewOptionsClass {
}

export abstract class DiffViewOptionsClass {

    // Own properties of Gitg-1.0.Gitg.DiffViewOptionsClass

    static name: string
}

export interface DiffViewOptionsPrivate {
}

export class DiffViewOptionsPrivate {

    // Own properties of Gitg-1.0.Gitg.DiffViewOptionsPrivate

    static name: string
}

export interface DiffViewClass {

    // Own fields of Gitg-1.0.Gitg.DiffViewClass

    optionsChanged: (self: DiffView) => void
}

export abstract class DiffViewClass {

    // Own properties of Gitg-1.0.Gitg.DiffViewClass

    static name: string
}

export interface DiffViewPrivate {
}

export class DiffViewPrivate {

    // Own properties of Gitg-1.0.Gitg.DiffViewPrivate

    static name: string
}

export interface FontManagerClass {
}

export abstract class FontManagerClass {

    // Own properties of Gitg-1.0.Gitg.FontManagerClass

    static name: string
}

export interface FontManagerPrivate {
}

export class FontManagerPrivate {

    // Own properties of Gitg-1.0.Gitg.FontManagerPrivate

    static name: string
}

export interface HookClass {
}

export abstract class HookClass {

    // Own properties of Gitg-1.0.Gitg.HookClass

    static name: string
}

export interface HookPrivate {
}

export class HookPrivate {

    // Own properties of Gitg-1.0.Gitg.HookPrivate

    static name: string
}

export interface LabelRendererClass {
}

export abstract class LabelRendererClass {

    // Own properties of Gitg-1.0.Gitg.LabelRendererClass

    static name: string
}

export interface LabelRendererPrivate {
}

export class LabelRendererPrivate {

    // Own properties of Gitg-1.0.Gitg.LabelRendererPrivate

    static name: string
}

export interface LanesClass {
}

export abstract class LanesClass {

    // Own properties of Gitg-1.0.Gitg.LanesClass

    static name: string
}

export interface LanesPrivate {
}

export class LanesPrivate {

    // Own properties of Gitg-1.0.Gitg.LanesPrivate

    static name: string
}

export interface LaneClass {
}

export abstract class LaneClass {

    // Own properties of Gitg-1.0.Gitg.LaneClass

    static name: string
}

export interface LanePrivate {
}

export class LanePrivate {

    // Own properties of Gitg-1.0.Gitg.LanePrivate

    static name: string
}

export interface ProgressBinClass {
}

export abstract class ProgressBinClass {

    // Own properties of Gitg-1.0.Gitg.ProgressBinClass

    static name: string
}

export interface ProgressBinPrivate {
}

export class ProgressBinPrivate {

    // Own properties of Gitg-1.0.Gitg.ProgressBinPrivate

    static name: string
}

export interface RefBaseClass {
}

export abstract class RefBaseClass {

    // Own properties of Gitg-1.0.Gitg.RefBaseClass

    static name: string
}

export interface RefBasePrivate {
}

export class RefBasePrivate {

    // Own properties of Gitg-1.0.Gitg.RefBasePrivate

    static name: string
}

export interface ParsedRefNameClass {
}

export abstract class ParsedRefNameClass {

    // Own properties of Gitg-1.0.Gitg.ParsedRefNameClass

    static name: string
}

export interface ParsedRefNamePrivate {
}

export class ParsedRefNamePrivate {

    // Own properties of Gitg-1.0.Gitg.ParsedRefNamePrivate

    static name: string
}

export interface RemoteClass {
}

export abstract class RemoteClass {

    // Own properties of Gitg-1.0.Gitg.RemoteClass

    static name: string
}

export interface RemotePrivate {
}

export class RemotePrivate {

    // Own properties of Gitg-1.0.Gitg.RemotePrivate

    static name: string
}

export interface RepositoryListBoxClass {
}

export abstract class RepositoryListBoxClass {

    // Own properties of Gitg-1.0.Gitg.RepositoryListBoxClass

    static name: string
}

export interface RepositoryListBoxPrivate {
}

export class RepositoryListBoxPrivate {

    // Own properties of Gitg-1.0.Gitg.RepositoryListBoxPrivate

    static name: string
}

export interface RepositoryListBoxRowClass {
}

export abstract class RepositoryListBoxRowClass {

    // Own properties of Gitg-1.0.Gitg.RepositoryListBoxRowClass

    static name: string
}

export interface RepositoryListBoxRowPrivate {
}

export class RepositoryListBoxRowPrivate {

    // Own properties of Gitg-1.0.Gitg.RepositoryListBoxRowPrivate

    static name: string
}

export interface RepositoryClass {
}

export abstract class RepositoryClass {

    // Own properties of Gitg-1.0.Gitg.RepositoryClass

    static name: string
}

export interface RepositoryPrivate {
}

export class RepositoryPrivate {

    // Own properties of Gitg-1.0.Gitg.RepositoryPrivate

    static name: string
}

export interface ResourceClass {
}

export abstract class ResourceClass {

    // Own properties of Gitg-1.0.Gitg.ResourceClass

    static name: string
}

export interface ResourcePrivate {
}

export class ResourcePrivate {

    // Own properties of Gitg-1.0.Gitg.ResourcePrivate

    static name: string
}

export interface SidebarStoreClass {
}

export abstract class SidebarStoreClass {

    // Own properties of Gitg-1.0.Gitg.SidebarStoreClass

    static name: string
}

export interface SidebarStorePrivate {
}

export class SidebarStorePrivate {

    // Own properties of Gitg-1.0.Gitg.SidebarStorePrivate

    static name: string
}

export interface SidebarStoreSidebarTextClass {
}

export abstract class SidebarStoreSidebarTextClass {

    // Own properties of Gitg-1.0.Gitg.SidebarStoreSidebarTextClass

    static name: string
}

export interface SidebarStoreSidebarTextPrivate {
}

export class SidebarStoreSidebarTextPrivate {

    // Own properties of Gitg-1.0.Gitg.SidebarStoreSidebarTextPrivate

    static name: string
}

export interface SidebarStoreSidebarHeaderClass {
}

export abstract class SidebarStoreSidebarHeaderClass {

    // Own properties of Gitg-1.0.Gitg.SidebarStoreSidebarHeaderClass

    static name: string
}

export interface SidebarStoreSidebarHeaderPrivate {
}

export class SidebarStoreSidebarHeaderPrivate {

    // Own properties of Gitg-1.0.Gitg.SidebarStoreSidebarHeaderPrivate

    static name: string
}

export interface SidebarClass {

    // Own fields of Gitg-1.0.Gitg.SidebarClass

    selectFunction: (self: Sidebar, sel: Gtk.TreeSelection, model: Gtk.TreeModel, path: Gtk.TreePath, cursel: boolean) => boolean
    selectionChanged: (self: Sidebar, sel: Gtk.TreeSelection) => void
}

export abstract class SidebarClass {

    // Own properties of Gitg-1.0.Gitg.SidebarClass

    static name: string
}

export interface SidebarPrivate {
}

export class SidebarPrivate {

    // Own properties of Gitg-1.0.Gitg.SidebarPrivate

    static name: string
}

export interface StageStatusFileClass {
}

export abstract class StageStatusFileClass {

    // Own properties of Gitg-1.0.Gitg.StageStatusFileClass

    static name: string
}

export interface StageStatusFilePrivate {
}

export class StageStatusFilePrivate {

    // Own properties of Gitg-1.0.Gitg.StageStatusFilePrivate

    static name: string
}

export interface StageStatusSubmoduleClass {
}

export abstract class StageStatusSubmoduleClass {

    // Own properties of Gitg-1.0.Gitg.StageStatusSubmoduleClass

    static name: string
}

export interface StageStatusSubmodulePrivate {
}

export class StageStatusSubmodulePrivate {

    // Own properties of Gitg-1.0.Gitg.StageStatusSubmodulePrivate

    static name: string
}

export interface StageStatusEnumeratorClass {
}

export abstract class StageStatusEnumeratorClass {

    // Own properties of Gitg-1.0.Gitg.StageStatusEnumeratorClass

    static name: string
}

export interface StageStatusEnumeratorPrivate {
}

export class StageStatusEnumeratorPrivate {

    // Own properties of Gitg-1.0.Gitg.StageStatusEnumeratorPrivate

    static name: string
}

export interface PatchSetClass {
}

export abstract class PatchSetClass {

    // Own properties of Gitg-1.0.Gitg.PatchSetClass

    static name: string
}

export interface PatchSetPrivate {
}

export class PatchSetPrivate {

    // Own properties of Gitg-1.0.Gitg.PatchSetPrivate

    static name: string
}

export interface PatchSetPatch {

    // Own fields of Gitg-1.0.Gitg.PatchSetPatch

    type: PatchSetType
    oldOffset: number
    newOffset: number
    length: number
}

export class PatchSetPatch {

    // Own properties of Gitg-1.0.Gitg.PatchSetPatch

    static name: string
}

export interface StageClass {
}

export abstract class StageClass {

    // Own properties of Gitg-1.0.Gitg.StageClass

    static name: string
}

export interface StagePrivate {
}

export class StagePrivate {

    // Own properties of Gitg-1.0.Gitg.StagePrivate

    static name: string
}

export interface TextConvClass {
}

export abstract class TextConvClass {

    // Own properties of Gitg-1.0.Gitg.TextConvClass

    static name: string
}

export interface TextConvPrivate {
}

export class TextConvPrivate {

    // Own properties of Gitg-1.0.Gitg.TextConvPrivate

    static name: string
}

export interface ThemeClass {
}

export abstract class ThemeClass {

    // Own properties of Gitg-1.0.Gitg.ThemeClass

    static name: string
}

export interface ThemePrivate {
}

export class ThemePrivate {

    // Own properties of Gitg-1.0.Gitg.ThemePrivate

    static name: string
}

export interface UtilsClass {
}

export abstract class UtilsClass {

    // Own properties of Gitg-1.0.Gitg.UtilsClass

    static name: string
}

export interface UtilsPrivate {
}

export class UtilsPrivate {

    // Own properties of Gitg-1.0.Gitg.UtilsPrivate

    static name: string
}

export interface WhenMappedClass {
}

export abstract class WhenMappedClass {

    // Own properties of Gitg-1.0.Gitg.WhenMappedClass

    static name: string
}

export interface WhenMappedPrivate {
}

export class WhenMappedPrivate {

    // Own properties of Gitg-1.0.Gitg.WhenMappedPrivate

    static name: string
}

export interface BranchIface {

    // Own fields of Gitg-1.0.Gitg.BranchIface

    getUpstream: (self: Branch) => Ref
}

export abstract class BranchIface {

    // Own properties of Gitg-1.0.Gitg.BranchIface

    static name: string
}

export interface RefIface {

    // Own fields of Gitg-1.0.Gitg.RefIface

    getOwner: (self: Ref) => Repository
    getDParsedName: (self: Ref) => ParsedRefName
    setDParsedName: (self: Ref, value: ParsedRefName) => void
    getDPushes: (self: Ref) => Ref[] | null
    setDPushes: (self: Ref, value: Ref[] | null) => void
    getState: (self: Ref) => RefState
    setState: (self: Ref, value: RefState) => void
    getWorking: (self: Ref) => boolean
    setWorking: (self: Ref, value: boolean) => void
}

export abstract class RefIface {

    // Own properties of Gitg-1.0.Gitg.RefIface

    static name: string
}

export interface CredentialsProviderIface {

    // Own fields of Gitg-1.0.Gitg.CredentialsProviderIface

    credentials: (self: CredentialsProvider, url: string, usernameFromUrl: string | null, allowedTypes: Ggit.Credtype) => Ggit.Cred | null
}

export abstract class CredentialsProviderIface {

    // Own properties of Gitg-1.0.Gitg.CredentialsProviderIface

    static name: string
}

export interface SidebarItemIface {

    // Own fields of Gitg-1.0.Gitg.SidebarItemIface

    activate: (self: SidebarItem, numclick: number) => void
    getText: (self: SidebarItem) => string
    getIconName: (self: SidebarItem) => string | null
}

export abstract class SidebarItemIface {

    // Own properties of Gitg-1.0.Gitg.SidebarItemIface

    static name: string
}

export interface StageStatusItemIface {

    // Own fields of Gitg-1.0.Gitg.StageStatusItemIface

    getPath: (self: StageStatusItem) => string
    getIsStaged: (self: StageStatusItem) => boolean
    getIsUnstaged: (self: StageStatusItem) => boolean
    getIsUntracked: (self: StageStatusItem) => boolean
    getIconName: (self: StageStatusItem) => string | null
}

export abstract class StageStatusItemIface {

    // Own properties of Gitg-1.0.Gitg.StageStatusItemIface

    static name: string
}
