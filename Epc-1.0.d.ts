
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Epc-1.0
 */

import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

/**
 * The address family to use for contacting network services.
 */
export enum AddressFamily {
    UNSPEC,
    IPV4,
    IPV6,
}
/**
 * Various strategies for handling service name collisions.
 */
export enum CollisionHandling {
    IGNORE,
    CHANGE_NAME,
    UNIQUE_SERVICE,
}
/**
 * The transport protocols supported by libepc.
 */
export enum Protocol {
    UNKNOWN,
    HTTP,
    HTTPS,
}
/**
 * These flags specify the authentication behaviour of an #EpcPublisher.
 * @bitfield 
 */
export enum AuthFlags {
    DEFAULT,
    PASSWORD_TEXT_NEEDED,
}
export const SERVICE_TYPE_HTTP: string
export const SERVICE_TYPE_HTTPS: string
export const TLS_SECONDS_PER_DAY: number
export const TLS_SECONDS_PER_HOUR: number
export const TLS_SECONDS_PER_MINUTE: number
export function addressFamilyToString(value: AddressFamily): string
export function authFlagsToString(value: AuthFlags): string
export function avahiErrorQuark(): GLib.Quark
export function collisionHandlingToString(value: CollisionHandling): string
export function httpErrorQuark(): GLib.Quark
export function protocolBuildUri(protocol: Protocol, hostname: string, port: number, path: string): string
export function protocolFromName(name: string, fallback: Protocol): Protocol
export function protocolGetServiceType(protocol: Protocol): string
export function protocolGetUriScheme(protocol: Protocol): string
export function protocolToString(value: Protocol): string
export function serviceTypeGetBase(type: string): string
export function serviceTypeGetProtocol(serviceType: string): Protocol
export function serviceTypeNew(protocol: Protocol, application: string): string
export function shellGetDebugLevel(): number
export function shellGetHostName(): string
export function shellProgressBegin(title: string, message: string): void
export function shellProgressEnd(): void
export function shellProgressUpdate(percentage: number, message: string): void
export function shellRestartAvahiClient(strloc: string): void
export function shellSetProgressHooks(hooks: ShellProgressHooks, userData: object, destroyData: GLib.DestroyNotify): void
export function shellWatchRemove(id: number): void
export function tlsErrorQuark(): GLib.Quark
export function tlsGetCertificateFilename(hostname: string): string
export function tlsGetPrivateKeyFilename(hostname: string): string
export function tlsGetServerCredentials(hostname: string, crtfile: string, keyfile: string): boolean
/**
 * Functions implementing this callback shall return %TRUE when the
 * credentials provided by the authentication request grant access
 * to the resource described by `context`.
 * 
 * The `username` is %NULL when no creditials were passed, and anonymous access
 * is tried.
 * 
 * See also #epc_publisher_set_auth_flags. When EPC_AUTH_DEFAULT is used, 
 * you should call #epc_auth_context_check_password
 * to verify that the password passed in the request matches the known password
 * for that user. In this case there is no way to retrieve the password from 
 * the #EpcAuthContext because the network protocol transfers just a hash code, 
 * not the actual password.
 * 
 * However, when EPC_AUTH_PASSWORD_TEXT_NEEDED is used, you should call 
 * epc_auth_context_get_password() and then do your own authentication check. 
 * For instance, you might need to delegate the authentication to some other 
 * code or server, such as a database server.
 * @callback 
 * @param context the #EpcAuthContext
 * @param username the username provided for authentication, or %NULL
 */
export interface AuthHandler {
    (context: AuthContext, username: string): boolean
}
/**
 * This callback is used to generate custom contents published with the
 * #epc_publisher_add_handler function. The arguments passed are the same as
 * passed to #epc_publisher_add_handler. The #EpcPublisher will decrease the
 * reference count of the returned buffer after deliving it. It's valid to
 * return %NULL in situations were no contents can be generated.
 * @callback 
 * @param publisher the #EpcPublisher
 * @param key the unique key
 */
export interface ContentsHandler {
    (publisher: Publisher, key: string): Contents
}
/**
 * This callback is used to retrieve the next chunk of data for a streaming
 * contents buffer created with #epc_contents_stream_read.
 * 
 * Return %FALSE when the buffer has reached its end, and no more data is
 * available. Also return %FALSE, when the buffer size passed in `length` is
 * not sufficient. Copy your minimal buffer size to `length` in that situation.
 * 
 * The library might pass %NULL for `buffer` on the first call to start buffer
 * size negotation.
 * 
 * See also: #epc_contents_stream_new, #epc_contents_stream_read
 * @callback 
 * @param contents a #EpcContents buffer
 * @param buffer a location for storing the contents, or %NULL
 * @param length a location for passing and storing the contents length in bytes.
 */
export interface ContentsReadFunc {
    (contents: Contents, buffer: object, length: number): boolean
}
export module Consumer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `authenticate`
     */
    export interface AuthenticateSignalCallback {
        (object: string): boolean
    }

    /**
     * Signal callback interface for `publisher-resolved`
     */
    export interface PublisherResolvedSignalCallback {
        (object: Protocol, p0: string, p1: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Epc-1.0.Epc.Consumer

        application?: string | null
        domain?: string | null
        hostname?: string | null
        name?: string | null
        password?: string | null
        path?: string | null
        port?: number | null
        protocol?: Protocol | null
        username?: string | null
    }

}

export interface Consumer {

    // Own properties of Epc-1.0.Epc.Consumer

    readonly application: string
    readonly domain: string
    readonly hostname: string
    readonly name: string
    password: string
    readonly path: string
    readonly port: number
    protocol: Protocol
    username: string

    // Owm methods of Epc-1.0.Epc.Consumer

    getPassword(): string
    getProtocol(): Protocol
    getUsername(): string
    isPublisherResolved(): boolean
    resolvePublisher(timeout: number): boolean
    setPassword(password: string): void
    setProtocol(protocol: Protocol): void
    setUsername(username: string): void

    // Own virtual methods of Epc-1.0.Epc.Consumer

    authenticate(realm: string): void
    publisherResolved(protocol: Protocol, hostname: string, port: number): void

    // Own signals of Epc-1.0.Epc.Consumer

    connect(sigName: "authenticate", callback: Consumer.AuthenticateSignalCallback): number
    on(sigName: "authenticate", callback: Consumer.AuthenticateSignalCallback): number
    once(sigName: "authenticate", callback: Consumer.AuthenticateSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "authenticate", ...args: any[]): void
    connect(sigName: "publisher-resolved", callback: Consumer.PublisherResolvedSignalCallback): number
    on(sigName: "publisher-resolved", callback: Consumer.PublisherResolvedSignalCallback): number
    once(sigName: "publisher-resolved", callback: Consumer.PublisherResolvedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "publisher-resolved", p0: string, p1: number, ...args: any[]): void

    // Class property signals of Epc-1.0.Epc.Consumer

    connect(sigName: "notify::application", callback: any): number
    on(sigName: "notify::application", callback: any): number
    once(sigName: "notify::application", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::domain", callback: any): number
    on(sigName: "notify::domain", callback: any): number
    once(sigName: "notify::domain", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::domain", ...args: any[]): void
    connect(sigName: "notify::hostname", callback: any): number
    on(sigName: "notify::hostname", callback: any): number
    once(sigName: "notify::hostname", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hostname", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::password", callback: any): number
    on(sigName: "notify::password", callback: any): number
    once(sigName: "notify::password", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::path", callback: any): number
    on(sigName: "notify::path", callback: any): number
    once(sigName: "notify::path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::port", callback: any): number
    on(sigName: "notify::port", callback: any): number
    once(sigName: "notify::port", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: any): number
    on(sigName: "notify::protocol", callback: any): number
    once(sigName: "notify::protocol", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::username", callback: any): number
    on(sigName: "notify::username", callback: any): number
    once(sigName: "notify::username", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Public fields of the #EpcConsumer class.
 * @class 
 */
export class Consumer extends GObject.Object {

    // Own properties of Epc-1.0.Epc.Consumer

    static name: string

    // Constructors of Epc-1.0.Epc.Consumer

    constructor(config?: Consumer.ConstructorProperties) 
    constructor(service: ServiceInfo) 
    static new(service: ServiceInfo): Consumer
    static newForName(name: string): Consumer
    static newForNameFull(name: string, application: string, domain: string): Consumer
    _init(config?: Consumer.ConstructorProperties): void
}

export module Dispatcher {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Epc-1.0.Epc.Dispatcher

        collisionHandling?: CollisionHandling | null
        cookie?: string | null
        name?: string | null
    }

}

export interface Dispatcher {

    // Own properties of Epc-1.0.Epc.Dispatcher

    collisionHandling: CollisionHandling
    cookie: string
    name: string

    // Owm methods of Epc-1.0.Epc.Dispatcher

    addServiceSubtype(type: string, subtype: string): void
    getCollisionHandling(): CollisionHandling
    getCookie(): string
    getName(): string
    reset(): void
    run(): boolean
    setCollisionHandling(method: CollisionHandling): void
    setCookie(cookie: string): void
    setName(name: string): void

    // Class property signals of Epc-1.0.Epc.Dispatcher

    connect(sigName: "notify::collision-handling", callback: any): number
    on(sigName: "notify::collision-handling", callback: any): number
    once(sigName: "notify::collision-handling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::collision-handling", ...args: any[]): void
    connect(sigName: "notify::cookie", callback: any): number
    on(sigName: "notify::cookie", callback: any): number
    once(sigName: "notify::cookie", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cookie", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Public fields of the #EpcDispatcher class.
 * @class 
 */
export class Dispatcher extends GObject.Object {

    // Own properties of Epc-1.0.Epc.Dispatcher

    static name: string

    // Constructors of Epc-1.0.Epc.Dispatcher

    constructor(config?: Dispatcher.ConstructorProperties) 
    constructor(name: string) 
    static new(name: string): Dispatcher
    _init(config?: Dispatcher.ConstructorProperties): void
}

export module Publisher {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Epc-1.0.Epc.Publisher

        application?: string | null
        authFlags?: AuthFlags | null
        certificateFile?: string | null
        collisionHandling?: CollisionHandling | null
        contentsPath?: string | null
        privateKeyFile?: string | null
        protocol?: Protocol | null
        serviceCookie?: string | null
        serviceDomain?: string | null
        serviceName?: string | null
    }

}

export interface Publisher {

    // Own properties of Epc-1.0.Epc.Publisher

    application: string
    authFlags: AuthFlags
    certificateFile: string
    collisionHandling: CollisionHandling
    contentsPath: string
    privateKeyFile: string
    protocol: Protocol
    serviceCookie: string
    serviceDomain: string
    serviceName: string

    // Owm methods of Epc-1.0.Epc.Publisher

    add(key: string, data: object, length: number): void
    addBookmark(key: string, label: string): void
    addFile(key: string, filename: string): void
    addHandler(key: string, handler: ContentsHandler): void
    getAuthFlags(): AuthFlags
    getCertificateFile(): string
    getCollisionHandling(): CollisionHandling
    getContentsPath(): string
    getPath(key: string): string
    getPrivateKeyFile(): string
    getProtocol(): Protocol
    getServiceCookie(): string
    getServiceDomain(): string
    getServiceName(): string
    getUri(key: string): string
    hasKey(key: string): boolean
    quit(): boolean
    remove(key: string): boolean
    run(): boolean
    runAsync(): boolean
    setAuthFlags(flags: AuthFlags): void
    setAuthHandler(key: string, handler: AuthHandler): void
    setCollisionHandling(method: CollisionHandling): void
    setContentsPath(path: string): void
    setCredentials(certfile: string, keyfile: string): void
    setProtocol(protocol: Protocol): void
    setServiceCookie(cookie: string): void
    setServiceName(name: string): void

    // Class property signals of Epc-1.0.Epc.Publisher

    connect(sigName: "notify::application", callback: any): number
    on(sigName: "notify::application", callback: any): number
    once(sigName: "notify::application", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::auth-flags", callback: any): number
    on(sigName: "notify::auth-flags", callback: any): number
    once(sigName: "notify::auth-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::auth-flags", ...args: any[]): void
    connect(sigName: "notify::certificate-file", callback: any): number
    on(sigName: "notify::certificate-file", callback: any): number
    once(sigName: "notify::certificate-file", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::certificate-file", ...args: any[]): void
    connect(sigName: "notify::collision-handling", callback: any): number
    on(sigName: "notify::collision-handling", callback: any): number
    once(sigName: "notify::collision-handling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::collision-handling", ...args: any[]): void
    connect(sigName: "notify::contents-path", callback: any): number
    on(sigName: "notify::contents-path", callback: any): number
    once(sigName: "notify::contents-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::contents-path", ...args: any[]): void
    connect(sigName: "notify::private-key-file", callback: any): number
    on(sigName: "notify::private-key-file", callback: any): number
    once(sigName: "notify::private-key-file", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::private-key-file", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: any): number
    on(sigName: "notify::protocol", callback: any): number
    once(sigName: "notify::protocol", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::service-cookie", callback: any): number
    on(sigName: "notify::service-cookie", callback: any): number
    once(sigName: "notify::service-cookie", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::service-cookie", ...args: any[]): void
    connect(sigName: "notify::service-domain", callback: any): number
    on(sigName: "notify::service-domain", callback: any): number
    once(sigName: "notify::service-domain", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::service-domain", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: any): number
    on(sigName: "notify::service-name", callback: any): number
    once(sigName: "notify::service-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Public fields of the #EpcPublisher class.
 * @class 
 */
export class Publisher extends GObject.Object {

    // Own properties of Epc-1.0.Epc.Publisher

    static name: string

    // Constructors of Epc-1.0.Epc.Publisher

    constructor(config?: Publisher.ConstructorProperties) 
    constructor(name: string, application: string, domain: string) 
    static new(name: string, application: string, domain: string): Publisher
    _init(config?: Publisher.ConstructorProperties): void
    static expandName(name: string): string
}

export module ServiceMonitor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `scanning-done`
     */
    export interface ScanningDoneSignalCallback {
        (object: string): void
    }

    /**
     * Signal callback interface for `service-found`
     */
    export interface ServiceFoundSignalCallback {
        (object: string, p0: ServiceInfo): void
    }

    /**
     * Signal callback interface for `service-removed`
     */
    export interface ServiceRemovedSignalCallback {
        (object: string, p0: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Epc-1.0.Epc.ServiceMonitor

        application?: string | null
        domain?: string | null
        serviceTypes?: string[] | null
        skipOurOwn?: boolean | null
    }

}

export interface ServiceMonitor {

    // Own properties of Epc-1.0.Epc.ServiceMonitor

    readonly application: string
    readonly domain: string
    readonly serviceTypes: string[]
    skipOurOwn: boolean

    // Owm methods of Epc-1.0.Epc.ServiceMonitor

    getSkipOurOwn(): boolean
    setSkipOurOwn(setting: boolean): void

    // Own virtual methods of Epc-1.0.Epc.ServiceMonitor

    scanningDone(type: string): void
    serviceFound(name: string, info: ServiceInfo): void
    serviceRemoved(name: string, type: string): void

    // Own signals of Epc-1.0.Epc.ServiceMonitor

    connect(sigName: "scanning-done", callback: ServiceMonitor.ScanningDoneSignalCallback): number
    on(sigName: "scanning-done", callback: ServiceMonitor.ScanningDoneSignalCallback): number
    once(sigName: "scanning-done", callback: ServiceMonitor.ScanningDoneSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "scanning-done", ...args: any[]): void
    connect(sigName: "service-found", callback: ServiceMonitor.ServiceFoundSignalCallback): number
    on(sigName: "service-found", callback: ServiceMonitor.ServiceFoundSignalCallback): number
    once(sigName: "service-found", callback: ServiceMonitor.ServiceFoundSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "service-found", p0: ServiceInfo, ...args: any[]): void
    connect(sigName: "service-removed", callback: ServiceMonitor.ServiceRemovedSignalCallback): number
    on(sigName: "service-removed", callback: ServiceMonitor.ServiceRemovedSignalCallback): number
    once(sigName: "service-removed", callback: ServiceMonitor.ServiceRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "service-removed", p0: string, ...args: any[]): void

    // Class property signals of Epc-1.0.Epc.ServiceMonitor

    connect(sigName: "notify::application", callback: any): number
    on(sigName: "notify::application", callback: any): number
    once(sigName: "notify::application", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::domain", callback: any): number
    on(sigName: "notify::domain", callback: any): number
    once(sigName: "notify::domain", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::domain", ...args: any[]): void
    connect(sigName: "notify::service-types", callback: any): number
    on(sigName: "notify::service-types", callback: any): number
    once(sigName: "notify::service-types", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::service-types", ...args: any[]): void
    connect(sigName: "notify::skip-our-own", callback: any): number
    on(sigName: "notify::skip-our-own", callback: any): number
    once(sigName: "notify::skip-our-own", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::skip-our-own", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Public fields of the #EpcServiceMonitor class.
 * @class 
 */
export class ServiceMonitor extends GObject.Object {

    // Own properties of Epc-1.0.Epc.ServiceMonitor

    static name: string

    // Constructors of Epc-1.0.Epc.ServiceMonitor

    constructor(config?: ServiceMonitor.ConstructorProperties) 
    static newForTypesStrv(domain: string, types: string): ServiceMonitor
    _init(config?: ServiceMonitor.ConstructorProperties): void
}

export interface AuthContext {

    // Owm methods of Epc-1.0.Epc.AuthContext

    checkPassword(password: string): boolean
    getKey(): string
    getPassword(): string
}

export class AuthContext {

    // Own properties of Epc-1.0.Epc.AuthContext

    static name: string
}

export interface ConsumerClass {

    // Own fields of Epc-1.0.Epc.ConsumerClass

    authenticate: (consumer: Consumer, realm: string) => void
    publisherResolved: (consumer: Consumer, protocol: Protocol, hostname: string, port: number) => void
}

/**
 * Virtual methods of the #EpcConsumer class.
 * @record 
 */
export abstract class ConsumerClass {

    // Own properties of Epc-1.0.Epc.ConsumerClass

    static name: string
}

export interface ConsumerPrivate {
}

export class ConsumerPrivate {

    // Own properties of Epc-1.0.Epc.ConsumerPrivate

    static name: string
}

export interface Contents {

    // Owm methods of Epc-1.0.Epc.Contents

    getMimeType(): string
    isStream(): boolean
    ref(): Contents
    unref(): void
}

export class Contents {

    // Own properties of Epc-1.0.Epc.Contents

    static name: string

    // Constructors of Epc-1.0.Epc.Contents

    constructor(type: string, data: object, length: number, destroyData: GLib.DestroyNotify) 
    static new(type: string, data: object, length: number, destroyData: GLib.DestroyNotify): Contents
    static newDup(type: string, data: object, length: number): Contents
    static streamNew(type: string, callback: ContentsReadFunc): Contents
}

export interface DispatcherClass {
}

/**
 * Virtual methods of the #EpcDispatcher class.
 * @record 
 */
export abstract class DispatcherClass {

    // Own properties of Epc-1.0.Epc.DispatcherClass

    static name: string
}

export interface DispatcherPrivate {
}

export class DispatcherPrivate {

    // Own properties of Epc-1.0.Epc.DispatcherPrivate

    static name: string
}

export interface PublisherClass {
}

/**
 * Virtual methods of the #EpcPublisher class.
 * @record 
 */
export abstract class PublisherClass {

    // Own properties of Epc-1.0.Epc.PublisherClass

    static name: string
}

export interface PublisherPrivate {
}

export class PublisherPrivate {

    // Own properties of Epc-1.0.Epc.PublisherPrivate

    static name: string
}

export interface ServiceInfo {

    // Owm methods of Epc-1.0.Epc.ServiceInfo

    getAddressFamily(): AddressFamily
    getDetail(name: string): string
    getHost(): string
    getInterface(): string
    getPort(): number
    getServiceType(): string
    ref(): ServiceInfo
    unref(): void
}

export class ServiceInfo {

    // Own properties of Epc-1.0.Epc.ServiceInfo

    static name: string
}

export interface ServiceMonitorClass {

    // Own fields of Epc-1.0.Epc.ServiceMonitorClass

    serviceFound: (monitor: ServiceMonitor, name: string, info: ServiceInfo) => void
    serviceRemoved: (monitor: ServiceMonitor, name: string, type: string) => void
    scanningDone: (monitor: ServiceMonitor, type: string) => void
}

/**
 * Virtual methods of the #EpcServiceMonitor class.
 * @record 
 */
export abstract class ServiceMonitorClass {

    // Own properties of Epc-1.0.Epc.ServiceMonitorClass

    static name: string
}

export interface ServiceMonitorPrivate {
}

export class ServiceMonitorPrivate {

    // Own properties of Epc-1.0.Epc.ServiceMonitorPrivate

    static name: string
}

export interface ShellProgressHooks {

    // Own fields of Epc-1.0.Epc.ShellProgressHooks

    begin: (title: string) => void
    update: (percentage: number, message: string) => void
    end: () => void
}

/**
 * This table is used by #epc_shell_set_progress_hooks to install functions
 * allowing the library to provide feedback during processing.
 * 
 * See also: #epc_progress_window_install
 * @record 
 */
export class ShellProgressHooks {

    // Own properties of Epc-1.0.Epc.ShellProgressHooks

    static name: string
}
