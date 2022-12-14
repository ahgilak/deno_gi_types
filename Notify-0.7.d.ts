
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Notify-0.7
 */

import type * as GdkPixbuf from './GdkPixbuf-2.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as GModule from './GModule-2.0.js';

/**
 * The urgency level of the notification.
 */
export enum Urgency {
    /**
     * Low urgency. Used for unimportant notifications.
     */
    LOW,
    /**
     * Normal urgency. Used for most standard notifications.
     */
    NORMAL,
    /**
     * Critical urgency. Used for very important notifications.
     */
    CRITICAL,
}
/**
 * The default expiration time on a notification.
 */
export const EXPIRES_DEFAULT: number
/**
 * The notification never expires. It stays open until closed by the calling API
 * or the user.
 */
export const EXPIRES_NEVER: number
export const VERSION_MAJOR: number
export const VERSION_MICRO: number
export const VERSION_MINOR: number
/**
 * Gets the application name registered.
 */
export function getAppName(): string
/**
 * Synchronously queries the server for its capabilities and returns them in a #GList.
 */
export function getServerCaps(): string[]
/**
 * Synchronously queries the server for its information, specifically, the name, vendor,
 * server version, and the version of the notifications specification that it
 * is compliant with.
 */
export function getServerInfo(): [ /* returnType */ boolean, /* retName */ string, /* retVendor */ string, /* retVersion */ string, /* retSpecVersion */ string ]
/**
 * Initialized libnotify. This must be called before any other functions.
 * @param appName The name of the application initializing libnotify.
 */
export function init(appName: string): boolean
/**
 * Gets whether or not libnotify is initialized.
 */
export function isInitted(): boolean
/**
 * Sets the application name.
 * @param appName The name of the application
 */
export function setAppName(appName: string): void
/**
 * Uninitialized libnotify.
 * 
 * This should be called when the program no longer needs libnotify for
 * the rest of its lifecycle, typically just before exitting.
 */
export function uninit(): void
/**
 * An action callback function.
 * @callback 
 * @param notification 
 * @param action 
 */
export interface ActionCallback {
    (notification: Notification, action: string): void
}
export module Notification {

    // Signal callback interfaces

    /**
     * Signal callback interface for `closed`
     */
    export interface ClosedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Notify-0.7.Notify.Notification

        appName?: string | null
        body?: string | null
        iconName?: string | null
        id?: number | null
        summary?: string | null
    }

}

export interface Notification {

    // Own properties of Notify-0.7.Notify.Notification

    appName: string
    body: string
    readonly closedReason: number
    iconName: string
    id: number
    summary: string

    // Owm methods of Notify-0.7.Notify.Notification

    /**
     * Adds an action to a notification. When the action is invoked, the
     * specified callback function will be called, along with the value passed
     * to `user_data`.
     * @param action The action ID.
     * @param label The human-readable action label.
     * @param callback The action's callback function.
     */
    addAction(action: string, label: string, callback: ActionCallback): void
    /**
     * Clears all actions from the notification.
     */
    clearActions(): void
    /**
     * Clears all hints from the notification.
     */
    clearHints(): void
    /**
     * Synchronously tells the notification server to hide the notification on the screen.
     */
    close(): boolean
    /**
     * Returns the closed reason code for the notification. This is valid only
     * after the "closed" signal is emitted.
     */
    getClosedReason(): number
    /**
     * Sets the application name for the notification. If this function is
     * not called or if `app_name` is %NULL, the application name will be
     * set from the value used in notify_init() or overridden with
     * notify_set_app_name().
     * @param appName the localised application name
     */
    setAppName(appName: string): void
    /**
     * Sets the category of this notification. This can be used by the
     * notification server to filter or display the data in a certain way.
     * @param category The category.
     */
    setCategory(category: string): void
    /**
     * Sets a hint for `key` with value `value`. If `value` is %NULL,
     * a previously set hint for `key` is unset.
     * 
     * If `value` is floating, it is consumed.
     * @param key the hint key
     * @param value the hint value, or %NULL to unset the hint
     */
    setHint(key: string, value: GLib.Variant | null): void
    /**
     * Sets a hint with a byte value.
     * @param key The hint.
     * @param value The hint's value.
     */
    setHintByte(key: string, value: number): void
    /**
     * Sets a hint with a byte array value. The length of `value` must be passed
     * as `len`.
     * @param key The hint.
     * @param value The hint's value.
     */
    setHintByteArray(key: string, value: Uint8Array): void
    /**
     * Sets a hint with a double value.
     * @param key The hint.
     * @param value The hint's value.
     */
    setHintDouble(key: string, value: number): void
    /**
     * Sets a hint with a 32-bit integer value.
     * @param key The hint.
     * @param value The hint's value.
     */
    setHintInt32(key: string, value: number): void
    /**
     * Sets a hint with a string value.
     * @param key The hint.
     * @param value The hint's value.
     */
    setHintString(key: string, value: string): void
    /**
     * Sets a hint with an unsigned 32-bit integer value.
     * @param key The hint.
     * @param value The hint's value.
     */
    setHintUint32(key: string, value: number): void
    /**
     * Sets the icon in the notification from a #GdkPixbuf.
     * @param icon The icon.
     */
    setIconFromPixbuf(icon: GdkPixbuf.Pixbuf): void
    /**
     * Sets the image in the notification from a #GdkPixbuf.
     * @param pixbuf The image.
     */
    setImageFromPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    /**
     * Sets the timeout of the notification. To set the default time, pass
     * %NOTIFY_EXPIRES_DEFAULT as `timeout`. To set the notification to never
     * expire, pass %NOTIFY_EXPIRES_NEVER.
     * 
     * Note that the timeout may be ignored by the server.
     * @param timeout The timeout in milliseconds.
     */
    setTimeout(timeout: number): void
    /**
     * Sets the urgency level of this notification.
     * 
     * See: #NotifyUrgency
     * @param urgency The urgency level.
     */
    setUrgency(urgency: Urgency): void
    /**
     * Tells the notification server to display the notification on the screen.
     */
    show(): boolean
    /**
     * Updates the notification text and icon. This won't send the update out
     * and display it on the screen. For that, you will need to call
     * notify_notification_show().
     * @param summary The new required summary text.
     * @param body The optional body text.
     * @param icon The optional icon theme icon name or filename.
     */
    update(summary: string, body: string | null, icon: string | null): boolean

    // Own virtual methods of Notify-0.7.Notify.Notification

    closed(): void

    // Own signals of Notify-0.7.Notify.Notification

    connect(sigName: "closed", callback: Notification.ClosedSignalCallback): number
    on(sigName: "closed", callback: Notification.ClosedSignalCallback): number
    once(sigName: "closed", callback: Notification.ClosedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "closed", ...args: any[]): void

    // Class property signals of Notify-0.7.Notify.Notification

    connect(sigName: "notify::app-name", callback: any): number
    on(sigName: "notify::app-name", callback: any): number
    once(sigName: "notify::app-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::app-name", ...args: any[]): void
    connect(sigName: "notify::body", callback: any): number
    on(sigName: "notify::body", callback: any): number
    once(sigName: "notify::body", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::body", ...args: any[]): void
    connect(sigName: "notify::closed-reason", callback: any): number
    on(sigName: "notify::closed-reason", callback: any): number
    once(sigName: "notify::closed-reason", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::closed-reason", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Notification extends GObject.Object {

    // Own properties of Notify-0.7.Notify.Notification

    static name: string

    // Constructors of Notify-0.7.Notify.Notification

    constructor(config?: Notification.ConstructorProperties) 
    /**
     * Creates a new #NotifyNotification. The summary text is required, but
     * all other parameters are optional.
     * @constructor 
     * @param summary The required summary text.
     * @param body The optional body text.
     * @param icon The optional icon theme icon name or filename.
     */
    constructor(summary: string, body: string | null, icon: string | null) 
    /**
     * Creates a new #NotifyNotification. The summary text is required, but
     * all other parameters are optional.
     * @constructor 
     * @param summary The required summary text.
     * @param body The optional body text.
     * @param icon The optional icon theme icon name or filename.
     */
    static new(summary: string, body: string | null, icon: string | null): Notification
    _init(config?: Notification.ConstructorProperties): void
}

export interface NotificationClass {

    // Own fields of Notify-0.7.Notify.NotificationClass

    parentClass: GObject.ObjectClass
    closed: (notification: Notification) => void
}

export abstract class NotificationClass {

    // Own properties of Notify-0.7.Notify.NotificationClass

    static name: string
}

export interface NotificationPrivate {
}

export class NotificationPrivate {

    // Own properties of Notify-0.7.Notify.NotificationPrivate

    static name: string
}
