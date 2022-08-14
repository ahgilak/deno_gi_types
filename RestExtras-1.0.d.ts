
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * RestExtras-1.0
 */

import type * as Soup from './Soup-3.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Rest from './Rest-1.0.js';

export interface YoutubeProxyUploadCallback {
    (proxy: YoutubeProxy, payload: string, total: number, uploaded: number, error: GLib.Error, weakObject: GObject.Object): void
}
export module FlickrProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Rest.Proxy.ConstructorProperties {

        // Own constructor properties of RestExtras-1.0.RestExtras.FlickrProxy

        apiKey?: string | null
        sharedSecret?: string | null
        token?: string | null
    }

}

export interface FlickrProxy {

    // Own properties of RestExtras-1.0.RestExtras.FlickrProxy

    readonly apiKey: string
    readonly sharedSecret: string
    token: string

    // Own fields of RestExtras-1.0.RestExtras.FlickrProxy

    parentInstance: any

    // Owm methods of RestExtras-1.0.RestExtras.FlickrProxy

    buildLoginUrl(frob: string, perms: string): string
    /**
     * Get the API key.
     */
    getApiKey(): string
    /**
     * Get the shared secret for authentication.
     */
    getSharedSecret(): string
    /**
     * Get the current token.
     */
    getToken(): string
    /**
     * Create a new #RestProxyCall that can be used for uploading.
     * 
     * See http://www.flickr.com/services/api/upload.api.html for details on
     * uploading to Flickr.
     */
    newUpload(): FlickrProxyCall
    /**
     * Create a new #RestProxyCall that can be used for uploading.  `filename` will
     * be set as the "photo" parameter for you, avoiding you from having to open the
     * file and determine the MIME type.
     * 
     * Note that this function can in theory block.
     * 
     * See http://www.flickr.com/services/api/upload.api.html for details on
     * uploading to Flickr.
     * @param filename the file to upload
     */
    newUploadForFile(filename: string): FlickrProxyCall
    /**
     * Set the token.
     * @param token the access token
     */
    setToken(token: string): void
    sign(params: GLib.HashTable): string

    // Class property signals of RestExtras-1.0.RestExtras.FlickrProxy

    connect(sigName: "notify::api-key", callback: any): number
    on(sigName: "notify::api-key", callback: any): number
    once(sigName: "notify::api-key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::api-key", ...args: any[]): void
    connect(sigName: "notify::shared-secret", callback: any): number
    on(sigName: "notify::shared-secret", callback: any): number
    once(sigName: "notify::shared-secret", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::shared-secret", ...args: any[]): void
    connect(sigName: "notify::token", callback: any): number
    on(sigName: "notify::token", callback: any): number
    once(sigName: "notify::token", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::token", ...args: any[]): void
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

export class FlickrProxy extends Rest.Proxy {

    // Own properties of RestExtras-1.0.RestExtras.FlickrProxy

    static name: string

    // Constructors of RestExtras-1.0.RestExtras.FlickrProxy

    constructor(config?: FlickrProxy.ConstructorProperties) 
    constructor(apiKey: string, sharedSecret: string) 
    static new(apiKey: string, sharedSecret: string): FlickrProxy

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
    static new(urlFormat: string, bindingRequired: boolean): Rest.Proxy
    static newWithToken(apiKey: string, sharedSecret: string, token: string): FlickrProxy
    _init(config?: FlickrProxy.ConstructorProperties): void
    /**
     * Examines the Flickr response and if it not a successful reply, set `error` and
     * return FALSE.
     * @param root The root node of a parsed Flickr response
     */
    static isSuccessful(root: Rest.XmlNode): boolean
}

export module FlickrProxyCall {

    // Constructor properties interface

    export interface ConstructorProperties extends Rest.ProxyCall.ConstructorProperties {

        // Own constructor properties of RestExtras-1.0.RestExtras.FlickrProxyCall

        /**
         * Set if the call should be sent to the photo upload endpoint and not the
         * general-purpose endpoint.
         */
        upload?: boolean | null
    }

}

export interface FlickrProxyCall {

    // Own properties of RestExtras-1.0.RestExtras.FlickrProxyCall

    // Has conflict: readonly upload: boolean

    // Own fields of RestExtras-1.0.RestExtras.FlickrProxyCall

    parentInstance: any

    // Class property signals of RestExtras-1.0.RestExtras.FlickrProxyCall

    connect(sigName: "notify::upload", callback: any): number
    on(sigName: "notify::upload", callback: any): number
    once(sigName: "notify::upload", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::upload", ...args: any[]): void
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

export class FlickrProxyCall extends Rest.ProxyCall {

    // Own properties of RestExtras-1.0.RestExtras.FlickrProxyCall

    static name: string

    // Constructors of RestExtras-1.0.RestExtras.FlickrProxyCall

    constructor(config?: FlickrProxyCall.ConstructorProperties) 
    _init(config?: FlickrProxyCall.ConstructorProperties): void
}

export module LastfmProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Rest.Proxy.ConstructorProperties {

        // Own constructor properties of RestExtras-1.0.RestExtras.LastfmProxy

        apiKey?: string | null
        secret?: string | null
        sessionKey?: string | null
    }

}

export interface LastfmProxy {

    // Own properties of RestExtras-1.0.RestExtras.LastfmProxy

    readonly apiKey: string
    readonly secret: string
    sessionKey: string

    // Own fields of RestExtras-1.0.RestExtras.LastfmProxy

    parentInstance: any

    // Owm methods of RestExtras-1.0.RestExtras.LastfmProxy

    buildLoginUrl(token: string): string
    /**
     * Get the API key.
     */
    getApiKey(): string
    /**
     * Get the secret for authentication.
     */
    getSecret(): string
    /**
     * Get the current session key.
     */
    getSessionKey(): string
    /**
     * Set the session key.
     * @param sessionKey the access session_key
     */
    setSessionKey(sessionKey: string): void
    sign(params: GLib.HashTable): string

    // Class property signals of RestExtras-1.0.RestExtras.LastfmProxy

    connect(sigName: "notify::api-key", callback: any): number
    on(sigName: "notify::api-key", callback: any): number
    once(sigName: "notify::api-key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::api-key", ...args: any[]): void
    connect(sigName: "notify::secret", callback: any): number
    on(sigName: "notify::secret", callback: any): number
    once(sigName: "notify::secret", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::secret", ...args: any[]): void
    connect(sigName: "notify::session-key", callback: any): number
    on(sigName: "notify::session-key", callback: any): number
    once(sigName: "notify::session-key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::session-key", ...args: any[]): void
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

export class LastfmProxy extends Rest.Proxy {

    // Own properties of RestExtras-1.0.RestExtras.LastfmProxy

    static name: string

    // Constructors of RestExtras-1.0.RestExtras.LastfmProxy

    constructor(config?: LastfmProxy.ConstructorProperties) 
    constructor(apiKey: string, secret: string) 
    static new(apiKey: string, secret: string): LastfmProxy

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
    static new(urlFormat: string, bindingRequired: boolean): Rest.Proxy
    static newWithSession(apiKey: string, secret: string, sessionKey: string): LastfmProxy
    _init(config?: LastfmProxy.ConstructorProperties): void
    /**
     * Examines the Lastfm response and if it not a successful reply, set `error` and
     * return FALSE.
     * @param root The root node of a parsed Lastfm response
     */
    static isSuccessful(root: Rest.XmlNode): boolean
}

export module LastfmProxyCall {

    // Constructor properties interface

    export interface ConstructorProperties extends Rest.ProxyCall.ConstructorProperties {
    }

}

export interface LastfmProxyCall {

    // Own fields of RestExtras-1.0.RestExtras.LastfmProxyCall

    parentInstance: any

    // Class property signals of RestExtras-1.0.RestExtras.LastfmProxyCall

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
 * #LastfmProxyCall has no publicly available members.
 * @class 
 */
export class LastfmProxyCall extends Rest.ProxyCall {

    // Own properties of RestExtras-1.0.RestExtras.LastfmProxyCall

    static name: string

    // Constructors of RestExtras-1.0.RestExtras.LastfmProxyCall

    constructor(config?: LastfmProxyCall.ConstructorProperties) 
    _init(config?: LastfmProxyCall.ConstructorProperties): void
}

export module YoutubeProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Rest.Proxy.ConstructorProperties {

        // Own constructor properties of RestExtras-1.0.RestExtras.YoutubeProxy

        developerKey?: string | null
        userAuth?: string | null
    }

}

export interface YoutubeProxy {

    // Own properties of RestExtras-1.0.RestExtras.YoutubeProxy

    readonly developerKey: string
    userAuth: string

    // Own fields of RestExtras-1.0.RestExtras.YoutubeProxy

    parentInstance: any

    // Owm methods of RestExtras-1.0.RestExtras.YoutubeProxy

    setUserAuth(userAuth: string): void
    /**
     * Upload a file.
     * @param filename filename
     * @param fields fields
     * @param incomplete incomplete
     * @param callback callback to invoke upon completion
     * @param weakObject an object instance used to tie the life cycle of the proxy to
     */
    uploadAsync(filename: string, fields: GLib.HashTable, incomplete: boolean, callback: YoutubeProxyUploadCallback, weakObject: GObject.Object): boolean

    // Class property signals of RestExtras-1.0.RestExtras.YoutubeProxy

    connect(sigName: "notify::developer-key", callback: any): number
    on(sigName: "notify::developer-key", callback: any): number
    once(sigName: "notify::developer-key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::developer-key", ...args: any[]): void
    connect(sigName: "notify::user-auth", callback: any): number
    on(sigName: "notify::user-auth", callback: any): number
    once(sigName: "notify::user-auth", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user-auth", ...args: any[]): void
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

export class YoutubeProxy extends Rest.Proxy {

    // Own properties of RestExtras-1.0.RestExtras.YoutubeProxy

    static name: string

    // Constructors of RestExtras-1.0.RestExtras.YoutubeProxy

    constructor(config?: YoutubeProxy.ConstructorProperties) 
    constructor(developerKey: string) 
    static new(developerKey: string): YoutubeProxy

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
    static new(urlFormat: string, bindingRequired: boolean): Rest.Proxy
    static newWithAuth(developerKey: string, userAuth: string): YoutubeProxy
    _init(config?: YoutubeProxy.ConstructorProperties): void
}

export interface FlickrProxyCallClass {

    // Own fields of RestExtras-1.0.RestExtras.FlickrProxyCallClass

    parentClass: Rest.ProxyCallClass
}

export abstract class FlickrProxyCallClass {

    // Own properties of RestExtras-1.0.RestExtras.FlickrProxyCallClass

    static name: string
}

export interface FlickrProxyClass {

    // Own fields of RestExtras-1.0.RestExtras.FlickrProxyClass

    parentClass: Rest.ProxyClass
}

export abstract class FlickrProxyClass {

    // Own properties of RestExtras-1.0.RestExtras.FlickrProxyClass

    static name: string
}

export interface LastfmProxyCallClass {

    // Own fields of RestExtras-1.0.RestExtras.LastfmProxyCallClass

    parentClass: Rest.ProxyCallClass
}

export abstract class LastfmProxyCallClass {

    // Own properties of RestExtras-1.0.RestExtras.LastfmProxyCallClass

    static name: string
}

export interface LastfmProxyClass {

    // Own fields of RestExtras-1.0.RestExtras.LastfmProxyClass

    parentClass: Rest.ProxyClass
}

export abstract class LastfmProxyClass {

    // Own properties of RestExtras-1.0.RestExtras.LastfmProxyClass

    static name: string
}

export interface YoutubeProxyClass {

    // Own fields of RestExtras-1.0.RestExtras.YoutubeProxyClass

    parentClass: Rest.ProxyClass
}

export abstract class YoutubeProxyClass {

    // Own properties of RestExtras-1.0.RestExtras.YoutubeProxyClass

    static name: string
}
