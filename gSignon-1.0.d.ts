
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * gSignon-1.0
 */

import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

/**
 * Possible Signon errors.
 */
export enum Error {
    /**
     * Catch-all for errors not distinguished by another code.
     */
    UNKNOWN,
    /**
     * Signon daemon internal error.
     */
    INTERNAL_SERVER,
    /**
     * Error communicating with Signon daemon.
     */
    INTERNAL_COMMUNICATION,
    /**
     * The operation cannot be performed due to
     * insufficient client permissions.
     */
    PERMISSION_DENIED,
    /**
     * The method with this name was not found.
     */
    METHOD_NOT_KNOWN,
    /**
     * The service is temporarily unavailable.
     */
    SERVICE_NOT_AVAILABLE,
    /**
     * Parameters for the query are invalid.
     */
    INVALID_QUERY,
    /**
     * The requested method is not available.
     */
    METHOD_NOT_AVAILABLE,
    /**
     * The identity mathching the #SignonIdentity
     * was not found on the service.
     */
    IDENTITY_NOT_FOUND,
    /**
     * Storing credentials failed.
     */
    STORE_FAILED,
    /**
     * Removing credentials failed.
     */
    REMOVE_FAILED,
    /**
     * Signing out failed.
     */
    SIGNOUT_FAILED,
    /**
     * Identity operation was canceled
     * by the user.
     */
    IDENTITY_OPERATION_CANCELED,
    /**
     * Query failed.
     */
    CREDENTIALS_NOT_AVAILABLE,
    /**
     * Trying to remove non-existent reference.
     */
    REFERENCE_NOT_FOUND,
    /**
     * The requested mechanism in not
     * available.
     */
    MECHANISM_NOT_AVAILABLE,
    /**
     * The SessionData does not contain the necessary
     * information.
     */
    MISSING_DATA,
    /**
     * The supplied credentials are invalid for
     * the mechanism implementation.
     */
    INVALID_CREDENTIALS,
    /**
     * Authorization failed.
     */
    NOT_AUTHORIZED,
    /**
     * An operation method has been called in an
     * incorrect state.
     */
    WRONG_STATE,
    /**
     * The operation is not supported by the
     * mechanism implementation.
     */
    OPERATION_NOT_SUPPORTED,
    /**
     * No network connection.
     */
    NO_CONNECTION,
    /**
     * Network connection failed.
     */
    NETWORK,
    /**
     * SSL connection failed.
     */
    SSL,
    /**
     * Casting SessionData into subclass failed.
     */
    RUNTIME,
    /**
     * Challenge was canceled.
     */
    SESSION_CANCELED,
    /**
     * Challenge timed out.
     */
    TIMED_OUT,
    /**
     * User interaction dialog failed.
     */
    USER_INTERACTION,
    /**
     * Temporary failure in authentication.
     */
    OPERATION_FAILED,
    /**
     * `deprecated:` Failure during data
     * encryption/decryption.
     */
    ENCRYPTION_FAILED,
    /**
     * User declined Terms of Service.
     */
    TOS_NOT_ACCEPTED,
    /**
     * User requested password reset sequence.
     */
    FORGOT_PASSWORD,
    /**
     * Method or mechanism not
     * allowed for this identity.
     */
    METHOD_OR_MECHANISM_NOT_ALLOWED,
    /**
     * Date/time incorrect on device.
     */
    INCORRECT_DATE,
    /**
     * Placeholder to rearrange enumeration - userspace
     * specific.
     */
    USER_ERROR,
}
/**
 * UI policy for the signon process, passed to the UI plugin.
 */
export enum SessionDataUiPolicy {
    /**
     * The plugin can decide when to show UI.
     */
    DEFAULT,
    /**
     * Force the user to enter the password.
     */
    REQUEST_PASSWORD,
    /**
     * No UI elements will be shown to the user.
     */
    NO_USER_INTERACTION,
    /**
     * UI elements can be shown to the user only when
     * CAPTCHA-like security measures are required.
     */
    VALIDATION,
}
/**
 * Identity types used in #SignonIdentityInfo.
 * @bitfield 
 */
export enum IdentityType {
    /**
     * an identity that is not an app, web or network
     */
    OTHER,
    /**
     * an application identity
     */
    APP,
    /**
     * a web identity
     */
    WEB,
    /**
     * a network server identity
     */
    NETWORK,
}
/**
 * Caption for the UI dialog.
 */
export const SESSION_DATA_CAPTION: string
/**
 * Proxy.
 */
export const SESSION_DATA_PROXY: string
/**
 * Realm.
 */
export const SESSION_DATA_REALM: string
/**
 * Requests the signon plugin to obtain a new token (boolean).
 */
export const SESSION_DATA_RENEW_TOKEN: string
/**
 * Secret.
 */
export const SESSION_DATA_SECRET: string
/**
 * Network timeout, in milliseconds (uint32).
 */
export const SESSION_DATA_TIMEOUT: string
/**
 * Policy for the signon process.
 */
export const SESSION_DATA_UI_POLICY: string
/**
 * Username.
 */
export const SESSION_DATA_USERNAME: string
/**
 * Platform-specific window id (for dialog transiency) - uint32.
 */
export const SESSION_DATA_WINDOW_ID: string
/**
 * Creates and returns a domain for gSSO errors.
 */
export function errorQuark(): GLib.Quark
/**
 * Builds a #SignonSecurityContext item from a GVariant of type "(ss)".
 * @param variant GVariant item with a #SignonSecurityContext construct.
 */
export function securityContextDeconstructVariant(variant: GLib.Variant): SecurityContext
/**
 * Builds a GVariant of type "a(ss)" from a GList of #SignonSecurityContext
 * items.
 * @param list #GList item of #SignonSecurityContext.
 */
export function securityContextListBuildVariant(list: SecurityContext[]): GLib.Variant
/**
 * Builds a GList of #SignonSecurityContext items from a GVariant of type
 * "a(ss)".
 * @param variant GVariant item with a list of security context tuples.
 */
export function securityContextListDeconstructVariant(variant: GLib.Variant): SecurityContext[]
/**
 * This callback is invoked when the authentication plugin delivers the result
 * of the signon_auth_session_process() operation.
 * @callback 
 * @param self the #SignonAuthSession.
 * @param sessionData a dictionary with the response.
 * @param error a #GError if an error occurred, %NULL otherwise.
 */
export interface AuthSessionProcessCb {
    (self: AuthSession, sessionData: GLib.HashTable, error: GLib.Error): void
}
/**
 * Callback to be passed to signon_auth_session_query_available_mechanisms().
 * @callback 
 * @param self the #SignonAuthSession.
 * @param mechanisms list of available mechanisms.
 * @param error a #GError if an error occurred, %NULL otherwise.
 */
export interface AuthSessionQueryAvailableMechanismsCb {
    (self: AuthSession, mechanisms: string[], error: GLib.Error): void
}
/**
 * Callback to be passed to signon_auth_service_clear().
 * @callback 
 * @param authService the #SignonAuthService.
 * @param success TRUE if clear succeeded.
 * @param error a #GError if an error occurred, %NULL otherwise.
 */
export interface ClearCb {
    (authService: AuthService, success: boolean, error: GLib.Error): void
}
/**
 * Callback to be passed to signon_identity_query_info().
 * @callback 
 * @param self the #SignonIdentity.
 * @param info the #SignonIdentityInfo for `self`.
 * @param error a #GError if an error occurred, or %NULL otherwise.
 */
export interface IdentityInfoCb {
    (self: Identity, info: IdentityInfo, error: GLib.Error): void
}
/**
 * Callback to be passed to signon_identity_get_auth_session().
 * @callback 
 * @param self the #SignonAuthSession.
 * @param error a #GError if an error occurred, or %NULL otherwise.
 * @param connection a #GDBusConnection for the session.
 * @param busName a D-Bus bus name for the session.
 * @param objectPath a D-Bus object path for the session.
 */
export interface IdentitySessionReadyCb {
    (self: AuthSession, error: GLib.Error, connection: Gio.DBusConnection, busName: string, objectPath: string): void
}
/**
 * Callback to be passed to signon_identity_store_credentials_with_args() or
 * signon_identity_store_credentials_with_info().
 * @callback 
 * @param self the #SignonIdentity.
 * @param id the numeric ID of the identity in the database.
 * @param error a #GError if an error occurred, or %NULL otherwise.
 */
export interface IdentityStoreCredentialsCb {
    (self: Identity, id: number, error: GLib.Error): void
}
/**
 * Callback to be passed to signon_identity_verify_user().
 * @callback 
 * @param self the #SignonIdentity.
 * @param valid whether the verification succeeded.
 * @param error a #GError if an error occurred, or %NULL otherwise.
 */
export interface IdentityVerifyCb {
    (self: Identity, valid: boolean, error: GLib.Error): void
}
/**
 * Generic callback to be passed to several #SignonIdentity methods.
 * @callback 
 * @param self the #SignonIdentity.
 * @param error a #GError if an error occurred, or %NULL otherwise.
 */
export interface IdentityVoidCb {
    (self: Identity, error: GLib.Error): void
}
/**
 * Callback to be passed to signon_auth_service_query_identities().
 * @callback 
 * @param authService the #SignonAuthService.
 * @param identities #GList based list of #SignonIdentityInfo.
 * @param error a #GError if an error occurred, %NULL otherwise.
 */
export interface QueryIdentitiesCb {
    (authService: AuthService, identities: Identity[], error: GLib.Error): void
}
/**
 * Callback to be passed to signon_auth_service_query_mechanisms().
 * @callback 
 * @param authService the #SignonAuthService.
 * @param method the authentication method being inspected.
 * @param mechanisms list of available mechanisms.
 * @param error a #GError if an error occurred, %NULL otherwise.
 */
export interface QueryMechanismCb {
    (authService: AuthService, method: string, mechanisms: string[], error: GLib.Error): void
}
/**
 * Callback to be passed to signon_auth_service_query_methods().
 * @callback 
 * @param authService the #SignonAuthService.
 * @param methods list of available methods.
 * @param error a #GError if an error occurred, %NULL otherwise.
 */
export interface QueryMethodsCb {
    (authService: AuthService, methods: string[], error: GLib.Error): void
}
export module AuthService {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface AuthService {

    // Own fields of gSignon-1.0.gSignon.AuthService

    parentInstance: GObject.Object
    priv: AuthServicePrivate

    // Owm methods of gSignon-1.0.gSignon.AuthService

    /**
     * Clears / wipes out all stored data.
     * @param cb callback to be invoked.
     */
    clear(cb: ClearCb): void
    /**
     * Query available identities, possibly applying a filter.
     * 
     * `filter` is a #GHashTable that contains filter conditions in the form of
     * string keys and #GVariant values. Currently the following keys are supported:
     * 
     * - "Owner". The value should be a #SignonSecurityContext (use
     * signon_security_context_build_variant() to create a #GVariant).
     * Identites whose owner doesn't match will be filtered out. This key has
     * effect only if the requesting application is a keychain application as determined
     * by #GSignondAccessControlManager.
     * - "Type". The value should be a #SignonIdentityType.
     * - "Caption". The value is a string, and only those identites whose caption
     * begins with the supplied value will be returned.
     * 
     * The meaning of `application_context` is explained in #SignonSecurityContext.
     * It is used by #GSignondAccessControlManager to determine if the requesting
     * application is a keychain application. If it is, then all identites will be
     * returned (subject to "Owner" key in `filter)`. If it's not, then only the
     * identites which the application owns will be returned (but "Type" and "Caption"
     * can still be set in the `filter)`.
     * @param filter filter variant dictionary based on #GHashTable.
     * @param applicationContext application security context, can be %NULL.
     * @param cb callback to be invoked.
     */
    queryIdentities(filter: GLib.HashTable, applicationContext: string, cb: QueryIdentitiesCb): void
    /**
     * Lists all the available mechanisms for an authentication method.
     * @param method the name of the method whose mechanisms must be retrieved.
     * @param cb callback to be invoked.
     */
    queryMechanisms(method: string, cb: QueryMechanismCb): void
    /**
     * Lists all the available authentication methods.
     * @param cb callback to be invoked.
     */
    queryMethods(cb: QueryMethodsCb): void

    // Class property signals of gSignon-1.0.gSignon.AuthService

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque struct. Use the accessor functions below.
 * @class 
 */
export class AuthService extends GObject.Object {

    // Own properties of gSignon-1.0.gSignon.AuthService

    static name: string

    // Constructors of gSignon-1.0.gSignon.AuthService

    constructor(config?: AuthService.ConstructorProperties) 
    /**
     * Create a new #SignonAuthService.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #SignonAuthService.
     * @constructor 
     */
    static new(): AuthService
    _init(config?: AuthService.ConstructorProperties): void
}

export module AuthSession {

    // Signal callback interfaces

    /**
     * Signal callback interface for `state-changed`
     */
    export interface StateChangedSignalCallback {
        (state: number, message: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of gSignon-1.0.gSignon.AuthSession

        identity?: Identity | null
    }

}

export interface AuthSession {

    // Own properties of gSignon-1.0.gSignon.AuthSession

    readonly identity: Identity

    // Owm methods of gSignon-1.0.gSignon.AuthSession

    /**
     * Cancel the authentication session.
     */
    cancel(): void
    /**
     * Get the current authentication method.
     */
    getMethod(): string
    /**
     * Performs one step of the authentication process. If the #SignonIdentity that
     * this session belongs to contains a username and a password, they will be also
     * passed to the authentication plugin, otherwise they should be set directly in
     * `session_data`.
     * `session_data` should be used to add additional authentication parameters to the
     * session, or to override the parameters otherwise taken from the identity.
     * @param sessionData a dictionary of parameters.
     * @param mechanism the authentication mechanism to be used.
     * @param cb a callback which will be called with the result.
     */
    process(sessionData: GLib.HashTable, mechanism: string, cb: AuthSessionProcessCb): void
    /**
     * Performs one step of the authentication process.
     * `session_data` should be used to add additional authentication parameters to the
     * session.
     * 
     * What specific parameters should be used can be found from authentication plugins'
     * documentation (look for parameters that are expected in gsignond_plugin_request_initial()
     * for the first step, and parameters that are expected in gsignond_plugin_request() for
     * the subsequent steps). See, for example, #GSignondPasswordPlugin and #GSignondDigestPlugin.
     * 
     * If the #SignonIdentity that this session belongs to contains a username and a password,
     * the daemon will pass them to the authentication plugin, otherwise they should be set directly in
     * `session_data`. The daemon also passes a list of identity's allowed realms to the plugin,
     * and they cannot be overriden.
     * @param sessionData a dictionary of parameters.
     * @param mechanism the authentication mechanism to be used.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a callback which will be called when the authentication reply is available.
     */
    processAsync(sessionData: GLib.Variant, mechanism: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Collect the result of the signon_auth_session_process_async() operation.
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to signon_auth_session_process_async().
     */
    processFinish(res: Gio.AsyncResult): GLib.Variant
    /**
     * Queries the mechanisms available for this authentication session. The result
     * will be the intersection between `wanted_mechanisms` and the mechanisms
     * supported by the authentication plugin (and allowed by the #SignonIdentity that this
     * session belongs to).
     * @param wantedMechanisms a %NULL-terminated list of mechanisms supported by the client.
     * @param cb a callback which will be called with the result.
     */
    queryAvailableMechanisms(wantedMechanisms: string, cb: AuthSessionQueryAvailableMechanismsCb): void

    // Own signals of gSignon-1.0.gSignon.AuthSession

    connect(sigName: "state-changed", callback: AuthSession.StateChangedSignalCallback): number
    on(sigName: "state-changed", callback: AuthSession.StateChangedSignalCallback): number
    once(sigName: "state-changed", callback: AuthSession.StateChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "state-changed", message: string, ...args: any[]): void

    // Class property signals of gSignon-1.0.gSignon.AuthSession

    connect(sigName: "notify::identity", callback: any): number
    on(sigName: "notify::identity", callback: any): number
    once(sigName: "notify::identity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::identity", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque struct. Use the accessor functions below.
 * @class 
 */
export class AuthSession extends GObject.Object {

    // Own properties of gSignon-1.0.gSignon.AuthSession

    static name: string

    // Constructors of gSignon-1.0.gSignon.AuthSession

    constructor(config?: AuthSession.ConstructorProperties) 
    /**
     * Creates a new #SignonAuthSession, which can be used to authenticate using
     * the specified method.
     * @constructor 
     * @param id the id of the #SignonIdentity to be used. Can be 0, if this session is not bound to any stored identity.
     * @param methodName the name of the authentication method to be used.
     */
    constructor(id: number, methodName: string) 
    /**
     * Creates a new #SignonAuthSession, which can be used to authenticate using
     * the specified method.
     * @constructor 
     * @param id the id of the #SignonIdentity to be used. Can be 0, if this session is not bound to any stored identity.
     * @param methodName the name of the authentication method to be used.
     */
    static new(id: number, methodName: string): AuthSession
    /**
     * Creates a new #SignonAuthSession, which can be used to authenticate using
     * the specified method.
     * @constructor 
     * @param identity #SignonIdentity parent object.
     * @param methodName the name of the authentication method to be used.
     */
    static newForIdentity(identity: Identity, methodName: string): AuthSession
    _init(config?: AuthSession.ConstructorProperties): void
}

export module Identity {

    // Signal callback interfaces

    /**
     * Signal callback interface for `removed`
     */
    export interface RemovedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `signout`
     */
    export interface SignoutSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of gSignon-1.0.gSignon.Identity

        appCtx?: string | null
        id?: number | null
    }

}

export interface Identity {

    // Own properties of gSignon-1.0.gSignon.Identity

    appCtx: string
    id: number

    // Owm methods of gSignon-1.0.gSignon.Identity

    /**
     * Adds named reference to identity. Not currently supported by gSSO.
     * @param reference reference to be added
     * @param cb callback
     */
    addReference(reference: string, cb: IdentityReferenceAddedCb): void
    /**
     * Creates an authentication session for this identity. If the identity has been
     * retrieved from the database, the authentication method must be one of those
     * listed in signon_identity_info_get_methods(), otherwise it can be any method
     * supported by gSSO.
     * @param method authentication method.
     */
    createSession(method: string): AuthSession
    /**
     * Obtain a remote object for a local session object. Should not be used by
     * applications.
     * @param session the #SignonAuthSession object to get the remote object for.
     * @param method method name for the session.
     * @param cb completion callback.
     */
    getAuthSession(session: AuthSession, method: string, cb: IdentitySessionReadyCb): void
    /**
     * Get the most recent error that occurred on `identity`.
     */
    getLastError(): GLib.Error
    /**
     * Fetches the #SignonIdentityInfo data associated with this
     * identity.
     * @param cb callback.
     */
    queryInfo(cb: IdentityInfoCb): void
    /**
     * Removes the corresponding credentials record from the database.
     * @param cb callback to be called when the operation has completed.
     */
    remove(cb: IdentityRemovedCb): void
    /**
     * Removes named reference from identity. Not currently supported by gSSO.
     * @param reference reference to be removed
     * @param cb callback
     */
    removeReference(reference: string, cb: IdentityReferenceRemovedCb): void
    /**
     * Requests user to re-enter his credentials.
     * @param message message to be displayed to the user.
     * @param cb callback to be called when the operation has completed.
     */
    requestCredentialsUpdate(message: string, cb: IdentityCredentialsUpdatedCb): void
    /**
     * Asks signond to close all authentication sessions for this
     * identity, and to remove any stored secrets associated with it (password and
     * authentication tokens).
     * @param cb callback.
     */
    signout(cb: IdentitySignedOutCb): void
    /**
     * Stores the given data into the identity. See above for the meaning
     * of the specific fields.
     * @param username username.
     * @param secret secret.
     * @param storeSecret whether gSSO should save the password in secret storage.
     * @param methods allowed methods.
     * @param caption caption.
     * @param realms allowed realms.
     * @param owner owner.
     * @param accessControlList access control list.
     * @param type the type of the identity.
     * @param cb callback.
     */
    storeCredentialsWithArgs(username: string | null, secret: string | null, storeSecret: boolean, methods: GLib.HashTable, caption: string | null, realms: string | null, owner: SecurityContext | null, accessControlList: SecurityContext[] | null, type: IdentityType, cb: IdentityStoreCredentialsCb): void
    /**
     * Stores the data contained in `info` into the identity record in the database.
     * See above for the detailed discussion of the meaning of various fields and
     * their defaults.
     * @param info the #SignonIdentityInfo data to store.
     * @param cb callback.
     */
    storeCredentialsWithInfo(info: IdentityInfo, cb: IdentityStoreCredentialsCb): void
    /**
     * Asks user to enter his credentials to verify the current user.
     * @param args optional extra arguments (vardict) controlling SignOn UI.
     * @param cb callback.
     */
    verifyUser(args: GLib.Variant, cb: IdentityVerifyCb): void

    // Own signals of gSignon-1.0.gSignon.Identity

    connect(sigName: "removed", callback: Identity.RemovedSignalCallback): number
    on(sigName: "removed", callback: Identity.RemovedSignalCallback): number
    once(sigName: "removed", callback: Identity.RemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "removed", ...args: any[]): void
    connect(sigName: "signout", callback: Identity.SignoutSignalCallback): number
    on(sigName: "signout", callback: Identity.SignoutSignalCallback): number
    once(sigName: "signout", callback: Identity.SignoutSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "signout", ...args: any[]): void

    // Class property signals of gSignon-1.0.gSignon.Identity

    connect(sigName: "notify::app-ctx", callback: any): number
    on(sigName: "notify::app-ctx", callback: any): number
    once(sigName: "notify::app-ctx", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::app-ctx", ...args: any[]): void
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

export class Identity extends GObject.Object {

    // Own properties of gSignon-1.0.gSignon.Identity

    static name: string

    // Constructors of gSignon-1.0.gSignon.Identity

    constructor(config?: Identity.ConstructorProperties) 
    /**
     * Construct a new, empty, identity object.
     * This is essentially equivalent to calling signon_identity_new_with_context()
     * and passing %NULL as the application context.
     * @constructor 
     */
    constructor() 
    /**
     * Construct a new, empty, identity object.
     * This is essentially equivalent to calling signon_identity_new_with_context()
     * and passing %NULL as the application context.
     * @constructor 
     */
    static new(): Identity
    /**
     * Construct an identity object associated with an existing identity
     * record.
     * This is essentially equivalent to calling
     * signon_identity_new_with_context_from_db() and passing %NULL as the
     * application context.
     * 
     * Applications can determine the `id` either by enumerating the identities with
     * signon_auth_service_query_identities() (if they're the owner of the identity)
     * or via other means (such as the system's accounts service, or an application
     * configuration).
     * @constructor 
     * @param id identity ID.
     */
    static newFromDb(id: number): Identity
    /**
     * Construct a new, empty, identity object. See #SignonSecurityContext for a
     * discussion of `application_context` contents. `application_context` is used to set the identity's owner
     * if the identity is stored to the database with signon_identity_store_credentials_with_args()
     * or signon_identity_store_credentials_with_info().
     * @constructor 
     * @param applicationContext application security context, can be %NULL.
     */
    static newWithContext(applicationContext: string): Identity
    /**
     * Construct an identity object associated with an existing identity
     * record. See #SignonSecurityContext for a discussion of `application_context` contents.
     * Together with the system context it is used to determine by the gSSO daemon
     * if the application can access the identity (the application needs to be either the
     * identity's owner or to be present on the ACL).
     * 
     * Applications can determine the `id` either by enumerating the identities with
     * signon_auth_service_query_identities() (if they're the owner of the identity)
     * or via other means (such as the system's accounts service, or an application
     * configuration).
     * @constructor 
     * @param id identity ID.
     * @param applicationContext application security context, can be %NULL.
     */
    static newWithContextFromDb(id: number, applicationContext: string): Identity
    _init(config?: Identity.ConstructorProperties): void
}

export interface AuthServiceClass {

    // Own fields of gSignon-1.0.gSignon.AuthServiceClass

    /**
     * a reference to the parent class
     * @field 
     */
    parentClass: GObject.ObjectClass
}

/**
 * Opaque struct. Use the accessor functions below.
 * @record 
 */
export abstract class AuthServiceClass {

    // Own properties of gSignon-1.0.gSignon.AuthServiceClass

    static name: string
}

export interface AuthServicePrivate {
}

export class AuthServicePrivate {

    // Own properties of gSignon-1.0.gSignon.AuthServicePrivate

    static name: string
}

export interface AuthSessionClass {

    // Own fields of gSignon-1.0.gSignon.AuthSessionClass

    /**
     * reference to the parent class
     * @field 
     */
    parent: GObject.ObjectClass
}

/**
 * Opaque struct. Use the accessor functions below.
 * @record 
 */
export abstract class AuthSessionClass {

    // Own properties of gSignon-1.0.gSignon.AuthSessionClass

    static name: string
}

export interface AuthSessionPrivate {
}

export class AuthSessionPrivate {

    // Own properties of gSignon-1.0.gSignon.AuthSessionPrivate

    static name: string
}

export interface IdentityClass {

    // Own fields of gSignon-1.0.gSignon.IdentityClass

    parentClass: GObject.ObjectClass
}

export abstract class IdentityClass {

    // Own properties of gSignon-1.0.gSignon.IdentityClass

    static name: string
}

export interface IdentityInfo {

    // Owm methods of gSignon-1.0.gSignon.IdentityInfo

    /**
     * Appends a new #SignonSecurityContext item to the access control list.
     * @param securityContext a security context to be appended.
     */
    accessControlListAppend(securityContext: SecurityContext): void
    /**
     * Get a newly-allocated copy of `info`.
     */
    copy(): IdentityInfo
    /**
     * Destroys the given #SignonIdentityInfo item.
     */
    free(): void
    /**
     * Get an access control list associated with an identity.
     */
    getAccessControlList(): SecurityContext[]
    /**
     * Get the display name of `info`.
     */
    getCaption(): string
    /**
     * Get the numeric identity ID of `info`.
     */
    getId(): number
    /**
     * Get the type of the identity.
     */
    getIdentityType(): IdentityType
    /**
     * Get a hash table of the methods and mechanisms of `info`. See
     * signon_identity_info_set_methods().
     */
    getMethods(): GLib.HashTable
    /**
     * Get identity owner's security context.
     */
    getOwner(): SecurityContext
    /**
     * Get an array of the allowed realms of `info`.
     */
    getRealms(): string[]
    /**
     * Get whether the secret of `info` should be stored by gSSO in the secret database.
     */
    getStoringSecret(): boolean
    /**
     * Get the username associated with an identity.
     */
    getUsername(): string
    /**
     * Set authentication methods that are allowed to be used with this identity.
     * 
     * This function will just increment reference count of hash table, so
     * it should be constructed with #g_hash_table_new_full.
     * @param methods methods.
     */
    ownMethods(methods: GLib.HashTable): void
    /**
     * Remove `method` from the list of allowed authentication methods.
     * @param method an authentication method.
     */
    removeMethod(method: string): void
    /**
     * Set an access control list associated with an identity.
     * @param accessControlList a list of ACL security contexts.
     */
    setAccessControlList(accessControlList: SecurityContext[]): void
    /**
     * Sets the caption (display name) for the identity.
     * @param caption the caption.
     */
    setCaption(caption: string): void
    /**
     * Specifies the type of this identity.
     * @param type the type of the identity.
     */
    setIdentityType(type: IdentityType): void
    /**
     * Adds a method to the list of allowed authentication methods.
     * @param method an authentication method.
     * @param mechanisms a %NULL-terminated list of mechanisms.
     */
    setMethod(method: string, mechanisms: string[]): void
    /**
     * Set authentication methods that are allowed to be used with this identity.
     * @param methods methods.
     */
    setMethods(methods: GLib.HashTable): void
    /**
     * Set identity owner's security context.
     * @param owner a security context of owner.
     */
    setOwner(owner: SecurityContext): void
    /**
     * Set identity owner's security context.
     * @param systemContext owner's system context.
     * @param applicationContext owner's application context.
     */
    setOwnerFromValues(systemContext: string, applicationContext: string): void
    /**
     * Specify what realms this identity can be used in.
     * @param realms a %NULL-terminated list of realms.
     */
    setRealms(realms: string[]): void
    /**
     * Sets the secret (password) for the identity, and whether the gSSO daemon
     * should remember it.
     * @param secret the secret.
     * @param storeSecret whether signond should store the secret in its DB.
     */
    setSecret(secret: string, storeSecret: boolean): void
    /**
     * Sets the username for the identity.
     * @param username the username.
     */
    setUsername(username: string): void
}

/**
 * Opaque struct. Use the accessor functions below.
 * @record 
 */
export class IdentityInfo {

    // Own properties of gSignon-1.0.gSignon.IdentityInfo

    static name: string

    // Constructors of gSignon-1.0.gSignon.IdentityInfo

    /**
     * Creates a new #SignonIdentityInfo item.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #SignonIdentityInfo item.
     * @constructor 
     */
    static new(): IdentityInfo
}

export interface IdentityPrivate {
}

export class IdentityPrivate {

    // Own properties of gSignon-1.0.gSignon.IdentityPrivate

    static name: string
}

export interface SecurityContext {

    // Own fields of gSignon-1.0.gSignon.SecurityContext

    /**
     * system context, such as SMACK-label, MSSF token or just a
     *           binary path.
     * @field 
     */
    sysCtx: string
    /**
     * application context, such as a script or a web page.
     * @field 
     */
    appCtx: string

    // Owm methods of gSignon-1.0.gSignon.SecurityContext

    /**
     * Build a GVariant of type "(ss)" from a #SignonSecurityContext item.
     */
    buildVariant(): GLib.Variant
    /**
     * Copy a security context item.
     */
    copy(): SecurityContext
    /**
     * Frees a security context item.
     */
    free(): void
    /**
     * Get the application context part (such as script name or a web page) of
     * the #SignonSecurityContext.
     */
    getApplicationContext(): string
    /**
     * Get the system context part (such as SMACK label or MSSF token) of the
     * #SignonSecurityContext.
     */
    getSystemContext(): string
    /**
     * Sets the application context part (such as a script name or a web page) of
     * the #SignonSecurityContext.
     * @param applicationContext application security context.
     */
    setApplicationContext(applicationContext: string): void
    /**
     * Sets the system context part (such as SMACK label or MSSF token) of the
     * #SignonSecurityContext.
     * @param systemContext system security context.
     */
    setSystemContext(systemContext: string): void
}

/**
 * Security context descriptor used for access control checks.
 * @record 
 */
export class SecurityContext {

    // Own properties of gSignon-1.0.gSignon.SecurityContext

    static name: string

    // Constructors of gSignon-1.0.gSignon.SecurityContext

    /**
     * Allocates a new security context item.
     * @constructor 
     */
    constructor() 
    /**
     * Allocates a new security context item.
     * @constructor 
     */
    static new(): SecurityContext
    /**
     * Allocates and initializes a new security context item.
     * @constructor 
     * @param systemContext system security context (such as SMACK/MSSF label/token).
     * @param applicationContext application security context (such as a script name).
     */
    static newFromValues(systemContext: string, applicationContext: string): SecurityContext
    /**
     * Builds a #SignonSecurityContext item from a GVariant of type "(ss)".
     * @param variant GVariant item with a #SignonSecurityContext construct.
     */
    static deconstructVariant(variant: GLib.Variant): SecurityContext
    /**
     * Builds a GVariant of type "a(ss)" from a GList of #SignonSecurityContext
     * items.
     * @param list #GList item of #SignonSecurityContext.
     */
    static listBuildVariant(list: SecurityContext[]): GLib.Variant
    /**
     * Builds a GList of #SignonSecurityContext items from a GVariant of type
     * "a(ss)".
     * @param variant GVariant item with a list of security context tuples.
     */
    static listDeconstructVariant(variant: GLib.Variant): SecurityContext[]
}

export interface _AuthSession {

    // Own fields of gSignon-1.0.gSignon._AuthSession

    parent: GObject.Object
    priv: AuthSessionPrivate
}

export class _AuthSession {

    // Own properties of gSignon-1.0.gSignon._AuthSession

    static name: string
}

export interface _Identity {

    // Own fields of gSignon-1.0.gSignon._Identity

    parentInstance: GObject.Object
    priv: IdentityPrivate
}

/**
 * Opaque struct. Use the accessor functions below.
 * @record 
 */
export class _Identity {

    // Own properties of gSignon-1.0.gSignon._Identity

    static name: string
}

    export type AuthSessionQueryAvailableMethodsCb = AuthSessionQueryAvailableMechanismsCb
    export type IdentityCredentialsUpdatedCb = IdentityVoidCb
    export type IdentityReferenceAddedCb = IdentityVoidCb
    export type IdentityReferenceRemovedCb = IdentityVoidCb
    export type IdentityRemovedCb = IdentityVoidCb
    export type IdentitySignedOutCb = IdentityVoidCb