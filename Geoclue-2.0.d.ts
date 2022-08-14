
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Geoclue-2.0
 */

import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

export enum AccuracyLevel {
    NONE,
    COUNTRY,
    CITY,
    NEIGHBORHOOD,
    STREET,
    EXACT,
}
export enum ClientProxyCreateFlags {
    NONE,
    AUTO_DELETE,
}
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link> D-Bus interface.
 */
export function clientInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GClueClient interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
export function clientOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link> D-Bus interface.
 */
export function locationInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GClueLocation interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
export function locationOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link> D-Bus interface.
 */
export function managerInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GClueManager interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
export function managerOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export module Client {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-start`
     */
    export interface HandleStartSignalCallback {
        (invocation: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-stop`
     */
    export interface HandleStopSignalCallback {
        (invocation: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `location-updated`
     */
    export interface LocationUpdatedSignalCallback {
        (argOld: string, argNew: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Geoclue-2.0.Geoclue.Client

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.Active">"Active"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        active?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DesktopId">"DesktopId"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        desktopId?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DistanceThreshold">"DistanceThreshold"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        distanceThreshold?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.Location">"Location"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        location?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.RequestedAccuracyLevel">"RequestedAccuracyLevel"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        requestedAccuracyLevel?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.TimeThreshold">"TimeThreshold"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        timeThreshold?: number | null
    }

}

export interface Client {

    // Own properties of Geoclue-2.0.Geoclue.Client

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.Active">"Active"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    active: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DesktopId">"DesktopId"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    desktopId: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DistanceThreshold">"DistanceThreshold"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    distanceThreshold: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.Location">"Location"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    location: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.RequestedAccuracyLevel">"RequestedAccuracyLevel"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    requestedAccuracyLevel: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.TimeThreshold">"TimeThreshold"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    timeThreshold: number

    // Owm methods of Geoclue-2.0.Geoclue.Client

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call gclue_client_call_start_finish() to get the result of the operation.
     * 
     * See gclue_client_call_start_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callStart(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with gclue_client_call_start().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_client_call_start().
     */
    callStartFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See gclue_client_call_start() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     */
    callStartSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call gclue_client_call_stop_finish() to get the result of the operation.
     * 
     * See gclue_client_call_stop_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callStop(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with gclue_client_call_stop().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_client_call_stop().
     */
    callStopFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See gclue_client_call_stop() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     */
    callStopSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeStart(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeStop(invocation: Gio.DBusMethodInvocation): void
    /**
     * Emits the <link linkend="gdbus-signal-org-freedesktop-GeoClue2-Client.LocationUpdated">"LocationUpdated"</link> D-Bus signal.
     * @param argOld Argument to pass with the signal.
     * @param argNew Argument to pass with the signal.
     */
    emitLocationUpdated(argOld: string, argNew: string): void

    // Own virtual methods of Geoclue-2.0.Geoclue.Client

    handleStart(invocation: Gio.DBusMethodInvocation): boolean
    handleStop(invocation: Gio.DBusMethodInvocation): boolean
    locationUpdated(argOld: string, argNew: string): void

    // Own signals of Geoclue-2.0.Geoclue.Client

    connect(sigName: "handle-start", callback: Client.HandleStartSignalCallback): number
    on(sigName: "handle-start", callback: Client.HandleStartSignalCallback): number
    once(sigName: "handle-start", callback: Client.HandleStartSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "handle-start", ...args: any[]): void
    connect(sigName: "handle-stop", callback: Client.HandleStopSignalCallback): number
    on(sigName: "handle-stop", callback: Client.HandleStopSignalCallback): number
    once(sigName: "handle-stop", callback: Client.HandleStopSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "handle-stop", ...args: any[]): void
    connect(sigName: "location-updated", callback: Client.LocationUpdatedSignalCallback): number
    on(sigName: "location-updated", callback: Client.LocationUpdatedSignalCallback): number
    once(sigName: "location-updated", callback: Client.LocationUpdatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "location-updated", argNew: string, ...args: any[]): void

    // Class property signals of Geoclue-2.0.Geoclue.Client

    connect(sigName: "notify::active", callback: any): number
    on(sigName: "notify::active", callback: any): number
    once(sigName: "notify::active", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::desktop-id", callback: any): number
    on(sigName: "notify::desktop-id", callback: any): number
    once(sigName: "notify::desktop-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::desktop-id", ...args: any[]): void
    connect(sigName: "notify::distance-threshold", callback: any): number
    on(sigName: "notify::distance-threshold", callback: any): number
    once(sigName: "notify::distance-threshold", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::distance-threshold", ...args: any[]): void
    connect(sigName: "notify::location", callback: any): number
    on(sigName: "notify::location", callback: any): number
    once(sigName: "notify::location", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::requested-accuracy-level", callback: any): number
    on(sigName: "notify::requested-accuracy-level", callback: any): number
    once(sigName: "notify::requested-accuracy-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::requested-accuracy-level", ...args: any[]): void
    connect(sigName: "notify::time-threshold", callback: any): number
    on(sigName: "notify::time-threshold", callback: any): number
    once(sigName: "notify::time-threshold", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::time-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link>.
 * @interface 
 */
export class Client extends GObject.Object {

    // Own properties of Geoclue-2.0.Geoclue.Client

    static name: string

    // Constructors of Geoclue-2.0.Geoclue.Client

    constructor(config?: Client.ConstructorProperties) 
    _init(config?: Client.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link> D-Bus interface.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GClueClient interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module Location {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Geoclue-2.0.Geoclue.Location

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Accuracy">"Accuracy"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        accuracy?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Altitude">"Altitude"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        altitude?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Description">"Description"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        description?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Heading">"Heading"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        heading?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Latitude">"Latitude"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        latitude?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Longitude">"Longitude"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        longitude?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Speed">"Speed"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        speed?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Timestamp">"Timestamp"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        timestamp?: GLib.Variant | null
    }

}

export interface Location {

    // Own properties of Geoclue-2.0.Geoclue.Location

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Accuracy">"Accuracy"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    accuracy: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Altitude">"Altitude"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    altitude: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Description">"Description"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    description: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Heading">"Heading"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    heading: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Latitude">"Latitude"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    latitude: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Longitude">"Longitude"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    longitude: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Speed">"Speed"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    speed: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Timestamp">"Timestamp"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    timestamp: GLib.Variant

    // Class property signals of Geoclue-2.0.Geoclue.Location

    connect(sigName: "notify::accuracy", callback: any): number
    on(sigName: "notify::accuracy", callback: any): number
    once(sigName: "notify::accuracy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accuracy", ...args: any[]): void
    connect(sigName: "notify::altitude", callback: any): number
    on(sigName: "notify::altitude", callback: any): number
    once(sigName: "notify::altitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::altitude", ...args: any[]): void
    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::heading", callback: any): number
    on(sigName: "notify::heading", callback: any): number
    once(sigName: "notify::heading", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::heading", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: any): number
    on(sigName: "notify::latitude", callback: any): number
    once(sigName: "notify::latitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: any): number
    on(sigName: "notify::longitude", callback: any): number
    once(sigName: "notify::longitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: "notify::speed", callback: any): number
    on(sigName: "notify::speed", callback: any): number
    once(sigName: "notify::speed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::speed", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: any): number
    on(sigName: "notify::timestamp", callback: any): number
    once(sigName: "notify::timestamp", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link>.
 * @interface 
 */
export class Location extends GObject.Object {

    // Own properties of Geoclue-2.0.Geoclue.Location

    static name: string

    // Constructors of Geoclue-2.0.Geoclue.Location

    constructor(config?: Location.ConstructorProperties) 
    _init(config?: Location.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link> D-Bus interface.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GClueLocation interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module Manager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-add-agent`
     */
    export interface HandleAddAgentSignalCallback {
        (invocation: Gio.DBusMethodInvocation, argId: string): boolean
    }

    /**
     * Signal callback interface for `handle-create-client`
     */
    export interface HandleCreateClientSignalCallback {
        (invocation: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-delete-client`
     */
    export interface HandleDeleteClientSignalCallback {
        (invocation: Gio.DBusMethodInvocation, argClient: string): boolean
    }

    /**
     * Signal callback interface for `handle-get-client`
     */
    export interface HandleGetClientSignalCallback {
        (invocation: Gio.DBusMethodInvocation): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Geoclue-2.0.Geoclue.Manager

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.AvailableAccuracyLevel">"AvailableAccuracyLevel"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        availableAccuracyLevel?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.InUse">"InUse"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        inUse?: boolean | null
    }

}

export interface Manager {

    // Own properties of Geoclue-2.0.Geoclue.Manager

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.AvailableAccuracyLevel">"AvailableAccuracyLevel"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    availableAccuracyLevel: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.InUse">"InUse"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    inUse: boolean

    // Owm methods of Geoclue-2.0.Geoclue.Manager

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call gclue_manager_call_add_agent_finish() to get the result of the operation.
     * 
     * See gclue_manager_call_add_agent_sync() for the synchronous, blocking version of this method.
     * @param argId Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callAddAgent(argId: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with gclue_manager_call_add_agent().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_call_add_agent().
     */
    callAddAgentFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See gclue_manager_call_add_agent() for the asynchronous version of this method.
     * @param argId Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callAddAgentSync(argId: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call gclue_manager_call_create_client_finish() to get the result of the operation.
     * 
     * See gclue_manager_call_create_client_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callCreateClient(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with gclue_manager_call_create_client().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_call_create_client().
     */
    callCreateClientFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outClient */ string ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See gclue_manager_call_create_client() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     */
    callCreateClientSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outClient */ string ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call gclue_manager_call_delete_client_finish() to get the result of the operation.
     * 
     * See gclue_manager_call_delete_client_sync() for the synchronous, blocking version of this method.
     * @param argClient Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callDeleteClient(argClient: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with gclue_manager_call_delete_client().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_call_delete_client().
     */
    callDeleteClientFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See gclue_manager_call_delete_client() for the asynchronous version of this method.
     * @param argClient Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callDeleteClientSync(argClient: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call gclue_manager_call_get_client_finish() to get the result of the operation.
     * 
     * See gclue_manager_call_get_client_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callGetClient(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with gclue_manager_call_get_client().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_call_get_client().
     */
    callGetClientFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outClient */ string ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See gclue_manager_call_get_client() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     */
    callGetClientSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outClient */ string ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeAddAgent(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param client Parameter to return.
     */
    completeCreateClient(invocation: Gio.DBusMethodInvocation, client: string): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeDeleteClient(invocation: Gio.DBusMethodInvocation): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param client Parameter to return.
     */
    completeGetClient(invocation: Gio.DBusMethodInvocation, client: string): void

    // Own virtual methods of Geoclue-2.0.Geoclue.Manager

    handleAddAgent(invocation: Gio.DBusMethodInvocation, argId: string): boolean
    handleCreateClient(invocation: Gio.DBusMethodInvocation): boolean
    handleDeleteClient(invocation: Gio.DBusMethodInvocation, argClient: string): boolean
    handleGetClient(invocation: Gio.DBusMethodInvocation): boolean

    // Own signals of Geoclue-2.0.Geoclue.Manager

    connect(sigName: "handle-add-agent", callback: Manager.HandleAddAgentSignalCallback): number
    on(sigName: "handle-add-agent", callback: Manager.HandleAddAgentSignalCallback): number
    once(sigName: "handle-add-agent", callback: Manager.HandleAddAgentSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "handle-add-agent", argId: string, ...args: any[]): void
    connect(sigName: "handle-create-client", callback: Manager.HandleCreateClientSignalCallback): number
    on(sigName: "handle-create-client", callback: Manager.HandleCreateClientSignalCallback): number
    once(sigName: "handle-create-client", callback: Manager.HandleCreateClientSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "handle-create-client", ...args: any[]): void
    connect(sigName: "handle-delete-client", callback: Manager.HandleDeleteClientSignalCallback): number
    on(sigName: "handle-delete-client", callback: Manager.HandleDeleteClientSignalCallback): number
    once(sigName: "handle-delete-client", callback: Manager.HandleDeleteClientSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "handle-delete-client", argClient: string, ...args: any[]): void
    connect(sigName: "handle-get-client", callback: Manager.HandleGetClientSignalCallback): number
    on(sigName: "handle-get-client", callback: Manager.HandleGetClientSignalCallback): number
    once(sigName: "handle-get-client", callback: Manager.HandleGetClientSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "handle-get-client", ...args: any[]): void

    // Class property signals of Geoclue-2.0.Geoclue.Manager

    connect(sigName: "notify::available-accuracy-level", callback: any): number
    on(sigName: "notify::available-accuracy-level", callback: any): number
    once(sigName: "notify::available-accuracy-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::available-accuracy-level", ...args: any[]): void
    connect(sigName: "notify::in-use", callback: any): number
    on(sigName: "notify::in-use", callback: any): number
    once(sigName: "notify::in-use", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::in-use", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link>.
 * @interface 
 */
export class Manager extends GObject.Object {

    // Own properties of Geoclue-2.0.Geoclue.Manager

    static name: string

    // Constructors of Geoclue-2.0.Geoclue.Manager

    constructor(config?: Manager.ConstructorProperties) 
    _init(config?: Manager.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link> D-Bus interface.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GClueManager interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module ClientProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Client.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface ClientProxy extends Client, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of Geoclue-2.0.Geoclue.ClientProxy

    connect(sigName: "notify::g-bus-type", callback: any): number
    on(sigName: "notify::g-bus-type", callback: any): number
    once(sigName: "notify::g-bus-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: any): number
    on(sigName: "notify::g-connection", callback: any): number
    once(sigName: "notify::g-connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: any): number
    on(sigName: "notify::g-default-timeout", callback: any): number
    once(sigName: "notify::g-default-timeout", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: any): number
    on(sigName: "notify::g-interface-info", callback: any): number
    once(sigName: "notify::g-interface-info", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: any): number
    on(sigName: "notify::g-interface-name", callback: any): number
    once(sigName: "notify::g-interface-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: any): number
    on(sigName: "notify::g-name", callback: any): number
    once(sigName: "notify::g-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: any): number
    on(sigName: "notify::g-name-owner", callback: any): number
    once(sigName: "notify::g-name-owner", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: any): number
    on(sigName: "notify::g-object-path", callback: any): number
    once(sigName: "notify::g-object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::active", callback: any): number
    on(sigName: "notify::active", callback: any): number
    once(sigName: "notify::active", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::desktop-id", callback: any): number
    on(sigName: "notify::desktop-id", callback: any): number
    once(sigName: "notify::desktop-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::desktop-id", ...args: any[]): void
    connect(sigName: "notify::distance-threshold", callback: any): number
    on(sigName: "notify::distance-threshold", callback: any): number
    once(sigName: "notify::distance-threshold", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::distance-threshold", ...args: any[]): void
    connect(sigName: "notify::location", callback: any): number
    on(sigName: "notify::location", callback: any): number
    once(sigName: "notify::location", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::requested-accuracy-level", callback: any): number
    on(sigName: "notify::requested-accuracy-level", callback: any): number
    once(sigName: "notify::requested-accuracy-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::requested-accuracy-level", ...args: any[]): void
    connect(sigName: "notify::time-threshold", callback: any): number
    on(sigName: "notify::time-threshold", callback: any): number
    once(sigName: "notify::time-threshold", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::time-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GClueClientProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class ClientProxy extends Gio.DBusProxy {

    // Own properties of Geoclue-2.0.Geoclue.ClientProxy

    static name: string

    // Constructors of Geoclue-2.0.Geoclue.ClientProxy

    constructor(config?: ClientProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with gclue_client_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_client_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): ClientProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with gclue_client_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_client_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): ClientProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like gclue_client_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See gclue_client_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): ClientProxy

    // Overloads of newForBusSync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See gclue_client_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): ClientProxy

    // Overloads of newSync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: ClientProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call gclue_client_proxy_new_finish() to get the result of the operation.
     * 
     * See gclue_client_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Like gclue_client_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call gclue_client_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See gclue_client_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * A utility function to create a #GClueClientProxy without having to deal with
     * a #GClueManager. See also gclue_client_proxy_create_full() which improves
     * resource management.
     * 
     * This is identitcal to calling gclue_client_proxy_create_full() without any
     * flags set.
     * 
     * See #gclue_client_proxy_create_sync() for the synchronous, blocking version
     * of this function.
     * @param desktopId The desktop file id (the basename of the desktop file).
     * @param accuracyLevel The requested accuracy level as #GClueAccuracyLevel.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the results are ready.
     */
    static create(desktopId: string, accuracyLevel: AccuracyLevel, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with gclue_client_proxy_create().
     * @param result The #GAsyncResult obtained from the #GAsyncReadyCallback passed to          gclue_client_proxy_create().
     */
    static createFinish(result: Gio.AsyncResult): ClientProxy
    /**
     * A utility function to create a #GClueClientProxy without having to deal with
     * a #GClueManager.
     * 
     * By setting the #GCLUE_CLIENT_PROXY_CREATE_AUTO_DELETE flag you can ensure
     * that the client will be deleted again from the geoclue service when
     * it is destroyed. This flag should be used unless you are doing explicit
     * resource management.
     * 
     * See #gclue_client_proxy_create_full_sync() for the synchronous, blocking
     * version of this function.
     * @param desktopId The desktop file id (the basename of the desktop file).
     * @param accuracyLevel The requested accuracy level as #GClueAccuracyLevel.
     * @param flags #GClueClientProxyCreateFlags to modify the creation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the results are ready.
     */
    static createFull(desktopId: string, accuracyLevel: AccuracyLevel, flags: ClientProxyCreateFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with gclue_client_proxy_create_full().
     * @param result The #GAsyncResult obtained from the #GAsyncReadyCallback passed to          gclue_client_proxy_create().
     */
    static createFullFinish(result: Gio.AsyncResult): ClientProxy
    /**
     * The synchronous and blocking version of #gclue_client_proxy_create_full().
     * 
     * By setting the #GCLUE_CLIENT_PROXY_CREATE_AUTO_DELETE flag you can ensure
     * that the client will be deleted again from the geoclue service when
     * it is destroyed. This flag should be used unless you are doing explicit
     * resource management.
     * @param desktopId The desktop file id (the basename of the desktop file).
     * @param accuracyLevel The requested accuracy level as #GClueAccuracyLevel.
     * @param flags #GClueClientProxyCreateFlags to modify the creation.
     * @param cancellable A #GCancellable or %NULL.
     */
    static createFullSync(desktopId: string, accuracyLevel: AccuracyLevel, flags: ClientProxyCreateFlags, cancellable: Gio.Cancellable | null): ClientProxy
    /**
     * The synchronous and blocking version of #gclue_client_proxy_create().
     * See also gclue_client_proxy_create_full_sync() which improves resource
     * management.
     * 
     * This function is identical to calling gclue_client_proxy_create_full_sync()
     * without any flags set.
     * @param desktopId The desktop file id (the basename of the desktop file).
     * @param accuracyLevel The requested accuracy level as #GClueAccuracyLevel.
     * @param cancellable A #GCancellable or %NULL.
     */
    static createSync(desktopId: string, accuracyLevel: AccuracyLevel, cancellable: Gio.Cancellable | null): ClientProxy
}

export module ClientSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Client.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface ClientSkeleton extends Client, Gio.DBusInterface {

    // Conflicting methods

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     */
    getInfo(): Gio.DBusInterfaceInfo
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Overloads of getInfo

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Class property signals of Geoclue-2.0.Geoclue.ClientSkeleton

    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::active", callback: any): number
    on(sigName: "notify::active", callback: any): number
    once(sigName: "notify::active", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::desktop-id", callback: any): number
    on(sigName: "notify::desktop-id", callback: any): number
    once(sigName: "notify::desktop-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::desktop-id", ...args: any[]): void
    connect(sigName: "notify::distance-threshold", callback: any): number
    on(sigName: "notify::distance-threshold", callback: any): number
    once(sigName: "notify::distance-threshold", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::distance-threshold", ...args: any[]): void
    connect(sigName: "notify::location", callback: any): number
    on(sigName: "notify::location", callback: any): number
    once(sigName: "notify::location", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::requested-accuracy-level", callback: any): number
    on(sigName: "notify::requested-accuracy-level", callback: any): number
    once(sigName: "notify::requested-accuracy-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::requested-accuracy-level", ...args: any[]): void
    connect(sigName: "notify::time-threshold", callback: any): number
    on(sigName: "notify::time-threshold", callback: any): number
    once(sigName: "notify::time-threshold", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::time-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GClueClientSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class ClientSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Geoclue-2.0.Geoclue.ClientSkeleton

    static name: string

    // Constructors of Geoclue-2.0.Geoclue.ClientSkeleton

    constructor(config?: ClientSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link>.
     * @constructor 
     */
    static new(): ClientSkeleton
    _init(config?: ClientSkeleton.ConstructorProperties): void
}

export module LocationProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Location.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface LocationProxy extends Location, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of Geoclue-2.0.Geoclue.LocationProxy

    connect(sigName: "notify::g-bus-type", callback: any): number
    on(sigName: "notify::g-bus-type", callback: any): number
    once(sigName: "notify::g-bus-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: any): number
    on(sigName: "notify::g-connection", callback: any): number
    once(sigName: "notify::g-connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: any): number
    on(sigName: "notify::g-default-timeout", callback: any): number
    once(sigName: "notify::g-default-timeout", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: any): number
    on(sigName: "notify::g-interface-info", callback: any): number
    once(sigName: "notify::g-interface-info", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: any): number
    on(sigName: "notify::g-interface-name", callback: any): number
    once(sigName: "notify::g-interface-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: any): number
    on(sigName: "notify::g-name", callback: any): number
    once(sigName: "notify::g-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: any): number
    on(sigName: "notify::g-name-owner", callback: any): number
    once(sigName: "notify::g-name-owner", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: any): number
    on(sigName: "notify::g-object-path", callback: any): number
    once(sigName: "notify::g-object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::accuracy", callback: any): number
    on(sigName: "notify::accuracy", callback: any): number
    once(sigName: "notify::accuracy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accuracy", ...args: any[]): void
    connect(sigName: "notify::altitude", callback: any): number
    on(sigName: "notify::altitude", callback: any): number
    once(sigName: "notify::altitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::altitude", ...args: any[]): void
    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::heading", callback: any): number
    on(sigName: "notify::heading", callback: any): number
    once(sigName: "notify::heading", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::heading", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: any): number
    on(sigName: "notify::latitude", callback: any): number
    once(sigName: "notify::latitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: any): number
    on(sigName: "notify::longitude", callback: any): number
    once(sigName: "notify::longitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: "notify::speed", callback: any): number
    on(sigName: "notify::speed", callback: any): number
    once(sigName: "notify::speed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::speed", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: any): number
    on(sigName: "notify::timestamp", callback: any): number
    once(sigName: "notify::timestamp", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GClueLocationProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class LocationProxy extends Gio.DBusProxy {

    // Own properties of Geoclue-2.0.Geoclue.LocationProxy

    static name: string

    // Constructors of Geoclue-2.0.Geoclue.LocationProxy

    constructor(config?: LocationProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with gclue_location_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_location_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): LocationProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with gclue_location_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_location_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): LocationProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like gclue_location_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See gclue_location_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): LocationProxy

    // Overloads of newForBusSync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See gclue_location_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): LocationProxy

    // Overloads of newSync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: LocationProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call gclue_location_proxy_new_finish() to get the result of the operation.
     * 
     * See gclue_location_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Like gclue_location_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call gclue_location_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See gclue_location_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

export module LocationSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Location.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface LocationSkeleton extends Location, Gio.DBusInterface {

    // Conflicting methods

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     */
    getInfo(): Gio.DBusInterfaceInfo
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Overloads of getInfo

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Class property signals of Geoclue-2.0.Geoclue.LocationSkeleton

    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::accuracy", callback: any): number
    on(sigName: "notify::accuracy", callback: any): number
    once(sigName: "notify::accuracy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accuracy", ...args: any[]): void
    connect(sigName: "notify::altitude", callback: any): number
    on(sigName: "notify::altitude", callback: any): number
    once(sigName: "notify::altitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::altitude", ...args: any[]): void
    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::heading", callback: any): number
    on(sigName: "notify::heading", callback: any): number
    once(sigName: "notify::heading", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::heading", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: any): number
    on(sigName: "notify::latitude", callback: any): number
    once(sigName: "notify::latitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: any): number
    on(sigName: "notify::longitude", callback: any): number
    once(sigName: "notify::longitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: "notify::speed", callback: any): number
    on(sigName: "notify::speed", callback: any): number
    once(sigName: "notify::speed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::speed", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: any): number
    on(sigName: "notify::timestamp", callback: any): number
    once(sigName: "notify::timestamp", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GClueLocationSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class LocationSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Geoclue-2.0.Geoclue.LocationSkeleton

    static name: string

    // Constructors of Geoclue-2.0.Geoclue.LocationSkeleton

    constructor(config?: LocationSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link>.
     * @constructor 
     */
    static new(): LocationSkeleton
    _init(config?: LocationSkeleton.ConstructorProperties): void
}

export module ManagerProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Manager.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface ManagerProxy extends Manager, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of Geoclue-2.0.Geoclue.ManagerProxy

    connect(sigName: "notify::g-bus-type", callback: any): number
    on(sigName: "notify::g-bus-type", callback: any): number
    once(sigName: "notify::g-bus-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: any): number
    on(sigName: "notify::g-connection", callback: any): number
    once(sigName: "notify::g-connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: any): number
    on(sigName: "notify::g-default-timeout", callback: any): number
    once(sigName: "notify::g-default-timeout", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: any): number
    on(sigName: "notify::g-interface-info", callback: any): number
    once(sigName: "notify::g-interface-info", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: any): number
    on(sigName: "notify::g-interface-name", callback: any): number
    once(sigName: "notify::g-interface-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: any): number
    on(sigName: "notify::g-name", callback: any): number
    once(sigName: "notify::g-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: any): number
    on(sigName: "notify::g-name-owner", callback: any): number
    once(sigName: "notify::g-name-owner", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: any): number
    on(sigName: "notify::g-object-path", callback: any): number
    once(sigName: "notify::g-object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::available-accuracy-level", callback: any): number
    on(sigName: "notify::available-accuracy-level", callback: any): number
    once(sigName: "notify::available-accuracy-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::available-accuracy-level", ...args: any[]): void
    connect(sigName: "notify::in-use", callback: any): number
    on(sigName: "notify::in-use", callback: any): number
    once(sigName: "notify::in-use", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::in-use", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GClueManagerProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class ManagerProxy extends Gio.DBusProxy {

    // Own properties of Geoclue-2.0.Geoclue.ManagerProxy

    static name: string

    // Constructors of Geoclue-2.0.Geoclue.ManagerProxy

    constructor(config?: ManagerProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with gclue_manager_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): ManagerProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with gclue_manager_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to gclue_manager_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): ManagerProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like gclue_manager_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See gclue_manager_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): ManagerProxy

    // Overloads of newForBusSync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See gclue_manager_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): ManagerProxy

    // Overloads of newSync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: ManagerProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call gclue_manager_proxy_new_finish() to get the result of the operation.
     * 
     * See gclue_manager_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Like gclue_manager_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call gclue_manager_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See gclue_manager_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

export module ManagerSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Manager.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface ManagerSkeleton extends Manager, Gio.DBusInterface {

    // Conflicting methods

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     */
    getInfo(): Gio.DBusInterfaceInfo
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Overloads of getInfo

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Class property signals of Geoclue-2.0.Geoclue.ManagerSkeleton

    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::available-accuracy-level", callback: any): number
    on(sigName: "notify::available-accuracy-level", callback: any): number
    once(sigName: "notify::available-accuracy-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::available-accuracy-level", ...args: any[]): void
    connect(sigName: "notify::in-use", callback: any): number
    on(sigName: "notify::in-use", callback: any): number
    once(sigName: "notify::in-use", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::in-use", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GClueManagerSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class ManagerSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Geoclue-2.0.Geoclue.ManagerSkeleton

    static name: string

    // Constructors of Geoclue-2.0.Geoclue.ManagerSkeleton

    constructor(config?: ManagerSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link>.
     * @constructor 
     */
    static new(): ManagerSkeleton
    _init(config?: ManagerSkeleton.ConstructorProperties): void
}

export module Simple {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Geoclue-2.0.Geoclue.Simple

        /**
         * The requested maximum accuracy level.
         */
        accuracyLevel?: AccuracyLevel | null
        /**
         * The Desktop ID of the application.
         */
        desktopId?: string | null
        /**
         * The current distance threshold in meters. This value is used by the
         * service when it gets new location info. If the distance moved is
         * below the threshold, it won't emit the LocationUpdated signal.
         * 
         * When set to 0 (default), it always emits the signal.
         */
        distanceThreshold?: number | null
        /**
         * The current time threshold in seconds. This value is used by the
         * service when it gets new location info. If the time passed is
         * below the threshold, it won't emit the LocationUpdated signal.
         * 
         * When set to 0 (default), it always emits the signal.
         */
        timeThreshold?: number | null
    }

}

export interface Simple extends Gio.AsyncInitable {

    // Own properties of Geoclue-2.0.Geoclue.Simple

    /**
     * The requested maximum accuracy level.
     */
    readonly accuracyLevel: AccuracyLevel
    /**
     * The client proxy. This is %NULL if `simple` is not using a client proxy
     * (i-e when inside the Flatpak sandbox).
     */
    readonly client: ClientProxy
    /**
     * The Desktop ID of the application.
     */
    readonly desktopId: string
    /**
     * The current distance threshold in meters. This value is used by the
     * service when it gets new location info. If the distance moved is
     * below the threshold, it won't emit the LocationUpdated signal.
     * 
     * When set to 0 (default), it always emits the signal.
     */
    readonly distanceThreshold: number
    /**
     * The current location.
     */
    readonly location: LocationProxy
    /**
     * The current time threshold in seconds. This value is used by the
     * service when it gets new location info. If the time passed is
     * below the threshold, it won't emit the LocationUpdated signal.
     * 
     * When set to 0 (default), it always emits the signal.
     */
    readonly timeThreshold: number

    // Own fields of Geoclue-2.0.Geoclue.Simple

    parent: GObject.Object

    // Owm methods of Geoclue-2.0.Geoclue.Simple

    /**
     * Gets the client proxy, or %NULL if `simple` is not using a client proxy (i-e
     * when inside the Flatpak sandbox).
     */
    getClient(): ClientProxy
    /**
     * Gets the current location.
     */
    getLocation(): Location

    // Class property signals of Geoclue-2.0.Geoclue.Simple

    connect(sigName: "notify::accuracy-level", callback: any): number
    on(sigName: "notify::accuracy-level", callback: any): number
    once(sigName: "notify::accuracy-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accuracy-level", ...args: any[]): void
    connect(sigName: "notify::client", callback: any): number
    on(sigName: "notify::client", callback: any): number
    once(sigName: "notify::client", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::desktop-id", callback: any): number
    on(sigName: "notify::desktop-id", callback: any): number
    once(sigName: "notify::desktop-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::desktop-id", ...args: any[]): void
    connect(sigName: "notify::distance-threshold", callback: any): number
    on(sigName: "notify::distance-threshold", callback: any): number
    once(sigName: "notify::distance-threshold", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::distance-threshold", ...args: any[]): void
    connect(sigName: "notify::location", callback: any): number
    on(sigName: "notify::location", callback: any): number
    once(sigName: "notify::location", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::time-threshold", callback: any): number
    on(sigName: "notify::time-threshold", callback: any): number
    once(sigName: "notify::time-threshold", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::time-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Simple extends GObject.Object {

    // Own properties of Geoclue-2.0.Geoclue.Simple

    static name: string

    // Constructors of Geoclue-2.0.Geoclue.Simple

    constructor(config?: Simple.ConstructorProperties) 
    /**
     * Finishes an operation started with #gclue_simple_new().
     * @constructor 
     * @param result The #GAsyncResult obtained from the #GAsyncReadyCallback passed to          #gclue_simple_new().
     */
    static newFinish(result: Gio.AsyncResult): Simple
    /**
     * The synchronous and blocking version of #gclue_simple_new().
     * @constructor 
     * @param desktopId The desktop file id (the basename of the desktop file).
     * @param accuracyLevel The requested accuracy level as #GClueAccuracyLevel.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(desktopId: string, accuracyLevel: AccuracyLevel, cancellable: Gio.Cancellable | null): Simple
    /**
     * Finishes an operation started with #gclue_simple_new_with_thresholds().
     * @constructor 
     * @param result The #GAsyncResult obtained from the #GAsyncReadyCallback passed to          #gclue_simple_new_with_thresholds().
     */
    static newWithThresholdsFinish(result: Gio.AsyncResult): Simple
    /**
     * The synchronous and blocking version of #gclue_simple_new_with_thresholds().
     * @constructor 
     * @param desktopId The desktop file id (the basename of the desktop file).
     * @param accuracyLevel The requested accuracy level as #GClueAccuracyLevel.
     * @param timeThreshold Time threshold in seconds, 0 for no limit.
     * @param distanceThreshold Distance threshold in meters, 0 for no limit.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newWithThresholdsSync(desktopId: string, accuracyLevel: AccuracyLevel, timeThreshold: number, distanceThreshold: number, cancellable: Gio.Cancellable | null): Simple
    _init(config?: Simple.ConstructorProperties): void
    /**
     * Asynchronously creates a #GClueSimple instance. Use
     * #gclue_simple_new_finish() to get the created #GClueSimple instance.
     * 
     * See #gclue_simple_new_sync() for the synchronous, blocking version
     * of this function.
     * @param desktopId The desktop file id (the basename of the desktop file).
     * @param accuracyLevel The requested accuracy level as #GClueAccuracyLevel.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the results are ready.
     */
    static new(desktopId: string, accuracyLevel: AccuracyLevel, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Asynchronously creates a #GClueSimple instance. Use
     * #gclue_simple_new_with_thresholds_finish() to get the created #GClueSimple instance.
     * 
     * See #gclue_simple_new_with_thresholds_sync() for the synchronous,
     * blocking version of this function.
     * @param desktopId The desktop file id (the basename of the desktop file).
     * @param accuracyLevel The requested accuracy level as #GClueAccuracyLevel.
     * @param timeThreshold Time threshold in seconds, 0 for no limit.
     * @param distanceThreshold Distance threshold in meters, 0 for no limit.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the results are ready.
     */
    static newWithThresholds(desktopId: string, accuracyLevel: AccuracyLevel, timeThreshold: number, distanceThreshold: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

export interface ClientIface {

    // Own fields of Geoclue-2.0.Geoclue.ClientIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
    handleStart: (object: Client, invocation: Gio.DBusMethodInvocation) => boolean
    handleStop: (object: Client, invocation: Gio.DBusMethodInvocation) => boolean
    getActive: (object: Client) => boolean
    getDesktopId: (object: Client) => string | null
    getDistanceThreshold: (object: Client) => number
    getLocation: (object: Client) => string | null
    getRequestedAccuracyLevel: (object: Client) => number
    getTimeThreshold: (object: Client) => number
    locationUpdated: (object: Client, argOld: string, argNew: string) => void
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link>.
 * @record 
 */
export abstract class ClientIface {

    // Own properties of Geoclue-2.0.Geoclue.ClientIface

    static name: string
}

export interface ClientProxyClass {

    // Own fields of Geoclue-2.0.Geoclue.ClientProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #GClueClientProxy.
 * @record 
 */
export abstract class ClientProxyClass {

    // Own properties of Geoclue-2.0.Geoclue.ClientProxyClass

    static name: string
}

export interface ClientProxyPrivate {
}

export class ClientProxyPrivate {

    // Own properties of Geoclue-2.0.Geoclue.ClientProxyPrivate

    static name: string
}

export interface ClientSkeletonClass {

    // Own fields of Geoclue-2.0.Geoclue.ClientSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GClueClientSkeleton.
 * @record 
 */
export abstract class ClientSkeletonClass {

    // Own properties of Geoclue-2.0.Geoclue.ClientSkeletonClass

    static name: string
}

export interface ClientSkeletonPrivate {
}

export class ClientSkeletonPrivate {

    // Own properties of Geoclue-2.0.Geoclue.ClientSkeletonPrivate

    static name: string
}

export interface LocationIface {

    // Own fields of Geoclue-2.0.Geoclue.LocationIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
    getAccuracy: (object: Location) => number
    getAltitude: (object: Location) => number
    getDescription: (object: Location) => string | null
    getHeading: (object: Location) => number
    getLatitude: (object: Location) => number
    getLongitude: (object: Location) => number
    getSpeed: (object: Location) => number
    getTimestamp: (object: Location) => GLib.Variant | null
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link>.
 * @record 
 */
export abstract class LocationIface {

    // Own properties of Geoclue-2.0.Geoclue.LocationIface

    static name: string
}

export interface LocationProxyClass {

    // Own fields of Geoclue-2.0.Geoclue.LocationProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #GClueLocationProxy.
 * @record 
 */
export abstract class LocationProxyClass {

    // Own properties of Geoclue-2.0.Geoclue.LocationProxyClass

    static name: string
}

export interface LocationProxyPrivate {
}

export class LocationProxyPrivate {

    // Own properties of Geoclue-2.0.Geoclue.LocationProxyPrivate

    static name: string
}

export interface LocationSkeletonClass {

    // Own fields of Geoclue-2.0.Geoclue.LocationSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GClueLocationSkeleton.
 * @record 
 */
export abstract class LocationSkeletonClass {

    // Own properties of Geoclue-2.0.Geoclue.LocationSkeletonClass

    static name: string
}

export interface LocationSkeletonPrivate {
}

export class LocationSkeletonPrivate {

    // Own properties of Geoclue-2.0.Geoclue.LocationSkeletonPrivate

    static name: string
}

export interface ManagerIface {

    // Own fields of Geoclue-2.0.Geoclue.ManagerIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
    handleAddAgent: (object: Manager, invocation: Gio.DBusMethodInvocation, argId: string) => boolean
    handleCreateClient: (object: Manager, invocation: Gio.DBusMethodInvocation) => boolean
    handleDeleteClient: (object: Manager, invocation: Gio.DBusMethodInvocation, argClient: string) => boolean
    handleGetClient: (object: Manager, invocation: Gio.DBusMethodInvocation) => boolean
    getAvailableAccuracyLevel: (object: Manager) => number
    getInUse: (object: Manager) => boolean
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link>.
 * @record 
 */
export abstract class ManagerIface {

    // Own properties of Geoclue-2.0.Geoclue.ManagerIface

    static name: string
}

export interface ManagerProxyClass {

    // Own fields of Geoclue-2.0.Geoclue.ManagerProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #GClueManagerProxy.
 * @record 
 */
export abstract class ManagerProxyClass {

    // Own properties of Geoclue-2.0.Geoclue.ManagerProxyClass

    static name: string
}

export interface ManagerProxyPrivate {
}

export class ManagerProxyPrivate {

    // Own properties of Geoclue-2.0.Geoclue.ManagerProxyPrivate

    static name: string
}

export interface ManagerSkeletonClass {

    // Own fields of Geoclue-2.0.Geoclue.ManagerSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GClueManagerSkeleton.
 * @record 
 */
export abstract class ManagerSkeletonClass {

    // Own properties of Geoclue-2.0.Geoclue.ManagerSkeletonClass

    static name: string
}

export interface ManagerSkeletonPrivate {
}

export class ManagerSkeletonPrivate {

    // Own properties of Geoclue-2.0.Geoclue.ManagerSkeletonPrivate

    static name: string
}

export interface SimpleClass {

    // Own fields of Geoclue-2.0.Geoclue.SimpleClass

    parentClass: GObject.ObjectClass
}

export abstract class SimpleClass {

    // Own properties of Geoclue-2.0.Geoclue.SimpleClass

    static name: string
}

export interface SimplePrivate {
}

export class SimplePrivate {

    // Own properties of Geoclue-2.0.Geoclue.SimplePrivate

    static name: string
}
