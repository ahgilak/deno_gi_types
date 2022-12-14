
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GSSDP-1.0
 */

import type * as Soup from './Soup-2.4.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

export enum Error {
    /**
     * GSSDP could not find a valid IP address of a
     * #GSSDPClient.
     */
    NO_IP_ADDRESS,
    /**
     * Unknown error.
     */
    FAILED,
}
/**
 * SSDP search target for finding all possible resources.
 */
export const ALL_RESOURCES: string
export function errorQuark(): GLib.Quark
export module Client {

    // Signal callback interfaces



    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GSSDP-1.0.GSSDP.Client

        /**
         * Whether this client is active or not (passive). When active
         * (default), the client sends messages on the network, otherwise
         * not. In most cases, you don't want to touch this property.
         */
        active?: boolean | null
        /**
         * The IP address of the assoicated network interface.
         */
        hostIp?: string | null
        /**
         * The name of the network interface this client is associated with.
         * Set to NULL to autodetect.
         */
        interface?: string | null
        /**
         * UDP port to use for sending multicast M-SEARCH requests on the
         * network. If not set (or set to 0) a random port will be used.
         * This property can be only set during object construction.
         */
        msearchPort?: number | null
        /**
         * The network this client is currently connected to. You could set this
         * to anything you want to identify the network this client is
         * associated with. If you are using #GUPnPContextManager and associated
         * interface is a WiFi interface, this property is set to the ESSID of
         * the network. Otherwise, expect this to be the network IP address by
         * default.
         */
        network?: string | null
        /**
         * The SSDP server's identifier.
         */
        serverId?: string | null
        /**
         * Time-to-live value to use for all sockets created by this client.
         * If not set (or set to 0) the value recommended by UPnP will be used.
         * This property can only be set during object construction.
         */
        socketTtl?: number | null
    }

}

export interface Client extends Gio.Initable {

    // Own properties of GSSDP-1.0.GSSDP.Client

    /**
     * Whether this client is active or not (passive). When active
     * (default), the client sends messages on the network, otherwise
     * not. In most cases, you don't want to touch this property.
     */
    active: boolean
    /**
     * The IP address of the assoicated network interface.
     */
    hostIp: string
    /**
     * The name of the network interface this client is associated with.
     * Set to NULL to autodetect.
     */
    readonly interface: string
    /**
     * UDP port to use for sending multicast M-SEARCH requests on the
     * network. If not set (or set to 0) a random port will be used.
     * This property can be only set during object construction.
     */
    readonly msearchPort: number
    /**
     * The network this client is currently connected to. You could set this
     * to anything you want to identify the network this client is
     * associated with. If you are using #GUPnPContextManager and associated
     * interface is a WiFi interface, this property is set to the ESSID of
     * the network. Otherwise, expect this to be the network IP address by
     * default.
     */
    network: string
    /**
     * The SSDP server's identifier.
     */
    serverId: string
    /**
     * Time-to-live value to use for all sockets created by this client.
     * If not set (or set to 0) the value recommended by UPnP will be used.
     * This property can only be set during object construction.
     */
    readonly socketTtl: number

    // Own fields of GSSDP-1.0.GSSDP.Client

    parent: GObject.Object
    priv: ClientPrivate

    // Owm methods of GSSDP-1.0.GSSDP.Client

    addCacheEntry(ipAddress: string, userAgent: string): void
    /**
     * Adds a header field to the message sent by this `client`. It is intended to
     * be used by clients requiring vendor specific header fields. (If there is an
     * existing header with name name , then this creates a second one).
     * @param name Header name
     * @param value Header value
     */
    appendHeader(name: string, value: string): void
    /**
     * Removes all the headers for this `client`.
     */
    clearHeaders(): void
    getActive(): boolean
    /**
     * Get the IP address we advertise ourselves as using.
     */
    getHostIp(): string
    /**
     * Get the name of the network interface associated to `client`.
     */
    getInterface(): string
    getMainContext(): GLib.MainContext
    /**
     * Get the network this client is associated with.
     */
    getNetwork(): string
    getServerId(): string
    guessUserAgent(ipAddress: string): string
    /**
     * Removes `name` from the list of headers . If there are multiple values for
     * `name,` they are all removed.
     * @param name Header name
     */
    removeHeader(name: string): void
    /**
     * Sets the network identification of `client` to `network`.
     * @param network The string identifying the network
     */
    setNetwork(network: string): void
    /**
     * Sets the server ID of `client` to `server_id`.
     * @param serverId The server ID
     */
    setServerId(serverId: string): void

    // Own signals of GSSDP-1.0.GSSDP.Client

    connect(sigName: "message-received", callback: (...args: any[]) => void): number
    on(sigName: "message-received", callback: (...args: any[]) => void): number
    once(sigName: "message-received", callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: "message-received", fromPort: number, type: number, headers: Soup.MessageHeaders, ...args: any[]): void

    // Class property signals of GSSDP-1.0.GSSDP.Client

    connect(sigName: "notify::active", callback: any): number
    on(sigName: "notify::active", callback: any): number
    once(sigName: "notify::active", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::host-ip", callback: any): number
    on(sigName: "notify::host-ip", callback: any): number
    once(sigName: "notify::host-ip", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::host-ip", ...args: any[]): void
    connect(sigName: "notify::interface", callback: any): number
    on(sigName: "notify::interface", callback: any): number
    once(sigName: "notify::interface", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::msearch-port", callback: any): number
    on(sigName: "notify::msearch-port", callback: any): number
    once(sigName: "notify::msearch-port", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::msearch-port", ...args: any[]): void
    connect(sigName: "notify::network", callback: any): number
    on(sigName: "notify::network", callback: any): number
    once(sigName: "notify::network", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::network", ...args: any[]): void
    connect(sigName: "notify::server-id", callback: any): number
    on(sigName: "notify::server-id", callback: any): number
    once(sigName: "notify::server-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::server-id", ...args: any[]): void
    connect(sigName: "notify::socket-ttl", callback: any): number
    on(sigName: "notify::socket-ttl", callback: any): number
    once(sigName: "notify::socket-ttl", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::socket-ttl", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Client extends GObject.Object {

    // Own properties of GSSDP-1.0.GSSDP.Client

    static name: string

    // Constructors of GSSDP-1.0.GSSDP.Client

    constructor(config?: Client.ConstructorProperties) 
    constructor(mainContext: GLib.MainContext | null, iface: string | null) 
    static new(mainContext: GLib.MainContext | null, iface: string | null): Client
    static newWithPort(iface: string | null, msearchPort: number): Client
    _init(config?: Client.ConstructorProperties): void
}

export module ResourceBrowser {

    // Signal callback interfaces

    /**
     * Signal callback interface for `resource-available`
     */
    export interface ResourceAvailableSignalCallback {
        (usn: string, locations: string[]): void
    }

    /**
     * Signal callback interface for `resource-unavailable`
     */
    export interface ResourceUnavailableSignalCallback {
        (usn: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GSSDP-1.0.GSSDP.ResourceBrowser

        /**
         * Whether this browser is active or not.
         */
        active?: boolean | null
        /**
         * The #GSSDPClient to use.
         */
        client?: Client | null
        /**
         * The maximum number of seconds in which to request other parties
         * to respond.
         */
        mx?: number | null
        /**
         * The discovery target.
         */
        target?: string | null
    }

}

export interface ResourceBrowser {

    // Own properties of GSSDP-1.0.GSSDP.ResourceBrowser

    /**
     * Whether this browser is active or not.
     */
    active: boolean
    /**
     * The #GSSDPClient to use.
     */
    readonly client: Client
    /**
     * The maximum number of seconds in which to request other parties
     * to respond.
     */
    mx: number
    /**
     * The discovery target.
     */
    target: string

    // Own fields of GSSDP-1.0.GSSDP.ResourceBrowser

    parent: GObject.Object
    priv: ResourceBrowserPrivate

    // Owm methods of GSSDP-1.0.GSSDP.ResourceBrowser

    getActive(): boolean
    getClient(): Client
    getMx(): number
    getTarget(): string
    /**
     * Begins discovery if `resource_browser` is active and no discovery is
     * performed. Otherwise does nothing.
     */
    rescan(): boolean
    /**
     * (De)activates `resource_browser`.
     * @param active %TRUE to activate `resource_browser`
     */
    setActive(active: boolean): void
    /**
     * Sets the used MX value of `resource_browser` to `mx`.
     * @param mx The to be used MX value
     */
    setMx(mx: number): void
    /**
     * Sets the browser target of `resource_browser` to `target`.
     * @param target The browser target
     */
    setTarget(target: string): void

    // Own virtual methods of GSSDP-1.0.GSSDP.ResourceBrowser

    resourceUnavailable(usn: string): void

    // Own signals of GSSDP-1.0.GSSDP.ResourceBrowser

    connect(sigName: "resource-available", callback: ResourceBrowser.ResourceAvailableSignalCallback): number
    on(sigName: "resource-available", callback: ResourceBrowser.ResourceAvailableSignalCallback): number
    once(sigName: "resource-available", callback: ResourceBrowser.ResourceAvailableSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "resource-available", locations: string[], ...args: any[]): void
    connect(sigName: "resource-unavailable", callback: ResourceBrowser.ResourceUnavailableSignalCallback): number
    on(sigName: "resource-unavailable", callback: ResourceBrowser.ResourceUnavailableSignalCallback): number
    once(sigName: "resource-unavailable", callback: ResourceBrowser.ResourceUnavailableSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "resource-unavailable", ...args: any[]): void

    // Class property signals of GSSDP-1.0.GSSDP.ResourceBrowser

    connect(sigName: "notify::active", callback: any): number
    on(sigName: "notify::active", callback: any): number
    once(sigName: "notify::active", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::client", callback: any): number
    on(sigName: "notify::client", callback: any): number
    once(sigName: "notify::client", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::mx", callback: any): number
    on(sigName: "notify::mx", callback: any): number
    once(sigName: "notify::mx", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mx", ...args: any[]): void
    connect(sigName: "notify::target", callback: any): number
    on(sigName: "notify::target", callback: any): number
    once(sigName: "notify::target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ResourceBrowser extends GObject.Object {

    // Own properties of GSSDP-1.0.GSSDP.ResourceBrowser

    static name: string

    // Constructors of GSSDP-1.0.GSSDP.ResourceBrowser

    constructor(config?: ResourceBrowser.ConstructorProperties) 
    /**
     * `target` is a generic string the resource browser listens for on the SSDP
     * bus. There are several possible targets such as
     * <itemizedlist>
     *   <listitem><para>"ssdp:all" for everything</para></listitem>
     *   <listitem><para>
     *     "upnp:rootdevice" for UPnP device entry points, not caring about the
     *     device type</para></listitem>
     *   <listitem><para>The UUID of a specific device</para></listitem>
     *   <listitem><para>Device types such as
     *   "urn:schemas-upnp-org:device:MediaServer:1"</para></listitem>
     *   <listitem><para>Service types such as
     *   "urn:schemas-upnp-org:service:ContentDirectory:1"</para></listitem>
     * </itemizedlist>
     * @constructor 
     * @param client The #GSSDPClient to associate with
     * @param target A SSDP search target
     */
    constructor(client: Client, target: string) 
    /**
     * `target` is a generic string the resource browser listens for on the SSDP
     * bus. There are several possible targets such as
     * <itemizedlist>
     *   <listitem><para>"ssdp:all" for everything</para></listitem>
     *   <listitem><para>
     *     "upnp:rootdevice" for UPnP device entry points, not caring about the
     *     device type</para></listitem>
     *   <listitem><para>The UUID of a specific device</para></listitem>
     *   <listitem><para>Device types such as
     *   "urn:schemas-upnp-org:device:MediaServer:1"</para></listitem>
     *   <listitem><para>Service types such as
     *   "urn:schemas-upnp-org:service:ContentDirectory:1"</para></listitem>
     * </itemizedlist>
     * @constructor 
     * @param client The #GSSDPClient to associate with
     * @param target A SSDP search target
     */
    static new(client: Client, target: string): ResourceBrowser
    _init(config?: ResourceBrowser.ConstructorProperties): void
}

export module ResourceGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GSSDP-1.0.GSSDP.ResourceGroup

        /**
         * Whether this group of resources is available or not.
         */
        available?: boolean | null
        /**
         * The #GSSDPClient to use.
         */
        client?: Client | null
        /**
         * The number of seconds our advertisements are valid.
         */
        maxAge?: number | null
        /**
         * The minimum number of milliseconds between SSDP messages.
         * The default is 120 based on DLNA specification.
         */
        messageDelay?: number | null
    }

}

export interface ResourceGroup {

    // Own properties of GSSDP-1.0.GSSDP.ResourceGroup

    /**
     * Whether this group of resources is available or not.
     */
    available: boolean
    /**
     * The #GSSDPClient to use.
     */
    readonly client: Client
    /**
     * The number of seconds our advertisements are valid.
     */
    maxAge: number
    /**
     * The minimum number of milliseconds between SSDP messages.
     * The default is 120 based on DLNA specification.
     */
    messageDelay: number

    // Own fields of GSSDP-1.0.GSSDP.ResourceGroup

    parent: GObject.Object
    priv: ResourceGroupPrivate

    // Owm methods of GSSDP-1.0.GSSDP.ResourceGroup

    /**
     * Adds a resource with target `target,` USN `usn,` and locations `locations`
     * to `resource_group`.
     * @param target The resource's target
     * @param usn The resource's USN
     * @param locations A #GList of the resource's locations
     */
    addResource(target: string, usn: string, locations: string[]): number
    /**
     * Adds a resource with target `target,` USN `usn,` and location `location`
     * to `resource_group`.
     * @param target The resource's target
     * @param usn The resource's USN
     * @param location The resource's location
     */
    addResourceSimple(target: string, usn: string, location: string): number
    getAvailable(): boolean
    getClient(): Client
    getMaxAge(): number
    getMessageDelay(): number
    /**
     * Removes the resource with ID `resource_id` from `resource_group`.
     * @param resourceId The ID of the resource to remove
     */
    removeResource(resourceId: number): void
    /**
     * Sets `resource_group<`!-- -->s availability to `available`. Changing
     * `resource_group<`!-- -->s availability causes it to announce its new state
     * to listening SSDP clients.
     * @param available %TRUE if `resource_group` should be available (advertised)
     */
    setAvailable(available: boolean): void
    /**
     * Sets the number of seconds advertisements are valid to `max_age`.
     * @param maxAge The number of seconds advertisements are valid
     */
    setMaxAge(maxAge: number): void
    /**
     * Sets the minimum time between each SSDP message.
     * @param messageDelay The message delay in ms.
     */
    setMessageDelay(messageDelay: number): void

    // Class property signals of GSSDP-1.0.GSSDP.ResourceGroup

    connect(sigName: "notify::available", callback: any): number
    on(sigName: "notify::available", callback: any): number
    once(sigName: "notify::available", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::available", ...args: any[]): void
    connect(sigName: "notify::client", callback: any): number
    on(sigName: "notify::client", callback: any): number
    once(sigName: "notify::client", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::max-age", callback: any): number
    on(sigName: "notify::max-age", callback: any): number
    once(sigName: "notify::max-age", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-age", ...args: any[]): void
    connect(sigName: "notify::message-delay", callback: any): number
    on(sigName: "notify::message-delay", callback: any): number
    once(sigName: "notify::message-delay", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::message-delay", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ResourceGroup extends GObject.Object {

    // Own properties of GSSDP-1.0.GSSDP.ResourceGroup

    static name: string

    // Constructors of GSSDP-1.0.GSSDP.ResourceGroup

    constructor(config?: ResourceGroup.ConstructorProperties) 
    constructor(client: Client) 
    static new(client: Client): ResourceGroup
    _init(config?: ResourceGroup.ConstructorProperties): void
}

export interface ClientClass {

    // Own fields of GSSDP-1.0.GSSDP.ClientClass

    parentClass: GObject.ObjectClass
}

export abstract class ClientClass {

    // Own properties of GSSDP-1.0.GSSDP.ClientClass

    static name: string
}

export interface ClientPrivate {
}

export class ClientPrivate {

    // Own properties of GSSDP-1.0.GSSDP.ClientPrivate

    static name: string
}

export interface ResourceBrowserClass {

    // Own fields of GSSDP-1.0.GSSDP.ResourceBrowserClass

    parentClass: GObject.ObjectClass
    resourceUnavailable: (resourceBrowser: ResourceBrowser, usn: string) => void
}

export abstract class ResourceBrowserClass {

    // Own properties of GSSDP-1.0.GSSDP.ResourceBrowserClass

    static name: string
}

export interface ResourceBrowserPrivate {
}

export class ResourceBrowserPrivate {

    // Own properties of GSSDP-1.0.GSSDP.ResourceBrowserPrivate

    static name: string
}

export interface ResourceGroupClass {

    // Own fields of GSSDP-1.0.GSSDP.ResourceGroupClass

    parentClass: GObject.ObjectClass
}

export abstract class ResourceGroupClass {

    // Own properties of GSSDP-1.0.GSSDP.ResourceGroupClass

    static name: string
}

export interface ResourceGroupPrivate {
}

export class ResourceGroupPrivate {

    // Own properties of GSSDP-1.0.GSSDP.ResourceGroupPrivate

    static name: string
}
