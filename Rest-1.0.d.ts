
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Rest-1.0
 */

import type * as Soup from './Soup-3.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

export enum MemoryUse {
    /**
     * the memory block can be assumed to always exist for the
     * lifetime of the parameter, #RestParam will use it directly.
     */
    STATIC,
    /**
     * #RestParam will take ownership of the memory block, and
     * g_free() it when it isn't used.
     */
    TAKE,
    /**
     * #RestParam will make a copy of the memory block.
     */
    COPY,
}
/**
 * Error domain used when returning errors from #RestProxyCall.
 */
export enum ProxyCallError {
    /**
     * the method call failed
     */
    FAILED,
}
/**
 * Error domain used when returning errors from a #RestProxy.
 */
export enum ProxyError {
    /**
     * Cancelled
     */
    CANCELLED,
    /**
     * Resolution
     */
    RESOLUTION,
    /**
     * Connection
     */
    CONNECTION,
    /**
     * SSL
     */
    SSL,
    /**
     * Input/Output
     */
    IO,
    /**
     * Failure
     */
    FAILED,
    /**
     * Invalid URL
     */
    URL_INVALID,
    /**
     * URL requires binding
     */
    BINDING_REQUIRED,
    /**
     * HTTP/Multiple choices
     */
    HTTP_MULTIPLE_CHOICES,
    /**
     * HTTP/Moved permanently
     */
    HTTP_MOVED_PERMANENTLY,
    /**
     * HTTP/Found
     */
    HTTP_FOUND,
    /**
     * HTTP/See other
     */
    HTTP_SEE_OTHER,
    /**
     * HTTP/Not modified
     */
    HTTP_NOT_MODIFIED,
    /**
     * HTTP/Use proxy
     */
    HTTP_USE_PROXY,
    /**
     * HTTP/306
     */
    HTTP_THREEOHSIX,
    /**
     * HTTP/Temporary redirect
     */
    HTTP_TEMPORARY_REDIRECT,
    /**
     * HTTP/Bad request
     */
    HTTP_BAD_REQUEST,
    /**
     * HTTP/Unauthorized
     */
    HTTP_UNAUTHORIZED,
    /**
     * HTTP/402
     */
    HTTP_FOUROHTWO,
    /**
     * HTTP/Forbidden
     */
    HTTP_FORBIDDEN,
    /**
     * HTTP/Not found
     */
    HTTP_NOT_FOUND,
    /**
     * HTTP/Method not allowed
     */
    HTTP_METHOD_NOT_ALLOWED,
    /**
     * HTTP/Not acceptable
     */
    HTTP_NOT_ACCEPTABLE,
    /**
     * HTTP/Proxy authentication required
     */
    HTTP_PROXY_AUTHENTICATION_REQUIRED,
    /**
     * HTTP/Request timeout
     */
    HTTP_REQUEST_TIMEOUT,
    /**
     * HTTP/Conflict
     */
    HTTP_CONFLICT,
    /**
     * HTTP/Gone
     */
    HTTP_GONE,
    /**
     * HTTP/Length required
     */
    HTTP_LENGTH_REQUIRED,
    /**
     * HTTP/Precondition failed
     */
    HTTP_PRECONDITION_FAILED,
    /**
     * HTTP/Request entity too large
     */
    HTTP_REQUEST_ENTITY_TOO_LARGE,
    /**
     * HTTP/Request URI too long
     */
    HTTP_REQUEST_URI_TOO_LONG,
    /**
     * HTTP/Unsupported media type
     */
    HTTP_UNSUPPORTED_MEDIA_TYPE,
    /**
     * HTTP/Requested range not satisfiable
     */
    HTTP_REQUESTED_RANGE_NOT_SATISFIABLE,
    /**
     * HTTP/Expectation failed
     */
    HTTP_EXPECTATION_FAILED,
    /**
     * HTTP/Internal server error
     */
    HTTP_INTERNAL_SERVER_ERROR,
    /**
     * HTTP/Not implemented
     */
    HTTP_NOT_IMPLEMENTED,
    /**
     * HTTP/Bad gateway
     */
    HTTP_BAD_GATEWAY,
    /**
     * HTTP/Service unavailable
     */
    HTTP_SERVICE_UNAVAILABLE,
    /**
     * HTTP/Gateway timeout
     */
    HTTP_GATEWAY_TIMEOUT,
    /**
     * HTTP/Version not supported
     */
    HTTP_HTTP_VERSION_NOT_SUPPORTED,
}
export function oauth2ErrorQuark(): GLib.Quark
export function proxyCallErrorQuark(): GLib.Quark
export function proxyErrorQuark(): GLib.Quark
/**
 * Creates a random string from a given alphabeth with length `length`
 * @param length the length of the random string
 */
export function randomString(length: number): string
export interface ProxyCallAsyncCallback {
    (call: ProxyCall, error: GLib.Error, weakObject: GObject.Object, userdata: object | null): void
}
export interface ProxyCallContinuousCallback {
    (call: ProxyCall, buf: string, len: number, error: GLib.Error, weakObject: GObject.Object, userdata: object | null): void
}
export interface ProxyCallUploadCallback {
    (call: ProxyCall, total: number, uploaded: number, error: GLib.Error, weakObject: GObject.Object, userdata: object | null): void
}
export module OAuth2Proxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Proxy.ConstructorProperties {

        // Own constructor properties of Rest-1.0.Rest.OAuth2Proxy

        accessToken?: string | null
        authUrl?: string | null
        clientId?: string | null
        clientSecret?: string | null
        expirationDate?: GLib.DateTime | null
        redirectUri?: string | null
        refreshToken?: string | null
        tokenUrl?: string | null
    }

}

export interface OAuth2Proxy {

    // Own properties of Rest-1.0.Rest.OAuth2Proxy

    accessToken: string
    authUrl: string
    clientId: string
    clientSecret: string
    expirationDate: GLib.DateTime
    redirectUri: string
    refreshToken: string
    tokenUrl: string

    // Own fields of Rest-1.0.Rest.OAuth2Proxy

    parentInstance: any

    // Owm methods of Rest-1.0.Rest.OAuth2Proxy

    buildAuthorizationUrl(codeChallenge: string, scope: string | null): [ /* returnType */ string, /* state */ string ]
    fetchAccessTokenAsync(authorizationCode: string, codeVerifier: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    fetchAccessTokenFinish(result: Gio.AsyncResult): boolean
    getAccessToken(): string
    getAuthUrl(): string
    getClientId(): string
    getClientSecret(): string
    getExpirationDate(): GLib.DateTime
    getRedirectUri(): string
    getRefreshToken(): string
    getTokenUrl(): string
    refreshAccessToken(): boolean
    refreshAccessTokenAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    refreshAccessTokenFinish(result: Gio.AsyncResult): boolean
    setAccessToken(accessToken: string): void
    setAuthUrl(tokenurl: string): void
    setClientId(clientId: string): void
    setClientSecret(clientSecret: string): void
    setExpirationDate(expirationDate: GLib.DateTime): void
    setRedirectUri(redirectUri: string): void
    setRefreshToken(refreshToken: string): void
    setTokenUrl(tokenurl: string): void

    // Own virtual methods of Rest-1.0.Rest.OAuth2Proxy

    parseAccessToken(payload: any, task: Gio.Task): void

    // Class property signals of Rest-1.0.Rest.OAuth2Proxy

    connect(sigName: "notify::access-token", callback: any): number
    on(sigName: "notify::access-token", callback: any): number
    once(sigName: "notify::access-token", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::access-token", ...args: any[]): void
    connect(sigName: "notify::auth-url", callback: any): number
    on(sigName: "notify::auth-url", callback: any): number
    once(sigName: "notify::auth-url", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::auth-url", ...args: any[]): void
    connect(sigName: "notify::client-id", callback: any): number
    on(sigName: "notify::client-id", callback: any): number
    once(sigName: "notify::client-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::client-id", ...args: any[]): void
    connect(sigName: "notify::client-secret", callback: any): number
    on(sigName: "notify::client-secret", callback: any): number
    once(sigName: "notify::client-secret", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::client-secret", ...args: any[]): void
    connect(sigName: "notify::expiration-date", callback: any): number
    on(sigName: "notify::expiration-date", callback: any): number
    once(sigName: "notify::expiration-date", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expiration-date", ...args: any[]): void
    connect(sigName: "notify::redirect-uri", callback: any): number
    on(sigName: "notify::redirect-uri", callback: any): number
    once(sigName: "notify::redirect-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::redirect-uri", ...args: any[]): void
    connect(sigName: "notify::refresh-token", callback: any): number
    on(sigName: "notify::refresh-token", callback: any): number
    once(sigName: "notify::refresh-token", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::refresh-token", ...args: any[]): void
    connect(sigName: "notify::token-url", callback: any): number
    on(sigName: "notify::token-url", callback: any): number
    once(sigName: "notify::token-url", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::token-url", ...args: any[]): void
    connect(sigName: "notify::binding-required", callback: any): number
    on(sigName: "notify::binding-required", callback: any): number
    once(sigName: "notify::binding-required", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::binding-required", ...args: any[]): void
    connect(sigName: "notify::disable-cookies", callback: any): number
    on(sigName: "notify::disable-cookies", callback: any): number
    once(sigName: "notify::disable-cookies", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::disable-cookies", ...args: any[]): void
    connect(sigName: "notify::password", callback: any): number
    on(sigName: "notify::password", callback: any): number
    once(sigName: "notify::password", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::ssl-ca-file", callback: any): number
    on(sigName: "notify::ssl-ca-file", callback: any): number
    once(sigName: "notify::ssl-ca-file", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ssl-ca-file", ...args: any[]): void
    connect(sigName: "notify::ssl-strict", callback: any): number
    on(sigName: "notify::ssl-strict", callback: any): number
    once(sigName: "notify::ssl-strict", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ssl-strict", ...args: any[]): void
    connect(sigName: "notify::url-format", callback: any): number
    on(sigName: "notify::url-format", callback: any): number
    once(sigName: "notify::url-format", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::url-format", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: any): number
    on(sigName: "notify::user-agent", callback: any): number
    once(sigName: "notify::user-agent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
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

export class OAuth2Proxy extends Proxy {

    // Own properties of Rest-1.0.Rest.OAuth2Proxy

    static name: string

    // Constructors of Rest-1.0.Rest.OAuth2Proxy

    constructor(config?: OAuth2Proxy.ConstructorProperties) 
    /**
     * Create a new #RestOAuth2Proxy.
     * @constructor 
     * @param authurl 
     * @param tokenurl 
     * @param redirecturl 
     * @param clientId 
     * @param clientSecret 
     * @param baseurl 
     */
    constructor(authurl: string, tokenurl: string, redirecturl: string, clientId: string, clientSecret: string, baseurl: string) 
    /**
     * Create a new #RestOAuth2Proxy.
     * @constructor 
     * @param authurl 
     * @param tokenurl 
     * @param redirecturl 
     * @param clientId 
     * @param clientSecret 
     * @param baseurl 
     */
    static new(authurl: string, tokenurl: string, redirecturl: string, clientId: string, clientSecret: string, baseurl: string): OAuth2Proxy

    // Overloads of new

    /**
     * Create a new #RestProxy for the specified endpoint `url_format,` using the
     * "GET" method.
     * 
     * Set `binding_required` to %TRUE if the URL contains string formatting
     * operations (for example "http://foo.com/%<!-- -->s".  These must be expanded
     * using rest_proxy_bind() before invoking the proxy.
     * @constructor 
     * @param urlFormat the endpoint URL
     * @param bindingRequired whether the URL needs to be bound before calling
     */
    static new(urlFormat: string, bindingRequired: boolean): Proxy
    _init(config?: OAuth2Proxy.ConstructorProperties): void
}

export module OAuth2ProxyCall {

    // Constructor properties interface

    export interface ConstructorProperties extends ProxyCall.ConstructorProperties {
    }

}

export interface OAuth2ProxyCall {

    // Own fields of Rest-1.0.Rest.OAuth2ProxyCall

    parentInstance: any

    // Class property signals of Rest-1.0.Rest.OAuth2ProxyCall

    connect(sigName: "notify::proxy", callback: any): number
    on(sigName: "notify::proxy", callback: any): number
    once(sigName: "notify::proxy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class OAuth2ProxyCall extends ProxyCall {

    // Own properties of Rest-1.0.Rest.OAuth2ProxyCall

    static name: string

    // Constructors of Rest-1.0.Rest.OAuth2ProxyCall

    constructor(config?: OAuth2ProxyCall.ConstructorProperties) 
    _init(config?: OAuth2ProxyCall.ConstructorProperties): void
}

export module Proxy {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Rest-1.0.Rest.Proxy

        bindingRequired?: boolean | null
        disableCookies?: boolean | null
        password?: string | null
        sslCaFile?: string | null
        sslStrict?: boolean | null
        urlFormat?: string | null
        userAgent?: string | null
        username?: string | null
    }

}

export interface Proxy {

    // Own properties of Rest-1.0.Rest.Proxy

    bindingRequired: boolean
    readonly disableCookies: boolean
    password: string
    sslCaFile: string
    sslStrict: boolean
    urlFormat: string
    userAgent: string
    username: string

    // Own fields of Rest-1.0.Rest.Proxy

    parentInstance: GObject.Object

    // Owm methods of Rest-1.0.Rest.Proxy

    /**
     * This method can be used to add specific features to the #SoupSession objects
     * that are used by librest for its HTTP connections. For example, if one needs
     * extensive control over the cookies which are used for the REST HTTP
     * communication, it's possible to get full access to libsoup cookie API by
     * using
     * 
     *   <programlisting>
     *   RestProxy *proxy = g_object_new(REST_TYPE_PROXY,
     *                                   "url-format", url,
     *                                   "disable-cookies", TRUE,
     *                                   NULL);
     *   SoupSessionFeature *cookie_jar = SOUP_SESSION_FEATURE(soup_cookie_jar_new ());
     *   rest_proxy_add_soup_feature(proxy, cookie_jar);
     *   </programlisting>
     * @param feature A #SoupSessionFeature
     */
    addSoupFeature(feature: Soup.SessionFeature): void
    getUserAgent(): string
    // Has conflict: newCall(): ProxyCall
    setUserAgent(userAgent: string): void

    // Own virtual methods of Rest-1.0.Rest.Proxy

    authenticate(auth: ProxyAuth, retrying: boolean): boolean
    /**
     * Create a new #RestProxyCall for making a call to the web service.  This call
     * is one-shot and should not be re-used for making multiple calls.
     * @virtual 
     */
    newCall(): ProxyCall

    // Class property signals of Rest-1.0.Rest.Proxy

    connect(sigName: "notify::binding-required", callback: any): number
    on(sigName: "notify::binding-required", callback: any): number
    once(sigName: "notify::binding-required", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::binding-required", ...args: any[]): void
    connect(sigName: "notify::disable-cookies", callback: any): number
    on(sigName: "notify::disable-cookies", callback: any): number
    once(sigName: "notify::disable-cookies", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::disable-cookies", ...args: any[]): void
    connect(sigName: "notify::password", callback: any): number
    on(sigName: "notify::password", callback: any): number
    once(sigName: "notify::password", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::ssl-ca-file", callback: any): number
    on(sigName: "notify::ssl-ca-file", callback: any): number
    once(sigName: "notify::ssl-ca-file", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ssl-ca-file", ...args: any[]): void
    connect(sigName: "notify::ssl-strict", callback: any): number
    on(sigName: "notify::ssl-strict", callback: any): number
    once(sigName: "notify::ssl-strict", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ssl-strict", ...args: any[]): void
    connect(sigName: "notify::url-format", callback: any): number
    on(sigName: "notify::url-format", callback: any): number
    once(sigName: "notify::url-format", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::url-format", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: any): number
    on(sigName: "notify::user-agent", callback: any): number
    once(sigName: "notify::user-agent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
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
 * #RestProxy has no publicly available members.
 * @class 
 */
export class Proxy extends GObject.Object {

    // Own properties of Rest-1.0.Rest.Proxy

    static name: string

    // Constructors of Rest-1.0.Rest.Proxy

    constructor(config?: Proxy.ConstructorProperties) 
    /**
     * Create a new #RestProxy for the specified endpoint `url_format,` using the
     * "GET" method.
     * 
     * Set `binding_required` to %TRUE if the URL contains string formatting
     * operations (for example "http://foo.com/%<!-- -->s".  These must be expanded
     * using rest_proxy_bind() before invoking the proxy.
     * @constructor 
     * @param urlFormat the endpoint URL
     * @param bindingRequired whether the URL needs to be bound before calling
     */
    constructor(urlFormat: string, bindingRequired: boolean) 
    /**
     * Create a new #RestProxy for the specified endpoint `url_format,` using the
     * "GET" method.
     * 
     * Set `binding_required` to %TRUE if the URL contains string formatting
     * operations (for example "http://foo.com/%<!-- -->s".  These must be expanded
     * using rest_proxy_bind() before invoking the proxy.
     * @constructor 
     * @param urlFormat the endpoint URL
     * @param bindingRequired whether the URL needs to be bound before calling
     */
    static new(urlFormat: string, bindingRequired: boolean): Proxy
    /**
     * Create a new #RestProxy for the specified endpoint `url_format,` using the
     * "GET" method.
     * 
     * Set `binding_required` to %TRUE if the URL contains string formatting
     * operations (for example "http://foo.com/%<!-- -->s".  These must be expanded
     * using rest_proxy_bind() before invoking the proxy.
     * @constructor 
     * @param urlFormat the endpoint URL
     * @param bindingRequired whether the URL needs to be bound before calling
     * @param username the username provided by the user or client
     * @param password the password provided by the user or client
     */
    static newWithAuthentication(urlFormat: string, bindingRequired: boolean, username: string, password: string): Proxy
    _init(config?: Proxy.ConstructorProperties): void
}

export module ProxyAuth {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ProxyAuth {

    // Own fields of Rest-1.0.Rest.ProxyAuth

    parent: GObject.Object
    priv: ProxyAuthPrivate

    // Owm methods of Rest-1.0.Rest.ProxyAuth

    /**
     * Cancel the authentication process
     * by cancelling the associated #SoupMessage.
     * It results in returning #GError REST_PROXY_ERROR_CANCELLED
     * to the function that requested the authentication.
     */
    cancel(): void
    /**
     * Pauses `auth`.
     * 
     * If `auth` is already paused, this function does not
     * do anything.
     */
    pause(): void
    /**
     * Unpauses a paused #RestProxyAuth instance.
     */
    unpause(): void

    // Class property signals of Rest-1.0.Rest.ProxyAuth

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * #RestProxyAuth has no publicly available members.
 * @class 
 */
export class ProxyAuth extends GObject.Object {

    // Own properties of Rest-1.0.Rest.ProxyAuth

    static name: string

    // Constructors of Rest-1.0.Rest.ProxyAuth

    constructor(config?: ProxyAuth.ConstructorProperties) 
    _init(config?: ProxyAuth.ConstructorProperties): void
}

export module ProxyCall {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Rest-1.0.Rest.ProxyCall

        proxy?: Proxy | null
    }

}

export interface ProxyCall {

    // Own properties of Rest-1.0.Rest.ProxyCall

    readonly proxy: Proxy

    // Own fields of Rest-1.0.Rest.ProxyCall

    parentInstance: GObject.Object

    // Owm methods of Rest-1.0.Rest.ProxyCall

    /**
     * Add a header called `header` with the value `value` to the call.  If a
     * header with this name already exists, the new value will replace the old.
     * @param header The name of the header to set
     * @param value The value of the header
     */
    addHeader(header: string, value: string): void
    /**
     * Add a query parameter called `param` with the string value `value` to the call.
     * If a parameter with this name already exists, the new value will replace the
     * old.
     * @param name The name of the parameter to set
     * @param value The value of the parameter
     */
    addParam(name: string, value: string): void
    /**
     * Add a query parameter `param` to the call.
     * If a parameter with this name already exists, the new value will replace the
     * old.
     * @param param A #RestParam
     */
    addParamFull(param: Param): void
    /**
     * Get the REST function that is going to be called on the proxy.
     */
    getFunction(): string
    /**
     * Get the HTTP method to use when making the call, for example GET or POST.
     */
    getMethod(): string
    /**
     * Get the parameters as a #RestParams of parameter names to values.  The
     * returned value is owned by the RestProxyCall instance and should not
     * be freed by the caller.
     */
    getParams(): Params
    /**
     * Get the return payload.
     */
    getPayload(): string
    /**
     * Get the length of the return payload.
     */
    getPayloadLength(): number
    getResponseHeaders(): GLib.HashTable
    /**
     * Get the HTTP status code for the call.
     */
    getStatusCode(): number
    /**
     * Get the human-readable HTTP status message for the call.
     */
    getStatusMessage(): string
    invokeAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    invokeFinish(result: Gio.AsyncResult): boolean
    /**
     * Get the value of the header called `header`.
     * @param header The header name
     */
    lookupHeader(header: string): string
    /**
     * Get the value of the parameter called `name`.
     * @param name The paramter name
     */
    lookupParam(name: string): Param | null
    /**
     * Get the string value of the header `header` or %NULL if that header is not
     * present or there are no headers.
     * @param header The name of the header to lookup.
     */
    lookupResponseHeader(header: string): string
    /**
     * Remove the header named `header` from the call.
     * @param header The header name
     */
    removeHeader(header: string): void
    /**
     * Remove the parameter named `name` from the call.
     * @param name The paramter name
     */
    removeParam(name: string): void
    // Has conflict: serializeParams(): [ /* returnType */ boolean, /* contentType */ string, /* content */ string, /* contentLen */ number ]
    /**
     * Set the REST "function" to call on the proxy.  This is appended to the URL,
     * so that for example a proxy with the URL
     * <literal>http://www.example.com/</literal> and the function
     * <literal>test</literal> would actually access the URL
     * <literal>http://www.example.com/test</literal>
     * @param function_ The function to call
     */
    setFunction(function_: string): void
    /**
     * Set the HTTP method to use when making the call, for example GET or POST.
     * @param method The HTTP method to use
     */
    setMethod(method: string): void
    /**
     * Synchronously invokes `call`. After this function has returned,
     * rest_proxy_call_get_payload() will return the result of this call.
     * 
     * Note that this will block an undefined amount of time, so
     * rest_proxy_call_invoke_async() is generally recommended.
     */
    sync(): boolean
    /**
     * Asynchronously invoke `call` but expect to have the callback invoked every time a
     * chunk of our request's body is written.
     * 
     * When the callback is invoked with the uploaded byte count equaling the message
     * byte count, the call has completed.
     * 
     * If `weak_object` is disposed during the call then this call will be
     * cancelled. If the call is cancelled then the callback will be invoked with
     * an error state.
     * 
     * You may unref the call after calling this function since there is an
     * internal reference, or you may unref in the callback.
     * @param callback a #RestProxyCallUploadCallback to invoke when a chunk   of data was uploaded
     * @param weakObject The #GObject to weakly reference and tie the lifecycle to
     */
    upload(callback: ProxyCallUploadCallback, weakObject: GObject.Object): boolean

    // Own virtual methods of Rest-1.0.Rest.ProxyCall

    prepare(): boolean
    /**
     * Invoker for a virtual method to serialize the parameters for this
     * #RestProxyCall.
     * @virtual 
     */
    serializeParams(): [ /* returnType */ boolean, /* contentType */ string, /* content */ string, /* contentLen */ number ]

    // Class property signals of Rest-1.0.Rest.ProxyCall

    connect(sigName: "notify::proxy", callback: any): number
    on(sigName: "notify::proxy", callback: any): number
    once(sigName: "notify::proxy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * #RestProxyCall has no publicly available members.
 * @class 
 */
export class ProxyCall extends GObject.Object {

    // Own properties of Rest-1.0.Rest.ProxyCall

    static name: string

    // Constructors of Rest-1.0.Rest.ProxyCall

    constructor(config?: ProxyCall.ConstructorProperties) 
    _init(config?: ProxyCall.ConstructorProperties): void
}

export module XmlParser {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface XmlParser {

    // Own fields of Rest-1.0.Rest.XmlParser

    parentInstance: GObject.Object

    // Owm methods of Rest-1.0.Rest.XmlParser

    /**
     * Parse the XML in `data,` and return a new #RestXmlNode.  If `data` is invalid
     * XML, %NULL is returned.
     * @param data the XML content to parse
     * @param len the length of `data,` or -1 if `data` is a nul-terminated string
     */
    parseFromData(data: string, len: number): XmlNode

    // Class property signals of Rest-1.0.Rest.XmlParser

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A Xml Parser for Rest Responses
 * @class 
 */
export class XmlParser extends GObject.Object {

    // Own properties of Rest-1.0.Rest.XmlParser

    static name: string

    // Constructors of Rest-1.0.Rest.XmlParser

    constructor(config?: XmlParser.ConstructorProperties) 
    /**
     * Create a new #RestXmlParser, for parsing XML documents.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #RestXmlParser, for parsing XML documents.
     * @constructor 
     */
    static new(): XmlParser
    _init(config?: XmlParser.ConstructorProperties): void
}

export interface OAuth2ProxyCallClass {

    // Own fields of Rest-1.0.Rest.OAuth2ProxyCallClass

    parentClass: ProxyCallClass
}

export abstract class OAuth2ProxyCallClass {

    // Own properties of Rest-1.0.Rest.OAuth2ProxyCallClass

    static name: string
}

export interface OAuth2ProxyClass {

    // Own fields of Rest-1.0.Rest.OAuth2ProxyClass

    parentClass: ProxyClass
    parseAccessToken: (self: OAuth2Proxy, payload: any, task: Gio.Task) => void
    padding: object[]
}

export abstract class OAuth2ProxyClass {

    // Own properties of Rest-1.0.Rest.OAuth2ProxyClass

    static name: string
}

export interface Param {

    // Owm methods of Rest-1.0.Rest.Param

    /**
     * Get the content of `param`.  The content should be treated as read-only and
     * not modified in any way.
     */
    getContent(): object | null
    /**
     * Get the length of the content of `param`.
     */
    getContentLength(): number
    /**
     * Get the MIME type of the parameter.  For example, basic strings have the MIME
     * type "text/plain".
     */
    getContentType(): string
    /**
     * Get the original file name of the parameter, if one is available.
     */
    getFileName(): string
    /**
     * Get the name of the parameter.
     */
    getName(): string
    /**
     * Determine if the parameter is a string value, i.e. the content type is "text/plain".
     */
    isString(): boolean
    /**
     * Increase the reference count on `param`.
     */
    ref(): Param
    /**
     * Decrease the reference count on `param,` destroying it if the reference count
     * reaches 0.
     */
    unref(): void
}

export class Param {

    // Own properties of Rest-1.0.Rest.Param

    static name: string

    // Constructors of Rest-1.0.Rest.Param

    /**
     * Create a new #RestParam called `name` with `length` bytes of `data` as the
     * value.  `content_type` is the type of the data as a MIME type, for example
     * "text/plain" for simple string parameters.
     * 
     * If the parameter is a file upload it can be passed as `filename`.
     * @constructor 
     * @param name the parameter name
     * @param use the #RestMemoryUse describing how the memory can be used
     * @param data a pointer to   the start of the data
     * @param contentType the content type of the data
     * @param filename the original filename, or %NULL
     */
    static newFull(name: string, use: MemoryUse, data: Uint8Array, contentType: string, filename: string | null): Param
    /**
     * A convience constructor to create a #RestParam from a given UTF-8 string.
     * The resulting #RestParam will have a content type of "text/plain".
     * @constructor 
     * @param name the parameter name
     * @param use the #RestMemoryUse describing how the memory can be used
     * @param string the parameter value
     */
    static newString(name: string, use: MemoryUse, string: string): Param
    /**
     * Create a new #RestParam called `name` with `length` bytes of `data` as the
     * value.  `content_type` is the type of the data as a MIME type, for example
     * "text/plain" for simple string parameters.
     * 
     * If the parameter is a file upload it can be passed as `filename`.
     * 
     * When the #RestParam is freed, it will call `owner_dnotify,` passing `owner` to
     * it. This allows you to do something like this:
     * 
     * |[
     * GMappedFile *map = g_mapped_file_new (filename, FALSE, &error);
     * RestParam *param = rest_param_new_with_owner ("media",
     *                                               g_mapped_file_get_contents (map),
     *                                               g_mapped_file_get_length (map),
     *                                               "image/jpeg",
     *                                               filename,
     *                                               map,
     *                                               (GDestroyNotify)g_mapped_file_unref);
     * ```
     * 
     * @constructor 
     * @param name the parameter name
     * @param data a pointer to   the start of the data
     * @param contentType the content type of the data
     * @param filename the original filename, or %NULL
     * @param owner pointer to an object that owns `data`
     * @param ownerDnotify a function to free/unref `owner` when   the buffer is freed
     */
    static newWithOwner(name: string, data: Uint8Array, contentType: string, filename: string | null, owner: object | null, ownerDnotify: GLib.DestroyNotify | null): Param
}

export interface Params {

    // Owm methods of Rest-1.0.Rest.Params

    /**
     * Add `param` to `params`.
     * @param param a valid #RestParam
     */
    add(param: Param): void
    /**
     * Checks if the parameters are all simple strings (have a content type of
     * "text/plain").
     */
    areStrings(): boolean
    /**
     * Create a new #GHashTable which contains the name and value of all string
     * (content type of text/plain) parameters.
     * 
     * The values are owned by the #RestParams, so don't destroy the #RestParams
     * before the hash table.
     */
    asStringHashTable(): GLib.HashTable
    /**
     * Makes a deep copy of a #RestParams.
     */
    copy(): Params
    /**
     * Return the #RestParam called `name,` or %NULL if it doesn't exist.
     * @param name a parameter name
     */
    get(name: string): Param | null
    /**
     * Increments the reference count of `self` by one.
     */
    ref(): Params
    /**
     * Remove the #RestParam called `name`.
     * @param name a parameter name
     */
    remove(name: string): void
    /**
     * Decrements the reference count of `self` by one, freeing the structure when
     * the reference count reaches zero.
     */
    unref(): void
}

export class Params {

    // Own properties of Rest-1.0.Rest.Params

    static name: string

    // Constructors of Rest-1.0.Rest.Params

    /**
     * Create a new #RestParams.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #RestParams.
     * @constructor 
     */
    static new(): Params
}

export interface ParamsIter {

    // Owm methods of Rest-1.0.Rest.ParamsIter

    /**
     * Initialize a parameter iterator over `params`. Modifying `params` after calling
     * this function invalidates the returned iterator.
     * |[
     * RestParamsIter iter;
     * const char *name;
     * RestParam *param;
     * 
     * rest_params_iter_init (&iter, params);
     * while (rest_params_iter_next (&iter, &name, &param)) {
     *   /&ast; do something with name and param &ast;/
     * }
     * ```
     * 
     * @param params a valid #RestParams
     */
    init(params: Params): void
    /**
     * Advances `iter` and retrieves the name and/or parameter that are now pointed
     * at as a result of this advancement.  If FALSE is returned, `name` and `param`
     * are not set and the iterator becomes invalid.
     */
    next(): [ /* returnType */ boolean, /* name */ string, /* param */ Param ]
}

export class ParamsIter {

    // Own properties of Rest-1.0.Rest.ParamsIter

    static name: string
}

export interface PkceCodeChallenge {

    // Owm methods of Rest-1.0.Rest.PkceCodeChallenge

    /**
     * Makes a deep copy of a #RestPkceCodeChallenge.
     */
    copy(): PkceCodeChallenge
    /**
     * Frees a #RestPkceCodeChallenge allocated using rest_pkce_code_challenge_new()
     * or rest_pkce_code_challenge_copy().
     */
    free(): void
    /**
     * Returns the Code Challenge for the Pkce verification.
     */
    getChallenge(): string
    /**
     * Returns the Code Verifier for the Pkce verification.
     */
    getVerifier(): string
}

/**
 * In order to play a Pkce Code Verification during a OAuth2 authorization
 * you need this structure which handles the algorithmic part.
 * @record 
 */
export class PkceCodeChallenge {

    // Own properties of Rest-1.0.Rest.PkceCodeChallenge

    static name: string

    // Constructors of Rest-1.0.Rest.PkceCodeChallenge

    /**
     * Creates a new #RestPkceCodeChallenge.
     * @constructor 
     */
    static newRandom(): PkceCodeChallenge
}

export interface ProxyAuthClass {

    // Own fields of Rest-1.0.Rest.ProxyAuthClass

    parentClass: GObject.ObjectClass
}

export abstract class ProxyAuthClass {

    // Own properties of Rest-1.0.Rest.ProxyAuthClass

    static name: string
}

export interface ProxyAuthPrivate {
}

export class ProxyAuthPrivate {

    // Own properties of Rest-1.0.Rest.ProxyAuthPrivate

    static name: string
}

export interface ProxyCallClass {

    // Own fields of Rest-1.0.Rest.ProxyCallClass

    prepare: (call: ProxyCall) => boolean
    serializeParams: (call: ProxyCall) => [ /* returnType */ boolean, /* contentType */ string, /* content */ string, /* contentLen */ number ]
}

/**
 * Class structure for #RestProxyCall for subclasses to implement specialised
 * behaviour.
 * @record 
 */
export abstract class ProxyCallClass {

    // Own properties of Rest-1.0.Rest.ProxyCallClass

    static name: string
}

export interface ProxyClass {

    // Own fields of Rest-1.0.Rest.ProxyClass

    newCall: (proxy: Proxy) => ProxyCall
    authenticate: (proxy: Proxy, auth: ProxyAuth, retrying: boolean) => boolean
}

/**
 * Class structure for #RestProxy for subclasses to implement specialised
 * behaviour.
 * 
 * Typically subclasses will override `new_call` to construct a subclass of
 * #RestProxyCall.
 * @record 
 */
export abstract class ProxyClass {

    // Own properties of Rest-1.0.Rest.ProxyClass

    static name: string
}

export interface XmlNode {

    // Own fields of Rest-1.0.Rest.XmlNode

    /**
     * the name of the element
     * @field 
     */
    name: string
    /**
     * the textual content of the element
     * @field 
     */
    content: string
    /**
     * a #GHashTable of string name to #RestXmlNode for the children of
     * the element.
     * @field 
     */
    children: GLib.HashTable
    /**
     * a #GHashTable of string name to string values for the attributes of
     * the element.
     * @field 
     */
    attrs: GLib.HashTable
    /**
     * the sibling #RestXmlNode with the same name
     * @field 
     */
    next: XmlNode

    // Owm methods of Rest-1.0.Rest.XmlNode

    /**
     * Adds attribute to the given node.
     * @param attribute name of the attribute
     * @param value value to set attribute to
     */
    addAttr(attribute: string, value: string): void
    /**
     * Adds a new node to the given parent node; to create the top-level node,
     * parent should be %NULL.
     * @param tag name of the child node
     */
    addChild(tag: string): XmlNode
    /**
     * Searches for the first child node of `start` named `tag`.
     * @param tag the name of a node
     */
    find(tag: string): XmlNode
    /**
     * Get the value of the attribute named `attr_name,` or %NULL if it doesn't
     * exist.
     * @param attrName the name of an attribute
     */
    getAttr(attrName: string): string
    /**
     * Recursively outputs given node and it's children.
     */
    print(): string
    /**
     * Sets content for the given node.
     * @param value the content
     */
    setContent(value: string): void
}

/**
 * The #RestXmlNode contains a parsed XmlNode for easy consumption
 * @record 
 */
export class XmlNode {

    // Own properties of Rest-1.0.Rest.XmlNode

    static name: string
}

export interface XmlParserClass {

    // Own fields of Rest-1.0.Rest.XmlParserClass

    parentClass: GObject.ObjectClass
}

export abstract class XmlParserClass {

    // Own properties of Rest-1.0.Rest.XmlParserClass

    static name: string
}
